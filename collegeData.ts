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

        syllabus: [
            {
                year: "1st Year",
                subjects: "Anatomy, Histology, Embryology, Medical Chemistry, Biophysics, Latin Language",
            },
            {
                year: "2nd Year",
                subjects: "Biochemistry, Physiology, Microbiology, Pathology, Genetics, Pharmacology",
            },
            {
                year: "3rd Year",
                subjects: "Pathophysiology, Pharmacology, General Medicine, Immunology, Radiology, Clinical Training",
            },
            {
                year: "4th Year",
                subjects: "General Surgery, Internal Medicine, Pediatrics, Psychiatry, Dermatology, Ophthalmology",
            },
            {
                year: "5th Year",
                subjects: "Obstetrics & Gynecology, ENT, Neurology, Cardiology, Oncology, Emergency Medicine",
            },
            {
                year: "6th Year",
                subjects: "Internship, Clinical Rotations, Practical Training, Research Work",
            },
        ],


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
            "Total Duration": "6 Years",
            "Academic Duration": "5 Years (Classroom + Practical Learning)",
            "Internship": "1 Year (Clinical Training in Hospitals)",
            "Medium of Instruction": "English",
            "Clinical Exposure Start": "From 3rd Year",
            "Degree Awarded": "MD (Equivalent to MBBS in India)",
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

        syllabus: [
            {
                year: "1st Year",
                subjects: "Anatomy, Histology, Medical Biology, Bioorganic Chemistry, Latin Language, Russian Language",
            },
            {
                year: "2nd Year",
                subjects: "Histology, Biochemistry, Physiology, Cell Biology, Microbiology, General Pathology, Psychology & Pedagogy",
            },
            {
                year: "3rd Year",
                subjects: "Pathology, Pharmacology, Microbiology & Immunology, Pathophysiology, Medical Genetics, Principles of Clinical Medicine",
            },
            {
                year: "4th Year",
                subjects: "General Surgery, Internal Medicine, Obstetrics & Gynecology, Pediatrics, Neurology",
            },
            {
                year: "5th Year",
                subjects: "Oncology, ENT (Ear, Nose & Throat), Emergency Medicine, Cardiology, Psychiatry",
            },
            {
                year: "6th Year",
                subjects: "Ophthalmology, Community Medicine, Primary Care Medicine, Clinical Rotations, Mandatory rotations in Surgery, Medicine, Pediatrics, Gynecology & others",
            },
        ],

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
        "syllabus": [
            {
                "year": "1st Year",
                "subjects": "Anatomy, Histology, Biochemistry, Physiology, Medical Biology"
            },
            {
                "year": "2nd Year",
                "subjects": "Anatomy, Physiology, Biochemistry, Microbiology, Pathology"
            },
            {
                "year": "3rd Year",
                "subjects": "Pathology, Pharmacology, Microbiology, Pathophysiology"
            },
            {
                "year": "4th Year",
                "subjects": "General Medicine, General Surgery, Obstetrics & Gynecology, Pediatrics"
            },
            {
                "year": "5th Year",
                "subjects": "Neurology, Psychiatry, Orthopedics, ENT, Ophthalmology"
            },
            {
                "year": "6th Year",
                "subjects": "Internship, Clinical Practice, Internal Medicine, Surgery, Emergency Care"
            }
        ],
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/IKBFU_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/IKBFU_Mobile.webp",
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
        "syllabus": [
            {
                "year": "1st Year",
                "subjects": "Anatomy, Biology, Histology, Chemistry, Physics, Medical Terminology (Latin), Russian Language, Medical Informatics"
            },
            {
                "year": "2nd Year",
                "subjects": "Anatomy, Biochemistry, Physiology, Microbiology, Immunology, Medical Genetics, Hygiene"
            },
            {
                "year": "3rd Year",
                "subjects": "Pathology, Pathophysiology, Pharmacology, Clinical Diagnostics, General Surgery, Internal Medicine (Intro)"
            },
            {
                "year": "4th Year",
                "subjects": "Obstetrics & Gynecology, Pediatrics, Neurology, Dermatology, Psychiatry, Surgery, Emergency Medicine"
            },
            {
                "year": "5th Year",
                "subjects": "Internal Medicine, Surgery, Oncology, Infectious Diseases, Traumatology, Orthopedics"
            },
            {
                "year": "6th Year",
                "subjects": "Clinical Rotations, Anesthesiology, Emergency Care, Endocrinology, Rehabilitation, Practical Training"
            }
        ],
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
        "syllabus": [
            {
                "year": "1st Year",
                "subjects": "Anatomy, Physiology, Biochemistry, Histology, Medical Terminology"
            },
            {
                "year": "2nd Year",
                "subjects": "Pathology, Microbiology, Pharmacology, Immunology, Clinical Practice"
            },
            {
                "year": "3rd Year",
                "subjects": "Pharmacology, Pathophysiology, Forensic Medicine, Genetics, Medicine"
            },
            {
                "year": "4th Year",
                "subjects": "General Surgery, Internal Medicine, Pediatrics, Obstetrics & Gynecology, ENT"
            },
            {
                "year": "5th Year",
                "subjects": "Surgery, Orthopedics, Cardiology, Radiology, Anesthesiology"
            },
            {
                "year": "6th Year",
                "subjects": "Clinical Training, Internship, Emergency Medicine, Neurology, Psychiatry"
            }
        ],
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
        "syllabus": [
            {
                "year": "1st Year",
                "subjects": "Anatomy, Physiology, Histology, Medical Ethics, Genetics"
            },
            {
                "year": "2nd Year",
                "subjects": "Biochemistry, Microbiology, Immunology, Pathophysiology, Pharmacology"
            },
            {
                "year": "3rd Year",
                "subjects": "Pathology, Pharmacology, Forensic Medicine, Clinical Medicine, Radiology"
            },
            {
                "year": "4th Year",
                "subjects": "Internal Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine"
            },
            {
                "year": "5th Year",
                "subjects": "ENT, Ophthalmology, Psychiatry, Dermatology, Neurology"
            },
            {
                "year": "6th Year",
                "subjects": "Clinical Rotations, Emergency Medicine, Surgery Practice, Internship, Practical Training"
            }
        ],
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/DTMU_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/DTMU_Mobile.webp",
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
        "syllabus": [
            {
                "year": "1st Year",
                "subjects": "Anatomy, Physiology, Biochemistry"
            },
            {
                "year": "2nd Year",
                "subjects": "Pathology, Microbiology, Pharmacology"
            },
            {
                "year": "3rd Year",
                "subjects": "General Medicine, Surgery, Community Medicine"
            },
            {
                "year": "4th Year",
                "subjects": "Pediatrics, Obstetrics & Gynecology, Psychiatry"
            },
            {
                "year": "5th Year",
                "subjects": "Radiology, Dermatology, Orthopedics"
            },
            {
                "year": "6th Year",
                "subjects": "Internship & Clinical Rotations"
            }
        ],
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
        "heroImage": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/European_University_Main.webp",
        "heroImageMobile": "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/European_University_Mobile.webp",
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
        "syllabus": [
            {
                "year": "Anatomy, Physiology, Biochemistry",
                "subjects": "Fundamentals of human body and basic sciences"
            },
            {
                "year": "Pathology, Microbiology, Pharmacology",
                "subjects": "Study of diseases, microbes, and medicines"
            },
            {
                "year": "General Medicine, Surgery, Community Medicine",
                "subjects": "Introduction to clinical subjects and patient care"
            },
            {
                "year": "Pediatrics, Obstetrics & Gynecology, Psychiatry",
                "subjects": "Specialized clinical subjects with practical exposure"
            },
            {
                "year": "Radiology, Dermatology, Orthopedics, ENT",
                "subjects": "Advanced diagnostics and clinical skills"
            },
            {
                "year": "Internship & Clinical Rotations",
                "subjects": "Hands-on patient care in affiliated hospitals"
            }
        ],
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
    }
};