
export interface Destination {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  popularCourses: string[];
  code?: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: string;
  fullDesc?: string;
  longDescription?: string;
  image?: string;
  benefits?: string[];
  process?: string[];
}

export interface Office {
  id?: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  slug: string;
  mapEmbed?: string;
}

export interface College {
  id?: string;
  name: string;
  country: string;
  category: 'MBBS Abroad' | 'Study Abroad';
  image: string;
  link?: string;
}

export interface CollegeDetailData {
  id?: string;
  slug?: string;

  // BASIC INFO
  title: string;

  // HERO
  heroImage: string;
  heroImageMobile?: string;

  // INTRO
  intro: {
    text: string;
  };

  // QUICK FACTS
  quickFacts: Record<string, string>;

  // OVERVIEW
  quickOverview: Record<string, string>;

  // BENEFITS
  benefits: string[];

  // ELIGIBILITY
  eligibility: Record<string, string>;

  // DURATION
  duration: {
    mbbs: string;
    internship: string;
  };

  // SYLLABUS
  syllabus: {
    year: string;
    subjects: string;
  }[];

  // DOCUMENTS
  documents: string[];

  // FEES
  fees: {
    structure: {
      label: string;
      value: string;
    }[];
    note?: string;
  };

  // COURSES
  courses: string[];

  // STUDENT LIFE
  studentLife: string[];

  // PLACEMENTS
  placements: string[];

  // HOSTEL
  hostelFacilities: {
    intro: string;
    features: string[];
  };

  // CAREER
  careerOpportunities: Record<string, string>;

  // RECOGNITION
  recognition: string[];

  // GALLERY
  gallery: string[];

  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ProgramDetailData {
  title: string;
  tagline?: string;
  heroImage?: string;
  content: string;
  faqs?: { question: string; answer: string }[];
  overview?: string;
  about?: string;
}

export interface MBBSDetailData {
  title: string;
  heroImage: string;
  heroImageMobile: string;
  intro: {
    text: string;
    image: string;
  };
  quickFacts: {
    country: string;
    capital: string;
    currency: string;
    language: string;
    population: string;
    climate: string;
    timeDifference: string;
    popularCities: string;
    safety: string;
  };
  quickOverview: {
    courseName: string;
    duration: string;
    medium: string;
    eligibility: string;
    neet: string;
    recognition: string;
    intake: string;
  };
  forIndianStudents: string;
  benefits: string[];
  duration: {
    mbbs: string;
    internship: string;
  };
  eligibility: {
    academic: string;
    marks: string;
    neet: string;
    age: string;
  };
  documents: string[];
  indiaVsCountry: {
    fees: { india: string; country: string };
    exam: { india: string; country: string };
    donation: { india: string; country: string };
    exposure: { india: string; country: string };
    infrastructure: { india: string; country: string };
  };
  topUniversities: {
    name: string;
    description: string;
    established: string;
    location: string;
    tuitionFees: string;
    hostelFees: string;
    firstYearPackage: string;
    totalPackage: string;
    recognition: string;
  }[];
  whyChooseUs: string[];
  checklist: {
    item: string;
    required: boolean;
  }[];
  hostelFacilities: {
    intro: string;
    features: string[];
  };
  careerOpportunities: {
    practiceInIndia: string;
    postgraduate: string;
    research: string;
    administration: string;
    teaching: string;
    practiceAbroad: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface StudyAbroadDetailData {
  title: string;
  heroImage: string;
  heroImageMobile?: string;

  intro: {
    text: string;
    image: string;
  };

  whyStudy: string[];

  qualifications: {
    name: string;
    duration: string;
    description: string;
  }[];

  courseStreams: {
    stream: string;
    courses: string[];
    careers: string[];
  }[];

  topUniversities: {
    name: string;
    location: string;
    description: string;
  }[];

  partTimeWork: {
    hoursPerWeek: string;
    details: string[];
  };

  postStudyWork: {
    program: string;
    duration: string;
    description: string;
  };

  documentsRequired: string[];

  intakes: {
    intake: string;
    months: string;
    details: string;
  }[];

  cost: {
    tuitionFees: string;
    livingExpenses: string;
    additionalCosts?: string;
  };

  whyChooseUs: string[];

  lifeAndCareer: {
    description: string;
    points: string[];
  };

  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface StudyAbroadCollegeDetailData {
  title: string;
  coursetype: string;
  heroImage: string;
  heroImageMobile?: string;
  intro: { text: string };
  quickOverview: Record<string, string>;
  benefits: {
    intro: string;
    items: { heading: string; details: string }[];
  };
  SyllabusIntro: string;
  syllabus: {
    headers: string[];
    table: Record<string, string>[];
  };
  fees: {
    sections: {
      title: string;
      headers: string[];
      table: Record<string, string>[];
    }[];
  };
  duration: {
    headers: string[];
    table: Record<string, string>[];
  };
  studentSupport: string;
  recognition: string;
  hostelFacilities: string;
  studentLife: string;
  scholarshipIntro: string;
  scholarships: { title: string; details: string }[];
  eligibility: {
    headers: string[];
    table: Record<string, string>[];
  };
  whyChooseUsIntro: string;
  whyChooseUs: string[];
  documents: { document: string; details: string }[];
  conclusion: string;
  faqs: { question: string; answer: string }[];
}

export interface MBBSIndiaCollegeDetailData extends StudyAbroadCollegeDetailData {
  internship?: {
    intro: string;
    headers: string[];
    table: Record<string, string>[];
  };
  cutOff?: {
    title: string;
    headers: string[];
    table: Record<string, string>[];
  };
}

// ─── Shared primitives ────────────────────────────────────────────────────────

interface TitledPoint {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ─── College fee structures (vary by state) ───────────────────────────────────

interface CollegeMPRow {
  name: string;
  estd: number;
  annualFee: string;
  nriFee: string;
}

interface CollegeRajasthanRow {
  name: string;
  estd: number;
  stateQuota: string;
  managementQuota: string;
}

interface CollegeUPHaryanaRow {
  name: string;
  estd: number;
  place: string;
  annualFee: string;
}

interface CollegeBiharRow {
  name: string;
  location: string;
  annualFee: string;
  nriFee: string;
}

interface CollegeMaharashtraRow {
  name: string;
  estd: number;
  place: string;
  annualFee: string;
}

type CollegeRow =
  | CollegeMPRow
  | CollegeRajasthanRow
  | CollegeUPHaryanaRow
  | CollegeBiharRow
  | CollegeMaharashtraRow;

interface StateColleges {
  state: string;
  feeHeaders: string[];
  colleges: CollegeRow[];
}

// ─── Section interfaces ───────────────────────────────────────────────────────

interface OverviewSection {
  title: string;
  table: { particular: string; details: string }[];
}

interface WhySection {
  title: string;
  description: string;
  points: TitledPoint[];
}

interface EligibilitySection {
  title: string;
  table: { criteria: string; details: string }[];
}

interface DocumentsSection {
  title: string;
  subtitle: string;
  table: { document: string; details: string }[];
  quickList: string[];
}

interface CurriculumPhase {
  phase: string;
  subjects: string;
}

interface CurriculumYearRow {
  year: string;
  subjects: string;
}

interface CurriculumSection {
  title: string;
  description: string;
  phases: CurriculumPhase[];
  internship: string;
  subjectsTable: CurriculumYearRow[];
}

interface TopCollegesSection {
  title: string;
  description: string;
  stateWise: StateColleges[];
}

interface CareerScopeSection {
  title: string;
  description: string;
  paths: TitledPoint[];
}

interface AdvantagesSection {
  title: string;
  description: string;
  points: TitledPoint[];
}

interface WhyIExplainSection {
  title: string;
  description: string;
  points: TitledPoint[];
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

// ─── Root interface ───────────────────────────────────────────────────────────

export interface StudyIndiaDetailData {
  title: string;
  heroImage: string;
  intro: string;
  overview: OverviewSection;
  why: WhySection;
  eligibility: EligibilitySection;
  documents: DocumentsSection;
  curriculum: CurriculumSection;
  topColleges: TopCollegesSection;
  careerScope: CareerScopeSection;
  advantages: AdvantagesSection;
  whyIExplain: WhyIExplainSection;
  faqs: FAQSection;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface MediaItem {
  id?: string;
  fileName: string;
  fileURL: string;
  storagePath: string;
  type: 'image' | 'video' | 'file';
  size: number;
  uploadedAt: any;
}

export interface VideoStory {
  id?: string;
  studentName: string;
  university: string;
  videoUrl: string; // MP4 URL or YouTube Embed
  thumbnailUrl: string;
  tagline: string;
}

export interface Blog {
  id: string;
  title: string;
  img: string;
  imgAlt?: string;
  date: string;
  category: string;
  author: string;
  content: string;
  readTime: string;
  metaTitle?: string;
  metaDesc?: string;
  timestamp?: any;
}

export interface SiteSettings {
  id?: string;
  logoUrl: string;
  metaTitle: string;
  metaDesc: string;
  helpline: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  univ: string;
  text: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  category: 'Visa Success' | 'University Visit' | 'Event';
}

export type AppView = 'home' | 'about' | 'services' | 'contact' | 'mbbs-abroad' | 'study-abroad' | 'study-india' | 'exams' | 'admin' | 'service-detail' | 'legal' | 'achievements' | 'office-detail' | 'blog-list' | 'blog-detail' | 'college-detail';

export interface EntranceExamData {
  id?: string;
  title: string;
  heroImage: string;
  intro: string;
  examParts?: string[];
  additionalNote?: string;
  eligibility: {
    title: string;
    points: string[];
  };
  syllabus: {
    maths?: string[];
    physics?: {
      sectionA: string[];
      sectionB: string[];
    };
    chemistry?: {
      physical: string[];
      inorganic: string[];
      organic: string[];
    };
    biology?: string[]; // Added for NEET
  };
  preparationTips: string[];
}

export interface RouteState {
  view: AppView;
  subPath?: string;
}
