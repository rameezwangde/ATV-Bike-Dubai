import React from 'react';

export default function Header({ onOpenBooking, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <>
      {/* Invisible Interactive Click Hotspots over the Top Frame Nav Bar */}
      <header className="header-nav-overlay">
        <div className="nav-inner-overlay">
          
          {/* Logo Hotspot over top left brand */}
          <a href="#hero" className="brand-logo-hotspot" aria-label="ATV Dubai Guide Home"></a>

          {/* Navigation link hotspots mapped directly to the painted links */}
          <nav className="nav-links-interactive" aria-label="Main Navigation">
            <a href="#hero" className="nav-hotspot" aria-label="Home"></a>
            <a href="#about" className="nav-hotspot" aria-label="About Us"></a>

            <div className="nav-hotspot dropdown" aria-label="Can-Am">
              <span className="dropdown-trigger-area"></span>
              <div className="dropdown-menu">
                <a href="#canam-x3">Can-Am Maverick X3 (Turbo RR)</a>
                <a href="#canam-defender">Can-Am Commander 1000R</a>
                <a href="#canam-outlander">Can-Am Outlander 4x4</a>
              </div>
            </div>

            <div className="nav-hotspot dropdown" aria-label="Polaris RZR">
              <span className="dropdown-trigger-area"></span>
              <div className="dropdown-menu">
                <a href="#rzr-pro-r">Polaris RZR Pro R 2000cc</a>
                <a href="#rzr-turbo-s">Polaris RZR Turbo S 1000</a>
                <a href="#rzr-4seater">Polaris 4-Seater Family Edition</a>
              </div>
            </div>

            <div className="nav-hotspot dropdown" aria-label="Kawasaki">
              <span className="dropdown-trigger-area"></span>
              <div className="dropdown-menu">
                <a href="#kawasaki-krx">Kawasaki Teryx KRX 1000</a>
                <a href="#kawasaki-brute">Kawasaki Brute Force 750</a>
              </div>
            </div>

            <div className="nav-hotspot dropdown" aria-label="Quad Bikes">
              <span className="dropdown-trigger-area"></span>
              <div className="dropdown-menu">
                <a href="#yamaha-raptor">Yamaha Raptor 700cc</a>
                <a href="#yamaha-grizzly">Yamaha Grizzly 350 / 450cc</a>
                <a href="#kids-quads">Kids & Youth Quad Bikes</a>
              </div>
            </div>

            <a href="#desert-safari" className="nav-hotspot" aria-label="Desert Safari"></a>
            <a href="#jetski" className="nav-hotspot" aria-label="Jetski & More"></a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="drawer-title">MENU</span>
          <button
            className="drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className="mobile-menu-list">
          <a href="#hero" className="mobile-link active" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a>
          <a href="#canam" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>CAN-AM BUGGIES</a>
          <a href="#polaris" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>POLARIS RZR</a>
          <a href="#kawasaki" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>KAWASAKI</a>
          <a href="#quad-bikes" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>QUAD BIKES</a>
          <a href="#desert-safari" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>DESERT SAFARI</a>
          <a href="#jetski" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>JETSKI & MORE</a>
        </nav>
        <div className="mobile-cta-box">
          <button
            className="cta-primary-btn w-100"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
          >
            <span>BOOK YOUR RIDE</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" style={{ width: '18px', height: '18px' }}>
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
