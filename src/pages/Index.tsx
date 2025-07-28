import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import OutcomeSection from "@/components/OutcomeSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <HeroSection />
      <WhatYouGetSection />
      <WhoThisIsForSection />
      <OutcomeSection />
      <FounderSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;