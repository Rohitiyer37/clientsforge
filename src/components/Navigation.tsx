import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Navigation = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/iyerrohit645/discovery-call?month=2025-07', '_self');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-card-border backdrop-blur-sm">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-dm-serif font-bold text-foreground">
            Clients Forge
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={handleBookCall}
              className="btn-primary"
            >
              Book Call
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={handleBookCall}
              className="btn-primary"
            >
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;