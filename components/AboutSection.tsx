import React, { useState } from 'react';

interface AboutSectionProps {
  compact?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ compact = false }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  // Add your YouTube Video ID here (the part after v= in the URL)
  // For example, if your URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const YOUTUBE_VIDEO_ID = "C11kOPgVDXw&pp"; 

  // Company Stats & Credibility
  const STATS = [
    { icon: 'fa-graduation-cap', number: '5000+', label: 'Students Guided' },
    { icon: 'fa-university', number: '200+', label: 'Partner Universities' },
    { icon: 'fa-globe', number: '15', label: 'Countries Covered' },
    { icon: 'fa-calendar', number: '2008', label: 'Established' }
  ];

  const ABOUT_INTRO = `Welcome to iExplain Education. With our extensive industry experience, we have witnessed the unfortunate reality of admission counselors succumbing to management pressure, prioritizing their favorite universities solely for profit, and disregarding the student's profile. In response, we established our organization with the mission to offer students Authentic insights, Accurate information, and Comprehensive guidance.

Unlike other education consultants, iExplain Education takes a student-centric approach, considering their individual needs, strengths, and weaknesses. The focus is on providing personalized guidance and support to ensure the best possible outcomes for the student's educational journey.`;

  const LEADERSHIP_MESSAGE = {
    ceo: 'Sunil Baranwal',
    directors: ['Sushant Gupta', 'Sakshi Agarwal'],
    message: `Dear Students & Parents,

Our heartfelt welcome to iExplain Education. It is a matter of considerable pride to know about your keenness to pursue higher education and choosing our consultancy for guidance.

At iExplain, we understand that choosing the right educational path is an important decision demanding high intellectual ability and personal commitment. We aim at providing students with the best universities both in India and abroad, ensuring their future is full of opportunities and promises.

With transparent practices, expert counsel, and unwavering support, we are here to help you nurture and realize your dreams!`
  };

  const VISION_MISSION = {
    vision: {
      title: 'Opening Doors to a World of Possibilities: Your Pathway to Success',
      points: [
        'We believe in the power of dreams. Our vision is to fuel your ambitions, inspire your imagination, and provide unwavering support as you take bold steps towards realizing your dreams.',
        'We envision a future where every student receives personalized guidance, enabling them to make informed decisions and pursue the best educational opportunities.',
        'We strive to be a trusted partner, providing comprehensive support, expert advice, and valuable insights to help students navigate the complex landscape of education.',
        'Through our services, we aim to transform lives, shape successful careers, and contribute to the growth and overall development of students.'
      ]
    },
    mission: {
      title: 'Empowering Minds, Transforming Futures: Our Mission, Your Success',
      sections: [
        {
          title: 'PERSONALIZED GUIDANCE',
          desc: 'Our mission is to understand your unique aspirations, strengths, and challenges. We provide personalized guidance, offering tailored solutions that meet your specific needs and goals.'
        },
        {
          title: 'EXPERT ADVICE',
          desc: 'Our mission is to be your trusted source of knowledge and expertise. We stay updated with the latest trends to provide accurate and relevant information for informed decisions.'
        },
        {
          title: 'YOUR SUCCESS',
          desc: 'We aim to be the catalyst for your success, helping you shape a brighter future filled with endless possibilities.'
        }
      ]
    }
  };

  const CORE_VALUES = [
    {
      icon: 'star',
      title: 'INTEGRITY',
      desc: 'We uphold the highest ethical standards, ensuring transparency, honesty, and fairness.'
    },
    {
      icon: 'heart',
      title: 'STUDENT-CENTERED APPROACH',
      desc: 'We prioritize individual student needs, aspirations, and well-being.'
    },
    {
      icon: 'star',
      title: 'TRUST',
      desc: 'We build strong relationships by delivering on promises and acting in students\' best interests.'
    },
    {
      icon: 'heart',
      title: 'PROFESSIONALISM',
      desc: 'We maintain high standards with experienced and knowledgeable counsellors.'
    },
    {
      icon: 'star',
      title: 'COLLABORATION',
      desc: 'We work closely with students, parents, and institutions for successful journeys.'
    },
    {
      icon: 'heart',
      title: 'LONG-TERM RELATIONSHIPS',
      desc: 'We support students throughout their educational journey and celebrate achievements.'
    }
  ];

  const TEAM_MEMBERS = [
    {
      name: 'Sunil Baranwal',
      role: 'DIRECTOR',
      experience: '15+ Years Experience',
      expertise: 'NEET Counselling, Medical Admissions',
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      email: 'sunil@iexplaineducation.com',
      phone: '+91 97738 47799'
    },
    {
      name: 'Sushant Gupta',
      role: 'DIRECTOR',
      experience: '12+ Years Experience',
      expertise: 'Study Abroad, Visa Processing',
      // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      email: 'sushant@iexplaineducation.com',
      phone: '+91 85460 16524'
    },
    {
      name: 'Sakshi Agarwal',
      role: 'DIRECTOR',
      experience: '10+ Years Experience',
      expertise: 'Career Counselling, Documentation',
      // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      email: 'sakshi@iexplaineducation.com',
      phone: '+91 97738 47799'
    }
  ];  

  const WHY_CHOOSE_US = [
    { icon: 'fa-certificate', text: 'Government Registered Company (Since 2008)' },
    { icon: 'fa-handshake', text: 'Fair & Honest Guidance with Long-term Career Planning' },
    { icon: 'fa-passport', text: 'Fast Passport Application and Visa Processing' },
    { icon: 'fa-users', text: 'Students Departure in Groups for Safety' },
    { icon: 'fa-shield-heart', text: '100% Safe Travel Services to Universities' },
    { icon: 'fa-book-open', text: 'Entrance Exam Coaching (NEET, IELTS, GRE, GMAT, PTE)' },
    { icon: 'fa-graduation-cap', text: 'Already Guided 5000+ Students Successfully' },
    { icon: 'fa-headset', text: 'On-Campus Support at Partner Universities' },
    { icon: 'fa-plane', text: 'Parental Travel Assistance & Arrangements' },
    { icon: 'fa-building', text: 'Partnership with 200+ Top Universities Worldwide' },
    { icon: 'fa-user-graduate', text: 'Admission Guidance for PG Programs (India & Abroad)' },
    { icon: 'fa-money-bill', text: 'Education Loan & Financial Assistance' }
  ];

  const COMMON_QUESTIONS = [
    'Am I selecting the right university?',
    'Is the degree globally recognized?',
    'What will be the medium of instruction?',
    'Is the university approved by medical councils?',
    'What about future career prospects?',
    'How safe is studying abroad?'
  ];

  return (
    <div className="bg-white">
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }

        .text-navy {
          color: #003D5B;
        }

        .text-gold {
          color: #D4A12A;
        }

        .bg-navy {
          background-color: #003D5B;
        }

        .bg-gold {
          background-color: #D4A12A;
        }

        .border-gold {
          border-color: #D4A12A;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Page Title */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <h1 className="text-4xl font-bold text-navy">About Us</h1> */}
        </div>
      </section>

      {/* Hero Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-gold uppercase tracking-wider border border-gold rounded">
                WHO WE ARE
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                TRANSFORMING DREAMS <span className="text-gold">INTO REALITY</span>
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                {ABOUT_INTRO}
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl bg-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                    alt="iExplain Education Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent flex flex-col justify-end p-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <p className="text-white text-base font-medium italic leading-relaxed">
                        "Authentic insights, Accurate information, and Comprehensive guidance."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm hover-lift">
                <i className={`fa-solid ${stat.icon} text-4xl text-gold mb-3`}></i>
                <div className="text-3xl font-bold text-navy">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-600 uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!compact && (
        <>
          {/* Vision & Mission */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-white rounded-3xl p-10 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                      <i className="fa-solid fa-eye text-2xl text-gold"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-navy uppercase">OUR VISION</h3>
                  </div>

                  <h4 className="text-lg font-semibold text-navy mb-6 text-center leading-snug">
                    {VISION_MISSION.vision.title}
                  </h4>

                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {VISION_MISSION.vision.points.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                </div>

                {/* Mission Card */}
                <div className="bg-navy rounded-3xl p-10 shadow-lg text-white">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                      <i className="fa-solid fa-bullseye text-2xl text-gold"></i>
                    </div>
                    <h3 className="text-2xl font-bold uppercase">OUR MISSION</h3>
                  </div>

                  <h4 className="text-lg font-semibold mb-6 text-center leading-snug">
                    {VISION_MISSION.mission.title}
                  </h4>

                  <div className="space-y-6">
                    {VISION_MISSION.mission.sections.map((section, idx) => (
                      <div key={idx}>
                        <h5 className="font-bold text-gold text-xs uppercase tracking-wider mb-2">
                          {section.title}
                        </h5>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {section.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FULL WIDTH VIDEO BANNER */}
          <section className="relative w-full aspect-video md:h-[60vh] lg:h-[70vh] bg-navy overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}`}
              title="iExplain Education Video Banner"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: 'none' }} // Prevents users from pausing/clicking through to YT
            ></iframe>
            {/* Optional subtle overlay to ensure the video sits back visually */}
            <div className="absolute inset-0 bg-navy/10 pointer-events-none"></div>
          </section>

          {/* Core Values */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">
                  <span className="text-navy">CORE </span>
                  <span className="text-gold">VALUES</span>
                </h2>
                <div className="w-16 h-1 bg-gold mx-auto rounded mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CORE_VALUES.map((value, idx) => (
                  <div key={idx} className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover-lift shadow-sm hover:shadow-md transition-all">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
                      {value.icon === 'star' ? (
                        <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-navy uppercase mb-3 tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">
                  <span className="text-navy">Why Choose </span>
                  <span className="text-gold">iExplain?</span>
                </h2>
                <p className="text-gray-600 font-medium mt-4">Your success is our commitment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <i className={`fa-solid ${item.icon} text-gold text-sm`}></i>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed pt-2 font-medium">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-navy mb-3">
                  Questions on Your Mind?
                </h2>
                <p className="text-gray-600 font-medium">
                  We understand your concerns. Let us resolve all your queries with transparent guidance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {COMMON_QUESTIONS.map((question, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-gold transition-colors">
                    <i className="fa-solid fa-circle-question text-xl text-gold flex-shrink-0"></i>
                    <p className="text-gray-700 text-sm font-medium">{question}</p>
                  </div>
                ))}
              </div>

              <div className="bg-navy rounded-2xl p-8 text-white text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-3">We Have All the Answers</h3>
                <p className="text-base mb-6 text-gray-200">
                  Get personalized guidance with long-term success guarantee
                </p>
                <button className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-3 rounded-full transition-all inline-flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check"></i>
                  Book Free Counseling
                </button>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">
                  <span className="text-navy">LEADERSHIP </span>
                  <span className="text-gold">TEAM</span>
                </h2>
                <p className="text-gray-600 font-medium mt-4">
                  "Meet Our Dynamic Team of Experts: Driving Success Through Collaboration and Innovation"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TEAM_MEMBERS.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift"
                  >
                    {/* Avatar Section */}
                    <div className="relative h-80 bg-gray-100 flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-gold text-navy flex items-center justify-center text-3xl font-bold border-4 border-white shadow-md">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}

                      <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1.5 rounded-full text-xs font-bold">
                        {member.experience}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 text-center">
                      <h3 className="text-xl font-bold text-navy mb-1">
                        {member.name}
                      </h3>

                      <p className="text-gold font-bold text-xs uppercase tracking-wider mb-3">
                        {member.role}
                      </p>

                      <p className="text-gray-600 text-sm mb-6">
                        {member.expertise}
                      </p>

                      <div className="space-y-2 text-left border-t border-gray-200 pt-6">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 text-gray-600 hover:text-navy transition-colors text-sm"
                        >
                          <i className="fa-solid fa-envelope text-gold"></i>
                          <span>{member.email}</span>
                        </a>

                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-3 text-gray-600 hover:text-navy transition-colors text-sm"
                        >
                          <i className="fa-solid fa-phone text-gold"></i>
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutSection;