import React, { useState } from 'react';

const ALL_PACKAGES = [
  {
    id: 'canam-x3-turbo',
    category: 'Can-Am Buggies',
    title: 'Can-Am Maverick X3 Turbo RR (2-Seater)',
    image: '/pkg-canam-x3.jpg',
    badge: 'Most Popular',
    duration: '30 / 60 / 120 Mins',
    seats: '2 Passengers',
    power: '200 HP Turbo',
    price: 'AED 800',
    description: 'The ultimate high-performance dune shredder. Includes guide, helmets, goggles, and desert fuel.'
  },
  {
    id: 'polaris-rzr-4seat',
    category: 'Polaris Buggies',
    title: 'Polaris RZR 1000 Family (4-Seater)',
    image: '/pkg-polaris-rzr.jpg',
    badge: 'Family Pick',
    duration: '60 / 120 Mins',
    seats: '4 Passengers',
    power: '1000cc Dual Cam',
    price: 'AED 950',
    description: 'Spacious four-seat buggy engineered for family thrill rides across Red Dunes.'
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

