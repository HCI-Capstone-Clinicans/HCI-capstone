import { useState } from "react";
import { Header } from "../components/Header";
import { Search, Filter, SlidersHorizontal, UserCircle2, TrendingUp } from "lucide-react";
import { MatchExplanation } from "../components/MatchExplanation";
import { Link } from "react-router";

export default function FindCollaborators() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  const [selectedCollab, setSelectedCollab] = useState<any>(null);
  
  const collaborators = [
    {
      name: "Eric Shanefield",
      role: "Clinical Researcher",
      organization: "Clinical Research Manager at UPMC",
      contact: "ericsh@upmc.org | 555-555-5555",
      pastProjects: ["Hallway Design for EDs", "Trauma Room Design"],
      skills: ["Research Ops", "User Research", "Grant Writing", "Team Management", "Microsoft Office"],
      interests: ["Human-robot interaction", "Human-centered design", "Product design", "Sustainability", "User research"],
      match: 20,
      highlightSkills: [],
      highlightInterests: [],
    },
    {
      name: "John Doe",
      role: "Service Designer",
      organization: "Service Designer at Pittsburgh International Airport",
      contact: "jd@pit.com | 555-555-5555",
      pastProjects: ["Check-in Robotics", "TSA Kiosk"],
      skills: ["Service Design", "User Research", "UX Prototyping", "Rapid Prototyping", "Product Design"],
      interests: ["Human-robot interaction", "Human-centered design", "Product design", "Sustainability", "User research"],
      match: 47,
      highlightSkills: [],
      highlightInterests: [],
    },
    {
      name: "Jane Smith",
      role: "UX Researcher and Designer",
      organization: "UX Research Manager at Philips Medical",
      contact: "js@pm.com | 555-555-5555",
      pastProjects: ["Surgical Robot Research", "Operating Room Design"],
      skills: ["Service Design", "User Research", "UX Prototyping", "Rapid Prototyping", "Product Design"],
      interests: ["Human-robot interaction", "Human-centered design", "Product design", "Sustainability", "User research"],
      match: 80,
      highlightSkills: ["Service Design"],
      highlightInterests: ["Human-centered design"],
    },
  ];

  // Check if any search is active
  const hasActiveSearch = searchTerm.trim().length > 0;

  // Sort by match score only when there's an active search
  const displayedCollaborators = hasActiveSearch 
    ? [...collaborators].sort((a, b) => b.match - a.match)
    : collaborators;

  const handleShowMatch = (collab: any) => {
    setSelectedCollab(collab);
    setShowMatchExplanation(true);
  };

  const getMatchFactors = (collab: any) => {
    if (collab.match >= 80) {
      return [
        {
          category: "Skills Overlap",
          score: 95,
          reason: "Strong alignment in Service Design, User Research, and UX Prototyping skills.",
          isMatch: true,
        },
        {
          category: "Research Interests",
          score: 85,
          reason: "Shared interest in human-robot interaction and human-centered design.",
          isMatch: true,
        },
        {
          category: "Project Experience",
          score: 78,
          reason: "Relevant experience in surgical robotics and operating room design.",
          isMatch: true,
        },
        {
          category: "Collaboration Potential",
          score: 72,
          reason: "Complementary background with opportunities for cross-disciplinary work.",
          isMatch: true,
        },
      ];
    }
    return [
      {
        category: "Skills Overlap",
        score: 60,
        reason: "Some shared skills in service design and prototyping.",
        isMatch: true,
      },
      {
        category: "Research Interests",
        score: 45,
        reason: "Limited overlap in specific research focus areas.",
        isMatch: false,
      },
      {
        category: "Project Experience",
        score: 38,
        reason: "Different project focus - airport systems vs medical robotics.",
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
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Find Collaborators</h1>
            <p className="text-[13px] text-gray-600">Search for researchers and clinicians to join your projects</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex gap-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2.5">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for collaborators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-[13px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
            
            <button className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="h-4 w-4 text-gray-600" />
              <span className="text-[13px] font-medium text-gray-700">Filters</span>
            </button>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-[12px] text-gray-500">{collaborators.length} results found</p>
          </div>

          {/* Collaborators List */}
          <div className="space-y-4">
            {displayedCollaborators.map((collab, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
              >
                <div className="flex gap-5">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                      <UserCircle2 className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{collab.name}</h3>
                        <p className="text-[13px] text-gray-600 mt-0.5">{collab.role}</p>
                        <p className="text-[12px] text-gray-500 mt-1">{collab.organization}</p>
                      </div>
                      {hasActiveSearch && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleShowMatch(collab)}
                            className={`px-2 py-1 text-[11px] font-semibold rounded-md border flex items-center gap-1 transition-all ${
                              collab.match >= 70
                                ? 'bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200 hover:border-green-300'
                                : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <TrendingUp className="h-3 w-3" />
                            {collab.match}% Match
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <div className="text-[12px] text-gray-500">
                      {collab.contact}
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-[11px] font-medium text-gray-500 mb-2">Skills</p>
                      <div className="flex flex-wrap gap-1.5">
                        {collab.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className={`px-2 py-1 text-[11px] border rounded-md ${
                              hasActiveSearch && collab.highlightSkills.includes(skill)
                                ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                                : 'bg-gray-50 text-gray-700 border-gray-200'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <p className="text-[11px] font-medium text-gray-500 mb-2">Research Interests</p>
                      <div className="flex flex-wrap gap-1.5">
                        {collab.interests.slice(0, 5).map((interest, interestIdx) => (
                          <span
                            key={interestIdx}
                            className={`px-2 py-1 text-[11px] border rounded-md ${
                              hasActiveSearch && collab.highlightInterests.includes(interest)
                                ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                                : 'bg-gray-50 text-gray-600 border-gray-200'
                            }`}
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Past Projects */}
                    <div>
                      <p className="text-[11px] font-medium text-gray-500 mb-2">Past Projects</p>
                      <div className="flex gap-2">
                        {collab.pastProjects.map((project, projIdx) => (
                          <span
                            key={projIdx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-[11px] border border-blue-200 rounded-md"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button className="px-4 py-2 text-[13px] font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors">
                        Contact
                      </button>
                      <Link to={`/profile/${collab.name.replace(/\s+/g, '-').toLowerCase()}`}>
                        <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                          View Profile
                        </button>
                      </Link>
                      <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                        Add to Project
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
      {showMatchExplanation && selectedCollab && (
        <MatchExplanation
          matchPercentage={selectedCollab.match}
          projectName={`${selectedCollab.name} - ${selectedCollab.role}`}
          factors={getMatchFactors(selectedCollab)}
          onClose={() => setShowMatchExplanation(false)}
        />
      )}
    </div>
  );
}