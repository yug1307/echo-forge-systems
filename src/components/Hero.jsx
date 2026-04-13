export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:ital,wght@0,900;1,800&display=swap');
      .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      .fu{animation:fadeUp .7s ease forwards}.d1{animation-delay:.15s;opacity:0}.d2{animation-delay:.3s;opacity:0}.d3{animation-delay:.45s;opacity:0}`}</style>

      {/* HERO */}
      <div className="relative py-12 px-6 text-center overflow-hidden">
        {/* Orbs */}
        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"/>
        <div className="absolute -bottom-10 right-1/4 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none"/>
 
        <h1 className="fu d1 ff text-4xl md:text-6xl lg:text-7xl font-black leading-tight max-w-4xl mx-auto">
          Empowering Businesses with{" "}
          <em className="not-italic text-amber-400">Scalable</em> IT Solutions
        </h1>

        <p className="fu d2 text-white/50 text-lg max-w-xl mx-auto leading-relaxed my-6">
          We build future-ready software, websites, and systems for your digital success.
        </p>

        <div className="fu d3 flex gap-4 justify-center flex-wrap">
          <button className="text-sm px-8 py-3.5 rounded-full font-medium text-white transition-all duration-200 shadow-lg shadow-amber-500/20 hover:opacity-90 hover:-translate-y-0.5" style={{background:"linear-gradient(135deg,#f59e0b,#ef4444)"}}>Get Started</button>
          <button className="text-sm px-8 py-3.5 rounded-full border border-white/15 text-white/70 hover:border-white/40 hover:text-white transition-all duration-200">Learn More →</button>
        </div>
      </div>

      <div className="px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>

      {/* ABOUT */}
      <div className="py-12 px-6 max-w-4xl mx-auto text-center space-y-8">
        <p className="text-xs tracking-[.3em] uppercase text-amber-400">Who We Are</p>
        <h2 className="ff text-4xl md:text-5xl font-black">About <span className="text-amber-400">Us</span></h2>
        
        <div className="rounded-2xl border border-white/8 bg-white/3 p-10 text-white/55 leading-relaxed text-[16px]">
          At <span className="text-amber-400 font-medium">Echo Forge Systems</span>, we specialize in delivering innovative IT solutions tailored to meet the evolving needs of businesses. From web and mobile development to cloud services, cybersecurity, and digital transformation — we partner with you to turn technology into a competitive advantage.
        </div> 

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[["10+","Projects Delivered"],["98%","Client Satisfaction"],["2+","Years Experience"]].map(([n,l])=>(
            <div key={l} className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-amber-400/30 hover:bg-white/6 transition-all duration-200">
              <div className="ff text-3xl font-black text-amber-400">{n}</div>
              <div className="text-xs text-white/40 mt-2 uppercase tracking-wider">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}