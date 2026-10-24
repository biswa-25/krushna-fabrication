import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessData, getPhoneLink, getWhatsAppLink } from '../data/businessData';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
  const { t } = useLanguage();
  const { info } = businessData;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-cardDark-950/98 backdrop-blur-xl border-t border-amber-500/30 p-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={getPhoneLink(info.phoneRaw)}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 active:from-amber-400 active:to-orange-400 text-cardDark-950 font-black text-xs shadow-spark-btn transition-colors"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>{t.mobileBar.call}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink(t.whatsappMsgs.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-500 text-white font-black text-xs shadow-md transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>{t.mobileBar.whatsapp}</span>
        </a>

      </div>
    </div>
  );
}
