/**
 * Vertex AI / Gemini enrichment service
 *
 * Uses Google service account JWT auth via the Web Crypto API (no external
 * dependencies). Enrichment calls are serialised one-at-a-time so we never
 * blow past Gemini quota. Results are cached for 24 h.
 *
 * Env vars (set in .env):
 *   VITE_GOOGLE_PROJECT_ID
 *   VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   VITE_GOOGLE_PRIVATE_KEY   (full PEM, newlines as \n)
 *   VITE_GOOGLE_LOCATION      (default: us-central1)
 *   VITE_GEMINI_MODEL         (default: gemini-2.0-flash)
 */

import type { OrcidProfile } from "./orcidApi";

// ─── Config ──────────────────────────────────────────────────────────────────

const PROJECT_ID  = import.meta.env.VITE_GOOGLE_PROJECT_ID ?? "";
const SA_EMAIL    = import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "";
const RAW_PEM     = import.meta.env.VITE_GOOGLE_PRIVATE_KEY ?? "";
const LOCATION    = import.meta.env.VITE_GOOGLE_LOCATION ?? "us-central1";
const MODEL       = import.meta.env.VITE_GEMINI_MODEL ?? "gemini-2.0-flash";

// Vite stores \n as a literal backslash-n — restore real newlines
const PRIVATE_KEY_PEM = RAW_PEM.replace(/\\n/g, "\n");

const API_HOST =
  LOCATION === "global"
    ? "https://aiplatform.googleapis.com"
    : `https://${LOCATION}-aiplatform.googleapis.com`;

const VERTEX_ENDPOINT =
  `${API_HOST}/v1/projects/${PROJECT_ID}` +
  `/locations/${LOCATION}/publishers/google/models/${MODEL}:generateContent`;

const TOKEN_AUDIENCE = "https://oauth2.googleapis.com/token";
const TOKEN_SCOPE    = "https://www.googleapis.com/auth/cloud-platform";
const STORAGE_KEY    = "hci-capstone:gemini-enrich-cache";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface EnrichedProfile {
  orcidId: string;
  inferredSkills: string[];
  inferredInterests: string[];
  inferredProjects: string[];
  inferredReasons: string[];       // collaboration intent
  inferredAvailability: string;
  inferredOrgPreference: string[];
  summary: string;
}

// ─── Token cache ──────────────────────────────────────────────────────────────

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

// ─── Enrichment cache (24 h) ─────────────────────────────────────────────────

const enrichCache = new Map<string, { data: EnrichedProfile; expiresAt: number }>();
const ENRICH_TTL  = 24 * 60 * 60 * 1000;

// ─── Serial queue ─────────────────────────────────────────────────────────────
// One Gemini call at a time — keeps us well within quota for a prototype.

let enrichChain = Promise.resolve<void>(undefined);

function readStoredEntry(orcidId: string): EnrichedProfile | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Record<string, EnrichedProfile>;
    const entry = parsed[orcidId];
    return entry ?? null;
  } catch (err) {
    console.warn("[geminiEnrich] failed to read persisted cache", err);
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
  } catch (err) {
    console.warn("[geminiEnrich] failed to persist cache", err);
  }
}

// ─── Web Crypto JWT helpers ───────────────────────────────────────────────────

function b64url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function b64urlStr(str: string): string {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function importPrivateKey(pem: string): Promise<CryptoKey> {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");
  const der = Uint8Array.from(atob(body), (c) => c.charCodeAt(0));
  return crypto.subtle.importKey(
    "pkcs8",
    der.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function buildJwt(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header  = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: SA_EMAIL,
    scope: TOKEN_SCOPE,
    aud: TOKEN_AUDIENCE,
    exp: now + 3600,
    iat: now,
  };

  const signingInput = `${b64urlStr(JSON.stringify(header))}.${b64urlStr(JSON.stringify(payload))}`;
  const key          = await importPrivateKey(PRIVATE_KEY_PEM);
  const sig          = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signingInput),
  );

  return `${signingInput}.${b64url(sig)}`;
}

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt) return cachedToken;

  const jwt = await buildJwt();
  const res = await fetch(TOKEN_AUDIENCE, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google token error ${res.status}: ${text}`);
  }

  const data = await res.json();
  cachedToken    = data.access_token as string;
  tokenExpiresAt = Date.now() + (data.expires_in as number) * 1000 - 60_000;
  return cachedToken;
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

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
  "inferredSkills": [],          // 4–7 specific technical or research skills evident from the profile
  "inferredInterests": [],       // 3–6 research areas or clinical topics
  "inferredProjects": [],        // 2–5 notable past projects/papers as short plain-English titles
  "inferredReasons": [],         // 1–3 likely collaboration intents, e.g. "Research collaboration", "Offer expertise / advising"
  "inferredAvailability": "",    // one of: "Actively seeking", "Open to opportunities", "Selective", "Limited"
  "inferredOrgPreference": [],   // 1–3 of: "Academic Medical Center","Hospital System","Research Institute","Startup / Industry","Nonprofit / NGO","Government / VA","University / Academia","Any setting"
  "summary": ""                  // 1–2 sentence professional summary, third person
}
`.trim();
}

// ─── Core call ────────────────────────────────────────────────────────────────

async function doEnrich(profile: OrcidProfile): Promise<EnrichedProfile> {
  const token = await getAccessToken();

  const res = await fetch(VERTEX_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: buildPrompt(profile) }] }],
      generationConfig: {
        temperature: 0.2,       // low temperature → consistent structured output
        maxOutputTokens: 512,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini error ${res.status}: ${text}`);
  }

  const data  = await res.json();
  const text  = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
  const parsed = JSON.parse(text);

  return {
    orcidId:              profile.orcidId,
    inferredSkills:       parsed.inferredSkills       ?? [],
    inferredInterests:    parsed.inferredInterests     ?? [],
    inferredProjects:     parsed.inferredProjects      ?? [],
    inferredReasons:      parsed.inferredReasons       ?? [],
    inferredAvailability: parsed.inferredAvailability  ?? "",
    inferredOrgPreference:parsed.inferredOrgPreference ?? [],
    summary:              parsed.summary               ?? "",
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Enrich an ORCID profile with Gemini-inferred fields.
 * Returns null silently if credentials are missing or the call fails,
 * so cards gracefully fall back to raw ORCID data.
 */
export async function enrichOrcidProfile(
  profile: OrcidProfile,
): Promise<EnrichedProfile | null> {
  // Skip if credentials aren't configured yet
  if (!PROJECT_ID || !SA_EMAIL || !PRIVATE_KEY_PEM.includes("BEGIN PRIVATE KEY")) {
    return null;
  }

  // Return from cache if fresh
  const cached = enrichCache.get(profile.orcidId);
  if (cached && Date.now() < cached.expiresAt) return cached.data;

  const stored = readStoredEntry(profile.orcidId);
  if (stored) {
    enrichCache.set(profile.orcidId, {
      data: stored,
      expiresAt: Number.MAX_SAFE_INTEGER,
    });
    return stored;
  }

  // Serialise onto the queue — one Gemini call at a time
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
