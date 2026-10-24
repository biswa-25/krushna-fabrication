import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink } from '../data/businessData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Catalog() {
  const { t, language } = useLanguage();
  const { catalog } = businessData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredItems = activeCategory === "All"
    ? catalog
    : catalog.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [activeImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [activeImageIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handlePrev, handleNext]);

  const currentItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-white relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-brand-blue text-xs uppercase tracking-wider font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.catalog.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.catalog.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
            {t.catalog.subheading}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {t.catalog.categories.map((category, idx) => {
            const rawCategory = ["All", "Main Gates", "Doors", "Railings", "Windows", "PVC & Fiber", "Sheds & Welding"][idx];
            const isActive = activeCategory === rawCategory;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(rawCategory);
                  setActiveImageIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-md scale-105'
                    : 'bg-steel-50 text-steel-700 hover:bg-steel-100 border border-steel-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const displayTitle = language === 'or' && item.titleOdia ? item.titleOdia : item.title;
            const displayCategory = language === 'or' && item.categoryOdia ? item.categoryOdia : item.category;
            const displayMaterial = language === 'or' && item.materialOdia ? item.materialOdia : item.material;
            const displayBadge = language === 'or' && item.badgeOdia ? item.badgeOdia : item.badge;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-steel-200 cursor-pointer hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-steel-100 relative">
                  <img
                    src={item.image}
                    alt={displayTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-950/80 via-steel-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-white/95 text-brand-blue shadow">
                      {displayCategory}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>{displayBadge}</span>
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 text-steel-900 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-black text-steel-900 mb-1.5 leading-snug group-hover:text-brand-blue transition-colors">
                      {displayTitle}
                    </h3>
                    <p className="text-xs text-steel-600 leading-relaxed line-clamp-2">
                      {displayMaterial}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-steel-100 flex items-center justify-between text-xs font-bold text-brand-blue">
                    <span>{t.catalog.viewFullscreen}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-steel-950/90 backdrop-blur-md p-4 transition-opacity animate-fadeIn"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-steel-200 bg-steel-50">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-sky-100 text-brand-blue">
                  {language === 'or' && currentItem.categoryOdia ? currentItem.categoryOdia : currentItem.category}
                </span>
                <span className="text-xs font-mono text-steel-500 font-bold">
                  {activeImageIndex + 1} {t.catalog.counterOf} {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-lg bg-steel-200 text-steel-700 hover:bg-steel-300 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-steel-900 flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full max-h-[65vh] object-contain select-none"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-steel-900 shadow-lg transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-steel-900 shadow-lg transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-steel-200">
              <div>
                <h4 className="text-base font-black text-steel-900 mb-0.5">
                  {language === 'or' && currentItem.titleOdia ? currentItem.titleOdia : currentItem.title}
                </h4>
                <p className="text-xs text-steel-600">
                  {language === 'or' && currentItem.materialOdia ? currentItem.materialOdia : currentItem.material}
                </p>
              </div>

              <a
                href={getWhatsAppLink(`Hello Sarat Bhai, I saw this design '${currentItem.title}' on your website and want to know price and fitting details for my house.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.catalog.askPriceForDesign}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
