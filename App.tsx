import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import Roadmap from './components/Roadmap.tsx';
import IndiaSection from './components/IndiaSection.tsx';
import AICounselor from './components/AICounselor.tsx';
import StatsSection from './components/StatsSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import BlogSection from './components/BlogSection.tsx';
import BlogDetailPage from './components/BlogDetailPage.tsx';
import ContactForm from './components/ContactForm.tsx';
import PopularColleges from './components/PopularColleges.tsx';
import KnowYourDestination from './components/KnowYourDestination.tsx';
import Footer from './components/Footer.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import GoogleReviewsWidget from './components/GoogleReviewsWidget.tsx';
import GlobalCallToAction from './components/GlobalCallToAction.tsx';
import FloatingActions from './components/FloatingActions.tsx';
import ContactModal from './components/ContactModal.tsx';
import ExpertCounselorsCTA from './components/ExpertCounselorsCTA.tsx';
import CollegeDetailPage from './components/CollegeDetailPage.tsx';
import ProgramDetailPage from './components/ProgramDetailPage.tsx';
import StudyIndiaDetailPage from './components/StudyIndiaDetailPage.tsx';
import StudyAbroadDetailPage from './components/StudyAbroadDetailPage.tsx';
import MBBSDetailPage from './components/MBBSDetailPage.tsx';
import StudyAbroadCollegeDetailPage from './components/StudyAbroadCollegeDetailPage.tsx';
import MBBSinindiadetailpage from './components/MBBSinindiadetailpage.tsx';
import EntranceExamDetailPage from './components/EntranceExamDetailPage.tsx';
import WhoWeAre from './components/WhoWeAre.tsx';
import AirportDiaries from './components/AirportDiaries.tsx';
import StudentReviews from './components/StudentReviews.tsx';
import AwardsAchievements from './components/AwardsAchievements.tsx';
import * as Flags from 'country-flag-icons/react/3x2';
import {
  STUDENT_SERVICES_DATA,
  COLLEGE_DETAILS as LEGACY_COLLEGE_DETAILS,
  OFFICE_ADDRESSES,
  BLOG_POSTS,
  INDIA_COURSES_DETAILED,
  STUDY_ABROAD_DETAILED,
  MBBS_ABROAD_DETAILED,
  HERO_IMG_URL,
  PRIVACY_POLICY_CONTENT,
  TERMS_CONTENT
} from './data.ts';
import { COLLEGE_DETAILS as STRUCTURED_COLLEGE_DETAILS } from './collegeData.ts';
import { STUDY_ABROAD_COLLEGE_DETAILS } from './studyAbroadCollegeData.ts';
import { MBBS_IN_INDIA_DETAILS } from './MBBSinindiadata.ts';
import { ENTRANCE_EXAM_DETAILS } from './EntranceExamdata.ts';
import { RouteState, SiteSettings } from './types.ts';
import { db, collection, getDocs, doc, getDoc, query, orderBy, where } from './firebase.ts';
import { Routes, Route, useLocation, Link, useNavigate, useParams, Navigate } from 'react-router-dom';

import { createSlug } from './utils.ts';

const LoadingOverlay = () => (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-blue/70 dark:bg-slate-950/80 backdrop-blur-md animate-fade-in transition-all duration-300">
    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/25 bg-white/15 px-8 py-7 shadow-2xl">
      <div className="h-16 w-16 rounded-full border-4 border-brand-gold/25 border-t-brand-gold animate-spin mb-5"></div>
      <p className="text-brand-gold font-black uppercase tracking-[0.25em] text-[11px] text-center">
        iExplain Education
      </p>
    </div>
  </div>
);

const SEOManager = () => {
  const location = useLocation();
  const baseUrl = 'https://iexplain.education';
  const isNotFound = location.pathname === '/404';

  useEffect(() => {
    const canonicalUrl = new URL(location.pathname, baseUrl).toString();
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonicalUrl;

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = isNotFound ? 'noindex,follow' : 'index,follow';

    const pageTitle = isNotFound
      ? 'Page Not Found | iExplain Education'
      : 'iExplain Education | Global Admissions';
    document.title = pageTitle;
  }, [location.pathname, isNotFound]);

  return null;
};

const NotFoundPage = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
    <div className="max-w-2xl w-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-[2rem] shadow-xl p-10 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-blue/10 text-brand-blue dark:text-brand-gold flex items-center justify-center">
        <i className="fa-solid fa-compass text-3xl"></i>
      </div>
      <p className="text-xs font-black tracking-[0.2em] uppercase text-brand-gold mb-3">Error 404</p>
      <h1 className="text-3xl md:text-4xl font-black text-brand-blue dark:text-white mb-4">Sorry, this page does not exist.</h1>
      <p className="text-gray-600 dark:text-gray-300 font-medium mb-8">
        The URL may be broken, moved, or unavailable. Use one of the navigation options below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="px-6 py-3 rounded-xl bg-brand-gold text-white font-bold text-xs uppercase tracking-widest">
          Go to Homepage
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs uppercase tracking-widest">
          Contact Us
        </Link>
        <Link to="/blog" className="px-6 py-3 rounded-xl border border-brand-blue text-brand-blue dark:text-white font-bold text-xs uppercase tracking-widest">
          Explore Blog
        </Link>
      </div>
    </div>
  </div>
);

// --- SHARED COMPONENTS ---
const ContactMapSection = () => {
  const hq = OFFICE_ADDRESSES[0];
  return (
    <section id="contact-section" className="py-12 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-700 flex flex-col lg:flex-row">
          {/* LHS: Company Info */}
          <div className="lg:w-1/2 bg-brand-blue text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full blur-[100px] opacity-20"></div>

            <div className="relative z-10">
              <div className="mb-10">
                <img src="https://images.unsplash.com/photo-1773332585754-f1436987743b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Office" className="w-full h-64 object-cover rounded-3xl mb-8 shadow-lg border-4 border-white/10" />
                <h3 className="text-3xl font-black mb-2">Get In Touch</h3>
                <p className="text-white/70 font-medium">We are here to help you shape your future.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold text-xl shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Call Us</p>
                    <p className="text-xl font-bold">{hq.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold text-xl shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Email Us</p>
                    <p className="text-xl font-bold break-all sm:break-normal">{'info@iexplaineducation.in'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold text-xl shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Working Hours</p>
                    <p className="text-lg font-bold">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/15">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-gold mb-4">Services Provided</h4>
                <ul className="space-y-2 text-sm text-white/90 font-medium">
                  <li>1. Career Counselling</li>
                  <li>2. Application Process Assistance</li>
                  <li>3. Scholarship & Financial Aid Guidance</li>
                  <li>4. Education Loan Assistance</li>
                  <li>5. Test Preparation Coaching</li>
                  <li>6. Visa Assistance</li>
                  <li>7. Free Counselling Sessions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RHS: Contact Form */}
          <div className="lg:w-1/2 p-4 lg:p-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- POLICY PAGE ---
const PolicyPage = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-900 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-black text-brand-blue dark:text-white mb-8 text-center">{title}</h1>
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700">
          <div
            className="prose prose-lg dark:prose-invert max-w-none font-medium text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

// --- SERVICES LIST PAGE ---
const ServicesPage = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">What We Do</span>
          <h1 className="text-4xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 tracking-tight">
            Our Premium <span className="text-brand-gold">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed text-justify md:text-center">
            We provide end-to-end student support services, from career counselling and admissions to funding, test prep, and visa guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDENT_SERVICES_DATA.map((service, idx) => (
            <Link
              key={idx}
              to={`/service-detail/${service.id}`}
              className="group bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-brand-blue dark:text-white text-2xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-3 text-center md:text-left">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 flex-grow text-justify md:text-left">
                {service.fullDesc || service.desc}
              </p>
              <div className="flex items-center text-brand-gold font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read More <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SERVICE DETAIL PAGE ---
const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = STUDENT_SERVICES_DATA.find(s => s.id === id);

  if (!service) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
        <i className="fa-solid fa-triangle-exclamation text-3xl"></i>
      </div>
      <h2 className="text-2xl font-black text-brand-blue dark:text-white mb-4">Service Not Found</h2>
      <Link to="/services" className="px-6 py-3 bg-brand-gold text-white rounded-xl font-bold text-xs uppercase tracking-widest">Back to Services</Link>
    </div>
  );

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image || HERO_IMG_URL} className="w-full h-full object-cover" alt={service.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-brand-blue/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-10">
          <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-brand-gold text-3xl mb-8">
            <i className={service.icon}></i>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-sm">{service.title}</h1>
          <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {service.desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-6 flex items-center">
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-loose text-lg font-medium">
                {service.longDescription || service.fullDesc}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits && service.benefits.map((benefit: string, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700 flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center shrink-0 mr-4 text-sm">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue dark:text-white text-lg mb-1">Benefit {i + 1}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-8">How It Works</h3>
              <div className="space-y-8 relative">
                <div className="absolute top-4 bottom-4 left-[21px] w-0.5 bg-gray-100 dark:bg-slate-700"></div>
                {service.process && service.process.map((step: string, i: number) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 top-1 w-11 h-11 bg-brand-gold text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg z-10 border-4 border-white dark:border-slate-800">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-xl text-brand-blue dark:text-white mb-2">{step}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">We ensure this step is handled with utmost care and precision.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-slate-700 sticky top-24">
              <div className="text-center mb-8">
                <h3 className="text-xl font-black text-brand-blue dark:text-white mb-2">Get Expert Help</h3>
                <p className="text-sm text-gray-500 font-medium">Fill the form to get started with {service.title}.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- OFFICE DETAIL PAGE ---
const OfficeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const office = OFFICE_ADDRESSES.find(o => o.slug === slug);

  if (!office) return <Navigate to="/contact" replace />;

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-slate-900 pb-20">
      <div className="bg-brand-blue py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Visit Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">{office.city} Office</h1>
          <p className="text-xl text-white/80 font-medium">{office.state}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl font-black text-brand-blue dark:text-white mb-8 border-l-4 border-brand-gold pl-4">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-brand-blue dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0 mr-6 text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Address</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white leading-relaxed">{office.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center shrink-0 mr-6 text-xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Phone</p>
                  <a href={`tel:${office.phone}`} className="text-lg font-bold text-gray-800 dark:text-white hover:text-brand-gold transition-colors">{office.phone}</a>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-blue transition-all shadow-lg"
                >
                  <i className="fa-solid fa-diamond-turn-right mr-3"></i> Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 min-h-[400px] relative bg-gray-100">
            {office.mapEmbed ? (
              <iframe
                src={office.mapEmbed}
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">Map Unavailable</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EntranceExamWrapper = () => {
  const { subPath } = useParams<{ subPath: string }>();
  const normalizedSlug = createSlug(subPath || '');

  if (!normalizedSlug) return <Navigate to="/exams/neet-ug" replace />;

  const data = ENTRANCE_EXAM_DETAILS[normalizedSlug];
  if (!data) return <Navigate to="/exams/neet-ug" replace />;

  return <EntranceExamDetailPage data={data} />;
};

const AboutPage = () => <div className="py-20 text-center"><h1 className="text-4xl font-bold">About Us</h1><AboutSection compact={false} /></div>;
const BlogListPage = () => <BlogSection />;
const ContactPage = () => <div className="py-20 text-center"><h1 className="text-4xl font-bold">Contact</h1><ContactMapSection /></div>;

const normalizeCollegeDetailData = (raw: any, slug: string) => {
  if (!raw) return null;

  const title = raw.title || raw.name || slug.replace(/-/g, ' ');
  const heroImage = raw.heroImage || raw.image || HERO_IMG_URL;
  const normalizedBenefits = (() => {
    if (!raw.benefits) return [];
    if (Array.isArray(raw.benefits)) return raw.benefits;
    if (Array.isArray(raw.benefits.items)) return raw.benefits.items;
    if (Array.isArray(raw.benefits.table)) {
      return raw.benefits.table.map((item: Record<string, string>) => ({
        heading: item.heading || item.Heading || '',
        details: item.details || item.Details || '',
      }));
    }
    return [];
  })();
  const normalizedFees = (() => {
    if (!raw.fees) return { structure: [] };
    if (Array.isArray(raw.fees)) return { structure: raw.fees };
    if (Array.isArray(raw.fees.structure)) return raw.fees;

    if (typeof raw.fees === 'object') {
      const feeGroups = Object.entries(raw.fees).filter(([, value]: [string, any]) => Array.isArray(value?.table));
      if (!feeGroups.length) return { structure: [] };

      const flattenedRows = feeGroups.flatMap(([groupName, value]: [string, any]) =>
        value.table.map((row: Record<string, string>) => ({
          'Program Level': groupName.charAt(0).toUpperCase() + groupName.slice(1),
          ...row,
        }))
      );

      return { structure: flattenedRows };
    }

    return { structure: [] };
  })();

  return {
    ...raw,
    slug: raw.slug || slug,
    title,
    heroImage,
    heroImageMobile: raw.heroImageMobile || heroImage,
    intro: typeof raw.intro === 'string' ? { text: raw.intro } : (raw.intro || { text: '' }),
    quickFacts: raw.quickFacts || {
      Location: raw.location || raw.country || 'N/A',
      Type: raw.type || 'N/A',
      Established: raw.established || 'N/A',
    },
    quickOverview: raw.quickOverview || {
      Highlights: Array.isArray(raw.highlights) ? raw.highlights.join(', ') : 'N/A',
      Category: raw.category || 'N/A',
    },
    benefits: {
      intro: raw.benefits?.intro || '',
      items: normalizedBenefits,
    },
    eligibility: Array.isArray(raw.eligibility)
      ? raw.eligibility.reduce((acc: Record<string, string>, item: string, index: number) => {
          acc[`Point ${index + 1}`] = item;
          return acc;
        }, {})
      : (raw.eligibility || {}),
    duration: raw.duration || { mbbs: 'Please contact counselor', internship: 'Please contact counselor' },
    syllabus: raw.syllabus || [],
    documents: raw.documents || [],
    fees: normalizedFees,
    courses: raw.courses || [],
    studentLife: raw.studentLife || [],
    placements: raw.placements || [],
    hostelFacilities: raw.hostelFacilities || { intro: '', features: [] },
    careerOpportunities: raw.careerOpportunities || {},
    recognition: raw.recognition || [],
    gallery: raw.gallery || [],
    faqs: raw.faqs || [],
  };
};

const LegacyCollegeRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/" replace />;
  return <Navigate to={`/${slug}`} replace />;
};

const StudyIndiaWrapper = () => {
  const { subPath } = useParams<{ subPath: string }>();
  const data = INDIA_COURSES_DETAILED[subPath || 'mbbs'];
  if (!data) return <Navigate to="/study-india/mbbs" replace />;
  return <StudyIndiaDetailPage data={data} />;
};

const MBBSIndiaCollegeWrapper = () => {
  const { titleSlug } = useParams<{ titleSlug: string }>();
  const normalizedSlug = createSlug(titleSlug || '');

  if (!normalizedSlug) return <Navigate to="/study-india/mbbs" replace />;

  const data = MBBS_IN_INDIA_DETAILS[normalizedSlug];
  if (!data) return <Navigate to="/study-india/mbbs" replace />;

  return <MBBSinindiadetailpage data={data} />;
};

const CategoryTitleSlugWrapper = () => {
  const { titleSlug } = useParams<{ titleSlug: string }>();
  const normalizedSlug = createSlug(titleSlug || '');
  const [remotePage, setRemotePage] = useState<any>(null);
  const [collegePage, setCollegePage] = useState<any>(null);
  const [studyAbroadPage, setStudyAbroadPage] = useState<any>(null);
  const [studyAbroadCollegePage, setStudyAbroadCollegePage] = useState<any>(null);
  const [mbbsAbroadPage, setMbbsAbroadPage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRemotePage = async () => {
      if (!normalizedSlug) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const [dynamicSnapshot, collegeSnapshot] = await Promise.all([
          getDocs(query(collection(db, 'dynamic_pages'), where('slug', '==', normalizedSlug))),
          getDocs(query(collection(db, 'colleges'), where('slug', '==', normalizedSlug))),
        ]);

        if (!dynamicSnapshot.empty) {
          setRemotePage(dynamicSnapshot.docs[0].data());
        } else {
          setRemotePage(null);
        }

        setStudyAbroadPage(null);
        setStudyAbroadCollegePage(null);
        setMbbsAbroadPage(null);

        if (!collegeSnapshot.empty) {
          const collegeDoc = collegeSnapshot.docs[0].data();

          if (collegeDoc?.category === 'Study Abroad' && collegeDoc?.payload) {
            setStudyAbroadPage(collegeDoc.payload);
            setCollegePage(null);
          } else if (collegeDoc?.payload?.scholarships && collegeDoc?.payload?.quickOverview) {
            setStudyAbroadCollegePage(collegeDoc.payload);
            setCollegePage(null);
          } else if (collegeDoc?.category === 'MBBS Abroad' && collegeDoc?.payload) {
            setMbbsAbroadPage(collegeDoc.payload);
            setCollegePage(null);
          } else {
            setCollegePage(normalizeCollegeDetailData(collegeDoc, normalizedSlug));
          }
        } else if (STUDY_ABROAD_COLLEGE_DETAILS[normalizedSlug]) {
          setStudyAbroadCollegePage(STUDY_ABROAD_COLLEGE_DETAILS[normalizedSlug]);
          setCollegePage(null);
        } else if (STRUCTURED_COLLEGE_DETAILS[normalizedSlug] || LEGACY_COLLEGE_DETAILS[normalizedSlug]) {
          setCollegePage(normalizeCollegeDetailData(
            STRUCTURED_COLLEGE_DETAILS[normalizedSlug]
            || LEGACY_COLLEGE_DETAILS[normalizedSlug],
            normalizedSlug
          ));
        } else {
          setCollegePage(null);
        }
      } catch (error) {
        console.error('Failed to load dynamic page:', error);
        setRemotePage(null);

        setStudyAbroadPage(null);
        setStudyAbroadCollegePage(null);
        setMbbsAbroadPage(null);

        if (STUDY_ABROAD_COLLEGE_DETAILS[normalizedSlug]) {
          setStudyAbroadCollegePage(STUDY_ABROAD_COLLEGE_DETAILS[normalizedSlug]);
          setCollegePage(null);
        } else if (STRUCTURED_COLLEGE_DETAILS[normalizedSlug] || LEGACY_COLLEGE_DETAILS[normalizedSlug]) {
          setCollegePage(normalizeCollegeDetailData(
            STRUCTURED_COLLEGE_DETAILS[normalizedSlug]
            || LEGACY_COLLEGE_DETAILS[normalizedSlug],
            normalizedSlug
          ));
        } else {
          setCollegePage(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadRemotePage();
  }, [normalizedSlug]);

  if (!normalizedSlug) return <Navigate to="/" replace />;
  if (isLoading) return <LoadingOverlay />;

  if (studyAbroadPage) {
    return <StudyAbroadDetailPage data={studyAbroadPage} />;
  }

  if (studyAbroadCollegePage) {
    return <StudyAbroadCollegeDetailPage data={studyAbroadCollegePage} />;
  }

  if (mbbsAbroadPage) {
    return <MBBSDetailPage data={mbbsAbroadPage} />;
  }

  if (collegePage) {
    return <CollegeDetailPage data={collegePage} />;
  }

  if (remotePage?.category === 'Study Abroad' && remotePage?.payload) {
    return <StudyAbroadDetailPage data={remotePage.payload} />;
  }

  if (remotePage?.category === 'MBBS Abroad' && remotePage?.payload) {
    return <MBBSDetailPage data={remotePage.payload} />;
  }

  if (normalizedSlug.startsWith('study-in-')) {
    const data = Object.values(STUDY_ABROAD_DETAILED).find(item => createSlug(item.title) === normalizedSlug);
    if (!data) return <Navigate to="/study-in-usa" replace />;
    return <StudyAbroadDetailPage data={data} />;
  }

  if (normalizedSlug.startsWith('mbbs-in-')) {
    const data = Object.values(MBBS_ABROAD_DETAILED).find(item => createSlug(item.title) === normalizedSlug);
    if (!data) return <Navigate to="/mbbs-in-russia" replace />;
    return <MBBSDetailPage data={data} />;
  }

  return <Navigate to="/" replace />;
};

const LegacyMBBSAbroadRedirect = () => {
  const { subPath } = useParams<{ subPath: string }>();
  return <Navigate to={`/mbbs-in-${createSlug(subPath || 'russia')}`} replace />;
};

const BlogDetailWrapper = () => {
  const { slug } = useParams<{ category: string, slug: string }>();
  if (!slug) return <Navigate to="/blog" replace />;
  return <BlogDetailPage slug={slug || ''} />;
};


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAICounselorOpen, setIsAICounselorOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Show an interstitial preloader on every route change for smoother transitions.
  useEffect(() => {
    setIsLoading(true);

    const loaderTimeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => {
      window.clearTimeout(loaderTimeout);
    };
  }, [location.pathname, location.search, location.hash]);

  // Reset popup trigger on route change
  useEffect(() => {
    setHasTriggeredPopup(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Trigger contact modal on 40-50% scroll
  useEffect(() => {
    if (location.pathname === '/contact') return;
    if (hasTriggeredPopup) return; // Don't add listener if already triggered

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 40 && scrollPercentage <= 50) {
        if (!isContactModalOpen && !hasTriggeredPopup) {
          setIsContactModalOpen(true);
          setHasTriggeredPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isContactModalOpen, hasTriggeredPopup]);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  // Global lazy loading and async decoding for media without altering layout/structure.
  useEffect(() => {
    const eagerPaths = new Set(['/', '/about', '/contact']);
    const images = Array.from(document.querySelectorAll('img'));
    const videos = Array.from(document.querySelectorAll('video'));
    const iframes = Array.from(document.querySelectorAll('iframe'));

    images.forEach((img, index) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', eagerPaths.has(location.pathname) && index < 2 ? 'eager' : 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      if (!img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', index === 0 ? 'high' : 'auto');
      }
    });

    videos.forEach((video) => {
      if (!video.hasAttribute('preload')) {
        video.setAttribute('preload', 'metadata');
      }
    });

    iframes.forEach((iframe) => {
      if (!iframe.hasAttribute('loading')) {
        iframe.setAttribute('loading', 'lazy');
      }
    });
  }, [location.pathname]);

  // Handle Admin Exit
  const handleAdminExit = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300 font-sans bg-white dark:bg-slate-900 overflow-x-hidden">
      {isLoading && <LoadingOverlay />}

      {/* Conditionally render Navbar based on route if needed, but usually it's always there except maybe admin */}
      {location.pathname !== '/admin' && (
        <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      )}
      <SEOManager />

      <main className="flex-grow">
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero onBookSession={() => setIsContactModalOpen(true)} />
              <StatsSection />
              <WhoWeAre />
              <IndiaSection />
              <PopularColleges />
              <Roadmap onBookSession={() => setIsContactModalOpen(true)} />
              <AirportDiaries />
              <KnowYourDestination />
              <StudentReviews />
              <AwardsAchievements />
              <ExpertCounselorsCTA />
              <BlogSection />
              <ContactMapSection />
            </>
          } />

          <Route path="/admin" element={<AdminPanel onExit={handleAdminExit} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/service-detail/:id" element={<ServiceDetailPage />} />
          <Route path="/blog-list" element={<BlogListPage />} />
          <Route path="/blog/:category/:slug" element={<BlogDetailWrapper />} />
          <Route path="/blog/:slug" element={<BlogDetailWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/study-india/:subPath" element={<StudyIndiaWrapper />} />
          <Route path="/mbbs-india/:titleSlug" element={<MBBSIndiaCollegeWrapper />} />
          <Route path="/:titleSlug" element={<CategoryTitleSlugWrapper />} />
          <Route path="/mbbs-abroad/:subPath" element={<LegacyMBBSAbroadRedirect />} />
          <Route path="/exams/:subPath" element={<EntranceExamWrapper />} />
          <Route path="/entrance-exams/:subPath" element={<EntranceExamWrapper />} />
          <Route path="/office/:slug" element={<OfficeDetailPage />} />
          <Route path="/college/:slug" element={<LegacyCollegeRedirect />} />
          <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" content={PRIVACY_POLICY_CONTENT} />} />
          <Route path="/terms-conditions" element={<PolicyPage title="Terms & Conditions" content={TERMS_CONTENT} />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

        {/* Global CTA Strip on all pages except Home and Contact */}
        {location.pathname !== '/' && location.pathname !== '/contact' && location.pathname !== '/admin' && (
          <GlobalCallToAction onOpen={() => setIsContactModalOpen(true)} />
        )}
      </main>

      {location.pathname !== '/admin' && <Footer />}

      {/* Floating Buttons */}
      <FloatingActions />

      {/* Contact Modal */}
      {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}

      {/* AI Counselor */}
      {isAICounselorOpen && <AICounselor onClose={() => setIsAICounselorOpen(false)} />}
    </div>
  );
};

export default App;
