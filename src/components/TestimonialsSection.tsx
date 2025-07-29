const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Results
          </h2>
          
          {/* Results Images */}
          <div className="max-w-2xl mx-auto space-y-8 mb-16">
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in">
              <img 
                src="/lovable-uploads/ab10c1c4-6dbd-425d-9cfd-766af02213ff.png" 
                alt="200+ Calls Booked Results"
                className="w-full h-auto rounded mb-4"
              />
              <p className="text-lg text-foreground-secondary text-center">200+ Calls Booked</p>
            </div>
            
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src="/lovable-uploads/bceedcd9-64c6-4632-9553-80d603a6f30f.png" 
                alt="YouTube Results"
                className="w-full h-auto rounded mb-4"
              />
              <p className="text-lg text-foreground-secondary text-center">YouTube Growth Results</p>
            </div>
            
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src="/lovable-uploads/e766ef13-4ca0-407f-a45c-bb871de4c7f0.png" 
                alt="Instagram Results"
                className="w-3/4 h-auto rounded mb-4 mx-auto"
              />
              <p className="text-lg text-foreground-secondary text-center">Instagram Growth Results</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto fade-in">
            <div className="bg-card border border-card-border rounded-lg p-12 text-center">
              <p className="text-xl text-foreground-secondary italic">
                "We're adding real client results and feedback here as more entrepreneurs implement the AI Content Ecosystem. Check back soon."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;