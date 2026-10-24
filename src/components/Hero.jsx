import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { MessageSquare, Phone, MapPin, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame, Award } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const { info, assets } = businessData;

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-cardDark-950 industrial-spark-pattern border-b border-amber-500/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Contract Announcement & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-cardDark-950 text-xs font-black shadow-card-glow">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>{t.hero.badge}</span>
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cardDark-850 border border-amber-500/40 text-amber-300 text-xs font-black">
                <MapPin className="w-3.5 h-3.5 text-spark-gold" />
                <span>{language === 'or' ? "ବିଧାରପୁର ଛକ, ବାଣପୁର" : "Bidharpur Chhak, Banapur"}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] mb-3">
              {language === 'or' ? (
                <>
                  <span className="text-spark-gradient drop-shadow-md">କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ</span>
                  <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl text-amber-200/90 font-bold block mt-1">
                    ଏଠାରେ ଷ୍ଟିଲ, ଜି.ଆଇ., ଆଲୁମିନିୟମ, UPVC ଓ ଲୁହାର ସମସ୍ତ ସାମଗ୍ରୀ ତିଆରି କରାଯାଏ ।
                  </span>
                </>
              ) : (
                <>
                  <span className="text-spark-gradient drop-shadow-md">Krushna Fabrication</span>
                  <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl text-amber-200/90 font-bold block mt-1">
                    All Types of Steel, G.I., Aluminium, UPVC & Iron Works
                  </span>
                </>
              )}
            </h1>

            {/* Works List Pill */}
            <p className="text-xs sm:text-sm text-slate-300 font-semibold mb-6">
              {t.hero.subheadline}
            </p>

            {/* CONTRACT SPECIAL HIGHLIGHT BOX */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cardDark-850 to-cardDark-900 border-2 border-amber-500/40 shadow-card-glow mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-0.5 bg-amber-500 text-cardDark-950 text-[10px] font-black uppercase tracking-wider rounded-bl-lg">
                Contract Specialist
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-spark-gold flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-spark-gold mb-1">
                    {t.hero.contractBadge}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {t.hero.contractDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Owner Note */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200 mb-6 bg-cardDark-900 px-3.5 py-1.5 rounded-xl border border-amber-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {language === 'or' ? "ମାଲିକ: କୃଷ୍ଣ କରଣ" : "Owner & Lead Contractor: Krushna Karan"}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-spark-gold font-black">Mob: 8260750546</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={getPhoneLink(info.phoneRaw)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cardDark-950 shadow-spark-btn transition-all active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 8260750546</span>
              </a>

              <a
                href="#requirement"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all active:scale-95 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.hero.sendReqBtn}</span>
              </a>

              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-cardDark-900 hover:bg-cardDark-800 text-slate-200 border border-amber-500/30 transition-all text-center"
              >
                <span>{t.hero.viewWorkBtn}</span>
                <ArrowRight className="w-4 h-4 text-spark-gold" />
              </a>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-4 border-t border-slate-800 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'or' ? "୩୦୪ ଗ୍ରେଡ୍ ଷ୍ଟିଲ୍" : "Grade 304 SS"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'or' ? "ମାଗଣା ସାଇଟ୍ ମାପ" : "Free Site Measurement"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'or' ? "ବାଣପୁର ବିଧାରପୁର ଛକ" : "Bidharpur Chhak, Banapur"}</span>
              </div>
            </div>

          </div>

          {/* Right Column: ACTUAL VISITING CARD WITH METALLIC GLOW FRAME */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/50 bg-cardDark-900 ring-1 ring-amber-500/20 group">
              
              {/* Card Header Tag */}
              <div className="p-3 bg-gradient-to-r from-cardDark-900 via-cardDark-850 to-cardDark-900 border-b border-amber-500/30 flex items-center justify-between text-xs">
                <span className="font-black text-spark-gold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.hero.cardBadge}</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400 font-bold">
                  Mob: 8260750546
                </span>
              </div>

              {/* Physical Visiting Card Image (Oriented Landscape) */}
              <div className="p-3 bg-black/40">
                <img
                  src={assets.visitingCard}
                  alt="Krushna Fabrication Official Visiting Card"
                  className="w-full h-auto rounded-xl object-contain shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Bottom Quick Action Strip on Card */}
              <div className="p-4 bg-gradient-to-t from-cardDark-950 via-cardDark-900 to-transparent border-t border-amber-500/20">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getPhoneLink(info.phoneRaw)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-cardDark-950 font-black text-xs shadow transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Call 8260750546</span>
                  </a>

                  <a
                    href={getWhatsAppLink(t.whatsappMsgs.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Shop Exterior Preview Badge */}
            <div className="mt-4 p-3 rounded-2xl bg-cardDark-900/90 border border-amber-500/30 flex items-center gap-3">
              <img
                src={assets.shopExterior}
                alt="Krushna Fabrication Shop Exterior"
                className="w-14 h-14 rounded-xl object-cover border border-amber-500/40 shrink-0"
              />
              <div className="text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-amber-400 block">
                  {language === 'or' ? "ଆମ ୱାର୍କସପ୍ ଓ ଶପ୍" : "Our Workshop & Shop"}
                </span>
                <span className="text-xs font-black text-white block">
                  {language === 'or' ? "ବିଧାରପୁର ଛକ, ବାଣପୁର" : "Bidharpur Chhak, Banapur"}
                </span>
                <span className="text-[10px] text-slate-400">
                  {language === 'or' ? "ସମସ୍ତ ଷ୍ଟିଲ୍ ଓ ୟୁପିଭିସି ସାମଗ୍ରୀ ଉପଲବ୍ଧ" : "All Steel & UPVC Materials In Stock"}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
