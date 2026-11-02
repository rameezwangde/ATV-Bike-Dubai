import React from 'react';

export default function AboutUs({ onOpenBooking, onDiscoverStory }) {
  return (
    <section className="about-section" id="about">
      {/* Background with seamless desert transition */}
      <div className="about-bg-wrapper">
        <img
          src="/about-lifestyle-bg.jpg"
          alt="ATV Dubai Guide Desert Lifestyle"
          className="about-bg-img"
        />
        <div className="about-gradient-overlay"></div>
      </div>

      <div className="about-container">
        {/* Left Side: Visual spacer / Lifestyle staging area */}
        <div className="about-visual-col">
          {/* Visual is presented via the cinematic background (blurred foreground ATV, guide, guests, buggy, and sunset) */}
        </div>

        {/* Right Side: Clean Content Area */}
        <div className="about-content-col">
          
          {/* Eyebrow */}
          <div className="about-eyebrow-wrap">
            <span className="about-eyebrow-line"></span>
            <span className="about-eyebrow-text">ABOUT ATV DUBAI GUIDE</span>
            <span className="about-eyebrow-line"></span>
          </div>

          {/* Main Heading */}
          <h2 className="about-heading">
            <span className="heading-line-1">More Than a Ride.</span>
            <span className="heading-line-2">
              <span className="heading-sub">It’s a </span>
              <span className="heading-highlight">
                Desert Experience.
                {/* Yellow dynamic brush underline */}
                <svg className="brush-underline-svg" viewBox="0 0 280 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11C65 5 185 3 276 9C195 7 90 9 12 14" stroke="#F8B700" strokeWidth="4.5" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h2>

          {/* Body Copy */}
          <p className="about-description">
            ATV Dubai Guide connects adventure seekers with unforgettable off-road
            experiences across Dubai’s iconic desert. From premium ATVs and buggies to
            expert local guidance and a strong focus on safety, we deliver more than just
            a ride — we create authentic desert experiences and lasting memories.
          </p>

          {/* Stats Row */}
          <div className="about-stats-row">
            
            {/* Stat 1: 10K+ */}
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-text-group">
                <span className="stat-num">10K+</span>
                <span className="stat-label">Riders &amp; Guests</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            {/* Stat 2: 15+ */}
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="18" r="3.5"></circle>
                  <circle cx="18" cy="18" r="3.5"></circle>
                  <path d="M6 14.5L9 8h6l3 6.5"></path>
                  <path d="M9 8V5h6v3"></path>
                  <path d="M9.5 18h5"></path>
                </svg>
              </div>
              <div className="stat-text-group">
                <span className="stat-num">15+</span>
                <span className="stat-label">Premium Rides</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            {/* Stat 3: Daily */}
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20"></path>
                  <path d="M5 20l5-9 4 5 5-9 3 13"></path>
                  <circle cx="12" cy="5" r="2.5" fill="#F8B700" stroke="#F8B700"></circle>
                </svg>
              </div>
              <div className="stat-text-group">
                <span className="stat-num">Daily</span>
                <span className="stat-label">Desert Experiences</span>
              </div>
            </div>

          </div>

          {/* CTA Button and Dotted Desert Route Pin */}
          <div className="about-actions-row">
            <button
              className="btn-discover-story"
              onClick={onDiscoverStory || onOpenBooking}
            >
              <span>DISCOVER OUR STORY</span>
              <svg className="action-arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Decorative dotted desert route line with yellow pin */}
            <div className="decorative-route-container">
              <svg className="route-curve-svg" viewBox="0 0 160 50" fill="none">
                <path
                  d="M5 38C40 38 60 12 100 24C125 32 140 20 152 14"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="2.2"
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="map-pin-badge" title="Dubai Desert Coordinates">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="#F8B700"
                    stroke="#D99B00"
                    strokeWidth="1.2"
                  />
                  <circle cx="12" cy="9" r="2.8" fill="#1C1E22" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

