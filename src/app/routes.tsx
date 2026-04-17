import { createBrowserRouter } from "react-router";
import FindProjects from "./pages/FindProjects";
import ProjectDetail from "./pages/ProjectDetail";
import FindCollaborators from "./pages/FindCollaborators";
import MyProfile from "./pages/MyProfile";
import MyProjects from "./pages/MyProjects";
import SkillsMap from "./pages/SkillsMap";
import ProfileView from "./pages/ProfileView";
import OrcidSearch from "./pages/OrcidSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import { AuthGuard } from "./components/AuthGuard";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <FindProjects />,
  },
  {
    path: "/find-projects",
    element: <FindProjects />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/project/:id/skills-map",
    element: <SkillsMap />,
  },
  {
    path: "/find-collaborators",
    element: <FindCollaborators />,
  },
  {
    path: "/profile/:id",
    element: <ProfileView />,
  },
  // Auth routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/onboarding",
    element: (
      <AuthGuard>
        <Onboarding />
      </AuthGuard>
    ),
  },
  // Protected routes
  {
    path: "/my-profile",
    element: (
      <AuthGuard>
        <MyProfile />
      </AuthGuard>
    ),
  },
  {
    path: "/my-projects",
    element: (
      <AuthGuard>
        <MyProjects />
      </AuthGuard>
    ),
  },
  {
    path: "/orcid-search",
    element: <OrcidSearch />,
  },
]);
