import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CTASection = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/iyerrohit645/discovery-call?month=2025-07', '_self');
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-8 fade-in">
            Ready to Install Your AI Content Ecosystem?
          </h2>
          
          <div className="fade-in">
            <Button 
              onClick={handleBookCall}
              className="btn-primary text-xl px-12 py-6 mb-6"
            >
              <span className="mr-2">Book a Free Call</span>
              <ExternalLink className="w-5 h-5" />
            </Button>
            
            <p className="text-foreground-secondary text-lg">
              No hard pitch. Just a quick chat to see if you're a fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;