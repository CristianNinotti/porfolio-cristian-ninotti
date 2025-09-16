import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/CristianNinotti", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/cristian-ninotti", label: "LinkedIn" },
    { icon: Mail, href: "mailto:cristianninotti03@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Ninotti.com.ar</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desarrollador Full Stack especializado en crear experiencias web 
              modernas y soluciones digitales innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Sobre Mí", href: "#about" },
                { label: "Proyectos", href: "#projects" },
                { label: "Tecnologías", href: "#technologies" },
                { label: "Contacto", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Conectemos</h4>
            <p className="text-muted-foreground">
              ¿Listo para trabajar juntos? No dudes en contactarme.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open(social.href, '_blank')}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Cristian Ninotti. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-current" /> en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;