import { Header } from "../components/Header";
import { Link } from "react-router";
import { MapPin, ExternalLink, TrendingUp, Clock } from "lucide-react";
import imgRobot1 from "figma:asset/ddae6b8d5d02b2088350f4841c6924acbca5d8f7.png";
import imgRobot2 from "figma:asset/83df25dac5dc5e2ced674c21a91028ff1d2960ae.png";
import imgLogo from "figma:asset/783f2c42ea769440e177775b6794f454354e65fd.png";
import { useState } from "react";
import { MatchExplanation } from "../components/MatchExplanation";

export default function ProjectDetail() {
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  
  const teamMembers = [
    {
      name: "Dr. Bryan Carroll",
      role: "Principal Investigator",
      expertise: "Dermatologic Surgery",
      image: null,
    },
    {
      name: "Daniel Kim",
      role: "Robotics Engineer",
      expertise: "Mechanical & Electronics Engineering",
      image: null,
    },
    {
      name: "Dr. Maya Patel",
      role: "Clinical Research Coordinator",
      expertise: "Research Operations",
      image: null,
    },
    {
      name: "Andrew Chan",
      role: "UX Researcher",
      expertise: "Human-Robot Interaction & Service Design",
      image: null,
    },
  ];

  // Team meeting schedule
  const teamMeetings = [
    { day: "Tuesday", time: "10:00 AM - 12:00 PM", type: "Weekly Team Sync" },
    { day: "Thursday", time: "2:00 PM - 3:00 PM", type: "Design Review" },
  ];

  // User's availability (from My Profile)
  const myAvailability = [
    { day: "Monday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Tuesday", timeSlots: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
    { day: "Wednesday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Thursday", timeSlots: ["10:00 AM - 3:00 PM"] },
    { day: "Friday", timeSlots: ["9:00 AM - 11:00 AM", "1:00 PM - 4:00 PM"] },
  ];

  // Check if user can attend team meetings
  const checkMeetingOverlap = () => {
    let canAttendCount = 0;
    teamMeetings.forEach(meeting => {
      const userDay = myAvailability.find(d => d.day === meeting.day);
      if (userDay) {
        // Simple check - in real app would parse times more carefully
        canAttendCount++;
      }
    });
    return canAttendCount;
  };

  const attendableMeetings = checkMeetingOverlap();
  const meetingOverlapPercentage = Math.round((attendableMeetings / teamMeetings.length) * 100);
  
  // Determine overlap status
  const getMeetingStatus = () => {
    if (meetingOverlapPercentage === 100) return { label: "Full Overlap", color: "green", textColor: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-500" };
    if (meetingOverlapPercentage >= 50) return { label: "Partial Overlap", color: "cyan", textColor: "text-cyan-700", bgColor: "bg-cyan-50", borderColor: "border-cyan-500" };
    return { label: "No Overlap", color: "red", textColor: "text-red-700", bgColor: "bg-red-50", borderColor: "border-red-500" };
  };

  const meetingStatus = getMeetingStatus();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/find-projects" className="text-[13px] text-gray-500 hover:text-gray-900">
              ← Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                        Prototype development | August 2025 — Ongoing
                      </div>
                      <h1 className="text-3xl font-semibold text-gray-900">RoboDog</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={imgLogo} alt="Carroll Labs" className="w-8 h-8 rounded object-cover" />
                      <p className="text-base text-gray-700">Carroll Labs</p>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>UH Cleveland Medical Center</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <button 
                      onClick={() => setShowMatchExplanation(true)}
                      className="px-2 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-[11px] font-semibold rounded-md border border-green-200 hover:border-green-300 transition-all flex items-center gap-1"
                    >
                      <TrendingUp className="h-3 w-3" />
                      87% Match
                    </button>
                    <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Stay Updated
                    </button>
                    <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap">
                      Contact Project Coordinator
                    </button>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Overview</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    RoboDog is an innovative research project exploring the application of robotic assistance in dermatologic surgery. 
                    Led by Dr. Bryan Carroll at University Hospitals Cleveland Medical Center, the project aims to develop intelligent 
                    robotic systems that can assist surgeons during delicate skin procedures.
                  </p>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    The research combines expertise from robotics engineering, human-robot interaction, and clinical practice to create 
                    tools that enhance surgical precision while maintaining the human element critical to patient care.
                  </p>
                </div>
              </div>

              {/* Research Images */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research</h2>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={imgRobot1}
                    alt="RoboDog prototype"
                    className="w-full h-48 object-cover border border-gray-200 rounded-md"
                  />
                  <img
                    src={imgRobot2}
                    alt="RoboDog in lab"
                    className="w-full h-48 object-cover border border-gray-200 rounded-md"
                  />
                </div>
              </div>

              {/* People */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Team Members</h2>
                  <Link
                    to="/project/robodog/skills-map"
                    className="px-3 py-1.5 text-[13px] font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1.5"
                  >
                    View Skills Map
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                          <span className="text-[12px] text-gray-500 font-medium">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium text-gray-900">{member.name}</p>
                          <p className="text-[12px] text-gray-600 mt-0.5">{member.role}</p>
                          <p className="text-[11px] text-gray-500 mt-1">{member.expertise}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Project Details</h2>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Status</div>
                    <div className="text-[13px] text-gray-900">Prototype Development</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Institution</div>
                    <div className="text-[13px] text-gray-900">UH Cleveland Medical Center</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Lab</div>
                    <div className="text-[13px] text-gray-900">Carroll Labs</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Team Size</div>
                    <div className="text-[13px] text-gray-900">4 members</div>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research Areas</h2>
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
                  <span className="px-2 py-1 text-[11px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200 rounded">
                    Medical Devices
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    UX Research
                  </span>
                </div>
              </div>

              {/* Looking For */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Looking For</h2>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Robotics Engineers
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Grant Writers
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200 rounded">
                    Human-Robot Interaction Designer
                  </span>
                  <span className="px-2 py-1 text-[11px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200 rounded">
                    Service Designer
                  </span>
                </div>
              </div>

              {/* Meeting Availability */}
              <div className="bg-white border border-cyan-200 rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Team Meetings</h2>
                  <span className={`px-2 py-0.5 text-[11px] font-medium rounded ${meetingStatus.bgColor} ${meetingStatus.textColor} border ${meetingStatus.borderColor}`}>
                    {meetingStatus.label}
                  </span>
                </div>
                <div className="space-y-2">
                  {teamMeetings.map((meeting, idx) => {
                    const userDay = myAvailability.find(d => d.day === meeting.day);
                    const canAttend = !!userDay;
                    return (
                      <div 
                        key={idx} 
                        className={`p-2.5 rounded-md border ${canAttend ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[12px] font-medium text-gray-900">{meeting.day}</span>
                          {canAttend && (
                            <span className="text-[10px] font-medium text-green-700 uppercase tracking-wide">Available</span>
                          )}
                        </div>
                        <div className="text-[11px] text-gray-600">{meeting.time}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{meeting.type}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Related Projects</h2>
                <div className="space-y-3">
                  <a href="#" className="block p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors">
                    <p className="text-[13px] font-medium text-gray-900">MedAssist AI</p>
                    <p className="text-[11px] text-gray-500 mt-1">Surgical assistance platform</p>
                  </a>
                  <a href="#" className="block p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors">
                    <p className="text-[13px] font-medium text-gray-900">SmartSuture</p>
                    <p className="text-[11px] text-gray-500 mt-1">Automated suturing research</p>
                  </a>
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