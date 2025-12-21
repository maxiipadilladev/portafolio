"use client";

import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectName: string;
  metric?: string;
  avatar?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Maxi transformed our manual booking process into a seamless automated system. We've seen a 25% increase in occupancy and eliminated all payment tracking errors. The WhatsApp integration was a game-changer for our older clients.",
      author: "Studio Owner",
      role: "Owner & Instructor",
      company: "Fitness Studio",
      projectName: "RunaFit",
      metric: "+25% occupancy increase",
      // avatar: "/img/testimonials/client1.jpg" // Optional - add later
    },
    // Add more testimonials as you collect them
  ];

  return (
    <section className="py-20 bg-dark/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-space-grotesk font-bold mb-4 relative inline-block">
            Client Results
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl mx-auto">
            Real feedback from clients who've seen measurable business impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative mb-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl p-1 shadow-2xl">
                <div className="bg-dark-light/95 backdrop-blur-xl rounded-3xl p-8 lg:p-12">
                  {/* Quote icon */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <svg 
                        className="w-12 h-12 text-primary/40" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <div className="flex-grow">
                      {/* Quote */}
                      <blockquote className="text-lg lg:text-xl text-text leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                          {testimonial.avatar ? (
                            <Image 
                              src={testimonial.avatar} 
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.author.charAt(0)}
                            </div>
                          )}
                          
                          <div>
                            <p className="font-bold text-white">{testimonial.author}</p>
                            <p className="text-sm text-text-muted">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>

                        {/* Metric badge */}
                        {testimonial.metric && (
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-sm font-bold text-green-400">{testimonial.metric}</span>
                          </div>
                        )}
                      </div>

                      {/* Project tag */}
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-muted">
                          Project: {testimonial.projectName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA to provide testimonial */}
          <div 
            className="text-center mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl"
            data-aos="fade-up"
          >
            <p className="text-text-muted mb-4">
              Have you worked with me? I'd love to feature your feedback!
            </p>
            <a 
              href="https://wa.me/5493854834250?text=Hi%20Maxi!%20I'd%20like%20to%20share%20feedback%20about%20our%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1 1 0 003.8 21.454l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.966 7.966 0 01-4.108-1.13l-.29-.174-2.458.723.723-2.458-.174-.29A7.945 7.945 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              Share Your Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
