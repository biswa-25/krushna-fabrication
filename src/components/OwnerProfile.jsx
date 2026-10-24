import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { Phone, MessageSquare, CheckCircle2, ShieldCheck, UserCheck, Award } from 'lucide-react';

export default function OwnerProfile() {
  const { t, language } = useLanguage();
  const { info, assets } = businessData;
  const waUrl = getWhatsAppLink(t.whatsappMsgs.ownerDirect);

  return (
    <section id="owner" className="py-16 lg:py-24 bg-white relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Owner Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-steel-100 ring-1 ring-steel-200">
                <img
                  src={assets.ownerPhoto}
                  alt="Sarat Karan - Owner of Karan Steel & Fabrication Works"
                  className="w-full h-[470px] object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-steel-950/90 via-steel-950/50 to-transparent p-6 text-white text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-blue text-white shadow mb-1">
                    Master Fabricator & Owner
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {language === 'or' ? info.ownerNameOdia : info.ownerName}
                  </h3>
                  <p className="text-xs text-sky-200 font-semibold">
                    {language === 'or' ? info.locationOdia : info.location}
                  </p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-steel-100 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-steel-800">Trusted in Banapur</div>
                  <div className="text-[10px] text-steel-500 font-semibold">100% Guaranteed Durability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Info & Direct Contact Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-brand-blue text-xs uppercase tracking-wider font-bold mb-4">
              <UserCheck className="w-4 h-4" />
              <span>{t.owner.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight leading-tight mb-2">
              {t.owner.heading}
            </h2>

            <p className="text-base sm:text-lg font-bold text-brand-blue mb-4">
              {t.owner.title}
            </p>

            <p className="text-sm sm:text-base text-steel-600 leading-relaxed mb-6 font-normal">
              {t.owner.experience}
            </p>

            {/* Quote Box */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-steel-50 border-l-4 border-brand-blue border-y border-r border-steel-200/80 mb-6 italic text-sm text-steel-700 font-medium">
              "{t.owner.quote}"
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {t.owner.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={getPhoneLink(info.phoneRaw)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueDark text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.owner.callDirect}</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.owner.whatsappDirect}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
