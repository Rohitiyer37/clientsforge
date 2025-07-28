const WhatYouGetSection = () => {
  const features = [
    {
      title: "AI Systems & Automations",
      items: [
        "Workflows using Notion, n8n, Google Sheets",
        "Prompt stacks: idea → script → post",
        "Templates that remove 90% of manual work"
      ]
    },
    {
      title: "Trainings",
      items: [
        "On-demand modules",
        "Strategy, hooks, offer-to-content alignment",
        "Advanced content strategy and positioning"
      ]
    },
    {
      title: "One-on-One Support",
      items: [
        "Weekly consulting calls with Rohit",
        "Funnel and content performance help",
        "Async feedback via Loom and community"
      ]
    },
    {
      title: "Dashboards & Resources",
      items: [
        "Notion planners and SOPs",
        "Weekly content calendars",
        "Accountability check-ins"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You Get with ClientsForge
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-card-border rounded-lg p-8 card-hover fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground font-dm-serif mb-4">
                {feature.title}
              </h3>
              
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="text-lg text-foreground-secondary flex items-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;