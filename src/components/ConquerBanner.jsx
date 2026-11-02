import React from 'react';

export default function ConquerBanner({ onOpenBooking, onExplorePackages }) {
  return (
    <section className="conquer-banner-section" id="conquer">
      {/* Cinematic Desert ATV Action Background */}
      <div className="conquer-banner-backdrop">
        <img
          src="/conquer-atv-banner-bg.jpg"
          alt="Dubai Desert ATV Dune Adventure"
          className="conquer-bg-img"
        />
        <div className="conquer-banner-overlay"></div>
        <div className="conquer-banner-glow"></div>
      </div>

      <div className="conquer-banner-content">
        <span className="conquer-banner-eyebrow">YOUR NEXT ADVENTURE</span>

        <h2 className="conquer-banner-title">
          <span>READY TO CONQUER</span>
          <span className="title-orange">THE DUNES?</span>
        </h2>

        <p className="conquer-banner-desc">
          Join thousands of riders who have experienced the ultimate thrill in Dubai.
          Book your dirt bike or dune buggy tour today and make desert memories that last forever.
        </p>

        {/* The Exact Reference Dual CTA Buttons */}
        <div className="conquer-cta-group">
          {/* Solid Orange Book Button with Calendar Icon */}
          <button
            className="btn-conquer-book"
            onClick={onOpenBooking}
          >
            <span className="conquer-btn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span>BOOK YOUR RIDE</span>
          </button>

          {/* Dark Transparent Outline Button with Arrow */}
          <button
            className="btn-conquer-explore"
            onClick={onExplorePackages}
          >
            <span>EXPLORE ALL PACKAGES</span>
            <svg className="conquer-explore-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

