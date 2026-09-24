import React from 'react';
import { FutureViewLogo } from './FutureViewLogo';
import { ArrowUp, ShieldCheck, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { organicScrollTo } from '../utils/smoothScroll';

interface FooterProps {
  lang: 'fa' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    organicScrollTo(document.body, { offset: 0 });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    organicScrollTo(href, { offset: 84 });
  };

  return (
    <footer className="bg-[#05070A]/92 backdrop-blur-md border-t border-[#141C2A] text-[#8C95A8] py-10 sm:py-14 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#141C2A]">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <FutureViewLogo variant="horizontal" size="sm" theme="bronze" />
            <div className="sm:border-r sm:border-[#1E293B] sm:pr-4 sm:mr-2">
              <span className="text-xs text-[#FAF8F5] font-bold">
                {lang === 'fa' ? 'محمدرضا ناصری — مهندس عمران و مدیر پروژه‌های درمانی' : 'Mohammad Reza Naseri · Civil Engineer'}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#9FA8B8]">
            <a href="#profile" onClick={(e) => handleLinkClick(e, '#profile')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">سوابق</a>
            <a href="#brands" onClick={(e) => handleLinkClick(e, '#brands')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">استودیو و برندها</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">آرشیو پروژه‌ها</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">مسئولیت‌ها</a>
            <a href="#certificates" onClick={(e) => handleLinkClick(e, '#certificates')} className="hover:text-[#38BDF8] transition-colors cursor-pointer">گواهینامه‌ها</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-[#38BDF8] hover:underline font-bold transition-colors cursor-pointer">
              ارتباط مستقیم
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 sm:px-3 sm:py-2 rounded-lg glass-sub-panel hover:text-white transition-colors flex items-center gap-1.5 text-xs cursor-pointer border border-[#0EA5E9]/20"
            aria-label="بازگشت به ابتدای صفحه"
          >
            <span>ابتدای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>
        </div>

        {/* Quick Contact Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#9AA3B5] pb-2">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[#6B768C]">ایمیل ارتباط کاری:</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#38BDF8] font-mono text-[#DCE2ED] transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="text-[#6B768C]">تلفن همراه:</span>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#38BDF8] text-[#DCE2ED] transition-colors">
              <bdi dir="ltr" className="ltr-num">{PERSONAL_INFO.phone}</bdi>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B768C] text-center sm:text-right">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
            <span>
              {lang === 'fa'
                ? 'کارمند رسمی قطعی وزارت بهداشت، درمان و آموزش پزشکی | عضو سازمان نظام مهندسی ساختمان کشور'
                : 'Permanent Civil Servant at Ministry of Health | Member of Construction Engineering Organization'}
            </span>
          </div>

          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.brandName}. کلیه حقوق محفوظ است.
          </div>
        </div>

      </div>
    </footer>
  );
};
