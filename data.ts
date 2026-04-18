import { Destination, Office, Blog, Testimonial, College, CollegeDetailData, ProgramDetailData, MBBSDetailData, StudyIndiaDetailData, Service } from './types';
export { MBBS_ABROAD_DETAILED } from './mbbs_data.ts';
export { STUDY_ABROAD_DETAILED } from './studyAbroad_Data.ts';

export const LOGO_URL = "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774420049/iexplain_logo_xbdxmc.jpg";
export const HERO_IMG_URL = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200";

export const PRIVACY_POLICY_CONTENT = `
<h3>1. Introduction</h3>
<p>Welcome to iExplain Education. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your personal information when you visit our website or use our services.</p>
<p>We collect basic information such as name, email, and phone number when you fill out forms on our site. This is used solely to provide counseling services.</p>
`;

export const TERMS_CONTENT = `
<h3>1. Acceptance of Terms</h3>
<p>By accessing and using the iExplain Education website and services, you agree to be bound by these Terms and Conditions.</p>
<p>All content provided is for informational purposes. We strive for accuracy but cannot guarantee admission as it depends on university criteria.</p>
`;

export const OFFICE_ADDRESSES: Office[] = [
  {
    state: "Uttar Pradesh",
    city: "Noida (HQ)",
    slug: "noida-hq",
    address: "iExplain Education Pvt Ltd, C-7, Ground Floor, Sector-02, Noida - 201301",
    phone: "+91 97738 47799",
    lat: 28.5708,
    lng: 77.3260,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.957388755013!2d77.3235652755026!3d28.571068875701777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50742d4a53d%3A0xc682914104085489!2sWave%20Silver%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    state: "Uttarakhand",
    city: "Dehradun",
    slug: "dehradun",
    address: "First Floor, A1 Tower, Chakrata Rd, beside Ballupur Flyover, near Royal Enfield Showroom, Ballupur Chowk, Ram Vihar, Ballupur, Dehradun, Uttarakhand 248001",
    phone: "+91 97738 47799",
    lat: 30.3165,
    lng: 78.0322
  },
  {
    state: "Maharashtra",
    city: "Pune",
    slug: "pune",
    address: "5th Floor, Sai Platinum, 501, Laxmi Rd, near Vijay Talkies, Sadashiv Peth, Pune, Maharashtra 411030",
    phone: "+91 97738 47799",
    lat: 18.5204,
    lng: 73.8567
  },
  {
    state: "Bihar",
    city: "Patna",
    slug: "patna",
    address: "2nd Floor, M. Complex, Phulwari Sharif, Khagaul Road, Near Mahaveer Cancer Sansthan & Research Centre, Patna - 801505",
    phone: "+91 97738 47799",
    lat: 25.5941,
    lng: 85.1376
  },
  {
    state: "Karnataka",
    city: "Bangalore",
    slug: "bangalore",
    address: "Sai Sumukh Building, 3rd Floor, Near Biryani Zest, Sahakarnagar, Bangalore - 560092",
    phone: "+91 97738 47799",
    lat: 13.0620,
    lng: 77.5860
  }
];

export const FOOTER_COLLEGES = {
  mbbs: [
    { country: 'Russia', code: 'RU', names: ['Kazan Federal University', 'Bashkir State Medical University', 'Orenburg State Medical University', 'Crimea Federal University', 'First Moscow State Medical University', 'Immanuel Kant Baltic Federal University'] },
    { country: 'Georgia', code: 'GE', names: ['Tbilisi State Medical University', 'Batumi Shota Rustaveli State University', 'David Tvildiani Medical University', 'European University Georgia', 'Georgian National University SEU', 'Georgian American University'] },
    { country: 'Kazakhstan', code: 'KZ', names: ['Al-Farabi Kazakh National University', 'Kazakh National Medical University', 'Astana Medical University', 'South Kazakhstan Medical Academy'] },
    { country: 'Kyrgyzstan', code: 'KG', names: ['Osh State University', 'Jalal-Abad State University', 'International School of Medicine', 'Asian Medical Institute'] },
    { country: 'Uzbekistan', code: 'UZ', names: ['Tashkent State Medical University', 'Samarkand State Medical University', 'Bukhara State Medical Institute', 'Andijan State Medical Institute'] },
    { country: 'China', code: 'CN', names: ['Nanjing Medical University', 'Jilin University', 'China Medical University', 'Dalian Medical University'] },
    { country: 'Nepal', code: 'NP', names: ['Tribhuvan University', 'Kathmandu University', 'BP Koirala Institute of Health Sciences', 'Patan Academy of Health Sciences'] },
    { country: 'Bangladesh', code: 'BD', names: ['Dhaka National Medical College', 'Bangladesh Medical College', 'Jahurul Islam Medical College', 'Holy Family Red Crescent Medical College'] },
    { country: 'Romania', code: 'RO', names: ['Carol Davila University', 'Grigore T Popa University', 'Iuliu Hatieganu University', 'Ovidius University'] },
    { country: 'Serbia', code: 'RS', names: ['University of Belgrade', 'University of Novi Sad', 'University of Nis', 'University of Kragujevac'] }
  ],
  study: [
    { country: 'Ireland', code: 'IE', names: ['Trinity College Dublin', 'University College Dublin', 'Dublin City University', 'University of Limerick'] },
    { country: 'USA', code: 'US', names: ['Northeastern University', 'Arizona State University', 'New York University', 'University of Texas at Austin'] },
    { country: 'UK', code: 'GB', names: ['University of Leeds', 'University of Manchester', 'University of Birmingham', 'University of Warwick'] },
    { country: 'Australia', code: 'AU', names: ['University of Melbourne', 'Monash University', 'University of Sydney', 'Deakin University'] },
    { country: 'New Zealand', code: 'NZ', names: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'Auckland University of Technology'] },
    { country: 'Canada', code: 'CA', names: ['University of Toronto', 'University of British Columbia', 'McGill University', 'York University'] },
    { country: 'UAE', code: 'AE', names: ['University of Birmingham Dubai', 'Middlesex University Dubai', 'Heriot-Watt University Dubai', 'Manipal Academy Dubai'] },
    { country: 'Europe Top Destinations', code: 'EU', names: ['Germany', 'Italy', 'France', 'Malta', 'Netherlands', 'Poland'] }
  ],
  mbbs_india: [
    { country: 'North India', code: 'IN', names: ['Uttar Pradesh', 'Haryana', 'Delhi', 'Uttarakhand', 'Himachal Pradesh'] },
    { country: 'Central & West India', code: 'IN', names: ['Rajasthan', 'Maharashtra', 'Madhya Pradesh'] },
    { country: 'East & South India', code: 'IN', names: ['Bihar', 'Karnataka'] }
  ]
};

const generatePlaceholder = (name: string, type: string) => ({
  name, location: 'Global Campus', type: 'Public/Private', established: '1900s',
  image: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1200',
  intro: `${name} is a premier institution known for its academic excellence.`,
  highlights: ['World Class Infrastructure', 'Global Recognition'],
  eligibility: ['10+2 with 50% Marks', 'Valid Passport'],
  admissionProcess: ['Submit Application', 'Document Verification'],
  documents: ['Passport', 'Transcripts'],
  fees: { structure: [{ label: 'Tuition Fee', value: 'Contact for details' }], note: 'Fees subject to change.' },
  courses: [type === 'MBBS Abroad' ? 'MBBS' : 'Undergraduate Programs'],
  studentLife: ['Sports Complex', 'Library'],
  placements: ['Global Career Opportunities'],
  gallery: []
});

const DETAILED_COLLEGES: Record<string, CollegeDetailData> = {
  "kazan-federal-university": {
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    type: "Public Federal University",
    established: "1804",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    intro: "Kazan Federal University (KFU) is one of the oldest universities in Russia...",
    highlights: ["2nd Oldest University in Russia", "WHO & NMC Recognized"],
    eligibility: ["Minimum 50% marks in PCB", "NEET Qualified"],
    admissionProcess: ["Application", "Admission Letter"],
    documents: ["10th & 12th Marksheets", "Passport"],
    fees: { structure: [{ label: "Tuition Fee", value: "468,000 RUB" }], note: "Exchange rate fluctuates." },
    courses: ["MBBS"],
    studentLife: ["Hostels", "Sports"],
    placements: ["FMGE/NExT eligible"],
    gallery: ["https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"]
  },
  "northeastern-university": {
    name: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    type: "Private Research University",
    established: "1898",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200",
    intro: "Northeastern University is a top-tier private research university...",
    highlights: ["#1 in Co-op", "Tier 1 Research"],
    eligibility: ["High School Diploma", "GPA 3.0+"],
    admissionProcess: ["Common App", "Fee Payment"],
    documents: ["Transcripts", "SOP"],
    fees: { structure: [{ label: "Tuition", value: "$60,000/year" }], note: "Varies by program" },
    courses: ["CS", "Business"],
    studentLife: ["300+ Orgs"],
    placements: ["High Employability"],
    gallery: ["https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600"]
  }
};

const allMbbsNames = FOOTER_COLLEGES.mbbs.flatMap(c => c.names);
const allStudyNames = FOOTER_COLLEGES.study.flatMap(c => c.names);
const allIndiaNames = FOOTER_COLLEGES.mbbs_india.flatMap(c => c.names);

allMbbsNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS Abroad');
});
allStudyNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'Study Abroad');
});
allIndiaNames.forEach(name => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  if (!DETAILED_COLLEGES[slug]) DETAILED_COLLEGES[slug] = generatePlaceholder(name, 'MBBS India');
});

export const COLLEGE_DETAILS = DETAILED_COLLEGES;

export const ABOUT_US_CONTENT = { intro: `Welcome to iExplain Education...`, vision: { title: "Opening Doors...", text: "..." }, mission: { title: "Empowering Minds...", points: [] } };
export const CORE_VALUES_FULL = [{ title: "Integrity", desc: "..." }];
export const TEAM_MEMBERS = [{ name: "Sunil Baranwal", role: "Director", image: "https://ui-avatars.com/api/?name=Sunil+Baranwal" }];

export const INDIA_COURSES_DETAILED: Record<string, StudyIndiaDetailData> = {
  "mbbs": {
    title: "Study MBBS in India for Indian Students",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    intro: "MBBS in India is one of the most preferred career choices for students who want to become doctors and serve in the healthcare sector. India has a well-established medical education system with numerous government and private medical colleges that provide high-quality medical training and clinical exposure. Every year thousands of students appear for the medical entrance examination to secure admission to MBBS programs across the country.\n\nMedical colleges in India are regulated by the National Medical Commission, which ensures that all institutions maintain proper education standards, infrastructure, and clinical training facilities. The MBBS course in India provides strong theoretical knowledge along with practical clinical experience through hospital internships.\n\nDue to the increasing demand for qualified doctors and healthcare professionals, MBBS in India continues to be one of the most respected and rewarding career options. Students receive hands-on clinical training, work with experienced doctors, and gain practical exposure in hospitals, which helps them build a successful medical career.\n\nOne of the most important benefits of pursuing MBBS in India is the exposure that is gained by the students. India is a vast country with a large population, and because of this, the exposure that is gained by the students is quite diverse, and they are able to learn from real-life situations under the guidance and supervision of experienced doctors and medical professionals. Many medical colleges in India are also well-equipped with modern laboratory facilities, research, and teaching hospitals, making the learning experience very fulfilling for the students.\n\nWith the growing healthcare industry, the demand for qualified doctors, and the continuous development of medical science, MBBS in India is a promising career destination. If students complete their MBBS course successfully, they can find employment in hospitals, healthcare centers, and research centers or can opt for higher specialization to have a successful career in the medical line.",

    overview: {
      title: "Quick Overview of MBBS in India 2026-27",
      table: [
        { particular: "Course Name", details: "MBBS (Bachelor of Medicine & Bachelor of Surgery)" },
        { particular: "Course Duration", details: "5.5 Years (4.5 Years Academic Study + 1 Year Internship)" },
        { particular: "Entrance Exam", details: "National Eligibility cum Entrance Test" },
        { particular: "Minimum Qualification", details: "10+2 with Physics, Chemistry & Biology" },
        { particular: "Minimum Marks", details: "50% in PCB (General Category)" },
        { particular: "Minimum Age", details: "17 Years" },
        { particular: "Regulatory Authority", details: "National Medical Commission" },
        { particular: "Course Recognition", details: "Recognized by NMC and global medical organizations" },
        { particular: "Career Opportunities", details: "Doctor, Surgeon, Medical Researcher, Healthcare Specialist" }
      ]
    },

    why: {
      title: "Why MBBS in India?",
      description: "Pursuing MBBS in India is one of the most preferred choices for students who aspire to build a successful career in medicine. India has a strong medical education system supported by experienced faculty, modern infrastructure, and globally recognized degrees. Medical colleges in India provide high-quality education along with extensive clinical exposure, which helps students gain practical knowledge and skills required to become competent doctors.\n\nThe biggest advantage of pursuing MBBS in India is that it is regulated under the National Medical Commission. This ensures that all medical colleges maintain high standards in terms of education and provide quality education to students. The degree of MBBS from medical colleges in India is highly respected and recognized both within and outside the country.\n\nAnother significant reason for opting for MBBS in India is that there are top-class government and private medical colleges with well-equipped hospitals attached to them, where students get a chance to interact with real patients and thus develop medical skills from a very early age.",
      points: [
        {
          title: "Globally Recognized Medical Degree",
          description: "MBBS degrees from Indian medical colleges are recognized by organizations like the World Health Organization and the National Medical Commission, allowing graduates to pursue further studies or practice medicine in many countries after fulfilling licensing requirements."
        },
        {
          title: "High-Quality Medical Education",
          description: "India has some of the best medical institutions with experienced professors, modern laboratories, and advanced medical equipment that provide students with comprehensive theoretical and practical training."
        },
        {
          title: "Extensive Clinical Exposure",
          description: "Medical colleges in India are usually attached to large hospitals. This allows students to gain hands-on experience by treating a large number of patients during their internship and clinical rotations."
        },
        {
          title: "Affordable Tuition Fees in Government Colleges",
          description: "Government medical colleges in India offer highly subsidized tuition fees compared to many countries, making medical education more affordable for deserving students."
        },
        {
          title: "Diverse Medical Specializations",
          description: "After completing MBBS, students can pursue postgraduate medical courses such as MD or MS in various specialties like cardiology, surgery, pediatrics, orthopedics, and more."
        },
        {
          title: "Strong Healthcare System Exposure",
          description: "India has a vast and diverse patient population, which helps medical students understand different types of diseases and medical conditions, giving them valuable clinical experience."
        }
      ]
    },

    eligibility: {
      title: "Eligibility Criteria for MBBS in India",
      table: [
        { criteria: "Educational Qualification", details: "Students must complete 10+2 (Higher Secondary Education) from a recognized board with Physics, Chemistry, Biology/Biotechnology, and English as compulsory subjects." },
        { criteria: "Minimum Marks (General Category)", details: "At least 50% marks in Physics, Chemistry, and Biology (PCB) in 12th standard." },
        { criteria: "Minimum Marks (OBC / SC / ST)", details: "At least 40% marks in PCB subjects." },
        { criteria: "Minimum Marks (PWD Category)", details: "Minimum 45% marks in PCB subjects." },
        { criteria: "Entrance Exam Requirement", details: "Students must qualify the NEET (National Eligibility cum Entrance Test) conducted by the National Testing Agency." },
        { criteria: "Age Requirement", details: "Minimum 17 years of age on or before 31st December of the admission year." },
        { criteria: "Regulatory Authority", details: "MBBS admissions and regulations are governed by the National Medical Commission." },
        { criteria: "Nationality", details: "Eligible candidates include Indian citizens, NRIs, OCIs, PIOs, and Foreign Nationals (depending on college rules)." },
        { criteria: "Medical Fitness", details: "Candidates must be medically fit and may need to provide a medical fitness certificate at the time of admission." }
      ]
    },

    documents: {
      title: "Documents Required for MBBS Admission in India",
      subtitle: "Students who want to take admission in MBBS in India must submit several important documents during the counseling and admission process. These documents are required to verify the student's academic qualifications, identity, and eligibility as per the guidelines of the National Medical Commission.",
      table: [
        { document: "NEET Scorecard", details: "Valid scorecard of NEET (National Eligibility cum Entrance Test) required for MBBS admission." },
        { document: "NEET Admit Card", details: "Admit card issued during the NEET examination." },
        { document: "Class 10 Marksheet & Certificate", details: "Required as proof of date of birth and academic qualification." },
        { document: "Class 12 Marksheet & Certificate", details: "Must show completion of Physics, Chemistry, Biology, and English subjects." },
        { document: "Migration Certificate", details: "Required if the student has passed 12th from a different board or state." },
        { document: "Character Certificate", details: "Issued by the last school or institution attended." },
        { document: "Domicile Certificate", details: "Required for state quota admissions in many states." },
        { document: "Medical Fitness Certificate", details: "Certificate confirming the candidate is medically fit for the MBBS course." },
        { document: "Category Certificate (if applicable)", details: "For candidates belonging to SC/ST/OBC/EWS categories." }
      ],
      quickList: [
        "10th class mark sheet",
        "12th class mark sheet",
        "NEET score card",
        "Passport-size photographs",
        "Original passport",
        "Medical certificate",
        "NEET admit card"
      ]
    },

    curriculum: {
      title: "Curriculum and Internship",
      description: "The MBBS curriculum in India is designed to provide a comprehensive understanding of medical sciences, clinical skills, and patient care. It follows the guidelines of the National Medical Commission (NMC) and spans 5.5 years, including 4.5 years of academic study and one year of mandatory internship.",
      phases: [
        { phase: "Pre-Clinical (1st year)", subjects: "Anatomy, Physiology, Biochemistry" },
        { phase: "Para-Clinical (2nd year)", subjects: "Pathology, Microbiology, Pharmacology, Forensic Medicine" },
        { phase: "Clinical (3rd to 4.5 years)", subjects: "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Orthopedics, ENT, Ophthalmology, Psychiatry, and Community Medicine" }
      ],
      internship: "The one-year internship is compulsory and provides hands-on training in various hospital departments like Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, and Community Medicine. Interns gain practical experience in patient management, emergency care, and minor procedures under supervision.",
      subjectsTable: [
        { year: "1st Year", subjects: "Anatomy, Physiology, Biochemistry" },
        { year: "2nd Year", subjects: "Pathology, Microbiology, Pharmacology, Forensic Medicine" },
        { year: "3rd Year", subjects: "Internal Medicine, Surgery, Pediatrics, Psychiatry" },
        { year: "4th Year", subjects: "Obstetrics & Gynecology, Orthopedics, ENT, Ophthalmology" },
        { year: "Internship", subjects: "Hands-on training in all major departments" }
      ]
    },

    topColleges: {
      title: "List of Top Private Medical Colleges in India",
      description: "A list of some of the best medical colleges in India that offer quality medical education and exposure. These medical colleges are recognized by the National Medical Commission and offer MBBS courses through the NEET entrance examination.",
      stateWise: [
        {
          state: "Madhya Pradesh",
          colleges: [
            { name: "Index Medical College Hospital & Research Centre", estd: 2007, annualFee: "13,77,000", nriFee: "48,60,000" },
            { name: "Peoples College of Medical Sciences & Research Centre", estd: 2005, annualFee: "13,89,750", nriFee: "49,05,000" },
            { name: "Sri Aurobindo Medical College and Post Graduate Institute", estd: 2003, annualFee: "13,81,845", nriFee: "48,77,100" },
            { name: "Ruxmaniben Deepchand Gardi Medical College", estd: 2001, annualFee: "8,18,181", nriFee: "27,00,000" },
            { name: "L.N. Medical College and Research Centre", estd: 2009, annualFee: "14,09,300", nriFee: "49,74,000" }
          ],
          feeHeaders: ["College", "Estd", "Annual Tuition Fee (₹)", "Annual Tuition Fee NRI (₹)"]
        },
        {
          state: "Rajasthan",
          colleges: [
            { name: "Ananta Institute of Medical Sciences", estd: 2016, stateQuota: "18,90,000", managementQuota: "28,00,000" },
            { name: "DR SS TANTIA MEDICAL COLLEGE & HOSPITAL", estd: 2021, stateQuota: "22,25,000", managementQuota: "29,25,000" },
            { name: "NIMS, JAIPUR", estd: 2004, stateQuota: "24,00,000", managementQuota: "30,00,000" },
            { name: "American International Institute of Medical Science", estd: 2016, stateQuota: "18,90,000", managementQuota: "32,00,000" },
            { name: "Geetanjali Medical College and Hospital", estd: 2008, stateQuota: "23,00,000", managementQuota: "30,00,000" }
          ],
          feeHeaders: ["College", "Estd", "State Quota (₹)", "Management Quota (₹)"]
        },
        {
          state: "Uttar Pradesh",
          colleges: [
            { name: "Rama Medical College and Hospital", estd: 2008, place: "Kanpur", annualFee: "15,19,895" },
            { name: "Saraswati Medical College", estd: 2008, place: "Unnao", annualFee: "11,59,610" },
            { name: "Krishna Mohan Medical College and Hospital", estd: 2016, place: "Mathura", annualFee: "11,73,856" },
            { name: "FH Medical College", estd: 2014, place: "Agra", annualFee: "16,50,000" },
            { name: "G.S. Medical College and Hospital", estd: 2016, place: "Hapur", annualFee: "14,42,654" }
          ],
          feeHeaders: ["College", "Estd", "Place", "Per Year Fee (₹)"]
        },
        {
          state: "Bihar",
          colleges: [
            { name: "Mata Gujri Memorial Medical College", location: "Kishanganj", annualFee: "9,63,000", nriFee: "-" },
            { name: "Netaji Subhas Medical College and Hospital", location: "Patna", annualFee: "16,00,000", nriFee: "$35,000" },
            { name: "Katihar Medical College", location: "Katihar", annualFee: "11,05,000", nriFee: "$28,000" },
            { name: "Madhubani Medical College", location: "Madhubani", annualFee: "14,00,000", nriFee: "$30,000" },
            { name: "Lord Buddha Koshi Medical College", location: "Saharsa", annualFee: "12,00,000", nriFee: "$30,000" }
          ],
          feeHeaders: ["College", "Location", "Annual Fees (₹)", "NRI Fees ($)"]
        },
        {
          state: "Haryana",
          colleges: [
            { name: "Adesh Medical College and Hospital", estd: 2017, place: "Kurukshetra", annualFee: "12,00,000" },
            { name: "NC Medical College and Hospital", estd: 2016, place: "Panipat", annualFee: "12,00,000" },
            { name: "World College of Medical Sciences and Hospital", estd: 2016, place: "Jhajjar", annualFee: "12,00,000" },
            { name: "Maharishi Markandeshwar Institute of Medical Sciences", estd: 1993, place: "Ambala", annualFee: "18,00,000" },
            { name: "Amrita School of Medical Sciences", estd: 2023, place: "Faridabad", annualFee: "25,00,000" }
          ],
          feeHeaders: ["College", "Estd", "Place", "Per Year Fee (₹)"]
        },
        {
          state: "Maharashtra",
          colleges: [
            { name: "Dr. D.Y. Patil Medical College", estd: 1989, place: "Navi Mumbai", annualFee: "26,00,000" },
            { name: "Dr. D.Y. Patil Medical College", estd: 1995, place: "Pune", annualFee: "27,82,000" },
            { name: "Bharati Vidyapeeth Medical College", estd: 1989, place: "Pune", annualFee: "25,30,000" },
            { name: "Symbiosis Medical College for Women", estd: 2020, place: "Pune", annualFee: "11,00,000" },
            { name: "Datta Meghe Institute of Medical Sciences", estd: 2020, place: "Nagpur", annualFee: "22,25,000" }
          ],
          feeHeaders: ["College", "Estd", "Place", "Per Year Fee (₹)"]
        }
      ]
    },

    careerScope: {
      title: "Scope and Career Opportunities After MBBS in India",
      description: "Completing MBBS in India opens the door to a wide range of career opportunities in the healthcare sector. With the increasing demand for qualified doctors and the expansion of healthcare services across the country, MBBS graduates have excellent career prospects in both the public and private sectors.",
      paths: [
        {
          title: "Postgraduate Medical Studies",
          description: "Many MBBS graduates pursue postgraduate programs such as MD (Doctor of Medicine) or MS (Master of Surgery) to specialise in fields like cardiology, orthopaedics, paediatrics, dermatology, or general surgery. Admission to postgraduate medical courses is conducted through exams like NEET PG."
        },
        {
          title: "Clinical Practice",
          description: "Graduates can start working as general physicians in hospitals, clinics, or healthcare centers. They can also open their own private clinics after gaining some professional experience and completing the required registration with the National Medical Commission."
        },
        {
          title: "Government Jobs",
          description: "MBBS graduates can apply for government healthcare jobs in institutions such as government hospitals, public health departments, and defence services. They may also work under national healthcare programs run by the Ministry of Health and Family Welfare."
        },
        {
          title: "Medical Research",
          description: "Students interested in research can work in medical laboratories, pharmaceutical companies, or research institutes. They can also pursue higher studies, such as a PhD in medical sciences, or work with organisations like the Indian Council of Medical Research."
        }
      ]
    },

    advantages: {
      title: "Advantages of MBBS in India",
      description: "Studying MBBS in India offers several advantages for students who want to build a successful career in the medical field. India has a well-structured medical education system with experienced faculty, modern hospitals, and strong clinical exposure.",
      points: [
        {
          title: "Globally Recognized Medical Degree",
          description: "The MBBS degree from Indian medical colleges is recognised by international medical bodies such as the World Health Organization. This allows graduates to pursue higher studies or medical practice in different countries after clearing the required licensing exams."
        },
        {
          title: "High-Quality Medical Education",
          description: "India has many reputed medical colleges with experienced professors, advanced laboratories, and well-equipped hospitals that provide students with strong theoretical knowledge and practical training."
        },
        {
          title: "Extensive Clinical Exposure",
          description: "Medical colleges in India are usually attached to large hospitals where students interact with a large number of patients. This gives them valuable hands-on clinical experience during their training."
        },
        {
          title: "Strong Career Opportunities",
          description: "India's healthcare sector is growing rapidly, creating a high demand for skilled doctors in hospitals, clinics, research centers, and public health organisations."
        }
      ]
    },

    whyIExplain: {
      title: "Why Choose iExplain Education for Admission in MBBS in India?",
      description: "Choosing the right guidance is very important for securing admission to a good medical college. iExplain Education helps students throughout the entire admission journey, from career counseling to final enrollment in top medical colleges.",
      points: [
        {
          title: "Expert Career Counseling",
          description: "iExplain Education provides professional counseling to help students understand their career options in the medical field. Our experts guide students in choosing the right medical colleges based on their NEET score, budget, and preferences."
        },
        {
          title: "Assistance with College Selection",
          description: "Selecting the right medical college is one of the most important decisions for any student. We help students shortlist the best government and private medical colleges in India according to their eligibility and career goals."
        },
        {
          title: "Complete Admission Support",
          description: "Our team provides complete assistance with the admission process, including NEET counseling guidance, documentation support, and application procedures, ensuring a smooth and hassle-free admission experience."
        },
        {
          title: "Transparent and Reliable Process",
          description: "At iExplain Education, we follow a transparent and ethical admission process. Students and parents receive accurate information about colleges, fees, and admission requirements without any hidden charges."
        },
        {
          title: "Documentation Guidance",
          description: "We assist students in preparing and verifying all the necessary documents required for MBBS admission, making the process faster and more organized."
        },
        {
          title: "Personalized Student Support",
          description: "Every student has different goals and academic backgrounds. Our counselors provide personalized support and one-on-one guidance to ensure students make the best decisions for their future."
        }
      ]
    },

    faqs: {
      title: "FAQs - MBBS in India",
      items: [
        {
          question: "What is the duration of MBBS in India?",
          answer: "The duration of MBBS in India is 5.5 years, which includes 4.5 years of academic study and 1 year of compulsory internship in hospitals or medical institutions."
        },
        {
          question: "Is NEET mandatory for MBBS admission in India?",
          answer: "Yes, qualifying the NEET (National Eligibility cum Entrance Test) is mandatory for admission to all government and private medical colleges in India."
        },
        {
          question: "What is the minimum eligibility for MBBS in India?",
          answer: "Students must complete 12th grade with Physics, Chemistry, and Biology (PCB) and obtain at least 50% marks (40% for reserved categories) to be eligible for MBBS admission."
        },
        {
          question: "Who regulates MBBS education in India?",
          answer: "MBBS education and medical colleges in India are regulated by the National Medical Commission, which ensures quality standards in medical education."
        },
        {
          question: "What is the average cost of studying MBBS in India?",
          answer: "The cost of MBBS in India varies depending on the type of college. Government medical colleges usually have lower fees, while private medical colleges may have higher tuition fees."
        }
      ]
    }
  },
  "md-ms": {
    "title": "Study MD/MS in India for Medical Graduates",
    "heroImage": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    "intro": "MD (Doctor of Medicine) and MS (Master of Surgery) are postgraduate medical degrees that students pursue after completing their MBBS to gain advanced knowledge, clinical expertise, and specialization in a particular branch of medicine. These programs are considered the next crucial step for medical graduates who want to enhance their skills and build a successful career in the healthcare sector. In India, admission to MD/MS courses is primarily based on the NEET PG (National Eligibility cum Entrance Test – Postgraduate), conducted by the National Board of Examinations (NBE), followed by centralized counselling.\n\nMD is a non-surgical postgraduate degree that focuses on the diagnosis, prevention, and medical treatment of diseases. It includes specializations such as General Medicine, Pediatrics, Dermatology, Radiology, Psychiatry, and Anesthesiology. On the other hand, MS is a surgical postgraduate degree that deals with surgical procedures and operative techniques, with specializations like General Surgery, Orthopedics, ENT (Ear, Nose, and Throat), and Obstetrics & Gynecology. Both MD and MS programs typically have a duration of 3 years, during which students undergo rigorous academic training along with hands-on clinical practice in hospitals.\n\nDuring the MD/MS course, students are exposed to real patient care, hospital duties, emergency cases, ward rounds, and clinical research, which helps them develop practical skills and decision-making abilities. They also participate in seminars, case studies, and thesis work, which are essential for academic and research development. This combination of theoretical learning and practical exposure ensures that doctors are well-prepared to handle complex medical situations independently.\n\nPursuing MD/MS offers numerous career opportunities. After completing these degrees, doctors can work as specialists or consultants in hospitals, clinics, and healthcare institutions, or they can start their own practice. Additionally, they can opt for further super-specialization courses such as DM (Doctorate of Medicine) or MCh (Master of Chirurgiae), which provide even deeper expertise in specific medical fields. MD/MS graduates can also explore careers in medical research, teaching, hospital administration, and public health sectors.\n\nWith the growing demand for specialized healthcare services and increasing awareness about quality medical treatment, the importance of MD/MS degrees has significantly increased. These programs not only improve a doctor's professional skills but also enhance their earning potential and career growth. Overall, pursuing MD/MS in India is a vital step for medical graduates who aim to achieve excellence, specialization, and long-term success in the medical profession.",

    "overview": {
      "title": "MD vs MS – Overview",
      "table": [
        { "particular": "Full Form", "md": "Doctor of Medicine", "ms": "Master of Surgery" },
        { "particular": "Type of Course", "md": "Non-Surgical Postgraduate Degree", "ms": "Surgical Postgraduate Degree" },
        { "particular": "Focus Area", "md": "Diagnosis & Medical Treatment", "ms": "Surgical Procedures & Operations" },
        { "particular": "Course Duration", "md": "3 Years", "ms": "3 Years" },
        { "particular": "Eligibility", "md": "MBBS + NEET PG Qualified", "ms": "MBBS + NEET PG Qualified" },
        { "particular": "Admission Process", "md": "Based on NEET PG conducted by National Board of Examinations", "ms": "Same as MD (NEET PG based)" },
        { "particular": "Top Specializations", "md": "General Medicine, Pediatrics, Radiology, Dermatology, Psychiatry", "ms": "General Surgery, Orthopedics, ENT, Obstetrics & Gynecology" },
        { "particular": "Training Type", "md": "Clinical & Theoretical (Non-surgical)", "ms": "Clinical + Surgical Hands-on Training" },
        { "particular": "Career Options", "md": "Physician, Specialist Doctor, Consultant", "ms": "Surgeon, Surgical Specialist" },
        { "particular": "Work Area", "md": "Hospitals, Clinics, Research, Teaching", "ms": "Hospitals, Operation Theatres, Clinics" },
        { "particular": "Further Studies", "md": "DM (Super Specialization)", "ms": "MCh (Super Specialization)" },
        { "particular": "Scope in India", "md": "High demand for medical specialists", "ms": "High demand for skilled surgeons" }
      ]
    },

    "whatIs": {
      "title": "What is MD and MS?",
      "description": "MD (Doctor of Medicine) and MS (Master of Surgery) are postgraduate medical degrees that students pursue after completing their MBBS to gain specialization in a specific field of medicine. These courses help doctors develop advanced knowledge, clinical skills, and expertise required to become specialists in the healthcare sector.",
      "points": [
        {
          "title": "MD (Doctor of Medicine)",
          "description": "MD is a non-surgical postgraduate degree that focuses on the diagnosis, prevention, and treatment of diseases through medicines and non-invasive methods. It includes specializations such as General Medicine, Pediatrics, Dermatology, Radiology, and Psychiatry. Doctors who complete MD generally work as physicians or specialists in hospitals and clinics."
        },
        {
          "title": "MS (Master of Surgery)",
          "description": "MS is a surgical postgraduate degree that focuses on surgical procedures and operative techniques. It includes fields like General Surgery, Orthopedics, ENT (Ear, Nose, and Throat), and Obstetrics & Gynecology. MS graduates are trained to perform surgeries and handle surgical cases."
        }
      ]
    },

    "curriculum": {
      "title": "MD/MS Course Duration and Structure",
      "description": "The MD (Doctor of Medicine) and MS (Master of Surgery) programs are postgraduate medical courses designed to provide advanced clinical training, specialization, and practical exposure after MBBS. In India, these courses are regulated and admissions are conducted through NEET PG by the National Board of Examinations.",
      "durationTable": [
        { "course": "MD (Doctor of Medicine)", "duration": "3 Years" },
        { "course": "MS (Master of Surgery)", "duration": "3 Years" }
      ],
      "phases": [
        { "phase": "1st Year", "structure": "Basic Clinical Training", "details": "Introduction to specialization, patient interaction, ward duties, and basic procedures" },
        { "phase": "2nd Year", "structure": "Advanced Clinical Exposure", "details": "Diagnosis, case handling, assisting in procedures/surgeries, seminars, and presentations" },
        { "phase": "3rd Year", "structure": "Specialization & Research", "details": "Independent case handling, thesis submission, advanced procedures/surgeries" }
      ],
      "mdCourses": [
        "Anatomy", "Physiology", "Biochemistry", "Pharmacology", "Pathology",
        "Microbiology", "Forensic Medicine", "Community Medicine (PSM)", "General Medicine",
        "Pediatrics", "Dermatology, Venereology & Leprosy (Skin)", "Psychiatry",
        "Radiodiagnosis (Radio)", "Anaesthesiology", "Pulmonary Medicine (TB & Chest)",
        "Emergency Medicine", "Nuclear Medicine", "Physical Medicine & Rehabilitation (PMR)",
        "Sports Medicine", "Geriatrics", "Immunohematology & Blood Transfusion"
      ],
      "msCourses": [
        "General Surgery", "Orthopaedics", "Ophthalmology (Eye)",
        "Otorhinolaryngology (ENT)", "Obstetrics & Gynaecology"
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for MD/MS in India (2026)",
      "description": "To pursue MD (Doctor of Medicine) or MS (Master of Surgery) in India, candidates must fulfill specific eligibility requirements set by medical authorities and institutions. Admission to these postgraduate medical courses is primarily based on the NEET PG examination, conducted by the National Board of Examinations.",
      "table": [
        { "criteria": "Educational Qualification", "details": "Candidates must have successfully completed their MBBS degree from a recognized medical college approved by the relevant medical regulatory authority." },
        { "criteria": "Internship Requirement", "details": "Applicants must complete a one-year compulsory rotating internship on or before the specified deadline (generally March 31 of the admission year)." },
        { "criteria": "NEET PG Qualification", "details": "Candidates must qualify the NEET PG exam with the required minimum percentile to participate in counselling and seat allotment." },
        { "criteria": "Cut-off – General Category", "details": "50th percentile in NEET PG." },
        { "criteria": "Cut-off – OBC/SC/ST", "details": "40th percentile in NEET PG." },
        { "criteria": "Cut-off – General PwD", "details": "45th percentile in NEET PG." },
        { "criteria": "Medical Council Registration", "details": "Candidates must be registered with the National Medical Commission (NMC) or a State Medical Council." },
        { "criteria": "Nationality", "details": "Indian Citizens, Overseas Citizens of India (OCI), Non-Resident Indians (NRI), and Persons of Indian Origin (PIO) are eligible as per respective quotas and regulations." },
        { "criteria": "Age Limit", "details": "There is no upper age limit for applying to MD/MS courses. Candidates must meet all academic and exam-related requirements." }
      ]
    },

    "documents": {
      "title": "Documents Required for MD/MS in India (2026)",
      "subtitle": "To secure admission in MD (Doctor of Medicine) and MS (Master of Surgery) programs in India, candidates must present a set of essential documents during counselling and admission. These documents are verified by the counselling authority and allotted colleges to confirm eligibility and academic records.",
      "table": [
        { "document": "NEET PG Admit Card", "details": "Issued by National Board of Examinations." },
        { "document": "NEET PG Scorecard/Rank Letter", "details": "Proof of qualifying NEET PG exam." },
        { "document": "MBBS Degree Certificate", "details": "From a recognized medical college." },
        { "document": "MBBS Mark Sheets", "details": "All professional exam mark sheets (1st to final year)." },
        { "document": "Internship Completion Certificate", "details": "Must be completed before the admission deadline." },
        { "document": "Permanent/Provisional Registration Certificate", "details": "Issued by NMC or State Medical Council." },
        { "document": "Class 10 Certificate", "details": "Proof of date of birth." },
        { "document": "Class 12 Certificate", "details": "Academic qualification proof." },
        { "document": "Valid ID Proof", "details": "Aadhaar Card, PAN Card, Passport, etc." },
        { "document": "Category Certificate (if applicable)", "details": "SC/ST/OBC/EWS certificate." },
        { "document": "PwD Certificate (if applicable)", "details": "For physically disabled candidates." },
        { "document": "Domicile Certificate", "details": "Required for state quota counselling." }
      ],
      "quickList": [
        "NEET PG Admit Card",
        "NEET PG Scorecard/Rank Letter",
        "MBBS Degree Certificate",
        "MBBS Mark Sheets",
        "Internship Completion Certificate",
        "Registration Certificate (NMC/State Medical Council)",
        "Class 10 Certificate",
        "Valid ID Proof"
      ]
    },

    "topColleges": {
      "title": "Top Private Colleges for MD/MS in India (2026)",
      "description": "Here is a list of some of the best private medical colleges in India for MD/MS based on infrastructure, clinical exposure, faculty, and reputation.",
      "colleges": [
        { "name": "M.S. Ramaiah Medical College", "location": "Bangalore", "highlights": "Known for hands-on training and practical exposure" },
        { "name": "Bharati Vidyapeeth Medical College", "location": "Pune", "highlights": "Popular deemed university with wide PG specializations" },
        { "name": "Sharda University (School of Medical Sciences & Research)", "location": "Greater Noida", "highlights": "Emerging private college with good facilities" },
        { "name": "Hind Institute of Medical Sciences", "location": "Sitapur", "highlights": "Budget-friendly private option for MD/MS" },
        { "name": "Sri Aurobindo Institute of Medical Sciences", "location": "Indore", "highlights": "High patient flow, strong clinical exposure" },
        { "name": "Chirayu Medical College & Hospital", "location": "Bhopal", "highlights": "Good infrastructure & PG seats" },
        { "name": "RD Gardi Medical College", "location": "Ujjain", "highlights": "Popular for PG courses & practical training" },
        { "name": "Geetanjali Medical College & Hospital", "location": "Udaipur", "highlights": "Top PG branches + strong academics" },
        { "name": "NIMS Medical College (NIMS University)", "location": "Jaipur", "highlights": "Wide PG specializations" },
        { "name": "Pacific Medical College & Hospital", "location": "Udaipur", "highlights": "Good clinical exposure & infrastructure" },
        { "name": "Mata Gujri Memorial Medical College", "location": "Kishanganj", "highlights": "Good academics + PG courses" },
        { "name": "Katihar Medical College", "location": "Katihar", "highlights": "One of the oldest private colleges" }
      ],
      "feeHeaders": ["College Name", "Location", "Highlights"]
    },

    "careerScope": {
      "title": "Scope and Career Opportunities After MD/MS in India",
      "description": "Completing MD/MS in India opens the door to a wide range of career opportunities in the healthcare sector. With the increasing demand for specialized medical professionals and the expansion of healthcare services, MD/MS graduates have excellent career prospects in both the public and private sectors.",
      "paths": [
        {
          "title": "Clinical Practice as a Specialist",
          "description": "MD/MS graduates can work as specialists or consultants in hospitals, clinics, and healthcare institutions. They can also start their own private practice after gaining professional experience and registration with the National Medical Commission."
        },
        {
          "title": "Super-Specialization (DM/MCh)",
          "description": "After completing MD or MS, doctors can pursue further super-specialization through DM (Doctorate of Medicine) or MCh (Master of Chirurgiae), which provide even deeper expertise in specific medical sub-fields like cardiology, neurosurgery, or plastic surgery."
        },
        {
          "title": "Medical Research and Academia",
          "description": "MD/MS graduates can work in medical research institutions, pharmaceutical companies, or pursue a PhD in medical sciences. They can also take up teaching roles in medical colleges and contribute to academic development."
        },
        {
          "title": "Hospital Administration and Public Health",
          "description": "Graduates can move into hospital administration roles, healthcare management, or work in public health sectors under national healthcare programs run by the Ministry of Health and Family Welfare."
        }
      ]
    },

    "advantages": {
      "title": "Advantages of Pursuing MD/MS in India",
      "description": "Pursuing MD/MS in India offers several key advantages for medical graduates who want to build a specialized and successful career in the healthcare field.",
      "points": [
        {
          "title": "Advanced Specialization",
          "description": "MD/MS programs provide in-depth knowledge and expertise in a specific medical or surgical field, enabling doctors to become recognized specialists and handle complex cases."
        },
        {
          "title": "Enhanced Career Opportunities",
          "description": "Specialized doctors are in high demand across hospitals, clinics, and research centers, offering better career growth and higher earning potential compared to general MBBS practitioners."
        },
        {
          "title": "Extensive Clinical and Surgical Training",
          "description": "During the 3-year program, students gain hands-on experience through real patient care, emergency duties, ward rounds, and clinical research, preparing them to handle complex medical situations independently."
        },
        {
          "title": "Pathway to Super-Specialization",
          "description": "Completing MD/MS opens the door to further super-specialization through DM or MCh programs, which are among the most prestigious qualifications in the medical field."
        }
      ]
    },

    "whyIExplain": {
      "title": "Why Choose iExplain Education for Admission in MD/MS in India?",
      "description": "Choosing the right guidance for MD/MS admission in India is very important. iExplain Education stands out as a trusted consultancy due to its student-focused approach, expert guidance, and end-to-end support.",
      "points": [
        {
          "title": "Personalized Career Guidance",
          "description": "iExplain Education follows a student-centric approach, where every student gets guidance based on their profile, rank, budget, and career goals. Unlike many consultancies, they focus on what is best for the student, not just available options."
        },
        {
          "title": "Complete MD/MS Admission Support",
          "description": "They provide end-to-end assistance for MD/MS admission, including NEET PG counselling guidance, college and branch selection, documentation support, and seat allotment assistance, ensuring a smooth and hassle-free admission process."
        },
        {
          "title": "Expert Knowledge & Experience",
          "description": "With strong experience in medical education consulting, iExplain Education provides accurate and updated information about MD/MS colleges, fee structures, cut-offs, and the counselling process."
        },
        {
          "title": "Wide Network & Opportunities",
          "description": "They help students explore MD/MS options in India through private and deemed universities, as well as MBBS and PG abroad, giving students multiple options based on their NEET PG rank."
        },
        {
          "title": "Transparent & Honest Guidance",
          "description": "The organization provides authentic insights and unbiased counselling, avoiding the common issue where consultants push colleges for profit. Students and parents receive accurate information without any hidden charges."
        },
        {
          "title": "One-to-One Support (Online + Offline)",
          "description": "Students can get face-to-face counselling through office visits or phone and online consultations, ensuring continuous support at every step of the admission journey."
        },
        {
          "title": "Additional Services",
          "description": "iExplain Education also offers career counselling, entrance exam guidance, scholarship assistance, and education loan and documentation help."
        }
      ]
    },

    "faqs": {
      "title": "MD/MS in India – Frequently Asked Questions (FAQs)",
      "items": [
        {
          "question": "What is MD and MS in medical education?",
          "answer": "MD (Doctor of Medicine) and MS (Master of Surgery) are postgraduate medical degrees pursued after MBBS for specialization in medical and surgical fields."
        },
        {
          "question": "What is the duration of MD/MS courses in India?",
          "answer": "Both MD and MS courses have a duration of 3 years."
        },
        {
          "question": "What is the eligibility for MD/MS in India?",
          "answer": "Candidates must have an MBBS degree, complete a 1-year internship, and qualify the NEET PG exam conducted by the National Board of Examinations."
        },
        {
          "question": "Is NEET PG mandatory for MD/MS admission?",
          "answer": "Yes, NEET PG is mandatory for admission to MD/MS courses in India."
        },
        {
          "question": "What is the difference between MD and MS?",
          "answer": "MD is a non-surgical specialization (medicine-based), while MS is a surgical specialization focused on operations and surgical procedures."
        },
        {
          "question": "What are the top specializations in MD/MS?",
          "answer": "Popular MD specializations include General Medicine, Radiology, Dermatology, and Pediatrics, while MS includes General Surgery, Orthopedics, ENT, and Gynecology."
        },
        {
          "question": "What documents are required for MD/MS admission?",
          "answer": "Key documents include NEET PG scorecard, MBBS degree, internship completion certificate, registration certificate, valid ID proof, and academic mark sheets."
        },
        {
          "question": "How does MD/MS counselling work?",
          "answer": "Counselling is conducted through centralized processes based on NEET PG rank, managed by authorities like MCC for All India Quota and state authorities for state quota seats."
        },
        {
          "question": "Can I do MD/MS from private colleges?",
          "answer": "Yes, many private and deemed universities offer MD/MS courses with good infrastructure and clinical exposure."
        },
        {
          "question": "What is the career scope after MD/MS?",
          "answer": "After MD/MS, doctors can work as specialists, consultants, or pursue higher studies like DM/MCh, research, or teaching."
        }
      ]
    }
  },
  "btech": {
    "title": "Study B.Tech in India - Complete Guide for Engineering Aspirants",
    "heroImage": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1600",
    "intro": "B.Tech in India (Bachelor of Technology) is one of the most popular and career-oriented undergraduate degree programs for students who aspire to build a strong future in the field of engineering, technology, and innovation. It is a professional course designed to equip students with technical knowledge, analytical thinking, problem-solving skills, and practical exposure required in today's fast-growing industries. In India, B.Tech is offered by a wide range of institutions including IITs, NITs, government colleges, private universities, and deemed universities, making it one of the most accessible and in-demand courses after completing 12th with Science (PCM).\n\nThe duration of B.Tech in India is generally 4 years, divided into 8 semesters, where students study both core engineering subjects and specialization-based subjects. The course structure includes classroom learning, laboratory work, industrial training, live projects, and internships, which help students gain real-world experience and industry readiness. Some of the most popular specializations in B.Tech in India include Computer Science Engineering (CSE), Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronics & Communication Engineering (ECE), Artificial Intelligence, Data Science, and Information Technology (IT).\n\nAdmission to B.Tech in India is mainly based on national and state-level entrance exams such as the JEE Main, JEE Advanced, and various state CET exams, along with private university entrance tests. These exams evaluate students' knowledge in Physics, Chemistry, and Mathematics, and play a crucial role in determining admission to top engineering colleges. Due to high competition, students often prepare rigorously to secure a seat in reputed institutions.\n\nOne of the biggest advantages of pursuing B.Tech in India is the wide range of career opportunities available after graduation. Students can work in IT companies, core engineering sectors, manufacturing industries, research and development organizations, startups, and government sectors. With the rapid growth of technology, fields like Artificial Intelligence, Machine Learning, Cybersecurity, Data Science, and Robotics are creating new and high-paying job opportunities for B.Tech graduates.\n\nAdditionally, students can opt for higher education such as M.Tech, MBA, or MS abroad, or prepare for competitive exams like GATE, UPSC, and other government job exams. Entrepreneurship is also a growing trend, with many engineering graduates starting their own startups.",

    "overview": {
      "title": "B.Tech in India – Overview",
      "table": [
        { "particular": "Course Name", "details": "B.Tech (Bachelor of Technology)" },
        { "particular": "Course Level", "details": "Undergraduate" },
        { "particular": "Duration", "details": "4 Years (8 Semesters)" },
        { "particular": "Eligibility", "details": "10+2 with Physics, Chemistry & Mathematics (PCM)" },
        { "particular": "Minimum Marks", "details": "50–75% (varies by college)" },
        { "particular": "Entrance Exams", "details": "JEE Main, JEE Advanced, State CETs, University Exams" },
        { "particular": "Admission Process", "details": "Entrance Exam + Counselling" },
        { "particular": "Top Specializations", "details": "CSE, Mechanical, Civil, Electrical, ECE, AI, Data Science, IT" },
        { "particular": "Course Structure", "details": "Theory + Practical + Labs + Internships + Projects" },
        { "particular": "Top Recruiters", "details": "TCS, Infosys, Wipro, Google, Microsoft" },
        { "particular": "Career Options", "details": "Engineer, Software Developer, Data Analyst, Researcher, Entrepreneur" }
      ]
    },

    "whatIs": {
      "title": "What is B.Tech?",
      "description": "B.Tech (Bachelor of Technology) is a 4-year undergraduate engineering degree that focuses on technical knowledge, practical skills, and industry-oriented learning. It is designed to prepare students for careers in engineering, technology, and innovation across various sectors.",
      "points": [
        {
          "title": "Engineering Foundation",
          "description": "B.Tech provides a comprehensive foundation in engineering principles, combining theoretical knowledge with practical application. Students learn core subjects in Physics, Chemistry, and Mathematics, along with specialized engineering topics relevant to their chosen branch."
        },
        {
          "title": "Specialization Options",
          "description": "The program offers diverse specializations including Computer Science Engineering (CSE), Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronics & Communication Engineering (ECE), Artificial Intelligence, Data Science, and Information Technology (IT), allowing students to align their education with career goals."
        },
        {
          "title": "Industry Readiness",
          "description": "Through internships, industrial training, live projects, and hands-on laboratory work, B.Tech programs ensure students are industry-ready upon graduation. The curriculum is regularly updated to match current technological trends and market demands."
        }
      ]
    },

    "admissionProcess": {
      "title": "Admission Process and Entrance Exams for Engineering Colleges (B.Tech in India)",
      "description": "The admission process for engineering colleges in India is primarily based on entrance exams, followed by counselling and seat allotment. Students who wish to pursue B.Tech in India must go through a structured process to secure admission in top government or private engineering colleges.",
      "steps": [
        { "step": "1. Eligibility Check", "details": "Must have passed 10+2 with Physics, Chemistry & Mathematics (PCM)" },
        { "step": "2. Entrance Exam Registration", "details": "Register for exams like JEE Main, JEE Advanced, or state-level exams" },
        { "step": "3. Appear for Exam", "details": "Attempt the entrance exam based on preparation" },
        { "step": "4. Result Declaration", "details": "Results are released with All India Rank (AIR)" },
        { "step": "5. Counselling Registration", "details": "Apply for counselling (JoSAA/State/Private)" },
        { "step": "6. Seat Allotment", "details": "Seats are allotted based on rank, preference & availability" },
        { "step": "7. Document Verification", "details": "Submit required documents for validation" },
        { "step": "8. Admission Confirmation", "details": "Pay fees and confirm your seat" }
      ]
    },

    "entranceExams": {
      "title": "Top Entrance Exams for B.Tech in India",
      "description": "For admission into B.Tech in India, students must qualify various national, state, and university-level entrance exams. These exams test candidates on Physics, Chemistry, and Mathematics (PCM) and play a crucial role in securing admission to top engineering colleges.",
      "exams": [
        { "examName": "JEE Main", "level": "National", "conductingBody": "National Testing Agency", "acceptedBy": "NITs, IIITs, Govt & Private Colleges" },
        { "examName": "JEE Advanced", "level": "National", "conductingBody": "IITs", "acceptedBy": "IITs (Top Engineering Colleges)" },
        { "examName": "BITSAT", "level": "University", "conductingBody": "BITS Pilani", "acceptedBy": "BITS Pilani, Goa, Hyderabad" },
        { "examName": "VITEEE", "level": "University", "conductingBody": "VIT", "acceptedBy": "VIT Campuses" },
        { "examName": "SRMJEEE", "level": "University", "conductingBody": "SRM Institute", "acceptedBy": "SRM Campuses" },
        { "examName": "State CET Exams", "level": "State", "conductingBody": "State Authorities", "acceptedBy": "State Government Colleges" },
        { "examName": "COMEDK UGET", "level": "National/Private", "conductingBody": "COMEDK", "acceptedBy": "Private Colleges in Karnataka" },
        { "examName": "WBJEE", "level": "State", "conductingBody": "West Bengal Board", "acceptedBy": "Colleges in West Bengal" },
        { "examName": "MHT CET", "level": "State", "conductingBody": "Maharashtra Govt", "acceptedBy": "Colleges in Maharashtra" },
        { "examName": "KCET", "level": "State", "conductingBody": "Karnataka Govt", "acceptedBy": "Colleges in Karnataka" }
      ]
    },

    "specializations": {
      "title": "Top Best B.Tech Specializations in India",
      "description": "Choosing the right specialization in B.Tech in India is very important as it directly impacts your career growth, job opportunities, and salary potential. Here are the top and most in-demand B.Tech specializations.",
      "branches": [
        {
          "specialization": "Computer Science Engineering (CSE)",
          "description": "Focus on programming, software development, AI, data science",
          "careerScope": "High demand in IT, startups, MNCs (Google, Microsoft)"
        },
        {
          "specialization": "Artificial Intelligence & Machine Learning (AI/ML)",
          "description": "Advanced technologies like automation, robotics, data analysis",
          "careerScope": "Fastest-growing field with high salary packages"
        },
        {
          "specialization": "Data Science",
          "description": "Data analysis, big data, statistics",
          "careerScope": "Jobs in analytics, finance, tech companies"
        },
        {
          "specialization": "Information Technology (IT)",
          "description": "Software, networking, databases",
          "careerScope": "IT companies, system management roles"
        },
        {
          "specialization": "Electronics & Communication Engineering (ECE)",
          "description": "Communication systems, electronics, circuits",
          "careerScope": "Telecom, semiconductor, IT sectors"
        },
        {
          "specialization": "Mechanical Engineering",
          "description": "Machines, manufacturing, design",
          "careerScope": "Core industries, automobile, production"
        },
        {
          "specialization": "Civil Engineering",
          "description": "Construction, infrastructure, design",
          "careerScope": "Government projects, real estate, construction"
        },
        {
          "specialization": "Electrical Engineering",
          "description": "Power systems, electrical machines",
          "careerScope": "Energy sector, PSUs, core companies"
        },
        {
          "specialization": "Cyber Security",
          "description": "Network security, ethical hacking",
          "careerScope": "High demand in IT security & defense sectors"
        },
        {
          "specialization": "Robotics Engineering",
          "description": "Automation, robotics systems",
          "careerScope": "Emerging field in manufacturing & AI"
        }
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for B.Tech Engineering Course After 12th",
      "description": "To pursue B.Tech in India after 12th, students must fulfill specific eligibility criteria set by engineering colleges and entrance exam authorities. The most important requirement for B.Tech admission in India is that candidates must have successfully completed their Class 12 (10+2) education from a recognized board with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects. These subjects form the foundation of engineering, and a strong understanding of them is essential for pursuing any specialization in B.Tech.",
      "keyPoints": [
        {
          "title": "Academic Qualification",
          "description": "Candidates must have successfully completed their Class 12 (10+2) education from a recognized board with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects."
        },
        {
          "title": "Minimum Marks Requirement",
          "description": "For most colleges offering B.Tech in India, students are required to secure a minimum of 50% to 75% aggregate marks in PCM subjects, although this percentage may vary depending on whether the college is a government institution, private university, or a top-tier institute like IITs and NITs."
        },
        {
          "title": "Entrance Exam Qualification",
          "description": "Qualifying an entrance exam is a crucial part of the B.Tech admission process in India. Students must appear for exams such as JEE Main, JEE Advanced, state-level CET exams, or university-specific entrance tests."
        },
        {
          "title": "Age Requirement",
          "description": "Generally, candidates must be at least 17 years old at the time of admission, although there is usually no strict upper age limit for most colleges."
        },
        {
          "title": "Category Relaxation",
          "description": "Students belonging to different categories such as General, OBC, SC, ST, or PwD may have relaxation in minimum marks as per government norms."
        },
        {
          "title": "Lateral Entry Option",
          "description": "Those who have completed a Diploma in Engineering from a recognized institute are also eligible for lateral entry admission in B.Tech in India, which allows them to directly enter the second year (3rd semester) of the course."
        }
      ]
    },

    "whyCollegeMatters": {
      "title": "Why Choosing the Right B.Tech College Matters",
      "description": "Choosing the right college for B.Tech in India is one of the most important decisions for any engineering aspirant, as it directly impacts their career growth, skill development, and future opportunities. While many students focus only on getting admission, the quality of the college plays a crucial role in shaping their overall learning experience and professional success.",
      "reasons": [
        {
          "title": "Strong Academic Foundation",
          "description": "A good B.Tech college provides strong academic foundations, experienced faculty, and updated curriculum that aligns with industry requirements. Top institutions ensure that students not only learn theoretical concepts but also gain practical knowledge through labs, projects, and internships."
        },
        {
          "title": "Excellent Placement Opportunities",
          "description": "Reputed engineering colleges have strong connections with top recruiters like TCS, Infosys, Google, and Microsoft, offering students better chances of securing high-paying jobs. Colleges with a good placement record also provide training in soft skills, aptitude, and interview preparation."
        },
        {
          "title": "Modern Infrastructure",
          "description": "Infrastructure and facilities matter a lot when selecting the right college for B.Tech in India. Modern labs, libraries, research centers, and digital resources enhance the learning experience and encourage innovation."
        },
        {
          "title": "Network and Exposure",
          "description": "Choosing the right college can influence your network and exposure. Studying in a reputed institution allows students to connect with talented peers, experienced professors, and industry experts, which can be beneficial for future career opportunities, internships, and collaborations."
        }
      ]
    },

    "selectionFactors": {
      "title": "Factors to Consider Before Selecting a B.Tech College",
      "description": "Choosing the right college for B.Tech in India is a crucial decision that can shape your entire career in engineering. With so many options available, students must carefully evaluate multiple factors before finalizing a college. Making an informed choice ensures better education, skill development, and career opportunities.",
      "factors": [
        {
          "title": "College Accreditation and Approval",
          "description": "Always check whether the college is approved by relevant authorities like AICTE and recognized by the government. This ensures that your degree is valid and accepted for jobs and higher studies. The ranking and reputation of the college also play a significant role."
        },
        {
          "title": "Faculty and Teaching Quality",
          "description": "Experienced and qualified professors can make a huge difference in understanding concepts and gaining practical knowledge. A good college should also have an updated curriculum that matches current industry trends, especially in fields like AI, Data Science, and emerging technologies."
        },
        {
          "title": "Infrastructure and Facilities",
          "description": "Modern laboratories, well-equipped libraries, smart classrooms, and access to research facilities enhance the overall learning experience. Colleges that provide opportunities for internships, industrial training, and live projects help students gain real-world exposure."
        },
        {
          "title": "Placement Records",
          "description": "Look at the average salary packages, top recruiters, and placement percentage. Colleges with strong industry connections and placement support can significantly improve your chances of getting a good job after graduation."
        },
        {
          "title": "Location and Campus Environment",
          "description": "A college located in or near major cities may offer better exposure, internships, and networking opportunities. At the same time, a safe and supportive campus environment contributes to overall personal and academic growth."
        }
      ]
    },

    "topGovtColleges": {
      "title": "Top Government B.Tech Colleges in India (2026)",
      "description": "Here is a carefully curated list of the best government engineering colleges in India based on NIRF rankings, reputation, placements, and academic excellence.",
      "colleges": [
        { "name": "IIT Madras", "location": "Chennai", "entranceExam": "JEE Advanced" },
        { "name": "IIT Delhi", "location": "New Delhi", "entranceExam": "JEE Advanced" },
        { "name": "IIT Bombay", "location": "Mumbai", "entranceExam": "JEE Advanced" },
        { "name": "IIT Kanpur", "location": "Kanpur", "entranceExam": "JEE Advanced" },
        { "name": "IIT Kharagpur", "location": "Kharagpur", "entranceExam": "JEE Advanced" },
        { "name": "IIT Roorkee", "location": "Roorkee", "entranceExam": "JEE Advanced" },
        { "name": "IIT Guwahati", "location": "Guwahati", "entranceExam": "JEE Advanced" },
        { "name": "IIT Hyderabad", "location": "Hyderabad", "entranceExam": "JEE Advanced" },
        { "name": "NIT Tiruchirappalli", "location": "Tamil Nadu", "entranceExam": "JEE Main" },
        { "name": "IIT BHU", "location": "Varanasi", "entranceExam": "JEE Advanced" }
      ],
      "feeHeaders": ["College Name", "Location", "Entrance Exam"]
    },

    "topPrivateColleges": {
      "title": "Top Private Engineering Colleges in India (2026)",
      "description": "Here is a list of the top private engineering colleges for B.Tech in India, based on reputation, placements, infrastructure, and academic excellence.",
      "colleges": [
        { "name": "BITS Pilani", "location": "Pilani", "entranceExam": "BITSAT" },
        { "name": "VIT Vellore", "location": "Vellore", "entranceExam": "VITEEE" },
        { "name": "SRM Institute of Science and Technology", "location": "Chennai", "entranceExam": "SRMJEEE" },
        { "name": "Amrita Vishwa Vidyapeetham", "location": "Coimbatore", "entranceExam": "Amrita Entrance" },
        { "name": "Thapar Institute of Engineering and Technology", "location": "Patiala", "entranceExam": "JEE Main" },
        { "name": "Manipal Institute of Technology", "location": "Manipal", "entranceExam": "MET" },
        { "name": "Shiv Nadar University", "location": "Greater Noida", "entranceExam": "SNUSAT/JEE" },
        { "name": "Ashoka University", "location": "Sonipat", "entranceExam": "University Test" },
        { "name": "Chandigarh University", "location": "Chandigarh", "entranceExam": "CUCET" },
        { "name": "KIIT University", "location": "Bhubaneswar", "entranceExam": "KIITEE" }
      ],
      "feeHeaders": ["College Name", "Location", "Entrance Exam"]
    },

    "careerScope": {
      "title": "Career Opportunities After B.Tech in India",
      "description": "One of the biggest advantages of pursuing B.Tech in India is the wide range of career opportunities available after graduation. Students can work in IT companies, core engineering sectors, manufacturing industries, research and development organizations, startups, and government sectors.",
      "paths": [
        {
          "title": "IT and Software Industry",
          "description": "B.Tech graduates, especially from CSE, IT, and related branches, can work as software developers, data analysts, system engineers, and IT consultants in companies like TCS, Infosys, Wipro, Google, Microsoft, and Amazon."
        },
        {
          "title": "Core Engineering Sectors",
          "description": "Graduates from Mechanical, Civil, Electrical, and ECE branches can work in manufacturing industries, construction companies, power sectors, automobile industries, and PSUs (Public Sector Undertakings)."
        },
        {
          "title": "Higher Education",
          "description": "Students can opt for higher education such as M.Tech for specialization, MBA for management roles, or MS abroad for international exposure and research opportunities."
        },
        {
          "title": "Competitive Exams and Government Jobs",
          "description": "B.Tech graduates can prepare for competitive exams like GATE, UPSC, SSC, and other government job exams for positions in railways, defense, civil services, and other public sectors."
        },
        {
          "title": "Research and Development",
          "description": "Students interested in innovation can pursue careers in R&D departments of tech companies, ISRO, DRDO, and academic research institutions."
        },
        {
          "title": "Entrepreneurship and Startups",
          "description": "Entrepreneurship is a growing trend, with many engineering graduates starting their own tech startups, consulting firms, or innovation-driven businesses."
        }
      ]
    },

    "advantages": {
      "title": "Advantages of Pursuing B.Tech in India",
      "description": "Pursuing B.Tech in India offers several key advantages for students who want to build a specialized and successful career in engineering and technology.",
      "points": [
        {
          "title": "Wide Range of Career Opportunities",
          "description": "B.Tech opens doors to diverse career paths in IT, core engineering, research, government sectors, and entrepreneurship, with excellent growth potential."
        },
        {
          "title": "Industry-Relevant Skills",
          "description": "The curriculum combines theoretical knowledge with practical training through labs, projects, internships, and industrial exposure, making graduates industry-ready."
        },
        {
          "title": "High Earning Potential",
          "description": "Engineering graduates, especially from top colleges and in-demand specializations like CSE, AI/ML, and Data Science, command competitive salaries ranging from ₹3-10 LPA and higher."
        },
        {
          "title": "Gateway to Higher Education",
          "description": "B.Tech serves as a strong foundation for pursuing advanced degrees like M.Tech, MBA, MS abroad, or PhD, opening doors to specialized roles and research careers."
        },
        {
          "title": "Innovation and Problem-Solving",
          "description": "Engineering education develops critical thinking, analytical abilities, and problem-solving skills that are valuable across all industries and life situations."
        }
      ]
    },

    "conclusion": {
      "title": "Conclusion – B.Tech in India",
      "description": "In conclusion, pursuing B.Tech in India is one of the most promising career choices for students aiming to build a strong future in engineering, technology, and innovation. From understanding the eligibility criteria, entrance exams, admission process, specializations, and top colleges (government & private), every step plays a crucial role in shaping a successful engineering journey.\n\nChoosing the right specialization and college is equally important, as it directly impacts your skills, knowledge, placement opportunities, and long-term career growth. With the availability of top institutions through exams like JEE Main and other entrance tests, students have multiple pathways to secure admission in reputed colleges. Proper planning, preparation, and awareness of the admission process can significantly improve the chances of getting into a good institution.\n\nAdditionally, focusing on practical learning, internships, and skill development during the course is essential to stay competitive in today's fast-evolving job market. Fields like Computer Science, AI, Data Science, and Core Engineering branches offer excellent career opportunities in India and globally.\n\nOverall, B.Tech in India is not just a degree but a gateway to a wide range of career options in IT, core industries, research, and entrepreneurship. With the right guidance, dedication, and smart decision-making, students can achieve great success and build a rewarding career in the engineering field."
    },

    "faqs": {
      "title": "B.Tech in India – Frequently Asked Questions (FAQs)",
      "items": [
        {
          "question": "What is B.Tech in India?",
          "answer": "B.Tech (Bachelor of Technology) is a 4-year undergraduate engineering degree that focuses on technical knowledge, practical skills, and industry-orientated learning in India."
        },
        {
          "question": "What is the eligibility for B.Tech after 12th?",
          "answer": "Students must pass 10+2 with Physics, Chemistry, and Mathematics (PCM) and meet the minimum marks required by colleges. They also need to qualify entrance exams like JEE Main."
        },
        {
          "question": "What are the top entrance exams for B.Tech in India?",
          "answer": "Major exams include JEE Main, JEE Advanced, BITSAT, VITEEE, and state-level CET exams."
        },
        {
          "question": "What is the duration of a B.Tech course?",
          "answer": "The duration of B.Tech in India is 4 years, divided into 8 semesters."
        },
        {
          "question": "Which are the best specializations in B.Tech?",
          "answer": "Popular specializations include Computer Science Engineering (CSE), AI & ML, Data Science, Mechanical, Civil, Electrical, and Electronics & Communication Engineering."
        },
        {
          "question": "What is the admission process for B.Tech in India?",
          "answer": "Admission is based on entrance exams, counselling, seat allotment, document verification, and fee payment."
        },
        {
          "question": "What are the top government colleges for B.Tech?",
          "answer": "Top government colleges include IITs, NITs, and IIITs, which are known for high-quality education and excellent placements."
        },
        {
          "question": "What are the top private engineering colleges in India?",
          "answer": "Top private colleges include BITS Pilani, VIT Vellore, and SRM Institute of Science and Technology."
        },
        {
          "question": "What is the average salary after B.Tech?",
          "answer": "The average salary ranges from ₹3–10 LPA, but it can go much higher depending on skills, specialization, and college."
        },
        {
          "question": "Can I do B.Tech without JEE?",
          "answer": "Yes, many private universities offer admission through their own entrance exams or direct admission based on merit."
        }
      ]
    }
  },
  "mba": {
    "title": "Study MBA in India - Complete Guide for Management Aspirants",
    "heroImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",

    "intro": "MBA in India (Master of Business Administration) is one of the most popular postgraduate programs for students who want to build a successful career in management, business, and leadership roles. This professional degree is designed to develop analytical thinking, decision-making skills, leadership qualities, and business knowledge, making it a top choice among graduates from various backgrounds such as commerce, engineering, science, and arts.\n\nThe duration of an MBA in India is typically 2 years, divided into 4 semesters, although some institutes also offer 1-year executive MBA programs for working professionals. The course covers a wide range of subjects including Marketing, Finance, Human Resource Management, Operations, Business Analytics, International Business, and Entrepreneurship. Students also gain practical exposure through case studies, internships, industry projects, and presentations, which help them understand real-world business challenges.\n\nAdmission to MBA programs in India is mainly based on entrance exams such as CAT, XAT, MAT, CMAT, and GMAT. These exams test candidates on aptitude, logical reasoning, quantitative ability, and verbal skills. After clearing the exam, students usually go through further selection rounds like Group Discussion (GD), Personal Interview (PI), and Written Ability Test (WAT).\n\nOne of the biggest advantages of pursuing an MBA in India is the wide range of career opportunities available after graduation. Students can work in sectors like banking, consulting, marketing, IT, finance, healthcare, and startups. Top recruiters include multinational companies, consulting firms, and leading corporations offering attractive salary packages.\n\nMBA in India is not just a degree but a gateway to high-paying jobs, leadership roles, and global career opportunities. With the right college, specialization, and skills, students can achieve significant career growth and long-term success in the business world.",

    "overview": {
      "title": "MBA in India – Overview",
      "table": [
        { "particular": "Course Name", "details": "MBA (Master of Business Administration)" },
        { "particular": "Course Level", "details": "Postgraduate" },
        { "particular": "Duration", "details": "2 Years (4 Semesters)" },
        { "particular": "Eligibility", "details": "Bachelor’s Degree in any stream" },
        { "particular": "Minimum Marks", "details": "50% (45% for reserved categories)" },
        { "particular": "Entrance Exams", "details": "CAT, XAT, MAT, CMAT, GMAT, SNAP, NMAT" },
        { "particular": "Admission Process", "details": "Entrance Exam + GD + PI + WAT" },
        { "particular": "Top Specializations", "details": "Finance, Marketing, HR, Business Analytics, Operations, IB" },
        { "particular": "Course Structure", "details": "Case Studies + Internships + Projects + Presentations" },
        { "particular": "Top Recruiters", "details": "Deloitte, Amazon, Google, Accenture, McKinsey" },
        { "particular": "Career Options", "details": "Manager, Consultant, Analyst, Entrepreneur" }
      ]
    },

    "whyMBA": {
      "title": "Why Pursue MBA in India?",
      "description": "Pursuing an MBA in India has become one of the most popular choices among students and working professionals who want to build a strong career in management, leadership, and business development. India offers a perfect combination of quality education, affordable fees, and excellent career opportunities.\n\nWith the presence of top institutes like IIMs, XLRI, and FMS, students get access to world-class education and exposure. The growing Indian economy also creates numerous job opportunities across sectors such as IT, finance, consulting, and startups.",
      "points": [
        {
          "title": "Top Institutes",
          "description": "India is home to world-class management institutes that offer high-quality education and global exposure."
        },
        {
          "title": "Cost Effective",
          "description": "Compared to studying abroad, MBA in India is much more affordable while still offering excellent career opportunities."
        },
        {
          "title": "Wide Specializations",
          "description": "Students can choose from a wide range of specializations based on their career goals."
        },
        {
          "title": "Growing Economy",
          "description": "India’s rapidly growing economy creates strong demand for skilled management professionals."
        }
      ]
    },

    "types": {
      "title": "Types of MBA in India (2026)",
      "description": "MBA programs in India are offered in multiple formats to suit different needs of students and professionals. Depending on career goals, time availability, and experience level, candidates can choose from various types of MBA programs.",
      "points": [
        {
          "title": "Full-Time MBA",
          "description": "A 2-year regular program ideal for fresh graduates looking for comprehensive management education."
        },
        {
          "title": "Executive MBA",
          "description": "Designed for working professionals with experience, usually completed in 1 year."
        },
        {
          "title": "Part-Time MBA",
          "description": "Flexible option for working individuals who want to study alongside their job."
        },
        {
          "title": "Online MBA",
          "description": "Provides flexibility to learn remotely with digital platforms and recorded lectures."
        }
      ]
    },

    "topPrivateColleges": {
      "title": "Top MBA Private Colleges in India (2026)",
      "description": "Private MBA colleges in India offer excellent infrastructure, global exposure, and strong placement records.",
      "colleges": [
        { "name": "XLRI Jamshedpur", "location": "Jamshedpur", "entranceExam": "XAT" },
        { "name": "ISB Hyderabad", "location": "Hyderabad", "entranceExam": "GMAT" },
        { "name": "MDI Gurgaon", "location": "Gurgaon", "entranceExam": "CAT" }
      ],
      "feeHeaders": ["College Name", "Location", "Entrance Exam"]
    },

    "specializations": {
      "title": "Top MBA Specializations in India (2026)",
      "description": "Selecting the right specialization is crucial for career growth, as it determines job roles, industry exposure, and salary potential.",
      "branches": [
        {
          "specialization": "Finance",
          "description": "Focuses on investment, banking, and financial management.",
          "careerScope": "High demand in banking and financial services."
        },
        {
          "specialization": "Marketing",
          "description": "Covers branding, sales, and digital marketing.",
          "careerScope": "Roles in FMCG, advertising, and corporate marketing."
        },
        {
          "specialization": "Human Resource Management",
          "description": "Focuses on recruitment, employee management, and HR strategy.",
          "careerScope": "HR leadership roles in organizations."
        },
        {
          "specialization": "Business Analytics",
          "description": "Focuses on data-driven decision making.",
          "careerScope": "High-demand roles in analytics and tech firms."
        },
        {
          "specialization": "Operations",
          "description": "Deals with supply chain and logistics.",
          "careerScope": "Roles in manufacturing and e-commerce."
        }
      ]
    },

    "eligibility": {
      "title": "Eligibility Criteria for MBA Programs in India (2026)",
      "description": "To apply for MBA programs in India, candidates must meet specific eligibility requirements related to education and entrance exams.",
      "keyPoints": [
        {
          "title": "Academic Qualification",
          "description": "Candidates must have a bachelor’s degree in any discipline from a recognized university."
        },
        {
          "title": "Minimum Marks",
          "description": "Most institutes require at least 50% marks in graduation."
        },
        {
          "title": "Entrance Exams",
          "description": "Students must qualify exams like CAT, XAT, MAT, CMAT, etc."
        },
        {
          "title": "Final Year Students",
          "description": "Students in the final year of graduation can also apply."
        }
      ]
    },

    "placements": {
      "title": "MBA in India Placements (2026)",
      "description": "MBA colleges in India offer excellent placement opportunities with top companies visiting campuses every year.\n\nTop B-schools provide high salary packages and international job offers, especially in consulting, finance, and tech sectors.",
      "points": [
        {
          "title": "Top Recruiters",
          "description": "Companies like Deloitte, Amazon, Google, Accenture, EY, and McKinsey hire MBA graduates."
        },
        {
          "title": "High Salary Packages",
          "description": "Top institutes offer attractive salary packages with strong career growth opportunities."
        }
      ]
    },

    "whoShouldDo": {
      "title": "Who Should Do an MBA in India? (2026)",
      "description": "MBA is suitable for a wide range of individuals who want to advance their careers or move into leadership roles.",
      "points": [
        {
          "title": "Fresh Graduates",
          "description": "Those looking for better job opportunities and career growth."
        },
        {
          "title": "Working Professionals",
          "description": "Individuals aiming for promotions or career switch."
        },
        {
          "title": "Entrepreneurs",
          "description": "Those who want to start and manage their own business."
        }
      ]
    },

    "careerScope": {
      "title": "Career Scope After an MBA in India (2026)",
      "description": "MBA graduates have diverse career opportunities across industries such as IT, finance, consulting, and marketing.",
      "paths": [
        {
          "title": "Corporate Jobs",
          "description": "Roles such as Business Analyst, Marketing Manager, and Financial Analyst."
        },
        {
          "title": "Emerging Fields",
          "description": "Opportunities in business analytics, fintech, and AI-driven management roles."
        },
        {
          "title": "Entrepreneurship",
          "description": "Starting new ventures or managing family businesses."
        }
      ]
    },

    "whyChooseUs": {
      "title": "Why Choose iExplain Education for MBA in India?",
      "description": "iExplain Education offers complete guidance for MBA admissions including counselling, college selection, and exam preparation.",
      "points": [
        {
          "title": "Personalized Counselling",
          "description": "Expert advice based on student goals."
        },
        {
          "title": "College Selection",
          "description": "Guidance to choose the best-fit college."
        },
        {
          "title": "Admission Support",
          "description": "End-to-end assistance in application and admission."
        },
        {
          "title": "Exam Guidance",
          "description": "Support for MBA entrance exams."
        }
      ]
    },

    "conclusion": {
      "title": "MBA in India",
      "description": "MBA in India is a powerful career option that opens doors to leadership roles, high-paying jobs, and global opportunities. With proper planning, the right specialization, and a good college, students can achieve long-term success in the business world."
    },

    "faqs": {
      "title": "FAQs – MBA in India (2026)",
      "items": [
        {
          "question": "What is the duration of an MBA in India?",
          "answer": "The duration is typically 2 years."
        },
        {
          "question": "What is the eligibility for MBA?",
          "answer": "A bachelor’s degree with minimum 50% marks."
        },
        {
          "question": "Which exams are required?",
          "answer": "CAT, XAT, MAT, CMAT, GMAT, etc."
        },
        {
          "question": "What is the salary after MBA?",
          "answer": "It ranges from ₹5 LPA to ₹25+ LPA depending on college and skills."
        },
        {
          "question": "Is MBA worth it?",
          "answer": "Yes, it offers strong career growth and leadership opportunities."
        }
      ]
    }
  },
  "bba": {
    "title": "BBA in India",
    "intro": "BBA in India (Bachelor of Business Administration) is a highly popular 3-year undergraduate management degree designed for students who want to build a strong foundation in business studies, management principles, leadership skills, and corporate knowledge. It is one of the most preferred courses after 12th in India for students from any stream (Arts, Commerce, or Science) who are interested in pursuing a career in the business, finance, marketing, human resources, and corporate sectors.\n\nThe demand for BBA in India has increased rapidly due to the growing need for skilled business professionals in startups, multinational companies (MNCs), banking, and service industries. This course helps students understand how real businesses operate and prepares them for future leadership and managerial roles.\n\nThe curriculum of BBA in India includes important subjects such as Principles of Management, Business Economics, Financial Accounting, Marketing Management, Human Resource Management, Organizational Behavior, Business Law, Operations Management, and Entrepreneurship Development. Along with classroom learning, students also gain practical exposure through case studies, internships, industry projects, presentations, and workshops, which help them develop real-world business skills.\n\nOne of the biggest advantages of pursuing BBA in India is that it builds a strong academic and professional base for higher studies like MBA (Master of Business Administration). Many students choose the BBA → MBA pathway to achieve high-level managerial positions and better career opportunities in top companies.\n\nDuring the course of BBA in India, students develop essential skills such as communication skills, leadership skills, teamwork, decision-making ability, analytical thinking, problem-solving skills, and business understanding, which are highly valued in today's competitive job market.\n\nOverall, BBA in India is an excellent choice for students who want early exposure to the corporate world, strong career opportunities in management fields, and a solid foundation for higher education like MBA. It opens doors to careers in banking, finance, marketing, consulting, entrepreneurship, and corporate management, making it one of the most career-oriented undergraduate programs in India.",

    "overview": {
      "title": "BBA in India – Overview",
      "table": [
        { "aspect": "Course Name", "details": "Bachelor of Business Administration (BBA)" },
        { "aspect": "Level", "details": "Undergraduate (UG)" },
        { "aspect": "Duration", "details": "3 Years" },
        { "aspect": "Eligibility", "details": "10+2 (any stream) from a recognized board with minimum 45–50% marks (varies by college)" },
        { "aspect": "Admission Process", "details": "Merit-based or Entrance Exam (CUET, SET, IPU CET, NPAT, etc.)" },
        { "aspect": "Popular Specializations", "details": "Marketing, Finance, HR, International Business, Business Analytics, Entrepreneurship" },
        { "aspect": "Core Subjects", "details": "Principles of Management, Business Economics, Financial Accounting, Marketing Management, HRM, Business Law" },
        { "aspect": "Top BBA Colleges in India", "details": "Shaheed Sukhdev College of Business Studies (DU), NMIMS Mumbai, Christ University, Symbiosis, Loyola College" },
        { "aspect": "Career Options", "details": "Business Analyst, Marketing Executive, HR Executive, Sales Manager, Entrepreneur" },
        { "aspect": "Higher Study Option", "details": "MBA (Most preferred), PGDM, Professional Certifications" }
      ]
    },

    "whyPursue": {
      "title": "Why Pursue BBA in India? (2026)",
      "description": "Pursuing BBA in India (Bachelor of Business Administration) is a smart choice for students who want to build a strong foundation in business management, leadership, and corporate skills right after 12th. India is one of the fastest-growing economies, and there is a rising demand for skilled management professionals in sectors like finance, marketing, HR, consulting, startups, and banking, making BBA a highly valuable undergraduate degree.\n\nOne of the main reasons to pursue BBA in India is that it provides early exposure to the corporate world and helps students understand how real businesses operate. The course combines both theoretical knowledge and practical learning through case studies, internships, live projects, presentations, and industry training, which makes students job-ready from an early stage.\n\nAnother major advantage of BBA in India is its flexibility in career options. After completing BBA, students can either enter the job market in roles like business executive, marketing associate, HR executive, sales manager, or business analyst, or pursue higher studies like MBA (Master of Business Administration) for better career growth and higher salary packages. Many students prefer the BBA → MBA pathway for long-term success in corporate leadership roles.\n\nBBA also helps in developing important professional skills such as communication skills, leadership qualities, decision-making ability, problem-solving skills, teamwork, and analytical thinking, which are highly valued in today's competitive job market. These skills not only help in getting better job opportunities but also prepare students for entrepreneurship and startup ventures.\n\nIn addition, studying BBA in India is more affordable compared to many international business programs, while still offering quality education in reputed colleges and universities. With strong industry connections, internships, and placement opportunities, students get good exposure and career support from top companies."
    },

    "topColleges": {
      "title": "Top BBA Colleges in India (2026)",
      "description": "BBA in India is offered by many reputed government and private universities that provide quality education, strong placements, industry exposure, and good ROI (Return on Investment). Choosing the right college is very important for building a successful career in business management, finance, marketing, HR, and entrepreneurship.",
      "colleges": [
        { "name": "Shaheed Sukhdev College of Business Studies (SSCBS)", "location": "Delhi", "admissionProcess": "CUET" },
        { "name": "NMIMS – Anil Surendra Modi School of Commerce", "location": "Mumbai", "admissionProcess": "NPAT" },
        { "name": "Christ University", "location": "Bangalore", "admissionProcess": "Entrance Test (CUET/Christ Exam)" },
        { "name": "Symbiosis Centre for Management Studies (SCMS)", "location": "Pune", "admissionProcess": "SET Exam" },
        { "name": "St. Xavier's College", "location": "Mumbai", "admissionProcess": "Merit/Entrance" },
        { "name": "Loyola College", "location": "Chennai", "admissionProcess": "Merit/Entrance" },
        { "name": "KIIT School of Management", "location": "Bhubaneswar", "admissionProcess": "KIITEE" },
        { "name": "Bennett University", "location": "Greater Noida", "admissionProcess": "Entrance Exam" },
        { "name": "FLAME University", "location": "Pune", "admissionProcess": "Entrance Test" }
      ]
    },

    "specializations": {
      "title": "BBA Specializations in India (2026)",
      "description": "BBA in India offers multiple specializations that help students build expertise in specific areas of business management, finance, marketing, human resources, and analytics. Choosing the right specialization is very important because it directly impacts your career opportunities, job roles, and salary growth after graduation or MBA.",
      "table": [
        {
          "specialization": "Marketing Management",
          "description": "Focuses on advertising, branding, digital marketing, and sales strategies",
          "careerOpportunities": "Marketing Executive, Brand Manager, Digital Marketing Specialist"
        },
        {
          "specialization": "Finance Management",
          "description": "Deals with banking, investment, financial planning, and accounting",
          "careerOpportunities": "Financial Analyst, Investment Banker, Accountant"
        },
        {
          "specialization": "Human Resource Management (HRM)",
          "description": "Focuses on recruitment, employee management, and workplace policies",
          "careerOpportunities": "HR Executive, Talent Acquisition Specialist"
        },
        {
          "specialization": "Business Analytics",
          "description": "Uses data and analytics for business decision-making",
          "careerOpportunities": "Data Analyst, Business Analyst"
        },
        {
          "specialization": "International Business",
          "description": "Focuses on global trade, export-import, and international markets",
          "careerOpportunities": "Export Manager, International Business Executive"
        },
        {
          "specialization": "Operations Management",
          "description": "Focuses on supply chain, logistics, and production management",
          "careerOpportunities": "Operations Executive, Supply Chain Analyst"
        }
      ]
    },

    "careerScope": {
      "title": "Career Scope After BBA in India (2026)",
      "description": "The career scope after completing a BBA in India (Bachelor of Business Administration) is wide and promising, as it opens doors to multiple opportunities in the corporate sector, banking, finance, marketing, human resources, consulting, and startups. BBA is a professional undergraduate degree that builds a strong foundation in business management, leadership, communication, and analytical skills, which are highly valued by employers in today's competitive job market.\n\nAfter completing BBA in India, students can directly enter the job market in entry-level managerial and executive roles such as Business Development Executive, Marketing Executive, Sales Manager, HR Executive, Operations Executive, and Financial Analyst. These roles are offered in top industries including IT companies, FMCG, banking, insurance, e-commerce, consulting firms, and multinational companies (MNCs).\n\nOne of the biggest advantages of BBA is that it provides a strong base for higher education like MBA (Master of Business Administration), which significantly improves career growth and salary prospects. Many students choose the BBA → MBA pathway to achieve high-level positions such as Marketing Manager, Product Manager, Investment Banker, Business Consultant, and Operations Manager in top companies.\n\nIn addition to job opportunities, BBA in India also opens doors for entrepreneurship and startup ventures. Students gain knowledge in business planning, marketing strategies, financial management, and organisational behaviour, which helps them start and manage their own business successfully.\n\nWith the rise of digital transformation and growing industries in India, new career opportunities are emerging in fields like digital marketing, business analytics, data analysis, supply chain management, and fintech, making BBA graduates highly in demand."
    },

    "whyIExplain": {
      "title": "Why Choose iExplain Education for BBA in India? (2026)",
      "description": "Choosing the right guidance partner plays a very important role in building a successful career after 12th, especially for students planning to pursue BBA in India. iExplain Education is a trusted education consultancy that provides complete and structured admission support to students who want to enter the field of business management, corporate studies, and entrepreneurship through top BBA colleges in India. It focuses on helping students make the right academic decisions based on their interest, budget, academic background, and long-term career goals.",
      "points": [
        {
          "title": "Personalized Career Counselling",
          "description": "iExplain Education provides one-to-one counselling sessions where experts understand the student's academic performance, interests, and career goals to suggest the most suitable BBA colleges in India and specialization options."
        },
        {
          "title": "Best College Selection Guidance",
          "description": "It helps students choose from top government and private universities for BBA in India, ensuring they get the right balance of quality education, affordability, reputation, and placement opportunities."
        },
        {
          "title": "BBA Specialization Guidance",
          "description": "Students receive detailed guidance in selecting the right specialization such as Marketing, Finance, Human Resource Management, Business Analytics, International Business, and Entrepreneurship, based on future career scope."
        },
        {
          "title": "Complete Admission Support",
          "description": "From filling application forms to preparing documents and tracking admission status, iExplain Education provides step-by-step assistance throughout the BBA admission process in India."
        },
        {
          "title": "Entrance Exam Assistance",
          "description": "It also helps students prepare for important exams like CUET, NPAT, SET, IPMAT, and other university-level entrance tests, which are required for admission in top BBA colleges."
        },
        {
          "title": "Scholarship & Education Loan Support",
          "description": "iExplain Education guides students about available scholarships, fee waivers, and education loan options, making quality education more affordable and accessible."
        },
        {
          "title": "Career Growth Guidance",
          "description": "Experts provide complete information about career scope after BBA in India, including job roles, salary packages, industry demand, and future growth opportunities."
        },
        {
          "title": "Mentorship & Career Planning",
          "description": "Continuous mentorship is provided to help students plan their academic journey from BBA to MBA or direct corporate jobs, ensuring long-term career success."
        }
      ]
    },

    "conclusion": {
      "title": "Conclusion – BBA in India",
      "description": "BBA in India is one of the most popular and career-orientated undergraduate programs for students who want to build a strong foundation in business management, leadership, and corporate skills after 12th. With a wide range of specializations such as Marketing, Finance, HR, Business Analytics, and Entrepreneurship, the course offers excellent flexibility and multiple career opportunities in the corporate world. It not only helps students gain theoretical knowledge but also provides practical exposure through internships, projects, case studies, and industry training, making them job-ready from an early stage.\n\nOverall, pursuing BBA in India is a smart choice for students who aim for a successful career in banking, finance, consulting, marketing, startups, and multinational companies (MNCs). It also serves as a strong pathway for higher education, like MBA, which further enhances career growth and salary potential. With the right college selection, specialization choice, and proper guidance, students can achieve long-term success and stability in the competitive business environment. BBA truly acts as a stepping stone toward a bright future in the field of management and business administration."
    },

    "faqs": {
      "title": "FAQs – BBA in India (2026)",
      "items": [
        {
          "question": "What is BBA in India?",
          "answer": "BBA (Bachelor of Business Administration) is a 3-year undergraduate management course that focuses on business studies, leadership, finance, marketing, HR, and entrepreneurship skills."
        },
        {
          "question": "What is the eligibility for BBA in India?",
          "answer": "Students must have completed 10+2 (any stream) from a recognized board with at least 45–50% marks (varies by college)."
        },
        {
          "question": "What is the duration of BBA in India?",
          "answer": "The duration of BBA in India is 3 years, divided into 6 semesters."
        },
        {
          "question": "What are the career options after BBA in India?",
          "answer": "After BBA, students can work as Business Executive, Marketing Executive, HR Executive, Sales Manager, Financial Analyst, or pursue MBA for higher career growth."
        },
        {
          "question": "Which are the best specializations in BBA?",
          "answer": "Popular BBA specializations include Marketing, Finance, HR, Business Analytics, International Business, and Entrepreneurship."
        },
        {
          "question": "Is BBA a good career option in India?",
          "answer": "Yes, BBA is a good career option as it provides strong business knowledge, job opportunities in MNCs, and a pathway to MBA and corporate leadership roles."
        }
      ]
    }
  },
};

export const MEGA_MENU_DATA = {
  "STUDY ABROAD": [
    { name: "USA", link: "/study-in-usa", code: "US" },
    { name: "UK", link: "/study-in-uk", code: "GB" },
    { name: "Canada", link: "/study-in-canada", code: "CA" },
    { name: "Australia", link: "/study-in-australia", code: "AU" },
    { name: "New Zealand", link: "/study-in-new-zealand", code: "NZ" },
    { name: "UAE", link: "/study-in-uae", code: "AE" },
    { name: "Ireland", link: "/study-in-ireland", code: "IE" },
    { name: "Europe", link: "/study-in-europe", code: "EU" }
  ],
  "MBBS ABROAD": [
    { name: "Russia", link: "/mbbs-in-russia", code: "RU" },
    { name: "Georgia", link: "/mbbs-in-georgia", code: "GE" },
    { name: "Kazakhstan", link: "/mbbs-in-kazakhstan", code: "KZ" },
    { name: "Kyrgyzstan", link: "/mbbs-in-kyrgyzstan", code: "KG" },
    { name: "Uzbekistan", link: "/mbbs-in-uzbekistan", code: "UZ" },
    { name: "Philippines", link: "/mbbs-in-philippines", code: "PH" },
    { name: "Bangladesh", link: "/mbbs-in-bangladesh", code: "BD" },
    { name: "Nepal", link: "/mbbs-in-nepal", code: "NP" },
    { name: "China", link: "/mbbs-in-china", code: "CN" },
    { name: "Egypt", link: "/mbbs-in-egypt", code: "EG" },
    { name: "Serbia", link: "/mbbs-in-serbia", code: "RS" }
  ],
  "STUDY IN INDIA": [
    { name: "MBBS", link: "/study-india/mbbs", icon: "fa-solid fa-user-doctor" },
    { name: "MD/MS", link: "/study-india/md-ms", icon: "fa-solid fa-stethoscope" },
    { name: "B.Tech", link: "/study-india/btech", icon: "fa-solid fa-microchip" },
    { name: "MBA", link: "/study-india/mba", icon: "fa-solid fa-briefcase" },
    { name: "BBA", link: "/study-india/bba", icon: "fa-solid fa-chart-line" },
    { name: "PGDM", link: "/study-india/pgdm", icon: "fa-solid fa-graduation-cap" }
  ],
  "ENTRANCE EXAMS": [
    { name: "NEET UG", link: "/exams/neet-ug", icon: "fa-solid fa-file-medical" },
    { name: "JEE Main", link: "/exams/jee-main", icon: "fa-solid fa-calculator" },
    { name: "CAT", link: "/exams/cat", icon: "fa-solid fa-chart-pie" },
    { name: "CLAT", link: "/exams/clat", icon: "fa-solid fa-scale-balanced" },
    { name: "CUET", link: "/exams/cuet", icon: "fa-solid fa-pen-to-square" }
  ]
};

export const STUDENT_SERVICES_DATA = [
  {
    id: "career-counselling",
    title: "Career Counselling",
    icon: "fa-solid fa-compass",
    desc: "Unbiased, personalized guidance to help students choose the right career path.",
    fullDesc: "It is often difficult for students to select a career path, given the increasing number of options. iExplain experts help students make the right career choices by matching their interests, skill set, qualifications, and personality. We provide unbiased guidance and create personalized career plans that remove doubt, confusion, and apprehension.",
    benefits: [
      "Personalized career roadmap based on profile and goals",
      "Objective and unbiased counselling support",
      "Clear direction that reduces confusion and decision stress"
    ],
    process: ["Profile assessment", "Career mapping session", "Personalized action plan"]
  },
  {
    id: "application-process-assistance",
    title: "Application Process Assistance",
    icon: "fa-solid fa-file-signature",
    desc: "Complete admission support from applications to final university follow-ups.",
    fullDesc: "Our counsellors are fully trained to help with all admission requirements, including application process, resume/CV preparation, Statement of Purpose (SOP), and portfolio preparation. We also do regular follow-ups with universities to ensure timely decisions, giving students enough time for visa applications and travel planning.",
    benefits: [
      "End-to-end application document support",
      "SOP, CV, and portfolio guidance from experts",
      "University follow-ups for timely admission outcomes"
    ],
    process: ["Document planning", "Application submission", "University follow-ups"]
  },
  {
    id: "scholarship-financial-aid-guidance",
    title: "Scholarship & Financial Aid Guidance",
    icon: "fa-solid fa-hand-holding-dollar",
    desc: "Step-by-step help to maximize scholarships, bursaries, and fee waivers.",
    fullDesc: "iExplain understands the value of money and works to help students get financial aid such as tuition fee bursaries, scholarships, and application fee waivers. These are awarded to international students based on academic merit and financial need at the discretion of each institution's Scholarship Committee. iExplain has set up unique resources for step-by-step scholarship application guidance and highlights programs with internship and industrial placement options.",
    benefits: [
      "Guidance on merit and need-based funding options",
      "Support for scholarship and fee-waiver applications",
      "Visibility into programs with internship and placement options"
    ],
    process: ["Funding eligibility review", "Scholarship application support", "Program-wise aid optimization"]
  },
  {
    id: "education-loan-assistance",
    title: "Education Loan Assistance",
    icon: "fa-solid fa-building-columns",
    desc: "Assistance with selecting lenders and preparing education loan documentation.",
    fullDesc: "Most public and private banks provide education loans for studying abroad. The sanctioned loan can cover university fees, books, equipment, travel expenses, and computer purchases. iExplain helps students connect to the right bank or financial institution and guides them through documentation and requirements.",
    benefits: [
      "Support in identifying suitable loan providers",
      "Guidance for required loan documents and processes",
      "Clarity on eligible education-related expense coverage"
    ],
    process: ["Loan profile assessment", "Lender shortlisting", "Documentation and filing guidance"]
  },
  {
    id: "test-preparation-coaching",
    title: "Test Preparation Coaching",
    icon: "fa-solid fa-chalkboard-user",
    desc: "Affordable online coaching for global admission tests.",
    fullDesc: "iExplain provides online coaching at affordable prices for GRE, GMAT, IELTS, TOEFL, PTE, SAT, and ACT. Our preparation approach focuses on concepts, strategy, and performance tracking so students can improve confidence and scores.",
    benefits: [
      "Coaching for GRE, GMAT, IELTS, TOEFL, PTE, SAT, and ACT",
      "Affordable online classes with exam-focused practice",
      "Score-improvement strategy with expert mentoring"
    ],
    process: ["Diagnostic evaluation", "Structured prep plan", "Mock tests and score tracking"]
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    icon: "fa-solid fa-passport",
    desc: "Comprehensive visa support to improve successful outcomes.",
    fullDesc: "Our team provides comprehensive visa support, guiding students through each step of the visa process and ensuring all documentation is in order to increase the likelihood of a successful outcome.",
    benefits: [
      "Complete support across the visa journey",
      "Document checklist and application readiness reviews",
      "Reduced risk of avoidable errors and delays"
    ],
    process: ["Visa eligibility planning", "Documentation checks", "Application and interview readiness"]
  },
  {
    id: "free-counselling-sessions",
    title: "Free Counselling Sessions",
    icon: "fa-solid fa-comments",
    desc: "Free in-person and virtual counselling for students and parents.",
    fullDesc: "We offer free counselling sessions at our head office in Noida with in-person discussions for students and parents. Virtual support is also available through phone calls and online meetings.",
    benefits: [
      "No-cost guidance for students and families",
      "In-person counselling at Noida head office",
      "Virtual support through calls and online meetings"
    ],
    process: ["Session booking", "One-on-one counselling", "Follow-up action plan"]
  }
];

export const BLOG_POSTS: Blog[] = [
  {
    id: "1",
    title: "Top 5 Countries for MBBS Abroad in 2025",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "Jan 15, 2025",
    category: "MBBS Abroad",
    author: "Admin",
    content: `
      <p>Choosing the right destination for your MBBS degree is a crucial decision that shapes your future medical career. In 2025, several countries have emerged as top choices for Indian students due to their affordable fees, high-quality education, and NMC recognition. Here is a curated list of the top 5 countries to consider.</p>
      
      <h3>1. Russia</h3>
      <p>Russia remains the undisputed leader for medical education abroad. With universities like Kazan Federal University and First Moscow State Medical University, it offers world-class infrastructure at a fraction of the cost of Indian private colleges. The medium of instruction is English, and degrees are recognized globally by WHO and NMC.</p>
      <blockquote>"Russia offers a blend of theoretical knowledge and extensive clinical exposure, making it a prime choice for aspiring doctors."</blockquote>

      <h3>2. Georgia</h3>
      <p>Georgia has rapidly climbed the ranks to become a favorite. Known for its safety and European standard of living, colleges like Tbilisi State Medical University provide education that is 100% in English. The climate is pleasant, and the community is welcoming to Indian students.</p>

      <h3>3. Kazakhstan</h3>
      <p>For students looking for the most budget-friendly options without compromising on quality, Kazakhstan is the answer. Universities here have a 5-year course duration, similar to India, which is a significant advantage.</p>

      <h3>4. Philippines</h3>
      <p>The Philippines follows the American curriculum, which is excellent for students aiming to crack the USMLE. The disease patterns are similar to India, providing relevant clinical experience.</p>

      <h3>5. Bangladesh</h3>
      <p>With a culture, food, and climate almost identical to India, Bangladesh offers a home away from home. The syllabus is also very similar to the NMC curriculum, leading to high FMGE passing rates.</p>

      <h3>Conclusion</h3>
      <p>Each of these countries has unique advantages. Your choice should depend on your budget, career goals, and preference for climate and culture. Contact iExplain Education today for a personalized counseling session to help you decide.</p>
    `,
    readTime: "5 min"
  },
  {
    id: "2",
    title: "How to Crack NEET 2025: Expert Tips",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800",
    date: "Jan 10, 2025",
    category: "Entrance Exams",
    author: "Dr. Sharma",
    content: `
      <p>The National Eligibility cum Entrance Test (NEET) is the gateway to medical colleges in India. With competition increasing every year, cracking NEET 2025 requires not just hard work, but smart work. Here are expert tips to guide your preparation.</p>

      <h3>1. Master the NCERT</h3>
      <p>The NCERT textbooks are your bible. 80-90% of the biology questions and a significant portion of chemistry and physics questions come directly from NCERT. Ensure you read every line, summary, and diagram.</p>

      <h3>2. Strategic Time Management</h3>
      <p>Create a timetable that allocates time for all three subjects. Don't neglect Physics; it is often the rank decider. Practice solving questions within a time limit to improve your speed and accuracy.</p>

      <h3>3. Mock Tests and Analysis</h3>
      <p>Taking mock tests is crucial, but analyzing them is even more important. Identify your weak areas after every test and work on them. Understand why you got a question wrong – was it a conceptual error or a silly mistake?</p>

      <h3>4. Health is Wealth</h3>
      <p>A burnt-out mind cannot retain information. Ensure you get 7 hours of sleep, eat healthy, and take short breaks. A calm mind performs significantly better in exams.</p>

      <p>Remember, consistency is key. Stay focused, stay positive, and you will achieve your dream of becoming a doctor.</p>
    `,
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Study in UK Without IELTS",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    date: "Jan 05, 2025",
    category: "Study Abroad",
    author: "Admin",
    content: `
      <p>Dreaming of studying in the United Kingdom but worried about the IELTS exam? Good news! Many prestigious UK universities accept students without IELTS scores based on their Class 12th English marks or other criteria. Let's explore how.</p>

      <h3>Alternative Criteria</h3>
      <p>Universities often waive the IELTS requirement if you have scored over 70-75% in English in your Class 12th board exams (CBSE/ICSE). Some universities may also conduct their own internal English test or a video interview to assess your proficiency.</p>

      <h3>Top Universities Accepting MOI</h3>
      <p>Medium of Instruction (MOI) letters from your previous institution stating that your education was in English can also work. Some universities accepting alternatives include:</p>
      <ul>
        <li>University of Bristol</li>
        <li>University of Warwick</li>
        <li>Sheffield Hallam University</li>
        <li>University of Greenwich</li>
        <li>Swansea University</li>
      </ul>

      <h3>Benefits of Studying in UK</h3>
      <p>The UK offers 1-year Master's programs, which saves you time and money. Additionally, the 2-year Post-Study Work (PSW) visa allows you to stay and work in the UK after graduation, providing excellent career exposure.</p>

      <p>Don't let language tests be a barrier. Contact iExplain Education to assess your profile and apply to the best UK universities today.</p>
    `,
    readTime: "6 min"
  }
];

export const EXAMS_DETAILED = {
  "neet-ug": { title: "NEET UG", heroImage: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1200", intro: "National Eligibility cum Entrance Test...", syllabus: {} }
};

export const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Counseling",
    desc: "Our expert counseling services are designed to guide students who want to pursue MBBS in India, MBBS Abroad, and Study Abroad programs. We provide personalized career guidance based on your academic profile, budget, and future goals.",
    icon: "fa-solid fa-comments"
  },
  {
    step: "02",
    title: "Choose Your Destination & Course",
    desc: "Selecting the right destination and course is the foundation of a successful career. At iExplain Education, we help you explore the best countries and programs based on your academic background, career goals, and budget.",
    icon: "fa-solid fa-earth-americas"
  },
  {
    step: "03",
    title: "University Selection",
    desc: "Selecting the right university is one of the most important decisions in a student’s academic journey. At iExplain Education, we carefully analyze your academic background, career goals, preferred location, and budget to recommend the most suitable universities.",
    icon: "fa-solid fa-building-columns"
  },
  {
    step: "04",
    title: "Admission – Application & Offer Letter",
    desc: "Our team provides complete assistance throughout the admission process. We help students accurately fill out application forms, prepare and verify required documents, and submit applications to the selected universities within deadlines.",
    icon: "fa-solid fa-file-signature"
  },
  {
    step: "05",
    title: "Visa – Visa Filing & Interview",
    desc: "We provide complete assistance with the visa process to ensure a smooth transition to your chosen destination. Our team guides you through accurate visa filing, document preparation, financial documentation, and appointment scheduling.",
    icon: "fa-solid fa-passport"
  },
  {
    step: "06",
    title: "Departure",
    desc: "We ensure your journey begins smoothly with complete departure assistance. Our team helps you with flight booking guidance to secure the best routes and affordable fares according to your travel schedule. We also assist in arranging foreign exchange (Forex), international SIM cards, and essential travel guidance.",
    icon: "fa-solid fa-plane-departure"
  }
];

export const INDIA_COURSES = [
  { id: "mbbs", title: "MBBS", desc: "Bachelor of Medicine & Bachelor of Surgery", icon: "fa-solid fa-user-doctor" },
  { id: "mdms", title: "MD / MS", desc: "Postgraduate Medical Specializations", icon: "fa-solid fa-stethoscope" },
  { id: "engineering", title: "Engineering", desc: "B.Tech in CS, IT, ECE & more", icon: "fa-solid fa-microchip" },
  { id: "management", title: "Management", desc: "MBA, BBA, PGDM Programs", icon: "fa-solid fa-chart-pie" }
];


export const STATS = [
  { label: "Year of Experience", value: "10+" },
  { label: "Expert Counselors", value: "40+" },
  { label: "Partnered Institutions", value: "50+" },
  { label: "Students Counseled", value: "10,000+" }
];

export const POPULAR_COLLEGES: College[] = [
  // --- MBBS ABROAD ---
  // Russia
  // Russia
  { name: "Kazan Federal University", country: "Russia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Kazan-Federal-University.webp" },
  { name: "Bashkir State Medical University", country: "Russia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Bashkir-State-Medical-University.webp" },
  { name: "Orenburg State Medical University", country: "Russia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Orenburg-State-Medical-University.webp" },
  { name: "Crimea Federal University", country: "Russia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Crimea-Federal-University.webp" },

  // Georgia
  { name: "Tbilisi State Medical University", country: "Georgia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Tbilisi-State-Medical-University.webp" },
  { name: "Batumi Shota Rustaveli State University", country: "Georgia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Batumi-Shota-Rustaveli-State-University.webp" },
  { name: "David Tvildiani Medical University", country: "Georgia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/David-Tvildiani-Medical-University.webp" },
  { name: "European University Georgia", country: "Georgia", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/European-University-Georgia.webp" },

  // Bangladesh
  { name: "Dhaka National Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Dhaka-National-Medical-College.webp" },
  { name: "Bangladesh Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Bangladesh-Medical-College.webp" },
  { name: "Jahurul Islam Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Jahurul-Islam-Medical-College.webp" },
  { name: "Holy Family Red Crescent Medical College", country: "Bangladesh", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Holy-Family-Red-Crescent-Medical-College.webp" },

  // Kazakhstan
  { name: "Al-Farabi Kazakh National University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Al-Farabi-Kazakh-National-University.webp" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Kazakh-National-Medical-University.webp" },
  { name: "Astana Medical University", country: "Kazakhstan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Astana-Medical-University.webp" },
  { name: "South Kazakhstan Medical Academy", country: "Kazakhstan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/South-Kazakhstan-Medical-Academy.webp" },

  // Uzbekistan
  { name: "Tashkent State Medical University", country: "Uzbekistan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Tashkent-Medical-Academy.webp" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Samarkand-State-Medical-University.webp" },
  { name: "Bukhara State Medical Institute", country: "Uzbekistan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Bukhara-State-Medical-Institute.webp" },
  { name: "Andijan State Medical Institute", country: "Uzbekistan", category: "MBBS Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Andijan-State-Medical-Institute.webp" },

  // USA
  { name: "Northeastern University", country: "USA", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Northeastern-University.webp" },
  { name: "Arizona State University", country: "USA", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Arizona-State-University.webp" },
  { name: "New York University", country: "USA", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/New-York-University.webp" },
  { name: "University of Texas at Austin", country: "USA", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Texas-at-Austin.webp" },

  // UK
  { name: "University of Leeds", country: "UK", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Parkinson-Building-University-of-Leeds.webp" },
  { name: "University of Manchester", country: "UK", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Manchester.webp" },
  { name: "University of Birmingham", country: "UK", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Birmingham.webp" },
  { name: "University of Warwick", country: "UK", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Warwick.webp" },

  // Australia
  { name: "University of Melbourne", country: "Australia", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Melbourne.webp" },
  { name: "Monash University", country: "Australia", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Monash-University.webp" },
  { name: "University of Sydney", country: "Australia", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Sydney.webp" },
  { name: "Deakin University", country: "Australia", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Deakin-Univeresity.webp" },

  // Canada
  { name: "University of Toronto", country: "Canada", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University_of_Toronto.webp" },
  { name: "University of British Columbia", country: "Canada", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-British-Columbia.webp" },
  { name: "McGill University", country: "Canada", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/McGill-University.webp" },
  { name: "York University", country: "Canada", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/York-University.webp" },

  // Ireland
  { name: "Trinity College Dublin", country: "Ireland", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Trinity-College-Dublin.webp" },
  { name: "University College Dublin", country: "Ireland", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-College-Dublin.webp" },
  { name: "Dublin City University", country: "Ireland", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Dublin-City-University.webp" },
  { name: "University of Limerick", country: "Ireland", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Limerick.webp" },

  // New Zealand
  { name: "University of Auckland", country: "New Zealand", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Auckland.webp" },
  { name: "University of Otago", country: "New Zealand", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/University-of-Otago.webp" },
  { name: "Victoria University of Wellington", country: "New Zealand", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Victoria-University-of-Wellington.webp" },
  { name: "Auckland University of Technology", country: "New Zealand", category: "Study Abroad", image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Auckland-University-of-Technology.webp" },
];

export const COUNTRY_ICONS: Record<string, string> = {
  "Russia": "RU",
  "USA": "US",
  "UK": "GB",
  "Australia": "AU",
  "Canada": "CA",
  "Germany": "DE",
  "Ireland": "IE",
  "New Zealand": "NZ",
  "Dubai": "AE",
  "Uzbekistan": "UZ",
  "Kazakhstan": "KZ",
  "Philippines": "PH",
  "Georgia": "GE",
  "Kyrgyzstan": "KG",
  "Egypt": "EG",
  "Bangladesh": "BD"
};

export const KNOW_YOUR_DESTINATIONS = [
  {
    name: "Russia",
    path: "/mbbs-in-russia",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Georgia",
    path: "/mbbs-in-georgia",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "USA",
    path: "/study-in-usa",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "UK",
    path: "/study-in-uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Canada",
    path: "/study-in-canada",
    image: "https://plus.unsplash.com/premium_photo-1673241100156-2e04fca1a4af?q=80&w=870&auto=format&fit=crop"
  },
  {
    name: "Australia",
    path: "/study-in-australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Uzbekistan",
    path: "/mbbs-in-uzbekistan",
    image: "https://images.unsplash.com/photo-1673446840855-1c82bafdb67d?q=80&w=863&auto=format&fit=crop"
  },
  {
    name: "Dubai",
    path: "/study-in-dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600"
  }
];

export const DESTINATIONS = [
  { id: 1, name: "USA", description: "Top universities and diverse culture.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", popularCourses: ["Engineering", "Business"] },
  { id: 2, name: "UK", description: "Historic institutions and quality education.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600", popularCourses: ["Law", "Medicine"] },
  { id: 3, name: "Canada", description: "Welcoming environment and post-study work.", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600", popularCourses: ["IT", "Management"] },
  { id: 4, name: "Australia", description: "High quality of life and education.", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600", popularCourses: ["Nursing", "Engineering"] }
];

export const TESTIMONIALS = [
  {
    name: "Aditi Sharma",
    univ: "Kazan Federal University",
    text: "iExplain Education helped me choose the right university for my MBBS. The counseling was very detailed and they guided me through the entire admission process.",
    avatar: "https://ui-avatars.com/api/?name=Aditi+Sharma&background=random"
  },
  {
    name: "Rahul Verma",
    univ: "Northeastern University",
    text: "The team at iExplain was incredibly supportive. They helped me with my visa application and even gave me pre-departure briefing which was very useful.",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=random"
  },
  {
    name: "Sneha Gupta",
    univ: "University of Leeds",
    text: "I was confused about which country to choose for my masters. iExplain helped me compare different options and I'm very happy with my decision to study in UK.",
    avatar: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=random"
  }
];
