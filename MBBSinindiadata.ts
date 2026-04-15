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
    Program: 'MBBS',
    Location: `${state}, ${region}`,
    Duration: '4.5 Years + 1 Year Internship',
    Eligibility: 'NEET Qualified + 10+2 PCB',
    'Admission Mode': 'State/All India Counselling',
    'Typical College Type': 'Government & Private Medical Colleges',
    Internship: 'Compulsory Rotatory Internship',
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
  SyllabusIntro: `The MBBS syllabus in ${state} follows NMC standards and combines basic sciences, para-clinical learning, and clinical rotations.`,
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
    sections: [
      {
        title: 'Indicative Fee Range',
        headers: ['College Type', 'Annual Tuition (Approx.)', 'Remarks'],
        table: [
          { 'College Type': 'Government Medical Colleges', 'Annual Tuition (Approx.)': '₹30,000 – ₹2,00,000', Remarks: 'Lower fee; highly competitive seats' },
          { 'College Type': 'Private Medical Colleges', 'Annual Tuition (Approx.)': '₹6,00,000 – ₹22,00,000', Remarks: 'Varies by management/state quota' }
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
  hostelFacilities: 'Most colleges provide separate hostels for boys and girls with mess, security, study areas, and basic recreational facilities (subject to seat availability).',
  studentLife: `MBBS life in ${state} includes intensive academics, clinical postings, peer learning, cultural events, and hands-on patient interaction that builds professional confidence.`,
  recognition: 'Medical colleges listed for admission are generally regulated under NMC norms. Students should always verify recognition status from official authorities before admission.',
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

const uttarPradeshMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Uttar Pradesh',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/up-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/up-medical-hero-mobile.jpg',
  intro: {
    text: 'MBBS in Uttar Pradesh is one of the most popular choices among medical aspirants in India who want to become successful doctors through quality and affordable medical education. Uttar Pradesh has rapidly developed into a major hub for medical studies, offering a large number of government and private medical colleges with modern infrastructure, advanced laboratories, and well-equipped teaching hospitals. This makes it a preferred destination for students seeking MBBS admission in Uttar Pradesh as well as a strong foundation for a medical career in India.\n\nPursuing MBBS in Uttar Pradesh for students provides excellent clinical exposure because students get hands-on training in high-patient-volume hospitals. This real-time experience helps them develop strong practical skills along with theoretical knowledge. Most medical colleges in the state are approved by the National Medical Commission (NMC), ensuring standardized and quality education aligned with national medical guidelines.\n\nStudents who choose MBBS in Uttar Pradesh benefit from a wide range of options, including highly reputed government medical colleges with low fees and private institutions with modern facilities. Admission is strictly based on NEET-UG scores, making it a transparent and merit-based process for all students across India. Along with Uttar Pradesh, MBBS in India is considered one of the most competitive and respected medical education systems globally. India offers world-class medical training, experienced faculty, and diverse clinical exposure due to its large and varied patient population.'
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
    Level: 'Undergraduate Medical Degree',
    Duration: '5.5 Years (4.5 Years Academic + 1 Year Internship)',
    'Admission Process': 'NEET-UG Based Counselling',
    Eligibility: '10+2 with PCB (Physics, Chemistry, Biology) + NEET Qualification',
    'Entrance Exam': 'NEET-UG (Mandatory)',
    'Conducting Authority': 'DGME Uttar Pradesh / MCC (for some quotas)',
    'Top College Types': 'Government Medical Colleges & Private Medical Colleges',
    Internship: '1 Year Compulsory Rotatory Internship',
    'Career Options': 'Doctor, Surgeon, Specialist, Higher Studies (MD/MS), Government Jobs',
    Scope: 'High demand in India and abroad healthcare sector'
  },
  benefits: {
    intro: 'Choosing MBBS in Uttar Pradesh (2026) is a smart and strategic decision for medical aspirants. Here are the key benefits:',
    items: [
      {
        heading: 'Large Number of Medical Colleges & Seats',
        details: 'Uttar Pradesh has one of the highest numbers of medical colleges in India, increasing chances of admission.'
      },
      {
        heading: 'Affordable Government Colleges',
        details: 'Government medical colleges offer low tuition fees, making it a budget-friendly option.'
      },
      {
        heading: 'Top-Ranked Institutions',
        details: 'Prestigious colleges like King George’s Medical University and IMS BHU provide world-class education.'
      },
      {
        heading: 'High Patient Flow',
        details: 'Attached hospitals provide massive patient volume for real-time practical training.'
      },
      {
        heading: 'Transparent Admission',
        details: 'Admission is strictly based on NEET-UG scores through a fair counselling process.'
      }
    ]
  },
  SyllabusIntro: 'The MBBS in Uttar Pradesh syllabus is designed as per the guidelines of the National Medical Commission (NMC).',
  syllabus: {
    headers: ['Year', 'Subjects', 'Key Details'],
    table: [
      {
        Year: 'First Year',
        Subjects: 'Anatomy, Physiology, Biochemistry, Introduction to Clinical Medicine',
        'Key Details': 'Basic foundation of medical sciences and human body structure & functions'
      },
      {
        Year: 'Second Year',
        Subjects: 'Pathology, Microbiology, Pharmacology, Forensic Medicine',
        'Key Details': 'Study of diseases, medicines, infections, and medical-legal aspects'
      },
      {
        Year: 'Third Year (Part 1)',
        Subjects: 'ENT, Ophthalmology, Community Medicine',
        'Key Details': 'Specialized subjects with focus on public health and sensory organs'
      },
      {
        Year: 'Final Year (Part 2)',
        Subjects: 'Medicine, Surgery, Pediatrics, Obstetrics & Gynaecology, Orthopedics',
        'Key Details': 'Advanced clinical training and treatment of patients'
      },
      {
        Year: 'Internship (1 Year)',
        Subjects: 'Hospital Training, Rural Posting, Emergency Care, Rotational Duties',
        'Key Details': 'Hands-on clinical experience in hospitals across departments'
      }
    ]
  },
  fees: {
    sections: [
      {
        title: 'Private Medical College Fees (MBBS)',
        headers: ['College Name', 'Place', 'Per year Fee (₹)'],
        table: [
          { 'College Name': 'Shri Ram Murti Smarak Institute of Medical Sciences', Place: 'Bareilly', 'Per year Fee (₹)': '19,78,214' },
          { 'College Name': 'SHARDA UNIVERSITY', Place: 'Greater Noida', 'Per year Fee (₹)': '18,50,000' },
          { 'College Name': 'Subharti Medical College', Place: 'Meerut', 'Per year Fee (₹)': '14,22,160' },
          { 'College Name': 'Hind Institute of Medical Sciences', Place: 'Barabanki', 'Per year Fee (₹)': '16,85,681' },
          { 'College Name': 'Muzaffarnagar Medical College', Place: 'Muzaffarnagar', 'Per year Fee (₹)': '16,72,660' },
          { 'College Name': 'Saraswati Institute of Medical Sciences', Place: 'Hapur', 'Per year Fee (₹)': '11,81,671' },
          { 'College Name': 'Rohilkhand Medical College and Hospital', Place: 'Bareilly', 'Per year Fee (₹)': '18,72,361' },
          { 'College Name': 'Heritage Institute of Medical Sciences', Place: 'Varanasi', 'Per year Fee (₹)': '13,21,492' },
          { 'College Name': 'Rama Medical College and Hospital', Place: 'Kanpur', 'Per year Fee (₹)': '15,19,895' },
          { 'College Name': 'Hind Institute of Medical Sciences', Place: 'Sitapur', 'Per year Fee (₹)': '12,92,675' },
          { 'College Name': 'Mayo Institute of Medical Sciences', Place: 'Barabanki', 'Per year Fee (₹)': '11,21,162' },
          { 'College Name': 'K.D. Medical College Hospital and Research Centre', Place: 'Mathura', 'Per year Fee (₹)': '12,28,240' },
          { 'College Name': 'Prasad Institute of Medical Sciences', Place: 'Lucknow', 'Per year Fee (₹)': '11,03,932' },
          { 'College Name': 'Saraswati Medical College', Place: 'Unnao', 'Per year Fee (₹)': '11,59,610' },
          { 'College Name': 'United Institute of Medical Sciences', Place: 'Prayagraj', 'Per year Fee (₹)': '11,90,401' }
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
  scholarshipIntro: 'Uttar Pradesh has some of the best government and private medical colleges in India, and students can explore scholarships and financial support opportunities based on eligibility and institute policies.',
  scholarships: [
    { title: 'State & Central Scholarships', details: 'Eligible students may apply for government scholarship schemes through official portals.' },
    { title: 'Institutional Financial Support', details: 'Some colleges may provide assistance based on merit, category, or economic background.' }
  ],
  eligibility: {
    headers: ['Criteria', 'Details'],
    table: [
      { Criteria: 'Educational Qualification', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology and English' },
      { Criteria: 'Minimum Marks', Details: 'General: 50%' },
      { Criteria: 'Entrance Exam', Details: 'NEET-UG (Mandatory)' },
      { Criteria: 'Age Limit', Details: 'Minimum 17 years at the time of admission' },
      { Criteria: 'MD/MS Qualification', Details: 'MBBS degree + 1-year internship + Valid Registration' },
      { Criteria: 'PG Entrance', Details: 'NEET-PG (Mandatory)' }
    ]
  },
  documents: [
    { document: '10th & 12th Marksheet', details: 'Originals and photocopies for age and qualification proof.' },
    { document: 'NEET Admit Card & Scorecard', details: 'Mandatory for the counselling and seat allotment process.' },
    { document: 'Domicile Certificate', details: 'Required to claim seats under the Uttar Pradesh state quota.' },
    { document: 'Identity Proof', details: 'Aadhaar Card, PAN Card, or Passport.' },
    { document: 'Medical Fitness Certificate', details: 'Declaration from a registered medical practitioner.' },
    { document: 'MBBS Degree (for PG)', details: 'Completion certificate from a recognized medical college.' },
    { document: 'Internship Completion Certificate', details: 'Mandatory for MD/MS candidates.' }
  ],
  studentSupport: 'Students in Uttar Pradesh benefit from robust counselling support, high patient exposure, and structured academic mentorship in both government and private institutions.',
  hostelFacilities: 'Medical colleges in Uttar Pradesh generally offer hostel facilities with security, mess, study spaces, and basic amenities, subject to availability.',
  studentLife: 'Student life combines rigorous academics, practical postings, peer learning, and hospital-based training that helps build professional competence.',
  recognition: 'Most medical colleges in Uttar Pradesh are approved by the National Medical Commission (NMC), ensuring standard and recognized medical education.',
  whyChooseUsIntro: 'iExplain Education is a reliable partner for medical aspirants, providing expert counselling for MBBS in Uttar Pradesh.',
  whyChooseUs: [
    'Expert Guidance: Professional help to choose colleges based on NEET scores and budget.',
    'Admission Assistance: End-to-end support from registration to seat allotment.',
    'Personalized Selection: Customized recommendations for government and private colleges.',
    'Documentation Support: Assistance with verification and application formalities.',
    'Real-time Updates: Stay updated on counselling rounds and deadlines.'
  ],
  conclusion:
    'Pursuing MBBS in Uttar Pradesh is an excellent choice for medical aspirants seeking quality education and affordable fees. With institutions like KGMU and BHU, students gain access to world-class training and high patient exposure. iExplain Education ensures a smooth journey into these prestigious colleges through expert guidance.',
  faqs: [
    {
      question: 'Is NEET mandatory for MBBS in Uttar Pradesh?',
      answer: 'Yes, NEET-UG is compulsory for admission into all medical colleges in Uttar Pradesh.'
    },
    {
      question: 'What is the duration of MBBS in Uttar Pradesh?',
      answer: 'The course duration is 5.5 years, including 4.5 years of academic study and 1 year of compulsory internship.'
    },
    {
      question: 'What are the fees for government colleges?',
      answer: 'Government college fees typically range from ₹10,000 to ₹1.5 lakh per year.'
    },
    {
      question: 'Can I get a government seat in UP?',
      answer: 'Yes, through state quota or All India Quota based on your NEET rank.'
    }
  ],
  internship: {
    intro: 'Internship is a crucial part in the course of MBBS. Every student is obliged to do a 1 year internship in order to successfully receive their MBBS degree.',
    headers: ['Subjects', 'Compulsory Time Duration for Internship'],
    table: [
      { Subjects: 'Community Medicine', 'Compulsory Time Duration for Internship': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Compulsory Time Duration for Internship': '2 months' },
      { Subjects: 'Surgery, including Anesthesia', 'Compulsory Time Duration for Internship': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Compulsory Time Duration for Internship': '2 months' },
      { Subjects: 'Pediatrics', 'Compulsory Time Duration for Internship': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Compulsory Time Duration for Internship': '1 month' },
      { Subjects: 'ENT', 'Compulsory Time Duration for Internship': '15 days' },
      { Subjects: 'Ophthalmology', 'Compulsory Time Duration for Internship': '15 days' },
      { Subjects: 'Casualty', 'Compulsory Time Duration for Internship': '15 days' },
      { Subjects: 'Elective Posting', 'Compulsory Time Duration for Internship': '15 days' }
    ]
  },
  cutOff: {
    title: 'UP NEET CUT OFF 2025',
    headers: ['College Name', '1st Round', '2nd Round', '3rd Round', 'Stray Vacancy'],
    table: [
      { 'College Name': 'G.S. Hapur', '1st Round': '230375', '2nd Round': '351380', '3rd Round': '267808', 'Stray Vacancy': '221039' },
      { 'College Name': 'MuzafferNagar', '1st Round': '192192', '2nd Round': '296410', '3rd Round': '205379', 'Stray Vacancy': '297038' },
      { 'College Name': 'Rama Kanpur', '1st Round': '212393', '2nd Round': '269532', '3rd Round': '138578', 'Stray Vacancy': 'No seat vacant' },
      { 'College Name': 'NIIMS, Noida', '1st Round': '257343', '2nd Round': '427750', '3rd Round': '394018', 'Stray Vacancy': '418207' },
      { 'College Name': 'Sharda University (SOMS)', '1st Round': '86074', '2nd Round': '195896', '3rd Round': '134104', 'Stray Vacancy': '313983' }
    ]
  }
};

export const MBBS_IN_INDIA_DETAILS: Record<string, MBBSIndiaCollegeDetailData> = {
  'uttar-pradesh': uttarPradeshMBBSData,
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
