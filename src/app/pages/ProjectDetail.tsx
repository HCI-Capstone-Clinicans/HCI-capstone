import { Header } from "../components/Header";
import { Link, useParams } from "react-router";
import { MapPin, ExternalLink, TrendingUp } from "lucide-react";
import imgRobot1 from "../../assets/ddae6b8d5d02b2088350f4841c6924acbca5d8f7.png";
import imgRobot2 from "../../assets/83df25dac5dc5e2ced674c21a91028ff1d2960ae.png";
import imgRoboDog3 from "../../assets/c1723e711714dd180e9890511514930b6856cfb4.png";
import imgOR from "../../assets/9b50c70f59b6a8d251cb854d643ae19e2b09f1ee.png";
import imgSurgicalRobot from "../../assets/50ea0122d65dbf98475b5bcd3be009ec20788d72.png";
import imgLogo from "../../assets/783f2c42ea769440e177775b6794f454354e65fd.png";
import { useState, useEffect } from "react";
import { MatchExplanation } from "../components/MatchExplanation";

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

interface TeamMeeting {
  day: string;
  time: string;
  type: string;
}

interface ProjectData {
  id: string;
  name: string;
  lab: string;
  location: string;
  status: string;
  startDate: string;
  teamSize: number;
  matchPercentage: number;
  overview: string[];
  researchAreas: string[];
  highlightAreas: string[];
  lookingFor: string[];
  highlightLookingFor: string[];
  teamMembers: TeamMember[];
  teamMeetings: TeamMeeting[];
  relatedProjects: { name: string; description: string; id: string }[];
  images: string[];
  matchFactors: { category: string; score: number; reason: string; isMatch: boolean }[];
}

const projectsData: Record<string, ProjectData> = {
  robodog: {
    id: "robodog",
    name: "RoboDog",
    lab: "Carroll Labs",
    location: "UH Cleveland Medical Center",
    status: "Prototype Development",
    startDate: "August 2025 — Ongoing",
    teamSize: 4,
    matchPercentage: 87,
    overview: [
      "RoboDog is an innovative research project exploring the application of robotic assistance in dermatologic surgery. Led by Dr. Bryan Carroll at University Hospitals Cleveland Medical Center, the project aims to develop intelligent robotic systems that can assist surgeons during delicate skin procedures.",
      "The research combines expertise from robotics engineering, human-robot interaction, and clinical practice to create tools that enhance surgical precision while maintaining the human element critical to patient care.",
    ],
    researchAreas: ["Robotics", "Human-Robot Interaction", "Surgery Assistance", "Medical Devices", "UX Research"],
    highlightAreas: ["Human-Robot Interaction", "Medical Devices"],
    lookingFor: ["Robotics Engineers", "Grant Writers", "Human-Robot Interaction Designer", "Service Designer"],
    highlightLookingFor: ["Human-Robot Interaction Designer", "Service Designer"],
    teamMembers: [
      { name: "Dr. Bryan Carroll", role: "Principal Investigator", expertise: "Dermatologic Surgery" },
      { name: "Daniel Kim", role: "Robotics Engineer", expertise: "Mechanical & Electronics Engineering" },
      { name: "Dr. Maya Patel", role: "Clinical Research Coordinator", expertise: "Research Operations" },
      { name: "Andrew Chan", role: "UX Researcher", expertise: "Human-Robot Interaction & Service Design" },
    ],
    teamMeetings: [
      { day: "Tuesday", time: "10:00 AM - 12:00 PM", type: "Weekly Team Sync" },
      { day: "Thursday", time: "2:00 PM - 3:00 PM", type: "Design Review" },
    ],
    relatedProjects: [
      { name: "MedAssist AI", description: "Surgical assistance platform", id: "medassist" },
      { name: "SmartSuture", description: "Automated suturing research", id: "smartsuture" },
    ],
    images: [imgRobot1, imgRobot2, imgRoboDog3],
    matchFactors: [
      { category: "Skills Alignment", score: 95, reason: "Your Service Design and Product Design skills complement Andrew Chan's expertise and fill gaps in the team's design capabilities.", isMatch: true },
      { category: "Shared Interests", score: 90, reason: "Strong overlap in Human-Robot Interaction and Human-centered design with the team's research focus.", isMatch: true },
      { category: "Team Synergy", score: 85, reason: "Your background enhances the team's Design Thinking and creates new opportunities for cross-functional collaboration.", isMatch: true },
      { category: "Research Experience", score: 75, reason: "Your project portfolio shows relevant experience in product development and UX research that aligns with project needs.", isMatch: true },
    ],
  },
  "burnout-prevention": {
    id: "burnout-prevention",
    name: "Burnout Prevention for Primary Caregivers",
    lab: "Cleveland Art Labs",
    location: "UH Cleveland Medical Center",
    status: "Active Research",
    startDate: "January 2025 — Ongoing",
    teamSize: 5,
    matchPercentage: 30,
    overview: [
      "Burnout Prevention is an ongoing research project led by Dr. Susan Stern at University Hospitals Cleveland in conjunction with the Cleveland Institute of Art to develop digital tools to aid caregivers.",
      "The project focuses on understanding the psychological and physical stressors experienced by primary caregivers and creating evidence-based digital interventions that support caregiver wellbeing and reduce burnout rates.",
    ],
    researchAreas: ["Caregiver Wellbeing", "Digital Health", "Human-Computer Interaction", "Mental Health", "UX Research"],
    highlightAreas: ["Human-Computer Interaction", "Digital Health"],
    lookingFor: ["UX Designers", "Mental Health Researchers", "Software Developers", "Data Analysts"],
    highlightLookingFor: ["UX Designers", "Mental Health Researchers"],
    teamMembers: [
      { name: "Dr. Susan Stern", role: "Principal Investigator", expertise: "Caregiver Psychology" },
      { name: "Lisa Nguyen", role: "UX Researcher", expertise: "Human-Computer Interaction" },
      { name: "Dr. James Park", role: "Clinical Psychologist", expertise: "Burnout & Mental Health" },
      { name: "Maria Santos", role: "Software Developer", expertise: "Mobile & Web Applications" },
      { name: "Kevin Wright", role: "Data Analyst", expertise: "Health Data & Statistics" },
    ],
    teamMeetings: [
      { day: "Monday", time: "9:00 AM - 10:30 AM", type: "Weekly Team Sync" },
      { day: "Wednesday", time: "1:00 PM - 2:00 PM", type: "Research Review" },
    ],
    relatedProjects: [
      { name: "RoboDog", description: "Robotic surgery assistance", id: "robodog" },
      { name: "MedAssist AI", description: "Surgical assistance platform", id: "medassist" },
    ],
    images: [],
    matchFactors: [
      { category: "Skills Alignment", score: 40, reason: "Some of your technical skills are applicable but the project primarily needs mental health and caregiver expertise.", isMatch: false },
      { category: "Shared Interests", score: 35, reason: "Limited overlap between your stated interests and the project's focus on caregiver wellbeing.", isMatch: false },
      { category: "Team Synergy", score: 25, reason: "The team is well-staffed in areas matching your expertise.", isMatch: false },
      { category: "Research Experience", score: 20, reason: "Your research background is in a different domain than this project requires.", isMatch: false },
    ],
  },
  smartsuture: {
    id: "smartsuture",
    name: "SmartSuture",
    lab: "Biomedical Engineering Lab",
    location: "Case Western Reserve University",
    status: "Early Research",
    startDate: "March 2025 — Ongoing",
    teamSize: 3,
    matchPercentage: 68,
    overview: [
      "SmartSuture is an automated suturing research project combining robotics and computer vision to assist in minimally invasive surgical procedures. The project is being developed at Case Western Reserve University's Biomedical Engineering department.",
      "The research aims to design a robotic suturing system capable of adapting to varying tissue conditions in real time, reducing operation time and improving consistency in wound closure across a range of surgical contexts.",
    ],
    researchAreas: ["Robotics", "Computer Vision", "Medical Devices", "Biomedical Engineering", "Machine Learning"],
    highlightAreas: ["Computer Vision", "Machine Learning"],
    lookingFor: ["Computer Vision Engineers", "Robotics Researchers", "Clinical Advisors", "UX Designers"],
    highlightLookingFor: ["Computer Vision Engineers", "UX Designers"],
    teamMembers: [
      { name: "Dr. Rachel Kim", role: "Principal Investigator", expertise: "Biomedical Engineering & Robotics" },
      { name: "Thomas Lee", role: "Computer Vision Engineer", expertise: "Machine Learning & Image Processing" },
      { name: "Dr. Priya Nair", role: "Clinical Advisor", expertise: "Minimally Invasive Surgery" },
    ],
    teamMeetings: [
      { day: "Wednesday", time: "11:00 AM - 12:30 PM", type: "Weekly Team Sync" },
      { day: "Friday", time: "10:00 AM - 11:00 AM", type: "Technical Review" },
    ],
    relatedProjects: [
      { name: "RoboDog", description: "Robotic surgery assistance", id: "robodog" },
      { name: "MedAssist AI", description: "Surgical assistance platform", id: "medassist" },
    ],
    images: [imgOR, imgSurgicalRobot],
    matchFactors: [
      { category: "Skills Alignment", score: 72, reason: "Your UX research skills are relevant to the human-computer interaction aspects of the suturing interface.", isMatch: true },
      { category: "Shared Interests", score: 70, reason: "Moderate alignment with robotics and medical device interests.", isMatch: true },
      { category: "Team Synergy", score: 65, reason: "The team lacks design expertise which you could provide.", isMatch: true },
      { category: "Research Experience", score: 55, reason: "Your experience in product development translates partially to this engineering-heavy project.", isMatch: false },
    ],
  },
  medassist: {
    id: "medassist",
    name: "MedAssist AI",
    lab: "Digital Health Innovation Lab",
    location: "Cleveland Clinic",
    status: "Active Development",
    startDate: "October 2024 — Ongoing",
    teamSize: 6,
    matchPercentage: 72,
    overview: [
      "MedAssist AI is an AI-powered surgical assistance platform that enhances precision and reduces operation time through real-time analytics and decision support. Developed at Cleveland Clinic's Digital Health Innovation Lab, the platform integrates seamlessly into existing surgical workflows.",
      "The project leverages cutting-edge machine learning models to provide surgeons with real-time recommendations, anomaly detection, and post-operative outcome predictions, aiming to improve patient outcomes across a wide range of surgical specialties.",
    ],
    researchAreas: ["AI/ML", "Surgery Assistance", "Medical Devices", "Data Analytics", "Clinical Informatics"],
    highlightAreas: ["AI/ML", "Surgery Assistance"],
    lookingFor: ["ML Engineers", "Clinical Data Scientists", "UX Researchers", "Software Engineers", "Clinical Advisors"],
    highlightLookingFor: ["UX Researchers", "Clinical Data Scientists"],
    teamMembers: [
      { name: "Dr. Angela Foster", role: "Principal Investigator", expertise: "Clinical Informatics & AI" },
      { name: "Sam Okafor", role: "ML Engineer", expertise: "Deep Learning & Computer Vision" },
      { name: "Dr. Chris Huang", role: "Clinical Advisor", expertise: "General Surgery" },
      { name: "Nina Petrov", role: "Data Scientist", expertise: "Healthcare Analytics" },
      { name: "Jordan Ellis", role: "Software Engineer", expertise: "Backend Systems & APIs" },
      { name: "Aisha Brown", role: "UX Researcher", expertise: "Clinical UX & Usability Testing" },
    ],
    teamMeetings: [
      { day: "Tuesday", time: "9:00 AM - 10:00 AM", type: "Weekly Stand-up" },
      { day: "Thursday", time: "3:00 PM - 4:30 PM", type: "Sprint Review" },
    ],
    relatedProjects: [
      { name: "RoboDog", description: "Robotic surgery assistance", id: "robodog" },
      { name: "SmartSuture", description: "Automated suturing research", id: "smartsuture" },
    ],
    images: [imgSurgicalRobot, imgOR],
    matchFactors: [
      { category: "Skills Alignment", score: 78, reason: "Your UX research background is directly applicable to the clinical usability testing needs of this platform.", isMatch: true },
      { category: "Shared Interests", score: 75, reason: "Your interest in human-centered design aligns with the project's focus on clinical workflow integration.", isMatch: true },
      { category: "Team Synergy", score: 70, reason: "The team can benefit from additional UX research perspectives to complement existing technical expertise.", isMatch: true },
      { category: "Research Experience", score: 60, reason: "Your experience with product development provides a foundation, though AI/ML domain knowledge would strengthen your contribution.", isMatch: false },
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);

  const project = projectsData[id ?? ""] ?? projectsData["robodog"];

  const isFollowed = (): boolean => {
    const followed: string[] = JSON.parse(localStorage.getItem("followedProjects") || "[]");
    return followed.includes(project.id);
  };

  const [following, setFollowing] = useState(isFollowed);

  const handleStayUpdated = () => {
    const followed: string[] = JSON.parse(localStorage.getItem("followedProjects") || "[]");
    const updated = followed.includes(project.id)
      ? followed.filter(id => id !== project.id)
      : [...followed, project.id];
    localStorage.setItem("followedProjects", JSON.stringify(updated));
    setFollowing(!followed.includes(project.id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setFollowing(isFollowed());
  }, [id]);

  const myAvailability = [
    { day: "Monday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Tuesday", timeSlots: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
    { day: "Wednesday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Thursday", timeSlots: ["10:00 AM - 3:00 PM"] },
    { day: "Friday", timeSlots: ["9:00 AM - 11:00 AM", "1:00 PM - 4:00 PM"] },
  ];

  const attendableMeetings = project.teamMeetings.filter(m =>
    myAvailability.some(d => d.day === m.day)
  ).length;
  const meetingOverlapPercentage = Math.round((attendableMeetings / project.teamMeetings.length) * 100);

  const getMeetingStatus = () => {
    if (meetingOverlapPercentage === 100) return { label: "Full Overlap", textColor: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-500" };
    if (meetingOverlapPercentage >= 50) return { label: "Partial Overlap", textColor: "text-cyan-700", bgColor: "bg-cyan-50", borderColor: "border-cyan-500" };
    return { label: "No Overlap", textColor: "text-red-700", bgColor: "bg-red-50", borderColor: "border-red-500" };
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
                        {project.status} | {project.startDate}
                      </div>
                      <h1 className="text-3xl font-semibold text-gray-900">{project.name}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.id === "robodog" && (
                        <img src={imgLogo} alt={project.lab} className="w-8 h-8 rounded object-cover" />
                      )}
                      <p className="text-base text-gray-700">{project.lab}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <button
                      onClick={() => setShowMatchExplanation(true)}
                      className="px-2 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-[11px] font-semibold rounded-md border border-green-200 hover:border-green-300 transition-all flex items-center gap-1"
                    >
                      <TrendingUp className="h-3 w-3" />
                      {project.matchPercentage}% Match
                    </button>
                    <button
                      onClick={handleStayUpdated}
                      className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                        following
                          ? "text-green-700 bg-green-50 border-green-300"
                          : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {following ? "Following" : "Stay Updated"}
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
                <div className="space-y-3">
                  {project.overview.map((para, idx) => (
                    <p key={idx} className="text-[13px] text-gray-700 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Research Images */}
              {project.images.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((src, idx) => (
                      <img key={idx} src={src} alt={`${project.name} image ${idx + 1}`} className="w-full h-48 object-cover border border-gray-200 rounded-md" />
                    ))}
                  </div>
                </div>
              )}

              {/* Team Members */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Team Members</h2>
                  <Link
                    to={`/project/${project.id}/skills-map`}
                    className="px-3 py-1.5 text-[13px] font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1.5"
                  >
                    View Skills Map
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.teamMembers.map((member, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
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

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Project Details</h2>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Status</div>
                    <div className="text-[13px] text-gray-900">{project.status}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Institution</div>
                    <div className="text-[13px] text-gray-900">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Lab</div>
                    <div className="text-[13px] text-gray-900">{project.lab}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Team Size</div>
                    <div className="text-[13px] text-gray-900">{project.teamSize} members</div>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Research Areas</h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.researchAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-[11px] font-medium rounded border ${
                        project.highlightAreas.includes(area)
                          ? "bg-cyan-50 text-cyan-700 border-cyan-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Looking For */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
                <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Looking For</h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.lookingFor.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-[11px] font-medium rounded border ${
                        project.highlightLookingFor.includes(item)
                          ? "bg-cyan-50 text-cyan-700 border-cyan-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team Meetings */}
              <div className="bg-white border border-cyan-200 rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] uppercase tracking-wide text-gray-500">Team Meetings</h2>
                  <span className={`px-2 py-0.5 text-[11px] font-medium rounded ${meetingStatus.bgColor} ${meetingStatus.textColor} border ${meetingStatus.borderColor}`}>
                    {meetingStatus.label}
                  </span>
                </div>
                <div className="space-y-2">
                  {project.teamMeetings.map((meeting, idx) => {
                    const canAttend = myAvailability.some(d => d.day === meeting.day);
                    return (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-md border ${canAttend ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
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
                  {project.relatedProjects.map((related, idx) => (
                    <Link
                      key={idx}
                      to={`/project/${related.id}`}
                      className="block p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <p className="text-[13px] font-medium text-gray-900">{related.name}</p>
                      <p className="text-[11px] text-gray-500 mt-1">{related.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Match Explanation Modal */}
      {showMatchExplanation && (
        <MatchExplanation
          matchPercentage={project.matchPercentage}
          projectName={project.name}
          factors={project.matchFactors}
          onClose={() => setShowMatchExplanation(false)}
        />
      )}
    </div>
  );
}
