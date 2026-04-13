import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {  
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-white" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@900&display=swap');.ff{font-family:'Fraunces',serif}`}</style>

      <div className="flex items-center p-6 justify-between">     
        {/* Logo */}
          <div className="ff text-2xl text-white text-center tracking-widest uppercase">
            Echo <span className="text-amber-400">Forge</span> Systems
          </div>
         

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-white text-xl font-medium">
          <Link to="/" className="hover:text-[#C9A24D]">Home</Link>
          <Link to="/about" className="hover:text-[#C9A24D]">About</Link>
          <Link to="/contact" className="hover:text-[#C9A24D]">Contact</Link>
        </nav>
 
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t">
          <nav className="flex flex-col items-center space-y-4 px-6 py-6 text-white font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
