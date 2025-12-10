import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/95 border-t border-primary/20 py-8 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-text-muted mb-4">
          © {currentYear} Maximiliano Padilla - Full-Stack Developer & Innovation Leader
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/maxiipadi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-all hover:-translate-y-1 text-2xl"
          >
            <i className="bi bi-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/maximiliano-padilla-1847a2347/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-all hover:-translate-y-1 text-2xl"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a 
            href="https://www.facebook.com/maxii.padilla/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-all hover:-translate-y-1 text-2xl"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a 
            href="mailto:mpadillatecnico@gmail.com" 
            className="text-text hover:text-primary transition-all hover:-translate-y-1 text-2xl"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
