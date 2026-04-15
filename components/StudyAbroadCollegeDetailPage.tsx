import React, { useState } from "react";
import { StudyAbroadCollegeDetailData } from "../types";
import { LOGO_URL } from "../data";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  data: StudyAbroadCollegeDetailData;
}

const StudyAbroadCollegeDetailPage: React.FC<Props> = ({ data }) => {
  // -1 means all FAQs collapsed by default
  const [openFAQ, setOpenFAQ] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-[400px] object-cover"
          />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-gray-700 leading-relaxed">

        {/* INTRO */}
        <section>
          <h2 className="text-2xl font-bold mb-3 text-center">
            {data.title}
          </h2>
          <p className="text-justify whitespace-pre-line">
            {data.intro.text}
          </p>
        </section>

        {/* QUICK OVERVIEW */}
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

        {/* BENEFITS */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Why Choose {data.title}?
          </h2>
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

        {/* SYLLABUS — only rendered when data.syllabus is present */}
        {data.syllabus && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Course Structure / Syllabus</h2>
            {/* Fixed: camelCase key to match JSON convention */}
            {data.syllabusIntro && (
              <p className="mb-3">{data.syllabusIntro}</p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-50">
                    {data.syllabus.headers.map((h, i) => (
                      <th key={i} className="border p-2 text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.syllabus.table.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {data.syllabus!.headers.map((h, j) => (
                        <td key={j} className="border p-2">{row[h]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FEES */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Fee Structure at {data.title}
          </h2>

          {/* Fixed: display the fees note/disclaimer if present */}
          {data.fees.note && (
            <p className="mb-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded p-3">
              {data.fees.note}
            </p>
          )}

          {data.fees.sections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border">
                  <thead>
                    <tr className="bg-gray-50">
                      {section.headers.map((h, i) => (
                        <th key={i} className="border p-2 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {section.headers.map((h, j) => (
                          <td key={j} className="border p-2">{row[h]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* DURATION */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Program Duration</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  {data.duration.headers.map((h, i) => (
                    <th key={i} className="border p-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.duration.table.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {data.duration.headers.map((h, j) => (
                      <td key={j} className="border p-2">{row[h]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SCHOLARSHIPS */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Scholarships at {data.title}
          </h2>
          <p className="mb-3">{data.scholarshipIntro}</p>
          <ul className="space-y-2">
            {data.scholarships.map((s, i) => (
              <li key={i} className="flex gap-2">
                <FaArrowRight className="mt-1 text-green-600 flex-shrink-0" />
                <span>
                  <strong>{s.title}:</strong> {s.details}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ELIGIBILITY */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Eligibility Criteria</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  {data.eligibility.headers.map((h, i) => (
                    <th key={i} className="border p-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.eligibility.table.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {data.eligibility.headers.map((h, j) => (
                      <td key={j} className="border p-2">{row[h]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Documents Required for Admission
          </h2>
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

        {/* STUDENT SUPPORT */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Student Support Services
          </h2>
          <p className="whitespace-pre-line">{data.studentSupport}</p>
        </section>

        {/* HOSTEL */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Accommodation & Hostel Facilities
          </h2>
          <p className="whitespace-pre-line">{data.hostelFacilities}</p>
        </section>

        {/* STUDENT LIFE */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Student Life at {data.title}
          </h2>
          <p className="whitespace-pre-line">{data.studentLife}</p>
        </section>

        {/* RECOGNITION */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Recognition & Accreditation
          </h2>
          <p className="whitespace-pre-line">{data.recognition}</p>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-2xl font-bold mb-3">
            Why Choose iExplain Education?
          </h2>
          <div className="flex gap-4 mb-4 items-center">
            <img src={LOGO_URL} alt="iExplain Education logo" className="w-20" />
            <p>{data.whyChooseUsIntro}</p>
          </div>
          {/* Fixed: whyChooseUs items are plain strings — render with arrow icons for visual consistency */}
          <ul className="space-y-2">
            {data.whyChooseUs.map((item, i) => (
              <li key={i} className="flex gap-2">
                <FaArrowRight className="mt-1 text-green-600 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CONCLUSION */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
          <p className="whitespace-pre-line">{data.conclusion}</p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            FAQs – {data.title}
          </h2>
          {data.faqs.map((faq, i) => (
            <div key={i} className="border mb-2 rounded overflow-hidden">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left p-3 font-semibold bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center gap-2"
                aria-expanded={openFAQ === i}
              >
                <span>{faq.question}</span>
                {openFAQ === i
                  ? <FaChevronUp className="flex-shrink-0 text-gray-500" />
                  : <FaChevronDown className="flex-shrink-0 text-gray-500" />
                }
              </button>
              {openFAQ === i && (
                <div className="p-3 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default StudyAbroadCollegeDetailPage;