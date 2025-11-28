import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
