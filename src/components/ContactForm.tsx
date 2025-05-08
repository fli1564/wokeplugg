import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validation
    if (!formData.name || !formData.email || !formData.role || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_e1htx0t', // Your EmailJS service ID
        'template_3pz7gde', // Updated EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          company: formData.company,
          message: formData.message,
          to_name: 'WokePlugg Team',
        },
        'o02Srr19TsaJQ1b7e' // Your EmailJS public key
      );
      
      toast({
        title: "Success!",
        description: "We've received your message and will be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section 
      id="contact" 
      className="section-padding bg-white noise-bg"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary-600 font-medium mb-3 block">Get In Touch</span>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            Ready to elevate your next tour or event? Our team of industry experts is ready to collaborate.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-10 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <a href="mailto:industry@wokeplugg.com" className="text-primary-600 hover:text-primary-700">
                  industry@wokeplugg.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary-100 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary-600" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <span className="text-neutral-700">
                  Available Globally
                </span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                    aria-required="true"
                  >
                    <option value="">Select your role</option>
                    <option value="Concert Promoter">Concert Promoter</option>
                    <option value="Booking Agent">Booking Agent</option>
                    <option value="Artist Manager">Artist Manager</option>
                    <option value="Touring Artist">Touring Artist</option>
                    <option value="Venue Manager">Venue Manager</option>
                    <option value="Production Manager">Production Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                  aria-required="true"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-8 btn-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
