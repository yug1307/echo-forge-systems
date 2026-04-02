import { Code, Globe, Cloud, Cpu } from "lucide-react"; // icons

const WhatWeDo = () => {
  const services = [
    {
      title: "Web Development", 
      desc: "Modern, responsive, and scalable websites tailored to your business.",
      icon: <Code size={40} className="text-indigo-600" />,
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media, and online campaigns to grow your digital presence.",
      icon: <Globe size={40} className="text-green-600" />,
    },
    {
      title: "Software as a Service (SaaS)",
      desc: "Custom SaaS applications that simplify business processes.",
      icon: <Cloud size={40} className="text-blue-600" />,
    },
    { 
      title: "IoT Development",
      desc: "Smart IoT solutions connecting devices for Industry 4.0.",
      icon: <Cpu size={40} className="text-purple-600" />,
    },
  ];

  return (
    <section className="py-12 px-6 bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold text-amber-500 tracking-[.3em] uppercase">🚀 What We Do</h2>
      <p className="text-lg text-white/45 my-2">
        We are experts in delivering cutting-edge solutions that empower your
        business to thrive in the digital era
      </p>
              <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-white rounded-2xl p-6 hover:border-amber-500 hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-white text-2xl font-semibold my-2">{service.title}</h3>
            <p className="text-white/45 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
