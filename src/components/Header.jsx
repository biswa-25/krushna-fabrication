import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Flame, 
  Globe, 
  ChevronRight,
  ChevronDown,
  Sparkles
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
    { label: t.nav.card, href: "#visiting-card" },
    { label: t.nav.owner, href: "#owner" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.designs, href: "#catalog" },
    { label: t.nav.requirement, href: "#requirement" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.contact, href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-card py-2.5 shadow-2xl'
          : 'bg-cardDark-950/95 backdrop-blur-md py-3.5 border-b border-amber-500/20 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-spark-gold rounded-lg shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-card-glow text-cardDark-950 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 stroke-[2.5] fill-current" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 leading-tight">
                {language === 'or' ? "କୃଷ୍ଣ" : "Krushna"} <span className="text-spark-gold">{language === 'or' ? "ଫ୍ୟାବ୍ରିକେସନ" : "Fabrication"}</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                {language === 'or' ? "ବାଣପୁର • ଶରତ କରଣ" : "Banapur • Sarat Karan"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-cardDark-900/90 px-3.5 py-1.5 rounded-full border border-amber-500/25 shadow-inner">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-xs font-bold text-slate-300 hover:text-spark-gold hover:bg-cardDark-800 rounded-full transition-all duration-200"
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cardDark-900 hover:bg-cardDark-800 text-slate-200 border border-amber-500/30 text-xs font-black transition-all focus:outline-none focus:ring-2 focus:ring-spark-gold"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-spark-gold" />
                <span>{language === 'or' ? 'ଓଡ଼ିଆ' : 'English'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-36 bg-cardDark-900 border border-amber-500/40 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-cardDark-800 transition-colors ${
                      language === 'en' ? 'text-spark-gold bg-amber-500/10' : 'text-slate-300'
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {language === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-spark-gold"></span>}
                  </button>

                  <button
                    onClick={() => {
                      setLanguage('or');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center justify-between hover:bg-cardDark-800 transition-colors ${
                      language === 'or' ? 'text-spark-gold bg-amber-500/10' : 'text-slate-300'
                    }`}
                  >
                    <span>🇮🇳 ଓଡ଼ିଆ (Odia)</span>
                    {language === 'or' && <span className="w-1.5 h-1.5 rounded-full bg-spark-gold"></span>}
                  </button>
                </div>
              )}
            </div>

            {/* Direct Call Button (Header) */}
            <a
              href={getPhoneLink(businessData.info.phoneRaw)}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition-all active:scale-95 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-spark-gold" />
              <span>8260750546</span>
            </a>

            {/* Desktop WhatsApp CTA */}
            <a
              href={getWhatsAppLink(t.whatsappMsgs.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-black bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.whatsappUs}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 rounded-lg bg-cardDark-900 text-slate-300 hover:bg-cardDark-800 border border-amber-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-spark-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-spark-gold" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[62px] bg-cardDark-950/98 backdrop-blur-2xl border-b border-amber-500/30 shadow-2xl p-5 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          
          {/* Mobile Language Switcher Row */}
          <div className="flex items-center justify-between p-3 mb-4 rounded-xl bg-cardDark-900 border border-amber-500/25">
            <span className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-spark-gold" />
              <span>Language / ଭାଷା</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'en'
                    ? 'bg-amber-500 text-cardDark-950 font-black shadow-sm'
                    : 'text-slate-400 hover:bg-cardDark-800'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('or')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                  language === 'or'
                    ? 'bg-amber-500 text-cardDark-950 font-black shadow-sm'
                    : 'text-slate-400 hover:bg-cardDark-800'
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
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-200 hover:text-spark-gold hover:bg-cardDark-900 rounded-xl transition-all"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-amber-500/60" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-amber-500/20 grid grid-cols-2 gap-3">
              <a
                href={getPhoneLink(businessData.info.phoneRaw)}
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-cardDark-900 text-amber-300 font-bold text-xs border border-amber-500/30"
              >
                <Phone className="w-4 h-4 text-spark-gold" />
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
