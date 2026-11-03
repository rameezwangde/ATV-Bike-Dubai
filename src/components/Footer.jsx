import React from 'react';
import { useI18n } from '../context/I18nContext.jsx';

export default function Footer({ onOpenBooking, onOpenPackages, onOpenPolicy, onNavigate }) {
  const { t } = useI18n();
  const whatsappUrl = "https://wa.me/971504799258?text=Hello%2C%20I%20would%20like%20to%20book%20an%20ATV%20Dubai%20desert%20experience!";

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        
        {/* Main Footer 4 Columns Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & WhatsApp CTA */}
          <div className="footer-col footer-col-brand">
            <a href="#hero" className="footer-brand" aria-label="ATV Dubai Guide">
              <span className="footer-brand-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                  <circle cx="7.5" cy="14.5" r="1.5" />
                  <circle cx="16.5" cy="14.5" r="1.5" />
                </svg>
              </span>
              <div className="footer-brand-title">
                <span className="brand-primary">ATV DUBAI</span>
                <span className="brand-accent">GUIDE</span>
              </div>
            </a>

            <p className="footer-tagline">
              {t('brandTagline')}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-footer-whatsapp"
            >
              <span>{t('whatsappUs')}</span>
              <svg className="whatsapp-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('quickLinks')}</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', '#hero');
                    }
                  }}
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('about', '#about');
                    }
                  }}
                >
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', '#fleet');
                    }
                  }}
                >
                  {t('fleetEyebrow')}
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('home', '#packages');
                    }
                  }}
                >
                  {t('packages')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('contact', '#contact');
                    }
                  }}
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Safety */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('legalSafety')}</h4>
            <ul className="footer-links-list">
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); onOpenPolicy('terms'); }}>{t('termsConditions')}</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenPolicy('privacy'); }}>{t('privacyPolicy')}</a></li>
              <li><a href="#safety" onClick={(e) => { e.preventDefault(); onOpenPolicy('safety'); }}>{t('safetyPolicy')}</a></li>
              <li><a href="#refund" onClick={(e) => { e.preventDefault(); onOpenPolicy('refund'); }}>{t('refundPolicy')}</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">{t('contact')}</h4>
            <div className="contact-details-block">
              <a href="tel:+971504799258" className="contact-item contact-phone">
                +971 50 479 9258
              </a>
              <a href="mailto:info@atvdubaiguide.com" className="contact-item contact-email">
                info@atvdubaiguide.com
              </a>
              <p className="contact-item contact-address">
                XP83+8CW Al Madam — Dubai-Hatta Rd — Sharjah - United Arab Emirates
              </p>
            </div>

            <div className="footer-socials-block">
              <h5 className="socials-subheading">{t('followUs')}</h5>
              <div className="socials-links-row">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
                <span className="social-slash">/</span>
                <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="social-link">Snapchat</a>
                <span className="social-slash">/</span>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">TikTok</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Meta Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="coordinates-tag">25.2048° N / 55.2708° E — DUBAI, UAE</span>
            <span className="copyright-text">© 2026 ATV Dubai Guide. {t('allRightsReserved')}</span>
          </div>

          <div className="footer-bottom-right">
            <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenPolicy('terms'); }}>{t('termsConditions')}</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenPolicy('privacy'); }}>{t('privacyPolicy')}</a>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </footer>
  );
}
