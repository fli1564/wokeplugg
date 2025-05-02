
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">WokePlugg</h3>
            <p className="mb-4">
              Connecting industry talent to world-class venues with transparent processes and sustainable solutions.
            </p>
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} WokePlugg. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-primary-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-300 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-primary-300 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8 text-sm text-neutral-400 text-center">
          <p>
            This website is intended for industry professionals only. For public event information, please visit the respective venue websites.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
