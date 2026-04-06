import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Header } from "../components/Header";
import { ArrowLeft, MapPin, TrendingUp } from "lucide-react";
import { VennDiagram4People } from "../components/VennDiagram4People";
import { VennDiagram5People } from "../components/VennDiagram5People";
import { VennDiagramDetailed } from "../components/VennDiagramDetailed";
import { MatchExplanation } from "../components/MatchExplanation";

export default function SkillsMap() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [zoom, setZoom] = useState(0);
  const [showYou, setShowYou] = useState(false);
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);

  const teamMembers = [
    {
      id: "andrew",
      name: "Andrew Chan",
      role: "HCI Researcher",
      skills: ["Service Design"],
      position: showYou ? { x: 150, y: 550 } : { x: 190, y: 380 },
      color: "cyan",
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      role: "Robotics Engineer",
      skills: ["Mechanical Engineering", "Electronics Engineering"],
      position: showYou ? { x: 450, y: 400 } : { x: 534, y: 230 },
      color: "green",
    },
    {
      id: "maya",
      name: "Dr. Maya Patel",
      role: "Clinician Support",
      skills: ["Research Operations"],
      position: showYou ? { x: 350, y: 650 } : { x: 489, y: 550 },
      color: "yellow",
    },
    {
      id: "bryan",
      name: "Dr. Bryan Carroll",
      role: "Dermatologic Surgeon",
      skills: ["Surgery"],
      position: showYou ? { x: 450, y: 850 } : { x: 555, y: 850 },
      color: "rose",
    },
  ];

  const sharedSkills = showYou
    ? [
        { name: "Human-Robot Interaction", position: { x: 340, y: 480 }, size: "sm" },
        { name: "Design Thinking", position: { x: 380, y: 560 }, size: "xs" },
        { name: "Quantitative Research", position: { x: 440, y: 580 }, size: "sm" },
        { name: "UX Writing", position: { x: 280, y: 630 }, size: "sm" },
        { name: "Medicine", position: { x: 400, y: 730 }, size: "sm" },
      ]
    : [
        { name: "Human-Robot Interaction", position: { x: 371, y: 360 }, size: "sm" },
        { name: "Design Thinking", position: { x: 342, y: 420 }, size: "xs" },
        { name: "Quantitative Research", position: { x: 474, y: 450 }, size: "sm" },
        { name: "UX Writing", position: { x: 361, y: 490 }, size: "sm" },
        { name: "Medicine", position: { x: 517, y: 700 }, size: "sm" },
      ];

  const youSkills = [
    { name: "Product Design", position: { x: 320, y: 420 }, size: "sm" },
    { name: "Visual Design", position: { x: 250, y: 500 }, size: "sm" },
    { name: "Product Development", position: { x: 410, y: 450 }, size: "sm" },
  ];

  const handleZoomIn = () => setZoom(Math.min(zoom + 20, 100));
  const handleZoomOut = () => setZoom(Math.max(zoom - 20, 0));

  const getSkillSize = (size: string) => {
    if (size === "xs") return "text-[10px] px-2 py-1";
    if (size === "sm") return "text-[11px] px-2.5 py-1.5";
    return "text-[12px] px-3 py-2";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Project Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-8 py-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Project</span>
            </button>

            <div className="space-y-1">
              <p className="text-[11px] font-normal text-gray-500 tracking-[0.34px] uppercase">prototype development | August 2025 — Ongoing</p>
              <div className="flex items-center gap-3">
                <h1 className="text-5xl font-medium text-gray-900">RoboDog</h1>
                <button
                  onClick={() => setShowMatchExplanation(true)}
                  className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg hover:border-green-300 transition-colors"
                >
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-[11px] font-semibold text-green-600 tracking-[0.06px]">87% Match</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img 
                  src="figma:asset/783f2c42ea769440e177775b6794f454354e65fd.png" 
                  alt="Carroll Labs"
                  className="w-8 h-8 object-cover rounded"
                />
                <h2 className="text-2xl font-medium text-gray-900">Carroll Labs</h2>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-[13px] text-gray-700">UH Cleveland Medical Center</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Stay Updated
              </button>
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Contact Project Coordinator
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex gap-6">
            {/* Left Sidebar */}
            <div className="w-[240px] flex-shrink-0 space-y-4">
              {/* Project Topics */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-3">Project Topics</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Robotics
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200 rounded">
                    Human-Robot Interaction
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Surgery Assistance
                  </span>
                </div>
              </div>

              {/* Looking For */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-3">Looking for</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Robotics Engineers
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200 rounded">
                    Human-Robot Interaction Practitioner
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Grant Writers
                  </span>
                </div>
              </div>

              {/* Insights (shown when "You" is visible) */}
              {showYou && (
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-[11px] font-medium text-gray-400 mb-3">Insights Generated</p>
                  
                  {/* 87% Match Button */}
                  <button
                    onClick={() => setShowMatchExplanation(true)}
                    className="mb-2 w-full flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-blue-50 border border-[#b9f8cf] rounded-lg hover:border-green-300 transition-colors"
                  >
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 12 12">
                      <path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#008236" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 3.5H11V6.5" stroke="#008236" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] font-semibold text-[#008236]">87% Match</span>
                  </button>

                  {/* Insights List */}
                  <ul className="text-[13px] text-gray-700 space-y-2 list-disc pl-4">
                    <li>
                      You are closest in skillset to <span className="font-semibold">Andrew Chan</span>
                    </li>
                    <li>
                      You bring a new skill of <span className="font-semibold">Product Design</span>
                    </li>
                    <li>
                      The team becomes stronger in <span className="font-semibold">Design Thinking</span> and{" "}
                      <span className="font-semibold">Human-Robot Interaction</span> with you
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Venn Diagram */}
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Skills Map</h3>
                    <p className="text-[12px] text-gray-500 mt-0.5">
                      Explore how team members' skills intersect
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowYou(!showYou)}
                      className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                        showYou
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                          : "bg-white text-gray-700 border-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {showYou ? "Hide My Fit" : "How do I fit in?"}
                    </button>

                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5">
                      <button
                        onClick={handleZoomOut}
                        disabled={zoom <= 0}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        −
                      </button>
                      <span className="text-[11px] text-gray-500 min-w-[40px] text-center">
                        {zoom}%
                      </span>
                      <button
                        onClick={handleZoomIn}
                        disabled={zoom >= 100}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className={`flex items-center gap-3 mb-4 ${showYou ? 'bg-blue-50 rounded-lg px-2 py-1 w-fit' : ''}`}>
                  <p className="text-[16px] font-medium text-gray-900">
                    <span className={showYou ? 'text-blue-600' : ''}>{showYou ? '5' : '4'} </span>
                    <span className="text-[12px] font-normal text-gray-500">Team Members</span>
                  </p>
                  <p className="text-[16px] font-medium text-gray-900">
                    <span className={showYou ? 'text-blue-600' : ''}>{showYou ? '13' : '11'} </span>
                    <span className="text-[12px] font-normal text-gray-500">Total Skills</span>
                  </p>
                  <p className="text-[16px] font-medium text-gray-900">
                    <span className={showYou ? 'text-blue-600' : ''}>{showYou ? '8' : '6'} </span>
                    <span className="text-[12px] font-normal text-gray-500">Shared Skills</span>
                  </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {showYou && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-100/30 border border-blue-600 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                      <span className="text-[12px] text-gray-700">You</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/95 border border-gray-300 rounded-lg">
                    <div className="w-2 h-2 bg-rose-500 rounded-sm"></div>
                    <span className="text-[12px] text-gray-700">Dr. Bryan Carroll</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/95 border border-gray-300 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-sm"></div>
                    <span className="text-[12px] text-gray-700">Dr. Maya Patel</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/95 border border-gray-300 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                    <span className="text-[12px] text-gray-700">Andrew Chan</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/95 border border-gray-300 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    <span className="text-[12px] text-gray-700">Daniel Kim</span>
                  </div>
                </div>

                {/* Venn Diagram Container */}
                <div className="relative h-[700px] bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                  <div
                    className="transition-transform duration-300 origin-top-left"
                    style={{ 
                      transform: `scale(${1 + zoom / 100})`,
                    }}
                  >
                    {zoom > 0 ? (
                      <VennDiagramDetailed />
                    ) : (
                      showYou ? <VennDiagram5People /> : <VennDiagram4People />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Match Explanation Modal */}
      {showMatchExplanation && (
        <MatchExplanation
          matchPercentage={87}
          projectName="RoboDog"
          factors={[
            {
              category: "Skills Alignment",
              score: 95,
              reason: "Your Service Design and Product Design skills complement Andrew Chan's expertise and fill gaps in the team's design capabilities.",
              isMatch: true,
            },
            {
              category: "Shared Interests",
              score: 90,
              reason: "Strong overlap in Human-Robot Interaction and Human-centered design with the team's research focus.",
              isMatch: true,
            },
            {
              category: "Team Synergy",
              score: 85,
              reason: "Your background enhances the team's Design Thinking and creates new opportunities for cross-functional collaboration.",
              isMatch: true,
            },
            {
              category: "Research Experience",
              score: 75,
              reason: "Your project portfolio shows relevant experience in product development and UX research that aligns with project needs.",
              isMatch: true,
            },
          ]}
          onClose={() => setShowMatchExplanation(false)}
        />
      )}
    </div>
  );
}