import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Smartphone, Palette, Rocket } from "lucide-react";

const Freelancing = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Android and cross-platform applications",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions",
    },
    {
      icon: Rocket,
      title: "Full Stack",
      description: "End-to-end development services",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/20 animate-scale-in">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-primary rounded-2xl mb-6 shadow-glow-purple">
                <Briefcase className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Freelancing
                </span>
              </h2>
              
              <p className="text-xl text-foreground/80 mb-4">
                Let's Work Together
              </p>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm open to freelance opportunities in website and application development. 
                Whether you need a new project built from scratch or improvements to an existing one, 
                I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="text-center p-4 rounded-xl bg-muted/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-purple"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex p-3 bg-gradient-primary rounded-lg mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="min-w-[250px]"
              >
                Start a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Freelancing;
