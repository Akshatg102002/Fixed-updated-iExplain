import { CollegeDetailData } from "./types";

export const COLLEGE_DETAILS: Record<string, CollegeDetailData> = {
    "kazan-federal-university": {
        title: "Kazan Federal University",

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

        benefits: [
            "Globally Recognized Degree – The MBBS degree from Kazan Federal University is recognized by major medical bodies such as NMC, WHO, ECFMG, and UNESCO. This allows students to appear for licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK).",
            "Affordable Fee Structure – Compared to private medical colleges in India, the MBBS program at Kazan Federal University is much more affordable, making it a budget-friendly option without compromising on quality education.",
            "International Exposure – The university hosts students from over 100 countries, providing a multicultural environment that helps students gain global exposure and build international networks.",
            "Advanced Medical Training – Students get hands-on clinical training in well-equipped hospitals and medical centers associated with the university. This practical exposure is essential for developing strong medical skills.",
            "Experienced Faculty – Kazan Federal University has highly qualified and experienced professors who focus on both theoretical knowledge and practical learning, ensuring students receive a well-rounded medical education.",
            "Modern Infrastructure – The university offers state-of-the-art laboratories, digital classrooms, advanced research centers, and a vast library, creating an ideal learning environment for medical students.",
            "Comfortable Hostel Facilities – Safe and well-maintained hostel accommodations are available for international students, with all basic amenities and security.",
            "English Medium Program – MBBS is available in English medium, which is a major advantage for Indian students as it removes the language barrier.",
            "High Career Opportunities – Graduates from Kazan Federal University have excellent career prospects worldwide. After completing MBBS, students can pursue higher studies or practice medicine in different countries after clearing the required licensing exams.",
        ],


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

        heroImage: "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514514/Bashkir_State_bbycah.webp",
        heroImageMobile: "https://res.cloudinary.com/dcuuvw8zt/image/upload/v1774514513/Bashkir_State_Medical_2_r7sey6.webp",

        intro: {
            text: `Bashkir State Medical University (BSMU), located in Ufa city, Bashkortostan Republic, Russia, is a prestigious medical institution established in 1932 that offers MBBS, Dentistry, Pharmacy, postgraduate, and research programs to international students. The university is recognized by the Russian Ministry of Health and meets the standards of the World Health Organization (WHO) and the National Medical Commission (NMC) of India, making its degree globally valid for medical practice. BSMU boasts modern infrastructure, well-equipped laboratories, digital classrooms, simulation labs, a vast library, and excellent sports and cultural facilities, along with comfortable and hygienic hostels for both male and female students. The university is known for its highly qualified faculty and practical-based teaching methods, providing international students with Russian language training and a supportive environment to ensure a smooth academic and daily life experience.\n\nBSMU emphasizes hands-on clinical training from the early years of the course, giving students exposure to real hospital environments and patient interactions. This practical approach ensures that graduates are well-prepared for medical careers anywhere in the world. The university also encourages research and innovation, providing students access to modern laboratories and international medical journals, fostering a culture of scientific inquiry and discovery. Additionally, the multicultural environment at BSMU helps students develop communication and collaboration skills, as they interact with peers from different countries and backgrounds, preparing them for a global medical career.\n\nGraduates of Bashkir State Medical University can pursue medical practice in India after passing the NMC screening or explore career opportunities in Europe, the USA, the Middle East, and Russia, with strong options for research and academic careers. With affordable tuition fees, low living costs, ample clinical exposure, and an internationally recognized degree, BSMU is an ideal choice for students seeking quality medical education and global career opportunities in Russia.`,
        },

        quickOverview: {
            "University Name": "Bashkir State Medical University (BSMU)",
            "Established Year": "1932",
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

        benefits: [
            "Globally Recognized Degree: The MBBS degree from BSMU is recognized by major medical bodies including NMC (India), WHO, ECFMG, and UNESCO, allowing students to appear for licensing exams like FMGE/NExT (India), USMLE (USA), and PLAB (UK).",
            "Affordable Fee Structure: Compared to private medical colleges in India, the MBBS program at BSMU offers quality education at an affordable cost, making it a budget-friendly option without compromising on learning.",
            "International Exposure: The university hosts students from over 80 countries, providing a multicultural environment that helps students gain global exposure and build international networks.",
            "Advanced Medical Training: Students receive hands-on clinical training in well-equipped hospitals and medical centers associated with BSMU, giving them practical experience from the early years of the course.",
            "Experienced Faculty: BSMU has highly qualified and experienced professors who focus on both theoretical knowledge and practical learning to prepare students for a successful medical career.",
            "Modern Infrastructure: The university provides state-of-the-art labs, simulation centers, digital classrooms, and a comprehensive medical library for effective learning and research.",
            "Safe & Comfortable Accommodation: International students enjoy well-maintained hostels with mess facilities, ensuring a secure and comfortable living environment.",
            "Career Opportunities: Graduates can practice in India after NMC screening or pursue medical careers in Europe, USA, Middle East, and Russia, including opportunities in hospitals, research, and academic fields.",
            "Holistic Student Development: BSMU encourages sports, cultural activities, and extracurricular programs, supporting overall personal and professional growth.",
        ],

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

        duration: {
            "Pre-Clinical Phase": "2 Years – Basic medical sciences like Anatomy, Physiology, Biochemistry",
            "Para-Clinical Phase": "1 Year – Subjects like Pathology, Microbiology, Pharmacology",
            "Clinical Phase": "2 Years – Practical training in hospitals with subjects like Medicine, Surgery",
            "Internship / Practical": "1 Year – Hands-on clinical practice under supervision",
            "Total Duration": "6 Years (Includes complete academic + clinical training)",
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
};