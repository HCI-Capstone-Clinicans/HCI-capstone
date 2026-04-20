import { Link } from "react-router";
import { Header } from "../components/Header";
import { Search, MapPin, Plus, Archive, ArchiveRestore, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useBookmarks } from "../context/BookmarksContext";

const myProjects = [
  {
    id: "robodog",
    name: "RoboDog",
    lab: "Carroll Labs",
    location: "UH Cleveland Medical Center",
    role: "HCI Researcher",
    tags: ["Robotics", "Human-Robot Interaction", "Surgery Assistance"],
  },
];

export default function MyProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [archivedIds, setArchivedIds] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("cc_archived_projects") || "[]"); }
    catch { return []; }
  });
  const [archivedOpen, setArchivedOpen] = useState(false);
  const { bookmarks } = useBookmarks();

  useEffect(() => {
    localStorage.setItem("cc_archived_projects", JSON.stringify(archivedIds));
  }, [archivedIds]);

  const archive = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setArchivedIds(prev => [...prev, id]);
  };

  const unarchive = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setArchivedIds(prev => prev.filter(a => a !== id));
  };

  const activeMyProjects = myProjects.filter(p => !archivedIds.includes(p.id));
  const archivedMyProjects = myProjects.filter(p => archivedIds.includes(p.id));

  const filteredMyProjects = searchQuery
    ? activeMyProjects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : activeMyProjects;

  const filteredFollowing = searchQuery
    ? bookmarks.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : bookmarks;

  const filteredArchived = searchQuery
    ? archivedMyProjects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : archivedMyProjects;

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
          <div className="mb-8">
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

          {/* My Projects Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide">My Projects</h2>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-green-50 text-green-700 border border-green-200 rounded">
                {filteredMyProjects.length}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredMyProjects.map((project) => (
                <div key={project.id} className="relative group">
                  <Link
                    to={`/project/${project.id}`}
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 text-[10px] font-medium border rounded uppercase tracking-wide bg-green-50 text-green-700 border-green-200">
                          Active
                        </span>
                        <span className="text-[11px] text-gray-500 pr-7">{project.role}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-[13px] text-gray-600 mt-1">{project.lab}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-gray-500">
                        <MapPin className="h-3.5 w-3.5 text-gray-400" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-700 text-[10px] border border-gray-200 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={(e) => archive(project.id, e)}
                    title="Archive project"
                    className="absolute top-3 right-3 p-1.5 rounded-md text-gray-300 hover:text-gray-500 hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Archive className="h-3.5 w-3.5" />
                  </button>
                </div>
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

          {/* Following Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide">Following</h2>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-600 border border-gray-200 rounded">
                {filteredFollowing.length}
              </span>
            </div>

            {filteredFollowing.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center gap-2">
                <p className="text-[13px] text-gray-500">No followed projects yet</p>
                <p className="text-[12px] text-gray-400">Use "Stay Updated" on any project to follow it here.</p>
                <Link
                  to="/find-projects"
                  className="mt-2 px-4 py-2 text-[12px] font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Browse Projects
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredFollowing.map((project) => (
                  <div key={project.id} className="relative group">
                    <Link
                      to={`/project/${project.id}`}
                      className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 text-[10px] font-medium border rounded uppercase tracking-wide bg-blue-50 text-blue-700 border-blue-200">
                            Following
                          </span>
                          {project.matchPercentage && (
                            <span className="text-[11px] text-gray-500">{project.matchPercentage}% match</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-[13px] text-gray-600 mt-1">{project.lab}</p>
                        </div>
                        <div className="flex items-center gap-2 text-[12px] text-gray-500">
                          <MapPin className="h-3.5 w-3.5 text-gray-400" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-700 text-[10px] border border-gray-200 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Archived Section */}
          {filteredArchived.length > 0 && (
            <div>
              <button
                onClick={() => setArchivedOpen(o => !o)}
                className="flex items-center gap-2 mb-4 group"
              >
                {archivedOpen
                  ? <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                  : <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                }
                <h2 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                  Archived
                </h2>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-400 border border-gray-200 rounded">
                  {filteredArchived.length}
                </span>
              </button>

              {archivedOpen && (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredArchived.map((project) => {
                    const isMyProject = myProjects.some(p => p.id === project.id);
                    const fullProject = isMyProject
                      ? myProjects.find(p => p.id === project.id)!
                      : null;

                    return (
                      <div key={project.id} className="opacity-70 hover:opacity-90 transition-opacity">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                          <Link
                            to={`/project/${project.id}`}
                            className="block p-5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 text-[10px] font-medium border rounded uppercase tracking-wide bg-gray-100 text-gray-500 border-gray-200">
                                  Archived
                                </span>
                                <span className="text-[11px] text-gray-400">
                                  {isMyProject && fullProject ? fullProject.role : "Following"}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-gray-600">{project.name}</h3>
                                <p className="text-[13px] text-gray-500 mt-1">
                                  {"lab" in project ? project.lab : ""}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 text-[12px] text-gray-400">
                                <MapPin className="h-3.5 w-3.5 text-gray-300" />
                                <span>{project.location}</span>
                              </div>
                            </div>
                          </Link>
                          <div className="border-t border-gray-100 px-5 py-2.5">
                            <button
                              onClick={(e) => unarchive(project.id, e)}
                              className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 hover:text-gray-800 transition-colors"
                            >
                              <ArchiveRestore className="h-3.5 w-3.5" />
                              Restore project
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
