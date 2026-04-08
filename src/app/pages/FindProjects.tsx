import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, ChevronDown, MapPin, Bookmark, TrendingUp, X } from "lucide-react";
import imgRobot from "../../assets/0dd2934842d6fa9897708ea0e164b300c59f584e.png";
import { MatchExplanation } from "../components/MatchExplanation";
import { ContactModal } from "../components/ContactModal";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedProximity, setSelectedProximity] = useState("");
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactProject, setContactProject] = useState<Project | null>(null);
  const [followedIds, setFollowedIds] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("followedProjects") || "[]")
  );

  const handleStayUpdated = (project: Project) => {
    setFollowedIds(prev => {
      const updated = prev.includes(project.id)
        ? prev.filter(id => id !== project.id)
        : [...prev, project.id];
      localStorage.setItem("followedProjects", JSON.stringify(updated));
      return updated;
    });
  };

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
  const hasActiveSearch = searchQuery || selectedDomain || selectedSkill || selectedInterest || selectedInstitution || selectedProximity;

  const filteredProjects = projects.filter(project => {
    if (selectedInterest && !project.tags.some(tag => tag.toLowerCase().includes(selectedInterest.toLowerCase()))) {
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
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Find Projects</h1>
            <p className="text-[13px] text-gray-600">
              Discover research opportunities in Cleveland, Ohio
            </p>
          </div>

          {/* Advanced Search Filters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {/* Domains */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Domains"
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Skills */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Skills"
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Interests */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Interests"
                  value={selectedInterest}
                  onChange={(e) => setSelectedInterest(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Institution */}
              <div className="relative">
                <select
                  value={selectedInstitution}
                  onChange={(e) => setSelectedInstitution(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="">Institution</option>
                  <option value="uh">UH Cleveland Medical Center</option>
                  <option value="clinic">Cleveland Clinic</option>
                  <option value="cwru">Case Western Reserve University</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Proximity */}
              <div className="relative">
                <select
                  value={selectedProximity}
                  onChange={(e) => setSelectedProximity(e.target.value)}
                  className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="">Proximity</option>
                  <option value="5">Within 5 miles</option>
                  <option value="10">Within 10 miles</option>
                  <option value="25">Within 25 miles</option>
                  <option value="any">Any distance</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

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
            {(selectedInterest || selectedInstitution || selectedProximity) && (
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <span className="text-[11px] text-gray-500 font-medium">Active filters:</span>
                {selectedInterest && (
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] font-medium rounded-md border border-blue-200 flex items-center gap-1">
                    {selectedInterest}
                    <button onClick={() => setSelectedInterest("")} className="hover:bg-blue-100 rounded">
                      <X className="h-3 w-3" />
                    </button>
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
                      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                        <Bookmark className="h-4 w-4 text-gray-400" />
                      </button>
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
                              ? 'bg-cyan-50 text-cyan-700 border border-cyan-200'
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
                        onClick={() => handleStayUpdated(project)}
                        className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                          followedIds.includes(project.id)
                            ? "text-green-700 bg-green-50 border-green-300"
                            : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {followedIds.includes(project.id) ? "Following" : "Stay Updated"}
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