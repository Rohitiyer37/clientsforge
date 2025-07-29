const Footer = () => {
  return (
    <footer className="bg-section border-t border-border py-12">
      <div className="section-container">
        <div className="text-center space-y-4">
          <div className="text-2xl font-dm-serif text-foreground mb-4">
            Clients Forge
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-foreground-secondary">
            <a 
              href="mailto:contact@clientsforge.com" 
              className="hover:text-primary transition-colors"
            >
              contact@clientsforge.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="https://linkedin.com/in/rohit-iyer" 
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-foreground-secondary text-sm">
              © {new Date().getFullYear()} Clients Forge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;