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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213942/Georgian_American_2_ssda3c.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213943/Georgian_American_p32m18.jpg",
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213941/Astana_Medical_rvl3ut.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213941/Astana_Medical_2_uwr6x1.jpg",
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213943/South_Kazakhstan_Medical_fhm4as.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213944/South_Kazakhstan_2_bbgjsw.jpg",
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213943/Osh_State_xh8cy8.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213943/Osh_State_2_kr2hu5.jpg",
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213942/Jalal-Abad_State_m6vlbc.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775213941/Jalal-Abad_State_2_qgywsi.jpg",
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
    },
    "tashkent-state-medical-university": {
        "title": "Tashkent State Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214617/Tashkent_State_mnljqn.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214617/Tashkent_State_2_mibgm9.jpg",
        "intro": {
            "text": "Tashkent State Medical University is one of the most prestigious and well-established medical universities in Uzbekistan, making it a top choice for students aspiring to pursue MBBS in Abroad. Founded with a vision to deliver high-quality medical education and research, the university has built a strong reputation among international students, especially those looking for MBBS in Uzbekistan at an affordable cost. With modern infrastructure, advanced laboratories, and globally recognized teaching methodologies, Tashkent State Medical University offers an excellent environment for medical studies.\n\nFor students planning to Study MBBS Abroad, Tashkent State Medical University provides a perfect blend of theoretical knowledge and practical exposure. The university follows international medical education standards and offers MBBS programs in English medium, which makes it highly attractive for Indian and other international students. The curriculum is designed to match global medical guidelines, helping students prepare for licensing exams like FMGE/NExT, USMLE, and PLAB.\n\nOne of the major advantages of choosing MBBS in Tashkent State Medical University is its affordable fee structure compared to private medical colleges in India. Students can complete their MBBS Abroad journey at a fraction of the cost while still receiving world-class education. Additionally, the cost of living in Uzbekistan is quite economical, making it a budget-friendly destination for medical aspirants.\n\nThe university is recognized by major global medical bodies such as the World Health Organization and the National Medical Commission, ensuring that the degree holds international value. This recognition allows graduates to practice medicine in different countries after clearing the required licensing exams.\n\nAnother key highlight of Study MBBS in Uzbekistan at Tashkent State Medical University is the availability of experienced faculty members and advanced clinical training in affiliated hospitals. Students gain hands-on experience, which is crucial for building strong medical skills. The university also emphasizes research, innovation, and practical learning, making it an ideal destination for those who want to build a successful medical career."
        },
        "quickOverview": {
            "University Name": "Tashkent State Medical University",
            "Location": "Tashkent, Uzbekistan",
            "Established": "2005 (formed by the merger of historic medical institutes)",
            "Type": "Government Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Medium of Teaching": "English & Uzbek",
            "Recognition": "World Health Organization, National Medical Commission",
            "Admission Process": "Direct Admission (No Entrance Exam, NEET required for Indian students)",
            "Eligibility": "10+2 with PCB (Physics, Chemistry, Biology) & NEET Qualification"
        },
        "benefits": {
            "intro": "Choosing the right university is crucial for a successful medical career, and Tashkent State Medical University stands out as an excellent option for students planning to study MBBS abroad. Here are the top reasons why it is a preferred destination for pursuing MBBS in Uzbekistan:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "One of the biggest advantages of studying at Tashkent State Medical University is its budget-friendly fee structure. Compared to private medical colleges in India, the cost of MBBS abroad here is significantly lower, making it ideal for middle-class students."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by prestigious organizations like the World Health Organization and the National Medical Commission. This ensures that students can appear for licensing exams such as FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "For international students, especially from India, the university offers MBBS courses in English. This removes the language barrier and makes learning easier and more effective."
                },
                {
                    "Heading": "High-Quality Education System",
                    "Details": "Tashkent State Medical University follows international medical education standards with a well-structured curriculum that combines theoretical knowledge with practical training."
                },
                {
                    "Heading": "Advanced Clinical Exposure",
                    "Details": "Students get hands-on experience in affiliated hospitals, which helps them develop real-world medical skills. Early clinical exposure is a major advantage for building confidence in patient care."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The university has highly qualified and experienced professors who focus on both academic excellence and practical learning, ensuring students receive quality education."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Located in Tashkent, the capital of Uzbekistan, the city is safe, modern, and well-developed, making it comfortable for international students."
                },
                {
                    "Heading": "Low Cost of Living",
                    "Details": "Apart from affordable tuition fees, the cost of living in Uzbekistan is quite economical, including accommodation, food, and transportation."
                },
                {
                    "Heading": "No Entrance Exam (Except NEET)",
                    "Details": "Admission to MBBS in Tashkent State Medical University is simple and hassle-free. Indian students only need to qualify NEET, with no additional entrance exams required."
                },
                {
                    "Heading": "Globally Accepted Career Opportunities",
                    "Details": "Graduates from Tashkent State Medical University can pursue medical careers worldwide after clearing respective licensing exams, opening doors to global opportunities."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Tashkent State Medical University is designed according to international medical education standards. It is a 6-year program (including internship) that focuses on both theoretical knowledge and practical clinical training. The curriculum is divided into basic sciences, pre-clinical, para-clinical, and clinical subjects.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Histology, Embryology, Medical Psychology, Medical Genetics, Basics of Medicine"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Pathophysiology, Radiology, Community Medicine, Clinical Basics"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Internal Medicine, Pediatrics, General Surgery, Obstetrics & Gynecology, Forensic Medicine, Epidemiology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Advanced Clinical Subjects: Medicine, Surgery, Psychiatry, Dermatology, ENT, Orthopedics, Ophthalmology, Radiology, Emergency Medicine"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Public Health, Community Medicine, Clinical Rotations, Hospital Training, Research Methodology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Hands-on training in Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, and other departments)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Tashkent State Medical University is considered highly affordable compared to many private medical colleges in India. Below is the latest approximate fee breakdown for international students pursuing MBBS in Uzbekistan:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$3,500 – $7,550 (includes one-time charges)",
                    "hostel": "Included / $500–$700",
                    "total": "₹6 – ₹6.5 Lakhs (Approx. Total)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$3,500",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – ₹3.5 Lakhs (Approx. Total)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$3,500",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – ₹3.5 Lakhs (Approx. Total)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$3,500",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – ₹3.5 Lakhs (Approx. Total)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$3,500",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – ₹3.5 Lakhs (Approx. Total)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$3,500",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – ₹3.5 Lakhs (Approx. Total)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Tashkent State Medical University is structured to provide both strong academic knowledge and practical clinical experience. The total duration of the course is:",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Total Course Duration",
                    "Duration": "6 Years",
                    "Details": "Complete MBBS program including academic study and internship"
                },
                {
                    "Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Basic subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Clinical Phase",
                    "Duration": "3 Years",
                    "Details": "Core medical subjects such as Medicine, Surgery, Pediatrics, etc."
                },
                {
                    "Phase": "Internship",
                    "Duration": "1 Years",
                    "Details": "Mandatory hands-on training in affiliated hospitals"
                }
            ]
        },
        "studentSupport": "Tashkent State Medical University provides a strong and well-structured student support system, making it an ideal choice for students planning to study MBBS abroad. The university offers complete assistance to international students, including help with admission procedures, visa processing, and settling in Tashkent, Uzbekistan. This ensures a smooth transition for students pursuing MBBS in Uzbekistan.\n\nThe university provides comfortable and fully equipped hostel facilities with modern amenities such as Wi-Fi, 24/7 security, and hygienic food, including Indian cuisine. This makes it easier for Indian students to adapt while studying MBBS abroad. In addition, on-campus medical services are available to take care of students’ health and well-being at all times.\n\nFrom an academic perspective, the university offers excellent support through experienced faculty, advanced laboratories, and well-stocked libraries. Students also receive strong clinical training in affiliated hospitals, which is essential for gaining practical knowledge during MBBS in Tashkent State Medical University. Counseling services are available to guide students academically and personally, helping them manage stress and adjust to a new environment.\n\nFurthermore, the university encourages participation in sports, cultural activities, and student clubs, promoting overall development. Language support is also provided to help students communicate effectively with patients during clinical practice. Career guidance for global licensing exams like FMGE/NExT, USMLE, and PLAB is another key advantage for students pursuing MBBS in abroad.",
        "recognition": "Tashkent State Medical University is one of the most reputed institutions for MBBS in Uzbekistan, known for its strong global affiliations, international recognition, and academic achievements. These factors make it a trusted choice for students planning to study MBBS abroad.\n\nThe university is officially recognized by major global medical organizations such as the World Health Organization and the National Medical Commission, which ensures that its MBBS degree is valid for Indian students and globally accepted. It is also listed in international directories like WDOMS and recognized by bodies such as UNESCO and WFME, further strengthening its credibility in the field of medical education.\n\nIn terms of affiliations, Tashkent State Medical University has established academic and research collaborations with several well-known international universities and institutions, including partnerships with European and Asian medical universities. It is also a member of the Association of European Medical Schools, which highlights its global academic integration and international standards. These collaborations help students gain better exposure, exchange opportunities, and access to advanced research.\n\nTalking about achievements, the university has a rich academic legacy and has been consistently recognized for its contribution to medical education and research. It has been ranked among the top medical universities globally in the field of Medicine by Times Higher Education rankings, marking its presence on the international stage. Additionally, its predecessor institution was awarded the prestigious Order of the Red Banner of Labour, reflecting its historical excellence in education and healthcare development. The university is also known for its strong research output, modern infrastructure, and multidisciplinary clinical training facilities.",
        "hostelFacilities": "The university provides comfortable and fully equipped hostel facilities with modern amenities such as Wi-Fi, 24/7 security, and hygienic food, including Indian cuisine. This makes it easier for Indian students to adapt while studying MBBS abroad. In addition, on-campus medical services are available to take care of students’ health and well-being at all times.",
        "studentLife": "Student life at Tashkent State Medical University is vibrant, diverse, and well-balanced, offering an ideal environment for students pursuing MBBS in Uzbekistan. The university not only focuses on academic excellence but also ensures that students enjoy a comfortable and engaging lifestyle while they study MBBS abroad in Tashkent, Uzbekistan.\n\nThe campus life is dynamic, with students from different countries, especially India, creating a multicultural atmosphere. This diversity helps students adapt quickly and build global connections during their MBBS abroad journey. The university provides well-maintained hostels with modern amenities like Wi-Fi, heating systems, security, and access to hygienic food, including Indian cuisine, ensuring a homely environment for international students.\n\nApart from academics, students actively participate in extracurricular activities such as sports, cultural programs, festivals, and student clubs. The university regularly organizes events, celebrations, and competitions that allow students to showcase their talents and relieve academic stress. Indian festivals like Diwali and Holi are also celebrated, making Indian students feel at home while studying MBBS in Tashkent State Medical University.\n\nThe city of Tashkent offers a safe and student-friendly environment with modern infrastructure, shopping centers, cafes, and recreational spots. Students can explore historical places, parks, and cultural landmarks during their free time, enhancing their overall experience of studying MBBS abroad.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important when planning to study MBBS abroad, and iExplain Education is considered a reliable partner for students seeking admission to top universities like Tashkent State Medical University. With years of experience and a student-focused approach, the consultancy provides complete guidance throughout the admission journey.",
        "whyChooseUs": [
            "Expert Counseling for MBBS Abroad: Get professional guidance to choose the best option for MBBS in Uzbekistan based on your budget and career goals.",
            "Complete Admission Assistance: End-to-end support for application, documentation, and securing admission in Tashkent State Medical University.",
            "Visa Support & Documentation: Proper guidance for visa processing with a high success rate, ensuring a smooth journey to study MBBS abroad.",
            "Personalized Guidance: One-on-one counseling to help students select the right university for MBBS in abroad.",
            "Affordable & Transparent Process: Clear information about fees, with no hidden charges for MBBS in Tashkent State Medical University.",
            "Pre-Departure Support: Assistance with travel arrangements, forex, and complete briefing before flying abroad.",
            "Post-Arrival Assistance: Help with accommodation, local support, and settling in Tashkent, Uzbekistan.",
            "FMGE/NExT Guidance: Support and advice for licensing exams after completing MBBS abroad.",
            "Strong University Network: Direct tie-ups with top universities, ensuring reliable admission for MBBS in Uzbekistan.",
            "Student-Centric Approach: Focus on student satisfaction, safety, and long-term career success."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled application form of the university"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Passport",
                "details": "Valid passport with at least 18 months validity"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Proof that student is medically fit"
            },
            {
                "document": "Admission/Invitation Letter",
                "details": "Issued by the university after approval"
            },
            {
                "document": "Visa Documents",
                "details": "Student visa application and supporting documents"
            },
            {
                "document": "Migration/Transfer Certificate",
                "details": "From previous school (if required)"
            }
        ],
        "conclusion": "In conclusion, preparing the required documents carefully is a crucial step for securing admission to Tashkent State Medical University. From academic certificates and NEET scorecard to passport, medical reports, and visa documents, each requirement plays an important role in ensuring a smooth admission process for students planning to study MBBS abroad. Proper verification, notarization, and timely submission of documents help avoid delays and increase the chances of successful admission. For students aiming to pursue MBBS in Uzbekistan, staying organized and following the guidelines correctly will make the entire process hassle-free. Overall, having complete and accurate documentation ensures a seamless journey toward achieving your dream of studying MBBS in abroad at Tashkent State Medical University.",
        "faqs": [
            {
                "question": "Is Tashkent State Medical University a good option for MBBS abroad?",
                "answer": "Yes, Tashkent State Medical University is considered one of the top choices for MBBS in Uzbekistan. It offers globally recognized degrees, affordable fees, modern infrastructure, and strong clinical exposure. The university follows international medical education standards, making it a reliable option for students planning to study MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at Tashkent State Medical University?",
                "answer": "The total duration of MBBS in Tashkent State Medical University is 6 years, which includes 5 years of academic study and 1 year of compulsory internship. This structure ensures both theoretical knowledge and practical clinical experience."
            },
            {
                "question": "Is NEET required for admission to Tashkent State Medical University?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to pursue MBBS abroad. It is also required to practice medicine in India after completing your degree."
            },
            {
                "question": "What is the medium of teaching at Tashkent State Medical University?",
                "answer": "The MBBS program is available in English medium for international students, which makes it easier for Indian students to study without any language barrier while pursuing MBBS in abroad."
            },
            {
                "question": "What is the fee structure for MBBS at Tashkent State Medical University?",
                "answer": "The total cost of MBBS in Uzbekistan at Tashkent State Medical University is quite affordable, usually ranging between ₹22–25 lakhs for the complete 6-year course, including tuition and hostel. This makes it a budget-friendly option compared to private medical colleges in India."
            },
            {
                "question": "Is the degree from Tashkent State Medical University valid in India?",
                "answer": "Yes, the degree is recognized by the National Medical Commission and World Health Organization. After completing MBBS, students must clear FMGE/NExT to practice in India."
            },
            {
                "question": "What are the eligibility criteria for MBBS admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology with at least 50% marks (40% for reserved categories). NEET qualification is compulsory for Indian students who want to study MBBS abroad."
            },
            {
                "question": "Are hostel and food facilities available for Indian students?",
                "answer": "Yes, the university provides well-equipped hostel facilities with modern amenities like Wi-Fi, security, and Indian food options. This ensures a comfortable stay for students pursuing MBBS in Tashkent State Medical University."
            },
            {
                "question": "Is Uzbekistan safe for Indian students?",
                "answer": "Yes, Uzbekistan is considered a safe country for international students. The capital, Tashkent, offers a secure and student-friendly environment with good infrastructure."
            },
            {
                "question": "What career options are available after MBBS from Tashkent State Medical University?",
                "answer": "After completing MBBS abroad, students can appear for licensing exams like FMGE/NExT (India), USMLE (USA), or PLAB (UK). They can also pursue postgraduate studies or practice medicine globally."
            }
        ]
    },
    "samarkand-state-medical-university": {
        "title": "Samarkand State Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214617/Samarkand_State_Medical_hotxyu.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214616/Samarkand_State_Medical_2_cglapk.jpg",
        "intro": {
            "text": "Samarkand State Medical University is one of the oldest and most prestigious medical universities in Uzbekistan, making it a top destination for students planning to study MBBS abroad. Established in 1930, the university has a rich legacy of excellence in medical education and has trained thousands of skilled doctors who are now practicing worldwide. It is especially popular among international students looking for MBBS in Uzbekistan at an affordable cost with global recognition.\n\nFor students aiming to pursue MBBS in abroad, Samarkand State Medical University offers a well-structured and internationally aligned curriculum that combines theoretical knowledge with practical clinical training. The university provides MBBS programs in English medium, making it convenient for Indian and other international students. Its focus on modern teaching methodologies, advanced laboratories, and hands-on hospital training ensures that students gain real-world medical experience.\n\nOne of the major advantages of choosing MBBS in Samarkand State Medical University is its cost-effective fee structure. Compared to private medical colleges in India, the university offers quality education at a much lower cost, making it an ideal choice for students from middle-income families who want to study MBBS abroad without financial burden. Additionally, the cost of living in Uzbekistan is quite affordable, further reducing the overall expenses.\n\nThe university is recognized by global medical bodies such as the World Health Organization and the National Medical Commission, ensuring that the degree is valid internationally. This allows students to appear for licensing exams like FMGE/NExT, USMLE, and PLAB after completing their MBBS in abroad.\n\nLocated in the historic city of Samarkand, the university provides a safe, student-friendly, and culturally rich environment. Students not only receive quality education but also experience a vibrant lifestyle while studying MBBS in Uzbekistan."
        },
        "quickOverview": {
            "University Name": "Samarkand State Medical University",
            "Location": "Samarkand, Uzbekistan",
            "Established": "1930",
            "Type": "Government Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Medium of Teaching": "English & Uzbek",
            "Recognition": "World Health Organization, National Medical Commission",
            "Eligibility": "10+2 with PCB (Physics, Chemistry, Biology) + NEET Qualification",
            "Admission Process": "Direct Admission (No Entrance Exam, NEET required for Indian students)",
            "Clinical Training": "Provided in affiliated hospitals with hands-on experience"
        },
        "benefits": {
            "intro": "Choosing the right university is a crucial step for building a successful medical career, and Samarkand State Medical University stands out as a top option for students planning to study MBBS abroad. Here are the key reasons why it is a preferred destination for pursuing MBBS in Uzbekistan:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "The university offers a cost-effective fee structure, making it an excellent choice for students looking for low-cost MBBS abroad. Compared to private medical colleges in India, the overall expense is much lower."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by international organizations such as the World Health Organization and the National Medical Commission, allowing graduates to practice medicine globally after clearing required exams."
                },
                {
                    "Heading": "English-Medium Education",
                    "Details": "For international students, especially from India, the MBBS program is available in English, making it easier to understand and study without language barriers."
                },
                {
                    "Heading": "High-Quality Education System",
                    "Details": "Samarkand State Medical University follows international standards with a well-structured curriculum that balances theory and practical training."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students receive hands-on clinical training in affiliated hospitals, which helps in gaining real-world medical experience during MBBS in Samarkand State Medical University."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The university has highly qualified and experienced professors dedicated to providing quality medical education."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Located in Samarkand, a historic and peaceful city in Uzbekistan, the environment is safe and ideal for international students."
                },
                {
                    "Heading": "Low Cost of Living",
                    "Details": "Apart from affordable tuition fees, the cost of living in Uzbekistan is quite economical, including accommodation, food, and transportation."
                },
                {
                    "Heading": "No Entrance Exam (Except NEET)",
                    "Details": "Admission is simple and hassle-free. Indian students only need to qualify NEET to pursue MBBS abroad."
                },
                {
                    "Heading": "Global Career Opportunities",
                    "Details": "Graduates can appear for licensing exams like FMGE/NExT, USMLE, and PLAB, opening doors to international medical careers after completing MBBS in abroad."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Samarkand State Medical University is designed as a 6-year program (5 years academic + 1 year internship), focusing on both theoretical knowledge and practical clinical training. The curriculum follows international standards, making it ideal for students planning to study MBBS abroad and pursue MBBS in Uzbekistan.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Medical Chemistry, Biology, Biophysics, Histology, Embryology, Medical Terminology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Immunology, Clinical Anatomy, Physiology, Patient Care"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Forensic Medicine, Community Medicine, Radiology, ENT, General Surgery, Internal Medicine, Obstetrics & Gynecology (Intro)"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Radiology, Hygiene"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Ophthalmology, Psychiatry, Oncology, Clinical Immunology, Medical Genetics, Epidemiology, Infectious Diseases"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Clinical rotations in Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency, etc.)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Samarkand State Medical University is highly affordable, making it a popular choice for students planning to study MBBS abroad and pursue MBBS in Uzbekistan.",
        "fees": {
            "structure": [
                {
                    "year": "1 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                },
                {
                    "year": "2 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                },
                {
                    "year": "3 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                },
                {
                    "year": "4 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                },
                {
                    "year": "5 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                },
                {
                    "year": "6 year",
                    "tuition": "$3,850",
                    "hostel": "$600",
                    "total": "$4,450 (Approx. ₹3.7 Lakhs)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Samarkand State Medical University is structured according to international medical education standards, making it suitable for students planning to study MBBS abroad and pursue MBBS in Uzbekistan.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Total Course Duration",
                    "Duration": "6 year",
                    "Details": "Complete MBBS program including academics and internship"
                },
                {
                    "Phase": "Academic Study",
                    "Duration": "5 year",
                    "Details": "Theoretical + practical classroom and clinical learning"
                },
                {
                    "Phase": "Internship",
                    "Duration": "1 year",
                    "Details": "Mandatory hands-on training in affiliated hospitals"
                }
            ]
        },
        "studentSupport": "Samarkand State Medical University offers a comprehensive and student-friendly support system, making it a great choice for students planning to study MBBS abroad and pursue MBBS in Uzbekistan. The university focuses on providing both academic and personal support to ensure that students have a smooth and successful learning experience. The university provides excellent hostel and accommodation facilities, with multiple dormitories equipped with modern amenities such as furnished rooms, common areas, and essential facilities for comfortable living. These hostels can accommodate a large number of international students, including those from India, ensuring a safe and convenient stay while pursuing MBBS abroad. For academic support, the university offers modern classrooms, advanced laboratories, and research facilities, along with experienced faculty members who guide students throughout their medical education. Students also benefit from clinical training in affiliated hospitals and simulation labs, which helps them gain practical knowledge during their MBBS in Samarkand State Medical University. The university also provides strong financial support systems, including scholarships, tuition fee waivers, and grants for deserving and economically weaker students. In addition, students have access to subsidized food services, food assistance programs, and basic living support, ensuring that their daily needs are taken care of without financial stress. The university encourages participation in student clubs, research groups, and scientific societies, where students can engage in research, attend international conferences, and enhance their skills beyond academics.",
        "recognition": "Samarkand State Medical University is one of the most reputed government medical universities in Uzbekistan, known for its strong academic affiliations and global recognition in the field of medical education. The university operates under the Ministry of Health of Uzbekistan, which ensures that all academic programs, including MBBS in Uzbekistan, follow strict national and international standards. Over the years, it has developed collaborations and partnerships with various international universities, research organizations, and medical institutions, allowing students to gain global exposure, participate in exchange programs, and access advanced research opportunities. In terms of recognition, the university is approved by major global medical bodies such as the World Health Organization and the National Medical Commission, which ensures that the medical degree is globally accepted. This recognition is especially important for Indian students, as it allows them to appear for licensing exams like FMGE/NExT after completing their MBBS in abroad. Additionally, the university is listed in international medical directories such as WDOMS and follows global medical education guidelines, which further enhances its credibility. Talking about achievements, Samarkand State Medical University has earned international accreditation from reputed organizations like ECAQA, which reflects its commitment to maintaining high-quality education and healthcare standards. The university has consistently contributed to the advancement of medical science through its well-established research centers, laboratories, and teaching hospitals. Moreover, the university has produced thousands of qualified doctors and healthcare professionals who are now successfully working in different countries across the world, highlighting its strong academic legacy.",
        "hostelFacilities": "The university provides well-equipped hostels with modern amenities like Wi-Fi, security, and hygienic food, including Indian food options. These hostels can accommodate a large number of international students, including those from India, ensuring a safe and convenient stay while pursuing MBBS abroad. Students have access to subsidized food services, food assistance programs, and basic living support, ensuring that their daily needs are taken care of without financial stress.",
        "studentLife": "Student life at Samarkand State Medical University is vibrant, diverse, and well-balanced, offering an enriching experience for students pursuing MBBS in Uzbekistan. The university not only focuses on academic excellence but also ensures that students enjoy a comfortable and engaging lifestyle while they study MBBS abroad in Samarkand, Uzbekistan. With a multicultural environment and a large number of international students, especially from India, students get the opportunity to interact with peers from different backgrounds and build global connections. The university provides well-maintained hostel facilities with modern amenities such as Wi-Fi, heating systems, 24/7 security, and access to hygienic food, including Indian cuisine. Apart from academics, students actively participate in various extracurricular activities such as sports, cultural events, and student clubs. The university regularly organizes festivals, competitions, and international events where students can showcase their talents and reduce academic stress. Indian festivals like Diwali and Holi are also celebrated, creating a familiar and joyful environment for Indian students studying MBBS in Samarkand State Medical University. The city of Samarkand offers a unique blend of historical charm and modern lifestyle. Students can explore famous landmarks, parks, cafes, and shopping centers during their free time, making their journey of studying MBBS abroad more enjoyable.",
        "whyChooseUsIntro": "Choosing the right consultancy plays a crucial role when planning to study MBBS abroad, and iExplain Education is a trusted partner for students seeking admission to top universities like Samarkand State Medical University. Here are the key reasons why students prefer iExplain Education for MBBS in Uzbekistan:",
        "whyChooseUs": [
            "Expert Counseling for MBBS Abroad – Get professional guidance to choose the best university for MBBS in abroad based on your budget, academic profile, and career goals.",
            "Complete Admission Assistance – End-to-end support for application, documentation, and securing admission in Samarkand State Medical University.",
            "Visa Processing Support – Proper assistance with visa documentation and a high success rate, ensuring a smooth process to study MBBS abroad.",
            "Personalized Guidance – One-on-one counseling to help students make the right decision for MBBS in Uzbekistan.",
            "Transparent & Affordable Process – Clear information about fees and admission procedures with no hidden charges for MBBS abroad.",
            "Pre-Departure Assistance – Guidance on travel arrangements, forex exchange, and complete briefing before leaving India.",
            "Post-Arrival Support – Assistance with accommodation and settling in Samarkand, Uzbekistan.",
            "FMGE/NExT Guidance – Support for preparing licensing exams after completing MBBS in abroad.",
            "Strong University Network – Direct partnerships with top universities ensure reliable and secure admission.",
            "Student-Centric Approach – Focus on student satisfaction, safety, and long-term career success."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled university application form"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Birth Certificate",
                "details": "Proof of age (translated if required)"
            },
            {
                "document": "Passport",
                "details": "Valid passport (minimum 18–24 months validity)"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Including HIV, Hepatitis B & C reports"
            },
            {
                "document": "Migration Certificate",
                "details": "From previous school/college (if required)"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after document verification"
            }
        ],
        "conclusion": "In conclusion, having the correct and complete set of documents is essential for securing admission to Samarkand State Medical University. From academic certificates and NEET scorecard to passport, medical reports, and visa documents, each requirement plays a vital role in ensuring a smooth and hassle-free admission process for students planning to study MBBS abroad. Proper verification, attestation, and timely submission of documents help avoid delays and increase the chances of successful admission. For students aiming to pursue MBBS in Uzbekistan, staying organized and following all guidelines carefully is extremely important. Overall, accurate documentation ensures a seamless transition into your medical journey and helps you confidently begin your MBBS in abroad at Samarkand State Medical University, paving the way for a successful global medical career.",
        "faqs": [
            {
                "question": "Is Samarkand State Medical University a good choice for MBBS abroad?",
                "answer": "Yes, Samarkand State Medical University is one of the top choices for MBBS in Uzbekistan. It offers quality education, affordable fees, global recognition, and strong clinical exposure, making it ideal for students who want to study MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at Samarkand State Medical University?",
                "answer": "The total duration of MBBS in Samarkand State Medical University is 6 years, including 5 years of academic study and 1 year of mandatory internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is compulsory for Indian students who wish to pursue MBBS abroad and later practice in India."
            },
            {
                "question": "What is the medium of teaching?",
                "answer": "The MBBS program is offered in English medium for international students, which makes it convenient for Indian students to study without language barriers."
            },
            {
                "question": "What is the total fee for MBBS?",
                "answer": "The total cost of MBBS in Uzbekistan at this university is approximately ₹25–27 lakhs for the complete 6-year course, making it an affordable option for MBBS abroad."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is recognized by the National Medical Commission and World Health Organization. Graduates must clear FMGE/NExT to practice in India."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides well-equipped hostels with modern amenities like Wi-Fi, security, and hygienic food, including Indian food options."
            },
            {
                "question": "Is Uzbekistan safe for Indian students?",
                "answer": "Yes, Uzbekistan is a safe country for international students. The city of Samarkand is peaceful and student-friendly."
            },
            {
                "question": "What are the eligibility criteria for admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology with at least 50% marks (40% for reserved categories) and must qualify NEET."
            },
            {
                "question": "What career options are available after MBBS?",
                "answer": "After completing MBBS abroad, students can appear for licensing exams like FMGE/NExT (India), USMLE (USA), or PLAB (UK), or pursue postgraduate studies and medical practice globally."
            }
        ]
    },
    "bukhara-state-medical-institute": {
        "title": "Bukhara State Medical Institute",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214614/Bukhara_State_Medical_g1xz0i.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214614/Bukhara_State_Medical_2_dmtleb.jpg",
        "intro": {
            "text": "Bukhara State Medical Institute is one of the leading government medical universities in Uzbekistan, widely known for providing high-quality medical education at an affordable cost. Established in 1990, the institute has gained strong popularity among international students, especially those planning to study MBBS abroad and looking for a reliable option for MBBS in Uzbekistan.\n\nFor students aiming to pursue MBBS in abroad, Bukhara State Medical Institute offers a well-structured and globally aligned curriculum that focuses on both theoretical knowledge and practical clinical training. The university provides MBBS programs in English medium, making it convenient for Indian and other international students. With modern infrastructure, advanced laboratories, and experienced faculty, the institute ensures a high standard of education.\n\nOne of the major advantages of choosing MBBS in Bukhara State Medical Institute is its affordable fee structure. Compared to private medical colleges in India, the cost of MBBS abroad here is significantly lower, making it an ideal choice for students from middle-income families. Additionally, the cost of living in Uzbekistan is economical, which further reduces the overall expenses for students.\n\nThe institute is recognized by major global medical organizations such as the World Health Organization and the National Medical Commission, ensuring that the degree is globally accepted. This allows students to appear for licensing exams like FMGE/NExT, USMLE, and PLAB after completing their MBBS in abroad.\n\nLocated in the historic city of Bukhara, the institute offers a safe, peaceful, and culturally rich environment for students. It provides a perfect blend of academic excellence and comfortable living, making it an attractive destination for those planning to study MBBS abroad."
        },
        "quickOverview": {
            "University Name": "Bukhara State Medical Institute",
            "Location": "Bukhara, Uzbekistan",
            "Established": "1990",
            "Type": "Government Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Medium of Teaching": "English & Uzbek",
            "Recognition": "World Health Organization, National Medical Commission",
            "Eligibility": "10+2 with PCB (Physics, Chemistry, Biology) + NEET Qualification",
            "Admission Process": "Direct Admission (No Entrance Exam, NEET required for Indian students)",
            "Hostel Facility": "Available (Separate for Boys & Girls)"
        },
        "benefits": {
            "intro": "Choosing the right university is essential for a successful medical career, and Bukhara State Medical Institute is a great option for students planning to study MBBS abroad. Here are the key reasons why it is a preferred destination for pursuing MBBS in Uzbekistan:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "The institute offers a budget-friendly fee structure, making it an ideal choice for students looking for low-cost MBBS abroad. The total cost is much lower compared to private medical colleges in India."
                },
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by international organizations such as the World Health Organization and the National Medical Commission, allowing graduates to pursue medical careers worldwide."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The MBBS course is available in English, which helps international students, especially from India, to study without language barriers while pursuing MBBS abroad."
                },
                {
                    "Heading": "High-Quality Education System",
                    "Details": "Bukhara State Medical Institute follows international medical education standards with a well-structured curriculum combining theory and practical training."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students receive hands-on training in affiliated hospitals, which is essential for gaining real-world experience during MBBS in Bukhara State Medical Institute."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The institute has highly qualified and experienced professors who focus on both academic excellence and practical knowledge."
                },
                {
                    "Heading": "Safe & Peaceful Environment",
                    "Details": "Located in Bukhara, a historic and calm city in Uzbekistan, it provides a safe and student-friendly environment."
                },
                {
                    "Heading": "Low Cost of Living",
                    "Details": "Apart from low tuition fees, the cost of living in Uzbekistan is very affordable, including accommodation, food, and transportation."
                },
                {
                    "Heading": "Simple Admission Process",
                    "Details": "Admission is easy and hassle-free. Indian students only need to qualify NEET to pursue MBBS in abroad."
                },
                {
                    "Heading": "Global Career Opportunities",
                    "Details": "Graduates can appear for exams like FMGE/NExT, USMLE, and PLAB, opening doors to international medical careers after completing MBBS abroad."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Bukhara State Medical Institute is designed according to international medical education standards. It is a 6-year program (including internship) that focuses on building a strong foundation in basic sciences followed by advanced clinical training. The curriculum is divided into pre-clinical, para-clinical, and clinical phases, ensuring students are well-prepared for global medical careers and licensing exams.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Medical Chemistry, Bioorganic Chemistry, Anatomy, Histology, Embryology, Psychology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Physiology, Biochemistry, Microbiology, Patient Care, Emergency Medicine"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Pathology, Pharmacology, Pathophysiology, Internal Medicine (Intro), General Surgery"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Pediatrics, Oncology, Neurology, Obstetrics & Gynecology, Surgery"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Psychiatry, Cardiology, ENT, Clinical Immunology, Medical Genetics"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Clinical rotations in Medicine, Surgery, Pediatrics, OB-GYN, etc.)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Bukhara State Medical Institute is highly affordable, making it a top choice for students planning to study MBBS abroad and pursue MBBS in Uzbekistan. Below is the approximate and updated fee structure for international students:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$3,200",
                    "hostel": "$400–$600",
                    "total": "₹3.1 – 3.3 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Bukhara State Medical Institute follows international medical education standards and is designed to provide both theoretical knowledge and practical clinical training for students planning to study MBBS abroad.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Total Course Duration",
                    "Duration": "6 Years",
                    "Details": "Complete MBBS program including academics and internship"
                },
                {
                    "Phase": "Academic Study",
                    "Duration": "5 Years",
                    "Details": "Classroom learning + practical training (pre-clinical, para-clinical & clinical subjects)"
                },
                {
                    "Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Mandatory clinical internship in affiliated hospitals"
                }
            ]
        },
        "studentSupport": "Bukhara State Medical Institute provides a strong and well-structured student support system, making it an excellent choice for students planning to study MBBS abroad and pursue MBBS in Uzbekistan. The university ensures that both academic and personal needs of students are taken care of, helping them adjust smoothly to a new environment.\n\nThe institute offers modern hostel and accommodation facilities for international students, including Indian students. Hostels are well-furnished with essential amenities such as beds, study tables, Wi-Fi, heating systems, and 24/7 electricity and water supply. Separate hostel arrangements are available for boys and girls, with strict security systems, wardens, and CCTV surveillance to ensure student safety. Additionally, facilities like laundry, gym, shared kitchens, and recreational areas are also provided, creating a comfortable living environment.\n\nTo further support accommodation needs, the university has expanded its housing capacity with multiple dormitories and even provides assistance in finding rental apartments near the campus for students who prefer off-campus living. Dedicated support centers and online assistance systems are also available to help students with accommodation-related queries.\n\nIn terms of academic support, the university provides advanced laboratories, digital classrooms, libraries, and experienced faculty guidance. Students receive continuous mentoring and hands-on clinical training in affiliated hospitals, which is essential for building practical skills during MBBS in Bukhara State Medical Institute.\n\nThe institute also ensures food and daily living support, with Indian food options available in hostels and nearby areas. This helps international students feel more comfortable and reduces cultural adjustment challenges.\n\nAdditionally, the university promotes student well-being through sports facilities, cultural activities, student clubs, and research opportunities, encouraging overall personality development. A multicultural environment with students from different countries helps build global exposure and networking opportunities.",
        "recognition": "Bukhara State Medical Institute is a well-established government medical university in Uzbekistan, known for its strong academic affiliations, global recognition, and consistent achievements in the field of medical education. The institute is affiliated with the Ministry of Health of Uzbekistan, which ensures that its academic programs meet national and international standards. This affiliation guarantees quality education and structured clinical training for students pursuing MBBS in Uzbekistan.\n\nIn terms of recognition, the institute is approved by major global medical bodies such as the World Health Organization and the National Medical Commission. It is also listed in international medical directories like WDOMS, which confirms the global validity of its MBBS degree. These recognitions are especially important for Indian students who wish to study MBBS abroad, as they allow graduates to appear for licensing exams like FMGE/NExT, USMLE, and PLAB.\n\nTalking about achievements, Bukhara State Medical Institute has made significant contributions to medical education and healthcare research. The university regularly organizes international conferences, seminars, and workshops that enhance academic exposure for students and faculty. It has developed modern infrastructure, advanced laboratories, and well-equipped teaching hospitals to support practical learning. Over the years, the institute has produced thousands of skilled medical professionals who are now successfully working in different parts of the world.\n\nWith its strong government affiliation, global recognition, and continuous academic achievements, Bukhara State Medical Institute stands as a reliable and preferred destination for students planning to pursue MBBS in abroad, offering quality education and excellent career opportunities in the medical field.",
        "hostelFacilities": "The institute offers modern hostel and accommodation facilities for international students, including Indian students. Hostels are well-furnished with essential amenities such as beds, study tables, Wi-Fi, heating systems, and 24/7 electricity and water supply. Separate hostel arrangements are available for boys and girls, with strict security systems, wardens, and CCTV surveillance to ensure student safety. Additionally, facilities like laundry, gym, shared kitchens, and recreational areas are also provided, creating a comfortable living environment. Indian food options are available in hostels and nearby areas, helping international students feel more comfortable.",
        "studentLife": "Student life at Bukhara State Medical Institute is vibrant, comfortable, and well-balanced, making it an excellent experience for students pursuing MBBS in Uzbekistan. The institute focuses not only on academics but also on the overall development and well-being of students who choose to study MBBS abroad in Bukhara, Uzbekistan.\n\nThe campus provides a multicultural environment with students from different countries, especially India, which helps international students adapt quickly and feel at home. The university offers well-maintained hostels equipped with modern facilities such as Wi-Fi, heating, security, and hygienic food options, including Indian cuisine. This ensures a comfortable and safe stay for students during their MBBS abroad journey.\n\nApart from academics, students actively participate in extracurricular activities like sports, cultural events, and student clubs. The institute organizes various programs, festivals, and competitions throughout the year, allowing students to showcase their talents and reduce academic stress. Indian festivals such as Diwali and Holi are also celebrated, creating a familiar and enjoyable environment for Indian students studying MBBS in Bukhara State Medical Institute.\n\nThe city of Bukhara is known for its peaceful atmosphere and rich cultural heritage. Students can explore historical landmarks, markets, parks, and cafes during their free time, enhancing their overall experience of studying MBBS abroad. Public transportation is affordable and easily accessible, making daily life convenient for students.\n\nAcademically, students benefit from a structured schedule that balances classroom learning with clinical training in hospitals. This helps them gain both theoretical knowledge and practical experience, which is essential for building a successful medical career.",
        "whyChooseUsIntro": "Choosing the right consultancy is a key step when planning to study MBBS abroad, and iExplain Education is a trusted partner for students seeking admission to top universities like Bukhara State Medical Institute. Here are the main reasons why students prefer iExplain Education for MBBS in Uzbekistan:",
        "whyChooseUs": [
            "Expert Counseling for MBBS Abroad – Get professional guidance to choose the best option for MBBS in abroad based on your academic profile, budget, and career goals.",
            "Complete Admission Assistance – End-to-end support for application, documentation, and securing admission in Bukhara State Medical Institute.",
            "Visa Processing Support – Proper guidance for visa documentation with a high success rate, ensuring a smooth process to study MBBS abroad.",
            "Personalized Guidance – One-on-one counseling to help students select the right university for MBBS in Uzbekistan.",
            "Transparent & Affordable Process – Clear and honest information about fees, admission process, and expenses with no hidden charges.",
            "Pre-Departure Assistance – Support with travel arrangements, forex exchange, and complete guidance before leaving India.",
            "Post-Arrival Support – Assistance with accommodation and settling in Bukhara, Uzbekistan.",
            "FMGE/NExT Guidance – Guidance and support for licensing exams after completing MBBS abroad.",
            "Strong University Network – Direct partnerships with reputed universities ensure safe and reliable admission.",
            "Student-Centric Approach – Focus on student satisfaction, safety, and long-term career success."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled university application form"
            },
            {
                "document": "Passport",
                "details": "Valid passport (minimum 18–24 months validity)"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "General health certificate"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after approval"
            },
            {
                "document": "Visa Documents",
                "details": "Student visa application & supporting documents"
            }
        ],
        "conclusion": "In conclusion, preparing all the required documents accurately and on time is a crucial step for securing admission to Bukhara State Medical Institute. From academic certificates and NEET scorecard to passport, medical reports, and visa documents, each requirement plays an important role in ensuring a smooth and hassle-free admission process for students planning to study MBBS abroad. Proper verification, attestation, and timely submission of documents help avoid delays and increase the chances of successful admission. For students aiming to pursue MBBS in Uzbekistan, staying organized and following all guidelines carefully is essential. Overall, having complete and accurate documentation ensures a seamless transition into your medical journey and helps you confidently begin your MBBS in abroad at Bukhara State Medical Institute, paving the way for a successful global medical career.",
        "faqs": [
            {
                "question": "Is Bukhara State Medical Institute a good choice for MBBS abroad?",
                "answer": "Yes, Bukhara State Medical Institute is a popular and reliable option for MBBS in Uzbekistan. It offers quality education, affordable fees, and global recognition, making it a great choice for students who want to study MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at Bukhara State Medical Institute?",
                "answer": "The total duration of MBBS in Bukhara State Medical Institute is 6 years, including 5 years of academic study and 1 year of mandatory internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS abroad and practice in India."
            },
            {
                "question": "What is the medium of teaching?",
                "answer": "The MBBS program is offered in English medium for international students, which makes it easy for Indian students to study without language barriers."
            },
            {
                "question": "What is the total fee for MBBS?",
                "answer": "The total cost of MBBS in Uzbekistan at this institute is approximately ₹19–22 lakhs for the complete course, making it a budget-friendly option for MBBS abroad."
            },
            {
                "question": "Is the degree valid in India?",
                "answer": "Yes, the degree is recognized by the National Medical Commission and the World Health Organization. Students need to clear FMGE/NExT to practice in India."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the institute provides well-equipped hostels with modern amenities like Wi-Fi, security, and hygienic food, including Indian food options."
            },
            {
                "question": "Is Uzbekistan safe for Indian students?",
                "answer": "Yes, Uzbekistan is a safe country for international students. Bukhara is peaceful and student-friendly."
            },
            {
                "question": "What are the eligibility criteria for admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology with at least 50% marks (40% for reserved categories) and must qualify NEET."
            },
            {
                "question": "What career options are available after MBBS?",
                "answer": "After completing MBBS abroad, students can appear for licensing exams like FMGE/NExT (India), USMLE (USA), or PLAB (UK), or pursue postgraduate studies and medical practice globally."
            }
        ]
    },
    "andijan-state-medical-institute": {
        "title": "Andijan State Medical Institute",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214614/Andijan_State_Medical_nu5qrl.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214613/Andijan_State_Medical_2_sjmqu7.jpg",
        "intro": {
            "text": "Andijan State Medical Institute is one of the prominent government medical universities in Uzbekistan, known for offering quality medical education at an affordable cost. Established in 1955, the institute has built a strong academic reputation and has become a preferred destination for international students, especially those planning to study MBBS abroad and pursue MBBS in Uzbekistan.\n\nFor students aiming to pursue MBBS in abroad, Andijan State Medical Institute provides a well-structured and globally recognized curriculum that focuses on both theoretical knowledge and practical clinical training. The university offers MBBS programs in English medium, making it convenient for Indian and other international students. With modern infrastructure, advanced laboratories, and experienced faculty, the institute ensures high-quality education aligned with global standards.\n\nOne of the major advantages of choosing MBBS in Andijan State Medical Institute is its affordable fee structure. Compared to private medical colleges in India, the cost of MBBS abroad here is significantly lower, making it an ideal option for students from middle-income families. Additionally, the cost of living in Uzbekistan is quite economical, which further reduces the overall expenses.\n\nThe institute is recognized by international medical bodies such as the World Health Organization and the National Medical Commission, ensuring global acceptance of its medical degree. This allows students to appear for licensing exams like FMGE/NExT, USMLE, and PLAB after completing their MBBS in abroad.\n\nLocated in the city of Andijan, the institute provides a safe, peaceful, and student-friendly environment. The university offers a multicultural atmosphere with students from different countries, helping them gain international exposure while studying MBBS in Uzbekistan."
        },
        "quickOverview": {
            "University Name": "Andijan State Medical Institute",
            "Location": "Andijan, Uzbekistan",
            "Established": "1955",
            "Type": "Government Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Medium of Teaching": "English & Uzbek",
            "Recognition": "World Health Organization, National Medical Commission",
            "Eligibility": "10+2 with Physics, Chemistry, Biology + NEET Qualification (for Indian students)",
            "Admission Process": "Direct Admission (No Entrance Exam; NEET required for Indian students)"
        },
        "benefits": {
            "intro": "Choosing the right medical university is crucial for a successful career in medicine, and Andijan State Medical Institute stands out as a top choice for students planning to study MBBS abroad. Here are the key reasons to pursue MBBS in Uzbekistan at this institute:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by the World Health Organization and the National Medical Commission, ensuring that graduates can practice medicine internationally and appear for exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Affordable Fee Structure",
                    "Details": "Compared to private medical colleges in India, the tuition fees at Andijan State Medical Institute are highly economical, making it an ideal option for students seeking low-cost MBBS abroad."
                },
                {
                    "Heading": "English-Medium Education",
                    "Details": "The MBBS program is offered in English for international students, enabling Indian and other foreign students to study without language barriers."
                },
                {
                    "Heading": "High-Quality Education",
                    "Details": "The institute offers a structured MBBS curriculum that balances theoretical knowledge with practical clinical training, following international standards for medical education."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students get hands-on experience in affiliated hospitals, which is critical for practical learning and developing clinical skills required for a global medical career."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The university employs qualified and experienced professors who focus on both academic excellence and practical skill development."
                },
                {
                    "Heading": "Safe and Peaceful Environment",
                    "Details": "Andijan is a safe, calm, and student-friendly city, providing a conducive environment for studying MBBS abroad."
                },
                {
                    "Heading": "Modern Infrastructure & Facilities",
                    "Details": "The campus is equipped with advanced laboratories, digital classrooms, libraries, and hostel facilities to ensure a comfortable learning experience."
                },
                {
                    "Heading": "Affordable Living Costs",
                    "Details": "Apart from tuition, the cost of living in Uzbekistan is low, including accommodation, food, and transport, reducing the overall expense of MBBS in abroad."
                },
                {
                    "Heading": "Multicultural Student Community",
                    "Details": "The university hosts students from India, Asia, and other countries, offering exposure to diverse cultures and global networking opportunities."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Andijan State Medical Institute is designed to provide a comprehensive medical education that balances theoretical knowledge with practical clinical training. The program follows international medical standards and is ideal for students planning to study MBBS abroad. The course duration is 6 years, including 5 years of academic study and 1-year internship.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Medical Chemistry, Histology, Embryology, Psychology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Community Medicine, Patient Care, Emergency Medicine"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "General Medicine, General Surgery, Internal Medicine basics, Clinical Skills, Paraclinical subjects"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Obstetrics & Gynecology, Pediatrics, ENT, Ophthalmology, Cardiology, Neurology"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Surgery (Advanced), Medicine (Advanced), Psychiatry, Oncology, Clinical Immunology, Medical Genetics"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship / Clinical Rotations (Medicine, Surgery, Pediatrics, OB-GYN, Emergency, and Specialty Departments)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Andijan State Medical Institute is considered highly affordable, making it an attractive option for students who want to study MBBS abroad and pursue MBBS in Uzbekistan. Below is the approximate fee breakdown for international students:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "$3,400",
                    "hostel": "$500–$700",
                    "total": "₹3.3 – 3.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Andijan State Medical Institute is designed to provide a comprehensive medical education combining theoretical knowledge with practical clinical exposure. The total duration of the course is 6 years, which includes 5 years of academic study and 1 year of mandatory internship. This duration is internationally recognized and prepares students for licensing exams such as FMGE/NExT (India), USMLE (USA), and PLAB (UK), making it ideal for students planning to study MBBS abroad.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Total MBBS Duration",
                    "Duration": "6 Years",
                    "Details": "Complete course including internship"
                },
                {
                    "Phase": "Academic Study",
                    "Duration": "5 Years",
                    "Details": "Covers pre-clinical, para-clinical, and clinical subjects"
                },
                {
                    "Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Hands-on practical training in affiliated hospitals"
                }
            ]
        },
        "studentSupport": "Andijan State Medical Institute provides a comprehensive and student-friendly support system, making it an ideal choice for students planning to study MBBS abroad and pursue MBBS in Uzbekistan. The university ensures that international students, including Indian students, have a comfortable and secure environment for both academic and personal growth. The institute offers modern hostel facilities with separate accommodations for boys and girls. Hostels are equipped with essential amenities such as Wi-Fi, 24/7 electricity and water supply, study tables, beds, heating systems, and round-the-clock security with CCTV surveillance. Additionally, the hostels provide recreational areas, laundry services, and Indian food options to help international students adjust easily to campus life. Academically, the university emphasizes strong student support through qualified and experienced faculty members who provide guidance, mentoring, and personalized attention. Students have access to well-equipped laboratories, digital classrooms, and extensive libraries to facilitate research and learning. The institute also ensures early exposure to clinical practice in affiliated hospitals, which is essential for developing practical medical skills. Beyond academics, Andijan State Medical Institute promotes holistic student development. The university organizes extracurricular activities, sports, cultural events, and student clubs that encourage interaction, teamwork, and leadership skills. International students also benefit from a multicultural environment, gaining exposure to diverse cultures while building global networks. The institute also provides pre-departure and post-arrival support, including assistance with visa processing, travel arrangements, and settling into the city of Andijan.",
        "recognition": "Andijan State Medical Institute is a government-run medical university in Uzbekistan, known for its quality medical education, global recognition, and strong academic achievements. The university is officially affiliated with the Ministry of Health of Uzbekistan, ensuring that its MBBS in Uzbekistan programs meet national and international standards for medical education. This affiliation guarantees structured learning, clinical training, and a recognized degree for students who wish to study MBBS abroad. In terms of recognition, the institute is approved by leading international medical organizations including the World Health Organization and is listed in the WDOMS directory. For Indian students, this recognition allows graduates to appear for the National Medical Commission screening exam (FMGE/NExT) to practice medicine in India. The global recognition also enables graduates to pursue further studies or medical careers in countries like the USA, UK, Canada, and Europe. The institute has a history of academic achievements including research publications, international conferences, and collaborations with reputed medical institutions. It has modern laboratories, teaching hospitals, and research centers that support students in both theoretical and practical learning. Over the years, thousands of graduates from Andijan State Medical Institute have gone on to successful medical careers worldwide, establishing the university’s reputation as a reliable institution for MBBS abroad.",
        "hostelFacilities": "The institute offers modern hostel facilities with separate accommodations for boys and girls. Hostels are equipped with essential amenities such as Wi-Fi, 24/7 electricity and water supply, study tables, beds, heating systems, and round-the-clock security with CCTV surveillance. Additionally, the hostels provide recreational areas, laundry services, and Indian food options to help international students adjust easily to campus life. The city of Andijan is safe and student-friendly, offering affordable housing, transportation, and local amenities.",
        "studentLife": "Student life at Andijan State Medical Institute is vibrant, safe, and well-balanced, providing an ideal environment for students pursuing MBBS in Uzbekistan and other international students who want to study MBBS abroad. The university focuses on creating a healthy balance between academics, practical clinical training, and extracurricular activities to ensure holistic development. The campus is equipped with modern facilities, including spacious classrooms, well-equipped laboratories, digital libraries, and research centers. These resources allow students to study efficiently, conduct research, and enhance their knowledge in both theoretical and practical aspects of medicine. The university also provides access to affiliated hospitals, giving students hands-on clinical experience under expert supervision, which is critical for building confidence and competence in real-life medical scenarios. Life outside academics is equally engaging. Students have access to sports facilities, cultural programs, clubs, and social events that encourage teamwork, creativity, and leadership skills. Indian and international festivals are celebrated on campus, helping foreign students feel at home and enjoy a multicultural atmosphere.",
        "whyChooseUsIntro": "iExplain Education is a trusted consultancy that provides comprehensive guidance for students seeking MBBS abroad, including at top universities like Andijan State Medical Institute. Choosing the right consultancy can make the admission process smooth, hassle-free, and transparent. Here are the key reasons why students prefer iExplain Education for MBBS in Uzbekistan:",
        "whyChooseUs": [
            "Expert Counseling – Personalized guidance based on academic background, budget, and career goals for students aiming to study MBBS abroad.",
            "Complete Admission Assistance – End-to-end support from filling applications to securing admission at Andijan State Medical Institute.",
            "Visa Processing Support – Assistance with student visa documentation and approvals, ensuring a smooth transition to Uzbekistan.",
            "Pre-Departure Guidance – Help with travel arrangements, foreign exchange, airport pickup, and settling into the city of Andijan.",
            "Post-Arrival Support – Assistance with hostel accommodation, campus registration, and local orientation to help students adjust comfortably.",
            "Transparent & Affordable Process – Clear information about fees, no hidden charges, and flexible payment options for MBBS in abroad.",
            "FMGE/NExT Guidance – Support and preparation guidance for licensing exams after completing MBBS abroad, ensuring students can practice in India.",
            "Strong University Network – Direct partnerships with reputed universities provide reliable and secure admission.",
            "Student-Centric Approach – Focus on safety, satisfaction, and long-term career development of every student."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled university application form"
            },
            {
                "document": "Passport",
                "details": "Valid passport with at least 18–24 months validity"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "General health certificate issued by a registered doctor"
            },
            {
                "document": "Complete Medical Reports",
                "details": "Health check-up reports including chest X-ray, blood tests"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after verification of documents"
            },
            {
                "document": "Visa Documents",
                "details": "Student visa application and supporting papers"
            }
        ],
        "conclusion": "In conclusion, Andijan State Medical Institute is an excellent choice for students aspiring to pursue MBBS abroad. With its globally recognized degree, affordable fee structure, English-medium education, and strong clinical exposure, it provides a solid foundation for a successful medical career. The institute’s modern infrastructure, experienced faculty, and safe, student-friendly environment in Andijan ensure a comfortable and enriching experience for international students. Moreover, with comprehensive support for admission, documentation, and post-arrival assistance, students can focus entirely on their studies and practical training. Overall, pursuing MBBS in Andijan State Medical Institute combines quality education, global recognition, and practical medical experience, making it one of the top choices for students looking to study MBBS in abroad and build a successful career in medicine.",
        "faqs": [
            {
                "question": "Is Andijan State Medical Institute good for MBBS abroad?",
                "answer": "Yes, Andijan State Medical Institute is a well-recognized government university offering quality medical education, affordable fees, and global recognition, making it ideal for students who want to study MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at Andijan State Medical Institute?",
                "answer": "The MBBS course duration is 6 years, including 5 years of academic study and 1 year of mandatory internship."
            },
            {
                "question": "Is NEET required for Indian students?",
                "answer": "Yes, Indian students must qualify NEET to pursue MBBS in abroad and practice medicine in India."
            },
            {
                "question": "What is the medium of teaching?",
                "answer": "The MBBS program is taught in English for international students, making it convenient for Indian students."
            },
            {
                "question": "How much does MBBS cost at this university?",
                "answer": "The total cost of MBBS in Andijan State Medical Institute is approximately ₹22–24 Lakhs for the full 6-year course, including tuition, hostel, and basic expenses."
            },
            {
                "question": "Is the MBBS degree recognized in India?",
                "answer": "Yes, the degree is recognized by the National Medical Commission, and graduates can appear for FMGE/NExT to practice in India. It is also recognized by the World Health Organization for global practice."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the institute provides modern hostel facilities with Wi-Fi, security, hygienic food, and recreational areas, including Indian food options."
            },
            {
                "question": "Is Andijan safe for international students?",
                "answer": "Yes, Andijan is a safe and student-friendly city with a peaceful environment suitable for international students."
            },
            {
                "question": "What are the eligibility criteria for admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology with at least 50% marks (40% for reserved categories) and must qualify for NEET."
            },
            {
                "question": "What career opportunities are available after MBBS abroad?",
                "answer": "Graduates can pursue postgraduate studies or medical practice globally by appearing in licensing exams such as FMGE/NExT (India), USMLE (USA), or PLAB (UK). They can also specialize in various medical fields or work in hospitals and healthcare institutions worldwide."
            }
        ]
    },
    "nanjing-medical-university": {
        "title": "Nanjing Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214616/Nanjing_Medical_foo0x8.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214615/Nanjing_Medical._2_tbhfhj.jpg",
        "intro": {
            "text": "Nanjing Medical University is a prestigious and globally recognized government medical university located in Nanjing, the capital of Jiangsu Province, China. Established in 1934, it has evolved over the decades into one of China’s leading centers for medical education, research, and healthcare training. With a rich legacy of excellence spanning nearly a century, the university is known for its commitment to producing skilled and competent medical professionals, making it a preferred destination for students planning to study MBBS abroad and pursue MBBS in China.\n\nThe university offers a comprehensive MBBS program in English, specifically designed for international students, including Indian students. The curriculum integrates theoretical knowledge, practical skills, and clinical exposure in a stepwise manner, ensuring that students are fully prepared to meet the challenges of global medical practice. Students are trained in modern medical sciences, including anatomy, physiology, biochemistry, pathology, pharmacology, and advanced clinical disciplines such as surgery, internal medicine, pediatrics, obstetrics, and gynecology. The university also focuses on preparing students for licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK), ensuring global career opportunities.\n\nNanjing Medical University emphasizes research and innovation, providing state-of-the-art laboratories, simulation centers, digital libraries, and research institutes. Students are encouraged to participate in scientific research projects and medical conferences, which enhances their understanding of modern medical advancements and prepares them for postgraduate studies and specialization programs worldwide. The university’s affiliated hospitals are equipped with advanced diagnostic and treatment facilities, providing hands-on clinical experience and training under the supervision of experienced faculty and practicing doctors.\n\nThe campus is designed to provide a safe, comfortable, and student-friendly environment, with modern hostel accommodations, recreational facilities, sports complexes, and cafeterias serving international cuisines. The university also provides dedicated support services for international students, including pre-departure guidance, orientation programs, visa assistance, and counseling services. This ensures that students can adjust easily to life in China and focus entirely on their studies without administrative or logistical difficulties."
        },
        "quickOverview": {
            "University Name": "Nanjing Medical University",
            "Location": "Nanjing, China",
            "Established": "1934",
            "Type": "Government Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Medium of Teaching": "English & Chinese",
            "Eligibility": "10+2 with Physics, Chemistry, Biology + NEET Qualification (for Indian students)",
            "Admission Process": "Direct Admission (No Entrance Exam; NEET required for Indian students)",
            "Hostel Facility": "Available (Modern hostels with separate accommodation for boys & girls)",
            "Clinical Training": "Provided in affiliated hospitals with practical hands-on experience"
        },
        "benefits": {
            "intro": "Pursuing MBBS in Nanjing Medical University is a popular choice for international students, especially from India, due to its globally recognized degree, affordable fees, and excellent academic environment. Here are the main reasons to choose this university for MBBS abroad:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by the World Health Organization and the National Medical Commission, allowing graduates to practice medicine internationally and appear for licensing exams such as FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "Compared to private medical colleges in India, Nanjing Medical University offers low-cost MBBS abroad with no capitation or donation fees, making it an ideal option for budget-conscious students."
                },
                {
                    "Heading": "English-Medium Program",
                    "Details": "The MBBS program is taught in English, making it convenient for international students to follow the curriculum without language barriers while still offering Chinese language courses for daily life and communication with patients."
                },
                {
                    "Heading": "High-Quality Education & Curriculum",
                    "Details": "The university follows a structured MBBS syllabus that combines theoretical knowledge, practical training, and clinical rotations. Students gain exposure to modern medical techniques, research, and healthcare practices, aligning with international standards."
                },
                {
                    "Heading": "Extensive Clinical Exposure",
                    "Details": "Students train in affiliated teaching hospitals with advanced facilities, gaining hands-on experience in internal medicine, surgery, pediatrics, obstetrics, gynecology, and other specializations. This practical training ensures readiness for global medical practice."
                },
                {
                    "Heading": "Experienced Faculty & Research Opportunities",
                    "Details": "Nanjing Medical University has qualified and experienced professors who provide academic mentoring, research guidance, and practical skill development, helping students excel in both theory and clinical practice."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Nanjing is a safe, culturally rich, and student-friendly city. The university provides modern hostels, recreational facilities, and support services for international students."
                },
                {
                    "Heading": "Affordable Living Costs",
                    "Details": "The cost of living in Nanjing is reasonable, including accommodation, food, and transportation, which reduces the overall expenses of pursuing MBBS abroad."
                },
                {
                    "Heading": "Multicultural Campus",
                    "Details": "The university hosts students from India, Asia, Africa, and other countries, providing a multicultural environment that promotes cross-cultural understanding and global networking."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Nanjing Medical University is a 6-year course, designed to provide students with a strong foundation in medical sciences, combined with practical clinical exposure. The syllabus follows international standards and prepares students for global licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK), making it ideal for students who want to study MBBS abroad.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Human Anatomy, Histology, Embryology, Medical Chemistry, Physics, Psychology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Physiology, Biochemistry, Microbiology, Pathophysiology, Introduction to Clinical Medicine"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "General Pathology, Pharmacology, Community Medicine, Forensic Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Obstetrics & Gynecology, Pediatrics"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "ENT, Ophthalmology, Psychiatry, Dermatology, Clinical Immunology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship – Clinical rotations in Internal Medicine, Surgery, Pediatrics, OB-GYN, and other departments"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Nanjing Medical University is considered affordable compared to many private medical colleges in India, making it a popular choice for students who want to study MBBS abroad. Below is the typical fee breakdown for international students enrolled in the 6‑year MBBS (English medium) program:",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "CNY 34,000",
                    "hostel": "CNY 5,000 – 8,000",
                    "total": "₹4.4 – 4.7 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Nanjing Medical University is a 6-year course, structured to provide a combination of theoretical knowledge, practical training, and clinical exposure. The duration is divided as follows for students planning to study MBBS abroad:",
        "duration": {
            "headers": ["Component", "Duration"],
            "table": [
                {
                    "Component": "Pre-Clinical (Basic Sciences)",
                    "Duration": "1st – 2nd Year"
                },
                {
                    "Component": "Para-Clinical & Clinical Subjects",
                    "Duration": "3rd – 5th Year"
                },
                {
                    "Component": "Clinical Internship / Rotations",
                    "Duration": "6th Year (Full-year hands-on training in affiliated hospitals)"
                }
            ]
        },
        "studentSupport": "Nanjing Medical University offers a comprehensive and student‑centric support system designed to help international students thrive academically, socially, and personally while they study MBBS abroad. The university’s support services ensure students can focus confidently on their medical education without unnecessary stress or difficulty. The university provides dedicated international student support services, where a specialized team assists with the admission process, documentation, and visa procedures. This helps students from different countries, especially those applying for MBBS in China, navigate the complex administrative requirements with clarity and ease. Before departure, students receive guidance on travel, accommodation, and pre‑departure preparations, ensuring they are well‑informed and ready for life in China. On arrival, the university conducts orientation programs to introduce students to campus life, academic expectations, local culture, and safety procedures. This helps new students feel comfortable and settle in quickly. The campus also has multilingual staff and mentors available to assist international students with academic queries, language challenges, and cultural adaptation, making the transition to university life much smoother. For ongoing academic support, students have access to modern libraries, online learning resources, digital classrooms, and research labs. Experienced faculty members provide personalized academic guidance, tutoring, and mentoring whenever needed. Clinical training takes place in affiliated teaching hospitals, where students receive hands‑on experience under the supervision of skilled clinicians—a major advantage for those pursuing MBBS in abroad.",
        "recognition": "Nanjing Medical University holds a strong reputation both within China and globally, making it an excellent choice for students planning to study MBBS abroad. Established in 1934, the university has developed into one of China’s leading medical education and research institutions, known for its high academic standards and international cooperation. In terms of affiliation and recognition, Nanjing Medical University is officially approved by the Ministry of Education of the People’s Republic of China, ensuring the quality and validity of its medical programs. It is also recognized by major global medical organizations, including the World Health Organization and the National Medical Commission, which allows graduates to pursue careers internationally and appear for exams such as FMGE/NExT, USMLE, and PLAB. NMU is also listed in international medical directories (such as FAIMER/WDOMS), further validating its global recognition and acceptance. The university has earned notable achievements in academics and research. It is designated as a “Double First-Class” institution under China’s national initiative to develop world‑class universities, reflecting its emphasis on excellence in teaching and research. The university maintains strong research capabilities with numerous state‑level and provincial key laboratories, and a large network of 23 affiliated hospitals and more than 50 teaching hospitals across several Chinese provinces, offering extensive clinical training opportunities for MBBS students. NMU also actively promotes international cooperation and exchange programs with medical schools and research institutions from countries including the United States, Canada, the UK, Germany, Japan, and Australia, enhancing global exposure for students and faculty. Additionally, it celebrated its 90th anniversary in 2024, marking nearly a century of sustained contributions to medical education, research, and public health.",
        "hostelFacilities": "The university ensures comfortable accommodation through modern hostel facilities. Hostels are well‑furnished, secure, and equipped with amenities like high‑speed internet, laundry facilities, common areas, and dining options, including provisions for international students’ dietary preferences. On‑campus and nearby off‑campus housing options are available to suit different budgets. The hostels are designed to provide a safe and supportive environment for students from different cultural backgrounds.",
        "studentLife": "Student life at Nanjing Medical University is vibrant, culturally rich, and designed to provide a balanced academic and personal experience for students pursuing MBBS abroad. The university encourages holistic development by combining rigorous medical training with extracurricular engagement, cultural integration, and social networking. The campus hosts students from diverse countries, including India, Pakistan, Africa, and Southeast Asia, creating a multicultural environment that fosters global connections and cross-cultural understanding. International students are supported through orientation programs that introduce them to academic expectations, campus facilities, local culture, and city life in Nanjing. This helps students adjust quickly and feel at home in a new country. Academically, students benefit from modern classrooms, laboratories, simulation centers, and digital libraries. Practical exposure begins early in the program, with clinical rotations in affiliated hospitals that provide hands-on patient care under the guidance of experienced doctors and faculty. This ensures that students not only understand theoretical concepts but also develop essential medical skills. Outside the classroom, the university offers a variety of sports, cultural activities, clubs, and events. Students can participate in basketball, football, badminton, and other recreational activities, as well as cultural festivals that celebrate diversity on campus. These activities promote teamwork, leadership, and personal growth. Accommodation is provided through well-furnished hostels with modern amenities, including high-speed internet, laundry facilities, common areas, and safe dining options. The campus also has medical and counseling services available to support students’ mental and physical well-being.",
        "whyChooseUsIntro": "iExplain Education is a trusted and experienced consultancy for students aspiring to pursue MBBS abroad, especially in top medical universities like Nanjing Medical University. Choosing iExplain Education ensures a smooth, transparent, and hassle-free admission process. Here are the key reasons to rely on iExplain Education:",
        "whyChooseUs": [
            "Expert Guidance & Counseling – iExplain Education provides personalized guidance on university selection, course details, and career planning. Students receive detailed counseling on pursuing MBBS in Nanjing Medical University, including eligibility criteria, fee structure, syllabus, and clinical opportunities.",
            "Hassle-Free Admission Process – The team assists in preparing and verifying all required documents, applying to the university, and securing admission. This includes handling application forms, transcripts, passport copies, photos, and other mandatory paperwork.",
            "NEET & Licensing Exam Support – For Indian students, iExplain Education offers guidance on NEET qualification and preparation for FMGE/NExT after completing MBBS abroad, ensuring students are fully prepared to practice medicine in India.",
            "Visa & Travel Assistance – iExplain Education helps students with visa applications, travel arrangements, and pre-departure formalities. This ensures that students reach Nanjing smoothly and on time, without any administrative hurdles.",
            "Hostel & Accommodation Support – The consultancy assists students in selecting suitable on-campus or off-campus accommodation, ensuring comfort, safety, and affordability during their stay in Nanjing.",
            "Post-Arrival Assistance – After reaching Nanjing, iExplain Education continues to support students with university registration, orientation, local guidance, and integration into campus life, making the transition easier for international students.",
            "Transparent & Reliable Services – iExplain Education maintains a high standard of transparency, ensuring no hidden fees or unnecessary intermediaries. Students and parents are kept informed at every step of the admission process.",
            "Long-Term Career Support – Beyond admission, the consultancy provides advice on postgraduate studies, global licensing exams, and career pathways, helping students plan a successful medical career internationally."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Completed admission application form of Nanjing Medical University"
            },
            {
                "document": "Passport",
                "details": "Valid international passport (minimum 18 months validity)"
            },
            {
                "document": "10th & 12th Mark Sheets",
                "details": "Academic transcripts showing Physics, Chemistry, Biology, and English scores"
            },
            {
                "document": "NEET Score Card",
                "details": "Mandatory for Indian students to qualify FMGE/NExT eligibility"
            },
            {
                "document": "Birth Certificate",
                "details": "Verified copy for age proof"
            },
            {
                "document": "Medical / Health Certificate",
                "details": "Includes general health check-up and vaccination details"
            },
            {
                "document": "HIV Test Report",
                "details": "Required for health clearance"
            },
            {
                "document": "Financial Proof / Bank Statement",
                "details": "Proof of sufficient funds to cover tuition fees and living expenses"
            },
            {
                "document": "Other Supporting Documents",
                "details": "Any additional documents requested by the university or visa authorities"
            }
        ],
        "conclusion": "Pursuing MBBS at Nanjing Medical University offers international students, especially from India, a globally recognized medical degree in an English-medium program, combined with excellent academic training, hands-on clinical exposure, and modern infrastructure. With a 6-year duration including a full-year internship, students gain strong theoretical knowledge as well as practical experience in affiliated hospitals, preparing them for licensing exams such as FMGE/NExT, USMLE, and PLAB. The university provides a safe, multicultural, and student-friendly environment, with modern hostels, libraries, laboratories, and extensive support services for international students. Recognized by the World Health Organization (WHO) and listed in global medical directories, the degree from Nanjing Medical University is valid worldwide, ensuring students can pursue a successful medical career globally. By choosing Nanjing Medical University through iExplain Education, students benefit from expert guidance, hassle-free admission, visa assistance, accommodation support, and ongoing mentorship, ensuring a smooth transition to studying MBBS abroad.",
        "faqs": [
            {
                "question": "Is Nanjing Medical University recognized globally?",
                "answer": "Yes. Nanjing Medical University is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India. Its degree is accepted worldwide, allowing graduates to practice medicine after clearing respective licensing exams such as FMGE/NExT, USMLE, and PLAB."
            },
            {
                "question": "What is the duration of MBBS at Nanjing Medical University?",
                "answer": "The MBBS program spans 6 years, including 5 years of academic and clinical training and 1 year of mandatory internship in affiliated hospitals, providing practical exposure to patient care."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program for international students is taught in English, with optional Chinese language courses to help students communicate during clinical practice and daily life in China."
            },
            {
                "question": "What is the total fee for MBBS in Nanjing Medical University?",
                "answer": "The tuition fee is approximately CNY 34,000 per year, and hostel fees range from CNY 5,000–8,000 per year, making it an affordable option for MBBS abroad. The total cost for tuition and accommodation for 6 years is roughly CNY 234,000–252,000."
            },
            {
                "question": "Is NEET qualification required for Indian students?",
                "answer": "Yes. Indian students must qualify NEET to be eligible for admission to MBBS abroad and to appear for the FMGE/NExT exam after graduation."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include: Passport and visa, 10th and 12th mark sheets / high school diploma, NEET score card (for Indian students), Health and HIV certificates, Financial proof / bank statement, and Passport-size photographs."
            },
            {
                "question": "Are hostel and accommodation facilities available?",
                "answer": "Yes. The university provides modern on-campus hostels with furnished rooms, internet, laundry facilities, and safe dining options. Separate hostels for boys and girls are available, ensuring comfort and security."
            },
            {
                "question": "What support is provided to international students?",
                "answer": "International students receive guidance for admission, visa processing, pre-departure orientation, airport pickup, university registration, accommodation, academic mentoring, and ongoing counselling."
            },
            {
                "question": "Can I practice medicine in India after MBBS from Nanjing Medical University?",
                "answer": "Yes. After completing MBBS, Indian students must clear the FMGE/NExT exam to practice in India. The degree from Nanjing Medical University is fully recognized by the National Medical Commission."
            },
            {
                "question": "How is student life at Nanjing Medical University?",
                "answer": "Student life is vibrant and multicultural, with academic, cultural, and sports activities. Students benefit from clubs, seminars, workshops, and a supportive campus community, ensuring a balanced and enriching MBBS journey abroad."
            }
        ]
    },
    "jilin-university": {
        "title": "Jilin University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214617/Jilin_University_t8foit.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214615/Jilin_University_2_kfvjkw.jpg",
        "intro": {
            "text": "Jilin University is one of China’s premier higher education institutions, renowned for its excellence in medical education, research, and innovation. Established in 1946 and located in Changchun, Jilin Province, China, the university has grown into a multidisciplinary and globally recognized center of learning. For international students seeking to study MBBS abroad, Jilin University offers an ideal combination of quality education, modern infrastructure, and affordable tuition.\n\nThe university is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), India, making its MBBS degree globally valid and eligible for licensing exams like FMGE/NExT, USMLE, and PLAB. Jilin University is known for its highly qualified faculty, advanced laboratories, and affiliation with numerous teaching hospitals, which provide students with extensive clinical exposure.\n\nOffering an English-medium MBBS program, Jilin University attracts students from India, Asia, Africa, and Europe, providing a multicultural and inclusive environment. The campus includes modern hostels, libraries, research centers, sports facilities, and student support services, ensuring that international students experience a safe, engaging, and academically rich environment.\n\nJilin University is associated with over 20 teaching hospitals, which provide students with an opportunity to work with experienced medical professionals, participate in research, and experience modern healthcare facilities. The university’s teachers are highly qualified, with some of them possessing higher qualifications and international experience, which enables them to mentor students throughout their academic journey.\n\nThe university campus offers a safe, student-friendly, and multicultural environment. The international students are offered well-furnished hostels that are equipped with facilities such as high-speed internet connectivity, study rooms, laundry facilities, and canteens that meet the dietary needs of international students. Apart from academic activities, Jilin University focuses on the holistic development of students through sports, cultural events, student clubs, and seminars. The multicultural environment of the university campus helps international students to establish relationships with Asian, African, European, and international students."
        },
        "quickOverview": {
            "University Name": "Jilin University",
            "Established": "1946",
            "Location": "Changchun, Jilin Province, China",
            "Type": "Public, Multidisciplinary, Research-Oriented",
            "Medium of Instruction": "English (for international MBBS students)",
            "Program Offered": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
            "Duration of MBBS": "6 Years (including 1-year clinical internship)",
            "Global Recognition": "Recognized by WHO, NMC (India), listed in WDOMS",
            "Affiliated Hospitals": "20+ teaching and clinical hospitals"
        },
        "benefits": {
            "intro": "Choosing to pursue MBBS at Jilin University offers international students a combination of quality education, global recognition, affordable fees, and excellent clinical exposure, making it one of the top choices for students planning to study MBBS abroad. Here are the key reasons:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "Jilin University’s MBBS program is recognized by the World Health Organization (WHO), listed in the World Directory of Medical Schools (WDOMS), and approved by the National Medical Commission (NMC) of India. This recognition allows graduates to practice medicine internationally after clearing licensing exams such as FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The university offers a fully English-taught MBBS program, enabling international students to study without language barriers. Additionally, students have the opportunity to learn basic Chinese, which helps in communicating with patients during clinical rotations."
                },
                {
                    "Heading": "Affordable Tuition & Living Costs",
                    "Details": "Compared to private medical colleges in India and many Western countries, MBBS in Jilin University is highly cost-effective. Tuition fees are approximately CNY 33,000 – 36,000 per year, and hostel accommodation ranges from CNY 5,000 – 8,000 per year, making it a viable option for students seeking low-cost MBBS abroad."
                },
                {
                    "Heading": "Experienced Faculty & Modern Infrastructure",
                    "Details": "The university boasts highly qualified faculty with international experience, modern laboratories, research centers, digital libraries, and advanced simulation facilities, ensuring students receive quality education and practical training."
                },
                {
                    "Heading": "Excellent Clinical Exposure",
                    "Details": "Jilin University is affiliated with over 20 teaching hospitals and clinical centers, providing extensive hands-on experience in real hospital settings. Clinical rotations begin from the third year, and the final year includes a full-year internship, preparing students for professional medical practice."
                },
                {
                    "Heading": "Multicultural & Supportive Campus Life",
                    "Details": "The campus hosts students from all over the world, offering a multicultural environment that encourages global networking and cultural exchange. Modern hostels, recreational facilities, sports, and cultural activities contribute to a balanced student life."
                },
                {
                    "Heading": "Research & International Collaborations",
                    "Details": "Students have opportunities to participate in cutting-edge research projects and exchange programs through partnerships with universities and medical institutions in the USA, UK, Germany, Japan, and Australia. This enhances global exposure and career prospects."
                },
                {
                    "Heading": "Career Opportunities",
                    "Details": "Graduates of Jilin University are eligible for medical practice globally. Indian students can appear for FMGE/NExT, while other international students can pursue postgraduate studies or practice in their home countries or abroad."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Jilin University is a 6-year course designed to provide international students with comprehensive theoretical knowledge, practical skills, and clinical exposure, preparing them for global medical careers.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year (Pre-Clinical)",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Histology & Embryology, Genetics, Medical Ethics, Introduction to Clinical Medicine, English for Medical Studies"
                },
                {
                    "Year": "2nd Year (Pre-Clinical)",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry, Histology & Embryology, Genetics, Medical Ethics, Introduction to Clinical Medicine, English for Medical Studies"
                },
                {
                    "Year": "3rd Year (Para-Clinical)",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Immunology, Community Medicine / Preventive Medicine, Forensic Medicine, Medical Psychology"
                },
                {
                    "Year": "4th Year (Clinical)",
                    "Subjects Covered": "Internal Medicine, Surgery, Obstetrics & Gynecology, Pediatrics, Ophthalmology, ENT, Dermatology, Radiology, Psychiatry"
                },
                {
                    "Year": "5th Year (Clinical)",
                    "Subjects Covered": "Continuation of Clinical Rotations in Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, Specialized Departments"
                },
                {
                    "Year": "6th Year (Clinical)",
                    "Subjects Covered": "Full-year internship in affiliated hospitals: Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, Specialized Departments"
                }
            ]
        },
        "feesIntro": "Here’s a clear breakdown of the annual fees for the MBBS (Clinical Medicine) program at Jilin University for international students",
        "fees": {
            "structure": [
                {
                    "year": "1 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                },
                {
                    "year": "2 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                },
                {
                    "year": "3 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                },
                {
                    "year": "4 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                },
                {
                    "year": "5 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                },
                {
                    "year": "6 Year",
                    "tuition": "33,000 CNY",
                    "hostel": "5,000 – 8,000 CNY",
                    "total": "₹4.3 - 4.8 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The curriculum is broadly structured to build from basic medical sciences in early years to clinical subjects and 1 year of internship/clinical practice at the end.",
        "duration": {
            "headers": ["Component", "Duration"],
            "table": [
                {
                    "Component": "Pre-Clinical (Basic Sciences)",
                    "Duration": "1st – 2nd Year"
                },
                {
                    "Component": "Para-Clinical & Clinical Subjects",
                    "Duration": "3rd – 5th Year"
                },
                {
                    "Component": "Clinical Internship / Rotations",
                    "Duration": "6th Year (Full-year hands-on training in affiliated hospitals)"
                }
            ]
        },
        "studentSupport": "Jilin University offers a comprehensive and student-focused support system designed to help international students excel academically, socially, and personally while pursuing MBBS in China. The university’s support services ensure that students can concentrate fully on their medical education without facing unnecessary stress or administrative challenges. A dedicated International Students Office assists with the entire admission process, documentation, and visa procedures, helping students from various countries navigate complex requirements with clarity and ease. Prior to departure, students receive detailed guidance on travel, accommodation, and pre-departure preparations, ensuring they are well-prepared for life in China. Upon arrival, the university organizes orientation programs to introduce students to campus life, academic expectations, local culture, and safety procedures, helping them settle in comfortably. Multilingual staff and mentors are available on campus to provide ongoing support with academic questions, language challenges, and cultural adaptation, making the transition smooth and stress-free. For academic growth, students have access to modern libraries, online learning platforms, digital classrooms, and research laboratories. Experienced faculty members offer personalized guidance, tutoring, and mentoring whenever needed. Clinical training is conducted in affiliated teaching hospitals, allowing students to gain hands-on experience under the supervision of skilled clinicians—a vital component of MBBS education abroad.",
        "recognition": "Jilin University is a prestigious institution recognized nationally and internationally for its excellence in medical education and research. Established in 1946, the university has consistently maintained high academic standards and is fully recognized by the Ministry of Education of China. Its MBBS program is approved by the World Directory of Medical Schools (WDOMS), which ensures that graduates are eligible to apply for licensing exams like the FMGE/NExT in India and pursue medical careers worldwide. The university is also a member of several international academic organizations, promoting collaborations, research exchanges, and student mobility programs across countries. Its affiliation with top teaching hospitals allows MBBS students to gain practical clinical experience under expert guidance. Over the years, Jilin University has achieved numerous accolades in research, innovation, and education quality, consistently ranking among the top universities in China for medical studies. The university’s emphasis on internationalization has attracted students from over 100 countries, fostering a diverse and vibrant learning environment. These achievements reflect Jilin University’s commitment to producing competent, globally-minded medical professionals.",
        "hostelFacilities": "The university also provides comfortable accommodation through well-furnished, secure hostels equipped with high-speed internet, laundry facilities, common areas, and dining options that cater to international dietary preferences. Both on-campus and nearby off-campus housing options are available, accommodating different budgets and lifestyle needs. Campus facilities also include cafeterias offering a variety of cuisines, medical centers, banks, and recreational areas, making it a convenient and safe environment for students.",
        "studentLife": "Student Life at Jilin University is vibrant, diverse, and designed to provide international students with a holistic and enriching experience while pursuing MBBS in China. The university campus offers a lively and inclusive environment where students can grow academically, socially, and personally. With a student community representing more than 100 countries, international students are welcomed into a multicultural atmosphere that encourages cross-cultural interactions, friendships, and collaborations. Academically, students benefit from a rigorous and structured MBBS curriculum supported by modern classrooms, well-equipped laboratories, and comprehensive libraries. Experienced faculty members are approachable and provide mentoring, guidance, and support, ensuring students receive personalized attention throughout their studies. Clinical training is conducted in affiliated teaching hospitals, where students gain hands-on experience under the supervision of skilled clinicians, giving them exposure to real-life medical practice from early in their course. Beyond academics, Jilin University places a strong emphasis on campus life and extracurricular engagement. Students can participate in a wide range of activities, including sports clubs, cultural societies, music and art programs, and volunteer opportunities. Annual festivals, cultural events, and international student gatherings foster community spirit, help students integrate socially, and provide opportunities to showcase talents and cultural heritage.",
        "whyChooseUsIntro": "Choosing iExplain Education for your MBBS admission at Jilin University ensures a smooth, transparent, and hassle-free process from start to finish. As a trusted overseas education consultancy, iExplain Education specializes in guiding international students through every step of the admission process, helping them secure a globally recognized medical degree in China.",
        "whyChooseUs": [
            "Expert Guidance on Admission – Personalized counseling to help students understand eligibility, course structure, and prepare a strong application for MBBS at Jilin University.",
            "Document Preparation & Verification – Assistance with all required documents, including academic certificates, passports, medical reports, and financial statements.",
            "Visa Assistance – Guidance throughout the Chinese student visa application process to ensure compliance and avoid delays.",
            "Pre-Departure Support – Advice on travel arrangements, accommodation options, campus life, local culture, and safety measures before leaving for China.",
            "Ongoing Support – Assistance with hostel allocation, airport pickup, university registration, and any issues during the course of study.",
            "Trusted Expertise & Proven Track Record – Years of experience in overseas medical admissions with hundreds of successful students placed in reputed universities like Jilin University.",
            "Student-Centric Approach – Dedicated support focused on academic success, personal well-being, and smooth adaptation to life and studies abroad."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled official application form of Jilin University."
            },
            {
                "document": "Passport",
                "details": "Valid passport with at least 18 months validity; notarized copies required."
            },
            {
                "document": "Academic Certificates",
                "details": "High school/12th-grade mark sheets and passing certificates; transcripts if applicable."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Certificate issued by a registered doctor confirming good health."
            },
            {
                "document": "HIV & Blood Test Reports",
                "details": "Recent test reports required for admission and visa purposes."
            },
            {
                "document": "Financial Documents",
                "details": "Bank statements, scholarship letters, or sponsorship certificates to prove financial capacity."
            },
            {
                "document": "Recommendation Letters",
                "details": "From school/college authorities (if applicable)."
            },
            {
                "document": "Visa Application Documents",
                "details": "Completed visa forms and other supporting documents as per Chinese embassy requirements."
            }
        ],
        "conclusion": "Pursuing MBBS at Jilin University offers international students a globally recognized medical degree, hands-on clinical training, and exposure to a multicultural campus environment. With modern facilities, experienced faculty, and strong support systems in place, students are well-prepared for both academic success and professional medical careers worldwide. Choosing the right guidance, such as iExplain Education, ensures a smooth admission process, proper document handling, visa assistance, and ongoing support throughout the course. By carefully preparing all required documents, understanding the curriculum, and taking advantage of the university’s resources, students can focus entirely on their studies and clinical training, making their MBBS journey in China rewarding, enriching, and hassle-free.",
        "faqs": [
            {
                "question": "Is Jilin University recognized for MBBS abroad?",
                "answer": "Yes, Jilin University is recognized by the Ministry of Education of China and listed in the World Directory of Medical Schools (WDOMS). Graduates are eligible to appear for exams like FMGE/NExT in India and other international licensing exams."
            },
            {
                "question": "What is the duration of the MBBS program?",
                "answer": "The MBBS program at Jilin University is 6 years long, which includes 5 years of academic study and 1 year of internship/clinical rotation in affiliated hospitals."
            },
            {
                "question": "In which language is the MBBS program taught?",
                "answer": "The MBBS program is offered in English medium, making it accessible for international students. Some courses or hospital rotations may include basic exposure to Mandarin, which the university provides support for."
            },
            {
                "question": "What are the eligibility criteria for admission?",
                "answer": "Students should have completed 12th grade (or equivalent) with Physics, Chemistry, and Biology and meet the minimum academic percentage as per university norms. NEET qualification is required for Indian students."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include the application form, passport, academic certificates, medical fitness certificate, passport-sized photographs, financial proof, and other university-specific requirements. iExplain Education can assist in preparing all documents."
            },
            {
                "question": "Are scholarships available for international students?",
                "answer": "Yes, Jilin University offers merit-based scholarships and other funding opportunities for outstanding international students. Students can also explore government scholarships for Chinese study programs."
            },
            {
                "question": "What is the fee structure for MBBS at Jilin University?",
                "answer": "The tuition and living expenses are affordable compared to many countries, and fees may vary slightly each year. iExplain Education provides detailed guidance on the current fee structure and payment process."
            },
            {
                "question": "What support is available for international students?",
                "answer": "International students receive support through the International Students Office, orientation programs, mentoring, hostel assistance, and access to libraries, laboratories, and student clubs."
            },
            {
                "question": "Can I practice medicine in India after MBBS from Jilin University?",
                "answer": "Yes, after completing MBBS, graduates can appear for the FMGE/NExT exam in India to practice medicine professionally. The university’s curriculum is designed to meet international standards."
            },
            {
                "question": "How can iExplain Education help with admission?",
                "answer": "iExplain Education provides end-to-end support, including counseling, document preparation, visa assistance, pre-departure guidance, airport pickup, and ongoing support throughout the MBBS course."
            }
        ]
    },
    "dalian-medical-university": {
        "title": "Dalian Medical University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214615/Dalian_Medical_University_bcjris.jpg",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1775214615/Dalian_Medical_2_yytkvf.jpg",
        "intro": {
            "text": "Dalian Medical University is a highly reputed public medical university in China, located in the vibrant coastal city of Dalian in Liaoning Province. Founded in 1947, it has established itself as one of the leading institutions for medical education, health sciences, clinical medicine, and biomedical research in the country. With a strong tradition of academic excellence and innovation, the university has become a preferred choice for students aspiring to pursue MBBS abroad, international medical degree programs, and careers in global healthcare.\n\nAs an institution committed to delivering quality education, Dalian Medical University offers a comprehensive MBBS program in English that caters to the needs of international students from Asia, Africa, Europe, and beyond. The English‑medium MBBS course spans approximately 6 years, comprising rigorous theoretical instruction, hands‑on practical laboratory training, and structured clinical internships at the university’s affiliated hospitals. This well‑designed curriculum ensures that students develop a solid foundation in anatomy, physiology, pathology, pharmacology, and other core medical sciences, while also gaining real‑world experience in patient care and clinical settings.\n\nOne of the most attractive aspects of studying at Dalian Medical University is its global recognition and accreditation. The MBBS degree awarded by the university is recognized by major international bodies, including the World Health Organization (WHO) and the National Medical Commission (NMC) of India, which makes graduates eligible to appear for licensing examinations such as the Foreign Medical Graduates Examination (FMGE/NExT), USMLE, PLAB, and other medical licensing tests in different countries. This recognition enhances the career opportunities of students and supports their ambitions to practice medicine internationally after graduation."
        },
        "quickOverview": {
            "University Name": "Dalian Medical University",
            "Established": "1947",
            "Location": "Dalian, Liaoning Province, China",
            "Type": "Public Medical University",
            "Programs Offered": "MBBS, MD, Nursing, Pharmacy, Biomedical Science, Public Health",
            "Medium of Instruction": "English & Chinese",
            "Duration of MBBS": "6 Years (Including Internship)",
            "Global Recognition": "WHO, NMC (India), ECFMG, Other International Medical Councils",
            "Affiliated Hospitals": "Multiple Teaching Hospitals in Dalian for Clinical Training",
            "Eligibility": "Completion of 10+2 with Physics, Chemistry, Biology; NEET Qualified for Indian Students"
        },
        "benefits": {
            "intro": "Dalian Medical University is one of the most preferred destinations for students seeking to pursue MBBS abroad due to its globally recognized degree, affordable tuition fees, and high-quality education. Here are the main reasons to choose this university for MBBS abroad:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The MBBS program at Dalian Medical University is recognized by the World Health Organization (WHO), National Medical Commission (NMC, India), and other international medical councils, allowing graduates to pursue medical practice worldwide."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The university offers a 6-year MBBS course in English, making it ideal for international students who want quality medical education without learning Chinese initially."
                },
                {
                    "Heading": "Affordable Tuition Fees",
                    "Details": "Compared to Western countries and some Asian nations, Dalian Medical University offers low-cost MBBS programs, making it a cost-effective option for students seeking quality medical education abroad."
                },
                {
                    "Heading": "Experienced Faculty and Advanced Curriculum",
                    "Details": "Students learn from highly qualified professors with decades of experience, following an updated MBBS syllabus that integrates theory, practical lab work, and clinical exposure."
                },
                {
                    "Heading": "State-of-the-Art Infrastructure",
                    "Details": "The university boasts modern classrooms, well-equipped laboratories, simulation centers, medical libraries, and affiliated hospitals, ensuring students gain practical experience in a professional environment."
                },
                {
                    "Heading": "Excellent Clinical Exposure",
                    "Details": "With multiple affiliated teaching hospitals, students get hands-on clinical training in various specialties, preparing them for real-world medical practice."
                },
                {
                    "Heading": "Support for International Students",
                    "Details": "The university provides comfortable hostels, student counseling, language support, and a safe environment for international students adjusting to life in China."
                },
                {
                    "Heading": "Multicultural Environment",
                    "Details": "Hosting students from Asia, Africa, Europe, and the Middle East, Dalian Medical University offers a diverse and culturally rich learning environment that enhances global understanding and collaboration."
                },
                {
                    "Heading": "Career Opportunities",
                    "Details": "Graduates can appear for FMGE/NExT in India, USMLE (USA), PLAB (UK), and other licensing exams, enabling them to pursue a medical career anywhere in the world."
                },
                {
                    "Heading": "Vibrant Campus Life in Dalian",
                    "Details": "Located in a scenic coastal city, students enjoy a safe, student-friendly environment with access to cultural activities, sports, and recreational facilities."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Dalian Medical University is carefully designed to provide students with a strong foundation in medical sciences while integrating practical clinical training. The curriculum is updated regularly to match international medical education standards.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
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
                    "Subjects Covered": "Community Medicine, Forensic Medicine, ENT, Ophthalmology"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Psychiatry, Dermatology, Radiology"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Clinical Internship / Rotatory Internship"
                }
            ]
        },
        "feesIntro": "The total course fee is structured to cover tuition, hostel accommodation, and other academic expenses, ensuring transparency and ease for students planning their education.",
        "fees": {
            "structure": [
                {
                    "year": "1 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                },
                {
                    "year": "2 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                },
                {
                    "year": "3 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                },
                {
                    "year": "4 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                },
                {
                    "year": "5 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                },
                {
                    "year": "6 Year",
                    "tuition": "USD 4,000 – 5,000",
                    "hostel": "USD 800 – 1,200",
                    "total": "₹4.1 – 5.2 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The total duration of the course is 6 years, including 5 years of academic study and 1 year of mandatory clinical internship at the university’s affiliated hospitals.",
        "duration": {
            "headers": ["Course", "Duration", "Details"],
            "table": [
                {
                    "Course": "MBBS (English Medium)",
                    "Duration": "6 Years",
                    "Details": "5 Years of Academic Study + 1 Year Clinical Internship"
                },
                {
                    "Course": "Pre-Clinical & Para-Clinical",
                    "Duration": "2 Years",
                    "Details": "Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology"
                },
                {
                    "Course": "Clinical Subjects",
                    "Duration": "3 Years",
                    "Details": "General Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Specialized Departments"
                },
                {
                    "Course": "Internship",
                    "Duration": "1 Year",
                    "Details": "Rotatory clinical internship in affiliated hospitals for hands-on experience"
                }
            ]
        },
        "studentSupport": "Dalian Medical University is committed to providing a holistic and supportive environment for international students pursuing MBBS abroad, ensuring that their academic journey is smooth, comfortable, and enriching. From the very beginning, students receive assistance with admission procedures, document verification, and visa guidance, making the transition to studying in China seamless. Upon arrival, the university conducts orientation programs to familiarize students with campus life, academic expectations, and local culture, helping them adjust quickly to a new environment. Throughout their studies, students benefit from continuous academic advising, personalized mentorship, and counseling services, enabling them to overcome academic or personal challenges effectively. Dalian Medical University also places a strong emphasis on career guidance, preparing students for international medical licensing exams such as FMGE/NExT in India, USMLE in the USA, and PLAB in the UK, and providing advice on future specialization and medical career paths. The university ensures that living and accommodation needs are fully met with well-maintained hostels, clean and secure facilities, nutritious mess services, and access to high-quality medical care and health insurance. To support smooth communication and integration, the university also offers English and optional Chinese language support, helping students interact with faculty, peers, and patients during clinical training. Beyond academics, Dalian Medical University encourages participation in extracurricular activities, sports, cultural events, and community programs, promoting social engagement, teamwork, and leadership skills. The university’s International Student Office is dedicated to addressing all student concerns, from visa renewals to travel assistance, creating a safe and student-friendly campus environment.",
        "recognition": "Dalian Medical University is a highly reputed public medical university in China, known for its excellence in medical education, clinical training, and biomedical research. The university is officially affiliated with the Ministry of Education of China and operates under strict regulatory and academic standards, ensuring high-quality teaching and research programs. Affiliation: Dalian Medical University is a prominent public medical university in China and is officially affiliated with the Ministry of Education of China. This affiliation ensures that the university follows strict academic standards, regulatory guidelines, and government-approved curricula for all its medical programs. The university operates multiple affiliated hospitals and research centers, providing students with extensive opportunities for clinical training, practical exposure, and medical research throughout their MBBS program. Recognition: The university’s MBBS program for international students is recognized by the World Health Organization (WHO), the National Medical Commission (NMC) of India, and several other global medical councils. This recognition allows graduates to appear for major licensing exams such as FMGE/NExT in India, USMLE in the USA, and PLAB in the UK, enabling them to pursue a global medical career. Achievements: Dalian Medical University has achieved numerous milestones in medical education, research, and clinical practice. The university boasts state-of-the-art laboratories, advanced teaching hospitals, and modern classrooms, where students gain hands-on experience in various medical disciplines. It has established strong international collaborations with leading universities and research institutions, offering opportunities for student exchange programs and collaborative research. The university has received multiple national and international awards for academic excellence, research contributions, and innovative teaching methods. Graduates from Dalian Medical University have gone on to excel in medicine, research, and healthcare leadership across the globe.",
        "hostelFacilities": "The university ensures that living and accommodation needs are fully met with well-maintained hostels, clean and secure facilities, nutritious mess services, and access to high-quality medical care and health insurance. Separate hostels for boys and girls are available, ensuring comfort and security. On-campus hostels are equipped with basic amenities, internet, and laundry facilities to support a convenient lifestyle for international students.",
        "studentLife": "Life at Dalian Medical University offers a perfect balance between academic rigor and personal development, making it one of the most sought-after destinations for students pursuing MBBS abroad. The university provides a safe, secure, and supportive campus environment where international students can focus on their studies while feeling at home. The campus is equipped with modern classrooms, advanced laboratories, fully stocked libraries, computer centers, and research facilities, ensuring that students have all the resources needed for high-quality medical education. Comfortable on-campus hostels with 24/7 security, hygienic dining facilities, and recreational spaces make student living convenient and stress-free. Beyond academics, the university emphasizes holistic development through sports, cultural events, student clubs, and community engagement programs, which encourage teamwork, leadership, and social interaction. The student body is highly diverse, with individuals from Asia, Africa, Europe, and the Middle East, creating a multicultural environment that fosters cross-cultural understanding, global friendships, and a broader perspective on healthcare practices. Students also benefit from the city of Dalian, a coastal city known for its scenic beauty, pleasant climate, and safe surroundings, which offers numerous opportunities for leisure, sightseeing, and cultural exploration. International students are supported through language assistance, counseling services, and mentorship programs, helping them adjust to life in China and excel academically.",
        "whyChooseUsIntro": "iExplain Education is a trusted and professional consultancy that helps students secure MBBS admission at Dalian Medical University with ease and confidence. With years of experience in guiding students for MBBS abroad in China, the team provides complete support in admissions, documentation, visa assistance, and pre-departure guidance.",
        "whyChooseUs": [
            "Expert Counseling: Personalized guidance on choosing the right university and program based on student’s academic profile and career goals.",
            "Complete Admission Assistance: Step-by-step support in filling applications, submitting documents, and confirming admission.",
            "Visa Guidance: Assistance with visa application, medical tests, and interview preparation.",
            "Fee & Financial Guidance: Clear advice on tuition fees, scholarships, payment procedures, and cost management.",
            "Pre-Departure Support: Help with travel arrangements, flight bookings, orientation, and settling into the new country.",
            "Accommodation Assistance: Guidance in selecting safe, comfortable, and affordable hostels or apartments.",
            "NEET & Licensing Exam Support: Information and tips on preparing for FMGE/NExT (India), USMLE (USA), PLAB (UK), and other international exams.",
            "Document Verification & Translation: Ensuring all academic and legal documents meet university and visa requirements.",
            "Airport Pickup & Initial Settling: Assistance with arrival in China and initial orientation to campus and city life.",
            "24/7 Support: Ongoing assistance during the entire study period for academic, personal, or emergency needs.",
            "Global Exposure Guidance: Advice on opportunities for research, international seminars, and exchange programs.",
            "Transparent & Reliable Services: Open communication between students, parents, and the university to avoid confusion or delays."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled and signed application form provided by the university."
            },
            {
                "document": "10+2 / High School Marksheet",
                "details": "Certified copy showing Physics, Chemistry, Biology, and English scores."
            },
            {
                "document": "High School Passing Certificate",
                "details": "Proof of successful completion of 10+2 or equivalent."
            },
            {
                "document": "NEET Score Card",
                "details": "Mandatory for Indian students to appear in MBBS abroad programs."
            },
            {
                "document": "Passport",
                "details": "Valid international passport with at least 18 months validity."
            },
            {
                "document": "Medical / Health Certificate",
                "details": "Issued by a recognized hospital, confirming good health and fitness."
            },
            {
                "document": "HIV / Infectious Disease Test Report",
                "details": "Required by the university for admission and visa purposes."
            },
            {
                "document": "Financial Proof",
                "details": "Bank statements, sponsorship letter, or affidavit showing ability to cover tuition and living expenses."
            },
            {
                "document": "Admission / Offer Letter",
                "details": "Issued by Dalian Medical University upon acceptance."
            },
            {
                "document": "Recommendation / Character Certificate",
                "details": "Issued by the school or college principal/authority."
            }
        ],
        "conclusion": "Choosing to pursue MBBS at Dalian Medical University is a smart and rewarding decision for students seeking high-quality medical education abroad. The university offers a globally recognized MBBS degree, approved by the World Health Organization (WHO), the National Medical Commission (NMC) of India, and other international medical councils, allowing graduates to pursue medical careers anywhere in the world. With English-medium instruction, experienced faculty, modern laboratories, advanced teaching hospitals, and a well-structured curriculum, students gain a strong foundation in both theoretical knowledge and practical clinical skills. By choosing iExplain Education, students gain expert guidance, transparent communication, and end-to-end support, making their journey to pursue a globally recognized MBBS degree in China simple and stress-free.",
        "faqs": [
            {
                "question": "Is Dalian Medical University recognized by the NMC for Indian students?",
                "answer": "Yes, Dalian Medical University is recognized by the National Medical Commission (NMC, India). Indian students graduating from the university are eligible to appear for FMGE/NExT to practice medicine in India."
            },
            {
                "question": "What is the duration of the MBBS course at Dalian Medical University?",
                "answer": "The MBBS program is 6 years long, including 5 years of academic study and 1 year of compulsory clinical internship at the university’s affiliated hospitals."
            },
            {
                "question": "Is the MBBS course at Dalian Medical University in English?",
                "answer": "Yes, the MBBS program is fully taught in English, making it convenient for international students to study without learning Chinese before admission."
            },
            {
                "question": "What documents are required for MBBS admission at Dalian Medical University?",
                "answer": "Students need to submit 10+2 mark sheets, NEET score card, passport, medical fitness certificate, financial proof, photographs, and the completed application form, among other essential documents."
            },
            {
                "question": "Can Indian students apply directly for MBBS at Dalian Medical University?",
                "answer": "Yes, Indian students can apply directly or through trusted consultancies like iExplain Education, which provides complete admission, documentation, and visa support."
            },
            {
                "question": "Are hostel and accommodation facilities available for international students?",
                "answer": "Yes, the university provides safe, well-maintained hostels with basic amenities, hygienic mess facilities, and 24/7 security."
            },
            {
                "question": "Can students appear for international licensing exams after graduating?",
                "answer": "Yes, graduates of Dalian Medical University are eligible for exams like USMLE (USA), PLAB (UK), FMGE/NExT (India), and other recognized international medical licensing tests."
            },
            {
                "question": "How is the student life at Dalian Medical University for international students?",
                "answer": "The university offers a multicultural and supportive environment, with access to sports, cultural events, student clubs, extracurricular activities, and a safe city life in Dalian, promoting both academic and personal growth."
            },
            {
                "question": "Why should I choose iExplain Education for MBBS admission in China?",
                "answer": "iExplain Education provides end-to-end support, including counselling, admission guidance, visa assistance, travel support, pre-departure help, and ongoing guidance during your MBBS studies abroad, ensuring a smooth and stress-free journey."
            }
        ]
    },
    "tribhuvan-university": {
        "title": "Tribhuvan University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Tribhuvan_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Tribhuvan_Mobile.webp",
        "intro": {
            "text": "Tribhuvan University is the oldest and largest university in Nepal, established in 1959 (2016 B.S.), and it has been at the forefront of higher education in the country for over six decades. The university offers a wide range of programs across medicine, engineering, management, social sciences, and humanities, and has earned a reputation for quality education, research, and professional training. It is widely recognized not just in Nepal, but also internationally, making it a popular choice for students from India and other countries who want to pursue MBBS or other professional courses abroad.\n\nThe Institute of Medicine (IOM) under Tribhuvan University is responsible for medical education and offers the MBBS program, which combines rigorous academic study with practical clinical training in affiliated hospitals. The program is designed to equip students with strong knowledge in anatomy, physiology, biochemistry, pathology, pharmacology, and clinical medicine, along with hands-on experience in patient care. This makes Tribhuvan University graduates well-prepared for medical practice anywhere in the world, and its MBBS degree is recognized by the National Medical Commission (NMC) of India, the Medical Council of Nepal (MCN), and other international medical bodies.\n\nApart from academics, Tribhuvan University encourages research, community engagement, and international collaborations, providing students with opportunities to participate in health camps, medical research projects, workshops, and conferences. The university is known for its supportive campus environment, experienced faculty, and affordable fee structure, making it accessible to students from different backgrounds. The city of Kathmandu, where the main campus is located, offers a safe, culturally rich, and vibrant environment for students to live and study."
        },
        "quickOverview": {
            "University Name": "Tribhuvan University",
            "Established": "1959 (2016 B.S.)",
            "Location": "Kathmandu, Nepal",
            "Type": "Public University",
            "Affiliated Institutes": "Institute of Medicine (IOM) and multiple campuses across Nepal",
            "Courses Offered": "MBBS, BDS, Nursing, Pharmacy, Management, Engineering, Humanities, and more",
            "Medium of Instruction": "English (for MBBS and other professional courses)",
            "Recognition": "Recognized by the National Medical Commission (NMC, India), Medical Council of Nepal (MCN), and WHO",
            "Student Population": "Over 400,000 students across all campuses"
        },
        "benefits": {
            "intro": "Tribhuvan University is one of the most trusted and reputed universities in Nepal, making it an excellent choice for students who wish to pursue MBBS abroad. Here are the key reasons to choose Tribhuvan University for MBBS:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "MBBS program approved by NMC (India), MCN (Nepal), and listed by WHO, enabling graduates to practice medicine internationally."
                },
                {
                    "Heading": "English Medium Program",
                    "Details": "Entire course is taught in English, making it convenient for Indian and other international students."
                },
                {
                    "Heading": "Affordable Fees",
                    "Details": "Lower tuition and living costs compared to many countries, offering quality medical education at reasonable expenses."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Hands-on training in well-equipped teaching hospitals under the Institute of Medicine (IOM)."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "Learn from qualified and experienced professors and medical practitioners."
                },
                {
                    "Heading": "Research Opportunities",
                    "Details": "Participate in medical research projects, workshops, and seminars."
                },
                {
                    "Heading": "Multicultural Environment",
                    "Details": "Students from India, Asia, and Africa study together, promoting cultural exchange and global exposure."
                },
                {
                    "Heading": "Preparation for Licensing Exams",
                    "Details": "Well-structured curriculum prepares students for FMGE/NExT, USMLE, PLAB, and other international exams."
                },
                {
                    "Heading": "Safe and Supportive Campus",
                    "Details": "Comfortable hostels, libraries, sports facilities, and guidance services for international students."
                },
                {
                    "Heading": "Community & Healthcare Focus",
                    "Details": "Opportunities to engage in community health programs and medical camps, enhancing practical skills and social responsibility."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Tribhuvan University is designed to provide a strong foundation in medical sciences along with practical clinical training. The course follows a well-structured curriculum under the Institute of Medicine (IOM) and is divided into basic sciences, para-clinical subjects, and clinical training.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry (Basics of human body structure, functions, and biochemical processes)"
                },
                {
                    "Year": "2nd Year",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology (Study of diseases, microorganisms, and drug treatments)"
                },
                {
                    "Year": "3rd Year",
                    "Subjects Covered": "Community Medicine, Forensic Medicine, ENT, Ophthalmology (Public health, legal medicine, and introduction to clinical specialties)"
                },
                {
                    "Year": "4th Year",
                    "Subjects Covered": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology (Core clinical subjects with hospital-based training)"
                },
                {
                    "Year": "5th Year",
                    "Subjects Covered": "Internal Medicine, Surgery, Psychiatry, Dermatology, Orthopedics (Advanced clinical studies with practical exposure)"
                },
                {
                    "Year": "6th Year",
                    "Subjects Covered": "Internship (Rotatory Internship – Hands-on training in all major departments and patient care)"
                }
            ]
        },
        "feesIntro": "The MBBS program at Tribhuvan University is considered affordable compared to private medical colleges in India and many other countries, making it a popular choice for students pursuing MBBS abroad in Nepal.",
        "fees": {
            "structure": [
                {
                    "year": "Yearly Tuition Fee",
                    "tuition": "INR 6.3 – 6.5 Lakhs",
                    "hostel": "INR 80,000 – 1,00,000",
                    "total": "₹7.1 – 7.5 Lakhs (Approx.)"
                },
                {
                    "year": "Total for 5 Years",
                    "tuition": "INR 30 – 32 Lakhs",
                    "hostel": "INR 4.0 – 5.0 Lakhs",
                    "total": "₹34 – 37 Lakhs (Approx.)"
                },
                {
                    "year": "Grand Total Cost",
                    "tuition": "Full Course",
                    "hostel": "Estimated",
                    "total": "₹40 – 50 Lakhs"
                }
            ]
        },
        "durationIntro": "The MBBS program at Tribhuvan University is structured to provide students with a balanced combination of theoretical knowledge, practical training, and clinical exposure.",
        "duration": {
            "headers": ["Course Phase", "Duration", "Details"],
            "table": [
                {
                    "Course Phase": "MBBS (Total Duration)",
                    "Duration": "5.5 Years",
                    "Details": "4.5 Years Academic + 1 Year Internship"
                },
                {
                    "Course Phase": "Basic Sciences",
                    "Duration": "1.5 Years",
                    "Details": "Subjects like Anatomy, Physiology, Biochemistry"
                },
                {
                    "Course Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Pathology, Microbiology, Pharmacology, Forensic Medicine"
                },
                {
                    "Course Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Course Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Rotatory clinical training in hospitals"
                }
            ]
        },
        "studentSupport": "Tribhuvan University ensures that students receive strong and continuous support services throughout their academic journey, especially for those pursuing MBBS abroad in Nepal. From the initial stage of admission, the university provides proper guidance for documentation, enrollment, and orientation programs, helping students understand the academic system, curriculum, and campus environment. New students are introduced to faculty members, departments, and facilities, which makes it easier for them to settle into university life. The university also offers excellent academic support through experienced professors, regular lectures, practical sessions, and mentorship programs, ensuring that students can perform well in their studies and build a solid foundation in medical sciences. In addition to academics, Tribhuvan University focuses on the overall well-being of students by providing counseling and guidance services, which help students manage stress, academic pressure, and personal challenges during their MBBS course. The university also supports students with hostel and accommodation facilities, offering a safe, clean, and comfortable living environment. Students have access to libraries, laboratories, research centers, and study materials, which play a crucial role in enhancing their learning experience. For international students, the university provides assistance in adapting to a new country, including help with local communication, cultural adjustment, and daily living needs. Furthermore, Tribhuvan University encourages students to participate in sports, cultural programs, seminars, workshops, and extracurricular activities, which help in developing confidence, leadership skills, and social connections. Students also get opportunities to take part in medical camps, community health programs, and research activities, which provide real-life exposure and practical experience in the healthcare field. The friendly campus environment, supportive faculty, and diverse student community create a positive atmosphere where students can grow academically as well as personally.",
        "recognition": "Tribhuvan University is one of the most prestigious institutions in Nepal, known for its strong foundation in education, research, and professional training. Affiliation: Tribhuvan University is a government-funded public university in Nepal and is officially affiliated with the Ministry of Education, Science and Technology of Nepal. It operates through multiple constituent campuses and affiliated colleges across the country. For medical education, the university functions under its prestigious Institute of Medicine (IOM), which manages the MBBS program, teaching hospitals, and research centers. Recognition: The MBBS degree offered by Tribhuvan University is widely recognized at both national and international levels. It is approved by the National Medical Commission (NMC) of India, the Medical Council of Nepal (MCN), and is listed in the World Directory of Medical Schools (WHO). This recognition allows graduates to appear for major medical licensing exams such as FMGE/NExT in India, USMLE in the USA, and PLAB in the UK, making it easier for students to pursue global medical careers. Achievements: Tribhuvan University has achieved a strong reputation over the years for its contribution to higher education, medical training, and research in Nepal. It is the largest university in Nepal, serving hundreds of thousands of students across various disciplines. The university has produced many successful doctors, healthcare professionals, researchers, and academicians who are working both in Nepal and internationally. Its Institute of Medicine (IOM) is especially known for its quality medical education, experienced faculty, and strong focus on community healthcare and research. Tribhuvan University regularly conducts medical camps, research programs, seminars, and workshops, contributing significantly to public health and medical advancements.",
        "hostelFacilities": "The university provides safe and comfortable hostel and accommodation facilities for students, offering a clean living environment. Students have access to libraries, laboratories, research centers, and study materials. Kathmandu provides a lively and culturally rich environment with easy access to cafes, markets, historical places, and natural beauty.",
        "studentLife": "Student life at Tribhuvan University is vibrant, engaging, and well-balanced, offering students a perfect mix of academic learning and personal growth. The university provides a friendly and supportive environment where students from different parts of Nepal and countries like India come together to study and build their future. The campus is equipped with essential facilities such as libraries, laboratories, research centers, and sports complexes, which help students in both their studies and extracurricular development. Students pursuing MBBS under the Institute of Medicine (IOM) get regular exposure to teaching hospitals, which adds practical value to their daily learning experience. Apart from academics, students are encouraged to take part in cultural programs, sports activities, seminars, and workshops, which help in improving confidence, communication skills, and teamwork. Festivals and events celebrated on campus give students a chance to experience the rich culture and traditions of Nepal, making their journey more enjoyable. The university also offers hostel facilities and safe accommodation options, along with access to basic amenities, making student life comfortable and secure. The city of Kathmandu provides a lively and culturally rich environment, with cafes, markets, historical places, and natural beauty, allowing students to relax and explore during their free time. Students also get opportunities to participate in medical camps, community health programs, and research activities, which enhance their practical knowledge and social responsibility. With a combination of quality education, clinical exposure, cultural diversity, and supportive surroundings, student life at Tribhuvan University becomes a memorable and enriching experience for those pursuing MBBS abroad in Nepal.",
        "whyChooseUsIntro": "iExplain Education is a reliable and experienced consultancy that helps students secure MBBS admission at Tribhuvan University in a smooth and hassle-free manner. With deep knowledge of the MBBS admission process in Nepal, the team provides complete guidance at every step.",
        "whyChooseUs": [
            "Expert Career Counseling: Personalized guidance based on student profile and career goals.",
            "Complete Admission Assistance: Step-by-step support from application to confirmation.",
            "Documentation Support: Help in preparing, verifying, and submitting all required documents correctly.",
            "Entrance & Eligibility Guidance: Proper information about admission criteria and requirements.",
            "Visa Assistance: Guidance for visa process, documentation, and approvals.",
            "Fee & Financial Guidance: Clear explanation of fee structure and expense planning.",
            "Pre-Departure Support: Help with travel planning, packing guidance, and orientation.",
            "Accommodation Assistance: Support in finding safe and comfortable hostels or living options.",
            "Travel & Arrival Support: Assistance with airport pickup and initial settling.",
            "24/7 Student Support: Continuous help during the entire course duration.",
            "Transparent Process: Honest and clear communication with students and parents.",
            "Post-Admission Support: Guidance even after reaching the university for a smooth transition."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled and signed application form of Tribhuvan University"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of date of birth and basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology, and English"
            },
            {
                "document": "NEET Score Card",
                "details": "Mandatory for Indian students applying for MBBS abroad"
            },
            {
                "document": "Passport / ID Proof",
                "details": "Valid passport or government ID (for identification)"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Proof of good health issued by a recognized hospital"
            },
            {
                "document": "Character Certificate",
                "details": "Issued by last attended school/college"
            },
            {
                "document": "Migration Certificate",
                "details": "Required for students from other boards/universities"
            },
            {
                "document": "Financial Proof",
                "details": "Bank statement or sponsor letter showing financial capability"
            },
            {
                "document": "Admission Offer Letter",
                "details": "Issued by Tribhuvan University after selection"
            }
        ],
        "conclusion": "Pursuing MBBS at Tribhuvan University is an excellent choice for students who are looking for a globally recognized medical degree at an affordable cost. As the oldest and largest university in Nepal, Tribhuvan University offers high-quality education through its well-established Institute of Medicine (IOM), combining strong theoretical knowledge with practical clinical exposure. The university is recognized by major bodies like the National Medical Commission (NMC) and is listed in the World Directory of Medical Schools, allowing graduates to pursue medical careers not only in Nepal but also in India and other countries after clearing required licensing exams such as FMGE/NExT, USMLE, and PLAB. With its experienced faculty, modern infrastructure, affordable fee structure, and strong focus on community healthcare, Tribhuvan University provides students with the right environment to grow academically and professionally. The supportive campus life, cultural diversity, and opportunities for research, medical camps, and practical training further enhance the overall learning experience.",
        "faqs": [
            {
                "question": "Is Tribhuvan University recognized by NMC for Indian students?",
                "answer": "Yes, Tribhuvan University is recognized by the National Medical Commission (NMC, India). Indian students can appear for FMGE/NExT after completing their MBBS."
            },
            {
                "question": "What is the duration of MBBS at Tribhuvan University?",
                "answer": "The MBBS course duration is 5.5 years, including 4.5 years of academic study and 1 year of compulsory internship."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program is taught in English, making it suitable for Indian and international students."
            },
            {
                "question": "What is the total fee for MBBS at Tribhuvan University?",
                "answer": "The total cost of the MBBS program is approximately INR 40–50 lakhs, including tuition and other expenses."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad and practice in India later."
            },
            {
                "question": "Does Tribhuvan University conduct an entrance exam?",
                "answer": "Yes, admission to MBBS is usually based on an entrance examination conducted by the Institute of Medicine (IOM)."
            },
            {
                "question": "Are hostel facilities available for students?",
                "answer": "Yes, the university provides hostel and accommodation facilities with basic amenities for both local and international students."
            },
            {
                "question": "Can students practice in India after completing MBBS from Tribhuvan University?",
                "answer": "Yes, students can practice in India after clearing the FMGE/NExT exam as per NMC guidelines."
            },
            {
                "question": "How is student life at Tribhuvan University?",
                "answer": "Student life is safe, vibrant, and culturally rich, with access to sports, cultural events, medical camps, and extracurricular activities."
            },
            {
                "question": "Why should I choose iExplain Education for MBBS admission?",
                "answer": "iExplain Education provides complete support including counseling, admission guidance, documentation, visa assistance, and pre-departure services, ensuring a smooth admission process."
            }
        ]
    },
    "kathmandu-university": {
        "title": "Kathmandu University",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Kathmandu_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Kathmandu_Mobile.webp",
        "intro": {
            "text": "Kathmandu University is one of the leading and most respected universities in Nepal, established in 1991, and known for its focus on quality education, innovation, and research. Located in a peaceful and scenic area near Dhulikhel, Nepal, the university provides an excellent environment for students to study and grow academically. It offers a wide range of programs in medicine, engineering, management, science, and arts, and has gained strong recognition both nationally and internationally.\n\nFor students planning to pursue MBBS abroad in Nepal, Kathmandu University is a popular choice due to its high academic standards and practical-oriented teaching approach. The MBBS program is offered through its affiliated medical colleges and is designed to provide a strong foundation in medical sciences along with hands-on clinical training in well-equipped hospitals. The course is taught in English, making it suitable for Indian and international students.\n\nThe university is recognized by the National Medical Commission (NMC) of India, the Medical Council of Nepal (MCN), and is listed in the World Directory of Medical Schools (WHO). This allows graduates to appear for FMGE/NExT, USMLE, and PLAB, opening opportunities for a global medical career. With its experienced faculty, modern infrastructure, research opportunities, and student-friendly environment, Kathmandu University provides a perfect platform for students to achieve their dream of becoming successful doctors.\n\nOne of the major advantages of studying at Kathmandu University is its global recognition and credibility. The university is recognized by the National Medical Commission (NMC) of India, the Medical Council of Nepal (MCN), and is listed in the World Directory of Medical Schools (WHO). This means that students graduating from Kathmandu University are eligible to appear for important licensing exams like FMGE/NExT in India, USMLE in the USA, and PLAB in the UK, which helps them build a successful medical career not only in Nepal but across the world.\n\nApart from academics, Kathmandu University focuses strongly on practical exposure and real-life medical training. Students get the opportunity to work in well-equipped hospitals, interact with patients, and gain hands-on experience, which is very important in the medical field. The university also encourages participation in research projects, workshops, seminars, and community health programs, helping students develop a deeper understanding of healthcare systems and social responsibility."
        },
        "quickOverview": {
            "University Name": "Kathmandu University",
            "Established": "1991",
            "Location": "Dhulikhel, Nepal",
            "Type": "Public University",
            "Affiliated Colleges": "Multiple medical, engineering, and management colleges across Nepal",
            "Courses Offered": "MBBS, BDS, Nursing, Engineering, Management, Science, Arts, and more",
            "Medium of Instruction": "English (for MBBS and most professional courses)",
            "Recognition": "Recognized by NMC (India), Medical Council of Nepal (MCN), WHO (WDOMS)",
            "MBBS Duration": "5.5 Years (4.5 Years Study + 1 Year Internship)"
        },
        "benefits": {
            "intro": "Kathmandu University is one of the top choices for students who want to pursue MBBS abroad in Nepal due to its high academic standards, global recognition, and practical-oriented teaching approach. Here are the key reasons why students prefer this institute:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The MBBS degree from Kathmandu University is recognized by NMC (India), Medical Council of Nepal (MCN), and WHO (WDOMS), which allows students to pursue higher studies or medical practice in different countries after clearing required licensing exams."
                },
                {
                    "Heading": "English Medium MBBS Program",
                    "Details": "The entire course is taught in English, which makes learning easier for international students and removes the need to learn a new language before starting the program."
                },
                {
                    "Heading": "Affordable Fee Structure",
                    "Details": "The cost of studying MBBS is much lower compared to private medical colleges in India and many other countries, making it a budget-friendly option without compromising on quality."
                },
                {
                    "Heading": "High-Quality Education System",
                    "Details": "The university follows a modern and updated curriculum that includes both theoretical classes and practical sessions, helping students understand medical concepts in depth."
                },
                {
                    "Heading": "Excellent Clinical Exposure",
                    "Details": "Students get hands-on training in well-equipped teaching hospitals, where they interact with real patients and gain practical experience from early stages of the course."
                },
                {
                    "Heading": "Experienced & Qualified Faculty",
                    "Details": "The university has highly experienced professors, doctors, and medical professionals who guide students with both academic knowledge and clinical expertise."
                },
                {
                    "Heading": "Preparation for Global Licensing Exams",
                    "Details": "The syllabus is designed to help students prepare for exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK), increasing their chances of building an international career."
                },
                {
                    "Heading": "Safe & Peaceful Environment",
                    "Details": "Located in Dhulikhel, the university offers a calm, pollution-free, and safe environment, which is ideal for focused study and student life."
                },
                {
                    "Heading": "Multicultural Learning Environment",
                    "Details": "Students from India and various other countries study together, creating a diverse environment that promotes cultural exchange and global exposure."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Kathmandu University is designed to provide students with a strong foundation in medical sciences along with practical clinical training. The curriculum is divided into three major phases: pre-clinical, para-clinical, and clinical, followed by a compulsory internship.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "Phase I – Pre-Clinical (1–1.5 Years)",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Year": "Phase II – Para-Clinical (1 Year)",
                    "Subjects Covered": "Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine"
                },
                {
                    "Year": "Phase III – Clinical (2–2.5 Years)",
                    "Subjects Covered": "General Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Psychiatry, Orthopedics, ENT, Ophthalmology, Dermatology"
                },
                {
                    "Year": "Community Medicine (Integrated)",
                    "Subjects Covered": "Public Health, Epidemiology"
                },
                {
                    "Year": "Internship (Compulsory)",
                    "Subjects Covered": "Rotatory Internship (1 Year)"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Kathmandu University is considered affordable compared to private medical colleges in India and other countries, making it a popular option for students pursuing MBBS abroad in Nepal.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "INR 9 – 12 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹9.6 – 13.2 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "INR 7 – 9 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹7.6 – 10.2 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "INR 6 – 8 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹6.6 – 9.2 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "INR 6 – 8 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹6.6 – 9.2 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "INR 5 – 7 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹5.6 – 8.2 Lakhs (Approx.)"
                },
                {
                    "year": "Total Fees",
                    "tuition": "INR 35 – 50 Lakhs",
                    "hostel": "INR 60,000 – 1,20,000",
                    "total": "₹35 – 50 Lakhs (Variable per college)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Kathmandu University is designed to provide students with a complete understanding of medical sciences along with practical clinical training. The total duration of the course is 5.5 years (66 months).",
        "duration": {
            "headers": ["Course Phase", "Duration", "Details"],
            "table": [
                {
                    "Course Phase": "Total MBBS Duration",
                    "Duration": "5.5 Years",
                    "Details": "4.5 Years Study + 1 Year Internship"
                },
                {
                    "Course Phase": "Pre-Clinical Phase",
                    "Duration": "1.5 – 2 Years",
                    "Details": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Course Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Pathology, Microbiology, Pharmacology, Forensic Medicine"
                },
                {
                    "Course Phase": "Clinical Phase",
                    "Duration": "2 – 2.5 Years",
                    "Details": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Course Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Rotatory training in hospitals with patient care"
                }
            ]
        },
        "studentSupport": "Kathmandu University offers a well-developed and student-focused support system to ensure that students have a smooth and comfortable academic journey, especially those pursuing MBBS abroad in Nepal. The university has a dedicated Student Welfare Directorate, which looks after students’ overall well-being, including academic guidance, counseling, hostel management, and extracurricular activities. It plays an important role in maintaining communication between students and university authorities, while also organizing sports, cultural programs, and social activities for holistic development. The university provides strong academic support through experienced faculty, mentorship programs, and continuous assessments, helping students stay focused and perform well in their studies. Students also have access to counseling services for emotional and mental well-being, which is very important during a demanding course like MBBS. Additionally, the university ensures a safe and secure campus environment with anti-ragging policies and support systems where students can report issues and seek help easily. Kathmandu University also offers excellent hostel and accommodation facilities, including separate hostels for boys and girls, along with essential amenities like food services, internet, and security. The campus includes facilities such as a fitness center, swimming pool, libraries, and laboratories, supporting both academic and personal development. For international students, the university provides additional support such as assistance with documentation, visa guidance, local adjustment, and communication, making it easier to adapt to a new country. Students are also encouraged to participate in research activities, seminars, workshops, and community health programs, which enhance their practical skills and professional growth.",
        "recognition": "Kathmandu University is one of the most reputed universities in Nepal, known for its strong academic system and global outlook. Affiliation: Kathmandu University is an autonomous, non-profit public institution established by an Act of Parliament and operates under the Government of Nepal. It is officially affiliated with the University Grants Commission (UGC) of Nepal, which ensures the quality and regulation of higher education in the country. The university also runs its medical programs through the Kathmandu University School of Medical Sciences (KUSMS) and has affiliations with several reputed medical colleges and teaching hospitals across Nepal. In addition, Kathmandu University has established collaborations with more than 50 national and international universities and institutions, enabling student exchange programs, joint research, and global exposure. Recognition: Kathmandu University is widely recognized at both national and international levels, making it a trusted choice for MBBS students. It is recognized by the Government of Nepal and approved by the Nepal Medical Council (NMC Nepal). For Indian students, the university is also recognized by the National Medical Commission (NMC India), allowing them to appear for FMGE/NExT after graduation. The university is listed in the World Directory of Medical Schools (WDOMS) and recognized by the World Health Organization (WHO), which makes its medical degree globally accepted. Achievements: Kathmandu University has achieved significant milestones in the field of education, research, and innovation since its establishment. It is known for maintaining a high standard of academic excellence, regular academic schedules, and a strong focus on research and community-based learning. The university has introduced several first-of-its-kind programs in Nepal, including advanced courses in medical sciences, engineering, and technology. Its graduates are known for their professional competence, research skills, and global adaptability.",
        "hostelFacilities": "Kathmandu University offers excellent hostel and accommodation facilities, including separate hostels for boys and girls, along with essential amenities like food services, internet, and security. The campus includes facilities such as a fitness center, swimming pool, libraries, and laboratories, supporting both academic and personal development. The surrounding area of Dhulikhel offers a peaceful lifestyle with scenic beauty, fresh air, and nearby places to explore during free time.",
        "studentLife": "Student life at Kathmandu University is vibrant, balanced, and full of opportunities for both academic growth and personal development. The university provides a peaceful and student-friendly environment in Dhulikhel, which helps students stay focused on their studies while also enjoying campus life. Students pursuing MBBS get regular exposure to clinical training in affiliated hospitals, which becomes an important part of their daily routine and helps them gain real-life medical experience. Along with academics, the university encourages students to take part in cultural events, sports activities, seminars, workshops, and student clubs, which help in building confidence, leadership skills, and teamwork. The campus is equipped with modern facilities such as libraries, laboratories, hostels, sports complexes, cafeterias, and recreational areas, ensuring a comfortable and convenient lifestyle for students. The university celebrates various festivals and cultural programs, allowing students from different backgrounds to connect and share their traditions, creating a multicultural and inclusive environment. International students, especially from India, find it easy to adapt due to the similar culture, food habits, and friendly atmosphere. Students also get opportunities to participate in research projects, medical camps, and community health programs, which enhance their practical knowledge and social responsibility.",
        "whyChooseUsIntro": "Getting admission to Kathmandu University for MBBS can be a competitive and detailed process, which is why choosing the right guidance is very important. iExplain Education is a trusted consultancy that helps students achieve their dream of studying MBBS abroad in Nepal with complete ease and confidence.",
        "whyChooseUs": [
            "Expert Career Counseling: Personalized guidance based on student profile, NEET score, and career goals to help choose the best medical college under Kathmandu University.",
            "Complete Admission Assistance: Step-by-step support from filling out application forms to securing admission confirmation without any confusion.",
            "Documentation Support: Assistance in preparing, verifying, and submitting all required documents correctly to avoid rejection or delays.",
            "Entrance Exam Guidance: Proper guidance regarding entrance exams, eligibility criteria, and preparation tips for MBBS admission in Nepal.",
            "Transparent Fee Guidance: Clear explanation of fee structure, payment process, and total expenses with no hidden charges.",
            "Visa & Travel Assistance: Support in visa documentation, application process, and travel arrangements for a smooth transition.",
            "Pre-Departure Orientation: Guidance on packing, travel, currency, and basic information about living in Nepal before departure.",
            "Accommodation Support: Help in arranging safe and comfortable hostel or living options near the university campus.",
            "On-Arrival Assistance: Airport pickup and support in settling down at the university and hostel.",
            "24/7 Student Support: Continuous assistance even after admission for academic, personal, or emergency needs.",
            "Post-Admission Guidance: Help with university formalities, local adjustments, and ongoing student support during the MBBS course."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled and signed application form"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of date of birth and basic education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology, and English"
            },
            {
                "document": "NEET Score Card",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Entrance Exam Score",
                "details": "As per Kathmandu University admission requirement"
            },
            {
                "document": "Passport / ID Proof",
                "details": "Valid passport or government ID"
            },
            {
                "document": "Passport Size Photographs",
                "details": "Recent photographs as per specifications"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Proof of good health from a recognized doctor/hospital"
            },
            {
                "document": "Character Certificate",
                "details": "Character Certificate"
            },
            {
                "document": "Migration Certificate",
                "details": "Required for students from different boards"
            },
            {
                "document": "Financial Proof",
                "details": "Bank statement or sponsor letter"
            }
        ],
        "conclusion": "Choosing to pursue MBBS at Kathmandu University is a smart and practical decision for students who are looking for a globally recognized medical degree at an affordable cost. The university is well-known for its high academic standards, modern teaching methods, and strong focus on practical clinical training, which helps students build a solid foundation in medical sciences. With recognition from major bodies like the National Medical Commission (NMC) and listing in the World Directory of Medical Schools (WHO), students get the opportunity to appear for important licensing exams such as FMGE/NExT, USMLE, and PLAB, opening doors to international medical careers. Kathmandu University provides a balanced learning environment, where students not only gain theoretical knowledge but also receive hands-on experience in affiliated hospitals, preparing them for real-world medical challenges.",
        "faqs": [
            {
                "question": "Is Kathmandu University recognized by NMC for Indian students?",
                "answer": "Yes, Kathmandu University is recognized by the National Medical Commission (NMC, India). Indian students can appear for FMGE/NExT after completing their MBBS."
            },
            {
                "question": "What is the duration of MBBS at Kathmandu University?",
                "answer": "The total duration of the MBBS course is 5.5 years, including 4.5 years of academic study and 1 year of compulsory internship."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program is taught in English, which makes it suitable for Indian and international students."
            },
            {
                "question": "What is the total fee for MBBS at Kathmandu University?",
                "answer": "The total MBBS fee ranges between INR 35–50 lakhs, depending on the affiliated medical college."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad and practice in India later."
            },
            {
                "question": "Does Kathmandu University conduct an entrance exam?",
                "answer": "Yes, admission is generally based on an entrance exam conducted by Kathmandu University or its affiliated colleges."
            },
            {
                "question": "Are hostel facilities available for students?",
                "answer": "Yes, the university provides hostel and accommodation facilities with basic amenities for students."
            },
            {
                "question": "Can students practice in India after completing MBBS?",
                "answer": "Yes, students can practice in India after clearing the FMGE/NExT exam as per NMC guidelines."
            },
            {
                "question": "How is student life at Kathmandu University?",
                "answer": "Student life is safe, peaceful, and engaging, with opportunities for sports, cultural events, research, and clinical exposure."
            },
            {
                "question": "Why should I choose iExplain Education for MBBS admission?",
                "answer": "iExplain Education provides complete support, including counseling, admission guidance, documentation, visa assistance, and pre-departure services, ensuring a smooth process."
            }
        ]
    },
    "bp-koirala-institute-of-health-sciences": {
        "title": "B. P. Koirala Institute of Health Sciences",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/BPKIHS_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/BPKIHS_Mobile.webp",
        "intro": {
            "text": "B. P. Koirala Institute of Health Sciences (BPKIHS) is one of the most reputed and well-established medical universities in Nepal, located in the beautiful city of Dharan. Established through a historic collaboration between the Government of Nepal and the Government of India, the institute was founded with a vision to strengthen healthcare education, promote advanced medical research, and deliver high-quality healthcare services across the region.\n\nWhen it comes to Study MBBS Abroad, BPKIHS stands out as a top choice for international students, especially Indian aspirants. The university offers a globally recognized MBBS in Nepal program that is designed according to international medical education standards. The curriculum focuses on a perfect balance of theoretical knowledge, clinical training, and practical exposure, making it an ideal destination for students who want to pursue MBBS Abroad at an affordable cost.\n\nOne of the major highlights of BPKIHS is its strong emphasis on hands-on clinical experience. The institute is attached to a well-equipped teaching hospital where students get early exposure to real patient interactions. This practical approach helps students develop excellent diagnostic, communication, and clinical skills, which are essential for a successful medical career. The university follows a modern teaching methodology that includes interactive learning, research-based studies, and advanced medical technologies.\n\nFor students searching for the Top Countries for MBBS Abroad, Nepal has become a preferred destination due to its proximity to India, similar culture, and no language barrier. At BPKIHS, the medium of instruction is English, making it convenient for international students to adapt quickly. The affordability of tuition fees and living expenses further adds to its popularity among students looking for Low-Cost MBBS Abroad options.\n\nThe institute is recognized by major international medical bodies, ensuring that the degree holds global value. Students graduating from BPKIHS are eligible to appear for various licensing exams such as FMGE/NExT in India, USMLE in the USA, and PLAB in the UK. This opens up wide career opportunities for those planning to build a successful medical career globally."
        },
        "quickOverview": {
            "University Name": "B. P. Koirala Institute of Health Sciences (BPKIHS)",
            "Location": "Dharan, Nepal",
            "Established": "1993",
            "Type": "Public Medical University",
            "Medium of Teaching": "English",
            "Course Offered": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
            "Duration of MBBS": "5.5 Years (including internship)",
            "Recognition": "NMC (India), WHO, and other global bodies",
            "Entrance Requirement": "NEET Qualification (for Indian students)",
            "Affiliation": "Autonomous Health Sciences University"
        },
        "benefits": {
            "intro": "Choosing the right university is one of the most important decisions for any medical aspirant planning to Study MBBS Abroad. B. P. Koirala Institute of Health Sciences (BPKIHS), located in Dharan, offers an ideal combination of quality education, affordability, and global recognition, making it a top choice for students pursuing MBBS in Nepal.",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "BPKIHS is recognized by major medical bodies such as NMC (India) and WHO. This ensures that students graduating from here are eligible to appear for licensing exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Affordable MBBS Abroad Option",
                    "Details": "For students looking for Low-Cost MBBS Abroad, BPKIHS provides high-quality education at a much lower cost compared to private medical colleges in India and other countries."
                },
                {
                    "Heading": "High-Quality Education & Modern Curriculum",
                    "Details": "The MBBS program at BPKIHS follows international standards with a well-structured curriculum that balances theoretical knowledge and practical training."
                },
                {
                    "Heading": "Early Clinical Exposure",
                    "Details": "One of the biggest advantages of studying at BPKIHS is the early clinical exposure. Students get hands-on training in a well-equipped teaching hospital."
                },
                {
                    "Heading": "English Medium Instruction",
                    "Details": "The entire MBBS course is taught in English, making it easier for international students, especially Indian students, to understand and adapt."
                },
                {
                    "Heading": "Experienced Faculty & Advanced Infrastructure",
                    "Details": "BPKIHS has highly qualified and experienced faculty members. The campus includes modern laboratories, digital libraries, and advanced medical equipment."
                },
                {
                    "Heading": "Safe & Comfortable Environment",
                    "Details": "Located in Dharan, the institute offers a safe, peaceful, and student-friendly environment. Cultural similarity with India makes adjustment easier."
                },
                {
                    "Heading": "Ideal Destination for Indian Students",
                    "Details": "Nepal is considered one of the Top Countries for MBBS Abroad for Indian students due to close proximity, similar food/culture, and no visa complications."
                },
                {
                    "Heading": "Strong Career Opportunities",
                    "Details": "Graduates from BPKIHS have excellent career prospects. After completing MBBS Abroad, students can pursue higher studies or practice medicine globally."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at B. P. Koirala Institute of Health Sciences (BPKIHS), located in Dharan, is designed according to international medical education standards. The course focuses on building a strong foundation in basic sciences, followed by clinical subjects and hands-on training through hospital exposure. The total duration is 4.5 years of academic study + 1 year compulsory internship.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects Covered"
            ],
            "table": [
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
                    "Subjects Covered": "Community Medicine, Forensic Medicine"
                },
                {
                    "Year": "4th Year (Final Year)",
                    "Subjects Covered": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Orthopedics, Ophthalmology, ENT"
                },
                {
                    "Year": "Internship (1 Year)",
                    "Subjects Covered": "Rotations in Medicine, Surgery, Pediatrics, Gynecology, Community Health, Emergency"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at B. P. Koirala Institute of Health Sciences (BPKIHS), located in Dharan, is considered moderate compared to private medical colleges in India. The total cost includes tuition fees, hostel charges, and other basic expenses.",
        "fees": {
            "structure": [
                {
                    "year": "At Admission (Year 1)",
                    "tuition": "$24,000 – $25,000",
                    "hostel": "$300 – $1,400",
                    "total": "₹21.5 – 22.5 Lakhs (Approx.)"
                },
                {
                    "year": "Year 2",
                    "tuition": "$15,000 – $16,000",
                    "hostel": "$300 – $1,400",
                    "total": "₹13.5 – 14.5 Lakhs (Approx.)"
                },
                {
                    "year": "Year 3",
                    "tuition": "$10,000 – $15,000",
                    "hostel": "$300 – $1,400",
                    "total": "₹9.5 – 13.5 Lakhs (Approx.)"
                },
                {
                    "year": "Year 4",
                    "tuition": "$8,000 – $10,000",
                    "hostel": "$300 – $1,400",
                    "total": "₹7.5 – 9.5 Lakhs (Approx.)"
                },
                {
                    "year": "Total Tuition Fee",
                    "tuition": "$60,000 – $75,000",
                    "hostel": "$300 – $1,400",
                    "total": "₹52 – 65 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at B. P. Koirala Institute of Health Sciences (BPKIHS), located in Dharan, is structured as per international medical education standards and includes both academic study and practical training.",
        "duration": {
            "headers": [
                "Course Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Course Phase": "Total MBBS Duration",
                    "Duration": "5.5 Years",
                    "Details": "4.5 Years Study + 1 Year Internship"
                },
                {
                    "Course Phase": "Pre-Clinical Phase",
                    "Duration": "1.5 Years",
                    "Details": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Course Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Pathology, Microbiology, Pharmacology, Forensic Medicine"
                },
                {
                    "Course Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Course Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Rotatory training in hospital departments"
                }
            ]
        },
        "studentSupport": "B. P. Koirala Institute of Health Sciences provides a strong and well-structured student support system to ensure that students have a smooth and comfortable academic journey, especially those pursuing MBBS abroad in Nepal. From the beginning of the admission process, the institute offers guidance through its academic and administrative departments, helping students with enrollment, course orientation, and understanding the curriculum. There are dedicated offices such as the academic division, registrar office, and information desk, where students can easily reach out for any queries or support during their studies. The institute also provides excellent academic support, with experienced faculty, regular lectures, practical sessions, and continuous assessments to help students stay on track. Students benefit from access to modern laboratories, research facilities, and an e-library system, which supports both academic learning and research activities. In addition, BPKIHS promotes a culture of continuous medical education, workshops, and training programs, ensuring that students keep updating their knowledge and skills throughout the course. For student well-being, the institute offers hostel and accommodation facilities within the campus, along with dining services, recreational areas, and sports facilities, creating a comfortable living environment. There is also a strong focus on mental and emotional support, where students can seek guidance and counseling when dealing with academic pressure or personal challenges. The campus includes basic amenities like canteens, banks, ATMs, and common areas, making daily life convenient for students. One of the key highlights of student support at BPKIHS is its teaching hospital and community-based training system, where students gain hands-on experience while being guided by experienced doctors and faculty members. The institute follows a “learn by doing” approach, where students are posted in hospitals and community health centers, helping them develop real-world medical skills under supervision.",
        "recognition": "B. P. Koirala Institute of Health Sciences is one of the most prestigious medical institutions in Nepal, known for its excellence in medical education, healthcare services, and research. For students planning to pursue MBBS abroad in Nepal, understanding its affiliation, recognition, and achievements is important, as these factors ensure the quality, credibility, and global acceptance of the degree. Affiliation: B. P. Koirala Institute of Health Sciences (BPKIHS) is an autonomous health sciences university established by the Government of Nepal and later upgraded to a university-level institution. It operates under the Ministry of Health and Population, Nepal, and is supported by a unique collaboration between the Governments of Nepal and India. The institute runs its own teaching hospital, medical colleges, and research centers, allowing students to receive integrated education and clinical training within the same campus. This strong institutional structure ensures that students get consistent academic guidance and hands-on medical experience. Recognition: BPKIHS is widely recognized at both national and international levels. It is approved by the Nepal Medical Council (NMC Nepal) and is also recognized by the National Medical Commission (NMC India), which allows Indian students to appear for FMGE/NExT after completing their MBBS. The institute is listed in the World Directory of Medical Schools (WDOMS) and recognized by global organizations such as the World Health Organization (WHO). This recognition enables graduates to pursue higher studies or medical practice in countries like India, USA, UK, and others, after clearing respective licensing exams such as USMLE and PLAB. Achievements: Over the years, B. P. Koirala Institute of Health Sciences has achieved a strong reputation for its contribution to medical education, healthcare delivery, and community services. It is known for its “community-oriented medical education” model, where students actively participate in rural health programs, medical camps, and public health initiatives. The institute has developed a well-equipped teaching hospital with advanced medical facilities, providing quality healthcare services to a large population. BPKIHS also promotes research and innovation, with students and faculty regularly involved in national and international research projects, seminars, and conferences. Its graduates are known for their clinical competence, practical skills, and global adaptability, making it one of the top choices for students seeking MBBS abroad in Nepal.",
        "hostelFacilities": "For student well-being, the institute offers hostel and accommodation facilities within the campus, along with dining services, recreational areas, and sports facilities, creating a comfortable living environment. The campus includes basic amenities like canteens, banks, ATMs, and common areas, making daily life convenient for students. Being a residential campus, BPKIHS helps create a strong sense of community and better interaction among students from different regions and countries, including India.",
        "studentLife": "Student life at B. P. Koirala Institute of Health Sciences is well-balanced, engaging, and focused on both academic excellence and personal development. The institute provides a disciplined yet friendly environment where students can fully concentrate on their medical studies while also enjoying campus life. Since BPKIHS is a residential campus, most students stay within the campus, which helps create a strong sense of community and better interaction among students from different regions and countries, including India. The campus is equipped with all essential facilities such as modern classrooms, advanced laboratories, a well-stocked library, hostels, sports grounds, cafeterias, and recreational areas, ensuring that students have a comfortable and convenient lifestyle. Medical students get regular exposure to the institute’s teaching hospital, where they interact with real patients and gain practical clinical experience from the early stages of their MBBS program. This hands-on learning plays a crucial role in building confidence and medical skills. Apart from academics, BPKIHS encourages students to participate in sports events, cultural programs, seminars, workshops, and student clubs, which help in developing leadership qualities, communication skills, and teamwork. Various festivals and cultural activities are celebrated on campus, allowing students to relax and enjoy their time while also connecting with different cultures. The institute also promotes involvement in community health programs and medical camps, where students get real-life exposure to rural healthcare systems and social responsibilities. The surrounding environment of the campus is peaceful, safe, and student-friendly, which helps students maintain a good balance between studies and personal life. International students find it easier to adapt due to the supportive faculty, friendly peers, and cultural similarities.",
        "whyChooseUsIntro": "Getting admission to B. P. Koirala Institute of Health Sciences for MBBS requires proper guidance, accurate documentation, and a clear understanding of the admission process. iExplain Education is a trusted consultancy that helps students achieve their dream of studying MBBS abroad in Nepal with ease and confidence.",
        "whyChooseUs": [
            "Personalized Career Counseling: One-on-one guidance based on student profile, NEET score, and career goals to choose the best option.",
            "Complete Admission Assistance: Step-by-step support from application filling to final admission confirmation.",
            "Documentation Support: Help in preparing, verifying, and submitting all required documents correctly to avoid rejection.",
            "Entrance Exam Guidance: Proper guidance regarding entrance exams, eligibility criteria, and preparation strategy.",
            "Transparent Fee Guidance: Clear breakdown of total fees, payment process, and no hidden charges.",
            "Visa & Travel Assistance: Support with visa documentation, application process, and travel arrangements.",
            "Pre-Departure Orientation: Guidance on travel, currency exchange, packing, and life in Nepal.",
            "Accommodation Support: Assistance in securing safe and comfortable hostel or nearby accommodation.",
            "On-Arrival Assistance: Airport pickup and help in settling into the campus and hostel.",
            "24/7 Student Support: Continuous assistance during the entire MBBS course for any academic or personal issues.",
            "Post-Admission Support: Help with university formalities, local adjustment, and ongoing student guidance.",
            "Experienced & Trusted Consultancy: Proven track record of successfully placing students in top medical universities abroad."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled and signed application form"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of date of birth"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, Biology, and English"
            },
            {
                "document": "NEET Score Card",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Entrance Exam Score",
                "details": "As per BPKIHS admission requirements"
            },
            {
                "document": "Passport / ID Proof",
                "details": "Valid passport or government ID"
            },
            {
                "document": "Passport Size Photographs",
                "details": "Recent photographs as per specifications"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a recognized hospital/doctor"
            },
            {
                "document": "Migration Certificate",
                "details": "Required for students from other boards"
            },
            {
                "document": "Admission Offer Letter",
                "details": "Issued by the institute after selection"
            }
        ],
        "conclusion": "Choosing to pursue MBBS at B. P. Koirala Institute of Health Sciences is a great decision for students who are looking for a high-quality and globally recognized medical education at an affordable cost. The institute is well-known for its strong academic system, experienced faculty, and excellent clinical training through its own teaching hospital, which helps students gain real-world medical experience. With recognition from major bodies like the National Medical Commission (NMC) and listing in the World Directory of Medical Schools (WHO), students get the opportunity to appear for important licensing exams such as FMGE/NExT, USMLE, and PLAB, making it easier to build a successful medical career both in India and abroad. BPKIHS follows a community-oriented medical education approach, where students actively participate in medical camps, rural healthcare programs, and research activities, helping them develop practical skills along with a sense of social responsibility. The institute provides a safe, disciplined, and student-friendly campus environment, along with modern facilities like hostels, libraries, laboratories, and recreational areas, ensuring a comfortable and focused learning experience.",
        "faqs": [
            {
                "question": "Is B. P. Koirala Institute of Health Sciences recognized by NMC for Indian students?",
                "answer": "Yes, B. P. Koirala Institute of Health Sciences is recognized by the National Medical Commission (NMC, India). Indian students can appear for FMGE/NExT after completing their MBBS."
            },
            {
                "question": "What is the duration of MBBS at BPKIHS?",
                "answer": "The MBBS course duration is 5.5 years, including 4.5 years of academic study and 1 year of compulsory internship."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program is taught in English, making it suitable for Indian and international students."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad and practice in India later."
            },
            {
                "question": "Does BPKIHS conduct an entrance exam?",
                "answer": "Yes, admission is generally based on an entrance exam conducted by the institute."
            },
            {
                "question": "What is the approximate fee for MBBS at BPKIHS?",
                "answer": "The total MBBS fee is generally around INR 60–70 lakhs, depending on the category and seat type."
            },
            {
                "question": "Are hostel facilities available for students?",
                "answer": "Yes, the institute provides on-campus hostel facilities with basic amenities for students."
            },
            {
                "question": "Can students practice in India after completing MBBS from BPKIHS?",
                "answer": "Yes, students can practice in India after clearing the FMGE/NExT exam as per NMC guidelines."
            },
            {
                "question": "How is student life at BPKIHS?",
                "answer": "Student life is disciplined, safe, and engaging, with opportunities for clinical exposure, sports, cultural events, and research activities."
            }
        ]
    },
    "patan-academy-of-health-sciences": {
        "title": "Patan Academy of Health Sciences",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/PAHS_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/PAHS_Mobile.webp",
        "intro": {
            "text": "Patan Academy of Health Sciences is one of the leading medical institutions in Nepal, established in 2008, with a strong focus on providing quality medical education, research, and healthcare services. Located in Lalitpur (Patan), Nepal, the academy is closely associated with the well-known Patan Hospital, which serves as its primary teaching hospital. The institution was established with the mission of improving healthcare services in rural and underserved areas, making it unique compared to many other medical universities.\n\nFor students planning to pursue MBBS abroad in Nepal, Patan Academy of Health Sciences offers a well-structured and globally recognized MBBS program. The course is designed to provide a strong foundation in basic medical sciences along with practical clinical training, ensuring that students develop both theoretical knowledge and real-world medical skills. The MBBS program is taught in English, which makes it convenient for Indian and international students. Students also get early exposure to hospital training and community-based healthcare programs, which helps them understand real patient care and public health challenges.\n\nThe academy is recognized by the Nepal Medical Council (NMC Nepal) and is also listed in the World Directory of Medical Schools (WHO), allowing graduates to appear for licensing exams such as FMGE/NExT (India), USMLE (USA), and PLAB (UK). With its focus on community-oriented medical education, experienced faculty, modern infrastructure, and hands-on clinical exposure, Patan Academy of Health Sciences has become a preferred choice for students who want to pursue MBBS abroad at an affordable cost while gaining meaningful medical experience.\n\nOverall, Patan Academy of Health Sciences provides a perfect combination of quality education, practical training, and social responsibility, helping students become not only skilled doctors but also responsible healthcare professionals ready to serve society."
        },
        "quickOverview": {
            "University Name": "Patan Academy of Health Sciences",
            "Established": "2008",
            "Location": "Lalitpur (Patan), Nepal",
            "Type": "Public Medical Institution",
            "Affiliated Hospital": "Patan Hospital",
            "Courses Offered": "MBBS, Nursing, Public Health, Allied Health Sciences",
            "Medium of Instruction": "English",
            "Recognition": "Recognized by Nepal Medical Council (NMC Nepal), Listed in WDOMS (WHO)",
            "MBBS Duration": "5.5 Years (4.5 Years Study + 1 Year Internship)"
        },
        "benefits": {
            "intro": "Patan Academy of Health Sciences (PAHS) in Nepal is one of the most respected medical institutions in South Asia, offering a unique MBBS program designed to produce competent, socially responsible, and community-oriented doctors.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Strong Academic Reputation & Recognition",
                    "Details": "PAHS is a fully autonomous public medical institution established by the Nepalese Parliament, ensuring government-level support and credibility. Its MBBS degree is recognized internationally, including by the NMC India, which allows Indian students to appear for the FMGE/NExT exam."
                },
                {
                    "Heading": "Modern & Innovative Curriculum",
                    "Details": "The MBBS program at PAHS follows Problem-Based Learning (PBL) and clinical presentation methods, which emphasize critical thinking, analytical skills, and self-directed learning. Students are exposed to real-life medical problems from the first year."
                },
                {
                    "Heading": "Extensive Clinical Exposure",
                    "Details": "Students at PAHS get hands-on training from early years of study in Patan Hospital and during rural postings in community health centers. They gain experience with a wide variety of diseases and patient demographics."
                },
                {
                    "Heading": "Focus on Community Health & Rural Care",
                    "Details": "PAHS has a unique mission to strengthen rural healthcare. Students actively participate in community health projects, mobile health camps, and rural hospital postings, preparing them to serve areas with critical medical needs."
                },
                {
                    "Heading": "Cost-Effective Education",
                    "Details": "Compared to many private medical colleges in India and other countries, PAHS offers MBBS education at an affordable cost without compromising on quality."
                },
                {
                    "Heading": "English-Medium Instruction",
                    "Details": "All MBBS courses at PAHS are taught in English, facilitating easy comprehension for international students and preparing them for global medical exams such as USMLE, PLAB, or FMGE/NExT."
                },
                {
                    "Heading": "Career Opportunities & Global Exposure",
                    "Details": "Graduates from PAHS are well-prepared for clinical practice, postgraduate medical studies, research, and public health roles, with opportunities to work internationally."
                },
                {
                    "Heading": "Holistic Student Support",
                    "Details": "Beyond academics, PAHS provides a supportive environment including hostels, libraries, labs, and guidance from experienced faculty. Students receive mentoring, counseling, and career guidance."
                }
            ]
        },
        "SyllabusIntro": "The MBBS course offered by Patan Academy of Health Sciences (PAHS) is an integrated course, which includes 6 years of academic and clinical learning. The course focuses on developing students' theoretical knowledge, skills, and community-based healthcare delivery skills.",
        "syllabus": {
            "headers": ["Year / Phase", "Subjects Covered"],
            "table": [
                {
                    "Year / Phase": "Foundation / Introductory (First 6 months)",
                    "Subjects Covered": "Introduction to Clinical Medicine (ICM), Communication & Professional Skills, Community Health"
                },
                {
                    "Year / Phase": "1st Year (Pre-Clinical)",
                    "Subjects Covered": "Anatomy, Histology, Physiology, Biochemistry"
                },
                {
                    "Year / Phase": "2nd Year (Pre-Clinical / Para-Clinical)",
                    "Subjects Covered": "Microbiology, Pathology, Pharmacology, Genetics, Community Medicine"
                },
                {
                    "Year / Phase": "3rd Year (Clinical Phase begins)",
                    "Subjects Covered": "Pathophysiology, Pharmacology, Obstetrics & Gynecology, Forensic Medicine, Family Health, Internal Medicine"
                },
                {
                    "Year / Phase": "4th Year (Clinical Rotations)",
                    "Subjects Covered": "Surgery & Allied, Pediatrics, Internal Medicine, Obstetrics & Gynecology, ENT, Ophthalmology, Emergency Medicine"
                },
                {
                    "Year / Phase": "5th Year (Advanced Clinical Rotations)",
                    "Subjects Covered": "Neurology & Psychiatry, Cardiology, Orthopedics, Infectious & Tropical Diseases, Critical Care"
                },
                {
                    "Year / Phase": "Rural Rotation / Community Posting",
                    "Subjects Covered": "Community Medicine, Primary Health Care"
                },
                {
                    "Year / Phase": "6th Year (Internship / Rotating Internship)",
                    "Subjects Covered": "All Clinical Departments"
                }
            ]
        },
        "feesIntro": "Patan Academy of Health Sciences (PAHS) offers one of the most affordable and high-quality MBBS programs in Nepal. As a public government-funded medical institution, its fees are regulated and lower than most private colleges.",
        "fees": {
            "structure": [
                {
                    "year": "1 Year",
                    "tuition": "1,122,691",
                    "hostel": "40,000",
                    "total": "₹7.5 – 8.0 Lakhs (Approx.)"
                },
                {
                    "year": "2 Year",
                    "tuition": "1,114,691",
                    "hostel": "40,000",
                    "total": "₹7.5 – 8.0 Lakhs (Approx.)"
                },
                {
                    "year": "3 Year",
                    "tuition": "373,697",
                    "hostel": "40,000",
                    "total": "₹2.6 – 2.8 Lakhs (Approx.)"
                },
                {
                    "year": "4 Year",
                    "tuition": "373,697",
                    "hostel": "40,000",
                    "total": "₹2.6 – 2.8 Lakhs (Approx.)"
                },
                {
                    "year": "5 Year",
                    "tuition": "370,496",
                    "hostel": "40,000",
                    "total": "₹2.6 – 2.8 Lakhs (Approx.)"
                },
                {
                    "year": "Total (Approx.)",
                    "tuition": "3,355,272",
                    "hostel": "2,00,000",
                    "total": "₹33 – 34 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at Patan Academy of Health Sciences (PAHS) is designed to provide comprehensive medical education that combines theoretical knowledge, clinical training, and community health exposure.",
        "duration": {
            "headers": ["Course Phase", "Duration", "Details"],
            "table": [
                {
                    "Course Phase": "Total MBBS Duration",
                    "Duration": "5.5 Years",
                    "Details": "4.5 Years Study + 1 Year Internship"
                },
                {
                    "Course Phase": "Pre-Clinical Phase",
                    "Duration": "1.5 Years",
                    "Details": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Course Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Pathology, Microbiology, Pharmacology, Forensic Medicine"
                },
                {
                    "Course Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Course Phase": "Internship",
                    "Duration": "1 Year",
                    "Details": "Rotatory training in hospital departments"
                }
            ]
        },
        "studentSupport": "Patan Academy of Health Sciences (PAHS) is dedicated to providing a comprehensive and holistic support system for all MBBS students, ensuring that they thrive academically, professionally, and personally throughout their medical education. From the very beginning of the program, students are provided with academic mentorship and guidance by experienced faculty members who help them navigate the rigorous curriculum. This mentorship includes personalized academic counseling, guidance in clinical skill development, and continuous feedback on performance, ensuring that students develop a strong foundation in both theoretical knowledge and practical medical skills.\n\nOne of the key strengths of PAHS is its hands-on clinical training, which begins early in the program. Students receive practical exposure at Patan Hospital, one of the largest teaching hospitals in Nepal, as well as at affiliated rural health centers across the country. During these clinical rotations, students are supervised by experienced doctors and faculty members who guide them in patient examination, diagnosis, treatment planning, and communication skills, helping them gain confidence and competence in real-world medical practice. PAHS emphasizes not only hospital-based clinical learning but also community and rural health exposure, where students actively participate in health camps, outreach programs, and preventive medicine projects.\n\nIn addition to clinical training, PAHS provides extensive academic resources to support learning and research. The academy maintains a modern library with a wide range of medical books, journals, and digital resources, including e-learning platforms and research databases. The institution also provides safe and comfortable hostel accommodations with essential amenities for both local and international students, creating an environment conducive to focused study and personal growth. Students also have access to counseling and mental health services, helping them manage the stress and pressures of medical education.",
        "recognition": "Patan Academy of Health Sciences (PAHS) is a prestigious medical institution in Nepal with strong affiliations, recognitions, and a record of notable achievements. Affiliation: Patan Academy of Health Sciences (PAHS) is an autonomous public medical institution established by the Nepalese Parliament. It is closely affiliated with Patan Hospital, one of the leading tertiary care hospitals in Nepal, as well as several rural and community health centers. Recognition: PAHS is recognized by multiple medical authorities, ensuring that its MBBS degree is valid both in Nepal and internationally. Key recognitions include the Nepal Medical Council (NMC Nepal) and the National Medical Commission (NMC India). It is also listed in the World Directory of Medical Schools, enabling graduates to pursue higher studies or clinical practice worldwide. Achievements: PAHS has established a reputation for producing competent, socially responsible, and highly skilled doctors. Its notable achievements include a strong focus on rural healthcare and community medicine, providing students with extensive experience in preventive care and public health. The implementation of Problem-Based Learning (PBL) and early clinical exposure are key factors in its success, leading to a high success rate in postgraduate entrance exams and international licensing examinations.",
        "hostelFacilities": "The institution provides safe and comfortable hostel accommodations with essential amenities for both local and international students, creating an environment conducive to focused study and personal growth. The campus provides common recreational areas and access to sports and fitness facilities. Patan/Lalitpur is a culturally rich area with all urban facilities available near the campus.",
        "studentLife": "Student life at Patan Academy of Health Sciences (PAHS) is a balanced blend of rigorous academic training, clinical exposure, community service, and extracurricular activities, designed to nurture well-rounded medical professionals. The academy emphasizes early clinical exposure, allowing students to interact with patients and healthcare teams from the first year, which helps them develop confidence, communication skills, and practical medical expertise. A unique feature of student life at PAHS is its focus on rural healthcare, where students participate in community postings, health camps, and preventive medicine projects in district hospitals and rural clinics.\n\nBeyond academics, PAHS encourages students to maintain a healthy and balanced lifestyle. The campus provides safe and comfortable hostel accommodations, common recreational areas, and access to sports and fitness facilities. Students actively participate in cultural events, social clubs, medical seminars, workshops, and sports competitions, promoting teamwork, leadership, and personal growth. The academy also provides counseling and mental health support, helping students manage stress and maintain well-being during the demanding MBBS program. International students at PAHS receive special guidance for adapting to life in Nepal, including orientation programs, peer mentorship, and language assistance.",
        "whyChooseUsIntro": "Choosing the right consultancy can make the MBBS admission process abroad smooth, reliable, and stress-free. iExplain Education has established itself as a trusted education consultancy for students aspiring to study MBBS at Patan Academy of Health Sciences (PAHS), Nepal.",
        "whyChooseUs": [
            "Expert Guidance and Counseling: iExplain Education provides personalized counseling to help students understand eligibility, admission criteria, and course structure.",
            "Complete Documentation Support: Assistance with all admission documents, including application forms, academic certificates, and passport requirements.",
            "Direct Liaison with PAHS: Strong coordination with PAHS administration ensures timely updates, seat confirmation, and smooth admission procedures.",
            "Visa and Travel Assistance: Support for student visa processing, travel arrangements, and pre-departure guidance.",
            "Accommodation and Hostel Guidance: Help in arranging safe and comfortable hostel or living facilities near the campus.",
            "Pre-Departure Orientation: Students receive orientation programs, tips on living in Nepal, cultural adaptation, and academic expectations.",
            "Career and FMGE/NExT Support: Guidance on preparing for licensing exams and planning for a successful future medical career.",
            "Transparent and Reliable Services: iExplain Education maintains honesty, transparency, and a student-first approach throughout the process."
        ],
        "documents": [
            {
                "document": "Completed Application Form",
                "details": "Filled and signed PAHS MBBS application form"
            },
            {
                "document": "Passport",
                "details": "Valid passport with at least 2 years of validity"
            },
            {
                "document": "Mark Sheets / Certificates",
                "details": "Class 10 & 12 certificates with subjects and marks"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered medical practitioner confirming fitness"
            },
            {
                "document": "Passport-sized Photographs",
                "details": "Recent color photographs (as per PAHS specifications)"
            },
            {
                "document": "Migration / Transfer Certificate",
                "details": "Required for students applying from other boards"
            },
            {
                "document": "Character / Conduct Certificate",
                "details": "Issued by the last attended school or college"
            },
            {
                "document": "NEET Score Card (for Indian students)",
                "details": "Mandatory for Indian students to appear in MBBS abroad programs"
            },
            {
                "document": "Visa / Travel Documents",
                "details": "Required once admission is confirmed for travel to Nepal"
            }
        ],
        "conclusion": "Patan Academy of Health Sciences (PAHS) stands out as one of the most reputable and student-friendly medical institutions in Nepal, offering a well-structured MBBS program that combines academic excellence, clinical exposure, and community-oriented healthcare training. With its strong affiliations, international recognitions, and focus on rural healthcare, PAHS ensures that students not only gain comprehensive medical knowledge but also develop the skills and values required to become competent, socially responsible doctors.\n\nChoosing PAHS for MBBS is a wise decision for students seeking quality education abroad at an affordable cost, with opportunities for practical training, research, and global career prospects. With the guidance of a trusted consultancy like iExplain Education, students can navigate the admission process smoothly and begin their journey with confidence.",
        "faqs": [
            {
                "question": "What is the duration of the MBBS program at PAHS?",
                "answer": "The MBBS program at PAHS is 5.5 years long, which includes 5 years of academic study and 6 months of compulsory internship, along with rural and community health postings."
            },
            {
                "question": "Is Patan Academy of Health Sciences recognized for international students?",
                "answer": "Yes, PAHS is recognized by the Nepal Medical Council (NMC Nepal), the National Medical Commission (NMC India), and listed in the World Directory of Medical Schools, allowing graduates to practice or pursue higher studies internationally."
            },
            {
                "question": "What is the eligibility criteria for Indian students?",
                "answer": "Indian students must have completed Class 12 (10+2) with Physics, Chemistry, and Biology, and must have qualified the NEET exam to apply for MBBS at PAHS."
            },
            {
                "question": "How much is the tuition fee for MBBS at PAHS?",
                "answer": "The total tuition fee for the MBBS course is approximately NPR 4,223,090 (~INR 33–34 lakhs), which includes tuition installments and hostel charges. Additional expenses like living, books, and insurance are separate."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include passport, NEET score card, Class 10 & 12 mark sheets, medical fitness certificate, character certificate, photos, and completed application form. iExplain Education assists students in preparing all documents."
            },
            {
                "question": "Does PAHS provide hostel facilities?",
                "answer": "Yes, PAHS offers safe and comfortable hostel accommodations for both local and international students, ensuring a supportive environment for study and personal growth."
            },
            {
                "question": "What is the language of instruction?",
                "answer": "The medium of instruction at PAHS is English, making it easier for international students, including Indians, to adapt to the curriculum."
            },
            {
                "question": "How is the student life at PAHS?",
                "answer": "Student life combines rigorous academics, clinical exposure, community postings, and extracurricular activities. Students engage in sports, cultural events, workshops, and social initiatives alongside their medical education."
            },
            {
                "question": "Can iExplain Education help with the admission process?",
                "answer": "Yes, iExplain Education provides end-to-end guidance, including admission counseling, documentation, visa assistance, travel guidance, and pre-departure support, making the process smooth and hassle-free."
            },
            {
                "question": "Do PAHS graduates need to take FMGE/NExT in India?",
                "answer": "Yes, Indian students who graduate from PAHS must clear the FMGE/NExT exam to practice medicine in India. iExplain Education also provides guidance and tips to help students prepare for this exam."
            }
        ]
    },
    "dhaka-national-medical-college": {
        "title": "Dhaka National Medical College",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/DNMC_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/DNMC_Mobile.webp",
        "intro": {
            "text": "Dhaka National Medical College (DNMC), located in the heart of Dhaka, Bangladesh, is one of the country’s well-established private medical institutions known for providing high-quality medical education. Established in 1992, DNMC has grown into a reputable center for undergraduate and postgraduate medical training, combining modern teaching methods, advanced clinical exposure, and a strong emphasis on research and community health.\n\nThe college is affiliated with the University of Dhaka, one of Bangladesh’s premier universities, ensuring that its MBBS degree is recognized nationally and internationally. The medium of instruction is English, making it a preferred choice for international students, particularly from India, Nepal, and other neighboring countries. The college is recognized by the Bangladesh Medical and Dental Council (BMDC), the Medical Council of India (MCI/NMC India), and listed in the World Directory of Medical Schools, allowing graduates to appear for licensing exams and pursue medical careers globally.\n\nDhaka National Medical College offers a comprehensive MBBS curriculum that combines pre-clinical, para-clinical, and clinical education with extensive hospital-based practical training at the college’s own teaching hospital, which serves thousands of patients every year. The college also emphasizes community health programs, rural postings, and research initiatives, providing students with hands-on experience in real-world healthcare settings.\n\nWith a student-centric approach, experienced faculty, modern facilities, and a vibrant campus life, Dhaka National Medical College continues to attract students from Bangladesh and abroad who aspire to become competent and socially responsible medical professionals."
        },
        "quickOverview": {
            "Name of College": "Dhaka National Medical College (DNMC)",
            "Established": "1992",
            "Location": "Dhaka, Bangladesh",
            "Affiliation": "University of Dhaka",
            "Recognition": "Bangladesh Medical and Dental Council (BMDC), National Medical Commission (NMC India), World Directory of Medical Schools",
            "Medium of Instruction": "English",
            "Course Offered": "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
            "Duration of MBBS": "5 years academic study + 1-year compulsory internship (total 6 years)",
            "Teaching Hospital": "Dhaka National Medical College Hospital (attached)",
            "Facilities": "Modern classrooms, well-equipped laboratories, library, hostel accommodations, sports and extracurricular facilities",
            "Focus Areas": "Clinical training, research, community and rural health programs, preventive medicine"
        },
        "benefits": {
            "intro": "Dhaka National Medical College (DNMC) is one of the most sought-after destinations for MBBS aspirants from Bangladesh, India, and other countries. The college offers a high-quality medical education that combines strong academic learning, extensive clinical exposure, and community health training. Here are the key reasons to choose DNMC:",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Internationally Recognized Degree",
                    "Details": "DNMC is affiliated with the University of Dhaka, recognized by the BMDC, National Medical Commission (NMC India), and listed in the World Directory of Medical Schools, ensuring graduates can pursue careers or higher studies globally."
                },
                {
                    "Heading": "Medium of Instruction in English",
                    "Details": "The MBBS program is taught entirely in English, making it convenient for international students, especially from India, Nepal, and other countries, to follow the curriculum easily."
                },
                {
                    "Heading": "Extensive Clinical Exposure",
                    "Details": "Students train at the Dhaka National Medical College Hospital, gaining hands-on experience in patient care, diagnosis, and treatment from the early years of the program."
                },
                {
                    "Heading": "Focus on Community & Rural Health",
                    "Details": "DNMC emphasizes community medicine, rural postings, and preventive healthcare programs, helping students develop social responsibility and practical skills to serve diverse populations."
                },
                {
                    "Heading": "Affordable Tuition Fees",
                    "Details": "The cost of MBBS in DNMC is significantly lower than many private medical colleges in India, making it an attractive option for budget-conscious students seeking quality education abroad."
                },
                {
                    "Heading": "Experienced Faculty & Modern Facilities",
                    "Details": "The college has a dedicated team of qualified professors, modern laboratories, libraries, and simulation labs, providing a high standard of medical education and research opportunities."
                },
                {
                    "Heading": "Support for International Students",
                    "Details": "DNMC provides guidance for visa, travel, accommodation, and adaptation to life in Bangladesh, ensuring a smooth transition for foreign students."
                },
                {
                    "Heading": "Strong Career Opportunities",
                    "Details": "Graduates are well-prepared to appear for licensing exams like FMGE/NExT in India, pursue postgraduate studies, or practice medicine internationally."
                },
                {
                    "Heading": "Holistic Student Life",
                    "Details": "Students enjoy a vibrant campus life with extracurricular activities, sports, cultural events, and seminars, promoting personal development alongside medical education."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at DNMC is structured over 5 years of academic study followed by a 1-year compulsory internship, covering pre-clinical, para-clinical, and clinical subjects. The syllabus is designed to provide strong theoretical knowledge, practical skills, and clinical exposure to prepare competent doctors.",
        "syllabus": {
            "headers": [
                "Phase",
                "Duration",
                "Subjects / Courses"
            ],
            "table": [
                {
                    "Phase": "Pre-Clinical",
                    "Duration": "1st Year",
                    "Subjects / Courses": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical",
                    "Duration": "2nd & 3rd Year",
                    "Subjects / Courses": "Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine"
                },
                {
                    "Phase": "Clinical",
                    "Duration": "4th & 5th Year",
                    "Subjects / Courses": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Ophthalmology, ENT, Psychiatry, Dermatology, Orthopedics"
                },
                {
                    "Phase": "Internship / Rotating Internship",
                    "Duration": "1 Year",
                    "Subjects / Courses": "All major clinical specialties"
                },
                {
                    "Phase": "Community & Rural Health Posting",
                    "Duration": "Integrated",
                    "Subjects / Courses": "Community Medicine, Public Health Projects, Rural Healthcare Programs"
                }
            ]
        },
        "feesIntro": "Dhaka National Medical College (DNMC), located in Dhaka, Bangladesh, offers one of the most cost‑effective MBBS programs for international students, especially Indian students looking for quality medical education abroad. The fee structure is divided into admission fees, tuition fees, and additional charges such as hostel and food expenses.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "2nd Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "3rd Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "4th Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "5th Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "Total",
                    "tuition": "₹14,94,000",
                    "hostel": "₹2,49,000",
                    "total": "₹17,43,000"
                }
            ]
        },
        "durationIntro": "The MBBS program at Dhaka National Medical College (DNMC) is designed to provide students with a comprehensive medical education that combines theoretical knowledge, practical skills, and clinical exposure. The total duration of the MBBS course is 5 years of academic study followed by a 1-year compulsory internship, making it 6 years in total.",
        "duration": {
            "headers": [
                "Phase",
                "Duration",
                "Details"
            ],
            "table": [
                {
                    "Phase": "Pre-Clinical Study",
                    "Duration": "1st Year",
                    "Details": "Focus on Anatomy, Physiology, Biochemistry; foundational medical knowledge and laboratory work"
                },
                {
                    "Phase": "Para-Clinical Study",
                    "Duration": "2nd & 3rd Year",
                    "Details": "Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine; integration of disease mechanisms, drugs, preventive medicine, and public health"
                },
                {
                    "Phase": "Clinical Study",
                    "Duration": "4th & 5th Year",
                    "Details": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Ophthalmology, ENT, Psychiatry, Dermatology, Orthopedics; extensive hospital-based practical training and patient care"
                },
                {
                    "Phase": "Rotating Internship",
                    "Duration": "6th Year (1 year)",
                    "Details": "Hands-on clinical training in all major specialties; emergency management, patient care, and practical application of knowledge"
                },
                {
                    "Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "5 years academic study + 1-year compulsory internship, including rural/community health exposure"
                }
            ]
        },
        "studentSupport": "Dhaka National Medical College (DNMC) provides a comprehensive range of student support services designed to help both local and international students excel academically, socially, and personally. The college ensures that students receive guidance and assistance throughout their MBBS journey, starting from admission to graduation. DNMC offers academic support, including access to experienced faculty, well-equipped laboratories, modern classrooms, libraries with extensive medical resources, and digital learning platforms. This ensures that students have all the tools necessary to understand complex medical concepts and perform well in exams.\n\nFor international students, especially those from India, Nepal, and other countries, DNMC provides orientation programs and guidance for adapting to life in Bangladesh, including help with hostel arrangements, food, cultural adaptation, and local transport. The college has comfortable hostel accommodations with safe living environments, recreational areas, and 24/7 security. Students also have access to healthcare facilities, counseling services, and mentorship programs, which help them manage stress and maintain mental well-being during the demanding MBBS program.\n\nDNMC encourages students to participate in extracurricular activities, sports, cultural programs, seminars, and workshops, which enhance leadership, teamwork, and communication skills. The college also organizes community outreach programs, health camps, and rural postings, allowing students to gain practical experience in public health and preventive medicine while developing a sense of social responsibility. With a focus on holistic development, academic excellence, and personal growth, the student support services at DNMC ensure that students are well-prepared for both professional practice and global medical careers.",
        "recognition": "Dhaka National Medical College (DNMC) is one of Bangladesh’s leading private medical colleges, known for its high academic standards, clinical training, and global recognition. The college is fully affiliated with the University of Dhaka, ensuring that its MBBS degree is credible and recognized both nationally and internationally.\n\nAffiliation of Dhaka National Medical College\nDhaka National Medical College (DNMC) is affiliated with the University of Dhaka, one of Bangladesh’s oldest and most prestigious universities. This affiliation ensures that the MBBS curriculum, examinations, and degrees are conducted under the strict academic standards of the University of Dhaka, providing students with a credible and recognized qualification. The college follows the syllabus and guidelines prescribed by the University, maintaining high academic standards comparable to international medical education frameworks.\n\nRecognition of Dhaka National Medical College\nDNMC is recognized by multiple national and international bodies, making it a trusted choice for medical aspirants worldwide:\n- Bangladesh Medical and Dental Council (BMDC): Official recognition to conduct MBBS programs in Bangladesh.\n- National Medical Commission (NMC India): Approval for Indian students to pursue MBBS and appear for FMGE/NExT.\n- World Directory of Medical Schools (WDOMS): Listing ensures international recognition for higher studies or medical practice abroad.\n\nAchievements of Dhaka National Medical College\nDhaka National Medical College has made significant strides in medical education, research, and healthcare service since its establishment:\n- Maintains a high success rate in FMGE/NExT exams for Indian students.\n- Operates its own teaching hospital, serving thousands of patients annually, giving students excellent clinical exposure.\n- Actively participates in community health programs, rural healthcare initiatives, and preventive medicine projects, contributing to public health in Bangladesh.\n- Equipped with modern laboratories, advanced medical equipment, and digital learning facilities, ensuring students receive high-quality practical training.\n- Recognized for producing competent, socially responsible doctors who excel both nationally and internationally.",
        "hostelFacilities": "The college has comfortable hostel accommodations with safe living environments, recreational areas, and 24/7 security. DNMC provides orientation programs and guidance for adapting to life in Bangladesh, including help with hostel arrangements, food, cultural adaptation, and local transport. The college ensures safe accommodation with mess facilities, Wi-Fi, and recreation areas for international students.",
        "studentLife": "The student life at Dhaka National Medical College (DNMC) is designed to provide a comprehensive and holistic experience for both local and international students pursuing MBBS in Bangladesh. The college offers a perfect balance of academics, clinical training, and extracurricular activities, ensuring that students develop both professional competence and personal growth. From the very first years of study, students receive extensive clinical exposure in the Dhaka National Medical College Hospital, gaining practical experience in patient care, diagnosis, treatment planning, and emergency management, which prepares them for real-world medical practice.\n\nThe campus facilities are designed to support international MBBS students, including modern classrooms, advanced laboratories, fully equipped libraries, hostels with safe and comfortable accommodations, Wi-Fi connectivity, and recreational spaces. Students have ample opportunities to participate in sports, cultural festivals, medical seminars, workshops, debates, quizzes, and research projects, helping them enhance their leadership, teamwork, and communication skills. The college also emphasizes community health, rural postings, and preventive medicine programs, giving students practical exposure to public health, rural healthcare initiatives, and preventive healthcare campaigns, which are essential for becoming socially responsible doctors.\n\nDNMC maintains a diverse and inclusive student community, attracting students from India, Nepal, and other countries, which promotes cross-cultural learning, global networking, and international exposure. With strong student support services, mentorship programs, and counseling facilities, the college ensures that students are guided throughout their MBBS journey, both academically and personally. Overall, the student life at Dhaka National Medical College not only focuses on high-quality medical education and clinical expertise but also encourages personal development, social responsibility, and preparation for global medical careers, making it one of the top choices for students looking to pursue MBBS abroad in Bangladesh.",
        "whyChooseUsIntro": "iExplain Education is a trusted and experienced education consultancy that provides comprehensive guidance for students seeking to pursue MBBS abroad, particularly in Bangladesh. For students aiming to study at Dhaka National Medical College (DNMC), iExplain Education ensures a smooth and hassle-free admission process.",
        "whyChooseUs": [
            "Expert Guidance for MBBS Abroad: iExplain Education provides personalized guidance for Indian and international students seeking to pursue MBBS in Bangladesh, helping them choose the right college and program.",
            "Transparent Admission Process: The consultancy ensures a smooth and hassle-free admission process for Dhaka National Medical College, handling documentation, application submission, and fee payments efficiently.",
            "Complete Documentation Assistance: iExplain Education assists students in preparing all required documents for MBBS admission, including academic transcripts, passport, visa application, and eligibility certificates, reducing errors and delays.",
            "Visa and Travel Support: The team provides step-by-step support for visa processing, travel arrangements, and airport pickup, making the transition to Bangladesh comfortable and stress-free.",
            "Affordable MBBS Abroad Options: iExplain Education helps students understand the fee structure, tuition fees, hostel charges, and total cost of MBBS in Bangladesh, ensuring cost-effective planning for studying abroad.",
            "Counseling & Career Guidance: Students receive expert counseling on MBBS abroad, career prospects, FMGE/NExT preparation, and postgraduate opportunities, helping them make informed decisions.",
            "End-to-End Support: From college selection, admission confirmation, hostel allocation, and airport reception to guidance throughout the MBBS course, iExplain Education offers complete end-to-end support for students.",
            "Trusted by Hundreds of Students: iExplain Education has a proven track record of successful admissions in Dhaka National Medical College and other top medical colleges in Bangladesh, ensuring credibility and trustworthiness.",
            "Focus on Student Comfort & Safety: The consultancy ensures that students have safe accommodation, a smooth adjustment to life in Bangladesh, and continuous support, helping them focus entirely on their medical studies."
        ],
        "documents": [
            {
                "document": "Completed Application Form",
                "details": "Duly filled DNMC admission application form"
            },
            {
                "document": "Passport",
                "details": "Valid international passport with at least 18 months validity."
            },
            {
                "document": "10th / Secondary School Certificate",
                "details": "Mark sheet or certificate showing completion of secondary education."
            },
            {
                "document": "12th / Higher Secondary Certificate (HSC)",
                "details": "Official transcripts and mark sheets in Physics, Chemistry, Biology."
            },
            {
                "document": "Equivalence Certificate",
                "details": "For students from countries where HSC equivalents differ; issued by relevant education board."
            },
            {
                "document": "Medical / Health Certificate",
                "details": "Issued by a certified doctor, showing the student is medically fit."
            },
            {
                "document": "Police Clearance / Character Certificate",
                "details": "From local authorities, confirming good conduct."
            },
            {
                "document": "Visa Documents",
                "details": "Student visa application and supporting documents for Bangladesh."
            },
            {
                "document": "Bank Statements / Financial Proof",
                "details": "Proof of funds to cover tuition and living expenses in Bangladesh."
            },
            {
                "document": "Other Supporting Documents",
                "details": "Any additional certificates like English proficiency (if required), recommendation letters, etc."
            }
        ],
        "conclusion": "Dhaka National Medical College (DNMC) stands out as one of the top choices for Indian and international students seeking to pursue MBBS abroad in Bangladesh. With its affiliation to the University of Dhaka, recognition by the Bangladesh Medical and Dental Council (BMDC), and listing in the World Directory of Medical Schools, DNMC offers a globally recognized MBBS degree. The college provides high-quality medical education in English, combining theoretical learning with extensive clinical exposure at its own teaching hospital. Students benefit from modern laboratories, well-equipped libraries, supportive hostel facilities, and vibrant campus life, ensuring holistic development alongside academics.\n\nMoreover, DNMC emphasizes community health, preventive medicine, and rural postings, preparing students to become competent and socially responsible doctors. With affordable tuition fees, experienced faculty, structured syllabus, and strong student support services, pursuing MBBS at Dhaka National Medical College is an ideal pathway for students aiming for successful medical careers, FMGE/NExT qualification in India, and international opportunities. Guided by expert consultancies like iExplain Education, students can navigate the admission process seamlessly, making DNMC a reliable and attractive destination for MBBS abroad.",
        "faqs": [
            {
                "question": "Is Dhaka National Medical College recognized by the Medical Council of India (NMC)?",
                "answer": "Yes, DNMC is recognized by the National Medical Commission (NMC India), which allows Indian students to appear for the FMGE/NExT exam after completing their MBBS."
            },
            {
                "question": "What is the duration of the MBBS course at DNMC?",
                "answer": "The MBBS program at DNMC is 5 years of academic study followed by a 1-year compulsory internship, making the total duration 6 years."
            },
            {
                "question": "What is the medium of instruction for MBBS at DNMC?",
                "answer": "The entire MBBS curriculum is taught in English, which is ideal for international students from India, Nepal, and other countries."
            },
            {
                "question": "Are Indian students eligible to apply for MBBS at DNMC?",
                "answer": "Yes, Indian students are eligible, provided they meet the academic eligibility criteria (10+2 with Physics, Chemistry, Biology) and complete the necessary admission documents and visa requirements."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include: application form, passport, 10th & 12th mark sheets, medical certificate, passport-sized photos, police clearance, financial proof, and student visa. iExplain Education can help prepare all documents efficiently."
            },
            {
                "question": "Does DNMC provide hostel facilities for international students?",
                "answer": "Yes, DNMC offers safe and comfortable hostel accommodations with mess facilities, Wi-Fi, recreation areas, and 24/7 security for international students."
            },
            {
                "question": "Is clinical exposure provided during the MBBS course?",
                "answer": "Absolutely. Students receive early clinical exposure from the 2nd year onwards at the Dhaka National Medical College Hospital, gaining hands-on experience in patient care, diagnostics, and treatments."
            },
            {
                "question": "Can students appear for postgraduate studies after MBBS from DNMC?",
                "answer": "Yes, the MBBS degree from DNMC is recognized internationally, allowing graduates to pursue postgraduate studies in India or abroad."
            },
            {
                "question": "How does iExplain Education assist in admission to DNMC?",
                "answer": "iExplain Education provides end-to-end support, including college selection, admission process, document verification, visa guidance, travel arrangements, and career counseling, ensuring a smooth and hassle-free MBBS abroad experience."
            }
        ]
    },
    "bangladesh-medical-college": {
        "title": "Bangladesh Medical College",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/BMC_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/BMC_Mobile.webp",
        "intro": {
            "text": "Bangladesh Medical College (BMC), Dhaka, established in 1986, holds the distinction of being the first private medical college in Bangladesh, and over the decades, it has built a strong reputation for providing high-quality medical education to both local and international students. The college has become a preferred destination for students seeking MBBS abroad, particularly for Indian, Nepali, and other international aspirants who wish to pursue their medical studies in English at an affordable cost while receiving global recognition for their degree. BMC offers a 5-year MBBS program followed by a 1-year compulsory internship, ensuring that students not only gain theoretical knowledge but also practical, hands-on clinical experience in hospital settings.\n\nThe college is affiliated with the University of Dhaka, which ensures that the curriculum, examinations, and degree adhere to international medical education standards. It is also recognized by the Bangladesh Medical and Dental Council (BMDC) and the National Medical Commission (NMC India), allowing graduates to practice medicine in Bangladesh, India (after FMGE/NExT), and other countries worldwide. BMC emphasizes a holistic approach to medical education, combining rigorous academic training with clinical rotations, community health programs, and preventive medicine initiatives, preparing students to become competent, socially responsible doctors.\n\nThe campus provides state-of-the-art facilities including modern classrooms, fully equipped laboratories, digital libraries, and a teaching hospital where students gain practical exposure to real-world medical scenarios. Additionally, comfortable hostels, recreational facilities, and student support services ensure a safe and conducive environment for international students to adapt to life in Bangladesh. By focusing on academic excellence, clinical skills, research opportunities, and personal growth, Bangladesh Medical College continues to be one of the top choices for MBBS abroad in Bangladesh, helping students achieve their dream of becoming successful medical professionals."
        },
        "quickOverview": {
            "Name of College": "Bangladesh Medical College (BMC)",
            "Established": "1986",
            "Location": "Dhaka, Bangladesh",
            "Type": "Private Medical College",
            "Affiliation": "University of Dhaka",
            "Recognition": "Bangladesh Medical and Dental Council (BMDC), National Medical Commission (NMC India), Listed in World Directory of Medical Schools (WDOMS)",
            "Course Offered": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
            "Medium of Instruction": "English",
            "Duration of MBBS": "5 Years Academic + 1 Year Compulsory Internship (Total 6 Years)",
            "Hostel Facilities": "Available for both male and female students with safe and comfortable accommodations",
            "International Students": "Accepted from India, Nepal, Sri Lanka, Middle East, and other countries"
        },
        "benefits": {
            "intro": "Bangladesh Medical College (BMC), located in Dhaka, is one of the most reputable private medical colleges in Bangladesh and has been a pioneer in medical education since its establishment in 1986. The college offers a globally recognized MBBS degree, combining quality theoretical education with extensive clinical exposure, making it a preferred choice for Indian and international students seeking MBBS abroad. With English as the medium of instruction, affordable tuition fees, and a supportive campus environment, BMC ensures that students receive a holistic learning experience.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Affiliation with University of Dhaka",
                    "Details": "The college is affiliated with the University of Dhaka, ensuring that the MBBS degree is nationally and internationally recognized, providing credibility for higher studies and medical practice worldwide."
                },
                {
                    "Heading": "Recognition by BMDC and NMC India",
                    "Details": "BMC is recognized by the Bangladesh Medical and Dental Council (BMDC) and the National Medical Commission (NMC India), enabling graduates to practice medicine in India after clearing FMGE/NExT."
                },
                {
                    "Heading": "English-Medium Education",
                    "Details": "All courses and lectures are conducted in English, allowing international students to easily understand, communicate, and excel academically without facing language barriers."
                },
                {
                    "Heading": "Comprehensive Curriculum",
                    "Details": "The MBBS program integrates pre-clinical, para-clinical, and clinical subjects, including Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, ensuring a well-rounded medical education."
                },
                {
                    "Heading": "Practical Clinical Exposure",
                    "Details": "Students gain hands-on experience at the Bangladesh Medical College Hospital, participating in ward rounds, outpatient clinics, diagnostic procedures, and emergency care, which prepares them for real-world medical practice."
                },
                {
                    "Heading": "Affordable Tuition and Living Costs",
                    "Details": "Compared to many private medical colleges in India, BMC offers a cost-effective MBBS program with reasonable tuition fees and hostel charges, making it accessible for middle-income families."
                },
                {
                    "Heading": "Focus on Community Health and Preventive Medicine",
                    "Details": "BMC emphasizes rural postings, community health programs, and preventive medicine initiatives, teaching students social responsibility and public health awareness."
                },
                {
                    "Heading": "Modern Facilities and Infrastructure",
                    "Details": "The college is equipped with state-of-the-art laboratories, libraries, digital classrooms, and well-maintained hostels, providing students with a comfortable and conducive learning environment."
                },
                {
                    "Heading": "Vibrant Student Life",
                    "Details": "Students are encouraged to participate in sports, cultural activities, medical seminars, workshops, and research projects, helping them develop leadership, teamwork, and communication skills alongside academics."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Bangladesh Medical College (BMC) is structured to provide students with a comprehensive medical education, combining theoretical knowledge, practical skills, and clinical exposure. The curriculum is designed in accordance with the guidelines of the University of Dhaka and Bangladesh Medical and Dental Council (BMDC), ensuring that graduates receive a globally recognized medical degree.",
        "syllabus": {
            "headers": ["Year", "Subjects Covered"],
            "table": [
                {
                    "Year": "1st Year – Pre-Clinical",
                    "Subjects Covered": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Year": "2nd Year – Para-Clinical (Part 1)",
                    "Subjects Covered": "Pathology, Microbiology"
                },
                {
                    "Year": "3rd Year – Para-Clinical (Part 2)",
                    "Subjects Covered": "Pharmacology, Forensic Medicine, Community Medicine"
                },
                {
                    "Year": "4th Year – Clinical (Part 1)",
                    "Subjects Covered": "Medicine, Surgery, Obstetrics & Gynecology, Pediatrics"
                },
                {
                    "Year": "5th Year – Clinical (Part 2)",
                    "Subjects Covered": "Ophthalmology, ENT, Psychiatry, Dermatology, Orthopedics, Emergency Medicine"
                },
                {
                    "Year": "6th Year – Rotating Internship",
                    "Subjects Covered": "Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Health, Emergency Medicine"
                },
                {
                    "Year": "Additional Components Throughout Course",
                    "Subjects Covered": "Research Methodology, Medical Ethics, Communication Skills, Preventive & Community Health Programs"
                }
            ]
        },
        "feesIntro": "Bangladesh Medical College offers an affordable and transparent fee structure for students pursuing MBBS abroad in Bangladesh. The fees are designed to cover tuition and hostel facilities, making it an attractive option for international students, especially from India and neighboring countries.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "2nd Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "3rd Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "4th Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "5th Year",
                    "tuition": "₹2,98,800",
                    "hostel": "₹49,800",
                    "total": "₹3,48,600"
                },
                {
                    "year": "Total (5 Years)",
                    "tuition": "₹14,94,000",
                    "hostel": "₹2,49,000",
                    "total": "₹17,43,000"
                }
            ]
        },
        "durationIntro": "Bangladesh Medical College offers a structured MBBS program that combines academic learning with practical clinical training, ensuring that students are well-prepared for professional medical practice and licensing exams like FMGE/NExT in India.",
        "duration": {
            "headers": ["Program", "Duration", "Details"],
            "table": [
                {
                    "Program": "MBBS Academic Study",
                    "Duration": "5 Years",
                    "Details": "Covers pre-clinical, para-clinical, and clinical subjects with lectures, practicals, and hospital exposure."
                },
                {
                    "Program": "Rotating Internship",
                    "Duration": "1 Year",
                    "Details": "Compulsory clinical internship in major departments like Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, and Community Health."
                },
                {
                    "Program": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "Includes 5 years of academic study + 1-year internship, preparing students for FMGE/NExT, postgraduate studies, and global medical careers."
                }
            ]
        },
        "studentSupport": "Bangladesh Medical College (BMC), Dhaka, provides an extensive and holistic range of student support services designed to ensure that students pursuing MBBS abroad in Bangladesh have a smooth, comfortable, and successful academic journey. From the initial admission process to graduation, BMC emphasizes student welfare, academic excellence, and personal development, ensuring that both local and international students are supported at every step. The college assists students with admission counseling, document verification, visa guidance, and enrollment procedures, making it easier for aspiring doctors from India, Nepal, Sri Lanka, and other countries to secure admission without hassle.\n\nBMC offers well-maintained, secure, and comfortable hostel facilities for male and female students, featuring mess facilities with hygienic food, 24/7 security, Wi-Fi connectivity, recreation areas, and study zones, allowing students to focus on their studies and clinical training. In addition to accommodation, the college provides transport facilities, medical services, and emergency support to ensure student safety and health. Academically, BMC supports students through experienced and approachable faculty, interactive classroom teaching, mentorship programs, group tutorials, and access to well-equipped libraries and modern digital learning resources, which enhance conceptual understanding, practical skills, and clinical competence.\n\nTo further support professional growth, the college offers career counseling, guidance for FMGE/NExT exam preparation, postgraduate study options, and exposure to international medical conferences and workshops, preparing students for successful medical careers in India, Bangladesh, and worldwide. Moreover, BMC emphasizes mental health and overall well-being, providing counseling services, peer support networks, stress management workshops, and extracurricular activities including sports, cultural events, and medical societies, fostering teamwork, leadership, and communication skills.\n\nBy combining academic support, clinical training guidance, personal mentoring, hostel facilities, health and wellness services, and career-oriented programs, Bangladesh Medical College ensures that its students experience a comprehensive learning environment. These services not only help students achieve academic success and professional competence but also nurture them into confident, socially responsible, and globally competitive medical professionals ready to meet the demands of modern healthcare and make a meaningful impact in society.",
        "recognition": "Bangladesh Medical College (BMC), Dhaka, is a prestigious institution for medical education in Bangladesh with a legacy of over three decades of excellence. The college is committed to providing high-quality MBBS education in a student-friendly environment that combines academic rigor, clinical exposure, and research opportunities. BMC’s curriculum and teaching standards are aligned with international medical education guidelines, ensuring that students graduate with a globally recognized MBBS degree. The college’s strong affiliations, accreditations, and accomplishments have made it a preferred destination for Indian and international students seeking MBBS abroad.\n\n1. Affiliation of Bangladesh Medical College\nBangladesh Medical College is affiliated with the University of Dhaka, one of the most prestigious and reputable universities in Bangladesh. This affiliation ensures that the MBBS curriculum, examinations, and degree meet high academic standards recognized both nationally and internationally. Students graduating from BMC receive a degree that is credible, globally accepted, and eligible for further studies or medical practice worldwide.\n- MBBS degree awarded under the University of Dhaka.\n- Ensures adherence to internationally accepted academic and clinical standards.\n- Enables graduates to pursue postgraduate studies or medical careers globally.\n\n2. Recognition of Bangladesh Medical College\nBMC is fully recognized by the Bangladesh Medical and Dental Council (BMDC) and the National Medical Commission (NMC India). It is also listed in the World Directory of Medical Schools (WDOMS). This recognition ensures that students completing their MBBS can practice medicine in Bangladesh, India (after FMGE/NExT), and other countries, and are eligible for higher education and licensing exams worldwide.\n- Recognized by BMDC, validating curriculum and clinical training.\n- Recognized by NMC India, allowing Indian students to take FMGE/NExT.\n- Listed in WDOMS, providing international credibility for graduates.\n\n3. Achievements of Bangladesh Medical College\nBangladesh Medical College has a legacy of academic excellence and medical achievements. With a well-equipped teaching hospital, active research programs, and focus on community health, BMC ensures that students gain hands-on clinical experience, research exposure, and social responsibility. Its graduates consistently perform well in professional exams and go on to pursue medical careers both in Bangladesh and internationally.\n- Attached to Bangladesh Medical College Hospital (BMCH) for practical training.\n- Encourages research, publications, and participation in medical conferences.\n- Focus on community health, rural postings, and preventive medicine initiatives.",
        "hostelFacilities": "BMC offers well-maintained, secure, and comfortable hostel facilities for male and female students, featuring mess facilities with hygienic food, 24/7 security, Wi-Fi connectivity, recreation areas, and study zones, allowing students to focus on their studies and clinical training. In addition to accommodation, the college provides transport facilities, medical services, and emergency support to ensure student safety and health.",
        "studentLife": "Life at Bangladesh Medical College (BMC), Dhaka offers a vibrant, supportive, and academically stimulating environment for students pursuing MBBS abroad in Bangladesh. The college combines rigorous medical education with extracurricular, cultural, and social activities, ensuring a holistic development of future doctors. Students at BMC enjoy modern classrooms, well-equipped laboratories, digital libraries, and access to the Bangladesh Medical College Hospital (BMCH) for practical clinical exposure. The campus fosters a collaborative and multicultural environment, with students from India, Nepal, Sri Lanka, and other countries, allowing for cross-cultural learning, networking, and global perspectives.\n\nThe college emphasizes academic excellence while promoting personal growth, offering mentorship programs, peer group interactions, workshops, seminars, and medical conferences to enhance learning beyond textbooks. Outside the classroom, students can engage in sports, cultural festivals, student clubs, and community outreach programs, promoting teamwork, leadership, and social responsibility. Hostel facilities provide a safe, comfortable, and well-managed living space, with amenities like mess facilities, Wi-Fi, recreational areas, and 24/7 security, ensuring that students can focus on both studies and extracurricular pursuits.\n\nBMC also encourages research, innovation, and community service, enabling students to participate in health awareness campaigns, preventive medicine programs, and rural health initiatives. This hands-on involvement ensures that students not only excel academically but also develop empathy, practical skills, and a sense of responsibility towards society. Overall, student life at Bangladesh Medical College is designed to be balanced, enriching, and globally oriented, preparing future doctors to be competent, confident, and socially responsible professionals ready to contribute to healthcare systems both in Bangladesh and worldwide.",
        "whyChooseUsIntro": "Choosing iExplain Education for admission in MBBS at Bangladesh Medical College (BMC) ensures that students receive end-to-end guidance and professional support throughout the admission process. iExplain Education specializes in helping Indian and international students secure admission in top medical colleges abroad, including BMC, making the journey smooth, transparent, and stress-free.",
        "whyChooseUs": [
            "End-to-End Admission Support: iExplain Education assists students with application submission, document verification, and admission formalities, making the process smooth and hassle-free.",
            "Visa and Travel Assistance: Students receive complete guidance for visa processing, travel arrangements, and hostel accommodations, ensuring a safe and comfortable transition to Bangladesh.",
            "Personalized Counseling: The consultancy provides one-on-one counseling to help students select the best medical college based on fees, location, faculty, infrastructure, and career prospects.",
            "Expert Guidance on MBBS Curriculum: iExplain Education explains the MBBS syllabus, course duration, clinical exposure, and internship opportunities at Bangladesh Medical College, helping students plan their studies effectively.",
            "FMGE/NExT Preparation Advice: Students are guided on preparing for FMGE/NExT exams after graduation, ensuring they are eligible to practice medicine in India.",
            "Compliance with International Guidelines: iExplain Education ensures that students meet eligibility criteria, NMC/WHO requirements, and college-specific regulations, reducing chances of admission errors or delays.",
            "Post-Admission Support: The consultancy continues to assist students after enrollment, including academic queries, hostel guidance, cultural adjustment, and mentoring, ensuring a comfortable and productive study experience.",
            "Proven Track Record: iExplain Education has successfully helped hundreds of students gain admission to top medical colleges in Bangladesh, Russia, China, Kazakhstan, and other countries, making it a trusted and reliable consultancy.",
            "Transparent and Reliable Guidance: Students receive authentic information, fee clarity, and honest advice, ensuring informed decision-making while choosing MBBS abroad."
        ],
        "documents": [
            {
                "document": "High School / 10+2 Marksheet",
                "details": "Certified copy showing minimum 50% in PCB (Physics, Chemistry, Biology) for eligibility."
            },
            {
                "document": "Passport",
                "details": "Must be valid for at least 2–3 years at the time of admission."
            },
            {
                "document": "Passport-Size Photographs",
                "details": "Recent color photographs (usually 8–10 copies)."
            },
            {
                "document": "NEET Qualification Certificate",
                "details": "Mandatory for Indian students to study MBBS abroad."
            },
            {
                "document": "Migration / Transfer Certificate",
                "details": "From the previous school or college."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a recognized medical authority; ensures the student is fit for MBBS studies."
            },
            {
                "document": "HIV / Blood Test Reports",
                "details": "Some colleges require recent health test reports for admission."
            },
            {
                "document": "Character Certificate",
                "details": "Issued by the school / previous institution, attested."
            },
            {
                "document": "Financial Proof / Sponsorship Letter",
                "details": "Required to show ability to pay tuition and living expenses."
            }
        ],
        "conclusion": "Pursuing MBBS at Bangladesh Medical College (BMC), Dhaka is an excellent choice for students seeking a quality, affordable, and internationally recognized medical education abroad. The college offers a well-structured MBBS curriculum, combining pre-clinical, para-clinical, and clinical training with extensive hands-on experience at the Bangladesh Medical College Hospital (BMCH). With English as the medium of instruction, modern facilities, supportive faculty, and strong student support services, BMC ensures that students receive a holistic and enriching learning experience.\n\nThe college’s affiliation with the University of Dhaka, recognition by BMDC and NMC India, and listing in the World Directory of Medical Schools make its MBBS degree globally accepted, allowing graduates to pursue careers or higher studies in India, Bangladesh, and other countries. Additionally, BMC emphasizes community health, preventive medicine, research, and extracurricular development, preparing students to become competent, socially responsible, and confident medical professionals.\n\nWith affordable tuition fees, safe hostel facilities, vibrant student life, and continuous support from expert consultants like iExplain Education, aspiring doctors can achieve their dream of becoming a successful medical professional while studying at one of Bangladesh’s most reputable private medical colleges.",
        "faqs": [
            {
                "question": "Is Bangladesh Medical College recognized by the Medical Council of India (NMC)?",
                "answer": "Yes, Bangladesh Medical College (BMC) is recognized by the National Medical Commission (NMC India), allowing Indian students to appear for the FMGE/NExT exams after graduation. The college is also listed in the World Directory of Medical Schools (WDOMS), making its MBBS degree internationally valid."
            },
            {
                "question": "What is the duration of MBBS at Bangladesh Medical College?",
                "answer": "The MBBS program at BMC is 6 years in total, consisting of 5 years of academic study (pre-clinical, para-clinical, and clinical training) and a 1-year compulsory rotating internship in various departments of the Bangladesh Medical College Hospital (BMCH)."
            },
            {
                "question": "What is the medium of instruction for MBBS at BMC?",
                "answer": "The MBBS course at Bangladesh Medical College is taught entirely in English, making it suitable for international students, including those from India, Nepal, and Sri Lanka."
            },
            {
                "question": "What is the approximate fee structure for MBBS at Bangladesh Medical College?",
                "answer": "The tuition and hostel fees are affordable compared to many private medical colleges in India. Approximate fees are: Tuition Fees: ₹2,98,800 per year; Hostel Fees: ₹49,800 per year; Total (5 Years): Tuition ₹14,94,000 + Hostel ₹2,49,000."
            },
            {
                "question": "What documents are required for admission in BMC?",
                "answer": "Key documents include: 10+2 mark sheet and passing certificate (PCB subjects with minimum 50%), NEET qualification certificate (for Indian students), Passport and passport-size photographs, Birth certificate, medical fitness certificate, HIV/blood test reports, Character certificate, migration certificate, and financial proof."
            },
            {
                "question": "What kind of student support services does BMC provide?",
                "answer": "BMC offers comprehensive support services, including: Admission guidance and visa assistance; Hostel facilities with mess, Wi-Fi, and security; Academic mentoring, tutorials, and library access; FMGE/NExT preparation advice; Counseling, extracurricular activities, and community health programs."
            },
            {
                "question": "Can students pursue higher studies or practice medicine in India after BMC?",
                "answer": "Yes, since BMC is recognized by NMC India, Indian students can appear for FMGE/NExT exams after completing their MBBS. Graduates are also eligible for postgraduate studies, residency programs, and medical practice in India and internationally."
            },
            {
                "question": "What makes Bangladesh Medical College a good choice for MBBS abroad?",
                "answer": "BMC offers a combination of affordable fees, quality education, English-medium instruction, well-equipped hospital training, and international recognition. The college also emphasizes research, community health, and holistic student development, making it ideal for students who want a global standard medical education at a reasonable cost."
            }
        ]
    },
    "jahurul-islam-medical-college": {
        "title": "Jahurul Islam Medical College",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/JIMC_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/JIMC_Mobile.webp",
        "intro": {
            "text": "Jahurul Islam Medical College (JIMC), Bangladesh is a prestigious private medical institution recognized for delivering high-quality MBBS education abroad in a modern, student-friendly, and internationally oriented environment. Established under the guidance of the Jahurul Islam Foundation, the college has been at the forefront of medical education in Bangladesh, offering students a platform to pursue their dream of becoming a doctor while gaining hands-on clinical experience. The institution is renowned for its rigorous academic programs, well-structured MBBS syllabus, and emphasis on research, ethics, and community health, making it an ideal choice for Indian and international students seeking MBBS abroad at an affordable cost.\n\nJIMC provides a comprehensive MBBS curriculum, integrating pre-clinical, para-clinical, and clinical training with real-world exposure at its affiliated Jahurul Islam Medical College Hospital. This ensures that students develop strong practical skills, clinical reasoning, and professional competence from the early stages of their medical education. With English as the medium of instruction, international students face no language barriers, making it convenient for Indian, Nepalese, Sri Lankan, and other foreign students to adapt quickly and excel academically.\n\nThe college is equipped with state-of-the-art laboratories, modern lecture halls, simulation centers, and a well-stocked digital library, providing students with access to advanced learning resources, research facilities, and interactive teaching methodologies. Jahurul Islam Medical College also emphasizes student support services, including hostel accommodations, mentoring programs, FMGE/NExT preparation guidance, and community outreach initiatives, ensuring a holistic development of medical students."
        },
        "quickOverview": {
            "College Name": "Jahurul Islam Medical College (JIMC)",
            "Established": "1992",
            "Type": "Private Medical College",
            "Location": "Bajitpur, Kishoreganj, Bangladesh",
            "Affiliated University": "University of Dhaka",
            "Recognition": "Bangladesh Medical and Dental Council (BMDC), National Medical Commission (NMC India), World Directory of Medical Schools (WDOMS)",
            "Course Offered": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
            "Medium of Instruction": "English",
            "Duration of MBBS": "5 years academic study + 1 year compulsory internship (total 6 years)",
            "Career Opportunities": "Eligible for FMGE/NExT in India, postgraduate studies in Bangladesh and abroad, global medical practice"
        },
        "benefits": {
            "intro": "Choosing Jahurul Islam Medical College (JIMC), Bangladesh for pursuing MBBS is an ideal choice for students seeking quality medical education abroad at an affordable cost. The college offers a comprehensive MBBS curriculum that integrates pre-clinical, para-clinical, and clinical training with hands-on practical experience at the Jahurul Islam Medical College Hospital (JIMCH).",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "International Recognition",
                    "Details": "The MBBS degree is recognized by BMDC, NMC India, and listed in WDOMS, making it valid for global medical practice."
                },
                {
                    "Heading": "Affordable Fees",
                    "Details": "JIMC offers cost-effective tuition and hostel facilities compared to private medical colleges in India, making MBBS abroad accessible."
                },
                {
                    "Heading": "English-Medium Curriculum",
                    "Details": "All subjects are taught in English, ensuring ease of learning for international students."
                },
                {
                    "Heading": "Comprehensive Clinical Exposure",
                    "Details": "Affiliated with Jahurul Islam Medical College Hospital, students get practical, hands-on training in all major medical departments."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The college has highly qualified and experienced faculty providing personalized guidance, mentorship, and academic support."
                },
                {
                    "Heading": "Modern Infrastructure",
                    "Details": "Equipped with digital libraries, simulation labs, well-stocked laboratories, and modern classrooms for a high-quality learning experience."
                },
                {
                    "Heading": "Holistic Student Development",
                    "Details": "Focus on extracurricular activities, cultural programs, research opportunities, and community health initiatives."
                },
                {
                    "Heading": "Support for International Students",
                    "Details": "Offers hostels, FMGE/NExT exam preparation, counseling, and student support services, ensuring a smooth academic journey."
                },
                {
                    "Heading": "Career Opportunities",
                    "Details": "Graduates can pursue medical practice, postgraduate studies, or specialization in India, Bangladesh, and globally."
                }
            ]
        },
        "SyllabusIntro": "The MBBS program at Jahurul Islam Medical College (JIMC) is designed to provide students with a comprehensive and structured medical education, combining theoretical knowledge with extensive practical and clinical exposure. The course is divided into pre-clinical, para-clinical, clinical phases, followed by a compulsory one-year rotating internship.",
        "syllabus": {
            "headers": ["Phase", "Duration", "Subjects / Courses"],
            "table": [
                {
                    "Phase": "Pre-Clinical",
                    "Duration": "1 Year",
                    "Subjects / Courses": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical (2nd & 3rd Year)",
                    "Duration": "2 Years",
                    "Subjects / Courses": "Pathology, Pharmacology, Microbiology, Community Medicine, Forensic Medicine"
                },
                {
                    "Phase": "Clinical (4th & 5th Year)",
                    "Duration": "2 Years",
                    "Subjects / Courses": "Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, Ophthalmology, ENT, Psychiatry, Dermatology"
                },
                {
                    "Phase": "Internship / Rotating Internship",
                    "Duration": "1 Year",
                    "Subjects / Courses": "All Major Clinical Departments"
                }
            ]
        },
        "feesIntro": "The MBBS fee structure at Jahurul Islam Medical College (JIMC) is designed to be affordable when compared to many private medical colleges in India, especially for students choosing to study MBBS abroad in Bangladesh. The total fees cover tuition, hostel seat rent, university registration, and session charges over the full 5‑year academic program (excluding internship).",
        "fees": {
            "structure": [
                {
                    "year": "1st Year (Admission + Academic Charges)",
                    "tuition": "19,400 USD",
                    "total": "₹15,52,000*"
                },
                {
                    "year": "2nd Year Tuition + Hostel",
                    "tuition": "5,400 USD",
                    "total": "₹4,32,000*"
                },
                {
                    "year": "3rd Year Tuition + Hostel",
                    "tuition": "5,400 USD",
                    "total": "₹4,32,000*"
                },
                {
                    "year": "4th Year Tuition + Hostel",
                    "tuition": "5,400 USD",
                    "total": "₹4,32,000*"
                },
                {
                    "year": "5th Year Tuition + Hostel",
                    "tuition": "5,400 USD",
                    "total": "₹4,32,000*"
                },
                {
                    "year": "Total Fees",
                    "tuition": "41,000 USD",
                    "total": "₹32,80,000 *"
                }
            ]
        },
        "durationIntro": "The MBBS program at Jahurul Islam Medical College (JIMC) is a 6-year course designed to provide comprehensive medical education combining theoretical knowledge with practical clinical training.",
        "duration": {
            "headers": ["Phase", "Duration", "Key Details"],
            "table": [
                {
                    "Phase": "Pre-Clinical",
                    "Duration": "1 Year",
                    "Key Details": "Covers Anatomy, Physiology, Biochemistry with theoretical classes, lab sessions, and dissections. Builds a strong foundation in basic medical sciences."
                },
                {
                    "Phase": "Para-Clinical",
                    "Duration": "2 Years",
                    "Key Details": "Includes Pathology, Pharmacology, Microbiology, Community Medicine, Forensic Medicine. Focus on disease mechanisms, drug actions, community health, and lab practicals."
                },
                {
                    "Phase": "Clinical",
                    "Duration": "2 Years",
                    "Key Details": "Covers clinical subjects with extensive hospital-based practical training and patient care."
                },
                {
                    "Phase": "Rotating Internship",
                    "Duration": "1 Year",
                    "Key Details": "Full-time practical training across all major clinical departments, including emergency care, OPD/IPD management, and community health rotations. Prepares students for professional practice and FMGE/NExT exams."
                },
                {
                    "Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Key Details": "5 years of academic study + 1-year compulsory internship. Fully aligned with BMDC and NMC India guidelines."
                }
            ]
        },
        "studentSupport": "Jahurul Islam Medical College (JIMC) provides a comprehensive range of student support services designed to ensure that both local and international students have a comfortable, secure, and productive academic experience while pursuing their MBBS abroad in Bangladesh. The college offers well-furnished hostel accommodations with mess facilities, Wi-Fi connectivity, and 24/7 security, creating a safe and conducive environment for study and personal growth. Students also have access to modern classrooms, fully equipped laboratories, and a digital library with a wide range of medical journals, e-books, and research materials, ensuring continuous learning and academic excellence.\n\nJIMC places a strong emphasis on mentorship and personalized academic guidance, where experienced faculty assist students with subject clarification, exam preparation, and research projects. For international students, especially from India, Nepal, and Sri Lanka, the college provides special orientation programs, language support, and cultural integration activities, helping them adapt quickly to the campus environment. Additionally, career counseling, FMGE/NExT exam preparation, and internship guidance are available to ensure that students are well-prepared for medical licensing exams and future career opportunities. The college also encourages extracurricular development, including sports, cultural events, community health programs, and volunteer initiatives, fostering a holistic and well-rounded medical education.",
        "recognition": "Jahurul Islam Medical College (JIMC) is one of the leading private medical colleges in Bangladesh, known for providing high-quality MBBS education abroad that is affordable, internationally recognized, and aligned with global medical standards. Affiliation: Jahurul Islam Medical College (JIMC) is affiliated with the University of Dhaka, one of the most prestigious universities in Bangladesh. This affiliation ensures that the MBBS curriculum, examination system, and degree awarded are fully standardized and internationally recognized. Recognition: JIMC is recognized by the Bangladesh Medical and Dental Council (BMDC), the National Medical Commission (NMC) of India, and is listed in the World Directory of Medical Schools (WDOMS). This recognition ensures that Indian and international students completing their MBBS at JIMC are eligible to appear for licensing exams such as FMGE/NExT in India and can pursue higher studies or medical practice globally. Achievements: Over the years, Jahurul Islam Medical College has achieved remarkable milestones in medical education, research, and clinical training. The college boasts modern infrastructure, state-of-the-art laboratories, and a well-equipped teaching hospital (JIMCH), providing students with hands-on clinical exposure from the early years.",
        "hostelFacilities": "Hostels provide a safe and comfortable living environment, with mess facilities, Wi-Fi connectivity, recreational areas, and 24/7 security, making it convenient for international students, especially those from India, Nepal, and Sri Lanka, to adapt quickly and feel at home. The college ensures a safe and conducive environment for study and personal growth through well-furnished hostel accommodations.",
        "studentLife": "Student life at Jahurul Islam Medical College (JIMC) is designed to provide a well-rounded, engaging, and supportive environment for both local and international MBBS students. The college offers a vibrant campus atmosphere, combining academic rigor with extracurricular opportunities, which helps students develop both professionally and personally. The campus is equipped with modern classrooms, digital libraries, fully-equipped laboratories, and advanced simulation facilities, ensuring students have access to all resources needed for top-quality medical education abroad.\n\nApart from academics, JIMC encourages students to participate in cultural programs, sports events, community health outreach, and voluntary medical camps, fostering teamwork, leadership, and social responsibility. Hostels provide a safe and comfortable living environment, with mess facilities, Wi-Fi connectivity, recreational areas, and 24/7 security. Moreover, the college promotes research activities, workshops, and seminars, helping students stay updated with the latest developments in medical science. The friendly faculty and mentoring system ensures continuous guidance, while career counseling and FMGE/NExT preparation support prepare students for licensing exams and global medical careers.",
        "whyChooseUsIntro": "Choosing iExplain Education for admission in Jahurul Islam Medical College (JIMC), Bangladesh ensures that students receive comprehensive guidance and personalized support throughout their journey of pursuing MBBS abroad. The consultancy assists with step-by-step admission procedures, document verification, and university communication, making the application process seamless and stress-free.",
        "whyChooseUs": [
            "Expert Guidance for Admission: iExplain Education provides step-by-step support throughout the admission process at JIMC, including application submission, document verification, and university correspondence.",
            "Visa & Travel Assistance: The consultancy offers complete guidance for student visas, travel arrangements, and arrival support in Bangladesh, making it easy for international students to relocate and settle safely.",
            "Transparent Fee Guidance: iExplain Education provides accurate information on tuition fees, hostel charges, and other expenses at JIMC, helping students and parents plan their budget effectively.",
            "NEET & FMGE/NExT Support: For Indian students, the consultancy assists with NEET eligibility verification and later provides guidance and coaching for FMGE/NExT exams.",
            "End-to-End Student Support: iExplain Education supports students with hostel selection, orientation programs, health insurance, and local guidance, ensuring students adapt comfortably to campus life.",
            "Experienced & Trusted Consultants: With years of experience in MBBS abroad admissions, iExplain Education has a proven track record of helping students secure seats in top-ranked medical colleges.",
            "Post-Admission Academic Guidance: The consultancy helps students understand the MBBS curriculum, academic planning, and clinical exposure.",
            "Career & Higher Studies Counseling: iExplain Education also provides advice on postgraduate opportunities, specialty training, and global career options."
        ],
        "documents": [
            {
                "document": "Passport",
                "details": "Valid international passport with at least 2 years validity from the date of admission."
            },
            {
                "document": "Visa Application Form",
                "details": "Completed visa form with recent passport-size photographs and supporting documents."
            },
            {
                "document": "Marksheet of 10th / SSC / Equivalent",
                "details": "Proof of secondary education, showing grades and subjects."
            },
            {
                "document": "Marksheet of 12th / HSC / Equivalent",
                "details": "Proof of higher secondary education with Physics, Chemistry, Biology, and English, as required for NEET eligibility."
            },
            {
                "document": "NEET Qualifying Certificate (for Indian students)",
                "details": "Required for eligibility to appear for FMGE/NExT exams in India after graduation."
            },
            {
                "document": "Character Certificate",
                "details": "Issued by the head of previous institution or local authority."
            },
            {
                "document": "Medical / Health Certificate",
                "details": "From a registered medical practitioner, confirming fitness for MBBS studies."
            },
            {
                "document": "Migration / Transfer Certificate",
                "details": "From the last attended school/college, if applicable."
            },
            {
                "document": "Bank Statement / Financial Proof",
                "details": "To demonstrate ability to pay tuition and living expenses."
            },
            {
                "document": "Recommendation Letter (Optional)",
                "details": "From teachers or mentors, supporting academic and personal credentials."
            }
        ],
        "conclusion": "Jahurul Islam Medical College (JIMC), Bangladesh, stands out as a top choice for MBBS aspirants seeking high-quality medical education abroad at an affordable cost. With its affiliation to the University of Dhaka, recognition by BMDC and NMC India, and listing in WDOMS, the college ensures that students receive a globally recognized medical degree. The comprehensive MBBS syllabus, modern infrastructure, experienced faculty, and hands-on clinical training at JIMCH Hospital prepare students to become competent and skilled medical professionals. By choosing JIMC through iExplain Education, students not only gain world-class medical education but also develop holistic skills, research experience, and exposure to community health programs, paving the way for a successful global medical career.",
        "faqs": [
            {
                "question": "Is Jahurul Islam Medical College recognized by Indian authorities?",
                "answer": "Yes, JIMC is recognized by the National Medical Commission (NMC), India, and the Bangladesh Medical and Dental Council (BMDC). Indian students graduating from JIMC are eligible to appear for FMGE/NExT exams to practice medicine in India."
            },
            {
                "question": "What is the duration of the MBBS course at JIMC?",
                "answer": "The MBBS program at JIMC spans 6 years, which includes 5 years of academic study (pre-clinical, para-clinical, and clinical phases) and 1 year of compulsory rotating internship at Jahurul Islam Medical College Hospital (JIMCH)."
            },
            {
                "question": "What is the medium of instruction at Jahurul Islam Medical College?",
                "answer": "The entire MBBS curriculum at JIMC is taught in English, which makes it convenient for international students from India, Nepal, and other countries to understand lectures, study materials, and clinical training."
            },
            {
                "question": "What are the eligibility criteria for Indian students to get admission in JIMC?",
                "answer": "Indian students must have passed 10+2 or equivalent with Physics, Chemistry, Biology, and English, and must be NEET qualified. They also need to submit attested academic documents and a valid passport."
            },
            {
                "question": "Are hostel facilities available for international students?",
                "answer": "Yes, JIMC provides well-furnished hostel accommodations with Wi-Fi, mess facilities, and 24/7 security, ensuring a safe and comfortable living environment for international students."
            },
            {
                "question": "Does JIMC provide clinical exposure during the MBBS course?",
                "answer": "Absolutely. Students get hands-on training in major clinical departments such as Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, ENT, Ophthalmology, Psychiatry, and Dermatology at Jahurul Islam Medical College Hospital, ensuring practical skills and real patient experience."
            },
            {
                "question": "How can iExplain Education help students seeking admission in JIMC?",
                "answer": "iExplain Education offers end-to-end support, including admission guidance, document verification, visa assistance, hostel arrangements, NEET eligibility check, FMGE/NExT preparation, and career counseling, making the entire MBBS abroad process smooth, safe, and transparent for students."
            }
        ]
    },
    "holy-family-red-crescent-medical-college": {
        "title": "Holy Family Red Crescent Medical College",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/HFRCMC_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/HFRCMC_Mobile.webp",
        "intro": {
            "text": "Holy Family Red Crescent Medical College (HFRCMC), situated in Dhaka, Bangladesh, is a top-tier private medical college renowned for offering high-quality MBBS education abroad to both domestic and international students. Established with the vision of producing competent, ethical, and socially responsible medical professionals, HFRCMC combines rigorous academic training with practical clinical exposure to ensure graduates are fully prepared for modern medical practice globally. The college has grown into a reputable institution, recognized for its advanced infrastructure, well-equipped laboratories, modern classrooms, and a fully functional teaching hospital, which provides students with extensive hands-on clinical experience from the early years of their MBBS program.\n\nThe college offers a comprehensive MBBS curriculum in English medium, making it an ideal choice for Indian, Nepalese, and other international students who wish to pursue MBBS abroad at an affordable cost while gaining a globally recognized degree. HFRCMC places special emphasis on balancing theoretical knowledge with clinical practice, ensuring that students acquire critical thinking, diagnostic skills, and patient management expertise. The college also promotes research, community health programs, and extracurricular activities, fostering a well-rounded learning environment that encourages both academic excellence and personal development.\n\nWith its experienced faculty, modern teaching methodologies, and exposure to real-life medical scenarios at Holy Family Red Crescent Medical College Hospital, students receive continuous mentorship and guidance to excel in professional exams, FMGE/NExT preparation for Indian students, and international medical careers. By choosing HFRCMC, aspiring doctors gain not only a strong medical foundation and clinical expertise but also the confidence and skills to become competent medical practitioners anywhere in the world."
        },
        "quickOverview": {
            "College Name": "Holy Family Red Crescent Medical College (HFRCMC)",
            "Location": "Dhaka, Bangladesh",
            "Established": "1998",
            "Course Offered": "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
            "Duration of MBBS": "5 Years Academic + 1 Year Compulsory Internship (6 Years Total)",
            "Medium of Instruction": "English",
            "Affiliation": "University of Dhaka, Bangladesh",
            "Recognition": "Bangladesh Medical and Dental Council (BMDC), National Medical Commission (NMC) India, Listed in World Directory of Medical Schools (WDOMS)",
            "Hostel Facilities": "Separate hostels for boys and girls with mess facilities, Wi-Fi, and 24/7 security"
        },
        "benefits": {
            "intro": "Holy Family Red Crescent Medical College (HFRCMC) is a top-ranked private medical college in Bangladesh offering high-quality MBBS education abroad in English medium. Here are the key reasons to choose HFRCMC:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "Affiliated with the University of Dhaka and recognized by BMDC, NMC India, and WDOMS, ensuring international credibility."
                },
                {
                    "Heading": "English Medium Education",
                    "Details": "The entire MBBS syllabus is taught in English, facilitating learning for international students."
                },
                {
                    "Heading": "Affordable Fees",
                    "Details": "HFRCMC offers quality medical education at reasonable tuition and hostel fees, making it budget-friendly for Indian and other international students."
                },
                {
                    "Heading": "Hands-On Clinical Training",
                    "Details": "Students get extensive practical exposure at Holy Family Red Crescent Medical College Hospital, developing real-world medical skills."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The college has a highly qualified and experienced teaching staff guiding students through theoretical and practical learning."
                },
                {
                    "Heading": "Comprehensive Student Support",
                    "Details": "Includes hostel facilities, visa guidance, mentorship programs, and FMGE/NExT coaching."
                },
                {
                    "Heading": "Focus on Research and Community Health",
                    "Details": "Encourages students to participate in research projects, community outreach, and healthcare initiatives, fostering holistic development."
                },
                {
                    "Heading": "Safe and Supportive Environment",
                    "Details": "Separate hostels for boys and girls, 24/7 security, mess facilities, Wi-Fi, and a welcoming campus atmosphere for international students."
                }
            ]
        },
        "SyllabusIntro": "The MBBS syllabus at Holy Family Red Crescent Medical College (HFRCMC) is designed according to the guidelines of the University of Dhaka and Bangladesh Medical and Dental Council (BMDC). The syllabus is taught entirely in English, making it convenient for Indian, Nepalese, and other international students to pursue MBBS abroad.",
        "syllabus": {
            "headers": ["Phase", "Duration", "Subjects"],
            "table": [
                {
                    "Phase": "Pre-Clinical",
                    "Duration": "1 Year",
                    "Subjects": "Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical",
                    "Duration": "2 Years",
                    "Subjects": "Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine"
                },
                {
                    "Phase": "Clinical",
                    "Duration": "2 Years",
                    "Subjects": "Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, ENT, Ophthalmology, Psychiatry, Dermatology"
                },
                {
                    "Phase": "Rotating Internship",
                    "Duration": "1 Year",
                    "Subjects": "All major clinical departments"
                }
            ]
        },
        "feesIntro": "Choosing Holy Family Red Crescent Medical College (HFRCMC) for an MBBS abroad in Bangladesh means investing in a globally recognized medical education at a relatively affordable cost compared with many private medical colleges in India.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "₹20,80,000*",
                    "hostel": "₹1,03,000*",
                    "total": "₹21,83,000*"
                },
                {
                    "year": "2nd Year",
                    "tuition": "₹3,08,700*",
                    "hostel": "₹1,03,000*",
                    "total": "₹4,11,700*"
                },
                {
                    "year": "3rd Year",
                    "tuition": "₹3,08,700*",
                    "hostel": "₹1,03,000*",
                    "total": "₹4,11,700*"
                },
                {
                    "year": "4th Year",
                    "tuition": "₹3,08,700*",
                    "hostel": "₹1,03,000*",
                    "total": "₹4,11,700*"
                },
                {
                    "year": "5th Year",
                    "tuition": "₹3,08,700*",
                    "hostel": "₹1,03,000*",
                    "total": "₹4,11,700*"
                },
                {
                    "year": "Total (5 Years)",
                    "tuition": "₹33,14,000",
                    "hostel": "₹5,15,000",
                    "total": "₹38,29,000"
                }
            ]
        },
        "durationIntro": "The MBBS program at Holy Family Red Crescent Medical College is structured as a 6-year course designed to provide comprehensive medical education and clinical training. The duration is divided as follows:",
        "duration": {
            "headers": ["Phase", "Duration", "Details"],
            "table": [
                {
                    "Phase": "Pre-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Covers Anatomy, Physiology, and Biochemistry, focusing on fundamental medical sciences."
                },
                {
                    "Phase": "Para-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Includes Pathology, Pharmacology, Microbiology, Forensic Medicine, and Community Medicine to build disease understanding and public health knowledge."
                },
                {
                    "Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Hands-on training in Medicine, Surgery, Pediatrics, Gynecology & Obstetrics, ENT, Ophthalmology, Psychiatry, Dermatology at JIMC Hospital."
                },
                {
                    "Phase": "Rotating Internship",
                    "Duration": "1 Year",
                    "Details": "Full-time rotational internship in all major departments, providing practical experience in patient care and hospital management."
                },
                {
                    "Phase": "Total Duration",
                    "Duration": "6 Years",
                    "Details": "5 years of academic study + 1-year compulsory internship."
                }
            ]
        },
        "studentSupport": "Holy Family Red Crescent Medical College (HFRCMC) places great emphasis on providing comprehensive support to its students, particularly international students from India, Nepal, and other countries. The college ensures that every student has access to academic guidance, personal development, and professional growth resources to help them succeed in their MBBS journey abroad. HFRCMC offers a variety of student support services, including: Academic Mentorship by experienced faculty members who provide continuous guidance in theoretical subjects and practical skills; Clinical Training Support at Holy Family Red Crescent Medical College Hospital with guidance on clinical procedures and patient interaction; FMGE/NExT Preparation assistance for Indian students; Secure and comfortable Hostel and Accommodation Assistance; Visa and Documentation Support; Counseling and Cultural Integration programs; and Career Guidance and Research Opportunities to prepare for future specialization or global medical careers.",
        "recognition": "Holy Family Red Crescent Medical College (HFRCMC), Dhaka, Bangladesh, is a highly reputable institution for MBBS education abroad due to its strong affiliation, recognition, and remarkable achievements. Affiliation: Holy Family Red Crescent Medical College is officially affiliated with the University of Dhaka, one of the most prestigious and highly respected universities in Bangladesh. This affiliation guarantees that the MBBS degree awarded by HFRCMC is internationally recognized, academically credible, and accepted for further medical studies or professional practice worldwide. Recognition: HFRCMC is recognized by the Bangladesh Medical and Dental Council (BMDC), which ensures that the college complies with national standards for medical education, teaching infrastructure, and clinical training. Additionally, it is recognized by the National Medical Commission (NMC) of India, which allows Indian students to pursue MBBS in Bangladesh and appear for the FMGE/NExT exam after graduation. HFRCMC is also listed in the World Directory of Medical Schools (WDOMS). Achievements: Over the years, HFRCMC has earned a strong reputation for academic excellence and clinical training. The college has consistently produced high FMGE passing rates for Indian students. HFRCMC actively encourages students to participate in research projects and community health programs. The college’s teaching hospital provides students with extensive hands-on clinical exposure, covering a wide range of medical specialties.",
        "hostelFacilities": "Hostel life at HFRCMC is comfortable and secure, with separate accommodations for boys and girls, 24/7 security, mess facilities, and Wi-Fi connectivity, allowing students to focus on their studies and practical training while enjoying a safe and nurturing environment. The college provides orientation programs and guidance for adapting to life in Bangladesh, including help with cultural adjustment and local logistics.",
        "studentLife": "Life at Holy Family Red Crescent Medical College (HFRCMC) is designed to provide students with a balanced blend of academic excellence, practical clinical training, and personal growth. The college offers a supportive and multicultural environment, where students from India, Nepal, Sri Lanka, and other countries live, learn, and grow together. The campus life at HFRCMC goes beyond classroom learning; students have access to modern lecture halls, well-equipped laboratories, and a fully functional teaching hospital—Holy Family Red Crescent Medical College Hospital. Beyond academics, the college encourages participation in extracurricular activities, sports, cultural programs, and community health initiatives. The college also provides student counseling services, mentorship programs, and cultural orientation sessions to help international students adapt quickly to campus life, manage stress, and integrate socially.",
        "whyChooseUsIntro": "Choosing the right consultancy can make a huge difference when pursuing MBBS abroad, and iExplain Education has established itself as a trusted partner for students aspiring to study MBBS in Bangladesh, including at Holy Family Red Crescent Medical College (HFRCMC).",
        "whyChooseUs": [
            "Trusted Admission Guidance: Expert counseling for MBBS abroad, helping students understand the admission process and eligibility criteria.",
            "End-to-End Support: Managing all aspects of admission, including application submission, document verification, and fee guidance.",
            "Visa & Travel Assistance: Assistance with visa processing, document attestation, travel arrangements, and pre-departure orientation.",
            "Financial Planning & Fee Guidance: Providing accurate information about tuition fees, hostel costs, and other expenses.",
            "FMGE/NExT Exam Preparation Support: Guidance and resources to help Indian students prepare for licensing exams.",
            "Alumni & Career Networking: Connecting students with alumni and professional networks for future opportunities.",
            "Personalized Mentorship: One-on-one mentoring for academic and personal guidance.",
            "Comprehensive Information: Complete details on syllabus, clinical exposure, hostel facilities, and student life."
        ],
        "documents": [
            {
                "document": "10th / Secondary School Certificate",
                "details": "Proof of basic education, with attested copies from school and relevant authorities."
            },
            {
                "document": "12th / Higher Secondary Certificate (HSC)",
                "details": "Minimum 50% marks in PCB subjects, attested copy required."
            },
            {
                "document": "Birth Certificate / Passport",
                "details": "Valid identity proof; passport must be valid for at least 2 years."
            },
            {
                "document": "NEET Score Card (for Indian students)",
                "details": "Mandatory for FMGE/NExT eligibility in India."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered medical practitioner; must be attested."
            },
            {
                "document": "HIV / Blood Test Report",
                "details": "Recent HIV, Hepatitis B & C test results required for admission and hospital rotation."
            },
            {
                "document": "Migration / Transfer Certificate",
                "details": "For students moving from another school/college; must be attested."
            },
            {
                "document": "Visa Documents",
                "details": "Including Student Visa application form, invitation letter, and passport copies."
            }
        ],
        "conclusion": "Holy Family Red Crescent Medical College (HFRCMC), Dhaka, Bangladesh, stands out as one of the top choices for international students pursuing MBBS abroad, offering a high-quality, globally recognized medical education at an affordable cost. The college provides a comprehensive curriculum, combining theoretical knowledge with extensive clinical training, ensuring students gain practical skills and professional competence required for modern medical practice. With state-of-the-art teaching facilities, experienced faculty, and a supportive hospital environment, students receive hands-on exposure to diverse medical cases from early years of their MBBS program. Recognized by the Bangladesh Medical and Dental Council (BMDC) and the National Medical Commission (NMC) of India, the college ensures that graduates are eligible to appear for FMGE/NExT exams, enabling them to practice medicine in India and abroad.",
        "faqs": [
            {
                "question": "Is Holy Family Red Crescent Medical College recognized internationally?",
                "answer": "Yes, HFRCMC is affiliated with the University of Dhaka and recognized by the Bangladesh Medical and Dental Council (BMDC). It is also recognized by the National Medical Commission (NMC) of India and listed in the World Directory of Medical Schools (WDOMS), making its MBBS degree valid globally."
            },
            {
                "question": "What is the duration of the MBBS course at HFRCMC?",
                "answer": "The MBBS program at HFRCMC spans 6 years, which includes 5 years of academic study covering pre-clinical, para-clinical, and clinical phases, followed by a 1-year compulsory internship for hands-on practical experience."
            },
            {
                "question": "Can Indian students pursue MBBS at HFRCMC?",
                "answer": "Yes, Indian students are eligible to study MBBS at HFRCMC. They must have cleared NEET, meet the minimum PCB score criteria, and can appear for FMGE/NExT exams after graduation to practice medicine in India."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include 10th and 12th certificates, NEET score card (for Indian students), passport, medical fitness certificate, HIV/blood test reports, character certificate, visa documents, and fee payment receipts. All documents must be attested and submitted on time."
            },
            {
                "question": "Does HFRCMC provide hostel facilities for international students?",
                "answer": "Yes, the college offers safe and secure hostels with separate accommodations for boys and girls, including mess facilities, Wi-Fi, and 24/7 security, ensuring a comfortable living environment for all students."
            },
            {
                "question": "How is student life at HFRCMC?",
                "answer": "Student life is vibrant and supportive, with modern classrooms, well-equipped labs, access to a teaching hospital, cultural programs, sports activities, and counseling services. International students are fully supported for academic, personal, and social integration."
            },
            {
                "question": "Why choose iExplain Education for admission to HFRCMC?",
                "answer": "iExplain Education offers end-to-end guidance, including college selection, admission assistance, document preparation, visa support, and pre-departure orientation. They also provide FMGE/NExT preparation guidance and career counseling, ensuring a smooth and stress-free journey to studying MBBS abroad."
            }
        ]
    },
    "university-of-belgrade": {
        "title": "University of Belgrade",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Belgrade_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Belgrade_Mobile.webp",
        "intro": {
            "text": "The University of Belgrade is one of the oldest, largest, and most prestigious universities in Europe, located in Belgrade, Serbia. Established in 1808, the university has a rich academic legacy and is widely recognized for its high-quality education, advanced research facilities, and global academic reputation. It comprises numerous faculties, including a well-established medical faculty that attracts international students who aspire to study MBBS abroad. The university follows a modern European education system, making it a preferred destination for students looking for MBBS in Serbia and MBBS in Europe at an affordable cost.\n\nFor Indian and international students, the University of Belgrade offers an excellent opportunity to pursue MBBS abroad for Indian students with globally accepted standards. The medical programs are designed to provide a perfect balance of theoretical knowledge and practical clinical exposure, with training conducted in affiliated hospitals equipped with advanced medical technology. The availability of English-medium MBBS programs ensures that language is not a barrier for international students. Additionally, the university is recognized by major global medical bodies, making it a reliable option for those searching for NMC approved medical colleges abroad and ensuring better career opportunities after graduation.\n\nMoreover, the University of Belgrade stands out for its affordable MBBS abroad fee structure, safe and student-friendly environment, and multicultural campus life, which helps students adapt easily to international education standards. With experienced faculty, modern infrastructure, and a strong focus on research and innovation, the university provides a solid foundation for a successful medical career. Choosing the University of Belgrade means investing in a globally respected degree while fulfilling the dream of becoming a doctor through study medicine in Europe and securing a bright future in the medical field."
        },
        "quickOverview": {
            "University Name": "University of Belgrade",
            "Location": "Belgrade, Serbia",
            "Established Year": "1808",
            "University Type": "Public University",
            "Medium of Instruction": "English & Serbian",
            "Popular Course": "MBBS (MD Equivalent)",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "NMC, WHO, ECFMG, FAIMER",
            "Eligibility": "10+2 with PCB (50% for General, 40% for Reserved)",
            "NEET Requirement": "Mandatory for Indian Students",
            "Hostel Facility": "Available"
        },
        "benefits": {
            "intro": "Pursuing MBBS at the University of Belgrade is an excellent choice for students who want to study MBBS abroad in Europe with globally recognized standards. Located in Belgrade, the university offers a perfect combination of high-quality education, affordable tuition fees, and strong clinical exposure. The MBBS program is designed according to European medical education standards, ensuring that students gain both theoretical knowledge and practical skills. With English-medium instruction, experienced faculty, and modern infrastructure, it becomes an ideal destination for Indian students looking for NMC approved medical colleges abroad. The university also provides a safe and multicultural environment, making student life comfortable and enriching.",
            "headers": [
                "Heading",
                "Details"
            ],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major medical bodies like NMC, WHO, ECFMG, allowing students to pursue medical careers worldwide."
                },
                {
                    "Heading": "Affordable Tuition Fees",
                    "Details": "Compared to private medical colleges in India and other European countries, the cost of studying MBBS here is budget-friendly for Indian students."
                },
                {
                    "Heading": "English-Medium Program",
                    "Details": "The MBBS course is available in English, making it easier for international students to study without any language barrier."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students get hands-on training in well-equipped hospitals, helping them gain real-life medical experience during their course."
                },
                {
                    "Heading": "European Education Standards",
                    "Details": "The curriculum follows modern European medical education systems, ensuring high-quality theoretical and practical knowledge."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "Highly qualified and experienced professors provide excellent academic guidance and mentorship to students."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Belgrade is known for its safety, welcoming culture, and comfortable lifestyle for international students."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Admission is purely merit-based with a transparent process, unlike many private institutions."
                },
                {
                    "Heading": "Global Career Opportunities",
                    "Details": "Graduates are eligible to appear for exams like FMGE/NExT, USMLE, and PLAB, opening doors to international careers."
                },
                {
                    "Heading": "Multicultural Exposure",
                    "Details": "Students from different countries study together, providing global exposure and enhancing communication skills."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD equivalent) program at the University of Belgrade in Belgrade follows a 6-year European curriculum designed to provide a strong foundation in medical sciences along with advanced clinical training. The course is divided into pre-clinical, para-clinical, and clinical phases, ensuring that students gain both theoretical knowledge and practical exposure. With a focus on modern teaching methods, laboratory work, and hospital-based training, the syllabus prepares students for global medical careers and licensing exams.",
        "syllabus": {
            "headers": [
                "Year",
                "Subjects"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Physiology, Medical Biology, Biophysics, Medical Chemistry"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Biochemistry, Advanced Anatomy, System-based Physiology, Genetics, Introduction to Clinical Practice"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathology, Microbiology, Pharmacology, Immunology, Forensic Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Radiology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Neurology, Psychiatry, Orthopedics, Dermatology, Ophthalmology, ENT"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Internship: Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, Family Medicine"
                }
            ]
        },
        "feesIntro": "The MBBS (MD equivalent) fee structure at the University of Belgrade in Belgrade is considered affordable compared to many European countries and private medical colleges in India. The tuition fee for international students generally ranges between €7,000 to €8,000 per year, depending on the intake and program structure.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€7,500",
                    "hostel": "€1,500",
                    "total": "₹8.0 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (MD equivalent) program at the University of Belgrade in Belgrade has a total duration of 6 years, designed according to the European (Bologna) education system. The course structure ensures a balanced combination of theoretical studies and practical clinical training, preparing students for global medical careers.",
        "duration": {
            "headers": [
                "Year",
                "Phase",
                "Details"
            ],
            "table": [
                {
                    "Year": "1st Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Basic subjects like Anatomy, Physiology, Biophysics"
                },
                {
                    "Year": "2nd Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Advanced concepts + Biochemistry, Genetics"
                },
                {
                    "Year": "3rd Year",
                    "Phase": "Para-Clinical",
                    "Details": "Pathology, Pharmacology, Microbiology"
                },
                {
                    "Year": "4th Year",
                    "Phase": "Clinical",
                    "Details": "Medicine, Surgery, Pediatrics, Gynecology"
                },
                {
                    "Year": "5th Year",
                    "Phase": "Clinical",
                    "Details": "Specialized subjects like Neurology, Psychiatry, ENT"
                },
                {
                    "Year": "6th Year",
                    "Phase": "Internship",
                    "Details": "Mandatory clinical rotations in hospitals"
                }
            ]
        },
        "studentSupport": "The University of Belgrade, located in Belgrade, offers a comprehensive range of student support services designed to help both local and international students succeed academically and adapt comfortably to university life. For students planning to study MBBS abroad, especially those looking for MBBS in Serbia or MBBS in Europe, the university ensures a smooth transition by providing dedicated assistance at every stage of their journey. From the moment students arrive, they receive guidance with admission procedures, visa support, accommodation arrangements, and documentation, making it easier for international students to settle in a new country. Academically, the university provides strong mentorship programs, faculty guidance, and academic counseling, helping students maintain excellent performance throughout their medical studies. For those pursuing MBBS abroad for Indian students, the availability of English-medium programs and additional language support ensures that communication barriers are minimized. The university also emphasizes student well-being by offering healthcare services, psychological counseling, and wellness programs, ensuring students remain physically and mentally fit during their course. In addition to academics, the University of Belgrade promotes a vibrant and inclusive campus environment through student clubs, cultural activities, and international exchange programs, allowing students to gain global exposure and build strong networks. Career-oriented support such as career counseling, skill development programs, and guidance for global licensing exams like FMGE/NExT, USMLE, and PLAB further enhances students' future prospects.",
        "recognition": "The University of Belgrade, located in Belgrade, is globally recognized for its high academic standards, strong affiliations, and international accreditations. It is one of the most reputed universities for students planning to study MBBS abroad and MBBS in Europe. The university is affiliated with leading international academic organizations and follows globally accepted medical education standards. Its Faculty of Medicine is accredited by the Ministry of Education, Science and Technological Development of Serbia and is listed in the World Directory of Medical Schools (WDOMS), ensuring worldwide recognition of its medical degree.\n\nAffiliation of University of Belgrade:\nThe University of Belgrade is officially affiliated with the Ministry of Education, Science and Technological Development of Serbia, ensuring that it follows the national and European standards of higher education. The university is also a member of reputed international academic networks such as the European University Association (EUA), which enhances its global academic collaborations and exchange opportunities. For students planning to study MBBS abroad or pursue MBBS in Europe, these affiliations ensure a high-quality education system aligned with international standards.\n\nRecognition of University of Belgrade:\nThe University of Belgrade is widely recognized by major global medical bodies, making it a trusted choice for MBBS abroad for Indian students. It is listed in the World Directory of Medical Schools (WDOMS) and its degree is accepted by organizations such as NMC (National Medical Commission), WHO, ECFMG, and FAIMER. This global recognition allows students to appear for licensing exams like FMGE/NExT, USMLE, and PLAB, making it an ideal option for those searching for NMC approved medical colleges abroad and globally recognized MBBS degrees.\n\nAchievements of University of Belgrade:\nWith a legacy of over 200 years, the University of Belgrade has achieved a strong reputation in medical education and research excellence. It is considered one of the top universities in Serbia and Europe for higher education and has produced thousands of successful medical professionals working worldwide. The university continuously improves its global rankings, research output, and academic quality, making it a preferred destination for students looking for affordable MBBS abroad, high-quality medical education in Europe, and excellent career opportunities after graduation.",
        "hostelFacilities": "The university provides well-equipped hostels, libraries, laboratories, and recreational facilities, ensuring a comfortable and productive lifestyle. International students benefit from strong support systems, including student communities, mentorship programs, and language support, making it easier to adapt to a new country. The university provides hostel facilities and assistance in finding private accommodation. The hostels are affordable and equipped with basic amenities, ensuring a comfortable living environment for international students.",
        "studentLife": "Student life at the University of Belgrade, located in Belgrade, is vibrant, diverse, and highly student-friendly, making it an ideal destination for those planning to study MBBS abroad. The university offers a perfect balance between academic learning and social life, ensuring that students not only gain quality education but also enjoy a rich international experience. For students pursuing MBBS in Serbia or MBBS in Europe, the campus provides a multicultural environment where students from different countries come together, helping them build global connections and cultural understanding. The university provides well-equipped hostels, libraries, laboratories, and recreational facilities, ensuring a comfortable and productive lifestyle. Students can actively participate in clubs, sports activities, cultural events, and student organizations, which play a major role in personality development and stress management. The city of Belgrade itself is known for its affordable living cost, safe environment, and lively atmosphere, offering cafes, historical sites, and entertainment options that enhance the overall student experience. In addition, international students benefit from strong support systems, including student communities, mentorship programs, and language support, making it easier to adapt to a new country. The exposure to European culture, modern education system, and diverse peer groups helps students grow both personally and professionally.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important when planning to study MBBS abroad, especially in a reputed university like the University of Belgrade in Belgrade. iExplain Education is a trusted platform that provides end-to-end guidance for MBBS abroad for Indian students, helping them make the right decisions and avoid common mistakes. With expert counselors, personalized support, and a student-first approach, they ensure a smooth and hassle-free admission process.",
        "whyChooseUs": [
            "Expert Guidance for MBBS Abroad – iExplain Education provides professional counselling based on your NEET score, budget, and career goals, helping you choose the right path for MBBS abroad for Indian students.",
            "Personalized Counselling Support – Every student receives one-on-one guidance to select the best university, ensuring the right decision for MBBS in Europe and long-term career success.",
            "University Selection Assistance – Helps students choose NMC compliant medical colleges abroad like the University of Belgrade, ensuring eligibility for future licensing exams.",
            "Complete Admission & Documentation Support – From application form filling to document verification and admission confirmation, the entire process is handled smoothly and professionally.",
            "Visa Processing & Travel Assistance – Provides step-by-step support for visa application, interview preparation, and travel arrangements to make the transition stress-free.",
            "Pre-Departure & Post-Arrival Support – Students receive guidance before leaving India and continued assistance after reaching Belgrade, including accommodation and settling help.",
            "Transparent & Reliable Process – Ensures complete clarity in fees and procedures with no hidden charges, making it a trusted option for MBBS abroad admission.",
            "Career & Licensing Exam Guidance – Offers support for exams like FMGE/NExT, USMLE, and PLAB, helping students build a successful global medical career."
        ],
        "documents": [
            {
                "document": "10th Marksheet",
                "details": "For proof of date of birth"
            },
            {
                "document": "12th Marksheet",
                "details": "Must have PCB with required percentage"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Valid Passport",
                "details": "Minimum 18 months validity"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered doctor"
            },
            {
                "document": "HIV Test Report",
                "details": "Required for international students"
            },
            {
                "document": "Migration Certificate",
                "details": "From the previous board/university"
            },
            {
                "document": "Application Form",
                "details": "Duly filled and signed"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university"
            },
            {
                "document": "Visa Documents",
                "details": "Required for student visa processing"
            }
        ],
        "conclusion": "Choosing the University of Belgrade in Belgrade for pursuing MBBS is a highly rewarding decision for students who aspire to study MBBS abroad and build a successful medical career on a global level. With its rich legacy of over two centuries, the university stands as a symbol of academic excellence, advanced research, and high-quality medical education in Europe. It offers a well-structured MBBS (MD equivalent) program that combines strong theoretical knowledge with extensive clinical exposure, ensuring students are well-prepared for real-world medical practice. For Indian students looking for MBBS abroad for Indian students, the University of Belgrade provides a perfect blend of affordability, global recognition, and English-medium education, making it easier to adapt and succeed. The university’s recognition by major medical bodies and adherence to international standards make it a reliable option for those aiming to appear for licensing exams like FMGE/NExT, USMLE, and PLAB. Additionally, the multicultural environment, safe surroundings, and student-friendly atmosphere in Belgrade further enhance the overall learning and living experience. Moreover, with proper guidance and careful planning, students can avoid common mistakes and select the right path for their medical journey. The University of Belgrade not only provides a degree but also opens doors to global career opportunities, international exposure, and professional growth.",
        "faqs": [
            {
                "question": "Is the University of Belgrade a good option for MBBS abroad?",
                "answer": "Yes, the University of Belgrade is considered one of the most reputed universities in Europe for medical education. With a legacy of more than 200 years, it offers high-quality education, modern infrastructure, and strong clinical exposure. For students planning to study MBBS abroad or pursue MBBS in Europe, it provides a globally recognized degree along with excellent academic and career opportunities."
            },
            {
                "question": "Is the University of Belgrade NMC approved and valid for Indian students?",
                "answer": "The university is listed in global directories like WDOMS and recognized by major international medical bodies. However, Indian students must ensure that they follow all NMC (FMGL) guidelines, including course duration, internship, and medium of instruction. Meeting these criteria allows students to appear for FMGE/NExT and practice medicine in India after completing their MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at the University of Belgrade?",
                "answer": "The MBBS (MD equivalent) program at the University of Belgrade has a total duration of 6 years, which includes 5 years of academic study and 1 year of mandatory clinical internship. The course is structured according to the European education system, ensuring a balanced combination of theoretical learning and practical hospital training."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program is offered in English, which makes it convenient for international students, especially those from India. This ensures that students can easily understand the curriculum, participate in practical sessions, and communicate effectively during their clinical training."
            },
            {
                "question": "What are the eligibility criteria for MBBS admission?",
                "answer": "To apply for MBBS, students must have completed 10+2 with Physics, Chemistry, and Biology (PCB) with at least 50% marks (40% for reserved categories). Additionally, qualifying NEET is mandatory for Indian students as per NMC guidelines. Students must also meet basic age and medical fitness requirements."
            },
            {
                "question": "What is the fee structure for MBBS at the University of Belgrade?",
                "answer": "The tuition fee for MBBS is approximately €7,000 – €8,000 per year, which makes it a good option for students looking for affordable MBBS abroad. In addition to tuition fees, students should also consider hostel charges and living expenses, which are comparatively lower than many other European countries."
            },
            {
                "question": "Are there part-time work opportunities for students?",
                "answer": "Yes, international students in Belgrade may find limited part-time work opportunities while studying. However, since MBBS is a demanding course, students are advised to focus primarily on their studies and clinical training."
            },
            {
                "question": "Is accommodation available for international students?",
                "answer": "Yes, the university provides hostel facilities and assistance in finding private accommodation. The hostels are affordable and equipped with basic amenities, ensuring a comfortable living environment for international students pursuing MBBS in Serbia."
            },
            {
                "question": "Can I practice in India after completing MBBS from this university?",
                "answer": "Yes, after completing MBBS from the University of Belgrade, Indian students are required to clear the FMGE (Foreign Medical Graduate Examination) or upcoming NExT exam to obtain a license to practice in India. Proper preparation and choosing a university that follows NMC guidelines are essential for a successful medical career."
            }
        ]
    },
    "university-of-novi-sad": {
        "title": "University of Novi Sad",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/NoviSad_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/NoviSad_Mobile.webp",
        "intro": {
            "text": "The University of Novi Sad is one of the most prominent and rapidly growing public universities in Serbia, located in the beautiful and student-friendly city of Novi Sad. Established in 1960, the university has built a strong reputation for delivering high-quality education, advanced research opportunities, and internationally recognized academic programs. It is home to multiple faculties, including a well-established Faculty of Medicine that attracts a large number of international students every year who aspire to study MBBS abroad. With its commitment to academic excellence and innovation, the university has become a preferred destination for students seeking MBBS in Serbia and MBBS in Europe.\n\nFor students looking for MBBS abroad for Indian students, the University of Novi Sad offers a perfect combination of affordable tuition fees, globally recognized degrees, and modern teaching methodologies. The MBBS (MD equivalent) program is structured according to European education standards and focuses on both strong theoretical foundations and extensive clinical exposure. Students receive hands-on training in affiliated hospitals equipped with modern medical technologies, which helps them gain real-world medical experience and practical skills essential for a successful career in medicine. The availability of English-medium MBBS programs ensures that international students can study comfortably without facing language barriers.\n\nMoreover, the university provides a supportive and multicultural environment that helps students easily adapt to a new country and lifestyle. The city of Novi Sad is known for its safe environment, affordable cost of living, and vibrant student life, making it ideal for international students. With experienced faculty, well-equipped laboratories, modern infrastructure, and strong academic support systems, the University of Novi Sad ensures holistic development of students. Its recognition by global medical organizations makes it a reliable choice for those searching for NMC approved medical colleges abroad, affordable MBBS abroad, and study medicine in Europe, ultimately helping students achieve their dream of becoming successful doctors on an international level."
        },
        "quickOverview": {
            "University Name": "University of Novi Sad",
            "Location": "Novi Sad, Serbia",
            "Established Year": "1960",
            "University Type": "Public University",
            "Medium of Instruction": "English & Serbian",
            "Popular Course": "MBBS (MD Equivalent)",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "NMC, WHO, ECFMG, FAIMER",
            "Eligibility": "10+2 with PCB (50% for General, 40% for Reserved)",
            "NEET Requirement": "Mandatory for Indian Students",
            "Hostel Facility": "Available"
        },
        "benefits": {
            "intro": "Pursuing MBBS at the University of Novi Sad in Novi Sad is an excellent choice for students who want to study MBBS abroad with a perfect balance of quality education, affordability, and global exposure. The university follows European medical education standards and provides a well-structured MBBS (MD equivalent) program that focuses on both theoretical knowledge and practical clinical training. With modern infrastructure, experienced faculty, and English-medium instruction, it becomes a preferred destination for MBBS in Serbia and MBBS in Europe, especially for Indian students seeking NMC compliant medical colleges abroad.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major international medical bodies such as NMC, WHO, ECFMG, and FAIMER, allowing students to pursue medical careers globally and appear for exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "Compared to private medical colleges in India and other European countries, the tuition fees are budget-friendly, making it a great option for students looking for affordable MBBS abroad without compromising on quality education."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The availability of English-medium courses ensures that international students can easily understand the curriculum and actively participate in academic and clinical training."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students receive hands-on training in well-equipped affiliated hospitals, gaining real-life medical experience that is essential for becoming a skilled doctor."
                },
                {
                    "Heading": "European Education System",
                    "Details": "The curriculum follows modern European standards, ensuring high academic quality, research-based learning, and practical skill development."
                },
                {
                    "Heading": "Experienced & Qualified Faculty",
                    "Details": "The university has highly experienced professors and medical professionals who provide excellent academic guidance and mentorship to students."
                },
                {
                    "Heading": "Safe & Student-Friendly Environment",
                    "Details": "Novi Sad is known for its safety, welcoming culture, and affordable cost of living, making it comfortable for international students."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Admission is transparent and purely merit-based, with no hidden charges or donation requirements."
                },
                {
                    "Heading": "Global Career Opportunities",
                    "Details": "Graduates are eligible to pursue medical careers worldwide and can appear for international licensing exams, opening doors to global opportunities."
                },
                {
                    "Heading": "Multicultural Exposure",
                    "Details": "Students from various countries study together, providing international exposure, cultural exchange, and improved communication skills."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD equivalent) program at the University of Novi Sad in Novi Sad follows a 6-year European curriculum designed to provide a strong foundation in medical sciences along with advanced clinical training. The course is divided into pre-clinical, para-clinical, and clinical phases, ensuring students gain both theoretical knowledge and practical exposure. With a focus on modern teaching methods, laboratory work, and hospital-based training, the program prepares students for global medical careers and licensing exams.",
        "syllabus": {
            "headers": ["Year", "Subjects"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Physiology, Medical Biology, Biophysics, Medical Chemistry"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Biochemistry, Advanced Anatomy, System-based Physiology, Genetics, Introduction to Clinical Practice"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathology, Microbiology, Pharmacology, Immunology, Forensic Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Radiology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Neurology, Psychiatry, Orthopedics, Dermatology, Ophthalmology, ENT"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Internship: Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Emergency Medicine, Family Medicine"
                }
            ]
        },
        "feesIntro": "The MBBS (MD equivalent) program at the University of Novi Sad in Novi Sad is considered affordable for international students, especially compared to other European countries. The tuition fees generally range between €6,000 to €7,000 per year, depending on the academic session and intake. Additionally, hostel and living expenses are relatively low, making it a good option for students looking for affordable MBBS abroad.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€6,500",
                    "hostel": "€1,000",
                    "total": "₹7.0 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (MD equivalent) program at the University of Novi Sad in Novi Sad has a total duration of 6 years, designed according to the European medical education system. The program combines theoretical studies, practical training, and clinical exposure to prepare students for global medical careers.",
        "duration": {
            "headers": ["Year", "Phase", "Details"],
            "table": [
                {
                    "Year": "1st Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Basic subjects like Anatomy, Physiology, Biophysics"
                },
                {
                    "Year": "2nd Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Advanced concepts, Biochemistry, Genetics"
                },
                {
                    "Year": "3rd Year",
                    "Phase": "Para-Clinical",
                    "Details": "Pathology, Pharmacology, Microbiology"
                },
                {
                    "Year": "4th Year",
                    "Phase": "Clinical",
                    "Details": "Medicine, Surgery, Pediatrics, Gynecology"
                },
                {
                    "Year": "5th Year",
                    "Phase": "Clinical",
                    "Details": "Neurology, Psychiatry, ENT, Orthopedics"
                },
                {
                    "Year": "6th Year",
                    "Phase": "Internship",
                    "Details": "Mandatory clinical rotations in hospitals"
                }
            ]
        },
        "studentSupport": "The University of Novi Sad, located in Novi Sad, provides a well-developed and student-focused support system to ensure that both local and international students have a smooth academic journey. For students planning to study MBBS abroad, especially those choosing MBBS in Serbia or MBBS in Europe, the university offers comprehensive assistance from admission to graduation. Dedicated student service centers help with enrollment, documentation, academic records, and administrative support, making the process simple and hassle-free. The university also places strong emphasis on academic success by offering mentorship programs, faculty guidance, and e-learning platforms, enabling students to manage their studies effectively. Modern digital systems like student portals and online learning platforms further enhance accessibility and learning experience. Additionally, international students receive specialized support, including visa assistance, residence guidance, and help with adapting to a new country, ensuring a comfortable transition into university life. In terms of well-being, the University of Novi Sad provides access to healthcare facilities, psychological counseling, and wellness services, helping students maintain both physical and mental health. Career development is another key focus area, with dedicated centers offering career counseling, skill development programs, and job placement support, preparing students for global opportunities after completing their MBBS abroad.",
        "recognition": "The University of Novi Sad, located in Novi Sad, is widely known for its strong academic foundation, global affiliations, and international recognition. It follows European education standards and is connected with leading academic organizations, ensuring high-quality education for students planning to study MBBS abroad. The university’s medical programs are designed to meet global requirements, making it a reliable option for students looking for MBBS in Serbia, MBBS in Europe, and NMC compliant medical colleges abroad. Affiliation: The university is affiliated with the Ministry of Education, Science and Technological Development of Serbia, ensuring adherence to national and European academic standards. It is also a member of international organizations like the European University Association (EUA) and participates in global exchange programs such as Erasmus+, enhancing academic collaboration and student mobility. Recognition: The University of Novi Sad is recognized by official accreditation bodies in Serbia and listed among globally accepted universities. Its medical programs are acknowledged internationally, allowing students to pursue careers abroad and appear for licensing exams like FMGE/NExT, USMLE, and PLAB, making it a suitable option for MBBS abroad for Indian students. Achievements: The university is one of the largest and most reputed institutions in Serbia, known for its excellence in education, research, and innovation. It has a strong presence in global rankings and has produced successful professionals working worldwide. With modern infrastructure, numerous research projects, and international collaborations, it continues to grow as a preferred destination for affordable MBBS abroad and quality medical education in Europe.",
        "hostelFacilities": "The university campus spread across a large area near the Danube River and close to the city center. It includes modern classrooms, libraries, student dormitories, restaurants, healthcare centers, and sports facilities, all located within a single campus area. Students also have access to multiple hostels and affordable accommodation options, along with cafeterias that provide budget-friendly meals for thousands of students every day. The university provides hostel facilities and assistance in finding private accommodation for international students.",
        "studentLife": "Student life at the University of Novi Sad in Novi Sad is vibrant, dynamic, and highly student-friendly, making it an ideal destination for those planning to study MBBS abroad. The university offers a perfect blend of academic excellence and an engaging campus lifestyle, ensuring that students not only focus on their studies but also enjoy a well-rounded international experience. With nearly 50,000 students from different countries, the university provides a multicultural environment that helps students build global connections and cultural understanding. The centralized campus structure makes daily life convenient and promotes interaction among students. Apart from academics, students actively participate in cultural events, student organizations, sports activities, and social gatherings, which play a major role in personality development and stress relief. The university also offers facilities like a Student Health Centre, career development services, and counseling support, ensuring students maintain both physical and mental well-being during their studies. The city of Novi Sad itself is known as a “student city” due to its lively atmosphere, safety, and affordable lifestyle. Students can enjoy riverside walks, cafes, festivals, and a vibrant nightlife, making their overall experience memorable and enjoyable.",
        "whyChooseUsIntro": "Choosing the right consultancy plays a crucial role when planning to study MBBS abroad, especially in a reputed institution like the University of Novi Sad in Novi Sad. iExplain Education provides complete, reliable, and student-focused support to ensure a smooth admission process for students aiming for MBBS in Serbia and MBBS in Europe. With expert guidance and a transparent approach, it helps students make the right decisions for their medical career.",
        "whyChooseUs": [
            "Expert Guidance for MBBS Abroad – Provides professional counselling based on NEET score, budget, and career goals, helping students choose the best option for MBBS abroad for Indian students.",
            "Personalized Counselling Support – Offers one-on-one guidance to help students select the right university and plan their academic journey effectively.",
            "University Selection Assistance – Helps in choosing NMC compliant medical colleges abroad like the University of Novi Sad, ensuring eligibility for future licensing exams.",
            "Complete Admission & Documentation Support – Handles the entire admission process, including application, document verification, and confirmation, making it hassle-free.",
            "Visa Processing & Travel Assistance – Provides step-by-step support for visa application, interview preparation, and travel arrangements.",
            "Pre-Departure & Post-Arrival Support – Assists students before departure and after reaching Novi Sad, including accommodation and settling guidance.",
            "Transparent & Trustworthy Process – Ensures no hidden charges and complete clarity in procedures, making it a reliable choice for MBBS abroad admission.",
            "Career & Licensing Exam Guidance – Offers support for FMGE/NExT, USMLE, and PLAB, helping students build successful global medical careers."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Filled, signed application form submitted to the university"
            },
            {
                "document": "10th & 12th Marksheet",
                "details": "Academic records with PCB subjects (with notarized translation)"
            },
            {
                "document": "High School Diploma",
                "details": "Original certificate with verified translation"
            },
            {
                "document": "Birth Certificate",
                "details": "Must be translated into Serbian and notarized"
            },
            {
                "document": "Passport Copy",
                "details": "Valid passport (personal details page)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Entrance Exam Proof",
                "details": "Biology & Chemistry entrance test qualification (if applicable)"
            },
            {
                "document": "Certificate of Recognition",
                "details": "Recognition of previous education by Serbian authority"
            },
            {
                "document": "Medical Certificate",
                "details": "Proof of medical fitness"
            },
            {
                "document": "Proof of Fee Payment",
                "details": "Tuition fee (1st installment) receipt"
            }
        ],
        "conclusion": "Choosing the University of Novi Sad in Novi Sad for pursuing MBBS is a smart and future-oriented decision for students who wish to study MBBS abroad and build a successful medical career globally. The university offers a perfect combination of high-quality education, affordable tuition fees, modern infrastructure, and strong clinical exposure, making it one of the best options for MBBS in Serbia and MBBS in Europe. Its adherence to European education standards and global recognition ensures that students receive a degree that is respected worldwide. For Indian students looking for MBBS abroad for Indian students, the University of Novi Sad provides a comfortable and supportive environment with English-medium programs, experienced faculty, and a multicultural campus. Overall, with the right guidance and proper planning, students can confidently choose this university as a reliable destination for affordable MBBS abroad, NMC compliant medical colleges abroad, and long-term global career opportunities.",
        "faqs": [
            {
                "question": "Is the University of Novi Sad good for MBBS abroad?",
                "answer": "Yes, the University of Novi Sad is a well-recognized institution in Europe known for its quality medical education, affordable fees, and modern infrastructure. It is a good option for students planning to study MBBS abroad and build a global medical career."
            },
            {
                "question": "Is the University of Novi Sad NMC approved?",
                "answer": "The university is listed in global directories like WDOMS and follows European education standards. Indian students must ensure they meet NMC (FMGL) guidelines to be eligible for practicing in India after completing MBBS abroad."
            },
            {
                "question": "What is the duration of MBBS at the University of Novi Sad?",
                "answer": "The MBBS (MD equivalent) program duration is 6 years, including academic study and a mandatory clinical internship."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS program is available in English, making it convenient for international students, especially from India."
            },
            {
                "question": "What are the eligibility criteria for MBBS admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology (PCB) with at least 50% marks (40% for reserved category) and must qualify NEET."
            },
            {
                "question": "Is hostel accommodation available?",
                "answer": "Yes, the university provides hostel facilities and assistance in finding private accommodation for international students."
            },
            {
                "question": "Can students work while studying MBBS?",
                "answer": "Yes, students in Novi Sad may find part-time work opportunities, but they should primarily focus on their studies."
            },
            {
                "question": "Can I practice in India after completing MBBS?",
                "answer": "Yes, after completing MBBS from the University of Novi Sad, students need to clear FMGE/NExT to practice in India."
            }
        ]
    },
    "university-of-nis": {
        "title": "University of Nis",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Nis_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Nis_Mobile.webp",
        "intro": {
            "text": "The University of Nis is one of the prominent public universities in Serbia, located in the historic and culturally rich city of Niš. Established in 1965, the university has developed a strong reputation for delivering high-quality education, advanced research opportunities, and globally recognized academic programs. It consists of multiple faculties, including a well-established Faculty of Medicine that attracts international students every year who aspire to study MBBS abroad. With its commitment to academic excellence and continuous development, the university has become a preferred destination for students looking for MBBS in Serbia and MBBS in Europe at an affordable cost.\n\nFor students planning MBBS abroad for Indian students, the University of Nis offers a balanced combination of affordable tuition fees, modern infrastructure, and international-standard medical education. The MBBS (MD equivalent) program is structured according to the European education system and focuses on building a strong foundation in both theoretical knowledge and practical clinical exposure. Students gain hands-on training in affiliated hospitals equipped with modern medical technology, which helps them develop real-life medical skills and clinical confidence. The availability of English-medium MBBS programs ensures that international students can easily understand the curriculum without facing language barriers.\n\nMoreover, the university provides a supportive and student-friendly environment that helps international students adapt smoothly to a new country and academic system. The city of Nis is known for its affordable cost of living, safe surroundings, and welcoming culture, making it ideal for students pursuing MBBS in Europe. With experienced faculty, well-equipped laboratories, modern teaching methods, and strong academic support services, the University of Nis ensures the overall development of students. Its global recognition and adherence to international medical education standards make it a reliable option for those searching for NMC approved medical colleges abroad, affordable MBBS abroad, and study medicine in Europe, ultimately helping students achieve their dream of becoming successful doctors on a global level."
        },
        "quickOverview": {
            "University Name": "University of Nis",
            "Location": "Nis, Serbia",
            "Established Year": "1965",
            "University Type": "Public University",
            "Medium of Instruction": "English & Serbian",
            "Popular Course": "MBBS (MD Equivalent)",
            "Course Duration": "6 Years (Including Internship)",
            "Recognition": "NMC, WHO, ECFMG, FAIMER",
            "Eligibility": "10+2 with PCB (50% for General, 40% for Reserved)",
            "NEET Requirement": "Mandatory for Indian Students",
            "Hostel Facility": "Available"
        },
        "benefits": {
            "intro": "Pursuing MBBS at the University of Nis in Nis is an excellent choice for students who want to study MBBS abroad with quality education at an affordable cost. The university follows European medical education standards and offers a well-structured MBBS (MD equivalent) program that focuses on both strong theoretical knowledge and practical clinical training. With modern infrastructure, experienced faculty, and English-medium programs, it is becoming a popular destination for students looking for MBBS in Serbia and MBBS in Europe, especially for Indian students seeking NMC compliant medical colleges abroad.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Degree",
                    "Details": "The university is recognized by major international medical bodies such as NMC, WHO, ECFMG, and FAIMER, allowing students to pursue medical careers worldwide and appear for exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Affordable MBBS Fees",
                    "Details": "Compared to many European countries and private medical colleges in India, the tuition fees are budget-friendly, making it a great option for students looking for affordable MBBS abroad."
                },
                {
                    "Heading": "English-Medium Program",
                    "Details": "The MBBS course is available in English, making it easier for international students to understand the curriculum and participate in clinical training."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students receive hands-on training in affiliated hospitals, gaining real-life medical experience and developing practical skills required in the medical field."
                },
                {
                    "Heading": "European Education Standards",
                    "Details": "The curriculum follows modern European systems, ensuring high-quality education, research opportunities, and practical learning."
                },
                {
                    "Heading": "Experienced Faculty",
                    "Details": "The university has highly qualified professors and medical professionals who provide excellent academic guidance and mentorship."
                },
                {
                    "Heading": "Safe & Affordable Living",
                    "Details": "Nis offers a safe environment and low cost of living, making it suitable for international students."
                },
                {
                    "Heading": "No Donation or Capitation Fee",
                    "Details": "Admission is transparent and merit-based, with no hidden charges or donations required."
                },
                {
                    "Heading": "Global Career Opportunities",
                    "Details": "Graduates are eligible to appear for international licensing exams, opening doors to global medical careers."
                },
                {
                    "Heading": "Multicultural Environment",
                    "Details": "Students from different countries study together, providing international exposure and cultural diversity."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (MD equivalent) program at the University of Nis in Nis follows a 6-year European curriculum designed to provide in-depth medical knowledge along with strong clinical exposure. The syllabus is divided into pre-clinical, para-clinical, and clinical phases, ensuring a gradual transition from basic sciences to advanced medical practice. Students are trained through lectures, laboratory work, seminars, and hospital-based clinical rotations, preparing them for global medical careers.",
        "syllabus": {
            "headers": ["Year", "Subjects"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Histology, Embryology, Medical Biology, Biochemistry, Medical Statistics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Physiology, Genetics, Biochemistry (Advanced), Microbiology (Basics), Social Medicine"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathology, Pharmacology, Microbiology, Immunology, Forensic Medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Radiology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Neurology, Psychiatry, Orthopedics, Dermatology, Ophthalmology, ENT"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Internship: Internal Medicine, Surgery, Pediatrics, Gynecology, Emergency Medicine, Clinical Rotations"
                }
            ]
        },
        "feesIntro": "The MBBS (MD equivalent) program at the University of Nis in Nis is known for its affordable fee structure and high-quality medical education. The tuition fee is approximately €6,000 per year, as per the official Faculty of Medicine fee structure. In addition, hostel and living expenses are budget-friendly, making it a great option for students looking for affordable MBBS abroad.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€6,000",
                    "hostel": "€800",
                    "total": "₹6.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS program at the University of Nis, Serbia is designed as a comprehensive 6-year medical course combining theoretical knowledge with practical clinical training. It is structured to provide international students with the skills and competencies required to become competent medical professionals. The program leads to the Doctor of Medicine (MD) degree, which is equivalent to MBBS and recognized by international medical bodies such as the NMC (India) and WHO. Students spend the initial years focusing on basic medical sciences, followed by clinical rotations and practical exposure in affiliated hospitals.",
        "duration": {
            "headers": ["Year", "Phase", "Details"],
            "table": [
                {
                    "Year": "1st Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Basic subjects like Anatomy, Physiology, Biophysics"
                },
                {
                    "Year": "2nd Year",
                    "Phase": "Pre-Clinical",
                    "Details": "Advanced concepts, Biochemistry, Genetics"
                },
                {
                    "Year": "3rd Year",
                    "Phase": "Para-Clinical",
                    "Details": "Pathology, Pharmacology, Microbiology"
                },
                {
                    "Year": "4th Year",
                    "Phase": "Clinical",
                    "Details": "Medicine, Surgery, Pediatrics, Gynecology"
                },
                {
                    "Year": "5th Year",
                    "Phase": "Clinical",
                    "Details": "Neurology, Psychiatry, ENT, Orthopedics"
                },
                {
                    "Year": "6th Year",
                    "Phase": "Internship",
                    "Details": "Mandatory clinical rotations in hospitals"
                }
            ]
        },
        "studentSupport": "The University of Nis provides an extensive and well-structured support system for its students, ensuring a holistic academic, social, and personal experience throughout their studies. At the heart of this system is the Career Development Centre, which offers personalized career guidance, workshops on CV and motivation letter writing, interview preparation, and opportunities to connect with potential employers, helping students build a strong foundation for their professional lives. For international students, the International Relations Office (IRO) plays a crucial role in facilitating a smooth transition to life in Serbia, providing assistance with enrollment procedures, visa and residence documentation, orientation programs, and a buddy network that pairs newcomers with experienced students to help them adapt to cultural, academic, and social aspects of university life. The university’s academic libraries and online resources support research, study, and access to global scientific publications, while well-maintained student accommodations and canteens ensure safe, affordable, and convenient living arrangements on campus. Beyond academics, students are encouraged to participate in a variety of clubs and societies, including international organizations like ELSA, IFMSA, AIESEC, and IAESTE, offering opportunities for extracurricular engagement, leadership development, volunteering, networking, and cross-cultural exchange. To promote student health and wellbeing, the university provides information on local healthcare services, mandatory health insurance requirements, and access to medical facilities. Moreover, informal peer groups and online student communities allow students to exchange experiences, seek advice on housing or academics, and create a sense of belonging within the university. Administrative support is also a key component, with faculty offices assisting in registration, academic record management, and resolving study-related queries efficiently.",
        "recognition": "The University of Nis, located in Serbia, is a prestigious institution recognized for its high standards in medical education, research, and international collaboration. The University of Nis is officially affiliated with the Ministry of Education and Science of the Republic of Serbia, ensuring that all its programs meet rigorous national educational standards. For international students looking to study medicine in Serbia, this affiliation guarantees that their degree is legitimate and recognized nationally. The University of Nis is widely recognized internationally by major medical organizations. Its Faculty of Medicine is included in the World Directory of Medical Schools (WHO) and is approved by the National Medical Commission (NMC) of India, allowing Indian students to appear for the FMGE/NExT exams after graduation. This recognition ensures that the MBBS degree from University of Nis is valid for pursuing medical licensure, higher education, or clinical practice worldwide. Additionally, the university is acknowledged for maintaining high teaching standards, modern medical facilities, and English-medium programs for international students. Over the years, the University of Nis has achieved significant milestones in medical education and research. It has produced thousands of competent medical graduates who have excelled in clinical practice, research, and higher studies globally. Recognition of its graduates in global medical competitions and publications highlights the university’s commitment to excellence, innovation, and producing skilled medical professionals.",
        "hostelFacilities": "The university offers affordable on-campus hostels and canteen facilities for students, along with guidance for off-campus accommodation if needed. The hostels provide safe and convenient living arrangements for international students. Canteens ensure affordable meals are available close to academic facilities. Additionally, the city of Nis offers a safe environment and low cost of living, which helps students manage their budget effectively while studying.",
        "studentLife": "Life as a medical student at the University of Nis is a truly enriching experience, combining rigorous academic training with a vibrant campus culture and diverse extracurricular opportunities. For students aspiring to study MBBS in University of Nis, the university offers an international-friendly environment that caters to students from all over the world, especially from countries like India, Africa, and the Middle East. The campus is equipped with state-of-the-art lecture halls, modern laboratories, and extensive libraries. The English-medium MBBS program is tailored specifically for international students, making it easier for them to understand complex medical concepts. In addition to academic excellence, student life emphasizes practical clinical exposure. Through affiliations with local hospitals, students gain hands-on experience in patient care, diagnostics, and medical procedures. Beyond the classroom, the university fosters a sense of community by encouraging participation in a variety of clubs and societies. Groups such as ELSA, IFMSA, and AIESEC provide opportunities for leadership development, networking, volunteering, and cultural exchange. Orientation programs, a buddy system, and guidance on accommodation ensure international students adapt smoothly. Affordable on-campus hostels and canteens make life convenient, while social events, cultural festivals, and sports activities ensure students can balance their academic commitments with recreational pursuits.",
        "whyChooseUsIntro": "Choosing the right consultancy can make a significant difference when planning to study MBBS in University of Nis. iExplain Education stands out as a trusted and experienced education partner for international students aspiring to pursue medical education in Serbia. With years of expertise in guiding students through the complexities of foreign medical admissions, iExplain Education ensures a seamless admission process from start to finish.",
        "whyChooseUs": [
            "Expert Guidance for International MBBS Admissions: iExplain Education has extensive experience in facilitating admissions for Indian and international students in universities like the University of Nis, ensuring compliance with all academic and regulatory requirements.",
            "Comprehensive Support Services: From helping students gather and verify necessary documents to assisting with visa applications and travel arrangements, iExplain Education offers end-to-end support.",
            "Trusted Network with Recognized Universities: iExplain Education maintains strong partnerships with globally recognized medical universities, ensuring students get verified and legitimate admission opportunities.",
            "Student-Centric Approach: Understanding that each student has unique needs, iExplain Education offers personalized mentorship, addressing academic queries, career guidance, and cultural adaptation.",
            "Transparent and Ethical Services: iExplain Education prides itself on providing transparent, ethical, and trustworthy consultancy services, ensuring applicants are aware of all costs and timelines."
        ],
        "documents": [
            {
                "document": "Completed Application Form",
                "details": "Official application submitted to the University of Nis for MBBS admission."
            },
            {
                "document": "Passport Copy",
                "details": "Valid international passport required for identity verification and visa processing."
            },
            {
                "document": "High School Certificate / 10+2 Marksheet",
                "details": "Proof of completion of secondary education with subjects like Physics, Chemistry, and Biology. Must meet minimum eligibility criteria."
            },
            {
                "document": "NEET Score Card (India)",
                "details": "Mandatory for Indian students seeking recognition by the National Medical Commission (NMC) to pursue MBBS abroad."
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Issued by a registered physician confirming that the student is medically fit to pursue MBBS."
            },
            {
                "document": "Passport-size Photographs",
                "details": "Recent photographs as per university specifications for identification and documentation purposes."
            },
            {
                "document": "Migration / Transfer Certificate",
                "details": "Required if the student is transferring from another institution or country."
            },
            {
                "document": "Letter of Recommendation (optional)",
                "details": "Academic or personal reference supporting the student’s admission application."
            },
            {
                "document": "Bank Statement / Financial Proof",
                "details": "Evidence of sufficient funds to cover tuition fees, accommodation, and living expenses while studying in Serbia."
            }
        ],
        "conclusion": "The University of Nis in Serbia offers a world-class, internationally recognized MBBS program designed for students seeking a high-quality medical education abroad. With a 6-year MBBS curriculum, modern infrastructure, clinical exposure in affiliated hospitals, and a supportive environment for international students, it provides an ideal platform for aspiring doctors to develop both academic and practical skills. The university’s recognition by the World Health Organization (WHO) and the National Medical Commission (NMC) of India ensures that graduates can pursue medical licensure and career opportunities worldwide. With comprehensive student support services, vibrant campus life, and guidance from trusted consultancies like iExplain Education, students can confidently navigate the admission process and transition smoothly into life in Serbia. Choosing the University of Nis means not only gaining a globally recognized MBBS degree but also experiencing personal growth, cultural exposure, and professional development, setting the foundation for a successful medical career anywhere in the world.",
        "faqs": [
            {
                "question": "What is the duration of the MBBS program at University of Nis?",
                "answer": "The MBBS program at the University of Nis is 6 years long, including 5 years of academic and clinical instruction and 1 year of practical internship, leading to a Doctor of Medicine (MD) degree equivalent to MBBS."
            },
            {
                "question": "Is the MBBS degree from University of Nis recognized internationally?",
                "answer": "Yes, the University of Nis is recognized by the World Health Organization (WHO) and the National Medical Commission (NMC) of India, making its MBBS degree valid for medical licensure and practice in many countries."
            },
            {
                "question": "What are the eligibility criteria for Indian students?",
                "answer": "Indian students must have completed 10+2 or equivalent with Physics, Chemistry, and Biology and must have qualified NEET as per NMC guidelines to pursue MBBS in University of Nis."
            },
            {
                "question": "In which language is the MBBS program taught?",
                "answer": "The MBBS program for international students is offered in English, ensuring that students from India and other countries can easily understand and follow the curriculum."
            },
            {
                "question": "What documents are required for admission?",
                "answer": "Key documents include: completed application form, passport copy, 10+2 mark sheets, NEET scorecard (for Indian students), medical fitness certificate, passport-size photographs, financial proof, and migration certificate (if applicable)."
            },
            {
                "question": "Does University of Nis provide hostel facilities?",
                "answer": "Yes, the university offers affordable on-campus hostels and canteen facilities for students, along with guidance for off-campus accommodation if needed."
            },
            {
                "question": "How is student life for international students?",
                "answer": "Student life is vibrant and supportive, with access to modern labs, libraries, sports facilities, clubs, societies, cultural events, and a buddy system to help international students adapt to life in Serbia."
            },
            {
                "question": "Can I practice medicine in India after completing MBBS in Nis?",
                "answer": "Yes, graduates from the University of Nis can appear for the NMC screening test (FMGE/NExT) to practice medicine in India after completing their degree."
            },
            {
                "question": "Why choose iExplain Education for admission in University of Nis?",
                "answer": "iExplain Education provides expert guidance, end-to-end admission support, visa assistance, document verification, and pre-departure counselling, making it easier for students to study MBBS abroad with confidence."
            },
            {
                "question": "How much is the MBBS fee at the University of Nis?",
                "answer": "Tuition fees are approximately €6,000 per year. Hostel fees are around €800 per year. Students should consult iExplain Education for updated and accurate fee details, scholarships, and financial planning advice."
            }
        ]
    },
    "university-of-kragujevac": {
        "title": "University of Kragujevac",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Kragujevac_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Kragujevac_Mobile.webp",
        "intro": {
            "text": "The University of Kragujevac, Serbia, is a prestigious public institution and a well-established center of higher education known for its academic excellence, advanced research facilities, and student-focused learning environment. Founded in 1976, the university has developed into one of the most respected educational institutions in Serbia, offering a wide range of programs across various disciplines, including medicine, engineering, sciences, and humanities. For students aspiring to study MBBS in University of Kragujevac, the university provides a globally recognized medical program through its Faculty of Medical Sciences, which follows European standards of education and emphasizes both theoretical knowledge and practical clinical training. This makes it an ideal destination for international students who want to study medicine in Serbia and gain exposure to modern healthcare systems and advanced medical practices.\n\nThe MBBS in University of Kragujevac is designed to meet international medical education standards, combining classroom learning with hands-on clinical experience in affiliated hospitals and healthcare centers. Students benefit from a well-structured curriculum that covers basic medical sciences in the initial years, followed by clinical subjects and rotations that enhance diagnostic and patient care skills. The program is offered in English for international students, making it highly accessible for those coming from countries like India, where students are increasingly choosing MBBS abroad for better opportunities and global exposure. The university is recognized by international medical organizations such as the World Health Organization (WHO) and follows the guidelines set by the National Medical Commission (NMC) of India, ensuring that graduates are eligible to appear for licensing exams and pursue medical careers in different parts of the world.\n\nApart from strong academics, the University of Kragujevac offers a supportive and student-friendly environment that enhances the overall experience of studying abroad. The campus is equipped with modern laboratories, simulation centers, digital libraries, and research facilities that help students stay updated with the latest advancements in medical science. International students receive guidance and support through dedicated services, including orientation programs, accommodation assistance, and cultural integration activities, making their transition to a new country smooth and comfortable."
        },
        "quickOverview": {
            "University Name": "University of Kragujevac",
            "Location": "Kragujevac, Serbia",
            "Established": "1976",
            "Type": "Public University",
            "Medium of Instruction": "English (for international students)",
            "Popular Course": "MBBS / Doctor of Medicine (MD)",
            "Duration of MBBS": "6 Years (including clinical training)",
            "Recognition": "WHO, NMC (India), Ministry of Education Serbia",
            "Eligibility": "10+2 with PCB, NEET qualification (for Indian students)"
        },
        "benefits": {
            "intro": "Choosing the University of Kragujevac for pursuing MBBS abroad is an excellent decision for students who are looking for a globally recognized medical degree, affordable education, and strong clinical exposure. Here are the key reasons why it has become a preferred destination:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "Recognized by WHO and follows the guidelines of the National Medical Commission (NMC) of India, allowing graduates to appear for licensing exams like FMGE/NExT."
                },
                {
                    "Heading": "Affordable MBBS Abroad Option",
                    "Details": "The cost of studying at the University of Kragujevac is relatively low compared to Western countries or private medical colleges in India."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "Offers an English-taught course specifically for international students, eliminating language barriers for effective learning."
                },
                {
                    "Heading": "Strong Clinical Exposure",
                    "Details": "Students gain hands-on experience through clinical rotations in affiliated hospitals, interacting with real patients and medical procedures."
                },
                {
                    "Heading": "Modern Infrastructure and Facilities",
                    "Details": "Equipped with advanced laboratories, simulation centers, research facilities, and digital libraries with the latest medical technologies."
                },
                {
                    "Heading": "Safe and Student-Friendly Environment",
                    "Details": "Kragujevac offers a safe environment, affordable cost of living, and a welcoming atmosphere for international students."
                },
                {
                    "Heading": "International Exposure and Career Opportunities",
                    "Details": "Beneficial international collaborations and exchange programs open doors to careers and higher education across different countries."
                },
                {
                    "Heading": "Holistic Student Development",
                    "Details": "Opportunities for extracurricular activities, cultural events, sports, and student organizations to develop leadership and teamwork skills."
                }
            ]
        },
        "SyllabusIntro": "The MBBS in University of Kragujevac is a well-structured and comprehensive program designed according to European medical education standards. The 6-year curriculum is integrated with modern teaching methodologies and patient-centered learning.",
        "syllabus": {
            "headers": ["Year", "Subjects"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Histology, Embryology, Medical Biology, Biochemistry, Medical Ethics"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Physiology, Microbiology, Pathology, Immunology, Pharmacology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathophysiology, Forensic Medicine, Internal Medicine (Basics), Surgery (Basics)"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, Radiology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Neurology, Psychiatry, Orthopedics, ENT (Otorhinolaryngology), Ophthalmology, Dermatology"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Clinical Rotations, Internship, Practical Training, Patient Care, Final Examinations"
                }
            ]
        },
        "feesIntro": "The MBBS in University of Kragujevac is known for its affordable and transparent fee structure, making it a popular choice for students who want to study MBBS abroad at a reasonable cost.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€6,000",
                    "hostel": "€1,800 – €3,600",
                    "total": "₹7.1 – 8.8 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS in University of Kragujevac is a 6-year full-time medical program designed according to European education standards, ensuring students develop strong medical knowledge and hands-on skills.",
        "duration": {
            "headers": ["Phase", "Duration", "Details"],
            "table": [
                {
                    "Phase": "Pre-Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Basic medical sciences such as Anatomy, Physiology, Biochemistry"
                },
                {
                    "Phase": "Para-Clinical Phase",
                    "Duration": "1 Year",
                    "Details": "Subjects like Pathology, Pharmacology, Microbiology"
                },
                {
                    "Phase": "Clinical Phase",
                    "Duration": "2 Years",
                    "Details": "Core clinical subjects with hospital exposure"
                },
                {
                    "Phase": "Internship / Practical Training",
                    "Duration": "1 Year",
                    "Details": "Hands-on training, patient care, and final assessments"
                }
            ]
        },
        "studentSupport": "The University of Kragujevac offers a well-developed and student-oriented support system that ensures academic success, personal well-being, and professional growth for both local and international students. One of the key highlights is the Career Development and Student Counselling Center, which helps students with career planning, CV building, interview preparation, and access to internships, scholarships, and exchange programs. In addition to career services, the university has a dedicated Student Affairs Service that manages essential academic processes such as enrollment, exam registration, and certification. For academic development, students benefit from structured tutoring and mentoring support. The university also places strong emphasis on student well-being through its psychological and peer support services, where trained mentors provide emotional and social support. Special support is available for international students to ensure inclusivity and a smooth transition into university life. Furthermore, active student engagement is encouraged through organizations like the Student Parliament and sports associations, allowing students to participate in extracurricular activities and leadership roles.",
        "recognition": "The University of Kragujevac, Serbia, is a well-established and globally connected institution known for its strong academic affiliations and international recognition. The university is officially affiliated with the Ministry of Education, Science and Technological Development of Serbia, ensuring that all academic programs meet national education standards. It is also a member of prominent international organizations such as the European University Association (EUA) and participates in programs like Erasmus+. The university is officially recognized and accredited by the Serbian government, making it a trusted institution for higher education. It follows European standards and is recognized at both national and international levels, allowing students who pursue MBBS in University of Kragujevac to appear for global licensing exams and continue their medical careers worldwide. The university has achieved significant milestones, being ranked among the top global scientists in research and innovation, reflecting its commitment to excellence with over 15,000 students and multiple faculties.",
        "hostelFacilities": "The university ensures a comfortable living experience by offering affordable accommodation, hostel facilities, and student canteens, making it convenient for international students to manage their daily life. The city of Kragujevac itself is known for its safe surroundings, affordable cost of living, and student-friendly atmosphere, providing access to essential facilities for study and relaxation.",
        "studentLife": "Student life at the University of Kragujevac is dynamic, engaging, and well-balanced. The university provides a welcoming and multicultural environment where international students can easily adapt. The campus is equipped with modern lecture halls, advanced laboratories, simulation centers, and well-stocked libraries. Students pursuing MBBS benefit from hands-on clinical exposure in affiliated hospitals, gaining real-life experience in patient care and diagnostics. Beyond academics, the university promotes a vibrant life through various clubs, societies, and student organizations focused on cultural activities, sports, volunteering, and leadership development. Students participate in festivals, international events, and academic conferences, which enhance their experience and help build global networks. Organizations provide platforms for collaboration and teamwork, making it easier to connect with peers from different backgrounds.",
        "whyChooseUsIntro": "Choosing the right consultancy is a crucial step for students planning to study MBBS in University of Kragujevac. iExplain Education is a trusted and experienced partner that helps students achieve their dream with ease and confidence.",
        "whyChooseUs": [
            "Expert Guidance and Counseling – Personalized counseling based on academic profile, budget, and goals to choose the right path for MBBS abroad.",
            "Hassle-Free Admission Process – End-to-end support for application, documentation, and university communication to avoid errors and delays.",
            "Complete Documentation Support – Step-by-step assistance in preparing and verifying all required documents including certificates and medical records.",
            "Visa Assistance and Travel Support – Complete support for visa application, interview preparation, travel arrangements, and airport pickup.",
            "Pre-Departure and Post-Arrival Support – Detailed briefings before leaving and continued support after reaching Kragujevac, including help with accommodation.",
            "Trusted and Transparent Services – A transparent process with no hidden charges, ensuring students and parents are fully informed.",
            "Focus on Student Success – Committed to helping students build a strong medical career through continuous support and mentorship."
        ],
        "documents": [
            {
                "document": "Application Form",
                "details": "Duly filled application form for admission to the University of Kragujevac"
            },
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic academic qualification"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Required with Physics, Chemistry, and Biology subjects for MBBS eligibility"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Valid Passport",
                "details": "Identity proof with minimum validity (generally 18 months or more)"
            },
            {
                "document": "Birth Certificate",
                "details": "Proof of date of birth (translated if not in English)"
            },
            {
                "document": "Medical Fitness Certificate",
                "details": "Confirms that the student is medically fit for studies abroad"
            },
            {
                "document": "HIV Test Report",
                "details": "Required as part of medical screening for visa and admission"
            },
            {
                "document": "Admission Letter",
                "details": "Issued by the university after document verification"
            },
            {
                "document": "Invitation Letter",
                "details": "Required for applying for a student visa in Serbia"
            },
            {
                "document": "Document Attestation & Legalization",
                "details": "Documents must be attested by relevant authorities and legalized by the Serbian Embassy"
            }
        ],
        "conclusion": "The University of Kragujevac stands out as a reliable and globally recognized destination for students aspiring to study MBBS abroad. With its well-structured 6-year medical program, modern infrastructure, and strong emphasis on practical clinical training, it offers an excellent platform for building a successful medical career. Students benefit from affordable tuition fees, international exposure, and a curriculum aligned with European standards. In addition to academic excellence, the university provides a supportive and student-friendly environment, making it easier for international students to adapt and thrive. With proper guidance from trusted consultancies like iExplain Education, the admission process becomes smooth and hassle-free, turning the dream of becoming a doctor into reality.",
        "faqs": [
            {
                "question": "What is the duration of MBBS at University of Kragujevac?",
                "answer": "The MBBS in University of Kragujevac is a 6-year program, which includes 5 years of academic and clinical study followed by 1 year of internship or practical training."
            },
            {
                "question": "Is the MBBS degree from University of Kragujevac recognized?",
                "answer": "Yes, the university is recognized by international medical bodies such as the World Health Organization (WHO) and follows National Medical Commission (NMC) guidelines, making it valid for global medical careers."
            },
            {
                "question": "What are the eligibility criteria for MBBS admission?",
                "answer": "Students must have completed 10+2 with Physics, Chemistry, and Biology and must qualify NEET (for Indian students) to apply for MBBS in University of Kragujevac."
            },
            {
                "question": "In which language is the MBBS program taught?",
                "answer": "The MBBS program is available in English for international students, making it easier for them to study and understand medical concepts."
            },
            {
                "question": "Are hostel facilities available for international students?",
                "answer": "Yes, the university provides affordable hostel accommodation along with canteen facilities and support for private housing if required."
            },
            {
                "question": "Can I practice in India after completing MBBS from Kragujevac?",
                "answer": "Yes, Indian students can practice in India after clearing the FMGE/NExT exam as per NMC regulations after completing their MBBS in University of Kragujevac."
            },
            {
                "question": "Is NEET mandatory for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS abroad, including at the University of Kragujevac."
            },
            {
                "question": "How is student life at University of Kragujevac?",
                "answer": "Student life is vibrant and supportive, with access to modern facilities, clinical training, cultural events, sports, and student organizations, providing a balanced academic and social experience."
            },
            {
                "question": "Why choose University of Kragujevac for MBBS?",
                "answer": "The university offers affordable fees, global recognition, English-medium education, strong clinical exposure, and a safe environment, making it a great choice for students who want to study medicine in Serbia."
            }
        ]
    },
    "carol-davila-university": {
        "title": "Carol Davila University of Medicine and Pharmacy",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Carol_Davila_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Carol_Davila_Mobile.webp",
        "intro": {
            "text": "The Carol Davila University of Medicine and Pharmacy is one of the oldest and most prestigious medical universities in Europe, located in Bucharest, Romania. Established in 1857 by the famous physician Carol Davila, the university has a rich legacy of excellence in medical education, research, and healthcare training. Over the years, it has become a top destination for international students seeking MBBS in abroad and especially MBBS in Romania, due to its high academic standards and global recognition.\n\nFor students planning to study MBBS abroad, the Carol Davila University stands out as a preferred choice because of its modern teaching methods, advanced laboratories, and extensive clinical exposure. The university is affiliated with numerous top hospitals in Bucharest, allowing students to gain hands-on practical experience during their course. This practical approach makes it highly attractive for Indian and international students who are looking for quality medical education at an affordable cost compared to private medical colleges.\n\nWhen it comes to pursuing MBBS in Romania, this university offers globally recognized degrees that are accepted by major medical councils, making graduates eligible to practice medicine in various countries after clearing required licensing exams. The university follows a European-standard curriculum, focusing on both theoretical knowledge and clinical skills, which is a major advantage for students aiming for an international medical career. Another major reason why students choose this university for MBBS abroad is its multicultural environment. The campus hosts students from different parts of the world, providing global exposure and a diverse learning atmosphere. The medium of instruction for international programs is English, which makes it easier for Indian students to adapt without facing language barriers."
        },
        "quickOverview": {
            "University Name": "Carol Davila University of Medicine and Pharmacy",
            "Location": "Bucharest, Romania",
            "Established": "1857",
            "Type": "Public University",
            "Medium of Instruction": "English & Romanian",
            "Popular Course": "MBBS (General Medicine)",
            "Duration of MBBS": "6 Years",
            "Recognition": "WHO, NMC, ECFMG, European Union",
            "Affiliated Hospitals": "20+ Teaching Hospitals in Bucharest",
            "Eligibility": "12th with PCB (Physics, Chemistry, Biology), NEET qualification (for Indian students)"
        },
        "benefits": {
            "intro": "Choosing the right university is crucial for students planning to pursue MBBS in abroad, and the Carol Davila University of Medicine and Pharmacy stands out as one of the best options for MBBS in Romania due to its academic excellence, global recognition, and strong clinical training:",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "The university offers a worldwide recognized MBBS degree, making it an excellent choice for students who want to build an international medical career."
                },
                {
                    "Heading": "Rich Legacy & Academic Excellence",
                    "Details": "Established in 1857, the university has over 150 years of experience in medical education with a strong academic foundation."
                },
                {
                    "Heading": "Top Location in Europe",
                    "Details": "Located in Bucharest, the capital city, students benefit from modern lifestyle and advanced healthcare infrastructure."
                },
                {
                    "Heading": "Advanced Clinical Training",
                    "Details": "Affiliated with 20+ teaching hospitals where students gain real-time clinical exposure essential for practical skills."
                },
                {
                    "Heading": "Affordable MBBS Abroad Option",
                    "Details": "More cost-effective compared to private medical colleges in India, making it a popular choice for low-cost MBBS abroad."
                },
                {
                    "Heading": "English Medium Education",
                    "Details": "The MBBS program is available in English, which eliminates language barriers for international students."
                },
                {
                    "Heading": "No Donation or Capitation Fees",
                    "Details": "Admission is based on merit with no donation or hidden charges, ensuring a transparent process."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (General Medicine) program at Carol Davila University of Medicine and Pharmacy is a 6-year course designed according to European medical education standards. The curriculum is divided into pre-clinical, para-clinical, and clinical phases.",
        "syllabus": {
            "headers": ["Year", "Subjects / Topics Covered", "Focus Area"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects / Topics Covered": "Anatomy, Histology, Physiology, Biochemistry, Biophysics, Medical Psychology, Biostatistics",
                    "Focus Area": "Basic medical sciences & human body fundamentals"
                },
                {
                    "Year": "2nd Year",
                    "Subjects / Topics Covered": "Pharmacology, Pathology, Microbiology, Medical Semiology, Primary Health Care",
                    "Focus Area": "Disease understanding & diagnosis basics"
                },
                {
                    "Year": "3rd Year",
                    "Subjects / Topics Covered": "Advanced Pathology, Advanced Pharmacology, Clinical Basics, Pediatrics (Intro)",
                    "Focus Area": "Transition from theory to clinical learning"
                },
                {
                    "Year": "4th Year",
                    "Subjects / Topics Covered": "General Surgery, Neurology, Oncology, Primary Care Medicine",
                    "Focus Area": "Core clinical subjects & hospital exposure"
                },
                {
                    "Year": "5th Year",
                    "Subjects / Topics Covered": "Internal Medicine, Obstetrics & Gynecology, ENT, Cardiology, Psychiatry, Emergency Medicine",
                    "Focus Area": "Advanced clinical training & specialization exposure"
                },
                {
                    "Year": "6th Year",
                    "Subjects / Topics Covered": "Internship: Internal Medicine, Surgery, Pediatrics, OB-GYN, Emergency, Community Medicine",
                    "Focus Area": "Full-time clinical rotations & practical patient care"
                }
            ]
        },
        "feesIntro": "The Carol Davila University of Medicine and Pharmacy is considered one of the premium options for MBBS in Romania. The fee structure is relatively affordable compared to private Indian medical colleges.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€10,000",
                    "hostel": "€3,300 (Admin + Application)",
                    "total": "₹11–12 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (General Medicine) program at Carol Davila University of Medicine and Pharmacy has a total duration of 6 years, following the European medical education system.",
        "duration": {
            "headers": ["Particulars", "Duration"],
            "table": [
                {
                    "Particulars": "Total Course Duration",
                    "Duration": "6 Years"
                },
                {
                    "Particulars": "Academic Study (Pre-Clinical + Clinical)",
                    "Duration": "5 Years"
                },
                {
                    "Particulars": "Internship / Clinical Rotations",
                    "Duration": "1 Year"
                },
                {
                    "Particulars": "Total Semesters",
                    "Duration": "12 Semesters"
                }
            ]
        },
        "studentSupport": "The Carol Davila University of Medicine and Pharmacy provides a wide range of student support services to ensure academic success, personal well-being, and overall development. The university offers strong academic support through its central library and digital resources, including access to thousands of medical books and journals. The Central Library provides access to over 500,000+ volumes along with platforms like ScienceDirect and Springer. IT & Digital Support is available via a modern computer center and internet-enabled campus. For accommodation, students are provided with on-campus hostel facilities managed by the university administration. The university also offers healthcare support services, including medical consultations and vaccinations. Additionally, active student associations and societies organize academic events, workshops, and extracurricular activities to support student-led initiatives.",
        "recognition": "The Carol Davila University of Medicine and Pharmacy is one of the most prestigious institutions for MBBS abroad, known for its strong global affiliations and achievements. It is a member of the International Association of Universities and the European University Association. The university collaborates with international research institutions and multiple teaching hospitals in Bucharest. Recognized as an advanced research and education university by the Romanian Ministry of Education, its degrees are widely accepted across Europe and the globe. It is listed in international rankings like Times Higher Education and was ranked 1st among universities in Romania in the 2026 SCImago Institutions Rankings. Notably, the university produced Nobel Prize winner George Emil Palade and is known for scientific contributions related to insulin discovery.",
        "hostelFacilities": "Students are provided with on-campus hostel facilities, and accommodation is managed by the university administration. International students are guided through the housing process, ensuring a safe and comfortable stay. Living in Bucharest offers a unique experience with affordable and well-maintained accommodation options, including both student dormitories and private housing.",
        "studentLife": "Student life at the Carol Davila University of Medicine and Pharmacy is highly enriching, dynamic, and globally oriented. Situated in Bucharest, the university offers a blend of academic excellence and vibrant campus life. Students engage in a rigorous schedule of lectures, laboratory sessions, and extensive clinical training in affiliated hospitals. The multicultural environment welcomes students from different countries, enhancing cultural exchange. Beyond academics, students participate in various student organizations, medical societies, and cultural clubs. The university provides modern libraries, digital platforms, sports complexes, and recreational areas. Living in Bucharest allows students to enjoy cafes, cultural festivals, museums, and a safe, student-friendly environment, ensuring complete personal and professional development.",
        "whyChooseUsIntro": "Choosing the right consultancy is as important as choosing the right university for MBBS in abroad. iExplain Education is a trusted name for students planning MBBS in Romania, especially for admission to Carol Davila University of Medicine and Pharmacy.",
        "whyChooseUs": [
            "Expert Guidance & Counseling – Free and personalized counseling helping students understand university selection, eligibility, and career planning.",
            "Complete Admission Assistance – End-to-end support including shortlisting, application process, documentation handling, and admission confirmation.",
            "Visa & Travel Support – Assistance with student visa application, forex guidance, and travel arrangements to reduce stress.",
            "Pre & Post-Departure Support – Providing guidance before leaving and on-arrival support in Romania, including help with accommodation.",
            "Trusted & Student-Centric Approach – Focus on transparency and satisfaction with no hidden charges and genuine university options.",
            "Wide Network of Universities – Access to multiple globally recognized universities ensuring students get the best college according to budget."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of basic education qualification"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry, and Biology subjects"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students as per NMC guidelines"
            },
            {
                "document": "Valid Passport",
                "details": "Identity proof with minimum required validity"
            },
            {
                "document": "Birth Certificate",
                "details": "Must be translated into English/Romanian if required"
            },
            {
                "document": "Medical Certificate",
                "details": "General health and fitness report for study abroad"
            },
            {
                "document": "Admission Letter",
                "details": "Official letter issued by the university"
            },
            {
                "document": "Police Clearance Certificate (PCC)",
                "details": "Required for the visa application process"
            },
            {
                "document": "Proof of Residence",
                "details": "Address verification as per requirements"
            },
            {
                "document": "Document Translation & Apostille",
                "details": "Mandatory legalization of documents by relevant authorities"
            }
        ],
        "conclusion": "In conclusion, the Carol Davila University of Medicine and Pharmacy stands as one of the top choices for students planning MBBS in abroad and especially MBBS in Romania. With its long-standing legacy of excellence, globally recognized medical degree, and strong emphasis on clinical training, the university offers a perfect combination of quality education and practical exposure. Its modern infrastructure, experienced faculty, and multicultural environment further enhance the overall learning experience. Additionally, the affordable fee structure and English-medium programs make it a highly attractive destination. Choosing Carol Davila University ensures a solid foundation for a successful medical career with guidance from trusted partners like iExplain Education.",
        "faqs": [
            {
                "question": "Where is Carol Davila University of Medicine and Pharmacy located?",
                "answer": "The Carol Davila University of Medicine and Pharmacy is located in Bucharest, the capital city of Romania."
            },
            {
                "question": "What is the duration of MBBS at this university?",
                "answer": "The MBBS (General Medicine) program duration is 6 years, including academic study and clinical internship."
            },
            {
                "question": "Is the MBBS degree from this university recognized globally?",
                "answer": "Yes, the degree is globally recognized, allowing students to pursue medical careers internationally after clearing licensing exams."
            },
            {
                "question": "What is the medium of instruction for MBBS?",
                "answer": "The MBBS program is available in English and Romanian, making it suitable for international students."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who wish to pursue MBBS in abroad."
            },
            {
                "question": "What is the eligibility criteria for MBBS admission?",
                "answer": "Students must have completed 12th with Physics, Chemistry, and Biology (PCB) and meet the minimum required marks."
            },
            {
                "question": "What is the approximate fee for MBBS?",
                "answer": "The annual tuition fee is approximately €7,500 – €10,000, making it an affordable option for MBBS in Romania."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides student dormitories and accommodation support for international students."
            }
        ]
    },
    "grigore-t-popa-university": {
        "title": "Grigore T. Popa University of Medicine and Pharmacy",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Grigore_Popa_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Grigore_Popa_Mobile.webp",
        "intro": {
            "text": "The Grigore T. Popa University of Medicine and Pharmacy is one of the leading and most respected medical universities in Romania, located in Iași, Romania, which is one of the oldest and most important academic cities in the country. It is a top preference among international students who are planning to pursue MBBS in abroad and especially MBBS in Romania because of its strong academic reputation, European-standard medical education, and globally recognized degree.\n\nThe university is named after the famous Romanian physiologist Grigore T. Popa, who made significant contributions to medical science. Established as a public medical university, it has a long tradition of excellence in medical education, research, and healthcare training, making it one of the most trusted institutions in Central and Eastern Europe. Over the years, it has developed into a modern university that combines traditional medical knowledge with advanced scientific research and innovative teaching methods.\n\nFor students planning MBBS in Romania, the university offers a comprehensive 6-year General Medicine program designed according to European medical education standards. The course is divided into pre-clinical, para-clinical, and clinical stages, ensuring a balanced focus on theoretical knowledge and practical skills. Students receive extensive hands-on training in well-equipped university hospitals and clinics, which helps them develop strong clinical competence required for a successful medical career.\n\nOne of the key highlights of this university is its English-medium MBBS program, which makes it highly suitable for international students, especially those coming from India and other non-European countries. This eliminates language barriers and allows students to focus entirely on their medical studies. The university also maintains a diverse and multicultural environment, with students from various countries, providing excellent global exposure and cultural exchange opportunities. The Grigore T. Popa University is also known for its modern infrastructure, advanced laboratories, research centers, and experienced faculty members, who are actively involved in medical research and innovation. The institution collaborates with several international universities and medical organizations, which further enhances its global recognition and academic standards."
        },
        "quickOverview": {
            "University Name": "Grigore T. Popa University of Medicine and Pharmacy",
            "Location": "Iași, Romania",
            "Type": "Public Medical University",
            "Established": "1879 (medical education roots in Iași)",
            "Named After": "Grigore T. Popa",
            "Popular Course": "MBBS (General Medicine)",
            "Course Duration": "6 Years (including internship)",
            "Medium of Instruction": "English & Romanian",
            "Recognition": "WHO, NMC, ECFMG, European medical bodies",
            "Admission Type": "Based on academic eligibility (no major entrance exam for international students)",
            "Eligibility Criteria": "12th with PCB (Physics, Chemistry, Biology)"
        },
        "benefits": {
            "intro": "The Grigore T. Popa University of Medicine and Pharmacy, located in Iași and named after Grigore T. Popa, is one of the most reputed medical universities in Romania and a popular choice for students planning MBBS in abroad and especially MBBS in Romania. The university is well known for its strong academic heritage, European-standard medical education, and high-quality clinical training, making it a trusted destination for international medical aspirants.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "The university offers a highly respected MBBS (General Medicine) degree, making it a strong option for students planning MBBS in abroad. The degree is accepted in many countries after clearing required licensing exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "Strong Academic Reputation & Legacy",
                    "Details": "Located in Iași, the university is one of the oldest and most reputed medical institutions in Romania. It is named after Grigore T. Popa, and is known for its long-standing tradition of excellence in medical education and research."
                },
                {
                    "Heading": "European Standard Medical Education",
                    "Details": "The university follows a European medical curriculum, focusing on conceptual clarity, practical learning, and clinical exposure. This makes it a preferred choice for students planning MBBS in Romania."
                },
                {
                    "Heading": "Strong Clinical Training & Hospital Exposure",
                    "Details": "Students get hands-on training in well-equipped hospitals and clinics, allowing them to develop real-time medical skills and gain confidence in patient care from early stages."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The MBBS program is offered in English for international students, making it easier for Indian and other foreign students to study without language barriers."
                },
                {
                    "Heading": "Affordable MBBS Abroad Option",
                    "Details": "Compared to many private medical universities globally, the cost of studying MBBS here is relatively affordable, making it a good choice for students seeking MBBS in abroad."
                }
            ]
        },
        "SyllabusIntro": "The Grigore T. Popa University of Medicine and Pharmacy, located in Iași, follows a 6-year MBBS (General Medicine) program designed according to European medical education standards. The syllabus is structured in a step-by-step manner, starting from basic medical sciences and gradually moving toward advanced clinical training and internship, making it a strong option for students planning MBBS in abroad and MBBS in Romania.",
        "syllabus": {
            "headers": ["Year", "Subjects", "Focus Area"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Histology, Biochemistry, Biophysics, Medical Biology, Medical Chemistry, Informatics",
                    "Focus Area": "Basic medical foundation & human body structure"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Physiology, Microbiology, Immunology, Pathology, Pharmacology, Genetics, Pathophysiology",
                    "Focus Area": "Understanding body functions, diseases & medicines"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "General Semiology, Internal Medicine (Basics), Surgery (Basics), Pediatrics, OBGYN (Intro), Public Health",
                    "Focus Area": "Introduction to clinical medicine"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "Internal Medicine, Surgery, Orthopedics, Neurology, Dermatology, Radiology, Oncology, Anesthesia",
                    "Focus Area": "Core clinical subjects & hospital exposure"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Cardiology, Psychiatry, ENT, Ophthalmology, Pediatrics (Advanced), OBGYN (Advanced), Infectious Diseases",
                    "Focus Area": "Advanced clinical training & specialization"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Internship: Internal Medicine, Surgery, Pediatrics, Emergency Medicine, Family Medicine, Forensic Medicine",
                    "Focus Area": "Full-time clinical rotations & hands-on patient care"
                }
            ]
        },
        "feesIntro": "The Grigore T. Popa University of Medicine and Pharmacy, located in Iași, Romania, offers an affordable MBBS (General Medicine) program for international students planning MBBS in abroad and especially MBBS in Romania. The fee structure is designed as per European medical education standards and varies slightly depending on the course and medium of instruction.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€8,000 – €9,000",
                    "hostel": "-",
                    "total": "₹7 – ₹8.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (General Medicine) program at Grigore T. Popa University of Medicine and Pharmacy, located in Iași, follows the standard European medical education structure and is designed for students planning MBBS in abroad and especially MBBS in Romania.",
        "duration": {
            "headers": ["Particulars", "Duration"],
            "table": [
                {
                    "Particulars": "Total Course Duration",
                    "Duration": "6 Years"
                },
                {
                    "Particulars": "Academic Study (Pre-Clinical + Clinical)",
                    "Duration": "5 Years"
                },
                {
                    "Particulars": "Internship / Clinical Rotations",
                    "Duration": "1 Year"
                },
                {
                    "Particulars": "Total Semesters",
                    "Duration": "12 Semesters"
                }
            ]
        },
        "studentSupport": "The Grigore T. Popa University of Medicine and Pharmacy, located in Iași, provides strong student support services to ensure that international students pursuing MBBS in abroad and especially MBBS in Romania can study comfortably, stay safe, and perform well academically. The university offers academic guidance through faculty mentors, tutoring sessions, and departmental consultations. A dedicated counselling service is available for students who face stress, anxiety, or academic pressure. The university provides support for on-campus dormitory accommodation, including assistance with room allocation and housing-related queries. The administration office supports international students with admission documents, residence permits, registration, and academic records. Students get access to libraries, study halls, cafeterias, and transport facilities. The university encourages participation in student associations, cultural events, workshops, and medical conferences. Basic healthcare services and medical assistance are available for students in case of illness or emergencies, ensuring a safe living environment during their studies.",
        "recognition": "The Grigore T. Popa University of Medicine and Pharmacy, located in Iași, Romania, is one of the most prestigious medical universities in Europe. It is a member of European academic networks and collaborates with several European universities for student exchange programs. Partnered with multiple hospitals and clinical centers for training, it uses the European Credit Transfer and Accumulation System (ECTS) for academic mobility. It is recognized by the Ministry of Education, Romania as an advanced research and education university and is listed in the World Directory of Medical Schools (WDOMS). It is recognized by global medical bodies such as NMC (India), WHO, ECFMG (USA), and GMC (UK) eligibility standards. The university is one of the oldest in Romania (est. 1879), ranked leading for research output in fields like pharmacology and surgery, and known for producing highly skilled doctors working globally in Europe and the USA.",
        "hostelFacilities": "The university provides support for on-campus dormitory accommodation, including assistance with room allocation and housing-related queries. Hostel facilities are structured and affordable, helping international students settle easily. Living in Iași adds great value; the city is known for being safe, affordable, and student-friendly, with parks, cafes, and cultural events providing a lively social atmosphere.",
        "studentLife": "Student life at the Grigore T. Popa University of Medicine and Pharmacy is vibrant, multicultural, and academically intensive. The university hosts more than 10,000 students from over 60 countries. Academically, students experience a rigorous curriculum with lectures, laboratory work, and hospital-based clinical training from early years. Beyond academics, life is enriched through various student organizations, cultural clubs, sports activities, and international associations. These groups organize workshops, medical conferences, and social events, allowing students to network and develop leadership skills. Iași offers a blend of historical charm and modern student life, ensuring a balanced lifestyle between studies and relaxation.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for students planning MBBS in abroad and especially MBBS in Romania, because the admission process can be complex. iExplain Education helps students apply smoothly to top universities like the Grigore T. Popa University of Medicine and Pharmacy with proper guidance and support.",
        "whyChooseUs": [
            "Expert Career Counseling – Personalised counselling to help students choose the right university based on their marks, budget, and career goals.",
            "Complete Admission Guidance – Assistance in university selection, application submission, eligibility checking, and admission confirmation.",
            "Documentation Support – Helping prepare important documents such as passport, academic certificates, NEET scorecard, and visa paperwork.",
            "Visa & Travel Assistance – Supporting students with student visa processing, travel planning, and pre-departure guidance.",
            "University Selection Support – Guiding students in choosing the best medical universities in countries like Romania.",
            "Pre & Post Admission Support – Including hostel guidance, arrival support, and local adjustment help.",
            "Student-Friendly Approach – Focus on transparent and student-centered guidance."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of secondary education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry & Biology (PCB)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Valid Passport",
                "details": "Must have sufficient validity"
            },
            {
                "document": "Birth Certificate",
                "details": "Must be in English or translated & notarized"
            },
            {
                "document": "Medical Certificate",
                "details": "General health check-up report"
            },
            {
                "document": "Application Form",
                "details": "Filled and signed university application"
            },
            {
                "document": "Admission/Invitation Letter",
                "details": "Issued by the university after selection"
            },
            {
                "document": "Migration Certificate",
                "details": "From previous educational board/institution"
            }
        ],
        "conclusion": "In overall conclusion, the Grigore T. Popa University of Medicine and Pharmacy, located in Iași, is one of the most reputed and trusted medical universities in Europe for students planning MBBS in abroad and especially MBBS in Romania. With its long academic legacy, strong European-standard curriculum, and excellent clinical training system, the university provides a complete platform for students to become skilled and successful doctors. The university ensures high-quality education through experienced faculty, modern laboratories, and strong hospital affiliations. Its affordable fee structure, English-medium program, and multicultural environment make it a preferred choice globally.",
        "faqs": [
            {
                "question": "Where is Grigore T. Popa University located?",
                "answer": "It is located in Iași, one of the major educational cities in Romania."
            },
            {
                "question": "Is Grigore T. Popa University good for MBBS in abroad?",
                "answer": "Yes, it is a well-known and reputed medical university in Europe, making it a strong option for students planning MBBS in abroad and especially MBBS in Romania."
            },
            {
                "question": "What is the duration of MBBS at this university?",
                "answer": "The MBBS (General Medicine) program duration is 6 years, including academic studies and internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students applying for MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS program is offered in English and Romanian, making it suitable for international students."
            },
            {
                "question": "What is the eligibility for MBBS admission?",
                "answer": "Students must have completed 12th with Physics, Chemistry, and Biology (PCB) with required minimum marks."
            },
            {
                "question": "What is the approximate fee for MBBS?",
                "answer": "The tuition fee is approximately €8,000 – €9,000 per year, depending on the program and intake."
            },
            {
                "question": "Is the university recognized internationally?",
                "answer": "Yes, the university is recognized and its degree is accepted in many countries after clearing licensing exams."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides hostel and accommodation support for international students."
            },
            {
                "question": "Is Romania safe for students?",
                "answer": "Yes, Romania is considered safe and student-friendly for international education."
            }
        ]
    },
    "iuliu-hatieganu-university": {
        "title": "Iuliu Hațieganu University of Medicine and Pharmacy",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Iuliu_Hatieganu_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Iuliu_Hatieganu_Mobile.webp",
        "intro": {
            "text": "The Iuliu Hațieganu University of Medicine and Pharmacy is one of the most prestigious and oldest medical universities in Romania, located in Cluj-Napoca, Romania. It is a top destination for students planning to pursue MBBS in abroad and especially MBBS in Romania, due to its high academic standards, modern medical training, and strong international reputation.\n\nThe university is named after the famous Romanian physician Iuliu Hațieganu, who contributed significantly to the development of medical education in Romania. Established in 1919, the university has a long history of excellence in medical education, research, and healthcare services. For students aiming for MBBS in Romania, the university offers a 6-year General Medicine program that follows the European medical education system. The course includes both theoretical studies and practical clinical training in well-equipped university hospitals, ensuring strong hands-on experience for students.\n\nThe university is also known for its modern infrastructure, advanced laboratories, experienced faculty, and strong research output, making it one of the top choices for international medical aspirants. It offers English-medium programs for foreign students, which makes it easier for Indian and other international students to study without language barriers. Iuliu Hațieganu University of Medicine and Pharmacy is considered a top-ranked medical university in Romania, offering excellent education, global exposure, and strong career opportunities for students pursuing MBBS in abroad."
        },
        "quickOverview": {
            "University Name": "Iuliu Hațieganu University of Medicine and Pharmacy",
            "Location": "Cluj-Napoca",
            "Established": "1919",
            "Type": "Public Medical University",
            "Popular Course": "MBBS (General Medicine)",
            "Course Duration": "6 Years (including internship)",
            "Medium of Instruction": "English & Romanian",
            "Recognition": "WHO, NMC, ECFMG, European medical bodies",
            "Admission Type": "Based on academic eligibility (no major entrance exam for international students)",
            "Affiliated Hospitals": "Multiple teaching hospitals in Cluj-Napoca"
        },
        "benefits": {
            "intro": "The Iuliu Hațieganu University of Medicine and Pharmacy, located in Cluj-Napoca, is one of the most prestigious medical universities in Romania and a top choice for students planning MBBS in abroad and especially MBBS in Romania. It is known for its strong academic tradition, modern medical training, and excellent international reputation.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "The university offers a worldwide accepted MBBS (General Medicine) degree. After completing the course, graduates can appear for major international licensing exams such as FMGE/NExT (India), USMLE (USA), and PLAB (UK)."
                },
                {
                    "Heading": "Strong Academic Reputation & Legacy",
                    "Details": "Established in 1919 and located in Cluj-Napoca, the university has a long history of excellence. It is named after Iuliu Hațieganu, a respected figure in medical science."
                },
                {
                    "Heading": "European Standard Medical Curriculum",
                    "Details": "The university follows a European medical education system designed to provide a perfect balance between theoretical knowledge and practical training, updated according to global advancements."
                },
                {
                    "Heading": "Strong Clinical Exposure & Hospital Training",
                    "Details": "Students receive extensive hands-on training in well-equipped teaching hospitals and clinics, observing and participating in real patient care under supervision."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The MBBS program is available in English for international students, ensuring better understanding of complex medical subjects without language barriers."
                },
                {
                    "Heading": "Affordable MBBS Abroad Option",
                    "Details": "Compared to private medical universities in many countries, studying here is more affordable and cost-effective while maintaining high-quality European standards."
                },
                {
                    "Heading": "Advanced Infrastructure & Research Facilities",
                    "Details": "The university provides modern laboratories, simulation centers, research labs, and digital learning resources, encouraging participation in medical innovation."
                },
                {
                    "Heading": "Multicultural Student Environment",
                    "Details": "Hosts students from different countries, creating a diverse international learning environment that helps improve communication skills and global professional networks."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (General Medicine) program at Iuliu Hațieganu University of Medicine and Pharmacy is a 6-year course divided into pre-clinical and clinical phases, focusing on both theoretical knowledge and practical training.",
        "syllabus": {
            "headers": ["Year", "Subjects"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Histology, Biophysics, Medical Chemistry, Medical Biology, Cell Biology, Basics of Medicine"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Biochemistry, Physiology, Microbiology, Immunology, Medical Informatics"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathology, Pharmacology, Parasitology, Medical Psychology, Psychiatry, Medical Sociology"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "Internal Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology (Advanced Clinical Training)"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Emergency Medicine, Radiology, Anesthesia, Family Medicine, Forensic Medicine + Internship"
                }
            ]
        },
        "feesIntro": "The Iuliu Hațieganu University of Medicine and Pharmacy, located in Cluj-Napoca, offers a well-structured and affordable fee system for students planning MBBS in abroad and especially MBBS in Romania.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€10,000",
                    "hostel": "-",
                    "total": "₹9 – ₹9.5 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€8,500",
                    "hostel": "-",
                    "total": "₹7.5 – ₹8 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€7,000 – €8,500",
                    "hostel": "-",
                    "total": "₹6 – ₹7.5 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€7,000 – €8,500",
                    "hostel": "-",
                    "total": "₹6 – ₹7.5 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€7,000 – €8,500",
                    "hostel": "-",
                    "total": "₹6 – ₹7.5 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€7,000 – €8,500",
                    "hostel": "-",
                    "total": "₹6 – ₹7.5 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (General Medicine) program at Iuliu Hațieganu University of Medicine and Pharmacy, located in Cluj-Napoca, follows a well-structured 6-year European medical education system.",
        "duration": {
            "headers": ["Particulars", "Duration"],
            "table": [
                {
                    "Particulars": "Total Course Duration",
                    "Duration": "6 Years"
                },
                {
                    "Particulars": "Academic Study (Pre-Clinical + Clinical)",
                    "Duration": "5 Years"
                },
                {
                    "Particulars": "Internship / Clinical Rotations",
                    "Duration": "1 Year"
                },
                {
                    "Particulars": "Total Semesters",
                    "Duration": "12 Semesters"
                }
            ]
        },
        "studentSupport": "The Iuliu Hațieganu University of Medicine and Pharmacy, located in Cluj-Napoca, offers a well-developed and student-friendly support system. The university provides strong academic support through experienced faculty members, mentorship programs, and regular doubt-solving sessions. In addition, student counselling and psychological support services are available to help students manage stress and academic pressure. The institution also provides assistance with hostel and accommodation, helping students find safe and affordable living options. On-campus facilities, libraries, and laboratories are easily accessible. For international students, dedicated administrative and international support services help with admission procedures, visa guidance, residence permits, and documentation. Students can also participate in cultural activities, organizations, sports, and medical conferences, enhancing their overall personality and global exposure.",
        "recognition": "Iuliu Hațieganu University of Medicine and Pharmacy is one of the most prestigious and internationally recognized medical universities in Europe. It is a member of the International Association of Universities (IAU) and European University Association (EUA). It follows the European Credit Transfer System (ECTS) and is recognized by the Romanian Ministry of Education as an advanced research and education university. Globally, it is listed in the World Directory of Medical Schools (WDOMS) and recognized by major medical bodies such as WHO, NMC (India), ECFMG (USA), and GMC (UK). It is accredited internationally by agencies like IAAR. The university is known for its strong research output, multiple research centers, and excellence labs, often organizing international conferences like Medicalis. Graduates consistently achieve high success rates in residency exams and international medical careers.",
        "hostelFacilities": "The university provides assistance with hostel and accommodation, helping students find safe and affordable living options. Comfortable hostel facilities are available in campuses like Hasdeu and Observator. These hostels, along with modern libraries and healthcare support services, ensure students maintain a healthy balance between studies and personal well-being.",
        "studentLife": "Student life at the Iuliu Hațieganu University of Medicine and Pharmacy is dynamic, multicultural, and well-balanced. The university hosts thousands of students, including over 2,800 international students from more than 60 countries. Academically, students experience a rigorous and practical-oriented education where classroom learning is combined with clinical exposure and research opportunities. Life is enriched through scientific circles, student organizations, and academic events. The city of Cluj-Napoca itself adds great value, known as a vibrant student city with rich culture, nightlife, cafes, and festivals. It is considered safe, welcoming, and student-friendly, offering plenty of opportunities to relax and socialize after academic hours.",
        "whyChooseUsIntro": "Choosing the right consultancy is crucial for students planning MBBS in abroad and especially MBBS in Romania, and iExplain Education is considered a reliable option due to its student-focused approach and complete admission support system.",
        "whyChooseUs": [
            "Expert Guidance & Counseling – Free and personalized counseling helping students understand university selection, eligibility, and career planning.",
            "Complete Admission Assistance – End-to-end support including application filling, document verification, and university communication to avoid errors and delays.",
            "Visa & Travel Support – Assistance with student visa application, forex guidance, and travel arrangements to ensure a smooth transition.",
            "Pre & Post-Departure Support – Providing guidance before leaving and on-arrival support in Romania, including accommodation guidance and settlement assistance.",
            "Trusted & Student-Centric Approach – Personalized career counseling analyzing academic profile, budget, and goals before suggesting the best options.",
            "Wide Network of Universities – Access to multiple globally recognized universities, assisting with scholarships, education loans, and financial planning."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of secondary education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry & Biology (PCB)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Valid Passport",
                "details": "Must have sufficient validity"
            },
            {
                "document": "Birth Certificate",
                "details": "Must be in English or translated & notarized"
            },
            {
                "document": "Medical Certificate",
                "details": "General health check-up report"
            },
            {
                "document": "HIV Test Report",
                "details": "Required medical screening report"
            },
            {
                "document": "English Proficiency Proof",
                "details": "IELTS/TOEFL or Medium of Instruction certificate"
            },
            {
                "document": "Application Form",
                "details": "Filled and signed university application"
            },
            {
                "document": "Admission/Offer Letter",
                "details": "Issued by the university after selection"
            },
            {
                "document": "Police Clearance Certificate (PCC)",
                "details": "Required for visa process"
            }
        ],
        "conclusion": "In conclusion, the Iuliu Hațieganu University of Medicine and Pharmacy stands as one of the top and most prestigious destinations for students planning MBBS in abroad and especially MBBS in Romania. With its rich academic legacy, globally recognized degree, and European-standard curriculum, the university offers a complete medical education that meets international standards. From a well-structured MBBS syllabus and affordable fee structure to strong clinical training and modern infrastructure, the university provides everything required for building a successful medical career. The English-medium program, multicultural environment, and advanced research facilities further enhance the learning experience. Additionally, with proper student support services, students can confidently pursue their dream of becoming doctors with global career opportunities.",
        "faqs": [
            {
                "question": "Where is Iuliu Hațieganu University located?",
                "answer": "The university is located in Cluj-Napoca, one of the top student cities in Romania."
            },
            {
                "question": "Is this university good for MBBS in abroad?",
                "answer": "Yes, it is one of the most reputed medical universities in Europe, making it an excellent choice for MBBS in abroad and especially MBBS in Romania."
            },
            {
                "question": "What is the duration of MBBS at this university?",
                "answer": "The MBBS (General Medicine) program duration is 6 years, including academic study and internship."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS program is available in English and Romanian, which is suitable for international students."
            },
            {
                "question": "What is the eligibility criteria for MBBS?",
                "answer": "Students must have completed 12th with Physics, Chemistry, and Biology (PCB) with required minimum marks."
            },
            {
                "question": "What is the fee structure for MBBS?",
                "answer": "The tuition fee ranges approximately between €7,000 – €10,000 per year depending on the course year."
            },
            {
                "question": "Is the university internationally recognized?",
                "answer": "Yes, the university is globally recognized, and its degree is valid in many countries after clearing licensing exams."
            }
        ]
    },
    "ovidius-university": {
        "title": "Ovidius University of Constanța",
        "coursetype": "MBBS",
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Ovidius_Constanta_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Ovidius_Constanta_Mobile.webp",
        "intro": {
            "text": "The Ovidius University of Constanța is one of the well-known public universities in Romania, offering high-quality medical education and attracting students from around the world. Located in Constanța, a beautiful coastal city on the Black Sea, the university is a popular choice for students planning MBBS in abroad and especially MBBS in Romania due to its affordable education and modern teaching approach.\n\nEstablished in 1961, Ovidius University has developed into a comprehensive institution with multiple faculties, including a well-recognized Faculty of Medicine. The university is named after the famous Roman poet Ovid, reflecting its historical and cultural significance. For students aiming to pursue MBBS in Romania, the university offers a 6-year General Medicine (MBBS equivalent) program that follows the European medical education system. The curriculum is designed to provide a strong foundation in medical sciences along with practical clinical training in affiliated hospitals and healthcare centers.\n\nThe university is known for its English-medium MBBS program, which makes it suitable for international students, especially from India and other non-European countries. It also provides modern infrastructure, laboratories, libraries, and experienced faculty members who focus on both academic excellence and practical learning. Another major advantage of studying at Ovidius University is its affordable fee structure and low cost of living, making it a budget-friendly option for students seeking MBBS in abroad. The multicultural environment and student-friendly atmosphere further enhance the overall experience."
        },
        "quickOverview": {
            "University Name": "Ovidius University of Constanța",
            "Location": "Constanța, Romania",
            "Established": "1961",
            "Type": "Public University",
            "Faculty of Medicine": "Yes",
            "Popular Course": "MBBS (General Medicine)",
            "Course Duration": "6 Years (including internship)",
            "Medium of Instruction": "English & Romanian",
            "Recognition": "WHO, NMC, ECFMG, European medical bodies",
            "Admission Type": "Based on academic eligibility",
            "Affiliated Hospitals": "Multiple teaching hospitals in Constanța"
        },
        "benefits": {
            "intro": "The Ovidius University of Constanța, located in Constanța, is a popular destination for students planning MBBS in abroad and especially MBBS in Romania. Known for its affordable fee structure, European-standard education system, and strong clinical training, the university offers a perfect combination of quality education and practical exposure. It provides an ideal environment for international students who want to build a successful global medical career.",
            "headers": ["Heading", "Details"],
            "table": [
                {
                    "Heading": "Globally Recognized Medical Degree",
                    "Details": "The MBBS (General Medicine) degree from Ovidius University of Constanța is recognized by major global medical bodies such as WHO, NMC, and ECFMG, allowing graduates to appear for exams like FMGE/NExT, USMLE, and PLAB."
                },
                {
                    "Heading": "European Standard Education System",
                    "Details": "The university follows a European Union (EU) curriculum, ensuring high-quality education with updated medical knowledge and practical training that prepares students for global medical standards."
                },
                {
                    "Heading": "Affordable MBBS in Romania",
                    "Details": "Compared to many private medical colleges, the university offers cost-effective tuition fees, making it a budget-friendly option without compromising quality."
                },
                {
                    "Heading": "English-Medium MBBS Program",
                    "Details": "The university provides an English-medium MBBS program, which is ideal for international students, especially from India, allowing them to study without language barriers."
                },
                {
                    "Heading": "Strong Clinical Exposure & Hospital Training",
                    "Details": "Students gain hands-on experience through clinical training in affiliated hospitals, learning real patient care and medical practices."
                },
                {
                    "Heading": "Modern Infrastructure & Research Facilities",
                    "Details": "Advanced laboratories, research centers, and modern classrooms are available, including specialized centers for cancer research and nanotechnology."
                },
                {
                    "Heading": "Multicultural Environment",
                    "Details": "With students from more than 60 countries, the university offers a diverse learning environment that builds global exposure and communication skills."
                },
                {
                    "Heading": "Strategic Location & Student Life",
                    "Details": "Located in a coastal city on the Black Sea, Constanța offers a vibrant student life, cultural diversity, and a safe environment well-connected to Europe."
                }
            ]
        },
        "SyllabusIntro": "The MBBS (General Medicine) program at Ovidius University of Constanța follows a 6-year European medical curriculum designed to provide a strong foundation in medical sciences along with advanced clinical training.",
        "syllabus": {
            "headers": ["Year", "Subjects"],
            "table": [
                {
                    "Year": "1st Year",
                    "Subjects": "Anatomy, Histology, Biochemistry, Medical Biology"
                },
                {
                    "Year": "2nd Year",
                    "Subjects": "Physiology, Microbiology, Immunology, Advanced Biochemistry, Introductory Pathology"
                },
                {
                    "Year": "3rd Year",
                    "Subjects": "Pathology, Pharmacology, Medical Genetics, Behavioral Sciences, Basic Clinical Skills"
                },
                {
                    "Year": "4th Year",
                    "Subjects": "Internal Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, ENT, Ophthalmology"
                },
                {
                    "Year": "5th Year",
                    "Subjects": "Cardiology, Neurology, Psychiatry, Emergency Medicine, Radiology, Public Health"
                },
                {
                    "Year": "6th Year",
                    "Subjects": "Advanced Clinical Training in all major medical specialties"
                },
                {
                    "Year": "Internship",
                    "Subjects": "Rotations in Medicine, Surgery, Pediatrics, OBGY, Emergency, Orthopedics, ENT, etc."
                }
            ]
        },
        "feesIntro": "The Ovidius University of Constanța offers an affordable and budget-friendly fee structure for students planning MBBS in abroad and especially MBBS in Romania. The tuition fees are comparatively lower than many European medical universities.",
        "fees": {
            "structure": [
                {
                    "year": "1st Year",
                    "tuition": "€6,500 – €7,500",
                    "hostel": "-",
                    "total": "₹5.8 – ₹6.7 Lakhs (Approx.)"
                },
                {
                    "year": "2nd Year",
                    "tuition": "€6,500 – €8,000",
                    "hostel": "-",
                    "total": "₹5.8 – ₹7 Lakhs (Approx.)"
                },
                {
                    "year": "3rd Year",
                    "tuition": "€6,500 – €8,000",
                    "hostel": "-",
                    "total": "₹5.8 – ₹7 Lakhs (Approx.)"
                },
                {
                    "year": "4th Year",
                    "tuition": "€6,500 – €8,000",
                    "hostel": "-",
                    "total": "₹5.8 – ₹7 Lakhs (Approx.)"
                },
                {
                    "year": "5th Year",
                    "tuition": "€6,500 – €8,000",
                    "hostel": "-",
                    "total": "₹5.8 – ₹7 Lakhs (Approx.)"
                },
                {
                    "year": "6th Year",
                    "tuition": "€6,500 – €8,000",
                    "hostel": "-",
                    "total": "₹5.8 – ₹7 Lakhs (Approx.)"
                }
            ]
        },
        "durationIntro": "The MBBS (General Medicine) program at Ovidius University of Constanța follows a 6-year European medical education system. The course is designed to provide a strong balance between theoretical knowledge and practical clinical training.",
        "duration": {
            "headers": ["Particulars", "Duration"],
            "table": [
                {
                    "Particulars": "Total Course Duration",
                    "Duration": "6 Years"
                },
                {
                    "Particulars": "Academic Study (Pre-Clinical + Clinical)",
                    "Duration": "5 Years"
                },
                {
                    "Particulars": "Internship / Clinical Rotations",
                    "Duration": "1 Year"
                },
                {
                    "Particulars": "Total Semesters",
                    "Duration": "12 Semesters"
                }
            ]
        },
        "studentSupport": "The Ovidius University of Constanța, located in Constanța, offers a well-developed support system for international students. The university has a dedicated International Students Department, which helps students with admission procedures, documentation, and resolving social or administrative issues. This department plays a key role in making the transition to a new country smooth and comfortable. In terms of accommodation, the university provides student dormitories with affordable living options and also assists students in finding private housing near the campus. Academically, students benefit from modern libraries, computer labs, and digital learning resources. The university also provides language support through its Language Centre, where international students can learn Romanian and improve communication skills, which is especially helpful during clinical training.",
        "recognition": "Ovidius University of Constanța is a well-recognized public university in Europe. It is a member of the European University Association (EUA) and European Association of Institutions in Higher Education (EURASHE). It is associated with the Agence Universitaire de la Francophonie (AUF) and is part of the Black Sea Universities Network (BSUN) and Balkan Universities Network (BUA). Officially recognized by the Ministry of Education, Romania, it is listed in global directories and rankings. It is included in the QS Europe University Rankings – Eastern Europe (#=99 in 2026) and ranked in the 1501+ category of the Times Higher Education Rankings. The degree is internationally accepted and suitable for global medical careers.",
        "hostelFacilities": "The university provides student dormitories with affordable living options and also assists students in finding private housing near the campus. The cost of living in Constanța is relatively low compared to other European cities, which makes it easier for students to manage their expenses while studying MBBS abroad. Cafeterias offering low-cost meals are also accessible to students.",
        "studentLife": "Student life at the Ovidius University of Constanța is vibrant, diverse, and well-balanced. The university has a multicultural student community with students from over 60 countries. Diversity allows students to interact with peers from different backgrounds, improving communication skills. Life is enriched through student organizations and international clubs like the Erasmus Student Network, which organize cultural events, sports activities, and excursions. The city of Constanța itself offers beaches, nightlife, cafes, and tourist attractions. During summer, places like Mamaia resort become major hubs, while malls, cinemas, theaters, and sports facilities are available throughout the year, ensuring a high-quality lifestyle.",
        "whyChooseUsIntro": "Choosing the right consultancy is very important for students planning MBBS in abroad and especially MBBS in Romania, and iExplain Education stands out as a reliable and student-focused option. It provides complete guidance and support for students who want to take admission in top universities like Ovidius University of Constanța.",
        "whyChooseUs": [
            "Expert Career Counseling – Personalized counseling approach analyzing academic background, budget, and goals before suggesting suitable universities.",
            "Complete Admission Assistance – Helping students at every stage—from selecting the right university to final enrollment smoothly.",
            "Documentation Support – Comprehensive services including application processing and direct communication with universities to reduce errors.",
            "Visa & Travel Support – Assistance with documentation and processing to ensure a stress-free journey for MBBS abroad.",
            "Wide Network & Genuine Options – Focusing on student needs rather than promoting specific institutions, ensuring better decision-making."
        ],
        "documents": [
            {
                "document": "10th Marksheet & Certificate",
                "details": "Proof of secondary education"
            },
            {
                "document": "12th Marksheet & Certificate",
                "details": "Must include Physics, Chemistry & Biology (PCB)"
            },
            {
                "document": "NEET Scorecard",
                "details": "Mandatory for Indian students"
            },
            {
                "document": "Valid Passport",
                "details": "Copy of passport (first pages) required"
            },
            {
                "document": "Birth Certificate",
                "details": "Translated & notarized copy required"
            },
            {
                "document": "Medical Certificate",
                "details": "Proof that the student is medically fit"
            },
            {
                "document": "English Proficiency Certificate",
                "details": "Minimum B1 level (IELTS/TOEFL or university test)"
            },
            {
                "document": "Document Translation & Apostille",
                "details": "Required for non-English documents"
            },
            {
                "document": "Academic Transcripts",
                "details": "Complete record of previous studies"
            }
        ],
        "conclusion": "In conclusion, the Ovidius University of Constanța, located in Constanța, is a reliable and cost-effective destination for students planning MBBS in abroad and especially MBBS in Romania. The university offers a well-structured medical program based on European standards, combining strong theoretical knowledge with practical clinical training. From its affordable fee structure and English-medium MBBS program to modern infrastructure and experienced faculty, the university provides all the essential elements required for quality medical education. The well-designed syllabus, hands-on hospital training, and global recognition of the degree help students build a strong foundation for their future medical careers. Additionally, the university ensures a supportive environment through student services, accommodation facilities, and a multicultural campus life.",
        "faqs": [
            {
                "question": "Where is Ovidius University of Constanța located?",
                "answer": "The university is located in Constanța, a coastal city on the Black Sea."
            },
            {
                "question": "Is Ovidius University good for MBBS in abroad?",
                "answer": "Yes, it is a well-known and affordable option for students planning MBBS in abroad and especially MBBS in Romania."
            },
            {
                "question": "What is the duration of MBBS at this university?",
                "answer": "The MBBS (General Medicine) program duration is 6 years, including academic studies and clinical training."
            },
            {
                "question": "Is NEET required for admission?",
                "answer": "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad."
            },
            {
                "question": "What is the medium of instruction?",
                "answer": "The MBBS program is offered in English and Romanian for international students."
            },
            {
                "question": "What is the eligibility criteria for MBBS?",
                "answer": "Students must have completed 12th with Physics, Chemistry, and Biology (PCB) with required minimum marks."
            },
            {
                "question": "What is the fee structure for MBBS?",
                "answer": "The tuition fee is approximately €6,500 – €8,000 per year, making it an affordable option."
            },
            {
                "question": "Is the university internationally recognized?",
                "answer": "Yes, the university is globally recognized, and its degree is accepted in many countries after licensing exams."
            },
            {
                "question": "Are hostel facilities available?",
                "answer": "Yes, the university provides hostel and accommodation support for students."
            }
        ]
    }
};