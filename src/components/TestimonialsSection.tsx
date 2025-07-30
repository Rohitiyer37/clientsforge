const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 fade-in">
            Results
          </h2>
          
          {/* Results Images */}
          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {/* 200+ Calls Booked */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in">
              <h3 className="text-2xl font-bold text-accent mb-4 text-center">200+ Calls Booked</h3>
              <img 
                src="/lovable-uploads/fcfe947b-9153-4bb8-a8a2-8f9f1170cabf.png" 
                alt="200+ Calls Booked Results"
                className="w-full h-auto rounded"
              />
            </div>
            
            {/* Instagram Results */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '150ms' }}>
              <h3 className="text-2xl font-bold text-accent mb-4 text-center">Instagram Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/e9428429-75ea-4251-b223-463af91014bc.png" 
                  alt="Instagram Analytics 1"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/30ec52aa-f2da-45e5-8816-f295c9944615.png" 
                  alt="Instagram Analytics 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            {/* YouTube Results */}
            <div className="bg-card border border-card-border rounded-lg p-8 fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold text-accent mb-4 text-center">YouTube Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="/lovable-uploads/a88fd89d-69d3-4e4e-8e3d-3c1b61fec95e.png" 
                  alt="YouTube Analytics 1"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/89fdaa99-833a-4b11-a433-9c2f63403b0c.png" 
                  alt="YouTube Analytics 2"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/3aff9f2a-972f-428b-af45-3c2110b33059.png" 
                  alt="YouTube Analytics 3"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/fcfe947b-9153-4bb8-a8a2-8f9f1170cabf.png" 
                  alt="YouTube Analytics 4"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/e9428429-75ea-4251-b223-463af91014bc.png" 
                  alt="YouTube Analytics 5"
                  className="w-full h-auto rounded"
                />
                <img 
                  src="/lovable-uploads/30ec52aa-f2da-45e5-8816-f295c9944615.png" 
                  alt="YouTube Analytics 6"
                  className="w-full h-auto rounded"
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