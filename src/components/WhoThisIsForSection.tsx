import { Check } from "lucide-react";

const WhoThisIsForSection = () => {
  const criteria = [
    "Agency owners or coaches/consultants",
    "Making $3K+/month in revenue",
    "Validated offer already monetizing",
    "Struggling with consistency or strategy",
    "Want predictable inbound leads from content",
    "Open to using AI & automation to scale"
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Who This is For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {criteria.map((criterion, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground font-medium">
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;