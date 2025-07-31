import ResultsCarousel from './ResultsCarousel';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Results
          </h2>
          
          <div className="max-w-6xl mx-auto mb-16 fade-in">
            <ResultsCarousel />
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