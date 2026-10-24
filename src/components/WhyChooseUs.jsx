import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Flame, Ruler, BadgePercent, Award } from 'lucide-react';

const icons = [Award, ShieldCheck, Ruler, BadgePercent];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-cardDark-900 relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-spark-gold" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            {t.whyUs.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            {t.whyUs.subheading}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((item, idx) => {
            const IconComponent = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="card-metallic-panel rounded-2xl p-6 flex flex-col group shadow-card-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-spark-gold flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-cardDark-950 transition-all shadow-sm">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-spark-gold transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
