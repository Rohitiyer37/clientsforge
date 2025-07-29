const OutcomeSection = () => {
  const outcomes = [
    "A content system that works as hard as you do",
    "Predictable lead flow from your personal brand", 
    "Content that attracts your ideal clients automatically",
    "Complete freedom from content creation overwhelm"
  ];

  return (
    <section className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
            What You'll Walk Away With
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {outcomes.map((outcome, index) => (
              <li 
                key={index}
                className="flex items-start space-x-4 fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-xl text-foreground leading-relaxed">
                  {outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;