const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-section">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-8 fade-in">
            What Others Are Saying
          </h2>
          
          <div className="max-w-2xl mx-auto fade-in">
            <div className="bg-card border border-card-border rounded-lg p-12 text-center">
              <p className="text-xl text-foreground-secondary italic">
                "We're adding real results and feedback here as clients roll out the ecosystem. 
                Check back soon."
              </p>
            </div>
          </div>
          
          {/* Placeholder for future testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-30">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="bg-card border border-card-border rounded-lg p-6 h-48"
              >
                <div className="w-full h-full bg-section rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;