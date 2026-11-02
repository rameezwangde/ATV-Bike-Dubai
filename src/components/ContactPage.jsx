import React, { useState } from 'react';

export default function ContactPage({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: 'Can-Am Maverick X3',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        experience: 'Can-Am Maverick X3',
        message: ''
      });
    }, 4000);
  };

  const whatsappUrl = "https://wa.me/971504799258?text=Hello%20ATV%20Dubai%20Guide%2C%20I%20would%20like%20to%20get%20in%20touch%20regarding%20a%20desert%20tour!";

  return (
    <div className="contact-page-wrapper">
      
      {/* 1. CONTACT HERO SECTION */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg-wrap">
          <img
            src="/contact-hero-bg.jpg"
            alt="ATV Dubai Desert Tracks"
            className="contact-hero-img"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="contact-hero-content">
          <span className="contact-hero-eyebrow">GET IN TOUCH</span>
          <h1 className="contact-hero-title">
            <span>CONTACT</span>
            <span className="title-yellow">ATV DUBAI GUIDE</span>
          </h1>
          <p className="contact-hero-desc">
            We are here to help you plan the ultimate off-road adventure.
            Reach our desert operations team directly via phone, WhatsApp, or visit us in Al Madam.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION & INTERACTIVE MAP SECTION */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          
          {/* Left Column: Contact Information */}
          <div className="contact-info-col">
            <span className="contact-section-eyebrow">CONNECT WITH US</span>
            
            <h2 className="contact-section-heading">
              <span>CONTACT</span>
              <span className="heading-accent">INFORMATION</span>
            </h2>

            {/* Address */}
            <div className="contact-info-group">
              <h4 className="info-group-title">ADDRESS</h4>
              <p className="info-text">
                XP83+8CW Al Madam<br />
                Dubai-Hatta Rd - Sharjah<br />
                United Arab Emirates
              </p>
            </div>

            {/* Phone & WhatsApp */}
            <div className="contact-info-group">
              <h4 className="info-group-title">PHONE / WHATSAPP</h4>
              <div className="phone-whatsapp-row">
                <a href="tel:+971504799258" className="info-link phone-num">
                  +971 50 479 9258
                </a>
                <span className="info-divider">|</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-inline-link"
                >
                  WhatsApp Chat ↗
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-group">
              <h4 className="info-group-title">EMAIL</h4>
              <a href="mailto:info@atvdubaiguide.com" className="info-link email-link">
                info@atvdubaiguide.com
              </a>
            </div>

            {/* Operating Hours */}
            <div className="contact-info-group">
              <h4 className="info-group-title">OPERATING HOURS</h4>
              <p className="info-text">
                Monday – Sunday<br />
                <span className="hours-highlight">24/7 Operations & Tours (6:00 AM – 8:00 PM Ride Slots)</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="contact-info-group">
              <h4 className="info-group-title">SOCIAL MEDIA</h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <svg className="insta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow us on Instagram</span>
              </a>
            </div>

            {/* Direct WhatsApp CTA Button matching Reference */}
            <div className="contact-cta-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chat-whatsapp"
              >
                <span>CHAT ON WHATSAPP</span>
                <svg className="wa-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed & Direct Pin */}
          <div className="contact-map-col">
            <div className="map-frame-wrapper">
              
              {/* Google Maps Location Info Card floating over map */}
              <div className="map-badge-card">
                <div className="badge-header">
                  <span className="badge-title">ATV Dubai Guide Desert Base</span>
                  <span className="badge-sub">XP83+8CW Al Madam - Dubai-Hatta Rd</span>
                </div>
                <div className="badge-rating">
                  <span className="stars">★ 5.0</span>
                  <span className="reviews-count">(740+ verified desert reviews)</span>
                </div>
                <div className="badge-actions">
                  <a
                    href="https://maps.google.com/?q=XP83%2B8CW+Al+Madam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-open-maps"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="maps-icon">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Open in Maps</span>
                  </a>
                  <a
                    href="https://maps.google.com/?daddr=XP83%2B8CW+Al+Madam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-directions-maps"
                    title="Get Directions"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map iframe centered exactly on Al Madam, Dubai-Hatta Rd */}
              <iframe
                title="ATV Dubai Guide Location - Al Madam, Dubai-Hatta Rd"
                src="https://maps.google.com/maps?q=XP83%2B8CW+Al+Madam,+Sharjah,+United+Arab+Emirates&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google-map-iframe"
              ></iframe>
            </div>

            {/* Quick Inquiry Form */}
            <div className="contact-form-container">
              <h3 className="form-title">Send Us a Quick Message</h3>
              <p className="form-sub">Our desert marshals respond within 15 minutes.</p>

              {isSubmitted ? (
                <div className="form-success-banner">
                  <span className="success-icon">✓</span>
                  <span>Thank you! Your message has been sent. We will contact you shortly!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quick-inquiry-form">
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="form-select"
                    >
                      <option value="Can-Am Maverick X3">Can-Am Maverick X3 (2 & 4 Seater)</option>
                      <option value="Polaris RZR 1000">Polaris RZR 1000</option>
                      <option value="Desert Quad Bike 400 CC">Desert Quad Bike 400 CC</option>
                      <option value="VIP Sunset Desert Safari">VIP Sunset Desert Safari</option>
                      <option value="Custom Group Expedition">Custom Group Expedition</option>
                    </select>
                  </div>

                  <textarea
                    rows="3"
                    placeholder="Tell us your preferred date, time, or group size..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>

                  <button type="submit" className="btn-form-submit">
                    <span>SEND INQUIRY</span>
                    <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

