import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Users, Mail, ArrowRight, ArrowLeft, Check, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "../../lib/supabase";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "doctor" | "designer" | "engineer" | null;
  collaborationIntent: string[];
  topicArea: string[];
  skills: string[];
  location: string;
  availability: string;
  projectStage: string[];
}

const STEPS = [
  { id: "account", label: "Account", required: true },
  { id: "role", label: "Role" },
  { id: "intent", label: "Intent" },
  { id: "topics", label: "Topics" },
  { id: "skills", label: "Skills" },
  { id: "location", label: "Location" },
  { id: "availability", label: "Availability" },
  { id: "stage", label: "Stage" },
];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: null,
    collaborationIntent: [],
    topicArea: [],
    skills: [],
    location: "",
    availability: "",
    projectStage: [],
  });

  const isAccountStepValid =
    form.fullName.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword;

  const canContinue = step === 0 ? isAccountStepValid : true;
  const isLastStep = step === STEPS.length - 1;

  const toggleMulti = (field: keyof FormData, value: string) => {
    const arr = form[field] as string[];
    setForm({
      ...form,
      [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    });
  };

  const handleNext = () => {
    if (!isLastStep) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          role: form.role,
          collaboration_intent: form.collaborationIntent,
          topic_areas: form.topicArea,
          skills: form.skills,
          location: form.location,
          availability: form.availability,
          project_stages: form.projectStage,
          onboarding_complete: true,
        },
      },
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else if (data.session) {
      // Email confirmation is off — user is signed in immediately
      navigate("/");
    } else {
      // Email confirmation is on — show check email screen
      setRegisteredEmail(form.email);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-5">
              <Mail className="h-6 w-6 text-gray-700" />
            </div>
            <h1 className="text-[18px] font-semibold text-gray-900 mb-2">Check your email</h1>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-1">
              We sent a confirmation link to
            </p>
            <p className="text-[13px] font-medium text-gray-900 mb-4">{registeredEmail}</p>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Click the link in the email to confirm your account, then come back to sign in.
            </p>
            <Link
              to="/login"
              className="mt-6 w-full py-2.5 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors text-center block"
            >
              Go to sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 mb-4">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-[22px] font-semibold text-gray-900">Create your account</h1>
          <p className="text-[13px] text-gray-500 mt-1">Join Clinician Connect</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[13px] text-gray-500">Step {step + 1} of {STEPS.length}</span>
            <span className="text-[13px] text-gray-500">{Math.round(((step + 1) / STEPS.length) * 100)}% complete</span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900"
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-10"
          >
            {/* Step 0: Account details */}
            {step === 0 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Account details</h2>
                  <p className="text-[13px] text-gray-500">Required to create your account</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full name</label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
                    <input
                      type="password"
                      required
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Minimum 6 characters</p>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={form.confirmPassword}
                      onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    {form.confirmPassword.length > 0 && form.password !== form.confirmPassword && (
                      <p className="text-[11px] text-red-500 mt-1">Passwords do not match</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Step 1: Role */}
            {step === 1 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">What is your role?</h2>
                  <p className="text-[13px] text-gray-500">This helps us connect you with the right collaborators — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                  {(["doctor", "designer", "engineer"] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setForm({ ...form, role: form.role === role ? null : role })}
                      className={`p-6 rounded-lg border transition-all text-left ${
                        form.role === role ? "border-gray-900 bg-gray-50 shadow-sm" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="text-3xl mb-3">
                        {role === "doctor" ? "🩺" : role === "designer" ? "✏️" : "⚙️"}
                      </div>
                      <div className="text-[14px] font-semibold text-gray-900">
                        {role === "doctor" ? "Doctor / Clinician" : role === "designer" ? "Designer" : "Engineer"}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 2: Intent */}
            {step === 2 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">What brings you here?</h2>
                  <p className="text-[13px] text-gray-500">Select all that apply — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {["Find research collaborators", "Join an existing project", "Start a new initiative", "Share my expertise", "Learn from others", "Validate an idea"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleMulti("collaborationIntent", opt)}
                      className={`px-4 py-3 rounded-lg border text-left transition-all ${
                        form.collaborationIntent.includes(opt) ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-900">{opt}</span>
                        {form.collaborationIntent.includes(opt) && <Check className="h-4 w-4 text-gray-900 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 3: Topic areas */}
            {step === 3 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">What areas interest you?</h2>
                  <p className="text-[13px] text-gray-500">Choose your focus areas — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {["Cardiology", "Oncology", "Neurology", "Pediatrics", "Emergency Medicine", "Surgery", "Wearable Tech", "AI/ML", "Robotics", "Telemedicine", "Medical Devices", "Healthcare IT"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleMulti("topicArea", opt)}
                      className={`px-4 py-3 rounded-lg border text-left transition-all ${
                        form.topicArea.includes(opt) ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-900">{opt}</span>
                        {form.topicArea.includes(opt) && <Check className="h-4 w-4 text-gray-900 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 4: Skills */}
            {step === 4 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">What skills do you bring?</h2>
                  <p className="text-[13px] text-gray-500">Or what skills are you looking for — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {["Clinical Research", "UX Design", "Machine Learning", "Data Analysis", "Product Design", "Software Development", "Medical Imaging", "User Research", "Prototyping", "Systems Thinking"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleMulti("skills", opt)}
                      className={`px-4 py-3 rounded-lg border text-left transition-all ${
                        form.skills.includes(opt) ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-900">{opt}</span>
                        {form.skills.includes(opt) && <Check className="h-4 w-4 text-gray-900 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 5: Location */}
            {step === 5 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Where are you located?</h2>
                  <p className="text-[13px] text-gray-500">We'll show you nearby opportunities — optional</p>
                </div>
                <div className="max-w-md mb-8">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g. Cleveland, OH"
                      className="w-full pl-10 pr-4 py-3 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Step 6: Availability */}
            {step === 6 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">When can you start?</h2>
                  <p className="text-[13px] text-gray-500">This helps set expectations — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {["Immediately available", "Within a month", "Flexible timing", "Just planning ahead"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setForm({ ...form, availability: form.availability === opt ? "" : opt })}
                      className={`px-4 py-3 rounded-lg border text-left transition-all ${
                        form.availability === opt ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-900">{opt}</span>
                        {form.availability === opt && <Check className="h-4 w-4 text-gray-900 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 7: Project stage */}
            {step === 7 && (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">What project stages interest you?</h2>
                  <p className="text-[13px] text-gray-500">Select all that apply — optional</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {["Ideation", "Early Research", "Prototype Development", "Clinical Testing", "Product Development", "Implementation"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleMulti("projectStage", opt)}
                      className={`px-4 py-3 rounded-lg border text-left transition-all ${
                        form.projectStage.includes(opt) ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-900">{opt}</span>
                        {form.projectStage.includes(opt) && <Check className="h-4 w-4 text-gray-900 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {error && (
              <p className="mb-4 text-[12px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-medium transition-colors ${
                  step === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={!canContinue || loading}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-md text-[13px] font-semibold transition-colors ${
                  canContinue && !loading
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Creating account..." : isLastStep ? "Create account" : "Continue"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-[13px] text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
