"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Teams', href: '#teams' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-dark/80 backdrop-blur-md border-b border-primary/20 shadow-lg py-3' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <Link 
              href="#home" 
              className="font-space-grotesk text-2xl font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              MP <span className="hidden sm:inline-block text-base font-normal text-text-muted ml-2">| &nbsp;Portfolio</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative text-sm font-space-grotesk uppercase tracking-widest text-text hover:text-white transition-colors duration-300 group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-text hover:text-primary focus:outline-none bg-white/5 rounded-full backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex items-center justify-center ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
         <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-2xl font-bold text-text hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-text-muted"
            >
                Close
            </button>
         </div>
      </div>
    </>
  );
}
