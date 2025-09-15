import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de e-commerce completa con carrito de compras, pagos integrados y panel de administración. Construida con React, Node.js y MongoDB.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real, notificaciones y análisis de productividad.",
      image: project2,
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard para gestión de redes sociales con analytics en tiempo real, programación de posts y gestión de múltiples cuentas.",
      image: project3,
      technologies: ["Next.js", "TypeScript", "Prisma", "Redis", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
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
              <div className="relative group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button variant="hero" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Ver Proyecto
                    </Button>
                    <Button variant="minimal" size="sm">
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
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Proyecto
                    </Button>
                    <Button 
                      variant="minimal" 
                      className="flex-1"
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
          <Button variant="glow" size="lg">
            <Github className="w-5 h-5" />
            Ver Más Proyectos en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;