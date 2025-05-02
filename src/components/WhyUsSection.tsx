
import { Check } from "lucide-react";

const WhyUsSection = () => {
  const differentiators = [
    {
      title: "Extensive Industry Network",
      description: "Access our global network spanning 30+ countries with privileged venue relationships and local expertise."
    },
    {
      title: "Transparent Contracts",
      description: "Clear, straightforward agreements with no hidden fees or unexpected charges."
    },
    {
      title: "Data-Driven Routing",
      description: "Analytics-powered tour planning reduces overhead costs, travel time, and environmental impact."
    },
    {
      title: "Comprehensive Sustainability Policy",
      description: "Partner with eco-certified vendors and implement carbon offset programs for greener touring."
    },
    {
      title: "24/7 Tour Support",
      description: "Our dedicated team is available around the clock to handle emergencies, logistics, and last-minute changes."
    },
    {
      title: "Creative Marketing Strategies",
      description: "Innovative, targeted promotional campaigns that connect with the right audiences."
    }
  ];

  return (
    <section 
      id="why-us" 
      className="section-padding bg-white noise-bg"
      aria-labelledby="why-us-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-600 font-medium mb-3 block">Why Partner With Us</span>
          <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold mb-6">Our Competitive Advantage</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            WokePlugg delivers value through industry expertise, innovative processes, and a commitment to transparent partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={item.title} 
              className="flex animate-on-scroll stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 mr-4 mt-1">
                <div className="bg-primary-100 p-1.5 rounded-full">
                  <Check className="h-4 w-4 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-10 rounded-2xl border border-primary-100 card-shadow">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900">Ready to elevate your next tour?</h3>
                <p className="text-neutral-700 mb-6 md:mb-0">
                  Our team is ready to discuss your specific needs and craft a tailored solution for your upcoming events.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm btn-hover"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start the Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
