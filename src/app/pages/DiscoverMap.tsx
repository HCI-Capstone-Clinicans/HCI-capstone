import { useState, useMemo } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import { motion, AnimatePresence } from 'motion/react';
import {
  Filter,
  Building2,
  X,
  ChevronRight,
  Mail,
  Sparkles,
  SlidersHorizontal,
  Target,

  MapPin,
  Navigation,
  ChevronDown,
  Search,
  Loader
} from 'lucide-react';
import { collaborators, Collaborator } from '../data/collaborators';
import { institutionList } from '../data/collaborators';
import ComprehensiveFilterPanel from '../components/ComprehensiveFilterPanel';
import EditCriteriaPanel from '../components/EditCriteriaPanel';

interface IntakeData {
  role: 'doctor' | 'designer' | 'engineer' | null;
  collaborationIntent: string[];
  topicArea: string[];
  skills: string[];
  location: string;
  availability: string;
  projectStage: string[];
}

interface DiscoverMapProps {
  intakeData: IntakeData;
  onEditFilters: () => void;
}

export default function DiscoverMap({ intakeData, onEditFilters }: DiscoverMapProps) {
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const [matchType, setMatchType] = useState<'exact' | 'adjacent'>('exact');
  const [radiusFilter, setRadiusFilter] = useState(10);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({
    areaOfInterest: intakeData.topicArea
  });
  const [mapCenter, setMapCenter] = useState<[number, number]>([41.4993, -81.6944]);
  const [mapZoom, setMapZoom] = useState(12);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [showEditCriteria, setShowEditCriteria] = useState(false);
  const [currentIntakeData, setCurrentIntakeData] = useState<IntakeData>(intakeData);

  // Calculate user location as epicenter of all collaborators
  const userLocation = useMemo(() => {
    if (collaborators.length === 0) return [41.4993, -81.6944];
    
    const latSum = collaborators.reduce((sum, c) => sum + c.location.lat, 0);
    const lngSum = collaborators.reduce((sum, c) => sum + c.location.lng, 0);
    
    return [latSum / collaborators.length, lngSum / collaborators.length];
  }, []);

  // Custom tile provider for light, flat aesthetic (CartoDB Positron)
  const customTileProvider = (x: number, y: number, z: number) => {
    return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
  };

  // Filter collaborators based on current filters
  const filteredCollaborators = useMemo(() => {
    return collaborators.filter(collab => {
      // Role filter - include residents and nurses when filtering by doctor
      if (appliedFilters.role && appliedFilters.role.length > 0) {
        const roleMatch = appliedFilters.role.some(filterRole => {
          if (filterRole === 'doctor') {
            return collab.role === 'doctor' || collab.role === 'resident' || collab.role === 'nurse';
          }
          return collab.role === filterRole;
        });
        if (!roleMatch) return false;
      }

      // Topic area filter (from currentIntakeData)
      if (currentIntakeData.topicArea.length > 0) {
        const hasMatchingTopic = collab.topicAreas.some(topic =>
          currentIntakeData.topicArea.some(filter => 
            topic.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(topic.toLowerCase())
          )
        );
        if (!hasMatchingTopic && matchType === 'exact') return false;
      }

      // Skills filter (from currentIntakeData)
      if (currentIntakeData.skills.length > 0) {
        const hasMatchingSkill = collab.skills.some(skill =>
          currentIntakeData.skills.some(filter => 
            skill.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(skill.toLowerCase())
          )
        );
        if (!hasMatchingSkill && matchType === 'exact') return false;
      }

      // Collaboration intent filter (from currentIntakeData)
      if (currentIntakeData.collaborationIntent.length > 0) {
        const hasMatchingIntent = collab.collaborationIntent.some(intent =>
          currentIntakeData.collaborationIntent.some(filter => 
            intent.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(intent.toLowerCase())
          )
        );
        if (!hasMatchingIntent && matchType === 'exact') return false;
      }

      // Project stage filter (from currentIntakeData)
      if (currentIntakeData.projectStage.length > 0) {
        const hasMatchingStage = collab.projectStage.some(stage =>
          currentIntakeData.projectStage.some(filter => 
            stage.toLowerCase().includes(filter.toLowerCase()) ||
            filter.toLowerCase().includes(stage.toLowerCase())
          )
        );
        if (!hasMatchingStage && matchType === 'exact') return false;
      }

      // Availability filter (from currentIntakeData)
      if (currentIntakeData.availability && currentIntakeData.availability !== '') {
        if (matchType === 'exact') {
          if (collab.availability !== currentIntakeData.availability && collab.availability !== 'flexible') {
            return false;
          }
        }
      }

      // Location/institution filter (from currentIntakeData)
      if (currentIntakeData.location && currentIntakeData.location !== '') {
        if (matchType === 'exact') {
          if (!collab.institution.toLowerCase().includes(currentIntakeData.location.toLowerCase())) {
            return false;
          }
        }
      }

      // Additional advanced filters from appliedFilters
      if (appliedFilters.workingStyle && appliedFilters.workingStyle.length > 0) {
        const hasMatchingStyle = collab.workingStyle.some(style =>
          appliedFilters.workingStyle.some(filter => 
            style.toLowerCase().includes(filter.toLowerCase())
          )
        );
        if (!hasMatchingStyle && matchType === 'exact') return false;
      }

      if (appliedFilters.collaborationType && appliedFilters.collaborationType.length > 0) {
        const hasMatchingType = collab.collaborationType.some(type =>
          appliedFilters.collaborationType.some(filter => 
            type.toLowerCase().includes(filter.toLowerCase())
          )
        );
        if (!hasMatchingType && matchType === 'exact') return false;
      }

      if (appliedFilters.constraints && appliedFilters.constraints.length > 0) {
        const hasMatchingConstraint = collab.constraints.some(constraint =>
          appliedFilters.constraints.some(filter => 
            constraint.toLowerCase().includes(filter.toLowerCase())
          )
        );
        if (!hasMatchingConstraint && matchType === 'exact') return false;
      }

      return true;
    });
  }, [appliedFilters, matchType, currentIntakeData]);

  // Calculate match score
  const getMatchScore = (collab: Collaborator): number => {
    let score = 0;
    
    const topicMatches = collab.topicAreas.filter(topic =>
      currentIntakeData.topicArea.some(userTopic => 
        topic.toLowerCase().includes(userTopic.toLowerCase()) ||
        userTopic.toLowerCase().includes(topic.toLowerCase())
      )
    ).length;
    score += (topicMatches / Math.max(currentIntakeData.topicArea.length, 1)) * 40;

    const skillMatches = collab.skills.filter(skill =>
      currentIntakeData.skills.some(userSkill => 
        skill.toLowerCase().includes(userSkill.toLowerCase()) ||
        userSkill.toLowerCase().includes(skill.toLowerCase())
      )
    ).length;
    score += (skillMatches / Math.max(currentIntakeData.skills.length, 1)) * 30;

    if (collab.availability === currentIntakeData.availability || collab.availability === 'flexible') {
      score += 15;
    }

    const stageMatches = collab.projectStage.filter(stage =>
      currentIntakeData.projectStage.some(userStage => 
        stage.toLowerCase().includes(userStage.toLowerCase()) ||
        userStage.toLowerCase().includes(stage.toLowerCase())
      )
    ).length;
    score += (stageMatches / Math.max(currentIntakeData.projectStage.length, 1)) * 15;

    return Math.round(score);
  };

  const collaboratorsWithScores = filteredCollaborators.map(collab => ({
    ...collab,
    matchScore: getMatchScore(collab)
  })).sort((a, b) => b.matchScore - a.matchScore);

  // For adjacent mode, only show high-quality matches (top performers)
  const displayedCollaborators = useMemo(() => {
    if (matchType === 'adjacent') {
      // Only show collaborators with match score > 40 and limit to top 25
      return collaboratorsWithScores
        .filter(c => c.matchScore > 40)
        .slice(0, 25);
    }
    // For exact mode, show all that pass filters but ranked by score
    return collaboratorsWithScores;
  }, [collaboratorsWithScores, matchType]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'doctor':
        return 'from-blue-500 to-cyan-500';
      case 'designer':
        return 'from-purple-500 to-pink-500';
      case 'engineer':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'doctor':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'designer':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'engineer':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const toggleDisciplineFilter = (role: string) => {
    if (appliedFilters.role && appliedFilters.role.includes(role)) {
      setAppliedFilters({
        ...appliedFilters,
        role: appliedFilters.role.filter(r => r !== role)
      });
    } else {
      setAppliedFilters({
        ...appliedFilters,
        role: [...(appliedFilters.role || []), role]
      });
    }
  };

  const CustomMarker = ({ 
    color, 
    size = 20, 
    isSelected = false,
    isUH = false,
    isInstitution = false
  }: { 
    color: string; 
    size?: number; 
    isSelected?: boolean;
    isUH?: boolean;
    isInstitution?: boolean;
  }) => {
    if (isInstitution) {
      return (
        <div className="relative">
          {isUH && (
            <>
              <div 
                className="absolute inset-0 rounded-lg bg-cyan-400 opacity-40 blur-xl animate-pulse" 
                style={{ width: '60px', height: '60px', left: '-20px', top: '-20px' }} 
              />
              <div 
                className="absolute inset-0 rounded-lg bg-cyan-300 opacity-30 blur-lg" 
                style={{ width: '48px', height: '48px', left: '-14px', top: '-14px' }} 
              />
            </>
          )}
          <div 
            className={`rounded-lg border-3 shadow-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
              isUH 
                ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-300 ring-4 ring-cyan-400 ring-opacity-50' 
                : 'bg-slate-600 border-white'
            }`}
            style={{ width: '40px', height: '40px' }}
          >
            <Building2 className="h-6 w-6 text-white" />
            {isUH && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white animate-ping" />
            )}
          </div>
        </div>
      );
    }

    return (
      <div 
        className={`rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform hover:scale-125 ${
          isSelected ? 'ring-4 ring-gray-700' : ''
        }`}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          backgroundColor: color 
        }}
      />
    );
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Side Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: 'spring', damping: 25 }}
            className="w-96 bg-white border-r border-gray-200 flex flex-col overflow-hidden z-10"
          >
            {/* Panel Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Discover</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Match Type Toggle */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setMatchType('exact')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    matchType === 'exact'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Target className="h-4 w-4 inline mr-1.5" />
                  Exact Match
                </button>
                <button
                  onClick={() => setMatchType('adjacent')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    matchType === 'adjacent'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Sparkles className="h-4 w-4 inline mr-1.5" />
                  Adjacent
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {collaboratorsWithScores.length}
                  </div>
                  <div className="text-xs text-gray-600">Collaborators</div>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {collaboratorsWithScores.filter(c => c.matchScore > 70).length}
                  </div>
                  <div className="text-xs text-gray-600">Strong Matches</div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>

              {/* Discipline Filter */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Discipline
                </label>
                <div className="flex flex-wrap gap-2">
                  {['doctor', 'designer', 'engineer'].map(role => (
                    <button
                      key={role}
                      onClick={() => toggleDisciplineFilter(role)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                        appliedFilters.role && appliedFilters.role.includes(role)
                          ? getRoleBadgeColor(role)
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                      {appliedFilters.role && appliedFilters.role.includes(role) && 's'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Radius Filter */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Search Radius: {radiusFilter} miles
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={radiusFilter}
                  onChange={(e) => setRadiusFilter(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={() => setShowEditCriteria(true)}
                className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Edit Search Criteria
              </button>
            </div>

            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">
                  Results ({displayedCollaborators.length})
                </h3>
                <select className="text-xs border border-gray-200 rounded px-2 py-1">
                  <option>Best Match</option>
                  <option>Nearest</option>
                  <option>Most Available</option>
                </select>
              </div>

              {matchType === 'adjacent' && displayedCollaborators.length < collaboratorsWithScores.length && (
                <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Adjacent mode:</strong> Showing top {displayedCollaborators.length} best matches out of {collaboratorsWithScores.length} total
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {displayedCollaborators.map((collab) => (
                  <motion.button
                    key={collab.id}
                    onClick={() => {
                      setSelectedCollaborator(collab);
                      setMapCenter([collab.location.lat, collab.location.lng]);
                      setMapZoom(14);
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedCollaborator?.id === collab.id
                        ? 'border-gray-900 bg-gray-50 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRoleColor(collab.role)} flex items-center justify-center text-white font-semibold text-lg flex-shrink-0`}>
                        {collab.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 truncate">
                            {collab.name}
                          </h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            collab.matchScore > 70 ? 'bg-green-100 text-green-700' :
                            collab.matchScore > 50 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {collab.matchScore}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 truncate mb-1">
                          {collab.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {collab.institution}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <CardTagRow label="Role" color="blue" values={[collab.role.charAt(0).toUpperCase() + collab.role.slice(1)]} />
                      <CardTagRow label="Reasons" color="purple" values={collab.collaborationIntent} max={1} />
                      <CardTagRow label="Interests" color="gray" values={collab.topicAreas} max={2} />
                      <CardTagRow label="Skills" color="orange" values={collab.skills} max={2} />
                      <CardTagRow label="Location" color="teal" values={[collab.institution]} max={1} />
                      <CardTagRow label="Availability" color="green" values={[collab.availability.charAt(0).toUpperCase() + collab.availability.slice(1).replace(/-/g, ' ')]} />
                      <CardTagRow label="Pref. Org" color="rose" values={collab.preferredOrgType} max={1} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Floating Controls */}
        {!showFilters && (
          <button
            onClick={() => setShowFilters(true)}
            className="absolute top-6 left-6 z-[1000] px-4 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium text-gray-700"
          >
            <Filter className="h-5 w-5" />
            Show Filters
          </button>
        )}

        {/* Floating Chips */}
        <div className="absolute top-6 right-6 z-[1000] flex flex-wrap gap-2 max-w-md">
          {intakeData.topicArea.slice(0, 3).map((topic, idx) => (
            <div
              key={idx}
              className="px-3 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-700 border border-gray-200"
            >
              {topic}
            </div>
          ))}
          {intakeData.topicArea.length > 3 && (
            <div className="px-3 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-600 border border-gray-200">
              +{intakeData.topicArea.length - 3} more
            </div>
          )}
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-6 left-6 z-[1000] bg-white rounded-lg shadow-lg p-4">
          <h4 className="text-xs font-semibold text-gray-900 mb-2">Legend</h4>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rounded-full bg-gray-600 opacity-20 blur-sm" />
                <div className="absolute inset-0 rounded-full bg-gray-900 border border-white flex items-center justify-center">
                  <Navigation className="h-2 w-2 text-white" style={{ transform: 'rotate(45deg)' }} />
                </div>
              </div>
              <span className="text-xs text-gray-700 font-semibold">Your Location</span>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-gray-200 mt-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-600">Doctors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-600">Designers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-600">Engineers</span>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-gray-200 mt-1.5">
              <div className="w-4 h-4 bg-slate-600 rounded flex items-center justify-center">
                <Building2 className="h-2.5 w-2.5 text-white" />
              </div>
              <span className="text-xs text-gray-600">Institutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-700 rounded flex items-center justify-center">
                <Building2 className="h-2.5 w-2.5 text-white" />
              </div>
              <span className="text-xs text-gray-700 font-semibold">UH Hospitals</span>
            </div>
          </div>
        </div>

        {/* GPS/Location Button */}
        <button
          onClick={() => {
            setMapCenter(userLocation as [number, number]);
            setMapZoom(13);
          }}
          className="absolute bottom-6 right-6 z-[1000] p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group"
          title="Go to your location"
        >
          <div className="relative">
            <Navigation 
              className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors" 
              style={{ transform: 'rotate(45deg)' }} 
            />
            <div className="absolute inset-0 rounded-full bg-gray-400 opacity-0 group-hover:opacity-10 blur-sm transition-opacity" />
          </div>
        </button>

        {/* Interactive Map */}
        <Map
          center={mapCenter}
          zoom={mapZoom}
          onBoundsChanged={({ center, zoom }) => {
            setMapCenter(center);
            setMapZoom(zoom);
          }}
          height="100%"
          defaultWidth={600}
          attribution={false}
          provider={customTileProvider}
        >
          {/* Institution Markers */}
          {institutionList.map((inst) => (
            <Marker
              key={inst.id}
              anchor={[inst.location.lat, inst.location.lng]}
              offset={[20, 20]}
              onClick={() => {
                setMapCenter([inst.location.lat, inst.location.lng]);
                setMapZoom(15);
              }}
            >
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMarker(inst.id)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <CustomMarker 
                  color="#64748b" 
                  size={40}
                  isInstitution={true}
                  isUH={inst.isUH}
                />
                {hoveredMarker === inst.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50">
                    <div className={`text-white text-xs px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap ${
                      inst.isUH ? 'bg-gradient-to-r from-cyan-600 to-blue-700' : 'bg-gray-900'
                    }`}>
                      <div className="font-semibold text-sm">{inst.name}</div>
                      <div className={inst.isUH ? 'text-cyan-100' : 'text-gray-300'}>
                        {inst.collaboratorCount} collaborators
                      </div>
                      {inst.isUH && (
                        <div className="mt-1 pt-1 border-t border-cyan-400 text-cyan-200 text-xs font-semibold">
                          ★ UH Network Hospital
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Marker>
          ))}

          {/* Collaborator Markers */}
          {displayedCollaborators.map((collab) => {
            const color = collab.role === 'doctor' ? '#3b82f6' : 
                         collab.role === 'designer' ? '#a855f7' : '#f97316';
            const size = collab.matchScore > 70 ? 20 : 16;

            return (
              <Marker
                key={collab.id}
                anchor={[collab.location.lat, collab.location.lng]}
                offset={[size / 2, size / 2]}
                onClick={() => setSelectedCollaborator(collab)}
              >
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredMarker(collab.id)}
                  onMouseLeave={() => setHoveredMarker(null)}
                >
                  <CustomMarker 
                    color={color} 
                    size={size}
                    isSelected={selectedCollaborator?.id === collab.id}
                  />
                  {hoveredMarker === collab.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none">
                      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-xl p-3 whitespace-nowrap">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getRoleColor(collab.role)} flex items-center justify-center text-white text-xs font-semibold`}>
                            {collab.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="font-semibold text-gray-900 text-sm">{collab.name}</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-1">{collab.title}</div>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                          collab.matchScore > 70 ? 'bg-green-100 text-green-700' :
                          collab.matchScore > 50 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {collab.matchScore}% match
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </Marker>
            );
          })}

          {/* User Location Marker */}
          <Marker
            anchor={userLocation as [number, number]}
            offset={[0, 0]}
          >
            <div 
              className="relative"
              style={{ 
                width: '48px', 
                height: '48px',
                marginLeft: '-24px',
                marginTop: '-24px'
              }}
              onMouseEnter={() => setHoveredMarker('user-location')}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              {/* Outer pulsing circle */}
              <div className="absolute inset-0 rounded-full bg-gray-600 opacity-20 blur-md animate-pulse" />
              {/* Middle circle */}
              <div className="absolute rounded-full bg-gray-500 opacity-25" 
                style={{ 
                  width: '36px', 
                  height: '36px',
                  left: '6px', 
                  top: '6px' 
                }} 
              />
              {/* Main marker */}
              <div className="absolute rounded-full bg-gray-900 border-2 border-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                style={{ 
                  width: '32px', 
                  height: '32px',
                  left: '8px', 
                  top: '8px' 
                }}
              >
                <Navigation className="h-4 w-4 text-white" style={{ transform: 'rotate(45deg)' }} />
                {/* Center dot */}
                <div className="absolute w-2 h-2 bg-white rounded-full" />
              </div>
              {/* Tooltip */}
              {hoveredMarker === 'user-location' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50">
                  <div className="bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap">
                    <div className="font-semibold text-sm">Your Location</div>
                    <div className="text-gray-300">
                      Center of search area
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Marker>

          {/* Search Radius Circle Overlay */}
          <Overlay anchor={userLocation as [number, number]} offset={[0, 0]}>
            <div 
              className="rounded-full border-2 border-gray-400 bg-gray-200 opacity-20 pointer-events-none"
              style={{
                width: `${radiusFilter * Math.pow(2, mapZoom - 10)}px`,
                height: `${radiusFilter * Math.pow(2, mapZoom - 10)}px`,
                marginLeft: `-${radiusFilter * Math.pow(2, mapZoom - 10) / 2}px`,
                marginTop: `-${radiusFilter * Math.pow(2, mapZoom - 10) / 2}px`
              }}
            />
          </Overlay>
        </Map>

        {/* Selected Collaborator Detail Panel */}
        <AnimatePresence>
          {selectedCollaborator && (
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-96 bg-white shadow-2xl z-[1000] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getRoleColor(selectedCollaborator.role)} flex items-center justify-center text-white font-semibold text-2xl flex-shrink-0`}>
                      {selectedCollaborator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        {selectedCollaborator.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedCollaborator.title}
                      </p>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                        selectedCollaborator.matchScore > 70 ? 'bg-green-50 text-green-700 border-green-200' :
                        selectedCollaborator.matchScore > 50 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                        'bg-gray-50 text-gray-700 border-gray-200'
                      }`}>
                        {selectedCollaborator.matchScore}% Match
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCollaborator(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Institution</div>
                    <div className="text-sm font-medium text-gray-900">
                      {selectedCollaborator.institution}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedCollaborator.bio}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <DetailTagSection
                    label="Role"
                    color="blue"
                    values={[selectedCollaborator.role.charAt(0).toUpperCase() + selectedCollaborator.role.slice(1)]}
                  />
                  <DetailTagSection
                    label="Reasons"
                    color="purple"
                    values={selectedCollaborator.collaborationIntent}
                  />
                  <DetailTagSection
                    label="Interests"
                    color="gray"
                    values={selectedCollaborator.topicAreas}
                  />
                  <DetailTagSection
                    label="Skills"
                    color="orange"
                    values={selectedCollaborator.skills}
                  />
                  <DetailTagSection
                    label="Location"
                    color="teal"
                    values={[selectedCollaborator.institution]}
                  />
                  <DetailTagSection
                    label="Availability"
                    color="green"
                    values={[selectedCollaborator.availability.charAt(0).toUpperCase() + selectedCollaborator.availability.slice(1).replace(/-/g, ' ')]}
                  />
                  <DetailTagSection
                    label="Preference of Org"
                    color="rose"
                    values={selectedCollaborator.preferredOrgType}
                  />
                </div>

                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Connect
                  </button>
                  <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    View Full Profile
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Edit Criteria Panel */}
      <AnimatePresence>
        {showEditCriteria && (
          <EditCriteriaPanel
            onClose={() => setShowEditCriteria(false)}
            currentCriteria={currentIntakeData}
            onSave={(updatedCriteria) => {
              setCurrentIntakeData(updatedCriteria);
              setAppliedFilters({
                ...appliedFilters,
                areaOfInterest: updatedCriteria.topicArea
              });
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Tag color maps ---
type TagColor = 'blue' | 'purple' | 'gray' | 'orange' | 'teal' | 'green' | 'rose';

const tagLabelColors: Record<TagColor, string> = {
  blue:   'text-blue-600',
  purple: 'text-purple-600',
  gray:   'text-gray-500',
  orange: 'text-orange-600',
  teal:   'text-teal-600',
  green:  'text-green-600',
  rose:   'text-rose-600',
};

const tagChipColors: Record<TagColor, string> = {
  blue:   'bg-blue-50 text-blue-700',
  purple: 'bg-purple-50 text-purple-700',
  gray:   'bg-gray-100 text-gray-700',
  orange: 'bg-orange-50 text-orange-700',
  teal:   'bg-teal-50 text-teal-700',
  green:  'bg-green-50 text-green-700',
  rose:   'bg-rose-50 text-rose-700',
};

// Compact row used inside result list cards
function CardTagRow({ label, color, values, max = 2 }: {
  label: string;
  color: TagColor;
  values: string[];
  max?: number;
}) {
  const shown = values.slice(0, max);
  const overflow = values.length - max;
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className={`text-[10px] font-semibold uppercase tracking-wide w-16 shrink-0 ${tagLabelColors[color]}`}>
        {label}
      </span>
      {shown.map((v, i) => (
        <span key={i} className={`px-1.5 py-0.5 text-[10px] rounded ${tagChipColors[color]}`}>
          {v}
        </span>
      ))}
      {overflow > 0 && (
        <span className="text-[10px] text-gray-400">+{overflow}</span>
      )}
    </div>
  );
}

// Full tag section used in the detail panel
function DetailTagSection({ label, color, values }: {
  label: string;
  color: TagColor;
  values: string[];
}) {
  return (
    <div>
      <p className={`text-[11px] font-semibold uppercase tracking-wide mb-1.5 ${tagLabelColors[color]}`}>
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {values.map((v, i) => (
          <span key={i} className={`px-2.5 py-1 text-xs rounded-md ${tagChipColors[color]}`}>
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}