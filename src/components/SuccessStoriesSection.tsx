
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      artistName: "Aurora Lights",
      tourSize: "15-city North American tour",
      quote: "WokePlugg transformed our routing strategy, reducing travel between venues by 30% while increasing our average attendance. Their data-driven approach and venue relationships made this our most profitable tour to date.",
      role: "Tour Manager"
    },
    {
      artistName: "The Midnight Collective",
      tourSize: "European festival circuit",
      quote: "Their industry connections secured us prime slots at three major festivals we'd been trying to book for years. The team's hands-on approach to logistics meant we could focus entirely on our performances.",
      role: "Artist Manager"
    },
    {
      artistName: "Rhythm Republic",
      tourSize: "22-venue international tour",
      quote: "WokePlugg's sustainability initiatives aligned perfectly with our brand values. They helped us implement carbon-neutral solutions without compromising on production quality or audience experience.",
      role: "Booking Agent"
    },
    {
      artistName: "Echo Valley",
      tourSize: "Multi-city arena tour",
      quote: "The level of detail in their production planning is unmatched. From technical riders to crew coordination, everything ran seamlessly across all venues, despite the complex stage setup our show requires.",
      role: "Production Director"
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="success-stories" 
      className="section-padding bg-neutral-100 noise-bg"
      aria-labelledby="success-stories-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-600 font-medium mb-3 block">Success Stories</span>
          <h2 id="success-stories-heading" className="text-3xl md:text-4xl font-bold mb-6">Results That Speak Volumes</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            See how we've helped artists and organizers create memorable tour experiences and achieve their business objectives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="testimonial-card">
                    <div className="mb-6">
                      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-300" aria-hidden="true">
                        <path d="M18.9 0C13.5447 0 9.45 4.09467 9.45 9.45C9.45 14.742 13.4453 18.9 18.9 18.9C13.4453 18.9 9.45 23.058 9.45 28.35C9.45 31.878 11.4147 35.0213 14.3347 36C19.7242 34.2947 23.625 28.8533 23.625 18.9C23.625 8.46667 18.9 0 18.9 0ZM37.8 0C32.4447 0 28.35 4.09467 28.35 9.45C28.35 14.742 32.3453 18.9 37.8 18.9C32.3453 18.9 28.35 23.058 28.35 28.35C28.35 31.878 30.3147 35.0213 33.2347 36C38.6242 34.2947 42.525 28.8533 42.525 18.9C42.525 8.46667 37.8 0 37.8 0Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p className="text-lg mb-8 text-neutral-800 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-xl text-neutral-900">{testimonial.artistName}</p>
                      <p className="text-neutral-600">{testimonial.tourSize}</p>
                      <p className="text-neutral-500 text-sm mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-neutral-300 hover:border-primary-300 hover:bg-primary-50 btn-hover"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-primary-600' : 'bg-neutral-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-neutral-300 hover:border-primary-300 hover:bg-primary-50 btn-hover"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
