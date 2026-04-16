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
  heroImage: 'https://www.google.com/search?q=https://example.com/images/up-medical-hero.jpg',
  heroImageMobile: 'https://www.google.com/search?q=https://example.com/images/up-medical-hero-mobile.jpg',
  intro: {
    text: 'MBBS in Uttar Pradesh is one of the most popular choices among medical aspirants in India who want to become successful doctors through quality and affordable medical education. Uttar Pradesh has rapidly developed into a major hub for medical studies, offering a large number of government and private medical colleges with modern infrastructure, advanced laboratories, and well-equipped teaching hospitals. This makes it a preferred destination for students seeking MBBS admission in Uttar Pradesh as well as a strong foundation for a medical career in India.\n\nPursuing MBBS in Uttar Pradesh for students provides excellent clinical exposure because students get hands-on training in high-patient-volume hospitals. This real-time experience helps them develop strong practical skills along with theoretical knowledge. Most medical colleges in the state are approved by the National Medical Commission (NMC), ensuring standardized and quality education aligned with national medical guidelines.\n\nStudents who choose MBBS in Uttar Pradesh benefit from a wide range of options, including highly reputed government medical colleges with low fees and private institutions with modern facilities. Admission is strictly based on NEET-UG scores, making it a transparent and merit-based process for all students across India.\n\nAlong with Uttar Pradesh, MBBS in India is considered one of the most competitive and respected medical education systems globally. India offers world-class medical training, experienced faculty, and diverse clinical exposure due to its large and varied patient population. This makes MBBS in India a strong foundation for students aiming to practice medicine both nationally and internationally.\n\nOverall, MBBS in Uttar Pradesh is an excellent choice for students who want affordable education, strong clinical training, and a successful medical career. Combined with the broader scope of MBBS in India, it provides students with the right platform to achieve their dream of becoming professional and skilled doctors in the healthcare sector.'
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
    intro: 'Choosing MBBS in Uttar Pradesh (2026) is a smart and strategic decision for medical aspirants who want quality education, strong clinical exposure, and affordable fees. Uttar Pradesh has emerged as one of the largest medical education hubs in India, offering a wide range of government and private medical colleges. Here are the key benefits:',
    items: [
      {
        heading: 'Large Number of Medical Colleges & Seats',
        details: 'Uttar Pradesh has one of the highest numbers of medical colleges in India, increasing chances of admission for students who want to pursue MBBS in Uttar Pradesh.'
      },
      {
        heading: 'Affordable Government Colleges',
        details: 'Government medical colleges offer low tuition fees, making it a budget-friendly option for students looking for MBBS in India.'
      },
      {
        heading: 'Top-Ranked Institutions',
        details: 'Prestigious colleges like King George\'s Medical University and Institute of Medical Sciences BHU provide excellent education and clinical exposure.'
      },
      {
        heading: 'High Patient Flow for Clinical Exposure',
        details: 'Hospitals attached to medical colleges have a large number of patients, giving students real-time practical training.'
      },
      {
        heading: 'NEET-Based Transparent Admission',
        details: 'Admission is strictly based on NEET-UG scores, ensuring a fair and merit-based selection process.'
      },
      {
        heading: 'Wide Range of Private Colleges',
        details: 'Students also have multiple private medical colleges as backup options if they don\'t secure a government seat.'
      },
      {
        heading: 'Strong Academic Infrastructure',
        details: 'Medical colleges in Uttar Pradesh are equipped with modern labs, libraries, and experienced faculty.'
      },
      {
        heading: 'Better Career Opportunities',
        details: 'Graduates from Uttar Pradesh medical colleges have strong opportunities for PG courses (MD/MS) and government jobs.'
      },
      {
        heading: 'Central Location & Accessibility',
        details: 'Being centrally located, Uttar Pradesh is well-connected by rail, road, and air, making it convenient for students from all over India.'
      },
      {
        heading: 'Growing Medical Education Hub',
        details: 'The state is rapidly expanding its medical infrastructure, making MBBS in Uttar Pradesh (2026) even more attractive.'
      }
    ]
  },
  SyllabusIntro: 'The MBBS in Uttar Pradesh syllabus is designed as per the guidelines of the National Medical Commission (NMC), and it is similar across all medical colleges in India. The course focuses on strong theoretical knowledge, practical training, and clinical exposure, making it a key part of MBBS in India.',
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
    note: 'Uttar Pradesh has some of the best government and private medical colleges in India. Below is the per-year fee structure for private medical colleges in the state.',
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
          { 'College Name': 'Rajshree Medical College and Research Institute', Place: 'Bareilly', 'Per year Fee (₹)': '17,68,904' },
          { 'College Name': 'Rama Medical College Hospital and Research Centre', Place: 'Hapur', 'Per year Fee (₹)': '13,09,968' },
          { 'College Name': 'Prasad Institute of Medical Sciences', Place: 'Lucknow', 'Per year Fee (₹)': '11,03,932' },
          { 'College Name': 'T.S. Misra Medical College and Hospital', Place: 'Amausi, Lucknow', 'Per year Fee (₹)': '18,70,847' },
          { 'College Name': 'Noida International Institute of Medical Sciences', Place: 'Gautam Buddh Nagar', 'Per year Fee (₹)': '17,16,784' },
          { 'College Name': 'G.S. Medical College and Hospital', Place: 'Hapur', 'Per year Fee (₹)': '14,42,654' },
          { 'College Name': 'Saraswati Medical College', Place: 'Unnao', 'Per year Fee (₹)': '11,59,610' },
          { 'College Name': 'United Institute of Medical Sciences', Place: 'Prayagraj', 'Per year Fee (₹)': '11,90,401' },
          { 'College Name': 'National Capital Region Institute of Medical Sciences (MSY Medical College)', Place: 'Meerut', 'Per year Fee (₹)': '12,19,917' },
          { 'College Name': 'Krishna Mohan Medical College and Hospital', Place: 'Mathura', 'Per year Fee (₹)': '11,73,856' },
          { 'College Name': 'Varunarjun Medical College and Rohilkhand Hospital', Place: 'Shahjahanpur', 'Per year Fee (₹)': '14,52,000' },
          { 'College Name': 'Shri Venkateshwara Institute of Medical Sciences', Place: 'Gajraula, Amroha', 'Per year Fee (₹)': '11,10,508' },
          { 'College Name': 'Naraina Medical College and Research Centre', Place: 'Kanpur', 'Per year Fee (₹)': '12,14,683' },
          { 'College Name': 'S.K.S. Hospital Medical College and Research Centre', Place: 'Mathura', 'Per year Fee (₹)': '12,14,683' },
          { 'College Name': 'Career Institute of Medical Science', Place: 'Lucknow', 'Per year Fee (₹)': '15,95,000' },
          { 'College Name': 'ERA Medical College', Place: 'Lucknow', 'Per year Fee (₹)': '16,60,000' },
          { 'College Name': 'FH Medical College', Place: 'Agra', 'Per year Fee (₹)': '16,50,000' },
          { 'College Name': 'Integral Institute of Medical Sciences', Place: 'Lucknow', 'Per year Fee (₹)': '18,00,000' },
          { 'College Name': 'Teerthanker Mahaveer Medical College', Place: 'Moradabad', 'Per year Fee (₹)': '16,20,000' },
          { 'College Name': 'KMC Medical College and Hospital', Place: 'Maharajganj', 'Per year Fee (₹)': '14,14,159' }
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
      { Criteria: 'Educational Qualification (UG)', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology and English' },
      { Criteria: 'Minimum Marks (UG)', Details: 'General: 50%' },
      { Criteria: 'Entrance Exam (UG)', Details: 'NEET-UG (Mandatory)' },
      { Criteria: 'Age Limit (UG)', Details: 'Minimum 17 years at the time of admission' },
      { Criteria: 'Nationality (UG)', Details: 'Indian citizens / NRI / OCI (as per rules)' },
      { Criteria: 'Admission Process (UG)', Details: 'NEET-UG based counselling (DGME UP)' },
      { Criteria: 'Educational Qualification (PG)', Details: 'MBBS degree from recognized medical college' },
      { Criteria: 'Internship (PG)', Details: '1-year compulsory rotatory internship completed' },
      { Criteria: 'Registration (PG)', Details: 'Valid MCI/NMC or State Medical Council registration' },
      { Criteria: 'Entrance Exam (PG)', Details: 'NEET-PG (Mandatory)' },
      { Criteria: 'Admission Process (PG)', Details: 'NEET-PG counselling (DGME UP / MCC)' }
    ]
  },
  documents: [
    { document: '10th Marksheet & Certificate', details: 'Proof of date of birth and qualification.' },
    { document: '12th Marksheet & Certificate', details: 'Must include Physics, Chemistry, Biology.' },
    { document: 'NEET-UG Admit Card', details: 'Mandatory for counselling process.' },
    { document: 'NEET-UG Scorecard', details: 'Proof of qualification and rank.' },
    { document: 'Valid Photo ID', details: 'Aadhaar Card / PAN Card / Passport.' },
    { document: 'Passport-size Photographs', details: 'Recent colored photographs.' },
    { document: 'Domicile Certificate', details: 'Required for Uttar Pradesh state quota.' },
    { document: 'Counselling Registration Slip', details: 'DGME Uttar Pradesh registration proof.' },
    { document: 'Seat Allotment Letter', details: 'Issued after counselling round.' },
    { document: 'Medical Fitness Certificate', details: 'Declares student fit for medical studies.' },
    { document: 'Category Certificate', details: 'SC/ST/OBC/EWS (if applicable).' }
  ],
  documentsPG: [
    { document: 'MBBS Degree Certificate', details: 'Proof of completion of MBBS course.' },
    { document: 'MBBS Marksheets (All Years)', details: 'First, Second, and Final year marksheets.' },
    { document: 'NEET-PG Scorecard', details: 'Mandatory for PG admission.' },
    { document: 'NEET-PG Admit Card', details: 'Required during counselling.' },
    { document: 'Internship Completion Certificate', details: 'Proof of 1-year compulsory rotatory internship.' },
    { document: 'Medical Registration Certificate', details: 'NMC/MCI or State Medical Council registration.' },
    { document: 'Internship Rotatory Logbook (if required)', details: 'Clinical training record.' },
    { document: 'Domicile Certificate', details: 'Required for state quota (if applicable).' },
    { document: 'Counselling Registration Slip', details: 'DGME UP / MCC registration proof.' },
    { document: 'Seat Allotment Letter', details: 'Issued after counselling rounds.' },
    { document: 'Medical Fitness Certificate', details: 'Declares candidate medically fit.' },
    { document: 'Caste/Category Certificate', details: 'SC/ST/OBC/EWS (if applicable).' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Uttar Pradesh – Admission Process',
      intro: 'The MBBS in Uttar Pradesh admission process is conducted in a structured and transparent manner based on NEET-UG scores. Students who want to pursue MBBS in Uttar Pradesh must follow the official counselling procedure managed by the state authorities and central counselling bodies.',
      steps: [
        { step: '1. NEET-UG Qualification', details: 'Students must first qualify the NEET-UG exam, which is mandatory for all candidates who want to pursue MBBS in India, including Uttar Pradesh.' },
        { step: '2. Registration for Counselling', details: 'Eligible candidates must register online for Uttar Pradesh NEET counselling conducted by the Directorate of Medical Education and Training (DGME UP).' },
        { step: '3. Choice Filling & Locking', details: 'Students need to select their preferred medical colleges in Uttar Pradesh (government/private) and lock their choices carefully.' },
        { step: '4. Merit List Release', details: 'A merit list is prepared based on NEET scores, category, and reservation criteria.' },
        { step: '5. Seat Allotment', details: 'Seats are allotted according to rank, availability, and preference filled by the student.' },
        { step: '6. Document Verification', details: 'Selected students must visit the allotted college for document verification and confirmation.' },
        { step: '7. Admission Confirmation', details: 'After verification, students must pay the admission fee to confirm their seat in the medical college.' }
      ]
    },
    pg: {
      title: 'MD/MS in Uttar Pradesh – Admission Process',
      intro: 'The MD/MS in Uttar Pradesh admission process is conducted in a structured and merit-based manner through NEET-PG scores. Students who want to pursue postgraduate medical education in Uttar Pradesh must complete the official counselling process conducted by the state authority and central counselling bodies.',
      steps: [
        { step: '1. NEET-PG Qualification', details: 'Candidates must first qualify the NEET-PG exam, which is mandatory for admission into all MD/MS courses in MD/MS in India, including Uttar Pradesh.' },
        { step: '2. Counselling Registration', details: 'Eligible candidates must register online for Uttar Pradesh NEET-PG counselling conducted by the Directorate of Medical Education and Training (DGME UP) and MCC (for certain quota seats).' },
        { step: '3. Choice Filling & Locking', details: 'Students must select their preferred MD/MS specializations and medical colleges in Uttar Pradesh and lock their choices carefully.' },
        { step: '4. Merit List Publication', details: 'A merit list is prepared based on NEET-PG rank, category, reservation rules, and seat availability.' },
        { step: '5. Seat Allotment', details: 'Seats are allotted according to rank, preferences, and availability in government and private medical colleges.' },
        { step: '6. Document Verification', details: 'Selected candidates must report to the allotted college for verification of original documents.' },
        { step: '7. Admission Confirmation', details: 'After successful verification, students must pay the admission fees to confirm their seat in the MD/MS program.' }
      ]
    }
  },
  studentSupport: 'Students in Uttar Pradesh benefit from robust counselling support, high patient exposure, and structured academic mentorship in both government and private institutions.',
  hostelFacilities: 'Medical colleges in Uttar Pradesh generally offer hostel facilities with security, mess, study spaces, and basic amenities, subject to availability.',
  studentLife: 'Student life combines rigorous academics, practical postings, peer learning, and hospital-based training that helps build professional competence.',
  recognition: 'Most medical colleges in Uttar Pradesh are approved by the National Medical Commission (NMC), ensuring standard and recognized medical education.',
  whyChooseUsIntro: 'Choosing the right guidance is crucial for securing admission in MBBS in Uttar Pradesh, and iExplain Education stands out as a reliable partner for medical aspirants. With expert counselling and a student-focused approach, iExplain Education helps students navigate the competitive admission process of MBBS in India with ease and confidence.',
  whyChooseUs: [
    'Expert Guidance & Counseling: iExplain Education provides professional guidance to help students choose the best medical colleges in Uttar Pradesh based on their NEET score, budget, and preferences.',
    'Complete Admission Assistance: From NEET counselling registration to choice filling and seat allotment, students receive end-to-end support for MBBS in Uttar Pradesh admission.',
    'Personalized College Selection: Students get customized recommendations for government and private medical colleges according to their rank and career goals.',
    'Documentation & Application Support: Assistance with all required documents, verification process, and application formalities ensures a smooth admission journey.',
    'Transparent & Reliable Process: iExplain Education follows a clear and honest process, ensuring students and parents are fully informed at every step.',
    'Updated Counselling Guidance: Students receive real-time updates about NEET counselling rounds, seat availability, and admission deadlines.',
    'Affordable Solutions: Guidance is provided keeping in mind the student\'s financial background, helping them choose cost-effective options for MBBS in India.'
  ],
  conclusion:
    'In conclusion, pursuing MBBS in Uttar Pradesh is an excellent choice for medical aspirants who are looking for quality education, strong clinical exposure, and affordable fee options. The state offers a wide range of government and private medical colleges, making it easier for students to secure admission based on their NEET performance. Top institutions like King George\'s Medical University and Institute of Medical Sciences BHU provide high-standard education, experienced faculty, and excellent hospital training, which are essential for building a successful medical career. Along with this, the increasing number of medical seats and transparent admission process further strengthen the scope of MBBS in Uttar Pradesh. When combined with the broader opportunities of MBBS in India, students gain access to globally recognized degrees, diverse clinical cases, and strong career prospects in both government and private healthcare sectors. Overall, MBBS in Uttar Pradesh offers the perfect balance of affordability, quality education, and practical training, making it one of the best choices for students aiming to become skilled and successful doctors in India.',
  faqs: [
    {
      question: 'What is MBBS in Uttar Pradesh?',
      answer: 'MBBS in Uttar Pradesh refers to pursuing a Bachelor of Medicine and Bachelor of Surgery degree from government or private medical colleges in the state.'
    },
    {
      question: 'Is NEET mandatory for MBBS in Uttar Pradesh?',
      answer: 'Yes, NEET-UG is compulsory for admission into all medical colleges in Uttar Pradesh and across MBBS in India.'
    },
    {
      question: 'What is the duration of MBBS in Uttar Pradesh?',
      answer: 'The course duration is 5.5 years, including 4.5 years of academic study and 1 year compulsory internship.'
    },
    {
      question: 'What are the fees for MBBS in Uttar Pradesh?',
      answer: 'Government colleges: ₹10,000 – ₹1.5 lakh per year. Private colleges: ₹8 lakh – ₹25 lakh per year (approx.).'
    },
    {
      question: 'What is the eligibility for MBBS in Uttar Pradesh?',
      answer: 'Students must have 10+2 with Physics, Chemistry, Biology, and qualify NEET-UG with the required cutoff.'
    },
    {
      question: 'How many seats are available for MBBS in Uttar Pradesh?',
      answer: 'Uttar Pradesh has one of the highest numbers of MBBS seats in India, with thousands of seats in government and private colleges.'
    },
    {
      question: 'Can I get a government seat in MBBS in Uttar Pradesh?',
      answer: 'Yes, students can get a government seat based on their NEET rank through state or All India Quota counselling.'
    },
    {
      question: 'Is MBBS in Uttar Pradesh good for career?',
      answer: 'Yes, it offers strong clinical exposure, quality education, and excellent career opportunities in the healthcare sector.'
    },
    {
      question: 'What after completing MBBS in Uttar Pradesh?',
      answer: 'After MBBS, students can pursue MD/MS, prepare for government jobs, or start practicing as a doctor in India.'
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
      { Subjects: 'Elective Posting', 'Compulsory Time Duration for Internship': '15 days' },
      { Subjects: 'Total', 'Compulsory Time Duration for Internship': '12 months' }
    ]
  },
  cutOff: {
    title: 'UP NEET CUT OFF 2025',
    headers: ['College Name', '1st Round', '2nd Round', '3rd Round', 'Stray Vacancy Round', 'Special Stray Vacancy Round'],
    table: [
      { 'College Name': 'G.S. Hapur', '1st Round': '230375', '2nd Round': '351380', '3rd Round': '267808', 'Stray Vacancy Round': '221039', 'Special Stray Vacancy Round': '179931' },
      { 'College Name': 'Varunarjun, Shahjahanpur', '1st Round': '326398', '2nd Round': '438765', '3rd Round': '397292', 'Stray Vacancy Round': '474810', 'Special Stray Vacancy Round': '471349' },
      { 'College Name': 'MuzafferNagar', '1st Round': '192192', '2nd Round': '296410', '3rd Round': '205379', 'Stray Vacancy Round': '297038', 'Special Stray Vacancy Round': '494573' },
      { 'College Name': 'T.S. Mishra, Lucknow', '1st Round': '391655', '2nd Round': '549377', '3rd Round': '589922', 'Stray Vacancy Round': '641763', 'Special Stray Vacancy Round': '629070' },
      { 'College Name': 'Rama Kanpur', '1st Round': '212393', '2nd Round': '269532', '3rd Round': '138578', 'Stray Vacancy Round': 'No seat vacant', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Rama Hapur', '1st Round': '187338', '2nd Round': '229989', '3rd Round': '131759', 'Stray Vacancy Round': '64954', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'RohilKhand, Bareilly', '1st Round': '305223', '2nd Round': '500475', '3rd Round': '486900', 'Stray Vacancy Round': '432867', 'Special Stray Vacancy Round': '506677' },
      { 'College Name': 'Rajshree, Bareilly', '1st Round': '401964', '2nd Round': '573704', '3rd Round': '600891', 'Stray Vacancy Round': '639574', 'Special Stray Vacancy Round': '630622' },
      { 'College Name': 'NIIMS, Noida', '1st Round': '257343', '2nd Round': '427750', '3rd Round': '394018', 'Stray Vacancy Round': '418207', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Heritage, Varanasi', '1st Round': '170864', '2nd Round': '189181', '3rd Round': '103972', 'Stray Vacancy Round': '120399', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Career Institute, Lucknow', '1st Round': '412622', '2nd Round': '536182', '3rd Round': '594940', 'Stray Vacancy Round': '608611', 'Special Stray Vacancy Round': '499163' },
      { 'College Name': 'Career Muslim', '1st Round': '545619', '2nd Round': '659512', '3rd Round': '669793', 'Stray Vacancy Round': '696483', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Teerthankar Mahaveer, Moradabad', '1st Round': '333740', '2nd Round': '469180', '3rd Round': '552833', 'Stray Vacancy Round': '616336', 'Special Stray Vacancy Round': '627920' },
      { 'College Name': 'Teerthankar Mahaveer, Moradabad (JAIN)', '1st Round': '1085133', '2nd Round': '1074027', '3rd Round': '516565', 'Stray Vacancy Round': '780335', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Venkateshwara, Amroha', '1st Round': '270623', '2nd Round': '375194', '3rd Round': '252441', 'Stray Vacancy Round': '324506', 'Special Stray Vacancy Round': '78692' },
      { 'College Name': 'Mayo Institute, Barabanki', '1st Round': '254097', '2nd Round': '334849', '3rd Round': '158308', 'Stray Vacancy Round': '162174', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Subharti Medical, Meerut', '1st Round': '191200', '2nd Round': '266476', '3rd Round': '207295', 'Stray Vacancy Round': '262941', 'Special Stray Vacancy Round': '211364' },
      { 'College Name': 'Shri Ram Murti, Bareilly', '1st Round': '175009', '2nd Round': '433125', '3rd Round': '428605', 'Stray Vacancy Round': 'No seat vacant', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Saraswati, Hapur', '1st Round': '164442', '2nd Round': '190852', '3rd Round': '90766', 'Stray Vacancy Round': '45885', 'Special Stray Vacancy Round': '------------' },
      { 'College Name': 'Prasad Medical College, Lucknow', '1st Round': '249298', '2nd Round': '357901', '3rd Round': '138608', 'Stray Vacancy Round': '128951', 'Special Stray Vacancy Round': '104227' },
      { 'College Name': 'K.D. Medical College, Mathura', '1st Round': '124074', '2nd Round': '132349', '3rd Round': 'No seat vacant', 'Stray Vacancy Round': '57403', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Integral Institute, Lucknow', '1st Round': '418410', '2nd Round': '573204', '3rd Round': '606709', 'Stray Vacancy Round': '643323', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Integral Institute, Lucknow (Muslim)', '1st Round': '512309', '2nd Round': '599901', '3rd Round': '628502', 'Stray Vacancy Round': '639412', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Hind, Sitapur', '1st Round': '121547', '2nd Round': '160036', '3rd Round': '88671', 'Stray Vacancy Round': 'No seat vacant', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Hind, Barabanki', '1st Round': '167386', '2nd Round': '248437', '3rd Round': '192420', 'Stray Vacancy Round': '264570', 'Special Stray Vacancy Round': '------------' },
      { 'College Name': 'F.H. Medical College, Agra', '1st Round': '433526', '2nd Round': '587219', '3rd Round': '615431', 'Stray Vacancy Round': '690996', 'Special Stray Vacancy Round': '631427' },
      { 'College Name': 'F.H. Medical College, Agra (Muslim)', '1st Round': '599153', '2nd Round': '722579', '3rd Round': '722941', 'Stray Vacancy Round': '738584', 'Special Stray Vacancy Round': '672966' },
      { 'College Name': 'ERA Medical College, Lucknow', '1st Round': '333303', '2nd Round': '458970', '3rd Round': '533270', 'Stray Vacancy Round': '617922', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'ERA Medical College, Lucknow (Muslim)', '1st Round': '412006', '2nd Round': '441574', '3rd Round': '580210', 'Stray Vacancy Round': '280877', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Sharda University, Noida (SOMS)', '1st Round': '86074', '2nd Round': '195896', '3rd Round': '134104', 'Stray Vacancy Round': '313983', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Naraina Medical College & Research Center, Kanpur', '1st Round': '246901', '2nd Round': '383586', '3rd Round': '238671', 'Stray Vacancy Round': '315094', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'National Capital Region Medical College, Meerut', '1st Round': '------------', '2nd Round': '336679', '3rd Round': '298676', 'Stray Vacancy Round': '198651', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'K.M. Medical College, Mathura', '1st Round': '248698', '2nd Round': '392077', '3rd Round': '279825', 'Stray Vacancy Round': '174091', 'Special Stray Vacancy Round': '175369' },
      { 'College Name': 'Sree Gorakh Nath Medical Science', '1st Round': '161578', '2nd Round': '196805', '3rd Round': '155651', 'Stray Vacancy Round': 'No seat vacant', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Ajay Sangaal Institute of Medical & Research', '1st Round': '286180', '2nd Round': '382152', '3rd Round': '249188', 'Stray Vacancy Round': '400266', 'Special Stray Vacancy Round': 'No seat vacant' },
      { 'College Name': 'Shree Sidhi Vinayaka Medical College & Hospital (Shambhal)', '1st Round': '319661', '2nd Round': '454388', '3rd Round': '469682', 'Stray Vacancy Round': '497193', 'Special Stray Vacancy Round': '474524' },
      { 'College Name': 'KMC Medical College (Maharajganj)', '1st Round': '326126', '2nd Round': '440266', '3rd Round': '465840', 'Stray Vacancy Round': '436909', 'Special Stray Vacancy Round': '487693' },
      { 'College Name': 'Dr. B.S. Kushwah Institute of Medical College (Kanpur)', '1st Round': '323497', '2nd Round': '421396', '3rd Round': '343142', 'Stray Vacancy Round': '295031', 'Special Stray Vacancy Round': 'No seat vacant' }
    ]
  }
};

const rajasthanMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Rajasthan',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/rajasthan-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/rajasthan-medical-hero-mobile.jpg',
  intro: {
    text: `MBBS in Rajasthan is a highly preferred option for medical aspirants who are looking for quality education, affordable fees, and excellent clinical exposure in India. Rajasthan has emerged as a strong hub for medical studies, offering a wide range of government and private medical colleges equipped with modern infrastructure, advanced laboratories, and well-established teaching hospitals. This makes it a popular destination for students seeking MBBS admission in Rajasthan and aiming to build a successful career in healthcare.

Pursuing MBBS in Rajasthan for students provides strong academic training along with practical exposure, as medical colleges in the state are associated with high patient-flow hospitals. This allows students to gain hands-on experience in real-life medical scenarios, which is a crucial part of MBBS in India. Most colleges are approved by the National Medical Commission (NMC), ensuring standard quality education and recognition across the country.

Students who choose MBBS in Rajasthan benefit from comparatively affordable fees in government colleges and a variety of options in private institutions. Admission is strictly based on NEET-UG scores, ensuring a transparent and merit-based selection process. The state also attracts students from across India due to its increasing number of medical seats and improving educational infrastructure.

Along with Rajasthan, MBBS in India is known for its rigorous training, experienced faculty, and diverse clinical exposure. The Indian medical education system prepares students to handle a wide range of medical conditions, making them capable professionals both nationally and internationally.

Overall, MBBS in Rajasthan is an excellent choice for students who want a balance of affordability, quality education, and strong clinical training. It provides a solid foundation for a successful medical career and is an important part of the growing scope of MBBS in India.`
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
    'Course Level': 'Undergraduate',
    Duration: '5.5 Years (4.5 Years Academic + 1 Year Internship)',
    Eligibility: '10+2 with PCB (Physics, Chemistry, Biology)',
    'Minimum Marks': 'General: 50%',
    'Entrance Exam': 'NEET-UG (Mandatory)',
    'Admission Process': 'NEET-based Counselling',
    'Counselling Authority': 'RUHS / State Medical Authority',
    Approval: 'National Medical Commission (NMC)',
    'Top College Types': 'Government & Private Medical Colleges',
    'Career Options': 'Doctor, Surgeon, MD/MS, Government Jobs',
    Internship: '1 Year Compulsory'
  },
  benefits: {
    intro: 'Choosing MBBS in Rajasthan (2026) is an excellent option for medical aspirants who are looking for quality education, affordable fees, and strong clinical exposure. Rajasthan has rapidly developed its medical education infrastructure in recent years, with a growing number of government and private medical colleges. This increase in seats improves the chances of admission for students who want to pursue MBBS in Rajasthan through NEET-based counselling.',
    items: [
      { heading: 'Growing Number of Medical Colleges & Seats', details: 'Rajasthan has significantly increased its number of government and private medical colleges, improving admission chances for students pursuing MBBS in Rajasthan.' },
      { heading: 'Affordable Government College Fees', details: 'Government medical colleges offer low tuition fees, making it a cost-effective option for students planning MBBS in India.' },
      { heading: 'Top Medical Institutions', details: 'Renowned colleges like All India Institute of Medical Sciences Jodhpur and Sawai Man Singh Medical College provide high-quality education and excellent hospital facilities.' },
      { heading: 'Strong Clinical Exposure', details: 'Hospitals attached to medical colleges have high patient flow, giving students real-time practical experience.' },
      { heading: 'Transparent NEET-Based Admission', details: 'Admission is strictly based on NEET-UG scores, ensuring a fair and merit-based process.' },
      { heading: 'Good Infrastructure & Facilities', details: 'Colleges are equipped with modern labs, libraries, hostels, and advanced medical equipment.' },
      { heading: 'Wide Range of Private Colleges', details: 'Students have multiple private college options if they do not secure a government seat.' },
      { heading: 'Better Career Opportunities', details: 'Graduates have strong chances for PG courses (MD/MS), government jobs, and private practice.' }
    ]
  },
  SyllabusIntro: 'The MBBS in Rajasthan syllabus follows the guidelines of the National Medical Commission (NMC) and is similar across all medical colleges in India. The course is designed to provide a strong foundation in medical sciences along with practical clinical training, making it an important part of MBBS in India.',
  syllabus: {
    headers: ['Year', 'Subjects', 'Key Details'],
    table: [
      { Year: 'First Year', Subjects: 'Anatomy, Physiology, Biochemistry, Introduction to Clinical Medicine', 'Key Details': 'Basic understanding of human body structure, functions, and biochemical processes' },
      { Year: 'Second Year', Subjects: 'Pathology, Microbiology, Pharmacology, Forensic Medicine', 'Key Details': 'Study of diseases, microorganisms, drug action, and medical-legal aspects' },
      { Year: 'Third Year (Part 1)', Subjects: 'ENT, Ophthalmology, Community Medicine', 'Key Details': 'Focus on sensory organs and public health concepts' },
      { Year: 'Final Year (Part 2)', Subjects: 'Medicine, Surgery, Pediatrics, Obstetrics & Gynaecology, Orthopedics', 'Key Details': 'Advanced clinical subjects with diagnosis and treatment training' },
      { Year: 'Internship (1 Year)', Subjects: 'Hospital Training, Rural Posting, Emergency Care, Rotational Duties', 'Key Details': 'Hands-on practical experience across all departments' }
    ]
  },
  fees: {
    note: 'Rajasthan is home to some of the best medical colleges in India, offering high-quality education, excellent clinical exposure, and affordable fees. Many of these institutions are highly ranked and preferred by students who want to pursue MBBS in Rajasthan and build a strong career in MBBS in India.',
    sections: [
      {
        title: 'Top MBBS Colleges in Rajasthan (2026)',
        headers: ['COLLEGE', 'ESTD. YEAR', 'STATE QUOTA', 'MANAGEMENT QUOTA'],
        table: [
          { COLLEGE: 'NIMS, JAIPUR', 'ESTD. YEAR': '2004', 'STATE QUOTA': '24,00,000', 'MANAGEMENT QUOTA': '30,00,000' },
          { COLLEGE: 'AMERICAN INST. OF MED. SC, UDAIPUR', 'ESTD. YEAR': '2016', 'STATE QUOTA': '18,90,000', 'MANAGEMENT QUOTA': '32,00,000' },
          { COLLEGE: 'ANANTA INSTITUTE OF MED. SC, RAJSAMAND', 'ESTD. YEAR': '2016', 'STATE QUOTA': '18,90,000', 'MANAGEMENT QUOTA': '28,00,000' },
          { COLLEGE: 'GEETANJALI MC, UDAIPUR', 'ESTD. YEAR': '2008', 'STATE QUOTA': '23,00,000', 'MANAGEMENT QUOTA': '30,00,000' },
          { COLLEGE: 'JNU INSTITUTE FOR MED. SC. & RC, JAIPUR', 'ESTD. YEAR': '2016', 'STATE QUOTA': '23,00,000', 'MANAGEMENT QUOTA': '28,00,000' },
          { COLLEGE: 'MAHATMA GANDHI MED COLL. JAIPUR', 'ESTD. YEAR': '2001', 'STATE QUOTA': '19,50,000', 'MANAGEMENT QUOTA': '26,75,000' },
          { COLLEGE: 'PACIFIC INSTI OF MED SC, UDAIPUR', 'ESTD. YEAR': '2015', 'STATE QUOTA': '25,00,000', 'MANAGEMENT QUOTA': '35,00,000' },
          { COLLEGE: 'PACIFIC MED COLLEGE AHOS, UDAIPUR', 'ESTD. YEAR': '2014', 'STATE QUOTA': '25,00,000', 'MANAGEMENT QUOTA': '34,00,000' },
          { COLLEGE: 'DR SS TANTIA MEDICAL COLLEGE & HOSPITAL', 'ESTD. YEAR': '2021', 'STATE QUOTA': '22,25,000', 'MANAGEMENT QUOTA': '29,25,000' },
          { COLLEGE: 'VYAS MEDICAL COLLEGE AND HOSPITAL', 'ESTD. YEAR': '2024', 'STATE QUOTA': '23,00,000', 'MANAGEMENT QUOTA': '30,00,000' },
          { COLLEGE: 'SUDHA MEDICAL COLLEGE AND HOSPITAL', 'ESTD. YEAR': '2024', 'STATE QUOTA': '18,90,000', 'MANAGEMENT QUOTA': '28,20,000' }
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
  scholarshipIntro: 'iExplain Education provides scholarship & financial guidance. Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Rajasthan.',
  scholarships: [
    { title: 'Scholarship & Financial Guidance', details: 'Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Rajasthan.' }
  ],
  eligibility: {
    headers: ['Criteria', 'Details'],
    table: [
      { Criteria: 'Educational Qualification (MBBS)', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology & English' },
      { Criteria: 'Minimum Marks (MBBS)', Details: 'General: 50%' },
      { Criteria: 'Entrance Exam (MBBS)', Details: 'NEET-UG (Mandatory)' },
      { Criteria: 'Age Limit (MBBS)', Details: 'Minimum 17 years at the time of admission' },
      { Criteria: 'Nationality (MBBS)', Details: 'Indian / NRI / OCI (as per rules)' },
      { Criteria: 'Admission Process (MBBS)', Details: 'NEET-based counselling' },
      { Criteria: 'Domicile (MBBS)', Details: 'Required for Rajasthan state quota seats' },
      { Criteria: 'Educational Qualification (MD/MS)', Details: 'MBBS degree from a recognized medical college' },
      { Criteria: 'Internship (MD/MS)', Details: '1-year compulsory rotatory internship completed' },
      { Criteria: 'Registration (MD/MS)', Details: 'Valid NMC/State Medical Council registration' },
      { Criteria: 'Entrance Exam (MD/MS)', Details: 'NEET-PG (Mandatory)' },
      { Criteria: 'Admission Process (MD/MS)', Details: 'NEET-PG counselling' },
      { Criteria: 'Domicile (MD/MS)', Details: 'Required for state quota (if applicable)' }
    ]
  },
  documents: [
    { document: '10th Marksheet & Certificate', details: 'Proof of date of birth' },
    { document: '12th Marksheet & Certificate', details: 'Must include Physics, Chemistry, Biology' },
    { document: 'NEET-UG Scorecard', details: 'Mandatory for admission' },
    { document: 'NEET-UG Admit Card', details: 'Required during counselling' },
    { document: 'Valid Photo ID Proof', details: 'Aadhaar Card / PAN Card / Passport' },
    { document: 'Domicile Certificate', details: 'Required for Rajasthan state quota' },
    { document: 'Counselling Registration Slip', details: 'Proof of Rajasthan NEET counselling registration' },
    { document: 'Seat Allotment Letter', details: 'Issued after seat allocation' },
    { document: 'Category Certificate', details: 'SC/ST/OBC/EWS (if applicable)' }
  ],
  documentsPG: [
    { document: 'MBBS Degree Certificate', details: 'Proof of completion of MBBS course' },
    { document: 'MBBS Marksheets (All Years)', details: 'First, Second, and Final year marksheets' },
    { document: 'NEET-PG Scorecard', details: 'Mandatory for PG admission' },
    { document: 'NEET-PG Admit Card', details: 'Required during counselling' },
    { document: 'Internship Completion Certificate', details: '1-year compulsory rotatory internship proof' },
    { document: 'Medical Registration Certificate', details: 'Valid registration from NMC/State Medical Council' },
    { document: 'Valid Photo ID Proof', details: 'Aadhaar Card / PAN Card / Passport' },
    { document: 'Domicile Certificate', details: 'Required for Rajasthan state quota (if applicable)' },
    { document: 'Counselling Registration Slip', details: 'Rajasthan NEET-PG counselling proof' },
    { document: 'Seat Allotment Letter', details: 'Issued after seat allocation' },
    { document: 'Category Certificate', details: 'SC/ST/OBC/EWS (if applicable)' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Rajasthan – Admission Process',
      intro: 'The MBBS in Rajasthan admission process is completely merit-based and conducted through NEET-UG scores. Students who want to pursue MBBS in Rajasthan must follow the official counselling procedure managed by the state authority and central counselling bodies under MBBS in India.',
      steps: [
        { step: '1. NEET-UG Qualification', details: 'Candidates must qualify the NEET-UG exam, which is mandatory for admission into all medical colleges across India, including Rajasthan.' },
        { step: '2. Counselling Registration', details: 'Eligible candidates need to register online for Rajasthan NEET counselling conducted by the state authority (RUHS / Rajasthan Medical Education Department).' },
        { step: '3. Choice Filling & Locking', details: 'Students must select their preferred government and private medical colleges and lock their choices carefully.' },
        { step: '4. Merit List Release', details: 'A merit list is prepared based on NEET rank, category, reservation rules, and eligibility criteria.' },
        { step: '5. Seat Allotment', details: 'Seats are allotted based on rank, preference, and availability in different colleges.' },
        { step: '6. Document Verification', details: 'Candidates must report to the allotted college for verification of original documents.' },
        { step: '7. Admission Confirmation', details: 'After successful verification, students need to pay the admission fee to confirm their MBBS seat.' }
      ]
    },
    pg: {
      title: 'MD/MS in Rajasthan – Admission Process',
      intro: 'The MD/MS in Rajasthan admission process is conducted through NEET-PG scores and follows a transparent, merit-based counselling system. Candidates who want to pursue postgraduate medical courses must participate in the official counselling process under MD/MS in India.',
      steps: [
        { step: '1. NEET-PG Qualification', details: 'Candidates must qualify the NEET-PG exam, which is mandatory for admission into MD/MS courses in Rajasthan and across India.' },
        { step: '2. Counselling Registration', details: 'Eligible candidates must register online for Rajasthan NEET-PG counselling conducted by the state authority (RUHS / Rajasthan Medical Education Department) and Medical Counselling Committee for All India Quota seats.' },
        { step: '3. Choice Filling & Locking', details: 'Students need to select their preferred MD/MS specializations and colleges, then lock their choices carefully.' },
        { step: '4. Merit List Release', details: 'A merit list is prepared based on NEET-PG rank, category, reservation policy, and eligibility.' },
        { step: '5. Seat Allotment', details: 'Seats are allotted according to merit rank, preferences, and availability in government and private medical colleges.' },
        { step: '6. Document Verification', details: 'Candidates must report to the allotted college for verification of original documents.' },
        { step: '7. Admission Confirmation', details: 'After verification, candidates must pay the admission fees to confirm their seat' }
      ]
    }
  },
  studentSupport: 'iExplain Education provides complete guidance with a student-focused approach, simplifying the complex admission process of MBBS in India with expert support.',
  hostelFacilities: 'Medical colleges are equipped with modern labs, libraries, hostels, and advanced medical equipment.',
  studentLife: 'Rajasthan offers a student-friendly environment with strong clinical exposure due to hospitals attached to medical colleges having high patient flow.',
  recognition: 'Most colleges are approved by the National Medical Commission (NMC), ensuring standard quality education and recognition across the country.',
  whyChooseUsIntro: 'Choosing the right consultancy is very important for securing admission in MBBS in Rajasthan, and iExplain Education provides complete guidance with a student-focused approach. It helps students simplify the complex admission process of MBBS in India with expert support and reliable services.',
  whyChooseUs: [
    'Expert Career Counseling: iExplain Education offers professional counselling to help students choose the best medical colleges based on their NEET score, budget, and career goals.',
    'End-to-End Admission Support: From college selection to final admission, students receive complete assistance including application filling, documentation, and counselling guidance.',
    'Personalized Guidance: The consultancy follows a student-centric approach, focusing on individual strengths, preferences, and academic profile to provide the best options.',
    'Accurate & Transparent Information: iExplain ensures students get authentic and updated information about colleges, fees, and admission processes without confusion.',
    'Documentation & Visa Support: Full assistance with documentation, application procedures, and other formalities ensures a smooth admission process.',
    'Scholarship & Financial Guidance: Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Rajasthan.'
  ],
  conclusion: 'In conclusion, pursuing MBBS in Rajasthan is a great choice for medical aspirants who are looking for quality education, affordable fee structures, and strong clinical exposure. Rajasthan has developed into a prominent medical education hub with a growing number of government and private medical colleges, providing students with multiple opportunities to secure admission based on their NEET performance. Top institutions like All India Institute of Medical Sciences Jodhpur and Sawai Man Singh Medical College offer excellent academic standards, experienced faculty, and advanced hospital facilities, ensuring students receive both theoretical knowledge and practical training. Additionally, the transparent NEET-based admission process, affordable living costs, and student-friendly environment make Rajasthan a preferred destination for medical studies. With increasing medical seats and improving infrastructure, the scope of MBBS in Rajasthan continues to grow every year.',
  faqs: [
    { question: 'What is MBBS in Rajasthan?', answer: 'MBBS in Rajasthan refers to pursuing a Bachelor of Medicine and Bachelor of Surgery degree from government or private medical colleges in the state.' },
    { question: 'Is NEET required for MBBS in Rajasthan?', answer: 'Yes, NEET-UG is mandatory for admission into all medical colleges in Rajasthan and across MBBS in India.' },
    { question: 'What is the duration of MBBS in Rajasthan?', answer: 'The course duration is 5.5 years, including 4.5 years of academic study + 1 year compulsory internship.' },
    { question: 'What are the fees for MBBS in Rajasthan?', answer: 'Government colleges: ₹20,000 – ₹1,00,000 per year Private colleges: ₹8,00,000 – ₹20,00,000 per year (approx.)' },
    { question: 'What is the eligibility for MBBS in Rajasthan?', answer: 'Students must have 10+2 with Physics, Chemistry, Biology and qualify NEET-UG with required cutoff marks.' },
    { question: 'How many seats are available for MBBS in Rajasthan?', answer: 'Rajasthan has a large number of MBBS seats in both government and private medical colleges, and the number is increasing every year.' },
    { question: 'Which are the top colleges for MBBS in Rajasthan?', answer: 'Top colleges include All India Institute of Medical Sciences Jodhpur and Sawai Man Singh Medical College.' },
    { question: 'Can I get a government seat in MBBS in Rajasthan?', answer: 'Yes, students can secure a government seat based on NEET rank through state quota or All India Quota counselling.' },
    { question: 'Is MBBS in Rajasthan good for career?', answer: 'Yes, it offers quality education, strong clinical exposure, and excellent career opportunities in the healthcare sector.' }
  ],
  internship: {
    intro: 'Internship is important during your MBBS degree. Therefore, it is crucial to know about the pattern of MBBS internship. See the given below table to gain knowledge about it.',
    headers: ['Subjects', 'Time Duration'],
    table: [
      { Subjects: 'Community Medicine', 'Time Duration': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Time Duration': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Time Duration': '2 months' },
      { Subjects: 'Pediatrics', 'Time Duration': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Time Duration': '1 month' },
      { Subjects: 'ENT', 'Time Duration': '15 days' },
      { Subjects: 'Ophthalmology', 'Time Duration': '15 days' },
      { Subjects: 'Casualty', 'Time Duration': '15 days' },
      { Subjects: 'Elective Posting', 'Time Duration': '15 days' },
      { Subjects: 'Total', 'Time Duration': '12 months' }
    ]
  }
};

const himachalPradeshMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Himachal Pradesh',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/himachal-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/himachal-medical-hero-mobile.jpg',
  intro: {
    text: `MBBS in Himachal Pradesh is an excellent option for students who want to pursue MBBS in India in a peaceful and academically focused environment. Known for its clean surroundings and quality education system, Himachal Pradesh offers a number of government and private medical colleges that are approved by the National Medical Commission (NMC), ensuring globally recognised degrees.

Admission to MBBS in Himachal Pradesh 2026 is conducted through the NEET (UG) exam, which is mandatory for MBBS admission in India. Students who qualify for NEET can participate in both All India Quota (15%) and State Quota (85%) counselling, making the process transparent and merit-based.

One of the key advantages of choosing MBBS in Himachal Pradesh is the availability of reputed government medical colleges with affordable fee structures. This makes it a great option for students looking for low-cost MBBS in India. Along with this, the state provides a calm and distraction-free environment, which is ideal for focusing on medical studies.

Himachal Pradesh also offers good clinical exposure through associated hospitals, allowing students to gain hands-on experience and practical knowledge, which is essential during MBBS in India. The course structure includes theoretical learning, clinical training, and a compulsory internship, ensuring complete medical education.

With continuous improvements in healthcare infrastructure and education quality, MBBS in Himachal Pradesh is gaining popularity among medical aspirants. After completing the course, students have various career opportunities, such as pursuing an MD/MS, working in hospitals, or entering government healthcare services.

Overall, study MBBS in Himachal Pradesh provides a strong combination of quality education, affordability, and a peaceful learning environment, making it a promising destination for MBBS in India.`
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
    'Course Duration': '5.5 Years (4.5 Years Academic + 1 Year Internship)',
    'Recognition': 'National Medical Commission (NMC)',
    'Admission Process': 'Based on NEET (UG) Exam',
    'Eligibility Criteria': '10+2 with PCB (Physics, Chemistry, Biology) + NEET Qualified',
    'Minimum Marks Required': '50% (General), 40% (Reserved), 45% (PWD)',
    'Counseling Authority': 'Atal Medical & Research University (AMRU), Himachal Pradesh',
    'Quota': '15% All India Quota & 85% State Quota',
    'Number of Medical Colleges': '7–10 Government & Private Colleges',
    'Medium of Instruction': 'English',
    'Career Opportunities': 'Doctor, MD/MS, Government Jobs, Private Practice'
  },
  benefits: {
    intro: 'Himachal Pradesh is emerging as a strong destination for MBBS aspirants because it offers a balanced combination of quality education, affordable fees, and excellent clinical exposure. The state has well-established government medical colleges where students get real hospital training along with classroom learning. Below are the detailed reasons why students prefer Himachal Pradesh for MBBS in 2026.',
    items: [
      { heading: 'Affordable Government Medical Education', details: 'Himachal Pradesh offers MBBS seats mainly in government medical colleges, where the tuition fees are much lower compared to private medical colleges in other states.' },
      { heading: 'Strong Clinical Exposure in Government Hospitals', details: 'Students get excellent hands-on experience because government hospitals in Himachal Pradesh have a good patient inflow.' },
      { heading: 'Transparent NEET-Based Admission System', details: 'Admission to all MBBS colleges is strictly based on NEET UG scores, which ensures a fair and transparent selection process without any donation issues.' },
      { heading: 'Lower Competition Compared to Metro States', details: 'Compared to states like Delhi or Maharashtra, the competition level in Himachal Pradesh is relatively balanced, giving students a better chance of admission.' },
      { heading: 'Good Patient Flow for Practical Learning', details: 'Hospitals handle a large number of patients from rural and semi-urban areas, providing students with diverse clinical cases.' },
      { heading: 'Safe, Peaceful and Study-Friendly Environment', details: 'Himachal Pradesh is known for its clean, peaceful, and pollution-free environment, creating a stress-free atmosphere for medical students.' }
    ]
  },
  SyllabusIntro: 'The MBBS syllabus in Himachal Pradesh follows the National Medical Commission (NMC) CBME curriculum, which is the same across all Indian medical colleges. The course is divided into 5.5 years (4.5 years academic + 1 year internship).',
  syllabus: {
    headers: ['Year', 'Phase', 'Subjects'],
    table: [
      { Year: '1st Year', Phase: 'Pre-Clinical', Subjects: 'Anatomy, Physiology, Biochemistry' },
      { Year: '2nd Year', Phase: 'Para-Clinical', Subjects: 'Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine (Intro)' },
      { Year: '3rd Year (Part 1)', Phase: 'Para-Clinical / Clinical Start', Subjects: 'ENT, Ophthalmology, Community Medicine (Advanced)' },
      { Year: 'Final Year (Part 2)', Phase: 'Clinical', Subjects: 'General Medicine, General Surgery, Obstetrics & Gynecology, Pediatrics, Orthopedics, Dermatology, Psychiatry' },
      { Year: 'Internship (1 Year)', Phase: 'Compulsory Rotatory Internship', Subjects: 'Medicine, Surgery, Pediatrics, Emergency, Community Medicine, Allied Departments' }
    ]
  },
  fees: {
    note: 'Himachal Pradesh is one of the emerging destinations for medical education in India, offering a mix of reputed government medical colleges and a few private institutions. Admission is strictly based on NEET UG scores.',
    sections: [
      {
        title: 'Top MBBS Colleges in Himachal Pradesh (2026)',
        headers: ['COLLEGE NAME', 'CATEGORY', 'TOTAL FEE'],
        table: [
          { 'COLLEGE NAME': 'Maharishi Markandeshwar Medical College (MMU SOLAN)', CATEGORY: 'IRDP/BPL', 'TOTAL FEE': '3,19,440/-' },
          { 'COLLEGE NAME': 'Maharishi Markandeshwar Medical College (MMU SOLAN)', CATEGORY: 'State Quota', 'TOTAL FEE': '50,82,000/-' },
          { 'COLLEGE NAME': 'Maharishi Markandeshwar Medical College (MMU SOLAN)', CATEGORY: 'Management Quota', 'TOTAL FEE': '95,83,200/-' },
          { 'COLLEGE NAME': 'Maharishi Markandeshwar Medical College (MMU SOLAN)', CATEGORY: 'NRI Quota', 'TOTAL FEE': '25,29,55/- (USD)' }
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
  scholarshipIntro: 'iExplain Education provides scholarship & financial guidance. Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Himachal Pradesh.',
  scholarships: [
    { title: 'Scholarship & Financial Guidance', details: 'Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Himachal Pradesh.' }
  ],
  eligibility: {
    headers: ['Criteria', 'Details'],
    table: [
      { Criteria: 'Entrance Exam (MBBS)', Details: 'NEET UG (mandatory)' },
      { Criteria: 'Qualification (MBBS)', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology & English' },
      { Criteria: 'Minimum Marks (MBBS)', Details: 'General: 50% • OBC/SC/ST: 40% • PwD: 45%' },
      { Criteria: 'Age Limit (MBBS)', Details: 'Minimum 17 years as on 31st December of admission year' },
      { Criteria: 'Domicile (MBBS)', Details: 'Required for State Quota seats in Himachal Pradesh' },
      { Criteria: 'Entrance Exam (MD/MS)', Details: 'NEET PG (mandatory)' },
      { Criteria: 'Qualification (MD/MS)', Details: 'MBBS degree from an NMC-recognized medical college' },
      { Criteria: 'Internship (MD/MS)', Details: '1-year compulsory rotatory internship completed' },
      { Criteria: 'Registration (MD/MS)', Details: 'Permanent/Provisional registration with NMC or State Medical Council' }
    ]
  },
  documents: [
    { document: 'NEET UG Scorecard', details: 'Mandatory for admission' },
    { document: '10th & 12th Marksheets', details: 'Proof of qualification and age' },
    { document: 'Domicile Certificate', details: 'Required for state quota seats' },
    { document: 'Category Certificate', details: 'If applicable (SC/ST/OBC)' },
    { document: 'Valid Photo ID Proof', details: 'Aadhaar Card / PAN Card' },
    { document: 'Allotment Letter', details: 'Issued after seat allocation' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Himachal Pradesh – Admission Process (2026)',
      intro: 'The admission process for MBBS in Himachal Pradesh (2026) is conducted strictly through the NEET UG examination, followed by centralized counselling.',
      steps: [
        { step: '1. NEET UG Qualification', details: 'Students must appear and qualify in the NEET UG exam conducted by NTA.' },
        { step: '2. State Counselling Registration', details: 'After NEET results, candidates must register through the official counselling authority (AMRU) portal.' },
        { step: '3. Choice Filling & Locking', details: 'Students select preferred colleges like AIIMS Bilaspur, IGMC Shimla, RPGMC Tanda, and MMU Solan.' },
        { step: '4. Merit List & Seat Allotment', details: 'State merit list is prepared based on rank and seats are allotted accordingly.' },
        { step: '5. Document Verification', details: 'Selected candidates must visit the allotted college for mandatory verification.' },
        { step: '6. Fee Payment & Admission Confirmation', details: 'Pay required fees to confirm the MBBS seat.' }
      ]
    },
    pg: {
      title: 'MD/MS in Himachal Pradesh – Admission Process (2026)',
      intro: 'The admission process for MD/MS courses is conducted through NEET PG, followed by centralised counselling managed by AMRU.',
      steps: [
        { step: '1. NEET PG Qualification', details: 'Candidates must appear and qualify in the NEET PG exam conducted by NBE.' },
        { step: '2. Registration for Counselling', details: 'Register for Himachal Pradesh State PG Counselling (AMRU) or AIQ Counselling (MCC).' },
        { step: '3. Choice Filling & Locking', details: 'Select preferred MD/MS specializations and colleges then lock the choices.' },
        { step: '4. Merit List & Seat Allotment', details: 'Seats are allotted in multiple rounds based on NEET PG rank and category.' },
        { step: '5. Document Verification', details: 'Report to the allotted college with original documents.' },
        { step: '6. Fee Payment & Admission Confirmation', details: 'Pay the tuition fee to finalize the PG admission.' }
      ]
    }
  },
  studentSupport: 'iExplain Education simplifies the complex admission process and provides transparent, reliable, and personalized support.',
  hostelFacilities: 'Medical colleges provide hostel facilities along with associated hospitals for clinical exposure.',
  studentLife: 'Himachal Pradesh offers a calm, safe, and distraction-free environment ideal for medical studies.',
  recognition: 'Degrees are globally recognised and colleges are approved by the National Medical Commission (NMC).',
  whyChooseUsIntro: 'iExplain Education is a student-focused consultancy that helps aspirants get accurate guidance and complete counselling assistance for MBBS in Himachal Pradesh.',
  whyChooseUs: [
    'Personalized Counselling Based on NEET Score: Analysis of rank to provide customized college options like IGMC Shimla or AIIMS Bilaspur.',
    'Complete Admission Guidance: Step-by-step support from registration to final admission.',
    'Updated & Accurate Information: Latest data on cutoffs, eligibility, fees, and seat matrix.',
    'College Selection Support: Based on rank, budget, and preference of government or private colleges.',
    'Documentation & Application Assistance: Support in preparing and verifying certificates to avoid rejection.',
    'Transparent & Student-Centric Approach: Realistic admission chances and correct counselling strategy.'
  ],
  conclusion: 'Choosing iExplain Education for MBBS in Himachal Pradesh 2026 is a smart decision for NEET aspirants who want proper guidance and stress-free admission assistance. The process, based on NEET UG score and AMRU counselling, can be complex, but iExplain helps students navigate every step from registration to final admission in top colleges like AIIMS Bilaspur and IGMC Shimla. With expert support, students get personalised predictions and documentation help, ensuring a smooth and result-orientated journey toward a successful medical career.',
  faqs: [
    { question: 'What is the eligibility for MBBS in Himachal Pradesh?', answer: 'Students must qualify NEET UG 2026, pass 10+2 with PCB, and meet minimum percentage criteria. Domicile is required for state quota.' },
    { question: 'Which are the top MBBS colleges in Himachal Pradesh?', answer: 'Top colleges include AIIMS Bilaspur, IGMC Shimla, RPGMC Tanda, Dr. Y.S. Parmar Nahan, and MMU Solan.' },
    { question: 'Is MBBS admission in Himachal Pradesh only through NEET?', answer: 'Yes, admission to all MBBS colleges in Himachal Pradesh is strictly based on NEET UG score.' },
    { question: 'What is the counselling process for MBBS in Himachal Pradesh?', answer: 'Counselling is conducted by AMRU for state quota and MCC for All India Quota, including registration, choice filling, and allotment.' },
    { question: 'Is domicile required for MBBS in Himachal Pradesh?', answer: 'Yes, a domicile certificate is required to apply for state quota seats in government medical colleges.' },
    { question: 'What documents are required for MBBS admission?', answer: 'Documents include NEET scorecard, 10th & 12th marksheets, domicile certificate, category certificate, ID proof, and allotment letter.' },
    { question: 'Is Himachal Pradesh good for MBBS?', answer: 'Yes, it offers affordable education, good patient exposure, reputed government colleges, and a peaceful environment.' }
  ],
  internship: {
    intro: 'Internship is important during your MBBS degree. Therefore, it is crucial to know about the pattern of MBBS internship. See the table given below to gain knowledge about it.',
    headers: ['Subjects', 'Time Duration'],
    table: [
      { Subjects: 'Community Medicine', 'Time Duration': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Time Duration': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Time Duration': '2 months' },
      { Subjects: 'Pediatrics', 'Time Duration': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Time Duration': '1 month' },
      { Subjects: 'ENT', 'Time Duration': '15 days' },
      { Subjects: 'Ophthalmology', 'Time Duration': '15 days' },
      { Subjects: 'Casualty', 'Time Duration': '15 days' },
      { Subjects: 'Elective Posting', 'Time Duration': '15 days' },
      { Subjects: 'Total', 'Time Duration': '12 months' }
    ]
  }
};

const maharashtraMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Maharashtra',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/maharashtra-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/maharashtra-medical-hero-mobile.jpg',
  intro: {
    text: `MBBS in Maharashtra is one of the most sought-after choices among medical aspirants in India because the state offers a perfect combination of high-quality medical education, world-class hospitals, experienced faculty, and excellent clinical exposure. Maharashtra has a large number of reputed government and private medical colleges that provide strong academic training along with practical hospital experience. Students get exposure to a wide variety of patients due to high footfall in government hospitals, which significantly improves their clinical knowledge and confidence.

The state is home to some of the top medical institutions in India such as Grant Medical College Mumbai, Seth GS Medical College Mumbai, BJ Medical College Pune, Government Medical College Nagpur, AIIMS Nagpur, and Dr. D. Y. Patil Medical College, Hospital & Research Centre (Mumbai/Pune). These colleges are known for their advanced infrastructure, modern laboratories, experienced doctors, and strong academic environment. Especially institutes like D. Y. Patil Medical College Mumbai/Pune are well-known for premium facilities, international exposure, and advanced medical training in private sector education.

Admission to MBBS in Maharashtra 2026 is strictly based on the NEET UG examination, followed by centralized counselling conducted by the State CET Cell Maharashtra for state quota seats and the Medical Counselling Committee (MCC) for All India Quota seats. The admission process includes registration, document verification, choice filling, merit list preparation, and seat allotment, ensuring a transparent and merit-based system without any donation-based admission in government colleges.

Maharashtra provides excellent opportunities for students who want to pursue MBBS in India, whether in government medical colleges with affordable fees or in private medical colleges with modern infrastructure. Government colleges offer low-cost education with strong clinical exposure, while private colleges like D. Y. Patil Medical College (Mumbai/Pune) provide advanced facilities, better hostel infrastructure, and global-level exposure. This balance makes Maharashtra a strong destination for medical education.

Overall, choosing MBBS in Maharashtra 2026 is a great option for students who are looking for top medical colleges in India, NEET UG based admission process, MBBS admission in Maharashtra, government and private MBBS colleges, Maharashtra NEET counselling, clinical exposure, and strong career opportunities in the medical field.`
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
    'Admission Process': 'NEET UG based',
    'Counselling Authority': 'State CET Cell Maharashtra (State Quota) + MCC (AIQ)',
    'Course Duration': '5.5 Years (4.5 years academic + 1 year internship)',
    'Eligibility': '10+2 with PCB + NEET UG qualification',
    'Minimum Marks': 'General: 50% • OBC/SC/ST: 40% • PwD: 45%',
    'Age Limit': 'Minimum 17 years',
    'Top Private Colleges': 'D. Y. Patil Medical College (Mumbai/Pune), Bharati Vidyapeeth Medical College Pune, KIMS Karad',
    'Clinical Exposure': 'High patient inflow',
    'Internship': '1 year compulsory rotatory internship',
    'Seat Type': 'Government quota + All India Quota + Private management seats'
  },
  benefits: {
    intro: 'Maharashtra is one of the most preferred destinations for MBBS in India because it offers a perfect combination of top-ranked government medical colleges, advanced private universities, strong clinical exposure, and high patient inflow in hospitals. Below are the detailed reasons why students prefer Maharashtra for MBBS in 2026.',
    items: [
      { heading: 'Top Government Medical Colleges in India', details: 'Maharashtra has some of the best medical colleges like Grant Medical College Mumbai, Seth GS Medical College (KEM), BJ Medical College Pune, and Government Medical College Nagpur.' },
      { heading: 'Strong Clinical Exposure', details: 'Students get exposure to a large number of patients in government hospitals like KEM Hospital and JJ Hospital, helping in developing diagnostic skills.' },
      { heading: 'Presence of AIIMS Nagpur', details: 'AIIMS Nagpur adds extra value with modern infrastructure, advanced research facilities, and high-quality teaching standards.' },
      { heading: 'Wide Range of Private Medical Colleges', details: 'Reputed private colleges like D. Y. Patil and Bharati Vidyapeeth offer modern infrastructure and advanced learning facilities.' },
      { heading: 'Transparent NEET-Based Admission Process', details: 'Admission is completely based on NEET UG 2026, ensuring a fair selection system through State CET Cell and MCC counselling.' },
      { heading: 'Better Internship & Career Opportunities', details: 'Due to high patient load and reputed hospitals, students get better internship experience and improved career opportunities.' },
      { heading: 'Advanced Healthcare Infrastructure', details: 'Maharashtra has multi-speciality hospitals, advanced diagnostic centres, and research facilities.' },
      { heading: 'High Competition but High Value', details: 'Although competition is very high, MBBS from Maharashtra is highly valuable due to the quality of education and training.' }
    ]
  },
  SyllabusIntro: 'MBBS in Maharashtra follows the National Medical Commission (NMC) Competency-Based Medical Education (CBME) curriculum. The syllabus is divided into 5.5 years (4.5 years academic + 1 year internship).',
  syllabus: {
    headers: ['Year', 'Phase', 'Subjects'],
    table: [
      { Year: '1st Year', Phase: 'Pre-Clinical', Subjects: 'Anatomy, Physiology, Biochemistry' },
      { Year: '2nd Year', Phase: 'Para-Clinical', Subjects: 'Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine (Intro)' },
      { Year: '3rd Year (Part 1)', Phase: 'Para-Clinical/Clinical Start', Subjects: 'ENT, Ophthalmology, Community Medicine (Advanced)' },
      { Year: 'Final Year (Part 2)', Phase: 'Clinical', Subjects: 'General Medicine, General Surgery, Obstetrics & Gynaecology, Pediatrics, Orthopedics, Dermatology, Psychiatry' },
      { Year: 'Internship (1 Year)', Phase: 'Rotatory Internship', Subjects: 'Medicine, Surgery, Pediatrics, Emergency, Community Medicine, Allied Departments' }
    ]
  },
  fees: {
    note: 'Maharashtra is home to some of the best government, private, and deemed medical colleges in India. The state has a mix of highly ranked government colleges and premium private institutions.',
    sections: [
      {
        title: 'Top MBBS Colleges in Maharashtra (2026)',
        headers: ['College Name', 'Established', 'Location', 'Tuition Fees (INR per annum)'],
        table: [
          { 'College Name': 'Mahatma Gandhi Mission Medical College, Aurangabad', Established: '1989', Location: 'Aurangabad', 'Tuition Fees (INR per annum)': '21,00,000' },
          { 'College Name': 'Mahatma Gandhi Mission Medical College, Navi Mumbai', Established: '1989', Location: 'Navi Mumbai', 'Tuition Fees (INR per annum)': '21,00,000' },
          { 'College Name': 'Mahatma Gandhi Mission Medical College, Vashi', Established: '2023', Location: 'Vashi', 'Tuition Fees (INR per annum)': '21,00,000' },
          { 'College Name': 'Dr. D.Y. Patil Medical College, Navi Mumbai', Established: '1989', Location: 'Navi Mumbai', 'Tuition Fees (INR per annum)': '26,00,000' },
          { 'College Name': 'Dr. D.Y. Patil Medical College, Kolhapur', Established: '1989', Location: 'Kolhapur', 'Tuition Fees (INR per annum)': '23,10,000' },
          { 'College Name': 'Dr. D.Y. Patil Medical College, Pune', Established: '1995', Location: 'Pune', 'Tuition Fees (INR per annum)': '27,82,000' },
          { 'College Name': 'Bharati Vidyapeeth Medical College, Pune', Established: '1989', Location: 'Pune', 'Tuition Fees (INR per annum)': '25,30,000' },
          { 'College Name': 'Bharati Vidyapeeth Medical College, Sangli', Established: '2005', Location: 'Sangli', 'Tuition Fees (INR per annum)': '24,29,000' },
          { 'College Name': 'Pravara Institute of Medical Sciences, Loni', Established: '1984', Location: 'Loni', 'Tuition Fees (INR per annum)': '17,50,000' },
          { 'College Name': 'Symbiosis Medical College for Women, Pune', Established: '2020', Location: 'Pune', 'Tuition Fees (INR per annum)': '11,00,000' },
          { 'College Name': 'Jawaharlal Nehru Medical College, Wardha', Established: '1990', Location: 'Wardha', 'Tuition Fees (INR per annum)': '22,25,000' },
          { 'College Name': 'Datta Meghe Institute of Medical Sciences, Nagpur', Established: '2020', Location: 'Nagpur', 'Tuition Fees (INR per annum)': '22,25,000' },
          { 'College Name': 'Krishna Institute of Medical Sciences, Karad', Established: '1984', Location: 'Karad', 'Tuition Fees (INR per annum)': '23,00,000' }
        ]
      },
      {
        title: 'MAHARASHTRA NEET UG CUTOFF 2025',
        headers: ['College Name', '1st Round', '2nd Round', '3rd Round', 'Stray Vacancy'],
        table: [
          { 'College Name': 'ACPM Medical College, Dhule', '1st Round': 'OPEN-66310 / IQ-256805', '2nd Round': 'OPEN-75269 / IQ-459446', '3rd Round': 'OPEN-77308 / IQ-553966', 'Stray Vacancy': 'OPEN-77308 / IQ-645239' },
          { 'College Name': 'Ashwini Rural Medical College, Solapur', '1st Round': 'OPEN-63166 / IQ-436127', '2nd Round': 'OPEN-66776 / IQ-626261', '3rd Round': 'OPEN-68232 / IQ-634272', 'Stray Vacancy': 'OPEN-83935 / IQ-888395' },
          { 'College Name': 'B.K.L. Walawalkar Rural MC, Ratnagiri', '1st Round': 'OPEN-71521 / IQ-488421', '2nd Round': 'OPEN-75903 / IQ-649852', '3rd Round': 'OPEN-77005 / IQ-812014', 'Stray Vacancy': 'OPEN-76628 / IQ-958190' },
          { 'College Name': 'Bharatratna Atal Bihari Vajpayee MC, Pune', '1st Round': 'OPEN-39248 / IQ-88423', '2nd Round': 'OPEN-42942 / IQ-96111', '3rd Round': 'OPEN-42942 / IQ-98159', 'Stray Vacancy': 'OPEN-42942 / IQ-98159' },
          { 'College Name': 'Dr. N Y Tasgaonkar Inst. Karjat', '1st Round': 'OPEN-73915 / IQ-131434', '2nd Round': 'OPEN-81028 / IQ-179078', '3rd Round': 'OPEN-81323 / IQ-235826', 'Stray Vacancy': 'OPEN-86177 / IQ-457642' },
          { 'College Name': 'Dr. Panjabrao Deshmukh MC, Amravati', '1st Round': 'OPEN-67053 / IQ-445991', '2nd Round': 'OPEN-67053 / IQ-576967', '3rd Round': 'OPEN-74301 / IQ-767156', 'Stray Vacancy': 'OPEN-74301 / IQ-907719' },
          { 'College Name': 'Dr. Rajendra Gode MC, Amravati', '1st Round': 'OPEN-72712 / IQ-267715', '2nd Round': 'OPEN-77308 / IQ-417665', '3rd Round': 'OPEN-78561 / IQ-322323', 'Stray Vacancy': 'OPEN-78561 / IQ-751059' },
          { 'College Name': 'Dr. Ulhas Patil MC, Jalgaon', '1st Round': 'OPEN-56862 / IQ-202301', '2nd Round': 'OPEN-66610 / IQ-341271', '3rd Round': 'OPEN-74432 / IQ-488804', 'Stray Vacancy': 'OPEN-74432 / IQ-476086' },
          { 'College Name': 'Dr. Vasantrao Pawar MC, Nasik', '1st Round': 'OPEN-55545 / IQ-385776', '2nd Round': 'OPEN-61312 / IQ-614236', '3rd Round': 'OPEN-65979 / IQ-722387', 'Stray Vacancy': 'OPEN-73130 / IQ-935629' },
          { 'College Name': 'Dr. Vithalrao Vikhe Patil MC, Ahmednagar', '1st Round': 'OPEN-67260 / IQ-460944', '2nd Round': 'OPEN-69357 / IQ-665434', '3rd Round': 'OPEN-70636 / IQ-839020', 'Stray Vacancy': 'OPEN-78560 / IQ-906191' },
          { 'College Name': 'KJ Somaiya Medical College, Mumbai', '1st Round': 'OPEN-33910 / IQ-105505', '2nd Round': 'OPEN-37943 / IQ-150252', '3rd Round': 'OPEN-38067 / IQ-175296', 'Stray Vacancy': 'OPEN-37892 / IQ-472810' },
          { 'College Name': 'MIMSR, Latur', '1st Round': 'OPEN-61558 / IQ-415311', '2nd Round': 'OPEN-63166 / IQ-640798', '3rd Round': 'OPEN-62514 / IQ-747557', 'Stray Vacancy': 'OPEN-62514 / IQ-748372' },
          { 'College Name': 'MIMER, Pune', '1st Round': 'OPEN-56549 / IQ-377525', '2nd Round': 'OPEN-58822 / IQ-537550', '3rd Round': 'OPEN-59294 / IQ-759765', 'Stray Vacancy': 'OPEN-59294 / IQ-861072' },
          { 'College Name': 'N. K. P. Salve Instt, Nagpur', '1st Round': 'OPEN-65979 / IQ-490116', '2nd Round': 'OPEN-72426 / IQ-677748', '3rd Round': 'OPEN-73937 / IQ-772446', 'Stray Vacancy': 'OPEN-73937 / IQ-858711' },
          { 'College Name': 'Parbhani Medical College, Parbhani', '1st Round': 'OPEN-77405 / IQ-277153', '2nd Round': 'OPEN-80872 / IQ-438512', '3rd Round': 'OPEN-82562 / IQ-427517', 'Stray Vacancy': 'OPEN-82562 / IQ-962869' },
          { 'College Name': 'Prakash Institute, Sangli', '1st Round': 'OPEN-74475 / IQ-337539', '2nd Round': 'OPEN-78899 / IQ-587939', '3rd Round': 'OPEN-81060 / IQ-742339', 'Stray Vacancy': 'OPEN-85756 / IQ-918353' },
          { 'College Name': 'SMBT Institute, Nashik', '1st Round': 'OPEN-70436 / IQ-416425', '2nd Round': 'OPEN-74618 / IQ-600577', '3rd Round': 'OPEN-75719 / IQ-684049', 'Stray Vacancy': 'OPEN-75719 / IQ-990739' },
          { 'College Name': 'SSPM Medical College, Sindhudurg', '1st Round': 'OPEN-78989 / IQ-284879', '2nd Round': 'OPEN-82765 / IQ-391228', '3rd Round': 'OPEN-85435 / IQ-406674', 'Stray Vacancy': 'OPEN-87870 / IQ-927608' },
          { 'College Name': 'Kashibai Navale MC, Pune', '1st Round': 'OPEN-50779 / IQ-338855', '2nd Round': 'OPEN-52080 / IQ-559032', '3rd Round': 'OPEN-53358 / IQ-684049', 'Stray Vacancy': 'OPEN-53358 / IQ-766511' },
          { 'College Name': 'Terna Medical College, Navi Mumbai', '1st Round': 'OPEN-48390 / IQ-153528', '2nd Round': 'OPEN-52310 / IQ-279871', '3rd Round': 'OPEN-52923 / IQ-574988', 'Stray Vacancy': 'OPEN-52898 / IQ-771791' },
          { 'College Name': 'Vedantaa Inst, Palghar', '1st Round': 'OPEN-95521 / IQ-511395', '2nd Round': 'OPEN-116571 / IQ-676092', '3rd Round': 'OPEN-133806 / IQ-882897', 'Stray Vacancy': 'OPEN-145697 / IQ-1046792' },
          { 'College Name': 'Shri Ramchandra Inst, Aurangabad', '1st Round': 'OPEN-48868 / IQ-114945', '2nd Round': 'OPEN-61617 / IQ-367333', '3rd Round': 'OPEN-60992 / IQ-441529', 'Stray Vacancy': 'OPEN-67543 / IQ-577709' }
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
  scholarshipIntro: 'iExplain Education provides scholarship & financial guidance. Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Maharashtra.',
  scholarships: [
    { title: 'Scholarship & Financial Guidance', details: 'Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Maharashtra.' }
  ],
  eligibility: {
    headers: ['Criteria', 'Details'],
    table: [
      { Criteria: 'Entrance Exam (MBBS)', Details: 'NEET UG 2026 (mandatory)' },
      { Criteria: 'Qualification (MBBS)', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology & English' },
      { Criteria: 'Minimum Marks (MBBS)', Details: 'General: 50% • OBC/SC/ST: 40% • PwD: 45%' },
      { Criteria: 'Age Limit (MBBS)', Details: 'Minimum 17 years as on 31st December of admission year' },
      { Criteria: 'Domicile (MBBS)', Details: 'Required for Maharashtra state quota seats' },
      { Criteria: 'Entrance Exam (MD/MS)', Details: 'NEET PG 2026 (mandatory)' },
      { Criteria: 'Qualification (MD/MS)', Details: 'MBBS degree from NMC-recognized medical college' },
      { Criteria: 'Internship (MD/MS)', Details: '1-year compulsory rotatory internship completed' },
      { Criteria: 'Registration (MD/MS)', Details: 'Permanent/Provisional registration with NMC or State Medical Council' }
    ]
  },
  documents: [
    { document: 'NEET Scorecard', details: 'Mandatory for admission' },
    { document: 'NEET Admit Card', details: 'Required during counselling' },
    { document: '10th & 12th Marksheets', details: 'Proof of qualification and age' },
    { document: 'Domicile Certificate', details: 'Required for Maharashtra state quota seats' },
    { document: 'Category Certificate', details: 'If applicable (SC/ST/OBC/EWS)' },
    { document: 'Valid Photo ID Proof', details: 'Aadhaar Card / PAN Card' },
    { document: 'Allotment Letter', details: 'Issued after seat allocation' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Maharashtra – Admission Process (2026)',
      intro: 'The admission process for MBBS in Maharashtra is completely based on NEET UG 2026, conducted through centralized counselling.',
      steps: [
        { step: '1. NEET UG Qualification', details: 'Students must appear and qualify in NEET UG 2026.' },
        { step: '2. Counselling Registration', details: 'Register on State CET Cell Maharashtra (State Quota) or MCC (All India Quota).' },
        { step: '3. Choice Filling & Locking', details: 'Select preferred colleges like Grant MC, Seth GS, BJMC Pune, or D. Y. Patil and lock them carefully.' },
        { step: '4. Merit List & Seat Allotment', details: 'Seats are allotted in multiple rounds (Round 1, 2, Mop-up, Stray) based on rank.' },
        { step: '5. Document Verification', details: 'Selected candidates must report to the allotted college for verification.' },
        { step: '6. Fee Payment & Admission Confirmation', details: 'Pay the required fees to confirm the MBBS seat.' }
      ]
    },
    pg: {
      title: 'MD/MS in Maharashtra – Admission Process (2026)',
      intro: 'The admission process for MD/MS courses is conducted through NEET PG 2026, followed by centralized counselling.',
      steps: [
        { step: '1. NEET PG Qualification', details: 'Candidates must qualify the NEET PG 2026 exam conducted by NBE.' },
        { step: '2. Counselling Registration', details: 'Register on State CET Cell Maharashtra portal or MCC portal.' },
        { step: '3. Choice Filling & Locking', details: 'Select preferred MD/MS branches (Medicine, Surgery, etc.) and colleges.' },
        { step: '4. Merit List & Seat Allotment', details: 'Seats are allotted in multiple rounds based on NEET PG rank and category.' },
        { step: '5. Document Verification', details: 'Report to the allotted college for verification and admission confirmation.' },
        { step: '6. Fee Payment & Admission Confirmation', details: 'Pay the required tuition fees to confirm your PG seat.' }
      ]
    }
  },
  studentSupport: 'iExplain Education simplifies the entire admission journey—from NEET counselling registration to final admission confirmation.',
  hostelFacilities: 'Maharashtra private colleges like D. Y. Patil provide advanced facilities and better hostel infrastructure.',
  studentLife: 'Maharashtra offers a student-friendly environment with one of the best healthcare systems in India.',
  recognition: 'Degrees are globally recognised and colleges are approved by the National Medical Commission (NMC).',
  whyChooseUsIntro: 'iExplain Education is a trusted medical admission counselling platform that helps NEET aspirants secure MBBS seats in Maharashtra.',
  whyChooseUs: [
    'Personalized NEET-Based Counselling: One-to-one guidance based on rank, category, and budget.',
    'Complete Admission Guidance: End-to-end support through registration and seat allotment.',
    'Expert College Selection Strategy: Smart choice filling to increase admission chances in top government colleges.',
    'Updated & Accurate Information: Latest updates on counselling dates, cutoffs, and seat matrix.',
    'Documentation Assistance: Help in verifying marksheets, domicile, and category certificates.',
    'Better Chances of Seat Allotment: Strategic guidance to improve outcomes in state and AIQ rounds.'
  ],
  conclusion: 'Choosing iExplain Education for MBBS in Maharashtra 2026 is highly beneficial for NEET aspirants who want proper counselling guidance. The admission system, based on NEET UG score and State CET Cell counselling, can be complex, especially for top colleges like Grant Medical College and KEM. iExplain Education helps students with personalized counselling, smart choice filling, and documentation support, ensuring they do not miss any important step. It acts as a reliable support system, making the entire journey simple, transparent, and result-oriented.',
  faqs: [
    { question: 'What is the eligibility for MBBS in Maharashtra?', answer: 'Students must qualify NEET UG 2026, pass 10+2 with PCB, and secure minimum marks. Domicile is required for state quota.' },
    { question: 'Which are the top MBBS colleges in Maharashtra?', answer: 'Top colleges include Grant Medical College, Seth GS (KEM), BJ Medical College, AIIMS Nagpur, and D. Y. Patil Medical College.' },
    { question: 'Is MBBS admission in Maharashtra only through NEET?', answer: 'Yes, admission is strictly based on NEET UG score. No other exam is accepted.' },
    { question: 'Who conducts MBBS counselling in Maharashtra?', answer: 'Counselling is conducted by State CET Cell Maharashtra (state quota) and MCC (All India Quota).' },
    { question: 'Is Maharashtra good for MBBS?', answer: 'Yes, it is one of the best states due to top colleges, high patient exposure, and strong medical infrastructure.' },
    { question: 'What documents are required for MBBS admission?', answer: 'Documents include NEET scorecard, admit card, 10th & 12th marksheets, domicile certificate, and allotment letter.' },
    { question: 'What is the duration of MBBS in Maharashtra?', answer: 'The duration is 5.5 years (4.5 years academic + 1 year internship).' },
    { question: 'Why choose iExplain Education for MBBS in Maharashtra?', answer: 'iExplain provides complete counselling support, NEET-based guidance, and choice-filling strategy for smooth admission.' }
  ],
  internship: {
    intro: 'Internship is important during your MBBS degree. Therefore, it is crucial to know about the pattern of MBBS internship. See the table given below to gain knowledge about it.',
    headers: ['Subjects', 'Time Duration'],
    table: [
      { Subjects: 'Community Medicine', 'Time Duration': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Time Duration': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Time Duration': '2 months' },
      { Subjects: 'Pediatrics', 'Time Duration': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Time Duration': '1 month' },
      { Subjects: 'ENT', 'Time Duration': '15 days' },
      { Subjects: 'Ophthalmology', 'Time Duration': '15 days' },
      { Subjects: 'Casualty', 'Time Duration': '15 days' },
      { Subjects: 'Elective Posting', 'Time Duration': '15 days' },
      { Subjects: 'Total', 'Time Duration': '12 months' }
    ]
  }
};

const karnatakaMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Karnataka',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/karnataka-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/karnataka-medical-hero-mobile.jpg',
  intro: {
    text: `MBBS in Karnataka is one of the most preferred choices among medical aspirants who wish to pursue MBBS in India due to the state’s excellent medical education system, advanced healthcare infrastructure, and high-quality clinical training. Karnataka is widely known as the “Medical Education Hub of India” because it hosts some of the top-ranked government and private medical colleges that attract students from all over the country.

The state offers a strong foundation for students planning to study MBBS in India, with renowned institutions such as Bangalore Medical College & Research Institute (BMCRI), St. John’s Medical College, Kasturba Medical College (Manipal), and many other prestigious colleges providing world-class education and practical exposure. These colleges are well-connected with multi-specialty hospitals, ensuring students receive hands-on clinical training from the early years of the course.

For the academic year 2026, admission to MBBS in Karnataka is strictly based on the NEET-UG examination, and the counselling process is conducted by the Karnataka Examinations Authority (KEA). Students from across India are eligible to apply under various quotas such as state quota, management quota, and NRI quota, making Karnataka an open and competitive destination for medical education in India.

One of the key advantages of pursuing MBBS in India, especially in Karnataka, is the availability of a large number of seats compared to many other states. Karnataka offers thousands of MBBS seats every year in both government and private colleges, giving students better chances of admission based on their NEET scores. Additionally, the state is known for relatively better affordability in private medical colleges compared to other major states.

Overall, Karnataka provides excellent academic guidance, modern laboratories, research opportunities, and exposure to a diverse patient flow, which helps students build strong clinical skills. The presence of advanced hospitals and experienced faculty further enhances the overall learning experience for students pursuing MBBS in India.`
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
    'Admission Process': 'Based on NEET-UG 2026 Score',
    'Counselling Authority': 'Karnataka Examinations Authority (KEA)',
    'Eligibility': '10+2 with PCB (Physics, Chemistry, Biology) + NEET Qualification',
    'Minimum Age': '17 years (as on 31st December 2026)',
    'Types of Colleges': 'Government, Private, Deemed Universities',
    'Popular Colleges': 'BMCRI Bangalore, St. John’s Medical College, KMC Manipal',
    'Admission Quotas': 'State Quota, All India Quota (AIQ), Management, NRI',
    'Course Duration': '4.5 years + 1 year Internship',
    'Internship': 'Mandatory Rotatory Internship in hospitals',
    'Recognition': 'NMC (National Medical Commission) approved',
    'Language of Instruction': 'English'
  },
  benefits: {
    intro: 'Choosing Karnataka for MBBS in 2026 is one of the best decisions for students who want to pursue MBBS in India, as the state offers a perfect combination of quality education, advanced medical infrastructure, and excellent clinical exposure.',
    items: [
      { heading: 'Top-Ranked Medical Colleges', details: 'Home to some of the best colleges in India such as BMCRI Bangalore, St. John’s Medical College, and KMC Manipal.' },
      { heading: 'Strong Clinical Exposure', details: 'High patient inflow in hospitals helps students develop strong practical and diagnostic skills.' },
      { heading: 'Quality Education System', details: 'Follows the National Medical Commission (NMC) curriculum with research-oriented learning.' },
      { heading: 'Affordable Government Colleges', details: 'Government medical colleges offer MBBS at relatively low fees, making it cost-effective.' },
      { heading: 'Wide Range of Colleges', details: 'Mix of government, private, and deemed universities provides multiple options for all ranks.' },
      { heading: 'Advanced Infrastructure', details: 'Equipped with modern laboratories, simulation centers, and well-developed teaching hospitals.' },
      { heading: 'High Success Rate in PG Exams', details: 'Graduates perform exceptionally well in NEET-PG and other competitive exams.' }
    ]
  },
  SyllabusIntro: 'The MBBS in Karnataka syllabus is structured as per the guidelines of the National Medical Commission (NMC) and is followed uniformly across India. It focuses on theoretical knowledge, practical skills, clinical exposure, and internship training.',
  syllabus: {
    headers: ['Phase / Year', 'Subjects'],
    table: [
      { 'Phase / Year': 'Phase I (1st Year)', Subjects: 'Anatomy, Physiology, Biochemistry' },
      { 'Phase / Year': 'Phase II (2nd Year)', Subjects: 'Pathology, Pharmacology, Microbiology' },
      { 'Phase / Year': 'Phase III (Part 1 – 3rd Year)', Subjects: 'Forensic Medicine, Community Medicine, Ophthalmology, ENT' },
      { 'Phase / Year': 'Phase III (Part 2 – Final Year)', Subjects: 'Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics' },
      { 'Phase / Year': 'Internship (1 Year)', Subjects: 'Rotatory Clinical Internship' }
    ]
  },
  fees: {
    note: 'Karnataka is home to some of the best medical colleges in India, offering excellent academic training and advanced hospital exposure. Admission to these colleges is based on NEET-UG 2026 scores.',
    sections: [
      {
        title: 'Top MBBS Colleges in Karnataka (2026)',
        headers: ['College Name', 'Pvt Fees', 'Other Fees', 'NRI Fees'],
        table: [
          { 'College Name': 'Dr. B.R. Ambedkar Medical College, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '35,11,950', 'NRI Fees': '35,11,950' },
          { 'College Name': 'Kempegowda Institute of Medical Sciences, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '43,11,950', 'NRI Fees': '43,11,950' },
          { 'College Name': 'M.V.J. Medical College and Research Hospital, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '40,11,950', 'NRI Fees': '40,11,950' },
          { 'College Name': 'Vydehi Institute of Medical Science, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '44,11,950', 'NRI Fees': '44,11,950' },
          { 'College Name': 'A.J. Institute of Medical Sciences, Mangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '40,11,950', 'NRI Fees': '40,11,950' },
          { 'College Name': 'St John’s Medical College, Bangalore', 'Pvt Fees': '8,11,285', 'Other Fees': '–', 'NRI Fees': '–' },
          { 'College Name': 'Sri Basaveshwara Medical College, Chitradurga', 'Pvt Fees': '12,00,117', 'Other Fees': '35,11,950', 'NRI Fees': '35,11,950' },
          { 'College Name': 'Al-Ameen Medical College, Bijapur', 'Pvt Fees': '12,00,117', 'Other Fees': '27,11,950', 'NRI Fees': '27,11,950' },
          { 'College Name': 'S. Nijalingappa Medical College, Bagalkot', 'Pvt Fees': '12,00,117', 'Other Fees': '40,11,950', 'NRI Fees': '40,11,950' },
          { 'College Name': 'Mahadevappa Rampure Medical College, Gulbarga', 'Pvt Fees': '12,00,117', 'Other Fees': '39,11,950', 'NRI Fees': '39,11,950' },
          { 'College Name': 'Navodaya Medical College, Raichur', 'Pvt Fees': '12,00,117', 'Other Fees': '27,36,950', 'NRI Fees': '27,36,950' },
          { 'College Name': 'Father Muller Institute, Mangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '35,11,950', 'NRI Fees': '35,11,950' },
          { 'College Name': 'K.Venkataramana Gowda Medical College, Mangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '35,12,650', 'NRI Fees': '35,12,650' },
          { 'College Name': 'JJM Medical College, Davangere', 'Pvt Fees': '12,00,117', 'Other Fees': '39,11,950', 'NRI Fees': '39,11,950' },
          { 'College Name': 'SSIMS, Davangere', 'Pvt Fees': '12,00,117', 'Other Fees': '36,11,950', 'NRI Fees': '36,11,950' },
          { 'College Name': 'Srinivasa Institute, Mangalore', 'Pvt Fees': '22,25,000', 'Other Fees': '28,25,000', 'NRI Fees': '28,25,000' },
          { 'College Name': 'Subbaiah Institute, Shimoga', 'Pvt Fees': '12,00,117', 'Other Fees': '29,11,950', 'NRI Fees': '29,11,950' },
          { 'College Name': 'BGS Global Institute, Bangalore', 'Pvt Fees': '22,15,000', 'Other Fees': '35,15,000', 'NRI Fees': '35,15,000' },
          { 'College Name': 'Shridevi Institute, Tumkur', 'Pvt Fees': '12,00,117', 'Other Fees': '38,61,950', 'NRI Fees': '38,61,950' },
          { 'College Name': 'The Oxford Medical College, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '36,11,950', 'NRI Fees': '36,11,950' },
          { 'College Name': 'Akash Institute, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '36,11,950', 'NRI Fees': '36,11,950' },
          { 'College Name': 'Kanachur Institute, Mangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '32,11,950', 'NRI Fees': '32,11,950' },
          { 'College Name': 'East Point College, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '36,11,950', 'NRI Fees': '36,11,950' },
          { 'College Name': 'Siddaganga Medical College, Tumakuru', 'Pvt Fees': '12,00,117', 'Other Fees': '28,61,950', 'NRI Fees': '28,61,950' },
          { 'College Name': 'Sri Chamundeshwari Medical College, Mysore', 'Pvt Fees': '12,00,117', 'Other Fees': '30,01,950', 'NRI Fees': '30,01,950' },
          { 'College Name': 'S.R.Patil Medical College, Bagalkot', 'Pvt Fees': '12,00,117', 'Other Fees': '30,11,950', 'NRI Fees': '30,11,950' },
          { 'College Name': 'M.S. Ramaiah Medical College, Bangalore', 'Pvt Fees': '25,15,000', 'Other Fees': '45,15,000', 'NRI Fees': '45,15,000' },
          { 'College Name': 'Khaja Bande Navaz Institute, Gulbarga', 'Pvt Fees': '16,29,965', 'Other Fees': '32,15,000', 'NRI Fees': '32,15,000' },
          { 'College Name': 'Adichunchanagiri Institute, Mandya', 'Pvt Fees': '22,15,000', 'Other Fees': '34,15,000', 'NRI Fees': '34,15,000' },
          { 'College Name': 'SDM College Of Medical Sciences, Dharwad', 'Pvt Fees': '20,15,000', 'Other Fees': '35,15,000', 'NRI Fees': '35,15,000' },
          { 'College Name': 'Sapthagiri Institute, Bangalore', 'Pvt Fees': '22,40,750', 'Other Fees': '45,40,750', 'NRI Fees': '45,40,750' },
          { 'College Name': 'Dr. Chandramma Dayananda Sagar Inst., Harohalli', 'Pvt Fees': '22,15,000', 'Other Fees': '38,15,000', 'NRI Fees': '38,15,000' },
          { 'College Name': 'Sri Madhusudan Sai Institute, Chikkaballapur', 'Pvt Fees': '22,00,000', 'Other Fees': '45,00,000', 'NRI Fees': '45,00,000' },
          { 'College Name': 'PES University Institute, Bangalore', 'Pvt Fees': '22,15,000', 'Other Fees': '39,15,000', 'NRI Fees': '39,15,000' },
          { 'College Name': 'BGS Medical College and Hospital, Bangalore', 'Pvt Fees': '12,00,117', 'Other Fees': '42,86,950', 'NRI Fees': '42,86,950' }
        ]
      },
      {
        title: 'KARNATAKA NEET UG CUTOFF 2025',
        headers: ['College Name', '1st Round (OPN/Q)', '2nd Round (OPN/Q)', '3rd Round (OPN/Q)', 'Stray Vacancy (OPN/Q)'],
        table: [
          { 'College Name': 'M.S. Ramaiah MC, Bangalore', '1st Round (OPN/Q)': '63961 / 218641', '2nd Round (OPN/Q)': '109603 / 409289', '3rd Round (OPN/Q)': 'NA / 275869', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Al-Ameen Medical College, Bijapur', '1st Round (OPN/Q)': '64047 / 286841', '2nd Round (OPN/Q)': '95868 / 955811', '3rd Round (OPN/Q)': '97979 / 646194', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'S S Institute, Davangere', '1st Round (OPN/Q)': '52360 / 428479', '2nd Round (OPN/Q)': '75388 / 1275815', '3rd Round (OPN/Q)': '74263 / 1127005', 'Stray Vacancy (OPN/Q)': '94365 / NA' },
          { 'College Name': 'Vydehi Institute, Bangalore', '1st Round (OPN/Q)': '30249 / 349367', '2nd Round (OPN/Q)': '48896 / 1072607', '3rd Round (OPN/Q)': 'NA / 728079', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'St. Johns Medical College, Bangalore', '1st Round (OPN/Q)': '6250 / NA', '2nd Round (OPN/Q)': '13706 / NA', '3rd Round (OPN/Q)': 'NA / NA', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Kempegowda Institute, Bangalore', '1st Round (OPN/Q)': '28402 / 287613', '2nd Round (OPN/Q)': '39887 / 821008', '3rd Round (OPN/Q)': '33999 / 616779', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'A J Institute, Mangalore', '1st Round (OPN/Q)': '43640 / 354500', '2nd Round (OPN/Q)': '65810 / 1097542', '3rd Round (OPN/Q)': '66155 / 1189221', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Adichunchanagiri Inst, Bellur', '1st Round (OPN/Q)': '153800 / 400015', '2nd Round (OPN/Q)': '311795 / 1052975', '3rd Round (OPN/Q)': '361383 / 1033821', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Father Mullers, Mangalore', '1st Round (OPN/Q)': '31302 / 232560', '2nd Round (OPN/Q)': '48544 / 488764', '3rd Round (OPN/Q)': 'NA / 536763', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'S. Nijalingappa MC, Bagalkot', '1st Round (OPN/Q)': '68105 / 437608', '2nd Round (OPN/Q)': '91013 / 1319086', '3rd Round (OPN/Q)': '99395 / 951028', 'Stray Vacancy (OPN/Q)': '104506 / 940018' },
          { 'College Name': 'MVJ Medical College, Bangalore', '1st Round (OPN/Q)': '44997 / 467347', '2nd Round (OPN/Q)': '69920 / 1117123', '3rd Round (OPN/Q)': '71995 / 1156574', 'Stray Vacancy (OPN/Q)': 'NA / 1268662' },
          { 'College Name': 'K V G Medical College, Sullia', '1st Round (OPN/Q)': '72558 / 384425', '2nd Round (OPN/Q)': '107163 / 1102211', '3rd Round (OPN/Q)': '117899 / 1292134', 'Stray Vacancy (OPN/Q)': '126685 / 1299312' },
          { 'College Name': 'JJM Medical College, Davangere', '1st Round (OPN/Q)': '43640 / 362052', '2nd Round (OPN/Q)': '64695 / 1082940', '3rd Round (OPN/Q)': '50727 / 691715', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Dr BR Ambedkar MC, Bangalore', '1st Round (OPN/Q)': '35757 / 241938', '2nd Round (OPN/Q)': '60284 / 686018', '3rd Round (OPN/Q)': '48881 / 618977', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Mahadevappa Rampure MC, Kalaburagi', '1st Round (OPN/Q)': '53903 / 431845', '2nd Round (OPN/Q)': '86316 / 1199678', '3rd Round (OPN/Q)': '93984 / 1310859', 'Stray Vacancy (OPN/Q)': 'NA / 1287681' },
          { 'College Name': 'Khaja Bandanawaz University', '1st Round (OPN/Q)': '85302 / 402663', '2nd Round (OPN/Q)': '157512 / 1134805', '3rd Round (OPN/Q)': '144372 / 689444', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Farook Academy, Mysore', '1st Round (OPN/Q)': 'NA / NA', '2nd Round (OPN/Q)': '109892 / 925818', '3rd Round (OPN/Q)': '131152 / 1172524', 'Stray Vacancy (OPN/Q)': '136345 / NA' },
          { 'College Name': 'SR Patil Medical College, Bagalkot', '1st Round (OPN/Q)': '73213 / 325055', '2nd Round (OPN/Q)': '106113 / 1288650', '3rd Round (OPN/Q)': '100337 / 1282692', 'Stray Vacancy (OPN/Q)': 'NA / 718178' },
          { 'College Name': 'PES University Institute, Bangalore', '1st Round (OPN/Q)': '127838 / 338495', '2nd Round (OPN/Q)': '243417 / 1289026', '3rd Round (OPN/Q)': '162080 / 1281981', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'BGS Medical College, Hubli', '1st Round (OPN/Q)': '150336 / 402395', '2nd Round (OPN/Q)': '406521 / 1237320', '3rd Round (OPN/Q)': '429546 / 931447', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Sri Madhusudan Sai Inst, Chikballapur', '1st Round (OPN/Q)': '119687 / 182382', '2nd Round (OPN/Q)': '230080 / 450415', '3rd Round (OPN/Q)': '137110 / NA', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Sri Chamundeshwari MC, Mysore', '1st Round (OPN/Q)': '72344 / 330518', '2nd Round (OPN/Q)': '104008 / 946091', '3rd Round (OPN/Q)': '107720 / 727246', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Siddaganga Medical College, Tumakuru', '1st Round (OPN/Q)': '64658 / 237139', '2nd Round (OPN/Q)': '91032 / 527354', '3rd Round (OPN/Q)': '79194 / 689906', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'East Point College, Bangalore', '1st Round (OPN/Q)': '54788 / 363049', '2nd Round (OPN/Q)': '92210 / 1275037', '3rd Round (OPN/Q)': '89369 / 1247266', 'Stray Vacancy (OPN/Q)': 'NA / 174529' },
          { 'College Name': 'Kanachur Institute, Mangalore', '1st Round (OPN/Q)': '62440 / 391728', '2nd Round (OPN/Q)': '105141 / 1228016', '3rd Round (OPN/Q)': '113183 / 1194962', 'Stray Vacancy (OPN/Q)': 'NA / 1066754' },
          { 'College Name': 'Akash Institute, Bangalore', '1st Round (OPN/Q)': '48622 / 434658', '2nd Round (OPN/Q)': '84555 / 1205326', '3rd Round (OPN/Q)': '61027 / 1104913', 'Stray Vacancy (OPN/Q)': 'NA / 980779' },
          { 'College Name': 'The Oxford Medical College, Bangalore', '1st Round (OPN/Q)': '51088 / 423383', '2nd Round (OPN/Q)': '85712 / 1195659', '3rd Round (OPN/Q)': '91238 / 1218453', 'Stray Vacancy (OPN/Q)': 'NA / 1081182' },
          { 'College Name': 'Shridevi Institute, Tumkur', '1st Round (OPN/Q)': '70581 / 426731', '2nd Round (OPN/Q)': '102320 / 1297443', '3rd Round (OPN/Q)': '107588 / 1292134', 'Stray Vacancy (OPN/Q)': 'NA / 1002729' },
          { 'College Name': 'Subbaiah Institute, Shimoga', '1st Round (OPN/Q)': '70410 / 297499', '2nd Round (OPN/Q)': '99719 / 972630', '3rd Round (OPN/Q)': '106278 / 976632', 'Stray Vacancy (OPN/Q)': '125808 / NA' },
          { 'College Name': 'Srinivasa Institute, Mangalore', '1st Round (OPN/Q)': '81293 / 311795', '2nd Round (OPN/Q)': '411057 / 1072919', '3rd Round (OPN/Q)': '610009 / 1154152', 'Stray Vacancy (OPN/Q)': '172354 / NA' },
          { 'College Name': 'Sapthagiri Institute, Bangalore', '1st Round (OPN/Q)': '150111 / 475720', '2nd Round (OPN/Q)': '350149 / 1076579', '3rd Round (OPN/Q)': '461050 / 860717', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'SDM College, Dharwad', '1st Round (OPN/Q)': '97220 / 260162', '2nd Round (OPN/Q)': '144853 / NA', '3rd Round (OPN/Q)': '137110 / 505360', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Navodaya Medical College, Raichur', '1st Round (OPN/Q)': '71717 / 306705', '2nd Round (OPN/Q)': '103797 / 905123', '3rd Round (OPN/Q)': 'NA / 646194', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Basaveswara MC, Chitradurga', '1st Round (OPN/Q)': '70112 / 309099', '2nd Round (OPN/Q)': '97622 / 940448', '3rd Round (OPN/Q)': '90339 / NA', 'Stray Vacancy (OPN/Q)': 'NA / NA' },
          { 'College Name': 'Dr. Chandramma Dayananda Sagar, Hubli', '1st Round (OPN/Q)': '153416 / 407948', '2nd Round (OPN/Q)': '301666 / 999149', '3rd Round (OPN/Q)': '149193 / 772546', 'Stray Vacancy (OPN/Q)': 'NA / NA' }
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
  scholarshipIntro: 'iExplain Education provides scholarship & financial guidance. Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Karnataka.',
  scholarships: [
    { title: 'Scholarship & Financial Guidance', details: 'Complete assistance for exploring scholarships and education loans for medical studies in Karnataka.' }
  ],
  eligibility: {
    headers: ['Parameter', 'Details'],
    table: [
      { Parameter: 'Entrance Exam (MBBS)', Details: 'NEET-UG 2026 (Mandatory)' },
      { Parameter: 'Qualification (MBBS)', Details: '10+2 with Physics, Chemistry, Biology/Biotechnology, English' },
      { Parameter: 'Minimum Marks (MBBS)', Details: 'General: 50%' },
      { Parameter: 'Age Limit (MBBS)', Details: 'Minimum 17 years as on 31st December 2026' },
      { Parameter: 'Entrance Exam (MD/MS)', Details: 'NEET-PG 2026 (Mandatory)' },
      { Parameter: 'Qualification (MD/MS)', Details: 'MBBS degree from NMC-recognized college' },
      { Parameter: 'Internship (MD/MS)', Details: '1-year compulsory rotatory internship completed' },
      { Parameter: 'Registration (MD/MS)', Details: 'Permanent or provisional registration with NMC/State Medical Council' }
    ]
  },
  documents: [
    { document: 'NEET-UG Scorecard', details: 'Mandatory for admission and counselling' },
    { document: 'NEET-UG Admit Card', details: 'Required during document verification' },
    { document: '10th & 12th Marksheets', details: 'Proof of basic academic qualifications' },
    { document: 'KEA Registration Slip', details: 'Generated after online registration' },
    { document: 'Domicile Certificate', details: 'Required for Karnataka state quota seats' },
    { document: 'Category Certificate', details: 'For reservation benefits (if applicable)' },
    { document: 'Valid Photo ID Proof', details: 'Aadhaar Card / PAN Card' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Karnataka – Admission Process (2026)',
      intro: 'The MBBS in Karnataka admission process (2026) is completely based on the NEET-UG 2026 score.',
      steps: [
        { step: 'NEET-UG Qualification', details: 'Candidates must qualify NEET-UG 2026 conducted by NTA.' },
        { step: 'Online Registration', details: 'Apply for Karnataka MBBS counselling through the KEA official website.' },
        { step: 'Document Verification', details: 'Submit and verify required documents at designated KEA centers.' },
        { step: 'Merit List Release', details: 'KEA releases the state merit list based on NEET scores.' },
        { step: 'Choice Filling', details: 'Select preferred colleges and courses (government/private/deemed).' },
        { step: 'Seat Allotment', details: 'Seats allotted based on rank, category, and availability.' },
        { step: 'Fee Payment', details: 'Pay admission fees to confirm the allotted seat.' },
        { step: 'Reporting to College', details: 'Report to the allotted medical college with original documents.' }
      ]
    },
    pg: {
      title: 'MD/MS in Karnataka – Admission Process (2026)',
      intro: 'The MD/MS in Karnataka admission process (2026) is based on the NEET-PG 2026 examination.',
      steps: [
        { step: 'NEET-PG Qualification', details: 'Candidates must qualify NEET-PG 2026 conducted by NBE.' },
        { step: 'Online Registration', details: 'Apply for Karnataka PG medical counselling via KEA portal.' },
        { step: 'Document Verification', details: 'Physical/online verification of eligibility documents.' },
        { step: 'Merit List Publication', details: 'KEA releases state merit list based on NEET-PG rank.' },
        { step: 'Choice Filling', details: 'Select MD/MS branches and preferred colleges.' },
        { step: 'Seat Allotment', details: 'Seats allotted based on rank and preferences.' },
        { step: 'Fee Payment', details: 'Confirm seat by paying admission fees.' },
        { step: 'Reporting to College', details: 'Join allotted college and complete admission formalities.' }
      ]
    }
  },
  studentSupport: 'iExplain Education provides direct support through counselling sessions (online/offline), helping students and parents clear doubts at every stage.',
  hostelFacilities: 'Most colleges are equipped with well-developed teaching hospitals and comfortable hostel infrastructure.',
  studentLife: 'Karnataka offers a vibrant academic environment with exposure to a diverse patient flow and research opportunities.',
  recognition: 'Degrees are globally recognised and approved by the National Medical Commission (NMC).',
  whyChooseUsIntro: 'iExplain Education is a student-focused admission consultancy that provides complete support for NEET aspirants in Karnataka.',
  whyChooseUs: [
    'Expert Career Guidance: Personalized counselling based on NEET rank, budget, and preferences.',
    'Complete Admission Support: Step-by-step guidance for KEA and MCC counselling processes.',
    'Document & Verification Assistance: Help in preparing and verifying all required eligibility documents.',
    'College Selection Support: Proper guidance in selecting government, private, and deemed colleges.',
    'Updated & Accurate Information: Vital updates about cutoffs, fees, and admission rules.',
    'Personal Support System: Direct access to experts to clear doubts during the admission journey.'
  ],
  conclusion: 'MBBS in Karnataka (2026) is one of the most preferred choices for students aiming to pursue MBBS in India. The state offers a balanced mix of government, private, and deemed universities, giving students multiple options based on their NEET-UG score and budget. With a transparent admission process through KEA and MCC, high-quality education, and hands-on hospital training, Karnataka ensures strong academic and professional development for future doctors.',
  faqs: [
    { question: 'What is the eligibility for MBBS in Karnataka (2026)?', answer: 'Qualify NEET-UG 2026, complete 10+2 with PCB, and secure minimum required marks (Gen: 50%, SC/ST/OBC: 40%).' },
    { question: 'Is NEET compulsory for MBBS in Karnataka?', answer: 'Yes, NEET-UG is mandatory for all government, private, and deemed medical colleges in Karnataka.' },
    { question: 'Who conducts MBBS counselling in Karnataka?', answer: 'KEA conducts state quota counselling; MCC handles All India Quota and deemed universities.' },
    { question: 'How many MBBS seats are available in Karnataka?', answer: 'Approximately 9,000 to 12,000 seats across all sectors.' },
    { question: 'What is the MBBS fee structure in Karnataka?', answer: 'Government: ₹60,000 – ₹1,00,000/year; Private: ₹7 – ₹25 lakh/year approx.' },
    { question: 'Can students from other states apply for MBBS in Karnataka?', answer: 'Yes, via All India Quota, management quota, and deemed university seats.' },
    { question: 'Which are the top MBBS colleges in Karnataka?', answer: 'BMCRI Bangalore, St. John’s Medical College, KMC Manipal, and Mysore Medical College.' },
    { question: 'What is the duration of MBBS course in Karnataka?', answer: '4.5 years of academic study + 1 year compulsory internship.' },
    { question: 'Is Karnataka good for MBBS in India?', answer: 'Yes, it is known as the "Medical Education Hub of India" with top-ranked colleges.' },
    { question: 'What is the admission process for MBBS in Karnataka?', answer: 'Based on NEET-UG score, followed by KEA registration, verification, choice filling, and seat allotment.' }
  ],
  internship: {
    intro: 'Internship is important during your MBBS degree. Therefore, it is crucial to know about the pattern of MBBS internship. See the table given below to gain knowledge about it.',
    headers: ['Subjects', 'Time Duration'],
    table: [
      { Subjects: 'Community Medicine', 'Time Duration': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Time Duration': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Time Duration': '2 months' },
      { Subjects: 'Pediatrics', 'Time Duration': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Time Duration': '1 month' },
      { Subjects: 'ENT', 'Time Duration': '15 days' },
      { Subjects: 'Ophthalmology', 'Time Duration': '15 days' },
      { Subjects: 'Casualty', 'Time Duration': '15 days' },
      { Subjects: 'Elective Posting', 'Time Duration': '15 days' },
      { Subjects: 'Total', 'Time Duration': '12 months' }
    ]
  }
};

const delhiMBBSData: MBBSIndiaCollegeDetailData = {
  title: 'MBBS in Delhi',
  coursetype: 'Undergraduate (MBBS) & Postgraduate (MD/MS)',
  heroImage: 'https://example.com/images/delhi-medical-hero.jpg',
  heroImageMobile: 'https://example.com/images/delhi-medical-hero-mobile.jpg',
  intro: {
    text: `MBBS in Delhi (2026) is one of the most prestigious, competitive, and high-demand options for students who want to pursue MBBS in India. Delhi, the capital of India, is known for its world-class healthcare system, advanced medical infrastructure, and some of the highest-ranked government medical colleges in the country. Every year, thousands of NEET aspirants choose MBBS in Delhi due to its excellent academic environment and strong clinical exposure.

The city is home to top medical institutions such as All India Institute of Medical Sciences (AIIMS), Maulana Azad Medical College (MAMC), Lady Hardinge Medical College (LHMC), and University College of Medical Sciences (UCMS). These colleges are highly reputed not only in India but also globally, offering top-quality education, modern research facilities, and hands-on training in multi-specialty hospitals. Studying MBBS in India from Delhi gives students an unmatched advantage in terms of learning experience and career growth.

Admission to MBBS in Delhi (2026) is strictly based on the NEET-UG 2026 examination, making it a merit-based and transparent process. Counselling for All India Quota seats is conducted by the Medical Counselling Committee (MCC), while state quota seats are managed by Delhi University (DU) counselling authorities. Due to the limited number of seats and high-quality institutions, the competition for MBBS in Delhi is extremely high compared to other states in India.

One of the biggest advantages of pursuing MBBS in India from Delhi is the exceptional clinical exposure. Students get the opportunity to work and train in some of the busiest government hospitals like Lok Nayak Hospital and Safdarjung Hospital, where they interact with a large and diverse patient population. This helps in developing strong practical knowledge, diagnostic skills, and confidence from the early years of medical education.

Delhi also offers a strong academic ecosystem with experienced faculty, modern laboratories, research opportunities, and regular clinical case discussions. The city provides excellent exposure to emergency medicine, surgery, pediatrics, and other specialties, making it one of the best destinations for MBBS in India.

Overall, MBBS in Delhi (2026) is considered a top choice for medical aspirants who aim for high-quality education, strong clinical training, and excellent career opportunities. With its prestigious colleges, advanced hospitals, and competitive environment, Delhi remains one of the most sought-after destinations for pursuing MBBS in India.`
  },
  quickOverview: {
    'Course Name': 'MBBS (Bachelor of Medicine and Surgery)',
    'Admission Process': 'Based on NEET-UG 2026',
    'Counselling Authority': 'MCC (All India Quota), Delhi University (State Quota)',
    'Eligibility Criteria': '10+2 with Physics, Chemistry, Biology + NEET qualification',
    'Minimum Age': '17 years as on 31st December 2026',
    'Total MBBS Seats': 'Limited (Highly Competitive)',
    'Top Colleges': 'AIIMS Delhi',
    'Course Duration': '4.5 years + 1 year compulsory internship',
    'Internship': 'Conducted in top government hospitals'
  },
  benefits: {
    intro: 'Choosing Delhi for MBBS in 2026 is one of the most prestigious and competitive options for students aiming to pursue MBBS in India. Delhi offers a perfect combination of top-ranked medical colleges, advanced hospital exposure, and excellent academic opportunities.',
    items: [
      { heading: "India’s Top Medical Colleges", details: "Delhi is home to India’s best medical institutions such as AIIMS Delhi, MAMC, VMMC, UCMS, and LHMC, which consistently rank among the top in the country." },
      { heading: "Exceptional Clinical Exposure", details: "Students get exposure to a very high and diverse patient load in major hospitals like AIIMS, Safdarjung Hospital, and LNJP Hospital." },
      { heading: "High-Quality Education System", details: "Follows the NMC curriculum with experienced faculty, advanced teaching methods, and strong academic training." },
      { heading: "Best Career Opportunities", details: "Graduates have excellent opportunities in PG entrance exams (NEET-PG), research, government jobs, and international careers." },
      { heading: "Affordable Government Colleges", details: "Government medical colleges in Delhi offer MBBS at very low fees compared to private colleges in India." },
      { heading: "National-Level Competition & Exposure", details: "Exposes students to highly competitive academic environments, helping them perform better in future medical careers." }
    ]
  },
  SyllabusIntro: 'The MBBS in Delhi (2026) syllabus is based on the National Medical Commission (NMC) curriculum, which is followed across MBBS in India. It focuses on building strong theoretical knowledge, practical skills, and clinical exposure in top hospitals of Delhi.',
  syllabus: {
    headers: ['Phase / Year', 'Subjects'],
    table: [
      { 'Phase / Year': 'Phase I (1st Year)', Subjects: 'Anatomy, Physiology, Biochemistry' },
      { 'Phase / Year': 'Phase II (2nd Year)', Subjects: 'Pathology, Pharmacology, Microbiology' },
      { 'Phase / Year': 'Phase III Part 1 (3rd Year)', Subjects: 'Forensic Medicine, Community Medicine, Ophthalmology, ENT' },
      { 'Phase / Year': 'Phase III Part 2 (Final Year)', Subjects: 'Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics' },
      { 'Phase / Year': 'Internship (1 Year)', Subjects: 'Rotatory Clinical Internship' }
    ]
  },
  fees: {
    note: 'Delhi is home to some of the best medical colleges in India. Admission to these colleges is based on NEET-UG 2026, and competition is extremely high due to limited seats and top-quality education.',
    sections: [
      {
        title: 'Top MBBS Colleges in Delhi (2026)',
        headers: ['College Name', 'Type'],
        table: [
          { 'College Name': 'All India Institute of Medical Sciences (AIIMS), New Delhi', Type: 'Government (Autonomous)' },
          { 'College Name': 'Maulana Azad Medical College (MAMC), New Delhi', Type: 'Government (DU)' },
          { 'College Name': 'Vardhman Mahavir Medical College (VMMC), Safdarjung Hospital', Type: 'Government (IPU)' },
          { 'College Name': 'University College of Medical Sciences (UCMS), New Delhi', Type: 'Government (DU)' },
          { 'College Name': 'Lady Hardinge Medical College (LHMC), New Delhi', Type: 'Government (DU)' },
          { 'College Name': 'Hamdard Institute of Medical Sciences (HIMSR), New Delhi', Type: 'Deemed University' },
          { 'College Name': 'NDMC Medical College (Hindu Rao Hospital), New Delhi', Type: 'Government (IPU)' }
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
  scholarshipIntro: 'iExplain Education provides scholarship & financial guidance. Students get help in exploring scholarships, education loans, and budget-friendly options for MBBS in Delhi.',
  scholarships: [
    { title: 'Scholarship & Financial Guidance', details: 'Complete assistance for exploring scholarships and education loans for medical studies in Delhi.' }
  ],
  eligibility: {
    headers: ['Parameter', 'Details'],
    table: [
      { Parameter: 'Entrance Exam (MBBS)', Details: 'NEET-UG 2026 (Mandatory)' },
      { Parameter: 'Qualification (MBBS)', Details: '10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology, English' },
      { Parameter: 'Minimum Marks (MBBS)', Details: 'General: 50%' },
      { Parameter: 'Age Limit (MBBS)', Details: 'Minimum 17 years as on 31st December 2026' },
      { Parameter: 'Nationality', Details: 'Indian citizens / NRI / OCI (as per rules)' },
      { Parameter: 'Admission Authority', Details: 'MCC (AIQ), Delhi University, IPU' }
    ]
  },
  documents: [
    { document: 'NEET Scorecard', details: 'Mandatory for admission and counselling' },
    { document: 'Identity Proof', details: 'Valid ID like Aadhaar Card / PAN Card' },
    { document: 'Category Certificate', details: 'Required for reservation benefits (if applicable)' },
    { document: 'Domicile Certificate', details: 'Required for state quota seats' },
    { document: 'Academic Certificates', details: '10th and 12th marksheets/certificates' }
  ],
  admissionProcess: {
    ug: {
      title: 'MBBS in Delhi – Admission Process (2026)',
      intro: 'The MBBS in Delhi admission process (2026) is completely based on the NEET-UG 2026 exam.',
      steps: [
        { step: 'NEET-UG Qualification', details: 'Candidates must qualify NEET-UG 2026 conducted by NTA.' },
        { step: 'Counselling Registration', details: 'Register on MCC (AIQ) or Delhi University / IPU portals.' },
        { step: 'Choice Filling', details: 'Select preferred MBBS colleges like AIIMS, MAMC, VMMC, UCMS.' },
        { step: 'Document Verification', details: 'Upload and verify required academic and identity documents.' },
        { step: 'Merit List Preparation', details: 'Seat allotment based on NEET rank and category.' },
        { step: 'Seat Allotment', details: 'Seats allotted through counselling rounds.' },
        { step: 'Fee Payment', details: 'Pay admission fee to confirm seat.' },
        { step: 'Reporting to College', details: 'Visit allotted college for final admission formalities.' }
      ]
    }
  },
  studentSupport: 'iExplain Education provides direct support through counselling sessions, helping students and parents clear doubts at every stage of MBBS admission in India and Delhi.',
  hostelFacilities: 'Top colleges are well-connected with multi-specialty government hospitals providing clinical training and hostel infrastructure.',
  studentLife: 'Delhi offers a strong academic ecosystem with experienced faculty, modern laboratories, and research opportunities.',
  recognition: 'Degrees are globally recognised and approved by the National Medical Commission (NMC).',
  whyChooseUsIntro: 'iExplain Education helps students simplify the entire admission journey with structured counselling and expert support for MBBS in Delhi.',
  whyChooseUs: [
    'Expert NEET Counselling Guidance: Personalized counselling based on your rank, category, and budget.',
    'College Selection Support: Guidance in choosing government, central, and IPU-affiliated colleges.',
    'Accurate Admission Strategy: Rank-based college prediction and choice filling strategy for MCC counselling.',
    'Complete Documentation Assistance: Assistance in preparing and verifying certificates to avoid errors.',
    'Step-by-Step Admission Support: Guidance through MCC, Delhi University, and IPU counselling processes.',
    'Wider Medical Admission Guidance: Support for MBBS in other states of India and abroad options.'
  ],
  conclusion: 'MBBS in Delhi (2026) is one of the most prestigious and competitive options for students aiming to pursue MBBS in India. With top-ranked institutions like AIIMS, MAMC, VMMC, UCMS, and LHMC, Delhi offers world-class medical education, advanced infrastructure, and unmatched clinical exposure due to high patient inflow in government hospitals. The admission process is strictly based on NEET-UG 2026, and due to limited seats and very high competition, only top-ranking students are able to secure admission. Delhi remains one of the best destinations for MBBS in India, providing a strong foundation for students to become highly skilled medical professionals.',
  faqs: [
    { question: 'What is the eligibility for MBBS in Delhi (2026)?', answer: 'Qualify NEET-UG 2026, complete 10+2 with PCB, and secure minimum marks (General: 50%, SC/ST/OBC: 40%).' },
    { question: 'Is NEET mandatory for MBBS in Delhi?', answer: 'Yes, NEET-UG is compulsory for admission to all medical colleges in Delhi including AIIMS, MAMC, VMMC, UCMS, and others.' },
    { question: 'Which are the top MBBS colleges in Delhi?', answer: 'AIIMS Delhi, Maulana Azad Medical College (MAMC), VMMC, UCMS, and Lady Hardinge Medical College (LHMC).' },
    { question: 'How many MBBS seats are available in Delhi?', answer: 'Delhi has limited MBBS seats, mostly in top government colleges, making it highly competitive.' },
    { question: 'What is the admission process for MBBS in Delhi?', answer: 'Based on NEET-UG 2026, followed by MCC counselling, DU/IPU counselling, choice filling, and seat allotment.' },
    { question: 'Why is MBBS in Delhi so popular?', answer: 'Because of top-ranked colleges, excellent clinical exposure, affordable fees, and strong career opportunities.' },
    { question: 'What is the duration of MBBS course in Delhi?', answer: 'The duration is 4.5 years academic + 1 year compulsory internship.' },
    { question: 'Is MBBS in Delhi difficult to get?', answer: 'Yes, it is very competitive due to limited seats and very high NEET cutoff requirements.' }
  ],
  internship: {
    intro: 'Internship is important during your MBBS degree. Therefore, it is crucial to know about the pattern of MBBS internship. See the table given below to gain knowledge about it.',
    headers: ['Subjects', 'Time Duration'],
    table: [
      { Subjects: 'Community Medicine', 'Time Duration': '2 months' },
      { Subjects: 'Medicine, including Psychiatry', 'Time Duration': '2 months' },
      { Subjects: 'Obstetrics/Gynecology', 'Time Duration': '2 months' },
      { Subjects: 'Pediatrics', 'Time Duration': '1 month' },
      { Subjects: 'Orthopedics including PMR', 'Time Duration': '1 month' },
      { Subjects: 'ENT', 'Time Duration': '15 days' },
      { Subjects: 'Ophthalmology', 'Time Duration': '15 days' },
      { Subjects: 'Casualty', 'Time Duration': '15 days' },
      { Subjects: 'Elective Posting', 'Time Duration': '15 days' },
      { Subjects: 'Total', 'Time Duration': '12 months' }
    ]
  }
};

export const MBBS_IN_INDIA_DETAILS: Record<string, MBBSIndiaCollegeDetailData> = {
  'uttar-pradesh': uttarPradeshMBBSData,
  haryana: buildMBBSIndiaStateData('Haryana', 'North India'),
  delhi: buildMBBSIndiaStateData('Delhi', 'North India'),
  uttarakhand: buildMBBSIndiaStateData('Uttarakhand', 'North India'),
  'himachal-pradesh': buildMBBSIndiaStateData('Himachal Pradesh', 'North India'),
  rajasthan: rajasthanMBBSData,
  maharashtra: buildMBBSIndiaStateData('Maharashtra', 'Central & West India'),
  'madhya-pradesh': buildMBBSIndiaStateData('Madhya Pradesh', 'Central & West India'),
  bihar: buildMBBSIndiaStateData('Bihar', 'East & South India'),
  karnataka: buildMBBSIndiaStateData('Karnataka', 'East & South India')
};
