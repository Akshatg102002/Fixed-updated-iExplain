import { MBBSIndiaCollegeDetailData } from './types';

const buildMBBSIndiaStateData = (state: string, region: string): MBBSIndiaCollegeDetailData => ({
  title: `MBBS in ${state}`,
  coursetype: 'MBBS (UG Medical Program)',
  heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  heroImageMobile: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  intro: {
    text: `${state} is one of the important destinations for students planning to pursue MBBS in India. Medical colleges in ${state} offer quality academics, practical hospital exposure, and strong internship pathways. With guidance from iExplain Education, students can shortlist suitable colleges, understand state counselling norms, and complete admission formalities smoothly.`
  },
  quickOverview: {
    'Program': 'MBBS',
    'Location': `${state}, ${region}`,
    'Duration': '4.5 Years + 1 Year Internship',
    'Eligibility': 'NEET Qualified + 10+2 PCB',
    'Admission Mode': 'State/All India Counselling',
    'Typical College Type': 'Government & Private Medical Colleges',
    'Internship': 'Compulsory Rotatory Internship',
    'Degree Awarded': 'MBBS'
  },
  benefits: {
    intro: `Pursuing MBBS in ${state} gives students access to recognized colleges, structured curriculum, and clinical exposure through affiliated teaching hospitals.`,
    items: [
      { heading: 'Recognized Medical Colleges', details: `${state} has colleges recognized by NMC with standardized MBBS curriculum.` },
      { heading: 'Clinical Exposure', details: 'Students get practical training through OPD/IPD postings and internship in teaching hospitals.' },
      { heading: 'Career-Ready Training', details: 'The MBBS pathway prepares students for NEXT/PG exams and future specialization.' },
      { heading: 'Guided Admission Support', details: 'iExplain Education helps with counselling choice filling, documentation, and reporting process.' }
    ]
  },
  syllabus: {
    headers: ['Phase', 'Duration', 'Key Subjects'],
    table: [
      { Phase: 'Pre-Clinical', Duration: '1 Year', 'Key Subjects': 'Anatomy, Physiology, Biochemistry' },
      { Phase: 'Para-Clinical', Duration: '1.5 Years', 'Key Subjects': 'Pathology, Pharmacology, Microbiology, Forensic Medicine' },
      { Phase: 'Clinical', Duration: '2 Years', 'Key Subjects': 'Medicine, Surgery, Pediatrics, OBG, Orthopedics, ENT, Ophthalmology' },
      { Phase: 'Internship', Duration: '1 Year', 'Key Subjects': 'Rotatory clinical training in major departments' }
    ]
  },
  fees: {
    note: `MBBS fees in ${state} vary by quota and college type. Final fee must be verified from official counselling and college notifications for the current session.`,
    sections: [
      {
        title: 'Indicative Fee Range',
        headers: ['College Type', 'Annual Tuition (Approx.)', 'Remarks'],
        table: [
          { 'College Type': 'Government Medical Colleges', 'Annual Tuition (Approx.)': '₹30,000 – ₹2,00,000', 'Remarks': 'Lower fee; highly competitive seats' },
          { 'College Type': 'Private Medical Colleges', 'Annual Tuition (Approx.)': '₹6,00,000 – ₹22,00,000', 'Remarks': 'Varies by management/state quota' }
        ]
      }
    ]
  },
  duration: {
    headers: ['Program Component', 'Duration'],
    table: [
      { 'Program Component': 'Academic Study', Duration: '4.5 Years' },
      { 'Program Component': 'Compulsory Internship', Duration: '1 Year' },
      { 'Program Component': 'Total MBBS Duration', Duration: '5.5 Years' }
    ]
  },
  scholarshipIntro: `Scholarship availability in ${state} depends on college policies and state/central schemes. Eligible students can apply for merit and category-based assistance where applicable.`,
  scholarships: [
    { title: 'Government Scholarship Schemes', details: 'Applicable candidates can explore central/state scholarship portals as per eligibility.' },
    { title: 'College-level Concessions', details: 'Some institutions may offer fee concessions or support options to eligible students.' }
  ],
  eligibility: {
    headers: ['Criteria', 'Details'],
    table: [
      { Criteria: 'Academic Qualification', Details: '10+2 with Physics, Chemistry, Biology and English from recognized board.' },
      { Criteria: 'Minimum Marks', Details: 'As per NMC and counselling authority norms for relevant category.' },
      { Criteria: 'NEET Qualification', Details: 'Valid NEET score in the admission year is mandatory.' },
      { Criteria: 'Age Requirement', Details: 'Minimum age criteria as prescribed by NMC/admission authority.' }
    ]
  },
  documents: [
    { document: 'NEET Score Card', details: 'Valid score card for current admission year.' },
    { document: '10th & 12th Mark Sheets', details: 'Academic certificates for eligibility verification.' },
    { document: 'ID & Address Proof', details: 'Aadhaar/Passport and other valid identity documents.' },
    { document: 'Caste/Category Certificate (if applicable)', details: 'Required for category-based reservation claims.' },
    { document: 'Domicile Certificate (if applicable)', details: 'Needed where state quota rules require domicile proof.' }
  ],
  studentSupport: `Students in ${state} usually receive academic mentoring, clinical training support, and internship guidance through college departments and teaching hospitals.`,
  hostelFacilities: `Most colleges provide separate hostels for boys and girls with mess, security, study areas, and basic recreational facilities (subject to seat availability).`,
  studentLife: `MBBS life in ${state} includes intensive academics, clinical postings, peer learning, cultural events, and hands-on patient interaction that builds professional confidence.`,
  recognition: `Medical colleges listed for admission are generally regulated under NMC norms. Students should always verify recognition status from official authorities before admission.`,
  whyChooseUsIntro: 'iExplain Education provides end-to-end support for MBBS India admissions with personalized counselling and transparent guidance.',
  whyChooseUs: [
    'State-wise college shortlisting based on NEET score and budget.',
    'Counselling strategy support for choice filling and seat allotment.',
    'Documentation review and deadline tracking.',
    'Admission-to-reporting support for a smooth onboarding.'
  ],
  conclusion: `MBBS in ${state} can be a strong option for students looking for quality medical education within India. With the right counselling and documentation support, the admission process becomes more structured and stress-free.`,
  faqs: [
    {
      question: `Can I get MBBS admission in ${state} without NEET?`,
      answer: 'No. NEET qualification is mandatory for MBBS admission in India.'
    },
    {
      question: `How can iExplain Education help for MBBS in ${state}?`,
      answer: 'iExplain supports college selection, counselling strategy, documentation, and admission execution.'
    }
  ]
});

export const MBBS_IN_INDIA_DETAILS: Record<string, MBBSIndiaCollegeDetailData> = {
  'uttar-pradesh': buildMBBSIndiaStateData('Uttar Pradesh', 'North India'),
  haryana: buildMBBSIndiaStateData('Haryana', 'North India'),
  delhi: buildMBBSIndiaStateData('Delhi', 'North India'),
  uttarakhand: buildMBBSIndiaStateData('Uttarakhand', 'North India'),
  'himachal-pradesh': buildMBBSIndiaStateData('Himachal Pradesh', 'North India'),
  rajasthan: buildMBBSIndiaStateData('Rajasthan', 'Central & West India'),
  maharashtra: buildMBBSIndiaStateData('Maharashtra', 'Central & West India'),
  'madhya-pradesh': buildMBBSIndiaStateData('Madhya Pradesh', 'Central & West India'),
  bihar: buildMBBSIndiaStateData('Bihar', 'East & South India'),
  karnataka: buildMBBSIndiaStateData('Karnataka', 'East & South India')
};
