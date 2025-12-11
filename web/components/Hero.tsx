"use client";

import Link from 'next/link';

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_50%)] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-black mb-12 text-white tracking-tight">
          Maximiliano Padilla
        </h1>
        
        {/* Hero Card with Stats & Awards */}
        <div className="bg-dark-light/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto mb-10 text-left shadow-2xl relative group animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Hey, I'm <span className="text-primary">Maxi</span>
            </h2>
            
            <p className="text-lg text-text-muted mb-6">
              I'm a full-stack developer who ships fast.
            </p>

            <div className="mb-6 p-4 bg-white/5 rounded-xl border-l-4 border-secondary/80">
              <p className="text-text italic">
                <span className="font-bold text-secondary not-italic">My specialty:</span> Building SaaS products from scratch and getting 
                them to revenue in weeks, not months.
              </p>
            </div>

            <p className="font-bold text-white mb-3 uppercase tracking-wider text-xs opacity-80">Recent Highlights:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                 </div>
                 <span className="text-text">RunaFit: Production Deployment, <strong className="text-green-400">Managing 500+ bookings/mo</strong></span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="text-xl">🥈</span>
                 </div>
                 <span className="text-text">NASA Space Apps Challenge <span className="text-sm text-text-muted">(2nd place)</span></span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="text-xl">🥇</span>
                 </div>
                 <span className="text-text">Rally LATAM Innovation <span className="text-sm text-text-muted">(1st place)</span></span>
              </li>
            </ul>

            <p className="text-lg font-medium text-white border-t border-white/10 pt-4 mt-2">
              I don't just code — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">I solve business problems.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp">
          <Link 
            href="#projects" 
            className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
          >
            View Projects ↓
          </Link>
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
