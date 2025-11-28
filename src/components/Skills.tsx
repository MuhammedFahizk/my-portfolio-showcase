import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    icon: Database,
    title: "Backend Development",
    items: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["UI/UX", "Figma", "Responsive Design", "Animations"],
  },
  {
    icon: Rocket,
    title: "Tools & Others",
    items: ["Git", "Docker", "CI/CD", "Agile"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:card-glow transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{skill.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
