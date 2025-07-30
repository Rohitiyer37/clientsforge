const WhoThisIsForSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-dm-serif text-foreground mb-16 text-center fade-in">
            ⚡ Who This Is For
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Who This Is For - Left Column */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-accent mb-6">
                ⚡ Who This Is For
              </h3>
              <p className="text-lg text-foreground mb-6">
                We work with agency owners, coaches, and consultants who are:
              </p>
              
              <ul className="space-y-3 text-foreground-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Already generating $3,000+/month in revenue
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Selling a validated offer that's already converting
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Struggling with execution, consistency, or content strategy
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Tired of relying on referrals or cold outreach
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Ready to install a predictable, AI-powered content system
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  Open to using automation to scale their inbound leads and booked calls
                </li>
              </ul>
            </div>
            
            {/* Who This Is Not For - Right Column */}
            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-accent mb-6">
                🚫 Who This Is Not For
              </h3>
              <p className="text-lg text-foreground mb-6">
                This isn't for you if:
              </p>
              
              <ul className="space-y-3 text-foreground-secondary">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  You're just getting started with no revenue or untested offer
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  You run a web development, recruitment, or fitness coaching business
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  You're looking for quick hacks instead of systems
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">❌</span>
                  You're not willing to take consistent action
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;