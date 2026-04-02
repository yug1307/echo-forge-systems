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
  const [open, setOpen] = useState(null);
  
  return (
    <section className="bg-zinc-950 text-white py-12 px-6 space-y-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff{font-family:'Fraunces',serif}@keyframes slideDown{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
      .sd{animation:slideDown .25s ease}`}</style>

      <div className="text-center space-y-3">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">Got Questions?</p>
        <h2 className="ff text-4xl md:text-5xl font-black">Frequently Asked <span className="text-amber-400">Questions</span></h2>
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto"/>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map(({question,answer},i)=>(
          <div key={i} onClick={()=>setOpen(open===i?null:i)}
            className={`rounded-2xl border cursor-pointer p-5 transition-all duration-300 overflow-hidden border-amber-400/40`}>
            
            <div className="flex items-center justify-between gap-4">
              <span className={`font-medium transition-colors ${open===i?"text-white":"text-white/70"}`}>{question}</span>
              <span className={`text-amber-400 text-xl shrink-0 transition-transform duration-300 ${open===i?"rotate-45":"rotate-0"}`}>+</span>
            </div>

            {open===i&&(
              <div className="sd text-white/50 leading-relaxed">{answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
