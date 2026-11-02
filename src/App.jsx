import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import AboutUs from './components/AboutUs.jsx';
import FleetShowcase from './components/FleetShowcase.jsx';
import PopularPackages from './components/PopularPackages.jsx';
import PackagesModal from './components/PackagesModal.jsx';
import { VideoModal, BookingModal } from './components/Modals.jsx';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPackagesModalOpen, setIsPackagesModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [is4WD, setIs4WD] = useState(false);

  // Subtle Mouse Parallax on Desktop
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth <= 992) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth - 0.5) * 6;
      const yPercent = (clientY / innerHeight - 0.5) * 4;
      setParallax({ x: xPercent * 0.3, y: yPercent * 0.3 });
    };

    const handleMouseLeave = () => {
      setParallax({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="site-wrapper">
      {/* SECTION 1: HERO - SITTING INSIDE THE ATV COCKPIT */}
      <section className="hero-container" id="hero">
        <div className="cockpit-backdrop">
          <img
            src="/hero-cockpit-master.jpg"
            alt="ATV Dubai Guide Desert Cockpit Experience"
            className="cockpit-img"
            style={{
              transform: `scale(1.008) translate(${parallax.x}px, ${parallax.y}px)`
            }}
          />
        </div>

        {/* Top Header Navigation Overlay */}
        <Header
          onOpenBooking={() => setIsBookingModalOpen(true)}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Interactive CTA Hotspots */}
        <div className="hero-cta-hotspots-container">
          <button
            className="btn-book-ride-hotspot"
            onClick={() => setIsBookingModalOpen(true)}
            title="Book Your Ride"
            aria-label="Book Your Ride"
          >
            <span className="hotspot-glow"></span>
          </button>

          <button
            className="btn-watch-tour-hotspot"
            onClick={() => setIsVideoModalOpen(true)}
            title="Watch Tour"
            aria-label="Watch Tour"
          >
            <span className="hotspot-glow"></span>
          </button>
        </div>

        {/* Dashboard Hotspot & 4WD Toggle */}
        <Dashboard is4WD={is4WD} setIs4WD={setIs4WD} />
      </section>

      {/* SECTION 2: ABOUT US - STEPPING OUTSIDE BESIDE THE ATV */}
      <AboutUs
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onDiscoverStory={() => setIsBookingModalOpen(true)}
      />

      {/* SECTION 3: CHOOSE YOUR MACHINE - CAMPAIGN SHOWCASE */}
      <FleetShowcase
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* SECTION 4: POPULAR DESERT PACKAGES */}
      <PopularPackages
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onExploreAll={() => setIsPackagesModalOpen(true)}
      />

      {/* Full Packages Inventory Modal */}
      <PackagesModal
        isOpen={isPackagesModalOpen}
        onClose={() => setIsPackagesModalOpen(false)}
        onSelectPackage={() => setIsBookingModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
