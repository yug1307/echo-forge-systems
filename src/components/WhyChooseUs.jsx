import { Users, Lightbulb, TrendingUp, BarChart, Rocket, Palette, Headphones, DollarSign } from "lucide-react";

const features = [
  {
    title: "All-in-One Partner",
    desc: "We bring web development, digital marketing, and SaaS solutions under one roof, eliminating the need to juggle multiple vendors.",
    icon: <Users size={35}/>,
  },
  {
    title: "Tailored Solutions",
    desc: "Every business is unique — we create custom strategies and products that align with your goals, audience, and budget.",
    icon: <Lightbulb size={35}/>,
  },
  {
    title: "Proven Expertise",
    desc: "A skilled team with experience across startups, SMEs, and enterprise-level projects in multiple industries.",
    icon: <TrendingUp size={35}/>,
  },
  {
    title: "Data-Driven Approach",
    desc: "We don’t guess — we rely on analytics, insights, and performance metrics to deliver measurable results.",
    icon: <BarChart size={35}/>  
  },
  {
    title: "Scalable & Future-Ready",
    desc: "Our solutions are built to grow with your business, keeping you ahead of trends and tech changes.",
    icon: <Rocket size={35}/>
  },
  {
    title: "Creative + Technical Excellence",
    desc: "We blend innovative design, robust technology, and impactful marketing for maximum brand impact.",
    icon: <Palette size={35}/> 
  },
  {
    title: "End-to-End Support",
    desc: "From idea to execution to post-launch maintenance — we’re with you every step of the way.",
    icon: <Headphones size={35}/>,
  },
  {
    title: "Affordable Quality",
    desc: "Delivering enterprise-level quality at competitive, transparent pricing.",
    icon: <DollarSign size={35}/>,
  },
];
 
const WhyChooseUs = () => {
  return (
    <div className="bg-zinc-950 text-white py-12 px-6 space-y-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

      <div className="text-center space-y-3">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">Our Edge</p>
        <h2 className="ff text-4xl md:text-5xl font-black">Why Choose <span className="text-amber-400">Us</span></h2>
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {features.map((feat, index)=>(
          <div key={index} className="rounded-2xl border border-white/8 p-7 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
        
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
            <h3 className="ff text-white font-black text-lg my-2">{feat.title}</h3>
            <p className="text-white/45 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs
