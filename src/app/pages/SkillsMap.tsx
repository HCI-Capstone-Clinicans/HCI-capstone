import { useState, useRef, useEffect } from "react";
import imgCarrollLabs from "../../assets/783f2c42ea769440e177775b6794f454354e65fd.png";
import { useNavigate, useParams } from "react-router";
import { Header } from "../components/Header";
import { ArrowLeft, MapPin, TrendingUp } from "lucide-react";
import { VennDiagram4People } from "../components/VennDiagram4People";
import { VennDiagram5People } from "../components/VennDiagram5People";
import { MatchExplanation } from "../components/MatchExplanation";
import { MatchedTag } from "../components/MatchedTag";
import { ContactModal } from "../components/ContactModal";

const MIN_SCALE = 0.45;
const MAX_SCALE = 3.0;
const FIT_SCALE_4 = 0.7;
const FIT_SCALE_5 = 0.64;
const BASE_OFFSET_4 = { x: 0, y: -18 };
const BASE_OFFSET_5 = { x: -18, y: -76 };

export default function SkillsMap() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [scale, setScale] = useState(FIT_SCALE_4);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showYou, setShowYou] = useState(false);
  const [showMatchExplanation, setShowMatchExplanation] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(FIT_SCALE_4);
  const panRef = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // Keep refs in sync with state
  scaleRef.current = scale;
  panRef.current = pan;

  const zoomPercent = Math.round(((scale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE)) * 100);

  const handleZoomIn = () => {
    const s = scaleRef.current;
    const p = panRef.current;
    const newScale = Math.min(s + 0.1, MAX_SCALE);
    const ratio = newScale / s;
    setScale(newScale);
    setPan({ x: p.x * ratio, y: p.y * ratio });
  };

  const handleZoomOut = () => {
    const s = scaleRef.current;
    const p = panRef.current;
    const newScale = Math.max(s - 0.1, MIN_SCALE);
    if (newScale <= MIN_SCALE) {
      setScale(MIN_SCALE);
      setPan({ x: 0, y: 0 });
      return;
    }
    const ratio = newScale / s;
    setScale(newScale);
    setPan({ x: p.x * ratio, y: p.y * ratio });
  };

  // Wheel zoom toward cursor
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      // cursor position relative to container center
      const ecx = e.clientX - rect.left - W / 2;
      const ecy = e.clientY - rect.top - H / 2;

      const s = scaleRef.current;
      const p = panRef.current;

      const delta = -e.deltaY * 0.001;
      const factor = Math.exp(delta);
      const newScale = Math.min(Math.max(s * factor, MIN_SCALE), MAX_SCALE);
      const ratio = newScale / s;

      setScale(newScale);
      setPan({
        x: ecx * (1 - ratio) + p.x * ratio,
        y: ecy * (1 - ratio) + p.y * ratio,
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
  };

  const stopDrag = () => {
    dragging.current = false;
    setIsDragging(false);
  };

  const handleToggleShowYou = () => {
    const nextShowYou = !showYou;
    setShowYou(nextShowYou);
    setPan({ x: 0, y: 0 });
    setScale(nextShowYou ? FIT_SCALE_5 : FIT_SCALE_4);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Header />

      <main className="flex-1 overflow-y-auto">
        {/* Project Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-8 py-4 relative">
            <div className="absolute top-4 right-8 flex gap-3">
              <button className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Stay Updated
              </button>
              <button
                onClick={() => setShowContactModal(true)}
                className="px-4 py-2 text-[13px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Project Coordinator
              </button>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[12px] text-gray-500 hover:text-gray-900 transition-colors mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Project</span>
            </button>

            <div className="space-y-1">
              <p className="text-[11px] font-normal text-gray-500 tracking-[0.34px] uppercase">prototype development | August 2025 — Ongoing</p>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-medium text-gray-900">RoboDog</h1>
                <button
                  onClick={() => setShowMatchExplanation(true)}
                  className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg hover:border-green-300 transition-colors"
                >
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-[11px] font-semibold text-green-600 tracking-[0.06px]">87% Match</span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={imgCarrollLabs}
                  alt="Carroll Labs"
                  className="w-7 h-7 object-cover rounded"
                />
                <h2 className="text-xl font-medium text-gray-900">Carroll Labs</h2>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-[13px] text-gray-700">UH Cleveland Medical Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-8 pt-4 pb-6">
          <div className="flex gap-6 items-stretch">
            {/* Left Sidebar */}
            <div className="w-[240px] flex-shrink-0 space-y-4 pr-1">
              {/* Project Topics */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-3">Project Topics</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Robotics
                  </span>
                  <MatchedTag
                    label="Human-Robot Interaction"
                    reason="Matches your listed interest in Human-Robot Interaction"
                  />
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Surgery Assistance
                  </span>
                </div>
              </div>

              {/* Looking For */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-3">Looking for</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Robotics Engineers
                  </span>
                  <MatchedTag
                    label="Human-Robot Interaction Practitioner"
                    reason="Your HCI background directly fits this open role"
                  />
                  <span className="px-2 py-1 text-[11px] font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded">
                    Grant Writers
                  </span>
                </div>
              </div>

              {/* Insights (shown when "You" is visible) */}
              {showYou && (
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-[11px] font-medium text-gray-400 mb-3">Insights Generated</p>

                  <button
                    onClick={() => setShowMatchExplanation(true)}
                    className="mb-2 w-full flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-50 to-blue-50 border border-[#b9f8cf] rounded-lg hover:border-green-300 transition-colors"
                  >
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 12 12">
                      <path d="M11 3.5L6.75 7.75L4.25 5.25L1 8.5" stroke="#008236" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 3.5H11V6.5" stroke="#008236" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] font-semibold text-[#008236]">87% Match</span>
                  </button>

                  <ul className="text-[13px] text-gray-700 space-y-2 list-disc pl-4">
                    <li>
                      You are closest in skillset to <span className="font-semibold">Andrew Chan</span>
                    </li>
                    <li>
                      You bring a new skill of <span className="font-semibold">Product Design</span>
                    </li>
                    <li>
                      The team becomes stronger in <span className="font-semibold">Design Thinking</span> and{" "}
                      <span className="font-semibold">Human-Robot Interaction</span> with you
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Venn Diagram */}
            <div className="flex-1 min-h-0">
              <div className="relative bg-white border border-gray-200 rounded-lg h-full min-h-[580px] overflow-hidden">
                {/* Venn Diagram Container (fills panel including header region) */}
                <div
                  ref={containerRef}
                  className="absolute inset-0 bg-white overflow-hidden select-none"
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={stopDrag}
                  onMouseLeave={stopDrag}
                >
                  <div
                    className="absolute inset-2"
                    style={{
                      transform: `translate(${pan.x + (showYou ? BASE_OFFSET_5.x : BASE_OFFSET_4.x)}px, ${pan.y + (showYou ? BASE_OFFSET_5.y : BASE_OFFSET_4.y)}px) scale(${scale})`,
                      transformOrigin: "center center",
                      willChange: "transform",
                    }}
                  >
                    {showYou ? <VennDiagram5People /> : <VennDiagram4People />}
                  </div>
                </div>

                {/* Top content overlays map */}
                <div className="relative z-20 p-4">
                  <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Skills Map</h3>
                    <p className="text-[12px] text-gray-500 mt-0.5">
                      Explore how team members' skills intersect
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleToggleShowYou}
                      className={`px-4 py-2 text-[13px] font-medium rounded-md border transition-colors ${
                        showYou
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                          : "bg-white text-gray-700 border-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {showYou ? "Hide My Fit" : "How do I fit in?"}
                    </button>

                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5">
                      <button
                        onClick={handleZoomOut}
                        disabled={scale <= MIN_SCALE}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        −
                      </button>
                      <span className="text-[11px] text-gray-500 min-w-[40px] text-center">
                        {zoomPercent}%
                      </span>
                      <button
                        onClick={handleZoomIn}
                        disabled={scale >= MAX_SCALE}
                        className="text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  </div>

                  {/* Hint */}
                  <p className="text-[11px] text-gray-400 mb-1">Scroll to zoom · Drag to pan · Hover tags for details</p>
                </div>

                {/* Top-right legend overlays map */}
                <div className="absolute top-[98px] right-3 z-20 w-[250px] bg-white/95 border border-gray-200 rounded-lg p-3 shadow-sm">
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900">{showYou ? "5" : "4"}</p>
                        <p className="text-[10px] text-gray-500">Team Members</p>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900">{showYou ? "13" : "11"}</p>
                        <p className="text-[10px] text-gray-500">Total Skills</p>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900">{showYou ? "8" : "6"}</p>
                        <p className="text-[10px] text-gray-500">Shared Skills</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {showYou && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                          <span className="text-[11px] text-gray-700">You</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-rose-500 rounded-sm"></div>
                        <span className="text-[11px] text-gray-700">Dr. Bryan Carroll</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-sm"></div>
                        <span className="text-[11px] text-gray-700">Dr. Maya Patel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
                        <span className="text-[11px] text-gray-700">Andrew Chan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                        <span className="text-[11px] text-gray-700">Daniel Kim</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Match Explanation Modal */}
      {showMatchExplanation && (
        <MatchExplanation
          matchPercentage={87}
          projectName="RoboDog"
          factors={[
            {
              category: "Skills Alignment",
              score: 95,
              reason: "Your Service Design and Product Design skills complement Andrew Chan's expertise and fill gaps in the team's design capabilities.",
              isMatch: true,
            },
            {
              category: "Shared Interests",
              score: 90,
              reason: "Strong overlap in Human-Robot Interaction and Human-centered design with the team's research focus.",
              isMatch: true,
            },
            {
              category: "Team Synergy",
              score: 85,
              reason: "Your background enhances the team's Design Thinking and creates new opportunities for cross-functional collaboration.",
              isMatch: true,
            },
            {
              category: "Research Experience",
              score: 75,
              reason: "Your project portfolio shows relevant experience in product development and UX research that aligns with project needs.",
              isMatch: true,
            },
          ]}
          onClose={() => setShowMatchExplanation(false)}
        />
      )}

      {showContactModal && (
        <ContactModal
          recipientName="Dr. Bryan Carroll"
          recipientEmail="bcarroll@uhcleveland.edu"
          onClose={() => setShowContactModal(false)}
        />
      )}
    </div>
  );
}
