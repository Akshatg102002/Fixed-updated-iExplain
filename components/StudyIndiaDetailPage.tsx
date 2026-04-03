import React, { useState } from 'react';
import { StudyIndiaDetailData } from '../types.ts';
import ContactForm from './ContactForm.tsx';
import { useNavigate } from 'react-router-dom';

interface StudyIndiaDetailPageProps {
   data: StudyIndiaDetailData;
}

const StudyIndiaDetailPage: React.FC<StudyIndiaDetailPageProps> = ({ data }) => {
   const navigate = useNavigate();
   const [openFaq, setOpenFaq] = useState<number | null>(null);

   if (!data) return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900">
         <div className="w-24 h-24 bg-brand-light dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <i className="fa-solid fa-graduation-cap text-4xl text-brand-gold"></i>
         </div>
         <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4">Content Updating</h2>
         <p className="text-gray-500 font-medium max-w-md">We are curating the details for this program.</p>
         <button onClick={() => navigate('/contact')} className="mt-8 px-8 py-4 bg-brand-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-gold transition-all">
            Contact Us
         </button>
      </div>
   );

   return (
      <div className="bg-white dark:bg-slate-900 font-sans pb-0 animate-fade-in">

         {/* ── Hero ── */}
         <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <img src={data.heroImage} className="w-full h-full object-cover" alt={data.title} loading="lazy" decoding="async" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4 mt-20">
               <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight text-center drop-shadow-lg uppercase">
                  {data.title.split(' ')[0]}
               </h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

            {/* ── Intro ── */}
            <div>
               <h2 className="text-2xl md:text-3xl font-black text-brand-blue dark:text-white mb-6 leading-tight">
                  {data.title}
               </h2>
               <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-medium leading-loose text-justify">
                  {data.intro.split('\n\n').map((para, i) => (
                     <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
                  ))}
               </div>
            </div>

            {/* ── Quick Overview Table ── */}
            {data.overview && (
               <div>
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-8 text-center">
                     {data.overview.title}
                  </h3>
                  <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 dark:border-slate-700">
                     <table className="w-full text-sm">
                        <tbody>
                           {data.overview.table.map((row, idx) => (
                              <tr
                                 key={idx}
                                 className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800/60' : 'bg-white dark:bg-slate-800'}
                              >
                                 <td className="py-3 px-6 font-bold text-brand-blue dark:text-brand-gold w-1/3 border-r border-gray-200 dark:border-slate-700">
                                    {row.particular}
                                 </td>
                                 <td className="py-3 px-6 text-gray-700 dark:text-gray-300 font-medium">
                                    {row.details}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}

            {/* ── Why Section ── */}
            {data.why && (
               <div className="bg-[#022c4a] rounded-[2rem] p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-4 text-center">{data.why.title}</h3>
                  {data.why.description && (
                     <p className="text-sm text-white/70 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                        {data.why.description}
                     </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                     {data.why.points.map((point, idx) => (
                        <div key={idx} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                           <div className="flex items-center gap-3 mb-2">
                              <span className="bg-brand-gold text-[#022c4a] rounded-full w-7 h-7 flex items-center justify-center text-xs font-black shrink-0">
                                 {idx + 1}
                              </span>
                              <h4 className="font-black text-sm text-white">{point.title}</h4>
                           </div>
                           <p className="text-xs text-white/75 leading-relaxed pl-10">{point.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Eligibility Table ── */}
            {data.eligibility && (
               <div className="bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] p-10">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-8">
                     {data.eligibility.title}
                  </h3>
                  <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 dark:border-slate-700">
                     <table className="w-full text-sm">
                        <tbody>
                           {data.eligibility.table.map((row, idx) => (
                              <tr
                                 key={idx}
                                 className={idx % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50 dark:bg-slate-800/60'}
                              >
                                 <td className="py-3 px-6 font-bold text-brand-blue dark:text-brand-gold w-1/3 border-r border-gray-200 dark:border-slate-700">
                                    {row.criteria}
                                 </td>
                                 <td className="py-3 px-6 text-gray-700 dark:text-gray-300 font-medium">
                                    {row.details}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}

            {/* ── Documents ── */}
            {data.documents && (
               <div>
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-2 text-center">
                     {data.documents.title}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10">
                     {data.documents.subtitle}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* Detailed table */}
                     <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 dark:border-slate-700">
                        <table className="w-full text-sm">
                           <tbody>
                              {data.documents.table.map((row, idx) => (
                                 <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800/60' : 'bg-white dark:bg-slate-800'}
                                 >
                                    <td className="py-3 px-5 font-bold text-brand-blue dark:text-brand-gold border-r border-gray-200 dark:border-slate-700 w-2/5">
                                       {row.document}
                                    </td>
                                    <td className="py-3 px-5 text-gray-700 dark:text-gray-300 font-medium">
                                       {row.details}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     {/* Quick list */}
                     <div className="bg-[#022c4a] rounded-2xl p-8 text-white flex flex-col justify-center">
                        <p className="text-xs font-black uppercase tracking-widest text-brand-gold mb-6">
                           Quick Checklist
                        </p>
                        <ul className="space-y-3">
                           {data.documents.quickList.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                                 <i className="fa-solid fa-check text-brand-gold text-xs" />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            )}

            {/* ── Curriculum ── */}
            {data.curriculum && (
               <div className="border border-brand-gold rounded-[2rem] p-10 relative">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white bg-white dark:bg-slate-900 absolute -top-5 left-1/2 -translate-x-1/2 px-6 whitespace-nowrap">
                     {data.curriculum.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 mt-2">
                     {data.curriculum.description}
                  </p>

                  {/* Phases */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                     {data.curriculum.phases.map((phase, idx) => (
                        <div key={idx} className="bg-[#022c4a] text-white rounded-xl p-5">
                           <p className="text-xs font-black text-brand-gold uppercase tracking-widest mb-2">{phase.phase}</p>
                           <p className="text-sm font-medium leading-relaxed text-white/80">{phase.subjects}</p>
                        </div>
                     ))}
                  </div>

                  {/* Internship note */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5 mb-8 text-sm text-amber-900 dark:text-amber-300 font-medium leading-relaxed">
                     <i className="fa-solid fa-stethoscope mr-2" />
                     {data.curriculum.internship}
                  </div>

                  {/* Subjects by year table */}
                  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-700">
                     <table className="w-full text-sm">
                        <thead>
                           <tr className="bg-brand-blue text-white">
                              <th className="py-3 px-6 text-left font-black">Year</th>
                              <th className="py-3 px-6 text-left font-black">Subjects Covered</th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.curriculum.subjectsTable.map((row, idx) => (
                              <tr
                                 key={idx}
                                 className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800/60' : 'bg-white dark:bg-slate-800'}
                              >
                                 <td className="py-3 px-6 font-bold text-brand-blue dark:text-brand-gold border-r border-gray-200 dark:border-slate-700">
                                    {row.year}
                                 </td>
                                 <td className="py-3 px-6 text-gray-700 dark:text-gray-300 font-medium">
                                    {row.subjects}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}

            {/* ── Top Colleges ── */}
            {data.topColleges && (
               <div>
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-2 text-center">
                     {data.topColleges.title}
                  </h3>
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10">
                     {data.topColleges.description}
                  </p>
                  <div className="space-y-10">
                     {data.topColleges.stateWise.map((stateData, sIdx) => (
                        <div key={sIdx}>
                           <h4 className="text-lg font-black text-brand-blue dark:text-white mb-4 flex items-center gap-3">
                              <span className="w-2 h-6 bg-brand-gold rounded-full inline-block" />
                              Private Medical Colleges in {stateData.state}
                           </h4>
                           <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 dark:border-slate-700">
                              <table className="w-full text-sm">
                                 <thead>
                                    <tr className="bg-[#022c4a] text-white">
                                       {stateData.feeHeaders.map((header, hIdx) => (
                                          <th key={hIdx} className="py-3 px-5 text-left font-black whitespace-nowrap">
                                             {header}
                                          </th>
                                       ))}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {stateData.colleges.map((college, cIdx) => (
                                       <tr
                                          key={cIdx}
                                          className={cIdx % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800/60' : 'bg-white dark:bg-slate-800'}
                                       >
                                          {Object.values(college).map((val, vIdx) => (
                                             <td
                                                key={vIdx}
                                                className={`py-3 px-5 font-medium text-gray-700 dark:text-gray-300 ${vIdx === 0 ? 'font-bold text-brand-blue dark:text-white' : ''}`}
                                             >
                                                {String(val)}
                                             </td>
                                          ))}
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Career Scope ── */}
            {data.careerScope && (
               <div className="bg-gray-50 dark:bg-slate-800/50 rounded-[2rem] p-10">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-4 text-center">
                     {data.careerScope.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                     {data.careerScope.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {data.careerScope.paths.map((path, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow border border-gray-100 dark:border-slate-700 hover:-translate-y-1 transition-transform">
                           <div className="flex items-center gap-3 mb-3">
                              <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-black shrink-0">
                                 {idx + 1}
                              </div>
                              <h4 className="font-black text-brand-blue dark:text-white text-sm">{path.title}</h4>
                           </div>
                           <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-11">{path.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Advantages ── */}
            {data.advantages && (
               <div className="bg-[#EAE2CF] dark:bg-[#3a352a] p-10 rounded-3xl border-4 border-[#D4C5A9] dark:border-[#524b3b]">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-4 text-center">
                     {data.advantages.title}
                  </h3>
                  {data.advantages.description && (
                     <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
                        {data.advantages.description}
                     </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     {data.advantages.points.map((point, idx) => (
                        <div key={idx} className="bg-white/70 dark:bg-black/20 rounded-xl p-5 border border-[#D4C5A9] dark:border-[#524b3b]">
                           <div className="flex items-center gap-3 mb-2">
                              <i className="fa-solid fa-star text-brand-gold text-xs" />
                              <h4 className="font-black text-sm text-brand-blue dark:text-white">{point.title}</h4>
                           </div>
                           <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed pl-5">{point.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Why iExplain ── */}
            {data.whyIExplain && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-sm border border-gray-100 dark:border-slate-700">
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-4 text-center">
                     {data.whyIExplain.title}
                  </h3>
                  {data.whyIExplain.description && (
                     <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                        {data.whyIExplain.description}
                     </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {data.whyIExplain.points.map((point, idx) => (
                        <div key={idx} className="flex flex-col gap-2 p-5 rounded-xl bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-slate-700 hover:-translate-y-1 transition-transform">
                           <div className="flex items-center gap-3">
                              <i className="fa-solid fa-angles-right text-brand-gold text-sm" />
                              <h4 className="font-black text-sm text-brand-blue dark:text-white">{point.title}</h4>
                           </div>
                           <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-6">{point.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── FAQs ── */}
            {data.faqs && (
               <div>
                  <h3 className="text-2xl font-black text-brand-blue dark:text-white mb-10 text-center">
                     {data.faqs.title}
                  </h3>
                  <div className="max-w-3xl mx-auto space-y-3">
                     {data.faqs.items.map((faq, idx) => (
                        <div
                           key={idx}
                           className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden"
                        >
                           <button
                              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                              className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/60 transition-colors"
                           >
                              <span className="font-black text-sm text-brand-blue dark:text-white pr-4">
                                 {faq.question}
                              </span>
                              <i
                                 className={`fa-solid fa-chevron-down text-brand-gold text-xs shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                              />
                           </button>
                           {openFaq === idx && (
                              <div className="px-6 py-5 bg-gray-50 dark:bg-slate-800/60 border-t border-gray-200 dark:border-slate-700">
                                 <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                    {faq.answer}
                                 </p>
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Contact Form ── */}
            <div className="bg-brand-blue p-10 rounded-[2.5rem] shadow-xl text-white">
               <h3 className="text-2xl font-black mb-6 text-center">
                  Get Free Counseling for {data.title}
               </h3>
               <div className="bg-white rounded-3xl p-6 shadow-lg max-w-3xl mx-auto">
                  <ContactForm />
               </div>
            </div>

         </div>
      </div>
   );
};

export default StudyIndiaDetailPage;