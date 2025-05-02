
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section 
      className="bg-primary-400 text-neutral-900 py-16 brutalist-offset"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6 lg:px-8 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="cta-heading" 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Create Industry-Leading Tour Experiences?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Partner with WokePlugg for transparent relationships, data-driven strategies, and sustainable touring solutions.
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-neutral-100 font-medium py-3 px-8 rounded-md shadow-[3px_3px_0px_0px_rgba(140,116,111,0.5)] btn-hover group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Collaborate 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
