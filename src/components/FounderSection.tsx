const FounderSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-6 fade-in">
              Meet the Founder — Rohit
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="lg:col-span-1 flex justify-center fade-in">
              <div className="w-64 h-64 bg-section border-2 border-dashed border-border-light rounded-full flex items-center justify-center">
                <p className="text-foreground-secondary font-medium">Photo Coming Soon</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2 space-y-6 fade-in">
              <p className="text-lg text-foreground-secondary leading-relaxed">
                After working with dozens of agency owners and coaches, I saw a repeating problem:
              </p>
              
              <p className="text-lg text-foreground-secondary leading-relaxed">
                They knew content was key — but they were stuck. Either too busy, too burnt out, 
                or too unsure what to post. I'd been there too.
              </p>
              
              <p className="text-lg text-foreground-secondary leading-relaxed">
                So I built ClientsForge — a systemized way to create content that doesn't just 
                look good but actually fills your calendar with qualified calls.
              </p>
              
              <p className="text-lg text-foreground font-semibold">
                If you're tired of winging it with content and want to build a machine that works 
                with you, not against you — let's talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;