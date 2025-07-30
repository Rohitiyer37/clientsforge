import { Button } from "@/components/ui/button";

const WhatYouGetSection = () => {
  const features = [
    {
      title: "AI Content Systems",
      description: "Build a fully automated content engine that turns ideas into hooks, scripts, posts, and carousels in minutes using proven AI workflows built on tools like Notion, n8n, and Google Sheets. Eliminate 90% of manual work with prompt stacks and ready-to-deploy templates."
    },
    {
      title: "Content Strategy & Conversion",
      description: "Craft a content system that aligns perfectly with your offer so every piece of content moves prospects closer to booking a call. Learn high-converting hook writing, CTA building, and offer-to-content positioning that drives real results."
    },
    {
      title: "1:1 Implementation & Support",
      description: "Get hands-on support through weekly consulting calls, async feedback, and private community access so you never get stuck. From optimizing messaging to building your system step-by-step, we guide you the entire way."
    }
  ];

  const programDetails = [
    "Install AI-powered content workflows tailored to your business",
    "Provide pre-trained prompt stacks for rapid content creation",
    "Build automated content-to-client funnels",
    "Craft strategies for high-converting hooks and CTAs",
    "Offer weekly 1:1 consulting calls for optimization",
    "Deliver plug-and-play dashboards, SOPs, and content calendars",
    "Align content strategy with offer positioning",
    "Help position you as the authority in your niche",
    "Systematize your entire content operation for predictable growth"
  ];

  return (
    <section id="services" className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You Get with Clients Forge
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-card-border rounded-lg p-8 card-hover fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary font-dm-serif mb-4">
                {feature.title}
              </h3>
              
              <p className="text-base text-foreground-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-foreground font-dm-serif mb-8 text-center fade-in">
            What We Do
          </h3>
          
          <div className="bg-card border border-card-border rounded-lg p-8 mb-8 fade-in">
            
            <ul className="space-y-3 mb-8">
              {programDetails.map((detail, index) => (
                <li 
                  key={index} 
                  className="text-foreground-secondary flex items-start"
                >
                  <span className="text-primary mr-3 mt-1">✔</span>
                  {detail}
                </li>
              ))}
            </ul>
            
            <div className="border-t border-card-border pt-6">
              <h4 className="text-2xl font-bold text-primary font-dm-serif mb-4">The Endgame</h4>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                By the end of our call, you'll walk away with a clear, actionable roadmap to turn your content into a predictable client acquisition system.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-4">
                You'll know exactly how to:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-foreground-secondary flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><span className="text-primary font-semibold">Establish authority</span> in your niche using a tailored content strategy powered by AI</span>
                </li>
                <li className="text-foreground-secondary flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><span className="text-primary font-semibold">Attract consistent inbound leads</span> through strategic, systemized posting — not burnout</span>
                </li>
                <li className="text-foreground-secondary flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><span className="text-primary font-semibold">Convert content into a lead machine</span> that books qualified sales calls on repeat</span>
                </li>
              </ul>
              
              <p className="text-lg text-foreground leading-relaxed mb-4">
                We work with you until you see results. You get weekly consulting calls, your own custom AI content system, and access to a private community of ambitious founders and agency owners.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-4">
                If you're ready to make your content work for you — instead of draining your time and energy — schedule a call now. <span className="text-primary font-semibold">The content struggle ends here.</span>
              </p>
              
              <p className="text-xl text-primary font-semibold leading-relaxed mb-6">
                This isn't just content. It's your lead-gen machine, finally working for you — not the other way around.
              </p>
              
              <div className="text-center">
                <Button 
                  onClick={() => window.open('https://calendly.com/iyerrohit645/discovery-call?month=2025-07', '_self')}
                  className="btn-primary text-xl px-10 py-5"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;