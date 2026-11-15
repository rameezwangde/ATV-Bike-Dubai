import React, { useState } from 'react';

const ALL_PACKAGES = [
  {
    id: 'can-am-xr-2-seater',
    category: 'Can-Am Buggies',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (2 SEATER)',
    image: '/canam-2seat-clean.jpg',
    badge: '245 HP Stage 4',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    power: '245 HP Stage 4',
    price: 'AED 1,200',
    description: 'Dominate Dubai’s red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1200 AED | 2 hrs: 1800 AED.'
  },
  {
    id: 'can-am-xr-4-seater',
    category: 'Can-Am Buggies',
    title: 'CAN-AM MAVERICK XR (245 HP STAGE 4) (MAX FOR 4 SEATER)',
    image: '/canam-4seat-clean.jpg',
    badge: '4 Seater Max',
    duration: '1-2 Hours',
    seats: '4 Seaters',
    power: '245 HP Stage 4',
    price: 'AED 1,200',
    description: 'Dominate Dubai’s red dunes with the 245 HP Stage 4 Can-Am Maverick XR, 1 hr: 1200 AED | 2 hrs: 1800 AED.'
  },
  {
    id: 'can-am-x3-turbo-2-seater',
    category: 'Can-Am Buggies',
    title: 'CAN-AM MAVERICK X3 TURBO (2 SEATER)',
    image: '/canam-2seat-clean.jpg',
    badge: 'Open Power',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    power: 'Turbo Open Power',
    price: 'AED 1,000',
    description: 'High-performance Can-Am Maverick X3 Turbo engineered for high dune carving and open throttle desert runs.'
  },
  {
    id: 'can-am-x3-turbo-4-seater',
    category: 'Can-Am Buggies',
    title: 'CAN-AM MAVERICK X3 TURBO 4 SEATER',
    image: '/canam-4seat-clean.jpg',
    badge: 'Family & Friends',
    duration: '1-2 Hours',
    seats: '4 Seaters',
    power: 'Turbo Open Power',
    price: 'AED 1,000',
    description: 'Bring family or friends together for the ultimate adrenaline rush in the dunes with 4 comfortable bucket seats.'
  },
  {
    id: 'polaris-rzr-1000-cc-2-seater',
    category: 'Polaris Buggies',
    title: 'POLARIS RZR 1000 CC (145 HP) (2 SEATER)',
    image: '/polaris-2seat-clean.jpg',
    badge: '145 HP Open Power',
    duration: '1-2 Hours',
    seats: '2 Seaters',
    power: '145 HP ProStar',
    price: 'AED 500',
    description: 'Embark on an exciting desert journey with the 145 HP Polaris RZR 1000 CC, 1 hr: 500 AED | 2 hrs: 700 AED.'
  },
  {
    id: 'polaris-rzr-2-seater-early-morning',
    category: 'Polaris Buggies',
    title: 'POLARIS RZR 2 SEATER (EARLY MORNING SPECIAL)',
    image: '/polaris-4seat-clean.jpg',
    badge: 'Sunrise Special',
    duration: '1-Hour',
    seats: '2 Seaters',
    power: '1000cc Dual Cam',
    price: 'AED 500',
    description: 'Experience Dubai dunes at dawn with cooler temperatures and magical sunrise photo stops.'
  },
  {
    id: 'polaris-rzr-turbo-s-2-seater',
    category: 'Polaris Buggies',
    title: 'POLARIS RZR TURBO S (2 SEATER)',
    image: '/polaris-turbo-clean.jpg',
    badge: 'Turbo S 72-Inch',
    duration: '2-Hour',
    seats: '2 Seaters',
    power: 'Turbocharged S',
    price: 'AED 500',
    description: 'Conquer the most demanding desert ridges with top-tier turbo torque and 72-inch wide track stability.'
  },
  {
    id: 'raptor-700-beast',
    category: 'Quad Bikes',
    title: 'Yamaha Raptor 700cc Beast',
    image: '/pkg-quad-bike.jpg',
    badge: 'Sport Quad',
    duration: '30 / 60 Mins',
    seats: '1 Rider',
    power: '700cc Manual',
    price: 'AED 450',
    description: 'Pure manual racing quad with incredible acceleration for experienced riders.'
  },
  {
    id: 'desert-safari-vip',
    category: 'Full Safari Expeditions',
    title: 'VIP Sunset Desert Safari + Dune Bash',
    image: '/about-lifestyle-bg.jpg',
    badge: 'All-Inclusive',
    duration: '6 Hours (15:00 - 21:00)',
    seats: 'Groups / Private 4x4',
    power: 'Full Camp + BBQ',
    price: 'AED 1,250',
    description: 'Luxury hotel pickup, 4x4 dune bashing, quad ride, private table BBQ dinner & live belly dance show.'
  }
];

export default function PackagesModal({ isOpen, onClose, onSelectPackage }) {
  const [filter, setFilter] = useState('All');

  if (!isOpen) return null;

  const filtered = filter === 'All' 
    ? ALL_PACKAGES 
    : ALL_PACKAGES.filter(p => p.category.includes(filter) || filter === 'All');

  return (
    <div className="packages-modal-backdrop" onClick={onClose}>
      <div className="packages-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="packages-modal-header">
          <div className="packages-modal-title-group">
            <span className="modal-eyebrow">FULL ADVENTURE INVENTORY</span>
            <h2>ALL DUBAI DESERT PACKAGES</h2>
            <p>Select your preferred machine and duration. Custom private group tours available.</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close inventory">
            &times;
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="inventory-filter-tabs">
          {['All', 'Can-Am', 'Polaris', 'Quad', 'Safari'].map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'All' ? 'All Packages' : tab}
            </button>
          ))}
        </div>

        {/* Grid of All Inventory Packages */}
        <div className="inventory-cards-grid">
          {filtered.map((item) => (
            <div key={item.id} className="inventory-card">
              <div className="inventory-card-media">
                <img src={item.image} alt={item.title} />
                <span className="inventory-badge">{item.badge}</span>
              </div>
              <div className="inventory-card-body">
                <span className="inventory-cat">{item.category}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="inventory-specs-mini">
                  <span>⏱ {item.duration}</span>
                  <span>👥 {item.seats}</span>
                  <span>⚡ {item.power}</span>
                </div>
                <div className="inventory-card-footer">
                  <div className="inventory-price-box">
                    <span className="inv-lbl">From</span>
                    <span className="inv-val">{item.price}</span>
                  </div>
                  <button
                    className="inv-book-btn"
                    onClick={() => {
                      onClose();
                      onSelectPackage(item);
                    }}
                  >
                    BOOK NOW →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

