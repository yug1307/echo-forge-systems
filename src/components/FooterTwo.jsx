import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () =>{ 
  return(
    <>   
    <footer className="bg-gray-900 text-gray-300">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 px-5 gap-4">
        {/* Logo */}
        <svg width="0 160%" height="100%" viewBox="0 0 750 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #b89b5e } .divider { stroke: #9e7b30ff; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="370" y="108" textAnchor="middle" className="hotel-name">ECHO FORGE SYSTEMS</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg>
        
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

          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaLinkedin/></a>
            <a href="#" className="hover:text-green-400"><FaWhatsapp/></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram/></a>
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