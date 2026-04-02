import React from 'react'
import Topbar from './Topbar'
import FooterTwo from './FooterTwo'
import WhatWeDo from './WhatWeDo' 

const Team = [
  { 
    imgSrc: "/images/Yugaanter.jpg", name: "Yugaanter Ramdas, Founder & CEO", 
    desc: [`With a strong foundation in full-stack development and hands-on startup experience, Yugaanter drives the 
    company’s strategic vision and client success roadmap. His ability to understand business problems and convert them 
    into scalable digital products makes him the force behind the company’s rapid traction.`] 
  },
  { 
    imgSrc: "/images/Tushar.jpg", name: "Tushar Maske, Co-Founder", 
    desc: [`Tushar brings creative energy and branding insight into the team. With a focus on user experience, he has
    led UI/UX design for over 20 web and mobile projects. His designs not only look good — they convert and perform.`] 
  },
  { 
    imgSrc: "/images/Kunal.jpg", name: "Kunal Shriwas, CTO", 
    desc: [`Kunal ensures our backend systems and tech architecture are scalable, reliable, and secure. 
    He specializes in automation, API integration, and system architecture — making sure our builds can 
    handle enterprise-level complexity with startup-level speed.`] 
  },
  { 
    imgSrc: "/images/Pratham.jpg", name: "Pratham Singh Thakur, COO", 
    desc: [`Pratham is the backbone of our execution engine. From managing delivery pipelines to coordinating teams and 
    ensuring smooth client communication, he ensures every project is delivered on time and with high satisfaction. 
    His experience in optimizing digital workflows gives us an edge in scaling efficiently.`] 
  }
]

const About = () => {
  return ( 
    <>
    <Topbar />  
      <section className="bg-zinc-950 text-white py-12 px-6 space-y-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-4xl tracking-[.3em] uppercase text-amber-400">Who We Are</h2>
          <p className="text-white font-medium text-lg">Your all-in-one partner for websites, marketing, IoT and SaaS success.</p>
          <p className="text-white/50 leading-relaxed">At <span className="text-amber-400">Echo Forge Systems</span>, we provide a complete suite of digital solutions — from creating powerful websites, to driving brand growth through strategic marketing, to developing IoT-powered innovations, and delivering scalable SaaS platforms.</p>
        </div>
 
        {/* Design. Promote. Automate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[["🎨","Design it","High-performing websites and digital solutions that represent your brand."],
            ["📣","Promote it","Targeted marketing strategies to reach the right audience and grow your reach."],
            ["⚙️","Automate it","Smart SaaS and IoT tools to save time, reduce costs, and scale efficiently."]
          ].map(([icon,title,desc])=>(
            <div key={title} className="rounded-2xl border border-white/8 p-7 hover:border-amber-400/40 hover:bg-white/6 hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <h3 className="ff text-white font-black text-2xl my-2">{title}</h3>
              <p className="text-white/45 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

        <div className="px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>

      {/* Vision and Mission Section */}
      <section className="bg-zinc-950 text-white py-12 px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {[
            { icon:"🚀", title:"Our Mission", color:"amber", 
              text:"Our mission is to simplify business growth by delivering an all-in-one suite of services — from website development to marketing campaigns and SaaS automation. We blend creativity with technology to produce measurable results and lasting impact, while guiding students in discovering the right career paths." },
            { icon:"💡", title:"Our Vision", color:"rose", 
              text:"To become the go-to partner for businesses worldwide by delivering innovative web solutions, impactful digital marketing strategies, and scalable SaaS and IoT products — fostering a future where every brand has access to cutting-edge technology, innovation, responsibility, and excellence." },
          ].map(({icon,title,color,text})=>(
          <div key={title} className={`relative rounded-2xl border p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${color==="amber"?"border-amber-400/25 bg-amber-400/5 hover:border-amber-400/50":"border-rose-400/25 bg-rose-400/5 hover:border-rose-400/50"}`}>
            <div className={`rounded-full blur-3xl opacity-20 ${color==="amber"?"bg-amber-400":"bg-rose-400"}`}/>
            <div className="text-3xl">{icon}</div>
            <h3 className="ff text-white font-black text-2xl my-2">{title}</h3>
            <p className="text-white/55 text-lg leading-relaxed">{text}</p>
          </div>
          ))}
        </div>
      </section>
        
        <div className="px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>
            
            <WhatWeDo/>
            
        <div className="px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>

      {/* Our Team Section */}
      <div className="bg-zinc-950 text-white py-16 px-6 space-y-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

      <div className="text-center space-y-4">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">The People Behind</p>
        <h2 className="ff text-4xl md:text-5xl font-black">Our <span className="text-amber-400">Team</span></h2>
        <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {Team.map((member, index)=>(

          <div key={index} className="border border-white rounded-xl space-y-2">
           <img src={member.imgSrc} alt="" className="w-full lg:h-[40vh] sm:h-96 object-cover rounded-t-xl" />
            
            <div className="p-4 space-y-2"> 
              <h3 className="ff text-2xl text-center">{member.name}</h3> 
              <p className="text-white/65">{member.desc}</p>
            </div> 
          </div>
        ))}
      </div>
    </div> 
    <FooterTwo/> 
    </>
  )
}

export default About