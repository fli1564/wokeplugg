
import { Award, Calendar, Check, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Years of Experience",
      description: "Combined talent-booking expertise in the industry"
    },
    {
      icon: Users,
      value: "750+",
      label: "Shows Produced",
      description: "Successful events across multiple continents"
    },
    {
      icon: Award,
      value: "80+",
      label: "Artist Roster",
      description: "Diverse talent across various genres and markets"
    }
  ];

  return (
    <section 
      id="about" 
      className="section-padding bg-white noise-bg"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-600 font-medium mb-3 block">About WokePlugg</span>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">The Industry's Forward-Thinking Partner</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            WokePlugg bridges the gap between cutting-edge artists and world-class venues. Our mission is to create value-driven partnerships that elevate the live music experience while maximizing opportunity for all stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="maximalist-card animate-on-scroll stagger-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-3 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-4xl font-bold text-neutral-900 mb-2">{stat.value}</h3>
                <p className="font-medium text-neutral-800 mb-3">{stat.label}</p>
                <p className="text-neutral-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-10 rounded-2xl border border-primary-100 card-shadow">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900">Our Vision</h3>
            <p className="text-neutral-700 mb-8">
              We envision a music industry where tours are more efficient, sustainable, and profitable for everyone involved. By combining data-driven insights with decades of industry relationship building, we create tours that make sense financially, logistically, and environmentally.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Global Expertise, Local Understanding</h4>
                  <p className="text-neutral-600">Our network spans 30+ countries with on-the-ground partners who understand local markets.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Sustainable Practices</h4>
                  <p className="text-neutral-600">Leading the charge toward carbon-neutral touring with eco-certified partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
