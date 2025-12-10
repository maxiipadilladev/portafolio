import GlassCard from "./ui/GlassCard";

export default function Teams() {
  const teams = [
    {
      img: "/img/runa.jpg",
      title: "RunaTech Dev",
      subtitle: "Academic Team - ITSE",
      desc: "I lead an academic team focused on applying agile methodologies to create technological solutions in collaboration with real organizations, such as the \"ID Cultural\" project.",
    },
    {
      img: "/img/regroup.jpg",
      title: "REGroup",
      subtitle: "Innovation Team - Santiago del Estero Rally 2025",
      desc: "I assembled an innovation team to develop \"Tachy\", a comprehensive e-waste recycling system that includes a QR scanning app and an \"Eco-Points\" rewards program.",
    },
    {
      img: "/img/alertatierraequipo.jpeg",
      title: "Alerta Tierra - 1st Prize Social Impact",
      subtitle: "Winning Team - Latin American Innovation Rally 2025",
      desc: "I led a multidisciplinary team through a 28-hour hackathon, overcoming technical constraints to deliver a functional MVP. This high-pressure environment honed my ability to prioritize features and execute rapidly.",
    }
  ];

  return (
    <section id="teams" className="py-20 bg-dark/50 relative">
      <div className="container mx-auto px-4 aos-init aos-animate" data-aos="fade-up">
        <h2 className="text-4xl font-space-grotesk font-bold mb-12 text-center relative">
          Teams and Leadership
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <GlassCard key={index} className="hover:border-primary">
              <div className="relative h-48 overflow-hidden">
                <img src={team.img} alt={team.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text mb-1">{team.title}</h3>
                <h6 className="text-primary text-sm font-medium mb-3">{team.subtitle}</h6>
                <p className="text-text-muted text-sm leading-relaxed">{team.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
