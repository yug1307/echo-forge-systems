import { Link } from "react-router-dom";

const services = [ 
  { icon: "🖥️", title: "Web Development", desc: "Build high-performance websites that drive growth.", link: "/web-development" },
  { icon: "🔒", title: "Cyber Security", desc: "Protecting your digital assets. Securing your future.", link: "/cyber-security" },
  { icon: "☁️", title: "Software as a Service", desc: "Build, launch & scale powerful SaaS products.", link: "/saas" },
  { icon: "📡", title: "Internet of Things", desc: "Connecting devices. Automating intelligence. Powering the future.", link: "/iot" },
];
 
export default function Services() {
  return (
    <div className="bg-zinc-950 text-white py-24 px-6 md:px-16" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');
      .ff{font-family:'Fraunces',serif}`}</style>

      <div className="text-center mb-14">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400 mb-3">What We Offer</p>
        <h2 className="ff text-4xl md:text-5xl font-black">Our <span className="text-amber-400">Services</span></h2>
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto mt-5"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {services.map((service, index)=>(

          <div 
            key={index} 
            className="rounded-2xl space-y-3 border-2 border-white/8 p-7 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300">
            
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="ff text-white font-black text-lg leading-snug">{service.title}</h3>
            <p className="text-white/45 text-sm leading-relaxed flex-1">{service.desc}</p>

            <Link to={service.link} className="inline-block border border-white/50 hover:border-rose-400 w-full py-3 rounded-md">
              <div className="text-white text-center font-semibold">Get Now</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}