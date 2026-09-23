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
      <div className="glass-panel rounded-2xl p-2 shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_20px_rgba(222,114,71,0.14)] border border-[#3A4761]/70 flex items-center justify-between gap-2">
        {/* Quick Direct Call to 09155070427 */}
        <a
          href="tel:09155070427"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#DE7247] hover:bg-[#EA845A] text-white text-xs font-bold shadow-md shadow-[#DE7247]/25 cursor-pointer whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>تماس: <bdi dir="ltr" className="ltr-num font-bold">09155070427</bdi></span>
        </a>

        {/* Quick Projects Jump */}
        <button
          onClick={() => organicScrollTo('#projects', { offset: 84 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#EA845A]/40 text-[#DCE2ED] hover:text-white text-xs flex items-center justify-center cursor-pointer"
          title="پروژه‌ها"
          aria-label="آرشیو پروژه‌ها"
        >
          <Briefcase className="w-4 h-4 text-[#DE7247]" />
        </button>

        {/* Quick Contact Section Jump */}
        <button
          onClick={() => organicScrollTo('#contact', { offset: 84 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#EA845A]/40 text-[#DCE2ED] hover:text-white text-xs flex items-center justify-center cursor-pointer"
          title="بخش تماس"
          aria-label="بخش تماس"
        >
          <PhoneCall className="w-4 h-4 text-[#DE7247]" />
        </button>

        {/* Quick Top Jump */}
        <button
          onClick={() => organicScrollTo(document.body, { offset: 0 })}
          className="p-2.5 rounded-xl glass-sub-panel hover:border-[#EA845A]/40 text-[#8C95A8] hover:text-white text-xs flex items-center justify-center cursor-pointer"
          title="ابتدای صفحه"
          aria-label="بازگشت به بالا"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
