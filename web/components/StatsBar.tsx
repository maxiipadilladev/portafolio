export default function StatsBar() {
  const stats = [
    {
      value: "500+",
      label: "Monthly Bookings",
      sublabel: "(RunaFit Production)",
      color: "text-primary"
    },
    {
      value: "2",
      label: "National Awards",
      sublabel: "(NASA + Rally LATAM)",
      color: "text-secondary"
    },
    {
      value: "+25%",
      label: "Client Revenue Increase",
      sublabel: "(Studio Occupancy)",
      color: "text-accent"
    }
  ];

  return (
    <section className="bg-primary/10 border-y border-primary/20 py-12 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group hover:scale-105 transition-transform duration-300"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2 font-space-grotesk group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-text font-medium text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-text-muted text-sm">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
