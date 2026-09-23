import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { FutureViewLogo } from './FutureViewLogo';
import { ArrowDown, PhoneCall, ShieldCheck, Compass, ChevronLeft } from 'lucide-react';
import { organicScrollTo } from '../utils/smoothScroll';

interface HeroSectionProps {
  onScrollToContact: () => void;
  lang: 'fa' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContact, lang }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32 bg-[#0E1117]/60 backdrop-blur-[2px] border-b border-[#1E2533] overflow-hidden">
      
      {/* Avant-Garde Crop Marks (CAD Registration Corners) */}
      <div className="hidden sm:block absolute top-6 right-8 cad-coordinate select-none pointer-events-none">
        ┌ ELEV. 0.00 / REF. N-36°17′40″
      </div>
      <div className="hidden sm:block absolute top-6 left-8 cad-coordinate select-none pointer-events-none">
        FUTURE VIEW ATELIER ┐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Top Micro-Header */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-lg glass-sub-panel text-xs text-[#9FA8B8]">
              <span className="font-mono text-[#EA845A]">01/OVERVIEW</span>
              <span className="text-[#3A455C]">·</span>
              <span className="text-[#E0E6F0]">کارشناس ارشد پروژه‌های عمرانی و درمانی</span>
            </div>

            {/* Monumental Editorial Headline */}
            <div className="space-y-3">
              <h1 className="editorial-h1 leading-[1.2] sm:leading-[1.14]">
                {lang === 'fa' ? (
                  <>
                    مدیریت و نظارت بر <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#F5D4C4] via-[#EA845A] to-[#D46537]">
                      پروژه‌های کلان درمانی
                    </span> <br />
                    و ابنیه فاخر ساختمانی
                  </>
                ) : (
                  <>
                    Healthcare Megaprojects & <br />
                    <span className="text-[#EA845A]">Bespoke Architecture</span>
                  </>
                )}
              </h1>

              {/* Bold Name Statement */}
              <div className="text-lg sm:text-xl font-extrabold text-[#E5DFD3] flex items-center gap-3 pt-1">
                <span className="text-white">محمدرضا ناصری</span>
                <span className="text-[#4F5B73]">/</span>
                <span className="text-xs sm:text-sm font-normal text-[#9AA3B5]">
                  ۱۶ سال سابقه خدمت تخصصی و اجرایی
                </span>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="editorial-lead text-justify max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Official Credentials Banner */}
            <div className="p-4 rounded-xl glass-panel space-y-2.5">
              <div className="flex items-start sm:items-center gap-2.5 text-xs text-[#D8DFEB]">
                <ShieldCheck className="w-4 h-4 text-[#DE7247] shrink-0 mt-0.5 sm:mt-0" />
                <span>{PERSONAL_INFO.officialStatus}</span>
              </div>
              <div className="flex items-start sm:items-center gap-2.5 text-xs text-[#D8DFEB]">
                <Compass className="w-4 h-4 text-[#DE7247] shrink-0 mt-0.5 sm:mt-0" />
                <span>{PERSONAL_INFO.engineeringOrgStatus}</span>
              </div>
            </div>

            {/* Action Buttons with Organic Smooth Scroll */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => organicScrollTo('#projects', { offset: 84 })}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#DE7247] hover:bg-[#EA845A] rounded-xl transition-all shadow-lg shadow-[#DE7247]/25 hover:shadow-[#DE7247]/40 cursor-pointer"
              >
                <span>مشاهده آرشیو پروژه‌ها</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => organicScrollTo('#contact', { offset: 84 })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#D4DCE8] hover:text-white glass-sub-panel hover:border-[#EA845A]/40 rounded-xl transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#DE7247]" />
                <span>تماس و ارتباط مستقیم</span>
              </button>
            </div>

          </div>

          {/* Right Column: Architectural Dossier & Core Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* FUTURE VIEW Atelier Highlight */}
            <div className="p-5 sm:p-6 rounded-xl glass-panel-interactive space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#242E40]">
                <FutureViewLogo variant="horizontal" size="sm" theme="bronze" />
                <span className="cad-coordinate uppercase">
                  ATELIER DE DESIGN
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="editorial-h3 text-[#EA845A]">
                  طراحی و ساخت ابنیه فاخر، هتلینگ و معماری مذهبی
                </div>
                <p className="text-xs text-[#9AA3B5] leading-relaxed text-justify">
                  پروژه هتل باب‌الجواد (ع)، نازک‌کاری رواق متبرکه امیرالمؤمنین (ع) در حرم رضوی با شرکت کیسون، مجتمع‌های مسکونی ۷ طبقه امامت ۲۲ و ۷۰.
                </p>
              </div>

              <button
                onClick={() => organicScrollTo('#brands', { offset: 84 })}
                className="text-[11px] text-[#EA845A] hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <span>مشاهده هویت برندها</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 Physical Metrics */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="p-3 sm:p-4 rounded-xl glass-panel-interactive text-center space-y-1">
                <div className="text-lg sm:text-2xl font-black text-[#EA845A]">
                  <bdi dir="ltr" className="ltr-num">۱۶+</bdi>
                </div>
                <div className="text-[10px] sm:text-xs text-[#8C95A8]">سال سابقه اجرایی</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl glass-panel-interactive text-center space-y-1">
                <div className="text-lg sm:text-2xl font-black text-[#EA845A]">
                  <bdi dir="ltr" className="ltr-num">۱۶۰K</bdi>
                </div>
                <div className="text-[10px] sm:text-xs text-[#8C95A8]">مترمربع نظارت</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl glass-panel-interactive text-center space-y-1">
                <div className="text-lg sm:text-2xl font-black text-[#EA845A]">
                  <bdi dir="ltr" className="ltr-num">۲۸+</bdi>
                </div>
                <div className="text-[10px] sm:text-xs text-[#8C95A8]">پروژه کلان</div>
              </div>
            </div>

            {/* Healthcare Highlight: 610-bed Imam Reza */}
            <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#EDE8DF]">بیمارستان ۶۱۰ تختخوابی امام رضا (ع)</span>
                <span className="text-[11px] text-[#EA845A]">
                  <bdi dir="ltr" className="ltr-num">۵۷,۰۰۰ m²</bdi>
                </span>
              </div>
              <p className="text-xs text-[#8C95A8] leading-relaxed">
                مدیریت پروژه و نظارت عالیه بر سازه سنگین ضدزلزله، اتاق‌های عمل فوق‌تخصصی، بونکر رادیوتراپی الکتا و تأسیسات هایژنیک.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
