import React, { useState } from "react";
import { CollegeDetailData } from "../types";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  data: CollegeDetailData;
}

const CollegeDetailPage: React.FC<Props> = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState<number>(-1);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(openFAQ === i ? -1 : i);
  };

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
            alt={data.title}
            className="w-full h-[400px] object-cover"
          />
        </picture>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-10 text-sm md:text-base text-gray-700 leading-relaxed">

        {/* TITLE */}
        <section>
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            {data.title}
          </h1>
        </section>

        {/* INTRO */}
        <section>
          <p className="text-justify">{data.intro?.text}</p>
        </section>

        {/* QUICK FACTS */}
        {data.quickFacts && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Quick Facts</h2>
            <table className="w-full border border-gray-300">
              <tbody>
                {Object.entries(data.quickFacts).map(([k, v], i) => (
                  <tr key={i}>
                    <td className="border p-3 font-semibold">{k}</td>
                    <td className="border p-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* OVERVIEW */}
        {data.quickOverview && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Overview</h2>
            <table className="w-full border border-gray-300">
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
              Why Choose {data.title}
            </h2>
            <ul className="space-y-2">
              {data.benefits.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <CTAButtons />

        {/* ELIGIBILITY */}
        {data.eligibility && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Eligibility Criteria
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.eligibility).map(([k, v], i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>
                    <strong>{k}:</strong> {v}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* DURATION */}
        {data.duration && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Course Duration
            </h2>
            <table className="w-full border">
              <tbody>
                <tr>
                  <td className="border p-3">MBBS</td>
                  <td className="border p-3">{data.duration.mbbs}</td>
                </tr>
                <tr>
                  <td className="border p-3">Internship</td>
                  <td className="border p-3">{data.duration.internship}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* SYLLABUS */}
        {data.syllabus && (
          <section>
            <h2 className="text-2xl font-bold mb-3">MBBS Syllabus</h2>
            <table className="w-full border">
              <tbody>
                {data.syllabus.map((item, i) => (
                  <tr key={i}>
                    <td className="border p-3 font-semibold">{item.year}</td>
                    <td className="border p-3">{item.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* DOCUMENTS */}
        {data.documents && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Documents Required
            </h2>
            <table className="w-full border">
              <tbody>
                {data.documents.map((doc, i) => (
                  <tr key={i}>
                    <td className="border p-3">{i + 1}</td>
                    <td className="border p-3">{doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* FEES */}
        {data.fees && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Fee Structure</h2>
            <table className="w-full border">
              <tbody>
                {data.fees.structure.map((f, i) => (
                  <tr key={i}>
                    <td className="border p-3 font-semibold">{f.label}</td>
                    <td className="border p-3">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.fees.note && (
              <p className="mt-2 text-sm text-gray-500">
                {data.fees.note}
              </p>
            )}
          </section>
        )}

        {/* COURSES */}
        {data.courses && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Courses Offered</h2>
            <ul className="list-disc ml-6">
              {data.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </section>
        )}

        {/* STUDENT LIFE */}
        {data.studentLife && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Student Life</h2>
            <ul className="space-y-2">
              {data.studentLife.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* HOSTEL */}
        {data.hostelFacilities && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Hostel Facilities
            </h2>
            <p className="mb-3">{data.hostelFacilities.intro}</p>
            <ul className="space-y-2">
              {data.hostelFacilities.features.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CAREER OPPORTUNITIES */}
        {data.careerOpportunities && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Career Opportunities
            </h2>
            <ul className="space-y-2">
              {Object.entries(data.careerOpportunities).map(([k, v], i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-indigo-500 mt-1" />
                  <span>
                    <strong>{k}:</strong> {v}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* PLACEMENTS */}
        {data.placements && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Career & Placements
            </h2>
            <ul className="space-y-2">
              {data.placements.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-purple-500 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* RECOGNITION */}
        {data.recognition && (
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Recognition & Accreditation
            </h2>
            <ul className="space-y-2">
              {data.recognition.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* GALLERY */}
        {data.gallery && (
          <section>
            <h2 className="text-2xl font-bold mb-3">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`gallery-${i}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {data.faqs && (
          <section>
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            {data.faqs.map((faq, i) => (
              <div key={i} className="border mb-2 rounded">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-3 text-left bg-gray-100 flex justify-between"
                >
                  {faq.question}
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