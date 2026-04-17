import { useState } from "react";
import { Link } from "react-router";
import { Users, Mail } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password);
    setLoading(false);

    if (error) {
      setError(error);
    } else {
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
            <p className="text-[13px] font-medium text-gray-900 mb-4">{email}</p>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Click the link in the email to confirm your account, then come back here to sign in.
            </p>
            <Link
              to="/login"
              className="mt-6 w-full py-2.5 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors text-center"
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
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 mb-4">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-[22px] font-semibold text-gray-900">Create your account</h1>
          <p className="text-[13px] text-gray-500 mt-1">Join Clinician Connect</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Confirm password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
              />
            </div>

            {error && (
              <p className="text-[12px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gray-900 text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>

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
