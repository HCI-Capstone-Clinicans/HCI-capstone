import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, ChevronDown, MapPin, TrendingUp, X, Lock } from "lucide-react";

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

const INTEREST_OPTIONS = [
  "Find research collaborators", "Join an existing project", "Start a new initiative",
  "Share my expertise", "Learn from others", "Validate an idea",
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
  lab: string;
  description: string;
  tags: string[];
  highlightTag: string;
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
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedProximity, setSelectedProximity] = useState("");
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [contactProject, setContactProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "burnout-prevention",
      name: "Burnout Prevention for Primary Caregivers",
      location: "UH Cleveland Medical Center",
      lab: "Cleveland Art Labs",
      description: "Burnout Prevention is an ongoing research project led by Dr. Susan Stern at University Hospitals Cleveland in conjunction with the Cleveland Institute of Art to develop digital tools to aid caregivers.",
      tags: ["Robotics", "Human-Robot Interaction", "Surgery Assistance"],
      highlightTag: "Human-Robot Interaction",
      piName: "Dr. Susan Stern",
      piEmail: "sstern@uhcleveland.edu",
      matchPercentage: 30,
    },
    {
      id: "smartsuture",
      name: "SmartSuture",
      location: "Case Western Reserve University",
      lab: "Biomedical Engineering",
      description: "Automated suturing research combining robotics and computer vision to assist in minimally invasive procedures.",
      tags: ["Robotics", "Computer Vision", "Medical Devices"],
      highlightTag: "Robotics",
      piName: "Dr. Rachel Kim",
      piEmail: "rkim@cwru.edu",
      matchPercentage: 68,
    },
    {
      id: "robodog",
      name: "RoboDog",
      location: "UH Cleveland Medical Center",
      lab: "Carroll Labs",
      description: "RoboDog is an ongoing research project led by Dr. Bryan Carroll at University Hospitals Cleveland to develop robotic dogs to assist in dermatologic surgery.",
      tags: ["Robotics", "Human-Robot Interaction", "Surgery Assistance"],
      highlightTag: "Human-Robot Interaction",
      image: imgRobot,
      piName: "Dr. Bryan Carroll",
      piEmail: "bcarroll@uhcleveland.edu",
      matchPercentage: 87,
    },
    {
      id: "medassist",
      name: "MedAssist AI",
      location: "Cleveland Clinic",
      lab: "Digital Health Innovation Lab",
      description: "AI-powered surgical assistance platform that enhances precision and reduces operation time through real-time analytics and decision support.",
      tags: ["AI/ML", "Surgery Assistance", "Medical Devices"],
      highlightTag: "Surgery Assistance",
      piName: "Dr. Angela Foster",
      piEmail: "afoster@clevelandclinic.org",
      matchPercentage: 72,
    },
  ];

  // Check if any search/filter is active
  const hasActiveSearch = searchQuery || selectedDomains.length || selectedSkills.length || selectedInterests.length || selectedInstitution || selectedProximity;

  const filteredProjects = projects.filter(project => {
    if (selectedDomains.length && !selectedDomains.some(d => project.tags.some(t => t.toLowerCase().includes(d.toLowerCase())))) {
      return false;
    }
    if (selectedSkills.length && !selectedSkills.some(s => project.tags.some(t => t.toLowerCase().includes(s.toLowerCase())))) {
      return false;
    }
    if (selectedInterests.length && !selectedInterests.some(i => project.tags.some(t => t.toLowerCase().includes(i.toLowerCase())))) {
      return false;
    }
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Only sort by match percentage when there's an active search/filter
  const displayedProjects = hasActiveSearch 
    ? [...filteredProjects].sort((a, b) => b.matchPercentage - a.matchPercentage)
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header + Tabs */}
          <div className="mb-6">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Clinician Connect</h1>
                <p className="text-[15px] text-gray-500 italic">
                  A platform to enable interdisciplinary collaboration on healthcare projects
                </p>
              </div>
            </div>
            <div className="flex gap-1 border-b border-gray-200">
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

          {/* Discover tab */}
          {activeTab === "discover" && (
            session
              ? <DiscoverMap intakeData={null} onEditFilters={() => {}} mode="projects" />
              : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
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
          )}

          {/* Browse tab content */}
          {activeTab === "browse" && <>

          {/* Advanced Search Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {/* Domains */}
              <MultiSelect
                placeholder="Domains"
                options={DOMAIN_OPTIONS}
                selected={selectedDomains}
                onChange={setSelectedDomains}
              />

              {/* Skills */}
              <MultiSelect
                placeholder="Skills"
                options={SKILL_OPTIONS}
                selected={selectedSkills}
                onChange={setSelectedSkills}
              />

              {/* Interests */}
              <MultiSelect
                placeholder="Interests"
                options={INTEREST_OPTIONS}
                selected={selectedInterests}
                onChange={setSelectedInterests}
              />

              {/* Institution */}
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

              {/* Proximity */}
              <SingleSelect
                placeholder="Proximity"
                value={selectedProximity}
                onChange={setSelectedProximity}
                options={[
                  { label: "Within 5 miles", value: "5" },
                  { label: "Within 10 miles", value: "10" },
                  { label: "Within 25 miles", value: "25" },
                  { label: "Any distance", value: "any" },
                ]}
              />

              {/* Keyword Search */}
              <div className="relative md:col-span-2 lg:col-span-2">
                <input
                  type="text"
                  placeholder="Keyword search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Search Button */}
              <button className="md:col-span-2 lg:col-span-1 px-4 py-2 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>

            {/* Active Filters */}
            {(selectedDomains.length > 0 || selectedSkills.length > 0 || selectedInterests.length > 0 || selectedInstitution || selectedProximity) && (
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
                {selectedInterests.map(i => (
                  <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-[11px] font-medium rounded-md border border-green-200 flex items-center gap-1">
                    {i}
                    <button onClick={() => setSelectedInterests(selectedInterests.filter(v => v !== i))} className="hover:bg-green-100 rounded"><X className="h-3 w-3" /></button>
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
                {selectedProximity && (
                  <span className="px-2 py-1 bg-orange-50 text-orange-700 text-[11px] font-medium rounded-md border border-orange-200 flex items-center gap-1">
                    {[
                      { label: "Within 5 miles", value: "5" },
                      { label: "Within 10 miles", value: "10" },
                      { label: "Within 25 miles", value: "25" },
                      { label: "Any distance", value: "any" },
                    ].find(o => o.value === selectedProximity)?.label}
                    <button onClick={() => setSelectedProximity("")} className="hover:bg-orange-100 rounded"><X className="h-3 w-3" /></button>
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
                          {hasActiveSearch && (
                            <button
                              onClick={() => handleShowMatch(project)}
                              className="px-2 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-[11px] font-semibold rounded-md border border-green-200 hover:border-green-300 transition-all flex items-center gap-1"
                            >
                              <TrendingUp className="h-3 w-3" />
                              {project.matchPercentage}% Match
                            </button>
                          )}
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

          </>}
        </div>
      </main>

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