"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!form.checkValidity()) {
        form.classList.add('was-validated'); // Simulating Bootstrap class validation style or implement custom
        return;
    }

    setIsSubmitting(true);
    const formData = new FormData(form);
    
    try {
        const response = await fetch("https://formspree.io/f/mkgqgqkd", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I will respond shortly.',
                icon: 'success',
                confirmButtonColor: '#6366f1',
                background: '#1e293b',
                color: '#fff'
            });
            form.reset();
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'There was a problem sending your message. Please try again.',
            icon: 'error',
            confirmButtonColor: '#ec4899',
            background: '#1e293b',
            color: '#fff'
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
        <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-4 text-center relative">
          Let's Build Something Great
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>
        <p className="text-lg text-text-muted/90 text-center mb-2">
          Construyamos Algo Grandioso
        </p>
        
        <p className="text-text-muted text-center mb-4 max-w-2xl mx-auto text-lg">
          Ready to launch your SaaS?
        </p>
        <p className="text-text-muted/80 text-center mb-6 max-w-2xl mx-auto italic">
          ¿Listo para lanzar tu SaaS?
        </p>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Actualmente aceptando 2 nuevos proyectos en Q1 2025
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Main CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl p-1 shadow-2xl">
              <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-space-grotesk font-bold text-white mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-base text-text-muted/80 mb-4 italic">
                  Garantía de Respuesta Rápida
                </p>
                
                <p className="text-text-muted text-lg mb-6 leading-relaxed">
                  Message me on WhatsApp and I'll respond within <strong className="text-primary">4 hours</strong> (Mon-Fri, 9am-6pm ART).
                </p>
                <p className="text-text-muted/80 text-sm mb-6 italic">
                  Envíame un mensaje por WhatsApp y responderé en menos de 4 horas (lun-vie, 9am-6pm ART).
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Free 30-min consultation</p>
                      <p className="text-text-muted text-sm">Discuss your project scope & timeline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Custom proposal within 48 hours</p>
                      <p className="text-text-muted text-sm">Detailed timeline, tech stack & pricing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Start within 1 week</p>
                      <p className="text-text-muted text-sm">If we're a good fit, we move fast</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5493854834250?text=Hola%20Maxi!%20Me%20interesa%20discutir%20un%20proyecto%20SaaS.%20%0A%0AProyecto:%20[breve%20descripción]%0APresupuesto:%20[rango]%0ATimeline:%20[cuándo%20lo%20necesitas]" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 w-full"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chatear por WhatsApp</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Alternative Contact */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-transparent rounded-3xl p-1 shadow-xl">
                <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted uppercase tracking-wider">Prefer Email?</p>
                      <p className="text-white font-medium">For detailed proposals</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:maxiipadilladev@gmail.com?subject=Project%20Inquiry%20-%20[Your%20Project%20Name]&body=Hi%20Maxi,%0A%0AI'd%20like%20to%20discuss%20a%20project.%0A%0AProject%20Description:%0A[Tell%20me%20about%20your%20project]%0A%0ABudget%20Range:%0A[Your%20budget]%0A%0ATimeline:%0A[When%20you%20need%20it]%0A%0ALooking%20forward%20to%20hearing%20from%20you!" 
                    className="block w-full text-center px-6 py-3 border-2 border-secondary/30 text-secondary hover:bg-secondary/10 font-bold rounded-xl transition-all duration-300 hover:border-secondary/60"
                  >
                    maxiipadilladev@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-3xl p-1 shadow-xl">
                <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted uppercase tracking-wider">Connect on LinkedIn</p>
                      <p className="text-white font-medium">Professional network</p>
                    </div>
                  </div>
                  <a 
                    href="https://linkedin.com/in/maxiipadilladev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border-2 border-accent/30 text-accent hover:bg-accent/10 font-bold rounded-xl transition-all duration-300 hover:border-accent/60"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="bg-gradient-to-br from-white/5 to-transparent rounded-3xl p-1 shadow-xl">
                <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted uppercase tracking-wider">Check My Code</p>
                      <p className="text-white font-medium">Open source projects</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/maxiipadilladev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 border-2 border-white/20 text-white hover:bg-white/5 font-bold rounded-xl transition-all duration-300 hover:border-white/40"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
