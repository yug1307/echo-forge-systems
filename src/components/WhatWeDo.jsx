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
    <section className="py-16 bg-gradient-to-b from-teal-100 to-blue-200 text-center">
      <h2 className="text-3xl font-bold mb-4">🚀 What We Do</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-7">
        We are experts in delivering cutting-edge solutions that empower your
        business to thrive in the digital era.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
