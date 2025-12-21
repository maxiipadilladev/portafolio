"use client";

import { useState } from 'react';
import Image from 'next/image';
import GlassCard from "./ui/GlassCard";
import Modal from "./ui/Modal";
import ProjectDemo from "./ui/ProjectDemo";

interface Project {
  id: string;
  title: string;
  img: string;
  shortDesc: string; // Used in card
  subtitle: string; // Used in modal
  desc: string; // Used in modal (main Lead text)
  fullDesc: React.ReactNode; // Content of the modal body
  links: {
    label: string;
    url?: string;
    modalBtn?: boolean; // If true, shows the "More Details" button
  }[];
  modalLinks?: { label: string; url: string; btnClass: string }[];
}

export default function Projects() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "runafit",
      title: "RunaFit - Live SaaS Product",
      img: "/img/runafit.png",
      shortDesc: "SaaS booking and payment platform for fitness studios. Managing 500+ bookings/month, automated WhatsApp notifications, Mercado Pago integration. Increased occupancy by 25%.",
      subtitle: "RunaFit - Fitness Booking Platform",
      desc: "Complete booking and payment management system for Pilates and fitness studios, designed for accessibility and automation.",
      fullDesc: (
        <>
            <div className="grid grid-cols-3 gap-4 my-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Live</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Status</p>
              </div>
              <div className="text-center border-l border-white/10">
                <p className="text-2xl font-bold text-green-400">500+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Bookings/mo</p>
              </div>
              <div className="text-center border-l border-white/10">
                <p className="text-2xl font-bold text-secondary">120+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">Users</p>
              </div>
            </div>

            <hr className="my-6 border-primary/20" />
            <p className="mb-3 text-text"><strong>The Challenge:</strong> Fitness studios were managing bookings and payments manually via WhatsApp, leading to double bookings, missed payments, and significant administrative overhead.</p>
            <p className="mb-6 text-text-muted"><strong>My Role:</strong> Lead developer responsible for full-stack development, from requirements gathering to deployment. Designed the system architecture and implemented all core features.</p>

            <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Used</p>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">React</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Node.js</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Supabase</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">WhatsApp API</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Mercado Pago</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">Tailwind CSS</span>
            </div>

            <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> Reduced manual administrative tasks by 80%, eliminated double bookings, automated payment confirmations, and increased studio occupancy by 25% through better scheduling visibility.</p>
        </>
      ),
      links: [
        { label: "View Live Demo", url: "https://runafit.com" },
        { label: "More Details", modalBtn: true }
      ],
      modalLinks: [
        { label: "View Live Platform", url: "https://runafit.com", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
      ]
    },
    {
      id: "legion",
      title: "LEGION ALFA (2nd Place NASA)",
      img: "/img/legion.png",
      shortDesc: "Modular closed-loop recycling system for a manned Mars mission. 2nd Place Nationally in the NASA Space Apps Challenge.",
      subtitle: "LEGION ALFA Project (2nd Place NASA)",
      desc: "A modular circular ecosystem that transforms inorganic waste into critical resources for a 3-year Mars mission with 8 crew members.",
      fullDesc: (
        <>
            <p className="mb-4">Our philosophy: <strong>«On Mars there is no 'garbage', only raw materials in the wrong place».</strong></p>
            <hr className="my-4 border-primary/20" />
            <p className="mb-2"><strong>The Challenge (NASA SpaceTrash Hack):</strong> Design a solution for the ~12,600 kg of waste generated in a hypothetical mission at Jezero Crater, reducing dependence on resupply from Earth.</p>
            <p className="mb-4"><strong>Our Solution (REGroup):</strong> LEGION ALFA processes waste through three modules (Primary Processing, Transformation and Manufacturing, and Storage and Reuse) to manufacture new tools, components, and supplements, achieving 89% resource recovery.</p>
            
            <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Used</p>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Python</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Flask</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Bootstrap</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">Git</span>
            </div>
            
            <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> The project transforms waste management from a logistical burden into a strategic source of resources, making Martian colonization viable. This development earned us 2nd Place Nationally.</p>
        </>
      ),
      links: [
        { label: "View Project", url: "https://regroup.pythonanywhere.com/" },
        { label: "More Details", modalBtn: true }
      ],
      modalLinks: [
        { label: "View Demo (Video)", url: "https://drive.google.com/file/d/1VBLJ1zJLmQZKOmRcoVCevrK8ZdnAGbv6/view", btnClass: "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/20 transition-all border border-transparent" },
        { label: "View Project", url: "https://regroup.pythonanywhere.com/", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
      ]
    },
    {
      id: "alerta",
      title: "Alerta Tierra (1st Place Rally)",
      img: "/img/alertatierraapp.jpg",
      shortDesc: "Award-winning solution for the Latin American Innovation Rally. 1st Prize in the Social Impact category. Developed in 28 hours.",
      subtitle: "Alerta Tierra Project (1st Place Rally)",
      desc: "Solution developed in 28 hours for the Latin American Innovation Rally, winner of 1st Prize in the \"Social Impact\" category.",
      fullDesc: (
        <>
            <hr className="my-6 border-primary/20" />
            <p className="mb-3 text-text"><strong>The Challenge:</strong> Develop an innovative solution that generates positive social impact in less than 28 hours.</p>
            <p className="mb-6 text-text-muted"><strong>My Role:</strong> As leader of the 'Alerta Tierra' team, I organized the strategy, defined the solution architecture, and led the development of a functional prototype under extreme pressure.</p>
            
            <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Used</p>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Python</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Flask</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Bootstrap</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20">Git</span>
            </div>
            
            <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> The project was recognized continentally for its potential to generate positive social impact, demonstrating the team's ability to innovate and execute a viable solution in less than 28 hours.</p>
        </>
      ),
      links: [
        { label: "View Project", url: "https://alerta-tierra.onrender.com/" },
        { label: "More Details", modalBtn: true }
      ],
      modalLinks: [
         { label: "View Project", url: "https://alerta-tierra.onrender.com/", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
      ]
    },
    {
      id: "idcultural",
      title: "ID Cultural Project",
      img: "/img/logo.jpg",
      shortDesc: "As architect and technical leader, I guide the development of a platform to centralize and preserve the artistic heritage of Santiago del Estero.",
      subtitle: "ID Cultural Project",
      desc: "Digital platform dedicated to making visible, preserve, and promote the artistic and cultural identity of Santiago del Estero.",
      fullDesc: (
        <>
            <hr className="my-6 border-primary/20" />
            <p className="mb-3 text-text"><strong>The Challenge:</strong> The valuable artistic heritage of Santiago del Estero was fragmented, at risk of being lost due to the lack of a centralized digital platform.</p>
            <p className="mb-6 text-text-muted"><strong>My Role:</strong> As architect of the solution and leader of RunaTech Dev's technical team, my role was to guide the development strategy and ensure the construction of a robust and scalable codebase for the project.</p>
            
            <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Used</p>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PHP</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">MariaDB</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">JavaScript</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">HTML5</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">CSS3</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Bootstrap</span>
            </div>
            
            <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> The platform is currently in an advanced development phase, with the goal of becoming the definitive digital archive for local culture, ensuring that our artists' legacy is immortal.</p>
        </>
      ),
      links: [
        { label: "View on GitHub", url: "https://github.com/runatechdev/ID-Cultural" },
        { label: "More Details", modalBtn: true }
      ],
      modalLinks: [
        { label: "View Code on GitHub", url: "https://github.com/runatechdev/ID-Cultural", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
      ]
    },
    {
        id: "regroup",
        title: "REGroup - Sustainable E-Waste",
        img: "/img/Tachy.jpg",
        shortDesc: "Leading the development of \"Tachy\", a comprehensive e-waste recycling system with QR scanning app and \"Eco-Points\" rewards.",
        subtitle: "REGroup - Sustainable E-Waste (\"Tachy\")",
        desc: "A triple-impact project seeking to revolutionize e-waste management. 'Tachy' is an integrated ecosystem combining a mobile application and incentive program to promote recycling in socially, environmentally, and economically beneficial ways.",
        fullDesc: (
            <>
                <hr className="my-6 border-primary/20" />
                <p className="mb-3 text-text"><strong>The Problem:</strong> E-waste management in the region was inefficient and lacked citizen participation. There was no integrated system effectively incentivizing recycling.</p>
                <p className="mb-6 text-text-muted"><strong>My Role:</strong> As Founder and Strategy Lead of REGroup, I command a multidisciplinary team on the mission to define and build the \"Tachy\" system. My function is to translate vision into technical and operational battle plans.</p>

                <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Used</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Python</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Flask</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">SQL</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Bootstrap</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">HTML5</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">CSS3</span>
                </div>

                <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> The functional prototype was presented at the Santiago del Estero 2025 Innovation Rally. Currently, the team is in the development phase of the first minimum viable product, aiming to revolutionize the recycling paradigm.</p>
            </>
        ),
        links: [
            { label: "View on GitHub", url: "https://github.com/sss2611/REGroup" },
            { label: "More Details", modalBtn: true }
        ],
        modalLinks: [
            { label: "View Code on GitHub", url: "https://github.com/sss2611/REGroup", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
        ]
    }
  ];

  const getBadges = (desc: React.ReactNode) => {
    // This helper logic is tricky because the desc is ReactNode. 
    // In the data structure above, I hardcoded the badges in the JSX.
    // So I can just render fullDesc directly.
    return desc;
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space-grotesk font-bold mb-4 text-center relative aos-init aos-animate" data-aos="fade-up">
          Featured Work
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          From SaaS products in production to award-winning innovations
        </p>

        {/* FEATURED PROJECT - RunaFit */}
        <div className="mb-20" data-aos="fade-up">
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-1 shadow-2xl">
            <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Live Product
                    </span>
                    <span className="text-sm text-text-muted">In Production</span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-4">
                    {projects[0].title}
                  </h3>
                  
                  <p className="text-xl text-text-muted mb-8 leading-relaxed">
                    Complete booking and payment platform for fitness studios. Automated workflows that increased client occupancy by 25%.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">500+</p>
                      <p className="text-xs text-text-muted uppercase tracking-wider">Bookings/mo</p>
                    </div>
                    <div className="text-center border-l border-white/10">
                      <p className="text-3xl font-bold text-green-400">+25%</p>
                      <p className="text-xs text-text-muted uppercase tracking-wider">Occupancy</p>
                    </div>
                    <div className="text-center border-l border-white/10">
                      <p className="text-3xl font-bold text-secondary">120+</p>
                      <p className="text-xs text-text-muted uppercase tracking-wider">Users</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-sm text-text-muted uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Next.js</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Node.js</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Supabase</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20">WhatsApp API</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Mercado Pago</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={projects[0].links[0].url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105"
                    >
                      View Live Demo →
                    </a>
                    <button 
                      onClick={() => setActiveModal(projects[0].id)}
                      className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                      Case Study
                    </button>
                  </div>
                </div>

                {/* Right Column - Visual/Video */}
                <div className="flex items-center justify-center lg:justify-end">
                  <ProjectDemo 
                    imageSrc={projects[0].img}
                    videoSrc="/videos/runafit-demo.mp4" // Will show play button when video exists
                    altText="RunaFit Dashboard Demo"
                    projectTitle={projects[0].title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <h3 className="text-3xl font-space-grotesk font-bold mb-8 text-center" data-aos="fade-up">
          Competition Wins & Open Source
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => {
            const actualIndex = index + 1; // Adjust for slice

            return (
              <div key={project.id} className="group" data-aos="fade-up" data-aos-delay={index * 50}>
                  <GlassCard className="h-full hover:border-primary/50 transition-colors duration-500 relative overflow-hidden flex flex-col">
                      <div className="relative w-full h-64">
                          <Image 
                            src={project.img} 
                            alt={project.title}
                            width={400}
                            height={256}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            className="transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                      </div>
                      
                      <div className="relative z-10 p-6 flex flex-col flex-grow">
                          <h5 className="text-xl font-bold text-text mb-3 leading-tight">
                            {project.title}
                          </h5>
                          <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.shortDesc}
                          </p>
                          
                          <div className="mt-auto flex flex-wrap gap-3">
                              {project.links.map((link, i) => {
                                  const isPrimaryAction = i === 0 && !link.modalBtn; 
                                  
                                  const baseBtn = "px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex-1 flex items-center justify-center uppercase tracking-wider min-w-[120px]";
                                  const primaryBtn = "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:scale-[1.05] border border-transparent shadow-md";
                                  const secondaryBtn = "bg-white/5 border border-white/20 text-text/80 hover:bg-white/10 hover:border-white/40 hover:text-white backdrop-blur-sm";

                                  return link.modalBtn ? (
                                      <button 
                                        key={i} 
                                        onClick={() => setActiveModal(project.id)}
                                        className={`${baseBtn} ${secondaryBtn}`}
                                      >
                                          {link.label}
                                      </button>
                                  ) : (
                                      <a 
                                          key={i} 
                                          href={link.url} 
                                          target="_blank"
                                          rel="noopener noreferrer" 
                                          className={`${baseBtn} ${primaryBtn}`}
                                      >
                                          {link.label}
                                      </a>
                                  )
                              })}
                          </div>
                      </div>
                  </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Modals */}
        {projects.map((project) => (
            <Modal
                key={project.id}
                isOpen={activeModal === project.id}
                onClose={() => setActiveModal(null)}
                title={project.subtitle}
                footer={
                    project.modalLinks?.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.url} 
                            target="_blank" 
                            className={`${link.btnClass} py-2 px-4 text-sm rounded-full no-underline inline-block`}
                        >
                            {link.label}
                        </a>
                    ))
                }
            >
                <div>
                     <p className="lead text-lg text-text-muted mb-4">{project.desc}</p>
                     <div className="text-text">
                        {project.fullDesc}
                     </div>
                </div>
            </Modal>
        ))}

      </div>
    </section>
  );
}
