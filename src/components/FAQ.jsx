import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What services does your IT company provide?",
    answer: "We specialize in custom software development, web and mobile app development, cloud and DevOps solutions, cybersecurity, and AI-driven automation."
  },
  {
    id:2,
    question: "Do you offer end-to-end software development services?",
    answer: "Yes, we handle everything from ideation and UI/UX design to development, deployment, and post-launch support."
  },
  { 
    id:3,
    question: "What industries do you serve?",
    answer: "We work across industries like healthcare, finance, retail, logistics, education, and startups with tailor-made tech solutions."
  },
  { 
    id:4,
    question: "How much does it cost to build a software solution?",
    answer: "The cost depends on factors like project complexity, features, platforms, and timeline. We offer free consultations to help estimate your project budget."
  },
  { 
    id:5,
    question: "What are your most popular service packages?",
    answer: [
      "Starter Plan – For New Businesses & small teams",
      "Growth Plan – For Growing SMBs",
      "Enterprise Plan – For Large enterprises & scaling orgs"
    ]
  },
  { 
    id:6,
    question: "How do you ensure the security of my data?",
    answer: "We follow industry best practices for encryption, secure coding, and regular vulnerability checks to keep your data safe."
  },
  { 
    id:7,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. We offer flexible maintenance packages for bug fixes, updates, monitoring, and performance improvements."
  },
  { 
    id:8,
    question: "Do you offer custom solutions or use pre-built templates?",
    answer: "We primarily build custom solutions tailored to your business goals and requirements, ensuring flexibility and scalability."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section className="p-5 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
      {faqs.map((faq, index) => ( 
      <div key={index} className="border border-gray-400 rounded-lg p-4 cursor-pointer hover:bg-purple-100 transition"
      onClick={() => setOpenIndex(openIndex === index ? null : index)}>

      <h3 className="text-lg font-semibold">{faq.question}</h3>

      {openIndex === index && (
      <div className="my-2 text-gray-950">
        {Array.isArray(faq.answer) ? (
          <ul className="list-disc ml-6">
            {faq.answer.map((item, i) => ( 
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{faq.answer}</p>
        )}
      </div>
      )}
      
      </div>
      ))}
      </div>
    </section>
  );
}
