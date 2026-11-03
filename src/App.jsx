import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import AboutUs from './components/AboutUs.jsx';
import FleetShowcase from './components/FleetShowcase.jsx';
import PopularPackages from './components/PopularPackages.jsx';
import ClimaxCTA from './components/ClimaxCTA.jsx';
import Footer from './components/Footer.jsx';
import ContactPage from './components/ContactPage.jsx';
import PackagesPage from './components/PackagesPage.jsx';
import PolicyModal from './components/PolicyModal.jsx';
import PackagesModal from './components/PackagesModal.jsx';
import { VideoModal, BookingModal } from './components/Modals.jsx';
import { useI18n } from './context/I18nContext.jsx';

export default function App() {
  const { t } = useI18n();
  const [currentPage, setCurrentPage] = useState('home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPackagesModalOpen, setIsPackagesModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [policyInitialTab, setPolicyInitialTab] = useState('terms');
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

  // Sync pathname and hash routing e.g. /contact, /packages, #/contact, #packages
  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname.replace(/\/$/, ''); // strip trailing slash

      if (
        pathname === '/contact' ||
        hash === '#/contact' ||
        hash === '#contact'
      ) {
        setCurrentPage('contact');
      } else if (
        pathname === '/packages' ||
        hash === '#/packages' ||
        hash === '#packages'
      ) {
        setCurrentPage('packages');
      } else {
        setCurrentPage('home');
      }
    };
    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  return (
    <div className="site-wrapper">
      {/* Top Header Navigation */}
      <Header
        onOpenBooking={() => setIsBookingModalOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activePage={currentPage}
        setActivePage={(page) => {
          setCurrentPage(page);
          if (page === 'contact') {
            window.location.hash = '#contact';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (page === 'packages') {
            window.location.hash = '#packages';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            window.location.hash = '#hero';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* CONDITIONAL PAGE RENDERING */}
      {currentPage === 'contact' ? (
        /* SEPARATE CONTACT PAGE VIEW */
        <ContactPage onOpenBooking={() => setIsBookingModalOpen(true)} />
      ) : currentPage === 'packages' ? (
        /* SEPARATE PACKAGES PAGE VIEW WITH INNOVATIVE CAN-AM CARDS */
        <PackagesPage onOpenBooking={() => setIsBookingModalOpen(true)} />
      ) : (
        /* HOME PAGE VIEW */
        <>
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

            {/* Hero Dynamic Center Stage Typography & CTA Buttons (Pure HTML/React, No Images/Panels) */}
            <div className="hero-content-stage">
              <div className="hero-pure-headline-wrap">
                <h1 className="hero-pure-title">
                  <span className="hero-line-primary">{t('heroLine1')}</span>
                  <span className="hero-line-brush">
                    {t('heroLine2')}
                    <svg className="hero-brush-underline-svg" viewBox="0 0 340 18" fill="none" preserveAspectRatio="none">
                      <path
                        d="M 6 12 Q 90 4 180 10 T 334 8"
                        stroke="#F8B700"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="hero-pure-desc">
                  {t('heroDesc')}
                </p>
              </div>

              {/* Single Centered High-Impact CTA Button */}
              <div className="hero-buttons-row">
                <button
                  className="btn-hero-primary-book"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <span>{t('bookYourRide')}</span>
                  <svg className="hero-btn-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
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

          {/* SECTION 5: FINAL CLIMAX CTA - READY TO RIDE THE DUNES? */}
          <ClimaxCTA
            onOpenBooking={() => setIsBookingModalOpen(true)}
            onExplorePackages={() => setIsPackagesModalOpen(true)}
          />
        </>
      )}

      {/* FOOTER (Shown on both pages) */}
      <Footer
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenPackages={() => setIsPackagesModalOpen(true)}
        onOpenPolicy={(tab) => {
          setPolicyInitialTab(tab || 'terms');
          setIsPolicyModalOpen(true);
        }}
        onNavigate={(page, hash) => {
          setCurrentPage(page);
          if (hash) {
            window.location.hash = hash;
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Policy & Legal Modal (Terms & Conditions, Privacy Policy, Safety, Refunds) */}
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        initialTab={policyInitialTab}
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
