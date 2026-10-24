import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { MessageSquare, Phone, ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, language } = useLanguage();
  const { info, assets } = businessData;

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-steel-50 border-b border-steel-200/80"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 steel-grid-pattern opacity-70 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Highlights & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-black shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.hero.badge}</span>
              </div>

              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-300 text-amber-900 text-xs font-black">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'or' ? "ବିହାରପୁର ଛକ, ବାଣପୁର" : "Biharpur Chhak, Banapur"}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight leading-[1.18] mb-4">
              {language === 'or' ? (
                <>
                  <span className="text-brand-blue">କରଣ ଷ୍ଟିଲ୍ & ଫ୍ୟାବ୍ରିକେସନ୍</span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-steel-800">
                    ମଜବୁତ୍ ଷ୍ଟିଲ୍। ଆଧୁନିକ ଡିଜାଇନ୍। ଜୀବନସାରା ସୁରକ୍ଷା।
                  </span>
                </>
              ) : (
                <>
                  <span className="text-brand-blue">Karan Steel & Fabrication</span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-steel-800">
                    Strong Steel. Modern Design. Built to Last.
                  </span>
                </>
              )}
            </h1>

            {/* Owner Note */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-steel-700 mb-4 bg-white px-3.5 py-1.5 rounded-xl border border-steel-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                {language === 'or' ? "ମୁଖ୍ୟ କାରିଗର: ଶରତ କରଣ" : "Master Fabricator: Sarat Karan"}
              </span>
              <span className="text-steel-400">•</span>
              <span className="text-brand-blue font-black">Mob: 8260750546</span>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-steel-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {t.hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={getPhoneLink(info.phoneRaw)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-black bg-brand-blue hover:bg-brand-blueDark text-white shadow-md transition-all active:scale-95 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call 8260750546</span>
              </a>

              <a
                href={getWhatsAppLink(t.whatsappMsgs.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-black bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all active:scale-95 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.hero.primaryCta}</span>
              </a>

              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white hover:bg-steel-100 text-steel-800 border border-steel-300 transition-all text-center"
              >
                <span>{t.hero.viewWorkCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-4 border-t border-steel-200 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-steel-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'or' ? "୩୦୪ ଗ୍ରେଡ୍ ଏସ୍‌ଏସ୍ ଷ୍ଟିଲ୍" : "Grade 304 Stainless Steel"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'or' ? "ଘରକୁ ଯାଇ ମାପ ନେବା ସୁବିଧା" : "Free On-Site Measurement"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'or' ? "ବାଣପୁର ବିହାରପୁର ଛକ" : "Biharpur Chhak, Banapur"}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real SS Gate Showcase with Depth & Card Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-steel-100 ring-1 ring-steel-200">
              <img
                src={assets.ssMainGateArch}
                alt="Luxury Stainless Steel Arch Gate fabricated by Sarat Karan"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                loading="eager"
              />
              
              {/* Bottom Real Workshop Banner */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-steel-950/90 via-steel-950/60 to-transparent p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-brand-blue flex items-center justify-center font-bold shadow shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight text-white leading-snug">
                      {language === 'or' ? "୩୦୪ ଏସ୍‌ଏସ୍ ରୟାଲ୍ ଆର୍ଚ୍ ଗେଟ୍" : "Grade 304 SS Royal Arch Gate"}
                    </h4>
                    <p className="text-xs text-sky-200 font-semibold">
                      {language === 'or' ? "ଶରତ କରଣ • ୮୨୬୦୭୫୦୫୪୬" : "Sarat Karan • Mob: 8260750546"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'or' ? "ପ୍ରକୃତ ଫ୍ୟାବ୍ରିକେସନ୍ କାମ" : "Actual Fabricated Sample"}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
