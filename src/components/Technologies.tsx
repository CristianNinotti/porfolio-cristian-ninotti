import { Card, CardContent } from "@/components/ui/card";

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      techs: [
        { name: "React", level: 95, color: "text-blue-400" },
        { name: "TypeScript", level: 90, color: "text-blue-600" },
        { name: "Next.js", level: 85, color: "text-black dark:text-white" },
        { name: "Tailwind CSS", level: 92, color: "text-cyan-400" },
        { name: "Vue.js", level: 80, color: "text-green-500" },
      ]
    },
    {
      title: "Backend",
      techs: [
        { name: "Node.js", level: 88, color: "text-green-600" },
        { name: "Express", level: 85, color: "text-gray-600" },
        { name: "Python", level: 82, color: "text-yellow-500" },
        { name: "MongoDB", level: 80, color: "text-green-700" },
        { name: "PostgreSQL", level: 78, color: "text-blue-700" },
      ]
    },
    {
      title: "Herramientas",
      techs: [
        { name: "Git", level: 92, color: "text-orange-600" },
        { name: "Docker", level: 75, color: "text-blue-500" },
        { name: "AWS", level: 70, color: "text-orange-500" },
        { name: "Figma", level: 85, color: "text-purple-500" },
        { name: "Vercel", level: 88, color: "text-black dark:text-white" },
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mis <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajo con las tecnologías más modernas y demandadas del mercado 
            para crear soluciones robustas y escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              variant="gradient" 
              className="p-6 scroll-reveal"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${tech.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 scroll-reveal">
          <Card variant="glass" className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Siempre Aprendiendo
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              El mundo del desarrollo web está en constante evolución. Me mantengo 
              actualizado con las últimas tendencias y tecnologías emergentes para 
              ofrecer siempre las mejores soluciones.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["GraphQL", "React Native", "Svelte", "Rust", "Web3", "AI/ML"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technologies;