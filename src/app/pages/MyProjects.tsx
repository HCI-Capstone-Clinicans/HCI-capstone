import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, MapPin, Plus } from "lucide-react";
import { useState, useEffect } from "react";

const allProjects: Record<string, { id: string; name: string; lab: string; location: string; role: string; tags: string[] }> = {
  robodog: {
    id: "robodog",
    name: "RoboDog",
    lab: "Carroll Labs",
    location: "UH Cleveland Medical Center",
    role: "HCI Researcher",
    tags: ["Robotics", "Human-Robot Interaction", "Surgery Assistance"],
  },
  "burnout-prevention": {
    id: "burnout-prevention",
    name: "Burnout Prevention for Primary Caregivers",
    lab: "Cleveland Art Labs",
    location: "UH Cleveland Medical Center",
    role: "Following",
    tags: ["Digital Health", "Human-Computer Interaction", "Mental Health"],
  },
  smartsuture: {
    id: "smartsuture",
    name: "SmartSuture",
    lab: "Biomedical Engineering Lab",
    location: "Case Western Reserve University",
    role: "Following",
    tags: ["Robotics", "Computer Vision", "Medical Devices"],
  },
  medassist: {
    id: "medassist",
    name: "MedAssist AI",
    lab: "Digital Health Innovation Lab",
    location: "Cleveland Clinic",
    role: "Following",
    tags: ["AI/ML", "Surgery Assistance", "Medical Devices"],
  },
};

export default function MyProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [followedIds, setFollowedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored: string[] = JSON.parse(localStorage.getItem("followedProjects") || "[]");
    setFollowedIds(stored);
  }, []);

  // Always show robodog as active; add followed projects on top
  const projectIds = ["robodog", ...followedIds.filter(id => id !== "robodog")];
  const projects = projectIds.map(id => allProjects[id]).filter(Boolean);

  const filtered = searchQuery
    ? projects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : projects;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">My Projects</h1>
              <p className="text-[13px] text-gray-600">Manage and track your research collaborations</p>
            </div>

            <button className="px-4 py-2 bg-gray-900 text-white text-[13px] font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 rounded-md">
              <Plus className="h-4 w-4" />
              New Project
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2.5 max-w-md">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search your projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-[13px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((project) => {
              const isActive = project.id === "robodog";
              return (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors group"
                >
                  <div className="space-y-3">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 text-[10px] font-medium border rounded uppercase tracking-wide ${
                        isActive
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}>
                        {isActive ? "Active" : "Following"}
                      </span>
                      <span className="text-[11px] text-gray-500">{isActive ? project.role : "Observer"}</span>
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-[13px] text-gray-600 mt-1">{project.lab}</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-[12px] text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      <span>{project.location}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-50 text-gray-700 text-[10px] border border-gray-200 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Add New Project Card */}
            <button className="bg-white border border-dashed border-gray-300 rounded-lg p-5 hover:border-gray-400 hover:bg-gray-50 transition-colors min-h-[200px] flex flex-col items-center justify-center gap-3 group">
              <div className="w-12 h-12 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <Plus className="h-5 w-5 text-gray-500" />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-medium text-gray-700">Add New Project</p>
                <p className="text-[11px] text-gray-500 mt-1">Create or join a research project</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
