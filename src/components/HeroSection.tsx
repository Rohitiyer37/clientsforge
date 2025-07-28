import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-dm-serif text-foreground mb-8 fade-in">
            Build a Predictable Content Engine that Books Sales Calls —{" "}
            <span className="text-primary">Without Burnout</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-foreground-secondary mb-12 max-w-3xl mx-auto leading-relaxed fade-in">
            We install an AI-powered content ecosystem in your business so you can generate 
            consistent inbound leads without constantly reinventing the content wheel.
          </p>
          
          <div className="fade-in">
            <Button 
              onClick={scrollToVideo}
              className="btn-primary text-xl px-10 py-5"
            >
              Watch How It Works
            </Button>
          </div>
        </div>
        
        {/* VSL Placeholder */}
        <div id="video-section" className="mt-20 max-w-4xl mx-auto fade-in">
          <div className="relative bg-section border-2 border-dashed border-border-light rounded-xl p-20 text-center" style={{ minHeight: '350px' }}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8">
                <Play className="w-10 h-10 text-primary-foreground ml-1" />
              </div>
              <p className="text-3xl font-semibold text-foreground-secondary">
                Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;