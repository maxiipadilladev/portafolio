"use client";

import Link from 'next/link';

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_50%)] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-space-grotesk text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white tracking-tight">
          Maximiliano Padilla
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light text-primary mb-8 animate-fadeIn">
          Full-Stack Developer & SaaS Founder
        </h2>
        
        <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Building products that generate real revenue.<br />
          <span className="text-white font-medium mt-2 inline-block">Currently: <span className="text-green-400">6 clients, $150k MRR</span></span>
        </p>

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
