import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink } from '../data/businessData';
import { 
  Shield, 
  Grid, 
  DoorClosed, 
  Layers, 
  Maximize, 
  Sliders, 
  Flame, 
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const serviceIcons = {
  'steel-gate': Shield,
  'window-grill': Grid,
  'upvc-doors-windows': Maximize,
  'fiber-doors': Layers,
  'aluminium-windows': Maximize,
  'upstairs-railing': Sliders,
  'wpvc-plastic-design': DoorClosed,
  'welding-contracts': Flame
};

export default function Services() {
  const { t, language } = useLanguage();
  const { servicesList } = businessData;

  return (
    <section id="services" className="py-20 lg:py-28 bg-cardDark-950 industrial-spark-pattern relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-spark-gold" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            {t.services.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            {t.services.subheading}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[service.id] || Shield;
            const waMessage = language === 'or'
              ? `ନମସ୍କାର ଶରତ ଭାଇ (କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ), ମୁଁ '${service.title}' କାମ ପାଇଁ ଆଲୋଚନା କରିବାକୁ ଚାହୁଁଛି।`
              : `Hello Sarat Bhai (Krushna Fabrication), I want to enquire about '${service.title}' work for my building.`;
            const enquiryLink = getWhatsAppLink(waMessage);

            const serviceItem = servicesList.find((s) => s.id === service.id);
            const previewImg = serviceItem?.image;

            return (
              <div
                key={service.id}
                className="card-metallic-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-card-elevated"
              >
                <div>
                  {/* Service Image Preview */}
                  {previewImg && (
                    <div className="relative h-44 overflow-hidden bg-black/60 border-b border-amber-500/20">
                      <img
                        src={previewImg}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cardDark-950 via-cardDark-950/30 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-cardDark-900/90 text-spark-gold border border-amber-500/40 flex items-center justify-center shadow">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <div className="absolute top-3 right-3 text-xs font-mono font-black text-amber-300/80 bg-black/70 px-2 py-0.5 rounded-md border border-amber-500/30">
                        0{index + 1}
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-spark-gold transition-colors duration-200 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                      {service.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 pt-3 border-t border-slate-800 mb-5">
                      {service.bullets.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-spark-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="p-5 pt-0 mt-auto">
                  <a
                    href={enquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all duration-200 group/link"
                  >
                    <span>{t.services.sendRequirementForWork}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-spark-gold" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
