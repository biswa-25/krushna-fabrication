import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { Flame, Phone, MessageSquare, MapPin, ArrowUp, User, Award } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const { info } = businessData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="bg-cardDark-950 text-slate-300 pt-16 pb-28 sm:pb-16 relative border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-cardDark-950 shadow-card-glow">
                <Flame className="w-6 h-6 stroke-[2.5] fill-current" />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white block">
                  {language === 'or' ? info.nameOdia : info.name}
                </span>
                <span className="text-xs text-spark-gold font-bold block">
                  {language === 'or' ? "ମାଲିକ: ଶରତ କରଣ" : "Owner: Sarat Karan"}
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              {language === 'or' ? info.cardTaglineOdia : info.cardTagline}
            </p>

            <div className="pt-2 text-xs text-amber-300 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-spark-gold" />
              <span>{language === 'or' ? info.trustHighlightsOdia : info.trustHighlights}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs sm:text-sm text-slate-400">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-spark-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-4">
              {t.footer.contactUs}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-spark-gold shrink-0 mt-0.5" />
                <span className="text-white font-bold">
                  {language === 'or' ? info.ownerNameOdia : info.ownerName}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href={getPhoneLink(info.phoneRaw)} className="text-white font-bold hover:text-spark-gold block">
                    {info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 fill-current" />
                <a
                  href={getWhatsAppLink(t.whatsappMsgs.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-white font-bold"
                >
                  {info.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{language === 'or' ? info.locationOdia : info.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t.footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-spark-gold transition-colors cursor-pointer font-bold"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
