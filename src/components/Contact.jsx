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
  ShieldCheck
} from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const { info } = businessData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    itemType: 'Stainless Steel (SS) Main Gate',
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
      ? `*କରଣ ଷ୍ଟିଲ୍ ୱାର୍କସ - ସାଇଟ୍ ଭିଜିଟ୍ / କାମ ଅନୁରୋଧ*\n*ନାମ:* ${formData.name || 'ଦିଆଯାଇନାହିଁ'}\n*ଫୋନ୍:* ${formData.phone || 'ଦିଆଯାଇନାହିଁ'}\n*ସାମଗ୍ରୀ:* ${formData.itemType}\n*ଗ୍ରାମ/ଅଞ୍ଚଳ:* ${formData.location || 'ବାଣପୁର'}\n*ବିବରଣୀ:* ${formData.message || 'ମାପ ନେବା ଓ ଦର ଆଲୋଚନା ପାଇଁ ଅନୁରୋଧ।'}`
      : `*Karan Steel Works - Site Visit / Work Request*\n*Name:* ${formData.name || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Item Needed:* ${formData.itemType}\n*Location/Area:* ${formData.location || 'Banapur'}\n*Details:* ${formData.message || 'I would like to request measurement & discussion.'}`;

    window.open(getWhatsAppLink(formattedMessage), '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative border-b border-steel-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-brand-blue text-xs uppercase tracking-wider font-bold mb-3">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-900 tracking-tight mb-3">
            {t.contact.heading}
          </h2>
          <p className="text-sm sm:text-base text-steel-600 font-normal">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Business Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-steel-50 rounded-3xl p-6 sm:p-8 border border-steel-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-steel-900 mb-2">
                {t.contact.detailsTitle}
              </h3>

              {/* Owner Profile Row */}
              <div className="flex items-start gap-4 pb-4 border-b border-steel-200">
                <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-steel-500">
                    {t.contact.ownerLabel}
                  </div>
                  <div className="text-base sm:text-lg font-black text-steel-900">
                    {language === 'or' ? info.ownerNameOdia : info.ownerName}
                  </div>
                  <div className="text-xs text-brand-blue font-bold">
                    {language === 'or' ? info.ownerRoleOdia : info.ownerRole}
                  </div>
                </div>
              </div>

              {/* Primary Phone Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-steel-500">
                    {t.contact.phoneLabel}
                  </div>
                  <a
                    href={getPhoneLink(info.phoneRaw)}
                    className="text-base sm:text-lg font-black text-steel-900 hover:text-brand-blue transition-colors block"
                  >
                    {info.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-steel-500">
                    WhatsApp (Sarat Karan)
                  </div>
                  <a
                    href={getWhatsAppLink(t.whatsappMsgs.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-steel-900 hover:text-emerald-600 transition-colors block"
                  >
                    {info.whatsapp}
                  </a>
                </div>
              </div>

              {/* Location Row */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-steel-500">
                    {t.contact.locationLabel}
                  </div>
                  <p className="text-sm text-steel-900 font-bold">
                    {language === 'or' ? info.locationOdia : info.location}
                  </p>
                  <p className="text-xs text-steel-500 mt-0.5">
                    {info.addressFull}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-steel-200 grid grid-cols-2 gap-3">
                <a
                  href={getPhoneLink(info.phoneRaw)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-blueDark text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 8260750546</span>
                </a>

                <a
                  href={getWhatsAppLink(t.whatsappMsgs.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Business Hours Card */}
            <div className="bg-steel-50 rounded-3xl p-6 sm:p-7 border border-steel-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-blue" />
                <h4 className="text-base font-bold text-steel-900">
                  {t.contact.hoursTitle}
                </h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-steel-600">
                <div className="flex justify-between pb-2 border-b border-steel-200">
                  <span className="font-bold text-steel-800">
                    {language === 'or' ? info.businessHours.daysOdia : info.businessHours.days}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold pt-1">
                  <span>
                    {language === 'or' ? info.businessHours.statusOdia : info.businessHours.status}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Site Visit / Callback Form */}
          <div className="lg:col-span-7">
            <div className="bg-steel-50 rounded-3xl p-7 sm:p-10 border border-steel-200 shadow-sm relative">
              
              <h3 className="text-2xl font-black text-steel-900 mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-steel-500 mb-6 font-normal">
                {t.contact.formSubtitle}
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-steel-900">
                    {t.contact.thankYou.replace('{name}', formData.name || 'Customer')}
                  </h4>
                  <p className="text-sm text-steel-600 max-w-md mx-auto">
                    {t.contact.thankYouMsg.replace('{item}', formData.itemType)}
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{t.contact.forwardWhatsapp}</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phone: '', itemType: 'Stainless Steel (SS) Main Gate', location: '', message: '' });
                      }}
                      className="px-5 py-3.5 rounded-xl bg-white hover:bg-steel-100 text-steel-800 font-bold text-sm transition-all border border-steel-200"
                    >
                      {t.contact.anotherInquiry}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                      {t.contact.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-steel-300 text-steel-900 placeholder-steel-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                    />
                  </div>

                  {/* Phone & Location Field Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                        {t.contact.phoneFieldLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={t.contact.phonePlaceholder}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-steel-300 text-steel-900 placeholder-steel-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                        {t.contact.locationFieldLabel}
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder={t.contact.locationFieldPlaceholder}
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-steel-300 text-steel-900 placeholder-steel-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Item Type Selector */}
                  <div>
                    <label htmlFor="itemType" className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                      {t.contact.itemTypeLabel} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="itemType"
                      name="itemType"
                      value={formData.itemType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-steel-300 text-steel-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm"
                    >
                      {t.estimator.types.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-steel-700 mb-1.5">
                      {t.contact.msgLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder={t.contact.msgPlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-steel-300 text-steel-900 placeholder-steel-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base bg-brand-blue hover:bg-brand-blueDark text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>{t.contact.submitBtn}</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <p className="text-center text-xs text-steel-500 pt-1 font-medium">
                    {t.contact.spamNotice}
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
