import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../data/businessData';
import { MessageSquare, CheckSquare, Square, Send, Award, Phone, ShieldCheck } from 'lucide-react';

export default function RequirementForm() {
  const { t, language } = useLanguage();

  const availableWorks = [
    { id: "gate", label: "Steel Gate (SS / Iron)", labelOdia: "ଷ୍ଟିଲ୍ ଗେଟ୍ (SS / ଲୁହା)" },
    { id: "grill", label: "Window & Balcony Grill", labelOdia: "ଝରକା ଓ ବାଲକୋନି ଗ୍ରୀଲ୍" },
    { id: "upvc", label: "UPVC Doors & Windows", labelOdia: "ୟୁପିଭିସି କବାଟ ଓ ଝରକା" },
    { id: "fiber", label: "Waterproof Fiber Doors", labelOdia: "ୱାଟରପ୍ରୁଫ୍ ଫାଇବର କବାଟ" },
    { id: "aluminium", label: "Aluminium Sliding Windows", labelOdia: "ଆଲୁମିନିୟମ୍ ଝରକା ଓ କବାଟ" },
    { id: "railing", label: "Upstairs Staircase Railing", labelOdia: "ସିଡ଼ି ରେଲିଂ (Upstairs)" },
    { id: "wpvc", label: "WPVC & Plastic Design Doors", labelOdia: "ଡବ୍ଲୁପିଭିସି ଓ ପ୍ଲାଷ୍ଟିକ୍ ଡିଜାଇନ୍ କବାଟ" },
    { id: "contract", label: "Full House Fabrication Contract", labelOdia: "ନୂତନ ଘରର ସମ୍ପୂର୍ଣ୍ଣ କଣ୍ଟ୍ରାକ୍ଟ" }
  ];

  const [selectedWorks, setSelectedWorks] = useState(["Steel Gate (SS / Iron)"]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  const toggleWork = (item) => {
    const itemLabel = language === 'or' ? item.labelOdia : item.label;
    if (selectedWorks.includes(itemLabel)) {
      setSelectedWorks(selectedWorks.filter((w) => w !== itemLabel));
    } else {
      setSelectedWorks([...selectedWorks, itemLabel]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const worksList = selectedWorks.length > 0 ? selectedWorks.join(', ') : 'All Fabrication';

    const formattedMessage = language === 'or'
      ? `*କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ - କାର୍ଯ୍ୟ ଆବଶ୍ୟକତା*\n*ନାମ:* ${name || 'ଦିଆଯାଇନାହିଁ'}\n*ଫୋନ୍:* ${phone || 'ଦିଆଯାଇନାହିଁ'}\n*ଗ୍ରାମ/ସହର:* ${location || 'ବାଣପୁର'}\n*ଆବଶ୍ୟକ କାମ:* ${worksList}\n*ବିବରଣୀ/ମାପ:* ${details || 'ଦୟାକରି ସାଇଟ୍ ଭିଜିଟ୍ କରି ଦର ଜଣାନ୍ତୁ।'}`
      : `*Krushna Fabrication - Work Requirement*\n*Name:* ${name || 'Not provided'}\n*Phone:* ${phone || 'Not provided'}\n*Location:* ${location || 'Banapur'}\n*Works Needed:* ${worksList}\n*Details:* ${details || 'Please visit site or share estimate.'}`;

    window.open(getWhatsAppLink(formattedMessage), '_blank');
  };

  return (
    <section id="requirement" className="py-20 lg:py-28 bg-cardDark-900 relative border-b border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold mb-3">
            <Award className="w-3.5 h-3.5 text-spark-gold" />
            <span>{t.requirementForm.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            {t.requirementForm.heading}
          </h2>
          <p className="text-sm text-slate-300 font-normal leading-relaxed">
            {t.requirementForm.subheading}
          </p>
        </div>

        {/* Form Container with Rich Metallic Card Panel */}
        <div className="card-metallic-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Contract Tag */}
          <div className="mb-6 p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-between text-xs font-bold text-amber-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-spark-gold" />
              <span>{t.requirementForm.contractBadge}</span>
            </span>
            <span className="font-mono text-white hidden sm:inline">Mob: 8260750546</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Checkbox Selection of Works */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-amber-300 mb-3">
                {t.requirementForm.selectWorkLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableWorks.map((item) => {
                  const displayLabel = language === 'or' ? item.labelOdia : item.label;
                  const isChecked = selectedWorks.includes(displayLabel);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleWork(item)}
                      className={`px-4 py-3 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${
                        isChecked
                          ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-sm'
                          : 'bg-cardDark-950/80 border-slate-800 text-slate-300 hover:bg-cardDark-800'
                      }`}
                    >
                      <span>{displayLabel}</span>
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-spark-gold shrink-0 ml-2" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Name, Phone & Location Grid */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.requirementForm.nameLabel} <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.requirementForm.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.requirementForm.phoneLabel} <span className="text-amber-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.requirementForm.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  {t.requirementForm.locationLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.requirementForm.locationPlaceholder}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Step 3: Details & Dimensions */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                {t.requirementForm.detailsLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.requirementForm.detailsPlaceholder}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 resize-none"
              ></textarea>
            </div>

            {/* Direct WhatsApp Forward Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{t.requirementForm.submitBtn}</span>
            </button>

            {/* Clarification Note */}
            <p className="text-center text-xs text-amber-300/80 font-medium">
              {t.requirementForm.note}
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}
