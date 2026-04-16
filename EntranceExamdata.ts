import { EntranceExamData, EntranceExamDataMap } from './types.ts';

export const ENTRANCE_EXAM_DETAILS: EntranceExamDataMap = {
  'neet-ug': {
    title: 'NEET UG',
    heroImage: 'https://images.unsplash.com/photo-1579165466949-3180a3d056d1?auto=format&fit=crop&q=80&w=1600',
    intro: [
      'NEET UG (National Eligibility cum Entrance Test – Undergraduate) is the most crucial and widely recognized national-level medical entrance examination in India for students who aspire to build a career in the medical field. Conducted by the National Testing Agency (NTA), NEET UG serves as the single gateway for admission to MBBS, BDS, AYUSH (BAMS, BHMS, BUMS), and other undergraduate medical courses in top government and private colleges across India. Over the years, NEET UG has replaced multiple state and institutional entrance exams, creating a uniform, transparent, and merit-based admission system that ensures equal opportunities for all students across the country. Every year, more than 20 lakh students appear for the NEET UG exam, making it one of the most competitive examinations in India, with a high level of difficulty and limited number of seats in prestigious medical colleges.',
      'The NEET UG exam is designed to evaluate a student\'s conceptual clarity, analytical ability, and problem-solving skills in core science subjects, namely Physics, Chemistry, and Biology (Botany and Zoology), based on the NCERT syllabus of Classes 11 and 12. It is conducted in offline mode (pen-and-paper based), and students must prepare thoroughly with a strong focus on fundamentals, regular practice, and time management. Qualifying NEET UG is not only essential for admission to medical colleges in India but is also mandatory for students who wish to pursue MBBS abroad, as per guidelines set for Indian medical aspirants. This makes NEET UG a critical milestone for anyone dreaming of becoming a doctor, whether in India or internationally.',
      'In recent years, the popularity of NEET UG has increased significantly due to the growing demand for medical education and healthcare professionals. The competition has become more intense, with students starting their preparation early and focusing on strategic study plans, coaching support, and mock tests to secure a good rank. A high NEET score opens doors to top government medical colleges, which offer quality education at affordable fees, while lower scores may lead students to explore private colleges or international options. Therefore, proper guidance, dedication, and consistent effort are key to cracking this exam successfully.',
    ],
    examParts: ['Physics', 'Chemistry', 'Biology (Botany + Zoology)'],
    additionalNote: 'The exam is conducted in offline mode and is mandatory for MBBS admissions in India.',

    schedule: {
      title: 'NEET UG 2026 & MCC Counselling Complete Schedule (Tentative)',
      examEvents: [
        { event: 'NEET UG 2026 Notification Release', date: 'January 2026', details: 'Official notification by National Testing Agency (NTA)' },
        { event: 'Application Form Start Date', date: 'January 2026 (Last Week)', details: 'Online registration begins' },
        { event: 'Last Date to Apply', date: 'February 2026 (Last Week)', details: 'Form submission deadline' },
        { event: 'Correction Window', date: 'March 2026', details: 'Students can edit application form' },
        { event: 'Admit Card Release', date: 'April 2026 (Last Week)', details: 'Download from official website' },
        { event: 'NEET UG 2026 Exam Date', date: 'May 2026 (1st Sunday)', details: 'Offline (Pen & Paper Mode)' },
        { event: 'Answer Key Release', date: 'May 2026 (Last Week)', details: 'Provisional answer key by NTA' },
        { event: 'NEET UG Result Declaration', date: 'June 2026 (2nd Week)', details: 'Scorecard + AIR released' },
        { event: 'Cut-Off Release', date: 'June 2026', details: 'Category-wise cut-off marks' },
        { event: 'MCC Counselling Registration Start', date: 'July 2026 (2nd Week)', details: 'Counselling begins by Medical Counselling Committee (MCC)' },
      ],
      counsellingRounds: {
        title: 'MCC NEET UG Counselling 2026 Schedule',
        rounds: [
          { round: 'Round 1 Registration', dates: 'July 2026', details: 'Choice filling & locking' },
          { round: 'Round 1 Result', dates: 'August 2026 (1st Week)', details: 'Seat allotment result' },
          { round: 'Round 1 Reporting', dates: 'August 2026', details: 'College reporting' },
          { round: 'Round 2 Registration', dates: 'August 2026 (2nd Week)', details: 'Fresh choices allowed' },
          { round: 'Round 2 Result', dates: 'August 2026 (Last Week)', details: 'Seat allotment' },
          { round: 'Round 2 Reporting', dates: 'August 2026 (End)', details: 'Final reporting' },
          { round: 'Mop-Up Round', dates: 'September 2026', details: 'For vacant seats' },
          { round: 'Stray Vacancy Round', dates: 'October 2026', details: 'Conducted by colleges' },
        ],
      },
    },

    eligibility: {
      title: 'NEET UG Counselling 2026: Eligibility Criteria',
      intro: 'To participate in NEET UG Counselling 2026, candidates must fulfill certain eligibility requirements set by the Medical Counselling Committee (MCC) and other respective state authorities. These criteria ensure that only qualified and eligible students can take part in the counselling process for MBBS, BDS, and other medical courses.',
      basicRequirements: {
        title: 'Basic Eligibility Requirements',
        points: [
          'Candidates must have qualified the NEET UG 2026 exam conducted by the National Testing Agency (NTA). Qualifying NEET means securing the minimum required percentile as per their category (General, OBC, SC, ST, etc.).',
          'The applicant must be an Indian citizen, Overseas Citizen of India (OCI), Non-Resident Indian (NRI), or Person of Indian Origin (PIO) to be eligible for counselling under different quotas.',
        ],
      },
      educationalQualification: {
        title: 'Educational Qualification',
        description: 'Students must have passed Class 12 or equivalent examination with Physics, Chemistry, Biology/Biotechnology, and English as core subjects from a recognized board. They must have secured the minimum required aggregate marks in PCB subjects:',
        marksRequired: [
          { category: 'General Category', marks: '50%' },
          { category: 'OBC/SC/ST', marks: '40%' },
          { category: 'General-PwD', marks: '45%' },
        ],
      },
      ageCriteria: {
        title: 'Age Criteria',
        description: 'Candidates must have completed 17 years of age on or before 31st December 2026. There is no upper age limit as per the latest NEET UG guidelines.',
      },
      cutOffRequirement: {
        title: 'NEET Cut-Off Requirement',
        description: 'Only those candidates who meet the NEET UG 2026 cut-off percentile are eligible for counselling. The expected qualifying percentile is:',
        percentiles: [
          { category: 'General', percentile: '50th percentile' },
          { category: 'OBC/SC/ST', percentile: '40th percentile' },
          { category: 'General-PwD', percentile: '45th percentile' },
        ],
      },
      registrationForCounselling: {
        title: 'Registration for Counselling',
        description: 'Candidates must register online on the official MCC website to participate in All India Quota (AIQ) counselling. Without registration, no candidate will be considered for seat allotment.',
      },
      quotaEligibility: {
        title: 'Eligibility for AIQ vs State Counselling',
        quotas: [
          { quota: 'All India Quota (15%)', description: 'Open to all NEET-qualified candidates across India' },
          { quota: 'State Quota (85%)', description: 'Candidates must fulfill domicile requirements of the respective state' },
        ],
      },
      documentsRequired: {
        title: 'Documents Requirement (Basic)',
        intro: 'Candidates must have the following documents ready during counselling:',
        documents: [
          'NEET UG 2026 Scorecard',
          'Admit Card',
          'Class 10 & 12 Mark Sheets',
          'ID Proof (Aadhaar/PAN)',
          'Passport-size photographs',
          'Category Certificate (if applicable)',
        ],
      },
    },

    examPattern: {
      title: 'NEET 2026 Exam Pattern',
      intro: 'The NEET UG 2026 Exam Pattern is designed to assess a student\'s knowledge, conceptual clarity, and problem-solving ability in core science subjects. Conducted by the National Testing Agency (NTA), NEET UG is a pen-and-paper (offline) based examination and follows a standardised format across India.',
      particulars: [
        { key: 'Exam Mode', value: 'Offline (Pen & Paper Based)' },
        { key: 'Duration', value: '3 Hours 20 Minutes' },
        { key: 'Total Questions', value: '200 Questions (180 to be attempted)' },
        { key: 'Total Marks', value: '720 Marks' },
        { key: 'Subjects', value: 'Physics, Chemistry, Biology' },
        { key: 'Question Type', value: 'Multiple Choice Questions (MCQs)' },
        { key: 'Marking Scheme', value: '+4 for correct, -1 for incorrect' },
      ],
      subjectDistribution: {
        title: 'Subject-wise Question Distribution',
        subjects: [
          { subject: 'Physics', sectionA: 35, sectionB: '15 (Attempt any 10)', totalQuestions: 45, marks: 180 },
          { subject: 'Chemistry', sectionA: 35, sectionB: '15 (Attempt any 10)', totalQuestions: 45, marks: 180 },
          { subject: 'Biology (Botany + Zoology)', sectionA: 70, sectionB: '30 (Attempt any 20)', totalQuestions: 90, marks: 360 },
          { subject: 'Total', sectionA: '-', sectionB: '-', totalQuestions: '180 Questions', marks: '720 Marks' },
        ],
      },
    },

    admitCard: {
      title: 'How to Download NEET Admit Card 2026?',
      intro: 'Downloading the NEET UG 2026 Admit Card is a simple online process. The admit card will be released by the National Testing Agency (NTA) on its official website. Candidates must download and print it before the exam, as it is a mandatory document to enter the examination hall.',
      steps: [
        { step: 'Visit the Official Website', description: 'Go to the official NEET website managed by the National Testing Agency (NTA).' },
        { step: 'Click on Admit Card Link', description: 'On the homepage, find and click on the link "Download NEET UG 2026 Admit Card".' },
        {
          step: 'Enter Login Credentials',
          description: 'Enter your login details:',
          subPoints: ['Application Number', 'Date of Birth', 'Security Pin (Captcha)'],
        },
        { step: 'Submit Details', description: 'Click on the Submit/Login button.' },
        { step: 'Download Admit Card', description: 'Your NEET admit card will appear on the screen. Download it in PDF format.' },
        { step: 'Print the Admit Card', description: 'Take at least 2–3 printouts for exam day and future use.' },
      ],
      detailsMentioned: {
        title: 'Details Mentioned on NEET Admit Card',
        details: [
          "Candidate's Name",
          'Roll Number',
          'Application Number',
          'Exam Date & Time',
          'Exam Center Address',
          'Photograph & Signature',
          'Important Exam Instructions',
        ],
      },
    },

    preparationBooks: {
      title: 'NEET 2026 Best Preparation Books',
      books: [
        { subject: 'Physics', bookName: 'Concepts of Physics (Vol 1 & 2)', whyChoose: 'Best for strong fundamentals and concept clarity' },
        { subject: 'Physics', bookName: 'Objective Physics for NEET', whyChoose: 'Chapter-wise NEET-level questions for practice' },
        { subject: 'Physics', bookName: 'Fundamentals of Physics', whyChoose: 'Advanced concept understanding' },
        { subject: 'Chemistry', bookName: 'NCERT Chemistry (Class 11 & 12)', whyChoose: 'Most important, direct questions in NEET' },
        { subject: 'Chemistry', bookName: 'Physical Chemistry', whyChoose: 'Best for numerical and theory concepts' },
        { subject: 'Chemistry', bookName: 'Organic Chemistry', whyChoose: 'Deep understanding of organic concepts' },
        { subject: 'Chemistry', bookName: 'Concise Inorganic Chemistry', whyChoose: 'Helpful for inorganic concepts (selected topics)' },
        { subject: 'Biology', bookName: 'NCERT Biology (Class 11 & 12)', whyChoose: '90–95% NEET questions directly from NCERT' },
        { subject: 'Biology', bookName: 'Objective Biology', whyChoose: 'Best for practice and concept strengthening' },
        { subject: 'Biology', bookName: 'MTG NCERT at Your Fingertips', whyChoose: 'NCERT-based quick revision and practice' },
      ],
    },

    conclusion: {
      title: 'Conclusion – NEET UG 2026',
      paragraphs: [
        'In conclusion, NEET UG 2026 is the most crucial step for students aspiring to build a successful career in the medical field. From understanding the exam pattern, eligibility criteria, counselling process, admit card, and preparation strategy, every stage plays an important role in achieving success. Conducted by the National Testing Agency, NEET ensures a transparent and merit-based admission process for MBBS, BDS, and other medical courses across India.',
        'To crack NEET 2026, students must focus on strong conceptual clarity, consistent practice, and proper time management. Following the right study materials, especially NCERT books, along with regular mock tests and revisions, can significantly improve performance. Additionally, staying updated with counselling schedules by the Medical Counselling Committee is essential to secure admission in top medical colleges.',
        'Overall, with the right guidance, dedication, and strategy, students can successfully clear NEET UG 2026 and take the first step toward fulfilling their dream of becoming a doctor.',
      ],
    },

    faqs: {
      title: 'NEET UG 2026 – Frequently Asked Questions (FAQs)',
      questions: [
        {
          question: 'What is NEET UG 2026?',
          answer: 'NEET UG 2026 (National Eligibility cum Entrance Test) is a national-level medical entrance exam conducted by the National Testing Agency for admission to MBBS, BDS, and other medical courses across India.',
        },
        {
          question: 'Who is eligible for NEET UG 2026?',
          answer: 'Students who have completed or are appearing in Class 12 with Physics, Chemistry, and Biology (PCB) are eligible. The minimum age required is 17 years.',
        },
        {
          question: 'What is the exam pattern of NEET UG 2026?',
          answer: 'NEET UG is an offline exam with 180 questions from Physics, Chemistry, and Biology, carrying a total of 720 marks. Each correct answer gets +4 marks, and -1 mark is deducted for wrong answers.',
        },
        {
          question: 'Is NEET mandatory for MBBS abroad?',
          answer: 'Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad as per government guidelines.',
        },
        {
          question: 'When will NEET UG 2026 be conducted?',
          answer: 'The NEET UG 2026 exam is expected to be held in May 2026 (first Sunday), although the official date will be announced by the National Testing Agency.',
        },
        {
          question: 'How many times is NEET conducted in a year?',
          answer: 'NEET UG is conducted once a year in offline mode.',
        },
        {
          question: 'What is the minimum qualifying marks for NEET 2026?',
          answer: 'The qualifying percentile is: General: 50th percentile, OBC/SC/ST: 40th percentile, General-PwD: 45th percentile.',
        },
        {
          question: 'How does NEET counselling work?',
          answer: 'NEET counselling is conducted by the Medical Counselling Committee for 15% All India Quota seats, while states conduct counselling for 85% state quota seats.',
        },
        {
          question: 'What documents are required for NEET counselling?',
          answer: 'Important documents include NEET scorecard, admit card, Class 10 & 12 mark sheets, ID proof, photographs, and category certificate (if applicable).',
        },
        {
          question: 'What are the best books for NEET 2026 preparation?',
          answer: 'NCERT books are the most important, along with reference books like H.C. Verma (Physics), O.P. Tandon (Chemistry), and MTG Fingertips for practice.',
        },
        {
          question: 'Can I crack NEET 2026 in one year?',
          answer: 'Yes, with proper strategy, consistent study, and regular practice, students can crack NEET in one year.',
        },
        {
          question: 'What is the full form of NEET UG?',
          answer: 'NEET UG stands for National Eligibility cum Entrance Test (Undergraduate).',
        },
      ],
    },
  },
  "jee-main": {
    "title": "JEE Main",

    "heroImage": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1600",

    "intro": [
      "JEE Main (Joint Entrance Examination – Main) is a highly competitive national-level entrance exam in India conducted by the National Testing Agency (NTA) for students who wish to pursue undergraduate engineering and technical courses such as B.Tech, B.E, B.Arch, and B.Planning in top engineering colleges across the country. It is one of the most important exams for students aiming to build a career in engineering, technology, research, innovation, and applied sciences and is widely considered the gateway to some of the most prestigious institutions in India.",
      "JEE Main is the first stage of the engineering admission process for top institutes like NITs (National Institutes of Technology), IIITs (Indian Institutes of Information Technology), and other Centrally Funded Technical Institutions (CFTIs). It also acts as the qualifying examination for JEE Advanced, which is required for admission into the elite Indian Institutes of Technology (IITs). Because of this, JEE Main plays a very important role in shaping the future of engineering aspirants in India.",
      "The exam primarily tests students' understanding of core subjects from Physics, Chemistry, and Mathematics, based on the Class 11 and Class 12 syllabus (CBSE and other state boards). It evaluates conceptual clarity, problem-solving ability, speed, and accuracy, making it one of the toughest and most respected entrance exams in India. Students need strong preparation, consistent practice, and a clear understanding of fundamentals to perform well in JEE Main.",
      "JEE Main in India is conducted in a computer-based format (CBT) and is usually held multiple times a year, giving students multiple opportunities to improve their scores and maximize their chances of admission into top engineering colleges. This flexible exam structure helps students reduce pressure and perform better in subsequent attempts.",
      "JEE Main is one of the most important national-level engineering entrance exams in India, playing a crucial role in shaping the careers of lakhs of engineering aspirants every year. It provides students with an opportunity to enter some of the most reputed engineering colleges in the country based on merit, ensuring a transparent and competitive selection process where students are evaluated purely on their performance in Physics, Chemistry, and Mathematics.",
      "JEE Main also plays an important role in promoting national-level competition, allowing students from different states, boards, and backgrounds to compete on a common platform. This helps in identifying talented students and providing them equal opportunities in top technical education institutions.",
      "In addition, JEE Main opens doors to high-paying career opportunities in fields such as Computer Science Engineering, Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronics & Communication, Artificial Intelligence, Data Science, and Information Technology. Students who qualify from top institutes often get placed in leading companies like Google, Microsoft, Amazon, TCS, Infosys, and other global tech firms."
    ],

    "examParts": [
      "Physics",
      "Chemistry",
      "Mathematics"
    ],

    "additionalNote": "The exam is conducted in Computer-Based Test (CBT) mode and is held multiple times a year. Courses offered: B.Tech (CSE, Mechanical, Civil, Electrical, ECE, Chemical, IT, AI & Data Science), B.E, B.Arch (Architectural design, Urban planning, Building construction, Interior & exterior design), B.Planning (City planning, Regional development, Smart city projects, Infrastructure management). Institutes: NITs, IIITs, GFTIs, and State-level engineering colleges.",

    "eligibility": {
      "title": "Eligibility Criteria for JEE Main 2026",
      "intro": "JEE Main 2026 is conducted by the National Testing Agency (NTA) for students aspiring to pursue undergraduate engineering and architecture courses such as B.Tech, B.E, B.Arch, and B.Planning in top institutes like NITs, IIITs, and GFTIs. To appear for the exam, candidates must fulfill certain eligibility requirements related to education, subjects, and nationality.",

      "basicRequirements": {
        "title": "Basic Eligibility Requirements",
        "points": [
          "Candidates must have passed or be appearing in Class 12 or equivalent examination from a recognized board.",
          "Indian citizens are eligible. Foreign nationals, NRIs, PIOs, and OCIs can also apply under specific guidelines.",
          "There is no age limit for appearing in JEE Main 2026. Candidates can attempt the exam as long as they meet educational qualifications.",
          "A candidate can attempt JEE Main for three consecutive years after passing Class 12, with multiple sessions per year."
        ]
      },

      "educationalQualification": {
        "title": "Educational Qualification & Minimum Marks",
        "description": "Students must have studied Physics, Chemistry, and Mathematics (PCM) for B.Tech/B.E courses. For B.Arch and B.Planning, Mathematics is mandatory along with other relevant subjects. There is no minimum percentage required to appear in JEE Main. However, for admission into NITs, IIITs, and GFTIs, the following minimum marks in Class 12 are required:",
        "marksRequired": [
          { "category": "General / EWS Category", "marks": "75% in Class 12" },
          { "category": "SC / ST Category", "marks": "Relaxation as per government norms" },
          { "category": "Top 20 Percentile (any category)", "marks": "Board-wise percentile cutoff" }
        ]
      },

      "ageCriteria": {
        "title": "Age Limit & Number of Attempts",
        "description": "There is no age limit for appearing in JEE Main 2026. Candidates can attempt the exam after completing Class 12, as long as they meet the academic requirements. Students can appear for JEE Main in three consecutive years after passing Class 12. The exam is usually conducted in multiple sessions per year, giving students more chances to improve their scores."
      },

      "quotaEligibility": {
        "title": "Institutes Offering Courses via JEE Main",
        "quotas": [
          { "quota": "NITs (National Institutes of Technology)", "description": "Top government engineering institutes accepting JEE Main scores for B.Tech and B.E admissions across India." },
          { "quota": "IIITs (Indian Institutes of Information Technology)", "description": "Specialised institutes for Information Technology and related engineering programs." },
          { "quota": "GFTIs (Government Funded Technical Institutes)", "description": "Other centrally funded technical institutions across India accepting JEE Main scores." },
          { "quota": "State-level Engineering Colleges", "description": "Many state colleges accept JEE Main scores for admissions through their respective state counselling processes." }
        ]
      },

      "documentsRequired": {
        "title": "Documents Required for JEE Main Application (2026)",
        "intro": "Candidates must have the following documents ready during the application and admission process:",
        "documents": [
          "Recent passport-size color photograph (clear background, as per NTA guidelines)",
          "Scanned signature of the candidate on white paper",
          "Aadhaar Card / Passport / PAN Card / Voter ID (any one valid Identity Proof)",
          "Class 10 Marksheet – proof of date of birth and basic academic details",
          "Class 12 Marksheet / Admit Card – for appearing or passed candidates (as applicable)",
          "Category Certificate – SC / ST / OBC-NCL / EWS certificate (if applicable)",
          "PwD Certificate – for Persons with Disabilities (if applicable)",
          "Domicile Certificate – required in some cases for state quota or verification",
          "Payment Details – Debit/Credit card or net banking for application fee payment"
        ]
      }
    },

    "examPattern": {
      "title": "JEE Main 2026 Exam Pattern",
      "intro": "JEE Main 2026 is conducted in Computer-Based Test (CBT) mode by the National Testing Agency. The exam tests students on Physics, Chemistry, and Mathematics from the Class 11 and Class 12 syllabus. It is held multiple times a year, allowing students to improve their scores across sessions.",
      "particulars": [
        { "key": "Exam Name", "value": "Joint Entrance Examination – Main (JEE Main)" },
        { "key": "Conducting Body", "value": "National Testing Agency (NTA)" },
        { "key": "Exam Mode", "value": "Computer-Based Test (CBT)" },
        { "key": "Purpose", "value": "Admission to B.Tech, B.E, B.Arch, B.Planning" },
        { "key": "Subjects", "value": "Physics, Chemistry, Mathematics" },
        { "key": "Eligibility", "value": "10+2 (PCM) or appearing students" },
        { "key": "Minimum Marks to Appear", "value": "No fixed minimum percentage" },
        { "key": "Difficulty Level", "value": "Moderate to High" },
        { "key": "Frequency", "value": "Multiple sessions per year" }
      ],
      "subjectDistribution": {
        "title": "Subject-wise Question Distribution (B.Tech / B.E Paper)",
        "subjects": [
          { "subject": "Physics", "sectionA": 20, "sectionB": 10, "totalQuestions": 25, "marks": 100 },
          { "subject": "Chemistry", "sectionA": 20, "sectionB": 10, "totalQuestions": 25, "marks": 100 },
          { "subject": "Mathematics", "sectionA": 20, "sectionB": 10, "totalQuestions": 25, "marks": 100 },
          { "subject": "Total", "sectionA": 60, "sectionB": 30, "totalQuestions": "75 Questions", "marks": "300 Marks" }
        ]
      }
    },

    "conclusion": {
      "title": "Conclusion – JEE Main",
      "paragraphs": [
        "JEE Main is one of the most important and competitive engineering entrance exams in India, serving as the primary gateway for admission into top institutes such as NITs, IIITs, and GFTIs, and also acting as the qualifying exam for JEE Advanced for IIT admissions. It plays a crucial role in shaping the future of engineering aspirants by providing a fair, national-level platform to test their knowledge in Physics, Chemistry, and Mathematics.",
        "Overall, JEE Main 2026 is not just an exam but a career-defining opportunity for students who aspire to build a strong future in engineering, technology, research, innovation, and IT industries. With proper preparation, conceptual clarity, and consistent practice, students can secure admission into top engineering colleges and unlock excellent career opportunities in India and abroad."
      ]
    },

    "faqs": {
      "title": "FAQs – JEE Main 2026",
      "questions": [
        {
          "question": "What is JEE Main?",
          "answer": "JEE Main is a national-level engineering entrance exam conducted by NTA for admission into B.Tech, B.E, B.Arch, and B.Planning courses in top institutes like NITs, IIITs, and GFTIs."
        },
        {
          "question": "Who conducts JEE Main 2026?",
          "answer": "JEE Main is conducted by the National Testing Agency (NTA) in India."
        },
        {
          "question": "What is the eligibility for JEE Main?",
          "answer": "Candidates must have passed or be appearing in Class 12 with Physics, Chemistry, and Mathematics (PCM) from a recognized board."
        },
        {
          "question": "Is there any age limit for JEE Main?",
          "answer": "No, there is no age limit for appearing in JEE Main 2026."
        },
        {
          "question": "How many attempts are allowed in JEE Main?",
          "answer": "A candidate can attempt JEE Main for three consecutive years after passing Class 12, with multiple sessions each year."
        },
        {
          "question": "What are the courses offered through JEE Main?",
          "answer": "Courses include B.Tech, B.E, B.Arch, and B.Planning in top engineering institutes across India."
        },
        {
          "question": "What is the exam mode of JEE Main?",
          "answer": "JEE Main is conducted in Computer-Based Test (CBT) mode, except the drawing part of B.Arch which is conducted in offline (pen and paper) mode."
        },
        {
          "question": "What is the difficulty level of JEE Main?",
          "answer": "The exam is considered moderate to tough, requiring strong conceptual understanding and regular practice."
        },
        {
          "question": "What is the use of JEE Main score?",
          "answer": "JEE Main score is used for admission into NITs, IIITs, GFTIs, and for qualifying JEE Advanced for IITs."
        }
      ]
    }
  },
  "cat": {
    "title": "CAT Exam",
    "heroImage": "https://www.google.com/search?q=https://images.unsplash.com/photo-1523240715624-69ccebb429e3%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1600",
    "intro": [
      "CAT Exam (Common Admission Test) is one of the most prestigious and competitive national-level entrance exams in India conducted by the Indian Institutes of Management (IIMs) for admission into top management programs such as MBA in India (Master of Business Administration) and PGDM courses. It is widely regarded as the primary gateway for students who want to pursue an MBA in India from top B-schools, including the IIMs and other leading institutes like FMS, SPJIMR, and MDI.",
      "Every year, lakhs of students appear for the CAT exam in India to secure admission into the best colleges for MBA in India, making it one of the most important exams for management aspirants. The exam is designed to evaluate key skills such as quantitative aptitude, logical reasoning, data interpretation, and verbal ability, which are essential for success in business management and corporate careers.",
      "The CAT exam is conducted in a computer-based test (CBT) mode and is usually held once a year. It consists of three main sections: VARC (Verbal Ability and Reading Comprehension), DILR (Data Interpretation and Logical Reasoning), and QA (Quantitative Ability). These sections assess a candidate’s analytical thinking, problem-solving skills, communication ability, and time management, which are crucial for pursuing an MBA in India.",
      "One of the biggest advantages of clearing the CAT exam 2026 is that it opens doors to top institutes offering MBA in India with excellent placement opportunities and high salary packages. Students can build careers in sectors such as consulting, finance, marketing, operations, analytics, and entrepreneurship. Top recruiters include companies like McKinsey, BCG, Deloitte, Amazon, Google, and Accenture, offering attractive career growth.",
      "Overall, the CAT exam in India is a career-defining opportunity for students who aim to pursue an MBA in India from top colleges, develop strong managerial skills, and achieve success in the corporate world."
    ],
    "examParts": [
      "VARC",
      "DILR",
      "QA"
    ],
    "additionalNote": "The CAT exam is conducted in a computer-based test (CBT) mode and is usually held once a year. It consists of three main sections: VARC (Verbal Ability and Reading Comprehension), DILR (Data Interpretation and Logical Reasoning), and QA (Quantitative Ability). Preparation requires a smart strategy, consistency, and strong conceptual understanding.",
    "eligibility": {
      "title": "Eligibility Criteria for CAT Exam – MBA in India",
      "intro": "The CAT (Common Admission Test) is conducted by the Indian Institutes of Management (IIMs) for admission into top management programs like MBA in India and PGDM courses. To appear for the CAT exam 2026, candidates must meet certain eligibility requirements related to education, marks, and nationality.",
      "basicRequirements": {
        "title": "Basic Eligibility Requirements",
        "points": [
          "Candidates must have a Bachelor’s degree in any discipline from a recognized university.",
          "Students who are in their final year of graduation are also eligible to apply, provided they complete their degree within the specified time during admission.",
          "There is no age limit for appearing in the CAT exam, which means candidates of any age group can apply.",
          "There is no restriction on the number of attempts, so students can take the CAT exam multiple times to improve their scores.",
          "Both Indian and international candidates (NRIs, PIOs, OCIs, and foreign nationals) are eligible to apply under specific admission guidelines.",
          "Work experience is not mandatory for CAT, but it can be an added advantage during the selection process in top institutes like IIMs."
        ]
      },
      "educationalQualification": {
        "title": "Educational Qualification & Minimum Marks",
        "description": "Candidates from the General and EWS category must have at least 50% marks in graduation, while candidates from reserved categories require a lower percentage to qualify for admission into top B-schools offering MBA in India.",
        "marksRequired": [
          {
            "category": "General / EWS Category",
            "marks": "50% in Graduation"
          },
          {
            "category": "SC / ST / PwD Category",
            "marks": "45% in Graduation"
          }
        ]
      },
      "ageCriteria": {
        "title": "Age Limit & Number of Attempts",
        "description": "There is no age limit for appearing in the CAT exam. Candidates of any age group can apply as long as they meet the academic requirements. Additionally, there is no limit on the number of attempts; students can appear for CAT every year to improve their scores and secure admission into top B-schools."
      },
      "quotaEligibility": {
        "title": "Institutes Offering Courses via CAT",
        "quotas": [
          {
            "quota": "IIMs (Indian Institutes of Management)",
            "description": "The premier management institutes in India offering PGP/MBA programs."
          },
          {
            "quota": "FMS Delhi",
            "description": "Faculty of Management Studies, one of the top-ranked B-schools with high ROI."
          },
          {
            "quota": "SPJIMR Mumbai",
            "description": "S. P. Jain Institute of Management and Research, a leading private management school."
          },
          {
            "quota": "MDI Gurgaon",
            "description": "Management Development Institute, a top-tier institute for management education."
          },
          {
            "quota": "Other Top B-Schools",
            "description": "Institutes like IMT Ghaziabad, IMI, and IITs (Management Departments) also accept CAT scores."
          }
        ]
      },
      "documentsRequired": {
        "title": "Documents and Preparation Tips",
        "intro": "Preparing for the CAT requires a smart strategy. Focus on the following key areas:",
        "documents": [
          "Understand the Exam Pattern & Syllabus (VARC, DILR, QA)",
          "Build Strong Basics in Quantitative Ability and Verbal Ability",
          "Practice Time Management for sectional limits (40 minutes each)",
          "Take Regular Mock Tests to improve speed and accuracy",
          "Focus on Reading Skills (newspapers, articles, and editorials)",
          "Practice DILR Sets daily including puzzles and caselets",
          "Strengthen Quantitative Skills in Arithmetic, Algebra, and Geometry",
          "Create a realistic Study Plan with daily practice and weekly revision"
        ]
      }
    },
    "examPattern": {
      "title": "CAT 2026 Exam Pattern",
      "intro": "The CAT (Common Admission Test), conducted by the Indian Institutes of Management (IIMs), follows a structured and time-bound exam pattern designed to evaluate a candidate’s aptitude for pursuing an MBA in India.",
      "particulars": [
        { "key": "Exam Name", "value": "Common Admission Test (CAT)" },
        { "key": "Conducting Body", "value": "Indian Institutes of Management (IIMs)" },
        { "key": "Exam Level", "value": "National-level MBA entrance exam" },
        { "key": "Purpose", "value": "Admission to MBA in India and PGDM programs" },
        { "key": "Mode of Exam", "value": "Computer-Based Test (CBT)" },
        { "key": "Frequency", "value": "Once a year" },
        { "key": "Duration", "value": "120 Minutes (2 Hours)" },
        { "key": "Sections", "value": "VARC, DILR, QA" },
        { "key": "Medium", "value": "English" },
        { "key": "Eligibility", "value": "Bachelor’s degree with minimum 50% marks" }
      ],
      "subjectDistribution": {
        "title": "Section-wise Question Distribution",
        "subjects": [
          { "subject": "VARC (Verbal Ability & Reading Comprehension)", "questions": 24, "time": "40 Minutes", "topics": "Reading Comprehension, Para Jumbles, Para Summary" },
          { "subject": "DILR (Data Interpretation & Logical Reasoning)", "questions": 20, "time": "40 Minutes", "topics": "Data Sets, Graphs, Tables, Puzzles, Logical Reasoning" },
          { "subject": "QA (Quantitative Ability)", "questions": 22, "time": "40 Minutes", "topics": "Arithmetic, Algebra, Geometry, Number System" },
          { "subject": "Total", "questions": "66 Questions (Approx.)", "time": "120 Minutes", "topics": "All Sections Combined" }
        ]
      }
    },
    "conclusion": {
      "title": "Conclusion – CAT Exam",
      "paragraphs": [
        "The CAT (Common Admission Test) is one of the most important and competitive entrance exams for students aspiring to pursue an MBA in India from top business schools. Conducted by the Indian Institutes of Management (IIMs), CAT serves as the primary gateway to prestigious institutes that offer excellent academic exposure, industry connections, and high-paying career opportunities.",
        "Pursuing an MBA in India through CAT not only enhances career prospects in fields like consulting, finance, marketing, operations, and analytics, but also opens doors to leadership roles and global career opportunities. It is truly a career-defining step for students aiming to succeed in the corporate world."
      ]
    },
    "faqs": {
      "title": "FAQs – CAT Exam | MBA in India",
      "questions": [
        {
          "question": "What is the CAT exam?",
          "answer": "CAT (Common Admission Test) is a national-level entrance exam conducted by the Indian Institutes of Management (IIMs) for admission into MBA in India and PGDM programs in top B-schools."
        },
        {
          "question": "Who is eligible for CAT 2026?",
          "answer": "Candidates must have a Bachelor’s degree with at least 50% marks (45% for reserved categories). Final-year students can also apply."
        },
        {
          "question": "Is there any age limit for CAT exam?",
          "answer": "No, there is no age limit to appear for the CAT exam."
        },
        {
          "question": "How many times can I attempt CAT?",
          "answer": "There is no limit on the number of attempts. You can appear for CAT every year."
        },
        {
          "question": "What is the exam pattern of CAT?",
          "answer": "CAT consists of three sections: VARC, DILR, and QA, conducted in online (CBT) mode with a total duration of 2 hours."
        },
        {
          "question": "Which colleges accept CAT scores?",
          "answer": "Top colleges include IIMs, FMS Delhi, SPJIMR, MDI Gurgaon, IMT Ghaziabad, and many other institutes offering MBA in India."
        },
        {
          "question": "What is the syllabus of CAT exam?",
          "answer": "The syllabus includes Verbal Ability, Reading Comprehension, Logical Reasoning, Data Interpretation, and Quantitative Aptitude topics."
        },
        {
          "question": "What is a good score in CAT?",
          "answer": "A good CAT score depends on the college, but generally a 90+ percentile is considered good for top B-schools, while 95–99+ percentile is required for IIMs."
        }
      ]
    }
  },
  "clat": {
    "title": "CLAT Exam",
    "heroImage": "https://www.google.com/search?q=https://images.unsplash.com/photo-1589829545856-d10d557cf95f%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1600",
    "intro": [
      "CLAT (Common Law Admission Test) is a national-level entrance exam in India conducted by the Consortium of National Law Universities (NLUs Consortium) for admission into undergraduate and postgraduate law programs. It is the most important exam for students who want to pursue BA LL.B, BBA LL.B, and LL.M from top law universities in India.",
      "Every year, thousands of students appear for the CLAT exam in India to secure admission into prestigious institutions like the National Law Universities (NLUs), which are known for their high-quality legal education, experienced faculty, and excellent placement opportunities. CLAT is considered the gateway to building a successful career in law, judiciary, corporate law, legal consultancy, and civil services.",
      "The CLAT exam 2026 tests candidates on various skills such as English language, logical reasoning, legal reasoning, general knowledge, and quantitative techniques. The exam focuses on evaluating a student’s reading ability, comprehension skills, analytical thinking, and legal aptitude, which are essential for a career in the legal field.",
      "CLAT is conducted in offline (pen-and-paper mode) once a year, and admission is based on the candidate’s rank and score in the exam, followed by a centralized counselling process.",
      "CLAT in India is a career-defining exam for students who aspire to become lawyers, judges, legal advisors, corporate professionals, or policymakers, and it provides access to some of the best law colleges in the country."
    ],
    "examParts": [
      "English Language",
      "Current Affairs & GK",
      "Legal Reasoning",
      "Logical Reasoning",
      "Quantitative Techniques"
    ],
    "additionalNote": "CLAT is conducted in offline mode once a year. It consists of passage-based questions testing reading comprehension and legal aptitude. Participating institutes include National Law Universities (NLUs) across India.",
    "eligibility": {
      "title": "Eligibility Criteria for CLAT Exam",
      "intro": "The CLAT (Common Law Admission Test) is conducted by the Consortium of National Law Universities for admission into undergraduate and postgraduate law programs in top National Law Universities (NLUs). Candidates must meet specific eligibility criteria based on the course they are applying for.",
      "basicRequirements": {
        "title": "Basic Eligibility Requirements",
        "points": [
          "Candidates must have passed Class 12 (10+2) from a recognized board for UG programs.",
          "Students appearing in Class 12 in 2026 are also eligible to apply.",
          "For PG Program (LL.M), candidates must have completed LL.B (3-year or 5-year law degree) from a recognized university.",
          "Final-year LL.B students can also apply for the PG program.",
          "There is no upper age limit for appearing in CLAT as per the latest guidelines.",
          "Indian citizens, NRIs, PIOs, OCIs, and Foreign Nationals are eligible to apply.",
          "There is no restriction on the number of attempts for CLAT."
        ]
      },
      "educationalQualification": {
        "title": "Educational Qualification & Minimum Marks",
        "description": "Candidates must meet the minimum marks criteria at the time of admission into UG and PG programs. The requirements vary based on the category of the candidate.",
        "marksRequired": [
          { "category": "General / OBC / PWD / NRI", "marks": "Minimum 45% marks in qualifying exam" },
          { "category": "SC / ST Category", "marks": "Minimum 40% marks in qualifying exam" }
        ]
      },
      "ageCriteria": {
        "title": "Age Limit & Number of Attempts",
        "description": "There is no upper age limit for appearing in CLAT. Candidates of any age group can apply. Furthermore, there is no restriction on the number of attempts; candidates can appear multiple times to improve their score."
      },
      "quotaEligibility": {
        "title": "Participating NLUs and Institutes",
        "quotas": [
          { "quota": "National Law Universities (NLUs)", "description": "Premier law institutions in India offering high-quality legal education and placement opportunities." },
          { "quota": "Private Law Colleges", "description": "Several top private law schools in India accept CLAT scores for their admission process." },
          { "quota": "Public Sector Undertakings (PSUs)", "description": "Many PSUs use CLAT PG scores for recruitment into legal positions." }
        ]
      },
      "documentsRequired": {
        "title": "Preparation Tips for CLAT Exam",
        "intro": "Preparing for CLAT requires a smart strategy and strong reading habits. Focus on the following areas:",
        "documents": [
          "Understand the Exam Pattern & Syllabus (English, Legal Reasoning, GK, Logical Reasoning, and Quantitative Techniques)",
          "Develop Strong Reading Habits by reading newspapers and editorials daily",
          "Focus on Current Affairs & GK, revising monthly current affairs regularly",
          "Strengthen Legal Reasoning by understanding basic legal principles",
          "Practice Logical Reasoning daily including puzzles and arguments",
          "Prepare Quantitative Techniques focusing on basic maths and data interpretation",
          "Take Regular Mock Tests to improve time management and identify weaknesses",
          "Make a Study Plan that allocates time for each section and revision"
        ]
      }
    },
    "examPattern": {
      "title": "Exam Pattern for CLAT",
      "intro": "The CLAT (Common Law Admission Test) follows a structured exam pattern designed to test a candidate’s reading comprehension, logical reasoning, legal aptitude, and analytical skills.",
      "particulars": [
        { "key": "Exam Name", "value": "Common Law Admission Test (CLAT)" },
        { "key": "Conducting Body", "value": "Consortium of National Law Universities" },
        { "key": "Exam Level", "value": "National-level Law Entrance Exam" },
        { "key": "Purpose", "value": "Admission to UG & PG Law Programs (BA LL.B, BBA LL.B, LL.M)" },
        { "key": "Mode of Exam", "value": "Offline (Pen & Paper Based)" },
        { "key": "Frequency", "value": "Once a year" },
        { "key": "Duration", "value": "2 Hours" },
        { "key": "Total Questions", "value": "120 Questions" },
        { "key": "Question Type", "value": "Passage-based Objective Type" },
        { "key": "Medium", "value": "English" }
      ],
      "subjectDistribution": {
        "title": "Section-wise Question Distribution (UG Paper)",
        "subjects": [
          { "subject": "English Language", "questions": "22–26", "focus": "Reading comprehension, vocabulary, grammar" },
          { "subject": "Current Affairs & GK", "questions": "28–32", "focus": "Current events, static GK, legal awareness" },
          { "subject": "Legal Reasoning", "questions": "28–32", "focus": "Legal principles, case-based reasoning" },
          { "subject": "Logical Reasoning", "questions": "22–26", "focus": "Arguments, puzzles, critical reasoning" },
          { "subject": "Quantitative Techniques", "questions": "10–14", "focus": "Basic maths, data interpretation" },
          { "subject": "Total", "questions": "120 Questions", "focus": "All Sections Combined" }
        ]
      }
    },
    "conclusion": {
      "title": "Conclusion – CLAT Exam",
      "paragraphs": [
        "The CLAT (Common Law Admission Test) is one of the most important entrance exams for students aspiring to build a successful career in the field of law. Conducted by the Consortium of National Law Universities, it serves as the primary gateway to prestigious institutions like the National Law Universities (NLUs), which are known for their academic excellence and strong placement opportunities.",
        "Overall, CLAT 2026 is not just an entrance exam but a career-defining opportunity for students who aim to pursue programs like BA LL.B, BBA LL.B, and LL.M in India. With the right preparation strategy and consistent practice, students can secure admission into top law colleges and build a foundation for a rewarding career in litigation, corporate law, or civil services."
      ]
    },
    "faqs": {
      "title": "Frequently Asked Questions (FAQs) – CLAT",
      "questions": [
        {
          "question": "What is CLAT?",
          "answer": "The Common Law Admission Test (CLAT) is a national-level entrance examination in India conducted for admission to undergraduate (UG) and postgraduate (PG) law programs."
        },
        {
          "question": "Who conducts the CLAT exam?",
          "answer": "CLAT is conducted by the Consortium of National Law Universities, which is a body comprising representative universities (NLUs)."
        },
        {
          "question": "What courses are offered through CLAT?",
          "answer": "Admission into 5-year integrated law courses (BA LL.B, BBA LL.B) and 1-year LL.M courses."
        },
        {
          "question": "What is the eligibility criteria for CLAT?",
          "answer": "For UG, Class 12 with at least 45% marks (40% for SC/ST). For PG, LL.B degree with at least 50% marks (45% for SC/ST)."
        },
        {
          "question": "What is the exam pattern of CLAT UG?",
          "answer": "It consists of comprehension-based questions in English, GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques."
        },
        {
          "question": "When is the CLAT exam conducted?",
          "answer": "CLAT is generally conducted once a year, usually in December."
        },
        {
          "question": "How can I apply for CLAT?",
          "answer": "Candidates can apply through the official online portal by registering and filling out the application form."
        },
        {
          "question": "What is the application fee for CLAT?",
          "answer": "Around ₹4000 for General/OBC/NRI and ₹3500 for SC/ST/BPL candidates."
        }
      ]
    }
  },
  "cuet": {
    "title": "CUET",
    "heroImage": "https://www.google.com/search?q=https://images.unsplash.com/photo-1546410531-bb4caa6b424d%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1600",
    "intro": [
      "The Common University Entrance Test (CUET) is a national-level entrance examination introduced to streamline the admission process for undergraduate and postgraduate courses across India. Conducted by the National Testing Agency (NTA), CUET provides a single-window opportunity for students to apply to multiple universities using one standardized test.",
      "Earlier, university admissions were primarily based on Class 12 board marks, which often created disparities due to varying evaluation systems across different boards. CUET eliminates this issue by offering a common platform where all students are assessed on the same criteria, ensuring fairness, transparency, and equal opportunity.",
      "CUET is widely accepted by top central universities such as the University of Delhi, Banaras Hindu University, and Jawaharlal Nehru University, along with several state and private universities. The exam covers multiple sections, including language proficiency, domain-specific subjects, and a general test, allowing students to choose subjects based on their desired course and career path.",
      "Overall, CUET has revolutionized the higher education admission system in India by making it more accessible, standardized, and student-friendly, reducing the burden of multiple entrance exams while increasing opportunities for aspirants nationwide.",
      "CUET plays a crucial role in simplifying the admission process. Instead of appearing for multiple university-specific entrance exams, students can now apply to multiple institutions through a single exam, saving time, effort, and cost. It ensures equal opportunity for students from all educational backgrounds, whether they belong to CBSE, ICSE, or state boards."
    ],
    "examParts": [
      "Language Test",
      "Domain Subjects",
      "General Test"
    ],
    "additionalNote": "CUET is widely accepted by prestigious universities such as University of Delhi, Banaras Hindu University, Jawaharlal Nehru University, and Aligarh Muslim University, along with many other participating institutions. This makes CUET a gateway to some of the top colleges and universities in India.",
    "eligibility": {
      "title": "Eligibility Criteria for CUET",
      "intro": "The eligibility criteria for CUET vary slightly depending on whether you are applying for Undergraduate (UG) or Postgraduate (PG) courses. The exam is conducted by the National Testing Agency (NTA), and candidates must fulfill the basic requirements before applying.",
      "basicRequirements": {
        "title": "Basic Eligibility Requirements (UG & PG)",
        "points": [
          "For UG: Candidates must have passed Class 12 (10+2) or equivalent from a recognized board.",
          "Students appearing in Class 12 are also eligible to apply for UG programs.",
          "For PG: Candidates must have a Bachelor’s degree in a relevant field from a recognized university.",
          "Final-year graduation students are also eligible to apply for PG programs.",
          "There is no specific age limit for CUET UG (subject to university rules).",
          "Candidates must be Indian citizens. Foreign nationals, NRIs, and OCI candidates may apply per university-specific rules.",
          "Candidates must choose subjects in CUET according to their Class 12 subjects."
        ]
      },
      "educationalQualification": {
        "title": "Educational Qualification & Minimum Marks",
        "description": "Minimum marks required for qualification vary between Undergraduate and Postgraduate levels and are subject to specific university policies.",
        "marksRequired": [
          { "category": "UG - General Category", "marks": "45%–50% (varies by university)" },
          { "category": "UG - SC/ST Category", "marks": "40%–45%" },
          { "category": "PG - General Category", "marks": "50%–55% (varies by university)" },
          { "category": "PG - Reserved Categories", "marks": "45%–50%" }
        ]
      },
      "ageCriteria": {
        "title": "Age Limit & Attempts",
        "description": "Generally, there is no age limit for CUET. However, candidates must satisfy any specific age requirements set by the individual universities they are applying to. There is no specified limit on the number of attempts as long as academic eligibility is met."
      },
      "quotaEligibility": {
        "title": "Participating Universities",
        "quotas": [
          { "quota": "Central Universities", "description": "Includes top-tier institutes like University of Delhi (DU), JNU, BHU, and AMU." },
          { "quota": "State Universities", "description": "Various state-run universities across India accepting CUET scores." },
          { "quota": "Private & Deemed Universities", "description": "Multiple private institutions using standardized CUET scores for admissions." }
        ]
      },
      "documentsRequired": {
        "title": "Preparation Tips for CUET",
        "intro": "Preparing for the CUET exam requires a smart strategy and consistency. Focus on the following key tips:",
        "documents": [
          "Understand the CUET Syllabus and Exam Pattern (Language, Domain, General Test)",
          "Focus on NCERT Books for Class 11 & 12 as the syllabus is strictly aligned with them",
          "Create a Proper Study Plan with a balanced timetable for all sections",
          "Practice Mock Tests Regularly to improve time management and identify weak areas",
          "Improve Time Management Skills by solving questions within fixed limits",
          "Strengthen Your Weak Areas through targeted revision and analysis",
          "Stay Updated with Current Affairs for the General Test section",
          "Work on Language Skills including reading comprehension, vocabulary, and grammar"
        ]
      }
    },
    "examPattern": {
      "title": "Exam Pattern for CUET",
      "intro": "The CUET exam pattern is designed to test a student’s language skills, subject knowledge, and general aptitude. The exam follows a structured format that allows candidates to choose subjects based on their desired course.",
      "particulars": [
        { "key": "Exam Name", "value": "Common University Entrance Test (CUET)" },
        { "key": "Conducting Body", "value": "National Testing Agency (NTA)" },
        { "key": "Exam Mode", "value": "Computer-Based Test (CBT)" },
        { "key": "Frequency", "value": "Once a Year" },
        { "key": "Question Type", "value": "Multiple Choice Questions (MCQs)" },
        { "key": "Marking Scheme", "value": "+5 for correct, -1 for wrong" },
        { "key": "Medium", "value": "Multiple Languages (13+ Available)" }
      ],
      "subjectDistribution": {
        "title": "Section-wise Exam Structure",
        "subjects": [
          { "subject": "Section I: Language Test", "details": "13+ languages available; tests comprehension and verbal ability" },
          { "subject": "Section II: Domain-Specific Subjects", "details": "Based on Class 12 NCERT syllabus; up to 27 subjects available" },
          { "subject": "Section III: General Test", "details": "GK, Current Affairs, Reasoning, and Quantitative Aptitude" }
        ]
      }
    },
    "conclusion": {
      "title": "Conclusion – CUET",
      "paragraphs": [
        "In conclusion, the CUET exam has brought a major transformation in the higher education admission system in India by introducing a fair, transparent, and standardized selection process for students. Conducted by the National Testing Agency (NTA), CUET provides a single platform for admission to multiple universities, reducing the stress of appearing in different entrance exams and ensuring equal opportunities for all aspirants.",
        "With its well-structured exam pattern, syllabus based on NCERT, and wide acceptance by top universities like University of Delhi and Banaras Hindu University, CUET has become one of the most important entrance exams after Class 12. Students who prepare with the right strategy and conceptual clarity can achieve excellent scores and secure admission in top colleges."
      ]
    },
    "faqs": {
      "title": "FAQs – CUET",
      "questions": [
        {
          "question": "What is CUET?",
          "answer": "CUET (Common University Entrance Test) is a national-level entrance exam conducted for admission into UG and PG courses in various central, state, and private universities across India."
        },
        {
          "question": "Who conducts the CUET exam?",
          "answer": "CUET is conducted by the National Testing Agency (NTA)."
        },
        {
          "question": "What courses can I apply for through CUET?",
          "answer": "Courses like BA, B.Com, B.Sc, BBA, BCA at UG level and MA, M.Com, M.Sc, MBA at PG level."
        },
        {
          "question": "What is the eligibility criteria for CUET UG?",
          "answer": "Candidates must have passed Class 12 from a recognized board. Students appearing in Class 12 are also eligible."
        },
        {
          "question": "Is there any age limit for CUET?",
          "answer": "No, there is generally no age limit for CUET, but some universities may have their own criteria."
        },
        {
          "question": "What is the exam mode of CUET?",
          "answer": "CUET is conducted in Computer-Based Test (CBT) mode."
        },
        {
          "question": "Is there negative marking in CUET?",
          "answer": "Yes, there is negative marking: +5 marks for correct answer and -1 mark for incorrect answer."
        },
        {
          "question": "Which universities accept CUET scores?",
          "answer": "Top universities include University of Delhi, JNU, BHU, and AMU."
        }
      ]
    }
  }
}