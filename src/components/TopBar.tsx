import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TopBar = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/iyerrohit645/discovery-call?month=2025-07', '_self');
  };

  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="section-container">
        <div className="flex items-center justify-center text-center">
          <span className="text-sm font-medium mr-4">
            Ready to scale your content? Book a Free Strategy Call
          </span>
          <Button
            onClick={handleBookCall}
            variant="outline"
            size="sm"
            className="bg-white text-primary hover:bg-gray-50 border-white"
          >
            Book Now
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;