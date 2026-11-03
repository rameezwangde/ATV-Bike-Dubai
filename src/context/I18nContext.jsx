import React, { createContext, useContext, useState, useEffect } from 'react';

// Default live fallback rates as of today (1 AED base)
const INITIAL_RATES = {
  AED: { code: 'AED', symbol: 'AED', name: 'AED (AED)', flag: 'AE', rate: 1.0, label: 'Base (1:1)' },
  USD: { code: 'USD', symbol: '$', name: 'USD ($)', flag: 'US', rate: 0.2723, label: '1 AED ≈ 0.2723 USD' },
  EUR: { code: 'EUR', symbol: '€', name: 'EUR (€)', flag: 'EU', rate: 0.2432, label: '1 AED ≈ 0.2432 EUR' },
  GBP: { code: 'GBP', symbol: '£', name: 'GBP (£)', flag: 'GB', rate: 0.2031, label: '1 AED ≈ 0.2031 GBP' },
  RUB: { code: 'RUB', symbol: '₽', name: 'RUB (₽)', flag: 'RU', rate: 22.03, label: '1 AED ≈ 22.03 RUB' },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'SAR (SAR)', flag: 'SA', rate: 1.021, label: '1 AED ≈ 1.021 SAR' },
  INR: { code: 'INR', symbol: '₹', name: 'INR (₹)', flag: 'IN', rate: 25.85, label: '1 AED ≈ 25.85 INR' }
};

// 5 Requested Languages
export const LANGUAGES = [
  { code: 'en', flag: 'GB', name: 'English', short: 'EN', dir: 'ltr' },
  { code: 'es', flag: 'ES', name: 'Español', short: 'ES', dir: 'ltr' },
  { code: 'ru', flag: 'RU', name: 'Русский', short: 'RU', dir: 'ltr' },
  { code: 'fr', flag: 'FR', name: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'ar', flag: 'AE', name: 'العربية', short: 'AR', dir: 'rtl' }
];

export const TRANSLATIONS = {
  en: {
    home: 'HOME',
    aboutUs: 'ABOUT US',
    packages: 'PACKAGES',
    contact: 'CONTACT',
    bookYourRide: 'BOOK YOUR RIDE',
    watchTour: 'WATCH TOUR',
    heroLine1: 'YOUR NEXT RIDE',
    heroLine2: 'STARTS HERE',
    heroDesc: 'Explore the Dubai desert with premium ATVs, buggies and more. Adventure. Freedom. Unforgettable Experiences.',
    selectCurrency: 'SELECT CURRENCY',
    selectLanguage: 'SELECT LANGUAGE',
    selectDuration: 'SELECT DURATION:',
    bookNow: 'BOOK NOW',
    duration: 'DURATION',
    capacity: 'CAPACITY',
    transfer: 'TRANSFER',
    riders: 'Riders',
    hour: 'Hour',
    mins: 'Mins',
    allRightsReserved: 'All rights reserved.'
  },
  es: {
    home: 'INICIO',
    aboutUs: 'NOSOTROS',
    packages: 'PAQUETES',
    contact: 'CONTACTO',
    bookYourRide: 'RESERVAR VIAJE',
    watchTour: 'VER TOUR',
    heroLine1: 'TU PRÓXIMA AVENTURA',
    heroLine2: 'COMIENZA AQUÍ',
    heroDesc: 'Explora el desierto de Dubái con ATVs y buggies premium. Aventura. Libertad. Experiencias Inolvidables.',
    selectCurrency: 'SELECCIONAR MONEDA',
    selectLanguage: 'SELECCIONAR IDIOMA',
    selectDuration: 'SELECCIONAR DURACIÓN:',
    bookNow: 'RESERVAR AHORA',
    duration: 'DURACIÓN',
    capacity: 'CAPACIDAD',
    transfer: 'TRASLADO',
    riders: 'Pasajeros',
    hour: 'Hora',
    mins: 'Mins',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  ru: {
    home: 'ГЛАВНАЯ',
    aboutUs: 'О НАС',
    packages: 'ТУРЫ И ТАРИФЫ',
    contact: 'КОНТАКТЫ',
    bookYourRide: 'ЗАБРОНИРОВАТЬ',
    watchTour: 'СМОТРЕТЬ ТУР',
    heroLine1: 'ТВОЙ ЗАЕЗД',
    heroLine2: 'НАЧИНАЕТСЯ ЗДЕСЬ',
    heroDesc: 'Покоряйте пустыню Дубая на мощных багги и квадроциклах. Приключения. Свобода. Незабываемые эмоции.',
    selectCurrency: 'ВЫБЕРИТЕ ВАЛЮТУ',
    selectLanguage: 'ВЫБЕРИТЕ ЯЗЫК',
    selectDuration: 'ВЫБЕРИТЕ ВРЕМЯ:',
    bookNow: 'ЗАБРОНИРОВАТЬ СЕЙЧАС',
    duration: 'ВРЕМЯ',
    capacity: 'ВМЕСТИМОСТЬ',
    transfer: 'ТРАНСФЕР',
    riders: 'чел.',
    hour: 'Час',
    mins: 'мин',
    allRightsReserved: 'Все права защищены.'
  },
  fr: {
    home: 'ACCUEIL',
    aboutUs: 'À PROPOS',
    packages: 'FORFAITS',
    contact: 'CONTACT',
    bookYourRide: 'RÉSERVER VOTRE TOUR',
    watchTour: 'VOIR LA VIDÉO',
    heroLine1: 'VOTRE PROCHAINE AVENTURE',
    heroLine2: 'COMMENCE ICI',
    heroDesc: 'Explorez le désert de Dubaï avec nos quads et buggys haut de gamme. Aventure. Liberté. Souvenirs inoubliables.',
    selectCurrency: 'CHOISIR LA DEVISE',
    selectLanguage: 'CHOISIR LA LANGUE',
    selectDuration: 'CHOISIR LA DURÉE:',
    bookNow: 'RÉSERVER MAINTENANT',
    duration: 'DURÉE',
    capacity: 'CAPACITÉ',
    transfer: 'TRANSFERT',
    riders: 'Passagers',
    hour: 'Heure',
    mins: 'Mins',
    allRightsReserved: 'Tous droits réservés.'
  },
  ar: {
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    packages: 'الباقات والعروض',
    contact: 'اتصل بنا',
    bookYourRide: 'احجز جولتك الآن',
    watchTour: 'شاهد الجولة',
    heroLine1: 'مغامرتك القادمة',
    heroLine2: 'تبدأ من هنا',
    heroDesc: 'استكشف رمال دبي الذهبية مع أحدث دراجات الدفع الرباعي والبوجي. متعة لا تُنسى وأعلى معايير الأمان.',
    selectCurrency: 'اختر العملة',
    selectLanguage: 'اختر اللغة',
    selectDuration: 'اختر المدة:',
    bookNow: 'احجز الآن',
    duration: 'المدة',
    capacity: 'السعة',
    transfer: 'المواصلات',
    riders: 'ركاب',
    hour: 'ساعة',
    mins: 'دقيقة',
    allRightsReserved: 'جميع الحقوق محفوظة.'
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [currency, setCurrency] = useState('AED');
  const [exchangeRates, setExchangeRates] = useState(INITIAL_RATES);

  // Fetch live rates on mount
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/AED')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          const r = data.rates;
          setExchangeRates((prev) => ({
            ...prev,
            USD: { ...prev.USD, rate: r.USD || prev.USD.rate, label: `1 AED ≈ ${(r.USD || 0.2723).toFixed(4)} USD` },
            EUR: { ...prev.EUR, rate: r.EUR || prev.EUR.rate, label: `1 AED ≈ ${(r.EUR || 0.2432).toFixed(4)} EUR` },
            GBP: { ...prev.GBP, rate: r.GBP || prev.GBP.rate, label: `1 AED ≈ ${(r.GBP || 0.2031).toFixed(4)} GBP` },
            RUB: { ...prev.RUB, rate: r.RUB || prev.RUB.rate, label: `1 AED ≈ ${(r.RUB || 22.03).toFixed(2)} RUB` },
            SAR: { ...prev.SAR, rate: r.SAR || prev.SAR.rate, label: `1 AED ≈ ${(r.SAR || 1.021).toFixed(3)} SAR` },
            INR: { ...prev.INR, rate: r.INR || prev.INR.rate, label: `1 AED ≈ ${(r.INR || 25.85).toFixed(2)} INR` }
          }));
        }
      })
      .catch((err) => console.log('Using standard daily live rate cache:', err));
  }, []);

  // Update HTML dir when language changes (RTL for Arabic)
  useEffect(() => {
    const curLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
    document.documentElement.dir = curLang.dir;
    document.documentElement.lang = curLang.code;
  }, [lang]);

  // Convert AED amount string (e.g. "800 AED" or 800) into selected currency formatted string
  const formatPrice = (aedInput) => {
    if (!aedInput) return '';
    const numeric = typeof aedInput === 'number' ? aedInput : parseFloat(String(aedInput).replace(/[^0-9.]/g, ''));
    if (isNaN(numeric)) return String(aedInput);

    const curr = exchangeRates[currency] || exchangeRates.AED;
    if (currency === 'AED') {
      return `${numeric.toLocaleString()} AED`;
    }

    const converted = numeric * curr.rate;
    // Format nicely based on currency
    let formattedNum;
    if (currency === 'USD' || currency === 'EUR' || currency === 'GBP') {
      formattedNum = Math.round(converted).toLocaleString();
      return `${curr.symbol}${formattedNum}`;
    } else if (currency === 'INR') {
      formattedNum = Math.round(converted).toLocaleString('en-IN');
      return `₹${formattedNum}`;
    } else if (currency === 'RUB') {
      formattedNum = Math.round(converted).toLocaleString();
      return `${formattedNum} ₽`;
    } else {
      formattedNum = Math.round(converted).toLocaleString();
      return `${formattedNum} ${curr.code}`;
    }
  };

  const t = (key) => {
    const langDict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return langDict[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        currency,
        setCurrency,
        exchangeRates,
        formatPrice,
        t,
        currentLanguage: LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0],
        currentCurrency: exchangeRates[currency] || exchangeRates.AED
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

