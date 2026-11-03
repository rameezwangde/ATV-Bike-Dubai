import React, { useState, useEffect, useRef } from 'react';
import { useI18n, LANGUAGES } from '../context/I18nContext.jsx';

function Header({
  onOpenBooking,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activePage = 'home',
  setActivePage
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrOpen, setIsCurrOpen] = useState(false);

  const { lang, setLang, currency, setCurrency, exchangeRates, t, currentLanguage, currentCurrency } = useI18n();

  const langRef = useRef(null);
  const currRef = useRef(null);

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

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
      if (currRef.current && !currRef.current.contains(e.target)) {
        setIsCurrOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId, hash) => {
    if (setActivePage) {
      setActivePage(pageId, hash);
    }
    if (hash) {
      window.location.hash = hash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <span>{t('home')}</span>
              <span className="nav-active-bar"></span>
            </a>
            <a
              href="#about"
              className={`nav-item ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about', '#about');
              }}
            >
              <span>{t('aboutUs')}</span>
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
              <span>{t('packages')}</span>
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
              <span>{t('contact')}</span>
              <span className="nav-active-bar"></span>
            </a>
          </nav>

          {/* Right Action / Currency & Language Selectors & CTA */}
          <div className="header-right-action">
            
            {/* 1. CURRENCY SELECTOR (AE AED dropdown) */}
            <div className="custom-dropdown-container" ref={currRef}>
              <button
                className={`currency-selector-badge ${isCurrOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsCurrOpen(!isCurrOpen);
                  setIsLangOpen(false);
                }}
                aria-label="Select Currency"
                type="button"
              >
                <span className="currency-country">{currentCurrency.flag}</span>
                <span className="currency-label">{currentCurrency.code}</span>
                <span className="currency-pill">{currentCurrency.symbol}</span>
                <svg className="dropdown-caret" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Currency Dropdown Menu matching user image */}
              {isCurrOpen && (
                <div className="dropdown-panel-menu currency-panel">
                  <div className="dropdown-panel-header">
                    <span>SELECT CURRENCY</span>
                  </div>
                  <div className="dropdown-items-list">
                    {Object.values(exchangeRates).map((item) => (
                      <button
                        key={item.code}
                        className={`dropdown-item-row ${currency === item.code ? 'selected' : ''}`}
                        onClick={() => {
                          setCurrency(item.code);
                          setIsCurrOpen(false);
                        }}
                        type="button"
                      >
                        <span className="row-flag-code">{item.flag}</span>
                        <span className="row-item-name">{item.name}</span>
                        <span className="row-rate-tag">{item.label}</span>
                        {currency === item.code && <span className="active-dot"></span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. LANGUAGE SELECTOR (GB EN dropdown) */}
            <div className="custom-dropdown-container" ref={langRef}>
              <button
                className={`language-selector-badge ${isLangOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsCurrOpen(false);
                }}
                aria-label="Select Language"
                type="button"
              >
                <span className="currency-country">{currentLanguage.flag}</span>
                <span className="currency-label">{currentLanguage.short}</span>
                <svg className="dropdown-caret" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Language Dropdown Menu matching user image */}
              {isLangOpen && (
                <div className="dropdown-panel-menu language-panel">
                  <div className="dropdown-items-list">
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.code}
                        className={`dropdown-item-row ${lang === item.code ? 'selected' : ''}`}
                        onClick={() => {
                          setLang(item.code);
                          setIsLangOpen(false);
                        }}
                        type="button"
                      >
                        <span className="row-flag-code">{item.flag}</span>
                        <span className="row-item-name">{item.name}</span>
                        <span className="row-short-tag">{item.short}</span>
                        {lang === item.code && <span className="active-dot"></span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. BOOK YOUR RIDE Button */}
            <button
              className="btn-header-angled-book"
              onClick={onOpenBooking}
            >
              <span>{t('bookYourRide')}</span>
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

      {/* Responsive Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Responsive Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="drawer-title">ATV DUBAI GUIDE</span>
          <button
            className="drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
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
            {t('home')}
          </a>
          <a
            href="#about"
            className={`mobile-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              handleNavClick('about', '#about');
            }}
          >
            {t('aboutUs')}
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
            {t('packages')}
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
            {t('contact')}
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
            <span>{t('bookYourRide')}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;

