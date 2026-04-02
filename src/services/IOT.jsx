import React from 'react'
import Topbar from '../components/Topbar'
import FooterTwo from '../components/FooterTwo'
import { Cpu, Cloud, Factory, ShieldCheck, Smartphone } from 'lucide-react'
import IotTechnologies from './IotTechnologies'

const services = [
  { 
    id: 1, color: "text-emerald-400", icon: <Cpu size={32} className="text-green-500"/>, title: "Custom IoT Application Development", 
    desc: "We build secure and scalable IoT applications that connect devices, sensors, and platforms seamlessly",
    includes: [
      { dot: "bg-emerald-300", text: "Device connectivity & communication" },
      { dot: "bg-emerald-300", text: "Real-time data processing" },
      { dot: "bg-emerald-300", text: "Cloud & dashboard integration" },
      { dot: "bg-emerald-300", text: "API development" }
    ]
  },
  { 
    id: 2, color: "text-sky-400", icon: <Factory size={32} className="text-red-500"/>, title: "Industrial IoT (IIoT) in association with Industrial Revolution 4.0", 
    desc: "Transform manufacturing and industrial operations with smart automation and predictive analytics",
    includes: [
      { dot: "bg-sky-300", text: "Machine health monitoring" },
      { dot: "bg-sky-300", text: "Predictive maintenance" },
      { dot: "bg-sky-300", text: "Asset tracking" },
      { dot: "bg-sky-300", text: "Production optimization" }
    ]
  },
  { 
    id: 3, color: "text-amber-400", icon: <Smartphone size={32} className="text-sky-500"/>, title: "Smart Solutions (Home & Enterprise)", 
    desc: "Enable smart environments through connected devices and automation systems",
    includes: [
      { dot: "bg-amber-300", text: "Smart lighting & energy management" },
      { dot: "bg-amber-300", text: "Access control systems" },
      { dot: "bg-amber-300", text: "Environmental monitoring" },
      { dot: "bg-amber-300", text: "Smart office automation" }
    ]
  },
  { 
    id: 4, color: "text-emerald-400", icon: <Cloud size={32} className="text-gray-500"/>, title: "IoT Cloud & Data Analytics", 
    desc: "We help you collect, store, analyze, and visualize IoT data for better decision-making",
    includes: [
      { dot: "bg-emerald-300", text: "AWS IoT / Google Cloud" },
      { dot: "bg-emerald-300", text: "Real-time dashboards" },
      { dot: "bg-emerald-300", text: "AI-powered analytics" },
      { dot: "bg-emerald-300", text: "Data Visualization" }
    ]
  },
  { 
    id: 5, color: "text-sky-400", icon: <ShieldCheck size={32} className="text-blue-500"/>, title: "IoT Security & Device Management", 
    desc: "Protect your IoT ecosystem with enterprise-grade security and centralized control",
    includes: [
      { dot: "bg-sky-300", text: "Device authentication & encryption" },
      { dot: "bg-sky-300", text: "Secure firmware updates (OTA)" },
      { dot: "bg-sky-300", text: "Remote device management" },
      { dot: "bg-sky-300", text: "Threat monitoring" }
    ]
  }
]

const points = [
  { icon: "🔗", text: "End-to-End IoT Expertise" },
  { icon: "📐", text: "Scalable & Future-Ready Architecture" },
  { icon: "🔒", text: "Secure by Design" },
  { icon: "🏭", text: "Industry 4.0 Compliant Solutions" },
  { icon: "🛠️", text: "Dedicated support & maintenance" },
];

const IoT = () => {
  return ( 
    <>  
    <Topbar/>
      <header className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc-900 py-10 px-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
        <div className="flex flex-col justify-center text-center space-y-2">
          <h2 className="ff text-3xl font-bold text-white">🌐 Internet of Things <span className="text-amber-400">(IoT)</span> Solutions</h2>
        
          <p className="text-white/60 text-lg leading-relaxed">
          At <span className="font-semibold text-amber-400">Echo Forge Systems</span>, we design and 
          deploy <span className="font-semibold text-sky-400">end-to-end IoT solutions</span> that help
          businesses monitor, automate, and optimize operations in real time. From smart devices to
          cloud-based analytics, we turn physical data into actionable insights.
          </p>
        </div>

        {/* Image */}
        <img src="/images/iot.png" alt="" className="w-full lg:h-full h-full sm:h-72 object-cover rounded-lg" />
      </header>

      {/* 🔧 Our IOT Services */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6">
        <h2 className="text-3xl font-bold text-sky-400 text-center">🔧 Our IOT Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
          {services.map((service, index) => (

            <div 
              key={index} 
              className="border-2 border-white/50 hover:border-sky-400/50 text-white/60 space-y-3 rounded-2xl p-5 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/5">

              <div className="flex flex-col items-center">{service.icon}</div>
              <h3 className={`ff text-xl text-center font-semibold ${service.color}`}>{service.title}</h3>
              <p className="text-center">{service.desc}</p>
              
              <ul className="text-left space-y-2">
                {service.includes.map((feat, index) => (
                  
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

      {/* Why Choose US */}
      <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        <div className="text-center space-y-2">
          <h2 className="ff text-3xl text-white">Why Choose Us for <span className="text-amber-400">Saas?</span></h2>
          <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-6">
         {points.map((why, index) => (

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

    <IotTechnologies/>

      {/* CTA */}
      <section className="bg-zinc-900 py-12">
        <div 
          style={{background:"linear-gradient(to top, #9333ea, #2563eb)"}} 
          className="flex flex-col items-center rounded-xl py-7 px-5 md:mx-20 text-center space-y-5">
            
          <p className="text-3xl font-bold text-white">Ready to Connect Your World with IoT?</p>

          <p className="text-lg text-white">
            Let's transform your physical devices into smart, connected systems — automating intelligence and powering the future of your business.
          </p>

          <a href="/contact" className="bg-white text-blue-700 font-semibold p-3 rounded-lg">Start Your IoT Journey Today</a>
        </div>
      </section>
    <FooterTwo/>
    </>
  )
}

export default IoT