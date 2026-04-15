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
