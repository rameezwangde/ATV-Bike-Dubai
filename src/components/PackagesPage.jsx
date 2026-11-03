import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext.jsx';

const ALL_PACKAGES = {
  'can-am': [
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
      image: '/canam-2seat-clean.jpg',
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
      image: '/canam-4seat-clean.jpg',
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
  ],
  'polaris': [
    {
      id: 'polaris-rzr-1-seat',
      title: 'POLARIS RZR 1000-CC — 1 SEAT',
      categoryBadge: 'POLARIS RZR',
      price: '450 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Rider Solo Buggy',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'SOLO AGILITY • PRO HELMET & GOGGLES • DUNES CONVOY',
      description:
        'Pure solo exhilaration. The lightweight single-seater Polaris RZR 1000cc offers razor-sharp agility, immediate throttle response, and unmatched maneuverability over razorback sand crests.',
      image: '/polaris-1seat-clean.jpg',
      inclusions: [
        'Desert Marshall & Lead Convoy Guide',
        'Professional Helmet, Goggles & Gloves',
        'Complimentary Sandboarding & Water',
        'Photo & Video Scenic Dune Stops'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '450 AED' },
        { label: '1 Hour Ride', price: '850 AED' },
        { label: '2 Hours Sunset VIP', price: '1,600 AED' }
      ]
    },
    {
      id: 'polaris-rzr-2-seat',
      title: 'POLARIS RZR 1000-CC — 2 SEAT',
      categoryBadge: 'POLARIS RZR',
      price: '550 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '2 Riders (Driver + Passenger)',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'DUAL BUCKET SEATS • FOX PERFORMANCE • DESERT GUIDE',
      description:
        'Share the dune adrenaline with a partner. Powered by a high-output ProStar 1000cc engine, this 2-seater buggy balances responsive cornering with plush desert suspension travel.',
      image: '/polaris-2seat-clean.jpg',
      inclusions: [
        'Safety Briefing & Lead Desert Guide',
        'Full Safety Gear for Both Riders',
        'Chilled Refreshments & Hydration',
        'High-Crest Sandboarding Experience'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '550 AED' },
        { label: '1 Hour Ride', price: '950 AED' },
        { label: '2 Hours Sunset VIP', price: '1,800 AED' }
      ]
    },
    {
      id: 'polaris-rzr-4-seat',
      title: 'POLARIS RZR 1000-CC — 4 SEAT',
      categoryBadge: 'POLARIS FAMILY',
      price: '850 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '4 Riders (Family / Friends)',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'FULL CREW CAB • 4-POINT HARNESSES • VIP DUNE SAFARI',
      description:
        'Bring the whole squad along. The 4-seat Polaris RZR 1000 features deep bucket seating for 4 passengers, heavy-duty roll cage construction, and plenty of power to conquer red sand dunes.',
      image: '/polaris-4seat-clean.jpg',
      inclusions: [
        'Dedicated Desert Lead Marshall',
        'Full Protective Gear for All 4 Riders',
        'Unlimited Chilled Drinks & Bottled Water',
        'High-Dune Sunset Viewpoints & Photos'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '850 AED' },
        { label: '1 Hour Ride', price: '1,500 AED' },
        { label: '2 Hours Sunset VIP', price: '2,800 AED' }
      ]
    },
    {
      id: 'polaris-rzr-turbo-4-seat',
      title: 'POLARIS RZR TURBO 1800CC — 4 SEAT',
      categoryBadge: 'TURBO BEAST',
      price: '1,400 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '4 Riders Extreme Spec',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'TURBOCHARGED BOOST • EXTREME TRAVEL SUSPENSION • VIP TOUR',
      description:
        'Maximum power for desert connoisseurs. Equipped with an 1800cc turbocharged powertrain and race-tuned active suspension, this beast flies over steep dunes with effortless torque.',
      image: '/polaris-turbo-clean.jpg',
      inclusions: [
        'Elite Marshall Escort & Route Selection',
        'Premium Carbon Helmets & Anti-Dust Goggles',
        'VIP Desert Lounge Refreshments',
        'Sandboarding & Action Photo Stops'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '1,400 AED' },
        { label: '1 Hour Ride', price: '2,400 AED' },
        { label: '2 Hours Sunset VIP', price: '4,200 AED' }
      ]
    },
    {
      id: 'custom-power-buggy-3800cc',
      title: 'CUSTOM POWER BUGGY 3800-CC — 2 SEATS',
      categoryBadge: 'MONSTER BUGGY',
      price: '1,600 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '2 Riders Extreme Class',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: '3800CC ENGINE • PADDLE TIRES • EXTREME ROOSTER TAILS',
      description:
        'The apex of Dubai desert thrill. A bespoke lightweight sand rail with an enormous 3800cc engine, massive paddle tires, and open tubular chassis for mind-bending dune launches.',
      image: '/custom-buggy-clean.jpg',
      inclusions: [
        'Custom High-Performance Desert Marshall',
        'Full-Face Racing Helmets & 5-Point Harnesses',
        'VIP Refreshments & Hydration',
        'Extreme Dune Cresting Stunts'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '1,600 AED' },
        { label: '1 Hour Ride', price: '2,800 AED' },
        { label: '2 Hours Sunset VIP', price: '4,900 AED' }
      ]
    }
  ],
  'kawasaki': [
    {
      id: 'kawasaki-teryx-800-4-seat',
      title: 'KAWASAKI TERYX 800 CC — 4 SEATER',
      categoryBadge: 'KAWASAKI 4-SEAT',
      price: '650 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '4 Riders (Family / Crew)',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'STADIUM 4-SEATER • FOX SUSPENSION • LEAD DESERT GUIDE',
      description:
        'Tackle Dubai’s red sand dunes in the legendary Kawasaki Teryx 800 CC 4-seater. Built with rugged strength, deep bucket seats for 4, and plush long-travel suspension for an unforgettable group ride.',
      image: '/kawasaki-4seat-clean.jpg',
      inclusions: [
        'Lead Desert Guide & Formation Convoy',
        'Helmets, Goggles & Safety Gloves for All 4',
        'Unlimited Chilled Water & Refreshments',
        'High-Crest Sandboarding & Photo Stops'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '650 AED' },
        { label: '1 Hour Ride', price: '1,200 AED' },
        { label: '2 Hours Sunset VIP', price: '2,200 AED' }
      ]
    }
  ],
  'quad': [
    {
      id: 'desert-quad-bike-50cc',
      title: 'DESERT QUAD BIKE — 50 CC',
      categoryBadge: 'KIDS & JUNIOR',
      price: '250 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Junior Rider',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'JUNIOR SAFETY GOVERNOR • ENCLOSED TRACK • FULL GEAR',
      description:
        'The ideal starting experience for young thrill-seekers. Safe, fully governed 50cc automatic quad bikes designed for younger riders under dedicated desert instructor supervision.',
      image: '/quad-50cc-clean.jpg',
      inclusions: [
        'Instructor Guidance & Dedicated Junior Circuit',
        'Kids Full-Face Helmet, Goggles & Chest Guard',
        'Chilled Hydration & Complimentary Refreshments',
        'Family Photo Opportunities'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '250 AED' },
        { label: '1 Hour Ride', price: '450 AED' },
        { label: '2 Hours Sunset VIP', price: '800 AED' }
      ]
    },
    {
      id: 'desert-quad-bike-150cc',
      title: 'DESERT QUAD BIKE — 150 CC',
      categoryBadge: 'BEGINNER / INTERMEDIATE',
      price: '300 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Rider Solo ATV',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'AUTOMATIC TRANSMISSION • LEAD MARSHALL • OPEN DUNES',
      description:
        'Smooth, responsive, and easy to handle. The 150cc quad bike is perfect for teens and adult beginners wanting to experience riding the open desert dunes with full confidence.',
      image: '/quad-150cc-clean.jpg',
      inclusions: [
        'Professional Desert Guide Escort',
        'Full Safety Helmet, Dust Goggles & Gloves',
        'Sandboarding on High Dunes',
        'Unlimited Bottled Water'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '300 AED' },
        { label: '1 Hour Ride', price: '550 AED' },
        { label: '2 Hours Sunset VIP', price: '1,000 AED' }
      ]
    },
    {
      id: 'desert-quad-bike-250cc',
      title: 'DESERT QUAD BIKE — 250 CC',
      categoryBadge: 'SPORTS ATV',
      price: '400 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Rider Sport Class',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'SPORT SUSPENSION • HIGH-CREST ROOSTER TRAILS • PRO GUIDE',
      description:
        'A fan-favorite sport ATV with explosive torque and lightweight nimbleness. Drift across high sand bowls and carve up towering red dune faces with pure manual/semi-auto control.',
      image: '/quad-250cc-clean.jpg',
      inclusions: [
        'Advanced Desert Route Escort',
        'Pro Riding Equipment & Safety Briefing',
        'Sandboarding & Scenic Sunset Stops',
        'Cold Drinks & Recovery Support'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '400 AED' },
        { label: '1 Hour Ride', price: '700 AED' },
        { label: '2 Hours Sunset VIP', price: '1,300 AED' }
      ]
    },
    {
      id: 'desert-quad-bike-400cc',
      title: 'DESERT QUAD BIKE — 400 CC',
      categoryBadge: '4X4 POWER ATV',
      price: '500 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Rider Heavy Duty',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'SELECTABLE 4X4 • HIGH TRACTION • EXTREME RED DUNES',
      description:
        'Maximum quad-biking power. Heavy-duty 400cc 4x4 engine built to conquer Dubai’s steepest dunes effortlessly, giving you unyielding grip and commanding high-crest stability.',
      image: '/quad-400cc-clean.jpg',
      inclusions: [
        'Dedicated Desert Lead Marshall',
        'Premium Protective Gear & Dust Mask',
        'Complimentary High-Dune Sandboarding',
        'VIP Hydration & Photo Sessions'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '500 AED' },
        { label: '1 Hour Ride', price: '900 AED' },
        { label: '2 Hours Sunset VIP', price: '1,600 AED' }
      ]
    },
    {
      id: 'ktm-dirt-bike-450cc',
      title: 'KTM DIRT BIKE — 450 CC',
      categoryBadge: 'PRO ENDURO',
      price: '850 AED',
      duration: '30 Mins / 1 Hour',
      capacity: '1 Expert Rider',
      transfer: '300 AED 2-Way Transport',
      inclusionPill: 'COMPETITION SPEC • WP SUSPENSION • PADDLE SAND TIRE',
      description:
        'The apex two-wheel desert weapon. Genuine 450cc KTM dirt bike equipped with sand-paddle tires and WP competition suspension for seasoned riders seeking raw motocross speed across Dubai dunes.',
      image: '/ktm-dirtbike-450-clean.jpg',
      inclusions: [
        'Expert Motocross Desert Lead Rider',
        'Full Enduro Armor, Boots, Helmet & Goggles',
        'Mechanical Support & Chilled Drinks',
        'High-Speed Dune Riding Lines'
      ],
      pricingOptions: [
        { label: '30 Mins Ride', price: '850 AED' },
        { label: '1 Hour Ride', price: '1,500 AED' },
        { label: '2 Hours Sunset VIP', price: '2,700 AED' }
      ]
    }
  ],
  'safari': [
    {
      id: 'evening-desert-safari',
      title: 'EVENING DESERT SAFARI IN DUBAI',
      categoryBadge: 'DESERT SAFARI',
      price: '99 AED',
      duration: '6 Hours Full Evening',
      capacity: 'Per Person / Family / Group',
      transfer: 'Complimentary 2-Way Hotel Pickup',
      inclusionPill: 'DUNE BASHING • BBQ DINNER BUFFET • LIVE SHOWS • CAMEL RIDE',
      description:
        'Experience the authentic magic of Arabia. Includes 4x4 red dune bashing, sunset photography, live belly dance & Tanoura shows, fire performances, camel riding, henna painting, and a lavish 5-star international BBQ buffet dinner.',
      image: '/desert-safari-evening-clean.jpg',
      inclusions: [
        '4x4 Land Cruiser High Dune Bashing (30-45 mins)',
        'Sunset Photo Stop on High Red Dunes',
        'Live Belly Dance, Tanoura Dance & Fire Show',
        'Unlimited BBQ Buffet (Veg & Non-Veg) with Soft Drinks',
        'Camel Ride, Henna Tattoos & Arabic Dress Photos',
        'Sandboarding on Golden Dunes Included'
      ],
      pricingOptions: [
        { label: 'Standard Camp', price: '99 AED' },
        { label: 'VIP Table Service', price: '160 AED' },
        { label: 'Private 4x4 Cruiser (6 Pax)', price: '550 AED' }
      ]
    }
  ]
};

const CAN_AM_PACKAGES = ALL_PACKAGES['can-am'];

export default function PackagesPage({ onOpenBooking, selectedCategory = 'all' }) {
  const { formatPrice, t } = useI18n();
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
            {(ALL_PACKAGES[filter] || ALL_PACKAGES['can-am']).map((pkg) => {
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
                      <span>{formatPrice(activeOption.price)}</span>
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
                      <span className="selector-label">{t('selectDuration')}</span>
                      <div className="selector-pills">
                        {pkg.pricingOptions.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            className={`duration-pill-btn ${(selectedDuration[pkg.id] || 0) === optIdx ? 'active' : ''}`}
                            onClick={() => setSelectedDuration({ ...selectedDuration, [pkg.id]: optIdx })}
                          >
                            {opt.label} • {formatPrice(opt.price)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button: BOOK NOW */}
                    <button
                      className="btn-innovative-book"
                      onClick={() => onOpenBooking(pkg)}
                    >
                      <span>{t('bookNow')}</span>
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

