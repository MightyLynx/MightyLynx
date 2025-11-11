import CryptoTicker from "@/components/CryptoTicker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CryptoTicker />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 MightyLynx. Building for the future.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
