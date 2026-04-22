import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Cloud, Lock, Rocket, BarChart3, RefreshCcw } from 'lucide-react'
import TechnologiesUsed from './TechnologiesUsed'

const whatWeOffer = [
  { 
    id: 1, color: "text-emerald-400", icon: <Rocket size={32} className="text-red-500"/>, title: "SaaS Product Development", 
    desc: "End-to-end development of SaaS applications tailored to your business model",
    includes: [ 
      { dot: "bg-emerald-300", text: "Custom SaaS architecture design" },
      { dot: "bg-emerald-300", text: "MVP & full-scale product development" },
      { dot: "bg-emerald-300", text: "Multi-tenant application development" },
      { dot: "bg-emerald-300", text: "Subscription & billing integration" },
      { dot: "bg-emerald-300", text: "Role-based access control (RBAC)" }
    ]
  },
  { 
    id: 2, color: "text-sky-400", icon: <Cloud size={32} className="text-gray-500"/>, title: "Cloud-Native Solutions", 
    desc: "We build SaaS platforms optimized for modern cloud environments",
    includes: [
      { dot: "bg-sky-300", text: "AWS / GCP deployment" },
      { dot: "bg-sky-300", text: "Scalable microservices architecture" },
      { dot: "bg-sky-300", text: "Auto-scaling & load balancing" },
      { dot: "bg-sky-300", text: "High availability & fault tolerance" }
    ]
  },
  { 
    id: 3, color: "text-amber-400", icon: <Lock size={32} className="text-amber-500"/>, title: "Security & Compliance", 
    desc: "Enterprise-grade security baked into every SaaS product",
    includes: [
      { dot: "bg-amber-300", text: "Secure authentication (OAuth, JWT, SSO)" },
      { dot: "bg-amber-300", text: "Data encryption & API security" },
      { dot: "bg-amber-300", text: "Compliance-ready architecture (GDPR, SOC-2 ready)" },
      { dot: "bg-amber-300", text: "Regular security audits & best practices" }
    ]
  },
  {
    id: 4, color: "text-emerald-400", icon: <BarChart3 size={32} className="text-purple-500"/>, title: "SaaS Analytics & Performance",
    desc: "Make data-driven decisions with built-in analytics",
    includes: [
      { dot: "bg-emerald-300", text: "User behavior tracking" },
      { dot: "bg-emerald-300", text: "Usage & performance analytics" },
      { dot: "bg-emerald-300", text: "Custom dashboards & reports" },
      { dot: "bg-emerald-300", text: "Real-time monitoring & alerts" }
    ]
  },
  {
    id: 5, color: "text-sky-400", icon: <RefreshCcw size={32} className="text-red-500"/>, title: "Maintenance & Scaling",
    desc: "Your SaaS grows—we make sure it stays fast, stable, and secure",
    includes: [
      { dot: "bg-sky-300", text: "Ongoing support & maintenance" },
      { dot: "bg-sky-300", text: "Feature upgrades & enhancements" },
      { dot: "bg-sky-300", text: "Performance optimization" },
      { dot: "bg-sky-300", text: "Version management & CI/CD pipelines" }
    ]
  }
]

const audience = [
  { icon: "🚀", title: "Startups", desc: "Building MVPs fast and lean" },
  { icon: "🏢", title: "Enterprises", desc: "Modernizing legacy software" },
  { icon: "🔄", title: "Businesses", desc: "Moving to subscription models" },
  { icon: "🌍", title: "Product Companies", desc: "Scaling globally with confidence" }
];

const whyChooseUs = [
  { icon: "📐", text: "Scalable SaaS Architecture" },
  { icon: "🔒", text: "Secure & Performance-Driven Development" },
  { icon: "💼", text: "Business-Focused Solutions" },
  { icon: "💬", text: "Transparent Communication & Support" },
  { icon: "🌱", text: "Long-Term Growth Partnership" }
];

const SaaS = () => {
  return (
    <>
    <Topbar/>
      <header className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc-900 py-10 px-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="flex flex-col justify-center text-center space-y-2">
          <h2 className="ff text-3xl font-bold text-white">☁ <span className="text-amber-400">Software as a Service</span> (SaaS)</h2>
        
          <p className="text-white/60 text-lg leading-relaxed">
          We help businesses design, develop, and scale <span className="font-semibold text-sky-400">secure, 
          high-performance SaaS platforms</span> that solve real problems and grow with your users. 
          From MVP to enterprise-grade systems, our SaaS solutions are cloud-ready, scalable, and future-proof.
          </p>
        </div>

        {/* Image */}
        <img src="/images/saas.jpg" alt="" className="w-full lg:h-full h-full sm:h-72 object-cover rounded-lg" />
      </header>

      {/*🚀 What We Offer */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">What We Offer</p>
          <h2 className="ff text-3xl text-white">☁ <span className="text-amber-400">SaaS</span> Services</h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whatWeOffer.map((offer, index) => (
            
            <div 
              key={index} 
              className="border-2 border-white/50 hover:border-sky-400/50 text-white/60 space-y-3 rounded-2xl p-5 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/5">

              <div className="flex flex-col items-center">{offer.icon}</div>
              <h3 className={`ff text-xl text-center font-semibold ${offer.color}`}>{offer.title}</h3> 
              <p className="text-center">{offer.desc}</p>
              
              <ul className="text-left space-y-2">
                {offer.includes.map((feat, index) => (
                  
                  <li key={index} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${feat.dot}`}></span>
                    <span>{feat.text}</span>
                  </li> 
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    
    <TechnologiesUsed/>
      
      {/* Who Is This For? */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">Ideal Clients</p>
          <h2 className="ff text-3xl md:text-4xl font-black text-white">Who Is This <span className="text-amber-400">For?</span></h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6">
          {audience.map((target, index) => (

            <li 
              key={index} 
              className="border-2 border-white/50 bg-white/5 p-4 flex flex-col items-center rounded-xl hover:border-emerald-400/50 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
              
              <span className="text-3xl">{target.icon}</span>
              <span className="text-white/60 text-center">{target.title}</span>
              <span className="text-white/60 text-center">{target.desc}</span>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Why Choose US */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">Why Choose Us for <span className="text-amber-400">Saas?</span></h2>
          <div className="w-20 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-6">
         {whyChooseUs.map((why, index) => (

          <li 
            key={index} 
            className="border-2 border-white/50 bg-white/5 p-4 flex flex-col items-center rounded-xl hover:border-orange-400/50 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">

            <span className="text-3xl">{why.icon}</span>
            <span className="text-white/60 text-center">{why.text}</span>
          </li>
         ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-12">
        <div 
          style={{background:"linear-gradient(to top, #9333ea, #2563eb)"}} 
          className="flex flex-col items-center rounded-xl py-7 px-5 mx-5 sm:mx-10 text-center space-y-5">
            
          <p className="text-3xl font-bold text-white">Ready to Build Your SaaS Product?</p>

          <p className="text-lg text-white">
            Let’s transform your idea into a market-ready SaaS platform that users love and businesses trust
          </p>

          <a href="/contact" className="bg-white text-blue-700 font-semibold p-3 rounded-lg">Contact us today to get started</a>
        </div>
      </section>
    <FooterTwo/>
    </>
  )
}

export default SaaS
