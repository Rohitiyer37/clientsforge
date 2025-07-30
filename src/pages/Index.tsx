import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <TopBar />
      <Navigation />
      <HeroSection />
      <WhoThisIsForSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;