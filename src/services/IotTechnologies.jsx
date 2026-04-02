import React from 'react'

const technologies = [
  { name: "MQTT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "CoAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" },
  { name: "HTTP/HTTPS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "ESP32", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg" },
  { name: "AWS IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Google Cloud IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "AI & ML Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
];

const IotTechnologies = () => {
  return (
    <section className="bg-zinc-900 py-10 px-5 space-y-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

      <div className="text-center space-y-2">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">Our Stack</p>
        <h2 className="ff text-3xl md:text-4xl font-black text-white">Technologies <span className="text-amber-400">We Use</span></h2>
        <div className="w-15 h-0.5 bg-amber-400 rounded-full mx-auto"/>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-5xl mx-auto gap-3">
      {technologies.map((tech, index) => (

        <div 
          key={index} 
          className="flex items-center border-2 border-white/50 hover:border-orange-400/50 rounded-xl px-4 py-2 gap-2 
          transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/10">

          <img src={tech.icon} alt={tech.name} width={24} height={24}/>
          <span className="text-white/70 text-sm group-hover:text-white transition-colors">{tech.name}</span>
        </div>
      ))}
     </div>
    </section>
  )
}

export default IotTechnologies