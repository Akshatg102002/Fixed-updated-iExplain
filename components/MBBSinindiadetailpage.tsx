import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

// This component assumes data is passed via props.
const LOGO_URL = "https://via.placeholder.com/150?text=iExplain+Education";

const MBBSinindiadetailpage = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  if (!data) return <div className="p-10 text-center text-gray-500">Loading details...</div>;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img src={data.heroImage} alt={data.title} className="w-full h-[400px] object-cover" />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-gray-700 leading-relaxed">
        
        {/* Updated Heading: Overview of MBBS in Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center">{data.title}</h2>
          <p className="text-justify whitespace-pre-line">{data.intro.text}</p>
        </section>

        {/* Updated Heading: Parameter Details (Table Title) */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-left">Overview of {data.title}</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {Object.entries(data.quickOverview).map(([key, value], i) => (
              <div key={i}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </section>

        {/* Updated Heading: Why Choose Uttar Pradesh for MBBS in 2026? */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Why Choose {data.title.includes('in') ? data.title.split('in')[1].trim() : 'Uttar Pradesh'} for MBBS in 2026?</h2>
          <p className="mb-3 italic">{data.benefits.intro}</p>
          <ul className="space-y-2">
            {data.benefits.items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <ArrowRight className="mt-1 text-green-600 flex-shrink-0 w-4 h-4" />
                <span>
                  <strong>{item.heading}:</strong> {item.details}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Updated Heading: MBBS in Uttar Pradesh – Syllabus */}
        {data.syllabus && (
          <section>
            <h2 className="text-2xl font-bold mb-3">{data.title} – Syllabus</h2>
            {data.SyllabusIntro && <p className="mb-3">{data.SyllabusIntro}</p>}
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    {data.syllabus.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.syllabus.table.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {data.syllabus.headers.map((h, j) => (
                        <td key={j} className="border p-2">
                          {row[h]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Updated Heading: MBBS Internship in Uttar Pradesh */}
        {data.internship && (
          <section>
            <h2 className="text-2xl font-bold mb-3">MBBS Internship in {data.title.includes('in') ? data.title.split('in')[1].trim() : 'Uttar Pradesh'}</h2>
            <p className="mb-3">{data.internship.intro}</p>
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    {data.internship.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.internship.table.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {data.internship.headers.map((h, j) => (
                        <td key={j} className="border p-2">
                          {row[h]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Updated Heading: Top MBBS Colleges In Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Top MBBS Colleges In {data.title.includes('in') ? data.title.split('in')[1].trim() : 'Uttar Pradesh'}</h2>
          {data.fees.note && <p className="mb-4 text-sm text-gray-600 italic">{data.fees.note}</p>}
          {data.fees.sections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border">
                  <thead>
                    <tr className="bg-gray-50">
                      {section.headers.map((h, i) => (
                        <th key={i} className="border p-2 text-left">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {section.headers.map((h, j) => (
                          <td key={j} className="border p-2">
                            {row[h]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Updated Heading: UP NEET CUT OFF 2025 */}
        {data.cutOff && (
          <section>
            <h2 className="text-2xl font-bold mb-3">{data.cutOff.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    {data.cutOff.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left text-xs uppercase font-bold tracking-tight">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.cutOff.table.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {data.cutOff.headers.map((h, j) => (
                        <td key={j} className="border p-2 text-xs">
                          {row[h] === '------------' ? 'N/A' : row[h]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Updated Headings: Admission Process (Step-by-Step) */}
        {(data.admissionProcess?.ug || data.admissionProcess?.pg) && (
          <section className="space-y-10">
            {data.admissionProcess.ug && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{data.admissionProcess.ug.title}</h2>
                <p className="mb-4">{data.admissionProcess.ug.intro}</p>
                <div className="space-y-3">
                  <h3 className="font-bold underline">Step-by-Step Admission Process</h3>
                  {data.admissionProcess.ug.steps.map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <span className="font-bold">{i + 1}.</span>
                      <span><strong>{item.step}:</strong> {item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {data.admissionProcess.pg && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{data.admissionProcess.pg.title}</h2>
                <p className="mb-4">{data.admissionProcess.pg.intro}</p>
                <div className="space-y-3">
                  <h3 className="font-bold underline">Step-by-Step Admission Process</h3>
                  {data.admissionProcess.pg.steps.map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <span className="font-bold">{i + 1}.</span>
                      <span><strong>{item.step}:</strong> {item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Updated Heading: Eligibility Criteria for Medical Courses in Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-left">Eligibility Criteria for Medical Courses in Uttar Pradesh</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  {data.eligibility.headers.map((h, i) => (
                    <th key={i} className="border p-2 text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.eligibility.table.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {data.eligibility.headers.map((h, j) => (
                      <td key={j} className="border p-2">
                        {row[h]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Updated Heading: Documents Required for MBBS in Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Documents Required for {data.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.documents && (
              <div>
                <h3 className="font-bold mb-2 text-blue-800">Required documents for UG candidates</h3>
                <ul className="space-y-2">
                  {data.documents.map((doc, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <ArrowRight className="mt-1 text-green-600 flex-shrink-0 w-3 h-3" />
                      <span><strong>{doc.document}:</strong> {doc.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {data.documentsPG && (
              <div>
                <h3 className="font-bold mb-2">Required documents for PG candidates</h3>
                <ul className="space-y-2">
                  {data.documentsPG.map((doc, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <ArrowRight className="mt-1 text-gray-500 flex-shrink-0 w-3 h-3" />
                      <span><strong>{doc.document}:</strong> {doc.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Updated Heading: Why Choose iExplain Education for MBBS in Uttar Pradesh? */}
        {data.whyChooseUs?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Why Choose iExplain Education for {data.title}?</h2>
            <div className="flex gap-4 mb-4 items-center">
              <img src={LOGO_URL} alt="iExplain Education logo" className="w-20" />
              <p>{data.whyChooseUsIntro}</p>
            </div>
            <ul className="space-y-2">
              {data.whyChooseUs.map((item, i) => {
                const parts = item.split(': ');
                return (
                  <li key={i} className="flex gap-2">
                    <ArrowRight className="mt-1 text-green-600 flex-shrink-0 w-4 h-4" />
                    <span>
                      {parts.length > 1 ? (
                        <><strong>{parts[0]}:</strong> {parts[1]}</>
                      ) : item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Updated Heading: Conclusion – MBBS in Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Conclusion – {data.title}</h2>
          <p className="whitespace-pre-line italic text-gray-600">{data.conclusion}</p>
        </section>

        {/* Updated Heading: FAQ – MBBS in Uttar Pradesh */}
        <section>
          <h2 className="text-2xl font-bold mb-4">FAQ – {data.title}</h2>
          {data.faqs.map((faq, i) => (
            <div key={i} className="border mb-2 rounded overflow-hidden">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left p-3 font-semibold bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center gap-2"
                aria-expanded={openFAQ === i}
              >
                <span>{faq.question}</span>
                {openFAQ === i ? (
                  <ChevronUp className="flex-shrink-0 text-gray-500 w-4 h-4" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-500 w-4 h-4" />
                )}
              </button>
              {openFAQ === i && <div className="p-3 bg-white border-t text-sm leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MBBSinindiadetailpage;