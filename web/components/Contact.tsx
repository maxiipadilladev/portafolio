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
      <div className="container mx-auto px-4 aos-init aos-animate" data-aos="fade-up">
        <h2 className="text-4xl font-space-grotesk font-bold mb-8 text-center relative">
          Contact
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

            <div className="w-full lg:w-2/3 text-center">
                <div className="bg-dark-light/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to scale your business?</h3>
                    <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto">
                        I'm currently accepting new projects. Whether you have a question or want to discuss a potential partnership, I'm just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="https://wa.me/5493854834250" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                         <a href="mailto:maxiipadilladev@gmail.com" className="text-primary hover:text-white transition-colors">
                            or email me at maxiipadilladev@gmail.com
                         </a>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}
