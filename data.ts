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
