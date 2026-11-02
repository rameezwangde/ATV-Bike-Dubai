import React, { useState } from 'react';

const CAN_AM_PACKAGES = [
  {
    id: 'can-am-2-seater',
    title: 'CAN-AM MAVERICK — 2 SEATER',
    categoryBadge: 'CAN-AM',
    price: '800 AED',
    duration: '30 Mins / 1 Hour',
    capacity: '2 Riders',
    transfer: '300 AED 2-Way Transport',
    inclusionPill: 'FULL PRO GEAR • UNLIMITED HYDRATION • LEAD GUIDE',
    description:
      'Take the wheel of a self-driven 2000cc Can-Am Maverick X3 Turbo RR. Carve through towering red dunes with extreme horsepower, low-center stability, and custom Fox racing suspension.',
    image: '/canam-2seat-dunes.jpg',
    inclusions: [
      'Professional Desert Guide & Lead Convoy',
      'Full Protective Gear (Helmets, Goggles, Gloves)',
      'Unlimited Chilled Water & Soft Drinks',
      'Safety Harness 4-Point Racing Buckle'
    ],
    pricingOptions: [
      { label: '30 Mins Ride', price: '800 AED' },
      { label: '1 Hour Ride', price: '1,400 AED' },
      { label: '2 Hours Sunset VIP', price: '2,600 AED' }
    ]
  },
  {
    id: 'can-am-4-seater',
    title: 'CAN-AM MAVERICK — 4 SEATER MAX',
    categoryBadge: 'CAN-AM VIP',
    price: '1,200 AED',
    duration: '30 Mins / 1 Hour',
    capacity: '4 Riders (Family / Group)',
    transfer: '300 AED 2-Way Transport',
    inclusionPill: 'FULL PRO GEAR • VIP DESERT LOUNGE • HIGH CREST CONVOY',
    description:
      'The ultimate shared adrenaline experience. Bring your family or crew into the heart of the desert in a long-wheelbase 4-seater Maverick MAX Turbo, offering luxury comfort and massive power.',
    image: '/canam-4seat-dunes.jpg',
    inclusions: [
      'High-Speed Dune Bashing & High-Crest Photo Stops',
      'Dedicated Desert Marshal & Recovery Team',
      'Full 4-Seater Roll Cage & Goggles for All',
      'Complimentary Sandboarding Experience'
    ],
    pricingOptions: [
      { label: '30 Mins Ride', price: '1,200 AED' },
      { label: '1 Hour Ride', price: '2,100 AED' },
      { label: '2 Hours Sunset VIP', price: '3,800 AED' }
    ]
  }
];

export default function PackagesPage({ onOpenBooking, selectedCategory = 'all' }) {
  const [filter, setFilter] = useState('can-am');
  const [selectedDuration, setSelectedDuration] = useState({
    'can-am-2-seater': 0,
    'can-am-4-seater': 0
  });

  return (
    <div className="packages-page-wrapper">
      
      {/* 1. PACKAGES HERO SECTION */}
      <section className="pkg-page-hero">
        <div className="pkg-hero-backdrop">
          <img
            src="/contact-hero-bg.jpg"
            alt="ATV Dubai Packages Fleet"
            className="pkg-hero-img"
          />
          <div className="pkg-hero-overlay"></div>
        </div>

        <div className="pkg-hero-content">
          <span className="pkg-hero-eyebrow">PREMIUM OFF-ROAD FLEET</span>
          <h1 className="pkg-hero-title">
            <span>EXPLORE OUR</span>
            <span className="title-yellow">DESERT PACKAGES</span>
          </h1>
          <p className="pkg-hero-desc">
            Choose from Dubai’s highest-spec off-road fleet. Self-drive high-performance dune buggies and quad bikes across the world’s most iconic dunes.
          </p>

          {/* Category Filter Pills */}
          <div className="pkg-category-filter-bar">
            <button
              className={`pkg-cat-btn ${filter === 'can-am' ? 'active' : ''}`}
              onClick={() => setFilter('can-am')}
            >
              CAN-AM
            </button>
            <button
              className={`pkg-cat-btn ${filter === 'polaris' ? 'active' : ''}`}
              onClick={() => setFilter('polaris')}
            >
              POLARIS RZR
            </button>
            <button
              className={`pkg-cat-btn ${filter === 'kawasaki' ? 'active' : ''}`}
              onClick={() => setFilter('kawasaki')}
            >
              KAWASAKI
            </button>
            <button
              className={`pkg-cat-btn ${filter === 'quad' ? 'active' : ''}`}
              onClick={() => setFilter('quad')}
            >
              QUAD BIKES
            </button>
            <button
              className={`pkg-cat-btn ${filter === 'safari' ? 'active' : ''}`}
              onClick={() => setFilter('safari')}
            >
              DESERT SAFARI
            </button>
          </div>
        </div>
      </section>

      {/* 2. CAN-AM DEDICATED SHOWCASE: 2 INNOVATIVE DUAL-COLUMN CARDS */}
      <section className="pkg-showcase-section">
        <div className="pkg-showcase-container">
          
          <div className="pkg-section-header">
            <span className="section-eyebrow-line"></span>
            <span className="section-eyebrow-text">
              {filter === 'can-am' ? 'CAN-AM MAVERICK SERIES' : `${filter.toUpperCase()} PACKAGES`}
            </span>
            <span className="section-eyebrow-line"></span>
          </div>

          <div className="innovative-cards-stack">
            {CAN_AM_PACKAGES.map((pkg) => {
              const activeOption = pkg.pricingOptions[selectedDuration[pkg.id] || 0];

              return (
                <div key={pkg.id} className="innovative-package-card">
                  
                  {/* Left Column: Visual Action Stage with Dynamic Badges */}
                  <div className="innovative-card-media-col">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="innovative-card-img"
                    />
                    <div className="media-gradient-overlay"></div>

                    {/* Top Left Price Badge */}
                    <div className="card-top-price-badge">
                      <span>{activeOption.price}</span>
                    </div>

                    {/* Top Right Category Pill */}
                    <div className="card-top-category-pill">
                      <span>{pkg.categoryBadge}</span>
                    </div>
                  </div>

                  {/* Right Column: High-End Specifications & Booking Stage */}
                  <div className="innovative-card-details-col">
                    
                    {/* Title */}
                    <h3 className="innovative-card-title">{pkg.title}</h3>

                    {/* Description */}
                    <p className="innovative-card-desc">{pkg.description}</p>

                    {/* Highlight Pill: FULL PRO GEAR • UNLIMITED HYDRATION */}
                    <div className="innovative-inclusion-pill">
                      <span className="key-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 2l-2 2m-1.5 1.5L12 11l-4-4-5 5 1.4 1.4a3 3 0 0 0 4.2 0L9 13m12-11l-4 4m0 0l-1.5 1.5"/>
                        </svg>
                      </span>
                      <span>{pkg.inclusionPill}</span>
                    </div>

                    {/* 3 Metric Badges: Duration, Seats, Transfer */}
                    <div className="innovative-metrics-grid">
                      <div className="metric-box">
                        <div className="metric-header">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>DURATION</span>
                        </div>
                        <span className="metric-value">{activeOption.label}</span>
                      </div>

                      <div className="metric-box">
                        <div className="metric-header">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span>CAPACITY</span>
                        </div>
                        <span className="metric-value">{pkg.capacity}</span>
                      </div>

                      <div className="metric-box">
                        <div className="metric-header">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                          </svg>
                          <span>TRANSFER</span>
                        </div>
                        <span className="metric-value">{pkg.transfer}</span>
                      </div>
                    </div>

                    {/* Ride Duration Selector Buttons */}
                    <div className="duration-selector-row">
                      <span className="selector-label">SELECT DURATION:</span>
                      <div className="selector-pills">
                        {pkg.pricingOptions.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            className={`duration-pill-btn ${(selectedDuration[pkg.id] || 0) === optIdx ? 'active' : ''}`}
                            onClick={() => setSelectedDuration({ ...selectedDuration, [pkg.id]: optIdx })}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button: BOOK NOW */}
                    <button
                      className="btn-innovative-book"
                      onClick={() => onOpenBooking(pkg)}
                    >
                      <span>BOOK NOW</span>
                      <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
