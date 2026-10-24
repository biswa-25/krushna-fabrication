import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../data/businessData';
import { Calculator, MessageSquare, CheckCircle2, Ruler, Sparkles } from 'lucide-react';

export default function Estimator() {
  const { t, language } = useLanguage();
  const [selectedType, setSelectedType] = useState(t.estimator.types[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(t.estimator.materials[0]);
  const [width, setWidth] = useState('10');
  const [height, setHeight] = useState('7');
  const [notes, setNotes] = useState('');

  const numWidth = parseFloat(width) || 0;
  const numHeight = parseFloat(height) || 0;
  const areaSqFt = numWidth * numHeight;

  const handleSendEstimate = (e) => {
    e.preventDefault();
    const formattedMsg = language === 'or'
      ? `*କରଣ ଷ୍ଟିଲ୍ ୱାର୍କସ - ଖର୍ଚ୍ଚ ଆକଳନ ଅନୁରୋଧ*\n*ସାମଗ୍ରୀ:* ${selectedType}\n*ମେଟେରିଆଲ୍:* ${selectedMaterial}\n*ମାପ:* ${width} ଫୁଟ୍ x ${height} ଫୁଟ୍ (${areaSqFt > 0 ? areaSqFt + ' ବର୍ଗଫୁଟ୍' : 'ମାପ ସାଇଟ୍‌ରେ ନିଆଯିବ'})\n*ଅନ୍ୟାନ୍ୟ ବିବରଣୀ:* ${notes || 'ଡିଜାଇନ୍ ଓ ଦର ଜଣାନ୍ତୁ।'}`
      : `*Karan Steel Works - Quick Quote Request*\n*Item:* ${selectedType}\n*Material:* ${selectedMaterial}\n*Approx Size:* ${width} ft x ${height} ft (${areaSqFt > 0 ? areaSqFt + ' sq.ft' : 'To be measured on site'})\n*Design Notes:* ${notes || 'Please share price estimate & catalog.'}`;

    window.open(getWhatsAppLink(formattedMsg), '_blank');
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-steel-50 relative border-b border-steel-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs uppercase tracking-wider font-bold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.estimator.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
            {t.estimator.subheading}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-steel-200 shadow-xl">
          <form onSubmit={handleSendEstimate} className="space-y-6">
            
            {/* Step 1: Item Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-steel-700 mb-2.5">
                {t.estimator.step1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {t.estimator.types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedType === type
                        ? 'bg-sky-50 border-brand-blue text-brand-blue shadow-sm ring-1 ring-brand-blue'
                        : 'bg-steel-50 border-steel-200 text-steel-700 hover:bg-steel-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{type}</span>
                      {selectedType === type && <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 ml-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Material */}
            <div className="pt-4 border-t border-steel-100 grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5 flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{t.estimator.widthLabel}</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-steel-50 border border-steel-300 text-steel-900 font-bold focus:outline-none focus:border-brand-blue focus:bg-white text-sm"
                  placeholder="e.g. 10"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5 flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{t.estimator.heightLabel}</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="0.5"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-steel-50 border border-steel-300 text-steel-900 font-bold focus:outline-none focus:border-brand-blue focus:bg-white text-sm"
                  placeholder="e.g. 7"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                  {t.estimator.materialLabel}
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-steel-50 border border-steel-300 text-steel-900 text-xs font-bold focus:outline-none focus:border-brand-blue focus:bg-white"
                >
                  {t.estimator.materials.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Approximate Area Badge */}
            {areaSqFt > 0 && (
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-brand-blue flex items-center justify-between font-bold">
                <span>Approximate Total Area:</span>
                <span className="text-sm font-black text-brand-blueDark">{areaSqFt} Square Feet (sq.ft)</span>
              </div>
            )}

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                {t.estimator.notesLabel}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.estimator.notesPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-steel-50 border border-steel-300 text-steel-900 text-xs placeholder-steel-400 focus:outline-none focus:border-brand-blue focus:bg-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{t.estimator.calculateBtn}</span>
            </button>

            <p className="text-center text-[11px] text-steel-500 font-medium">
              * Krushna Bhai offers free on-site measurement to verify final dimensions and exact material gauge.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
