import { Card } from "@/components/ui/card";
import { Code2, Server, Workflow, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Front-end Development",
      description: "Creating beautiful, responsive user interfaces with modern frameworks and libraries",
      color: "from-purple-primary to-purple-secondary",
    },
    {
      icon: Server,
      title: "Back-end Development",
      description: "Building robust server-side applications and APIs with scalable architecture",
      color: "from-purple-secondary to-blue-accent",
    },
    {
      icon: Workflow,
      title: "API Integration",
      description: "Seamlessly connecting applications with third-party services and internal systems",
      color: "from-blue-accent to-pink-accent",
    },
    {
      icon: Database,
      title: "Database Designing",
      description: "Structuring efficient and scalable database schemas for optimal performance",
      color: "from-pink-accent to-purple-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">What I bring to the table</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className="group p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
