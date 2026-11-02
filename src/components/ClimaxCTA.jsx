import React from 'react';

export default function ClimaxCTA({ onOpenBooking, onExplorePackages }) {
  return (
    <section className="climax-cta-section" id="book-cta">
      {/* Cinematic Dubai Desert Sunset Background with Left Can-Am Buggy & Distant Dune Rider */}
      <div className="climax-bg-wrapper">
        <img
          src="/climax-cta-clean-plate.jpg"
          alt="Dubai Desert Dunes ATV Adventure Sunset"
          className="climax-bg-img"
        />
        <div className="climax-gradient-overlay"></div>
      </div>

      <div className="climax-inner-container">
        
        {/* Top Eyebrow */}
        <div className="climax-eyebrow-wrap">
          <span className="climax-eyebrow-line"></span>
          <span className="climax-eyebrow-text">YOUR NEXT ADVENTURE AWAITS</span>
          <span className="climax-eyebrow-line"></span>
        </div>

        {/* Main Headline */}
        <h2 className="climax-headline">
          <span className="climax-headline-white">READY TO RIDE</span>
          <span className="climax-headline-brush">
            THE DUNES?
            <svg className="climax-brush-underline" viewBox="0 0 320 20" fill="none">
              <path
                d="M5 14C85 6 230 4 315 11C230 9 105 11 15 18"
                stroke="url(#brush-gradient)"
                strokeWidth="5.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="brush-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#F8B700" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        {/* Subtext */}
        <p className="climax-subtext">
          Book your ATV, buggy, or desert experience today and turn Dubai’s dunes into your next unforgettable memory.
        </p>

        {/* CTA Button Row */}
        <div className="climax-buttons-row">
          {/* Button 1: Filled bright yellow pill with black bold text */}
          <button
            className="btn-climax-primary"
            onClick={onOpenBooking}
          >
            <span>BOOK YOUR RIDE</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Button 2: Dark / black pill button with thin white border */}
          <button
            className="btn-climax-secondary"
            onClick={onExplorePackages}
          >
            <span>EXPLORE ALL PACKAGES</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Bottom Micro Highlights */}
        <div className="climax-micro-highlights">
          <span className="highlight-item">Daily tours</span>
          <span className="highlight-dot">•</span>
          <span className="highlight-item">Premium fleet</span>
          <span className="highlight-dot">•</span>
          <span className="highlight-item">Expert guides</span>
        </div>

      </div>
    </section>
  );
}

