import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      title: "Tecnicatura en Programación",
      institution: "Universidad Tecnológica Nacional",
      status: "Completado",
      year: "2024",
      category: "Universitario",
      link: "https://drive.google.com/drive/folders/1CxFK_UfuB-pwKzZvb8bUtgp1wb0KU1rE"
    },
    {
      title: "Titulo Secundario - Economia y Gestion de las Organizaciones",
      institution: "Soldados Argentinos N°258",
      status: "Completado",
      year: "2014",
      category: "Secundario",
      link: "https://drive.google.com/drive/folders/14-vn3T0F8VDyUApUfULS7fiBfyK9H3hR?usp=sharing"
    },
    {
      title: "Analista de Sistemas",
      institution: "IZO 2014",
      status: "Completado",
      year: "2014",
      category: "Terciario",
      link: "https://drive.google.com/drive/folders/1I_jJuQxdQ_fY9uT20g0-YMt-HbkPbLgc?usp=sharing"
    },
    {
      title: "Formación Alura con Diplomatura",
      institution: "Oracle ONE",
      status: "Completado",
      year: "2024",
      category: "Certificación",
      link: "https://drive.google.com/drive/folders/1xkK5ngMH-zAkhJ7qJ7gsk-XFnyyFkLmT?usp=sharing"
    },
    {
      title: "Diplomatoria en Inteligencia Artificial",
      institution: "Universidad San Martín - Argentina Programa 4.0",
      status: "Completado",
      year: "2023",
      category: "Diplomatoria",
      link: "https://drive.google.com/drive/folders/1LYHdIFLJD8hpU9wAu_OFo3tUwgYpMhgd?usp=drive_link"
    },
    {
      title: "Javascript / Node.JS",
      institution: "Codo a Codo",
      status: "Completado",
      year: "2023",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1G8J01uIjIJ2senIpia-H0HjDrAgR0iOA?usp=sharing"
    },
    {
      title: "Python - Git",
      institution: "Facilito",
      status: "Completado",
      year: "2023",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1_WUQIsp5_cOJHCWb175Xpp2DcDTNM9ch?usp=sharing"
    },
    {
      title: "Front-End - Soft Skills",
      institution: "Buenos Aires - Multiplica",
      status: "Completado",
      year: "2022",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1N7y7tPuFKPHm9eLVQcxbxJDQapEmmSmL?usp=sharing"
    },
    {
      title: "Formación Cursos Varios",
      institution: "Educación IT",
      status: "Completado",
      year: "2022",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1yIRuyvjcdPrVYYeObgWhbt1qCEpy7sop?usp=sharing"
    },
    {
      title: "Scrum Master",
      institution: "Soy Líder",
      status: "Completado",
      year: "2024",
      category: "Certificación",
      link: "https://drive.google.com/drive/folders/1mF4fqbzRRKVRhLfxgh5PZA7h7rZ7jyxj?usp=sharing"
    },
    {
      title: "Curso de Inteligencia Artificial",
      institution: "ATE",
      status: "Completado",
      year: "2023",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1mF4fqbzRRKVRhLfxgh5PZA7h7rZ7jyxj?usp=sharing"
    },
    {
      title: "Webinars",
      institution: "Educacion IT 2022",
      status: "Completado",
      year: "2022",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/1HjIB1xuvpgppMY5ksnLbLN2XN6zvR69j"
    },
    {
      title: "Formación Cursos / Varios",
      institution: "Egg 2022",
      status: "Completado",
      year: "2022",
      category: "Curso",
      link: "https://drive.google.com/drive/folders/194T499-QPVNx-3YGM7BmYLVCx1MwDII-?usp=sharing"
    },
    {
      title: "C# Intermedio: APIs REST, Docker y Despliegue en Azure",
      institution: "Polo Tecnológico",
      status: "Completado",
      year: "2024",
      category: "Certificación",
      link: "https://drive.google.com/drive/folders/16gXetTwBG46h64yp3WC3nU8uROSz64OY"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Universitario":
        return "bg-gradient-primary text-primary-foreground";
      case "Secundario":
        return "bg-primary/20 text-primary border-primary/30";
      case "Terciario":
        return "bg-accent text-accent-foreground";
      case "Diplomatoria":
        return "bg-secondary text-secondary-foreground";
      case "Certificación":
        return "bg-success/20 text-success border-success/30";
      case "Curso":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Formación Académica
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria educativa y certificaciones profesionales que respaldan 
            mi experiencia en desarrollo de software y tecnologías emergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {education.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <CardTitle className="text-lg font-semibold mt-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <p className="text-foreground font-medium">
                    {item.institution}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                    <Badge 
                      variant={item.status === "En proceso" ? "secondary" : "outline"}
                      className={item.status === "En proceso" ? "text-primary" : ""}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <p className="text-muted-foreground">
            ¿Quieres ver los certificados? Haz clic en el ícono de enlace externo de cada formación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;