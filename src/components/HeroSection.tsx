
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-neutral-100 flex items-center pt-20 overflow-hidden noise-bg"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-primary-300/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 pt-10 pb-20 relative">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-bounce-subtle">
            For Industry Professionals Only
          </span>
          
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up"
          >
            Revolutionizing <span className="text-primary-600">Concert Experiences</span> for Artists and Organizers
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            WokePlugg connects industry talent to world-class venues with transparent processes, data-driven routing, and 24/7 support. Your vision, our expertise.
          </p>
          
          <div className="flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white text-lg btn-hover group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neutral-300 hover:border-primary-300 text-neutral-800 text-lg btn-hover"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
