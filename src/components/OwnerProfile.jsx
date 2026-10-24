import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { Phone, MessageSquare, CheckCircle2, ShieldCheck, UserCheck, Award, Sparkles } from 'lucide-react';

export default function OwnerProfile() {
  const { t, language } = useLanguage();
  const { info, assets } = businessData;
  const waUrl = getWhatsAppLink(t.whatsappMsgs.directOwner);

  return (
    <section id="owner" className="py-20 lg:py-28 bg-cardDark-900 relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Owner Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40 bg-cardDark-950 ring-1 ring-amber-500/20">
                <img
                  src={assets.ownerPhoto}
                  alt="Sarat Karan - Owner of Krushna Fabrication"
                  className="w-full h-[470px] object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-cardDark-950 via-cardDark-950/80 to-transparent p-6 text-white text-center">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-cardDark-950 shadow mb-1.5">
                    Lead Contractor & Master Fabricator
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {language === 'or' ? info.ownerNameOdia : info.ownerName}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold">
                    {language === 'or' ? info.locationOdia : info.location}
                  </p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-cardDark-850 p-4 rounded-2xl shadow-xl border border-amber-500/40 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-spark-gold flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Building Contracts</div>
                  <div className="text-[10px] text-amber-400 font-semibold">100% Guaranteed Durability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Info & Direct Contact Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-wider font-bold mb-4">
              <UserCheck className="w-4 h-4 text-spark-gold" />
              <span>{t.owner.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2">
              {t.owner.heading}
            </h2>

            <p className="text-base sm:text-lg font-bold text-spark-gold mb-4">
              {t.owner.title}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 font-normal">
              {t.owner.experience}
            </p>

            {/* Contract Guarantee Banner */}
            <div className="w-full p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-spark-gold shrink-0" />
              <div className="text-xs sm:text-sm font-bold text-amber-200">
                {t.owner.contractOffer}
              </div>
            </div>

            {/* Quote Box */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-cardDark-850 border-l-4 border-amber-500 border-y border-r border-slate-800 mb-6 italic text-sm text-slate-200 font-medium">
              "{t.owner.quote}"
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {t.owner.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={getPhoneLink(info.phoneRaw)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cardDark-950 font-black text-sm shadow-spark-btn transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
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
