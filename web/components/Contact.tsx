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
    <section id="contact" className="py-20 bg-dark/50 relative">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-4xl font-space-grotesk font-bold mb-12 text-center relative">
          Contact
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
            <div className="bg-dark-light/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-16 shadow-2xl flex flex-col items-center text-center">
                <h3 className="text-3xl font-space-grotesk font-bold text-white mb-6">
                    Ready to scale your business?
                </h3>
                
                <p className="text-text-muted text-lg mb-10 max-w-2xl leading-relaxed">
                    I'm currently accepting new projects. Whether you have a question or want to discuss a potential partnership, I'm just a click away.
                </p>

                <div className="mb-10 w-full flex justify-center">
                    <a 
                        href="https://wa.me/5493854834250" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                    >
                        <i className="bi bi-whatsapp text-xl"></i>
                        <span>Chat on WhatsApp</span>
                    </a>
                </div>
                
                <div className="w-full border-t border-white/10 pt-8 flex flex-col items-center justify-center animate-fadeIn">
                     <span className="text-text-muted mb-2 text-sm uppercase tracking-widest">Or email me directly</span>
                     <a 
                        href="mailto:maxiipadilladev@gmail.com" 
                        className="text-xl md:text-2xl font-space-grotesk font-bold text-white hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                     >
                        maxiipadilladev@gmail.com
                     </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
