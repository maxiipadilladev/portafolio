"use client";

import { useState } from 'react';
import GlassCard from "./ui/GlassCard";
import Modal from "./ui/Modal";

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
    },
    {
        id: "altoke",
        title: "Altoke Technical Service",
        img: "/img/altoke.jpg",
        shortDesc: "Designing the digital transformation of Altoke Technical Service, creating a scalable web platform with future e-commerce vision.",
        subtitle: "Altoke Technical Service – Website",
        desc: "Design and development of a modern web platform for digital transformation of a technical service, with the goal of expanding its reach and evolving toward a future online store.",
        fullDesc: (
            <>
                <hr className="my-6 border-primary/20" />
                <p className="mb-3 text-text"><strong>The Challenge:</strong> A successful local technical service lacked a professional digital presence, limiting its reach and ability to compete in the online market.</p>
                <p className="mb-6 text-text-muted"><strong>My Role:</strong> As co-founder of this venture with my partner in Jujuy, I act as Project Leader and Strategic Consultant. My mission is to guide the digital transformation of our own technical service.</p>

                <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Technologies Proposed</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PHP</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">SQL</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">JavaScript</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Bootstrap</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">HTML5</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">CSS3</span>
                </div>

                <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> The result will be a new and powerful digital embassy for our brand, positioning it to capture a new market segment and ensure its growth in the digital era.</p>
            </>
        ),
        links: [
            { label: "More Details", modalBtn: true }
        ]
    },
    {
        id: "runafit",
        title: "RunaFit",
        img: "/img/runafit.png",
        shortDesc: "SaaS booking and payment platform for fitness studios. Automated WhatsApp notifications, Mercado Pago integration, and equipment assignment. Increased occupancy by 25%.",
        subtitle: "RunaFit - Fitness Booking Platform",
        desc: "Complete booking and payment management system for Pilates and fitness studios, designed for accessibility and automation.",
        fullDesc: (
            <>
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

                <p className="font-bold mb-3 text-primary/90 uppercase tracking-widest text-xs">Key Features:</p>
                <ul className="list-disc list-inside mb-6 text-text-muted space-y-1">
                     <li>Real-time booking system with equipment assignment</li>
                     <li>Automated payment reminders via WhatsApp</li>
                     <li>Integrated payment processing with Mercado Pago</li>
                     <li>Mobile-first responsive design for clients 40-60+</li>
                     <li>Admin dashboard with analytics and reporting</li>
                </ul>

                <p className="text-text-muted leading-relaxed"><strong>The Impact:</strong> Automated 100% of manual booking and payment processes, improved occupancy rate by 25%, and eliminated payment tracking errors. Currently in production with active clients.</p>
            </>
        ),
        links: [
            { label: "View Project", url: "https://runafit.vercel.app/" },
            { label: "More Details", modalBtn: true }
        ],
        modalLinks: [
             { label: "View Project", url: "https://runafit.vercel.app/", btnClass: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-transparent" }
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
        <h2 className="text-4xl font-space-grotesk font-bold mb-12 text-center relative aos-init aos-animate" data-aos="fade-up">
          My Projects
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(320px,auto)]">
          {projects.map((project, index) => {
            // Bento Grid Logic
            // First item (Winner NASA): Large Square (2x2)
            // Second item (Winner Rally): Vertical Tall (1x2)
            // Third item: Horizontal Wide (2x1) 
            // Others: Standard (1x1)
            let bentoClass = "md:col-span-1 md:row-span-1";
            
            // Layout Configuration
            if (index === 0 || index === 1) {
                // Top Winners: Big 2x2 Squares
                bentoClass = "md:col-span-2 md:row-span-2";
            } else if (index === 2 || index === 5) {
                // Important Projects: Wide 2x1
                bentoClass = "md:col-span-2 md:row-span-1";
            }
            
            const isFeature = index === 0 || index === 1;

            return (
              <div key={project.id} className={`${bentoClass} group`} data-aos="fade-up" data-aos-delay={index * 50}>
                  <GlassCard className="h-full hover:border-primary/50 transition-colors duration-500 relative overflow-hidden flex flex-col">
                      <div className={`relative w-full ${isFeature ? 'h-full absolute inset-0' : 'h-64'} ${isFeature ? 'z-0' : ''}`}>
                          <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100" 
                          />
                          {/* Gradient only for Feature cards: Lighter touch, mostly at bottom for text readability */}
                          {isFeature && (
                              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                          )}
                      </div>
                      
                      <div className={`relative z-10 p-6 flex flex-col flex-grow ${isFeature ? 'justify-end h-full' : ''}`}>
                          <h5 className={`font-bold text-text mb-3 leading-tight ${isFeature ? 'text-3xl font-space-grotesk drop-shadow-md' : 'text-xl'}`}>
                            {project.title}
                          </h5>
                          <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.shortDesc}
                          </p>
                          
                          <div className="mt-auto flex flex-wrap gap-3">
                              {project.links.map((link, i) => {
                                  // Button Styling Logic
                                  const isPrimary = i === 0 || isFeature; 
                                  const baseBtn = "px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex-1 flex items-center justify-center uppercase tracking-wider min-w-[120px]";
                                  const primaryBtn = "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:scale-[1.02] border border-transparent";
                                  const secondaryBtn = "bg-white/5 border border-white/10 text-text hover:bg-white/10 hover:border-white/20 hover:text-white";

                                  return link.modalBtn ? (
                                      <button 
                                        key={i} 
                                        onClick={() => setActiveModal(project.id)}
                                        className={`${baseBtn} ${isPrimary && isFeature ? primaryBtn : secondaryBtn}`}
                                      >
                                          {link.label}
                                      </button>
                                  ) : (
                                      <a 
                                          key={i} 
                                          href={link.url} 
                                          target="_blank" 
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
