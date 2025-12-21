"use client";

import Image from 'next/image';

export default function About() {
  const skills = [
    { name: "JavaScript", type: "lang" },
    { name: "TypeScript", type: "lang" },
    { name: "Python", type: "lang" },
    { name: "PHP", type: "lang" },
    { name: "SQL", type: "lang" },
    { name: "React", type: "web" },
    { name: "Next.js", type: "web" },
    { name: "Node.js", type: "web" },
    { name: "Django", type: "web" },
    { name: "Flask", type: "web" },
    { name: "Tailwind CSS", type: "web" },
    { name: "Docker", type: "tools" },
    { name: "Git/GitHub", type: "tools" },
    { name: "AWS", type: "tools" },
    { name: "PostgreSQL", type: "tools" },
    { name: "LangChain", type: "tools" },
  ];

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'lang': return 'bg-gradient-to-br from-primary to-accent text-white';
      case 'web': return 'bg-secondary/20 text-secondary border border-secondary';
      case 'tools': return 'bg-accent/20 text-accent border border-accent';
      default: return 'bg-gray-700 text-white';
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center aos-init aos-animate" data-aos="fade-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <Image 
                src="/img/perfil.png" 
                alt="Profile of Maximiliano Padilla" 
                width={320}
                height={320}
                priority
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-[0_20px_60px_rgba(99,102,241,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3 aos-init aos-animate" data-aos="fade-left">
            <h2 className="text-4xl font-space-grotesk font-bold mb-6 text-center lg:text-left relative inline-block">
              About
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full lg:left-0 left-1/2 lg:translate-x-0 -translate-x-1/2"></span>
            </h2>
            
            <div className="space-y-6 text-text-muted text-lg">
              <p className="text-xl text-text leading-relaxed">
                I'm a <strong className="text-white">full-stack developer</strong> who specializes in building 
                <strong className="text-primary"> SaaS products that generate revenue</strong>, not just code that looks good on GitHub.
              </p>
              
              <p className="leading-relaxed">
                My approach: <span className="text-text">identify the core problem → build the MVP fast → validate with real users → scale.</span> That's how RunaFit went from idea to <strong className="text-green-400">500+ bookings/month</strong> in production.
              </p>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl hover:bg-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🥇</span>
                    <div>
                      <p className="font-bold text-primary text-sm">1st Place</p>
                      <p className="text-xs text-text-muted">Rally LATAM 2025</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted">Led "Alerta Tierra" team to win Social Impact category</p>
                </div>

                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🥈</span>
                    <div>
                      <p className="font-bold text-secondary text-sm">2nd Place</p>
                      <p className="text-xs text-text-muted">NASA Space Apps 2025</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted">LEGION ALFA: 89% waste recovery system for Mars missions</p>
                </div>
              </div>

              <p className="text-text-muted italic border-l-4 border-primary/50 pl-4 py-2">
                "I don't just code — I solve business problems with measurable impact."
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-transform hover:-translate-y-1 shadow-sm ${getBadgeStyle(skill.type)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
