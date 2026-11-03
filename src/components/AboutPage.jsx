import React from 'react';
import { useI18n } from '../context/I18nContext.jsx';

export default function AboutPage({ onOpenBooking }) {
  const { t } = useI18n();

  return (
    <div className="about-page-wrapper">
      {/* 
        ==========================================================================
        CINEMATIC ABOUT US HERO SECTION
        Aggressive, motorsport-inspired, storytelling-focused
        No navbar, no header, no buttons, no cards, no generic corporate UI
        ==========================================================================
      */}
      <section className="about-hero-section" id="about-hero">
        {/* Full-width cinematic Dubai desert sunset plate */}
        <div className="about-hero-backdrop-wrapper">
          <img
            src="/about-hero-backdrop.jpg"
            alt="ATV Dubai Guide - Can-Am Dune Buggy Desert Sunset"
            className="about-hero-backdrop-img"
          />
          {/* Subtle soft transparent gradient shading to guarantee 100% typography contrast */}
          <div className="about-hero-soft-overlay" />
        </div>

        {/* Hero Content Grid (Left 42-45% Visual Spacer, Right 55-58% Storytelling Typography) */}
        <div className="about-hero-content-container">
          {/* Left Visual Area: Lets the huge Can-Am buggy with helmeted riders command the left */}
          <div className="about-hero-left-spacer" aria-hidden="true" />

          {/* Right Content Area: Upper-middle storytelling block */}
          <div className="about-hero-text-block">
            {/* Top Eyebrow: ABOUT US with thin yellow accent lines on both sides */}
            <div className="about-hero-eyebrow-wrap">
              <span className="about-eyebrow-accent-line" />
              <span className="about-hero-eyebrow-label">ABOUT US</span>
              <span className="about-eyebrow-accent-line" />
            </div>

            {/* Main Heading: Aggressive Motorsport & Desert Adventure Typography */}
            <h1 className="about-hero-main-title">
              <span className="about-hero-title-white">FUELING DUBAI’S</span>
              <span className="about-hero-title-brush">
                DESERT ADVENTURES
                {/* Yellow Dynamic Brush Underline SVG */}
                <svg
                  className="about-hero-brush-stroke-svg"
                  viewBox="0 0 540 24"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 6 15 C 95 6, 260 4, 532 11 C 380 9, 160 14, 18 20"
                    stroke="#F8B700"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Body Copy: Warm off-white, storytelling focus, max-width 700-760px */}
            <p className="about-hero-body-copy">
              We are a passionate team of desert adventure experts, bringing you thrilling and safe ATV, buggy, and quad biking experiences across Dubai’s iconic dunes.
            </p>
          </div>
        </div>
      </section>

      {/* 
        ==========================================================================
        CHAPTER 2: EXPEDITION JOURNAL & DESERT ROUTE STORY
        Editorial narrative layout with desert route line
        Presents: Our Story, Our History, Mission, Vision
        ==========================================================================
      */}
      <section className="about-journal-section" id="brand-story">
        {/* Subtle Desert Topographic Background Contours & Tire Texture */}
        <div className="about-journal-bg-pattern" aria-hidden="true">
          <svg className="dune-contours-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
            <path d="M-100 240 C320 180, 780 340, 1540 210" stroke="rgba(195, 160, 110, 0.16)" strokeWidth="1.6" />
            <path d="M-100 480 C260 520, 840 410, 1540 560" stroke="rgba(195, 160, 110, 0.13)" strokeWidth="1.6" />
            <path d="M-100 720 C420 640, 920 780, 1540 680" stroke="rgba(195, 160, 110, 0.1)" strokeWidth="1.4" />
          </svg>
          <div className="tire-tread-watermark" />
        </div>

        <div className="about-journal-container">
          {/* Top Story & History Editorial Row with connecting expedition path */}
          <div className="journal-editorial-row">
            
            {/* LEFT SIDE: Brand Story */}
            <div className="journal-story-col">
              <div className="journal-eyebrow-wrap">
                <span className="journal-eyebrow-dot" />
                <span className="journal-eyebrow-text">OUR STORY</span>
              </div>

              <h2 className="journal-main-heading">
                Built for the Desert.<br />
                <span className="heading-adventure-brush">
                  Driven by Adventure.
                  <svg className="journal-brush-mini-svg" viewBox="0 0 320 16" fill="none" preserveAspectRatio="none">
                    <path d="M4 10C75 4 195 3 316 8C230 6 110 8 12 13" stroke="#F8B700" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>

              <p className="journal-story-copy">
                ATV Dubai Guide was created for riders, explorers and thrill-seekers looking for more than a standard desert tour. With expert guidance, carefully selected machines and a strong focus on memorable experiences, we help visitors experience Dubai’s dunes in a way that feels exciting, personal and authentic.
              </p>

              <div className="journal-location-badge">
                <svg className="pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="location-name">Dubai, UAE</span>
                <span className="location-coords">25.2048° N, 55.2708° E</span>
              </div>
            </div>

            {/* ROUTE LINE (Expedition Trail Connecting Left to Right) */}
            <div className="journal-route-connector" aria-hidden="true">
              <svg className="expedition-path-svg" viewBox="0 0 260 220" fill="none">
                <path
                  d="M 10 30 C 90 20, 70 190, 170 170 C 210 160, 235 120, 255 110"
                  stroke="#F8B700"
                  strokeWidth="2"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="30" r="4.5" fill="#F8B700" />
                <circle cx="170" cy="170" r="3" fill="#D99B00" />
                <circle cx="254" cy="110" r="5" fill="#F8B700" stroke="#141618" strokeWidth="1.5" />
              </svg>
            </div>

            {/* RIGHT SIDE: History (Slightly offset editorial block) */}
            <div className="journal-history-col">
              <div className="history-editorial-card">
                <div className="history-header-wrap">
                  <span className="history-eyebrow">OUR HISTORY</span>
                  <span className="history-year-tag">THE JOURNEY</span>
                </div>

                <p className="journal-history-copy">
                  From helping first-time riders discover the desert to guiding returning adventure seekers, ATV Dubai Guide has grown around one simple idea — make every desert experience easy, exciting and worth remembering.
                </p>

                <div className="history-milestone-marker">
                  <span className="marker-dash" />
                  <span className="marker-caption">Continuous Desert Passion &amp; Safety</span>
                </div>
              </div>
            </div>

          </div>

          {/* S-Curve Middle Journey Divider */}
          <div className="journal-mid-route-band" aria-hidden="true">
            <svg className="mid-route-svg" viewBox="0 0 1100 48" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 24 C 280 44, 520 4, 820 38 L 1100 24"
                stroke="rgba(248, 183, 0, 0.45)"
                strokeWidth="1.8"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
              <circle cx="520" cy="18" r="4" fill="#F8B700" />
            </svg>
          </div>

          {/* BOTTOM AREA: Mission & Vision (Two wide editorial narrative panels separated by route marker) */}
          <div className="journal-mission-vision-row">
            
            {/* MISSION */}
            <div className="mv-panel mv-panel-mission">
              <div className="mv-tag-wrap">
                <span className="mv-num">01</span>
                <span className="mv-label">MISSION</span>
              </div>
              <p className="mv-statement">
                Create memorable, well-guided desert experiences that combine adventure, reliable service and personalized support.
              </p>
            </div>

            {/* Central Route Separator Pillar */}
            <div className="mv-separator-pillar" aria-hidden="true">
              <div className="pillar-line" />
              <div className="pillar-waypoint">
                <svg viewBox="0 0 24 24" fill="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#F8B700" />
                </svg>
              </div>
              <div className="pillar-line" />
            </div>

            {/* VISION */}
            <div className="mv-panel mv-panel-vision">
              <div className="mv-tag-wrap">
                <span className="mv-num">02</span>
                <span className="mv-label">VISION</span>
              </div>
              <p className="mv-statement">
                To become one of Dubai’s most trusted names in off-road adventure experiences, known for quality, safety and unforgettable rides.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ==========================================================================
        CHAPTER 3: WHY RIDE WITH US
        Cinematic Lifestyle & Asymmetrical Editorial Reasons
        Warm sand base, sculpted dune image crop, 2x2 minimal outline grid
        ==========================================================================
      */}
      <section className="why-ride-section" id="why-choose-us">
        {/* Faint Desert Sand Contour Overlay */}
        <div className="why-ride-bg-contours" aria-hidden="true">
          <svg className="why-contours-svg" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
            <path d="M-80 320 Q360 480 820 280 T1520 410" stroke="rgba(195, 160, 110, 0.15)" strokeWidth="1.5" />
            <path d="M-80 580 Q480 380 980 620 T1520 540" stroke="rgba(195, 160, 110, 0.12)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="why-ride-container">
          <div className="why-ride-split-grid">
            
            {/* LEFT SIDE: Sculpted Dune Crop of Real Guided Desert Lifestyle */}
            <div className="why-ride-visual-col">
              <div className="dune-sculpted-frame">
                <img
                  src="/why-ride-lifestyle.jpg"
                  alt="ATV Dubai Guide - Riders Traversing Desert Dunes at Sunset"
                  className="dune-lifestyle-img"
                />
                {/* Natural warm ambient desert glow */}
                <div className="dune-ambient-glow" />

                {/* Subtle desert route trail accent travelling from image toward points */}
                <svg className="why-route-trace-svg" viewBox="0 0 160 120" fill="none" aria-hidden="true">
                  <path
                    d="M 10 95 C 60 90, 80 40, 150 25"
                    stroke="#F8B700"
                    strokeWidth="2.2"
                    strokeDasharray="4 6"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="95" r="4" fill="#F8B700" />
                  <circle cx="150" cy="25" r="5" fill="#F8B700" stroke="#1A1C1F" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* RIGHT SIDE: Heading, Brand Copy, and 2x2 Editorial Grid */}
            <div className="why-ride-content-col">
              
              {/* Eyebrow */}
              <div className="why-eyebrow-wrap">
                <span className="why-eyebrow-accent" />
                <span className="why-eyebrow-text">WHY CHOOSE ATV DUBAI GUIDE</span>
              </div>

              {/* Main Heading */}
              <h2 className="why-main-heading">
                Built Around the Ride.<br />
                <span className="heading-experience-brush">
                  Focused on the Experience.
                  <svg className="why-brush-underline-svg" viewBox="0 0 380 16" fill="none" preserveAspectRatio="none">
                    <path d="M4 11C85 5 220 3 376 9C275 7 130 9 12 14" stroke="#F8B700" strokeWidth="4.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>

              {/* Brand Copy */}
              <div className="why-brand-copy">
                <p>
                  We’re a team of desert adventure enthusiasts who know what makes a ride memorable — the right machine, the right terrain and the right people guiding the experience.
                </p>
                <p>
                  From first-time riders to experienced thrill-seekers, we focus on making every journey exciting, straightforward and enjoyable from start to finish.
                </p>
              </div>

              {/* 2 x 2 Editorial Grid: 4 Clear Reasons to Book */}
              <div className="why-reasons-grid">
                
                {/* 1. EXPERT LOCAL GUIDES */}
                <div className="reason-item">
                  <div className="reason-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                    </svg>
                  </div>
                  <div className="reason-text-group">
                    <h3 className="reason-title">EXPERT LOCAL GUIDES</h3>
                    <p className="reason-desc">
                      Experienced guides who know the terrain and help riders feel confident throughout the experience.
                    </p>
                  </div>
                </div>

                {/* 2. PREMIUM OFF-ROAD FLEET */}
                <div className="reason-item">
                  <div className="reason-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="7" cy="17" r="3.2" />
                      <circle cx="17" cy="17" r="3.2" />
                      <path d="M5 14l3.5-7h7l3.5 7" />
                      <path d="M8.5 7v-2h7v2" />
                      <line x1="10.2" y1="17" x2="13.8" y2="17" />
                    </svg>
                  </div>
                  <div className="reason-text-group">
                    <h3 className="reason-title">PREMIUM OFF-ROAD FLEET</h3>
                    <p className="reason-desc">
                      A carefully selected range of ATVs, buggies and quad bikes for different riding styles.
                    </p>
                  </div>
                </div>

                {/* 3. EXPERIENCES FOR EVERY RIDER */}
                <div className="reason-item">
                  <div className="reason-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="reason-text-group">
                    <h3 className="reason-title">EXPERIENCES FOR EVERY RIDER</h3>
                    <p className="reason-desc">
                      Options suitable for beginners, groups and adrenaline-focused riders.
                    </p>
                  </div>
                </div>

                {/* 4. EASY BOOKING & SUPPORT */}
                <div className="reason-item">
                  <div className="reason-icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="reason-text-group">
                    <h3 className="reason-title">EASY BOOKING &amp; SUPPORT</h3>
                    <p className="reason-desc">
                      Simple booking, clear information and support before and during your adventure.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Micro Highlight Statement */}
          <div className="why-micro-statement-wrap">
            <div className="micro-statement-line" />
            <p className="why-micro-statement">
              <span>More than transportation.</span>
              <span className="statement-dot">•</span>
              <span>More than a tour.</span>
              <span className="statement-dot">•</span>
              <span className="statement-highlight">A real desert experience.</span>
            </p>
            <div className="micro-statement-line" />
          </div>

        </div>
      </section>
    </div>
  );
}

