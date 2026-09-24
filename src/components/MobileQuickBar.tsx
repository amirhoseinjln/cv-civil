import React, { useState, useEffect } from 'react';
import { Phone, Briefcase, PhoneCall, ArrowUp } from 'lucide-react';
import { organicScrollTo } from '../utils/smoothScroll';

export const MobileQuickBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
      <div className="glass-panel rounded-2xl p-2 shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(14,165,233,0.18)] border border-[#0EA5E9]/35 flex items-center justify-between gap-2">
        {/* Quick Direct Call to 09155070427 */}
        <a
          href="tel:09155070427"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] text-white text-xs font-black shadow-md shadow-[#0EA5E9]/25 cursor-pointer whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>تماس: <bdi dir="ltr" className="ltr-num font-black">09155070427</bdi></span>
        </a>

        {/* Quick Projects Jump */}
        <button
          onClick={() => organicScrollTo('#projects', { offset: 84 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#0EA5E9]/45 text-[#FAF8F5] text-xs flex items-center justify-center cursor-pointer"
          title="پروژه‌ها"
          aria-label="آرشیو پروژه‌ها"
        >
          <Briefcase className="w-4 h-4 text-[#38BDF8]" />
        </button>

        {/* Quick Contact Section Jump */}
        <button
          onClick={() => organicScrollTo('#contact', { offset: 84 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#0EA5E9]/45 text-[#FAF8F5] text-xs flex items-center justify-center cursor-pointer"
          title="بخش تماس"
          aria-label="بخش تماس"
        >
          <PhoneCall className="w-4 h-4 text-[#38BDF8]" />
        </button>

        {/* Quick Top Jump */}
        <button
          onClick={() => organicScrollTo(document.body, { offset: 0 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#0EA5E9]/45 text-[#8C95A8] hover:text-white text-xs flex items-center justify-center cursor-pointer"
          title="ابتدای صفحه"
          aria-label="بازگشت به بالا"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
