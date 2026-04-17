import { useNavigate } from "react-router";
import DiscoverIntake from "./DiscoverIntake";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function Onboarding() {
  const { user, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const handleComplete = async (data: {
    role: "doctor" | "designer" | "engineer" | null;
    collaborationIntent: string[];
    topicArea: string[];
    skills: string[];
    location: string;
    availability: string;
    projectStage: string[];
  }) => {
    if (!user) return;

    await supabase.from("profiles").upsert({
      id: user.id,
      email: user.email,
      role: data.role,
      collaboration_intent: data.collaborationIntent,
      topic_areas: data.topicArea,
      skills: data.skills,
      location: data.location,
      availability: data.availability,
      project_stages: data.projectStage,
      onboarding_complete: true,
    });

    await refreshProfile();
    navigate("/");
  };

  return <DiscoverIntake onComplete={handleComplete} />;
}
