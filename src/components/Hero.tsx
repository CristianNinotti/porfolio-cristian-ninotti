import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hola, soy{" "}
            <span className="gradient-text">
              Alex Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desarrollador Full Stack especializado en crear experiencias web modernas, 
            eficientes y escalables con las últimas tecnologías.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Descargar CV
            </Button>
            
            <Button variant="minimal" size="xl">
              Ver Proyectos
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;