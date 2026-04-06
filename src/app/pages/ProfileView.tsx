import { Header } from "../components/Header";
import { Link } from "react-router";
import { Mail, Phone, Award, CheckCircle2, TrendingUp, ArrowLeft, Clock } from "lucide-react";
import imgProfile from "figma:asset/9413ba0db7fd4497be1e97294806a8143016fe86.png";
import imgProject1 from "figma:asset/50ea0122d65dbf98475b5bcd3be009ec20788d72.png";
import imgProject2 from "figma:asset/9b50c70f59b6a8d251cb854d643ae19e2b09f1ee.png";
import imgResume from "figma:asset/63c954fdc052bbdee5ea11e1d6c367589196bb22.png";

export default function ProfileView() {
  const skills = [
    "Service Design",
    "User Research",
    "UX Prototyping",
    "Rapid Prototyping"
  ];

  const interests = [
    "Human Robot Interaction",
    "Human-Centered Design",
    "User Research",
    "Healthcare"
  ];

  const collaborationStyle = [
    "In-person",
    "Frequent Communicator",
    "Team Player"
  ];

  // Availability data
  const overlappingAvailability = [
    { day: "Monday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Tuesday", timeSlots: ["10:00 AM - 1:00 PM"] },
    { day: "Wednesday", timeSlots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
    { day: "Thursday", timeSlots: ["10:00 AM - 3:00 PM"] },
    { day: "Friday", timeSlots: ["9:00 AM - 11:00 AM"] },
  ];

  // Calculate total overlapping hours
  const calculateTotalHours = () => {
    let total = 0;
    overlappingAvailability.forEach(day => {
      day.timeSlots.forEach(slot => {
        const [start, end] = slot.split(' - ');
        const startHour = parseInt(start.split(':')[0]) + (start.includes('PM') && !start.includes('12') ? 12 : 0);
        const endHour = parseInt(end.split(':')[0]) + (end.includes('PM') && !end.includes('12') ? 12 : 0);
        total += endHour - startHour;
      });
    });
    return total;
  };

  const totalOverlapHours = calculateTotalHours();
  const overlapPercentage = Math.min(Math.round((totalOverlapHours / 40) * 100), 100); // Assuming 40 hour work week
  
  // Determine status based on overlap
  const getOverlapStatus = () => {
    if (totalOverlapHours >= 15) return { label: "Excellent", color: "green", textColor: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-500" };
    if (totalOverlapHours >= 10) return { label: "Good", color: "cyan", textColor: "text-cyan-700", bgColor: "bg-cyan-50", borderColor: "border-cyan-500" };
    if (totalOverlapHours >= 5) return { label: "Moderate", color: "yellow", textColor: "text-yellow-700", bgColor: "bg-yellow-50", borderColor: "border-yellow-500" };
    return { label: "Limited", color: "red", textColor: "text-red-700", bgColor: "bg-red-50", borderColor: "border-red-500" };
  };

  const overlapStatus = getOverlapStatus();

  const projects = [
    {
      id: 1,
      title: "Surgical Robot Research",
      role: "UX Designer",
      endorsement: "Endorsed by Sophia Skedros",
      image: imgProject1,
      featured: true
    },
    {
      id: 2,
      title: "Operating Room Design",
      role: "UX Researcher",
      image: imgProject2,
      featured: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Jane has a rare ability to translate complex clinical workflows into intuitive design solutions through",
      highlight: "Rapid Prototyping",
      author: "Surgical Robotics Engineer, Philips Medical"
    },
    {
      id: 2,
      text: "Her research consistently surfaces insights that clinicians actually recognize from their day-to-day work.",
      author: "Attending Surgeon, University Hospital"
    },
    {
      id: 3,
      text: "Jane moves effortlessly between rigorous user research and rapid prototyping, which makes her an invaluable collaborator on interdisciplinary teams.",
      author: "Product Manager, Healthcare Innovation Lab"
    }
  ];

  const insights = [
    {
      title: "Bridges Research and Product Development",
      description: "Jane's resume suggests a strength in moving insights from user research into tangible design solutions, combining UX research methods with prototyping and product design experience."
    },
    {
      title: "Deep Experience in Healthcare Contexts",
      description: "Her work on surgical robotics and operating room design indicates a strong ability to understand complex clinical environments and design solutions that fit into high-stakes workflows."
    },
    {
      title: "Strong Cross-Functional Communication",
      description: "Roles that involve collaboration with engineers, clinicians, and product teams highlight her ability to translate user needs and research insights across disciplines."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/find-collaborators" className="text-[13px] text-gray-500 hover:text-gray-900 inline-flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Collaborators
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={imgProfile} 
                alt="Jane Smith"
                className="w-64 h-64 object-cover rounded-md border border-gray-200"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              {/* Match and CTA */}
              <div className="flex justify-end gap-2">
                <div className="px-2.5 py-1.5 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-[11px] font-semibold rounded-md border border-green-200 inline-flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  80% Match
                </div>
                <button className="px-4 py-2 text-[13px] font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md transition-colors">
                  Get in touch
                </button>
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Jane Smith</h1>
                <p className="text-[13px] text-gray-700 mb-0.5">UX Researcher and Designer</p>
                <p className="text-[13px] text-gray-600 mb-2">UX Research Manager at Philips Medical</p>
                <div className="flex items-center gap-3 text-[12px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>js@pm.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>555-555-5555</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2">Skills</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 bg-gray-50 text-gray-700 text-[11px] font-medium rounded-md border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2">Interests</p>
                <div className="flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <span 
                      key={interest}
                      className="px-2.5 py-1 bg-gray-50 text-gray-700 text-[11px] font-medium rounded-md border border-gray-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaboration Style */}
              <div>
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-2">Collaboration Style</p>
                <div className="flex flex-wrap gap-1.5">
                  {collaborationStyle.map((style) => (
                    <span 
                      key={style}
                      className="px-2.5 py-1 bg-gray-50 text-gray-700 text-[11px] font-medium rounded-md border border-gray-200"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Availability */}
        <div className="bg-white border border-cyan-200 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 bg-cyan-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-[13px] font-semibold text-gray-900">Overlapping Availability</h2>
                    {/* Compact Visual Indicator */}
                    <span className={`px-2 py-0.5 text-[11px] font-medium rounded ${overlapStatus.bgColor} ${overlapStatus.textColor} border ${overlapStatus.borderColor}`}>
                      {totalOverlapHours} hrs/wk · {overlapStatus.label}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-600">
                    Times when you and Jane are both available to meet and work together (EST)
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {overlappingAvailability.map((day) => (
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

        {/* Platform Experience Banner */}
        <div className="bg-white border border-cyan-200 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-cyan-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-[13px] font-semibold text-gray-900 mb-1">Experienced Platform Member</h2>
              <p className="text-[13px] text-gray-700 leading-relaxed">
                Jane has been an active member of Clinician Connect for 3+ years, successfully completing 12 collaborative projects 
                with a 95% satisfaction rating. Her expertise in healthcare UX and consistent delivery make her a highly sought-after collaborator.
              </p>
            </div>
          </div>
        </div>

        {/* Past Projects */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-[11px] uppercase tracking-wide text-gray-500 mb-4">Past Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="space-y-3">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-md border border-gray-200"
                />
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-0.5">{project.title}</h3>
                  <p className="text-[13px] text-gray-600 mb-1">{project.role}</p>
                  {project.featured && project.endorsement && (
                    <div className="flex items-center gap-1.5 text-[12px] text-gray-700">
                      <Award className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{project.endorsement}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-[11px] uppercase tracking-wide text-gray-500 mb-4">Testimonials</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-2">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    "{testimonial.text}
                    {testimonial.highlight && (
                      <span className="inline-flex items-center mx-1 px-2 py-0.5 bg-cyan-50 text-cyan-700 text-[11px] font-medium rounded-md border border-cyan-200">
                        {testimonial.highlight}
                      </span>
                    )}
                    {testimonial.highlight && '.'}"
                  </p>
                </div>
                <p className="text-right text-[12px] text-gray-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume & Insights */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-[11px] uppercase tracking-wide text-gray-500 mb-4">Resume</h2>
          <div className="flex gap-8">
            {/* Resume Preview */}
            <div className="flex-shrink-0 space-y-3">
              <img 
                src={imgResume}
                alt="Resume preview"
                className="w-64 h-64 object-cover rounded-md border border-gray-200"
              />
              <button className="w-full px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                View resume
              </button>
            </div>

            {/* AI-Generated Insights */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1">Insights Generated</h3>
                <p className="text-[12px] text-gray-500">AI-powered analysis of workstyle and collaboration fit</p>
              </div>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="space-y-1.5">
                    <h4 className="text-[13px] font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      {insight.title}
                    </h4>
                    <p className="text-[13px] text-gray-700 leading-relaxed pl-6">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}