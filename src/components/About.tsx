import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Proyectos Completados", value: "50+" },
    { icon: Users, label: "Clientes Satisfechos", value: "30+" },
    { icon: Rocket, label: "Años de Experiencia", value: "3+" },
    { icon: Award, label: "Certificaciones", value: "8+" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones digitales innovadoras. 
            Con experiencia en tecnologías modernas, me enfoco en entregar código limpio 
            y experiencias de usuario excepcionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 scroll-reveal">
            <h3 className="text-2xl font-semibold text-primary">Mi Historia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comencé mi viaje en el desarrollo web hace más de 3 años, impulsado por 
              la curiosidad de entender cómo funcionan las aplicaciones que usamos diariamente. 
              Desde entonces, he trabajado en proyectos diversos, desde landing pages 
              hasta aplicaciones web complejas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
              siempre buscando las mejores prácticas y las tecnologías más actuales. 
              Me apasiona resolver problemas complejos y transformar ideas en realidades digitales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, 
              contribuyendo a proyectos open source y compartiendo conocimiento con 
              la comunidad de desarrolladores.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 scroll-reveal">
            {stats.map((stat, index) => (
              <Card key={index} variant="gradient" className="text-center p-6">
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;