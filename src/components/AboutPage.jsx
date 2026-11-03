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
    </div>
  );
}

