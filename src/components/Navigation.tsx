import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Code, Terminal, Braces } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Tecnologías", href: "#technologies" },
    { label: "Formación", href: "#education" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {/* Profile Photo */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg relative">
                <img 
                  src={profilePhoto} 
                  alt="Cristian Ninotti" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Code Icons */}
              <Code className="absolute -top-1 -right-1 w-4 h-4 text-primary/70 animate-pulse" />
              <Terminal className="absolute -bottom-1 -left-1 w-3 h-3 text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Braces className="absolute top-3 -right-2 w-3 h-3 text-primary/50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="font-bold text-xl gradient-text">
              Cristian Ninotti
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open("https://drive.google.com/file/d/1Nnx-Of01YnlvVy5bNon1lnGh577KHzwx/view?usp=drive_link", '_blank')}
            >
              <Download className="w-4 h-4" />
              CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border border-border/50 rounded-lg mt-2 p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={() => window.open("https://drive.google.com/file/d/1Nnx-Of01YnlvVy5bNon1lnGh577KHzwx/view?usp=drive_link", '_blank')}
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;