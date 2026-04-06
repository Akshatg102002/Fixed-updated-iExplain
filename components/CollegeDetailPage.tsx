import React, { useState } from "react";
import { CollegeDetailData } from "../types";
import { FaCheckCircle } from "react-icons/fa";
import { LOGO_URL } from '../data.ts';

interface Props {
  data: CollegeDetailData;
}

const CollegeDetailPage: React.FC<Props> = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState<number>(-1);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(openFAQ === i ? -1 : i);
  };

  const collegeName = data.title;
  const coursetype = data.coursetype;
  const benefitItems = Array.isArray(data.benefits?.items) ? data.benefits.items : [];
  const feeRows = Array.isArray(data.fees?.structure) ? data.fees.structure : [];
  const feeHeaders = feeRows.length > 0 ? Object.keys(feeRows[0]) : [];

  const renderParagraphs = (text: string) =>
    text.split("\n\n").map((para, i) => (
      <p key={i} className="mb-4 leading-relaxed text-justify">
        {para}
      </p>
    ));

  const IconList = ({ items, color = "text-green-500" }: any) => (
    <ul className="space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-3">
          <FaCheckCircle className={`${color} w-5 h-5 mt-[2px] flex-shrink-0`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const CTAButtons = () => (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center my-6">
      <button className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        WhatsApp
      </button>
      <button className="bg-blue-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        Enquire Now
      </button>
      <button className="bg-red-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm w-full md:w-auto">
        Call Now
      </button>
    </div>
  );

  return (
    <div className="bg-white">

      {/* HERO */}
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img
            src={data.heroImage}
            alt={collegeName}
            className="w-full h-[400px] object-cover"
          />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-sm md:text-base text-gray-700">

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          {collegeName}
        </h1>

        {/* INTRO */}
        {data.intro && <section>{renderParagraphs(data.intro.text)}</section>}

        {/* OVERVIEW */}
        {data.quickOverview && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Overview of {collegeName}
            </h2>
            <table className="w-full border border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left font-semibold">
                    Particulars
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(data.quickOverview).map(([k, v], i) => (
                  <tr key={i}>
                    <td className="border p-3 font-semibold">{k}</td>
                    <td className="border p-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* BENEFITS */}
        {data.benefits && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Why Study {coursetype} at {collegeName}?
            </h2>

            {/* Intro */}
            {data.benefits.intro && (
              <p className="mb-4 text-gray-700">
                {data.benefits.intro}
              </p>
            )}

            {/* Inline heading + details (same style as your example) */}
            <ul className="space-y-2">
              {benefitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-justify">
                    <strong>{item.heading}:</strong> {item.details}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <CTAButtons />

        {data.syllabus && (
          <section>
            <h2 className="text-2xl font-bold mb-2">
              {coursetype} Syllabus at {collegeName}
            </h2>

            {data.SyllabusIntro && (
              <p className="mb-4 text-gray-700">
                {data.SyllabusIntro}
              </p>
            )}

            <table className="w-full border border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  {data.syllabus.headers.map((header, i) => (
                    <th key={i} className="border p-3 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.syllabus.table.map((row, i) => (
                  <tr key={i}>
                    {data.syllabus.headers.map((header, j) => (
                      <td
                        key={j}
                        className={`border p-3 ${j === 0 ? "font-semibold" : ""
                          }`}
                      >
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}


        {/* FEES */}
        {data.fees && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              {coursetype} Fee Structure of {collegeName}
            </h2>

            {data.intro && (
              <p className="mb-4 text-gray-700">
                {data.feesIntro}
              </p>
            )}

            {feeRows.length > 0 ? (
              <table className="w-full border border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {feeHeaders.map((key) => (
                      <th key={key} className="border p-3 text-left font-semibold capitalize">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, i) => (
                    <tr key={i}>
                      {feeHeaders.map((header, idx) => (
                        <td key={idx} className="border p-3">
                          {(row as Record<string, string>)[header] || ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-700">Fee details will be updated soon. Please contact our counselor for the latest fee structure.</p>
            )}
          </section>
        )}

        {/* DURATION */}
        {data.duration && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Duration of {coursetype} in {collegeName}
            </h2>

            {data.intro && (
              <p className="mb-4 text-gray-700">
                {data.durationIntro}
              </p>
            )}

            <table className="w-full border">
              <thead>
                <tr>
                  {data.duration.headers.map((header, i) => (
                    <th key={i} className="border p-3 font-semibold text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.duration.table.map((row, i) => (
                  <tr key={i}>
                    {data.duration.headers.map((header, j) => (
                      <td key={j} className="border p-3">
                        {row[header] || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* STUDENT SUPPORT */}
        {data.studentSupport && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Student Support at {collegeName}
            </h2>
            {renderParagraphs(data.studentSupport)}
          </section>
        )}

        {/* AFFILIATION / RECOGNITION */}
        {data.recognition && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Affiliation, Recognition & Achievements of {collegeName}
            </h2>
            <div className="space-y-4">
              {data.recognition.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* HOSTEL */}
        {data.hostelFacilities && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Hostel & Accommodation at {collegeName}
            </h2>
            <div className="space-y-4">
              {data.hostelFacilities.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {data.studentLife && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Student Life at {collegeName}
            </h2>
            <div className="space-y-4">
              {data.studentLife.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-6">
          <a
            href="/tbilisi-state-medical-university"
            className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Tbilisi State Medical University
          </a>
          <a
            href="/bashkir-state-medical-university"
            className="bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Bashkir State Medical University
          </a>
          <a
            href="/bangladesh-medical-college"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Bangladesh Medical College
          </a>
          <a
            href="/al-farabi-kazakh-national-university"
            className="bg-red-500 text-white px-5 py-2 rounded-md text-sm font-medium w-4/5 md:w-auto text-center hover:opacity-90 transition"
          >
            Al-Farabi Kazakh National University
          </a>
        </div>

        {/* WHY CHOOSE US */}
        {data.whyChooseUs && (
          <section className="max-w-6xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 text-center md:text-left leading-snug">
              Why Choose IExplain Education for Admission in {coursetype} at {collegeName}?
            </h2>

            {/* Logo + Intro */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6 mb-6">
              <img
                src={LOGO_URL}
                alt="IExplain Education Logo"
                className="w-24 sm:w-28 h-auto object-contain rounded-md border border-gray-200 p-2 bg-white shadow-sm"
              />

              <p className="text-center md:text-left leading-7 sm:leading-8">
                {data.whyChooseUsIntro}
              </p>
            </div>

            {/* KEEP YOUR POINTER SECTION EXACTLY SAME */}
            <div className="mt-10">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                What Makes Us Stand Out
              </h2>
              <ul className="space-y-3">
                {data.whyChooseUs.map((item: string, i: number) => {
                  const [title, desc] = item.split(":");
                  return (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-justify">
                        <strong>{title}:</strong> {desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-6 font-medium text-center md:text-left text-blue-800">
              {data.whyChooseUsTagline}
            </p>

          </section>
        )}

        {/* DOCUMENTS */}
        {data.documents && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Documents Required for Admission in {collegeName}
            </h2>
            <table className="w-full border border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left font-semibold">Document</th>
                  <th className="border p-3 text-left font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {data.documents.map((doc, i) => (
                  <tr key={i}>
                    <td className="border p-3 font-semibold">{doc.document}</td>
                    <td className="border p-3">{doc.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* CONCLUSION */}
        {data.conclusion && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
            {renderParagraphs(data.conclusion)}
          </section>
        )}

        {/* FAQ */}
        {data.faqs && (
          <section>
            <h2 className="text-2xl font-bold mb-4">
              FAQs - {coursetype} at {collegeName}
            </h2>
            {data.faqs.map((faq, i) => (
              <div key={i} className="border mb-2 rounded">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-3 text-left bg-gray-100 flex justify-between"
                >
                  <span>{i + 1}. {faq.question}</span>
                  <span>{openFAQ === i ? "-" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <div className="p-3">{faq.answer}</div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default CollegeDetailPage;
