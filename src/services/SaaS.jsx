import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Cloud, CreditCard, Layers, Lock, Network, Boxes, TrendingUp, Rocket, ShieldCheck,
  FileCheck2, ScanSearch, KeyRound,  BarChart3, MousePointerClick, LayoutDashboard, BellRing,
  RefreshCcw, LifeBuoy, Sparkles, Gauge, GitBranch } from 'lucide-react'
import TechnologiesUsed from './TechnologiesUsed'

const whatWeOffer = [
  { 
    id: 1, icon: <Rocket size={32} className="text-red-500"/>, title: "SaaS Product Development", 
    desc: "End-to-end development of SaaS applications tailored to your business model",
    includes: [
      { icon: <Layers className="text-indigo-500"/>, text: "Custom SaaS architecture design" },
      { icon: <Rocket className="text-red-500"/>, text: "MVP & full-scale product development" },
      { icon: <Network className="text-green-500"/>, text: "Multi-tenant application development" },
      { icon: <CreditCard className="text-slate-500"/>, text: "Subscription & billing integration" },
      { icon: <ShieldCheck className="text-blue-500"/>, text: "Role-based access control (RBAC)" }
    ]
  },
  { 
    id: 2, icon: <Cloud size={32} className="text-gray-500"/>, title: "Cloud-Native Solutions", 
    desc: "We build SaaS platforms optimized for modern cloud environments",
    includes: [
      { icon: <Cloud className="text-gray-500"/>, text: "AWS / GCP deployment" },
      { icon: <Boxes className="text-green-500"/>, text: "Scalable microservices architecture" },
      { icon: <TrendingUp className="text-amber-500"/>, text: "Auto-scaling & load balancing" },
      { icon: <ShieldCheck className="text-blue-500"/>, text: "High availability & fault tolerance" }
    ]
  },
  { 
    id: 3, icon: <Lock size={32} className="text-amber-500"/>, title: "Security & Compliance", 
    desc: "Enterprise-grade security baked into every SaaS product",
    includes: [
      { icon: <KeyRound className="text-amber-500"/>, text: "Secure authentication (OAuth, JWT, SSO)" },
      { icon: <ShieldCheck className="text-blue-500"/>, text: "Data encryption & API security" },
      { icon: <FileCheck2 className="text-amber-500"/>, text: "Compliance-ready architecture (GDPR, SOC-2 ready)" },
      { icon: <ScanSearch className="text-red-500"/>, text: "Regular security audits & best practices" }
    ]
  },
  {
    id: 4, icon: <BarChart3 size={32} className="text-purple-500"/>, title: "SaaS Analytics & Performance",
    desc: "Make data-driven decisions with built-in analytics",
    includes: [
      { icon: <MousePointerClick className="text-rose-500"/>, text: "User behavior tracking" },
      { icon: <BarChart3 className="text-sky-500"/>, text: "Usage & performance analytics" },
      { icon: <LayoutDashboard className="text-emerald-500"/>, text: "Custom dashboards & reports" },
      { icon: <BellRing className="text-amber-500"/>, text: "Real-time monitoring & alerts" }
    ]
  },
  {
    id: 5, icon: <RefreshCcw size={32} className="text-red-500"/>, title: "Maintenance & Scaling",
    desc: "Your SaaS grows—we make sure it stays fast, stable, and secure",
    includes: [
      { icon: <LifeBuoy className="text-green-500"/>, text: "Ongoing support & maintenance" },
      { icon: <Sparkles className="text-amber-500"/>, text: "Feature upgrades & enhancements" },
      { icon: <Gauge className="text-red-500"/>, text: "Performance optimization" },
      { icon: <GitBranch className="text-blue-500"/>, text: "Version management & CI/CD pipelines" }
    ]
  }
]

const SaaS = () => {
  return (
    <>
    <Topbar/>
      <header className="bg-yellow-200 py-10 px-5 text-center space-y-4">
        <h2 className="text-3xl font-bold">☁ Software as a Service (SaaS)</h2>
        
        <p className="text-lg">
          We help businesses design, develop, and scale <span className="font-semibold">secure, 
          high-performance SaaS platforms</span> that solve real problems and grow with your users. 
          From MVP to enterprise-grade systems, our SaaS solutions are cloud-ready, scalable, and future-proof.
        </p>
      </header>

      {/*🚀 What We Offer */}
      <section className="bg-slate-600 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-sky-400 text-center">🚀 What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {whatWeOffer.map((offer, index) => (
            
            <div 
              key={index} 
              className="bg-white space-y-3 rounded-lg p-5 transition hover:-translate-y-2">

              <div className="flex flex-col items-center">{offer.icon}</div>
              <h3 className="text-xl text-center font-semibold">{offer.title}</h3>
              <p className="text-center">{offer.desc}</p>
              
              <ul className="text-left space-y-2">
                {offer.includes.map((feat, index) => (
                  
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xl">{feat.icon}</span>
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
      <section className="bg-emerald-200 py-10 px-5 space-y-6 my-12">
        <h2 className="text-3xl font-bold text-center">👥 Who Is This For?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-left lg:text-center text-lg">
          <li>✔ Startups building MVPs</li>
          <li>✔ Enterprises modernizing legacy software</li>
          <li>✔ Businesses moving to subscription models</li>
          <li>✔ Product-based companies scaling globally</li>
        </ul>
      </section>
      
      {/* Why Choose US */}
      <section className="bg-lime-200 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-center">💡 Why Choose Us?</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto gap-2 text-left lg:text-center text-lg">
          <li>✅ Scalable SaaS architecture</li>
          <li>✅ Secure & performance-driven development</li>
          <li>✅ Business-focused solutions, not just code</li>
          <li>✅ Transparent communication & support</li>
          <li>✅ Long-term growth partnership</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-10 px-5 text-center space-y-5">
        <p className="text-2xl text-white">👉 Contact us today to get started</p>

        <p className="text-lg text-green-500">Ready to Build Your SaaS Product? <br />
          Let’s transform your idea into a market-ready SaaS platform that users love and businesses trust
        </p>
      </section>
    <FooterTwo/>
    </>
  )
}

export default SaaS