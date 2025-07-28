import { Target, TrendingUp, Zap, Clock } from "lucide-react";

const OutcomeSection = () => {
  const outcomes = [
    {
      icon: Zap,
      title: "A fully built AI-powered content engine",
      description: "Complete systems and workflows ready to use"
    },
    {
      icon: TrendingUp,
      title: "Predictable inbound leads and booked calls",
      description: "Consistent flow of qualified prospects"
    },
    {
      icon: Target,
      title: "Content that converts, not just looks good",
      description: "Strategic content designed for results"
    },
    {
      icon: Clock,
      title: "Time saved, confidence gained",
      description: "Focus on high-value activities while systems work"
    }
  ];

  return (
    <section className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You'll Walk Away With
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-lg p-8 card-hover fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-dm-serif mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;