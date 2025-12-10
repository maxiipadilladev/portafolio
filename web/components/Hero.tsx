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

        <div className="bg-dark-light/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto mb-12 hover:border-primary/50 transition-colors duration-300 shadow-xl relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          <h3 className="text-2xl font-semibold text-primary mb-4 relative z-10">My Mission</h3>
          <p className="text-lg italic text-text/90 relative z-10">
            I transform complex challenges into scalable, AI-powered solutions
            through technical excellence and proven leadership. My approach
            combines strategic thinking with hands-on execution, building robust
            systems that deliver measurable business impact. From concept to
            deployment, I focus on creating products that solve real-world
            problems and drive lasting results.
          </p>
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
