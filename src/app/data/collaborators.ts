export interface Collaborator {
  id: string;
  name: string;
  role: 'doctor' | 'designer' | 'engineer' | 'resident' | 'nurse';
  title: string;
  institution: string;
  location: {
    lat: number;
    lng: number;
  };
  bio: string;
  topicAreas: string[];
  skills: string[];
  collaborationIntent: string[];
  availability: string;
  projectStage: string[];
  workingStyle: string[];
  constraints: string[];
  collaborationType: string[];
  preferredOrgType: string[];
  matchScore?: number;
}

export interface Institution {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  isUH: boolean;
  collaboratorCount: number;
}

const firstNames = [
  'Emily', 'Michael', 'Sarah', 'David', 'Jessica', 'James', 'Amanda', 'Robert', 'Jennifer', 'William',
  'Lisa', 'Christopher', 'Maria', 'Daniel', 'Michelle', 'Matthew', 'Karen', 'Joseph', 'Nancy', 'Thomas',
  'Patricia', 'Charles', 'Linda', 'Jason', 'Susan', 'Andrew', 'Elizabeth', 'Joshua', 'Barbara', 'Kevin',
  'Ashley', 'Brian', 'Stephanie', 'George', 'Rebecca', 'Edward', 'Sharon', 'Ronald', 'Laura', 'Timothy',
  'Cynthia', 'Steven', 'Kathleen', 'Kenneth', 'Amy', 'Anthony', 'Angela', 'Mark', 'Melissa', 'Donald',
  'Brenda', 'Paul', 'Pamela', 'Ryan', 'Nicole', 'Eric', 'Samantha', 'Jacob', 'Katherine', 'Gregory',
  'Christine', 'Jonathan', 'Deborah', 'Raymond', 'Rachel', 'Peter', 'Carolyn', 'Frank', 'Janet', 'Gary'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'
];

const doctorSpecialties = [
  'Cardiologist', 'Oncologist', 'Neurologist', 'Pediatrician', 'Surgeon',
  'Emergency Medicine Physician', 'Psychiatrist', 'Pulmonologist', 'Gastroenterologist',
  'Orthopedic Surgeon', 'Dermatologist', 'Radiologist', 'Anesthesiologist',
  'Infectious Disease Specialist', 'Nephrologist', 'Rheumatologist', 'Endocrinologist',
  'Hematologist', 'Geriatrician', 'Rehabilitation Specialist'
];

const residentSpecialties = [
  'Internal Medicine Resident', 'Surgery Resident', 'Pediatrics Resident',
  'Emergency Medicine Resident', 'Family Medicine Resident', 'Psychiatry Resident',
  'Neurology Resident', 'Radiology Resident', 'Anesthesiology Resident',
  'OB/GYN Resident', 'Orthopedic Resident'
];

const nurseRoles = [
  'Registered Nurse - ICU', 'Registered Nurse - Emergency', 'Registered Nurse - Pediatrics',
  'Registered Nurse - Oncology', 'Nurse Practitioner', 'Clinical Nurse Specialist',
  'Registered Nurse - Surgery', 'Registered Nurse - Cardiology', 'Registered Nurse - NICU',
  'Registered Nurse - Mental Health'
];

const engineerTitles = [
  'Biomedical Engineer', 'Software Engineer', 'Data Scientist', 'Machine Learning Engineer',
  'Hardware Engineer', 'Systems Engineer', 'Research Engineer', 'Clinical Informatics Engineer',
  'Medical Device Engineer', 'AI Research Scientist', 'Computer Vision Engineer',
  'Embedded Systems Engineer', 'Full Stack Developer', 'Backend Engineer'
];

const designerTitles = [
  'UX Researcher', 'Product Designer', 'Service Designer', 'UI Designer',
  'UX/UI Designer', 'Design Strategist', 'Healthcare Experience Designer',
  'Information Architect', 'Interaction Designer', 'Visual Designer'
];

const topicAreasPool = [
  'Cancer care', 'Surgery', 'Pediatrics', 'Aging / older adults', 'Mental health',
  'Pulmonary / respiratory', 'Cardiology', 'Neurology', 'Rehabilitation',
  'Medical education', 'Clinical operations', 'Accessibility', 'AI in healthcare',
  'Diagnostic tools', 'Medical devices', 'Preventive care', 'Chronic disease',
  'Community health', 'Patient experience', 'Provider workflow', 'Care coordination',
  'Communication tools', 'Decision support', 'Remote care', 'Documentation burden',
  'Training / education', 'Digital platform', 'Data visualization'
];

const doctorSkills = [
  'Clinical insight', 'Patient care workflow', 'Subject matter expertise',
  'Clinical validation', 'Trial design', 'Translational research', 'Department access',
  'Clinical feasibility', 'Research', 'Communication', 'Evaluation', 'Documentation'
];

const residentSkills = [
  'Clinical insight', 'Research', 'Patient care workflow', 'Communication',
  'Testing', 'Documentation', 'Clinical feasibility', 'Evaluation'
];

const nurseSkills = [
  'Patient care workflow', 'Clinical insight', 'Implementation planning',
  'Communication', 'Stakeholder engagement', 'Testing', 'Evaluation',
  'Documentation', 'Systems thinking'
];

const engineerSkills = [
  'Software development', 'Hardware', 'Machine learning', 'Data engineering',
  'Prototyping', 'AI / NLP', 'Systems integration', 'App development',
  'API / backend', 'Sensors', 'CAD / fabrication', 'Embedded systems',
  'Device engineering', 'Testing', 'Documentation'
];

const designerSkills = [
  'UX research', 'UI design', 'Product design', 'Service design',
  'Journey mapping', 'Experience strategy', 'Visual design',
  'Information architecture', 'Usability testing', 'Prototyping',
  'Design systems', 'Accessibility design', 'Storytelling'
];

const collaborationIntents = [
  'Find collaborators for a new project',
  'Join an existing project',
  'Offer expertise/advising',
  'Explore partnerships',
  'Research collaboration',
  'Technical consultation',
  'Design support',
  'Clinical validation',
  'Mentorship opportunity',
  'Grant collaboration'
];

const projectStages = [
  'Just exploring',
  'Defining the problem',
  'Looking for collaborators',
  'Early concept',
  'Research underway',
  'Prototype in progress',
  'Pilot ready',
  'Testing with users',
  'Seeking implementation support',
  'Looking for funding'
];

const workingStyles = [
  'Structured process',
  'Flexible / informal',
  'Quick conversations first',
  'Hands-on prototyping',
  'Strategy-first',
  'Research-first',
  'Build-first',
  'Open to experimentation'
];

const constraints = [
  'Need funding',
  'Need institutional support',
  'Need technical help',
  'Need clinical access',
  'Need research support',
  'Need design support',
  'Looking for low-lift collaboration',
  'Early-stage / informal'
];

const collaborationTypes = [
  'Brainstorming',
  'Consultation',
  'Research collaboration',
  'Design support',
  'Technical build support',
  'Validation / feedback',
  'Co-leading a project',
  'Mentorship',
  'Advising',
  'Long-term partnership'
];

const preferredOrgTypes = [
  'Academic Medical Center',
  'Hospital System',
  'Research Institute',
  'Startup / Industry',
  'Nonprofit / NGO',
  'Government / VA',
  'University / Academia',
  'Any setting'
];

const availabilities = ['flexible', 'part-time', 'limited', 'full-time'];

const institutions = [
  { name: 'University Hospitals', lat: 41.5045, lng: -81.6082, isUH: true },
  { name: 'UH Rainbow Babies & Children\'s Hospital', lat: 41.5059, lng: -81.6053, isUH: true },
  { name: 'UH Seidman Cancer Center', lat: 41.5038, lng: -81.6075, isUH: true },
  { name: 'Cleveland Clinic', lat: 41.5034, lng: -81.6214, isUH: false },
  { name: 'Case Western Reserve University', lat: 41.5045, lng: -81.6087, isUH: false },
  { name: 'MetroHealth Medical Center', lat: 41.4485, lng: -81.7104, isUH: false },
  { name: 'Cleveland VA Medical Center', lat: 41.5093, lng: -81.6879, isUH: false }
];

function randomPick<T>(array: T[], count: number = 1): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCollaborator(index: number): Collaborator {
  const roleType = 
    index < 35 ? 'doctor' :
    index < 50 ? 'resident' :
    index < 65 ? 'nurse' :
    index < 85 ? 'engineer' :
    'designer';

  const firstName = randomElement(firstNames);
  const lastName = randomElement(lastNames);
  const name = `${firstName} ${lastName}`;

  let title: string;
  let skills: string[];
  let topicAreas: string[];

  if (roleType === 'doctor') {
    title = randomElement(doctorSpecialties);
    skills = randomPick(doctorSkills, Math.floor(Math.random() * 4) + 3);
    topicAreas = randomPick(topicAreasPool, Math.floor(Math.random() * 3) + 2);
  } else if (roleType === 'resident') {
    title = randomElement(residentSpecialties);
    skills = randomPick(residentSkills, Math.floor(Math.random() * 3) + 2);
    topicAreas = randomPick(topicAreasPool, Math.floor(Math.random() * 2) + 1);
  } else if (roleType === 'nurse') {
    title = randomElement(nurseRoles);
    skills = randomPick(nurseSkills, Math.floor(Math.random() * 4) + 3);
    topicAreas = randomPick(topicAreasPool, Math.floor(Math.random() * 2) + 2);
  } else if (roleType === 'engineer') {
    title = randomElement(engineerTitles);
    skills = randomPick(engineerSkills, Math.floor(Math.random() * 5) + 3);
    topicAreas = randomPick(topicAreasPool, Math.floor(Math.random() * 3) + 2);
  } else {
    title = randomElement(designerTitles);
    skills = randomPick(designerSkills, Math.floor(Math.random() * 5) + 3);
    topicAreas = randomPick(topicAreasPool, Math.floor(Math.random() * 3) + 2);
  }

  const institution = randomElement(institutions);
  
  // Add some location variance around the institution
  const latVariance = (Math.random() - 0.5) * 0.01;
  const lngVariance = (Math.random() - 0.5) * 0.01;

  const bio = roleType === 'doctor' 
    ? `Experienced ${title.toLowerCase()} focused on improving patient outcomes through innovative care approaches and research.`
    : roleType === 'resident'
    ? `${title} passionate about learning and contributing to healthcare innovation during clinical training.`
    : roleType === 'nurse'
    ? `${title} with extensive bedside experience, dedicated to improving patient care through process improvement and clinical innovation.`
    : roleType === 'engineer'
    ? `${title} specializing in healthcare technology solutions and medical device development.`
    : `${title} passionate about creating human-centered healthcare experiences that improve patient and provider workflows.`;

  return {
    id: `collab-${index}`,
    name,
    role: roleType,
    title,
    institution: institution.name,
    location: {
      lat: institution.lat + latVariance,
      lng: institution.lng + lngVariance
    },
    bio,
    topicAreas,
    skills,
    collaborationIntent: randomPick(collaborationIntents, Math.floor(Math.random() * 3) + 1),
    availability: randomElement(availabilities),
    projectStage: randomPick(projectStages, Math.floor(Math.random() * 2) + 1),
    workingStyle: randomPick(workingStyles, Math.floor(Math.random() * 2) + 1),
    constraints: randomPick(constraints, Math.floor(Math.random() * 2) + 1),
    collaborationType: randomPick(collaborationTypes, Math.floor(Math.random() * 3) + 2),
    preferredOrgType: randomPick(preferredOrgTypes, Math.floor(Math.random() * 2) + 1)
  };
}

// Generate 100 collaborators
export const collaborators: Collaborator[] = Array.from({ length: 100 }, (_, i) => generateCollaborator(i));

export const institutionList: Institution[] = [
  {
    id: 'uh-main',
    name: 'University Hospitals',
    location: { lat: 41.5045, lng: -81.6082 },
    isUH: true,
    collaboratorCount: collaborators.filter(c => c.institution === 'University Hospitals').length
  },
  {
    id: 'uh-rainbow',
    name: 'UH Rainbow Babies & Children\'s Hospital',
    location: { lat: 41.5059, lng: -81.6053 },
    isUH: true,
    collaboratorCount: collaborators.filter(c => c.institution === 'UH Rainbow Babies & Children\'s Hospital').length
  },
  {
    id: 'uh-seidman',
    name: 'UH Seidman Cancer Center',
    location: { lat: 41.5038, lng: -81.6075 },
    isUH: true,
    collaboratorCount: collaborators.filter(c => c.institution === 'UH Seidman Cancer Center').length
  },
  {
    id: 'cc',
    name: 'Cleveland Clinic',
    location: { lat: 41.5034, lng: -81.6214 },
    isUH: false,
    collaboratorCount: collaborators.filter(c => c.institution === 'Cleveland Clinic').length
  },
  {
    id: 'cwru',
    name: 'Case Western Reserve University',
    location: { lat: 41.5045, lng: -81.6087 },
    isUH: false,
    collaboratorCount: collaborators.filter(c => c.institution === 'Case Western Reserve University').length
  },
  {
    id: 'metro',
    name: 'MetroHealth Medical Center',
    location: { lat: 41.4485, lng: -81.7104 },
    isUH: false,
    collaboratorCount: collaborators.filter(c => c.institution === 'MetroHealth Medical Center').length
  },
  {
    id: 'va',
    name: 'Cleveland VA Medical Center',
    location: { lat: 41.5093, lng: -81.6879 },
    isUH: false,
    collaboratorCount: collaborators.filter(c => c.institution === 'Cleveland VA Medical Center').length
  }
];
