import { Bot, GraduationCap, Users, Database } from "lucide-react";

const WhatYouGetSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Systems & Automations",
      items: [
        "Workflows using Notion, n8n, Google Sheets",
        "Prompt stacks: idea → script → post",
        "Templates that remove 90% of manual work"
      ]
    },
    {
      icon: GraduationCap,
      title: "Trainings",
      items: [
        "On-demand modules",
        "Strategy, hooks, offer-to-content alignment",
        "Charlie Morgan-style niche domination"
      ]
    },
    {
      icon: Users,
      title: "One-on-One Support",
      items: [
        "Weekly consulting calls with Rohit",
        "Funnel and content performance help",
        "Async feedback via Loom and community"
      ]
    },
    {
      icon: Database,
      title: "Dashboards & Resources",
      items: [
        "Notion planners and SOPs",
        "Weekly content calendars",
        "Accountability check-ins"
      ]
    }
  ];

  return (
    <section className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You Get with ClientsForge
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-lg p-6 card-hover fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-dm-serif">
                    {feature.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-foreground-secondary flex items-start"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;