import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../data/businessData';
import { 
  Shield, 
  DoorClosed, 
  Grid, 
  Sliders, 
  Flame, 
  Layers, 
  Maximize, 
  Warehouse,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const serviceIcons = {
  'ss-gates': Shield,
  'safety-doors': DoorClosed,
  'window-grills': Grid,
  'staircase-railings': Sliders,
  'pvc-fiber-doors': Layers,
  'aluminium-windows': Maximize,
  'structural-welding': Flame,
  'metal-sheds': Warehouse
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 bg-steel-50 relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-brand-blue text-xs uppercase tracking-wider font-bold mb-3">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.services.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
            {t.services.subheading}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[service.id] || Shield;
            const waMessage = `Hello Sarat Bhai, I want to enquire about '${service.title}' for my house.`;
            const enquiryLink = getWhatsAppLink(waMessage);

            return (
              <div
                key={service.id}
                className="steel-card rounded-2xl p-6 flex flex-col justify-between group shadow-sm bg-white"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-blue border border-sky-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-black text-steel-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-steel-900 group-hover:text-brand-blue transition-colors duration-200 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-steel-600 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 border-t border-steel-100 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-steel-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <a
                  href={enquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blueDark transition-colors group/link mt-auto pt-2"
                >
                  <span>{t.services.askPrice}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
