const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Results
          </h2>
          
          {/* Results Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in">
              <div className="w-full h-48 bg-section rounded mb-4 flex items-center justify-center">
                <p className="text-foreground-secondary font-semibold">200+ Calls Booked</p>
              </div>
              <p className="text-sm text-foreground-secondary">Client Results Screenshot</p>
            </div>
            
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '150ms' }}>
              <div className="w-full h-48 bg-section rounded mb-4 flex items-center justify-center">
                <p className="text-foreground-secondary font-semibold">YouTube Results</p>
              </div>
              <p className="text-sm text-foreground-secondary">YouTube Growth Screenshot</p>
            </div>
            
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-full h-48 bg-section rounded mb-4 flex items-center justify-center">
                <p className="text-foreground-secondary font-semibold">Instagram Results</p>
              </div>
              <p className="text-sm text-foreground-secondary">Instagram Growth Screenshot</p>
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