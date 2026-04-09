import React, { useState } from "react";
import { StudyAbroadCollegeDetailData } from "../types";
import { LOGO_URL } from "../data.ts";

interface Props {
  data: StudyAbroadCollegeDetailData;
}

const StudyAbroadCollegeDetailPage: React.FC<Props> = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState<number>(-1);

  const renderParagraphs = (text: string) =>
    text.split("\n\n").map((para, i) => (
      <p key={i} className="mb-4 leading-relaxed text-justify">
        {para}
      </p>
    ));

  return (
    <div className="bg-white">
      <section>
        <picture>
          <source media="(max-width: 768px)" srcSet={data.heroImageMobile} />
          <img src={data.heroImage} alt={data.title} className="w-full h-[400px] object-cover" />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-sm md:text-base text-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{data.title}</h1>

        <section>{renderParagraphs(data.intro.text)}</section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Overview of {data.title}</h2>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left font-semibold">Particular</th>
                <th className="border p-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.quickOverview).map(([key, value], i) => (
                <tr key={i}>
                  <td className="border p-3 font-semibold">{key}</td>
                  <td className="border p-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Why Study {data.coursetype} at {data.title}?
          </h2>
          <p className="mb-4">{data.benefits.intro}</p>
          <ul className="space-y-2">
            {data.benefits.items.map((item, i) => (
              <li key={i}>
                <strong>{item.heading}:</strong> {item.details}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">
            {data.coursetype} Syllabus at {data.title}
          </h2>
          <p className="mb-4">{data.SyllabusIntro}</p>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {data.syllabus.headers.map((header) => (
                  <th key={header} className="border p-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.syllabus.table.map((row, i) => (
                <tr key={i}>
                  {data.syllabus.headers.map((header) => (
                    <td key={header} className="border p-3">
                      {row[header] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            {data.coursetype} Fee Structure of {data.title}
          </h2>
          {data.fees.sections.map((section, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <table className="w-full border border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    {section.headers.map((header) => (
                      <th key={header} className="border p-3 text-left font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, idx) => (
                    <tr key={idx}>
                      {section.headers.map((header) => (
                        <td key={header} className="border p-3">
                          {row[header] || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Duration of Programs</h2>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {data.duration.headers.map((header) => (
                  <th key={header} className="border p-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.duration.table.map((row, i) => (
                <tr key={i}>
                  {data.duration.headers.map((header) => (
                    <td key={header} className="border p-3">
                      {row[header] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Student Support</h2>
          {renderParagraphs(data.studentSupport)}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Recognition</h2>
          {renderParagraphs(data.recognition)}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Hostel & Accommodation</h2>
          {renderParagraphs(data.hostelFacilities)}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Student Life</h2>
          {renderParagraphs(data.studentLife)}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Scholarships</h2>
          <p className="mb-4">{data.scholarshipIntro}</p>
          <ul className="space-y-2">
            {data.scholarships.map((item, i) => (
              <li key={i}>
                <strong>{item.title}:</strong> {item.details}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Eligibility Criteria</h2>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {data.eligibility.headers.map((header) => (
                  <th key={header} className="border p-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.eligibility.table.map((row, i) => (
                <tr key={i}>
                  {data.eligibility.headers.map((header) => (
                    <td key={header} className="border p-3">
                      {row[header] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose iExplain Education</h2>
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="iExplain Education Logo" className="w-20 h-20 object-contain" />
            <p>{data.whyChooseUsIntro}</p>
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {data.whyChooseUs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Required Documents</h2>
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left font-semibold">Document</th>
                <th className="border p-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.documents.map((row, i) => (
                <tr key={i}>
                  <td className="border p-3 font-semibold">{row.document}</td>
                  <td className="border p-3">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Conclusion</h2>
          {renderParagraphs(data.conclusion)}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">FAQs</h2>
          {data.faqs.map((faq, i) => (
            <div key={i} className="border mb-2 rounded">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                className="w-full p-3 text-left bg-gray-100 flex justify-between"
              >
                <span>{faq.question}</span>
                <span>{openFAQ === i ? "-" : "+"}</span>
              </button>
              {openFAQ === i && <div className="p-3">{faq.answer}</div>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default StudyAbroadCollegeDetailPage;
