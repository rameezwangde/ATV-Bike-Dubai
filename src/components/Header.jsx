import React, { useState, useEffect } from 'react';

export default function Header({
  onOpenBooking,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activePage = 'home',
  setActivePage
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, hash) => {
    if (setActivePage) {
      setActivePage(pageId);
    }
    if (hash) {
      window.location.hash = hash;
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          
          {/* Logo on Left */}
          <a
            href="#hero"
            className="site-brand-logo"
            aria-label="ATV Dubai Guide"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '#hero');
            }}
          >
            <span className="brand-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
            </span>
            <span className="brand-text-wrap">
              <span className="brand-title">ATV</span>
              <span className="brand-sub">Dubai Guide</span>
            </span>
          </a>

          {/* Centered Minimal Navbar matching Screenshot: HOME, ABOUT US, PACKAGES, CONTACT */}
          <nav className="site-nav" aria-label="Main Navigation">
            <a
              href="#hero"
              className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', '#hero');
              }}
            >
              <span>HOME</span>
              <span className="nav-active-bar"></span>
            </a>
            <a
              href="#about"
              className={`nav-item ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', '#about');
              }}
            >
              <span>ABOUT US</span>
              <span className="nav-active-bar"></span>
            </a>
            <a
              href="#packages"
              className={`nav-item ${activePage === 'packages' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages', '#packages');
              }}
            >
              <span>PACKAGES</span>
              <span className="nav-active-bar"></span>
            </a>
            <a
              href="#contact"
              className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact', '#contact');
              }}
            >
              <span>CONTACT</span>
              <span className="nav-active-bar"></span>
            </a>
          </nav>

          {/* Right Action / Currency & Angled CTA Button matching reference */}
          <div className="header-right-action">
            <div className="currency-selector-badge">
              <span className="currency-country">AE</span>
              <span className="currency-label">AED</span>
              <span className="currency-pill">AED</span>
            </div>

            <button
              className="btn-header-angled-book"
              onClick={onOpenBooking}
            >
              <span>BOOK YOUR RIDE</span>
              <svg className="angled-btn-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

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

        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="drawer-title">ATV DUBAI GUIDE</span>
          <button
            className="drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <nav className="mobile-menu-list">
          <a
            href="#hero"
            className={`mobile-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('home', '#hero');
            }}
          >
            HOME
          </a>
          <a
            href="#about"
            className="mobile-link"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('home', '#about');
            }}
          >
            ABOUT US
          </a>
          <a
            href="#fleet"
            className="mobile-link"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('home', '#fleet');
            }}
          >
            CHOOSE MACHINE
          </a>
          <a
            href="#packages"
            className={`mobile-link ${activePage === 'packages' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('packages', '#packages');
            }}
          >
            PACKAGES
          </a>
          <a
            href="#contact"
            className={`mobile-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('contact', '#contact');
            }}
          >
            CONTACT
          </a>
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
          </button>
        </div>
      </div>
    </>
  );
}
