"use client";

import Link from 'next/link';

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_50%)] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Available Badge */}
        <div className="mb-6 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Disponible para Proyectos SaaS
          </span>
        </div>
        
        <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-white tracking-tight">
          Maximiliano Padilla
        </h1>
        <p className="text-lg text-text-muted mb-12 font-light">
          Full-Stack Developer | Desarrollador Full-Stack
        </p>
        
        {/* Hero Card with Stats & Awards */}
        <div className="bg-dark-light/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto mb-10 text-left shadow-2xl relative group animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-space-grotesk font-bold text-white mb-4">
              Hey, I'm <span className="text-primary">Maxi</span>
            </h2>
            
            <p className="text-lg text-text-muted mb-2">
              I'm a full-stack developer who ships fast.
            </p>
            <p className="text-base text-text-muted/80 mb-6 italic">
              Desarrollador full-stack que entrega rápido.
            </p>

            <div className="mb-6 p-4 bg-white/5 rounded-xl border-l-4 border-secondary/80">
              <p className="text-text">
                <span className="font-bold text-secondary not-italic">My specialty:</span> Building SaaS products from scratch and getting 
                them to revenue in weeks, not months.
              </p>
              <p className="text-sm text-text-muted/80 mt-2 italic">
                Mi especialidad: Construir productos SaaS desde cero y llevarlos a generar ingresos en semanas, no meses.
              </p>
            </div>

            <p className="font-bold text-white mb-3 uppercase tracking-wider text-xs opacity-80">Recent Highlights / Logros Recientes:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                 </div>
                 <span className="text-text">RunaFit: En producción, <strong className="text-green-400">gestionando 500+ reservas/mes</strong></span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="text-xl">🥈</span>
                 </div>
                 <span className="text-text">NASA Space Apps Challenge <span className="text-sm text-text-muted">(2do lugar nacional)</span></span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 flex-shrink-0 flex justify-center">
                    <span className="text-xl">🥇</span>
                 </div>
                 <span className="text-text">Rally LATAM Innovation <span className="text-sm text-text-muted">(1er lugar)</span></span>
              </li>
            </ul>

            <p className="text-lg font-medium text-white border-t border-white/10 pt-4 mt-2">
              I don't just code — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">I solve business problems.</span>
            </p>
            <p className="text-sm text-text-muted/80 mt-2 italic">
              No solo codifico — resuelvo problemas de negocio.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp">
          <a 
            href="https://wa.me/5493854834250?text=Hola%20Maxi!%20Me%20interesa%20discutir%20un%20proyecto%20SaaS.%20%0A%0AProyecto:%20[breve%20descripción]%0APresupuesto:%20[rango]%0ATimeline:%20[cuándo%20lo%20necesitas]" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300 w-full sm:w-auto hover:scale-105 shadow-lg"
          >
            📅 Agendar Consulta Gratuita
          </a>
          <Link 
            href="#projects" 
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            Ver Caso de Estudio RunaFit ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
