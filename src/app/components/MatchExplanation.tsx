import { X, Check, TrendingUp } from "lucide-react";

interface MatchFactor {
  category: string;
  score: number;
  reason: string;
  isMatch: boolean;
}

interface MatchExplanationProps {
  matchPercentage: number;
  projectName: string;
  factors: MatchFactor[];
  onClose: () => void;
}

export function MatchExplanation({ matchPercentage, projectName, factors, onClose }: MatchExplanationProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 border border-blue-200">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Match Analysis</h2>
              <p className="text-[13px] text-gray-600">{projectName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Overall Score */}
        <div className="px-6 py-5 bg-gradient-to-br from-blue-50 to-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wide font-medium text-gray-500 mb-1">Overall Match Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">{matchPercentage}%</span>
                <span className="text-[13px] text-gray-600">compatibility</span>
              </div>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${matchPercentage * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-700">{matchPercentage}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Factors */}
        <div className="px-6 py-5">
          <p className="text-[11px] uppercase tracking-wide font-medium text-gray-500 mb-4">Match Factors</p>
          <div className="space-y-3">
            {factors.map((factor, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border ${
                  factor.isMatch 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-md ${
                    factor.isMatch ? 'bg-green-100' : 'bg-gray-200'
                  }`}>
                    {factor.isMatch && <Check className="h-3 w-3 text-green-700" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-semibold text-gray-900">{factor.category}</span>
                      <span className={`text-[12px] font-medium ${
                        factor.isMatch ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {factor.score}%
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-600 leading-relaxed">{factor.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <p className="text-[11px] text-gray-500 mb-3">
            This match score is calculated based on your profile, skills, interests, and past projects. Higher scores indicate better alignment.
          </p>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-900 text-white text-[13px] font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}