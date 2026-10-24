import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Flame, Ruler, BadgePercent } from 'lucide-react';

const icons = [ShieldCheck, Flame, Ruler, BadgePercent];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-brand-blue text-xs uppercase tracking-wider font-bold mb-3">
            {t.whyUs.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.whyUs.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
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
                className="steel-card rounded-2xl p-6 bg-steel-50 flex flex-col group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-brand-blue border border-steel-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-steel-900 group-hover:text-brand-blue transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-steel-600 leading-relaxed font-normal">
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
