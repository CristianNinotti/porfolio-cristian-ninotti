import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import cotizadorImage from "@/assets/cotizador-image.png";
import pokemonImage from "@/assets/pokemon-image.png";
import terapiasImage from "@/assets/terapias-image.png";
import pongImage from "@/assets/pong-image.png";

const Projects = () => {
  const projects = [
    {
      title: "Turnero Servicios Independientes - ServiTurnos",
      description: "Sistema de gestión de turnos para servicios profesionales con funcionalidades de reserva, notificaciones y administración de horarios.",
      image: project1,
      technologies: ["React", "Node.js", "MySQL", "Express"],
      liveUrl: null,
      githubUrl: "https://github.com/CristianNinotti/ServiTurnos",
      featured: true
    },
    {
      title: "Ecommerce Perfumes - Perfumeria Maison",
      description: "Plataforma de comercio electrónico especializada en perfumes con carrito de compras, gestión de productos y sistema de usuarios.",
      image: project2,
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/CristianNinotti/TPI-Grupo1-EcommercePerfumes",
      featured: true
    },
    {
      title: "Juego Pong con JavaScript",
      description: "Recreación del clásico juego Pong utilizando JavaScript vanilla con funcionalidades de puntuación y controles responsivos.",
      image: pongImage,
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas"],
      liveUrl: "https://cristianninotti.github.io/Juego_Pong_con_JS/",
      githubUrl: "https://github.com/CristianNinotti/Juego_Pong_con_JS",
      featured: true
    },
    {
      title: "Pokémon POO",
      description: "Implementación de un sistema de batalla Pokémon aplicando conceptos de Programación Orientada a Objetos en Python.",
      image: pokemonImage,
      technologies: ["Python", "POO", "Classes"],
      liveUrl: null,
      githubUrl: "https://github.com/CristianNinotti/Poo-Pokemon",
      featured: true
    },
    {
      title: "Cotizador de Monedas - Cotizador App",
      description: "Aplicación web para cotización de productos y servicios con interfaz intuitiva y cálculos automáticos de precios.",
      image: cotizadorImage,
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      liveUrl: "https://cristianninotti.github.io/-tup-lc2-cotizador-app/",
      githubUrl: "https://github.com/CristianNinotti/-tup-lc2-cotizador-app",
      featured: true
    },
    {
      title: "Terapias Complementarias",
      description: "Plataforma web para terapias complementarias con sistema de reservas, información de servicios y gestión de citas.",
      image: terapiasImage,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://terapias-complementarias.com.ar/",
      githubUrl: "https://github.com/CristianNinotti/terapias-complementarias",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos que muestran mis habilidades y experiencia 
            en el desarrollo de aplicaciones web modernas y funcionales.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              variant="gradient"
              className={`overflow-hidden scroll-reveal ${
                project.featured ? "md:grid md:grid-cols-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Button variant="hero" size="sm" onClick={() => window.open(project.liveUrl!, '_blank')}>
                        <ExternalLink className="w-4 h-4" />
                        Ver Proyecto
                      </Button>
                    )}
                    <Button variant="minimal" size="sm" onClick={() => window.open(project.githubUrl, '_blank')}>
                      <Github className="w-4 h-4" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl gradient-text">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-card border border-border/50 rounded-full text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.liveUrl && (
                      <Button 
                        variant="hero" 
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Proyecto
                      </Button>
                    )}
                    <Button 
                      variant="minimal" 
                      className={project.liveUrl ? "flex-1" : "w-full"}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Ver Código
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button 
            variant="glow" 
            size="lg"
            onClick={() => window.open('https://github.com/CristianNinotti', '_blank')}
          >
            <Github className="w-5 h-5" />
            Ver Más Proyectos en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;