import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-sm text-muted-foreground mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bharath A
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-4 font-light">
            Building real-life solutions through
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-8">
            websites and applications
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate web & app developer creating impactful digital solutions that solve modern challenges
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
