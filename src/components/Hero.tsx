import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback } from "react";

const Hero = () => {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div
        className="absolute top-20 right-20 w-64 h-48 rounded-2xl border border-primary/30 bg-card/10 backdrop-blur-xl shadow-2xl hidden lg:block animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="p-6 space-y-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 animate-glow" />
          <div className="h-3 w-3/4 bg-foreground/20 rounded" />
          <div className="h-3 w-1/2 bg-foreground/10 rounded" />
        </div>
      </div>

      <div
        className="absolute bottom-32 left-20 w-56 h-40 rounded-2xl border border-primary/30 bg-card/10 backdrop-blur-xl shadow-2xl hidden lg:block animate-fade-in"
        style={{ animationDelay: "0.7s" }}
      >
        <div className="p-6 space-y-3">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/30" />
            <div className="w-8 h-8 rounded-full bg-primary/20" />
          </div>
          <div className="h-3 w-4/5 bg-foreground/20 rounded" />
          <div className="h-3 w-3/5 bg-foreground/10 rounded" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <img src="./pfp.jpg" alt="" className="rounded-full mx-auto my-5 w-24 h-24 border border-primary/100" />

        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm text-muted-foreground">@_LynxForShort</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            BUILDING{" "}
            <span className="text-primary">FOR THE</span>
            <br />
            <span className="text-gradient">FUTURE</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I craft cutting-edge digital experiences that push the boundaries of technology
            and design. Transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-2 border-primary/20 animate-glow" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-2 border-primary/20 animate-glow"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
