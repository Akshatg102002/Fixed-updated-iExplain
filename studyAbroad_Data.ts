import { StudyAbroadDetailData } from './types.ts';

export const STUDY_ABROAD_DETAILED: Record<string, StudyAbroadDetailData> = {
  usa: {
    title: "Study in USA",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-usa.jpg.jpeg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/usa-2.jpg",

    intro: {
      text: "Study in USA is one of the most popular choices for international students who want to pursue higher education abroad. Every year thousands of students choose to study in USA because of the world-class universities, advanced education system, and global career opportunities.<br /><br />When students decide to study in USA, they gain access to some of the best academic institutions in the world. Universities in the United States offer modern learning methods, practical training, and research-based education. Choosing to study in USA allows students to explore diverse academic programs and gain knowledge that is recognized worldwide.<br /><br />Another major reason why students prefer to study in USA is the flexible education system. Students who study in USA can choose their courses according to their interests and career goals. This flexibility helps them build strong academic foundations and professional skills.<br /><br />International exposure is another advantage when students study in USA. Students from different countries come together to study in USA, creating a multicultural learning environment. This experience improves communication skills and global networking opportunities.<br /><br />For students planning to build successful international careers, choosing to study in USA is a smart decision.",
      image: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-uk.jpg"
    },

    whyStudy: [
      "High academic standards in the USA, and the degrees awarded are recognized globally.",
      "Many opportunities for research in the USA compared to other countries.",
      "Many facilities on campus and experienced faculty members who have many connections in the field.",
      "Some universities also encourage students to take up internships while they are studying in USA.",
      "Many courses on offer — students can choose to study in USA in many fields, including engineering, business management, computer science, health sciences, data science, and many more.",
      "Diversity on campus — students who choose to study in USA are exposed to many cultures because of the presence of students from all over the world."
    ],

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "4 Years",
        description: "The bachelor's degree is an undergraduate course, and the duration of the course is generally four years."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "The duration of the master's degree course is generally one to two years."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 6 Years",
        description: "The duration of the doctoral degree course is generally three to six years. Many research-oriented students prefer to study in the USA for their doctoral programs, as the universities in the USA offer the best scholarships and research facilities to their students."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "Harvard University",
        location: "Massachusetts",
        description: "Business, Law"
      },
      {
        name: "Stanford University",
        location: "California",
        description: "Engineering"
      },
      {
        name: "MIT",
        location: "Massachusetts",
        description: "Technology"
      },
      {
        name: "Columbia University",
        location: "New York",
        description: "Finance"
      },
      {
        name: "University of California",
        location: "California",
        description: "Computer Science"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during the academic session",
      details: [
        "International students who have an F1 visa have the right to work 20 hours per week during the academic session.",
        "They have the right to work full-time during the holiday season.",
        "International students who study in USA often work in various places such as the library, cafeteria, and offices.",
        "Working while studying in USA is beneficial for students."
      ]
    },

    postStudyWork: {
      program: "Optional Practical Training (OPT)",
      duration: "12 months (24-month extension for STEM = 36 months total)",
      description: "OPT is an opportunity for students who study in USA to work in USA for 12 months after graduation. Students who study in USA in STEM programs can also get an extension of 24 months, enabling them to work for 3 years."
    },

    documentsRequired: [
      {
        document: "Academic Transcripts",
        purpose: "Educational records"
      },
      {
        document: "Passport",
        purpose: "Identity proof"
      },
      {
        document: "SOP",
        purpose: "Study plan explanation"
      },
      {
        document: "Letters of Recommendation",
        purpose: "Academic references"
      },
      {
        document: "English Test Score",
        purpose: "Proof of language skills"
      },
      {
        document: "Resume",
        purpose: "Academic and work background"
      }
    ],

    intakes: [
      {
        intake: "Fall Intake",
        months: "Aug - Sep",
        details: "Most popular intake"
      },
      {
        intake: "Spring Intake",
        months: "Jan - Feb",
        details: "Second major intake"
      },
      {
        intake: "Summer Intake",
        months: "May - Jun",
        details: "Limited courses"
      }
    ],

    cost: {
      tuitionFees: [
        {
          category: "Undergraduate",
          averageCostPerYear: "$20,000 - $50,000 per year"
        },
        {
          category: "Graduate",
          averageCostPerYear: "$25,000 - $70,000 per year"
        }
      ],
      livingExpenses: "$10,000 - $20,000 per year",
      additionalCosts: "Students studying in the USA typically spend around $10,000 - $20,000 per year on living expenses, including accommodation, food, transportation, and other daily costs. The exact amount may vary depending on the city, university location, and the student's lifestyle."
    },

    whyChooseUs: [
      {
        heading: "Personalized Career Counseling",
        description: "Our experienced counselors understand your academic background, interests, and career goals to help you choose the right course and the best universities in the USA."
      },
      {
        heading: "University & Course Selection",
        description: "With access to a wide network of universities, we help you find programs that perfectly match your profile, budget, and future career plans."
      },
      {
        heading: "Complete Application Support",
        description: "From shortlisting universities to application submission, our team ensures your application stands out and increases your chances of admission."
      },
      {
        heading: "Visa Guidance & Documentation",
        description: "We provide expert assistance with documentation, visa preparation, and interview guidance to make your visa process smooth and stress-free."
      },
      {
        heading: "End-to-End Support",
        description: "From your first counseling session to your departure for the USA, we stay with you throughout the entire process."
      }
    ],

    whyChooseUsTagline: "Start Your USA Journey with Confidence. At iExplain Education, we don't just process applications - we build your future. Connect with us today and take the first step toward studying in the USA!",

    lifeAndCareer: {
      description: "Choosing to study in the USA is not only about receiving a world-class education, but also about opening the door to global career opportunities and a high-quality lifestyle. Students gain international exposure, practical learning, and valuable skills that are highly respected by employers around the world.",
      points: [
        "After completing their studies, students can explore career opportunities in top industries such as Technology, Finance, Healthcare, Engineering, Business Management, and Data Science.",
        "Employers across the world prefer graduates from the USA because they are trained in innovative learning environments, develop strong problem-solving abilities, and gain practical industry knowledge.",
        "One of the biggest advantages of studying in the USA is the opportunity to gain real work experience through programs like Optional Practical Training (OPT) and STEM OPT extensions. These programs allow international students to work in the United States after graduation, helping them build professional skills and international work experience.",
        "Studying in the USA not only strengthens your career prospects but also helps you build a global network, professional confidence, and international exposure that can shape a successful future anywhere in the world."
      ],
      tagline: "Start your journey with iExplain Education and unlock global career opportunities in the USA!"
    },

    faqs: [
      {
        question: "Why should I study in USA?",
        answer: "Students choose to study in USA because of high-quality education, globally recognized degrees, and strong career opportunities."
      },
      {
        question: "How much does it cost to study in USA?",
        answer: "The cost to study in USA ranges between $20,000 - $70,000 per year depending on the program."
      },
      {
        question: "Can international students work while they study in USA?",
        answer: "Yes, students who study in USA on an F-1 visa can work 20 hours per week during academic sessions."
      },
      {
        question: "What exams are required to study in USA?",
        answer: "Students planning to study in USA may need IELTS, TOEFL, GRE, or GMAT depending on the program."
      },
      {
        question: "Are scholarships available to study in USA?",
        answer: "Yes, many universities provide scholarships to international students who want to study in USA."
      }
    ]
  },
  uk: {
    title: "Study in UK",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-uk.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/UK-2.jpg",

    intro: {
      text: "The United Kingdom is one of the most popular destinations for international students who wish to pursue the best education abroad. Every year, thousands of students decide to pursue their education in the UK due to the presence of the world's top-ranked universities and the presence of excellent research facilities and career prospects.<br /><br />The United Kingdom has earned a reputation for being flexible, innovative, and excellent in the education sector. By pursuing their higher education in the UK, students are given the opportunity to learn in a new and modern environment and from the most experienced faculty members in the industry.<br /><br />Another major reason why the United Kingdom is the most popular destination for students who wish to pursue their higher education is the presence of numerous universities and courses. From business and engineering to medicine and technology, students are given the option of pursuing any course from the top-ranked universities in the world.<br /><br />Studying in the United Kingdom also provides students with international exposure and excellent job opportunities after completing their courses.",
      image: ""
    },

    whyStudy: [
      {
        heading: "World-Class Universities",
        description: "Some of the world-class universities in the United Kingdom include the University of Oxford, the University of Cambridge, and Imperial College London. These universities offer high-quality education, modern amenities, and recognized qualifications."
      },
      {
        heading: "Shorter Course Duration",
        description: "One of the biggest advantages of choosing to study in UK is that courses in UK are of a shorter duration. Bachelor's courses in UK take three years, whereas master's courses take only one year."
      },
      {
        heading: "Research Opportunities",
        description: "The UK is known for innovation and research. Universities offer advanced laboratories and research programs that help students develop practical knowledge and professional skills."
      },
      {
        heading: "Multicultural Environment",
        description: "Students from different countries come to the UK for education, creating a diverse and inclusive academic environment."
      },
      {
        heading: "Global Career Opportunities",
        description: "Graduates who study in UK have better chances of working in multinational companies around the world."
      },
      {
        heading: "High-Quality Education System",
        description: "Universities follow strict quality standards monitored by organizations such as the Quality Assurance Agency for Higher Education."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "University of Oxford",
        location: "Oxford",
        description: "Law, Medicine, Business, Philosophy",
        averageTuitionFees: "£34,000 – £88,000"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge",
        description: "Engineering, Mathematics, Science",
        averageTuitionFees: "£27,000 – £80,000"
      },
      {
        name: "Imperial College London",
        location: "London",
        description: "Engineering, Medicine, Technology",
        averageTuitionFees: "£35,000 – £74,000"
      },
      {
        name: "London School of Economics and Political Science",
        location: "London",
        description: "Economics, Finance, Social Sciences",
        averageTuitionFees: "£30,000 – £43,000"
      },
      {
        name: "University College London",
        location: "London",
        description: "Architecture, Medicine, Engineering",
        averageTuitionFees: "£26,000 – £43,000"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh",
        description: "Computer Science, Business, Law",
        averageTuitionFees: "£29,000 – £45,000"
      },
      {
        name: "King's College London",
        location: "London",
        description: "Medicine, Law, Humanities",
        averageTuitionFees: "£24,000 – £74,000"
      },
      {
        name: "University of Manchester",
        location: "Manchester",
        description: "Business, Engineering, Data Science",
        averageTuitionFees: "£33,000 – £48,000"
      }
    ],

    documentsRequired: [
      {
        document: "Valid Passport",
        purpose: "Required for identity verification and international travel"
      },
      {
        document: "Academic Transcripts",
        purpose: "Proof of previous education such as high school or bachelor's degree"
      },
      {
        document: "English Language Test Score (IELTS/TOEFL/PTE)",
        purpose: "Demonstrates English language proficiency"
      },
      {
        document: "Statement of Purpose (SOP)",
        purpose: "Explains the student's study goals and reasons for choosing the course and university"
      },
      {
        document: "Letters of Recommendation (LOR)",
        purpose: "Academic or professional references supporting the student's application"
      },
      {
        document: "Confirmation of Acceptance for Studies (CAS)",
        purpose: "Official letter issued by the UK university confirming admission"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during term time and full-time during university holidays",
      details: [
        "International students who decide to study in the UK have the opportunity to work part-time while pursuing their studies.",
        "This allows them to gain valuable work experience, acquire professional skills, and cover their living costs during their study period in the United Kingdom.",
        "Most international students with a valid UK Student Visa have the opportunity to work up to 20 hours a week during term time and full-time during university holidays.",
        "Working part-time allows students to enhance their communication skills, establish a network of professionals, and gain valuable work experience in the UK.",
        "Students can find part-time jobs in various sectors, such as retail outlets, restaurants, cafes, universities, customer service outlets, administrative offices, etc.",
        "Most universities in the UK offer students job opportunities, such as library assistants, research assistants, student ambassadors, etc.",
        "Working part-time while pursuing studies not only allows students to cover their daily expenses but also helps them gain valuable work experience, which can be useful for their future career opportunities after completing their studies."
      ]
    },

    cost: {
      tuitionFees: [
        {
          category: "Undergraduate Degree Tuition Fee",
          averageCostPerYear: "£10,500 – £22,000 per year"
        },
        {
          category: "Postgraduate (Master's) Tuition Fee",
          averageCostPerYear: "£10,500 – £22,000 per year"
        },
        {
          category: "PhD / Doctoral Programs",
          averageCostPerYear: "£17,000 – £22,000 per year"
        },
        {
          category: "MBA Programs",
          averageCostPerYear: "£11,000 – £20,000 per year"
        }
      ],
      additionalCosts: "The cost to study in UK depends upon the course, university, and city that a student selects. International students who plan to study in the UK must pay higher fees compared to local students. In addition to this, they must also consider the cost of living."
    },

    whyChooseUs: [
      {
        heading: "Personalized Career Counseling",
        description: "Our experienced counselors understand your academic background, interests, and career goals to help you choose the right course and the best universities in the UK."
      },
      {
        heading: "University & Course Selection",
        description: "With access to a wide network of universities, we help you find programs that perfectly match your profile, budget, and future career plans."
      },
      {
        heading: "Complete Application Support",
        description: "From shortlisting universities to application submission, our team ensures your application stands out and increases your chances of admission."
      },
      {
        heading: "Visa Guidance & Documentation",
        description: "We provide expert assistance with documentation, visa preparation, and interview guidance to make your visa process smooth and stress-free."
      },
      {
        heading: "End-to-End Support",
        description: "From your first counseling session to your departure for the UK, we stay with you throughout the entire process."
      }
    ],

    postStudyWork: {
      program: "Graduate Route Visa",
      duration: "Undergraduate and master's graduates: up to 1.5 years | PhD graduates: up to 3 years",
      description: "One of the biggest advantages for international students is the Graduate Route Visa, which allows students to stay and work in the UK after completing their degree. With this visa, undergraduate and master's graduates can stay for up to 1.5 years, while PhD graduates can stay for up to 3 years to look for jobs or gain work experience."
    },

    lifeAndCareer: {
      description: "After completing their education, students who study in UK gain access to excellent career opportunities and international exposure. A degree from universities in the United Kingdom is highly respected around the world, which helps graduates find job opportunities in global companies across many industries.",
      points: [
        "The job market in the UK provides opportunities in various fields such as finance, technology, healthcare, engineering, marketing, and business management.",
        "The major business centers in the UK, such as London, Manchester, and Edinburgh, provide opportunities for graduates to work in multinational companies and businesses.",
        "Besides the job opportunities, the quality of life in the UK is another major factor that attracts students from different countries.",
        "The country provides a diverse environment in which students can have the opportunity to mingle with different types of people and experience different cultures.",
        "Thus, studying in the UK provides students not only the opportunity for a high-quality education but also the opportunity to experience the global job market and have a successful life."
      ]
    },

    intakes: [
      {
        intake: "September Intake",
        months: "September",
        details: "Main intake – highest number of courses and universities available"
      },
      {
        intake: "January Intake",
        months: "January",
        details: "Second intake"
      },
      {
        intake: "May Intake",
        months: "May",
        details: "Limited intake"
      }
    ],

    faqs: [
      {
        question: "What are the basic requirements to study in the UK?",
        answer: "To study in the UK, international students generally require academic transcripts, a valid passport, English language proficiency tests like IELTS or TOEFL, a Statement of Purpose (SOP), financial documents to cover tuition fees and living expenses, etc. Additionally, international students require a Confirmation of Acceptance for Studies (CAS) from the chosen university in the UK before applying for a student visa."
      },
      {
        question: "Can international students work while studying in the UK?",
        answer: "Yes, international students can work while studying in the UK. They can work for 20 hours per week during term time and full-time during the holidays if they have a valid student visa for the UK."
      },
      {
        question: "Is IELTS necessary if I wish to study in the UK?",
        answer: "No, it is not necessary. But most universities require students to appear for English proficiency interviews. It totally depends on the profile of the student."
      },
      {
        question: "What are the main intakes for UK universities?",
        answer: "The main intakes for the UK universities are September (main intake), January (second intake), and May (limited intake). The main intake in the UK universities is in the month of September, and in this intake, the highest number of courses and universities are available."
      },
      {
        question: "Can students stay in the UK after the completion of their studies?",
        answer: "Yes, international students can apply for the Graduate Route Visa, which allows them to work in the UK for 1.5 years after the completion of their bachelor's or master's degree and for 3 years after the completion of their PhD."
      },
      {
        question: "Is the UK an attractive place for international students?",
        answer: "Yes, the UK is one of the most popular destinations in the world for international students due to its excellent education system and globally recognized universities."
      }
    ]
  },
  australia: {
    title: "Study in Australia",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-AUSTRALIA.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/AUSTRALIA-2.jpg",


    intro: {
      text: "Studying in Australia has become one of the most popular choices for international students who want a world-class education, global career opportunities, and a vibrant lifestyle. Australia is known for its high-quality universities, advanced research facilities, and welcoming multicultural environment that attracts students from every part of the world.<br /><br />Every year, thousands of students choose to study in Australia because of its strong academic reputation, modern teaching methods, and globally recognised degrees. Australian universities focus on both theoretical knowledge and practical learning, helping students develop the skills required for successful careers in a competitive global job market. Students can choose from a wide range of programs including business, engineering, information technology, healthcare, hospitality, finance, and many other professional fields.<br /><br />In addition to academic excellence, Australia offers a high quality of life and a safe environment for international students. Popular student cities such as Sydney, Melbourne, Brisbane, and Perth provide modern infrastructure, excellent public transportation, and a vibrant cultural lifestyle.<br /><br />Another major advantage of studying in Australia is the opportunity for students to gain practical experience while completing their education. International students are allowed to work part-time during their studies, which helps them manage living expenses and gain valuable professional experience. After graduation, many students can also apply for post-study work opportunities that allow them to stay and work in Australia for a certain period.",
      image: ""
    },

    whyStudy: [
      "The degrees and qualifications offered in Australian universities are recognised all over the world. Universities provide quality education to their students.",
      "The country's multicultural environment is a great advantage for the students. Students get a chance to mingle with people from different parts of the world.",
      "The country's education system also gives the students a chance to gain experience from the Australian workforce.",
      "Sydney, Melbourne, Brisbane, Perth, etc. are considered to be the best places to live in the world."
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "University of Melbourne",
        location: "Melbourne",
        description: "Business, Medicine, Engineering",
        averageTuitionFees: "AUD 35,000 – AUD 45,000"
      },
      {
        name: "University of Sydney",
        location: "Sydney",
        description: "Law, Medicine, Business",
        averageTuitionFees: "AUD 40,000 – AUD 50,000"
      },
      {
        name: "Australian National University",
        location: "Canberra",
        description: "Political Science, Economics",
        averageTuitionFees: "AUD 35,000 – AUD 45,000"
      },
      {
        name: "University of Queensland",
        location: "Brisbane",
        description: "Science, Engineering",
        averageTuitionFees: "AUD 33,000 – AUD 43,000"
      },
      {
        name: "Monash University",
        location: "Melbourne",
        description: "Pharmacy, Business, IT",
        averageTuitionFees: "AUD 32,000 – AUD 45,000"
      },
      {
        name: "University of Western Australia",
        location: "Perth",
        description: "Engineering, Mining, Business",
        averageTuitionFees: "AUD 30,000 – AUD 40,000"
      }
    ],

    documentsRequired: [
      {
        document: "Valid Passport",
        purpose: "Required for identity verification and international travel"
      },
      {
        document: "Academic Transcripts",
        purpose: "Proof of previous education such as high school or bachelor's degree"
      },
      {
        document: "English Language Test Score (IELTS / TOEFL / PTE)",
        purpose: "Demonstrates English language proficiency"
      },
      {
        document: "Statement of Purpose (SOP)",
        purpose: "Explains the student's study goals and reasons for choosing the course and university"
      },
      {
        document: "Letters of Recommendation (LOR)",
        purpose: "Academic or professional references supporting the application"
      },
      {
        document: "Confirmation of Enrolment (CoE)",
        purpose: "Official document issued by the Australian university confirming admission"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "48 hours per fortnight (every two weeks) during academic sessions and full-time during university holidays",
      details: [
        "International students who choose to study in Australia have the opportunity to work part-time while completing their education.",
        "This allows students to gain valuable work experience, improve their professional skills, and support their living expenses during their studies in Australia.",
        "According to Australian student visa regulations, international students can work up to 48 hours per fortnight (every two weeks) during their academic sessions and full-time during university holidays.",
        "This flexibility allows students to balance their studies while gaining practical work experience.",
        "Students can find part-time job opportunities in sectors such as retail stores, restaurants, cafes, supermarkets, delivery services, customer service, and administrative roles.",
        "Many universities also provide on-campus job opportunities, including roles such as library assistants, research assistants, and campus support staff.",
        "Working part-time while studying not only helps students manage their daily expenses but also gives them exposure to the Australian work environment. It also helps students build communication skills, professional networks, and valuable experience that can benefit their future careers after graduation."
      ]
    },

    cost: {
      tuitionFees: [
        {
          category: "Undergraduate Degree Tuition Fee",
          averageCostPerYear: "AUD 35,000 – AUD 50,000 per year"
        },
        {
          category: "Postgraduate (Master's) Tuition Fee",
          averageCostPerYear: "AUD 35,000 – AUD 50,000 per year"
        },
        {
          category: "Doctoral / PhD Programs",
          averageCostPerYear: "AUD 25,000 – AUD 50,000 per year"
        },
        {
          category: "MBA Programs",
          averageCostPerYear: "AUD 35,000 – AUD 60,000 per year"
        }
      ],
      livingExpenses: "AUD 2,000 to AUD 3,000 per month",
      additionalCosts: "International students in Australia generally spend around AUD 2,000 to AUD 3,000 per month depending on the city, lifestyle, and accommodation type. For Visa purpose, we need to show AUD 29,710. Planning a proper budget before choosing to study in Australia helps students manage their expenses effectively and focus on their academic goals while living in Australia."
    },

    intakes: [
      {
        intake: "February Intake",
        months: "February",
        details: "Main intake for Australian universities"
      },
      {
        intake: "July Intake",
        months: "July",
        details: "Second intake with many programs available for international students"
      },
      {
        intake: "November Intake",
        months: "November",
        details: "Some universities are offering an intake in November for certain courses"
      }
    ],

    whyChooseUs: [
      {
        heading: "Personalized Career Counseling",
        description: "Our experienced counselors understand your academic background, interests, and career goals to help you choose the right course and the best universities in Australia."
      },
      {
        heading: "University & Course Selection",
        description: "With access to a wide network of universities, we help you find programs that perfectly match your profile, budget, and future career plans."
      },
      {
        heading: "Complete Application Support",
        description: "From shortlisting universities to application submission, our team ensures your application stands out and increases your chances of admission."
      },
      {
        heading: "Visa Guidance & Documentation",
        description: "We provide expert assistance with documentation, visa preparation, and interview guidance to make your visa process smooth and stress-free."
      },
      {
        heading: "End-to-End Support",
        description: "From your first counseling session to your departure for Australia, we stay with you throughout the entire process."
      }
    ],

    whyChooseUsTagline: "Start Your Australia Journey with Confidence. At iExplain Education, we don't just process applications – we build your future.",

    postStudyWork: {
      program: "Temporary Graduate Visa (Subclass 485)",
      duration: "Duration depends on the level of qualification",
      description: "One of the most significant benefits for international students is that they can apply for the Temporary Graduate Visa (Subclass 485) after finishing their studies. This enables the graduates to stay and work in Australia for a certain period to gain experience in their respective fields. The period for which the graduates can stay in the country depends on the level of their qualification."
    },

    lifeAndCareer: {
      description: "After finishing their education, the students who pursue their studies in Australia can enjoy a variety of job opportunities and international experience. Earning a degree from Australian universities is recognized worldwide. This enables the graduates to find jobs in multinational corporations and growing industries globally.",
      points: [
        "One of the most significant benefits for international students is that they can apply for the Temporary Graduate Visa (Subclass 485) after finishing their studies. This enables the graduates to stay and work in Australia for a certain period to gain experience in their respective fields. The period for which the graduates can stay in the country depends on the level of their qualification.",
        "Australia offers a variety of job opportunities in the fields of information technology, engineering, healthcare, business management, finance, hospitality, construction, etc. Sydney, Melbourne, Brisbane, etc., are the major economic centers in the country where the graduates can find jobs in multinational corporations and growing industries.",
        "Besides that, students also get to enjoy a high quality of life in Australia. Australia is considered a safe country, it has modern infrastructure, quality healthcare, and a diverse society in which international students can easily blend in, given its multicultural nature.",
        "Generally, studying in Australia is not only about quality education, but it is also about quality opportunities in the international job market."
      ]
    },

    faqs: [
      {
        question: "What are the basic requirements to study in Australia?",
        answer: "To study in Australia, international students need to meet certain basic requirements. They need to submit their academic transcripts, passports, English language proficiency tests like IELTS, TOEFL, or PTE Academic, Statement of Purpose (SOP), and financial support documents. However, before applying for a student visa, international students need to obtain a Confirmation of Enrolment (CoE) from an Australian university."
      },
      {
        question: "Can international students work while studying in Australia?",
        answer: "Yes, international students can work while studying in Australia. They can work for 48 hours in a fortnight during their academic sessions. They can also work during university holidays."
      },
      {
        question: "What are the major intakes for Australian universities?",
        answer: "The major intakes for the students who are interested in pursuing their higher studies in Australia are February (main intake) and July (second intake). Some universities are offering an intake in November for certain courses."
      },
      {
        question: "Is Australia a good destination for international students?",
        answer: "Australia is considered one of the top study destinations in the world due to the presence of globally recognized universities, a high quality of life, and significant career opportunities."
      },
      {
        question: "Is IELTS necessary if I wish to study in Australia?",
        answer: "No, it is not necessary. But most universities require students to appear for English proficiency interviews. It totally depends on the profile of the student."
      },
      {
        question: "What are the popular courses to study in Australia?",
        answer: "Some of the most popular courses include business management, information technology, engineering, healthcare, accounting, hospitality, and data science. These courses provide good job prospects after completion of the courses."
      }
    ]
  },
  canada: {
    title: "Study in Canada",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/study-in-canada.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/500-by-500-study-in-canada-.jpg",

    intro: {
      text: "Studying in Canada has become one of the most popular choices for international students who want high-quality education, global career opportunities, and a safe learning environment. Canada is known for its world-class universities, multicultural society, and student-friendly immigration policies, making it an ideal destination for students from around the world.<br /><br />Every year, thousands of students choose Canada to pursue undergraduate, postgraduate, and professional programs in various fields. Canadian institutions focus on practical learning, research, and industry-oriented education, which helps students develop strong professional skills and prepare for global careers.<br /><br />Another major advantage of studying in Canada is the opportunity for post-study work and potential immigration pathways. The education system in Canada is regulated by the Government of Canada, ensuring high academic standards and globally recognized degrees.",
      image: ""
    },

    whyStudy: [
      {
        heading: "Globally Recognized Education",
        description: "Canada is home to many prestigious universities and colleges that are recognized worldwide for their academic excellence. Degrees obtained from Canadian institutions are valued globally and open doors to international career opportunities."
      },
      {
        heading: "High-Quality Education System",
        description: "The education system in Canada is regulated by the Government of Canada, ensuring that universities and colleges maintain high academic standards and modern teaching methods."
      },
      {
        heading: "Affordable Tuition Fees",
        description: "Compared to other popular study destinations like the United States and the United Kingdom, Canada offers relatively affordable tuition fees while still providing world-class education."
      },
      {
        heading: "Safe and Welcoming Environment",
        description: "Canada is known for its friendly and welcoming culture. The country provides a safe environment for international students with a high quality of life and excellent healthcare facilities."
      },
      {
        heading: "Work Opportunities During Studies",
        description: "International students in Canada can work part-time during their studies, which helps them gain valuable work experience and manage their living expenses."
      },
      {
        heading: "Post-Study Work Opportunities",
        description: "After completing their studies, students can apply for a Post-Graduation Work Permit (PGWP), which allows them to work in Canada and gain professional experience."
      }
    ],

    topUniversities: [
      {
        name: "University of Toronto",
        location: "Toronto",
        description: ""
      },
      {
        name: "University of British Columbia",
        location: "Vancouver",
        description: ""
      },
      {
        name: "McGill University",
        location: "Montreal",
        description: ""
      },
      {
        name: "University of Alberta",
        location: "Edmonton",
        description: ""
      },
      {
        name: "University of Waterloo",
        location: "Waterloo",
        description: ""
      },
      {
        name: "Western University",
        location: "London, Ontario",
        description: ""
      },
      {
        name: "McMaster University",
        location: "Hamilton",
        description: ""
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    cost: {
      tuitionFees: [
        {
          category: "Undergraduate (Bachelors)",
          averageCostPerYear: "CA $25,000 – $45,000+"
        },
        {
          category: "Postgraduate (Masters)",
          averageCostPerYear: "CA $18,000 – $38,000"
        },
        {
          category: "MBA (Premium Programs)",
          averageCostPerYear: "CA $35,000 – $75,000"
        }
      ],
      additionalCosts: ""
    },

    intakes: [
      {
        intake: "Fall Intake",
        months: "September",
        details: "This is the main intake in Canada. Most universities offer the maximum number of courses and seats during this intake."
      },
      {
        intake: "Winter Intake",
        months: "January",
        details: "The second most popular intake with many programs available for international students."
      },
      {
        intake: "Summer Intake",
        months: "May",
        details: "This intake offers limited courses and programs, mainly for specific diploma or short-term courses."
      }
    ],

    documentsRequired: [
      {
        document: "Academic Transcripts",
        purpose: "Mark sheets and certificates of previous education such as 10th, 12th, and bachelor's degree (if applying for postgraduate programs)."
      },
      {
        document: "Valid Passport",
        purpose: "A passport with sufficient validity for the duration of the study program."
      },
      {
        document: "English Language Test Score",
        purpose: "Proof of English proficiency such as IELTS, TOEFL, or PTE required by most universities."
      },
      {
        document: "Statement of Purpose (SOP)",
        purpose: "A written statement explaining the student's academic background, career goals, and reason for choosing Canada."
      },
      {
        document: "Offer Letter from University",
        purpose: "Official acceptance letter issued by a Canadian university or college."
      },
      {
        document: "Passport Size Photographs",
        purpose: "Recent photographs as per visa and university requirements."
      },
      {
        document: "Study Permit / Student Visa Documents",
        purpose: "Required for applying for a Canadian study permit after receiving the university offer letter."
      }
    ],

    whyChooseUs: [
      {
        heading: "Expert Career Counseling",
        description: "iExplain Education provides individual counseling services to assist students in choosing the right course, university, and career according to their academic background and future objectives."
      },
      {
        heading: "University Selection Assistance",
        description: "Canada is home to a large number of universities and colleges offering a broad spectrum of courses. Experts at iExplain Education assist students in choosing the right course and university according to their interests and career goals."
      },
      {
        heading: "Complete Admission Support",
        description: "We assist students with the entire admission process from the submission of the application to the university communication. This helps in ensuring a smooth and efficient process for the students."
      },
      {
        heading: "Visa Guidance and Documentation",
        description: "The process of obtaining a student visa is a complicated one. We assist students with the entire process of obtaining a student visa."
      }
    ],

    whyChooseUsTagline: "Start Your Canada Journey with Confidence. At iExplain Education, we don't just process applications - we build your future. Connect with us today and take the first step toward studying in the Canada!",

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions and full-time during scheduled breaks",
      details: [
        "The international students who come to Canada to pursue their higher education also have the opportunity to work part-time while they complete their education.",
        "This will allow them to gain experience and professional skills while they complete their education.",
        "The government of Canada allows international students who have valid study permits to work while they complete their education.",
        "This will allow them to manage their expenses and also get exposure to the work environment in Canada.",
        "International students in Canada are generally allowed to work up to 20 hours per week during academic sessions.",
        "International students in Canada are generally allowed to work full-time during scheduled breaks, such as summer or winter holidays.",
        "This flexibility allows students to balance their studies and work responsibilities effectively."
      ]
    },

    postStudyWork: {
      program: "Post-Graduation Work Permit (PGWP)",
      duration: "Duration varies based on the length of the study program",
      description: "One of the biggest advantages of studying in Canada is the opportunity to apply for the Post-Graduation Work Permit (PGWP). This permit allows international graduates to stay and work in Canada for a certain period after completing their studies, helping them gain valuable professional experience."
    },

    lifeAndCareer: {
      description: "After acquiring their education in Canada, international students have the opportunity to explore various career options and enjoy a high quality of life. Canada is a country with a strong economy and a diverse job market, making it an ideal destination for international students aiming to have a successful international career.",
      points: [
        "One of the biggest advantages of studying in Canada is the opportunity to apply for the Post-Graduation Work Permit (PGWP). This permit allows international graduates to stay and work in Canada for a certain period after completing their studies, helping them gain valuable professional experience.",
        "A degree from a Canadian university is recognized worldwide, which helps graduates find career opportunities not only in Canada but also in many other countries.",
        "Canada is known for offering a high standard of living, excellent healthcare services, and safe communities. Cities like Toronto, Vancouver, and Montreal are among the most popular destinations for international graduates due to their vibrant culture and career opportunities."
      ]
    },

    faqs: [
      {
        question: "Why is Canada a popular destination for international students?",
        answer: "Canada is a popular destination for international students because of the quality education system, globally recognized universities, a safe environment, and excellent career opportunities after completing education."
      },
      {
        question: "Can international students work while studying in Canada?",
        answer: "Yes, international students in Canada can work up to 20 hours per week during academic sessions and full-time during scheduled breaks."
      },
      {
        question: "What is the Post-Graduation Work Permit (PGWP)?",
        answer: "The Post-Graduation Work Permit (PGWP) allows international students to stay and work in Canada after completing their studies, helping them gain valuable professional experience."
      },
      {
        question: "Is IELTS required to study in Canada?",
        answer: "Most universities require an IELTS score of around 6.0–7.0, although some institutions may accept other English proficiency tests or alternative requirements."
      },
      {
        question: "How long does it take to get a student visa for Canada?",
        answer: "The processing time for a study permit to Canada usually takes 4 to 8 weeks, depending on the application process and documentation."
      },
      {
        question: "Can international students stay in Canada after graduation?",
        answer: "Yes, students can apply for the Post-Graduation Work Permit (PGWP), which allows them to stay and work in Canada after completing their studies."
      },
      {
        question: "Are scholarships available for international students in Canada?",
        answer: "Yes, many universities and organizations offer scholarships, grants, and financial aid to international students based on academic performance and other criteria."
      }
    ]
  },
  ireland: {
    title: "Study in Ireland",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-IRELAND.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-IRELAND-2.jpg",

    intro: {
      text: "Ireland has become one of the fastest-growing study destinations for international students who want to pursue high-quality education in Europe. Known for its world-class universities, welcoming culture, and strong economy, Ireland offers students an excellent academic environment combined with exciting career opportunities.<br /><br />Recently, thousands of Indian students have opted for higher education in Ireland due to its globally recognized qualifications, English-speaking population, and excellent post-study work opportunities. The country's educational institutions are dedicated to creating an innovative, research-oriented, and practical learning environment for students, which is extremely beneficial for them in terms of gaining recognition in the global job market.<br /><br />Ireland is home to some of the world's leading technology hubs, pharmaceutical industries, and multinational companies. Some of these companies, including Google, Apple, Facebook, and Microsoft, have their European headquarters in Ireland. These companies offer excellent internship and job opportunities for students after completing their studies.<br /><br />Another significant advantage of studying in Ireland is that it offers a Post Study Work Visa, which enables international students to stay and work in the country after completing their studies. This makes Ireland a preferred choice for students who seek international experience in their careers.<br /><br />Considering its safe environment, education system, and career prospects, Ireland is one of the best options for students who are planning to study abroad.",
      image: ""
    },

    whyStudy: [
      "Universities recognized worldwide and quality education provided.",
      "English-speaking country, which facilitates easy communication for students.",
      "Presence of multinational companies that provide job opportunities for students.",
      "Post-work visa facility for international students.",
      "Safe, friendly, and welcoming country for students.",
      "Research, innovation, and industry exposure for students."
    ],

    whyStudyDescription: "Ireland is becoming a preferred destination for international students who are seeking quality education as well as good career opportunities within the European continent. The country offers a modern education system, quality education from globally ranked institutions, and a conducive environment for international students from around the globe. Ireland is committed to innovation, research, and learning, which equips students with the right skills to take on the job market globally. The country is home to quality institutions such as Trinity College Dublin and University College Dublin, which are highly ranked for academic excellence and international reputation. Another major advantage of pursuing education in Ireland is the fact that the country hosts a number of multinational corporations, including Google, Apple, and Microsoft, which provides job opportunities for graduates. Ireland is an English-speaking country, which makes it easy for international students to get accustomed to the education system as well as the country as a whole. The country offers a safe environment, a mix of culture, as well as a lively student life, as seen in the major cities of Dublin and Cork.",

    qualifications: [
      {
        name: "Certificate Courses",
        duration: "6 months – 1 year",
        description: "Short-term programs designed to provide basic knowledge and practical skills in a specific field."
      },
      {
        name: "Diploma Programs",
        duration: "1 – 2 years",
        description: "Career-focused programs that offer specialized training and industry-relevant skills."
      },
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 years",
        description: "Undergraduate programs that provide in-depth knowledge and foundational education in a particular subject."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 years",
        description: "Postgraduate programs that allow students to specialize in a specific field and enhance their professional expertise."
      },
      {
        name: "Doctoral Degree (PhD)",
        duration: "3 – 4 years",
        description: "Advanced research-based programs for students interested in academic or research careers."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      {
        name: "Trinity College Dublin",
        location: "Dublin",
        description: "One of the oldest and highest-ranked universities in Ireland, known for strong programs in business, science, and engineering."
      },
      {
        name: "University College Dublin",
        location: "Dublin",
        description: "A leading research university offering a wide range of programs and strong industry partnerships."
      },
      {
        name: "University College Cork",
        location: "Cork",
        description: "Known for excellent research facilities and high student satisfaction."
      },
      {
        name: "University of Galway",
        location: "Galway",
        description: "Popular for programs in medicine, engineering, and humanities."
      },
      {
        name: "University of Limerick",
        location: "Limerick",
        description: "Known for its focus on innovation, technology, and industry-focused education."
      },
      {
        name: "Dublin City University",
        location: "Dublin",
        description: "A modern university known for business, engineering, and technology programs."
      }
    ],

    documentsRequired: [
      {
        document: "Academic Transcripts",
        purpose: "Proof of previous education such as high school or bachelor's degree"
      },
      {
        document: "Valid Passport",
        purpose: "Required for identity verification and international travel"
      },
      {
        document: "Statement of Purpose (SOP)",
        purpose: "Explains the student's study goals and reasons for choosing the course and university"
      },
      {
        document: "Letters of Recommendation (LOR)",
        purpose: "Academic or professional references supporting the student's application"
      },
      {
        document: "English Language Test Score (IELTS / TOEFL)",
        purpose: "Demonstrates English language proficiency as required by most universities"
      },
      {
        document: "Offer Letter from University",
        purpose: "Official acceptance letter issued by the Irish university or college confirming admission"
      },
      {
        document: "Financial Documents",
        purpose: "Proof of sufficient funds to cover tuition fees and living expenses in Ireland"
      },
      {
        document: "Student Visa / Study Permit Documents",
        purpose: "Required for applying for an Irish student visa after receiving the university offer letter"
      }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions and up to 40 hours per week during holidays / vacation",
      details: [
        "The country allows international students to have a part-time job while they are pursuing their studies.",
        "This gives them an opportunity to gain valuable working experience.",
        "Working while pursuing studies not only helps the students to manage their daily expenses, but it also enables them to acquire working skills, enhance their communication skills, and get exposure to the international working environment.",
        "The country allows international students to have a job while pursuing their studies in recognized universities and colleges.",
        "International students pursuing their studies in universities such as Trinity College Dublin and University College Dublin are allowed to have a job while pursuing their studies under the regulations set by the Ireland government.",
        "During academic sessions, international students are allowed to work up to 20 hours per week.",
        "During holidays and vacation, international students are allowed to work up to 40 hours per week."
      ]
    },

    cost: {
      tuitionFees: [
        {
          category: "Arts & Humanities – Undergraduate",
          averageCostPerYear: "€10,000 – €16,000"
        },
        {
          category: "Arts & Humanities – Postgraduate",
          averageCostPerYear: "€12,000 – €20,000"
        },
        {
          category: "Business & Law – Undergraduate",
          averageCostPerYear: "€12,000 – €22,000"
        },
        {
          category: "Business & Law – Postgraduate",
          averageCostPerYear: "€14,000 – €30,000"
        },
        {
          category: "Science & Engineering – Undergraduate",
          averageCostPerYear: "€15,000 – €26,000"
        },
        {
          category: "Science & Engineering – Postgraduate",
          averageCostPerYear: "€15,000 – €28,000"
        },
        {
          category: "Medicine & Health – Undergraduate",
          averageCostPerYear: "€35,000 – €55,000"
        },
        {
          category: "Medicine & Health – Postgraduate",
          averageCostPerYear: "€18,000 – €35,000"
        }
      ],
      additionalCosts: "Studying in Ireland in 2026 offers a balance between high-quality education and a cost of living that is often more manageable than London or New York. On average, international students should budget between €20,000 and €55,000 per year to cover both tuition and lifestyle expenses."
    },

    admissionProcess: [
      {
        step: "Choose Course and Institution",
        description: "Choose a course and institution that best suits your interests and career aspirations."
      },
      {
        step: "Check Eligibility Requirements",
        description: "Check if you meet the eligibility requirements for admission, such as academic qualifications and IELTS/English proficiency tests."
      },
      {
        step: "Prepare Required Documents",
        description: "Collect necessary documents like academic transcripts, passport, statement of purpose, and letters of recommendation."
      },
      {
        step: "Submit the Application",
        description: "Submit your application online through the official website of the institution."
      },
      {
        step: "Receive Offer Letter",
        description: "Once your application is approved, you will receive an offer letter from the institution."
      },
      {
        step: "Pay Tuition Fee Deposit",
        description: "Confirm your admission by paying the tuition fee deposit."
      },
      {
        step: "Apply for Student Visa",
        description: "Apply for a student visa along with necessary documents like financial and academic credentials."
      },
      {
        step: "Plan Your Travel",
        description: "Plan your travel, accommodation, and other necessary arrangements for your trip to Ireland."
      }
    ],

    intakes: [
      {
        intake: "September Intake",
        months: "January – June",
        details: "The main intake with the largest number of courses and universities available."
      },
      {
        intake: "January Intake",
        months: "July – October",
        details: "Secondary intake with limited courses compared to the September intake."
      }
    ],

    whyChooseUs: [
      {
        heading: "Expert Counseling",
        description: "Personalized guidance to help students choose the right course and university in Ireland."
      },
      {
        heading: "University Selection",
        description: "Assistance in selecting the best Ireland universities according to academic profile and career goals."
      },
      {
        heading: "Application Assistance",
        description: "Complete support with application forms, documentation, and admission procedures."
      },
      {
        heading: "Visa Guidance",
        description: "Professional help with the Ireland student visa process and documentation."
      },
      {
        heading: "Scholarship Assistance",
        description: "Guidance in finding scholarship opportunities to reduce study expenses."
      },
      {
        heading: "Pre-Departure Support",
        description: "Assistance with accommodation, travel planning, and preparation for life in Ireland."
      },
      {
        heading: "End-to-End Support",
        description: "Continuous support from admission to arrival in Ireland for a smooth study abroad experience."
      }
    ],

    whyChooseUsDescription: "Choosing the right consultancy can make the process of studying abroad much easier and more successful. iExplain Education provides complete support and professional guidance to students who want to pursue higher education in Ireland. From selecting the right course and university to helping with the visa process, the team ensures that students receive the best possible assistance at every stage of their journey. With expert counseling and proper guidance, students can apply to leading Ireland universities such as Trinity College Dublin, University College Dublin, and University College Cork.",

    postStudyWork: {
      program: "Post Study Work Visa",
      duration: "Up to 2 years for master's degree graduates",
      description: "Ireland offers a Post Study Work Visa that allows international students to stay and work in the country after graduation. The Post Study Work Visa scheme allows international students who have completed their courses of study in various Ireland universities, including Trinity College Dublin, University College Dublin, and University College Cork, to stay back in the country and search for employment. Students completing a master's degree can stay for up to 2 years to gain work experience."
    },

    lifeAndCareer: {
      description: "Ireland also offers excellent career opportunities for international students after completing their courses of study. The country has a strong and growing economy, with many international companies represented in various sectors of the industry, including technology, finance, pharmaceuticals, and healthcare. This means that graduates of Ireland universities are likely to have good job opportunities, including valuable international work experience.",
      points: [
        "The other major advantage of choosing Ireland as a study destination is that international students are allowed to stay back in the country after completing their courses of study through the Post Study Work Visa scheme. The Post Study Work Visa scheme allows international students who have completed their courses of study in various Ireland universities, including Trinity College Dublin, University College Dublin, and University College Cork, to stay back in the country and search for employment.",
        "Ireland is also home to the European headquarters of several multinational companies, including Google, Apple, and Microsoft. This means that graduates of Ireland universities are likely to have good job opportunities in various sectors of the industry, including IT, business, finance, data science, engineering, and others."
      ]
    },

    faqs: [
      {
        question: "Is Ireland a good destination for international students?",
        answer: "Yes, Ireland is one of the best destinations for international students due to the quality of the education system offered. The country provides a safe environment for international students. Additionally, the country offers a culture of hospitality to international students."
      },
      {
        question: "Can international students work while studying in Ireland?",
        answer: "Yes, international students are allowed to work part-time while studying. Students can work up to 20 hours per week during academic sessions and 40 hours per week during holidays."
      },
      {
        question: "What are the popular courses to study in Ireland?",
        answer: "Some of the most popular courses in Ireland include Computer Science, Data Science, Business Management, Engineering, Finance, and Pharmaceutical Sciences."
      },
      {
        question: "What are the post-study work opportunities in Ireland?",
        answer: "Ireland offers a Post Study Work Visa that allows international students to stay and work in the country after graduation. Students completing a master's degree can stay for up to 2 years to gain work experience."
      },
      {
        question: "Is Ireland safe for Indian students?",
        answer: "Yes, Ireland is considered one of the safest countries in Europe. The country has a friendly environment, supportive communities, and excellent facilities for international students."
      },
      {
        question: "When should I apply to study in Ireland?",
        answer: "Students should ideally start the application process 6 to 8 months before the intake to ensure enough time for admission and visa processing."
      },
      {
        question: "Can students stay in Ireland after completing their studies?",
        answer: "Yes, international students can stay in Ireland after graduation under the post-study work visa program to gain professional work experience and explore long-term career opportunities."
      }
    ]
  },
  newZealand: {
    title: "Study in New Zealand",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/Study-in-NEWZELAND.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-NEWZEALAND-2.jpg",

    intro: {
      text: "New Zealand has become one of the most preferred study destinations for international students who are looking for high-quality education, globally recognized degrees, and excellent lifestyle opportunities. Known for its modern education system, safe environment, and innovative teaching methods, New Zealand provides students with a strong academic foundation along with practical skills required for global careers.<br><br>Universities in the country use a British-based education system, which provides globally recognized education with high academic standards. The country's education system places a strong emphasis on research, innovation, and practical learning, which allows students to gain practical work experience during their studies. This is highly beneficial for students, as they can acquire skills that are highly sought after by employers around the globe.<br><br>Another major advantage of pursuing higher education in New Zealand is the country's culture, which is highly favorable for international students. The country provides a high standard of living, a perfect balance of work and leisure, and a welcoming society for students from around the world.<br><br>New Zealand provides strong career prospects after completing the course. Some programs are developed in association with industries, allowing students to gain industry exposure through internships. There are also provisions for international students to work after completing their studies, helping them gain valuable international experience.<br><br>Auckland and Wellington are popular student destinations, offering quality education, vibrant culture, and good job opportunities.",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800"
    }
    ,
    whyStudy: [
      "Globally recognized education system with high academic standards.",
      "Safe, friendly, and welcoming environment.",
      "Strong focus on practical learning and research.",
      "Post-study work opportunities available.",
      "Multicultural society with high quality of life.",
      "Excellent career prospects across industries."
    ],

    qualifications: [
      {
        name: "Certificate Programs",
        duration: "6 Months – 1 Year",
        description: "Short-term courses providing fundamental knowledge and practical skills."
      },
      {
        name: "Diploma Programs",
        duration: "1 – 2 Years",
        description: "Career-oriented programs focusing on specialized skills."
      },
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs with in-depth academic and professional training."
      },
      {
        name: "Postgraduate Diploma",
        duration: "1 Year",
        description: "Advanced programs after bachelor's degree for specialization."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Postgraduate programs focusing on advanced knowledge."
      },
      {
        name: "PhD or Doctoral Degree",
        duration: "3 – 4 Years",
        description: "Research-based programs for academic and scientific careers."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      { name: "University of Auckland", location: "Auckland", description: "" },
      { name: "University of Otago", location: "Dunedin", description: "" },
      { name: "Victoria University of Wellington", location: "Wellington", description: "" },
      { name: "University of Canterbury", location: "Christchurch", description: "" },
      { name: "University of Waikato", location: "Hamilton", description: "" },
      { name: "Massey University", location: "Palmerston North", description: "" },
      { name: "Auckland University of Technology", location: "Auckland", description: "" }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions",
      details: [
        "Students can work up to 20 hours per week during academic sessions.",
        "Up to 40 hours per week during semester breaks.",
        "Helps manage living expenses.",
        "Provides real-world work experience and skill development."
      ]
    },

    postStudyWork: {
      program: "Post-Study Work Visa",
      duration: "1 – 3 Years",
      description: "Allows graduates to stay and work in New Zealand after completing their studies."
    },

    documentsRequired: [
      "Academic Transcripts",
      "Valid Passport",
      "English Language Test Score (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Offer Letter from University",
      "Passport Size Photographs",
      "Student Visa Documents"
    ],

    intakes: [
      {
        intake: "February Intake",
        months: "February",
        details: "Main intake with maximum course availability"
      },
      {
        intake: "July Intake",
        months: "July",
        details: "Secondary intake with limited courses"
      }
    ],

    cost: {
      tuitionFees: "Undergraduate: NZD 30,000 – 55,000 | Postgraduate: NZD 26,000 – 50,000 | PhD: NZD 6,500 – 9,500",
      livingExpenses: "Approx. NZD 15,000 – 20,000 per year",
      additionalCosts: "Accommodation, food, transport, and personal expenses"
    },

    whyChooseUs: [
      "Personalized career counseling and guidance.",
      "University and course selection assistance.",
      "Complete admission and documentation support.",
      "Visa guidance and pre-departure assistance."
    ],

    lifeAndCareer: {
      description: "New Zealand offers excellent career opportunities and a high standard of living for international students after graduation.",
      points: [
        "Post-study work visa up to 3 years.",
        "Growing job market in IT, engineering, healthcare, and tourism.",
        "International work experience opportunities.",
        "High quality of life and work-life balance."
      ]
    },

    faqs: [
      {
        question: "Why should I choose New Zealand for higher studies?",
        answer: "It offers globally recognized education, safe environment, and strong career opportunities."
      },
      {
        question: "Can international students work while studying?",
        answer: "Yes, up to 20 hours per week during studies and full-time during breaks."
      },
      {
        question: "What are popular courses in New Zealand?",
        answer: "Engineering, IT, Business, Healthcare, Hospitality, and Arts."
      },
      {
        question: "Is post-study work visa available?",
        answer: "Yes, students can stay for 1–3 years after graduation."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, universities and government offer various scholarships."
      },
      {
        question: "How long does student visa processing take?",
        answer: "Usually 4 to 8 weeks."
      }
    ]
  },
  europe: {
    title: "Study in Europe",

    heroImage: "https://socialfoundationindia.org/wp-content/uploads/2026/03/STUDY-IN-EUROPE.jpg",
    heroImageMobile: "https://socialfoundationindia.org/wp-content/uploads/2026/03/EUROPE-2.jpg",

    intro: {
      text: "Studying in Europe has become one of the most attractive options for international students who are looking for high-quality education, global exposure, and affordable tuition fees. Europe is home to some of the world's oldest and most prestigious universities, offering a wide range of programs across various disciplines. Countries like Germany, Italy, France, Malta, the Netherlands, and Poland have gained popularity among Indian students due to their strong education systems, modern infrastructure, and career opportunities.<br /><br />One of the major benefits of pursuing education in Europe is the diversity it provides. Every country in Europe has a different culture, language, and educational system. European universities stress the importance of research and innovation in their curriculum, helping the student develop academic and professional skills of the highest standard. Also, most European countries offer their educational programs in English, making it easier for international students to adapt and not having to worry about language difficulties. Additionally, countries like Germany offer free education in public universities, making it a more affordable option for international students compared to the USA and UK.<br /><br />Europe also offers great travel opportunities, as students can travel across countries with just one visa, called the Schengen visa. This helps students become more global citizens, understanding the world better. In addition, the qualifications obtained in Europe are recognized worldwide, giving students access to international job opportunities.<br /><br />Next, the opportunity for post-study work is a great benefit for students, as they can gain international work experience after completing their studies. With the focus on quality education, affordable fees, and career progression, Europe is now the top choice for students aiming for a successful international career.",
      image: ""
    },

    whyStudy: [
      "World-Class Universities with Global Recognition: There are many world-class universities in Europe that are recognized for their academic excellence and rich academic history. The academic degrees awarded by European universities are recognized globally, which enables students to have a strong global career.",
      "Affordable or Low Tuition Fees: Many European countries offer high-quality education with low or even zero tuition fees, especially in public institutions. This is one of the best options for students who wish to study abroad without spending a huge amount of money.",
      "Wide Range of English-Taught Programs: Students have a wide choice from thousands of courses taught in English in various fields. This saves students from having to learn a local language before pursuing their education.",
      "Strong Focus on Research and Practical Learning: European education systems emphasize innovation, research, and practical knowledge. Students gain hands-on experience through internships, projects, and lab work. This helps them develop industry-relevant skills.",
      "Opportunity to Travel Across Countries: With a Schengen visa, students can travel to multiple European countries easily. This allows them to explore different cultures, traditions, and lifestyles. It adds great value to their overall study abroad experience.",
      "Post-Study Work Opportunities: Many European countries offer post-study work permits to international students. This allows them to gain work experience and settle abroad if they choose. It increases long-term career prospects."
    ],

    whyStudyDescription: "Europe has emerged as a hub for international students due to its high standards in education and global exposure. It is a place that provides a well-rounded international experience for students due to its academic excellence, cultural diversity, and career opportunities.",

    qualifications: [
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 Years",
        description: "Undergraduate programs in various fields."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 Years",
        description: "Specialized postgraduate programs."
      },
      {
        name: "Doctorate (PhD)",
        duration: "3 – 5 Years",
        description: "Research-based advanced studies."
      },
      {
        name: "Diploma Courses",
        duration: "1 – 2 Years",
        description: "Skill-based and career-focused programs."
      },
      {
        name: "Certificate Courses",
        duration: "6 Months – 1 Year",
        description: "Short-term professional courses."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversitiesByCountry: {
      germany: [
        { name: "Technical University of Munich", established: "1868", location: "Munich" },
        { name: "Ludwig Maximilian University of Munich", established: "1472", location: "Munich" },
        { name: "Heidelberg University", established: "1386", location: "Heidelberg" },
        { name: "University of Freiburg", established: "1457", location: "Freiburg" }
      ],
      italy: [
        { name: "University of Bologna", established: "1088", location: "Bologna" },
        { name: "University of Bologna", established: "1303", location: "Rome" },
        { name: "University of Milan", established: "1924", location: "Milan" },
        { name: "University of Padua", established: "1222", location: "Padua" }
      ],
      france: [
        { name: "Sorbonne University", established: "1257", location: "Paris" },
        { name: "PSL Research University", established: "2010", location: "Paris" },
        { name: "Ecole Polytechnique", established: "1794", location: "Palaiseau" },
        { name: "University of Paris", established: "1150", location: "Paris" }
      ],
      malta: [
        { name: "University of Malta", established: "1592", location: "Msida" },
        { name: "American University of Malta", established: "2016", location: "Cospicua" },
        { name: "Global College Malta", established: "2013", location: "SmartCity" },
        { name: "MCAST (Malta College of Arts, Science & Technology)", established: "2001", location: "Paola" }
      ],
      netherlands: [
        { name: "University of Amsterdam", established: "1632", location: "Amsterdam" },
        { name: "Delft University of Technology", established: "1842", location: "Delft" },
        { name: "Utrecht University", established: "1636", location: "Utrecht" },
        { name: "Erasmus University Rotterdam", established: "1913", location: "Rotterdam" }
      ],
      poland: [
        { name: "University of Warsaw", established: "1816", location: "Warsaw" },
        { name: "Jagiellonian University", established: "1364", location: "Krakow" },
        { name: "Warsaw University of Technology", established: "1915", location: "Warsaw" },
        { name: "Adam Mickiewicz University", established: "1919", location: "Poznan" }
      ]
    },

    topUniversities: [
      { name: "Technical University of Munich", location: "Munich, Germany", description: "Est. 1868" },
      { name: "Ludwig Maximilian University of Munich", location: "Munich, Germany", description: "Est. 1472" },
      { name: "Heidelberg University", location: "Heidelberg, Germany", description: "Est. 1386" },
      { name: "University of Bologna", location: "Bologna, Italy", description: "Est. 1088" },
      { name: "Sorbonne University", location: "Paris, France", description: "Est. 1257" },
      { name: "University of Amsterdam", location: "Amsterdam, Netherlands", description: "Est. 1632" },
      { name: "University of Malta", location: "Msida, Malta", description: "Est. 1592" },
      { name: "University of Warsaw", location: "Warsaw, Poland", description: "Est. 1816" }
    ],

    partTimeWork: {
      hoursPerWeek: "20 hours per week during academic sessions and full-time during holidays",
      details: [
        "Studying in Europe not only provides quality education but also allows international students to work part-time while pursuing their studies.",
        "This helps students manage their living expenses and gain valuable international work experience.",
        "Most European countries have student-friendly work policies, making it easier to balance academics and part-time jobs.",
        "Generally, a student is allowed to work up to 20 hours a week during academic sessions and full-time during holidays.",
        "For countries like Germany and the Netherlands, there are specific regulations allowing the students to work for a certain number of hours a year.",
        "These part-time jobs can be in any industry, ranging from retail, hospitality, and administration to even on the university campus.",
        "By working while studying, students can acquire essential skills such as time management, communication, etc., while gaining experience in an international setting.",
        "Students need to ensure that their working experience does not impact their academic performance, as studies have to take priority."
      ]
    },

    postStudyWork: {
      program: "Post-Study Work Permit / Job Search Visa",
      duration: "Germany: 18 months | Netherlands: 1 year | France: varies by country",
      description: "Europe has great opportunities for international students in post-study work visas, which will allow them to gain valuable work experience after their education is completed. Many European nations offer stay-back options or job search visas for international students. Germany provides a post-study work visa that will last for 18 months. The Netherlands provides a one-year orientation visa for international students, and France also allows international students to stay and work after completing their education. Many students also get the opportunity to convert their student visa into a work permit once they secure a job. After gaining work experience, students may apply for long-term residency or permanent residency in certain countries, depending on their eligibility and local immigration policies."
    },

    documentsRequired: [
      "Academic Certificates – 10th, 12th, and graduation mark sheets (as per course requirement)",
      "Passport – Valid passport with at least 6–12 months validity",
      "Statement of Purpose (SOP) – A written document explaining your study goals and career plans",
      "Letters of Recommendation (LOR) – Academic or professional references from teachers/employers",
      "English Proficiency Test – IELTS/TOEFL/PTE scorecard (if required by university)",
      "Offer Letter – Admission/acceptance letter from the university",
      "Financial Proof – Bank statements or sponsorship letter to show sufficient funds",
      "Visa Application Form – Duly filled student visa application form",
      "Medical Certificate – Proof of good health (if required)",
      "Accommodation Proof – Hostel or residence confirmation",
      "Visa Fee Receipt – Payment proof for student visa processing"
    ],

    intakes: [
      {
        intake: "Fall Intake",
        months: "September / October",
        details: "Main intake with maximum courses and university options available. Application period: January – May."
      },
      {
        intake: "Spring Intake",
        months: "January / February",
        details: "Limited courses but good alternative if you miss Fall intake. Application period: September – November."
      },
      {
        intake: "Summer Intake",
        months: "May / June",
        details: "Few universities and selected programs available. Application period: January – March."
      }
    ],

    cost: {
      tuitionFees: [
        { category: "Germany (Public Uni) – Annual Tuition", averageCostPerYear: "€0 – €6,000" },
        { category: "Germany – Monthly Living Cost", averageCostPerYear: "€950 – €1,250" },
        { category: "Germany – Total Annual Cost (Est.)", averageCostPerYear: "€11,400 – €21,000" },
        { category: "France – Annual Tuition", averageCostPerYear: "€2,850 – €3,800" },
        { category: "France – Monthly Living Cost", averageCostPerYear: "€900 – €1,300" },
        { category: "France – Total Annual Cost (Est.)", averageCostPerYear: "€13,650 – €19,400" },
        { category: "Italy – Annual Tuition", averageCostPerYear: "€900 – €4,000" },
        { category: "Italy – Monthly Living Cost", averageCostPerYear: "€800 – €1,200" },
        { category: "Italy – Total Annual Cost (Est.)", averageCostPerYear: "€10,500 – €18,400" },
        { category: "Netherlands – Annual Tuition", averageCostPerYear: "€7,000 – €18,000" },
        { category: "Netherlands – Monthly Living Cost", averageCostPerYear: "€1,000 – €1,500" },
        { category: "Netherlands – Total Annual Cost (Est.)", averageCostPerYear: "€19,000 – €36,000" },
        { category: "Poland – Annual Tuition", averageCostPerYear: "€2,000 – €4,500" },
        { category: "Poland – Monthly Living Cost", averageCostPerYear: "€600 – €900" },
        { category: "Poland – Total Annual Cost (Est.)", averageCostPerYear: "€9,200 – €15,300" },
        { category: "Spain – Annual Tuition", averageCostPerYear: "€800 – €3,500" },
        { category: "Spain – Monthly Living Cost", averageCostPerYear: "€700 – €1,100" },
        { category: "Spain – Total Annual Cost (Est.)", averageCostPerYear: "€9,200 – €16,700" },
        { category: "Switzerland – Annual Tuition", averageCostPerYear: "€1,000 – €3,800" },
        { category: "Switzerland – Monthly Living Cost", averageCostPerYear: "€1,600 – €2,600" },
        { category: "Switzerland – Total Annual Cost (Est.)", averageCostPerYear: "€20,200 – €35,000" },
        { category: "Sweden – Annual Tuition", averageCostPerYear: "€8,500 – €19,000" },
        { category: "Sweden – Monthly Living Cost", averageCostPerYear: "€950 – €1,300" },
        { category: "Sweden – Total Annual Cost (Est.)", averageCostPerYear: "€19,900 – €34,600" }
      ],
      additionalCosts: "European Study Costs by Country (2026 Estimates). Germany offers €0 – €6,000 public university tuition making it one of the most affordable options. Total annual costs range from €9,200 (Poland) to €35,000 (Switzerland) depending on country, city, and lifestyle."
    },

    whyChooseUs: [
      "Personalized Career Counseling: iExplain Education offers one-to-one counseling sessions to understand students' academic backgrounds, budgets, and career aspirations. This enables us to recommend students with their best possible option of country, course, and university.",
      "Expert University & Course Selection: With their extensive knowledge of European education, students can benefit from choosing their ideal university from various European countries such as Germany, Italy, France, Netherlands, Malta, and Poland.",
      "Complete Admission Assistance: From application form filling to confirmation of the offer letter, students are provided with full support during the admission process.",
      "Hassle-Free Documentation: Documents such as SOP, LOR, and other academic documents are well-prepared and verified to avoid the chances of rejection.",
      "Visa Guidance & Support: iExplain Education provides complete visa assistance, including documentation, financial proof guidance, and interview preparation.",
      "No Hidden Charges: The process is completely transparent, with clear fee structures and no hidden costs involved.",
      "Pre-Departure Support: Students receive guidance before leaving, including travel planning, accommodation advice, and important instructions.",
      "Post-Arrival Assistance: Support continues even after reaching Europe, helping students settle comfortably in a new country."
    ],

    whyChooseUsDescription: "Selecting a consultancy is a significant decision for students planning to study in Europe, as it will affect their university choice, success in admissions, and overall study experience. iExplain Education is a consultancy that stands out for its clear and transparent process and expert advice, which will help students fulfil their dream of studying abroad without any confusion and hassles.",

    lifeAndCareer: {
      description: "Life after studying in Europe offers a perfect blend of global exposure, professional growth, and high-quality living standards. European countries are known for their strong economies, advanced industries, and excellent work environments, which provide graduates with a wide range of career opportunities. Students who complete their education in Europe gain internationally recognized degrees along with practical skills, making them highly competitive in the global job market.",
      points: [
        "After graduating from a course, students have the option to stay in Europe by availing themselves of a post-study work permit in a country like Germany, France, and the Netherlands. This gives students a chance to gain work experience in some of the best sectors in the world in fields like engineering, IT, healthcare, finance, and business management.",
        "Europe has a high standard of living with excellent healthcare facilities, transportation systems, and security. Students get a chance to experience a multicultural lifestyle and get in touch with people from diverse backgrounds and cultures. This not only adds to a student's personal development but also enhances communication skills and adaptability.",
        "Many graduates also explore long-term settlement options by applying for permanent residency after gaining relevant work experience. Others may return to their home country with a globally recognized degree and international exposure, which significantly boosts their career prospects and earning potential.",
        "Overall, studying in Europe opens doors to a successful future by combining quality education, international career opportunities, and a comfortable lifestyle, making it a smart choice for students aiming for global success."
      ]
    },

    faqs: [
      {
        question: "Is Europe a good destination for Indian students?",
        answer: "Yes, definitely, as Europe is one of the best destinations for Indian students, as there is affordable education available, recognised all over the world, and a variety of cultural experiences. There is access to top-notch universities and career prospects."
      },
      {
        question: "Do I need to take an English proficiency test such as IELTS or TOEFL to get into a European university?",
        answer: "It is likely that most universities will require an English proficiency test such as IELTS or TOEFL. However, some may be willing to waive this if you have attended an English-medium school."
      },
      {
        question: "Which is the cheapest country to study in Europe?",
        answer: "Germany is considered one of the most affordable countries, with many public universities offering low or no tuition fees. Poland and Italy are also budget-friendly options. The total cost depends on lifestyle and city."
      },
      {
        question: "Can I work while studying in Europe?",
        answer: "Yes, most European countries allow international students to work part-time, usually up to 20 hours per week. This helps students manage their living expenses. However, rules may vary slightly by country."
      },
      {
        question: "What are the popular courses to study in Europe?",
        answer: "Popular courses include Engineering, Business Management, Data Science, Medicine, Hospitality, and Arts. Europe is especially known for its strong programs in technology and research. Students can choose from a wide variety of fields."
      },
      {
        question: "What are the post-study work opportunities in Europe?",
        answer: "Many countries offer post-study work permits ranging from 1 to 2 years. Students can search for jobs and gain international work experience. Some countries also allow conversion to long-term work visas."
      },
      {
        question: "Is it easy to get a student visa for Europe?",
        answer: "Yes, if all documents are properly prepared and financial proof is strong, visa approval chances are high. Each country has its own visa process and requirements. Proper guidance can make the process smooth."
      },
      {
        question: "Can I stay in Europe after completing my studies?",
        answer: "Yes, many countries allow students to stay after graduation through post-study work visas. After gaining work experience, students may apply for permanent residency. This depends on country-specific immigration rules."
      }
    ]
  },
  uae: {
    title: "Study in UAE",

    heroImage: "https://res.cloudinary.com/dcuuvw8zt/image/upload/f_auto,q_auto/STUDY_IN_UAE_ychpcp",
    heroImageMobile: "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774005030/STUDY_IN_UAE_2_ilijms.jpg",

    intro: {
      text: "The United Arab Emirates has rapidly emerged as one of the most preferred study destinations for international students, especially from India. Known for its world-class infrastructure, globally recognized universities, and multicultural environment, the UAE offers a perfect blend of quality education and modern lifestyle.<br /><br />Cities like Dubai and Abu Dhabi are home to top international campuses and universities that provide globally accepted degrees in fields such as business, engineering, IT, hospitality, and healthcare. Many universities in the UAE have partnerships with leading institutions from countries like the UK, USA, and Australia, giving students access to international education without traveling too far from home.<br /><br />One of the biggest advantages of studying in the UAE is its safe environment, tax-free economy, and excellent career opportunities. Students also benefit from part-time work options and strong industry exposure due to the presence of multinational companies.<br /><br />With affordable tuition fees compared to Western countries, modern campus facilities, and a high standard of living, the UAE has become a top choice for students looking to build a successful global career.<br /><br />In recent years, the UAE government has introduced various student-friendly visa policies, including long-term residence options for graduates, making it easier for students to stay back and explore career opportunities after completing their education. This makes studying in the UAE not just an academic choice, but a pathway to a successful international career.<br /><br />Overall, studying in the UAE offers the perfect combination of quality education, global exposure, career growth, and a luxurious lifestyle. It is an excellent choice for students who want to study abroad in a modern, safe, and opportunity-rich environment without going too far from home.",
      image: ""
    },

    whyStudy: [
      "Globally Recognized Universities: The UAE is home to many prestigious universities and international branch campuses from countries like the UK, USA, and Australia. Degrees obtained from universities in cities like Dubai and Abu Dhabi are globally accepted, helping students build successful international careers.",
      "Wide Range of Courses: The institution offers a wide range of courses, including business management, engineering, IT, hospitality, healthcare, media, and finance. The courses are tailored to meet international requirements.",
      "Strong Career Opportunities: The United Arab Emirates is a global business hub due to the presence of various multinational companies and industries. This offers a great opportunity for internship and job prospects for the students.",
      "Affordable Education: Compared to countries like the USA and UK, the UAE offers relatively affordable tuition fees. Many universities also provide scholarships and flexible payment options for international students.",
      "Safe & Student-Friendly Environment: The UAE is considered one of the safest countries in the world. The laws and culture of the UAE provide a safe and comfortable learning environment for international students.",
      "Part-Time Work Opportunities: Students can work part-time during their stay, and this gives them an opportunity to gain some work experience."
    ],

    whyStudyDescription: "Studying in the UAE provides students with a perfect blend of quality education, global experience, and career prospects. The UAE has emerged as a popular destination for international students over the years due to its state-of-the-art infrastructure, secure living, and renowned educational institutions.",

    qualifications: [
      {
        name: "Foundation Program",
        duration: "6 months – 1 year",
        description: "Prepares students for undergraduate study by improving English & academic skills."
      },
      {
        name: "Diploma Program",
        duration: "1 – 2 years",
        description: "Job-oriented courses focused on practical skills in fields like business, IT, hospitality."
      },
      {
        name: "Bachelor's Degree",
        duration: "3 – 4 years",
        description: "Undergraduate programs in engineering, business, IT, healthcare, etc. with global recognition."
      },
      {
        name: "Postgraduate Diploma",
        duration: "6 months – 1 year",
        description: "Advanced qualification after graduation, focused on professional skills."
      },
      {
        name: "Master's Degree",
        duration: "1 – 2 years",
        description: "Specialized postgraduate programs like MBA, finance, data science, engineering."
      },
      {
        name: "Doctorate (PhD)",
        duration: "3 – 5 years",
        description: "Research-based highest qualification for academic and professional careers."
      }
    ],

    courseStreams: [
      {
        stream: "Engineering",
        courses: ["Computer Science", "Cyber Security", "Mechanical", "Civil", "Electrical", "AI", "Data Science"],
        careers: ["Software Engineer / Developer", "Data Scientist / AI Engineer", "Cyber Security Analyst", "Mechanical / Civil / Electrical Engineer"]
      },
      {
        stream: "Medical",
        courses: ["BS", "BDS", "Nursing", "Pharmacy", "Biotechnology"],
        careers: ["Doctor / Medical Practitioner", "Dentist", "Registered Nurse", "Pharmacist"]
      },
      {
        stream: "Business & Management",
        courses: ["BBA", "MBA", "Marketing", "International Business", "Human Resource"],
        careers: ["Business Manager", "Marketing Manager", "HR Manager", "Business Development Manager"]
      },
      {
        stream: "Commerce & Finance",
        courses: ["B.Com", "Accounting", "CMA", "Banking", "Finance", "CA"],
        careers: ["Chartered Accountant (CA)", "Financial Analyst", "Banking Officer", "Finance Manager"]
      },
      {
        stream: "Arts & Humanities",
        courses: ["BA", "Psychology", "Sociology", "Political Science", "Journalism"],
        careers: ["Psychologist / Counselor", "Journalist", "Civil Services Officer", "Public Relations Specialist"]
      },
      {
        stream: "Law",
        courses: ["BA LLB", "LLB", "Corporate Law", "International Law"],
        careers: ["Lawyer / Advocate", "Corporate Lawyer", "Legal Advisor", "Judge / Legal Consultant"]
      }
    ],

    topUniversities: [
      { name: "University of Dubai", location: "Dubai", description: "Est. 1997" },
      { name: "American University in Dubai", location: "Dubai", description: "Est. 1995" },
      { name: "University of Sharjah", location: "Sharjah", description: "Est. 1997" },
      { name: "Khalifa University", location: "Abu Dhabi", description: "Est. 2007" },
      { name: "Abu Dhabi University", location: "Abu Dhabi", description: "Est. 2003" },
      { name: "Heriot-Watt University Dubai", location: "Dubai", description: "Est. 2005" },
      { name: "Middlesex University Dubai", location: "Dubai", description: "Est. 2005" },
      { name: "Canadian University Dubai", location: "Dubai", description: "Est. 2006" }
    ],

    cost: {
      tuitionFees: [
        { category: "Undergraduate (Bachelors) – Annual Cost (AED)", averageCostPerYear: "AED 35,000 – 80,000" },
        { category: "Undergraduate (Bachelors) – Annual Cost (USD approx.)", averageCostPerYear: "$9,500 – $21,800" },
        { category: "Postgraduate (Masters) – Annual Cost (AED)", averageCostPerYear: "AED 40,000 – 90,000" },
        { category: "Postgraduate (Masters) – Annual Cost (USD approx.)", averageCostPerYear: "$10,900 – $24,500" },
        { category: "MBA (Top Tier) – Annual Cost (AED)", averageCostPerYear: "AED 70,000 – 130,000+" },
        { category: "MBA (Top Tier) – Annual Cost (USD approx.)", averageCostPerYear: "$19,000 – $35,000+" },
        { category: "PhD (Research) – Annual Cost (AED)", averageCostPerYear: "AED 30,000 – 60,000" },
        { category: "PhD (Research) – Annual Cost (USD approx.)", averageCostPerYear: "$8,200 – $16,300" }
      ],
      additionalCosts: "Studying in the UAE in 2026 is like living in a futuristic city with a tax-free environment. Although the fees might be more or less the same as the UK or Australia, the total cost of studying might be lower because of the distance from the airport as well as the income tax if you plan to work after your studies. On average, you might need AED 65,000 to AED 130,000 per year ($17,500 – $35,000) for the entire package."
    },

    intakes: [
      {
        intake: "Fall Intake",
        months: "September – October",
        details: "Main intake with maximum course availability and highest admissions. Fall Intake is the most preferred intake as almost all universities and courses are available."
      },
      {
        intake: "Spring Intake",
        months: "January – February",
        details: "Second major intake with a good number of programs available. Ideal for students who miss the Fall intake and still want good course options."
      },
      {
        intake: "Summer Intake",
        months: "May – June",
        details: "Limited courses and universities; fewer intakes compared to others. Can be useful for selected programs or fast-track options."
      }
    ],

    documentsRequired: [
      "Academic Certificates – 10th, 12th, and graduation mark sheets & certificates (as per course requirement)",
      "Valid Passport – Passport with at least 6 months validity",
      "Passport Size Photographs – Recent photographs as per UAE visa requirements",
      "Offer Letter – Admission/offer letter from a UAE university",
      "English Proficiency Test – IELTS/TOEFL score (if required by the university)",
      "Statement of Purpose (SOP) – A written statement explaining your academic goals and career plans",
      "Letters of Recommendation – Usually 1–2 references from teachers or employers",
      "Medical Certificate – Proof of medical fitness as per UAE visa rules",
      "Proof of Funds – Bank statements showing ability to cover tuition and living expenses",
      "Visa Application Documents – Completed student visa application form and supporting documents"
    ],

    whyChooseUs: [
      "Personalized Career Guidance: At iExplain Education, they emphasize a student-centered approach, understanding the strengths, objectives, and preferences of students prior to recommending the most appropriate course and university. Unlike other consultancies, they value students' futures over profits.",
      "Wide Range of Study Destinations: The consultancy provides guidance on various countries, including the UAE, UK, USA, Canada, and many more. This enables the student to compare the options and make the best choice based on the student's profile as well as budget.",
      "University & Course Selection Support: From selecting the right university to choosing the best course, their expert team provides complete assistance to ensure students make informed decisions aligned with their career goals.",
      "Complete Admission Assistance: iExplain Education helps students with every step of the admission process, including application form filling, document preparation, SOP & LOR guidance, and admission submission, ensuring a smooth and error-free application process.",
      "Visa & Documentation Support: Visa services are quite complicated, but iExplain helps students get their visa approved through proper guidance and documentation support.",
      "Test Preparation Services: Students are provided with test preparation services for tests such as IELTS, TOEFL, PTE, GRE, and SAT, which helps them enhance their university profiles.",
      "End-to-End Support: iExplain offers end-to-end support services ranging from counseling to post-admission services such as accommodation, forex, and travel services."
    ],

    whyChooseUsDescription: "The United Arab Emirates, and iExplain Education is the best choice for a successful career in the international arena. The student-centric approach and experience of iExplain Education guarantee a hassle-free experience for students.",

    partTimeWork: {
      hoursPerWeek: "15 to 20 hours per week during academic sessions and full-time during semester breaks",
      details: [
        "The United Arab Emirates is a great place for international students to work part-time while engaging in their studies, especially in major cities like Dubai and Abu Dhabi.",
        "The country has a thriving economy and many international industries, which provide a great platform for international students to work part-time in retail, hospitality, customer service, and even internships with corporate companies.",
        "International students can work 15 to 20 hours a week during the academic sessions.",
        "During the semester breaks, international students can even work full-time.",
        "It is necessary for the international student to have a valid student visa and the approval of the university and the United Arab Emirates government to work part-time.",
        "Some universities may even provide on-campus work opportunities for international students.",
        "In the UAE, the wages of the part-time jobs vary from AED 15 to AED 50 per hour, depending on the role of the job, skills, and experience of the student.",
        "Apart from the financial benefits, working while studying also provides the student with practical experience, develops the student's communication skills, and enables the student to build a strong network of industry experts."
      ]
    },

    postStudyWork: {
      program: "Student-Friendly Visa / Long-Term Residence for Graduates",
      duration: "Varies based on UAE government visa policies",
      description: "The UAE government has introduced student-friendly visa policies, allowing graduates to stay back and search for jobs or continue working in the country. With a tax-free salary structure, professionals can enjoy higher savings compared to many other countries. Many students also get the opportunity to convert their student visa into a work permit once they secure a job."
    },

    lifeAndCareer: {
      description: "Life after studying in the United Arab Emirates provides a unique opportunity for a successful career, a modern lifestyle, and international experience. The United Arab Emirates is one of the fastest-growing economies in the world. Dubai and Abu Dhabi are among the most popular business capitals in the world. These cities are home to many multinational companies, business organizations, and major industries. Therefore, they provide a wide range of job opportunities for fresh graduates.",
      points: [
        "After completing their studies in the United Arab Emirates, students can explore many opportunities in business management, engineering, information technology, finance, healthcare, hospitality, media, and many other sectors. The strong connection between universities in the United Arab Emirates and many organizations provides students with a wide opportunity to enter the job market.",
        "The UAE government has also introduced student-friendly visa policies, allowing graduates to stay back and search for jobs or continue working in the country. With a tax-free salary structure, professionals can enjoy higher savings compared to many other countries. Additionally, the UAE offers a high standard of living, world-class infrastructure, excellent healthcare, and a safe environment, making it an ideal place to settle and grow professionally.",
        "Apart from career opportunities, life in the UAE is vibrant and multicultural. Students and professionals get to experience a diverse culture, international lifestyle, and numerous entertainment options, from luxury shopping malls to cultural festivals and events. The country's strategic location also makes it easy to travel to other international destinations.",
        "Overall, studying in the UAE opens the door to a wide range of career opportunities and a high-quality lifestyle. With the right skills and qualifications, students can build a rewarding career and enjoy a successful future in one of the world's most dynamic and opportunity-rich countries."
      ]
    },

    faqs: [
      {
        question: "Why should I choose the United Arab Emirates for higher studies?",
        answer: "The UAE offers globally recognized universities, modern infrastructure, a safe environment, and excellent career opportunities in a fast-growing economy."
      },
      {
        question: "What are the popular courses to study in the UAE?",
        answer: "Popular courses include Business Management, Engineering, Information Technology, Hospitality, Finance, Media, and Healthcare."
      },
      {
        question: "What are the eligibility criteria to study in the UAE?",
        answer: "Students must have completed 12th grade for undergraduate programs or a bachelor's degree for postgraduate programs, along with required academic scores and English proficiency."
      },
      {
        question: "Is IELTS or TOEFL required for UAE universities?",
        answer: "Yes, most universities require IELTS or TOEFL scores. However, some universities may offer admission without IELTS under certain conditions."
      },
      {
        question: "Are scholarships available in the UAE?",
        answer: "Yes, many universities offer merit-based and need-based scholarships to international students."
      },
      {
        question: "Can international students work while studying in the UAE?",
        answer: "Yes, students can work part-time (around 15–20 hours per week) with proper permissions and a valid student visa."
      },
      {
        question: "What are the intakes in the UAE?",
        answer: "The UAE generally has three intakes: Fall (September), Spring (January), and Summer (May/June)."
      },
      {
        question: "What documents are required to study in the UAE?",
        answer: "Key documents include academic certificates, passport, photographs, English test scores, SOP, LORs, and proof of funds."
      },
      {
        question: "Is the UAE safe for international students?",
        answer: "Yes, the UAE is considered one of the safest countries in the world with strict laws and a secure environment."
      }
    ]
  },
};
