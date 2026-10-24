import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, MapPin, CheckSquare, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const processStepIcons = [MessageSquare, MapPin, CheckSquare, Wrench, ShieldCheck];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 lg:py-28 bg-steel-50 relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-brand-blue text-xs uppercase tracking-wider font-bold mb-3">
            {t.process.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.process.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
            {t.process.subheading}
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {t.process.steps.map((item, idx) => {
            const Icon = processStepIcons[idx] || ShieldCheck;
            const isLast = idx === t.process.steps.length - 1;

            return (
              <div
                key={item.step}
                className="steel-card rounded-2xl p-6 bg-white flex flex-col group shadow-sm justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-brand-blue border border-sky-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xl font-display font-black text-steel-300 group-hover:text-brand-blue transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-steel-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-steel-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {!isLast && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-steel-300">
                    <ArrowRight className="w-4 h-4 text-brand-blue/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
