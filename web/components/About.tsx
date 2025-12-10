

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
              <img 
                src="/img/perfil.jpg" 
                alt="Profile of Maximiliano Padilla" 
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
            
            <div className="space-y-4 text-text-muted text-lg">
              <p>
                I'm a full-stack developer with a passion for building scalable
                applications that combine modern web technologies with AI integration.
                My comprehensive background spans both software and hardware, enabling
                me to design end-to-end solutions that address complex technical challenges.
              </p>
              <p>
                My commitment to delivering high-impact projects was recognized with
                <strong className="text-primary"> 1st Place for Social Impact</strong> at
                the Latin American Innovation Rally 2025, where I led the "Alerta Tierra" team.
              </p>
              <p>
                Subsequently, leading the "LEGION ALFA" project, we achieved
                <strong className="text-secondary"> 2nd Place Nationally</strong> at NASA
                Space Apps Challenge 2025, a demanding competition that required extreme
                resilience and culminated in recognition in San Juan.
              </p>
              <p>
                These achievements demonstrate my ability to combine technical expertise
                with strategic leadership, transforming innovative concepts into tangible
                solutions and lasting impact.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-light mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-transform hover:-translate-y-1 shadow-sm ${getBadgeStyle(skill.type)}`}
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
