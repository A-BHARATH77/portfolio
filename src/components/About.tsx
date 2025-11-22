import { Card } from "@/components/ui/card";
import profileImage from "@/assets/bharath-profile.jpg";
import { GraduationCap, Code, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
              <Card className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Bharath A"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </Card>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg shadow-glow-purple">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Education</h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Master of Science</span>
                    <br />
                    PSG College of Technology
                    <br />
                    2022 – 2027 (Pursuing)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-secondary rounded-lg shadow-glow-pink">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Passion</h3>
                  <p className="text-muted-foreground">
                    Strong interests in website and application development with a focus on creating real-life digital solutions that solve modern challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/80 rounded-lg shadow-glow-pink">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Goal</h3>
                  <p className="text-muted-foreground">
                    Committed to continuous learning and building impactful solutions that make a difference in people's lives through innovative technology.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-primary/10 border-primary/20 backdrop-blur-sm">
              <p className="text-foreground/90 leading-relaxed">
                I'm a dedicated developer currently pursuing my Master's at PSG College of Technology. 
                With hands-on experience in both web and mobile development, I focus on creating 
                practical solutions that address real-world problems. My journey in tech is driven 
                by curiosity and a desire to continuously learn and grow.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
