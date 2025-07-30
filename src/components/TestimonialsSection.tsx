const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Results
          </h2>
          
          {/* Results Images */}
          <div className="max-w-5xl mx-auto space-y-12 mb-16">
            {/* 200+ Calls Booked */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in">
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">200+ Calls Booked</h3>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/9ee4174e-ae21-4411-9484-f1bf5200f51a.png" 
                  alt="200+ Calls Booked Results"
                  className="max-w-2xl w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
            
            {/* Instagram Results */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '150ms' }}>
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">Instagram Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="/lovable-uploads/3e209ade-6f80-4602-9c3e-6ffd443260a4.png" 
                  alt="Instagram Analytics 1"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/979356f6-1da8-42f1-bcd1-66b585163174.png" 
                  alt="Instagram Analytics 2"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
            
            {/* YouTube Results */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">YouTube Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="/lovable-uploads/ddc3013b-b0e8-46c8-851e-566727400b35.png" 
                  alt="YouTube Analytics 1"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/4dd367c3-bfdc-40db-94c4-12e97db07edc.png" 
                  alt="YouTube Analytics 2"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/98ef5a7e-efba-413e-b821-8c1c7e3560c8.png" 
                  alt="YouTube Analytics 3"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/57c79ba0-4e97-4ddb-868f-bd1ce97ea211.png" 
                  alt="YouTube Analytics 4"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/3e9fc74a-1d3e-47ac-a88d-f4a8cb90e580.png" 
                  alt="YouTube Analytics 5"
                  className="w-full h-auto rounded shadow-lg"
                />
                <img 
                  src="/lovable-uploads/4827a4f1-03d2-45d6-8d8f-821eaa48ea7b.png" 
                  alt="YouTube Analytics 6"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
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