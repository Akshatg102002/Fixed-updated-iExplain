import React, { useState } from 'react';
import { MBBSIndiaCollegeDetailData } from '../types';
import { LOGO_URL } from '../data';
import { FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Props {
  data: MBBSIndiaCollegeDetailData;
}

const MBBSinindiadetailpage: React.FC<Props> = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-white">
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img src={data.heroImage} alt={data.title} className="w-full h-[400px] object-cover" />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center">{data.title}</h2>
          <p className="text-justify whitespace-pre-line">{data.intro.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Quick Overview</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {Object.entries(data.quickOverview).map(([key, value], i) => (
              <div key={i}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Why Choose {data.title}?</h2>
          <p className="mb-3">{data.benefits.intro}</p>
          <ul className="space-y-2">
            {data.benefits.items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <FaArrowRight className="mt-1 text-green-600 flex-shrink-0" />
                <span>
                  <strong>{item.heading}:</strong> {item.details}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {data.syllabus && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Course Structure / Syllabus</h2>
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
                      {data.syllabus!.headers.map((h, j) => (
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

        {data.internship && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Internship Details</h2>
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
                      {data.internship!.headers.map((h, j) => (
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

        <section>
          <h2 className="text-2xl font-bold mb-3">Fee Structure at {data.title}</h2>
          {data.fees.note && <p className="mb-4 text-sm text-gray-600">{data.fees.note}</p>}
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

        {data.cutOff && (
          <section>
            <h2 className="text-2xl font-bold mb-3">{data.cutOff.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    {data.cutOff.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.cutOff.table.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {data.cutOff!.headers.map((h, j) => (
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

        <section>
          <h2 className="text-2xl font-bold mb-3">Eligibility Criteria</h2>
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

        <section>
          <h2 className="text-2xl font-bold mb-3">Documents Required for Admission</h2>
          <ul className="space-y-2">
            {data.documents.map((doc, i) => (
              <li key={i} className="flex gap-2">
                <FaArrowRight className="mt-1 text-green-600 flex-shrink-0" />
                <span>
                  <strong>{doc.document}:</strong> {doc.details}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {data.whyChooseUs?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Why Choose iExplain Education?</h2>
            <div className="flex gap-4 mb-4 items-center">
              <img src={LOGO_URL} alt="iExplain Education logo" className="w-20" />
              <p>{data.whyChooseUsIntro}</p>
            </div>
            <ul className="space-y-2">
              {data.whyChooseUs.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaArrowRight className="mt-1 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
          <p className="whitespace-pre-line">{data.conclusion}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">FAQs – {data.title}</h2>
          {data.faqs.map((faq, i) => (
            <div key={i} className="border mb-2 rounded overflow-hidden">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left p-3 font-semibold bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center gap-2"
                aria-expanded={openFAQ === i}
              >
                <span>{faq.question}</span>
                {openFAQ === i ? (
                  <FaChevronUp className="flex-shrink-0 text-gray-500" />
                ) : (
                  <FaChevronDown className="flex-shrink-0 text-gray-500" />
                )}
              </button>
              {openFAQ === i && <div className="p-3 bg-white border-t">{faq.answer}</div>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MBBSinindiadetailpage;
