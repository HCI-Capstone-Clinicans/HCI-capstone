import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, ChevronDown, MapPin, TrendingUp, X, Lock, SlidersHorizontal } from "lucide-react";

const DOMAIN_OPTIONS = [
  "Cardiology", "Oncology", "Neurology", "Pediatrics", "Emergency Medicine",
  "Surgery", "Wearable Tech", "AI/ML", "Robotics", "Telemedicine",
  "Medical Devices", "Healthcare IT",
];

const SKILL_OPTIONS = [
  "Clinical Research", "UX Design", "Machine Learning", "Data Analysis",
  "Product Design", "Software Development", "Medical Imaging",
  "User Research", "Prototyping", "Systems Thinking",
];


function MultiSelect({
  placeholder,
  options,
  selected,
  onChange,
}: {
  placeholder: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(true);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollMore(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  };

  useEffect(() => {
    if (open) setCanScrollMore(true);
  }, [open]);

  const toggle = (val: string) =>
    onChange(selected.includes(val) ? selected.filter(v => v !== val) : [...selected, val]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2 text-[13px] border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-gray-900">
          {selected.length ? `${selected.length} selected` : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <div
            ref={listRef}
            onScroll={handleScroll}
            className="max-h-48 overflow-y-auto"
          >
            {options.map(opt => (
              <label
                key={opt}
                className="flex items-center gap-2.5 px-3 py-2 text-[13px] hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => toggle(opt)}
                  className="h-3.5 w-3.5 rounded border-gray-300 text-gray-900 accent-gray-900"
                />
                <span className={selected.includes(opt) ? "text-gray-900 font-medium" : "text-gray-700"}>
                  {opt}
                </span>
              </label>
            ))}
          </div>
          {canScrollMore && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 rounded-b-md bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-1">
              <span className="text-[10px] text-gray-400">scroll for more</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SingleSelect({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2 text-[13px] border border-gray-300 rounded-md bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-gray-900">{selectedLabel ?? placeholder}</span>
        <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
          {value && (
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-[13px] text-gray-400 hover:bg-gray-50 border-b border-gray-100"
            >
              Clear selection
            </button>
          )}
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-[13px] transition-colors ${
                value === opt.value
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import imgRobot from "../../assets/0dd2934842d6fa9897708ea0e164b300c59f584e.png";
import { MatchExplanation } from "../components/MatchExplanation";
import { useBookmarks } from "../context/BookmarksContext";
import { ContactModal } from "../components/ContactModal";
import DiscoverMap from "./DiscoverMap";
import { useAuth } from "../context/AuthContext";

interface Project {
  id: string;
  name: string;
  location: string;
  institutionId: string;
  lab: string;
  description: string;
  tags: string[];
  highlightTag: string;
  domains: string[];
  skills: string[];
  piName: string;
  piEmail: string;
  image?: string;
  matchPercentage: number;
}

export default function FindProjects() {
  const { session } = useAuth();
  const [activeTab, setActiveTab] = useState<"browse" | "discover">("browse");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [contactProject, setContactProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "burnout-prevention",
      name: "Burnout Prevention for Primary Caregivers",
      location: "UH Cleveland Medical Center",
      institutionId: "uh",
      lab: "Cleveland Art Labs",
      description: "Burnout Prevention is an ongoing research project led by Dr. Susan Stern at University Hospitals Cleveland in conjunction with the Cleveland Institute of Art to develop digital tools to aid caregivers.",
      tags: ["Healthcare IT", "Wearable Tech", "Caregiver Support"],
      highlightTag: "Caregiver Support",
      domains: ["Healthcare IT", "Wearable Tech", "Pediatrics"],
      skills: ["User Research", "UX Design", "Clinical Research", "Prototyping"],
      piName: "Dr. Susan Stern",
      piEmail: "sstern@uhcleveland.edu",
      matchPercentage: 30,
    },
    {
      id: "smartsuture",
      name: "SmartSuture",
      location: "Case Western Reserve University",
      institutionId: "cwru",
      lab: "Biomedical Engineering",
      description: "Automated suturing research combining robotics and computer vision to assist in minimally invasive procedures.",
      tags: ["Robotics", "Medical Devices", "Surgery"],
      highlightTag: "Robotics",
      domains: ["Surgery", "Medical Devices", "Robotics"],
      skills: ["Software Development", "Medical Imaging", "Prototyping", "Systems Thinking"],
      piName: "Dr. Rachel Kim",
      piEmail: "rkim@cwru.edu",
      matchPercentage: 68,
    },
    {
      id: "robodog",
      name: "RoboDog",
      location: "UH Cleveland Medical Center",
      institutionId: "uh",
      lab: "Carroll Labs",
      description: "RoboDog is an ongoing research project led by Dr. Bryan Carroll at University Hospitals Cleveland to develop robotic dogs to assist in dermatologic surgery.",
      tags: ["Robotics", "Surgery", "Human-Robot Interaction"],
      highlightTag: "Human-Robot Interaction",
      image: imgRobot,
      domains: ["Robotics", "Surgery", "Medical Devices"],
      skills: ["Prototyping", "Software Development", "User Research", "Systems Thinking"],
      piName: "Dr. Bryan Carroll",
      piEmail: "bcarroll@uhcleveland.edu",
      matchPercentage: 87,
    },
    {
      id: "medassist",
      name: "MedAssist AI",
      location: "Cleveland Clinic",
      institutionId: "clinic",
      lab: "Digital Health Innovation Lab",
      description: "AI-powered surgical assistance platform that enhances precision and reduces operation time through real-time analytics and decision support.",
      tags: ["AI/ML", "Surgery", "Medical Devices"],
      highlightTag: "AI/ML",
      domains: ["AI/ML", "Surgery", "Healthcare IT"],
      skills: ["Machine Learning", "Data Analysis", "Software Development", "Clinical Research"],
      piName: "Dr. Angela Foster",
      piEmail: "afoster@clevelandclinic.org",
      matchPercentage: 72,
    },
  ];

  const hasActiveSearch = searchQuery || selectedDomains.length || selectedSkills.length || selectedInstitution;

  const scoreProject = (project: Project): number => {
    const domainMatches = selectedDomains.filter(d => project.domains.includes(d)).length;
    const skillMatches = selectedSkills.filter(s => project.skills.includes(s)).length;
    return domainMatches + skillMatches;
  };

  const filteredProjects = projects.filter(project => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const inName = project.name.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inTags = project.tags.some(t => t.toLowerCase().includes(q));
      if (!inName && !inDesc && !inTags) return false;
    }
    if (selectedInstitution && project.institutionId !== selectedInstitution) return false;
    if ((selectedDomains.length || selectedSkills.length) && scoreProject(project) === 0) return false;
    return true;
  });

  // Relevance sort: most domain+skill matches first; fall back to original order
  const displayedProjects = hasActiveSearch && (selectedDomains.length || selectedSkills.length)
    ? [...filteredProjects].sort((a, b) => scoreProject(b) - scoreProject(a))
    : filteredProjects;

  const handleShowMatch = (project: Project) => {
    setSelectedProject(project);
    setShowMatchExplanation(true);
  };

  const getMatchFactors = (project: Project) => {
    if (project.id === "robodog") {
      return [
        {
          category: "Skills Alignment",
          score: 92,
          reason: "Your service design and UX research skills are highly relevant to the human-robot interaction focus of this project.",
          isMatch: true,
        },
        {
          category: "Research Interests",
          score: 88,
          reason: "Your interest in robotics and human-centered design directly aligns with the project's core objectives.",
          isMatch: true,
        },
        {
          category: "Geographic Proximity",
          score: 95,
          reason: "Located in Cleveland, Ohio - same city as your profile location.",
          isMatch: true,
        },
        {
          category: "Experience Level",
          score: 75,
          reason: "Your background in UX research matches the project's need for human-robot interaction expertise.",
          isMatch: true,
        },
      ];
    }
    return [
      {
        category: "Skills Alignment",
        score: 70,
        reason: "Some of your skills match the project requirements.",
        isMatch: true,
      },
      {
        category: "Research Interests",
        score: 65,
        reason: "Partial alignment with your stated research interests.",
        isMatch: false,
      },
    ];
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />

      {/* Title + tabs — always visible */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-0">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Clinician Connect</h1>
          <p className="text-[15px] text-gray-500 italic mb-4">
            A platform to enable interdisciplinary collaboration on healthcare projects
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("browse")}
              className={`px-4 py-2 text-[13px] font-medium border-b-2 transition-colors -mb-px ${
                activeTab === "browse"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => setActiveTab("discover")}
              className={`px-4 py-2 text-[13px] font-medium border-b-2 transition-colors -mb-px ${
                activeTab === "discover"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Discover
            </button>
          </div>
        </div>
      </div>

      {/* Discover tab — fills remaining height, aligned to page header */}
      {activeTab === "discover" && (
        <div className="flex-1 overflow-hidden flex">
          <div className="w-full max-w-7xl mx-auto px-6 pt-4 pb-6 overflow-hidden flex flex-col">
          {session
            ? <DiscoverMap intakeData={null} onEditFilters={() => {}} mode="projects" />
            : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mb-5">
                  <Lock className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-[15px] font-semibold text-gray-900 mb-1">Sign in to use Discover</p>
                <p className="text-[13px] text-gray-500 max-w-sm mb-6">
                  Get personalized project matches based on your skills, interests, and location.
                </p>
                <Link
                  to="/login"
                  className="px-5 py-2.5 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            )
          }
        </div>
        </div>
      )}

      {/* Browse tab — scrollable */}
      {activeTab === "browse" && (
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Browse tab content */}
          <>

          {/* Search + Filter bar */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            {/* Row: search left, filters button right */}
            <div className="flex gap-3 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(f => !f)}
                className={`flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                  showFilters || selectedDomains.length || selectedSkills.length || selectedInstitution
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {(selectedDomains.length + selectedSkills.length + (selectedInstitution ? 1 : 0)) > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 bg-white text-gray-900 text-[10px] font-bold rounded-full">
                    {selectedDomains.length + selectedSkills.length + (selectedInstitution ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Collapsible filter panel */}
            {showFilters && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-3 border-t border-gray-200">
                <SingleSelect
                  placeholder="Institution"
                  value={selectedInstitution}
                  onChange={setSelectedInstitution}
                  options={[
                    { label: "UH Cleveland Medical Center", value: "uh" },
                    { label: "Cleveland Clinic", value: "clinic" },
                    { label: "Case Western Reserve University", value: "cwru" },
                  ]}
                />
                <MultiSelect
                  placeholder="Skills"
                  options={SKILL_OPTIONS}
                  selected={selectedSkills}
                  onChange={setSelectedSkills}
                />
                <MultiSelect
                  placeholder="Domains"
                  options={DOMAIN_OPTIONS}
                  selected={selectedDomains}
                  onChange={setSelectedDomains}
                />
              </div>
            )}


            {/* Active Filters */}
            {(selectedDomains.length > 0 || selectedSkills.length > 0 || selectedInstitution) && (
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-200">
                <span className="text-[11px] text-gray-500 font-medium">Active filters:</span>
                {selectedDomains.map(d => (
                  <span key={d} className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-md border border-blue-200 flex items-center gap-1">
                    {d}
                    <button onClick={() => setSelectedDomains(selectedDomains.filter(v => v !== d))} className="hover:bg-blue-100 rounded"><X className="h-3 w-3" /></button>
                  </span>
                ))}
                {selectedSkills.map(s => (
                  <span key={s} className="px-2 py-1 bg-purple-50 text-purple-700 text-[11px] font-medium rounded-md border border-purple-200 flex items-center gap-1">
                    {s}
                    <button onClick={() => setSelectedSkills(selectedSkills.filter(v => v !== s))} className="hover:bg-purple-100 rounded"><X className="h-3 w-3" /></button>
                  </span>
                ))}
                {selectedInstitution && (
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 text-[11px] font-medium rounded-md border border-orange-200 flex items-center gap-1">
                    {[
                      { label: "UH Cleveland Medical Center", value: "uh" },
                      { label: "Cleveland Clinic", value: "clinic" },
                      { label: "Case Western Reserve University", value: "cwru" },
                    ].find(o => o.value === selectedInstitution)?.label}
                    <button onClick={() => setSelectedInstitution("")} className="hover:bg-orange-100 rounded"><X className="h-3 w-3" /></button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[13px] text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProjects.length}</span> projects found in Cleveland, Ohio
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-gray-500">Sort by:</span>
              <select className="text-[12px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Best Match</option>
                <option>Newest</option>
                <option>Location</option>
              </select>
            </div>
          </div>

          {/* Project Results */}
          <div className="space-y-4">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all hover:shadow-sm"
              >
                <div className="flex gap-6 p-6">
                  {/* Project Image */}
                  {project.image && (
                    <div className="flex-shrink-0 w-48 h-32 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="flex-1 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <Link
                            to={`/project/${project.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                          >
                            {project.name}
                          </Link>
                          {hasActiveSearch && (selectedDomains.length > 0 || selectedSkills.length > 0) && (() => {
                            const total = selectedDomains.length + selectedSkills.length;
                            const matched = scoreProject(project);
                            return matched > 0 ? (
                              <button
                                onClick={() => handleShowMatch(project)}
                                className="px-2 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-[11px] font-semibold rounded-md border border-green-200 hover:border-green-300 transition-all flex items-center gap-1"
                              >
                                <TrendingUp className="h-3 w-3" />
                                {matched}/{total} filters match
                              </button>
                            ) : null;
                          })()}
                        </div>
                        <p className="text-[13px] text-gray-600">{project.lab}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-[12px] text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-cyan-500" />
                      <span>{project.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-gray-700 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${
                            hasActiveSearch && tag === project.highlightTag
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-gray-50 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Link
                        to={`/project/${project.id}`}
                        className="px-4 py-2 text-[13px] font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors"
                      >
                        View Project
                      </Link>
                      <button
                        onClick={() => toggleBookmark({
                          id: project.id,
                          name: project.name,
                          lab: project.lab,
                          location: project.location,
                          tags: project.tags,
                          matchPercentage: project.matchPercentage,
                        })}
                        className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                          isBookmarked(project.id)
                            ? "text-green-700 bg-green-50 border-green-300"
                            : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {isBookmarked(project.id) ? "Following" : "Stay Updated"}
                      </button>
                      <button
                        onClick={() => setContactProject(project)}
                        className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        Contact PI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          </>
        </div>
      </main>
      )}

      {/* Match Explanation Modal */}
      {contactProject && (
        <ContactModal
          recipientName={contactProject.piName}
          recipientEmail={contactProject.piEmail}
          onClose={() => setContactProject(null)}
        />
      )}

      {showMatchExplanation && selectedProject && (
        <MatchExplanation
          matchPercentage={selectedProject.matchPercentage}
          projectName={selectedProject.name}
          factors={getMatchFactors(selectedProject)}
          onClose={() => setShowMatchExplanation(false)}
        />
      )}
    </div>
  );
}