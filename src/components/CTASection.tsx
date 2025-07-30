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
            Ready to Build Your <span className="text-primary">AI-Powered Content System</span>?
          </h2>
          
          <div className="fade-in">
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
              Book a free strategy call — no pressure, no hard pitch.<br />
              Just an honest conversation to see if this is the right fit for you.
            </p>
            
            <Button 
              onClick={handleBookCall}
              className="btn-primary text-xl px-12 py-6"
            >
              <span className="mr-2">Schedule a Free Call</span>
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;