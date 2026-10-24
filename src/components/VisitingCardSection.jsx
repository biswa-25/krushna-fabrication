import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getPhoneLink, getWhatsAppLink } from '../data/businessData';
import { Phone, MessageSquare, Maximize2, X, Sparkles, MapPin, Award } from 'lucide-react';

export default function VisitingCardSection() {
  const { t } = useLanguage();
  const { assets, info } = businessData;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="visiting-card" className="py-16 lg:py-24 bg-cardDark-950 relative border-b border-amber-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-spark-gold" />
            <span>{t.visitingCardSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
            {t.visitingCardSection.heading}
          </h2>
          <p className="text-sm text-slate-300">
            {t.visitingCardSection.subheading}
          </p>
        </div>

        {/* Card Display Container */}
        <div className="relative rounded-3xl p-4 sm:p-8 bg-gradient-to-br from-cardDark-850 via-cardDark-900 to-cardDark-950 border-2 border-amber-500/40 shadow-card-glow max-w-3xl mx-auto">
          
          <div 
            onClick={() => setModalOpen(true)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-amber-500/30 bg-black/40"
          >
            <img
              src={assets.visitingCard}
              alt="Krushna Fabrication Visiting Card"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 rounded-xl bg-amber-500 text-cardDark-950 font-black text-xs shadow-lg flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4" />
                <span>Tap to View Full Screen</span>
              </span>
            </div>
          </div>

          {/* Quick Actions Strip */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <MapPin className="w-4 h-4 text-spark-gold" />
              <span>{t.visitingCardSection.addressPrinted}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={getPhoneLink(info.phoneRaw)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cardDark-950 font-black text-xs shadow-spark-btn transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{t.visitingCardSection.callDirect}</span>
              </a>

              <a
                href={getWhatsAppLink(t.whatsappMsgs.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-cardDark-900 border-2 border-amber-500/60 rounded-2xl overflow-hidden p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800">
              <span className="text-xs font-black text-spark-gold">
                Krushna Fabrication Visiting Card • Mob: 8260750546
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg bg-cardDark-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <img
              src={assets.visitingCard}
              alt="Krushna Fabrication Visiting Card Fullscreen"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
