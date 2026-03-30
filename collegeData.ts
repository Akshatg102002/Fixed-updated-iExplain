import { CollegeDetailData } from "./types";

export const COLLEGE_DETAILS: Record<string, CollegeDetailData> = {
    "kazan-federal-university": {
        title: "Kazan Federal University",
        coursetype: "MBBS",

        heroImage:
            "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Kazan_Federal_ckcnvt.webp",
        heroImageMobile:
            "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Kazan_Federal_2_qsx5nx.webp",

        intro: {
            text: `Kazan Federal University is one of the oldest and most prestigious public research universities in Russia, established in 1804 and located in the culturally rich city of Kazan. With a history of more than 200 years, the university has earned a strong reputation for academic excellence, innovation, and global recognition. It is known for offering high-quality education supported by modern infrastructure, experienced faculty, and advanced research facilities.\n\nThe university has a diverse student community of over 50,000 students, including more than 11,000 international students from over 100 countries. It has become a popular destination for Indian students, especially for MBBS studies, due to its affordable fee structure and globally recognized degree programs. Kazan Federal University offers more than 600 undergraduate, postgraduate, and doctoral programs in fields such as medicine, engineering, information technology, natural sciences, humanities, and social sciences.\n\nKazan Federal University is particularly renowned for its strong academic performance in areas like biomedicine, artificial intelligence, energy research, and chemistry. The university focuses heavily on research and practical learning, helping students gain real-world knowledge and skills. Its modern campus includes well-equipped laboratories, advanced research centers, a vast digital library, and medical training facilities such as hospitals and clinics. Additionally, the university provides safe and comfortable hostel accommodations along with various support services for international students.\n\nOverall, Kazan Federal University offers a perfect combination of quality education, global exposure, and a student-friendly environment, making it an excellent choice for those looking to pursue higher education and build a successful international career.`,
        },

        quickOverview: {
            "University Name": "Kazan Federal University (KFU)",
            "Established Year": "1804",
            "Location": "Kazan, Russia",
            "University Type": "Public Research University",
            "Total Students": "50,000+",
            "International Students": "11,000+ from 100+ countries",
            "Courses Offered": "600+ (UG, PG, PhD)",
            "Medium of Instruction": "English & Russian",
            "Popular Courses": "MBBS, Engineering, IT, Business",
            "Recognition": "WHO, NMC, UNESCO, ECFMG",
            "Campus Facilities": "Modern labs, hospitals, library, hostels",
        },

        benefits: {
            intro: "Choosing Kazan Federal University for MBBS in Russia is a smart decision for Indian and international students due to its strong academic reputation, global recognition, and affordable education. Here are the key reasons why it stands out:",

            items: [
                {
                    heading: "Globally Recognized Degree",
                    details: "The MBBS degree from Kazan Federal University is recognized by major medical bodies such as NMC, WHO, ECFMG, and UNESCO. This allows students to appear for licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK)."
                },
                {
                    heading: "Affordable Fee Structure",
                    details: "Compared to private medical colleges in India, the MBBS program at Kazan Federal University is much more affordable, making it a budget-friendly option without compromising on quality education."
                },
                {
                    heading: "International Exposure",
                    details: "The university hosts students from over 100 countries, providing a multicultural environment that helps students gain global exposure and build international networks."
                },
                {
                    heading: "Advanced Medical Training",
                    details: "Students get hands-on clinical training in well-equipped hospitals and medical centers associated with the university. This practical exposure is essential for developing strong medical skills."
                },
                {
                    heading: "Experienced Faculty",
                    details: "Kazan Federal University has highly qualified and experienced professors who focus on both theoretical knowledge and practical learning, ensuring students receive a well-rounded medical education."
                },
                {
                    heading: "Modern Infrastructure",
                    details: "The university offers state-of-the-art laboratories, digital classrooms, advanced research centers, and a vast library, creating an ideal learning environment for medical students."
                },
                {
                    heading: "Comfortable Hostel Facilities",
                    details: "Safe and well-maintained hostel accommodations are available for international students, with all basic amenities and security."
                },
                {
                    heading: "English Medium Program",
                    details: "MBBS is available in English medium, which is a major advantage for Indian students as it removes the language barrier."
                },
                {
                    heading: "High Career Opportunities",
                    details: "Graduates from Kazan Federal University have excellent career prospects worldwide. After completing MBBS, students can pursue higher studies or practice medicine in different countries after clearing the required licensing exams."
                }
            ]
        },

        SyllabusIntro: "The MBBS program follows a 6-year curriculum that combines theoretical knowledge with practical clinical training. The syllabus is designed according to international medical education standards and gradually shifts from basic sciences to advanced clinical subjects.",

        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Embryology, Medical Chemistry, Biophysics, Latin Language",
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Biochemistry, Physiology, Microbiology, Pathology, Genetics, Pharmacology",
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathophysiology, Pharmacology, General Medicine, Immunology, Radiology, Clinical Training",
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Internal Medicine, Pediatrics, Psychiatry, Dermatology, Ophthalmology",
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Obstetrics & Gynecology, ENT, Neurology, Cardiology, Oncology, Emergency Medicine",
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship, Clinical Rotations, Practical Training, Research Work",
                },
            ]
        },


        fees: {
            structure: [
                { year: "1st Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
                { year: "2nd Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
                { year: "3rd Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
                { year: "4th Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
                { year: "5th Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
                { year: "6th Year", tuition: "594,000 RUB", hostel: "16,000 RUB", total: "610,000 RUB" },
            ],
        },

        duration: {
            headers: ["Component", "Duration", "Details"],
            table: [
                {
                    "Component": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Complete program duration"
                },
                {
                    "Component": "Academic Duration",
                    "Duration": "5 Years",
                    "Details": "Classroom + Practical Learning"
                },
                {
                    "Component": "Internship",
                    "Duration": "1 Year",
                    "Details": "Clinical Training in Hospitals"
                },
                {
                    "Component": "Medium of Instruction",
                    "Duration": "-",
                    "Details": "English"
                },
                {
                    "Component": "Clinical Exposure Start",
                    "Duration": "-",
                    "Details": "From 3rd Year"
                },
                {
                    "Component": "Degree Awarded",
                    "Duration": "-",
                    "Details": "MD (Equivalent to MBBS in India)"
                }
            ]
        },

        studentSupport: `Kazan Federal University provides comprehensive student support services to ensure that international students have a smooth and comfortable academic journey. From the moment students arrive in Russia, the university offers assistance such as airport pickup and help with initial settlement. It has a dedicated international student office that guides students with admission procedures, visa processing, and adapting to a new environment. The university also provides safe and well-equipped hostel accommodations with essential facilities like Wi-Fi, security, kitchen, and laundry services, ensuring a comfortable stay.\n\nIn terms of academics, students receive continuous guidance from experienced faculty members and mentors who support them in studies, research, and career planning. To help students adjust to daily life in Russia, the university also offers Russian language classes. Additionally, Kazan Federal University takes care of students' health and well-being by providing access to on-campus medical facilities and counseling services for mental health support.\n\nThe university encourages a balanced lifestyle by offering various cultural activities, student clubs, and social events that help international students integrate and build global connections. Sports facilities such as gyms, playgrounds, and swimming pools are also available for physical fitness. Overall, Kazan Federal University ensures a supportive, safe, and student-friendly environment, helping students focus on their education while enjoying a fulfilling campus life.`,

        recognition: `Kazan Federal University is a globally recognized university with multiple international affiliations, accreditations, and remarkable achievements in education and research. It is officially accredited by the Ministry of Science and Higher Education of the Russian Federation, ensuring high academic standards and government recognition. The university is also recognized by major global medical bodies such as the World Health Organization (WHO), National Medical Commission (NMC), ECFMG (USA), and FAIMER, which allows graduates to pursue medical careers worldwide after clearing licensing exams.\n\nIn terms of international affiliations, the university is associated with reputed organizations like the International Association of Universities (IAU), Association of Asian Universities (AAU), European University Association (EUA), and Association of MBAs (AMBA). These affiliations strengthen its global academic network and provide opportunities for student exchange programs, research collaborations, and dual degree options.\n\nKazan Federal University has also achieved significant recognition in global rankings and research contributions. It has been featured in the QS World University Rankings, achieving a position among the top universities worldwide, and has received a 5-star QS rating, highlighting its excellence in teaching, employability, and internationalization. The university is also part of prestigious Russian government initiatives like Project 5-100 and Priority 2030, aimed at improving global competitiveness and research output.`,

        hostelFacilities: `Kazan Federal University provides comfortable, safe, and affordable accommodation facilities for both local and international students. Most international students, including those pursuing MBBS, are accommodated in the university's well-developed hostel system, mainly located in the famous Universiade Village, which is one of the largest student residential complexes in Russia.\n\nThe Universiade Village is often described as a "city within a city," offering modern living conditions with fully furnished rooms available on a sharing basis (2–4 students per room). Rooms are equipped with essential furniture such as beds, study tables, chairs, wardrobes, and storage space. Many rooms have attached kitchens and bathrooms, while some facilities are shared among a few students.\n\nThe hostel is designed to provide a complete student lifestyle, including amenities like supermarkets, cafeterias, post offices, sports grounds, gyms, laundry rooms, and even medical clinics within walking distance. This ensures that students have everything they need within the campus itself.\n\nSafety is a top priority at Kazan Federal University hostels, with 24/7 security, CCTV surveillance, and controlled entry systems in place. Separate accommodation or floors are provided for male and female students, ensuring privacy and security.\n\nIn addition to the Universiade Village, the university also offers traditional dormitories located near the city center. These are more economical options where facilities like kitchens, bathrooms, and common areas are shared among students.\n\nStudents also have the option to rent private apartments in Kazan if they prefer independent living, especially from the second year onwards.`,

        studentLife: `Student life at Kazan Federal University is vibrant, diverse, and well-balanced, offering a perfect mix of academics, cultural exposure, and extracurricular activities. With students from over 100 countries, the university provides a multicultural environment where international students, especially from India, feel welcomed and comfortable. The campus atmosphere is lively and inclusive, helping students build global friendships and networks.\n\nApart from academics, the university encourages students to participate in various cultural events, festivals, and student clubs. There are numerous activities such as music, dance, drama, and international cultural programs that allow students to showcase their talents and celebrate diversity. Indian festivals like Diwali and Holi are also celebrated, making Indian students feel at home even while studying abroad.\n\nKazan Federal University also offers excellent sports and fitness facilities, including gyms, playgrounds, and indoor sports complexes. Students can participate in activities like football, basketball, swimming, and more, helping them maintain a healthy and active lifestyle. The famous Universiade Village provides a modern living experience with all necessary amenities such as cafeterias, supermarkets, and recreational areas within the campus.`,

        whyChooseUsIntro:
            "Choosing the right consultancy is very important for a smooth MBBS admission process, and iExplain Education stands out as a reliable and student-focused platform. Here are the key reasons why students prefer it:",

        whyChooseUs: [
            "Expert Guidance & Experience: iExplain Education has a team of experienced counselors who provide complete guidance on MBBS abroad, including university selection, eligibility, and admission process. Their expertise helps students make the right career decisions.",
            "Personalized Counseling: The consultancy offers one-on-one counseling sessions, both offline (Noida office) and online, ensuring that every student gets customized advice based on their goals and budget.",
            "Wide Range of University Options: They provide admission support for multiple countries like Russia, Georgia, China, and more, helping students choose the best university such as Kazan Federal University based on their preferences.",
            "End-to-End Admission Support: From application filling to documentation, university admission, visa processing, and travel arrangements, iExplain Education handles the complete process, making it hassle-free for students and parents.",
            "Additional Support Services: Students also get extra services like exam preparation (IELTS, TOEFL, etc.), accommodation assistance, forex support, and international SIM services for a smooth transition abroad.",
            "High Success Rate: With a strong track record of successful admissions and visa approvals, iExplain Education has helped thousands of students achieve their dream of studying MBBS abroad.",
            "Student-Centric Approach: The consultancy focuses on providing transparent and honest guidance, ensuring that students get the best possible university and career opportunities rather than just promoting random options.",
        ],


        documents: [
            { document: "10th Marksheet", details: "Academic proof (DOB verification)" },
            { document: "12th Marksheet", details: "Must have Physics, Chemistry, Biology" },
            { document: "NEET Scorecard", details: "Mandatory for Indian students" },
            { document: "Valid Passport", details: "Minimum 2 years validity required" },
            { document: "Passport Size Photos", details: "Recent (white background)" },
            { document: "Admission Application Form", details: "Filled and signed" },
            { document: "Medical Fitness Certificate", details: "General health report" },
            { document: "Migration Certificate", details: "From previous board" },
            { document: "Birth Certificate (English)", details: "Required for documentation" },
            { document: "Invitation Letter", details: "Issued by the university" },
        ],

        conclusion: `Pursuing MBBS at Kazan Federal University is an excellent choice for students looking for quality medical education at an affordable cost. With its strong global recognition, modern infrastructure, experienced faculty, and extensive clinical exposure, the university provides a perfect environment for building a successful medical career. The 6-year MBBS program, along with practical training in advanced hospitals, ensures that students gain both theoretical knowledge and real-world experience.\n\nAdditionally, the university offers a safe campus, comfortable hostel facilities, and a multicultural environment that helps international students adapt easily. With proper guidance and complete documentation, the admission process is smooth and hassle-free. Overall, Kazan Federal University stands out as a top destination for MBBS in Russia, especially for Indian students aiming for global career opportunities in the medical field.`,

        faqs: [
            {
                question: "Is Kazan Federal University good for MBBS?",
                answer:
                    "Yes, Kazan Federal University is one of the top universities in Russia, known for its high-quality education, global recognition, and advanced medical training facilities.",
            },
            {
                question: "Is the MBBS degree from Kazan Federal University valid in India?",
                answer:
                    "Yes, the degree is recognized by the National Medical Commission (NMC). However, students must clear the FMGE/NExT exam to practice in India.",
            },
            {
                question: "What is the duration of MBBS at Kazan Federal University?",
                answer:
                    "The MBBS course duration is 6 years, including 5 years of academic study and 1 year of internship/clinical training.",
            },
            {
                question: "What is the medium of instruction for MBBS?",
                answer:
                    "The MBBS program is available in English medium, making it suitable for international students.",
            },
            {
                question: "Is NEET required for admission?",
                answer:
                    "Yes, NEET qualification is mandatory for Indian students to pursue MBBS abroad.",
            },
            {
                question: "What is the total cost of MBBS at Kazan Federal University?",
                answer:
                    "The total cost is approximately ₹30–36 lakhs for the complete 6-year course, including tuition and hostel fees.",
            },
            {
                question: "Does the university provide hostel facilities?",
                answer:
                    "Yes, the university provides safe and well-equipped hostel facilities with all basic amenities for international students.",
            },
            {
                question: "What are the career options after MBBS?",
                answer:
                    "After completing MBBS, students can appear for licensing exams like FMGE/NExT, USMLE, or PLAB, or pursue postgraduate studies in different countries.",
            },
        ],
    },
    "bashkir-state-medical-university": {
        title: "Bashkir State Medical University",
        coursetype: "MBBS",

        heroImage: "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Bashkir_State_bbycah.webp",
        heroImageMobile: "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Bashkir_State_Medical_2_r7sey6.webp",

        intro: {
            text: `Bashkir State Medical University (BSMU), located in Ufa city, Bashkortostan Republic, Russia, is a prestigious medical institution established in 1932 that offers MBBS, Dentistry, Pharmacy, postgraduate, and research programs to international students. The university is recognized by the Russian Ministry of Health and meets the standards of the World Health Organization (WHO) and the National Medical Commission (NMC) of India, making its degree globally valid for medical practice. BSMU boasts modern infrastructure, well-equipped laboratories, digital classrooms, simulation labs, a vast library, and excellent sports and cultural facilities, along with comfortable and hygienic hostels for both male and female students. The university is known for its highly qualified faculty and practical-based teaching methods, providing international students with Russian language training and a supportive environment to ensure a smooth academic and daily life experience.\n\nBSMU emphasizes hands-on clinical training from the early years of the course, giving students exposure to real hospital environments and patient interactions. This practical approach ensures that graduates are well-prepared for medical careers anywhere in the world. The university also encourages research and innovation, providing students access to modern laboratories and international medical journals, fostering a culture of scientific inquiry and discovery. Additionally, the multicultural environment at BSMU helps students develop communication and collaboration skills, as they interact with peers from different countries and backgrounds, preparing them for a global medical career.\n\nGraduates of Bashkir State Medical University can pursue medical practice in India after passing the NMC screening or explore career opportunities in Europe, the USA, the Middle East, and Russia, with strong options for research and academic careers. With affordable tuition 
            , low living costs, ample clinical exposure, and an internationally recognized degree, BSMU is an ideal choice for students seeking quality medical education and global career opportunities in Russia.`,
        },

        quickOverview: {
            "University Name": "Bashkir State Medical University (BSMU)",
            "Established": "1932",
            "Location": "Ufa city, Bashkortostan Republic, Russia",
            "Recognition & Accreditation": "Recognized by Russian Ministry of Health, WHO, and NMC (India)",
            "Courses Offered": "MBBS (General Medicine), Dentistry, Pharmacy, Postgraduate (MD/MS), PhD, Residency Programs",
            "Course Duration": "MBBS – 6 years, Dentistry – 5 years, Pharmacy – 5 years",
            "Medium of Instruction": "English / Russian",
            "Campus Facilities": "Modern classrooms, digital labs, simulation labs, research centers, library, sports & cultural facilities",
            "Hostel & Accommodation": "Hygienic and safe hostels for male & female students with mess facilities",
            "Faculty": "Highly qualified and experienced medical professionals",
            "Practical Training": "Early clinical exposure in hospitals, hands-on patient interaction",
            "International Student Life": "Multicultural environment, support services for academics and daily life",
            "Career Opportunities": "Practice in India after NMC screening, opportunities in Europe, USA, Middle East, Russia; research & academic careers",
        },

        benefits: {
            intro: "Choosing Bashkir State Medical University (BSMU) for MBBS in Russia is a smart choice for Indian and international students due to its strong academic reputation, global recognition, and affordable education. Here are the key reasons why it stands out:",

            items: [
                {
                    heading: "Globally Recognized Degree",
                    details: "The MBBS degree from BSMU is recognized by major medical bodies including NMC (India), WHO, ECFMG, and UNESCO, allowing students to appear for licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK).",
                },
                {
                    heading: "Affordable Fee Structure",
                    details: "Compared to private medical colleges in India, the MBBS program at BSMU offers quality education at an affordable cost, making it a budget-friendly option without compromising on learning.",
                },
                {
                    heading: "International Exposure",
                    details: "The university hosts students from over 80 countries, providing a multicultural environment that helps students gain global exposure and build international networks.",
                },
                {
                    heading: "Advanced Medical Training",
                    details: "Students receive hands-on clinical training in well-equipped hospitals and medical centers associated with BSMU, giving them practical experience from the early years of the course.",
                },
                {
                    heading: "Experienced Faculty",
                    details: "BSMU has highly qualified and experienced professors who focus on both theoretical knowledge and practical learning to prepare students for a successful medical career.",
                },
                {
                    heading: "Modern Infrastructure",
                    details: "The university provides state-of-the-art labs, simulation centers, digital classrooms, and a comprehensive medical library for effective learning and research.",
                },
                {
                    heading: "Safe & Comfortable Accommodation",
                    details: "International students enjoy well-maintained hostels with mess facilities, ensuring a secure and comfortable living environment.",
                },
                {
                    heading: "Career Opportunities",
                    details: "Graduates can practice in India after NMC screening or pursue medical careers in Europe, USA, Middle East, and Russia, including opportunities in hospitals, research, and academic fields.",
                },
                {
                    heading: "Holistic Student Development",
                    details: "BSMU encourages sports, cultural activities, and extracurricular programs, supporting overall personal and professional growth.",
                },
            ],
        },

        SyllabusIntro: "Bashkir State Medical University (BSMU) offers a comprehensive MBBS program spanning six years, designed to provide both theoretical knowledge and practical clinical skills. The syllabus is structured to gradually move students from basic medical sciences in the initial years to advanced clinical training and hands-on patient care in the later years. International students receive guidance in Russian language and practical exposure from the early years, ensuring a smooth transition into hospital settings. The final year includes intensive clinical rotations and internship training to prepare graduates for medical practice globally.",

        syllabus: {
            headers: ["Year / Semester", "Main Subjects / Components", "Focus / Highlights"],
            table: [
                {
                    "Year / Semester": "1st Year (1st & 2nd Semester)",
                    "Main Subjects / Components": "Anatomy, Histology, Medical Biology, Bioorganic Chemistry, Latin Language, Russian Language",
                    "Focus / Highlights": "Basic medical sciences, human anatomy, foundation language skills"
                },
                {
                    "Year / Semester": "2nd Year (3rd & 4th Semester)",
                    "Main Subjects / Components": "Histology, Biochemistry, Physiology, Cell Biology, Microbiology, General Pathology, Psychology & Pedagogy",
                    "Focus / Highlights": "Core pre-clinical subjects, understanding physiology, biochemistry, and pathology basics"
                },
                {
                    "Year / Semester": "3rd Year (5th & 6th Semester)",
                    "Main Subjects / Components": "Pathology, Pharmacology, Microbiology & Immunology, Pathophysiology, Medical Genetics, Principles of Clinical Medicine",
                    "Focus / Highlights": "Introduction to diseases, drug mechanisms, and clinical foundations"
                },
                {
                    "Year / Semester": "4th Year (7th & 8th Semester)",
                    "Main Subjects / Components": "General Surgery, Internal Medicine, Obstetrics & Gynecology, Pediatrics, Neurology",
                    "Focus / Highlights": "Advanced clinical subjects, initial patient interactions, clinical rotations begin"
                },
                {
                    "Year / Semester": "5th Year (9th & 10th Semester)",
                    "Main Subjects / Components": "Oncology, ENT (Ear, Nose & Throat), Emergency Medicine, Cardiology, Psychiatry",
                    "Focus / Highlights": "Specialized clinical subjects, hands-on hospital experience"
                },
                {
                    "Year / Semester": "6th Year (11th & 12th Semester)",
                    "Main Subjects / Components": "Ophthalmology, Community Medicine, Primary Care Medicine, Clinical Rotations",
                    "Focus / Highlights": "Final clinical training, comprehensive patient care"
                },
                {
                    "Year / Semester": "Internship",
                    "Main Subjects / Components": "Mandatory rotations in Surgery, Medicine, Pediatrics, Gynecology & others",
                    "Focus / Highlights": "Full hands-on practical training under supervision"
                }
            ]
        },
        feesIntro: "Bashkir State Medical University (BSMU), Russia, offers one of the most affordable MBBS programs for international students, especially for Indian students. The fee structure is transparent with no donation or hidden charges, and students can pay fees on a yearly basis. The total cost is comparatively lower than private medical colleges in India while maintaining high-quality education and global recognition.",

        fees: {
            structure: [
                { year: "1st Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
                { year: "2nd Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
                { year: "3rd Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
                { year: "4th Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
                { year: "5th Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
                { year: "6th Year", tuition: "3,99,120 RUB", hostel: "25,000 RUB", total: "4,24,120 RUB" },
            ],
        },

        durationIntro: "The MBBS program follows a standard Russian medical education pattern with a total duration of 6 years, including theoretical and practical training.",

        duration: {
            headers: ["Study Phase", "Duration", "Details"],
            table: [
                {
                    "Study Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Basic medical sciences like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Study Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Subjects like Pathology, Microbiology, Pharmacology"
                },
                {
                    "Study Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Practical training in hospitals with subjects like Medicine, Surgery"
                },
                {
                    "Study Phase": "Internship / Practical",
                    "Duration": "1 Year",
                    "Details": "Hands-on clinical practice under supervision"
                },
                {
                    "Study Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Includes complete academic + clinical training"
                }
            ]
        },

        studentSupport: `Bashkir State Medical University provides excellent student support services to ensure a comfortable and hassle-free experience for international students. The university offers strong academic support through experienced faculty, mentorship programs, and regular guidance to help students perform well in their studies. Special attention is given to Indian students with facilities like Indian food, dedicated hostels, and active student communities that make them feel at home.\n\nThe university also assists students with visa processing, registration, and extension, making all legal formalities smooth and stress-free. For health and well-being, students have access to medical facilities, regular health check-ups, and psychological support if needed. Safety is a top priority, with 24/7 security, CCTV surveillance, and hostel wardens ensuring a secure living environment.\n\nIn addition, Bashkir State Medical University provides FMGE/NEXT coaching support for Indian students, helping them prepare for licensing exams. The university also offers Russian language classes to improve communication during clinical training. Cultural activities, festivals, and extracurricular events are regularly organized to maintain a vibrant campus life. Moreover, students receive on-arrival support such as airport pickup, accommodation assistance, and basic necessities setup, ensuring a smooth transition to life in Russia.\n\nOverall, the student support system at Bashkir State Medical University is comprehensive, student-friendly, and designed to help students succeed both academically and personally.`,

        recognition: `Bashkir State Medical University is a globally recognized government medical university in Russia, known for its high academic standards and international collaborations. The university is officially affiliated with the Ministry of Science & Higher Education and the Ministry of Health of the Russian Federation, ensuring that it follows strict educational and medical training standards.\n\nIn terms of global recognition, Bashkir State Medical University is approved by major international medical bodies such as the World Health Organization (WHO) and the National Medical Commission (NMC) of India, making it a preferred choice for Indian students. It is also recognized by organizations like the Educational Commission for Foreign Medical Graduates (ECFMG) and is listed in the World Directory of Medical Schools (WDOMS), which allows graduates to apply for global licensing exams such as FMGE/NExT, USMLE, and PLAB.\n\nThe university has also achieved a strong global reputation through its collaborations with international institutions and medical organizations. With partnerships in countries like Germany, the USA, China, and other European nations, students get opportunities for international exposure, research programs, and internships. Additionally, Bashkir State Medical University has produced thousands of medical professionals working worldwide and continues to maintain high standards in medical education and clinical training.\n\nOverall, the university's wide range of affiliations, global recognitions, and academic achievements make it a reliable and prestigious option for pursuing MBBS abroad.`,

        hostelFacilities: `Bashkir State Medical University provides comfortable and well-maintained hostel facilities for both local and international students. The university has multiple hostels (around 4–5 buildings) with a capacity to accommodate thousands of students, ensuring that most international students get on-campus or nearby accommodation.\n\nThe hostel rooms are fully furnished and typically shared by 2–3 students, equipped with essential amenities such as beds, study tables, chairs, wardrobes, and heating systems. Most rooms also have attached or common washrooms, and each floor includes a common kitchen where students can cook their own meals.\n\nFor Indian students, the university offers additional comfort through Indian mess facilities with vegetarian and non-vegetarian food options, along with separate hostels or floors for boys and girls. This helps create a familiar and safe environment for students living abroad.\n\nSafety is a major priority, with 24/7 security, CCTV surveillance, wardens, and even fire alarm systems installed in hostel buildings. The hostels are located close to the university campus, making it convenient for students to attend classes, while public transport, markets, and banks are also easily accessible nearby.`,

        studentLife: `Student life at Bashkir State Medical University is vibrant, diverse, and well-balanced, offering students a perfect mix of academics and extracurricular activities. The university has a multicultural environment with students from different countries, especially a large number of Indian students, which helps create a friendly and inclusive atmosphere. This diversity allows students to build global connections and experience different cultures while studying medicine.\n\nApart from academics, students actively participate in various cultural events, festivals, and university programs. Indian festivals like Diwali, Holi, and Eid are celebrated with great enthusiasm, making students feel at home even while studying abroad. The university regularly organizes sports competitions, talent shows, seminars, and workshops, encouraging students to stay active and engaged beyond the classroom.\n\nThe campus is equipped with modern facilities such as libraries, sports complexes, gyms, and recreational areas, where students can relax and socialize. There are also student clubs and organizations that focus on hobbies, leadership, and professional development. These activities help students develop confidence, communication skills, and teamwork abilities.`,

        whyChooseUsIntro:
            "Choosing the right consultancy is very important for MBBS abroad, as many students face issues due to lack of proper guidance or fake promises. A reliable consultancy like iExplain Education ensures a safe, transparent, and smooth admission process.",

        whyChooseUs: [
            "Expert Counseling & Guidance: iExplain Education offers personalized counseling to help students select the best MBBS university based on their academic performance, budget, and future goals. This ensures clarity and confidence in decision-making.",
            "University Selection Support: The consultancy assists students in choosing top NMC-approved universities like Bashkir State Medical University, ensuring globally recognized degrees and quality education.",
            "Complete Admission Assistance: From application submission to receiving the admission letter, iExplain Education handles the entire process smoothly, saving time and reducing stress for students.",
            "Documentation Guidance: Students get proper support in preparing and verifying all necessary documents, minimizing the chances of errors or rejection during admission.",
            "Visa Processing Support: The team provides expert guidance for visa applications, ensuring accurate documentation and a high success rate in visa approvals.",
            "Transparent & Honest Process: iExplain Education maintains complete transparency in fees and procedures, ensuring there are no hidden charges or misleading information.",
            "Affordable MBBS Options: They guide students towards cost-effective MBBS programs abroad without compromising on the quality of education and facilities.",
            "Pre-Departure & Travel Support: Students receive proper guidance regarding travel arrangements, packing, and adapting to a new country, along with assistance in flight bookings.",
            "Post-Arrival Assistance: After reaching Russia, students are supported with airport pickup, hostel accommodation, and local guidance to settle comfortably.",
            "Indian Student Support: Special arrangements are made for Indian students, including Indian food, accommodation assistance, and a supportive student community.",
        ],

        documents: [
            { document: "10th Marksheet", details: "For verification of date of birth and basic education" },
            { document: "12th Marksheet", details: "Must have Physics, Chemistry, Biology with qualifying marks" },
            { document: "NEET Scorecard", details: "Mandatory for Indian students as per NMC guidelines" },
            { document: "Valid Passport", details: "Minimum 18 months validity required" },
            { document: "Admission Letter", details: "Issued by Bashkir State Medical University after application approval" },
            { document: "Birth Certificate", details: "Required in English or translated copy" },
            { document: "Medical Fitness Certificate", details: "Proof that the student is medically fit" },
            { document: "Visa Invitation Letter", details: "Issued by the university for visa processing" },
            { document: "Student Visa", details: "Required to travel and study in Russia" },
            { document: "HIV Test Report", details: "Mandatory medical requirement" },
        ],

        conclusion: `Choosing Bashkir State Medical University for MBBS is a smart decision for students looking for affordable, high-quality medical education abroad. With its global recognition, experienced faculty, modern infrastructure, and strong clinical exposure, the university provides an excellent platform for building a successful medical career.\n\nThe university not only offers a well-structured MBBS program but also ensures a comfortable student life with good hostel facilities, safety, and support services. Its recognition by major medical bodies makes it a reliable option for Indian students who wish to practice medicine globally.\n\nWith the right guidance from a trusted consultancy, students can experience a smooth admission process and a secure journey toward becoming a doctor. Overall, Bashkir State Medical University stands out as a value-for-money and career-oriented choice for pursuing MBBS abroad.`,

        faqs: [
            {
                question: "What is the total duration of MBBS at Bashkir State Medical University?",
                answer:
                    "The MBBS program at Bashkir State Medical University has a total duration of 6 years, which includes 5 years of theoretical and practical academic study followed by 1 year of compulsory internship. During the course, students gain in-depth medical knowledge along with clinical exposure in hospitals, preparing them for real-world medical practice.",
            },
            {
                question: "Is NEET mandatory for admission to this university?",
                answer:
                    "Yes, NEET qualification is compulsory for all Indian students who wish to pursue MBBS abroad. As per the guidelines of the National Medical Commission (NMC), students must qualify NEET to be eligible for admission and also to practice medicine in India after completing their degree.",
            },
            {
                question: "What is the medium of teaching at the university?",
                answer:
                    "The MBBS course is primarily taught in English medium for international students. However, the university also provides Russian language classes because students need basic Russian language skills during clinical training when interacting with local patients.",
            },
            {
                question: "Is Bashkir State Medical University recognized internationally?",
                answer:
                    "Yes, the university is globally recognized and approved by major medical bodies such as NMC (India), WHO, ECFMG, and is also listed in the World Directory of Medical Schools (WDOMS). This allows students to appear for international licensing exams like FMGE/NEXT, USMLE, and PLAB.",
            },
            {
                question: "Are hostel and accommodation facilities available for students?",
                answer:
                    "Yes, the university provides well-maintained hostel facilities for international students. Rooms are generally shared by 2–3 students and come with basic amenities like beds, study tables, heating, and internet access. The hostels are safe, secure, and located close to the university campus.",
            },
            {
                question: "Is Indian food available for students?",
                answer:
                    "Yes, Indian students can easily access Indian food through mess facilities or nearby restaurants. Both vegetarian and non-vegetarian options are available, helping students adapt comfortably to life in Russia.",
            },
            {
                question: "Is it safe for Indian students to study here?",
                answer:
                    "Yes, Bashkir State Medical University is considered safe for international students. The campus and hostels have 24/7 security, CCTV surveillance, and wardens. Additionally, the presence of a large Indian student community makes it easier for new students to adjust.",
            },
            {
                question: "Can students practice in India after completing MBBS?",
                answer:
                    "Yes, after completing MBBS from Bashkir State Medical University, students can return to India and practice medicine. However, they must first clear the FMGE (Foreign Medical Graduate Examination) or the upcoming NEXT exam, as per NMC regulations.",
            },
        ],
    },
    "orenburg-state-medical-university": {
        "title": "Orenburg State Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514515/Orenburg_State_Medical_snd8eu.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Orenburg_State_Medical_2_q5w0ph.webp",

        "intro": {
            "text": "Orenburg State Medical University (OrSMU) is one of the leading government medical universities in Russia, established in 1944 and located in the city of Orenburg. Over the years, the university has built a strong reputation for providing high-quality medical education and producing skilled healthcare professionals who are working across the world.\n\nThe university is recognized by major global medical bodies such as WHO, NMC (India), ECFMG, and is listed in the World Directory of Medical Schools, making it a preferred choice for international students, especially from India. It follows international standards of medical education and offers an English-medium MBBS program with a duration of 6 years, including practical training.\n\nOrenburg State Medical University is known for its strong academic structure, with over 40+ departments, experienced faculty, and modern laboratories that provide both theoretical knowledge and hands-on clinical exposure. The university is affiliated with more than 18 clinical hospitals, allowing students to gain real-time medical experience during their studies.\n\nWith affordable tuition fees, advanced infrastructure, and a safe environment for international students, Orenburg State Medical University has become a popular destination for students looking to pursue MBBS abroad. Its focus on practical training, research, and global exposure makes it an excellent choice for building a successful medical career."
        },
        "quickOverview": {
            "University Name": "Orenburg State Medical University (OrSMU)",
            "Location": "Orenburg",
            "Established Year": "1944",
            "University Type": "Government Medical University",
            "Course Offered": "MBBS (General Medicine)",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "NMC (India), WHO, ECFMG, WDOMS",
            "Eligibility Criteria": "50% in PCB (40% for reserved) + NEET Qualified",
            "Entrance Exam": "No separate entrance exam (NEET required for Indians)",
            "Hostel Facilities": "Available with basic amenities",
            "Indian Students": "High number of Indian students"
        },
        "benefits": {
            "intro": "Orenburg State Medical University is a popular choice among international students due to its globally recognized MBBS degree, which is approved by major medical bodies such as NMC, WHO, ECFMG, and listed in WDOMS. This recognition allows students to appear for international licensing exams like FMGE/NEXT, USMLE, and PLAB, opening doors to medical careers across the world. The university offers a 6-year MBBS program in English medium, making it convenient for international students while also providing Russian language training for better clinical communication.",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "Orenburg State Medical University is recognized by top medical bodies like NMC, WHO, ECFMG, and WDOMS. This allows students to appear for global licensing exams such as FMGE/NEXT, USMLE, and PLAB, providing excellent career opportunities worldwide."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "The university offers MBBS at a much lower cost compared to private medical colleges in India. It is an ideal option for students who want quality education at an affordable price."
                },
                {
                    "heading": "English Medium Education",
                    "details": "The MBBS course is taught in English, making it easier for international students to understand subjects. Additionally, basic Russian is taught for clinical interaction."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students gain hands-on clinical experience through training in affiliated hospitals, which helps them develop practical medical skills."
                },
                {
                    "heading": "Experienced Faculty",
                    "details": "The university has experienced and skilled faculty members who focus on both theoretical knowledge and practical training."
                },
                {
                    "heading": "International Student Environment",
                    "details": "With students from various countries, especially India, the university provides a diverse and friendly environment that enhances global exposure."
                },
                {
                    "heading": "Comfortable Hostel Facilities",
                    "details": "The university offers well-maintained hostels with essential amenities, security, and Indian food options for a comfortable stay."
                },
                {
                    "heading": "FMGE/NEXT Preparation Support",
                    "details": "Students receive guidance and support for exams like FMGE/NEXT, helping them pursue medical careers in India."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Orenburg is a safe city with proper security arrangements, ensuring a secure environment for international students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Orenburg State Medical University is designed to provide a strong foundation in medical sciences along with extensive clinical training. The course is structured over a period of 6 years, where students gradually move from basic medical subjects to advanced clinical practice. In the initial years, the focus is on pre-clinical subjects, followed by para-clinical studies, and finally clinical subjects with hands-on hospital training. This systematic approach helps students develop both theoretical knowledge and practical medical skills required for a successful career.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Biochemistry, Physiology, Medical Biology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Microbiology, Pathology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Microbiology, Pathophysiology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Medicine, General Surgery, Obstetrics & Gynecology, Pediatrics"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Neurology, Psychiatry, Orthopedics, ENT, Ophthalmology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship, Clinical Practice, Internal Medicine, Surgery, Emergency Care"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Orenburg State Medical University is considered affordable for international students, especially when compared to private medical colleges in India. The tuition fee remains almost the same throughout the course, and in many cases, hostel charges are included or minimal.",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" },
                { "year": "2nd Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" },
                { "year": "3rd Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" },
                { "year": "4th Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" },
                { "year": "5th Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" },
                { "year": "6th Year", "tuition": "6,000 USD", "hostel": "₹50,000 – ₹60,000", "total": "₹5.0 – ₹5.2 Lakhs (Approx. Tuition)" }
            ]
        },
        "durationIntro": "The MBBS program at Orenburg State Medical University is designed according to international medical education standards and has a total duration of 6 years. The course includes both theoretical learning and practical clinical training to ensure students gain complete medical knowledge and hands-on experience.",
        "duration": {
            "headers": ["Study Phase", "Duration", "Details"],
            "table": [
                {
                    "Study Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Basic subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Study Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Subjects like Pathology, Microbiology, Pharmacology"
                },
                {
                    "Study Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Clinical subjects with hospital exposure (Medicine, Surgery, etc.)"
                },
                {
                    "Study Phase": "Internship / Practical",
                    "Duration": "1 Year",
                    "Details": "Hands-on training in hospitals under supervision"
                },
                {
                    "Study Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Includes academic + clinical training"
                }
            ]
        },
        "studentSupport": "Orenburg State Medical University provides a comprehensive and student-friendly support system to help international students adjust smoothly to academic and personal life in Russia. The university has dedicated support staff who assist students with academic guidance, administrative issues, and personal concerns throughout their MBBS journey. Orientation programs and workshops are organized to help new students understand the education system and adapt to a new environment easily.\n\nThe university also offers strong health and medical support, including an on-campus medical center and tie-ups with nearby hospitals to handle emergencies and provide regular health check-ups. In addition, students receive language support through Russian language classes, which helps them communicate effectively with patients during clinical training.\n\nFor accommodation and daily life, the university provides hostel support, Indian food facilities, and cultural integration programs. There are Indian student associations and communities that help new students feel at home by celebrating festivals and providing peer support. The university also ensures safety and security with CCTV surveillance, secure hostels, and a student-friendly environment.\n\nAdditionally, Orenburg State Medical University focuses on overall student development by offering career counseling, FMGE/NEXT guidance, and participation in student clubs, cultural activities, and sports events. These activities not only enhance academic growth but also improve communication skills, confidence, and global exposure.",
        "recognition": "Orenburg State Medical University is a well-established government medical institution in Russia, operating under the Ministry of Health of the Russian Federation, which ensures that the university follows strict national standards in medical education and training.\n\nAffiliations : \nThe university is affiliated with several prestigious international and regional educational organizations. It is associated with bodies like the International Association of Universities (IAU) and the European University Association (EUA), which reflect its active participation in global academic collaboration. Additionally, the university maintains strong ties with leading clinical hospitals, providing students with excellent practical exposure and hands-on training.\n\nRecognition\nOrenburg State Medical University is globally recognized by major medical councils and organizations, making its MBBS degree valid worldwide. It is approved by:\nNational Medical Commission (NMC), India\nWorld Health Organization (WHO)\nEducational Commission for Foreign Medical Graduates (ECFMG), USA\nFoundation for Advancement of International Medical Education and Research (FAIMER)\nGeneral Medical Council (GMC), UK\nMedical Council of Canada (MCC)\nThese recognitions allow graduates to appear for international licensing exams such as FMGE/NEXT, USMLE, PLAB, and others.\n\nAchievements\nOrenburg State Medical University has achieved a strong global reputation due to its academic excellence and contribution to medical education. The university has 47+ departments and collaborations with more than 18 clinical hospitals, ensuring high-quality practical training. It has produced thousands of qualified doctors who are successfully working in countries like India, the USA, UK, and Canada.\n\nThe university is also known for its research-oriented approach, international collaborations, and participation in global medical conferences. Its continuous focus on innovation, modern infrastructure, and quality education has helped it maintain a respected position among top medical universities in Russia.",
        "hostelFacilities": "Orenburg State Medical University provides comfortable, safe, and affordable hostel facilities for international students. The university has 3 student hostels, which are equipped with all basic amenities and designed to provide a convenient living environment. However, due to limited capacity, hostel allotment may be subject to availability, and some students may choose private accommodation nearby.\n\nThe hostel rooms are fully furnished and usually shared by 2–3 students, including facilities such as beds, study tables, chairs, wardrobes, and heating systems. Students also get access to common kitchens, laundry areas, and bathrooms, allowing them to manage their daily routine comfortably.\n\nFor safety, all hostels are under 24/7 CCTV surveillance and security, ensuring a secure environment for international students. The hostels are generally located close to the university campus, making it easy for students to attend classes and clinical training without long travel.\n\nThe university also provides additional facilities such as Wi-Fi, reading halls, gymnasium, playgrounds, and recreational areas, which help students maintain a balanced academic and social life. Indian students can benefit from Indian mess facilities or nearby restaurants, along with dedicated hostel sections that make them feel more at home.\n\nMoreover, the cost of accommodation is affordable, and students who prefer more independence can easily rent private apartments in the city at reasonable prices. Overall, the hostel and accommodation facilities at Orenburg State Medical University are student-friendly, secure, and suitable for a comfortable stay during the MBBS program.",
        "studentLife": "Student life at Orenburg State Medical University is vibrant, engaging, and well-balanced, offering students a mix of academics, cultural exposure, and extracurricular activities. The university has a multicultural environment with students from over 50 countries, including a large number of Indian students, which helps create a friendly and inclusive atmosphere.\n\nApart from studies, students actively participate in cultural events, festivals, and student organizations, which promote interaction and global exposure. The university celebrates various international and Indian festivals, making students feel at home even while studying abroad. Cultural clubs, academic societies, and international student unions are active on campus, helping students develop social and leadership skills.\n\nThe university also focuses on physical well-being by offering sports facilities and activities such as football, basketball, volleyball, athletics, and indoor games. There is a dedicated sports club with multiple sports leagues that encourage students to maintain a healthy lifestyle and participate in competitions.\n\nStudents enjoy access to modern campus facilities like libraries, laboratories, gyms, Wi-Fi, and recreational areas, which support both academic and personal growth. The university also uses advanced learning tools and practical training methods to enhance the overall learning experience.\n\nAccommodation and daily life are comfortable, with well-equipped hostels, Indian mess facilities, and affordable living costs. The university ensures a safe and secure environment with proper security measures and student support services. Additionally, students receive guidance through language classes, career counseling, and psychological support when needed.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for MBBS abroad, as many students face issues due to lack of proper guidance or fake promises. A reliable consultancy like iExplain Education ensures a safe, transparent, and smooth admission process.",
        "whyChooseUs": [
            "Personalized Counseling & Career Guidance: iExplain Education focuses on providing tailored guidance to each student based on their academic background, budget, and career goals. Their expert counselors help students make informed decisions and choose the most suitable university for MBBS abroad.",
            "University Selection Assistance: The consultancy helps students select top NMC-approved universities like Orenburg State Medical University. With access to multiple countries and universities, students get a wide range of options instead of being limited to one choice.",
            "End-to-End Admission Support: iExplain Education provides complete support from application filling to admission confirmation, ensuring a rough and hassle-free process. They guide students at every step to avoid mistakes or delays.",
            "Documentation & Visa Assistance: Students receive full assistance with documentation, visa processing, and approvals, increasing the chances of successful admission and visa acceptance without complications.",
            "Pre-Departure & Travel Support: The consultancy helps students with travel planning, accommodation guidance, and essential arrangements like SIM cards and forex, making the transition to a new country easier.",
            "Post-Arrival Assistance: iExplain Education continues support even after students reach abroad by helping with airport pickup, hostel setup, and local assistance, ensuring a comfortable start to student life.",
            "Transparent & Student-Focused Approach: The organization emphasizes honest guidance and transparency, prioritizing student success over financial gain, which builds trust among students and parents.",
            "Wide Range of Study Destinations: Students can explore MBBS opportunities in countries like Russia, Georgia, China, Bangladesh, and more, giving flexibility to choose the best option according to their needs."
        ],
        "documents": [
            { "document": "10th Marksheet", "details": "Required for date of birth and academic verification" },
            { "document": "12th Marksheet", "details": "Must include Physics, Chemistry, Biology with required marks" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students as per NMC guidelines" },
            { "document": "Valid Passport", "details": "Minimum 18 months validity required" },
            { "document": "Admission Letter", "details": "Issued by the university after application approval" },
            { "document": "Birth Certificate", "details": "Required in English or translated copy" },
            { "document": "Medical Fitness Certificate", "details": "Proof of physical fitness" },
            { "document": "HIV Test Report", "details": "Mandatory for visa and admission" },
            { "document": "Visa Invitation Letter", "details": "Issued by the university for visa process" },
            { "document": "Student Visa", "details": "Required to enter and study in Russia" }
        ],
        "conclusion": "Choosing Orenburg State Medical University for MBBS is an excellent decision for students seeking quality medical education at an affordable cost. With its strong academic foundation, experienced faculty, modern infrastructure, and extensive clinical exposure, the university provides all the essential elements required to build a successful medical career.\n\nThe university’s global recognition by major medical bodies ensures that students have the opportunity to pursue careers not only in India but also internationally. Along with academics, students benefit from a safe environment, comfortable accommodation, and a multicultural campus, which enhances their overall learning experience.",
        "faqs": [
            {
                "question": "What is the total duration of MBBS at Orenburg State Medical University?",
                "answer": "The MBBS program has a total duration of 6 years, which includes 5 years of academic study and 1 year of compulsory internship. During this period, students gain both theoretical knowledge and practical clinical experience in affiliated hospitals."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per the guidelines of the National Medical Commission (NMC). Without qualifying NEET, students are not eligible for admission or for practicing in India after completing MBBS."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS course is taught in English medium for international students. However, the university also provides Russian language training, which is essential for interacting with patients during clinical practice."
            },
            {
                "question": "What is the total fee for MBBS?",
                "answer": "The total cost of MBBS at Orenburg State Medical University is approximately ₹28–32 lakhs for the complete 6-year course, including tuition fees and basic living expenses, making it an affordable option compared to private medical colleges in India."
            },
            {
                "question": "Is the university recognized globally?",
                "answer": "Yes, the university is recognized by major medical bodies such as NMC (India), WHO, ECFMG, FAIMER, and is listed in the World Directory of Medical Schools (WDOMS). This allows students to appear for global licensing exams like FMGE/NEXT, USMLE, and PLAB."
            },
            {
                "question": "Are hostel facilities available for international students?",
                "answer": "Yes, the university provides well-equipped hostel facilities with basic amenities like furnished rooms, heating, internet access, kitchens, and laundry services. Hostels are safe and located near the campus."
            },
            {
                "question": "Is Indian food available for students?",
                "answer": "Yes, Indian students can access Indian mess facilities or nearby Indian restaurants, where both vegetarian and non-vegetarian food options are available, making it easier to adjust to life abroad."
            },
            {
                "question": "Is Orenburg safe for Indian students?",
                "answer": "Yes, Orenburg is considered a safe and student-friendly city. The university provides 24/7 security, CCTV surveillance, and support services to ensure the safety of international students."
            }
        ]
    },
    "immanuel-kant-baltic-federal-university": {
        "title": "Immanuel Kant Baltic Federal University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859709/Immanuel_Kant_Baltic_Federal_University_enqxap.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859709/Immanuel_Kant_Baltic_Federal_University_2_lladte.jpg",
        "intro": {
            "text": "Immanuel Kant Baltic Federal University (IKBFU) is one of the leading federal universities in Russia, known for its strong academic foundation, modern research facilities, and international collaboration. Established in 1947 and later restructured as a federal university in 2010, IKBFU is located in Kaliningrad, the westernmost region of Russia, which acts as a bridge between Europe and Russia.\n\nThe university has a rich academic heritage linked to the historic University of Königsberg (Albertina), where the famous philosopher Immanuel Kant studied and taught. Today, IKBFU continues to uphold these traditions while integrating modern educational practices and innovative research methods.\n\nIKBFU offers more than 300 educational programs across various disciplines, including medicine, engineering, natural sciences, humanities, and management. It is recognized as a major educational, scientific, and cultural center in the region, with thousands of students from over 50 countries studying at the university.\n\nFor students planning MBBS in abroad, especially in Russia, IKBFU has become a popular choice due to its globally aligned curriculum, affordable fee structure, and emphasis on practical and clinical training. The university is equipped with modern laboratories, research centers, and affiliated hospitals, ensuring students gain both theoretical knowledge and hands-on medical experience."
        },
        "quickOverview": {
            "Details": "Immanuel Kant Baltic Federal University",
            "Location": "Kaliningrad, Russia",
            "Established": "1947 (Federal University status in 2010)",
            "University Type": "Public (Federal University)",
            "Medium of Instruction": "English & Russian",
            "Popular Course": "MBBS (MD equivalent)",
            "Recognition": "World Health Organization, National Medical Commission (NMC)",
            "Eligibility Criteria": "50% in PCB (Physics, Chemistry, Biology) in 12th",
            "NEET Requirement": "Mandatory for Indian students",
            "Mandatory for Indian students": "Eligible for FMGE/NExT, USMLE, PLAB",
            "Clinical Training": "Provided in affiliated hospitals"
        },
        "benefits": {
            "intro": "Choosing Immanuel Kant Baltic Federal University (IKBFU) for MBBS is a smart decision for students planning MBBS in abroad, especially in Russia, due to its quality education, affordability, and global recognition. Here are the key reasons:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The university is recognized by international medical bodies such as the World Health Organization and the National Medical Commission (NMC), allowing graduates to appear for FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "MBBS at IKBFU is cost-effective compared to private medical colleges in India, making it an excellent option for students seeking budget-friendly MBBS in abroad."
                },
                {
                    "heading": "English-Medium Program",
                    "details": "The MBBS course is available in English, making it convenient for international students without any language barrier."
                },
                {
                    "heading": "Modern Infrastructure & Advanced Facilities",
                    "details": "The university offers well-equipped laboratories, simulation centers, research facilities, and modern classrooms that enhance practical learning."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students gain hands-on experience through training in affiliated hospitals in Kaliningrad, which helps in developing real-world medical skills."
                },
                {
                    "heading": "European Location Advantage",
                    "details": "Located in Kaliningrad, a region close to Europe, students get exposure to international standards of education and lifestyle."
                },
                {
                    "heading": "Multicultural Environment",
                    "details": "The university hosts students from more than 50 countries, providing a diverse and global learning environment."
                },
                {
                    "heading": "No Donation & Easy Admission Process",
                    "details": "Admission is straightforward with no donation or capitation fees, making it accessible for many students."
                },
                {
                    "heading": "Comfortable Hostel & Indian Food",
                    "details": "The university provides safe hostel facilities and availability of Indian food, ensuring a comfortable stay for Indian students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Immanuel Kant Baltic Federal University follows a 6-year curriculum structured into Pre-Clinical, Para-Clinical, and Clinical phases, ensuring a strong foundation in medical sciences along with advanced clinical training. The syllabus is aligned with global standards and prepares students for international medical licensing exams.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Biology, Histology, Chemistry, Physics, Medical Terminology (Latin), Russian Language, Medical Informatics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Anatomy, Biochemistry, Physiology, Microbiology, Immunology, Medical Genetics, Hygiene"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pathophysiology, Pharmacology, Clinical Diagnostics, General Surgery, Internal Medicine (Intro)"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Obstetrics & Gynecology, Pediatrics, Neurology, Dermatology, Psychiatry, Surgery, Emergency Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Oncology, Infectious Diseases, Traumatology, Orthopedics"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Rotations, Anesthesiology, Emergency Care, Endocrinology, Rehabilitation, Practical Training"
                }
            ]
        },
        "feesIntro": "The MBBS program at Immanuel Kant Baltic Federal University is known for its affordable and transparent fee structure, making it a popular choice for students planning MBBS in abroad, especially in Russia.",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" },
                { "year": "2nd Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" },
                { "year": "3rd Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" },
                { "year": "4th Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" },
                { "year": "5th Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" },
                { "year": "6th Year", "tuition": "300,000 – 315,000 RUB", "hostel": "15,000 – 50,000 RUB", "total": "₹3.2 – ₹3.8 Lakhs" }
            ]
        },
        "durationIntro": "The MBBS program at Immanuel Kant Baltic Federal University is known for its high standard of medical education and has a total duration of 6 years, following the standard Russian medical curriculum.",
        "duration": {
            "headers": ["Study Phase", "Duration", "Details"],
            "table": [
                {
                    "Study Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Focus on basic subjects like Anatomy, Biology, Chemistry"
                },
                {
                    "Study Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Subjects like Pathology, Pharmacology, Microbiology"
                },
                {
                    "Study Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Advanced subjects like Medicine, Surgery, Pediatrics"
                },
                {
                    "Study Phase": "Internship / Practical",
                    "Duration": "1 Year",
                    "Details": "Hands-on clinical rotations and hospital training"
                },
                {
                    "Study Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Complete academic + practical medical training"
                }
            ]
        },
        "studentSupport": "Immanuel Kant Baltic Federal University offers a comprehensive and well-organized student support system designed to help both local and international students adapt easily and succeed academically, making it a strong option for those pursuing MBBS in abroad. The university provides dedicated international student support through its specialized departments, including assistance with admission, visa processing, migration registration, and legal guidance, ensuring a smooth transition to life in Kaliningrad.\n\nOne of the key highlights is the Buddy Program, where senior students help newcomers with airport pickup, accommodation, documentation, and settling into the university environment, making students feel comfortable from the very beginning. Additionally, orientation programs are conducted to help students understand university life, campus facilities, and local culture.\n\nThe university also offers strong academic support through modern digital systems, student portals, libraries, and access to Wi-Fi-enabled campuses, allowing students to manage their studies efficiently. Students are provided with medical insurance and access to healthcare services, ensuring their safety and well-being during their stay.\n\nAccommodation support is another important aspect, with university hostels and assistance in finding housing, along with guidance on daily life such as transportation, local services, and essential facilities. The university also encourages participation in extracurricular activities, including sports, cultural events, volunteering, and student organizations, helping students build a balanced and engaging campus life.\n\nMoreover, IKBFU provides opportunities for international exposure through exchange programs like Erasmus+ and collaborations with global universities, enhancing students’ academic and professional growth.",
        "recognition": "Immanuel Kant Baltic Federal University is one of the prestigious federal universities in Russia, widely recognized for its academic excellence, global affiliations, and strong reputation in medical education, making it a preferred choice for students pursuing MBBS in abroad. The university is officially recognized by leading international organizations such as the World Health Organization and the National Medical Commission (NMC), ensuring that its MBBS degree is globally accepted and allows graduates to appear for licensing exams like FMGE/NExT, USMLE, and PLAB. It is also listed in the World Directory of Medical Schools (WDOMS) and recognized by international bodies like FAIMER and ECFMG, which further strengthens its global credibility and opens pathways for higher education and medical practice worldwide.\n\nIn terms of affiliation, the university operates under the Ministry of Science and Higher Education of the Russian Federation and is counted among the top 10 federal universities in Russia, reflecting its strong academic governance and national importance. It also maintains collaborations with numerous international universities and institutions across Europe, Asia, and other regions, with over 170 cooperation agreements supporting student exchange programs, joint research, and global academic exposure.\n\nTalking about achievements, Immanuel Kant Baltic Federal University has consistently ranked among recognized global universities, including positions in QS World University Rankings and other international ranking systems, highlighting its growing academic reputation. The university is known for its strong research output in fields like biomedicine, neurotechnology, and applied sciences, along with modern infrastructure such as advanced laboratories and research centers. It also carries the rich academic legacy of the historic University of Königsberg (Albertina), further enhancing its prestige and intellectual heritage.",
        "hostelFacilities": "Immanuel Kant Baltic Federal University provides well-developed and affordable hostel and accommodation facilities for both local and international students, making it a comfortable choice for those pursuing MBBS in abroad. The university has multiple dormitories located across Kaliningrad, ensuring easy access to academic buildings and campus facilities.\n\nThe university offers different types of accommodation, including shared rooms (2–3 students), upgraded hostel rooms, and limited private rooms based on availability. These hostels are fully furnished with basic amenities such as beds, study tables, chairs, wardrobes, and internet connectivity, ensuring a comfortable living environment for students.\n\nStudents are usually accommodated on a sharing basis, and separate arrangements are available for boys and girls. The hostels are equipped with modern facilities like Wi-Fi, central heating, air-conditioning (in some buildings), laundry services, common kitchens, and hygienic dining/mess facilities, allowing students to cook their own food if they prefer.\n\nThe university maintains a safe and secure environment with 24/7 security systems, CCTV surveillance, and controlled entry, which is especially important for international students. Additionally, many dormitories include common areas such as TV rooms, study spaces, sports facilities, and recreational zones to support a balanced student life.\n\nIn terms of cost, hostel accommodation is highly affordable, typically ranging from 1,500 to 8,000 RUB per month, depending on the type of room and facilities, making it budget-friendly compared to private housing options.",
        "studentLife": "Student life at Immanuel Kant Baltic Federal University (IKBFU) is dynamic, diverse, and enriching, offering students an ideal balance between academics and personal growth, especially for those pursuing MBBS in abroad. Located in Kaliningrad, a unique region of Russia with strong European influence, the university provides a modern and culturally rich environment that enhances the overall student experience.\n\nThe campus life is vibrant, with access to modern infrastructure such as digital libraries, research centers, sports complexes, and student activity zones that support both academic and extracurricular development. The university hosts students from over 50 countries, creating a multicultural environment where students can interact, build global networks, and gain international exposure—an important advantage for those studying MBBS in abroad.\n\nStudents at IKBFU actively participate in various cultural events, festivals, and international programs. Celebrations of global and Indian festivals like Diwali and Holi are common, helping Indian students feel at home while studying in a foreign country. In addition, the university encourages involvement in sports activities such as football, basketball, volleyball, and fitness programs, along with clubs for music, arts, and social activities.\n\nThe university also focuses on student well-being by providing access to healthcare services, counseling support, and student organizations that help in personal and professional development. Accommodation facilities, safe surroundings, and affordable living costs further enhance the student experience. Moreover, IKBFU offers opportunities for research, internships, and international exchange programs like Erasmus+, which help students gain practical exposure and global career opportunities.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for a smooth MBBS admission process, and iExplain Education stands out as a reliable and student-focused platform. Here are the key reasons why students prefer it:",
        "whyChooseUs": [
            "Expert Guidance & Counseling: iExplain Education provides professional and personalized counseling to students planning MBBS in abroad, helping them choose the right university like Immanuel Kant Baltic Federal University based on their profile, budget, and career goals.",
            "Student-Centric Approach: Unlike many consultancies, iExplain focuses on the student’s needs rather than profit, offering honest advice and accurate information to ensure the best decision for your future.",
            "Complete Admission Assistance: From filling out application forms to document verification and securing admission, the consultancy handles the entire process smoothly, reducing stress for students and parents.",
            "Visa & Documentation Support: iExplain provides full support for visa processing, documentation, and legal formalities, ensuring a hassle-free transition to studying MBBS in Russia.",
            "Pre-Departure & Post-Arrival Support: The support doesn’t end with admission—students receive guidance for travel, accommodation, and settling in Kaliningrad, making the transition smooth and comfortable.",
            "University Selection & Career Planning: iExplain helps students select the best university and also provides long-term career guidance, including preparation for exams like FMGE/NExT, USMLE, and PLAB.",
            "Additional Services: Students also get support for forex, travel arrangements, accommodation, and even coaching for exams like IELTS, GRE, and others if required.",
            "Proven Track Record: With experience across multiple countries like Russia, Georgia, and others, iExplain has successfully guided many students toward achieving their dream of studying MBBS abroad."
        ],
        "documents": [
            { "document": "10th Marksheet", "details": "Required for date of birth verification" },
            { "document": "12th Marksheet", "details": "Must include Physics, Chemistry, and Biology with required marks" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students" },
            { "document": "Valid Passport", "details": "Should have at least 2 years validity" },
            { "document": "Admission Letter", "details": "Issued by the university after acceptance" },
            { "document": "Invitation Letter", "details": "Required for Russian student visa processing" },
            { "document": "Medical Fitness Certificate", "details": "Certified by a registered medical practitioner" },
            { "document": "Migration Certificate", "details": "Issued by the previous board or university" },
            { "document": "HIV Test Report", "details": "Mandatory for international travel" }
        ],
        "conclusion": "Applying for MBBS admission at Immanuel Kant Baltic Federal University becomes a smooth and hassle-free process when students prepare all the required documents carefully and in advance. Each document plays a crucial role, whether it is for academic verification, university approval, or student visa processing. Missing or incorrect documents can lead to unnecessary delays, so it is always recommended to cross-check every detail before submission.\n\nStudents should ensure that all certificates are valid, properly attested, and translated into English (if required). Keeping multiple copies of documents, both in physical and digital format, can be very helpful during different stages of the admission and travel process. Additionally, following the university guidelines and staying updated with the latest admission requirements can further simplify the procedure.\n\nOverall, with proper planning, accurate documentation, and expert guidance, securing admission to Immanuel Kant Baltic Federal University is a straightforward journey. It opens the door to quality medical education, global exposure, and a promising career in the medical field.",
        "faqs": [
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students to apply for MBBS at Immanuel Kant Baltic Federal University."
            },
            {
                "question": "Do I need to submit original documents?",
                "answer": "Initially, scanned copies are required for application. However, original documents must be presented at the time of admission and verification."
            },
            {
                "question": "Is a passport compulsory before applying?",
                "answer": "Yes, a valid passport is essential to process your admission and student visa."
            },
            {
                "question": "Are documents required to be translated into English?",
                "answer": "Yes, if any document is not in English, it must be officially translated and attested."
            },
            {
                "question": "What is the minimum validity required for a passport?",
                "answer": "Your passport should have at least 2 years of validity at the time of application."
            },
            {
                "question": "Is a medical certificate necessary?",
                "answer": "Yes, a medical fitness certificate and HIV test report are mandatory for admission and visa processing."
            },
            {
                "question": "How long does the admission process take?",
                "answer": "The complete admission process, including issuance of the admission and invitation letter, usually takes around 2–4 weeks."
            },
            {
                "question": "Can I apply without a migration certificate?",
                "answer": "You can apply initially, but the migration certificate must be submitted before final enrollment."
            },
            {
                "question": "What happens if any document is missing?",
                "answer": "Your application may be delayed or rejected, so it is important to submit all required documents correctly."
            },
            {
                "question": "Do I need to appear for any entrance exam in Russia?",
                "answer": "No, there is no separate entrance exam conducted by the university. Admission is based on your academic performance and NEET qualification."
            }
        ]
    },
    "first-moscow-state-medical-university": {
        "title": "First Moscow State Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774609687/First_Moscow_State_bynehf.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774609687/First_Moscow_State_2_scrmns.jpg",
        "intro": {
            "text": "First Moscow State Medical University, also known as Sechenov University, is one of the oldest and most prestigious medical universities in Russia, established in 1758. Located in the capital city of Moscow, the university has a rich history of excellence in medical education, research, and healthcare training.\n\nThe university is recognized globally and is approved by major medical bodies such as NMC (India), WHO, ECFMG, and is listed in the World Directory of Medical Schools (WDOMS). It offers a 6-year MBBS program in English medium, designed to meet international medical education standards and provide students with both theoretical knowledge and practical clinical exposure.\n\nFirst Moscow State Medical University is known for its advanced infrastructure, modern laboratories, and highly experienced faculty. The university collaborates with top hospitals and research centers, giving students hands-on clinical training and exposure to modern medical technologies.\n\nWith students from over 70 countries, the university provides a multicultural and globally competitive environment. Its strong academic reputation, high-quality education, and excellent career opportunities make it one of the top choices for MBBS in Russia, especially among international students."
        },
        "quickOverview": {
            "University Name": "First Moscow State Medical University (Sechenov University)",
            "Location": "Moscow",
            "Established Year": "1758",
            "University Type": "Government Medical University",
            "Medium of Instruction": "English & Russian",
            "Course Offered": "MBBS (General Medicine)",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "NMC (India), WHO, ECFMG, WDOMS",
            "Eligibility Criteria": "50% in PCB (40% for reserved) + NEET Qualified",
            "Entrance Exam": "No separate exam (NEET required for Indian students)",
            "Hostel Facilities": "Available with modern amenities",
            "International Students": "Students from 70+ countries"
        },
        "benefits": {
            "intro": "The university is well-known for its modern infrastructure, advanced laboratories, and strong clinical exposure. Students receive hands-on training in top hospitals and research centers in Moscow, which helps them develop practical skills and real-world medical experience. Here are the key reasons:",
            "items": [
                {
                    "heading": "Top-Ranked & Prestigious University",
                    "details": "First Moscow State Medical University, also known as Sechenov University, is one of the oldest and most prestigious medical universities in Russia, with a strong global reputation for excellence in medical education and research."
                },
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The university is recognized by major medical bodies such as NMC (India), WHO, ECFMG, and listed in WDOMS, allowing students to appear for international licensing exams like FMGE/NEXT, USMLE, and PLAB."
                },
                {
                    "heading": "Advanced Clinical Exposure",
                    "details": "Students get hands-on training in top hospitals and research centers in Moscow, providing real-time experience with modern medical technologies and patient care."
                },
                {
                    "heading": "Highly Experienced Faculty",
                    "details": "The university has highly qualified professors, doctors, and researchers who focus on both theoretical knowledge and practical skills."
                },
                {
                    "heading": "Modern Infrastructure & Research Facilities",
                    "details": "Sechenov University is equipped with state-of-the-art laboratories, simulation centers, and advanced medical equipment, enhancing the learning experience."
                },
                {
                    "heading": "English Medium Program",
                    "details": "The MBBS course is available in English medium for international students, with additional Russian language training for clinical practice."
                },
                {
                    "heading": "Multicultural Environment",
                    "details": "With students from over 70 countries, the university offers a diverse and international environment that helps students gain global exposure."
                },
                {
                    "heading": "Study in Moscow (Capital City Advantage)",
                    "details": "Located in Moscow, students get access to better infrastructure, lifestyle, transport, and career opportunities compared to other cities."
                },
                {
                    "heading": "Strong Career Opportunities",
                    "details": "Graduates from First Moscow State Medical University have excellent career prospects worldwide due to the university’s reputation and quality education."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Moscow provides a safe and comfortable environment with proper security and facilities for international students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at First Moscow State Medical University is designed to provide a strong foundation in medical sciences along with advanced clinical training. The course is structured over 6 years, where students begin with basic subjects in the initial years and gradually move towards clinical subjects and hospital training. The curriculum follows international standards and includes theoretical learning, practical sessions, and clinical exposure in affiliated hospitals.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Histology, Medical Terminology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Immunology, Clinical Practice"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pharmacology, Pathophysiology, Forensic Medicine, Genetics, Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, ENT"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Surgery, Orthopedics, Cardiology, Radiology, Anesthesiology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Training, Internship, Emergency Medicine, Neurology, Psychiatry"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at First Moscow State Medical University is higher compared to other Russian universities due to its top ranking, advanced infrastructure, and location in Moscow. However, it offers world-class education and strong clinical exposure, making it a premium choice for MBBS abroad.",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" },
                { "year": "2nd Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" },
                { "year": "3rd Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" },
                { "year": "4th Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" },
                { "year": "5th Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" },
                { "year": "6th Year", "tuition": "9,750 – 12,000 USD", "hostel": "1,000 – 1,400 USD", "total": "11,000 – 13,400 USD" }
            ]
        },
        "durationIntro": "The MBBS program at First Moscow State Medical University is structured according to international medical education standards and has a total duration of 6 years. The course is designed to provide a balance of theoretical knowledge, practical training, and clinical exposure, ensuring students are well-prepared for a global medical career.",
        "duration": {
            "headers": ["Study Phase", "Duration", "Details"],
            "table": [
                {
                    "Study Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Basic subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Study Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Subjects like Pathology, Pharmacology, Microbiology"
                },
                {
                    "Study Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Clinical subjects with hospital training (Medicine, Surgery, etc.)"
                },
                {
                    "Study Phase": "Internship / Practical",
                    "Duration": "1 Year",
                    "Details": "Hands-on clinical practice in hospitals under supervision"
                },
                {
                    "Study Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Includes academic + clinical training"
                }
            ]
        },
        "studentSupport": "First Moscow State Medical University offers a well-developed and student-friendly support system to ensure that international students have a smooth academic and personal experience. The university provides academic guidance and mentorship, where experienced faculty members assist students with studies, research work, and career planning. Students also have access to counselling services and academic advisors who help them overcome challenges and perform better in their medical studies.\n\nThe university places strong emphasis on health and well-being support, offering medical facilities, healthcare services, and access to hospitals for any emergencies. Additionally, students are supported through language assistance programs, especially Russian language training, which helps them communicate effectively during clinical practice and daily life in Russia.\n\nFor accommodation and daily living, the university provides comfortable hostel facilities with furnished rooms, internet access, and essential amenities. There are also cafeterias and food outlets on campus, including options suitable for international students. The campus is equipped with recreational areas, libraries, and sports complexes, helping students maintain a balanced lifestyle.",
        "recognition": "First Moscow State Medical University is a well-established government medical institution in Russia, operating under the Ministry of Health of the Russian Federation, which ensures that the university follows strict national standards in medical education and training.\n\nAffiliations\nFirst Moscow State Medical University is a government institution operating under the Ministry of Health of the Russian Federation, ensuring high standards in medical education and training. The university has strong affiliations with top hospitals, research centers, and international universities, providing students with excellent clinical exposure and global learning opportunities. It also collaborates with institutions in countries like the USA, Germany, Norway, and other European nations for academic exchange and research programs.\n\nRecognition\nThe university is globally recognized and approved by major medical bodies, making its MBBS degree valid worldwide. It is recognized by:\nNational Medical Commission (NMC), India\nWorld Health Organization (WHO)\nEducational Commission for Foreign Medical Graduates (ECFMG), USA\nWorld Directory of Medical Schools (WDOMS)\nMinistry of Health of the Russian Federation\nThese recognitions allow students to appear for international licensing exams such as FMGE/NEXT, USMLE, and PLAB, enabling global career opportunities.\n\nAchievements\nFirst Moscow State Medical University is one of the oldest and top-ranked medical universities in Russia, with a legacy of more than 250 years. It has consistently ranked among the top medical universities in Russia and is part of the prestigious Russian Academic Excellence Project (5-100), aimed at improving global rankings. The university is also known for its strong research output and innovation, with its scientific publications being highly cited worldwide, especially in fields like healthcare and infectious diseases. Over the years, the university has produced thousands of renowned doctors, scientists, and medical pioneers, including founders of major medical disciplines in Russia and globally.",
        "hostelFacilities": "Hostel and accommodation at First Moscow State Medical University are designed to provide a comfortable, secure, and student-friendly living environment for international students, especially those pursuing MBBS. The university offers well-maintained hostels with fully furnished rooms that include essential furniture such as beds, study tables, chairs, wardrobes, and proper lighting, typically on a sharing basis of 2–3 students per room, while limited single-room options are also available for those seeking more privacy. Separate hostel facilities are provided for boys and girls, ensuring a disciplined and safe atmosphere. Students benefit from a wide range of modern amenities, including 24×7 high-speed Wi-Fi, central heating systems to cope with Russia’s cold climate, common kitchens on each floor for self-cooking, and clean shared bathrooms with regular maintenance. Additional facilities like laundry services, ironing areas, study rooms, recreation spaces, and common lounges enhance the overall living experience. The hostels are equipped with strong security measures such as CCTV surveillance, controlled entry systems, and round-the-clock security staff, making them highly reliable for international students and their parents. In terms of food, students can either cook their own meals or access nearby cafeterias and restaurants, with Indian food options available in the surrounding areas. The annual hostel cost generally ranges between $2400 to $3800 depending on the type of room and facilities chosen, making it an affordable option compared to many other international destinations. For students who prefer more independence, private apartments and shared flats near the university are also available, but most first-year students opt for university hostels due to convenience, safety, and easy access to academic buildings.",
        "studentLife": "Student life at First Moscow State Medical University is vibrant, dynamic, and well-balanced, offering students a perfect mix of academic excellence and extracurricular engagement. The university provides a multicultural environment with thousands of international students from over 90 countries, helping students build global exposure and lifelong connections. Along with rigorous medical studies, students gain hands-on clinical experience through training in multiple university hospitals where they interact with real patients, enhancing practical skills from early years. The campus is equipped with advanced facilities such as modern laboratories, virtual simulation centers, libraries, and research institutes, allowing students to actively participate in scientific research, seminars, and international conferences. Apart from academics, the university strongly encourages participation in extracurricular activities, including sports like football, tennis, basketball, and athletics through its sports clubs and large sports complexes, promoting a healthy lifestyle. Cultural life is equally rich, with events, festivals, talent shows, and student clubs where students can engage in music, dance, drama, and art, creating a lively and inclusive campus atmosphere. The presence of student societies, language clubs, and cultural exchange programs further helps students develop communication skills and adapt easily to a new country. Additionally, the university organizes excursions, trips, and social events, allowing students to explore Moscow and experience its historical and cultural richness. Overall, student life here is not just about studying medicine but also about personal growth, global exposure, and creating unforgettable experiences during the MBBS journey.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for a smooth MBBS admission process, and iExplain Education stands out as a reliable and student-focused platform. Here are the key reasons why students prefer it:",
        "whyChooseUs": [
            "Expert Guidance & Counseling – iExplain Education provides personalized career counseling to help students choose the right university and course based on their profile.",
            "Trusted Admission Process – Complete support from application to admission letter, ensuring a smooth and transparent process without confusion.",
            "University Tie-Ups – Strong connections with top universities like First Moscow State Medical University ensure authentic and reliable admissions.",
            "Documentation Assistance – Proper guidance for all required documents including visa processing, attestation, and eligibility compliance.",
            "Affordable & Clear Fee Structure – No hidden charges; students get full clarity on tuition fees, hostel costs, and other expenses.",
            "Visa & Travel Support – Assistance with student visa, flight booking, and pre-departure briefing for a hassle-free journey.",
            "On-Arrival Support – Pickup from airport, hostel arrangement, and local assistance in Russia for a comfortable start.",
            "Indian Food & Hostel Guidance – Help in finding suitable accommodation and Indian food options for better adjustment abroad.",
            "FMGE/NExT Coaching Support – Guidance for Indian licensing exams to help students practice medicine in India after MBBS.",
            "24×7 Student Support – Continuous assistance throughout the course duration for any academic or personal issues.",
            "Proven Track Record – Successfully placed many Indian students in top medical universities abroad."
        ],
        "documents": [
            { "document": "Application Form", "details": "Duly filled application form provided by the university." },
            { "document": "Passport", "details": "Valid passport with minimum 18 months validity." },
            { "document": "10th / Secondary School Certificate", "details": "Proof of completing secondary education." },
            { "document": "12th / Higher Secondary Certificate", "details": "Minimum 50% in Physics, Chemistry, and Biology for eligibility." },
            { "document": "Birth Certificate", "details": "Official birth certificate or equivalent document." },
            { "document": "Medical / Fitness Certificate", "details": "Issued by a registered medical practitioner." },
            { "document": "HIV / Infectious Disease Test Reports", "details": "As per university/visa requirements." },
            { "document": "NEET Score Card", "details": "Mandatory for Indian students as per NMC guidelines." },
            { "document": "Financial / Sponsorship Documents", "details": "Proof of funds for tuition and living expenses." },
            { "document": "Migration Certificate", "details": "Required if transferring from another board or university." }
        ],
        "conclusion": "Choosing First Moscow State Medical University for MBBS offers Indian and international students an excellent blend of quality medical education, modern infrastructure, and practical clinical exposure. With well-equipped hostels, vibrant student life, experienced faculty, and a globally recognized degree, students can pursue their medical career with confidence. Partnering with iExplain Education ensures a smooth admission process, visa assistance, and continuous support, making your journey to study MBBS abroad hassle-free. Overall, First Moscow State Medical University provides a safe, affordable, and academically enriching environment, preparing students for a successful future in medicine both in Russia and internationally.",
        "faqs": [
            {
                "question": "Is First Moscow State Medical University recognized by the Medical Council of India (NMC)?",
                "answer": "Yes, the university is recognized by the NMC (formerly MCI) and WHO, allowing Indian students to practice in India after clearing the FMGE/NExT exam."
            },
            {
                "question": "What is the duration of the MBBS course?",
                "answer": "The MBBS program is 6 years, including 5 years of academic study and 1 year of internship."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The medium of instruction for international students is English, with optional Russian language classes."
            },
            {
                "question": "What is the eligibility criteria for Indian students?",
                "answer": "Students must have 50% in PCB at 12th grade and must qualify NEET."
            },
            {
                "question": "Are hostel facilities available for international students?",
                "answer": "Yes, the university provides safe, furnished hostels with 24×7 security, Wi-Fi, kitchens, and separate hostels for boys and girls."
            },
            {
                "question": "What is the total tuition and hostel fee?",
                "answer": "The tuition fee ranges from $7000–$8000 per year, and hostel fees are approximately $2400–$3800 per year."
            },
            {
                "question": "Can students work part-time while studying?",
                "answer": "International students on a Russian student visa are generally not allowed to work part-time during studies."
            },
            {
                "question": "Are Indian food options available?",
                "answer": "Yes, Indian students can find Indian food in nearby eateries, and some hostels allow self-cooking."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC rules."
            },
            {
                "question": "Does iExplain Education provide admission assistance?",
                "answer": "Yes, iExplain Education offers complete support from admission, documentation, and visa processing to arrival assistance in Russia."
            }
        ]
    },
    "tbilisi-state-medical-university": {
        "title": "Tbilisi State Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774610300/Tbilisi_State_ofsab5.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774610300/Tbilisi_State_2_vzzojo.jpg",
        "intro": {
            "text": "Tbilisi State Medical Unive    rsity (TSMU) is one of the oldest, largest, and most prestigious medical universities in Georgia. Established in 1918, the university has a long-standing history of academic excellence and has made significant contributions to the development of medical education and healthcare in the region. It is located in Tbilisi, the capital city, which provides students with a safe, vibrant, and culturally rich environment.\n\nTSMU is globally recognized for its high standards in medical education and research. The university is recognized by international organizations such as the World Health Organization (WHO) and the National Medical Commission (NMC), making it a preferred choice for Indian and international students who wish to pursue MBBS abroad. Graduates from TSMU are eligible to appear for various licensing examinations such as FMGE/NExT in India, USMLE in the United States, and PLAB in the United Kingdom.\n\nThe university offers a wide range of programs in medicine, dentistry, pharmacy, public health, and healthcare management at undergraduate, postgraduate, and doctoral levels. The MBBS program is taught in English and follows an internationally accepted curriculum that combines strong theoretical knowledge with practical and clinical training. TSMU is affiliated with leading hospitals and clinics, providing students with valuable hands-on experience during their studies.\n\nOne of the major strengths of TSMU is its diverse international student community, with students from over 70 countries. This multicultural environment enhances learning and helps students develop global exposure and communication skills. The university also provides excellent support services for international students, including comfortable hostel facilities, availability of Indian food, and academic guidance.\n\nIn addition, TSMU places a strong emphasis on research and innovation. Students are encouraged to participate in scientific research, international conferences, and academic collaborations. The university has a team of highly qualified and experienced faculty members who are dedicated to providing quality education and professional mentorship."
        },
        "quickOverview": {
            "University Name": "Tbilisi State Medical University",
            "Location": "Tbilisi, Georgia",
            "Established": "1918",
            "University Type": "Public",
            "Medium of Instruction": "English & Georgian",
            "Popular Course": "MBBS (MD equivalent)",
            "Recognition": "World Health Organization, National Medical Commission (NMC), and other global bodies",
            "Eligibility Criteria": "50% in PCB (Physics, Chemistry, Biology) in 12th (40% for reserved categories)",
            "NEET Requirement": "Mandatory for Indian students",
            "Hostel Facility": "Available with modern amenities",
            "International Students": "Students from 70+ countries",
            "Global Recognition": "Graduates eligible for FMGE/NExT, USMLE, PLAB"
        },
        "benefits": {
            "intro": "Choosing Tbilisi State Medical University (TSMU) for MBBS is a smart decision for students who are looking for high-quality medical education at an affordable cost with global recognition. Here are the key reasons why TSMU is a preferred destination for international students:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "TSMU is recognized by prestigious organizations such as the World Health Organization (WHO) and the National Medical Commission (NMC). This allows graduates to appear for licensing exams like FMGE/NExT, USMLE, and PLAB, opening career opportunities worldwide."
                },
                {
                    "heading": "Affordable Tuition Fees",
                    "details": "Compared to private medical colleges in India, TSMU offers MBBS at a much more affordable cost without compromising on the quality of education, making it an ideal option for middle-class students."
                },
                {
                    "heading": "English-Medium Education",
                    "details": "The MBBS program is taught entirely in English, which makes it convenient for Indian and other international students to study without any language barrier."
                },
                {
                    "heading": "High-Quality Education & Modern Infrastructure",
                    "details": "The university follows a European-standard curriculum with advanced laboratories, digital classrooms, and well-equipped hospitals that provide excellent academic and practical exposure."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "TSMU is affiliated with top hospitals in Tbilisi, Georgia, allowing students to gain hands-on clinical training and real-world medical experience during their course."
                },
                {
                    "heading": "No Donation or Entrance Exam",
                    "details": "Admission to TSMU is simple and transparent. There is no requirement for any donation or additional entrance exam (apart from NEET for Indian students)."
                },
                {
                    "heading": "International Student Environment",
                    "details": "With students from over 70 countries, TSMU offers a multicultural environment that enhances global exposure and helps students build international networks."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Tbilisi is known for being safe, welcoming, and affordable for students, making it comfortable for Indian students to live and study."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD) program at Tbilisi State Medical University is a 6-year course divided into three main phases: Pre-Clinical, Para-Clinical, and Clinical training, ensuring a strong foundation along with practical medical exposure.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Histology, Medical Ethics, Genetics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Biochemistry, Microbiology, Immunology, Pathophysiology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Forensic Medicine, Clinical Medicine, Radiology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "ENT, Ophthalmology, Psychiatry, Dermatology, Neurology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Rotations, Emergency Medicine, Surgery Practice, Internship, Practical Training"
                }
            ]
        },
        "feesIntro": "The MBBS program at Tbilisi State Medical University is known for its affordable fee structure compared to many private medical colleges in India and other countries. Below is the detailed and updated fee structure for international students:",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" },
                { "year": "2nd Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" },
                { "year": "3rd Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" },
                { "year": "4th Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" },
                { "year": "5th Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" },
                { "year": "6th Year", "tuition": "$8,000", "hostel": "$2,500 – $3,000", "total": "$10,500 – $11,000", "totalINR": "₹8.5 – ₹9.2 Lakhs" }
            ]
        },
        "durationIntro": "The MBBS (MD equivalent) program at Tbilisi State Medical University has a total duration of 6 years, designed according to international medical education standards.",
        "duration": {
            "headers": ["Particulars", "Details"],
            "table": [
                { "Particulars": "Total Course Duration", "Details": "6 Years" },
                { "Particulars": "Degree Awarded", "Details": "MD (Equivalent to MBBS in India)" },
                { "Particulars": "Medium of Instruction", "Details": "English" },
                { "Particulars": "Pre-Clinical Phase", "Details": "1st – 2nd Year (Basic medical sciences like Anatomy, Physiology, Biochemistry)" },
                { "Particulars": "Para-Clinical Phase", "Details": "3rd Year (Subjects like Pathology, Pharmacology, Microbiology)" },
                { "Particulars": "Clinical Phase", "Details": "4th – 6th Year (Medicine, Surgery, Pediatrics, etc.)" },
                { "Particulars": "Internship / Practical Training", "Details": "Included in the final year" },
                { "Particulars": "Clinical Exposure", "Details": "Starts from early years with full practical training in later years" }
            ]
        },
        "studentSupport": "Tbilisi State Medical University offers a comprehensive and well-structured student support system designed to ensure a smooth, comfortable, and successful academic journey for both local and international students. The university provides strong academic support through highly qualified and experienced faculty members who guide students at every stage of their studies, along with access to modern laboratories, advanced simulation centers, and well-equipped digital libraries that enhance learning and practical understanding. Students benefit from a personalized approach to education, including small group teaching, doubt-clearing sessions, and continuous academic mentoring.\n\nIn terms of accommodation, TSMU provides well-maintained hostel facilities equipped with essential amenities such as heating, internet, security, and 24/7 basic services, ensuring a safe and comfortable living environment. The availability of Indian and international food options makes it easier for students, especially those from India, to adapt to life in Tbilisi. Additionally, the university assists students in finding private accommodation if they prefer to live off-campus.\n\nThe university also offers dedicated international student support services, helping students with admission processes, visa documentation, registration, and settling into a new country like Georgia. With a diverse student base from over 70 countries, TSMU creates a multicultural environment that promotes inclusivity, global exposure, and cross-cultural communication skills.\n\nBeyond academics, TSMU focuses on overall student development by encouraging participation in cultural events, sports activities, student clubs, and international programs, helping students maintain a healthy balance between studies and personal life. The university also provides career-oriented support through internships, clinical training, workshops, seminars, and guidance for international licensing exams such as FMGE/NExT, USMLE, and PLAB.\n\nMoreover, students receive early clinical exposure through affiliated hospitals, where they gain hands-on experience under the supervision of experienced medical professionals, working with real patients and modern medical equipment. Safety is another key priority, with Tbilisi being known as a safe and student-friendly city, making it ideal for international education.",
        "recognition": "Tbilisi State Medical University is one of the most reputed medical universities in Georgia and holds strong global recognition, making it a top choice for students planning to pursue MBBS in Georgia. The university is officially recognized by leading international medical organizations such as the World Health Organization and the National Medical Commission (NMC), which ensures that its medical degree is valid for practicing medicine in India and many other countries after clearing the required licensing exams.\n\nIn terms of affiliation, TSMU is connected with several top government and private hospitals in Tbilisi, providing students with excellent clinical training and real-time medical exposure. The university is also listed in the World Directory of Medical Schools (WDOMS), which further enhances its global credibility and allows graduates to appear for international exams like USMLE (USA) and PLAB (UK). Additionally, TSMU maintains academic collaborations and partnerships with various universities and research institutions across Europe and other regions, promoting student exchange programs and advanced research opportunities.\n\nTalking about achievements, Tbilisi State Medical University has a legacy of more than 100 years in medical education and has produced thousands of successful doctors, researchers, and healthcare professionals working worldwide. The university is well-known for its modern teaching methods, experienced faculty, and strong focus on research and innovation. It has consistently maintained high educational standards and continues to be a preferred destination for international students.\n\nFor students considering MBBS in Georgia, TSMU stands out due to its global recognition, strong affiliations, and proven track record of academic excellence. Its internationally accepted degree, advanced clinical training, and research-oriented approach make it an ideal choice for building a successful medical career abroad.",
        "hostelFacilities": "Hostel and accommodation at Tbilisi State Medical University are designed to provide a comfortable, secure, and student-friendly living environment for international students. The university provides well-maintained hostel facilities equipped with essential amenities such as heating, internet, security, and 24/7 basic services, ensuring a safe and comfortable living environment. The availability of Indian and international food options makes it easier for students, especially those from India, to adapt to life in Tbilisi. Additionally, the university assists students in finding private accommodation if they prefer to live off-campus.",
        "studentLife": "Student life at Tbilisi State Medical University is vibrant, diverse, and highly enriching, making it an ideal destination for students planning to pursue MBBS in abroad. Located in Tbilisi, the university offers a safe, modern, and culturally rich environment where students from more than 70 countries come together, creating a truly international atmosphere. This multicultural exposure is especially beneficial for students choosing MBBS in abroad, as it helps them develop global perspectives, communication skills, and adaptability.\n\nThe university promotes a balanced lifestyle by encouraging students to participate in various extracurricular activities such as cultural events, sports, student clubs, and international festivals. These activities not only provide relaxation from academic pressure but also contribute to personality development, leadership skills, and teamwork—important qualities for a successful medical career.\n\nCampus life is comfortable and student-friendly, with access to modern infrastructure including libraries, advanced laboratories, sports facilities, and recreational spaces. Students also enjoy the availability of Indian food along with local and international cuisines, which makes living in Georgia easier for Indian students pursuing MBBS in abroad.\n\nIn addition to academic learning, students regularly participate in medical seminars, workshops, and international conferences that enhance their practical knowledge and professional skills. The university also provides early clinical exposure through affiliated hospitals, allowing students to gain real-life experience and build confidence in patient care. Moreover, Tbilisi is known for being safe, affordable, and welcoming, which adds to the overall positive experience of studying MBBS in abroad. The friendly environment ensures that students feel at home while focusing on their studies and personal growth.",
        "whyChooseUsIntro": "Choosing the right consultancy is crucial when planning to pursue MBBS in abroad or MBBS in Georgia, and iExplain Education stands out as a trusted partner for students aiming to secure admission at Tbilisi State Medical University. With years of experience in overseas education, iExplain Education provides end-to-end guidance, ensuring a smooth and hassle-free admission process.",
        "whyChooseUs": [
            "Expert Guidance & Personalized Counseling: iExplain Education offers one-on-one counseling sessions to help students choose the best options for MBBS in abroad and specifically MBBS in Georgia, based on their academic profile, budget, and career goals.",
            "Transparent Admission Process: The consultancy follows a clear and ethical admission process with no hidden charges or false commitments, ensuring students get genuine admission at Tbilisi State Medical University.",
            "Complete Documentation Support: From application form filling to document verification, visa processing, and university admission letter, iExplain Education handles everything efficiently, making the journey for MBBS in abroad stress-free.",
            "Visa Assistance & Pre-Departure Support: Students receive complete support for visa approval along with pre-departure briefings, helping them understand life in Georgia and preparing them for their MBBS journey.",
            "Affordable & Budget Planning Guidance: iExplain Education helps students plan their finances smartly for MBBS in Georgia, including tuition fees, hostel, and living expenses, ensuring affordability.",
            "Travel & Accommodation Assistance: The consultancy assists in flight bookings and provides guidance for hostel or private accommodation in Tbilisi, making relocation easy.",
            "On-Arrival & Post-Admission Support: iExplain Education continues to support students even after they reach Tbilisi, including airport pickup, university registration, and local assistance."
        ],
        "documents": [
            { "document": "10th Marksheet & Certificate", "details": "Required as proof of basic education" },
            { "document": "12th Marksheet & Certificate", "details": "Must include Physics, Chemistry, Biology (PCB)" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students for MBBS in abroad" },
            { "document": "Valid Passport", "details": "Minimum 1–2 years validity required" },
            { "document": "Birth Certificate", "details": "Must be in English or officially translated" },
            { "document": "Medical Fitness Certificate", "details": "Confirms student is medically fit" },
            { "document": "HIV Test Report", "details": "Required as per university/visa guidelines" },
            { "document": "Admission / Invitation Letter", "details": "Issued by Tbilisi State Medical University after acceptance" },
            { "document": "Application Form", "details": "Properly filled and signed" },
            { "document": "Visa Documents", "details": "Includes visa application form and supporting papers" },
            { "document": "Bank Statement / Proof of Funds", "details": "Required for visa processing" }
        ],
        "conclusion": "In conclusion, Tbilisi State Medical University stands out as one of the top choices for students planning to pursue MBBS in abroad, especially MBBS in Georgia. With its strong academic legacy, global recognition from bodies like the World Health Organization and the National Medical Commission, affordable fee structure, and modern infrastructure, the university offers an excellent platform for aspiring medical professionals.\n\nThe well-structured curriculum, experienced faculty, and extensive clinical exposure in affiliated hospitals ensure that students gain both theoretical knowledge and practical skills. Additionally, the multicultural environment in Tbilisi, along with strong student support services, makes it easier for international students to adapt and thrive. Overall, choosing Tbilisi State Medical University for MBBS in abroad is a smart investment in a successful medical career, offering quality education, global opportunities, and a bright future in the field of medicine.",
        "faqs": [
            { "question": "Is Tbilisi State Medical University good for MBBS in abroad?", "answer": "Yes, it is one of the top medical universities in Georgia, known for quality education, global recognition, and affordable fees, making it a great choice for MBBS in abroad." },
            { "question": "Is the MBBS degree from TSMU valid in India?", "answer": "Yes, the degree is recognized by the National Medical Commission (NMC). Students must clear FMGE/NExT to practice in India." },
            { "question": "What is the duration of MBBS at TSMU?", "answer": "The MBBS (MD equivalent) program duration is 6 years, including clinical training and internship." },
            { "question": "What is the medium of instruction?", "answer": "The MBBS course is taught entirely in English, which is ideal for international students." },
            { "question": "Is NEET required for admission?", "answer": "Yes, NEET qualification is mandatory for Indian students who want to pursue MBBS in Georgia and practice in India later." },
            { "question": "What are the fees for MBBS at TSMU?", "answer": "The tuition fees are approximately $6,000 – $8,000 per year, making it an affordable option for MBBS in abroad." },
            { "question": "Does the university provide hostel facilities?", "answer": "Yes, the university offers well-furnished hostel facilities with all basic amenities. Private accommodation options are also available." },
            { "question": "Is Indian food available in Tbilisi?", "answer": "Yes, Indian food is easily available in Tbilisi, which makes it comfortable for Indian students." },
            { "question": "Can students work while studying MBBS?", "answer": "Yes, students may work part-time as per local regulations in Georgia, but academics should be the primary focus." },
            { "question": "What career options are available after MBBS?", "answer": "Graduates can appear for exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK), or pursue higher studies and medical practice globally." }
        ]
    },
    "david-tvildiani-medical-university": {
        "title": "David Tvildiani Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859709/David_Tvildiani_ymikfu.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859708/David_Tvildiani_2_rczomg.jpg",
        "intro": {
            "text": "David Tvildiani Medical University (DTMU) is one of the leading private medical universities located in Tbilisi. Established in 1989 by renowned academicians, the university has built a strong reputation for providing high-quality medical education based on international standards. Over the years, it has become a popular destination for students who wish to pursue MBBS abroad, especially from countries like India.\n\nThe university is widely known for its USMLE-oriented curriculum, which helps students prepare for global medical licensing exams and build successful careers in countries like the USA, Europe, and other parts of the world. The MBBS (MD) program is taught entirely in English and focuses on a perfect blend of theoretical knowledge, practical training, and early clinical exposure, making it an ideal choice for students planning to study MBBS in Georgia.\n\nDTMU is recognized by major global medical bodies such as WHO, NMC, and ECFMG, ensuring worldwide acceptance of its degree. The university focuses on modern teaching methods, research-based learning, and strong clinical training. These factors make it a top option for students seeking affordable and high-quality education while pursuing MBBS in Abroad or specifically MBBS in Georgia.\n\nWith experienced faculty, advanced infrastructure, and a multicultural environment, David Tvildiani Medical University provides a strong academic foundation along with global career opportunities. For students aiming to study MBBS in Abroad or MBBS in Georgia, DTMU stands out as a trusted and reputed choice."
        },
        "quickOverview": {
            "University Name": "David Tvildiani Medical University (DTMU)",
            "Location": "Tbilisi",
            "Established Year": "1989",
            "University Type": "Private",
            "Course Offered": "MBBS (MD – Equivalent to MBBS in India)",
            "Medium of Instruction": "English",
            "Recognition": "WHO, NMC, ECFMG, FAIMER",
            "Entrance Exam": "No (NEET required for Indian students)",
            "Eligibility": "10+2 with PCB (Minimum 50% for General Category)",
            "Global Acceptance": "Yes",
            "Hostel Facility": "Available"
        },
        "benefits": {
            "intro": "Choosing David Tvildiani Medical University for MBBS is a smart decision for students who want to pursue MBBS in Abroad or MBBS in Georgia with high-quality education and global career opportunities. Here are the key reasons why this university stands out:",
            "items": [
                {
                    "heading": "USMLE-Oriented Curriculum",
                    "details": "DTMU follows a USMLE-based curriculum, which helps students prepare for international medical licensing exams like USMLE, PLAB, and FMGE, opening doors to global medical careers."
                },
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The university is recognized by major medical bodies such as WHO, NMC, and ECFMG, ensuring worldwide acceptance of the degree."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "DTMU offers quality medical education at a reasonable cost compared to many other countries, making it ideal for students planning MBBS in Abroad."
                },
                {
                    "heading": "English-Medium Program",
                    "details": "The entire MBBS course is taught in English, which makes it convenient for international students, especially from India."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students get hands-on training in well-equipped hospitals with experienced faculty, ensuring practical knowledge and real-world medical experience."
                },
                {
                    "heading": "Modern Infrastructure & Facilities",
                    "details": "The university provides advanced laboratories, libraries, and a modern campus environment to support effective learning."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Located in Tbilisi, the university offers a safe and welcoming environment for international students with a high standard of living."
                },
                {
                    "heading": "High Success Rate in Licensing Exams",
                    "details": "DTMU students have a strong track record of clearing international exams, which increases their chances of practicing medicine globally."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD) program at David Tvildiani Medical University is designed according to international standards and follows a USMLE-oriented curriculum. The course is a perfect blend of theoretical knowledge, practical training, and clinical exposure, divided across 6 years including internship.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "General Medicine, Surgery, Community Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Pediatrics, Obstetrics & Gynecology, Psychiatry"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Radiology, Dermatology, Orthopedics"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship & Clinical Rotations"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at David Tvildiani Medical University is considered affordable compared to many other countries offering MBBS in Abroad and MBBS in Georgia. The fees may vary slightly depending on currency exchange rates and university updates.",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" },
                { "year": "2nd Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" },
                { "year": "3rd Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" },
                { "year": "4th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" },
                { "year": "5th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" },
                { "year": "6th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,400 – $3,000", "hostelINR": "₹2.0 – ₹2.5 Lakhs" }
            ]
        },
        "durationIntro": "The MBBS (MD) program at David Tvildiani Medical University has a total duration of 6 years, which is in line with international medical education standards and NMC guidelines.",
        "duration": {
            "headers": ["Particulars", "Details"],
            "table": [
                { "Particulars": "Total Duration", "Details": "6 Years" },
                { "Particulars": "Academic Duration", "Details": "5 Years" },
                { "Particulars": "Internship", "Details": "1 Year (Mandatory Clinical Training)" },
                { "Particulars": "Medium of Instruction", "Details": "English" },
                { "Particulars": "Course Degree", "Details": "MD (Equivalent to MBBS in India)" },
                { "Particulars": "Clinical Exposure", "Details": "Starts from early years with practical training" }
            ]
        },
        "studentSupport": "David Tvildiani Medical University offers a comprehensive and student-friendly support system designed to help international students adjust easily and succeed throughout their MBBS journey. The university provides strong academic support through highly qualified and experienced faculty members who guide students at every stage of their education. With a USMLE-oriented curriculum, students also receive proper mentorship and preparation support for international licensing exams such as USMLE, FMGE/NExT, and PLAB. Small batch sizes ensure better interaction between students and teachers, allowing personalized attention and improved understanding of complex medical concepts. Additionally, students get access to modern laboratories, digital libraries, and research facilities that enhance their academic experience.\n\nAlong with academic excellence, the university places a strong emphasis on clinical and career support. Students are provided with early clinical exposure and hands-on training in affiliated hospitals, where they gain real-life patient experience and practical medical skills. The university also assists students with career counseling, helping them explore global opportunities in countries like the USA, UK, and Europe. Dedicated support is available for international students, including assistance with admission procedures, visa processing, and documentation, making the transition to studying abroad smooth and hassle-free.\n\nIn terms of accommodation and daily life, the university ensures that students live in a safe and comfortable environment. Well-furnished hostels with modern amenities, 24/7 security, Wi-Fi, and laundry services are available for students. Indian and international food options are also accessible, which is especially beneficial for Indian students. Beyond academics, students are encouraged to participate in extracurricular activities, cultural events, and student organizations, which help in overall personality development and create a vibrant, multicultural campus life.\n\nFurthermore, the university provides healthcare facilities, medical assistance, and counseling services to support students’ physical and mental well-being. Recreational facilities such as sports complexes, gyms, and common areas are also available to maintain a healthy work-life balance. Overall, with its well-rounded student support system, David Tvildiani Medical University ensures that students not only excel academically but also enjoy a safe, comfortable, and enriching experience while pursuing MBBS in Abroad or MBBS in Georgia.",
        "recognition": "David Tvildiani Medical University is widely recognized for its strong global affiliations, international accreditations, and academic excellence. The university is officially approved and recognized by major medical bodies such as the National Medical Commission (NMC), World Health Organization (WHO), Educational Commission for Foreign Medical Graduates (ECFMG), World Federation for Medical Education (WFME), and FAIMER. It is also accredited by the Georgian Ministry of Education and Health, along with the National Center for Educational Quality Enhancement, ensuring that the degree is globally accepted and allows students to practice medicine in various countries.\n\nIn addition to these recognitions, the university is a member of several prestigious international organizations like the Association of Medical Education in Europe (AMEE) and the Association of Medical Schools in Europe (AMSE), which reflects its commitment to maintaining high educational standards. The university is also listed in the World Directory of Medical Schools (WDOMS), making its graduates eligible for global licensing exams such as USMLE and PLAB.\n\nTalking about achievements, David Tvildiani Medical University is known as one of the top medical universities in Georgia with a USMLE-based curriculum. It has consistently produced a high percentage of students successfully passing international licensing exams, and its graduates are working in leading hospitals across countries like the USA, UK, and Europe.",
        "hostelFacilities": "In terms of accommodation and daily life, the university ensures that students live in a safe and comfortable environment. Well-furnished hostels with modern amenities, 24/7 security, Wi-Fi, and laundry services are available for students. Indian and international food options are also accessible, which is especially beneficial for Indian students. David Tvildiani Medical University ensures access to healthcare services, counseling support, and a safe living environment, helping students focus on their studies without stress.",
        "studentLife": "Student life at David Tvildiani Medical University is vibrant, diverse, and highly student-friendly, offering a perfect balance between academics and personal growth. Located in Tbilisi, the university provides a safe and welcoming environment for international students, especially those coming for MBBS in Abroad and MBBS in Georgia. The campus hosts students from various countries, creating a multicultural atmosphere where students can learn, interact, and build global connections while experiencing the true benefits of studying MBBS in Georgia.\n\nApart from academics, students actively participate in cultural events, festivals, and student clubs, which help them stay engaged and connected. Indian students also celebrate festivals like Diwali, Holi, and other cultural events, making them feel at home even while studying MBBS in Georgia. The university encourages participation in extracurricular activities such as sports, music, dance, and other recreational programs, contributing to overall personality development.\n\nThe university offers comfortable hostel facilities with modern amenities like Wi-Fi, security, and common areas for social interaction. Indian and international food options are easily available, which makes daily life convenient for students pursuing MBBS in Georgia. Additionally, David Tvildiani Medical University ensures access to healthcare services, counseling support, and a safe living environment, helping students focus on their studies without stress.\n\nStudents also enjoy exploring the beautiful city of Tbilisi, known for its rich culture, historic sites, and lively lifestyle. Weekend outings, local travel, and social activities add to the overall experience of studying abroad. Overall, student life at David Tvildiani Medical University is enriching, enjoyable, and full of opportunities, making it an excellent choice for those planning to study MBBS in Georgia.",
        "whyChooseUsIntro": "Choosing the right consultancy plays a crucial role in securing admission for MBBS in Abroad and MBBS in Georgia. iExplain Education is a trusted education consultancy that provides end-to-end support for students aiming to study at top universities like David Tvildiani Medical University.",
        "whyChooseUs": [
            "Expert Guidance & Experience: iExplain Education has a team of experienced counselors who provide accurate information and help students make the right career decisions based on their profile and goals.",
            "Personalized Counseling: The consultancy follows a student-centric approach, offering personalized guidance by understanding each student’s strengths, preferences, and career aspirations.",
            "Complete Admission Assistance: From university selection to application submission, iExplain ensures a smooth admission process without confusion or delays. They help students secure admission in reputed universities like David Tvildiani Medical University.",
            "Documentation & Visa Support: iExplain Education provides full assistance with documentation, visa processing, and travel arrangements, ensuring a hassle-free experience for students and parents.",
            "Transparent & Reliable Process: Unlike many consultants, iExplain focuses on providing authentic information and transparent guidance without prioritizing profits over students’ interests.",
            "Pre & Post-Departure Support: Their support doesn’t end with admission. They assist students with accommodation, forex, travel, and settling in a new country, ensuring a smooth transition abroad.",
            "Wide Global Network: iExplain Education offers admission opportunities in multiple countries including Georgia, Russia, China, and more, giving students flexibility to choose the best option.",
            "Free Counseling Services: Students can get free consultation sessions to clear doubts regarding MBBS in Abroad and choose the best university according to their budget and preferences."
        ],
        "documents": [
            { "document": "10th Marksheet & Certificate", "details": "Required for basic academic and date of birth verification" },
            { "document": "12th Marksheet & Certificate", "details": "Must include Physics, Chemistry, and Biology subjects" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students applying for MBBS abroad" },
            { "document": "Valid Passport", "details": "Should have sufficient validity (minimum 6–18 months)" },
            { "document": "Birth Certificate", "details": "Must be in English or officially translated" },
            { "document": "Admission Letter", "details": "Issued by the university after acceptance" },
            { "document": "Invitation Letter", "details": "Required for student visa processing" },
            { "document": "HIV Test Report", "details": "Mandatory for international travel" },
            { "document": "Visa Documents", "details": "Required for student visa application" }
        ],
        "conclusion": "Applying for MBBS at David Tvildiani Medical University becomes a smooth and hassle-free process when all the required documents are properly prepared and submitted on time. Each document plays an important role in admission approval, verification, and visa processing, so students must ensure that all details are accurate, updated, and correctly attested.\n\nIt is always advisable to keep multiple copies of documents, both in physical and digital formats, to avoid any last-minute issues during the admission journey. Proper planning and timely submission not only speed up the process but also increase the chances of successful admission without delays.\n\nOverall, with the right documentation and proper guidance, students can easily secure their seat at David Tvildiani Medical University and begin their journey toward a successful medical career while pursuing MBBS in Georgia.",
        "faqs": [
            { "question": "Is NEET required for admission?", "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS in Georgia at David Tvildiani Medical University." },
            { "question": "Can I apply without a passport?", "answer": "No, a valid passport is essential for admission and student visa processing." },
            { "question": "Do documents need to be in English?", "answer": "Yes, if any document is not in English, it must be officially translated and attested." },
            { "question": "How long is the MBBS program?", "answer": "The MBBS (MD) program is 6 years in total, including 5 years of academic study and 1 year of internship." },
            { "question": "Are original documents required?", "answer": "Original documents are required at the time of admission and verification, though scanned copies are sufficient for initial application." },
            { "question": "Is a medical certificate necessary?", "answer": "Yes, a medical fitness certificate and HIV test report are mandatory for admission and visa purposes." },
            { "question": "What is the fee structure?", "answer": "The total tuition fee for 6 years is approximately $36,000 – $48,000, with hostel and living expenses extra." },
            { "question": "Can I get Indian food at the university?", "answer": "Yes, Indian and international food options are available in the hostels and campus cafeterias." },
            { "question": "Does the university provide student support?", "answer": "Yes, DTMU offers comprehensive support including academic guidance, career counseling, hostel facilities, and visa assistance." },
            { "question": "Is the degree globally recognized?", "answer": "Yes, the degree is recognized by WHO, NMC, ECFMG, and other international medical bodies, allowing graduates to practice medicine abroad." }
        ]
    },
    "european-university-georgia": {
        "title": "European University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859708/European_University_dzmrof.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859709/European_University_2_gch0w9.jpg",
        "intro": {
            "text": "European University is one of the premier private medical universities located in Tbilisi, renowned for its high-quality medical education and international standards. Established with the mission to provide globally recognized medical programs, the university has emerged as a preferred destination for students from India, Europe, Africa, and other parts of the world who wish to pursue MBBS in Abroad and specifically MBBS in Georgia. Over the years, it has built a strong reputation for academic excellence, modern teaching methodologies, and a student-friendly environment that fosters both professional and personal growth.\n\nThe university offers a fully English-medium MBBS (MD) program that is designed to meet global medical education standards. The curriculum emphasizes a balanced combination of theoretical knowledge, practical skills, and early clinical exposure to ensure that students are well-prepared for real-world medical practice. With a focus on USMLE and FMGE/NExT exam preparation, European University equips students with the necessary knowledge and skills to pursue international medical careers. The course structure is carefully planned to include basic sciences, clinical subjects, and hands-on hospital training in the affiliated teaching hospitals, ensuring comprehensive medical education.\n\nRecognition and accreditation are one of the key strengths of European University. The university is recognized by globally reputed medical organizations such as WHO and the National Medical Commission (NMC) of India. These recognitions ensure that graduates of the university can practice medicine in various countries, pursue higher education, and participate in global licensing exams such as USMLE, PLAB, and FMGE. Additionally, the university maintains strong academic affiliations with other European institutions, promoting research collaborations, student exchange programs, and international exposure.\n\nEuropean University also focuses on creating a supportive and multicultural campus environment for its international students. The campus offers modern infrastructure, well-equipped laboratories, digital libraries, hostel facilities, and recreational amenities. Indian and international students feel at home with access to Indian food, cultural support, and student communities. Moreover, the university provides dedicated assistance with admission guidance, visa processing, documentation, and accommodation, making the transition to studying abroad smooth and hassle-free."
        },
        "quickOverview": {
            "University Name": "European University",
            "Location": "Tbilisi",
            "Established Year": "2012",
            "University Type": "Private",
            "Course Offered": "MBBS (MD – Equivalent to MBBS in India)",
            "Medium of Instruction": "English",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "WHO, NMC, ECFMG",
            "Entrance Exam": "No (NEET required for Indian students)",
            "Global Acceptance": "Yes"
        },
        "benefits": {
            "intro": "Choosing European University for MBBS is a smart decision for students aiming to pursue MBBS in Abroad or specifically MBBS in Georgia. The university combines quality education, global recognition, and a supportive environment to ensure students have a successful medical career. Here are the key reasons:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "European University is recognized by WHO, NMC, and other international medical bodies, ensuring that its MBBS degree is accepted worldwide. Graduates are eligible for licensing exams like USMLE, PLAB, and FMGE/NExT."
                },
                {
                    "heading": "English-Medium Program",
                    "details": "The MBBS course is taught entirely in English, making it easier for international students, especially from India, to adapt and excel."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "Compared to other countries offering MBBS abroad, European University provides high-quality education at reasonable fees, making it accessible for students planning MBBS in Abroad."
                },
                {
                    "heading": "USMLE-Oriented Curriculum",
                    "details": "The curriculum is designed according to international standards, focusing on theoretical knowledge, practical training, and preparation for global medical licensing exams."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students gain hands-on training in affiliated hospitals, allowing them to develop practical skills and confidence in real patient care scenarios."
                },
                {
                    "heading": "Modern Infrastructure & Facilities",
                    "details": "The university offers advanced laboratories, well-stocked libraries, digital resources, and modern classrooms to support effective learning."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Tbilisi is a safe city with a multicultural student population. European University provides hostels, Indian food, counseling, and other support services to make international students feel at home."
                },
                {
                    "heading": "Career Opportunities",
                    "details": "Graduates from European University have opportunities to work in countries like the USA, UK, Europe, and India, giving them a global platform to build their medical careers."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD) program at European University is designed according to international standards with a USMLE-oriented curriculum. The course provides a strong foundation in medical sciences, practical skills, and clinical exposure, making it ideal for students pursuing MBBS in Abroad and MBBS in Georgia. The program duration is 6 years, including a mandatory internship.",
        syllabus: {
            headers: ["Subjects / Modules", "Focus / Highlights"],
            table: [
                {
                    "Subjects / Modules": "Anatomy, Physiology, Biochemistry",
                    "Focus / Highlights": "Fundamentals of human body and basic sciences"
                },
                {
                    "Subjects / Modules": "Pathology, Microbiology, Pharmacology",
                    "Focus / Highlights": "Study of diseases, microbes, and medicines"
                },
                {
                    "Subjects / Modules": "General Medicine, Surgery, Community Medicine",
                    "Focus / Highlights": "Introduction to clinical subjects and patient care"
                },
                {
                    "Subjects / Modules": "Pediatrics, Obstetrics & Gynecology, Psychiatry",
                    "Focus / Highlights": "Specialized clinical subjects with practical exposure"
                },
                {
                    "Subjects / Modules": "Radiology, Dermatology, Orthopedics, ENT",
                    "Focus / Highlights": "Advanced diagnostics and clinical skills"
                },
                {
                    "Subjects / Modules": "Internship & Clinical Rotations",
                    "Focus / Highlights": "Hands-on patient care in affiliated hospitals"
                }
            ]
        },
        "feesIntro": "The MBBS (MD) program fee structure at European University is competitive and affordable compared to many other countries offering MBBS in Georgia. The fees may vary slightly due to currency exchange rates and university updates. Below is an approximate breakdown:",
        "fees": {
            "structure": [
                { "year": "1st Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" },
                { "year": "2nd Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" },
                { "year": "3rd Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" },
                { "year": "4th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" },
                { "year": "5th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" },
                { "year": "6th Year", "tuition": "$6,000 – $8,000", "tuitionINR": "₹5.0 – ₹6.9 Lakhs", "hostel": "$2,000 – $2,500", "hostelINR": "₹1.6 – ₹2.1 Lakhs" }
            ]
        },
        "durationIntro": "The MBBS (MD) program at European University has a total duration of 6 years, which is structured to provide both academic knowledge and practical clinical experience. This duration aligns with international medical education standards and NMC requirements for Indian students planning MBBS in Georgia.",
        "duration": {
            "headers": ["Particulars", "Duration"],
            "table": [
                { "Particulars": "Total Duration", "Duration": "6 Years" },
                { "Particulars": "Academic Study", "Duration": "5 Years" },
                { "Particulars": "Internship", "Duration": "1 Year (Mandatory Clinical Training)" },
                { "Particulars": "Medium of Instruction", "Duration": "English" },
                { "Particulars": "Clinical Exposure", "Duration": "Begins from early years, increasing each year" },
                { "Particulars": "Degree Awarded", "Duration": "MD (Equivalent to MBBS in India)" }
            ]
        },
        "studentSupport": "European University offers comprehensive student support services designed to ensure academic success, personal well‑being, and a smooth transition for international students pursuing MBBS in Abroad and MBBS in Georgia. The university’s support system focuses on guidance, comfort, and overall development throughout the entire medical journey.\n\nFrom the moment students begin their application process, European University provides dedicated admission counselors who assist with university selection, documentation, and visa processing. Once enrolled, students receive ongoing academic support from experienced faculty who offer mentorship, tutoring, and continuous performance feedback. The university also organizes workshops, seminars, and exam preparation sessions to help students excel in their studies and prepare for international licensing exams like USMLE, PLAB, and FMGE/NExT.\n\nEuropean University understands that studying abroad involves adapting to a new environment, so student support extends beyond academics. International students receive guidance in accommodation arrangements, cultural orientation, and day‑to‑day living essentials. Comfortable hostels with modern amenities, safety measures, and access to Indian and international food options help students feel at home while studying MBBS in Georgia.",
        "recognition": "European University is widely recognized for its strong global affiliations, accreditations, and academic accomplishments. The university holds recognition from several esteemed international and national medical regulatory bodies, ensuring its MBBS in Abroad and MBBS in Georgia programs meet global standards.\n\nThe university is officially recognized by the World Health Organization (WHO) and listed in the World Directory of Medical Schools (WDOMS), which allows graduates to pursue licensing exams like USMLE and PLAB. It is also approved by the National Medical Commission (NMC) of India, enabling Indian students to pursue medical practice in India after clearing the required screening examination (FMGE/NExT). These recognitions ensure that the MD degree awarded by European University is accepted worldwide, offering students flexibility in their future careers.\n\nIn addition to international recognition, European University maintains strong academic affiliations with other reputed institutions across Europe, fostering educational collaborations, research opportunities, and student exchange programs. The university’s commitment to quality medical education has earned it a reputation for high academic standards, modern teaching methodologies, and clinical training excellence.",
        "hostelFacilities": "European University provides hostels, Indian food, counseling, and other support services to make international students feel at home. Comfortable hostels with modern amenities, safety measures, and access to Indian and international food options help students feel at home while studying MBBS in Georgia. The campus infrastructure supports a comfortable lifestyle, with well‑maintained hostels, common recreational areas, Wi‑Fi connectivity, security services, and access to Indian and international cuisine.",
        "studentLife": "Student life at European University is enriching, dynamic, and culturally diverse, offering a fulfilling experience for those pursuing MBBS in Abroad and MBBS in Georgia. The university’s campus life is designed to promote holistic development—balancing academic rigor with social engagement, personal well‑being, and global exposure.\n\nFrom the first day, international students are welcomed into a multicultural environment where peers come from different countries, backgrounds, and cultures. This diversity not only helps students broaden their worldviews but also fosters lifelong friendships and global networking opportunities. The university celebrates various cultural events, festivals, and student‑driven activities, allowing students to share their traditions while learning about others.\n\nAcademics at European University are supported by a lively campus culture. Students participate in extracurricular clubs, sports teams, wellness programs, and community outreach activities that encourage teamwork, leadership, and personal growth. Whether it’s joining a medical club, fitness sessions, or cultural nights, there are plenty of avenues for relaxation and recreation outside the classroom.\n\nThe campus infrastructure supports a comfortable lifestyle, with well‑maintained hostels, common recreational areas, Wi‑Fi connectivity, security services, and access to Indian and international cuisine. For many Indian and other international students, having familiar food options and a supportive community helps make life abroad feel more like home while they pursue their MBBS in Georgia",
        "whyChooseUsIntro": "iExplain Education is a trusted educational consultancy that provides end-to-end guidance for students aspiring to pursue MBBS in Abroad and MBBS in Georgia, especially at reputed institutions like European University. Their expertise ensures a smooth, transparent, and well-guided admission journey from start to finish.",
        "whyChooseUs": [
            "Expert Guidance & Experienced Counselors: iExplain Education has a team of highly experienced counselors who provide accurate and up-to-date information about medical universities, courses, and admission requirements. They help students make informed decisions tailored to their academic profile and career goals.",
            "Personalized Admission Assistance: From selecting the right university to preparing application forms, iExplain Education offers personalized guidance. Students receive step-by-step support throughout the admission process, ensuring no details are missed.",
            "Documentation & Visa Support: The consultancy helps students with all essential documentation, attestation, and student visa processing. This minimizes errors and reduces delays, ensuring a hassle-free journey abroad.",
            "Transparent & Reliable Process: iExplain Education provides authentic information about fees, courses, eligibility, and recognition of universities like European University. Students are guided without any hidden charges or misinformation.",
            "Pre & Post-Departure Assistance: Support extends beyond admission. iExplain Education assists students with accommodation, travel arrangements, cultural orientation, and settling in Georgia, making the transition smooth and stress-free.",
            "Global Network & Career Guidance: With partnerships across countries like Georgia, Russia, China, and Europe, iExplain Education provides students with multiple options for pursuing MBBS abroad. They also guide students in preparing for international exams such as USMLE, PLAB, and FMGE/NExT.",
            "Free Counseling Services: Students can access free counseling sessions to clarify doubts, compare universities, and choose the best option based on their budget and preferences."
        ],
        "documents": [
            { "document": "10th Marksheet & Certificate", "details": "Proof of academic qualification and date of birth" },
            { "document": "12th Marksheet & Certificate", "details": "Must include Physics, Chemistry, and Biology subjects" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students" },
            { "document": "Valid Passport", "details": "Minimum validity of 6–18 months" },
            { "document": "Birth Certificate", "details": "Must be in English or officially translated" },
            { "document": "Admission Letter", "details": "Issued by the university after acceptance" },
            { "document": "Invitation Letter", "details": "Required for student visa processing" },
            { "document": "HIV Test Report", "details": "Mandatory for international travel" },
            { "document": "Visa Documents", "details": "Required for student visa application" },
            { "document": "Document Attestation", "details": "Notarization/apostille as per visa requirements" }
        ],
        "conclusion": "Securing admission for MBBS in Georgia at European University becomes straightforward when all required documents are prepared and submitted accurately. Each document, from academic certificates to medical fitness reports and passport details, plays a crucial role in both university admission and visa processing.\n\nStudents are advised to keep multiple copies—both physical and digital—of all documents to avoid delays or complications. Timely and proper submission not only speeds up the admission process but also ensures compliance with international education and immigration regulations.\n\nOverall, with careful preparation and proper guidance, students can smoothly secure a seat at European University, laying a strong foundation for a successful medical career while pursuing MBBS in Georgia. The university’s globally recognized curriculum, modern facilities, and supportive environment make it an excellent choice for aspiring medical professionals.",
        "faqs": [
            { "question": "Is NEET required for admission?", "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS in Georgia at European University." },
            { "question": "Can I apply without a passport?", "answer": "No, a valid passport is essential for admission and student visa processing." },
            { "question": "Do documents need to be in English?", "answer": "Yes, if any document is not in English, it must be officially translated and attested." },
            { "question": "How long is the MBBS program?", "answer": "The MBBS (MD) program at European University is 6 years, including 5 years of academic study and 1 year of internship." },
            { "question": "Are original documents required?", "answer": "Yes, original documents are required at the time of admission and verification, though scanned copies may be submitted initially." },
            { "question": "Is a medical certificate necessary?", "answer": "Yes, a medical fitness certificate and HIV test report are mandatory for admission and visa purposes." },
            { "question": "What is the fee structure?", "answer": "The total tuition fee for 6 years is approximately $36,000 – $48,000, with hostel and living expenses additional." },
            { "question": "Can I get Indian food at the university?", "answer": "Yes, the university provides Indian and international food options in hostels and campus cafeterias." },
            { "question": "Does the university provide student support?", "answer": "Yes, European University offers comprehensive support including academic guidance, career counseling, hostel facilities, and visa assistance." },
            { "question": "Is the degree globally recognized?", "answer": "Yes, the MD degree is recognized by WHO, NMC, ECFMG, and other international medical bodies, allowing graduates to practice medicine abroad." }
        ]
    },
    "georgian-national-university-seu": {
        "title": "Georgian National University SEU",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774612928/Georgian_National_qtmivu.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774612928/Georgian_National_2_oa1fxl.jpg",
        "intro": {
            "text": "Georgian National University SEU is a prestigious and rapidly growing private university located in the heart of Tbilisi, the capital city of Georgia. Established with the mission to provide world-class education, SEU has become one of the most sought-after institutions for both local and international students. The university prides itself on offering a modern, student-centric learning environment that combines academic excellence with practical exposure, preparing students for professional success in a globalized world. For students planning to pursue MBBS in Georgia, SEU stands out as a reliable and top choice due to its global recognition and quality education.\n\nGeorgian National University SEU offers a wide range of programs in medicine, business administration, law, engineering, social sciences, and humanities, making it a comprehensive institution catering to diverse academic interests. The university’s medical faculty, in particular, has gained recognition for its well-structured MBBS program, designed to meet international standards and recognized by organizations such as the World Health Organization (WHO) and the Medical Council of India (MCI). This makes it an attractive option for Indian and other international students aspiring to pursue MBBS in Georgia at an affordable cost.\n\nThe campus at Georgian National University SEU is equipped with state-of-the-art classrooms, modern laboratories, libraries, and advanced research facilities, ensuring students have access to all the tools they need for academic success. The university also emphasizes practical training through clinical internships, hospital rotations, and collaborative projects, allowing students to gain hands-on experience alongside their theoretical studies, which is essential for students choosing MBBS in Georgia."
        },
        "quickOverview": {
            "University Name": "Georgian National University SEU",
            "Location": "Tbilisi, Georgia",
            "Type": "Private University",
            "Courses Offered": "MBBS",
            "Medium of Instruction": "English",
            "Recognition": "Ministry of Education of Georgia, WHO, Medical Council of India (MCI) recognized for MBBS",
            "Duration of MBBS": "6 years (including internship)",
            "Campus Facilities": "Modern classrooms, laboratories, library, research centers, sports facilities, hostel accommodation",
            "Student Support": "International student office, academic guidance, career counseling, language support",
            "Hostel/Accommodation": "On-campus & off-campus options for international students, furnished with modern amenities",
            "Student Life": "Cultural events, sports, clubs, workshops, seminars, and recreational activities"
        },
        "benefits": {
            "intro": "Choosing to pursue an MBBS at Georgian National University SEU is an excellent decision for Indian and international students for several reasons:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The MBBS program is recognized by the World Health Organization (WHO) and the Medical Council of India (MCI), ensuring that graduates can practice medicine internationally."
                },
                {
                    "heading": "Affordable Tuition Fees",
                    "details": "Compared to many European countries, SEU offers a high-quality medical education at a cost-effective fee structure, making it accessible for students from different financial backgrounds."
                },
                {
                    "heading": "English-Medium Instruction",
                    "details": "The entire MBBS course is offered in English, eliminating language barriers and making it easier for international students to adapt."
                },
                {
                    "heading": "Modern Infrastructure",
                    "details": "The university boasts state-of-the-art laboratories, classrooms, libraries, and research facilities, providing a conducive environment for medical learning and practical training."
                },
                {
                    "heading": "Experienced Faculty",
                    "details": "SEU has a qualified and experienced faculty team, including local and international professors, who combine theoretical knowledge with practical expertise."
                },
                {
                    "heading": "Hands-On Clinical Exposure",
                    "details": "Students get early exposure to clinical practices through hospital rotations, internships, and practical training, ensuring they develop real-world medical skills."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Tbilisi is known for its safe and welcoming environment, and SEU provides supportive hostels and services for international students to feel at home."
                },
                {
                    "heading": "Cultural Diversity",
                    "details": "The university attracts students from all over the world, allowing for cross-cultural learning, global networking, and broadening of perspectives."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD) program at Georgian National University is a 6-year course divided into three main phases: Pre-Clinical, Para-Clinical, and Clinical training, ensuring a strong foundation along with practical medical exposure.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Histology, Medical Ethics, Genetics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Biochemistry, Microbiology, Immunology, Pathophysiology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Forensic Medicine, Clinical Medicine, Radiology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "ENT, Ophthalmology, Psychiatry, Dermatology, Neurology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Rotations, Emergency Medicine, Surgery Practice, Internship, Practical Training"
                }
            ]
        },
        "feesIntro": "Pursuing an MBBS at Georgian National University SEU is not only affordable compared to many European countries but also offers a high-quality international education. The university provides a transparent fee structure, covering tuition, hostel, and other essential expenses. Below is an approximate estimate of the total annual and overall costs:",
        "fees": {
            "structure": [
                {
                    "year": "Tuition Fee (per year)",
                    "tuition": "$5,000 – $5,900",
                    "total": "₹4,00,000 – ₹5,00,000"
                },
                {
                    "year": "Hostel Fee (per year)",
                    "tuition": "$500 – $1,200",
                    "total": "₹40,000 – ₹1,00,000"
                },
                {
                    "year": "Total Estimated Cost (per year)",
                    "tuition": "$5,500 – $7,100",
                    "total": "₹4,40,000 – ₹6,00,000"
                },
                {
                    "year": "Total Estimated Cost (6 years)",
                    "tuition": "$33,000 – $36,000",
                    "total": "₹26,00,000 – ₹28,00,000"
                }
            ]
        },
        "durationIntro": "The MBBS (MD) program at Georgian National University SEU has a total duration of 6 years, designed to provide a comprehensive medical education that combines academic knowledge with practical clinical experience.",
        "duration": {
            "headers": ["Particulars", "Details"],
            "table": [
                { "Particulars": "Total Duration", "Details": "6 Years" },
                { "Particulars": "Academic Study", "Details": "5 Years" },
                { "Particulars": "Internship", "Details": "1 Year (Mandatory Clinical Training)" },
                { "Particulars": "Medium of Instruction", "Details": "English" },
                { "Particulars": "Clinical Exposure", "Details": "Begins from early years and increases progressively each year" },
                { "Particulars": "Degree Awarded", "Details": "MD (Equivalent to MBBS in India)" }
            ]
        },
        "studentSupport": "Georgian National University SEU offers a strong and well-structured student support system designed to ensure that both local and international students have a smooth, comfortable, and successful academic journey. From the very beginning, the university’s international student department provides complete assistance with admission procedures, visa processing, airport pickup, and accommodation arrangements.\n\nThe university places great emphasis on academic support, offering guidance through experienced faculty members, mentoring programs, and regular interactive sessions. Students have access to modern classrooms, digital libraries, laboratories, and research facilities that enhance their learning experience. Additionally, SEU organizes seminars, workshops, and clinical training sessions to strengthen both theoretical knowledge and practical skills. For international students, language support programs are also available to help them learn basic Georgian, which is useful during clinical practice and daily communication.\n\nApart from academics, the university ensures students’ overall well-being by providing career counselling, psychological support, and healthcare services. Dedicated staff members assist students with important formalities such as residence permits, medical insurance, and legal documentation, making their stay hassle-free. The university also focuses on creating a welcoming and inclusive environment where students feel supported at every stage of their education.\n\nFurthermore, SEU promotes an active and engaging campus life by encouraging participation in cultural events, sports activities, student clubs, and social programs. These activities help students develop confidence, improve communication skills, and maintain a healthy balance between studies and personal life. The hostel facilities are safe, well-equipped, and student-friendly, ensuring a comfortable living experience.",
        "recognition": "Georgian National University SEU is a well-recognised institution that meets international education standards, making it a trusted choice for medical aspirants worldwide. The university holds multiple affiliations and recognitions that ensure the global validity of its medical degree and academic excellence.\n\nAffiliations & Recognitions:\n- Recognized by the Ministry of Education and Science of Georgia\n- Listed in the World Health Organization (WHO) directory of medical institutions\n- Approved by the National Medical Commission (NMC) (formerly MCI) for Indian students\n- Recognized by international medical bodies, allowing graduates to appear for global licensing exams such as USMLE, PLAB, and others\n- Follows the European Credit Transfer and Accumulation System (ECTS), ensuring compatibility with European education standards\n\nAchievements:\n- Established as one of the fast-growing private universities in Georgia with a strong academic reputation\n- Known for its modern infrastructure and advanced medical laboratories\n- Offers high-quality English-medium MBBS programs for international students\n- Strong focus on clinical training and practical exposure through affiliated hospitals\n- Maintains international collaborations with universities and research institutions\n- Provides a student-friendly environment with excellent academic and career support services",
        "hostelFacilities": "The hostel facilities at Georgian National University SEU are safe, well-equipped, and student-friendly, ensuring a comfortable living experience. The university offers on-campus and off-campus options for international students, furnished with modern amenities. International students enjoy a comfortable lifestyle with safe hostel accommodations, Indian food options, and nearby amenities such as supermarkets, cafes, and public transport. The city of Tbilisi itself is known for being safe, affordable, and student-friendly, making it easier for students to adjust to a new country.",
        "studentLife": "Student life at Georgian National University SEU is vibrant, diverse, and well-balanced, offering students a perfect mix of academic focus and extracurricular engagement. The university creates a welcoming and multicultural environment where students from different countries come together to learn, interact, and grow. This diversity helps students build global connections and develop a broader perspective, which is especially beneficial for medical students planning to pursue MBBS in abroad.\n\nThe campus is equipped with modern facilities including advanced classrooms, laboratories, libraries, sports areas, and recreational spaces, ensuring students have access to everything they need for both study and relaxation. The university regularly organizes cultural events, festivals, sports competitions, and student club activities, allowing students to showcase their talents and stay active beyond academics. International students enjoy a comfortable lifestyle with safe hostel accommodations, Indian food options, and nearby amenities such as supermarkets, cafes, and public transport.",
        "whyChooseUsIntro": "Choosing the right consultancy is just as important as selecting the right university, and iExplain Education stands out as a reliable and student-focused partner for MBBS admissions abroad. With years of experience in guiding students toward successful medical careers, iExplain Education ensures a smooth, transparent, and hassle-free admission process for Georgian National University SEU.",
        "whyChooseUs": [
            "Expert Guidance & Experience: iExplain Education has extensive experience in study abroad consulting and provides accurate, up-to-date information to help students make informed decisions.",
            "Student-Centric Approach: Unlike many consultancies, iExplain focuses on the student’s profile, goals, and budget rather than promoting specific universities for profit.",
            "Complete Admission Assistance: From university selection to application submission, documentation, and admission confirmation, they provide end-to-end support throughout the entire process.",
            "Free Counseling Sessions: Students and parents can get personalised counselling (offline & online) to clear doubts and choose the best MBBS option based on their needs.",
            "Visa & Travel Support: iExplain assists with visa processing, forex, travel arrangements, and pre-departure guidance, ensuring a smooth transition to Georgia.",
            "University & Country Selection: They help students select the best university and country based on academic performance, budget, and career goals.",
            "Post-Admission Support: Support doesn’t end after admission—iExplain also helps with accommodation, international SIM, and settling in abroad, making students feel comfortable in a new country.",
            "Transparent & Ethical Process: The consultancy follows a policy of honesty, transparency, and integrity, ensuring no hidden charges or misleading information."
        ],
        "documents": [
            { "document": "10th Marksheet & Certificate", "details": "For verification of date of birth and academic records" },
            { "document": "12th Marksheet & Certificate", "details": "Must have Physics, Chemistry, Biology with required qualifying marks" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students as per NMC guidelines" },
            { "document": "Valid Passport", "details": "Minimum validity of 2 years at the time of application" },
            { "document": "Medical Fitness Certificate", "details": "Proof of physical and mental fitness" },
            { "document": "HIV Test Report", "details": "Required as per university and visa norms" },
            { "document": "Birth Certificate", "details": "In English or officially translated" },
            { "document": "Admission Letter", "details": "Issued by the university after application approval" },
            { "document": "Visa Invitation Letter", "details": "Required for student visa processing" }
        ],
        "conclusion": "Choosing to pursue MBBS at Georgian National University SEU is a smart and future-oriented decision for students who aspire to build a successful career in the medical field. The university offers a perfect blend of high-quality education, modern infrastructure, and practical clinical exposure, ensuring that students gain both theoretical knowledge and hands-on experience throughout their journey. Its globally recognized MD degree, which is equivalent to MBBS in India, opens doors to various international career opportunities, including practicing medicine, pursuing postgraduate studies, or appearing for global licensing exams.\n\nApart from academics, Georgian National University SEU provides a safe, welcoming, and multicultural environment where students can grow both personally and professionally. With excellent student support services, comfortable accommodation, and a vibrant campus life, students can enjoy a balanced and enriching experience while studying abroad. The city of Tbilisi also adds to the overall experience with its affordability, safety, and student-friendly atmosphere.",
        "faqs": [
            { "question": "Is Georgian National University SEU good for MBBS?", "answer": "Yes, Georgian National University SEU is a well-recognized university offering quality medical education with modern infrastructure, experienced faculty, and global recognition, making it a good choice for MBBS abroad." },
            { "question": "What is the duration of MBBS at Georgian National University SEU?", "answer": "The MBBS (MD) program duration is 6 years, which includes 5 years of academic study and 1 year of mandatory internship." },
            { "question": "Is NEET required for admission?", "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines to pursue MBBS abroad." },
            { "question": "What is the medium of instruction?", "answer": "The MBBS program is taught entirely in English, making it convenient for international students." },
            { "question": "What is the total fee for MBBS at Georgian National University SEU?", "answer": "The total MBBS cost is approximately ₹26–28 lakhs for 6 years, including tuition and hostel (approximate and may vary)." },
            { "question": "Is the degree recognized in India?", "answer": "Yes, the degree is recognized by international bodies and is valid in India after clearing the FMGE/NExT exam as per NMC rules." },
            { "question": "Are hostel facilities available?", "answer": "Yes, the university provides safe and well-furnished hostel facilities with all basic amenities for international students." },
            { "question": "When does the admission process start?", "answer": "Admissions usually begin around May–June and continue until September/October, depending on seat availability." },
            { "question": "Can students work while studying?", "answer": "Yes, students may take part-time work opportunities as per Georgian regulations, but academics should remain the priority." }
        ]
    },
    "georgian-american-university": {
        "title": "Georgian American University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859708/Georgian_American_University_ivnlbz.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859710/Georgian_American_University_2_nkifti.jpg",
        "intro": {
            "text": "Georgian American University is a reputed private university located in Tbilisi, the capital city of Georgia. Established with the aim of delivering high-quality education based on international standards, GAU has quickly gained recognition as one of the leading institutions for higher education in the region. The university follows a modern, student-centered approach that combines academic excellence with practical learning, preparing students for global career opportunities.\n\nGeorgian American University offers a wide range of undergraduate and postgraduate programs in fields such as medicine, business administration, law, social sciences, and information technology. Its medical program, especially the MBBS (MD), is designed according to international medical education standards, making it a preferred choice for students planning to pursue MBBS abroad. The university is recognized by the Ministry of Education of Georgia and follows global academic practices, ensuring that students receive a degree that is widely accepted.\n\nThe campus of GAU is equipped with advanced infrastructure, including modern classrooms, well-equipped laboratories, libraries, and research facilities. The university emphasizes practical training through clinical exposure, internships, and hands-on learning, helping students develop real-world skills alongside theoretical knowledge.\n\nOne of the key strengths of GAU is its highly qualified and experienced faculty, including international professionals who bring global exposure to the classroom. The university also promotes research, innovation, and student participation in academic events such as seminars, workshops, and conferences."
        },
        "quickOverview": {
            "University Name": "Georgian American University (GAU)",
            "Location": "Tbilisi, Georgia",
            "Type": "Private University",
            "Established": "2001",
            "Courses Offered": "MBBS",
            "Medium of Instruction": "English & Georgian",
            "Recognition": "Ministry of Education and Science of Georgia, WHO, NMC (for MBBS)",
            "Duration of MBBS": "6 Years (including internship)",
            "Campus Facilities": "Modern classrooms, laboratories, library, research centers, sports facilities",
            "Faculty": "Highly qualified local and international faculty",
            "International Students": "Students from multiple countries including India"
        },
        "benefits": {
            "intro": "Pursuing MBBS at Georgian American University is an excellent choice for students who are looking for quality medical education abroad at an affordable cost. The university offers a globally relevant curriculum, modern infrastructure, and strong clinical exposure, making it a preferred destination for international students. Here are the key reasons why students choose GAU for MBBS:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The MBBS (MD) degree from GAU is recognized by international bodies such as the World Health Organization (WHO) and is approved by the National Medical Commission (NMC), allowing Indian students to practice in India after qualifying required exams."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "Compared to private medical colleges in India and other countries, GAU offers cost-effective MBBS education, making it accessible for students from different financial backgrounds."
                },
                {
                    "heading": "English-Medium Program",
                    "details": "The entire MBBS course is taught in English, which eliminates language barriers and makes learning easier for international students."
                },
                {
                    "heading": "Modern Infrastructure & Facilities",
                    "details": "The university is equipped with advanced laboratories, smart classrooms, libraries, and research facilities, ensuring a high-quality learning environment."
                },
                {
                    "heading": "Experienced & International Faculty",
                    "details": "GAU has a team of highly qualified and experienced faculty members, including international experts who provide in-depth knowledge and practical insights."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students receive early clinical exposure through hospital training, internships, and practical sessions, helping them develop real-world medical skills."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Tbilisi is known for being safe, affordable, and welcoming, making it an ideal place for international students to study and live comfortably."
                },
                {
                    "heading": "Multicultural Environment",
                    "details": "The university hosts students from different countries, providing a diverse and global learning experience."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD) program at Georgian American University is a 6-year course divided into three main phases: Pre-Clinical, Para-Clinical, and Clinical training, ensuring a strong foundation along with practical medical exposure.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Histology, Medical Ethics, Genetics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Biochemistry, Microbiology, Immunology, Pathophysiology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Forensic Medicine, Clinical Medicine, Radiology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "ENT, Ophthalmology, Psychiatry, Dermatology, Neurology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Rotations, Emergency Medicine, Surgery Practice, Internship, Practical Training"
                }
            ]
        },
        "feesIntro": "Pursuing MBBS at Georgian American University is considered affordable for international students, especially those planning MBBS in Georgia. The university offers a transparent fee structure with reasonable tuition and accommodation costs. Below is the approximate fee details:",
        "fees": {
            "structure": [
                {
                    "year": "Tuition Fee (per year)",
                    "tuition": "$5,000 – $6,000",
                    "total": "₹4,00,000 – ₹5,00,000"
                },
                {
                    "year": "Hostel Fee (per year)",
                    "tuition": "$400 – $1,200",
                    "total": "₹35,000 – ₹1,00,000"
                },
                {
                    "year": "Total Estimated Cost (per year)",
                    "tuition": "$5,400 – $7,200",
                    "total": "₹4,35,000 – ₹6,00,000"
                },
                {
                    "year": "Total Estimated Cost (6 years)",
                    "tuition": "$30,000 – $33,000",
                    "total": "₹25,00,000 – ₹28,00,000"
                }
            ]
        },
        "durationIntro": "The MBBS (MD) program at Georgian American University has a total duration of 6 years, designed to provide a balanced combination of theoretical knowledge and practical clinical training. The course structure follows international medical education standards and is aligned with NMC guidelines for Indian students pursuing MBBS abroad.",
        "duration": {
            "headers": ["Particulars", "Details"],
            "table": [
                { "Particulars": "Total Duration", "Details": "6 Years" },
                { "Particulars": "Academic Study", "Details": "5 Years" },
                { "Particulars": "Internship", "Details": "1 Year (Mandatory Clinical Training)" },
                { "Particulars": "Medium of Instruction", "Details": "English" },
                { "Particulars": "Clinical Exposure", "Details": "Starts from early clinical years and increases gradually" },
                { "Particulars": "Degree Awarded", "Details": "MD (Equivalent to MBBS in India)" }
            ]
        },
        "studentSupport": "Georgian American University provides a comprehensive and student-focused support system to ensure that both local and international students have a smooth and successful academic journey. From the initial stage of admission to settling in Georgia, the university offers dedicated assistance through its International Student Admission Office, which guides students with application procedures, documentation, and pre-arrival support. This department acts as the first point of contact for international students and helps them adapt to a new educational system and environment.\n\nThe university also offers a detailed pre-arrival and orientation guide, which includes essential information about living in Tbilisi, university services, and academic expectations. This helps students prepare in advance and reduces the challenges of moving to a new country.\n\nIn terms of academic support, GAU maintains a low student-to-teacher ratio, ensuring personalized attention and better interaction between students and faculty. Professors are approachable and often provide additional guidance beyond classroom teaching, helping students strengthen their understanding and practical skills.\n\nThe university also focuses on students’ career growth through its dedicated Career Center, which provides information about internships, job opportunities, training sessions, and employment forums. This helps students gain practical exposure and improve their employability during and after their studies.",
        "recognition": "Georgian American University is a well-established and globally recognized institution that follows international standards of higher education. Its affiliations and recognitions ensure that students receive a degree that is valid worldwide and opens doors to global career opportunities, especially in the medical field.\n\nAffiliations & Recognitions:\n- Accredited by the Ministry of Education and Science of Georgia, ensuring compliance with national academic standards\n- Recognized by the National Medical Commission (NMC), India, making Indian students eligible for licensing exams like FMGE/NExT\n- Listed in the World Health Organization (WHO) directory of medical institutions\n- Recognized by global bodies such as WFME, FAIMER, and ECFMG, enhancing international acceptance of the degree\n- Follows the Bologna Process, ensuring compatibility with European education standards and global mobility\n- Graduates are eligible to appear for international licensing exams like USMLE, PLAB, AMC, etc.\n\nAchievements:\n- Granted 6-year accreditation status, reflecting strong academic quality and institutional stability\n- Recognized as one of the fast-growing private universities in Georgia with increasing international student enrollment\n- Offers a globally accepted MD (MBBS equivalent) degree, enabling students to pursue careers worldwide\n- Maintains international collaborations with universities across Europe, Asia, and other regions, supporting student exchange and research programs\n- Known for its modern curriculum, practical training approach, and focus on clinical exposure\n- Provides a multicultural academic environment, attracting students from various countries",
        "hostelFacilities": "The university provides safe and well-equipped hostel and accommodation facilities for international students. Students have access to smart classrooms, advanced laboratories, libraries, and recreational areas. The city of Tbilisi is known for being safe, affordable, and student-friendly, and students enjoy safe accommodation options and Indian food availability.",
        "studentLife": "Student life at Georgian American University is dynamic, engaging, and well-balanced, offering students a perfect blend of academic learning and extracurricular activities. The university provides a multicultural and inclusive environment where students from different countries come together, creating a global atmosphere that enhances cultural exchange and personal growth. This diversity is especially beneficial for medical students, helping them develop communication skills and a broader understanding of different cultures.\n\nThe campus is equipped with modern infrastructure, including smart classrooms, advanced laboratories, libraries, and recreational areas. Students have access to all essential academic and non-academic facilities, ensuring a comfortable and productive learning environment. The university regularly organizes cultural festivals, sports events, competitions, and student club activities, allowing students to explore their talents and stay active beyond academics.\n\nInternational students enjoy a comfortable lifestyle with safe accommodation options, Indian food availability, and easy access to public transport, supermarkets, and cafes. The city of Tbilisi is known for being safe, affordable, and student-friendly, which makes it easier for students to adapt to life in a new country while focusing on their studies. Georgian American University also encourages students to participate in seminars, workshops, medical conferences, and research activities, helping them stay updated with the latest developments in the medical field.",
        "whyChooseUsIntro": "Choosing the right consultancy plays a crucial role in securing admission for MBBS abroad, and iExplain Education stands out as a trusted and student-focused partner. With its experience, transparency, and end-to-end support system, iExplain helps students achieve their dream of studying at top universities like Georgian American University without stress or confusion.",
        "whyChooseUs": [
            "Expert Guidance & Industry Experience: iExplain Education has extensive experience in guiding students for MBBS abroad and provides accurate, up-to-date information to help students make the right decisions.",
            "Student-Centric Approach: The consultancy focuses on each student’s profile, strengths, and career goals rather than promoting specific universities, ensuring the best possible outcome for every student.",
            "Complete Admission Assistance: From university selection to application, documentation, and final admission, iExplain offers end-to-end support, making the entire process smooth and hassle-free.",
            "Free Personalized Counseling: Students and parents can benefit from free counseling sessions (online/offline), helping them understand options and choose the best university based on budget and goals.",
            "Visa & Travel Support: iExplain provides assistance with visa processing, travel arrangements, and forex services, ensuring a smooth transition to Georgia.",
            "University & Country Selection: The team helps students choose the right country and university based on affordability, recognition, and career opportunities.",
            "Pre & Post-Departure Support: Support continues even after admission, including help with accommodation, international SIM cards, and settling abroad, ensuring students feel comfortable in a new environment."
        ],
        "documents": [
            { "document": "10th Marksheet & Certificate", "details": "Required for date of birth and academic verification" },
            { "document": "12th Marksheet & Certificate", "details": "Must include Physics, Chemistry, Biology with qualifying marks" },
            { "document": "NEET Scorecard", "details": "Mandatory for Indian students as per NMC guidelines" },
            { "document": "Valid Passport", "details": "Minimum 1–2 years validity with blank pages" },
            { "document": "Passport Size Photographs", "details": "Recent photos as per official specifications" },
            { "document": "Medical Fitness Certificate", "details": "Confirms physical and mental fitness" },
            { "document": "HIV Test Report", "details": "Required as per visa and university norms" },
            { "document": "Admission/Application Form", "details": "Properly filled and submitted online/offline" },
            { "document": "Offer/Invitation Letter", "details": "Issued by the university after acceptance" }
        ],
        "conclusion": "Pursuing MBBS at Georgian American University is a great opportunity for students who want to receive quality medical education at an affordable cost. The university offers a globally recognized MD degree, modern infrastructure, and a well-structured curriculum that combines theoretical knowledge with practical clinical training. Its English-medium program and student-friendly environment make it especially suitable for Indian and international students planning to study MBBS abroad.\n\nIn addition to strong academics, Georgian American University provides excellent student support, comfortable living conditions, and exposure to a multicultural environment. The emphasis on clinical practice, research opportunities, and skill development ensures that students are well-prepared for global medical careers and licensing exams such as FMGE/NExT, USMLE, and PLAB.\n\nOverall, Georgian American University stands out as a reliable and promising destination for MBBS abroad, offering the perfect balance of affordability, quality education, and international career opportunities. It is an ideal choice for aspiring doctors who want to build a successful future in the medical field.",
        "faqs": [
            { "question": "Is Georgian American University good for MBBS?", "answer": "Yes, Georgian American University is a well-recognized university offering quality medical education with modern infrastructure, experienced faculty, and global recognition, making it a good choice for MBBS abroad." },
            { "question": "What is the duration of MBBS at GAU?", "answer": "The MBBS (MD) program duration is 6 years, including 5 years of academic study and 1 year of internship." },
            { "question": "Is NEET required for admission?", "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines." },
            { "question": "What is the medium of instruction?", "answer": "The MBBS program is taught entirely in English, which is convenient for international students." },
            { "question": "What is the total fee for MBBS at GAU?", "answer": "The total cost is approximately ₹25–28 lakhs for the complete 6-year course (approximate and may vary)." },
            { "question": "Is the degree valid in India?", "answer": "Yes, the degree is valid in India after clearing the FMGE/NExT exam as per NMC rules." },
            { "question": "Are hostel facilities available?", "answer": "Yes, the university provides safe and well-equipped hostel and accommodation facilities for international students." },
            { "question": "When does the admission process start?", "answer": "Admissions generally begin from May–June and continue until September/October." },
            { "question": "Can students work while studying?", "answer": "Yes, students may have part-time work opportunities as per Georgian regulations, but studies should remain the priority." }
        ]
    },
    "al-farabi-kazakh-national-university": {
        "title": "Al-Farabi Kazakh National University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859795/Al-Farabi_Kazakh_National_University_kd0nfv.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774859796/Al-Farabi_Kazakh_National_University_2_q10avd.jpg",
        "intro": {
            "text": "Al-Farabi Kazakh National University is one of the most prestigious and top-ranked universities in Kazakhstan, located in the beautiful city of Almaty. Established in 1934, the university has built a strong reputation for academic excellence, research, and innovation. It is widely recognized globally and is considered a leading destination for higher education, especially for international students. For those planning MBBS in Al-Farabi Kazakh National University, it offers a perfect blend of quality education, affordability, and global exposure.\n\nThe university’s MBBS (General Medicine) program is designed according to international medical education standards, blending rigorous theoretical training with practical clinical exposure. The program is fully recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India, enabling Indian students to practice medicine in India after clearing the FMGE/NExT exam. The curriculum focuses on fundamental medical sciences, clinical subjects, and hands-on hospital training in affiliated teaching hospitals, ensuring students acquire the necessary skills to succeed in global licensing exams such as USMLE, PLAB, and FMGE.\n\nAl-Farabi Kazakh National University also emphasizes research, innovation, and academic excellence. The university is equipped with modern laboratories, advanced classrooms, digital libraries, and simulation centers to provide students with state-of-the-art learning facilities. Its experienced faculty members guide students through a research-oriented and practical approach to medicine, fostering critical thinking, problem-solving, and clinical competence.\n\nThe university’s multicultural campus environment supports international students throughout their journey. Comfortable hostels, Indian and international cuisine, healthcare facilities, and student support services ensure that students feel at home while studying MBBS in Kazakhstan, especially for those pursuing MBBS in Al-Farabi Kazakh National University. Additionally, the university encourages students to participate in cultural events, sports, and extracurricular activities, promoting overall development and a balanced student life."
        },
        "quickOverview": {
            "University Name": "Al-Farabi Kazakh National University",
            "Location": "Almaty",
            "Established Year": "1934",
            "University Type": "Public",
            "Course Offered": "MBBS (General Medicine)",
            "Medium of Instruction": "English",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "WHO, NMC, ECFMG",
            "Entrance Exam": "No (NEET required for Indian students)",
            "Eligibility": "10+2 with Physics, Chemistry, Biology (Minimum 50% for General Category)",
            "Hostel Facility": "Available"
        },
        "benefits": {
            "intro": "Choosing Al-Farabi Kazakh National University for pursuing MBBS in Abroad or specifically MBBS in Kazakhstan is a strategic decision for students seeking quality medical education at an internationally recognized institution. Here are the key reasons:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The MBBS (General Medicine) program is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India, ensuring graduates can practice medicine globally after clearing the FMGE/NExT exam."
                },
                {
                    "heading": "English-Medium Instruction",
                    "details": "The entire MBBS program is taught in English, making it easier for international students, particularly from India, to adapt and excel in their studies."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "Compared to many countries offering MBBS abroad, Al-Farabi Kazakh National University provides world-class education at a reasonable and cost-effective fee, making it an ideal choice for students planning MBBS in Abroad."
                },
                {
                    "heading": "Comprehensive Clinical Exposure",
                    "details": "Students receive hands-on training in affiliated hospitals from the early years of the program, gaining practical skills and real-world patient care experience."
                },
                {
                    "heading": "Experienced Faculty & Modern Infrastructure",
                    "details": "The university has highly qualified faculty members and advanced laboratories, classrooms, digital libraries, and simulation centers to ensure a quality learning environment."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "The multicultural campus and city of Almaty provide a secure, welcoming environment for international students. Hostels, Indian food options, healthcare, and student support services ensure a comfortable stay while studying MBBS in Kazakhstan."
                },
                {
                    "heading": "Career Opportunities & Global Recognition",
                    "details": "Graduates are well-prepared for international licensing exams like USMLE and PLAB, opening doors for medical careers in India, the USA, Europe, and other countries."
                },
                {
                    "heading": "Extracurricular & Cultural Activities",
                    "details": "The university encourages participation in sports, cultural events, and student organizations, fostering overall development and a vibrant student life."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (General Medicine) program at Al-Farabi Kazakh National University is a 6-year course designed according to international medical education standards. The curriculum combines theoretical knowledge, practical skills, and clinical exposure, making it ideal for students pursuing MBBS in Kazakhstan, especially those planning MBBS in Al-Farabi Kazakh National University.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry - Fundamentals of human body and basic medical sciences"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology - Study of diseases, microbes, and drugs"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "General Medicine, General Surgery, Community Medicine - Introduction to clinical subjects and patient care"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Pediatrics, Obstetrics & Gynecology, Psychiatry - Specialized clinical subjects with practical exposure"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "ENT, Ophthalmology, Dermatology, Radiology - Advanced diagnostics and clinical skills"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship & Clinical Rotations - Hands-on patient care in affiliated hospitals and practical training"
                }
            ]
        },
        "feesIntro": "The MBBS (General Medicine) fee structure at Al-Farabi Kazakh National University is affordable and competitive compared to many other countries offering MBBS in Abroad and MBBS in Kazakhstan. Fees may vary slightly based on currency changes and university updates.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                },
                {
                    "year": "4th Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                },
                {
                    "year": "5th Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                },
                {
                    "year": "6th Year",
                    "tuition": "$5,000 – $7,000",
                    "tuitionINR": "₹4.2 – ₹5.8 Lakhs",
                    "hostel": "$1,500 – $2,000",
                    "hostelINR": "₹1.3 – ₹1.7 Lakhs"
                }
            ]
        },
        "durationIntro": "The MBBS (General Medicine) program at Al-Farabi Kazakh National University has a total duration of 6 years, structured to provide both academic knowledge and practical clinical training. This duration aligns with international medical education standards and NMC requirements for Indian students pursuing MBBS in Abroad or specifically MBBS in Kazakhstan, especially those planning MBBS in Al-Farabi Kazakh National University.",
        "duration": {
            "headers": [
                "Particulars",
                "Duration"
            ],
            "table": [
                {
                    "Particulars": "Total Duration",
                    "Duration": "6 Years"
                },
                {
                    "Particulars": "Academic Study",
                    "Duration": "5 Years"
                },
                {
                    "Particulars": "Internship",
                    "Duration": "1 Year (Mandatory Clinical Training)"
                },
                {
                    "Particulars": "Medium of Instruction",
                    "Duration": "English"
                },
                {
                    "Particulars": "Clinical Exposure",
                    "Duration": "Starts from early years and increases progressively"
                },
                {
                    "Particulars": "Degree Awarded",
                    "Duration": "MD (Equivalent to MBBS in India)"
                }
            ]
        },
        "studentSupport": "Al-Farabi Kazakh National University offers extensive student support services to ensure that international students pursuing MBBS in Abroad and MBBS in Kazakhstan have a smooth, comfortable, and successful educational journey. The university’s student support system focuses on academic guidance, personal well-being, and professional development.\n\nFrom the initial stage, dedicated counselors assist students with admission guidance, document preparation, and visa processing. This ensures a hassle-free entry into the university. Once enrolled, students receive continuous academic support from experienced faculty who provide mentorship, tutoring, and regular performance assessments. Workshops, seminars, and exam preparation sessions are organized to help students excel academically and prepare for international medical licensing exams such as USMLE, PLAB, and FMGE/NExT.\n\nUnderstanding the challenges of living abroad, the university provides support in accommodation arrangements, cultural orientation, and day-to-day living essentials. Modern hostels with safe and comfortable facilities, access to Indian and international cuisine, healthcare services, and counseling ensure students feel at home while studying MBBS in Kazakhstan. Additionally, Al-Farabi Kazakh National University encourages students to participate in extracurricular activities, including sports, cultural programs, and community service. This fosters overall personal growth, leadership skills, and a sense of belonging on campus, especially for students pursuing MBBS in Al-Farabi Kazakh National University.",
        "recognition": "Al-Farabi Kazakh National University holds a strong reputation for academic excellence, global recognition, and international standards in medical education, making it a preferred destination for students pursuing MBBS in Abroad and MBBS in Kazakhstan.\n\nGlobal Recognition:\nThe university’s MBBS (General Medicine) program is recognized by the World Health Organization (WHO), ensuring that its medical degree is accepted and respected internationally. It is also listed in the World Directory of Medical Schools (WDOMS), which allows graduates to appear for global licensing examinations such as USMLE (United States Medical Licensing Examination) and PLAB (Professional and Linguistic Assessments Board) in the UK.\n\nRecognition by Indian Medical Authority:\nThe MBBS program is approved by the National Medical Commission (NMC) of India, enabling Indian students to practice medicine in India after clearing the FMGE/NExT screening test. This recognition makes the university an attractive choice for Indian medical aspirants looking to study MBBS in Abroad.\n\nAcademic Affiliations:\nAl-Farabi Kazakh National University maintains strong collaborations and academic partnerships with reputable universities and research institutions across Europe, Asia, and other regions. These affiliations enhance research opportunities, student exchange programs, and global exposure for students.",
        "hostelFacilities": "Accommodation facilities are modern and secure, offering comfortable hostels, Indian and international cuisine, and easy access to essential services. The university provides support services such as healthcare, counseling, and guidance for day-to-day living, ensuring that international students feel safe and at home while studying MBBS in Al-Farabi Kazakh National University.",
        "studentLife": "Student life at Al-Farabi Kazakh National University is vibrant, diverse, and designed to provide a well-rounded experience for students pursuing MBBS in Abroad and MBBS in Kazakhstan. The university emphasizes not only academic excellence but also personal growth, cultural engagement, and social development. The campus hosts a multicultural student community, with students from different countries sharing knowledge, experiences, and cultural traditions. This diversity enriches the learning environment, fosters global perspectives, and helps students develop interpersonal and cross-cultural communication skills.\n\nBeyond academics, the university encourages students to participate in a wide range of extracurricular activities. These include sports, cultural festivals, student organizations, debates, workshops, and community service programs. Such activities cultivate leadership qualities, teamwork, and creativity, contributing to overall personal development. The city of Almaty itself adds to student life, offering a lively environment with cultural attractions, scenic landscapes, shopping centers, and recreational areas. Students can explore the city during weekends, participate in local cultural events, or enjoy outdoor activities in the nearby mountains.",
        "whyChooseUsIntro": "iExplain Education is a trusted educational consultancy that offers comprehensive guidance to students aspiring to pursue MBBS in Abroad and specifically MBBS in Kazakhstan at renowned institutions like Al-Farabi Kazakh National University. Their professional support ensures a smooth, hassle-free, and successful admission process, especially for students planning MBBS in Al-Farabi Kazakh National University.",
        "whyChooseUs": [
            "Expert Guidance & Counseling: iExplain Education provides personalized counseling for selecting the right university and course based on a student’s academic profile, preferences, and budget. Their experienced counselors offer updated information on eligibility, admissions, and global medical career opportunities.",
            "Complete Admission Assistance: From filling out applications to securing the admission letter, iExplain Education handles all steps efficiently. Students receive step-by-step guidance to ensure no detail is overlooked, reducing the risk of errors or delays.",
            "Documentation & Visa Support: The consultancy assists students in preparing all required documents, attestation, and visa processing. This support simplifies the process and ensures compliance with both university and immigration requirements.",
            "Transparent & Reliable Process: iExplain Education provides accurate and transparent information about fees, eligibility, admission procedures, and global recognition of universities like Al-Farabi Kazakh National University, ensuring students make informed decisions without hidden charges.",
            "Pre-Departure & Post-Arrival Assistance: Students receive guidance for accommodation, travel arrangements, cultural orientation, and settling in Kazakhstan. This ensures a smooth transition and a comfortable start to their medical journey.",
            "Career Guidance & Exam Preparation: The consultancy supports students in preparing for international licensing exams such as USMLE, PLAB, and FMGE/NExT, helping them plan for successful medical careers globally.",
            "Free Counseling Services: Students can avail free counseling sessions to clarify doubts, compare universities, and make the best choice for their MBBS in Abroad journey."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of academic qualification and date of birth"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, and Biology subjects"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Valid Passport",
                "details": "Minimum validity of 6–18 months"
            },
            {
                "document": "Birth Certificate",
                "details": "Must be in English or officially translated"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after acceptance"
            },
            {
                "document": "Invitation Letter",
                "details": "Required for student visa processing"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "General health check-up report"
            }
        ],
        "conclusion": "Securing admission for MBBS in Abroad or MBBS in Kazakhstan at Al-Farabi Kazakh National University requires careful preparation and submission of all necessary documents. From academic certificates to medical fitness reports, passport details, and financial proof, each document plays a crucial role in both university admission and visa processing. This is especially important for students planning MBBS in Al-Farabi Kazakh National University. Keeping multiple copies—both physical and digital—of all documents is highly recommended to avoid delays or complications. Overall, Al-Farabi Kazakh National University offers a globally recognized medical education, modern infrastructure, and a supportive environment, making it an excellent choice for students pursuing MBBS in Abroad or MBBS in Kazakhstan.",
        "faqs": [
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS in Kazakhstan at Al-Farabi Kazakh National University."
            },
            {
                "question": "Can I apply without a passport?",
                "answer": "No, a valid passport is essential for admission and student visa processing."
            },
            {
                "question": "Do documents need to be in English?",
                "answer": "Yes, all documents must be in English or officially translated and attested."
            },
            {
                "question": "How long is the MBBS program?",
                "answer": "The MBBS program at Al-Farabi Kazakh National University is 6 years, including 5 years of academic study and 1 year of compulsory internship."
            },
            {
                "question": "Are original documents required?",
                "answer": "Yes, original documents are required for verification, while scanned copies may be submitted initially."
            },
            {
                "question": "Is a medical certificate necessary?",
                "answer": "Yes, a medical fitness certificate and HIV test report are mandatory for admission and visa purposes."
            },
            {
                "question": "What is the approximate fee structure?",
                "answer": "The total tuition fee for 6 years is approximately $30,000 – $42,000, with hostel and living expenses additional."
            },
            {
                "question": "Can I get Indian food at the university?",
                "answer": "Yes, the university provides Indian and international cuisine in hostels and campus cafeterias."
            },
            {
                "question": "Does the university provide student support?",
                "answer": "Yes, Al-Farabi Kazakh National University offers comprehensive support, including academic guidance, hostel facilities, visa assistance, and cultural orientation."
            },
            {
                "question": "Is the degree globally recognized?",
                "answer": "Yes, the MD degree (equivalent to MBBS) is recognized by WHO, NMC, and other international medical bodies, allowing graduates to practice medicine worldwide."
            }
        ]
    },
    "kazakh-national-medical-university": {
        "title": "Kazakh National Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774860203/Kazakh_National_erquhs.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774860203/Kazakh_National_2_bwlqha.jpg",
        "intro": {
            "text": "Kazakh National Medical University is one of the oldest and most prestigious medical universities in Kazakhstan, located in Almaty, the largest and most developed city of the country. Established in 1930, the university has a long-standing legacy of excellence in medical education, research, and healthcare training. Over the years, it has evolved into a leading national institution and was officially granted the status of a “National University” in 2001 due to its outstanding academic performance and contribution to the medical field.\n\nThe university offers a wide range of programs in general medicine (MBBS/MD), dentistry, pharmacy, pediatrics, and public health, attracting thousands of students from across the world. With more than 11,000 students and over 1,500 faculty members, KazNMU provides a strong academic environment supported by experienced professors, researchers, and healthcare professionals.\n\nKazakh National Medical University is widely recognized for its high-quality education, modern infrastructure, and advanced clinical training facilities. The university integrates theoretical knowledge with practical experience through its affiliated hospitals, simulation centers, and research institutes. This ensures that students gain real-world medical skills alongside classroom learning, making it a popular choice for students planning to pursue MBBS abroad.\n\nOne of the key strengths of KazNMU is its strong focus on research, innovation, and international collaboration. The university has partnerships with various global institutions, providing students with opportunities for academic exchange, research participation, and exposure to international medical standards."
        },
        "quickOverview": {
            "University Name": "Kazakh National Medical University",
            "Location": "Almaty, Kazakhstan",
            "Type": "Public (Government) University",
            "Established": "1930",
            "University Status": "National University (since 2001)",
            "Course Offered": "MBBS",
            "Medium of Instruction": "English & Russian",
            "Recognition": "Ministry of Education & Science of Kazakhstan, WHO, NMC (India)",
            "Duration of MBBS": "6 Years (including internship)",
            "Campus Facilities": "Modern classrooms, laboratories, research centers, hospitals, libraries",
            "Hostel/Accommodation": "On-campus hostel facilities available with basic amenities"
        },
        "benefits": {
            "intro": "Pursuing MBBS in Kazakh National Medical University is an excellent choice for students who are looking for quality medical education at an affordable cost. The university is one of the top medical institutions in the country and is highly preferred by international students planning MBBS in Kazakhstan due to its global recognition and strong academic foundation.",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The MBBS (MD) degree is recognized by international organizations such as the World Health Organization (WHO) and approved by the National Medical Commission (NMC), making it valid for Indian students after qualifying required exams."
                },
                {
                    "heading": "Affordable Fee Structure",
                    "details": "One of the biggest advantages of studying at KazNMU is its low tuition fees compared to private medical colleges in India and other countries, making it a top destination for MBBS in Kazakhstan."
                },
                {
                    "heading": "English-Medium Program",
                    "details": "The university offers MBBS in English medium, which makes it easier for international students to study without language barriers."
                },
                {
                    "heading": "Experienced Faculty",
                    "details": "KazNMU has a team of highly qualified and experienced professors, including doctors and researchers who provide quality education and practical insights."
                },
                {
                    "heading": "Advanced Infrastructure",
                    "details": "The university is equipped with modern laboratories, research centers, libraries, and simulation labs, providing students with a high-quality learning environment."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students receive hands-on clinical training in affiliated hospitals, which is essential for developing real-world medical skills. This makes it a preferred choice for students pursuing MBBS in Kazakhstan."
                },
                {
                    "heading": "International Student Community",
                    "details": "KazNMU hosts students from different countries, creating a multicultural environment that enhances global exposure and networking opportunities."
                },
                {
                    "heading": "Safe & Student-Friendly Environment",
                    "details": "Almaty is a safe, modern, and student-friendly city, offering a comfortable lifestyle for international students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Kazakh National Medical University is a 6-year course that includes pre-clinical, para-clinical, and clinical studies, followed by a compulsory internship. The curriculum is designed according to international medical education standards and focuses on both theoretical knowledge and practical training.",
        syllabus: {
            headers: ["Year", "Subjects Covered"],
            table: [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Medical Chemistry, Biophysics, Physiology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Anatomy, Histology, Medical Chemistry, Biophysics, Physiology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pathophysiology, Clinical Anatomy, Forensic Medicine, Public Health"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, Psychiatry"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Neurology, Oncology, Dermatology, ENT, Ophthalmology, Emergency Medicine"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship / Clinical Rotations"
                }
            ]
        },
        "feesIntro": "Pursuing MBBS in Kazakh National Medical University is considered affordable for Indian students, especially those planning MBBS in Kazakhstan. The university offers a budget-friendly fee structure with consistent tuition fees across all years and reasonable hostel charges.",
        "fees": {
            "structure": [
                {
                    "year": "Tuition Fee (per year)",
                    "tuition": "₹4,80,000 – ₹5,00,000",
                    "total": "₹28 – ₹30 Lakhs (Total 6 Years)"
                },
                {
                    "year": "Hostel Fee (per year)",
                    "tuition": "₹60,000 – ₹85,000",
                    "total": "₹3.5 – ₹5 Lakhs (Total 6 Years)"
                },
                {
                    "year": "Total Cost (per year)",
                    "tuition": "₹5,40,000 – ₹5,90,000",
                    "total": "₹32 – ₹36 Lakhs (Total 6 Years)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Kazakh National Medical University has a total duration of 6 years, designed to provide a strong foundation in medical sciences along with extensive clinical training. The course structure follows international medical education standards and is suitable for students planning MBBS in Kazakhstan.",
        "duration": {
            "headers": [
                "Particulars",
                "Details"
            ],
            "table": [
                {
                    "Particulars": "Total Duration",
                    "Details": "6 Years"
                },
                {
                    "Particulars": "Academic Study",
                    "Details": "5 Years"
                },
                {
                    "Particulars": "Internship",
                    "Details": "1 Year (Mandatory Clinical Training)"
                },
                {
                    "Particulars": "Medium of Instruction",
                    "Details": "English & Russian"
                },
                {
                    "Particulars": "Clinical Exposure",
                    "Details": "Starts from early years and increases gradually"
                }
            ]
        },
        "studentSupport": "Kazakh National Medical University offers a well-developed and student-oriented support system to ensure that both local and international students have a smooth academic and personal experience throughout their MBBS journey. The university focuses on providing academic guidance, administrative assistance, and personal support to help students adapt easily to a new environment.\n\nOne of the key highlights is the Student Service Center, which works on a “one-stop solution” model, providing all essential services such as documentation, academic assistance, and administrative support under one roof. This center ensures transparency, efficiency, and quick resolution of student queries, making the overall experience hassle-free.\n\nThe university also has an Academic Skills Development Sector, which supports students through mentoring, tutoring, and individual consultations. It helps students improve academic writing, time management, exam preparation, and learning strategies. Regular workshops, webinars, and training sessions are conducted to enhance students’ academic performance and confidence.\n\nFor international students, KazNMU provides dedicated support through organizations like the Association of International Students, which assists with academic challenges, cultural adaptation, and social integration. This ensures that students coming from abroad feel comfortable and supported in a new country. The university also promotes student well-being and representation through Student Dean’s Offices and student councils, which act as a bridge between students and university administration.",
        "recognition": "Kazakh National Medical University is one of the most reputed medical institutions in Kazakhstan, known for its strong academic standards, global recognition, and long-standing contribution to medical education and research. Its affiliations and recognitions ensure that students receive a globally accepted medical degree with wide career opportunities.\n\nAffiliations & Recognitions:\n- Recognized by the Ministry of Education and Science of Kazakhstan, ensuring compliance with national academic standards\n- Listed in the World Directory of Medical Schools (WDOMS), which is supported by the World Health Organization (WHO)\n- Approved by the National Medical Commission (NMC), India, allowing Indian students to appear for FMGE/NExT and practice in India after qualification\n- Recognized by international bodies such as WFME (World Federation for Medical Education)\n- Listed with FAIMER (Foundation for Advancement of International Medical Education and Research)\n- Recognized by ECFMG (Educational Commission for Foreign Medical Graduates, USA), enabling students to pursue medical licensing exams like USMLE\n- Accredited by UNESCO, reflecting its commitment to global educational standards\n\nAchievements:\n- Established in 1930, making it one of the oldest and most prestigious medical universities in Kazakhstan\n- Granted “National University” status in 2001 due to its excellence in education and research\n- Ranked in QS EECA (Emerging Europe & Central Asia) rankings, highlighting its regional academic reputation\n- Home to over 11,000 students and 1,500+ faculty members, ensuring a strong academic ecosystem\n- Known for its advanced research facilities, modern laboratories, and clinical training centers\n- Maintains international collaborations with universities and medical institutions worldwide, promoting student exchange and research opportunities\n- Produces highly skilled medical professionals working across different countries",
        "hostelFacilities": "The university provides safe and affordable hostel accommodation with all basic amenities. On-campus hostel facilities are available for international students. Students enjoy a comfortable lifestyle with safe hostel accommodations, Indian food availability, and easy access to public transport, shopping centers, and cafes. The city of Almaty is known for its scenic beauty, safety, and student-friendly environment.",
        "studentLife": "Student life at Kazakh National Medical University is vibrant, diverse, and enriching, offering students a perfect balance between academics and extracurricular activities. The university provides a multicultural environment where students from different countries come together, creating a global atmosphere that promotes cultural exchange, friendship, and personal growth. This diversity is especially beneficial for medical students as it enhances communication skills and broadens their perspective.\n\nThe campus is equipped with modern infrastructure, including advanced classrooms, well-equipped laboratories, libraries, research centers, and sports facilities. Students have access to all essential resources that support both academic excellence and relaxation. The university regularly organizes cultural programs, sports events, competitions, and student club activities, encouraging students to participate actively and develop their talents beyond academics.\n\nInternational students enjoy a comfortable lifestyle with safe hostel accommodations, Indian food availability, and easy access to public transport, shopping centers, and cafes. The city of Almaty is known for its scenic beauty, safety, and student-friendly environment, making it easier for students to adapt and enjoy their stay while pursuing MBBS in Kazakhstan. Kazakh National Medical University also encourages students to take part in seminars, workshops, medical conferences, and research activities, helping them stay updated with the latest advancements in the medical field. Students gain valuable clinical exposure and practical training through affiliated hospitals, which enhances their overall learning experience.",
        "whyChooseUsIntro": "Choosing the right consultancy is a crucial step for students planning MBBS in Kazakhstan, and iExplain Education stands out as a reliable and student-focused partner. With its strong experience, transparent approach, and complete support system, iExplain ensures a smooth admission process for universities like Kazakh National Medical University.",
        "whyChooseUs": [
            "Expert Guidance & Industry Experience: iExplain Education has years of experience in guiding students for MBBS abroad and helps them choose the best university based on their profile and career goals.",
            "Student-Centric Approach: Unlike many consultancies, iExplain focuses on the student’s needs, strengths, and future goals, ensuring personalized guidance rather than pushing specific universities.",
            "Complete Admission Assistance: From university selection, application, and documentation to final admission, iExplain provides end-to-end support, making the process simple and hassle-free.",
            "Free Counseling Sessions: Students and parents can avail free expert counseling to understand options, eligibility, and the best pathway for MBBS abroad.",
            "Visa & Travel Support: The consultancy assists with visa processing, travel arrangements, and forex services, ensuring a smooth transition to Kazakhstan.",
            "Pre & Post-Departure Support: iExplain supports students even after admission by helping with accommodation, international SIM cards, and settling abroad, ensuring a comfortable experience.",
            "Wide Range of Services: Services include career counseling, university selection, scholarships, education loans, and test preparation, making it a one-stop solution.",
            "Transparent & Ethical Process: iExplain follows a clear and honest process with accurate information and no hidden charges, building trust among students and parents."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Required for academic verification and date of birth proof"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology with qualifying marks"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Valid Passport",
                "details": "Original passport with sufficient validity"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Confirmed by a registered medical practitioner"
            },
            {
                "document": "Application Form",
                "details": "Properly filled admission form submitted online/offline"
            },
            {
                "document": "Invitation/Offer Letter",
                "details": "Issued by the university after acceptance"
            }
        ],
        "conclusion": "Pursuing MBBS at Kazakh National Medical University is a highly rewarding opportunity for students who want to build a successful career in the medical field. With its long-standing reputation, global recognition, and commitment to academic excellence, the university provides a strong foundation for aspiring doctors. The well-structured curriculum, experienced faculty, and advanced clinical training ensure that students gain both theoretical knowledge and practical skills required in modern healthcare.\n\nOne of the major advantages of choosing Kazakh National Medical University is its affordable fee structure, making it an ideal option for students who wish to pursue MBBS in Kazakhstan without compromising on quality education. The availability of English-medium programs, modern infrastructure, and exposure to real hospital environments further enhances the overall learning experience.\n\nIn addition to academics, the university offers a safe and student-friendly environment in Almaty, along with excellent support services for international students. This helps students adjust easily to a new country while focusing on their studies and personal growth. The multicultural atmosphere also provides global exposure and helps in developing communication and interpersonal skills.",
        "faqs": [
            {
                "question": "Is Kazakh National Medical University good for MBBS?",
                "answer": "Yes, Kazakh National Medical University is one of the top medical universities in Kazakhstan, known for its quality education, experienced faculty, and global recognition."
            },
            {
                "question": "What is the duration of MBBS at KazNMU?",
                "answer": "The MBBS (MD) program duration is 6 years, including 5 years of academic study and 1 year of internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS program is taught in English, and in some cases also in Russian, depending on the batch."
            },
            {
                "question": "What is the total fee for MBBS?",
                "answer": "The total MBBS cost is approximately ₹32–36 lakhs for the complete 6-year course (approximate and may vary)."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is valid in India after clearing the FMGE/NExT exam as per NMC rules."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides safe and affordable hostel accommodation with all basic amenities."
            },
            {
                "question": "When does the admission process start?",
                "answer": "Admissions generally begin from May–June and continue until September/October."
            },
            {
                "question": "Can students work while studying?",
                "answer": "Yes, students may get part-time work opportunities as per local regulations, but academics should be the main priority."
            }
        ]
    },
    "astana-medical-university": {
        "title": "Astana Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Astana_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Astana_Mobile.webp",
        "intro": {
            "text": "Astana Medical University is a prestigious and globally recognized medical institution located in Astana, the capital of Kazakhstan. Established in 1964 and later granted university status in 2009, it has grown into one of the leading medical universities in the country, known for its excellence in medical education and research.\n\nPursuing MBBS in Astana Medical University is an excellent choice for international students, especially those looking for high-quality education at an affordable cost. The university offers modern infrastructure, experienced faculty, and advanced clinical training, ensuring students gain strong theoretical knowledge along with practical exposure.\n\nThe MBBS program is designed according to international standards and is available in English medium, making it convenient for Indian and other international students. The university is recognized by global medical bodies such as World Health Organization (WHO) and National Medical Commission (NMC), which allows graduates to pursue medical careers worldwide.\n\nWith its strong academic reputation, global collaborations, and student-friendly environment, Astana Medical University has become a popular destination for students aiming to study MBBS in Kazakhstan.\n\nApart from academics, Astana Medical University provides a supportive and student-friendly environment, with comfortable hostels, modern libraries, sports facilities, and extracurricular opportunities that contribute to holistic development. The university also encourages research, international collaboration, and participation in medical conferences, which enhances students’ knowledge and professional growth.\n\nOverall, Astana Medical University is considered one of the top choices for students seeking an affordable yet globally recognized medical education in Kazakhstan. Its combination of quality teaching, advanced infrastructure, international recognition, and a multicultural environment makes it an ideal destination for pursuing MBBS in abroad."
        },
        "quickOverview": {
            "Established": "1964 (University status in 2009)",
            "Location": "Astana, Kazakhstan",
            "Programs Offered": "MBBS",
            "Medium of Instruction": "English",
            "Recognition": "WHO, NMC (India), Ministry of Health Kazakhstan",
            "Faculty": "Experienced professors and medical specialists",
            "Infrastructure": "Modern classrooms, laboratories, teaching hospitals, research centers",
            "Hostel & Accommodation": "Well-furnished hostels with modern facilities",
            "International Students": "Large community of Indian, Nepalese, and other international students",
            "Clinical Training": "Collaboration with leading hospitals in Astana for practical exposure"
        },
        "benefits": {
            "intro": "Choosing the right university is a crucial step for any aspiring doctor, and Astana Medical University in Astana offers numerous advantages for students aiming to pursue MBBS abroad. Here are the key reasons why it stands out:",
            "items": [
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The MBBS program at Astana Medical University is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), among other international medical councils. This recognition allows graduates to appear for licensing exams and practice medicine in multiple countries worldwide."
                },
                {
                    "heading": "Affordable Tuition and Living Costs",
                    "details": "Compared to many European, American, and even Asian medical universities, Astana Medical University offers quality education at a very reasonable cost. Tuition fees, hostel charges, and living expenses are budget-friendly, making it accessible for Indian and other international students."
                },
                {
                    "heading": "English Medium MBBS Program",
                    "details": "The MBBS course is offered in English, which removes the language barrier for international students. Indian students, in particular, can pursue their medical education without needing prior knowledge of Kazakh or Russian languages."
                },
                {
                    "heading": "Experienced Faculty and Advanced Curriculum",
                    "details": "The university has highly qualified professors and medical specialists who focus on both theoretical knowledge and practical training. The MBBS curriculum is designed according to international standards, ensuring students gain a strong foundation in all areas of medicine."
                },
                {
                    "heading": "Modern Infrastructure and Facilities",
                    "details": "Astana Medical University provides state-of-the-art laboratories, advanced classrooms, well-equipped hospitals, and research centers. Students get hands-on exposure through clinical rotations and hospital attachments, preparing them for real-world medical practice."
                },
                {
                    "heading": "Supportive Environment for International Students",
                    "details": "The university has a large community of Indian, Nepalese, and other international students. Hostel facilities, cultural support, and dedicated student services ensure a smooth transition and comfortable stay for students from abroad."
                },
                {
                    "heading": "Opportunities for Research and Global Exposure",
                    "details": "Astana Medical University encourages students to participate in research projects, medical conferences, and international collaborations, providing exposure to the latest developments in the medical field."
                },
                {
                    "heading": "Safe and Student-Friendly City",
                    "details": "Astana, the capital city of Kazakhstan, is modern, safe, and well-connected, providing a peaceful environment for study. The city offers good transportation, shopping, recreational facilities, and a multicultural atmosphere."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Astana Medical University is a 6-year course that includes pre-clinical, para-clinical, and clinical studies, followed by a compulsory internship. The curriculum is designed according to international medical education standards and focuses on both theoretical knowledge and practical training.",

        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Medical Chemistry, Biophysics, Physiology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Anatomy, Histology, Medical Chemistry, Biophysics, Physiology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pathophysiology, Clinical Anatomy, Forensic Medicine, Public Health"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, Psychiatry"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Neurology, Oncology, Dermatology, ENT, Ophthalmology, Emergency Medicine"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship / Clinical Rotations"
                }
            ]
        },
        "feesIntro": "Astana Medical University offers high-quality medical education at an affordable cost, making it a popular choice for international students, especially from India. The fee structure includes tuition, hostel, medical insurance, and other necessary charges. While tuition fees cover the academic program, hostel and mess charges ensure comfortable living for students. Below is the detailed breakdown of the MBBS fees for international students:",
        "fees": {
            "structure": [
                {
                    "year": "Tuition Fee",
                    "tuition": "USD 4,000 – 5,600 (Annual)",
                    "total": "USD 24,000 – 33,600 (6-Year Total)"
                },
                {
                    "year": "Hostel Fee",
                    "tuition": "USD 800 – 1,200 (Annual)",
                    "total": "USD 4,800 – 7,200 (6-Year Total)"
                }
            ]
        },
        "durationIntro": "Pursuing MBBS in Astana Medical University is a great choice for students aiming to study medicine abroad. The total duration of the MBBS program in Kazakhstan is 6 years, which includes 5 years of academic study followed by 1 year of compulsory internship. This duration is structured to provide a strong foundation in pre-clinical, para-clinical, and clinical subjects, along with practical exposure in hospitals, preparing students for a successful medical career both in Kazakhstan and internationally.",
        "duration": {
            "headers": [
                "Year",
                "Program Focus",
                "Description"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Program Focus": "Pre-Clinical",
                    "Description": "Basic medical sciences including Anatomy, Physiology, and Biochemistry to build a strong foundation."
                },
                {
                    "Year": "2nd Year",
                    "Program Focus": "Pre-Clinical / Para-Clinical",
                    "Description": "Pathology, Microbiology, Pharmacology, Immunology, and introduction to forensic medicine and ethics."
                },
                {
                    "Year": "3rd Year",
                    "Program Focus": "Clinical Introduction",
                    "Description": "Introduction to clinical subjects such as General Medicine, Surgery, Pediatrics, Obstetrics & Gynecology."
                },
                {
                    "Year": "4th Year",
                    "Program Focus": "Clinical Studies",
                    "Description": "Advanced study of Medicine, Surgery, Pediatrics, OBG, ENT, Ophthalmology, Psychiatry with hospital training."
                },
                {
                    "Year": "5th Year",
                    "Program Focus": "Clinical Rotations",
                    "Description": "Hands-on experience in all major departments, ward rounds, surgeries, and patient management."
                },
                {
                    "Year": "6th Year",
                    "Program Focus": "Internship",
                    "Description": "Full-time rotational internship in affiliated hospitals, performing practical procedures and managing real patients."
                }
            ]
        },
        "studentSupport": "Astana Medical University places great emphasis on providing comprehensive student support to ensure a seamless academic and personal experience for international students pursuing MBBS in Kazakhstan, particularly those enrolled for MBBS in Astana Medical University. Right from the admission process, the university offers extensive assistance, including guidance on filling out admission forms, submitting academic documents, obtaining medical fitness certificates, and completing visa procedures. Students also receive advice on travel arrangements, airport pickup, and settling in the city of Astana, making their transition to a new country smooth and stress-free.\n\nOnce on campus, the university’s International Student Office provides continuous support for hostel accommodation, medical insurance, and orientation programs designed to familiarize students with the university’s academic system, facilities, and local culture. Dedicated counselors and mentors are available to address any academic, social, or personal challenges, ensuring that students feel supported at every stage of their journey. Academic support is robust, with highly experienced faculty offering guidance, doubt-clearing sessions, and practical demonstrations in both pre-clinical and clinical subjects.\n\nMoreover, Astana Medical University fosters a vibrant campus life that balances education with personal development. Students have access to extracurricular activities, sports facilities, cultural programs, student clubs, and workshops, which help them integrate socially and build leadership and teamwork skills. The university also encourages participation in medical seminars, conferences, and research projects, providing opportunities for professional growth and exposure to the latest advancements in medicine.\n\nFor international students pursuing MBBS in Kazakhstan, including those at Astana Medical University, the support system extends beyond academics. Health and wellness services, counseling, and mentorship programs ensure that students maintain a healthy lifestyle and adapt comfortably to life in a foreign country. The university also facilitates communication between students and faculty, as well as between students and administrative departments, ensuring that queries and issues are resolved promptly.",
        "recognition": "Astana Medical University is one of the leading medical institutions in Astana, offering internationally recognized programs for students pursuing MBBS in Kazakhstan, including the highly sought-after MBBS in Astana Medical University. The university holds accreditation and recognition from several prestigious national and international medical bodies, ensuring that its graduates are eligible to practice medicine worldwide.\n\nThe university is officially recognized by the World Health Organization (WHO), which lists it in the World Directory of Medical Schools, providing global recognition for its MBBS program. Additionally, it is recognized by the National Medical Commission (NMC) of India, making it a preferred choice for Indian students who wish to study medicine abroad while retaining eligibility to practice in India after passing the FMGE/NExT examination. Recognition by the Ministry of Health of Kazakhstan further strengthens the university’s credibility, guaranteeing that the curriculum adheres to the highest national standards in medical education.\n\nAstana Medical University is affiliated with several leading hospitals and medical centers in Kazakhstan, allowing students pursuing MBBS in Kazakhstan to gain extensive practical exposure through clinical rotations, internships, and hands-on patient care. These affiliations not only enhance the learning experience but also prepare students for real-world medical practice.\n\nOver the years, the university has achieved several milestones in academic excellence, research, and international collaboration. It has developed partnerships with global institutions, enabling students and faculty to participate in research projects, medical conferences, and exchange programs. The university has consistently produced highly competent medical graduates who have gone on to excel in hospitals, research institutions, and public health organizations worldwide.\n\nThe achievements of Astana Medical University reflect its commitment to providing quality medical education and fostering an environment of innovation and research. Its focus on academic rigor, clinical proficiency, and global recognition makes it one of the top destinations for students aspiring for MBBS in Kazakhstan. For international students, especially those seeking MBBS in Astana Medical University, this ensures not only a solid academic foundation but also international career opportunities in the field of medicine.",
        "hostelFacilities": "The university provides well-furnished hostels with modern amenities, food facilities, and a safe living environment for international students. Hostel facilities include comfortable living conditions and dedicated student services to ensure a smooth transition. Cultural support and a safe, student-friendly city environment in Astana further enhance the accommodation experience, providing students with peaceful surroundings for their studies.",
        "studentLife": "Student life at Astana Medical University is vibrant, inclusive, and designed to provide a well-rounded experience for those pursuing MBBS in Kazakhstan, especially international students enrolled in MBBS in Astana Medical University. Beyond academics, the university emphasizes the holistic development of students, ensuring that they thrive both personally and professionally during their medical education journey.\n\nCampus life is highly dynamic, with a diverse student body representing multiple countries, cultures, and backgrounds. This multicultural environment helps students develop a global perspective while building strong interpersonal and communication skills. Students have access to modern lecture halls, state-of-the-art laboratories, libraries, and research centers, which complement classroom learning and enhance practical understanding.\n\nAstana Medical University also promotes extracurricular engagement through a variety of clubs, cultural activities, sports, and community service programs. Students can participate in sports tournaments, music and dance events, debate competitions, and health awareness campaigns, which foster teamwork, leadership, and creativity. These activities allow students pursuing MBBS in Kazakhstan to maintain a balanced lifestyle, combining rigorous academics with recreation and personal growth.\n\nThe university encourages student participation in medical seminars, conferences, and workshops, offering exposure to the latest developments in the medical field. Clinical rotations and hospital attachments provide practical experience, enabling students of MBBS in Astana Medical University to apply theoretical knowledge in real-world medical settings. The university’s strong mentorship and guidance programs ensure that students receive support for academics, career planning, and personal challenges.",
        "whyChooseUsIntro": "When planning to pursue MBBS in Astana Medical University or MBBS in Kazakhstan, iExplain Education provides complete guidance and support. Here’s why students prefer us:",
        "whyChooseUs": [
            "Complete Admission Assistance – End-to-end support for securing admission in MBBS in Astana Medical University.",
            "Expert Counseling – Personalized guidance on choosing the right university, course, and study plan.",
            "Documentation Support – Help with application forms, academic certificates, passport, visa, and other essential documents.",
            "Visa & Financial Guidance – Assistance in processing student visas and planning tuition, hostel, and living expenses.",
            "University Connections – Strong partnerships with Astana Medical University for smooth and priority application processing.",
            "Pre-Departure Support – Guidance on travel, accommodation, and settling in Kazakhstan.",
            "Ongoing Student Support – Mentorship and support even after admission to ensure academic and personal success.",
            "Trusted Experience – Years of experience in helping international students pursue MBBS in Kazakhstan successfully."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled official application form of Astana Medical University."
            },
            {
                "document": "Passport",
                "details": "Valid passport with minimum 18 months validity."
            },
            {
                "document": "10th / Secondary School Certificate",
                "details": "Proof of completion of secondary education with marksheet."
            },
            {
                "document": "12th / Higher Secondary Certificate",
                "details": "Completion certificate of 12th grade with subjects Physics, Chemistry, and Biology. Minimum 50% marks required."
            },
            {
                "document": "Birth Certificate",
                "details": "Official birth certificate or equivalent proof of date of birth."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Certificate from a registered medical practitioner confirming good health."
            },
            {
                "document": "HIV / Blood Test Reports",
                "details": "Mandatory medical tests as required by the university for visa processing."
            },
            {
                "document": "Visa Invitation Letter",
                "details": "Issued by the university after acceptance of admission application."
            },
            {
                "document": "Financial Documents / Bank Statement",
                "details": "Proof of sufficient funds to cover tuition, hostel, and living expenses."
            },
            {
                "document": "NEET Certificate (for Indian Students)",
                "details": "Required for Indian students to comply with NMC eligibility."
            }
        ],
        "conclusion": "Pursuing MBBS in Astana Medical University is an excellent opportunity for students aspiring to build a successful medical career while studying MBBS in Kazakhstan. With its globally recognized degree, modern infrastructure, experienced faculty, and comprehensive student support, the university offers an ideal environment for academic and personal growth.\n\nThe university not only provides a strong foundation in pre-clinical and clinical subjects but also emphasizes practical exposure through hospital rotations and internships. Affordable tuition fees, quality hostel facilities, and a safe multicultural environment make it an attractive choice for international students.\n\nChoosing iExplain Education as your admission partner ensures smooth guidance through the entire process, from documentation and visa assistance to travel and settlement support. With our expert mentorship, students can confidently embark on their journey to study MBBS in Kazakhstan at Astana Medical University and prepare for a successful future in the medical profession.",
        "faqs": [
            {
                "question": "Is Astana Medical University recognized by WHO and NMC?",
                "answer": "Yes, Astana Medical University is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India, allowing Indian students to practice medicine in India after passing the FMGE/NExT exam."
            },
            {
                "question": "What is the duration of MBBS in Astana Medical University?",
                "answer": "The MBBS program in Astana Medical University is 6 years long, including 5 years of academic study and 1 year of compulsory internship, in line with international standards for MBBS in Kazakhstan."
            },
            {
                "question": "What is the medium of instruction for MBBS at Astana Medical University?",
                "answer": "The MBBS course is taught in English, making it convenient for international students, especially from India, to pursue MBBS in Kazakhstan."
            },
            {
                "question": "What documents are required for admission in MBBS in Astana Medical University?",
                "answer": "Students need academic certificates (10th & 12th), NEET certificate (for Indian students), passport, medical fitness certificate, HIV/blood test reports, financial documents, and passport-size photographs, among others."
            },
            {
                "question": "How much is the annual tuition fee for MBBS in Astana Medical University?",
                "answer": "The tuition fee ranges from USD 4,000 – 5,600 per year, and the hostel fee is approximately USD 800 – 1,200 per year, making it affordable compared to many European medical universities."
            },
            {
                "question": "Is NEET mandatory for Indian students?",
                "answer": "Yes, Indian students must qualify for NEET to be eligible for admission in MBBS in Kazakhstan, including at Astana Medical University."
            },
            {
                "question": "Are there hostel facilities for international students?",
                "answer": "Yes, the university provides well-furnished hostels with modern amenities, food facilities, and a safe living environment for international students pursuing MBBS in Kazakhstan."
            },
            {
                "question": "Can Indian students practice in India after completing MBBS in Astana Medical University?",
                "answer": "Yes, graduates must clear the FMGE/NExT exam conducted by the NMC to practice medicine in India after completing MBBS in Astana Medical University."
            },
            {
                "question": "What kind of student support is available at Astana Medical University?",
                "answer": "The university offers comprehensive support, including academic mentorship, hostel assistance, counseling, visa guidance, cultural orientation, and extracurricular opportunities, ensuring a smooth experience for students studying MBBS in Kazakhstan."
            },
            {
                "question": "Why should I choose iExplain Education for admission?",
                "answer": "iExplain Education provides complete guidance for admission in MBBS in Astana Medical University, including documentation, visa processing, financial planning, pre-departure briefings, and ongoing support, ensuring a hassle-free journey to study MBBS in Kazakhstan."
            }
        ]
    },
    "south-kazakhstan-medical-academy": {
        "title": "South Kazakhstan Medical Academy",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/SKMA_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/SKMA_Mobile.webp",
        "intro": {
            "text": "South Kazakhstan Medical Academy (SKMA) is one of the oldest and most respected medical institutions in Shymkent, Kazakhstan, established in 1979 with the mission to provide high‑quality medical, pharmaceutical, and healthcare education to students from around the world. As a government‑funded university operating under the Ministry of Education and Science of the Republic of Kazakhstan, it has built a strong reputation for academic excellence, modern infrastructure, and practical training opportunities.\n\nSouth Kazakhstan Medical Academy offers a range of programs in medicine, dentistry, pharmacy, public health, pediatrics, and nursing, attracting both local and international students seeking MBBS in Kazakhstan and other healthcare degrees. The academy emphasizes a balanced blend of theoretical knowledge and practical clinical exposure to prepare students for real‑world medical challenges.\n\nFor international students, MBBS in South Kazakhstan Medical Academy is particularly appealing due to its affordable fee structure, English‑medium instruction (with local language support), and supportive learning environment. The academy also maintains academic partnerships with institutions in Europe, Russia, and other countries, enhancing the global exposure and research opportunities available to its students.\n\nWith decades of experience in medical education and a diverse multicultural student community, South Kazakhstan Medical Academy continues to be a preferred choice for students aspiring to pursue a medical career through MBBS in Kazakhstan, especially from countries like India."
        },
        "quickOverview": {
            "Official Name": "South Kazakhstan Medical Academy (SKMA)",
            "Location": "Shymkent, Kazakhstan",
            "Established": "1979",
            "University Type": "Public / Government Medical University",
            "Recognition & Approval": "Recognized by NMC (India), WHO, WDOMS, Ministry of Education & Science (Kazakhstan)",
            "Courses Offered": "MBBS (General Medicine), Dentistry, Pharmacy, Nursing, Postgraduate & Doctoral Programs",
            "Medium of Instruction": "English (for international students), Russian & Kazakh",
            "MBBS Duration": "6 Years (5 Years Academic + 1 Year Internship)",
            "Admission Intake": "September / October",
            "Global Recognition": "Eligible for FMGE/NExT, USMLE, PLAB (after clearing exams)",
            "Campus Facilities": "Modern labs, libraries, simulation centers, hospitals for clinical training",
            "Degree Validity": "Valid globally (subject to licensing exams of respective country)"
        },
        "benefits": {
            "intro": "Choosing MBBS in South Kazakhstan Medical Academy is a great decision for students who want quality medical education at an affordable cost. Below are detailed points explaining why SKMA is a popular choice among Indian students:",
            "items": [
                {
                    "heading": "Affordable Fee Structure",
                    "details": "One of the biggest advantages of studying MBBS at South Kazakhstan Medical Academy is its low tuition fees. Compared to private medical colleges in India, students can complete their entire MBBS course at a much lower cost. This makes it an excellent option for middle-class families looking for budget-friendly medical education abroad."
                },
                {
                    "heading": "Globally Recognized Medical Degree",
                    "details": "The MBBS degree from South Kazakhstan Medical Academy is recognized by top global medical bodies like NMC (India), WHO, and WDOMS. This allows graduates to appear for international licensing exams such as FMGE/NExT (India), USMLE (USA), and PLAB (UK), opening global career opportunities."
                },
                {
                    "heading": "No Donation or Capitation Fee",
                    "details": "Unlike many private medical colleges in India, SKMA does not require any donation or capitation fee. Students can secure admission purely based on their academic qualifications and NEET score."
                },
                {
                    "heading": "Simple Admission Process",
                    "details": "The admission process is straightforward and hassle-free. There are no additional entrance exams like IELTS or TOEFL required. Students only need to qualify NEET (for Indian applicants) and meet basic eligibility criteria."
                },
                {
                    "heading": "English Medium Education",
                    "details": "MBBS is taught in English, especially for international students, ensuring there is no language barrier. This helps students understand complex medical concepts easily and perform well academically."
                },
                {
                    "heading": "Experienced Faculty & Quality Education",
                    "details": "The academy has highly qualified professors and medical professionals who provide in-depth theoretical and practical knowledge. The curriculum follows international standards, ensuring students receive high-quality medical education."
                },
                {
                    "heading": "Modern Infrastructure & Advanced Laboratories",
                    "details": "South Kazakhstan Medical Academy is equipped with modern laboratories, smart classrooms, research centers, and affiliated hospitals. Students get access to advanced medical equipment and simulation-based learning."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "The university focuses heavily on practical training. Students gain hands-on clinical experience in hospitals, interact with real patients, and develop strong diagnostic and treatment skills during their course."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at South Kazakhstan Medical Academy is designed according to international standards and follows a 6-year structure (5 years academic + 1 year internship). It includes pre-clinical, para-clinical, and clinical subjects with practical training.",

        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year (Pre-Clinical)",
                    "Subjects Covered": "Anatomy, Histology, Medical Biology, Chemistry, Medical Genetics, Physiology (Basics), Foreign Language, ICT, Introduction to Clinical Practice"
                },
                {
                    "Year": "2nd Year (Pre-Clinical + Intro Clinical)",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Microbiology, Immunology, General Hygiene, Biostatistics, Radiology Basics, Public Health, Clinical Practice"
                },
                {
                    "Year": "3rd Year (Para-Clinical)",
                    "Subjects Covered": "Pathology, Pathophysiology, Pharmacology, Microbiology, General Surgery, Internal Medicine (Intro), Pediatrics (Intro), Evidence-Based Medicine"
                },
                {
                    "Year": "4th Year (Clinical Phase Begins)",
                    "Subjects Covered": "Internal Medicine, Pediatrics, Obstetrics & Gynecology, Infectious Diseases, Surgery, Traumatology, Clinical Practice"
                },
                {
                    "Year": "5th Year (Advanced Clinical)",
                    "Subjects Covered": "Neurology, Psychiatry, Emergency Medicine, Clinical Pharmacology, General Medicine, Medical Law, Research Work, Clinical Rotations"
                },
                {
                    "Year": "6th Year (Internship)",
                    "Subjects Covered": "12-Month Compulsory Internship with hands-on training in hospitals (General Medicine, Surgery, Pediatrics, OB-GYN, Emergency Care, etc.)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at South Kazakhstan Medical Academy is highly affordable and transparent, making it a preferred choice for Indian students planning to study MBBS abroad. The university offers a budget-friendly fee system with no donation or hidden charges, and students can pay fees on a yearly basis. Below is the detailed breakdown of the MBBS fees for international students:",
        "fees": {
            "structure": [
                {
                    "year": "Total Tuition Fees",
                    "tuition": "USD 26,400",
                    "total": "₹22 - 24 Lakhs (Approx.)"
                },
                {
                    "year": "Total Hostel Fees",
                    "tuition": "USD 4,800",
                    "total": "₹4 Lakhs (Approx.)"
                },
                {
                    "year": "Other Charges (One-Time)",
                    "tuition": "USD 1,000 – 1,200",
                    "total": "₹80k - 1 Lakh (Approx.)"
                },
                {
                    "year": "Grand Total",
                    "tuition": "USD 31,200 – 33,400",
                    "total": "₹26 – 28.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS course duration at South Kazakhstan Medical Academy is designed as per international standards and follows the guidelines of the National Medical Commission (NMC) for Indian students.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Pre-Clinical Phase",
                    "Duration": "1st – 2nd Year",
                    "Details": "Basic medical subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical Phase",
                    "Duration": "3rd Year",
                    "Details": "Subjects like Pathology, Pharmacology, Microbiology"
                },
                {
                    "Phase": "Clinical Phase",
                    "Duration": "4th – 5th Year",
                    "Details": "Practical training in Medicine, Surgery, Pediatrics, Gynecology"
                },
                {
                    "Phase": "Internship",
                    "Duration": "6th Year",
                    "Details": "Hands-on hospital training with real patient exposure"
                }
            ]
        },
        "studentSupport": "South Kazakhstan Medical Academy provides excellent student support services, making it a preferred choice for students planning MBBS in South Kazakhstan Medical Academy and MBBS in Kazakhstan. The university has a dedicated Student Service Center that assists students with admission processes, documentation, visa support, and academic queries, ensuring a smooth journey for those pursuing study MBBS abroad. Students also receive continuous academic guidance from experienced faculty members, helping them excel in their studies and practical training during their MBBS in Abroad journey.\n\nThe academy offers well-maintained hostel facilities with proper security, along with access to healthcare services through affiliated hospitals, ensuring students’ safety and well-being. For international students, especially Indian students pursuing MBBS in Kazakhstan for Indian students, the university provides a comfortable environment with Indian food options and a multicultural atmosphere. Additionally, South Kazakhstan Medical Academy supports students with language training (Russian/Kazakh), which is helpful during clinical practice.\n\nThe university also focuses on students’ mental and emotional well-being by providing counseling services to manage stress and academic pressure. With strict anti-ragging policies, FMGE/NExT coaching support, and various extracurricular activities, students get complete support throughout their MBBS abroad journey. Overall, South Kazakhstan Medical Academy ensures a safe, supportive, and student-friendly environment, making it an ideal destination for students aiming to pursue MBBS in Kazakhstan.",
        "recognition": "South Kazakhstan Medical Academy is a well-recognized medical institution known for its global affiliations and strong academic reputation. It holds approvals from major international and national medical bodies, making it a reliable choice for students planning MBBS in South Kazakhstan Medical Academy and MBBS in Kazakhstan. The university is officially recognized by the Ministry of Education and Science of the Republic of Kazakhstan and is listed in globally accepted medical directories. It is also approved by the National Medical Commission (NMC) of India, allowing Indian students to pursue MBBS in abroad and appear for licensing exams like FMGE/NExT after graduation.\n\nIn addition, South Kazakhstan Medical Academy is recognized by prestigious global organizations such as the World Health Organization (WHO) and is listed in the World Directory of Medical Schools (WDOMS). It is also affiliated with international bodies like FAIMER (Foundation for Advancement of International Medical Education and Research) and ECFMG, which enhances its global credibility and allows graduates to apply for exams like USMLE, PLAB, and other international licensing pathways.\n\nTalking about achievements, the academy has earned a strong reputation for delivering high-quality medical education and research. It has received international quality certifications such as ISO accreditation and has successfully passed multiple institutional accreditation processes, reflecting its commitment to maintaining global education standards. The university also actively participates in international collaborations, research programs, and student exchange initiatives, which strengthens its position among top institutions for study MBBS in abroad.",
        "hostelFacilities": "The academy provides well-equipped hostel facilities with modern amenities, ensuring a safe and comfortable stay for international students. Students pursuing MBBS in Abroad also benefit from affordable living costs in Shymkent, which helps them manage their expenses easily. Indian students, in particular, feel at home due to the presence of a large Indian community, availability of Indian food, and student-friendly surroundings. The academy offers access to healthcare services through affiliated hospitals, ensuring students’ safety and well-being.",
        "studentLife": "Student life at South Kazakhstan Medical Academy is vibrant, comfortable, and well-balanced, offering a multicultural environment where students from different countries come together, creating a diverse and globally connected atmosphere. Indian students feel at home due to the presence of a large Indian community, availability of Indian food, and student-friendly surroundings.\n\nApart from academics, the university encourages students to participate in various extracurricular activities such as sports, cultural events, seminars, and student clubs, which help in overall personality development. Academic life is balanced with practical exposure, as students get opportunities to attend clinical rotations, hospital training, and medical workshops. This hands-on experience is especially beneficial for those pursuing MBBS in Kazakhstan for Indian students, as it prepares them for real-world medical practice. The university also celebrates international festivals and cultural programs, allowing students to stay connected with their traditions while experiencing new cultures.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for a smooth admission process in MBBS in South Kazakhstan Medical Academy and MBBS in Kazakhstan. iExplain Education is a trusted consultancy that provides complete support to students planning to study MBBS abroad, ensuring a hassle-free and guided journey from start to finish.",
        "whyChooseUs": [
            "Expert Guidance & Experience: iExplain Education has a team of experienced counselors who specialize in MBBS abroad admissions and help students choose the best university based on their profile and budget.",
            "Free Counseling & Career Guidance: The consultancy offers free counseling sessions where students get detailed information about MBBS in Abroad, universities, fees, and career opportunities.",
            "University Selection Assistance: Students receive personalized guidance in selecting the right university like South Kazakhstan Medical Academy based on academic performance, budget, and future goals.",
            "Complete Admission Support: From filling application forms to securing admission letters, iExplain provides end-to-end assistance, making the process smooth and error-free.",
            "Documentation & Visa Assistance: The team helps with document verification, visa processing, and all legal formalities required for MBBS abroad admission, reducing stress for students and parents.",
            "Pre & Post-Departure Support: iExplain supports students even after admission by helping with travel arrangements, accommodation, and settling in a new country.",
            "FMGE/NExT Coaching Guidance: Students also get guidance for licensing exams like FMGE/NExT, which is essential for practicing in India after completing MBBS in Kazakhstan for Indian students.",
            "Student-Centric Approach: Unlike many consultancies, iExplain focuses on the student’s needs, providing personalized solutions instead of promoting specific universities for profit.",
            "Wide Range of Countries & Universities: iExplain offers admission guidance in multiple countries like Kazakhstan, Russia, Georgia, and more, giving students multiple options for study MBBS abroad.",
            "End-to-End Support Under One Roof: From counseling to admission, visa, travel, and settlement—everything is managed in one place, making the entire process easy and convenient."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "For proof of date of birth and basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must have Physics, Chemistry, Biology (PCB) subjects"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Valid Passport",
                "details": "Minimum 2 years validity required"
            },
            {
                "document": "Birth Certificate",
                "details": "Required in English or translated copy"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Proof that the student is medically fit"
            },
            {
                "document": "HIV Test Report",
                "details": "Mandatory medical report for visa process"
            },
            {
                "document": "Invitation Letter",
                "details": "Issued by the university after admission confirmation"
            },
            {
                "document": "Visa Documents",
                "details": "Includes visa application form and supporting documents"
            },
            {
                "document": "Migration Certificate",
                "details": "Issued by the previous board/university"
            }
        ],
        "conclusion": "Choosing South Kazakhstan Medical Academy for pursuing MBBS in South Kazakhstan Medical Academy is a smart decision for students looking for affordable and globally recognized medical education. With its low fee structure, modern infrastructure, experienced faculty, and strong clinical exposure, the university provides an ideal environment for students planning to study MBBS abroad. The academy’s recognition by global medical bodies, along with its student-friendly atmosphere and quality education system, makes it a reliable option for MBBS in Kazakhstan for Indian students. From simple admission procedures to excellent student support services, everything is designed to help students build a successful medical career. Overall, South Kazakhstan Medical Academy stands out as a perfect destination for students aiming for MBBS in Abroad, offering the right balance of affordability, quality education, and international career opportunities.",
        "faqs": [
            {
                "question": "Is South Kazakhstan Medical Academy good for MBBS?",
                "answer": "Yes, South Kazakhstan Medical Academy is a good choice for MBBS in Kazakhstan due to its affordable fees, global recognition (NMC, WHO), and quality education with strong clinical exposure."
            },
            {
                "question": "What is the duration of MBBS in South Kazakhstan Medical Academy?",
                "answer": "The duration of MBBS in South Kazakhstan Medical Academy is 6 years, including 5 years of academic study + 1 year of compulsory internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines for pursuing MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS course is taught in English medium for international students, making it easier for Indian students to study."
            },
            {
                "question": "What are the total fees for MBBS?",
                "answer": "The total cost for MBBS in South Kazakhstan Medical Academy is approximately ₹26–28.5 Lakhs for the complete course, making it budget-friendly."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is valid in India after clearing the FMGE/NExT exam, as the university is recognized by the National Medical Commission (NMC)."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides safe and well-equipped hostel facilities with all basic amenities for international students."
            },
            {
                "question": "Is Indian food available for students?",
                "answer": "Yes, Indian mess facilities are available, which is helpful for students pursuing MBBS in Kazakhstan for Indian students."
            },
            {
                "question": "What is the eligibility for admission?",
                "answer": "Students must have: 10+2 with Physics, Chemistry, Biology (PCB); Minimum 50% marks (40% for reserved category); NEET qualification."
            },
            {
                "question": "Is there any entrance exam for admission?",
                "answer": "No, there is no entrance exam required apart from NEET for Indian students."
            }
        ]
    },
    "osh-state-university": {
        "title": "Osh State University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Osh_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Osh_Mobile.webp",
        "intro": {
            "text": "Osh State University is one of the oldest and most prestigious government universities in Kyrgyzstan, widely recognized for its excellence in medical education and research. Established in 1951, the university is located in Osh, the second-largest and one of the most culturally rich cities in Kyrgyzstan. Over the years, it has developed into a major educational hub, attracting thousands of students from across the world who aspire to pursue MBBS in Osh State University and build successful medical careers internationally.\n\nThe university is especially popular among Indian students looking for MBBS in Kyrgyzstan due to its globally recognized degree, affordable fee structure, and high-quality education system. Osh State University is officially recognized by top medical bodies such as the National Medical Commission (NMC) of India, the World Health Organization (WHO), and is listed in the World Directory of Medical Schools (WDOMS). This global recognition allows students pursuing MBBS abroad to appear for licensing exams like FMGE/NExT in India, USMLE in the USA, and PLAB in the UK.\n\nOsh State University offers a well-structured MBBS program in English medium, specifically designed for international students. The curriculum follows international medical education standards and includes a perfect balance of theoretical knowledge and practical training. Students gain strong clinical exposure through affiliated hospitals, where they interact with real patients and develop hands-on medical skills. This practical approach makes it a preferred destination for students planning study MBBS abroad.\n\nThe university is equipped with modern infrastructure, including advanced laboratories, digital classrooms, research centers, and a well-stocked library. It also emphasizes research and innovation, encouraging students to participate in medical conferences, seminars, and international exchange programs. The experienced faculty members at Osh State University provide continuous academic support and mentorship, helping students excel in their studies and professional careers."
        },
        "quickOverview": {
            "University Name": "Osh State University",
            "Established": "1951",
            "Location": "Osh, Kyrgyzstan",
            "University Type": "Public / Government University",
            "Recognition & Approval": "NMC (India), WHO, WDOMS, Ministry of Education (Kyrgyzstan)",
            "Popular Course": "MBBS (General Medicine)",
            "Medium of Instruction": "English (for international students), Russian, Kyrgyz",
            "MBBS Duration": "6 Years (5 Years Academic + 1 Year Internship)",
            "Eligibility Criteria": "10+2 with Physics, Chemistry, Biology (PCB)",
            "NEET Requirement": "Mandatory for Indian students",
            "Entrance Exam": "No entrance exam (only NEET required)"
        },
        "benefits": {
            "intro": "Choosing MBBS in Osh State University is a popular decision among students looking for MBBS in Kyrgyzstan and study MBBS abroad due to its affordability, global recognition, and quality education. Here are detailed reasons why it is a great option:",
            "items": [
                {
                    "heading": "Affordable MBBS Fees",
                    "details": "One of the biggest advantages of studying MBBS in Osh State University is its low fee structure. The total cost is much lower compared to private medical colleges in India, making it ideal for students from middle-class families."
                },
                {
                    "heading": "Globally Recognized Degree",
                    "details": "The university is recognized by major medical bodies such as NMC (India), WHO, and WDOMS, allowing students to appear for exams like FMGE/NExT, USMLE, and PLAB after completing MBBS abroad."
                },
                {
                    "heading": "No Donation or Capitation Fee",
                    "details": "Students do not need to pay any donation, which makes the admission process transparent and merit-based."
                },
                {
                    "heading": "Simple Admission Process",
                    "details": "Admission is easy and hassle-free. There is no requirement for IELTS/TOEFL, and students only need to qualify NEET for MBBS in Kyrgyzstan for Indian students."
                },
                {
                    "heading": "English Medium Education",
                    "details": "The MBBS program is taught in English, making it convenient for international students to understand the curriculum without language barriers."
                },
                {
                    "heading": "Experienced Faculty & Quality Education",
                    "details": "The university has highly qualified professors who provide in-depth theoretical and practical knowledge following international medical standards."
                },
                {
                    "heading": "Strong Clinical Exposure",
                    "details": "Students gain hands-on experience through clinical rotations in affiliated hospitals, which is essential for developing real-world medical skills."
                },
                {
                    "heading": "Low Cost of Living",
                    "details": "Living expenses in Kyrgyzstan are very affordable, allowing students to manage their monthly budget easily while pursuing MBBS in Abroad."
                },
                {
                    "heading": "Indian Student-Friendly Environment",
                    "details": "The university provides Indian food, hostel facilities, and a large Indian student community, making it comfortable for students from India."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Osh State University is designed as per international medical standards and follows a 6-year structure (5 years academic + 1-year internship). The course is divided into pre-clinical, para-clinical, and clinical phases, ensuring a perfect balance of theoretical knowledge and practical training.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year (Pre-Clinical)",
                    "Subjects Covered": "Anatomy, Histology, Medical Biology, Physiology, Biochemistry, Genetics"
                },
                {
                    "Year": "2nd Year (Pre-Clinical + Basics)",
                    "Subjects Covered": "Physiology, Biochemistry, Microbiology, Cell Biology, General Pathology, Histology"
                },
                {
                    "Year": "3rd Year (Para-Clinical)",
                    "Subjects Covered": "Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine, Internal Medicine (Intro)"
                },
                {
                    "Year": "4th Year (Clinical Phase)",
                    "Subjects Covered": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Neurology, Psychiatry"
                },
                {
                    "Year": "5th Year (Advanced Clinical)",
                    "Subjects Covered": "Internal Medicine, Surgery, Orthopedics, Dermatology, ENT, Ophthalmology, Emergency Medicine"
                },
                {
                    "Year": "6th Year (Internship)",
                    "Subjects Covered": "1-Year Compulsory Internship with hospital rotations and hands-on training"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Osh State University is highly affordable and suitable for students planning MBBS in Osh State University and MBBS in Kyrgyzstan. The university offers a low-cost medical program with transparent fees, making it a popular choice for Indian students pursuing study MBBS abroad.",
        "fees": {
            "structure": [
                {
                    "year": "Total Tuition Fees",
                    "tuition": "USD 24,000",
                    "total": "₹20 - 22 Lakhs (Approx.)"
                },
                {
                    "year": "Total Hostel Fees",
                    "tuition": "USD 3,600",
                    "total": "₹3 Lakhs (Approx.)"
                },
                {
                    "year": "Other Charges",
                    "tuition": "USD 2,500 – 3,000",
                    "total": "₹2 - 2.5 Lakhs (Approx.)"
                },
                {
                    "year": "Total MBBS Fees",
                    "tuition": "USD 26,000 – 27,600",
                    "total": "₹21 – 23 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS course duration at Osh State University follows international medical education standards and is designed to provide both theoretical knowledge and practical clinical training for students pursuing MBBS in Osh State University and MBBS in Kyrgyzstan.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Pre-Clinical Phase",
                    "Duration": "1st – 2nd Year",
                    "Details": "Basic subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical Phase",
                    "Duration": "3rd Year",
                    "Details": "Subjects like Pathology, Pharmacology, Microbiology"
                },
                {
                    "Phase": "Clinical Phase",
                    "Duration": "4th – 5th Year",
                    "Details": "Subjects like Medicine, Surgery, Pediatrics, Gynecology with hospital training"
                },
                {
                    "Phase": "Internship",
                    "Duration": "6th Year",
                    "Details": "Subjects like Medicine, Surgery, Pediatrics, Gynecology with hospital training"
                }
            ]
        },
        "studentSupport": "Osh State University provides strong and well-structured student support services, making it a preferred destination for students pursuing MBBS in Osh State University, MBBS in Kyrgyzstan, and study MBBS abroad. The university has a dedicated international student support system that assists students throughout their academic journey—from admission to graduation. International students receive 24/7 assistance through a support cell that helps with visa processes, documentation, medical emergencies, and overall well-being, ensuring a safe and smooth experience abroad.\n\nThe university also offers excellent hostel and accommodation facilities, with around 9 student dormitories equipped with basic amenities like dining areas, laundry, and proper security, ensuring a comfortable stay for students. For Indian students pursuing MBBS in Kyrgyzstan for Indian students, the university provides Indian mess facilities, grocery access, and a supportive Indian student community, helping them adapt easily to a new environment.\n\nAcademically, Osh State University ensures continuous support through experienced faculty, mentoring systems, and academic counseling. Students also get guidance for licensing exams like FMGE/NExT, which is crucial for practicing in India after completing MBBS abroad. In addition, counseling services are available to help students manage academic pressure and personal challenges, ensuring mental well-being.\n\nThe university also promotes overall student development by encouraging participation in sports, cultural activities, and student organizations. With facilities like gyms, sports grounds, and cultural centers, students can maintain a healthy balance between academics and extracurricular activities.",
        "recognition": "Osh State University is a well-recognized government medical university affiliated with the Ministry of Education and Science of the Kyrgyz Republic and follows internationally accepted standards for medical education, making it a trusted choice for students planning MBBS in Osh State University, MBBS in Kyrgyzstan, and study MBBS abroad. The university is globally recognized by major medical bodies such as the National Medical Commission (NMC) of India, World Health Organization (WHO), and is listed in the World Directory of Medical Schools (WDOMS), which allows graduates to appear for licensing exams like FMGE/NExT, USMLE, and PLAB, opening worldwide career opportunities for students pursuing MBBS abroad. Additionally, Osh State University is associated with international organizations like FAIMER and ECFMG, further strengthening its global credibility and acceptance. With more than 70 years of academic excellence, a large number of international students, modern medical infrastructure, and strong clinical training facilities including teaching hospitals, the university has built a solid reputation in the field of medical education. Overall, its strong affiliations, global recognition, and continuous achievements make Osh State University an ideal destination for students, especially those looking for MBBS in Kyrgyzstan for Indian students, ensuring quality education and a successful medical career worldwide.",
        "hostelFacilities": "The university offers excellent hostel and accommodation facilities, with around 9 student dormitories equipped with basic amenities like dining areas, laundry, and proper security, ensuring a comfortable stay for students. For Indian students, the university provides Indian mess facilities, grocery access, and a supportive Indian student community. Hostel accommodations include essential amenities such as security, heating, internet, laundry, and common areas. The cost of living in Osh is quite affordable, which is a major advantage for international students.",
        "studentLife": "Student life at Osh State University is vibrant, diverse, and student-friendly, making it an excellent choice for those planning MBBS in Osh State University, MBBS in Kyrgyzstan, and study MBBS abroad. The university offers a multicultural environment where students from different countries, especially India, come together, creating a friendly and inclusive atmosphere. Indian students pursuing MBBS in Kyrgyzstan for Indian students feel comfortable due to the availability of Indian food, hostel facilities, and a supportive student community that helps them adjust easily to a new country.\n\nThe university provides well-maintained hostel accommodations with essential amenities such as security, heating, internet, laundry, and common areas, ensuring a safe and comfortable stay. The cost of living in Osh is quite affordable, which is a major advantage for students pursuing MBBS in Abroad. Along with academics, students actively participate in extracurricular activities like sports, cultural programs, seminars, and student clubs, helping them maintain a balanced lifestyle and develop their overall personality.\n\nAcademic life is enriched with practical exposure through clinical rotations, hospital training, and medical workshops, allowing students to gain real-life experience. The university also celebrates various international and cultural festivals, including Indian festivals, which helps students stay connected to their culture while experiencing a global environment. Additionally, Osh State University ensures student safety with strict rules and a secure campus, along with supportive faculty and staff who assist students whenever needed. Overall, student life at Osh State University offers a perfect combination of quality education, cultural diversity, affordable living, and personal growth, making it an ideal destination for students aiming to pursue MBBS abroad.",
        "whyChooseUsIntro": "iExplain Education is a trusted educational consultancy that offers comprehensive guidance to students aspiring to pursue MBBS in Abroad and specifically MBBS in Kyrgyzstan at renowned institutions like Osh State University. Their professional support ensures a smooth, hassle-free, and successful admission process.",
        "whyChooseUs": [
            "Expert Counseling & Guidance: iExplain Education provides professional counseling with experienced experts who guide students in selecting the right university based on their profile, budget, and career goals.",
            "Free Consultation Services: Students can get free counselling sessions where they receive complete information about MBBS abroad, universities, eligibility, and career opportunities.",
            "University Selection Assistance: The consultancy helps students choose the best options like Osh State University by analyzing academic background and future goals, ensuring the right decision.",
            "Complete Admission Support: From filling application forms to getting the admission letter, iExplain handles the entire admission process, making it smooth and error-free.",
            "Documentation & Visa Assistance: They assist in document verification, visa processing, and legal formalities, reducing stress for students and ensuring a hassle-free experience.",
            "Pre & Post-Departure Support: iExplain supports students even after admission by helping with travel arrangements, forex, accommodation, and settling in a new country.",
            "Student-Centric Approach: Unlike many consultancies, iExplain focuses on students’ needs and provides personalised solutions instead of promoting specific universities for profit."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education and date of birth"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology (PCB) subjects"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Valid Passport",
                "details": "Minimum 18 months validity required"
            },
            {
                "document": "Birth Certificate",
                "details": "Required in English or translated copy"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Proof that the student is physically and mentally fit"
            },
            {
                "document": "HIV Test Report",
                "details": "Required for visa and admission process"
            },
            {
                "document": "COVID-19 Vaccination Certificate",
                "details": "As per travel guidelines (if applicable)"
            },
            {
                "document": "Application Form",
                "details": "Properly filled university admission form"
            },
            {
                "document": "Invitation Letter",
                "details": "Issued by the university after admission confirmation"
            },
            {
                "document": "Visa Documents",
                "details": "Includes visa application and supporting documents"
            }
        ],
        "conclusion": "Choosing Osh State University for pursuing MBBS in Osh State University is a great decision for students who are looking for affordable and globally recognized medical education. With its low fee structure, experienced faculty, modern infrastructure, and strong clinical exposure, the university provides an ideal platform for students planning to study MBBS abroad.\n\nThe university’s recognition by international medical bodies like NMC and WHO ensures that students can pursue global career opportunities after completing their degree. Additionally, its student-friendly environment, Indian food availability, and supportive campus life make it a preferred choice for those opting for MBBS in Kyrgyzstan for Indian students.",
        "faqs": [
            {
                "question": "Is Osh State University good for MBBS?",
                "answer": "Yes, Osh State University is a well-known government university offering quality education, affordable fees, and global recognition, making it a good option for MBBS in Kyrgyzstan."
            },
            {
                "question": "What is the duration of MBBS in Osh State University?",
                "answer": "The duration of MBBS in Osh State University is 6 years, including 5 years of academic study + 1 year of internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines for pursuing MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS course is taught in English medium for international students."
            },
            {
                "question": "What are the total fees for MBBS?",
                "answer": "The total cost for MBBS in Osh State University is approximately ₹21–23 Lakhs, making it very affordable."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is valid in India after clearing the FMGE/NExT exam, as the university is recognized by NMC."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides safe and well-equipped hostel facilities for international students."
            },
            {
                "question": "Is Indian food available?",
                "answer": "Yes, Indian mess facilities are available, which is beneficial for students from India."
            },
            {
                "question": "What is the eligibility for admission?",
                "answer": "Students must have: 10+2 with Physics, Chemistry, Biology (PCB); Minimum 50% marks (40% for reserved category); NEET qualification."
            }
        ]
    },
    "jalal-abad-state-university": {
        "title": "Jalal-Abad State University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/JASU_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/JASU_Mobile.webp",
        "intro": {
            "text": "Jalal-Abad State University is a well-recognized government university in Kyrgyzstan, gaining strong popularity among international students who are looking to study MBBS abroad at an affordable cost. Established with the aim of providing quality higher education, the university has developed a solid reputation for delivering globally accepted medical education with a focus on both theoretical knowledge and practical clinical training.\n\nThe MBBS in Jalal-Abad State University program is specifically designed to meet international standards, making it an excellent choice for students planning to pursue a career in medicine. One of the biggest advantages of choosing this university is that the MBBS abroad program is offered in English medium, which makes it highly convenient for Indian students and eliminates any language barrier during the course.\n\nWhen it comes to affordability, MBBS in Abroad, especially at Jalal-Abad State University, is considered a smart option for students with a limited budget. The total MBBS fees in Jalal-Abad State University are much lower compared to private medical colleges in India, making it possible for middle-class families to fulfill their dream of becoming a doctor without financial burden. Additionally, the university follows a simple admission process, where students are only required to qualify NEET, without any entrance exams or donation fees.\n\nThe university is equipped with modern infrastructure, advanced laboratories, and well-affiliated hospitals, ensuring that students receive hands-on clinical exposure throughout their medical education. This practical training plays a crucial role in preparing students for global medical licensing exams such as FMGE/NExT, which is essential for practicing in India after completing MBBS abroad.\n\nAnother key highlight of Jalal-Abad State University is its diverse international student community, safe environment, and supportive academic system. Students not only gain medical knowledge but also benefit from international exposure, which enhances their overall personality and career opportunities."
        },
        "quickOverview": {
            "University Name": "Jalal-Abad State University",
            "Established": "1993",
            "Type": "Government University",
            "Location": "Jalal-Abad, Kyrgyzstan",
            "Medium of Instruction": "English (for MBBS), Russian, Kyrgyz",
            "Popular Course": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
            "MBBS Duration": "5–6 Years (including internship)",
            "Recognition": "NMC (India), WHO, FAIMER",
            "Eligibility": "10+2 with PCB, NEET Qualification Required",
            "Admission Process": "Direct Admission (No Donation / No Entrance Exam)",
            "Hostel Facility": "Available (Separate for Boys & Girls)"
        },
        "benefits": {
            "intro": "Choosing the right university is crucial for a successful medical career, and MBBS in International School of Medicine is considered a smart option for students planning to study MBBS abroad. Here are the key reasons why students prefer this university:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "The university offers a low-cost MBBS abroad program, allowing students to complete their medical education at a much lower cost compared to private colleges in India."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Students can secure admission without paying any donation or hidden charges, ensuring a transparent admission process."
                },
                {
                    "Heading": "English Medium Education",
                    "Details": "The MBBS program is taught entirely in English, making it easy for Indian and international students to understand and learn effectively."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major bodies like NMC, WHO, FAIMER, and WFME, allowing students to appear for FMGE/NExT, USMLE, and PLAB exams."
                },
                {
                    "Heading": "Simple Admission Process",
                    "Details": "Admission is easy and hassle-free. Students only need to qualify NEET, with no additional entrance exams required."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students gain hands-on experience in affiliated hospitals, which helps them develop practical medical skills and confidence."
                },
                {
                    "Heading": "Modern Infrastructure",
                    "Details": "The university provides advanced laboratories, digital classrooms, and medical facilities, enhancing the learning experience."
                },
                {
                    "Heading": "International Student Environment",
                    "Details": "A large number of international students study here, providing global exposure and cultural diversity."
                },
                {
                    "Heading": "Safe & Comfortable Living",
                    "Details": "The university offers secure hostel facilities, Indian food options, and a student-friendly environment, making it comfortable for Indian students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS in Jalal-Abad State University follows an internationally structured curriculum divided into pre-clinical, para-clinical, and clinical phases, ensuring a strong foundation in medical sciences along with practical hospital training. The course duration is 5–6 years including internship, focusing on both theoretical knowledge and hands-on clinical exposure.",

        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Medical Biology, Psychology, Medical Sociology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Physiology, Biochemistry, Microbiology, Cell Biology, General Pathology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Microbiology, Pathophysiology, Genetics"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Neurology, Primary Care Medicine, Obstetrics & Gynecology, Oncology"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Internal Medicine, Pediatrics, Psychiatry, ENT, Emergency Medicine, Cardiology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Internship, Hospital Rotations, Practical Training"
                }
            ]
        },
        "feesIntro": "The MBBS in Jalal-Abad State University is known for its affordable and transparent fee structure, making it one of the best options for students planning to study MBBS abroad on a low budget. Below is the detailed year-wise MBBS fee structure:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$4,200",
                    "hostel": "$600",
                    "total": "₹5.5 – 6 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS in Jalal-Abad State University is designed according to international medical education standards and follows a total duration of 6 years, which includes both academic study and clinical internship.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Academic Study",
                    "Duration": "5 Years",
                    "Details": "Theoretical + practical medical education (classroom + lab + hospital exposure)"
                },
                {
                    "Phase": "Internship (Clinical)",
                    "Duration": "1 Year",
                    "Details": "Compulsory hands-on training in hospitals"
                },
                {
                    "Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Complete MBBS program"
                }
            ]
        },
        "studentSupport": "Jalal-Abad State University provides a comprehensive and student-friendly support system for international students pursuing MBBS abroad, ensuring a smooth academic and personal experience throughout the course. The university offers strong academic guidance through experienced faculty, modern classrooms, and well-equipped laboratories, along with practical clinical training in affiliated hospitals for real-world exposure. Students are provided with safe and comfortable hostel accommodation, separate for boys and girls, along with Indian food facilities to help them feel at home. A dedicated international student support team assists with admission, documentation, visa processes, and local settlement, making the transition easy for newcomers. The campus also ensures 24/7 security, CCTV surveillance, and a disciplined environment for student safety. Additionally, students have access to libraries, digital learning resources, sports facilities, and cultural activities, promoting overall development. This well-rounded support system makes Jalal-Abad State University a reliable choice for students looking for affordable and secure MBBS abroad education.",
        "recognition": "Jalal-Abad State University is globally recognized for providing quality medical education and is affiliated with several prestigious national and international organizations, ensuring that its MBBS degree is widely accepted across the world.\n\nAffiliation & Recognition:\nThe university is recognized and approved by major medical and educational bodies:\n- National Medical Commission (NMC), India – Allows Indian students to practice in India after clearing FMGE/NExT\n- World Health Organization (WHO) – Listed among globally recognized medical universities\n- FAIMER (Foundation for Advancement of International Medical Education and Research) – Ensures global credibility of the degree\n- World Federation for Medical Education (WFME) – Maintains international education standards\n- Ministry of Education & Science, Kyrgyzstan – Official government accreditation\n- World Directory of Medical Schools (WDOMS) – Listed for global recognition\n- ECFMG (USA) – Eligibility for US medical licensing exams\n\nKey Achievements:\n- Established as a government university in 1993, providing quality education in multiple disciplines\n- Hosts thousands of international students from countries like India, Nepal, and more\n- Strong reputation for MBBS abroad programs with English medium education\n- Offers clinical training through affiliated hospitals, ensuring practical exposure\n- Recognized globally, enabling students to appear for exams like FMGE/NExT, USMLE, and PLAB\n- Known for providing affordable MBBS education compared to many other countries",
        "hostelFacilities": "The university provides safe and well-maintained hostel facilities with separate accommodations for boys and girls. Rooms are fully furnished with basic amenities such as beds, study tables, heating systems, and Wi-Fi access. The campus ensures 24/7 security with CCTV surveillance, making it a safe place for students to live and study. One of the biggest advantages for Indian students is the availability of Indian food and mess facilities, which helps them adjust easily to life abroad without major lifestyle changes.",
        "studentLife": "Student life at Jalal-Abad State University is dynamic, comfortable, and well-balanced, offering an ideal environment for students pursuing MBBS abroad. The university welcomes a large number of international students, especially from India, creating a multicultural atmosphere where students get global exposure and build friendships with peers from different countries. This diversity helps students improve communication skills, cultural understanding, and overall personality development, which is essential for a successful medical career.\n\nAcademically, students experience a structured routine with modern classrooms, advanced laboratories, and digital learning resources. The university emphasizes both theoretical knowledge and practical learning, and students regularly participate in clinical training at affiliated hospitals, gaining real-time exposure to patient care. This hands-on experience plays a crucial role in preparing them for medical licensing exams like FMGE/NExT and for future medical practice.\n\nApart from studies, the university encourages students to maintain a healthy and active lifestyle by participating in sports, fitness activities, and recreational programs. Various indoor and outdoor sports facilities are available on campus. Students also actively take part in cultural events, festivals, and celebrations such as Diwali, Holi, Eid, and New Year, which creates a homely environment even while staying abroad. The university also supports students through clubs, seminars, workshops, and student organizations, where they can enhance their skills, leadership qualities, and professional knowledge. Social activities and community programs further help students build confidence and develop a sense of responsibility.",
        "whyChooseUsIntro": "Choosing the right consultant can make a huge difference when planning to pursue MBBS abroad, and iExplain Education stands out as a trusted and experienced education consultancy for students aiming for MBBS in Jalal-Abad State University. With years of experience in guiding Indian and international students, iExplain Education provides end-to-end support throughout the admission process, ensuring a smooth, transparent, and hassle-free journey.",
        "whyChooseUs": [
            "Expert University Guidance: Helps students select the best MBBS abroad option based on budget, NEET score, and career goals.",
            "Transparent Admission Process: Provides complete assistance with documentation, application submission, and university liaison.",
            "Visa & Travel Support: Guides students with visa filing, travel arrangements, and pre-departure preparation.",
            "Affordable & Honest Consultancy: Ensures no hidden fees or fake promises, focusing on cost-effective MBBS solutions.",
            "Post-Arrival Assistance: Supports students with hostel accommodation, local registration, and settling in at Jalal-Abad State University.",
            "Exam & Career Preparation: Offers guidance for FMGE/NExT and global licensing exams after MBBS completion.",
            "Safe & Reliable: Ensures students have complete support from admission to career, reducing stress and confusion.",
            "Global Exposure & Career Focus: Helps students achieve their dream of becoming a doctor with internationally recognized MBBS education."
        ],
        "documents": [
            {
                "document": "Passport",
                "details": "Valid passport with at least 18 months' validity from the date of travel."
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "For proof of age and academic eligibility."
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must have Physics, Chemistry, Biology (PCB) and English."
            },
            {
                "document": "NEET Score / Qualification Certificate",
                "details": "Mandatory for admission as per NMC guidelines."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered medical practitioner."
            },
            {
                "document": "HIV / Blood Test Report",
                "details": "Required for visa and university admission."
            },
            {
                "document": "Birth Certificate",
                "details": "Proof of date of birth (sometimes 10th certificate is sufficient)."
            },
            {
                "document": "Migration Certificate",
                "details": "Required if applying from another board/university."
            },
            {
                "document": "Transfer Certificate (TC)",
                "details": "Issued by the last attended school/college."
            },
            {
                "document": "Student Visa Documents",
                "details": "Completed visa application form and supporting documents."
            }
        ],
        "conclusion": "Jalal-Abad State University stands out as a reliable and budget-friendly destination for students planning to pursue MBBS abroad. With its affordable fee structure, English-medium education, global recognition, and strong clinical exposure, the university offers an excellent opportunity for medical aspirants, especially those with a limited budget. The simple admission process, safe environment, and growing international student community further make it a comfortable choice for Indian students. For students who are unable to secure a government seat in India or want to avoid the high fees of private colleges, MBBS in Jalal-Abad State University is a smart and practical alternative. However, success depends on choosing the right university and staying focused throughout the journey. With proper guidance and dedication, students can build a successful medical career in India or abroad after completing their degree.",
        "faqs": [
            {
                "question": "Is Osh State University good for MBBS?",
                "answer": "Yes, Osh State University is a well-known government university offering quality education, affordable fees, and global recognition, making it a good option for MBBS in Kyrgyzstan."
            },
            {
                "question": "What is the duration of MBBS in Osh State University?",
                "answer": "The duration of MBBS in Osh State University is 6 years, including 5 years of academic study + 1 year of internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines for pursuing MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS course is taught in English medium for international students."
            },
            {
                "question": "What are the total fees for MBBS?",
                "answer": "The total cost for MBBS in Osh State University is approximately ₹21–23 Lakhs, making it very affordable."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is valid in India after clearing the FMGE/NExT exam, as the university is recognized by NMC."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides safe and well-equipped hostel facilities for international students."
            },
            {
                "question": "Is Indian food available?",
                "answer": "Yes, Indian mess facilities are available, which is beneficial for students from India."
            },
            {
                "question": "What is the eligibility for admission?",
                "answer": "Students must have: 10+2 with Physics, Chemistry, Biology (PCB); Minimum 50% marks (40% for reserved category); NEET qualification."
            }
        ]
    },
    "international-school-of-medicine": {
        "title": "International School of Medicine",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/ISM_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/ISM_Mobile.webp",
        "intro": {
            "text": "International School of Medicine is one of the most popular and well-established medical institutions in Kyrgyzstan, especially known among Indian and international students who are planning to study MBBS abroad. Founded with the objective of providing high-quality medical education at an affordable cost, the university has gained a strong reputation for its globally accepted curriculum, modern infrastructure, and experienced faculty.\n\nThe MBBS in International School of Medicine is designed according to international standards, focusing on both theoretical knowledge and practical clinical exposure. The program is offered in English medium, which makes it highly suitable for Indian students and eliminates any language barrier. The university is also recognized by major global medical bodies such as NMC (India), WHO, and FAIMER, allowing graduates to appear for licensing exams like FMGE/NExT, USMLE, and PLAB.\n\nOne of the key advantages of choosing the International School of Medicine is its affordable fee structure, making it a top choice for students looking for low-cost MBBS abroad options. In comparison to private medical colleges in India, students can complete their entire MBBS degree at a significantly lower cost without any donation or capitation fees.\n\nThe university also provides excellent clinical training through affiliated hospitals, ensuring that students gain hands-on experience and practical skills required in real-life medical practice. With a growing number of international students, safe campus facilities, and a supportive learning environment, the International School of Medicine offers a perfect combination of quality education, global exposure, and career opportunities."
        },
        "quickOverview": {
            "University Name": "International School of Medicine (ISM)",
            "Established": "2003",
            "Type": "Private Medical Institution",
            "Location": "Bishkek, Kyrgyzstan",
            "Medium of Instruction": "English",
            "Course Offered": "MBBS (MD Equivalent)",
            "Course Duration": "5–6 Years (including internship)",
            "Recognition": "NMC (India), WHO, FAIMER, WFME",
            "Eligibility": "10+2 with PCB + NEET Qualification",
            "Admission Process": "Direct (No Entrance Exam / No Donation)",
            "Clinical Training": "Affiliated hospitals with practical exposure",
            "International Students": "Large number of Indian & foreign students"
        },
        "benefits": {
            "intro": "Choosing the right university is crucial for a successful medical career, and MBBS in International School of Medicine is considered a smart option for students planning to study MBBS abroad. Here are the key reasons why students prefer this university:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "The university offers a low-cost MBBS abroad program, allowing students to complete their medical education at a much lower cost compared to private colleges in India."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Students can secure admission without paying any donation or hidden charges, ensuring a transparent admission process."
                },
                {
                    "Heading": "English Medium Education",
                    "Details": "The MBBS program is taught entirely in English, making it easy for Indian and international students to understand and learn effectively."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major bodies like NMC, WHO, FAIMER, and WFME, allowing students to appear for FMGE/NExT, USMLE, and PLAB exams."
                },
                {
                    "Heading": "Simple Admission Process",
                    "Details": "Admission is easy and hassle-free. Students only need to qualify NEET, with no additional entrance exams required."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students gain hands-on experience in affiliated hospitals, which helps them develop practical medical skills and confidence."
                },
                {
                    "Heading": "Modern Infrastructure",
                    "Details": "The university provides advanced laboratories, digital classrooms, and medical facilities, enhancing the learning experience."
                },
                {
                    "Heading": "International Student Environment",
                    "Details": "A large number of international students study here, providing global exposure and cultural diversity."
                },
                {
                    "Heading": "Safe & Comfortable Living",
                    "Details": "The university offers secure hostel facilities, Indian food options, and a student-friendly environment, making it comfortable for Indian students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS in International School of Medicine follows a globally structured curriculum divided into pre-clinical, para-clinical, and clinical phases. The course duration is 5–6 years including internship, focusing on strong theoretical knowledge along with practical hospital training.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Microbiology, Cell Biology, General Pathology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Microbiology, Pathophysiology, Genetics"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Internal Medicine, Neurology, Obstetrics & Gynecology, Oncology"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Pediatrics, Psychiatry, ENT, Emergency Medicine, Cardiology, Clinical Postings"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Hospital Rotations & Practical Training)"
                }
            ]
        },
        "feesIntro": "The MBBS in International School of Medicine is known for its affordable and flexible fee structure, making it a top choice for students planning to study MBBS abroad on a budget. Below is the detailed year-wise MBBS fee structure:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$6,500",
                    "hostel": "$500",
                    "total": "₹5.8 – 6.2 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$5,500",
                    "hostel": "$500",
                    "total": "₹5.0 – 5.3 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$5,500",
                    "hostel": "$500",
                    "total": "₹5.0 – 5.3 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$5,500",
                    "hostel": "$500",
                    "total": "₹5.0 – 5.3 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$5,500",
                    "hostel": "$500",
                    "total": "₹5.0 – 5.3 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$5,500",
                    "hostel": "$500",
                    "total": "₹5.0 – 5.3 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS in International School of Medicine is a 6-year program, which includes 5 years of academic study and 1 year of compulsory clinical internship. The course is structured according to international medical education standards and focuses on both theoretical knowledge and practical training.",
        "duration": {
            "headers": ["Particulars", "Duration", "Details"],
            "table": [
                {
                    "Particulars": "Academic Duration",
                    "Duration": "5 Years",
                    "Details": "Includes classroom learning, lab work, and clinical exposure"
                },
                {
                    "Particulars": "Internship",
                    "Duration": "1 Year",
                    "Details": "Compulsory hospital training with real patient interaction"
                },
                {
                    "Particulars": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Complete MBBS program"
                }
            ]
        },
        "studentSupport": "International School of Medicine provides a well-structured and student-focused support system to ensure that international students pursuing MBBS abroad have a smooth and comfortable academic journey. The university has a dedicated Student Service Center that helps students with academic coordination, administrative work, and overall student interaction, ensuring quick resolution of issues and better communication between students and the university. Students receive strong academic support through experienced international faculty, modern teaching methods, and access to advanced laboratories, libraries, and simulation training centers, which enhance both theoretical and practical learning.\n\nThe university also provides excellent clinical training support through affiliated hospitals and university clinics, where students gain real patient exposure and hands-on medical experience. For accommodation, students are offered safe and well-equipped hostels with modern amenities like Wi-Fi and heating systems, along with Indian food options, helping them adjust easily to a new environment. Additionally, a dedicated Student Support and Extracurricular Department organizes activities, events, and student engagement programs to promote overall personality development.\n\nInternational students are also supported with visa assistance, documentation guidance, airport pickup, and settlement services, ensuring a hassle-free transition to life in Kyrgyzstan. The university maintains a safe and secure campus environment, along with a multicultural atmosphere where students from over 50 countries study together, providing global exposure and networking opportunities.",
        "recognition": "International School of Medicine is widely recognized for its quality medical education and strong global presence, making it a trusted choice for students pursuing MBBS abroad. The university is officially approved by the National Medical Commission (NMC), India, which allows Indian students to appear for licensing exams like FMGE/NExT after completing their degree. It is also listed with the World Health Organization (WHO) and included in the World Directory of Medical Schools (WDOMS), ensuring worldwide acceptance of its medical qualification. Furthermore, the university is recognized by FAIMER and follows international standards set by the World Federation for Medical Education (WFME), which enhances its global credibility and academic quality. It is accredited by the Ministry of Education & Science of Kyrgyzstan and is also eligible under ECFMG (USA), enabling graduates to pursue international licensing exams such as USMLE.\n\nEstablished in 2003, the International School of Medicine has built a strong reputation over the years by offering English-medium MBBS programs specifically designed for international students, especially from countries like India. The university is known for its modern infrastructure, advanced laboratories, and well-equipped simulation centers, which support effective learning and practical training. It also provides clinical exposure through affiliated hospitals, ensuring that students gain hands-on experience in real medical environments. With a diverse student base from over 50 countries, the university promotes a multicultural learning atmosphere that helps students gain global exposure and develop professional confidence. Overall, the strong affiliations, international recognition, and consistent academic achievements make the International School of Medicine a reliable and globally accepted destination for students aiming to build a successful medical career in India or abroad.",
        "hostelFacilities": "For accommodation, students are offered safe and well-equipped hostels with modern amenities like Wi-Fi and heating systems, along with Indian food options, helping them adjust easily to a new environment. The campus provides safe and well-maintained hostel facilities with 24/7 security, ensuring a secure and comfortable stay for international students. Indian students especially benefit from the availability of Indian food and mess facilities, which helps them adjust easily to life in a new country.",
        "studentLife": "Student life at International School of Medicine is vibrant, comfortable, and well-balanced, offering an ideal environment for students pursuing MBBS abroad. The university hosts students from over 50 countries, creating a multicultural atmosphere where students gain international exposure and build global connections. The campus provides safe and well-maintained hostel facilities with modern amenities such as Wi-Fi, heating systems, and 24/7 security, ensuring a secure and comfortable stay for international students. Indian students especially benefit from the availability of Indian food and mess facilities, which helps them adjust easily to life in a new country.\n\nAcademically, students experience a structured and supportive environment with modern classrooms, advanced laboratories, and simulation centers that enhance both theoretical and practical learning. The university places strong emphasis on clinical training, allowing students to gain hands-on experience in affiliated hospitals and interact with real patients, which is crucial for building medical skills.\n\nApart from academics, the university encourages students to participate in sports, cultural events, seminars, and extracurricular activities, helping them maintain a healthy balance between studies and personal life. Celebrations of festivals like Diwali, Holi, and New Year create a homely feeling for international students. Students can also join various clubs and student organizations, which help in developing leadership skills, confidence, and social interaction. The university also provides full student support services, including visa assistance, local guidance, and help with daily life, making the transition smooth for newcomers.",
        "whyChooseUsIntro": "Choosing iExplain Education for admission in MBBS at International School of Medicine ensures a safe, guided, and hassle-free journey. With expert counselling, transparent process, and complete end-to-end support, students can confidently start their MBBS abroad journey and focus on building a successful medical career.",
        "whyChooseUs": [
            "Expert MBBS Abroad Guidance: iExplain Education provides professional counselling to help students choose the best university based on their NEET score, budget, and career goals.",
            "Student-Centric Approach: The consultancy focuses on personalized guidance, considering each student’s strengths and preferences instead of pushing random universities.",
            "Complete Admission Assistance: From application filling, document verification to university admission, everything is handled step-by-step for a smooth process.",
            "Transparent & Honest Process: iExplain Education ensures no hidden charges or misleading information, helping students make the right decision with clarity.",
            "Visa & Travel Support: They provide full support for visa processing, forex, and travel arrangements, reducing stress for students and parents.",
            "Pre & Post-Departure Support: Assistance doesn’t stop at admission — students get help with airport pickup, hostel, and settling abroad.",
            "FMGE/NExT Preparation Guidance: Students also receive support for licensing exam preparation, helping them build a successful medical career.",
            "Wide Global Network: iExplain works with universities across countries like Russia, Georgia, Kyrgyzstan, Kazakhstan, and more, offering multiple options.",
            "One-Stop Solution: From career counselling to admission, visa, and post-arrival support, everything is available under one platform."
        ],
        "documents": [
            {
                "document": "Passport",
                "details": "Valid passport with at least 18 months validity"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of date of birth and basic academic details"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology (PCB)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered doctor"
            },
            {
                "document": "HIV Test Report",
                "details": "Required for visa and university admission"
            },
            {
                "document": "Birth Certificate",
                "details": "For verification of date of birth"
            },
            {
                "document": "Migration Certificate",
                "details": "Required for students from different boards"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after application approval"
            },
            {
                "document": "Visa Application Documents",
                "details": "Completed visa form + supporting documents"
            },
            {
                "document": "Invitation Letter",
                "details": "Official invitation from the university for visa process"
            }
        ],
        "conclusion": "International School of Medicine is a highly preferred destination for students planning to pursue MBBS abroad due to its affordable fee structure, English-medium education, global recognition, and strong clinical training. With modern infrastructure, experienced faculty, and a diverse international student community, the university offers a perfect environment for both academic excellence and personal growth. For students who are unable to secure a government seat in India or want to avoid the high cost of private medical colleges, MBBS in International School of Medicine provides a smart and practical alternative. However, choosing the right guidance and staying dedicated throughout the course is essential for success. With proper planning and effort, students can build a successful medical career in India or internationally after completing their degree.",
        "faqs": [
            {
                "question": "Is International School of Medicine good for MBBS?",
                "answer": "Yes, it is one of the popular choices for MBBS abroad due to its affordable fees, English-medium education, and global recognition."
            },
            {
                "question": "What is the total fee for MBBS in International School of Medicine?",
                "answer": "The total cost is approximately ₹30–32 lakhs, making it a budget-friendly option compared to private medical colleges in India."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students as per NMC guidelines."
            },
            {
                "question": "What is the duration of MBBS at International School of Medicine?",
                "answer": "The course duration is 6 years, including 5 years of study + 1 year internship."
            },
            {
                "question": "Is the MBBS degree valid in India?",
                "answer": "Yes, but students must clear the FMGE/NExT exam to practice in India after completing MBBS abroad."
            },
            {
                "question": "What is the medium of teaching?",
                "answer": "The MBBS program is taught in English, which is suitable for international students."
            },
            {
                "question": "Are hostel and food facilities available?",
                "answer": "Yes, the university provides hostel facilities and Indian food options for students."
            },
            {
                "question": "Is there any donation or entrance exam required?",
                "answer": "No, there is no donation or capitation fee, and admission is based on NEET qualification only."
            },
            {
                "question": "Can students practice abroad after MBBS?",
                "answer": "Yes, students can appear for exams like USMLE (USA), PLAB (UK), and other licensing exams to practice internationally."
            },
            {
                "question": "Is Kyrgyzstan safe for Indian students?",
                "answer": "Yes, Kyrgyzstan is considered a safe and student-friendly country, and the university provides proper security and support for international students."
            }
        ]
    },
    "asian-medical-institute": {
        "title": "Asian Medical Institute",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/ASMI_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/ASMI_Mobile.webp",
        "intro": {
            "text": "Asian Medical Institute is one of the well-known and rapidly growing medical universities in Kyrgyzstan, especially popular among Indian students who are planning to study MBBS in Kyrgyzstan and MBBS abroad at an affordable cost. Established in 2004, the institute is officially recognized by the Ministry of Education and Science of the Kyrgyz Republic, ensuring quality education and international standards.\n\nThe MBBS in Asian Medical Institute is designed as per global medical education standards, combining strong theoretical knowledge with practical clinical training. The program is offered in English medium, making it highly suitable for international students and eliminating language barriers. The university is also recognized by major global bodies such as NMC (India), WHO, and FAIMER, allowing students to appear for licensing exams like FMGE/NExT, USMLE, and PLAB after completing their degree.\n\nLocated in Kant, near Bishkek, the institute provides a peaceful and student-friendly environment with modern infrastructure, advanced laboratories, and affiliated hospitals for clinical exposure. Students pursuing MBBS in Kyrgyzstan at Asian Medical Institute benefit from hands-on training, which is essential for building a strong medical career.\n\nOne of the biggest advantages of choosing Asian Medical Institute is its affordable fee structure, making it a top choice for students looking for low-cost MBBS in Kyrgyzstan. Compared to private medical colleges in India, students can complete their MBBS at a much lower cost without any donation or capitation fees. The university also offers hostel facilities, Indian food, and a comfortable living environment, which makes it easier for Indian students to adapt."
        },
        "quickOverview": {
            "University Name": "Asian Medical Institute",
            "Established": "2004",
            "Type": "Private Medical Institute",
            "Location": "Kant, Kyrgyzstan",
            "Medium of Instruction": "English",
            "Course Offered": "MBBS (MD Equivalent)",
            "Course Duration": "5–6 Years (including internship)",
            "Recognition": "NMC (India), WHO, FAIMER",
            "Eligibility": "10+2 with PCB + NEET Qualification",
            "Admission Process": "Direct (No Entrance Exam / No Donation)",
            "Clinical Training": "Affiliated hospitals with practical exposure"
        },
        "benefits": {
            "intro": "Choosing the right university is crucial for building a successful medical career, and MBBS in Asian Medical Institute is considered a smart option for students planning to study MBBS in Kyrgyzstan and MBBS abroad. Here are the key reasons why students prefer this institute:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "Asian Medical Institute offers a low-cost MBBS in Kyrgyzstan, making it highly suitable for middle-class students. The total fees are much lower compared to private medical colleges in India."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Students can take admission without paying any donation or hidden charges, ensuring a transparent and budget-friendly process."
                },
                {
                    "Heading": "English Medium Education",
                    "Details": "The MBBS program is taught in English, which eliminates language barriers for Indian and international students."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major bodies like NMC (India), WHO, and FAIMER, allowing students to appear for FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Simple Admission Process",
                    "Details": "Admission is easy and hassle-free. Students only need to qualify NEET, with no additional entrance exams required."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students get hands-on training in affiliated hospitals, which helps them gain real-world medical experience."
                },
                {
                    "Heading": "Modern Infrastructure",
                    "Details": "The institute provides advanced laboratories, digital classrooms, and medical facilities, enhancing the learning experience."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Located near Bishkek, the campus offers a safe, peaceful, and comfortable environment for international students."
                },
                {
                    "Heading": "Indian Food & Hostel Facilities",
                    "Details": "The university provides separate hostels and Indian food options, making it easy for Indian students to adjust."
                }
            ]
        },
        "SyllabusIntro": "The MBBS in Asian Medical Institute follows a globally structured curriculum divided into pre-clinical, para-clinical, and clinical phases. The course duration is 5 years of academic study + 1 year of internship, focusing on both theoretical knowledge and practical hospital training.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Histology, Physiology, Biochemistry"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathophysiology, Pediatrics, Genetics, Preventive & Social Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Surgery, Neurology, Oncology, Internal Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Obstetrics & Gynecology, Pediatrics, ENT, Psychiatry, Cardiology, Emergency Medicine"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Clinical Rotations in Hospitals)"
                }
            ]
        },
        "feesIntro": "The MBBS in Asian Medical Institute is one of the most affordable options for MBBS in Kyrgyzstan, with a low-cost fee structure suitable for Indian students. Below is the updated and accurate fee structure (approx. 2026 session):",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$3,400",
                    "hostel": "$450",
                    "total": "₹3.2 – 3.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS in Asian Medical Institute follows an internationally accepted structure with a total duration of 6 years, which includes academic study as well as clinical internship. The course is designed to provide both strong theoretical knowledge and practical medical training.",
        "duration": {
            "headers": [
                "Particulars",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Particulars": "Academic Duration",
                    "Duration": "5 Years",
                    "Details": "Classroom learning, laboratory work, and early clinical exposure"
                },
                {
                    "Particulars": "Internship",
                    "Duration": "1 Year",
                    "Details": "Compulsory hospital training with real patient interaction"
                },
                {
                    "Particulars": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Complete MBBS program"
                }
            ]
        },
        "studentSupport": "Asian Medical Institute provides a strong and student-friendly support system to ensure that international students pursuing MBBS in Kyrgyzstan have a smooth and comfortable journey. The university offers complete assistance from admission to settlement, including help with documentation, visa processing, and initial accommodation, making it easier for students to adapt to a new country. Students are provided with modern hostel facilities that include fully furnished rooms, Wi-Fi, heating systems, and 24/7 security with CCTV surveillance, ensuring a safe and secure living environment. Separate hostels are available for boys and girls, along with Indian food facilities, which help Indian students feel at home. The institute also supports students academically through experienced faculty, small batch sizes, modern laboratories, libraries, and simulation centers, ensuring quality education and practical learning. Additionally, students receive clinical training in affiliated hospitals, where they gain real patient exposure and hands-on medical experience. For daily life support, the university provides facilities like transport services between hostel and hospitals, laundry services, canteens, and nearby essential stores, helping students focus on their studies without worrying about basic needs. Apart from academics, the university promotes overall development by organizing cultural events, sports activities, festivals, and student engagement programs, creating a vibrant and multicultural environment for international students.",
        "recognition": "Asian Medical Institute is a well-recognized medical institution that holds strong affiliations with national and international bodies, ensuring that its MBBS degree is globally accepted. The institute is officially approved by the Ministry of Education & Science of the Kyrgyz Republic and the Ministry of Health of Kyrgyzstan, which confirms its credibility as a government-recognized institution. It is also recognized by the National Medical Commission (NMC), India, allowing Indian students to appear for licensing exams like FMGE/NExT after completing their MBBS abroad. Additionally, the university is listed with the World Health Organization (WHO) and included in the World Directory of Medical Schools (WDOMS), ensuring global recognition of its degree. It is also acknowledged by FAIMER (Foundation for Advancement of International Medical Education and Research), which further enhances its international credibility. These recognitions allow graduates to pursue medical careers not only in India but also in countries like the USA, UK, and other parts of the world through exams such as USMLE and PLAB.",
        "hostelFacilities": "Students are provided with modern hostel facilities that include fully furnished rooms, Wi-Fi, heating systems, and 24/7 security with CCTV surveillance, ensuring a safe and secure living environment. Separate hostels are available for boys and girls, along with Indian food facilities, which help Indian students feel at home. The university provides facilities like transport services between hostel and hospitals, laundry services, canteens, and nearby essential stores, helping students focus on their studies without worrying about basic needs.",
        "studentLife": "Student life at Asian Medical Institute is comfortable, engaging, and well-balanced, making it an ideal choice for students pursuing MBBS in Kyrgyzstan and MBBS abroad. The institute offers a friendly and multicultural environment where students from different countries live and study together, helping them gain international exposure and develop strong interpersonal skills. Students are provided with safe and fully furnished hostel facilities equipped with Wi-Fi, heating systems, and 24/7 security, ensuring a secure and comfortable stay. The availability of Indian food and mess facilities makes it easier for Indian students to adjust to life abroad without major lifestyle changes. Academically, the institute provides a structured environment with modern classrooms, well-equipped laboratories, and libraries, supporting both theoretical and practical learning. Students also receive clinical training in affiliated hospitals, where they gain hands-on experience and interact with real patients, which is essential for building strong medical skills. Apart from academics, students actively participate in sports activities, cultural events, seminars, and festivals like Diwali, Holi, and New Year, creating a lively and homely atmosphere on campus. The institute also encourages students to join clubs and extracurricular activities, which help in personality development, leadership skills, and overall growth.",
        "whyChooseUsIntro": "Choosing iExplain Education for admission in MBBS at Asian Medical Institute ensures a safe, transparent, and fully guided process. With expert counselling, end-to-end support, and a student-first approach, it helps students confidently start their journey toward a successful medical career abroad.",
        "whyChooseUs": [
            "Expert MBBS Abroad Counselling: iExplain Education provides professional guidance to help students choose the right university based on their NEET score, budget, and career goals",
            "Student-Centric Approach: Unlike many consultants, they focus on personalized guidance by understanding each student’s strengths, preferences, and future plans instead of promoting random universities",
            "Complete Admission Assistance: From university selection to application and admission confirmation, everything is handled step-by-step for a smooth and hassle-free process",
            "Transparent & Honest Process: They provide accurate information, no hidden charges, and genuine counselling, helping students make the right decision without confusion",
            "Visa & Travel Support: Full assistance is provided for visa processing, forex, and travel arrangements, making the transition abroad easy for students",
            "Pre & Post-Departure Support: Support continues even after admission, including airport pickup, hostel arrangement, and settling abroad",
            "FMGE/NExT Preparation Guidance: Students also receive guidance for licensing exams, which is crucial after completing MBBS abroad",
            "Wide Global Network: They work with multiple countries like Kyrgyzstan, Russia, Georgia, Kazakhstan, and more, giving students multiple options to choose from",
            "One-Stop Solution: From career counselling to admission, visa, and post-arrival support, everything is available under one platform"
        ],
        "documents": [
            {
                "document": "Passport",
                "details": "Valid passport (minimum 1–2 years validity)"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of date of birth and basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology (PCB)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Birth Certificate",
                "details": "In English or officially translated"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "General health check-up report"
            },
            {
                "document": "HIV Test Report",
                "details": "Required as per visa/medical guidelines"
            },
            {
                "document": "Invitation Letter",
                "details": "Issued by the university after admission confirmation"
            },
            {
                "document": "Admission Letter",
                "details": "Official confirmation from the university"
            }
        ],
        "conclusion": "Asian Medical Institute has emerged as one of the most reliable and preferred destinations for students planning to pursue MBBS in Kyrgyzstan and MBBS abroad at an affordable cost. The institute offers a perfect combination of quality medical education, globally recognized degree, and budget-friendly fee structure, making it especially suitable for middle-class Indian students who aspire to become doctors without facing the financial burden of expensive private medical colleges in India. The MBBS in Asian Medical Institute is designed according to international standards, focusing on both strong theoretical knowledge and practical clinical exposure, which helps students develop the necessary skills required in real-world medical practice. With English-medium education, experienced faculty, modern infrastructure, and well-equipped laboratories, students get a comprehensive learning experience. Additionally, the availability of hostel facilities, Indian food, and a safe, student-friendly environment ensures a comfortable lifestyle for international students. Moreover, the university’s recognition by major global bodies like NMC, WHO, and FAIMER opens doors for graduates to pursue medical careers not only in India but also in countries like the USA, UK, and other parts of the world after clearing the required licensing exams. The simple admission process, which requires only NEET qualification without any donation or entrance exam, further makes it a hassle-free option for students.",
        "faqs": [
            {
                "question": "Is Asian Medical Institute a good option for MBBS abroad?",
                "answer": "Yes, Asian Medical Institute is considered a good option for students planning to pursue MBBS in Kyrgyzstan due to its affordable fees, English-medium education, and global recognition. It is especially suitable for Indian students who have a limited budget but still want to obtain a quality medical degree from a recognized institution."
            },
            {
                "question": "What is the total fee for MBBS in Asian Medical Institute?",
                "answer": "The total cost of MBBS in Asian Medical Institute is approximately ₹20–25 lakhs, which includes tuition fees and hostel charges. This makes it one of the most affordable options compared to private medical colleges in India, where fees can go beyond ₹70 lakhs."
            },
            {
                "question": "Is NEET compulsory for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad. Without qualifying NEET, students will not be eligible to appear for licensing exams like FMGE/NExT in India."
            },
            {
                "question": "What is the duration of MBBS at Asian Medical Institute?",
                "answer": "The MBBS program duration is 6 years, which includes 5 years of academic study and 1 year of compulsory internship. This structure ensures both theoretical knowledge and practical clinical exposure."
            },
            {
                "question": "Is the MBBS degree valid in India?",
                "answer": "Yes, the degree is valid, but students must clear the FMGE/NExT exam conducted in India to get a license to practice as a doctor."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The entire MBBS course is taught in English, which makes it easier for Indian and international students to understand the subjects without any language barrier."
            },
            {
                "question": "Are hostel and Indian food facilities available?",
                "answer": "Yes, the university provides separate hostel facilities for boys and girls, along with Indian food options. This helps students adjust easily and feel comfortable while studying abroad."
            },
            {
                "question": "Is there any donation or capitation fee required?",
                "answer": "No, there is no donation or capitation fee required for admission. The process is completely transparent and based on NEET qualification."
            },
            {
                "question": "What kind of clinical exposure do students get?",
                "answer": "Students receive practical training in affiliated hospitals, where they interact with real patients and gain hands-on experience. This is essential for developing clinical skills."
            },
            {
                "question": "Is Kyrgyzstan safe for Indian students?",
                "answer": "Yes, Kyrgyzstan is considered a safe and student-friendly country. Universities provide proper security, and there is a good presence of Indian students, making it comfortable to live and study."
            }
        ]
    }
};