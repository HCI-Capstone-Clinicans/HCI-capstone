import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, MapPin, Plus } from "lucide-react";

export default function MyProjects() {
  const projects = [
    {
      id: "robodog",
      name: "RoboDog",
      lab: "Carroll Labs",
      location: "UH Cleveland Medical Center",
      status: "Ongoing Research Project",
      role: "HCI Researcher",
      tags: ["Robotics", "Human-Robot Interaction", "Surgery Assistance"],
    },
  ];

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
                className="flex-1 outline-none text-[13px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors group"
              >
                <div className="space-y-3">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-medium border border-green-200 rounded uppercase tracking-wide">
                      Active
                    </span>
                    <span className="text-[11px] text-gray-500">{project.role}</span>
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
            ))}

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