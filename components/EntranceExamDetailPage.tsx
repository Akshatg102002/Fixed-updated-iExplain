import React, { useState } from 'react';
import { EntranceExamData } from '../types.ts';
import ContactForm from './ContactForm.tsx';
import { useNavigate } from 'react-router-dom';

interface EntranceExamDetailPageProps {
   data: EntranceExamData;
}

const EntranceExamDetailPage: React.FC<EntranceExamDetailPageProps> = ({ data }) => {
   const navigate = useNavigate();
   const [openFaq, setOpenFaq] = useState<number | null>(null);

   if (!data) return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-slate-900 animate-fade-in">
         <div className="w-24 h-24 bg-brand-light dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <i className="fa-solid fa-file-signature text-4xl text-brand-gold"></i>
         </div>
         <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4">Exam Details Updating</h2>
         <p className="text-gray-500 font-medium max-w-md">We are currently curating the latest syllabus and patterns for this exam.</p>
         <button onClick={() => navigate('/contact')} className="mt-8 px-8 py-4 bg-brand-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-gold transition-all">Contact Us</button>
      </div>
   );

   return (
      <div className="bg-white dark:bg-slate-900 font-sans pb-20 animate-fade-in">

         {/* ── Hero ── */}
         <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
               <img src={data.heroImage} className="w-full h-full object-cover" alt={data.title} />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-20">
               <span className="inline-block px-4 py-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Entrance Examination
               </span>
               <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 drop-shadow-xl">{data.title}</h1>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-16">

            {/* ── Overview ── */}
            {(data.intro || data.examParts || data.additionalNote) && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-black text-brand-blue dark:text-white mb-6 flex items-center">
                     <i className="fa-solid fa-circle-info text-brand-gold mr-3"></i> Overview
                  </h2>

                  {/* intro: string[] */}
                  {Array.isArray(data.intro)
                     ? data.intro.map((para, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300 text-lg leading-loose font-medium mb-4">
                           {para}
                        </p>
                     ))
                     : data.intro && (
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-loose font-medium mb-8">
                           {data.intro}
                        </p>
                     )}

                  {data.examParts && (
                     <div className="flex flex-wrap gap-4 mt-6 mb-8">
                        {data.examParts.map((part, i) => (
                           <span key={i} className="px-6 py-3 bg-gray-50 dark:bg-slate-700 rounded-xl font-black text-brand-blue dark:text-white uppercase tracking-wider text-sm border border-gray-100 dark:border-slate-600">
                              {i + 1}. {part}
                           </span>
                        ))}
                     </div>
                  )}

                  {data.additionalNote && (
                     <p className="text-sm text-gray-500 dark:text-gray-400 italic border-l-4 border-brand-gold pl-4">
                        {data.additionalNote}
                     </p>
                  )}
               </div>
            )}

            {/* ── Schedule ── */}
            {data.schedule && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 flex items-center">
                     <i className="fa-solid fa-calendar-days text-brand-gold mr-3"></i>
                     {data.schedule.title}
                  </h2>

                  {/* Exam Events */}
                  {data.schedule.examEvents && (
                     <div className="overflow-x-auto mb-10">
                        <table className="w-full text-sm">
                           <thead>
                              <tr className="bg-brand-blue text-white">
                                 <th className="px-5 py-3 text-left rounded-tl-xl font-black">Event</th>
                                 <th className="px-5 py-3 text-left font-black">Date</th>
                                 <th className="px-5 py-3 text-left rounded-tr-xl font-black">Details</th>
                              </tr>
                           </thead>
                           <tbody>
                              {data.schedule.examEvents.map((ev, i) => (
                                 <tr key={i} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-slate-700/40' : 'bg-white dark:bg-slate-800'}>
                                    <td className="px-5 py-3 font-bold text-gray-800 dark:text-gray-100">{ev.event}</td>
                                    <td className="px-5 py-3 font-medium text-brand-gold whitespace-nowrap">{ev.date}</td>
                                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{ev.details}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  )}

                  {/* Counselling Rounds */}
                  {data.schedule.counsellingRounds && (
                     <>
                        <h3 className="text-xl font-black text-brand-blue dark:text-white mb-5">
                           {data.schedule.counsellingRounds.title}
                        </h3>
                        <div className="overflow-x-auto">
                           <table className="w-full text-sm">
                              <thead>
                                 <tr className="bg-brand-gold/20 text-brand-blue dark:text-white">
                                    <th className="px-5 py-3 text-left rounded-tl-xl font-black">Round</th>
                                    <th className="px-5 py-3 text-left font-black">Dates</th>
                                    <th className="px-5 py-3 text-left rounded-tr-xl font-black">Details</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.schedule.counsellingRounds.rounds.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-slate-700/40' : 'bg-white dark:bg-slate-800'}>
                                       <td className="px-5 py-3 font-bold text-gray-800 dark:text-gray-100">{r.round}</td>
                                       <td className="px-5 py-3 font-medium text-brand-gold whitespace-nowrap">{r.dates}</td>
                                       <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{r.details}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </>
                  )}
               </div>
            )}

            {/* ── Eligibility ── */}
            {data.eligibility && (
               <div className="bg-[#02385A] text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                  <h2 className="text-3xl font-black mb-4 text-brand-gold relative z-10">{data.eligibility.title}</h2>
                  {data.eligibility.intro && (
                     <p className="text-white/80 mb-10 font-medium leading-relaxed relative z-10">{data.eligibility.intro}</p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">

                     {/* Basic Requirements */}
                     {data.eligibility.basicRequirements && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-4 uppercase tracking-wider text-sm">
                              {data.eligibility.basicRequirements.title}
                           </h3>
                           <ul className="space-y-3">
                              {data.eligibility.basicRequirements.points.map((pt, i) => (
                                 <li key={i} className="flex items-start text-sm font-medium opacity-90">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-1.5 mr-3 shrink-0"></div>
                                    {pt}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {/* Educational Qualification */}
                     {data.eligibility.educationalQualification && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-4 uppercase tracking-wider text-sm">
                              {data.eligibility.educationalQualification.title}
                           </h3>
                           <p className="text-sm opacity-80 mb-4 leading-relaxed">
                              {data.eligibility.educationalQualification.description}
                           </p>
                           <div className="space-y-2">
                              {data.eligibility.educationalQualification.marksRequired.map((m, i) => (
                                 <div key={i} className="flex justify-between text-sm font-bold">
                                    <span className="opacity-80">{m.category}</span>
                                    <span className="text-brand-gold">{m.marks}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Age Criteria */}
                     {data.eligibility.ageCriteria && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-3 uppercase tracking-wider text-sm">
                              {data.eligibility.ageCriteria.title}
                           </h3>
                           <p className="text-sm opacity-80 leading-relaxed">{data.eligibility.ageCriteria.description}</p>
                        </div>
                     )}

                     {/* Cut-Off Requirement */}
                     {data.eligibility.cutOffRequirement && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-3 uppercase tracking-wider text-sm">
                              {data.eligibility.cutOffRequirement.title}
                           </h3>
                           <p className="text-sm opacity-80 mb-4">{data.eligibility.cutOffRequirement.description}</p>
                           <div className="space-y-2">
                              {data.eligibility.cutOffRequirement.percentiles.map((p, i) => (
                                 <div key={i} className="flex justify-between text-sm font-bold">
                                    <span className="opacity-80">{p.category}</span>
                                    <span className="text-brand-gold">{p.percentile}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Quota Eligibility */}
                     {data.eligibility.quotaEligibility && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-4 uppercase tracking-wider text-sm">
                              {data.eligibility.quotaEligibility.title}
                           </h3>
                           <div className="space-y-3">
                              {data.eligibility.quotaEligibility.quotas.map((q, i) => (
                                 <div key={i}>
                                    <p className="text-sm font-black text-brand-gold">{q.quota}</p>
                                    <p className="text-sm opacity-80">{q.description}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Documents Required */}
                     {data.eligibility.documentsRequired && (
                        <div className="bg-white/10 p-6 rounded-2xl">
                           <h3 className="font-black text-brand-gold mb-3 uppercase tracking-wider text-sm">
                              {data.eligibility.documentsRequired.title}
                           </h3>
                           <p className="text-sm opacity-70 mb-3">{data.eligibility.documentsRequired.intro}</p>
                           <ul className="space-y-2">
                              {data.eligibility.documentsRequired.documents.map((doc, i) => (
                                 <li key={i} className="flex items-center text-sm font-medium opacity-90">
                                    <i className="fa-solid fa-file-lines text-brand-gold mr-3 text-xs"></i>
                                    {doc}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {/* ── Exam Pattern ── */}
            {data.examPattern && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4 flex items-center">
                     <i className="fa-solid fa-clipboard-list text-brand-gold mr-3"></i>
                     {data.examPattern.title}
                  </h2>
                  {data.examPattern.intro && (
                     <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{data.examPattern.intro}</p>
                  )}

                  {/* Particulars */}
                  {data.examPattern.particulars && (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {data.examPattern.particulars.map((item, i) => (
                           <div key={i} className="bg-gray-50 dark:bg-slate-700/50 p-5 rounded-2xl">
                              <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{item.key}</p>
                              <p className="font-black text-brand-blue dark:text-white text-sm">{item.value}</p>
                           </div>
                        ))}
                     </div>
                  )}

                  {/* Subject Distribution */}
                  {data.examPattern.subjectDistribution && (
                     <>
                        <h3 className="text-lg font-black text-brand-blue dark:text-white mb-4">
                           {data.examPattern.subjectDistribution.title}
                        </h3>
                        <div className="overflow-x-auto">
                           <table className="w-full text-sm">
                              <thead>
                                 <tr className="bg-brand-blue text-white">
                                    <th className="px-5 py-3 text-left rounded-tl-xl font-black">Subject</th>
                                    <th className="px-5 py-3 text-center font-black">Section A</th>
                                    <th className="px-5 py-3 text-center font-black">Section B</th>
                                    <th className="px-5 py-3 text-center font-black">Total Questions</th>
                                    <th className="px-5 py-3 text-center rounded-tr-xl font-black">Marks</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {data.examPattern.subjectDistribution.subjects.map((s, i) => {
                                    const isTotal = s.subject === 'Total';
                                    return (
                                       <tr key={i} className={isTotal
                                          ? 'bg-brand-gold/10 font-black'
                                          : i % 2 === 0 ? 'bg-gray-50 dark:bg-slate-700/40' : 'bg-white dark:bg-slate-800'}>
                                          <td className="px-5 py-3 font-bold text-gray-800 dark:text-gray-100">{s.subject}</td>
                                          <td className="px-5 py-3 text-center text-gray-600 dark:text-gray-300">{s.sectionA}</td>
                                          <td className="px-5 py-3 text-center text-gray-600 dark:text-gray-300">{s.sectionB}</td>
                                          <td className="px-5 py-3 text-center font-bold text-brand-blue dark:text-white">{s.totalQuestions}</td>
                                          <td className="px-5 py-3 text-center font-bold text-brand-gold">{s.marks}</td>
                                       </tr>
                                    );
                                 })}
                              </tbody>
                           </table>
                        </div>
                     </>
                  )}
               </div>
            )}

            {/* ── Admit Card ── */}
            {data.admitCard && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-4 flex items-center">
                     <i className="fa-solid fa-id-card text-brand-gold mr-3"></i>
                     {data.admitCard.title}
                  </h2>
                  {data.admitCard.intro && (
                     <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{data.admitCard.intro}</p>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* Steps */}
                     <div className="space-y-4">
                        {data.admitCard.steps.map((s, i) => (
                           <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700/30 rounded-2xl">
                              <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-sm shrink-0">
                                 {i + 1}
                              </div>
                              <div>
                                 <p className="font-black text-brand-blue dark:text-white text-sm mb-1">{s.step}</p>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">{s.description}</p>
                                 {s.subPoints && (
                                    <ul className="mt-2 space-y-1">
                                       {s.subPoints.map((sp, j) => (
                                          <li key={j} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                             <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 shrink-0"></span>
                                             {sp}
                                          </li>
                                       ))}
                                    </ul>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Details on admit card */}
                     {data.admitCard.detailsMentioned && (
                        <div className="bg-brand-blue/5 dark:bg-brand-blue/20 p-8 rounded-2xl">
                           <h3 className="font-black text-brand-blue dark:text-white mb-5 uppercase tracking-wider text-sm">
                              {data.admitCard.detailsMentioned.title}
                           </h3>
                           <ul className="space-y-3">
                              {data.admitCard.detailsMentioned.details.map((d, i) => (
                                 <li key={i} className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300">
                                    <i className="fa-solid fa-check text-brand-gold mr-3 text-xs"></i>
                                    {d}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {/* ── Preparation Books ── */}
            {data.preparationBooks && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 flex items-center">
                     <i className="fa-solid fa-book-open text-brand-gold mr-3"></i>
                     {data.preparationBooks.title}
                  </h2>
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm">
                        <thead>
                           <tr className="bg-brand-blue text-white">
                              <th className="px-5 py-3 text-left rounded-tl-xl font-black">Subject</th>
                              <th className="px-5 py-3 text-left font-black">Book Name</th>
                              <th className="px-5 py-3 text-left rounded-tr-xl font-black">Why This Book</th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.preparationBooks.books.map((b, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-slate-700/40' : 'bg-white dark:bg-slate-800'}>
                                 <td className="px-5 py-3 font-bold text-brand-blue dark:text-brand-gold whitespace-nowrap">{b.subject}</td>
                                 <td className="px-5 py-3 font-bold text-gray-800 dark:text-gray-100">{b.bookName}</td>
                                 <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{b.whyChoose}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}

            {/* ── Conclusion ── */}
            {data.conclusion && (
               <div className="bg-brand-blue/5 dark:bg-slate-800 p-10 rounded-[2.5rem] border border-brand-blue/10 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-6 flex items-center">
                     <i className="fa-solid fa-flag-checkered text-brand-gold mr-3"></i>
                     {data.conclusion.title}
                  </h2>
                  <div className="space-y-4">
                     {data.conclusion.paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300 leading-loose font-medium">{para}</p>
                     ))}
                  </div>
               </div>
            )}

            {/* ── FAQs ── */}
            {data.faqs && (
               <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-slate-700">
                  <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8 flex items-center">
                     <i className="fa-solid fa-circle-question text-brand-gold mr-3"></i>
                     {data.faqs.title}
                  </h2>
                  <div className="space-y-3">
                     {data.faqs.questions.map((faq, i) => (
                        <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden">
                           <button
                              onClick={() => setOpenFaq(openFaq === i ? null : i)}
                              className="w-full flex items-center justify-between p-5 text-left bg-gray-50 dark:bg-slate-700/40 hover:bg-brand-light dark:hover:bg-slate-700 transition-colors"
                           >
                              <span className="font-black text-brand-blue dark:text-white text-sm pr-4">{faq.question}</span>
                              <i className={`fa-solid fa-chevron-down text-brand-gold transition-transform ${openFaq === i ? 'rotate-180' : ''}`}></i>
                           </button>
                           {openFaq === i && (
                              <div className="p-5 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
                                 {faq.answer}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* ── Contact CTA ── */}
            <div className="bg-brand-blue p-10 rounded-[2.5rem] text-white">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <h2 className="text-3xl font-black mb-4">Need Guidance for {data.title}?</h2>
                     <p className="text-white/80 font-medium mb-8">
                        Our expert counselors can help you with exam strategy, college selection, and application processes.
                     </p>
                     <div className="flex gap-4">
                        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg">
                           <i className="fa-solid fa-phone"></i>
                           <span>+91 97738 47799</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white rounded-3xl p-6">
                     <ContactForm />
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default EntranceExamDetailPage;