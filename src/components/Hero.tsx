import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Code, Terminal, Braces } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 scroll-reveal">
          {/* Profile Photo with Code Icons */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl relative bg-gradient-primary p-1">
                <img 
                  src={profilePhoto} 
                  alt="Cristian Ninotti" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating Code Icons */}
              <Code className="absolute -top-2 -right-2 w-8 h-8 text-primary/70 animate-pulse" />
              <Terminal className="absolute -bottom-2 -left-2 w-6 h-6 text-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Braces className="absolute top-6 -right-4 w-6 h-6 text-primary/50 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -top-1 left-8 w-4 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              <div className="absolute -bottom-1 right-8 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hola, soy{" "}
            <span className="gradient-text">
              Cristian Ninotti
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desarrollador Full Stack especializado en crear experiencias web modernas, 
            eficientes y escalables con las últimas tecnologías.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => window.open("https://drive.google.com/file/d/1Nnx-Of01YnlvVy5bNon1lnGh577KHzwx/view?usp=drive_link", '_blank')}
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Descargar CV
            </Button>
            
            <Button 
              variant="minimal" 
              size="xl"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Proyectos
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open("https://github.com/CristianNinotti", '_blank')}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open("https://www.linkedin.com/in/cristian-ninotti", '_blank')}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator with text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="text-primary text-sm font-medium mb-2 animate-pulse">
          Scroll
        </div>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;