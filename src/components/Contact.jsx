import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getWhatsAppLink, getPhoneLink } from '../data/businessData';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  User,
  ShieldCheck,
  Flame,
  Award
} from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const { info } = businessData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    itemType: 'Steel Gate (SS / Iron)',
    location: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const formattedMessage = language === 'or'
      ? `*କୃଷ୍ଣ ଫ୍ୟାବ୍ରିକେସନ - ସାଇଟ୍ ଭିଜିଟ୍ / କାମ ଅନୁରୋଧ*\n*ନାମ:* ${formData.name || 'ଦିଆଯାଇନାହିଁ'}\n*ଫୋନ୍:* ${formData.phone || 'ଦିଆଯାଇନାହିଁ'}\n*କାମ:* ${formData.itemType}\n*ଗ୍ରାମ/ଅଞ୍ଚଳ:* ${formData.location || 'ବାଣପୁର'}\n*ବିବରଣୀ:* ${formData.message || 'ଦୟାକରି ସାଇଟ୍ ଭିଜିଟ୍ କରି ଦର ଆଲୋଚନା କରନ୍ତୁ।'}`
      : `*Krushna Fabrication - Site Visit / Work Request*\n*Name:* ${formData.name || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Work Needed:* ${formData.itemType}\n*Location:* ${formData.location || 'Banapur'}\n*Details:* ${formData.message || 'Please arrange site measurement & discussion.'}`;

    window.open(getWhatsAppLink(formattedMessage), '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cardDark-950 industrial-spark-pattern relative border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-spark-gold" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            {t.contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Business Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="card-metallic-panel rounded-3xl p-6 sm:p-8 shadow-card-elevated space-y-6">
              <h3 className="text-xl font-black text-white mb-2">
                {t.contact.shopTitle}
              </h3>

              {/* Owner Profile Row */}
              <div className="flex items-start gap-4 pb-4 border-b border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-spark-gold shrink-0 mt-0.5">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-slate-400">
                    {t.contact.ownerTitle}
                  </div>
                  <div className="text-base sm:text-lg font-black text-white">
                    {language === 'or' ? info.ownerNameOdia : info.ownerName}
                  </div>
                  <div className="text-xs text-spark-gold font-bold">
                    {language === 'or' ? info.ownerRoleOdia : info.ownerRole}
                  </div>
                </div>
              </div>

              {/* Primary Phone Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-slate-400">
                    {t.contact.phoneTitle}
                  </div>
                  <a
                    href={getPhoneLink(info.phoneRaw)}
                    className="text-base sm:text-lg font-black text-white hover:text-spark-gold transition-colors block"
                  >
                    {info.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-slate-400">
                    WhatsApp (Sarat Karan)
                  </div>
                  <a
                    href={getWhatsAppLink(t.whatsappMsgs.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors block"
                  >
                    {info.whatsapp}
                  </a>
                </div>
              </div>

              {/* Location Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-slate-400">
                    {t.contact.addressTitle}
                  </div>
                  <p className="text-sm text-white font-bold">
                    {language === 'or' ? info.locationOdia : info.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {info.addressFull}
                  </p>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={getPhoneLink(info.phoneRaw)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cardDark-950 font-black text-xs sm:text-sm shadow-spark-btn transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{t.contact.callNowBtn}</span>
                </a>

                <a
                  href={getWhatsAppLink(t.whatsappMsgs.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.contact.whatsappBtn}</span>
                </a>
              </div>

            </div>

            {/* Business Hours Card */}
            <div className="card-metallic-panel rounded-3xl p-6 sm:p-7 shadow-card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-spark-gold" />
                <h4 className="text-base font-bold text-white">
                  {t.contact.hoursTitle}
                </h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="font-bold text-white">
                    {language === 'or' ? info.businessHours.daysOdia : info.businessHours.days}
                  </span>
                </div>
                <div className="flex justify-between text-spark-gold font-bold pt-1">
                  <span>
                    {language === 'or' ? info.businessHours.statusOdia : info.businessHours.status}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Site Visit / Callback Request Form */}
          <div className="lg:col-span-7">
            <div className="card-metallic-panel rounded-3xl p-7 sm:p-10 shadow-card-elevated relative">
              
              <h3 className="text-2xl font-black text-white mb-1">
                {language === 'or' ? "ସାଇଟ୍ ମାପ ଓ କଣ୍ଟ୍ରାକ୍ଟ ଅନୁରୋଧ" : "Request Free Site Visit & Measurement"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
                {language === 'or' ? "ବିବରଣୀ ପୂରଣ କରନ୍ତୁ, ଶରତ କରଣ ନିଜେ ଆପଣଙ୍କୁ ଯୋଗାଯୋଗ କରିବେ।" : "Fill in your details and Sarat Karan will contact you directly."}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-white">
                    {language === 'or' ? `ଧନ୍ୟବାଦ, ${formData.name || 'ଗ୍ରାହକ'}!` : `Thank You, ${formData.name || 'Customer'}!`}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    {language === 'or' 
                      ? `'${formData.itemType}' କାମ ପାଇଁ ଆପଣଙ୍କ ଅନୁରୋଧ ପ୍ରସ୍ତୁତ ହୋଇଛି ।`
                      : `Your request for '${formData.itemType}' has been generated.`
                    }
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{language === 'or' ? "ଶରତ କରଣଙ୍କୁ ହ୍ୱାଟସ୍ଆପ୍‌ରେ ପଠାନ୍ତୁ" : "Forward to Sarat Karan on WhatsApp"}</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phone: '', itemType: 'Steel Gate (SS / Iron)', location: '', message: '' });
                      }}
                      className="px-5 py-3.5 rounded-xl bg-cardDark-850 hover:bg-cardDark-800 text-slate-200 font-bold text-sm transition-all border border-slate-700"
                    >
                      {language === 'or' ? "ଅନ୍ୟ ଏକ ଅନୁରୋଧ କରନ୍ତୁ" : "Send Another Inquiry"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.requirementForm.nameLabel} <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t.requirementForm.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 transition-all"
                    />
                  </div>

                  {/* Phone & Location Field Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t.requirementForm.phoneLabel} <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t.requirementForm.phonePlaceholder}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t.requirementForm.locationLabel}
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder={t.requirementForm.locationPlaceholder}
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Item Type Selector */}
                  <div>
                    <label htmlFor="itemType" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {language === 'or' ? "ଆବଶ୍ୟକ କାମ" : "Work Needed"} <span className="text-amber-500">*</span>
                    </label>
                    <select
                      id="itemType"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-amber-500 transition-all"
                    >
                      <option value="Steel Gate (SS / Iron)">Steel Gate (SS 304 / Iron) / ଷ୍ଟିଲ୍ ଗେଟ୍</option>
                      <option value="Window Grill & Balcony Safety">Window Grill & Balcony / ଝରକା ଗ୍ରୀଲ୍</option>
                      <option value="UPVC Doors & Windows">UPVC Doors & Windows / ୟୁପିଭିସି କବାଟ ଝରକା</option>
                      <option value="Waterproof Fiber Doors">Waterproof Fiber Doors / ଫାଇବର କବାଟ</option>
                      <option value="Aluminium Sliding Windows">Aluminium Windows / ଆଲୁମିନିୟମ୍ ଝରକା</option>
                      <option value="Upstairs Staircase Railing">Upstairs Railing / ସିଡ଼ି ରେଲିଂ</option>
                      <option value="WPVC & Plastic Design Doors">WPVC & Plastic Design Doors / ଡବ୍ଲୁପିଭିସି</option>
                      <option value="Full Building Fabrication Contract">Full House Contract / ସମ୍ପୂର୍ଣ୍ଣ ଘର କଣ୍ଟ୍ରାକ୍ଟ</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t.requirementForm.detailsLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder={t.requirementForm.detailsPlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cardDark-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-cardDark-950 shadow-spark-btn transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>{language === 'or' ? "ଅନୁରୋଧ ପଠାନ୍ତୁ" : "Submit Request"}</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <p className="text-center text-xs text-amber-300/80 pt-1 font-medium">
                    {language === 'or' 
                      ? "ଶରତ କରଣଙ୍କ ଦ୍ୱାରା ପ୍ରତ୍ୟକ୍ଷ ସହାୟତା । କୌଣସି ମଧ୍ୟସ୍ଥି ନାହାନ୍ତି ।" 
                      : "Direct assistance from owner Sarat Karan. No middleman."
                    }
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
