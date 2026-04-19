/// <reference types="vite/client" />
import type { OrcidProfile } from "./orcidApi";

const EDGE_FUNCTION_URL = import.meta.env.VITE_GEMINI_EDGE_FUNCTION_URL ?? "";

const STORAGE_KEY = "hci-capstone:gemini-enrich-cache";

export interface EnrichedProfile {
  orcidId: string;
  inferredSkills: string[];
  inferredInterests: string[];
  inferredProjects: string[];
  inferredReasons: string[];
  inferredAvailability: string;
  inferredOrgPreference: string[];
  summary: string;
}

const enrichCache = new Map<string, { data: EnrichedProfile; expiresAt: number }>();
const ENRICH_TTL  = 24 * 60 * 60 * 1000;

let enrichChain = Promise.resolve<void>(undefined);

function readStoredEntry(orcidId: string): EnrichedProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, EnrichedProfile>;
    return parsed[orcidId] ?? null;
  } catch {
    return null;
  }
}

function persistEntry(entry: EnrichedProfile): void {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) as Record<string, EnrichedProfile> : {};
    parsed[entry.orcidId] = entry;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  } catch {
    // ignore
  }
}

function buildPrompt(profile: OrcidProfile): string {
  const name = [profile.name.givenNames, profile.name.familyName].filter(Boolean).join(" ");
  const affiliations = profile.affiliations
    .slice(0, 4)
    .map((a) => `${a.role ?? "Role unknown"} at ${a.organization}${a.startYear ? ` (${a.startYear}–${a.endYear ?? "present"})` : ""}`)
    .join("; ");
  const works = profile.works
    .slice(0, 8)
    .map((w) => `"${w.title}"${w.journalTitle ? ` in ${w.journalTitle}` : ""}${w.year ? ` (${w.year})` : ""}`)
    .join("; ");

  return `
You are an expert research-network analyst. Analyse the ORCID profile below and return a single JSON object — no markdown, no explanation, just raw JSON.

PROFILE
Name: ${name}
Bio: ${profile.biography ?? "none"}
Keywords: ${profile.keywords.join(", ") || "none"}
Affiliations: ${affiliations || "none"}
Publications/works: ${works || "none"}

Return this exact shape (all arrays, strings — never null):
{
  "inferredSkills": [],
  "inferredInterests": [],
  "inferredProjects": [],
  "inferredReasons": [],
  "inferredAvailability": "",
  "inferredOrgPreference": [],
  "summary": ""
}
`.trim();
}

async function doEnrich(profile: OrcidProfile): Promise<EnrichedProfile> {
  const res = await fetch(EDGE_FUNCTION_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: buildPrompt(profile) }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Edge function error ${res.status}: ${text}`);
  }

  const parsed = await res.json();

  return {
    orcidId:               profile.orcidId,
    inferredSkills:        parsed.inferredSkills        ?? [],
    inferredInterests:     parsed.inferredInterests     ?? [],
    inferredProjects:      parsed.inferredProjects      ?? [],
    inferredReasons:       parsed.inferredReasons       ?? [],
    inferredAvailability:  parsed.inferredAvailability  ?? "",
    inferredOrgPreference: parsed.inferredOrgPreference ?? [],
    summary:               parsed.summary               ?? "",
  };
}

export async function enrichOrcidProfile(
  profile: OrcidProfile,
): Promise<EnrichedProfile | null> {
  if (!EDGE_FUNCTION_URL) return null;

  const cached = enrichCache.get(profile.orcidId);
  if (cached && Date.now() < cached.expiresAt) return cached.data;

  const stored = readStoredEntry(profile.orcidId);
  if (stored) {
    enrichCache.set(profile.orcidId, { data: stored, expiresAt: Number.MAX_SAFE_INTEGER });
    return stored;
  }

  return new Promise<EnrichedProfile | null>((resolve) => {
    enrichChain = enrichChain.then(async () => {
      try {
        const result = await doEnrich(profile);
        enrichCache.set(profile.orcidId, { data: result, expiresAt: Date.now() + ENRICH_TTL });
        persistEntry(result);
        resolve(result);
      } catch (err) {
        console.warn("[geminiEnrich] enrichment failed for", profile.orcidId, err);
        resolve(null);
      }
    });
  });
}
