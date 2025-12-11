"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Developer.',
        'Innovation Team Leader',
        'Passionate about Technology.'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_50%)] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-br from-white via-primary to-secondary bg-clip-text text-transparent">
          Maximiliano Padilla
        </h1>
        
        <p className="text-xl md:text-2xl text-text-muted mb-8 min-h-[60px]">
          <span ref={el}></span>
        </p>

        <div className="bg-dark-light/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto mb-12 hover:border-primary/50 transition-colors duration-300 shadow-xl relative group text-left">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Hey, I'm <span className="text-primary">Maxi</span>
            </h3>
            
            <p className="text-lg text-text-muted mb-6">
              I'm a full-stack developer who ships fast.
            </p>

            <div className="mb-6 p-4 bg-white/5 rounded-xl border-l-4 border-secondary">
              <p className="text-text italic">
                <span className="font-bold text-secondary not-italic">My specialty:</span> Building SaaS products from scratch and getting 
                them to revenue in weeks, not months.
              </p>
            </div>

            <p className="font-bold text-white mb-3 uppercase tracking-wider text-xs">Recent projects:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                 <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                 <span className="text-text">RunaFit: 6 fitness studios, <strong className="text-green-400">$150k MRR</strong></span>
              </li>
              <li className="flex items-center gap-3">
                 <span className="text-xl">🥈</span>
                 <span className="text-text">NASA Space Apps Challenge (2nd place)</span>
              </li>
              <li className="flex items-center gap-3">
                 <span className="text-xl">🥇</span>
                 <span className="text-text">Rally LATAM Innovation (1st place)</span>
              </li>
            </ul>

            <p className="text-xl font-medium text-white border-t border-white/10 pt-6">
              I don't just code — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">I solve business problems.</span>
            </p>
          </div>
        </div>

        <Link 
          href="#projects" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:transform hover:-translate-y-1 hover:shadow-primary/50 transition-all duration-300"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
