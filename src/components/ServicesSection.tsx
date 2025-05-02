
import { Route, FileText, Users, Star, Calendar, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Route,
      title: "Tour Planning & Routing",
      description: "Strategic route optimization that reduces travel costs and environmental impact while maximizing audience reach."
    },
    {
      icon: FileText,
      title: "Venue Negotiation",
      description: "Leverage our relationships with 500+ venues globally to secure favorable deals and better terms for your tour."
    },
    {
      icon: Star,
      title: "Marketing & PR",
      description: "Targeted promotional strategies to drive ticket sales and raise artist profiles in each market."
    },
    {
      icon: Users,
      title: "Production Tech",
      description: "Seamless technical support ensuring your shows maintain consistent quality across every venue."
    },
    {
      icon: Calendar,
      title: "Hospitality & Logistics",
      description: "Comprehensive travel management, accommodations, and on-site support for artist teams."
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Every service can be tailored to your specific needs, whether you're planning a single show or a multi-continent tour."
    }
  ];

  return (
    <section 
      id="services" 
      className="section-padding bg-neutral-100 noise-bg"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-600 font-medium mb-3 block">Our Services</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Tour Solutions</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            From initial concept to final encore, our team provides end-to-end support for concert promoters, booking agents, and artist management teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="maximalist-card animate-on-scroll stagger-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary-100 p-3 rounded-full inline-flex mb-4">
                <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href="#contact" 
            className="inline-block text-primary-600 hover:text-primary-700 font-medium btn-hover"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in touch to discuss your requirements →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
