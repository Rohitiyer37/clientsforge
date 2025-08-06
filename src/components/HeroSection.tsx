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
          {/* Main Header */}
          <div className="mb-20 fade-in">
            <h1 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 leading-tight">
              You Don't Need More Content,<br />
              You Need a <span className="text-primary">System</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
              Most founders burn out trying to post more. We install a predictable content engine that does the heavy lifting by bringing you leads, sales calls, and clients on repeat.
            </p>
          </div>
          
          <div className="mb-16 fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-8">Step 1: Watch this video</h2>
            
            {/* Wistia Video */}
            <div id="video-section" className="max-w-[700px] mx-auto mb-12">
              <iframe 
                src="https://fast.wistia.net/embed/iframe/uerg9caspr" 
                title="VSL Video" 
                allowTransparency={true}
                frameBorder={0}
                scrolling="no" 
                className="wistia_embed w-full h-[394px] rounded-xl" 
                name="wistia_embed" 
                allowFullScreen 
                width="700" 
                height="394">
              </iframe>
            </div>
          </div>
          
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-8">Step 2: Book a call</h2>
            <Button 
              onClick={() => window.open('https://calendly.com/iyerrohit645/discovery-call?month=2025-07', '_self')}
              className="btn-primary text-xl px-10 py-5 mb-4"
            >
              Book a Free Call
            </Button>
            <p className="text-foreground-secondary mb-4">
              No hard pitch. Just a quick chat to see if you're a fit.
            </p>
            <p className="text-foreground-secondary text-sm">
              Everything about this call will remain <span className="text-primary font-semibold">100% confidential</span>. We respect your privacy and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;