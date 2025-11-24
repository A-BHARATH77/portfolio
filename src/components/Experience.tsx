import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-purple animate-scale-in">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Software Development Intern
                </h3>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">Dotworld Technologies Pvt. Ltd.</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-primary rounded-lg text-primary-foreground text-sm font-medium self-start">
                May 2025 - November 2025
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Developed an Android application with modern features and user-friendly interface
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Created multiple responsive websites using latest web technologies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Gained hands-on experience with full-stack development and project management
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
