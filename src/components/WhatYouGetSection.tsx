const WhatYouGetSection = () => {
  const features = [
    {
      title: "AI Systems & Automations",
      items: [
        "Custom workflows for hooks, scripts, and posts",
        "Automations using n8n, Notion, Google Sheets",
        "Prompt stacks and templates"
      ]
    },
    {
      title: "Trainings",
      items: [
        "On-demand video modules",
        "Content strategy and positioning",
        "Hook writing and conversion techniques"
      ]
    },
    {
      title: "One-on-One Support",
      items: [
        "Weekly consulting calls with Rohit",
        "Performance optimization help",
        "Community and async feedback"
      ]
    },
    {
      title: "Resources & Systems",
      items: [
        "Notion dashboards and SOPs",
        "Content calendars",
        "Accountability check-ins"
      ]
    }
  ];

  const programDetails = [
    "Set proper foundations for your content engine and lead generation system",
    "Install AI-powered workflows that eliminate 90% of manual content work",
    "Master organic content strategies that attract your ideal clients",
    "Generate 20+ high-quality posts per week using our automated systems",
    "Build content funnels that consistently book qualified sales calls",
    "Learn advanced hook writing and engagement optimization techniques",
    "Develop content-to-conversion systems that turn followers into paying clients",
    "Master the psychology of content that sells without being salesy",
    "Systematize your entire content operation for predictable results"
  ];

  return (
    <section id="services" className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You Get with Clients Forge
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-card-border rounded-lg p-6 card-hover fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground font-dm-serif mb-4">
                {feature.title}
              </h3>
              
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="text-sm text-foreground-secondary flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground font-dm-serif mb-8 text-center fade-in">
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
              <p className="text-lg text-foreground leading-relaxed">
                <strong>The Endgame?</strong> You build a content machine that generates consistent leads while you focus on serving clients and growing your business. No more content stress, no more wondering what to post next.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mt-4">
                We work with you until you see results, so it's completely risk-free. You get weekly coaching calls, AI system setup, and access to our private community of successful agency owners and coaches.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mt-4">
                If you want to transform your content from a source of stress to your biggest lead generation asset, <strong>Schedule A Call NOW</strong>. The content struggle stops here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;