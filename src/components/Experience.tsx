import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Socio Cofundador",
      company: "RGN Software",
      location: "Argentina",
      period: "2024 - Presente",
      description: "Cofundador y desarrollador principal en startup de software, liderando el desarrollo de soluciones web innovadoras y gestionando proyectos de cliente.",
      skills: ["React", "Node.js", "TypeScript", "Gestión de Equipos"],
      current: true
    },
    {
      title: "Desarrollador Freelancer",
      company: "Independiente",
      location: "Argentina",
      period: "2021 - 2024",
      description: "Desarrollo de aplicaciones web y sistemas de gestión para diversos clientes. Especializado en soluciones full-stack con tecnologías modernas.",
      skills: ["JavaScript", "React", "PHP", "MySQL", "Bootstrap"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software, desde freelancer 
            hasta cofundar mi propia empresa de tecnología.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card 
                    variant="gradient" 
                    className="scroll-reveal relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {exp.current && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                          Actual
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl gradient-text mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Tecnologías y Habilidades:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-card border border-border/50 rounded-full text-sm font-medium text-primary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;