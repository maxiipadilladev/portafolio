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

        <div className="flex justify-center">
            <div className="w-full lg:w-1/2">
                <form 
                    onSubmit={handleSubmit}
                    className="bg-dark-light/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10 shadow-2xl"
                    noValidate
                >
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-text font-semibold mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required
                            className="w-full bg-dark/60 border border-primary/30 rounded-lg p-4 text-text focus:bg-dark/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/50"
                            placeholder="Your Name"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-text font-semibold mb-2">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            className="w-full bg-dark/60 border border-primary/30 rounded-lg p-4 text-text focus:bg-dark/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/50"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="message" className="block text-text font-semibold mb-2">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={5} 
                            required
                            className="w-full bg-dark/60 border border-primary/30 rounded-lg p-4 text-text focus:bg-dark/80 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/50 resize-y"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
