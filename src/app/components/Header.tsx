import { Link, useLocation } from "react-router";
import { Users } from "lucide-react";

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/find-projects') {
      return location.pathname === '/' || location.pathname === '/find-projects';
    }
    if (path === '/find-collaborators') {
      return location.pathname === '/find-collaborators';
    }
    if (path === '/my-projects') {
      return location.pathname === '/my-projects';
    }

    return location.pathname === path;
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-gray-900">
            <Users className="h-4 w-4 text-white" />
          </div>
          <span className="text-[15px] font-semibold text-gray-900">Clinician Connect</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          <Link
            to="/find-collaborators"
            className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
              isActive('/find-collaborators')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Find Collaborators
          </Link>
          <Link
            to="/find-projects"
            className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
              isActive('/find-projects')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Find Projects
          </Link>
          <Link
            to="/my-projects"
            className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
              isActive('/my-projects')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            My Projects
          </Link>

        </nav>
        
        <Link
          to="/my-profile"
          className="px-3 py-1.5 text-[13px] font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          My Profile
        </Link>
      </div>
    </header>
  );
}