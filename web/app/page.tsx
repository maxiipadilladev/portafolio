"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Teams from '@/components/Teams';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            disable: window.innerWidth < 768 // Disable on mobile like original script
        });
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Teams />
      <Projects />
      <Contact />
    </>
  );
}
