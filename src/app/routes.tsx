import { createBrowserRouter } from "react-router";
import FindProjects from "./pages/FindProjects";
import ProjectDetail from "./pages/ProjectDetail";
import FindCollaborators from "./pages/FindCollaborators";
import MyProfile from "./pages/MyProfile";
import MyProjects from "./pages/MyProjects";
import SkillsMap from "./pages/SkillsMap";
import ProfileView from "./pages/ProfileView";

export const router = createBrowserRouter([
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
  {
    path: "/my-profile",
    element: <MyProfile />,
  },
  {
    path: "/my-projects",
    element: <MyProjects />,
  },

]);