import React from 'react'
import Topbar from './Topbar'
import FooterTwo from './FooterTwo'
import WhatWeDo from './WhatWeDo' 

const Team = [
  { 
    imgSrc: "/images/Yugaanter.jpg", name: "Yugaanter Ramdas, Founder & CEO", 
    desc: "With a strong foundation in full-stack development and hands-on startup experience, Yugaanter drives the company’s strategic vision and client success roadmap. His ability to understand business problems and convert them into scalable digital products makes him the force behind the company’s rapid traction." 
  },
  { 
    imgSrc: "/images/Tushar.jpg", name: "Tushar Maske, Co-Founder", 
    desc: "Tushar brings creative energy and branding insight into the team. With a focus on user experience, he has led UI/UX design for over 20 web and mobile projects. His designs not only look good — they convert and perform." 
  },
  { 
    imgSrc: "/images/Kunal.jpg", name: "Kunal Shriwas, CTO", desc: "Kunal ensures our backend systems and tech architecture are scalable, reliable, and secure. He specializes in automation, API integration, and system architecture — making sure our builds can handle enterprise-level complexity with startup-level speed." 
  },
  { 
    imgSrc: "/images/Pratham.jpg", name: "Pratham Singh Thakur", desc: "Pratham is the backbone of our execution engine. From managing delivery pipelines to coordinating teams and ensuring smooth client communication, he ensures every project is delivered on time and with high satisfaction. His experience in optimizing digital workflows gives us an edge in scaling efficiently." 
  }
]

const About = () => {
  return ( 
    <div> 
    <Topbar /> 
      <section className="bg-gradient-to-r from-rose-400 to-violet-400 p-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center pb-6">About Us</h2>

        <div className="max-w-5xl mx-auto text-center"> 

        <div className="space-y-2 text-gray-800 sm:text-lg">
          <h4 className="font-semibold text-xl">Your all-in-one partner for websites, marketing, IoT and SaaS success.</h4>
          <p className="pb-3">At Echo Forge Systems, we provide a complete suite of digital solutions — from creating powerful 
            and functional websites, to driving brand growth through strategic marketing, 
            to developing IoT-powered innovations, and delivering scalable SaaS platforms.</p>
              
          <h4 className="font-semibold text-xl">Design it. Promote it. Automate it.</h4>
          <p>We <strong>design</strong> high-performing websites and digital solutions that represent 
            your brand, <strong>promote</strong> them through targeted marketing to reach the right audience, 
            and <strong>automate</strong> processes with smart SaaS and IoT tools to save time and scale efficiently.</p>
        </div>
        </div>
      </section>

        {/* Vision and Mission Section */}
      <section className="max-w-8xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">

          <div className="bg-gradient-to-r from-pink-400 to-yellow-400 hover:-translate-y-2 transition duration-300 text-center rounded-lg p-6">
            <h4 className="font-semibold text-2xl pb-3">🚀 Our Mission</h4>

            <p>Our mission is to simplify business growth by delivering an all-in-one 
              suite of services — from website development to marketing campaigns and SaaS automation. 
              We blend creativity with technology to produce measurable results and lasting impact. 
              Through collaboration, innovation, and a customer-first approach, we help brands achieve visibility,
              efficiency, and long-term success, while also guiding students in discovering and choosing the 
              right career paths for their future.</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 hover:-translate-y-2 transition duration-300 text-center rounded-lg p-6">
            <h4 className="font-semibold text-2xl pb-3">💡 Our Vision</h4>

            <p>To become the go-to partner for businesses worldwide by delivering innovative 
              web solutions, impactful digital marketing strategies, and scalable SaaS and IoT products.
              We envision a future where every brand, regardless of size, has access to cutting-edge technology 
              and creative expertise, while empowering young minds with the right skills to thrive.
              Our goal is to foster innovation, responsibility, and leadership, building a culture of service, 
              humanity, and excellence in everything we do.</p>
          </div>
        </div>
      </section>

            <WhatWeDo/>

        {/* Our Team Section */}
        <section className="bg-gradient-to-br from-purple-600 to-orange-400 py-10 px-6 space-y-6">
          <h2 className="text-3xl font-bold text-center">🙍 Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-6">
            {Team.map((member, index) => (

              <div 
                key={index} 
                className="bg-white/70 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition">
                <img src={member.imgSrc} alt={member.imgSrc} className="w-full"/>
                <h4 className="text-xl font-semibold text-gray-900 my-4">{member.name}</h4>
                <p className="text-gray-700 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>  
    <FooterTwo/> 
    </div>
  )
}

export default About