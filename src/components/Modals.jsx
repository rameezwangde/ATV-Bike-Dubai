import React, { useState } from 'react';

export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1"
            title="ATV Dubai Desert Adventure Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="modal-meta">
          <h3>Dubai Red Dunes Sunset Experience</h3>
          <p>Ride high-powered buggies through the Lahbab Desert dunes with private desert camp access & guide.</p>
        </div>
      </div>
    </div>
  );
}

export function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    vehicle: 'canam-x3',
    timeSlot: 'Sunset Golden Hour (16:00 - 19:00)',
    fullName: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-box booking-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏁</div>
            <h2 style={{ color: '#F8B700', marginBottom: '0.8rem', fontSize: '1.6rem', fontWeight: 900 }}>
              EXPEDITION RESERVED!
            </h2>
            <p style={{ color: '#E2E8F0', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Our VIP safari coordinator will contact you at <strong>{formData.phone}</strong> via WhatsApp shortly with your confirmation and private transfer details.
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header-accent">
              <span className="modal-tag">INSTANT RESERVATION</span>
              <h2>BOOK YOUR DUBAI ATV EXPEDITION</h2>
              <p>Best price guarantee &bull; Free hotel pickup in Dubai &bull; Premium safety gear included</p>
            </div>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Selected Vehicle</label>
                  <select
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    required
                  >
                    <option value="canam-x3">Can-Am Maverick X3 Turbo (2-Seater) - 1,200 AED</option>
                    <option value="rzr-pro">Polaris RZR Pro R 2000cc (4-Seater) - 1,800 AED</option>
                    <option value="raptor-700">Yamaha Raptor 700cc Quad - 650 AED</option>
                    <option value="kawasaki-krx">Kawasaki KRX 1000cc - 1,100 AED</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Experience Time</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    required
                  >
                    <option>Sunset Golden Hour (16:00 - 19:00)</option>
                    <option>Morning Sunrise Dune Bash (06:00 - 09:00)</option>
                    <option>Full Evening Safari + BBQ Dinner (15:00 - 21:30)</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="cta-primary-btn modal-submit">
                <span>CONFIRM VIP BOOKING &rarr;</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

