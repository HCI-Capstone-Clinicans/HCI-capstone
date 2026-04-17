import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: "doctor" | "designer" | "engineer" | null;
  collaboration_intent: string[];
  topic_areas: string[];
  skills: string[];
  location: string | null;
  availability: string | null;
  project_stages: string[];
  onboarding_complete: boolean;
  created_at: string;
};
