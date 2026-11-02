import React from 'react';

const FEATURED_PACKAGES = [
  {
    id: 'can-am-x3',
    badge: 'Most Booked',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    vehicle: 'Can-Am Maverick X3',
    description: 'High-performance dune buggy for an extreme desert ride.',
    image: '/pkg-canam-x3.jpg',
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        text: '2 Seats'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
        text: 'From 30 Mins'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        text: 'Daily'
      }
    ],
    pricePrefix: 'Starting from',
    price: 'AED 800'
  },
  {
    id: 'polaris-rzr-1000',
    badge: 'Adventure Pick',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    vehicle: 'Polaris RZR 1000',
    description: 'Power, stability and pure off-road excitement in the dunes.',
    image: '/pkg-polaris-rzr.jpg',
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        text: '4 Seats'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
        text: 'From 30 Mins'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        text: 'Daily'
      }
    ],
    pricePrefix: 'Starting from',
    price: 'AED 950'
  },
  {
    id: 'quad-bike-400',
    badge: 'Group Friendly',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M17 11a3 3 0 1 0-2.82-4" />
        <path d="M2 21v-2a5 5 0 0 1 10 0v2" />
        <path d="M15 21v-2a4 4 0 0 0-3-3.85" />
      </svg>
    ),
    vehicle: 'Desert Quad Bike 400 CC',
    description: 'A fun and thrilling ride, perfect for beginners and adventure lovers.',
    image: '/pkg-quad-bike.jpg',
    details: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        text: '1 Seat'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
        text: 'From 30 Mins'
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        text: 'Daily'
      }
    ],
    pricePrefix: 'Starting from',
    price: 'AED 450'
  }
];

export default function PopularPackages({ onOpenBooking, onExploreAll }) {
  return (
    <section className="packages-section" id="packages">
      {/* Background: Golden Hour Dubai Desert Sunset with Tire Tracks */}
      <div className="packages-bg-wrapper">
        <img
          src="/packages-desert-backdrop.jpg"
          alt="Dubai Desert Packages Backdrop"
          className="packages-bg-img"
        />
        <div className="packages-gradient-overlay"></div>
      </div>

      <div className="packages-inner-container">
        
        {/* Section Header */}
        <div className="packages-header">
          {/* Eyebrow */}
          <div className="packages-eyebrow-wrap">
            <span className="packages-eyebrow-line"></span>
            <span className="packages-eyebrow-text">OUR PACKAGES</span>
            <span className="packages-eyebrow-line"></span>
          </div>

          {/* Main Heading */}
          <h2 className="packages-heading">
            <span className="packages-heading-white">Popular Desert </span>
            <span className="packages-heading-yellow">
              Packages
              <svg className="brush-underline-svg" viewBox="0 0 240 16" fill="none">
                <path d="M4 11C60 5 170 3 236 9C170 7 75 9 12 14" stroke="#F8B700" strokeWidth="4.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Subheading */}
          <p className="packages-subheading">
            Handpicked adventure packages for every kind of rider — from solo thrills to group adventures.
          </p>
        </div>

        {/* 3 Featured Cards in One Horizontal Row */}
        <div className="packages-cards-row">
          {FEATURED_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="package-card">
              
              {/* Card Image Area with Flying Sand Action */}
              <div className="package-card-image-wrap">
                <img
                  src={pkg.image}
                  alt={pkg.vehicle}
                  className="package-card-img"
                />
                
                {/* Yellow Badge (Top Left) */}
                <div className="package-badge">
                  <span className="badge-icon">{pkg.badgeIcon}</span>
                  <span className="badge-text">{pkg.badge}</span>
                </div>
              </div>

              {/* Card Content Area (White/Light Background) */}
              <div className="package-card-content">
                
                {/* Title & Description */}
                <h3 className="package-card-title">{pkg.vehicle}</h3>
                <p className="package-card-desc">{pkg.description}</p>

                {/* Compact Details Row with Minimal Line Icons */}
                <div className="package-details-row">
                  {pkg.details.map((item, dIdx) => (
                    <div key={dIdx} className="package-detail-item">
                      <span className="detail-icon">{item.icon}</span>
                      <span className="detail-text">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Price Display */}
                <div className="package-price-wrap">
                  <span className="price-prefix">{pkg.pricePrefix}</span>
                  <span className="price-val">{pkg.price}</span>
                </div>

                {/* Book Now Button */}
                <button
                  className="btn-book-package"
                  onClick={onOpenBooking}
                >
                  <span>BOOK NOW</span>
                  <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Actions */}
        <div className="packages-bottom-action">
          <button
            className="btn-explore-all"
            onClick={onExploreAll}
          >
            <span>EXPLORE ALL PACKAGES</span>
            <svg className="cta-arrow-yellow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className="btn-custom-vip-tour"
            onClick={onOpenBooking}
          >
            <span className="vip-star-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
            <span>BOOK CUSTOM / VIP TOUR</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

