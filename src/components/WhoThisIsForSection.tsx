const WhoThisIsForSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 text-center fade-in">
            Who We Help
          </h2>
          
          <div className="max-w-5xl mx-auto fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">
                  Who This Is For
                </h3>
                <p className="text-lg text-foreground mb-2">
                  We work with agency owners, coaches, and consultants who are:
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6 text-center">
                  Who This Is Not For
                </h3>
                <p className="text-lg text-foreground mb-2">
                  This isn't for you if:
                </p>
              </div>
            </div>
              
              <div className="space-y-4 text-foreground-secondary">
                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Already generating $3,000+/month in revenue
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    You're just getting started with no revenue or untested offer
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Selling a validated offer that's already converting
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    You run a web development, recruitment, or fitness coaching business
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Struggling with execution, consistency, or content strategy
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    You're looking for quick hacks instead of systems
                  </div>
                </div>
                
                {/* Row 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Tired of relying on referrals or cold outreach
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    You're not willing to take consistent action
                  </div>
                </div>
                
                {/* Row 5 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Ready to install a predictable, AI-powered content system
                  </div>
                  <div></div>
                </div>
                
                {/* Row 6 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    Open to using automation to scale their inbound leads and booked calls
                  </div>
                  <div></div>
                </div>
              </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;