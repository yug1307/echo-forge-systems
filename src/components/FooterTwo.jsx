import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
 { label: <FaLinkedin className="text-blue-500"/>, href: "" },
 { label: <FaWhatsapp className="text-green-500"/>, href: "" },
 { label: <FaInstagram className="text-rose-500"/>, href: "" }
];

const FooterOne = () =>{ 
  return(
    <>   
    <footer className="bg-mist-900 text-gray-300" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 px-5 gap-4">
        {/* Logo */}
        <div className="text-center">
          <div className="ff text-2xl font-black tracking-widest uppercase">
            Echo <span className="text-amber-400">Forge</span> Systems
          </div>
          <p className="text-white/40 text-sm leading-relaxed">Building future-ready digital solutions for businesses worldwide.</p>
        </div>
        
        {/* Company */}
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Company</h2>

          <ul className="space-y-2">
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="space-y-4">
          <h2 className="text-xl text-white font-semibold">Our Services</h2>

          <ul className="space-y-2">
            <li><Link to="/web-development">Web Development</Link></li>
            <li><Link to="/cyber-security">Cyber Security</Link></li>
            <li><Link to="/saas">Software As A Service (SaaS)</Link></li>
            <li><Link to="/iot">Internet of Things (IoT) Development</Link></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>

          <div className="flex gap-3">
            {socials.map((follow, index)=>(
              <div key={index} className="border border-white hover:border-amber-400 hover:text-amber-400 rounded-lg p-2">{follow.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-gray-700"></div>

      <div className="py-12 text-center text-md">© {new Date().getFullYear()} Echo Forge Systems. All Rights Reserved</div>
    </footer>
    </>
  )
}

export default FooterOne