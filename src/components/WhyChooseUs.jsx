import { Users, Lightbulb, TrendingUp, BarChart, Rocket, Palette, Headphones, DollarSign } from "lucide-react";

const features = [
  {
    title: "All-in-One Partner",
    description: "We bring web development, digital marketing, and SaaS solutions under one roof, eliminating the need to juggle multiple vendors.",
    icon: <Users size={35}/>,
  },
  {
    title: "Tailored Solutions",
    description: "Every business is unique — we create custom strategies and products that align with your goals, audience, and budget.",
    icon: <Lightbulb size={35}/>,
  },
  {
    title: "Proven Expertise",
    description: "A skilled team with experience across startups, SMEs, and enterprise-level projects in multiple industries.",
    icon: <TrendingUp size={35}/>,
  },
  {
    title: "Data-Driven Approach",
    description: "We don’t guess — we rely on analytics, insights, and performance metrics to deliver measurable results.",
    icon: <BarChart size={35}/>  
  },
  {
    title: "Scalable & Future-Ready",
    description: "Our solutions are built to grow with your business, keeping you ahead of trends and tech changes.",
    icon: <Rocket size={35}/>
  },
  {
    title: "Creative + Technical Excellence",
    description: "We blend innovative design, robust technology, and impactful marketing for maximum brand impact.",
    icon: <Palette size={35}/> 
  },
  {
    title: "End-to-End Support",
    description: "From idea to execution to post-launch maintenance — we’re with you every step of the way.",
    icon: <Headphones size={35}/>,
  },
  {
    title: "Affordable Quality",
    description: "Delivering enterprise-level quality at competitive, transparent pricing.",
    icon: <DollarSign size={35}/>,
  },
];
 
const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-500 to-blue-500 py-10 px-5 space-y-6">
      <h2 className="text-4xl font-bold text-center">Why Choose Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl hover:-translate-y-1 text-center
            transition-all duration-300 border border-gray-100">
                
            <div className="text-blue-600">{feature.icon} </div>
            <h3 className="text-xl font-semibold text-gray-900 my-2">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs
