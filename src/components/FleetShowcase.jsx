import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext.jsx';

const CATEGORIES = [
  { id: 'can-am', label: 'CAN-AM' },
  { id: 'polaris-rzr', label: 'POLARIS RZR' },
  { id: 'kawasaki', label: 'KAWASAKI' },
  { id: 'quad-bikes', label: 'QUAD BIKES' }
];

const VEHICLES = [
  {
    category: 'can-am',
    brand: 'CAN-AM',
    model: 'MAVERICK X3',
    description: 'A high-performance off-road machine built for power, control and an adrenaline-fueled desert ride.',
    specs: [
      {
        num: '200 HP',
        label: 'Turbo Engine',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        )
      },
      {
        num: '0 – 100 km/h',
        label: 'in 4.9s',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      },
      {
        num: '4WD',
        label: 'Off-Road Control',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 15l4-8h4l4 8" />
            <path d="M9 18h6" />
          </svg>
        )
      }
    ]
  },
  {
    category: 'polaris-rzr',
    brand: 'POLARIS',
    model: 'RZR PRO R',
    description: 'The pinnacle of wide-open desert dominance featuring massive suspension travel and raw naturally aspirated power.',
    specs: [
      {
        num: '225 HP',
        label: '2.0L Engine',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        )
      },
      {
        num: '29" Travel',
        label: 'Active Dynamix',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      },
      {
        num: '4-Link',
        label: 'Baja Trailing Arm',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 15l4-8h4l4 8" />
            <path d="M9 18h6" />
          </svg>
        )
      }
    ]
  },
  {
    category: 'kawasaki',
    brand: 'KAWASAKI',
    model: 'TERYX KRX 1000',
    description: 'Engineered for brutal rock trails and huge desert dunes with bulletproof torque and extreme chassis durability.',
    specs: [
      {
        num: '999 cc',
        label: 'Parallel-Twin',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        )
      },
      {
        num: 'Fox 2.5',
        label: 'Live Valve Pods',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      },
      {
        num: 'Diff-Lock',
        label: 'Selectable 4WD',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 15l4-8h4l4 8" />
            <path d="M9 18h6" />
          </svg>
        )
      }
    ]
  },
  {
    category: 'quad-bikes',
    brand: 'YAMAHA',
    model: 'RAPTOR 700R',
    description: 'The undisputed king of desert sport quads. Pure lightweight agility, quick throttle response and huge dune jumps.',
    specs: [
      {
        num: '686 cc',
        label: 'Liquid-Cooled',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        )
      },
      {
        num: '5-Speed',
        label: 'Manual + Reverse',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        )
      },
      {
        num: 'YZ-Style',
        label: 'Sport Handling',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 15l4-8h4l4 8" />
            <path d="M9 18h6" />
          </svg>
        )
      }
    ]
  }
];

export default function FleetShowcase({ onOpenBooking, onOpenVideo }) {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState(0);

  const prevSlide = () => {
    setActiveCategory((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveCategory((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
  };

  const currentVehicle = VEHICLES[activeCategory] || VEHICLES[0];

  return (
    <section className="machine-showcase" id="canam">
      {/* 1. Pure Desert & Featured Machine Backdrop (Zero Baked UI, Zero Text, Zero Tabs, Zero Arrows) */}
      <div className="machine-bg-wrapper">
        <img
          src="/fleet-pure-desert-canam.jpg"
          alt="Can-Am Maverick X3 Dubai Desert"
          className="machine-bg-img"
        />
      </div>

      <div className="machine-inner-container">
        
        {/* 2. Top Section Heading (Single instance, centered, max-width 1100px) */}
        <div className="section-heading">
          {/* Eyebrow */}
          <div className="machine-eyebrow-wrap">
            <span className="machine-eyebrow-line"></span>
            <span className="machine-eyebrow-text">{t('fleetEyebrow')}</span>
            <span className="machine-eyebrow-line"></span>
          </div>

          {/* Heading */}
          <h2 className="machine-main-heading">
            <span className="heading-white">{t('fleetTitle1')} </span>
            <span className="heading-yellow">
              {t('fleetTitle2')}
              <svg className="brush-underline-svg" viewBox="0 0 260 16" fill="none">
                <path d="M4 11C65 5 185 3 256 9C180 7 85 9 12 14" stroke="#F8B700" strokeWidth="4.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Subheading */}
          <p className="machine-subheading">
            {t('fleetSubtitle')}
          </p>
        </div>

        {/* 3. Horizontal Category Tabs Bar (Single instance, ~64px height, only CAN-AM is active yellow) */}
        <div className="machine-tabs">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              className={`machine-tab-btn ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              <span className="tab-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="6" cy="17" r="3" />
                  <circle cx="18" cy="17" r="3" />
                  <path d="M6 14l3-6h6l3 6" />
                </svg>
              </span>
              <span className="tab-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* 4. Main 55/45 Showcase Area */}
        <div className="machine-content">
          
          {/* Left 55%: Space naturally showing the grounded Can-Am buggy + sunset in the backdrop */}
          <div className="machine-visual">
            {/* The Can-Am Maverick X3 is grounded physically in the clean desert backdrop */}
          </div>

          {/* Right 45%: Vehicle Information Panel (Single instance over clean dark desert gradient) */}
          <div className="machine-info">
            {/* Vehicle Name */}
            <div className="machine-title-wrap">
              <span className="machine-brand-text">{currentVehicle.brand}</span>
              <h3 className="machine-model-text">{currentVehicle.model}</h3>
            </div>

            {/* Description (max-width 520px) */}
            <p className="machine-description">
              {currentVehicle.description}
            </p>

            {/* 3 Equal Columns Specs Row */}
            <div className="machine-specs-row">
              {currentVehicle.specs.map((spec, sIdx) => (
                <div key={sIdx} className="machine-spec-col">
                  <div className="spec-icon-wrap">
                    {spec.icon}
                  </div>
                  <div className="spec-details">
                    <span className="spec-primary-val">{spec.num}</span>
                    <span className="spec-secondary-lbl">{spec.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons Row (Side-by-side, 56-64px height) */}
            <div className="machine-cta-row">
              <button
                className="btn-book-machine"
                onClick={onOpenBooking}
              >
                <span>{t('bookYourRide')}</span>
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                className="btn-watch-machine"
                onClick={onOpenVideo}
              >
                <span className="btn-play-circle">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                </span>
                <span>{t('watchInAction')}</span>
              </button>
            </div>
          </div>

          {/* Single Left Arrow (Vertically Centered) */}
          <button
            className="machine-carousel-arrow prev-arrow"
            onClick={prevSlide}
            aria-label="Previous Vehicle"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Single Right Arrow (Vertically Centered) */}
          <button
            className="machine-carousel-arrow next-arrow"
            onClick={nextSlide}
            aria-label="Next Vehicle"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* 5. Single Pagination Row (Centered at bottom) */}
        <div className="machine-pagination-dots">
          {CATEGORIES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`machine-dot ${activeCategory === dotIdx ? 'active' : ''}`}
              onClick={() => setActiveCategory(dotIdx)}
              aria-label={`Select vehicle ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
