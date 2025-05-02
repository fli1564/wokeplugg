
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "WokePlugg - Industry Hub for Music Professionals";
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "WokePlugg - Industry Hub for concert promoters, booking agents, artist managers, and touring artists. Connect with our global network for tour planning, venue negotiation, marketing, and more.");
    }

    // Add Open Graph tags
    const ogTags = [
      { property: "og:title", content: "WokePlugg - Industry Hub for Music Professionals" },
      { property: "og:description", content: "Connect with our global network for tour planning, venue negotiation, marketing, and sustainable touring solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wokeplugg.com" }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (element) {
        element.setAttribute("content", tag.content);
      } else {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        element.setAttribute("content", tag.content);
        document.head.appendChild(element);
      }
    });

    // Add JSON-LD structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "WokePlugg",
      "url": "https://wokeplugg.com",
      "logo": "https://wokeplugg.com/logo.png",
      "description": "Concert organization company connecting industry talent to venues with transparent processes and sustainable solutions.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-234-567-890",
        "contactType": "Customer Service",
        "email": "industry@wokeplugg.com"
      },
      "sameAs": [
        "https://twitter.com/wokeplugg",
        "https://www.linkedin.com/company/wokeplugg",
        "https://www.instagram.com/wokeplugg"
      ]
    });
    document.head.appendChild(script);

  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <SuccessStoriesSection />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
      <AnimateOnScroll />
    </div>
  );
};

export default Index;
