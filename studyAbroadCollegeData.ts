import { StudyAbroadCollegeDetailData } from './types';

export const STUDY_ABROAD_COLLEGE_DETAILS: Record<string, StudyAbroadCollegeDetailData> = {
  "trinity-college-dublin": {
    title: "Trinity College Dublin",
    coursetype: "UG & PG Programs",
    heroImage: "https://example.com/trinity-hero.webp",
    heroImageMobile: "https://example.com/trinity-hero-mobile.webp",
    intro: {
      text: `Trinity College Dublin, officially known as the University of Dublin, is one of the most prestigious and oldest universities in Europe, established in 1592. Located in Dublin, Ireland, it is globally recognized for its academic excellence, rich history, and world-class research facilities.\n\nThe university offers a wide range of undergraduate and postgraduate programs across disciplines such as medicine, engineering, business, arts, and sciences. With students from over 120 countries, it provides a multicultural environment and strong international exposure.\n\nWith strong industry connections, advanced research opportunities, and a vibrant campus life, Trinity College Dublin is a top destination for students seeking global education and career growth.`,
    },
    quickOverview: {
      "University Name": "Trinity College Dublin (University of Dublin)",
      "Established Year": "1592",
      "Location": "Dublin, Ireland",
      "University Type": "Public Research University",
      "Global Ranking": "Top Universities Worldwide",
      "Popular Courses": "Medicine, Engineering, Business, Arts, Science, Law",
      "Medium of Instruction": "English",
      "Programs Offered": "Undergraduate, Postgraduate, Research",
      "International Students": "120+ Countries",
      "Research Facilities": "Advanced Labs, Innovation Hubs",
      "Scholarships": "Available for International Students",
      "Career Opportunities": "Strong Industry Connections & Placements"
    },
    benefits: {
      intro: "Studying at Trinity College Dublin provides world-class education, global exposure, and excellent career opportunities. Here are the key benefits:",
      items: [
        {
          heading: "Globally Recognized University",
          details: "Ranks among the top universities worldwide with strong global reputation."
        },
        {
          heading: "Wide Range of Courses",
          details: "Offers programs across medicine, engineering, business, arts, and sciences."
        },
        {
          heading: "English-Medium Education",
          details: "All courses are taught in English, making it ideal for international students."
        },
        {
          heading: "Strong Career Opportunities",
          details: "Excellent industry partnerships provide internships and placements."
        },
        {
          heading: "Research Excellence",
          details: "Access to cutting-edge research facilities and innovation-driven learning."
        },
        {
          heading: "Multicultural Environment",
          details: "Students from over 120 countries create global exposure."
        },
        {
          heading: "Prime Location",
          details: "Located in Dublin, a vibrant and student-friendly European city."
        },
        {
          heading: "Scholarships Available",
          details: "Various merit-based scholarships for international students."
        }
      ]
    },
    SyllabusIntro: "Programs at Trinity College Dublin follow globally recognized academic structures depending on course level and specialization.",
    syllabus: {
      headers: ["Level", "Details"],
      table: [
        {
          "Level": "Undergraduate",
          "Details": "Core subjects, electives, and practical learning"
        },
        {
          "Level": "Postgraduate",
          "Details": "Advanced specialization, research, and dissertation"
        },
        {
          "Level": "Research Programs",
          "Details": "PhD/MPhil with thesis and innovation projects"
        }
      ]
    },
    fees: {
      sections: [
        {
          title: "Undergraduate Tuition Fees (Annual)",
          headers: ["Course", "Annual Fee (EUR)", "Annual Fee (INR Approx.)"],
          table: [
            {
              "Course": "Medicine (MBBS/MB BCh BAO)",
              "Annual Fee (EUR)": "€56,000 – €60,000",
              "Annual Fee (INR Approx.)": "₹51.0 L – ₹54.6 Lakhs"
            },
            {
              "Course": "Dentistry",
              "Annual Fee (EUR)": "€50,000 – €55,000",
              "Annual Fee (INR Approx.)": "₹45.5 L – ₹50.0 Lakhs"
            },
            {
              "Course": "Engineering & Computer Science",
              "Annual Fee (EUR)": "€27,000 – €30,000",
              "Annual Fee (INR Approx.)": "₹24.5 L – ₹27.3 Lakhs"
            },
            {
              "Course": "Business (BBS)",
              "Annual Fee (EUR)": "€22,000 – €26,000",
              "Annual Fee (INR Approx.)": "₹20.0 L – ₹23.6 Lakhs"
            },
            {
              "Course": "Arts, Humanities & Social Science",
              "Annual Fee (EUR)": "€21,000 – €25,000",
              "Annual Fee (INR Approx.)": "₹19.1 L – ₹22.7 Lakhs"
            },
            {
              "Course": "Science (Biological/Chemical)",
              "Annual Fee (EUR)": "€26,000 – €28,000",
              "Annual Fee (INR Approx.)": "₹23.6 L – ₹25.5 Lakhs"
            }
          ]
        },
        {
          title: "Postgraduate Tuition Fees",
          headers: ["Program", "Total Fee (EUR)", "Total Fee (INR Approx.)"],
          table: [
            {
              "Program": "MBA",
              "Total Fee (EUR)": "€36,000 – €38,000",
              "Total Fee (INR Approx.)": "₹32.7 L – ₹34.5 Lakhs"
            },
            {
              "Program": "M.Sc. Computer Science / Data Science",
              "Total Fee (EUR)": "€24,000 – €27,000",
              "Total Fee (INR Approx.)": "₹21.8 L – ₹24.5 Lakhs"
            },
            {
              "Program": "M.Sc. Management / Finance",
              "Total Fee (EUR)": "€21,000 – €24,000",
              "Total Fee (INR Approx.)": "₹19.1 L – ₹21.8 Lakhs"
            },
            {
              "Program": "M.Phil (Arts/Humanities)",
              "Total Fee (EUR)": "€18,000 – €22,000",
              "Total Fee (INR Approx.)": "₹16.3 L – ₹20.0 Lakhs"
            },
            {
              "Program": "LL.M. (Law)",
              "Total Fee (EUR)": "€21,000 – €23,000",
              "Total Fee (INR Approx.)": "₹19.1 L – ₹20.9 Lakhs"
            }
          ]
        }
      ]
    },
    duration: {
      headers: ["Program", "Duration", "Details"],
      table: [
        {
          "Program": "Undergraduate",
          "Duration": "3–4 Years",
          "Details": "Depends on course"
        },
        {
          "Program": "Postgraduate",
          "Duration": "1–2 Years",
          "Details": "Master’s programs"
        },
        {
          "Program": "Research Programs",
          "Duration": "3–5 Years",
          "Details": "PhD / MPhil"
        },
        {
          "Program": "Medium",
          "Duration": "-",
          "Details": "English"
        }
      ]
    },
    studentSupport: `Trinity College Dublin provides strong support including visa guidance, orientation, academic help, counselling, and career support.\n\nStudents also get mentoring programs, accommodation assistance, and cultural integration support.`,
    recognition: `Trinity College Dublin is globally ranked and recognized for academic excellence, research output, and employability. Its degrees are respected worldwide.`,
    hostelFacilities: `Students can choose from on-campus and off-campus housing options. Trinity provides modern accommodation facilities and support for finding housing in Dublin.`,
    studentLife: `Student life at Trinity is vibrant with 100+ societies and 50+ sports clubs. Students participate in cultural events, networking, and extracurricular activities.\n\nLocated in Dublin, students enjoy access to global career opportunities and a rich cultural environment.`,
    scholarshipIntro: "Trinity College Dublin offers multiple scholarships for international students, especially Indian students, to reduce financial burden.",
    scholarships: [
      {
        title: "Indian Undergraduate Scholarships",
        details: "Up to €36,000 (approx €9,000/year) tuition fee reduction"
      },
      {
        title: "Global Excellence Scholarships",
        details: "€2,000 – €5,000 for UG & PG students"
      },
      {
        title: "Postgraduate Indian Scholarships",
        details: "Approx €3,000 fee reduction for master’s programs"
      }
    ],
    eligibility: {
      headers: ["Criteria", "Details"],
      table: [
        {
          "Criteria": "UG Qualification",
          "Details": "10+2 with 75%–90%"
        },
        {
          "Criteria": "PG Qualification",
          "Details": "Bachelor’s degree with 60%–75%"
        },
        {
          "Criteria": "English Proficiency",
          "Details": "IELTS 6.5–7.0 / TOEFL 90–100"
        },
        {
          "Criteria": "SOP",
          "Details": "Required for PG programs"
        },
        {
          "Criteria": "LOR",
          "Details": "1–2 required"
        },
        {
          "Criteria": "Entrance Exams",
          "Details": "GMAT/GRE (if applicable)"
        },
        {
          "Criteria": "Portfolio",
          "Details": "For creative courses"
        },
        {
          "Criteria": "Passport & Visa",
          "Details": "Mandatory"
        },
        {
          "Criteria": "Financial Proof",
          "Details": "Required"
        }
      ]
    },
    whyChooseUsIntro: "iExplain Education provides complete support for studying at Trinity College Dublin.",
    whyChooseUs: [
      "Personalized Career Counselling",
      "End-to-End Admission Support",
      "Strong Documentation Assistance",
      "Visa Guidance",
      "Scholarship Assistance",
      "Pre & Post Arrival Support",
      "Global Expertise",
      "Transparent Process"
    ],
    documents: [
      { document: "Academic Transcripts", details: "10th, 12th, or Bachelor’s" },
      { document: "English Test Scores", details: "IELTS/TOEFL" },
      { document: "SOP", details: "For PG programs" },
      { document: "LOR", details: "1–2 required" },
      { document: "Passport", details: "Valid passport" },
      { document: "Financial Proof", details: "For visa" }
    ],
    conclusion: `Trinity College Dublin offers world-class education, strong career opportunities, and global exposure. With expert guidance from iExplain Education, students can smoothly complete their admission journey and achieve their study abroad goals.`,
    faqs: [
      {
        question: "Why choose Trinity College Dublin?",
        answer: "It is a top-ranked global university with excellent education and career opportunities."
      },
      {
        question: "Is IELTS required?",
        answer: "Yes, English proficiency tests are required."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, multiple scholarships are available for international students."
      },
      {
        question: "Can students work part-time?",
        answer: "Yes, up to 20 hours per week."
      },
      {
        question: "Does iExplain help with admission?",
        answer: "Yes, complete end-to-end support is provided."
      }
    ]
  }
};
