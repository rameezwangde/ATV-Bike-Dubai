import React, { useState } from 'react';

export default function PolicyModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync state if initialTab changes on open
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="policy-modal-backdrop" onClick={onClose}>
      <div className="policy-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Header */}
        <div className="policy-modal-header">
          <div className="policy-header-brand">
            <span className="policy-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </span>
            <div className="policy-header-title">
              <h3>LEGAL & COMPLIANCE</h3>
              <p>ATV Dubai Guide Off-Road Adventures</p>
            </div>
          </div>
          <button className="policy-modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        {/* Policy Tab Navigation */}
        <div className="policy-tabs-nav">
          <button
            className={`policy-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms & Conditions
          </button>
          <button
            className={`policy-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button
            className={`policy-tab-btn ${activeTab === 'safety' ? 'active' : ''}`}
            onClick={() => setActiveTab('safety')}
          >
            Safety & Waiver Rules
          </button>
          <button
            className={`policy-tab-btn ${activeTab === 'refund' ? 'active' : ''}`}
            onClick={() => setActiveTab('refund')}
          >
            Cancellation & Refunds
          </button>
        </div>

        {/* Policy Scrollable Content Area */}
        <div className="policy-modal-content">
          {activeTab === 'terms' && (
            <div className="policy-article">
              <h2>Terms & Conditions</h2>
              <span className="policy-updated">Last Updated: November 2026</span>

              <section>
                <h3>1. Age & Licensing Requirements</h3>
                <p>
                  Drivers for Quad Bikes and Dune Buggies (Can-Am, Polaris RZR, Yamaha) must be at least 16 years of age. A valid driver’s license from your home country or an International Driving Permit is recommended for high-performance buggies. Passengers must be at least 6 years old and accompanied by an adult.
                </p>
              </section>

              <section>
                <h3>2. Booking Confirmation & Payment</h3>
                <p>
                  All bookings made online or via WhatsApp require confirmation from our reservation desk. Payments can be completed online via secure payment links, credit/debit card, or in cash (AED, USD, EUR) at our desert welcome center prior to ride departure.
                </p>
              </section>

              <section>
                <h3>3. Guided Convoy & Desert Marshalling</h3>
                <p>
                  All off-road expeditions are escorted by licensed Dubai Desert Marshalls and lead guides. Riders must strictly follow the guide’s tracks and instructions. Reckless driving, deviating from designated safety corridors, or intentional vehicle ramming will lead to immediate ride termination without refund.
                </p>
              </section>

              <section>
                <h3>4. Vehicle Damage & Security Deposit</h3>
                <p>
                  Vehicles are provided in pristine mechanical condition with full roll-cages, helmets, and safety harnesses. While mechanical maintenance is covered, intentional misuse or reckless rollovers violating marshal orders may result in repair assessment fees.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="policy-article">
              <h2>Privacy Policy</h2>
              <span className="policy-updated">Last Updated: November 2026</span>

              <section>
                <h3>1. Information We Collect</h3>
                <p>
                  We collect personal information necessary to organize and secure your desert experience, including your full name, contact number, email address, nationality, hotel/pickup location, and emergency contact details.
                </p>
              </section>

              <section>
                <h3>2. How We Use Your Data</h3>
                <p>
                  Your information is exclusively used to process reservations, coordinate desert transfer logistics, deliver digital booking vouchers, and communicate vital safety updates. We do not sell or lease your personal information to third-party advertisers.
                </p>
              </section>

              <section>
                <h3>3. Payment & Data Security</h3>
                <p>
                  Card transactions and digital payments are processed through PCI-DSS certified gateway partners using 256-bit SSL encryption. We do not store sensitive credit card numbers or CVV codes on our servers.
                </p>
              </section>

              <section>
                <h3>4. Photography & Media</h3>
                <p>
                  During group tours, our team may capture cinematic photos or drone footage. If you prefer not to appear in promotional media, simply inform your tour coordinator or guide upon arrival.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="policy-article">
              <h2>Safety Guidelines & Liability Waiver</h2>
              <span className="policy-updated">Dubai Off-Road Safety Standards</span>

              <section>
                <h3>1. Compulsory Protective Gear</h3>
                <p>
                  Helmets, shatter-resistant goggles, and 4-point safety harnesses (on Can-Am & Polaris buggies) are mandatory at all times during the ride. Closed-toe footwear is strictly required.
                </p>
              </section>

              <section>
                <h3>2. Health & Medical Clearances</h3>
                <p>
                  Off-road dune riding involves high adrenaline, sharp slopes, and dynamic sand transitions. This activity is not suitable for pregnant women or individuals with severe back, neck, or cardiac conditions.
                </p>
              </section>

              <section>
                <h3>3. Zero Tolerance for Alcohol & Substances</h3>
                <p>
                  In accordance with UAE federal laws, operating off-road vehicles under the influence of alcohol or drugs is strictly prohibited. Marshals reserve the right to deny participation to anyone exhibiting signs of intoxication.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="policy-article">
              <h2>Cancellation & Refund Policy</h2>
              <span className="policy-updated">Clear, Fair & Transparent</span>

              <section>
                <h3>1. Free Cancellation Window</h3>
                <p>
                  Cancellations requested at least <strong>24 hours prior</strong> to the scheduled tour departure receive a 100% full refund with zero cancellation charges.
                </p>
              </section>

              <section>
                <h3>2. Late Cancellations & No-Shows</h3>
                <p>
                  Cancellations made between 12 to 24 hours prior to departure are subject to a 50% fee. Cancellations made under 12 hours or no-shows are non-refundable due to reserved vehicles and guides.
                </p>
              </section>

              <section>
                <h3>3. Weather & Safety Cancellations</h3>
                <p>
                  In the rare event of extreme sandstorms or severe meteorological warnings issued by the UAE National Center of Meteorology, tours may be rescheduled at your convenience or 100% refunded immediately.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="policy-modal-bottom">
          <span className="policy-help-note">
            Have questions about our policies? Contact our 24/7 team at <a href="mailto:info@atvdubaiguide.com">info@atvdubaiguide.com</a>
          </span>
          <button className="policy-btn-understand" onClick={onClose}>
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}

