import { Header } from "../components/Header";
import { UserCircle2, Pencil, FileText, Mail, MapPin, Clock } from "lucide-react";
import imgProfile from "figma:asset/1a8e8f1388acd7e29af0518ac07ccba9821174d6.png";
import imgProject from "figma:asset/58fc0ac8e1ce3bfeee1106e5418571c76bcc020d.png";
import imgResume from "figma:asset/eea162a3bdec95f2e78582620862a4027b240df8.png";

export default function MyProfile() {
  const skills = [
    "Product Design",
    "User Research",
    "Prototyping",
    "UX Design",
    "Service Design",
    "Design Thinking",
    "Figma",
  ];

  // Availability data - your general availability
  const myAvailability = [
    { day: "Monday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Tuesday", timeSlots: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
    { day: "Wednesday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Thursday", timeSlots: ["10:00 AM - 3:00 PM"] },
    { day: "Friday", timeSlots: ["9:00 AM - 11:00 AM", "1:00 PM - 4:00 PM"] },
  ];

  const testimonials = [
    {
      quote: "They have a rare ability to turn messy human experiences into elegant, thoughtful interactions.",
      author: "Colleague, Manager at CMU HCII",
    },
    {
      quote: "Working with them changed the way I think about design research—they ask questions no one else thinks to ask.",
      author: "Grad Student, CMU HCII",
    },
    {
      quote: "Their work consistently bridges rigorous research and real human impact.",
      author: "Industry Partner, UX Research Lead",
    },
  ];

  const insights = [
    {
      title: "Technical Expertise",
      description: "Proven ability to optimize chemical processes and streamline production workflows, resulting in improved efficiency and cost reduction. Strong foundation in analytical chemistry and process engineering.",
    },
    {
      title: "Skilled at Rapid Prototyping and Experimentation",
      description: "Project experience demonstrates a strength in quickly building and testing interactive systems—using tools like sensors, embedded electronics, and digital interfaces—to explore new human–technology interactions.",
    },
    {
      title: "Effective Cross-Disciplinary Collaborator",
      description: "Their background working with designers, engineers, and researchers suggests an ability to communicate across disciplines and help teams align around user-centered goals.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Pencil className="h-3.5 w-3.5" />
                Edit Profile
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-[12px] font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                Import from LinkedIn
              </button>
              <button className="px-3 py-1.5 text-[12px] font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                Import from ORCID
              </button>
              <button className="px-3 py-1.5 text-[12px] font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                Download Resume
              </button>
            </div>
          </div>

          {/* My Availability Section */}
          <div className="bg-white border border-cyan-200 rounded-lg p-5 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-cyan-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-[13px] font-semibold text-gray-900 mb-1">My General Availability</h2>
                <p className="text-[12px] text-gray-600 mb-4">
                  Your typical weekly availability for meetings and collaboration (EST)
                </p>
                <div className="grid grid-cols-5 gap-4">
                  {myAvailability.map((day) => (
                    <div key={day.day} className="space-y-2">
                      <h4 className="text-[12px] font-semibold text-gray-900">
                        {day.day}
                      </h4>
                      <div className="space-y-1">
                        {day.timeSlots.map((slot, idx) => (
                          <div 
                            key={idx}
                            className="px-2.5 py-1.5 bg-cyan-50 text-cyan-700 text-[11px] font-medium rounded-md border border-cyan-200"
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                {/* Profile Picture */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-24 h-24 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                    <UserCircle2 className="w-16 h-16 text-gray-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Andrew Chan</h2>
                    <p className="text-[13px] text-gray-600">UX Researcher</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <Mail className="h-3.5 w-3.5 text-gray-400" />
                    <span>andrew.chan@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <MapPin className="h-3.5 w-3.5 text-gray-400" />
                    <span>Cleveland, Ohio</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[11px] font-medium text-gray-500 mb-3 uppercase tracking-wide">Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-50 text-gray-700 text-[11px] border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3">
                <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Activity</p>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Active Projects</div>
                    <div className="text-base font-semibold text-gray-900">1</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Collaborators</div>
                    <div className="text-base font-semibold text-gray-900">3</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 mb-0.5">Publications</div>
                    <div className="text-base font-semibold text-gray-900">8</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
                <h2 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">About</h2>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  I'm a UX researcher passionate about human-robot interaction and designing systems that enhance surgical precision. 
                  Currently working on the RoboDog project at University Hospitals Cleveland, where I bridge the gap between 
                  technology and clinical practice through user-centered design.
                </p>
              </div>

              {/* AI Insights */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">AI Insights</h2>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-200 uppercase tracking-wide">
                    Beta
                  </span>
                </div>
                <div className="space-y-4">
                  {insights.map((insight, idx) => (
                    <div key={idx} className="border-l-2 border-gray-300 pl-4 py-1 rounded-sm">
                      <h3 className="text-[13px] font-semibold text-gray-900 mb-1">{insight.title}</h3>
                      <p className="text-[12px] text-gray-600 leading-relaxed">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <h2 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Testimonials</h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-md p-4">
                      <p className="text-[13px] text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                      <p className="text-[11px] text-gray-500">— {testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio/Projects Preview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Recent Work</h2>
                  <button className="text-[12px] text-gray-600 hover:text-gray-900">View All →</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-[11px] text-gray-400">Project Image</span>
                  </div>
                  <div className="aspect-video bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-[11px] text-gray-400">Project Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}