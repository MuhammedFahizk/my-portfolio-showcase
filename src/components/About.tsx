import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating beautiful and functional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover:card-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in web development and design, I've worked on diverse projects 
              ranging from small business websites to large-scale applications. My passion lies in 
              creating intuitive, accessible, and visually stunning digital experiences.
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:card-glow transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in full-stack development, creating responsive web applications with modern 
              frameworks. From concept to deployment, I handle every aspect of the development process 
              with attention to detail and best practices.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
