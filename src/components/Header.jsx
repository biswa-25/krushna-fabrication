import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Shield, 
  Globe, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.owner, href: "#owner" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.designs, href: "#catalog" },
    { label: t.nav.estimate, href: "#estimator" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-steel py-2.5 shadow-md'
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-steel-200/80 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-steel-700 flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 stroke-[2.3]" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-steel-900 flex items-center gap-1 leading-tight">
                {language === 'or' ? "କରଣ" : "Karan"} <span className="text-brand-blue">{language === 'or' ? "ଷ୍ଟିଲ୍ ୱାର୍କସ" : "Steel Works"}</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-steel-500 font-bold">
                {language === 'or' ? "ବାଣପୁର • ଶରତ କରଣ" : "Banapur • Sarat Karan"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-steel-100/90 px-3.5 py-1.5 rounded-full border border-steel-200 shadow-inner">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-xs font-bold text-steel-700 hover:text-brand-blue hover:bg-white rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-steel-100 hover:bg-steel-200 text-steel-800 border border-steel-300 text-xs font-black transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-brand-blue" />
                <span>{language === 'or' ? 'ଓଡ଼ିଆ' : 'English'}</span>
                <ChevronDown className="w-3 h-3 text-steel-500" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-white border border-steel-200 rounded-xl shadow-xl overflow-hidden py-1 z-50 animate-fadeIn"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-steel-50 transition-colors ${
                      language === 'en' ? 'text-brand-blue bg-sky-50' : 'text-steel-700'
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {language === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>}
                  </button>

                  <button
                    onClick={() => {
                      setLanguage('or');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-steel-50 transition-colors ${
                      language === 'or' ? 'text-brand-blue bg-sky-50' : 'text-steel-700'
                    }`}
                  >
                    <span>🇮🇳 ଓଡ଼ିଆ (Odia)</span>
                    {language === 'or' && <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>}
                  </button>
                </div>
              )}
            </div>

            {/* Direct Call Button (Header) */}
            <a
              href={getPhoneLink(businessData.info.phoneRaw)}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 border border-amber-300 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>8260750546</span>
            </a>

            {/* Desktop WhatsApp CTA */}
            <a
              href={getWhatsAppLink(t.whatsappMsgs.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.whatsappUs}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-lg bg-steel-100 text-steel-700 hover:bg-steel-200 border border-steel-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[62px] bg-white/98 backdrop-blur-2xl border-b border-steel-200 shadow-2xl p-5 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between p-3 mb-4 rounded-xl bg-steel-50 border border-steel-200">
            <span className="text-xs font-black text-steel-600 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>Language / ଭାଷା</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'en'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-steel-600 hover:bg-steel-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('or')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'or'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-steel-600 hover:bg-steel-200'
                }`}
              >
                ଓଡ଼ିଆ
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-steel-700 hover:text-brand-blue hover:bg-sky-50 rounded-xl transition-all"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-steel-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-steel-200 grid grid-cols-2 gap-3">
              <a
                href={getPhoneLink(businessData.info.phoneRaw)}
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-steel-100 hover:bg-steel-200 text-steel-900 font-bold text-xs border border-steel-300"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call 8260750546</span>
              </a>

              <a
                href={getWhatsAppLink(t.whatsappMsgs.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.mobileBar.whatsapp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
