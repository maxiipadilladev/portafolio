"use client";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "I start by understanding your business goals, target users, and core problems. No generic solutions—every project gets a custom strategy.",
      icon: "🎯",
      features: [
        "Business requirements analysis",
        "User research & personas",
        "Tech stack recommendation",
        "Timeline & milestone planning"
      ],
      duration: "1-2 days"
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "Within 1-2 weeks, you'll have a working MVP to validate with real users. Fast iteration beats perfect planning.",
      icon: "⚡",
      features: [
        "Core features first (80/20 rule)",
        "Mobile-first responsive design",
        "Integration setup (payments, APIs)",
        "Basic analytics tracking"
      ],
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Launch & Scale",
      description: "From deployment to revenue in weeks, not months. I stay involved post-launch to optimize based on real data.",
      icon: "🚀",
      features: [
        "Production deployment",
        "Performance monitoring",
        "User feedback integration",
        "Iterative improvements"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-dark/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-4 relative inline-block">
            How I Work
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            My proven 3-step process to take your SaaS from idea to revenue-generating product
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-dark shadow-lg z-10"></div>
                  
                  {/* Card */}
                  <div className="pt-32">
                    <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="bg-dark-light/95 backdrop-blur-xl rounded-2xl p-6 h-full">
                        {/* Icon & Number */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-5xl">{step.icon}</span>
                          <span className="text-6xl font-black text-white/10 font-space-grotesk">{step.number}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-3 font-space-grotesk">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-4">
                          {step.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                              <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Duration badge */}
                        <div className="pt-4 border-t border-white/10">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-muted">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-2xl p-1 shadow-xl">
                <div className="bg-dark-light/95 backdrop-blur-xl rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{step.icon}</span>
                    <span className="text-5xl font-black text-white/10 font-space-grotesk">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">
                    {step.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-muted">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Connector line for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-muted mb-6">
              Let's discuss your idea and see if my process is a good fit for your goals.
            </p>
            <a 
              href="https://wa.me/5493854834250?text=Hi%20Maxi!%20I'd%20like%20to%20discuss%20starting%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
