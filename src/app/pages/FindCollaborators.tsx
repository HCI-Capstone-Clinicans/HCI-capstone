import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import {
  Search, SlidersHorizontal, UserCircle2,
  Loader2, X, ExternalLink, ChevronDown, ChevronUp, Info, Lock,
} from "lucide-react";
import { ContactModal } from "../components/ContactModal";
import DiscoverMap from "./DiscoverMap";
import { useAuth } from "../context/AuthContext";
import {
  searchOrcid,
  fetchOrcidProfile,
  type OrcidSearchResult,
  type OrcidProfile,
} from "../services/orcidApi";
import { enrichOrcidProfile, type EnrichedProfile } from "../services/geminiEnrich";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ActiveFilters {
  role: string[];
  interests: string[];
  skills: string[];
  location: string[];
  // Below are UI-only — not yet queryable via ORCID
  reasons: string[];
  availability: string[];
  preferredOrgType: string[];
}

const EMPTY_FILTERS: ActiveFilters = {
  role: [], interests: [], skills: [], location: [],
  reasons: [], availability: [], preferredOrgType: [],
};

// ─── ORCID-queryable filter options ──────────────────────────────────────────
// These map directly to ORCID Lucene query fields.
// Unavailable categories (reasons, availability, preferredOrgType) are noted in
// the FilterPanel and do not affect the query.

const FILTER_OPTIONS = {
  role: [
    "Cardiologist", "Oncologist", "Surgeon", "Neurologist", "Pediatrician",
    "Physician", "Nurse Practitioner", "Researcher", "Professor",
    "Engineer", "Designer", "Data Scientist",
  ],
  interests: [
    "Cardiology", "Oncology", "Neurology", "Pediatrics", "Mental health",
    "AI in healthcare", "Medical devices", "Patient experience",
    "Human-centered design", "User research", "Rehabilitation",
    "Clinical informatics", "Biomedical engineering",
  ],
  skills: [
    "Clinical research", "UX design", "Machine learning", "Data analysis",
    "Software development", "Grant writing", "Trial design",
    "Stakeholder engagement", "Service design", "Prototyping",
  ],
  location: [
    "Cleveland Clinic", "University Hospitals", "Johns Hopkins",
    "Mayo Clinic", "Harvard Medical School", "Stanford Medicine",
    "UPMC", "MetroHealth", "Case Western Reserve University",
  ],
};

// ─── Heuristic alias map ──────────────────────────────────────────────────────
// Maps UI display labels → one or more ORCID keyword terms.
// ORCID only supports: keyword:, affiliation-org-name:, given-names:,
// family-name:, text: (full-text). There is NO title: field for employment
// title — all role/interest/skill terms must go through keyword:.

const TERM_ALIASES: Record<string, string[]> = {
  // Roles
  "Cardiologist":         ["cardiologist", "cardiology"],
  "Oncologist":           ["oncologist", "oncology"],
  "Surgeon":              ["surgeon", "surgery"],
  "Neurologist":          ["neurologist", "neurology"],
  "Pediatrician":         ["pediatrician", "pediatrics"],
  "Physician":            ["physician"],
  "Nurse Practitioner":   ["nurse practitioner", "nursing"],
  "Researcher":           ["researcher"],
  "Professor":            ["professor"],
  "Engineer":             ["engineer", "engineering"],
  "Designer":             ["designer", "design"],
  "Data Scientist":       ["data scientist", "data science"],
  // Interests
  "Cardiology":           ["cardiology"],
  "Oncology":             ["oncology"],
  "Neurology":            ["neurology"],
  "Pediatrics":           ["pediatrics"],
  "Mental health":        ["mental health", "psychiatry"],
  "AI in healthcare":     ["artificial intelligence", "machine learning", "clinical AI"],
  "Medical devices":      ["medical devices", "medical device"],
  "Patient experience":   ["patient experience", "patient outcomes"],
  "Human-centered design":["human-centered design", "user experience"],
  "User research":        ["user research", "usability"],
  "Rehabilitation":       ["rehabilitation"],
  "Clinical informatics": ["clinical informatics", "health informatics"],
  "Biomedical engineering":["biomedical engineering"],
  // Skills
  "Clinical research":    ["clinical research", "clinical trial"],
  "UX design":            ["UX", "user experience design"],
  "Machine learning":     ["machine learning", "deep learning"],
  "Data analysis":        ["data analysis", "data analytics"],
  "Software development": ["software development", "software engineering"],
  "Grant writing":        ["grant writing"],
  "Trial design":         ["clinical trial", "trial design"],
  "Stakeholder engagement":["stakeholder engagement"],
  "Service design":       ["service design"],
  "Prototyping":          ["prototyping"],
};

function resolveTerms(label: string): string[] {
  return TERM_ALIASES[label] ?? [label.toLowerCase()];
}

function toKeywordClause(term: string): string {
  return term.includes(" ") ? `keyword:"${term}"` : `keyword:${term}`;
}

// ─── Query builder ────────────────────────────────────────────────────────────

function buildOrcidQuery(text: string, filters: ActiveFilters): string {
  const parts: string[] = [];

  // Free-text — passed verbatim (ORCID full-text search)
  if (text.trim()) parts.push(text.trim());

  // Role + Interests + Skills all expand through TERM_ALIASES → keyword: field
  // (ORCID has no employment-title field; keyword: is the correct mapping)
  const allLabels = [...filters.role, ...filters.interests, ...filters.skills];
  if (allLabels.length > 0) {
    const expanded = [...new Set(allLabels.flatMap(resolveTerms))];
    const clause = expanded.map(toKeywordClause).join(" OR ");
    parts.push(expanded.length === 1 ? clause : `(${clause})`);
  }

  // Location → affiliation-org-name: (exact institution name, quoted)
  if (filters.location.length > 0) {
    const clause = filters.location
      .map((l) => `affiliation-org-name:"${l}"`)
      .join(" OR ");
    parts.push(filters.location.length === 1 ? clause : `(${clause})`);
  }

  return parts.join(" AND ");
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

async function batchFetch<T>(
  items: string[],
  fn: (id: string) => Promise<T>,
  concurrency: number,
  onResult: (id: string, result: T) => void,
  signal: { cancelled: boolean },
) {
  let i = 0;
  async function next() {
    while (i < items.length) {
      if (signal.cancelled) return;
      const id = items[i++];
      try {
        const result = await fn(id);
        if (!signal.cancelled) onResult(id, result);
      } catch { /* skip silently */ }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
}

function toggleItem(arr: string[], item: string): string[] {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

function activeFilterCount(f: ActiveFilters): number {
  return f.role.length + f.interests.length + f.skills.length + f.location.length;
  // reasons/availability/preferredOrgType excluded — they don't affect the query
}

function dedupeStrings(values: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  values.forEach((value) => {
    const cleaned = value.replace(/\s+/g, " ").trim();
    if (!cleaned) return;

    const key = cleaned.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    result.push(cleaned);
  });

  return result;
}

function collectProfileText(profile: OrcidProfile): string {
  return [
    profile.biography ?? "",
    ...profile.keywords,
    ...profile.affiliations.flatMap((a) => [a.organization, a.role]),
    ...profile.works.flatMap((w) => [w.title, w.journalTitle ?? "", w.type]),
  ].join(" ").toLowerCase();
}

function deriveInterestFallback(profile: OrcidProfile | undefined): string[] {
  if (!profile) return [];

  const source = collectProfileText(profile);
  const matched = FILTER_OPTIONS.interests.filter((label) =>
    resolveTerms(label).some((term) => source.includes(term.toLowerCase())),
  );

  if (matched.length > 0) return matched.slice(0, 4);
  return dedupeStrings(profile.keywords).slice(0, 4);
}

function deriveSkillFallback(profile: OrcidProfile | undefined): string[] {
  if (!profile) return [];

  const source = collectProfileText(profile);
  const matched = FILTER_OPTIONS.skills.filter((label) =>
    resolveTerms(label).some((term) => source.includes(term.toLowerCase())),
  );

  if (matched.length > 0) return matched.slice(0, 4);

  const inferred: string[] = [];
  if (source.includes("research")) inferred.push("Clinical research");
  if (source.includes("analysis") || source.includes("analytics") || source.includes("statistic")) inferred.push("Data analysis");
  if (source.includes("trial")) inferred.push("Trial design");
  if (source.includes("grant")) inferred.push("Grant writing");
  if (source.includes("software") || source.includes("systems") || source.includes("informatics")) inferred.push("Software development");
  if (source.includes("stakeholder")) inferred.push("Stakeholder engagement");

  return dedupeStrings(inferred).slice(0, 4);
}

function deriveProjectFallback(profile: OrcidProfile | undefined): string[] {
  if (!profile) return [];

  return dedupeStrings(
    profile.works
      .map((work) => work.title)
      .filter((title) => title && title !== "Untitled"),
  ).slice(0, 5);
}

// ─── Chip colour palette ──────────────────────────────────────────────────────

type TagColor = "blue" | "purple" | "gray" | "orange" | "teal" | "green" | "rose";

const chipColors: Record<TagColor, string> = {
  blue:   "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  gray:   "bg-gray-50 text-gray-700 border-gray-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  teal:   "bg-teal-50 text-teal-700 border-teal-200",
  green:  "bg-green-50 text-green-700 border-green-200",
  rose:   "bg-rose-50 text-rose-700 border-rose-200",
};

const labelColors: Record<TagColor, string> = {
  blue:   "text-blue-600",
  purple: "text-purple-600",
  gray:   "text-gray-500",
  orange: "text-orange-600",
  teal:   "text-teal-600",
  green:  "text-green-600",
  rose:   "text-rose-600",
};

function SourceBadge({ label }: { label: "AI" | "Derived" }) {
  const isAi = label === "AI";

  return (
    <span
      className={`rounded-full border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
        isAi
          ? "border-purple-200 bg-purple-50 text-purple-700"
          : "border-gray-200 bg-gray-50 text-gray-500"
      }`}
    >
      {label}
    </span>
  );
}

function TagSection({
  label,
  color,
  values,
  max,
  badgeLabel,
  emptyText,
}: {
  label: string;
  color: TagColor;
  values: string[];
  max?: number;
  badgeLabel?: "AI" | "Derived";
  emptyText?: string;
}) {
  if (values.length === 0 && !emptyText) return null;

  const shown = typeof max === "number" ? values.slice(0, max) : values;
  const overflow = typeof max === "number" ? Math.max(values.length - max, 0) : 0;

  return (
    <div>
      <p className={`text-[11px] font-semibold uppercase tracking-wide mb-1.5 flex items-center gap-1.5 ${labelColors[color]}`}>
        {label}
        {badgeLabel && <SourceBadge label={badgeLabel} />}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {shown.map((v, i) => (
          <span key={i} className={`px-2 py-1 text-[11px] border rounded-md ${chipColors[color]}`}>{v}</span>
        ))}
        {overflow > 0 && (
          <span className="px-2 py-1 text-[11px] border rounded-md border-gray-200 bg-white text-gray-500">
            +{overflow} more
          </span>
        )}
        {shown.length === 0 && emptyText && (
          <span className="px-2 py-1 text-[11px] border border-dashed rounded-md border-gray-200 bg-gray-50 text-gray-500">
            {emptyText}
          </span>
        )}
      </div>
    </div>
  );
}

function AiBadge({ inline = false }: { inline?: boolean }) {
  return (
    <span
      className={`rounded-full border border-purple-200 bg-purple-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-700 ${
        inline ? "ml-1 inline-flex align-middle" : "ml-2 inline-flex"
      }`}
    >
      AI
    </span>
  );
}

// ─── Filter panel ─────────────────────────────────────────────────────────────

function FilterPanel({
  filters, onChange, onClear,
}: {
  filters: ActiveFilters;
  onChange: (key: keyof ActiveFilters, value: string) => void;
  onClear: () => void;
}) {
  type SectionDef =
    | { key: keyof typeof FILTER_OPTIONS; label: string; color: TagColor; unavailable?: false }
    | { key: keyof ActiveFilters; label: string; color: TagColor; unavailable: true; note: string };

  const sections: SectionDef[] = [
    { key: "role",            label: "Role",              color: "blue"   },
    { key: "interests",       label: "Interests",         color: "gray"   },
    { key: "skills",          label: "Skills",            color: "orange" },
    { key: "location",        label: "Location",          color: "teal"   },
    {
      key: "reasons", label: "Reasons", color: "purple", unavailable: true,
      note: "Shown on enriched profiles; filter support can be added next",
    },
    {
      key: "availability", label: "Availability", color: "green", unavailable: true,
      note: "Shown on enriched profiles; filter support can be added next",
    },
    {
      key: "preferredOrgType", label: "Preference of Org", color: "rose", unavailable: true,
      note: "Shown on enriched profiles; filter support can be added next",
    },
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    role: true, interests: false, skills: false, location: false,
    reasons: false, availability: false, preferredOrgType: false,
  });
  const toggleSection = (key: string) =>
    setOpenSections((p) => ({ ...p, [key]: !p[key] }));

  const total = activeFilterCount(filters);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-[13px] font-semibold text-gray-900">
          Filters{" "}
          {total > 0 && (
            <span className="ml-1 px-1.5 py-0.5 text-[11px] bg-gray-900 text-white rounded-full">
              {total}
            </span>
          )}
        </span>
        {total > 0 && (
          <button onClick={onClear} className="text-[12px] text-gray-500 hover:text-gray-700 transition-colors">
            Clear all
          </button>
        )}
      </div>

      {sections.map((s) => {
        const active = filters[s.key] ?? [];
        const isOpen = openSections[s.key];

        return (
          <div key={s.key} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => toggleSection(s.key)}
              className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors"
            >
              <span className={`text-[12px] font-semibold uppercase tracking-wide flex items-center gap-1.5 ${labelColors[s.color]}`}>
                {s.label}
                {active.length > 0 && (
                  <span className={`px-1.5 py-0.5 text-[10px] rounded-full border ${chipColors[s.color]}`}>
                    {active.length}
                  </span>
                )}
                {s.unavailable && (
                  <Info className="h-3 w-3 text-gray-400" />
                )}
              </span>
              {isOpen
                ? <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
                : <ChevronDown className="h-3.5 w-3.5 text-gray-400" />}
            </button>

            {isOpen && (
              <div className="px-4 pb-3">
                {s.unavailable ? (
                  <p className="text-[11px] text-gray-400 italic flex items-center gap-1.5">
                    <Info className="h-3 w-3 shrink-0" />
                    {s.note}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {(FILTER_OPTIONS[s.key as keyof typeof FILTER_OPTIONS] ?? []).map((opt) => {
                      const selected = active.includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => onChange(s.key, opt)}
                          className={`px-2.5 py-1 text-[11px] border rounded-md transition-colors ${
                            selected
                              ? chipColors[s.color] + " font-medium"
                              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FindCollaborators() {
  const { session } = useAuth();
  const [activeTab, setActiveTab] = useState<"browse" | "discover">("browse");
  const [contactCollab, setContactCollab] = useState<any>(null);

  // ── Browse (ORCID-powered) state ────────────────────────────────────────
  const [browseQuery, setBrowseQuery] = useState("");
  const debouncedBrowseQuery = useDebounce(browseQuery, 400);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>(EMPTY_FILTERS);
  const [showFilters, setShowFilters] = useState(false);

  const [browseResults, setBrowseResults] = useState<OrcidSearchResult[]>([]);
  const [browseProfiles, setBrowseProfiles] = useState<Record<string, OrcidProfile>>({});
  const [browseEnriched, setBrowseEnriched] = useState<Record<string, EnrichedProfile>>({});
  const [browseSearching, setBrowseSearching] = useState(false);
  const [browseLoadingNames, setBrowseLoadingNames] = useState(false);
  const [browseError, setBrowseError] = useState<string | null>(null);
  const [browseExpandedId, setBrowseExpandedId] = useState<string | null>(null);
  const [browseLoadingProfile, setBrowseLoadingProfile] = useState<string | null>(null);
  const browseBatchSignal = useRef<{ cancelled: boolean }>({ cancelled: false });
  const browseInputRef = useRef<HTMLInputElement>(null);

  // ── Browse: fire search when debounced query or filters change ───────────

  useEffect(() => {
    const query = buildOrcidQuery(debouncedBrowseQuery, activeFilters);

    if (!query.trim()) {
      setBrowseResults([]);
      setBrowseProfiles({});
      setBrowseError(null);
      setBrowseLoadingNames(false);
      return;
    }

    browseBatchSignal.current.cancelled = true;
    const signal = { cancelled: false };
    browseBatchSignal.current = signal;
    let cancelled = false;

    setBrowseSearching(true);
    setBrowseLoadingNames(false);
    setBrowseError(null);
    setBrowseProfiles({});
    setBrowseExpandedId(null);

    searchOrcid(query)
      .then((res) => {
        if (cancelled) return;
        setBrowseResults(res);
        setBrowseSearching(false);
        if (res.length === 0) return;

        setBrowseLoadingNames(true);
        batchFetch(
          res.map((r) => r.orcidId),
          fetchOrcidProfile,
          3,
          (id, profile) => {
            setBrowseProfiles((prev) => ({ ...prev, [id]: profile }));
            // Kick off Gemini enrichment after profile arrives (fire-and-forget)
            enrichOrcidProfile(profile).then((enriched) => {
              if (enriched && !signal.cancelled)
                setBrowseEnriched((prev) => ({ ...prev, [id]: enriched }));
            });
          },
          signal,
        ).finally(() => { if (!signal.cancelled) setBrowseLoadingNames(false); });
      })
      .catch((err) => {
        if (!cancelled) { setBrowseError(err.message ?? "Search failed."); setBrowseSearching(false); }
      });

    return () => { cancelled = true; signal.cancelled = true; };
  }, [debouncedBrowseQuery, activeFilters]);

  // ── Browse helpers ────────────────────────────────────────────────────────

  const toggleBrowseExpand = useCallback(
    async (orcidId: string) => {
      if (browseExpandedId === orcidId) { setBrowseExpandedId(null); return; }
      setBrowseExpandedId(orcidId);
      if (browseProfiles[orcidId]) return;
      setBrowseLoadingProfile(orcidId);
      try {
        const p = await fetchOrcidProfile(orcidId);
        setBrowseProfiles((prev) => ({ ...prev, [orcidId]: p }));
        enrichOrcidProfile(p).then((enriched) => {
          if (enriched) setBrowseEnriched((prev) => ({ ...prev, [orcidId]: enriched }));
        });
      } catch { /* silent */ } finally { setBrowseLoadingProfile(null); }
    },
    [browseExpandedId, browseProfiles],
  );

  const handleFilterChange = (key: keyof ActiveFilters, value: string) =>
    setActiveFilters((prev) => ({ ...prev, [key]: toggleItem(prev[key], value) }));

  const clearFilters = () => setActiveFilters(EMPTY_FILTERS);

  const clearBrowseSearch = () => {
    browseBatchSignal.current.cancelled = true;
    setBrowseQuery("");
    setBrowseResults([]);
    setBrowseProfiles({});
    setBrowseExpandedId(null);
    setBrowseLoadingNames(false);
    browseInputRef.current?.focus();
  };

  // ── Shared card renderer ──────────────────────────────────────────────────

  function OrcidCard({
    result,
    profile,
    enriched,
    isExpanded,
    isLoadingProfile,
    onToggleExpand,
  }: {
    result: OrcidSearchResult;
    profile: OrcidProfile | undefined;
    enriched: EnrichedProfile | undefined;
    isExpanded: boolean;
    isLoadingProfile: boolean;
    onToggleExpand: (id: string) => void;
  }) {
    const displayName = profile
      ? [profile.name.givenNames, profile.name.familyName].filter(Boolean).join(" ") || result.orcidId
      : null;
    const primaryAff = profile?.affiliations?.[0];
    const interestValues = enriched?.inferredInterests.length
      ? enriched.inferredInterests
      : deriveInterestFallback(profile);
    const skillValues = enriched?.inferredSkills.length
      ? enriched.inferredSkills
      : deriveSkillFallback(profile);
    const projectValues = enriched?.inferredProjects.length
      ? enriched.inferredProjects
      : deriveProjectFallback(profile);
    const interestSource = enriched?.inferredInterests.length ? "AI" : (interestValues.length > 0 ? "Derived" : undefined);
    const skillSource = enriched?.inferredSkills.length ? "AI" : (skillValues.length > 0 ? "Derived" : undefined);
    const projectSource = enriched?.inferredProjects.length ? "AI" : (projectValues.length > 0 ? "Derived" : undefined);
    const hasProjects = Boolean(
      projectValues.length > 0 || (profile && profile.works.length > 0),
    );
    const initials = displayName
      ? displayName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
      : null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
        <div className="flex gap-5">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
              {initials
                ? <span className="text-lg font-semibold text-gray-600">{initials}</span>
                : <UserCircle2 className="w-8 h-8 text-gray-400" />}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {displayName ? (
                  <>
                    <h3 className="text-base font-semibold text-gray-900">{displayName}</h3>
                    {primaryAff?.role && (
                      <p className="text-[13px] text-gray-600 mt-0.5">{primaryAff.role}</p>
                    )}
                    {primaryAff?.organization && (
                      <p className="text-[12px] text-gray-500 mt-1">{primaryAff.organization}</p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="h-4 w-44 bg-gray-100 rounded animate-pulse mb-1.5" />
                    <div className="h-3 w-32 bg-gray-100 rounded animate-pulse mb-1" />
                    <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
                  </>
                )}
              </div>
              <a
                href={`https://orcid.org/${result.orcidId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-green-700 bg-green-50 border border-green-200 rounded-md hover:bg-green-100 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />{result.orcidId}
              </a>
            </div>

            {/* Contact email */}
            {profile?.emails?.[0] && (
              <p className="text-[12px] text-gray-500">{profile.emails[0]}</p>
            )}

            {/* AI summary — shown when enrichment arrives */}
            {enriched?.summary && (
              <p className="text-[12px] text-gray-600 leading-relaxed italic border-l-2 border-purple-200 pl-3">
                {enriched.summary}
                <AiBadge />
              </p>
            )}

            {/* Role — enriched first, fall back to affiliation */}
            <TagSection
              label="Role"
              color="blue"
              values={primaryAff?.role ? [primaryAff.role] : []}
              max={1}
            />

            {/* Reasons — AI only */}
            {enriched && enriched.inferredReasons.length > 0 && (
              <TagSection label="Reasons" color="purple" values={enriched.inferredReasons} max={2} badgeLabel="AI" />
            )}

            {/* Interests — enriched expands/replaces raw keywords */}
            <TagSection
              label="Interests"
              color="gray"
              values={interestValues}
              max={2}
              badgeLabel={interestSource}
              emptyText={profile ? "No interests found yet" : undefined}
            />

            <TagSection
              label="Skills"
              color="orange"
              values={skillValues}
              max={2}
              badgeLabel={skillSource}
              emptyText={profile ? "Awaiting AI-enriched skills" : undefined}
            />

            {/* Location — affiliation org as proxy */}
            {primaryAff?.organization && (
              <TagSection label="Location" color="teal" values={[primaryAff.organization]} max={1} />
            )}

            {/* Availability — AI only */}
            {enriched?.inferredAvailability && (
              <TagSection label="Availability" color="green" values={[enriched.inferredAvailability]} max={1} badgeLabel="AI" />
            )}

            {/* Preference of Org — AI only */}
            {enriched && enriched.inferredOrgPreference.length > 0 && (
              <TagSection label="Preference of Org" color="rose" values={enriched.inferredOrgPreference} max={1} badgeLabel="AI" />
            )}

            <TagSection
              label="Past Projects"
              color="purple"
              values={projectValues}
              max={2}
              badgeLabel={projectSource}
              emptyText={profile ? "Open card for publications" : undefined}
            />

            {/* Affiliations */}
            {profile && profile.affiliations.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide mb-1.5 text-blue-600">
                  Affiliations
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profile.affiliations.slice(0, 3).map((a, i) => (
                    <span key={i} className={`px-2 py-1 text-[11px] border rounded-md ${chipColors.blue}`}>
                      {a.organization}{a.role ? ` · ${a.role}` : ""}
                    </span>
                  ))}
                  {profile.affiliations.length > 3 && (
                    <span className={`px-2 py-1 text-[11px] border rounded-md ${chipColors.gray}`}>
                      +{profile.affiliations.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Past Projects (AI-inferred) + Publications (ORCID) — toggled */}
            {hasProjects ? (
              <div>
                <button
                  onClick={() => onToggleExpand(result.orcidId)}
                  className="text-[11px] font-semibold uppercase tracking-wide text-blue-600 mb-1.5 flex items-center gap-1 hover:text-blue-800 transition-colors"
                >
                  Past Projects & Publications
                  {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </button>
                {isExpanded && (
                  <div className="space-y-2">
                    {/* AI-inferred projects shown first */}
                    {enriched && enriched.inferredProjects.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {enriched.inferredProjects.map((p, i) => (
                          <span key={i} className={`px-2 py-1 text-[11px] border rounded-md ${chipColors.purple}`}>
                            {p}<AiBadge inline />
                          </span>
                        ))}
                      </div>
                    )}
                    {/* ORCID works below */}
                    {profile && profile.works.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {profile.works.map((w, i) =>
                          w.url ? (
                            <a key={i} href={w.url} target="_blank" rel="noopener noreferrer"
                              className={`px-2 py-1 text-[11px] border rounded-md hover:opacity-80 ${chipColors.blue}`}>
                              {w.title}{w.year ? ` (${w.year})` : ""}
                            </a>
                          ) : (
                            <span key={i} className={`px-2 py-1 text-[11px] border rounded-md ${chipColors.blue}`}>
                              {w.title}{w.year ? ` (${w.year})` : ""}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null}

            {/* Biography — only when expanded */}
            {profile?.biography && isExpanded && (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  Biography
                </p>
                <p className="text-[12px] text-gray-600 leading-relaxed">{profile.biography}</p>
              </div>
            )}

            {/* Loading state */}
            {!profile && isLoadingProfile && (
              <div className="flex items-center gap-2 text-[12px] text-gray-400">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />Loading profile…
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              {profile?.emails?.[0] && (
                <button
                  onClick={() => setContactCollab({ name: displayName, email: profile.emails[0] })}
                  className="px-4 py-2 text-[13px] font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors"
                >
                  Contact
                </button>
              )}
              <a
                href={`https://orcid.org/${result.orcidId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />View on ORCID
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Status line helper ────────────────────────────────────────────────────

  function SearchStatus({
    searching, error, query, results, loadingNames, resolvedCount,
  }: {
    searching: boolean; error: string | null; query: string;
    results: OrcidSearchResult[]; loadingNames: boolean; resolvedCount: number;
  }) {
    if (searching) return (
      <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-4">
        <Loader2 className="h-4 w-4 animate-spin" />Searching…
      </div>
    );
    if (error) return <p className="text-[13px] text-red-500 mb-4">{error}</p>;
    if (!searching && !error && query && results.length === 0) return (
      <p className="text-[13px] text-gray-500 mb-4">No results found for "{query}".</p>
    );
    if (results.length > 0) return (
      <div className="flex items-center gap-2 mb-4">
        <p className="text-[12px] text-gray-500">{results.length} results found</p>
        {loadingNames && (
          <span className="flex items-center gap-1 text-[11px] text-gray-400">
            <Loader2 className="h-3 w-3 animate-spin" />
            Resolving names… {resolvedCount}/{results.length}
          </span>
        )}
      </div>
    );
    return null;
  }

  const filterCount = activeFilterCount(activeFilters);
  const browseResolvedCount = browseResults.filter((r) => browseProfiles[r.orcidId]).length;
  const browseHasQuery = !!(debouncedBrowseQuery.trim() || filterCount > 0);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">

          {/* Page header + tabs */}
          <div className="mb-6">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">Find Collaborators</h1>
              <p className="text-[13px] text-gray-600">
                Search the ORCID registry for researchers and clinicians
              </p>
            </div>
            <div className="flex gap-1 border-b border-gray-200">
              {(["browse", "discover"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-[13px] font-medium border-b-2 transition-colors -mb-px ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "browse" ? "Search" : "Discover"}
                </button>
              ))}
            </div>
          </div>

          {/* ── Discover ── */}
          {activeTab === "discover" && (
            session
              ? <DiscoverMap intakeData={null} onEditFilters={() => {}} mode="collaborators" />
              : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mb-5">
                    <Lock className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-[15px] font-semibold text-gray-900 mb-1">Sign in to use Discover</p>
                  <p className="text-[13px] text-gray-500 max-w-sm mb-6">
                    Find personalized collaborator matches based on your role, interests, and research focus.
                  </p>
                  <Link
                    to="/login"
                    className="px-5 py-2.5 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              )
          )}

          {/* ── Browse ── */}
          {activeTab === "browse" && (
            <>
              {/* Search + filter toggle */}
              <div className="mb-4 flex gap-2">
                <div className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2.5">
                  <Search className="h-4 w-4 text-gray-400 shrink-0" />
                  <input
                    ref={browseInputRef}
                    type="text"
                    placeholder="Search ORCID by name, ORCID iD, specialty, keyword, or institution…"
                    value={browseQuery}
                    onChange={(e) => setBrowseQuery(e.target.value)}
                    className="flex-1 outline-none text-[13px] text-gray-900 placeholder:text-gray-400"
                  />
                  {browseQuery && (
                    <button onClick={clearBrowseSearch} className="text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setShowFilters((v) => !v)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-md text-[13px] font-medium transition-colors ${
                    showFilters || filterCount > 0
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {filterCount > 0 && (
                    <span className="px-1.5 py-0.5 text-[10px] bg-white text-gray-900 rounded-full font-bold leading-none">
                      {filterCount}
                    </span>
                  )}
                </button>
              </div>

              {showFilters && (
                <FilterPanel
                  filters={activeFilters}
                  onChange={handleFilterChange}
                  onClear={clearFilters}
                />
              )}

              {/* Empty prompt */}
              {!browseHasQuery && !browseSearching && browseResults.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-[14px] font-medium text-gray-700 mb-1">Search to find collaborators</p>
                  <p className="text-[13px] text-gray-500 max-w-sm">
                    Search the public ORCID registry above, then use filters to narrow by role, interests, skills, or institution.
                  </p>
                </div>
              )}

              <SearchStatus
                searching={browseSearching}
                error={browseError}
                query={debouncedBrowseQuery || (filterCount > 0 ? "(filters active)" : "")}
                results={browseResults}
                loadingNames={browseLoadingNames}
                resolvedCount={browseResolvedCount}
              />

              <div className="space-y-4">
                {browseResults.map((r) => (
                  <OrcidCard
                    key={r.orcidId}
                    result={r}
                    profile={browseProfiles[r.orcidId]}
                    enriched={browseEnriched[r.orcidId]}
                    isExpanded={browseExpandedId === r.orcidId}
                    isLoadingProfile={browseLoadingProfile === r.orcidId}
                    onToggleExpand={toggleBrowseExpand}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {contactCollab && (
        <ContactModal
          recipientName={contactCollab.name}
          recipientEmail={contactCollab.email}
          onClose={() => setContactCollab(null)}
        />
      )}
    </div>
  );
}
