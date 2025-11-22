import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Eye, Camera, MessageSquare, Shirt, Plus } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Camera,
      title: "Web Snap Monitor",
      description: "Distributed system for automated website visual monitoring over time",
      details: [
        "Captures screenshots at regular intervals",
        "Detects visual changes and differences",
        "Archives keyframes for historical tracking",
        "Used for UI regression testing and compliance tracking",
      ],
      color: "from-purple-primary to-purple-secondary",
    },
    {
      icon: MessageSquare,
      title: "Chatbot",
      description: "Intelligent chatbot answering questions based on scraped website content",
      details: [
        "Web scraping for data collection",
        "Natural language processing for context",
        "Contextual response generation",
        "Built with Streamlit for interactive UI",
      ],
      color: "from-purple-secondary to-blue-accent",
    },
    {
      icon: Shirt,
      title: "Dress Up",
      description: "Web-based personal styling platform for outfit recommendations",
      details: [
        "Upload clothing items as images",
        "AI-powered color matching algorithm",
        "Personalized outfit combinations",
        "Wishlist and purchase suggestions",
      ],
      color: "from-blue-accent to-pink-accent",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">My work and contributions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="group p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-2">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Code className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-primary/10 backdrop-blur-sm border-2 border-primary/20 max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plus className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">More Projects</h3>
          </div>
          <p className="text-muted-foreground">
            Along with these major projects, I've developed several small applications exploring 
            different technologies and solving various challenges. Each project has been a learning 
            experience that contributed to my growth as a developer.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
