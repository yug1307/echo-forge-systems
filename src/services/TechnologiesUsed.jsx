import React from 'react'

const tech = [
  { 
    category: "Front End", color: "text-sky-400", 
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ]
  },
  { 
    category: "Back End", color: "text-emerald-400",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Java/SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ]
  },
  { 
    category: "Databases", color: "text-amber-400",
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ] 
  },
  {  
    category: "Deployment & DevOps", color: "text-violet-400", 
    items: [
      { name: "Cloud Hosting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "CI/CD Pipelines", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ]
  }
];

const TechnologiesUsed = () => {
  return ( 
    <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>
        
      <div className="text-center space-y-2">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">Our Stack</p>
        <h2 className="ff text-3xl md:text-4xl font-black text-white">Technologies <span className="text-amber-400">We Use</span></h2>
        <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
      </div>

      <div className="max-w-xl mx-auto space-y-10">
        {tech.map((techno, index) => (

          <div key={index} className="space-y-2">
            <h2 className={`tracking-[.25em] uppercase font-semibold ${techno.color}`}>{techno.category}</h2>

            <div className="flex flex-wrap gap-3">
              {techno.items.map((item, index) => (

                <div 
                  key={index} 
                  className="flex items-center border-2 border-white/50 hover:border-orange-400/50 rounded-xl px-4 py-2 gap-2 
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/10">
                  
                  <img src={item.icon} alt={item.name} width={24} height={24}/>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesUsed