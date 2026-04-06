import { CollegeDetailData } from './types';

// Study Abroad college pages under Colleges > Study Abroad.
// Keep the shape aligned with `collegeData.ts` entries so App can normalize both
// sources using the same pipeline.
export const STUDY_ABROAD_COLLEGE_DETAILS: Record<string, Partial<CollegeDetailData>> = {
  "trinity-college-dublin": {
    "title": "Trinity College Dublin",
    "coursetype": "Study Abroad",
    "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Trinity_Main.webp",
    "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Trinity_Mobile.webp",
    "intro": {
      "text": "Trinity College Dublin, officially known as the University of Dublin, is one of the most prestigious and oldest universities in Europe, established in 1592. Located in the heart of Dublin, Ireland, it is globally recognized for its academic excellence, rich history, and world-class research facilities. For students planning to study abroad, Trinity College Dublin offers a perfect blend of high-quality education, international exposure, and career opportunities. It consistently ranks among the top universities in the world, making it a preferred destination for students who want to pursue higher education in a globally competitive environment.\n\nThe university provides a wide range of undergraduate and postgraduate programs across disciplines such as medicine, engineering, business, arts, and sciences. Students who choose to study at Trinity College Dublin benefit from a modern curriculum, experienced faculty, and access to cutting-edge research opportunities. The institution is especially popular among international students looking for study abroad in Ireland, as it offers a welcoming multicultural environment and English-medium education. Its strong focus on innovation and practical learning ensures that students are well-prepared for global careers.\n\nFor those seeking international education, study abroad programs, and globally recognized degrees, Trinity College Dublin stands out as an ideal choice. The university also has strong industry connections and partnerships with leading global companies, providing excellent internship and job placement opportunities. With its vibrant campus life, historic architecture, and location in one of Europe’s most student-friendly cities, Trinity offers a unique and enriching experience for students aiming to study abroad in top universities."
    },
    "quickOverview": {
      "University Name": "Trinity College Dublin (University of Dublin)",
      "Location": "Dublin, Ireland",
      "Established": "1592",
      "Type": "Public Research University",
      "Global Ranking": "Among Top Universities in the World",
      "Popular Courses": "Medicine, Engineering, Business, Arts, Science, Law",
      "Medium of Instruction": "English",
      "Programs Offered": "Undergraduate, Postgraduate, Research Programs",
      "International Students": "Students from 120+ countries",
      "Scholarships": "Available for international students"
    },
    "benefits": {
      "intro": "Choosing to study abroad in Ireland at Trinity College Dublin is a smart decision for students who want a globally recognized degree, excellent career opportunities, and a rich international experience. Here are the key reasons to study at Trinity College Dublin:",
      "headers": [
        "Heading",
        "Details"
      ],
      "table": [
        {
          "Heading": "Globally Recognized University",
          "Details": "Trinity College Dublin consistently ranks among the top universities in the world. A degree from Trinity is respected by employers and institutions worldwide."
        },
        {
          "Heading": "Wide Range of Courses",
          "Details": "The university offers diverse programs in medicine, engineering, business, arts, and science, allowing students to choose courses that align with their career goals."
        },
        {
          "Heading": "English-Medium Education",
          "Details": "All programs are taught in English, which makes it easier for international students, especially from India, to adapt and succeed."
        },
        {
          "Heading": "Strong Career Opportunities",
          "Details": "Trinity has excellent connections with global companies, offering students access to internships, research projects, and job placements."
        },
        {
          "Heading": "Research and Innovation Excellence",
          "Details": "The university is known for its advanced research facilities and innovation-driven approach, giving students opportunities to work on real-world projects."
        },
        {
          "Heading": "Multicultural Environment",
          "Details": "With students from over 120 countries, Trinity provides a diverse and inclusive environment, helping students build global networks."
        },
        {
          "Heading": "Prime Location in Dublin",
          "Details": "Located in Dublin, one of Europe’s most vibrant and student-friendly cities, providing a safe environment and excellent lifestyle."
        },
        {
          "Heading": "Scholarships and Financial Support",
          "Details": "Trinity offers various scholarships and financial aid options for international students, reducing the financial burden."
        }
      ]
    },
    "SyllabusIntro": "Trinity College Dublin is committed to delivering world-class education and innovation. Its values are centered on academic excellence, student success, and social responsibility, ensuring a transformative learning experience for international students.",
    "syllabus": {
      "headers": [
        "Core Value",
        "Description"
      ],
      "table": [
        {
          "Core Value": "Academic Excellence",
          "Description": "Maintaining the highest standards in teaching, learning, and research to provide a strong academic foundation."
        },
        {
          "Core Value": "Innovation and Research",
          "Description": "Promoting cutting-edge research across disciplines and fostering creativity and problem-solving skills."
        },
        {
          "Core Value": "Diversity and Inclusion",
          "Description": "Valuing cultural diversity with students from over 120 countries, creating a welcoming environment."
        },
        {
          "Core Value": "Global Engagement",
          "Description": "Actively collaborating with international institutions and industries to promote global learning."
        },
        {
          "Core Value": "Social Responsibility",
          "Description": "Making a positive impact through community engagement and sustainability initiatives."
        }
      ]
    },
    "feesIntro": "For the 2026 academic year, Trinity College Dublin (TCD) fees for international students vary by the field of study. Below is the breakdown (Approx. exchange rate 1 EUR = 91 INR).",
    "fees": {
      "undergraduate": {
        "headers": [
          "Faculty / Course",
          "Annual Fee (EUR)",
          "Annual Fee (INR Approx.)"
        ],
        "table": [
          {
            "Faculty / Course": "Medicine (MBBS/MB BCh BAO)",
            "Annual Fee (EUR)": "€56,000 – €60,000",
            "Annual Fee (INR Approx.)": "₹51.0 L – ₹54.6 Lakhs"
          },
          {
            "Faculty / Course": "Dentistry",
            "Annual Fee (EUR)": "€50,000 – €55,000",
            "Annual Fee (INR Approx.)": "₹45.5 L – ₹50.0 Lakhs"
          },
          {
            "Faculty / Course": "Engineering & Computer Science",
            "Annual Fee (EUR)": "€27,000 – €30,000",
            "Annual Fee (INR Approx.)": "₹24.5 L – ₹27.3 Lakhs"
          },
          {
            "Faculty / Course": "Business (BBS)",
            "Annual Fee (EUR)": "€22,000 – €26,000",
            "Annual Fee (INR Approx.)": "₹20.0 L – ₹23.6 Lakhs"
          },
          {
            "Faculty / Course": "Arts, Humanities & Social Science",
            "Annual Fee (EUR)": "€21,000 – €25,000",
            "Annual Fee (INR Approx.)": "₹19.1 L – ₹22.7 Lakhs"
          },
          {
            "Faculty / Course": "Science (Biological/Chemical)",
            "Annual Fee (EUR)": "€26,000 – €28,000",
            "Annual Fee (INR Approx.)": "₹23.6 L – ₹25.5 Lakhs"
          }
        ]
      },
      "postgraduate": {
        "headers": [
          "Program Type",
          "Total Fee (EUR)",
          "Total Fee (INR Approx.)"
        ],
        "table": [
          {
            "Program Type": "Master of Business Admin (MBA)",
            "Total Fee (EUR)": "€36,000 – €38,000",
            "Total Fee (INR Approx.)": "₹32.7 L – ₹34.5 Lakhs"
          },
          {
            "Program Type": "M.Sc. Computer Science / Data Science",
            "Total Fee (EUR)": "€24,000 – €27,000",
            "Total Fee (INR Approx.)": "₹21.8 L – ₹24.5 Lakhs"
          },
          {
            "Program Type": "M.Sc. Management / Finance",
            "Total Fee (EUR)": "€21,000 – €24,000",
            "Total Fee (INR Approx.)": "₹19.1 L – ₹21.8 Lakhs"
          },
          {
            "Program Type": "M.Phil (Arts/Humanities)",
            "Total Fee (EUR)": "€18,000 – €22,000",
            "Total Fee (INR Approx.)": "₹16.3 L – ₹20.0 Lakhs"
          },
          {
            "Program Type": "LL.M. (Law)",
            "Total Fee (EUR)": "€21,000 – €23,000",
            "Total Fee (INR Approx.)": "₹19.1 L – ₹20.9 Lakhs"
          }
        ]
      }
    },
    "durationIntro": "To apply for study at Trinity College Dublin, Indian students must meet specific academic and financial criteria. Below is a summary of the eligibility requirements.",
    "duration": {
      "headers": [
        "Criteria",
        "Details"
      ],
      "table": [
        {
          "Criteria": "Academic Qualification (UG)",
          "Details": "Completion of 10+2 (CBSE/ISC/State Board) with strong performance (75%–90% depending on course)."
        },
        {
          "Criteria": "Academic Qualification (PG)",
          "Details": "Bachelor’s degree from a recognized university with minimum 60%–75% or equivalent CGPA."
        },
        {
          "Criteria": "English Language Proficiency",
          "Details": "IELTS (6.5–7.0 overall) or TOEFL (90–100) or equivalent accepted test."
        },
        {
          "Criteria": "Statement of Purpose (SOP)",
          "Details": "Required for most postgraduate programs explaining goals and career plans."
        },
        {
          "Criteria": "Financial Proof",
          "Details": "Evidence of sufficient funds to cover tuition fees and living expenses."
        }
      ]
    },
    "studentSupport": "Trinity College Dublin provides a comprehensive and student-focused support system. Key services include the International Student Support Team, which assists with visa guidance and immigration formalities. New students are welcomed through orientation programs that introduce campus facilities and academic systems. Strong academic support services, including tutoring, writing assistance, and study workshops, help students meet Trinity’s high standards. Dedicated advisors guide students through course selection and career planning. For personal well-being, Trinity provides counselling services, health support, and mental wellness programs. Additionally, a buddy and mentoring system pairs new international students with experienced peers to help with cultural and academic adjustment.",
    "recognition": "Trinity College Dublin is one of the most prestigious and oldest universities in Europe, established in 1592. It is globally recognized for its academic excellence and world-class research facilities. It consistently ranks among the top universities in the world. Its degrees are respected by employers and institutions worldwide, ensuring that graduates are well-prepared for global medical and professional careers.",
    "hostelFacilities": "Trinity offers accommodation support for both on-campus and off-campus housing. Students enjoy access to modern accommodation, cafes, fitness centers, and recreational facilities on campus. The location in Dublin offers cultural landmarks, museum access, and excellent career opportunities, including part-time jobs and internships. Historic green spaces and modern facilities blend to create an inspiring environment for living and study.",
    "studentLife": "Student life at Trinity is dynamic and enriching. It is home to over 100 student societies and 50+ sports clubs, allowing students to explore interests in debating, music, entrepreneurship, drama, and sports. Regular events, festivals, and student-led initiatives promote a strong sense of community. International students benefit from a multicultural environment that fosters cross-cultural interactions and lifelong friendships. This holistic experience combines academic rigor with social engagement and real-world exposure.",
    "whyChooseUsIntro": "Choosing the right guidance is essential when planning to study abroad in Ireland. iExplain Education is a trusted consultancy that helps students navigate the entire admission journey at Trinity College Dublin.",
    "whyChooseUs": [
      "Expert Career Counselling: Personalized guidance to choose the right program based on academic background and interests.",
      "End-to-End Admission Support: Managing the entire process from university selection to application submission.",
      "Strong Documentation Assistance: Helping prepare essential documents like SOPs, LORs, and CVs.",
      "Visa Guidance & Approval Support: Complete assistance with the student visa process, including financial proof and interview prep.",
      "Scholarship & Financial Planning: Guidance on fee planning, scholarships, and education loans.",
      "Pre-Departure & Post-Arrival Services: Sessions covering travel and accommodation, plus ongoing support after reaching Dublin.",
      "Global Expertise: Reliable and updated information about international education in Ireland.",
      "Transparent Approach: Complete transparency in processes, fees, and timelines."
    ],
    "documents": [
      {
        "document": "Academic Transcripts",
        "details": "10th and 12th mark sheets for UG; Bachelor's degree transcripts for PG."
      },
      {
        "document": "Passport",
        "details": "Mandatory for application and visa process; minimum validity required."
      },
      {
        "document": "English Proficiency Score",
        "details": "IELTS or TOEFL scores as per course requirements."
      },
      {
        "document": "Statement of Purpose (SOP)",
        "details": "Explaining academic goals and reasons for choosing the program."
      },
      {
        "document": "Letters of Recommendation (LOR)",
        "details": "Usually 1–2 references required for postgraduate courses."
      },
      {
        "document": "Financial Proof",
        "details": "Bank statements or proof of funds for tuition and living costs."
      },
      {
        "document": "CV / Resume",
        "details": "Required for postgraduate and certain specialized applications."
      },
      {
        "document": "Entrance Exam Proof",
        "details": "GMAT/GRE scores for certain Business programs if applicable."
      }
    ],
    "conclusion": "Choosing to study abroad at Trinity College Dublin is a life-changing decision that opens doors to global education, career opportunities, and personal growth. With its personalized counseling, end-to-end admission assistance, and strong focus on student success, iExplain Education ensures a smooth and stress-free experience for students planning to study in Ireland. From selecting the right course to settling in Dublin, the consultancy acts as a reliable partner throughout the process, increasing your chances of successfully securing a place at one of the world’s top universities.",
    "faqs": [
      {
        "question": "Why should I choose Trinity College Dublin for study abroad?",
        "answer": "Trinity College Dublin is one of the top-ranked universities globally, offering high-quality education, excellent research opportunities, and strong career prospects."
      },
      {
        "question": "How can iExplain Education help me get admission?",
        "answer": "iExplain Education provides complete support, including university selection, application process, documentation, and visa guidance."
      },
      {
        "question": "What are the eligibility criteria for Indian students?",
        "answer": "Students must have strong academic records (10+2 for UG or bachelor’s degree for PG), English proficiency (IELTS/TOEFL), and meet course-specific requirements."
      },
      {
        "question": "Is IELTS mandatory for admission?",
        "answer": "Yes, most programs require an English proficiency test like IELTS or TOEFL for international students who want to study in Ireland."
      },
      {
        "question": "Does iExplain Education assist with scholarships?",
        "answer": "Yes, iExplain Education helps students explore and apply for scholarships available at Trinity College Dublin, reducing the financial burden."
      },
      {
        "question": "What documents are required for admission?",
        "answer": "Key documents include academic transcripts, SOP, LORs, passport, English test scores, and financial proof."
      },
      {
        "question": "How long does the admission process take?",
        "answer": "The process usually takes 4–8 weeks, depending on the course and application timeline. Early application is recommended."
      },
      {
        "question": "Does iExplain Education help with visa processing?",
        "answer": "Yes, they provide complete visa assistance, including documentation, financial proof, and interview preparation."
      },
      {
        "question": "Can I work while studying at Trinity College Dublin?",
        "answer": "Yes, international students in Ireland can work part-time (up to 20 hours/week) during studies and full-time during holidays."
      },
      {
        "question": "What support is provided after reaching Ireland?",
        "answer": "iExplain Education offers post-arrival support including accommodation guidance, local assistance, and help in settling down in Dublin."
      }
    ]
  },
  "university-college-dublin": {
    "title": "University College Dublin",
    "coursetype": "Study Abroad",
    "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/UCD_Main.webp",
    "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/UCD_Mobile.webp",
    "intro": {
      "text": "University College Dublin (UCD) is one of the most prestigious and largest universities in Ireland, widely recognized for its academic excellence, global rankings, and strong emphasis on research, innovation, and career-focused education. Established in 1854, UCD has evolved into a world-class institution that consistently ranks among the top universities globally, attracting a diverse community of students from over 150 countries. This multicultural environment makes it an ideal destination for students who want to study abroad in Ireland and gain international exposure while pursuing a globally recognized degree.\n\nThe university provides a modern, flexible, and industry-orientated curriculum designed to meet global academic and professional standards. UCD focuses on a combination of theoretical knowledge and practical learning, ensuring that students are equipped with the skills required to succeed in today’s competitive job market. Through strong collaborations with leading multinational companies and research institutions, UCD provides excellent opportunities for internships, research projects, and industry placements. This makes it an excellent option for students looking for career-focused study abroad programs in Europe and aiming to build successful global careers.\n\nThe university’s main campus, located in Dublin, is one of the largest and most modern campuses in Europe, spread across a beautiful and well-equipped environment. It offers state-of-the-art facilities, including advanced laboratories, digital libraries, innovation and research centers, sports complexes, and dedicated student support services. Additionally, UCD is known for its strong global reputation and employability outcomes, with graduates highly valued by employers worldwide."
    },
    "quickOverview": {
      "University Name": "University College Dublin (UCD)",
      "Location": "Dublin, Ireland",
      "Established": "1854",
      "Type": "Public Research University",
      "Global Ranking": "Among Top Universities in the World",
      "Popular Courses": "Business, Engineering, Medicine, Computer Science, Arts, Law",
      "Medium of Instruction": "English",
      "Programs Offered": "Undergraduate, Postgraduate, PhD & Research Programs",
      "International Students": "Students from 150+ countries",
      "Campus Type": "Large Modern Campus (Belfield Campus)"
    },
    "benefits": {
      "intro": "Choosing University College Dublin (UCD) for your study abroad in Ireland journey is an excellent decision for students seeking a globally recognized degree, strong career prospects, and a high-quality international education. Here are the key reasons:",
      "headers": [
        "Heading",
        "Details"
      ],
      "table": [
        {
          "Heading": "Globally Ranked University",
          "Details": "UCD is consistently ranked among the top universities in the world, ensuring strong international recognition and credibility for your degree."
        },
        {
          "Heading": "Career-Focused Education",
          "Details": "UCD offers industry-oriented programs with strong links to global companies, providing internships, placements, and real-world exposure."
        },
        {
          "Heading": "Wide Range of Courses",
          "Details": "The university provides diverse programs in business, engineering, medicine, computer science, and humanities, allowing students to choose courses aligned with their career goals."
        },
        {
          "Heading": "Modern Campus & Advanced Facilities",
          "Details": "Located in Dublin, UCD has one of the most modern campuses in Europe, equipped with state-of-the-art laboratories, libraries, and research centers."
        },
        {
          "Heading": "Strong Research & Innovation Focus",
          "Details": "UCD is known for cutting-edge research and global collaborations, offering students opportunities to work on innovative projects."
        },
        {
          "Heading": "Multicultural Environment",
          "Details": "With students from over 150 countries, UCD provides a diverse and inclusive atmosphere, ideal for a global study abroad experience."
        },
        {
          "Heading": "English-Medium Programs",
          "Details": "All courses are taught in English, making it convenient for international students, especially Indian students, to succeed academically."
        },
        {
          "Heading": "Scholarships & Financial Support",
          "Details": "UCD offers a variety of scholarships and financial aid options for international students, helping reduce the cost of study abroad in Ireland."
        }
      ]
    },
    "SyllabusIntro": "University College Dublin is driven by a strong mission to deliver world-class education and impactful research. Its core values center on academic excellence, innovation, and global engagement.",
    "syllabus": {
      "headers": [
        "Core Value",
        "Description"
      ],
      "table": [
        {
          "Core Value": "Excellence in Education",
          "Description": "Maintaining the highest standards in teaching and research to provide a strong academic foundation."
        },
        {
          "Core Value": "Innovation and Creativity",
          "Description": "Encouraging students to explore new ideas and develop creative solutions to global challenges."
        },
        {
          "Core Value": "Integrity and Accountability",
          "Description": "Valuing honesty, transparency, and ethical practices in all aspects of academic life."
        },
        {
          "Core Value": "Diversity and Inclusivity",
          "Description": "Fostering an inclusive culture where students from across the world feel welcomed and respected."
        },
        {
          "Core Value": "Global Perspective",
          "Description": "Actively engaging with international institutions and industries to provide global exposure."
        }
      ]
    },
    "feesIntro": "For the 2026 academic year, University College Dublin (UCD) fees for international (Non-EU) students are categorized by the specific college or faculty. Below is the breakdown (Approx. exchange rate 1 EUR = 91 INR).",
    "fees": {
      "undergraduate": {
        "headers": [
          "Course Category",
          "Annual Fee (EUR)",
          "Annual Fee (INR Approx.)"
        ],
        "table": [
          {
            "Course Category": "Medicine (Non-EU)",
            "Annual Fee (EUR)": "€57,000 – €61,000",
            "Annual Fee (INR Approx.)": "₹51.8 L – ₹55.5 Lakhs"
          },
          {
            "Course Category": "Veterinary Medicine",
            "Annual Fee (EUR)": "€34,000 – €36,000",
            "Annual Fee (INR Approx.)": "₹30.9 L – ₹32.7 Lakhs"
          },
          {
            "Course Category": "Engineering & Architecture",
            "Annual Fee (EUR)": "€28,000 – €31,000",
            "Annual Fee (INR Approx.)": "₹25.4 L – ₹28.2 Lakhs"
          },
          {
            "Course Category": "Science & Computer Science",
            "Annual Fee (EUR)": "€27,000 – €30,000",
            "Annual Fee (INR Approx.)": "₹24.5 L – ₹27.3 Lakhs"
          },
          {
            "Course Category": "Business / Commerce",
            "Annual Fee (EUR)": "€21,000 – €25,000",
            "Annual Fee (INR Approx.)": "₹19.1 L – ₹22.7 Lakhs"
          },
          {
            "Course Category": "Arts, Humanities & Law",
            "Annual Fee (EUR)": "€21,000 – €23,000",
            "Annual Fee (INR Approx.)": "₹19.1 L – ₹20.9 Lakhs"
          }
        ]
      },
      "postgraduate": {
        "headers": [
          "Program Type",
          "Total Fee (EUR)",
          "Total Fee (INR Approx.)"
        ],
        "table": [
          {
            "Program Type": "Smurfit Business School (MBA)",
            "Total Fee (EUR)": "€36,000 – €37,500",
            "Total Fee (INR Approx.)": "₹32.7 L – ₹34.1 Lakhs"
          },
          {
            "Program Type": "M.Sc. Data & Computational Science",
            "Total Fee (EUR)": "€28,000 – €30,000",
            "Total Fee (INR Approx.)": "₹25.4 L – ₹27.3 Lakhs"
          },
          {
            "Program Type": "M.Sc. Engineering (Mechanical/Elec)",
            "Total Fee (EUR)": "€28,500 – €29,500",
            "Total Fee (INR Approx.)": "₹25.9 L – ₹26.8 Lakhs"
          },
          {
            "Program Type": "M.Sc. Management / Marketing",
            "Total Fee (EUR)": "€21,000 – €23,000",
            "Total Fee (INR Approx.)": "₹19.1 L – ₹20.9 Lakhs"
          },
          {
            "Program Type": "M.A. International Relations / Arts",
            "Total Fee (EUR)": "€20,000 – €22,000",
            "Total Fee (INR Approx.)": "₹18.2 L – ₹20.0 Lakhs"
          }
        ]
      }
    },
    "durationIntro": "Indian students planning to study abroad in Ireland at University College Dublin must meet specific academic and admission requirements. Below is a summary of the eligibility criteria.",
    "duration": {
      "headers": [
        "Criteria",
        "Details"
      ],
      "table": [
        {
          "Criteria": "Academic Qualification (UG)",
          "Details": "Completion of 10+2 (CBSE/ISC/State Boards) with an average of 75%–90% depending on the course."
        },
        {
          "Criteria": "Academic Qualification (PG)",
          "Details": "Bachelor’s degree in a relevant field with minimum 60%–75% or equivalent CGPA."
        },
        {
          "Criteria": "English Language Requirement",
          "Details": "IELTS minimum 6.5 overall (no band below 6.0) or equivalent TOEFL/PTE score."
        },
        {
          "Criteria": "English Waiver Option",
          "Details": "Possible for students with strong English scores in CBSE/ISC (subject to university approval)."
        },
        {
          "Criteria": "Financial Proof",
          "Details": "Proof of sufficient funds to cover tuition and living expenses."
        }
      ]
    },
    "studentSupport": "University College Dublin (UCD) offers a comprehensive support system designed to help international students adapt to life in Ireland. Pre-departure guidance covers visa assistance and accommodation support. Upon arrival, structured orientation programs introduce students to the campus and local culture. Academically, UCD provides advisors, tutoring, writing centers, and study workshops. For personal well-being, students have access to counseling services, health support, and mental wellness programs. Additionally, mentoring and buddy programs pair newcomers with experienced students to help with academic and cultural adjustment. The university also organizes cultural events and networking sessions to foster a strong sense of community.",
    "recognition": "University College Dublin, established in 1854, is one of the most prestigious and largest universities in Ireland. It consistently ranks among the top universities globally. UCD degrees are highly valued by employers worldwide due to the university's focus on innovation, research, and practical skills. The institution is part of global academic networks and holds affiliations with top-ranking universities and leading multinational companies, ensuring excellent employability outcomes for its graduates.",
    "hostelFacilities": "UCD’s Belfield campus is one of the largest in Europe, offering modern infrastructure and on-campus residences. Facilities include advanced laboratories, digital libraries, sports complexes, fitness centers, cafes, and restaurants. The university also provides support for finding off-campus housing. Being located in Dublin, students gain access to cultural landmarks, entertainment, and networking opportunities with global companies based in the city.",
    "studentLife": "Student life at UCD is dynamic and diverse. With over 70+ societies and numerous sports clubs, students can participate in music, drama, debating, cultural events, and athletics. Regular campus festivals and student-led initiatives create a lively culture. The campus hosts a multicultural community from over 150 countries, facilitating cross-cultural interaction and global friendships. This environment encourages personal growth and leadership development alongside academic excellence.",
    "whyChooseUsIntro": "Planning to study at University College Dublin requires expert guidance. iExplain Education provides personalized counseling and end-to-end support to ensure a smooth admission journey for international students.",
    "whyChooseUs": [
      "Expert Career Counseling: Personalized guidance based on academic background and future goals.",
      "Complete Admission Assistance: Managing the process from university selection to application submission.",
      "Strong Documentation Support: Helping prepare essential documents like SOPs, LORs, and CVs.",
      "Visa & Travel Support: Complete assistance with the student visa process and travel arrangements.",
      "Scholarship & Financial Guidance: Assistance with fee planning, scholarships, and education loans.",
      "Pre-Departure & Post-Arrival Services: Briefings on life in Ireland and ongoing support after arrival.",
      "Global Expertise: Reliable and updated information about international education in Ireland.",
      "Student-Focused Approach: Dedicated to helping students build strong medical and professional careers."
    ],
    "documents": [
      {
        "document": "Academic Transcripts",
        "details": "10th and 12th mark sheets for UG; Bachelor's degree transcripts for PG."
      },
      {
        "document": "Passport",
        "details": "Mandatory for application and visa process; original passport required."
      },
      {
        "document": "English Proficiency Score",
        "details": "IELTS, TOEFL, or PTE scores as per course requirements."
      },
      {
        "document": "Statement of Purpose (SOP)",
        "details": "Explaining academic goals and reasons for choosing the program."
      },
      {
        "document": "Letters of Recommendation (LOR)",
        "details": "Usually 1–2 academic or professional references required."
      },
      {
        "document": "CV / Resume",
        "details": "Required for postgraduate and specialized professional courses."
      },
      {
        "document": "Financial Proof",
        "details": "Bank statements or proof of funds for tuition and living costs."
      },
      {
        "document": "Entrance Exam Proof",
        "details": "GMAT/GRE/SAT scores for specific programs if applicable."
      }
    ],
    "conclusion": "University College Dublin stands as a premier institution for students seeking high-quality education and global exposure. With its strong emphasis on research innovation and holistic development, UCD provides a world-class environment for academic growth. For Indian students, UCD offers excellent support services, scholarship opportunities, and a vibrant multicultural community. Choosing UCD through iExplain Education ensures that students receive expert guidance and end-to-end assistance, making the transition to studying in Ireland smooth and successful. A degree from UCD opens doors to global career prospects and prepares students to become leaders in their fields.",
    "faqs": [
      {
        "question": "Why should Indian students choose University College Dublin for studying abroad?",
        "answer": "University College Dublin is a top-ranking university known for world-class academic programs and modern infrastructure. Indian students benefit from international support, vibrant campus life, and strong global recognition of degrees."
      },
      {
        "question": "What programs are offered for international students at UCD?",
        "answer": "UCD offers a wide range of programs including Bachelor’s, Master’s, and doctoral degrees in fields like Medicine, Engineering, Business, Law, Arts, and Computer Science."
      },
      {
        "question": "Does UCD provide scholarships for Indian and international students?",
        "answer": "Yes, UCD offers various merit-based scholarships such as the Global Excellence Scholarship, which can cover 50% or 100% of tuition fees."
      },
      {
        "question": "How is campus life at University College Dublin?",
        "answer": "Campus life is vibrant with numerous student clubs, sports activities, and cultural events. UCD provides modern facilities including residences, libraries, and recreational centers."
      },
      {
        "question": "What support services are available for international students?",
        "answer": "UCD offers guidance for orientation, academic counseling, visa assistance, and accommodation to ensure a smooth transition for students from India and other countries."
      },
      {
        "question": "What are the eligibility criteria for Indian students at UCD?",
        "answer": "Criteria include strong academic records (10+2 or Bachelor's), minimum English proficiency scores (IELTS 6.5), and meeting subject-specific prerequisites."
      },
      {
        "question": "Is MBBS or Medicine offered at University College Dublin?",
        "answer": "Yes, UCD offers highly recognized medical programs. The graduates are eligible for registration with global medical councils, including India’s Medical Council."
      },
      {
        "question": "How can I apply for admission at University College Dublin?",
        "answer": "Indian students can apply through UCD’s online portal or authorized consultants like iExplain Education, submitting transcripts, English scores, and an SOP."
      },
      {
        "question": "What career opportunities are available after graduating from UCD?",
        "answer": "Graduates have excellent global prospects due to UCD's strong industry connections, internships, and high employability rankings."
      },
      {
        "question": "Is UCD safe for international students?",
        "answer": "Yes, UCD is located in a safe environment with modern security systems and student support services ensuring the well-being of the multicultural campus community."
      }
    ]
  },
  "dublin-city-university": {
    "title": "Dublin City University",
    "coursetype": "Study Abroad",
    "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/DCU_Main.webp",
    "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/DCU_Mobile.webp",
    "intro": {
      "text": "Dublin City University (DCU) is a prestigious and fast-growing public university located in Dublin, Ireland, widely recognized for its academic excellence, innovative teaching methods, and strong industry partnerships. Established in 1975 as the National Institute for Higher Education and officially granted university status in 1989, DCU has transformed into a globally respected institution that attracts students from all over the world seeking quality education in Ireland.\n\nThe university is particularly well-known for its career-oriented approach to education, making it a top destination for students planning to study abroad in Ireland. DCU focuses on equipping students with practical skills, real-world experience, and industry exposure through internships, research projects, and collaborations with leading multinational companies. This emphasis on employability has consistently placed DCU among the top universities in Ireland for graduate employment rates.\n\nDublin City University offers a diverse range of undergraduate and postgraduate programs across multiple disciplines, including business, engineering, computer science, data analytics, humanities, social sciences, and health sciences. Its courses are designed to meet global academic standards while aligning with current industry demands, ensuring students receive a future-ready education. The university is especially recognized for its strengths in technology, innovation, entrepreneurship, and research excellence.\n\nBeing located in Dublin, one of Europe’s leading tech and business hubs, gives DCU students a significant advantage. Dublin is home to the European headquarters of many global companies like Google, Facebook, and Microsoft, offering excellent opportunities for internships, networking, and employment. This strategic location further strengthens DCU’s reputation as a preferred choice for students aiming to build successful careers in Europe."
    },
    "quickOverview": {
      "University Name": "Dublin City University (DCU)",
      "Location": "Dublin, Ireland",
      "Established": "1975 (University status in 1989)",
      "Type": "Public University",
      "Popular For": "Academic excellence, innovation, industry connections",
      "Medium of Instruction": "English",
      "International Students": "Students from 100+ countries",
      "Research Focus": "AI, Biotechnology, Sustainability, Digital Innovation"
    },
    "benefits": {
      "intro": "Choosing the right university is crucial for building a successful global career, and Dublin City University (DCU) stands out as one of the best options for students planning to study abroad in Ireland. Here are the key reasons:",
      "headers": [
        "Heading",
        "Details"
      ],
      "table": [
        {
          "Heading": "Career-Focused Education System",
          "Details": "DCU is widely known for programs that combine academic learning with practical experience, designed in collaboration with industry experts to provide job-ready skills."
        },
        {
          "Heading": "Prime Location in Dublin",
          "Details": "Located in a leading tech and business hub, DCU offers access to top global companies like Google, Microsoft, and Meta for internships and networking."
        },
        {
          "Heading": "High Graduate Employability Rate",
          "Details": "The university consistently ranks high for employability, ensuring students are well-prepared for global job markets after graduation."
        },
        {
          "Heading": "Strong Focus on Research & Innovation",
          "Details": "DCU is a leader in Irish innovation, with dedicated centers in AI, biotechnology, and sustainability offering cutting-edge research opportunities."
        },
        {
          "Heading": "Modern Campus & Facilities",
          "Details": "The university features state-of-the-art infrastructure, including advanced laboratories, smart classrooms, digital libraries, and sports facilities."
        },
        {
          "Heading": "Multicultural Environment",
          "Details": "With students from over 100 countries, DCU provides a diverse and inclusive atmosphere ideal for developing global perspectives."
        },
        {
          "Heading": "Wide Range of Courses",
          "Details": "Programs are available across business, engineering, computer science, data analytics, humanities, and health sciences for diverse academic backgrounds."
        },
        {
          "Heading": "Excellent Support for International Students",
          "Details": "DCU provides comprehensive services such as career counseling, academic guidance, visa assistance, and accommodation support."
        }
      ]
    },
    "SyllabusIntro": "Dublin City University is driven by a clear mission to transform lives and societies. Its core values focus on excellence, innovation, and a student-centered approach.",
    "syllabus": {
      "headers": [
        "Core Value",
        "Description"
      ],
      "table": [
        {
          "Core Value": "Excellence",
          "Description": "Striving for high standards in teaching, research, and student development to meet international education norms."
        },
        {
          "Core Value": "Innovation",
          "Description": "Encouraging creative thinking, entrepreneurship, and research-driven solutions to keep students competitive."
        },
        {
          "Core Value": "Student-Centered Approach",
          "Description": "Ensuring personalized learning, career support, and skill development are at the heart of the university mission."
        },
        {
          "Core Value": "Integrity and Ethics",
          "Description": "Promoting honesty, transparency, and ethical behavior in all academic and professional practices."
        },
        {
          "Core Value": "Inclusivity and Diversity",
          "Description": "Fostering a multicultural environment that welcomes students from all backgrounds with mutual respect."
        }
      ]
    },
    "feesIntro": "For the 2026/27 academic year, Dublin City University (DCU) remains a budget-friendly alternative while maintaining high global rankings. Below is the breakdown (Approx. exchange rate 1 EUR = 91 INR).",
    "fees": {
      "undergraduate": {
        "headers": [
          "Faculty / Course Area",
          "Annual Fee (EUR)",
          "Annual Fee (INR Approx.)"
        ],
        "table": [
          {
            "Faculty / Course Area": "Business & Accounting",
            "Annual Fee (EUR)": "€17,000",
            "Annual Fee (INR Approx.)": "₹15.5 Lakhs"
          },
          {
            "Faculty / Course Area": "Engineering (B.Eng)",
            "Annual Fee (EUR)": "€17,900 – €19,400",
            "Annual Fee (INR Approx.)": "₹16.3 L – ₹17.6 Lakhs"
          },
          {
            "Faculty / Course Area": "Computer Science / Data Science",
            "Annual Fee (EUR)": "€17,900",
            "Annual Fee (INR Approx.)": "₹16.3 Lakhs"
          },
          {
            "Faculty / Course Area": "Science & Health (B.Sc)",
            "Annual Fee (EUR)": "€17,000 – €18,500",
            "Annual Fee (INR Approx.)": "₹15.5 L – ₹16.8 Lakhs"
          },
          {
            "Faculty / Course Area": "Humanities & Social Sciences",
            "Annual Fee (EUR)": "€15,000 – €16,500",
            "Annual Fee (INR Approx.)": "₹13.6 L – ₹15.0 Lakhs"
          },
          {
            "Faculty / Course Area": "Education (B.Ed)",
            "Annual Fee (EUR)": "€16,900",
            "Annual Fee (INR Approx.)": "₹15.4 Lakhs"
          }
        ]
      },
      "postgraduate": {
        "headers": [
          "Program Type",
          "Total Fee (EUR)",
          "Total Fee (INR Approx.)"
        ],
        "table": [
          {
            "Program Type": "M.Sc. Computing / AI / Data Analytics",
            "Total Fee (EUR)": "€18,000 – €22,000",
            "Total Fee (INR Approx.)": "₹16.4 L – ₹20.0 Lakhs"
          },
          {
            "Program Type": "M.Sc. Business / Finance / Marketing",
            "Total Fee (EUR)": "€17,000 – €21,000",
            "Total Fee (INR Approx.)": "₹15.5 L – ₹19.1 Lakhs"
          },
          {
            "Program Type": "M.Sc. Electronic & Computer Engineering",
            "Total Fee (EUR)": "€18,000 – €20,000",
            "Total Fee (INR Approx.)": "₹16.4 L – ₹18.2 Lakhs"
          },
          {
            "Program Type": "M.A. Journalism / Communications",
            "Total Fee (EUR)": "€16,000 – €18,000",
            "Total Fee (INR Approx.)": "₹14.5 L – ₹16.4 Lakhs"
          },
          {
            "Program Type": "DCU Executive MBA (Part-time)",
            "Total Fee (EUR)": "€13,500 (per year)",
            "Total Fee (INR Approx.)": "₹12.3 Lakhs"
          }
        ]
      }
    },
    "durationIntro": "Indian students planning to study at Dublin City University must meet specific academic and language requirements for eligibility. Below is a summary of the general criteria.",
    "duration": {
      "headers": [
        "Criteria",
        "Details"
      ],
      "table": [
        {
          "Criteria": "Undergraduate Academic Requirement",
          "Details": "12th grade from a recognized board with 60%–75% or above depending on course."
        },
        {
          "Criteria": "Postgraduate Academic Requirement",
          "Details": "Bachelor’s degree in a relevant field with minimum 60% or above."
        },
        {
          "Criteria": "English Language Requirement",
          "Details": "IELTS 6.0–6.5 overall (no band less than 5.5–6.0) / TOEFL / PTE accepted."
        },
        {
          "Criteria": "Age Requirement",
          "Details": "Minimum 18 years at the time of admission."
        },
        {
          "Criteria": "Visa Requirement",
          "Details": "Valid Ireland student visa, proof of funds, and health insurance."
        }
      ]
    },
    "studentSupport": "Dublin City University (DCU) provides well-structured support services for international students. Pre-arrival and post-arrival assistance includes guidance via handbooks and orientation programs. The Student Advice & Support Centre serves as a one-stop solution for academic and personal queries. Learning support services offer study skills, writing assistance, and subject-specific workshops. DCU also prioritizes mental health through confidential counseling and the 'Care & Connect' initiative. Specialized assistance is available for students with disabilities, while the Global Connect Café and numerous cultural clubs help international students build social networks.",
    "recognition": "Dublin City University, established in 1975, is a prestigious and fast-growing public institution in Ireland. It is internationally recognized for its academic excellence and strong graduate employment rates. The university is a leader in research and innovation, maintaining collaborations with top multinational companies like Google and Microsoft. DCU's degrees carry significant global weight, making its graduates highly sought after in the international job market.",
    "hostelFacilities": "DCU offers on-campus accommodation facilities across its multiple modern campuses. Infrastructure includes state-of-the-art labs, sports complexes, and central student hubs like the 'U Building' for relaxation and collaboration. The university also provides guidance for off-campus housing. Located in Dublin, students enjoy easy access to Europe’s leading tech Hubs, providing a safe and student-friendly environment for study and living.",
    "studentLife": "Student life at DCU is vibrant and memory-rich. Beyond academics, students participate in a wide range of clubs and societies covering sports, arts, and technology. The 'U Building' acts as a social epicenter with lounges and event spaces. DCU features excellent sports and fitness facilities, including a gym and swimming pool. Regular cultural festivals and events organized by the Students’ Union ensure a balanced and engaging university experience in one of Europe’s most lively cities.",
    "whyChooseUsIntro": "Choosing Dublin City University for higher education in Ireland ensures a future filled with global exposure and quality learning. DCU offers strong industry links and placement opportunities that are ideal for achieving long-term career success.",
    "whyChooseUs": [
      "Quality education with a practical learning approach.",
      "Strong placement opportunities and industry connections.",
      "Global exposure with students from over 100 countries.",
      "Merit-based scholarships specifically for Indian students.",
      "Comprehensive support services from admission to graduation.",
      "Modern campus facilities and on-campus accommodation.",
      "Strategic location in one of Europe's top student cities."
    ],
    "documents": [
      {
        "document": "Academic Transcripts",
        "details": "10th and 12th certificates for UG; degree transcripts for PG applications."
      },
      {
        "document": "Passport",
        "details": "Valid international passport copy."
      },
      {
        "document": "SOP (Statement of Purpose)",
        "details": "Detailing academic goals and reasons for choosing DCU."
      },
      {
        "document": "LOR (Letters of Recommendation)",
        "details": "Academic or professional references required for postgraduate programs."
      },
      {
        "document": "CV / Resume",
        "details": "Comprehensive summary of education and experience for PG courses."
      },
      {
        "document": "English Proficiency Score",
        "details": "IELTS, TOEFL, or PTE test results."
      },
      {
        "document": "Health Insurance",
        "details": "Mandatory coverage for the duration of the student visa."
      }
    ],
    "conclusion": "In conclusion, Dublin City University stands out as a top choice for students planning to study abroad in Ireland. With its high-quality education system, career-focused programs, modern campus facilities, and strong industry connections, DCU offers everything that international students need for a successful academic journey. For Indian students, the university provides excellent opportunities through scholarships, international student support, and globally recognized degrees, making it easier to build a strong future. Overall, choosing DCU means investing in a future filled with global exposure and long-term professional growth.",
    "faqs": [
      {
        "question": "Where is Dublin City University located?",
        "answer": "Dublin City University is located in Dublin, the capital city of Ireland, which is a major hub for education, technology, and business."
      },
      {
        "question": "Is Dublin City University good for international students?",
        "answer": "Yes, DCU is highly popular due to its career-focused education, modern campus, global recognition, and strong industry connections."
      },
      {
        "question": "What courses are offered at Dublin City University?",
        "answer": "DCU offers a wide range of undergraduate and postgraduate programs in business, engineering, computer science, data analytics, humanities, and health sciences."
      },
      {
        "question": "What is the eligibility criteria for Indian students at DCU?",
        "answer": "Indian students need 60%–75% in 12th (for UG) or a Bachelor’s degree with 60%+ (for PG), along with English proficiency tests like IELTS (6.0–6.5)."
      },
      {
        "question": "Does Dublin City University offer scholarships for Indian students?",
        "answer": "Yes, DCU provides merit-based scholarships, international scholarships, and Government of Ireland scholarships to reduce tuition fees."
      },
      {
        "question": "What is the medium of instruction at DCU?",
        "answer": "The medium of instruction at Dublin City University is English, so students must meet English language requirements."
      },
      {
        "question": "What are the career opportunities after studying at DCU?",
        "answer": "Graduates have excellent prospects in Ireland and globally thanks to strong industry connections and high employability rates."
      },
      {
        "question": "Is Dublin a good city for students?",
        "answer": "Yes, Dublin is one of the best student cities in Europe, offering a safe environment, vibrant lifestyle, and excellent job opportunities."
      },
      {
        "question": "Does DCU provide accommodation for international students?",
        "answer": "Yes, Dublin City University offers on-campus accommodation along with guidance for off-campus housing options."
      },
      {
        "question": "Why should I choose DCU for studying in Ireland?",
        "answer": "You should choose DCU because of its quality education, practical learning approach, global exposure, scholarships, and strong placement opportunities."
      }
    ]
  },
};
