import { Code2, PaletteIcon, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Code2,
    title: "Expert Development",
    description:
      "Cutting-edge solutions using the latest technologies and best practices",
  },
  {
    icon: PaletteIcon,
    title: "Creative Design",
    description:
      "I create visually compelling designs that blend creativity and strategy.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Your vision drives my work. I build exactly what you need",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance ensuring your applications run at peak efficiency",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <span className="text-sm text-muted-foreground">Who I Am</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a passionate developer, designer and innovator dedicated to
              transforming ideas into powerful digital experiences. With expertise spanning
              web development, design, AI integration and blockchain solutions, I'm
              building the future one project at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-8 p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur text-center">
            <div className="flex-1 min-w-[120px]">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-border" />

            <div className="flex-1 min-w-[120px]">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-border" />

            <div className="flex-1 min-w-[120px]">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
