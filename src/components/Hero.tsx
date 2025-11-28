import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Hero Banner Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-4">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Muhammed Fahiz</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            MERN Stack Developer | Content Creator on Scam Prevention | Exploring Erlang
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
