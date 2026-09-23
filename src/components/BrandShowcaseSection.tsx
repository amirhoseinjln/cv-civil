import React from 'react';
import { FutureViewLogo } from './FutureViewLogo';
import { BRAND_INFO } from '../data/resumeData';
import { Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { organicScrollTo } from '../utils/smoothScroll';

interface BrandShowcaseProps {
  lang: 'fa' | 'en';
}

export const BrandShowcaseSection: React.FC<BrandShowcaseProps> = ({ lang }) => {
  return (
    <section id="brands" className="py-12 sm:py-20 lg:py-24 bg-[#0A0D12]/70 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="editorial-eyebrow">
            {lang === 'fa' ? 'ساختار برندها و فعالیت' : 'Brand Identities & Divisions'}
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' 
              ? 'دو بستر تخصصی در معماری لوکس و پیمانکاری عمومی' 
              : 'Architectural Atelier & Turnkey Contracting'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'فعالیت‌های مهندسی تحت دو عنوان سازمان‌یافته به انجام می‌رسد: استودیوی معماری FUTURE VIEW برای پروژه‌های فاخر مسکونی و مذهبی، و شرکت عمران تهویه بارثاوا برای قراردادهای پیمانکاری ابنیه و تأسیسات.'
              : 'Our operational practice spans two dedicated entities: FUTURE VIEW studio for bespoke residential and sacred architecture, and Omran Tahvieh Barthawa for turnkey public contracting.'}
          </p>
        </div>

        {/* 2 Main Columns with Refined Glassmorphism & Border Glows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Brand 1: FUTURE VIEW */}
          <div className="rounded-xl glass-panel-interactive p-5 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#242E40]">
                <FutureViewLogo variant="horizontal" size="sm" theme="bronze" />
                <span className="text-[10px] sm:text-xs font-mono text-[#EA845A] glass-sub-panel px-2.5 py-1 rounded">
                  EST. ATELIER
                </span>
              </div>

              {/* Slogan & Intro */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-[#EA845A] tracking-wider uppercase">
                  {BRAND_INFO.futureView.slogan}
                </div>
                <div className="editorial-h3">
                  {BRAND_INFO.futureView.sloganFa}
                </div>
                <p className="text-xs text-[#9AA3B5] leading-relaxed text-justify pt-1">
                  {BRAND_INFO.futureView.description}
                </p>
              </div>

              {/* Notable Projects under FUTURE VIEW */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold text-[#E0E6F0]">
                  پروژه‌های شاخص تحت برند FUTURE VIEW:
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg glass-sub-panel flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#EA845A] mt-0.5">۰۱.</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#EDE8DF]">پروژه هتل باب‌الجواد (ع) مشهد</div>
                      <div className="text-[11px] text-[#8C95A8]">چهارراه خسروی · نازک‌کاری تخصصی، نماسازی و روف‌گاردن (شرکت ساختمانی تابیران)</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg glass-sub-panel flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#EA845A] mt-0.5">۰۲.</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#EDE8DF]">رواق متبرکه حضرت امیرالمؤمنین (ع) حرم مطهر رضوی</div>
                      <div className="text-[11px] text-[#8C95A8]">حرم مطهر · نازک‌کاری فاخر، طاق‌های قوسی و سنگ‌کاری مرمر با شرکت مهندسی کیسون</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg glass-sub-panel flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#EA845A] mt-0.5">۰۳.</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#EDE8DF]">مجتمع‌های مسکونی ۷ طبقه امامت ۲۲ و ۷۰</div>
                      <div className="text-[11px] text-[#8C95A8]">مشهد، آزادشهر · طراحی سازه و اجرای صفر تا صد از گودبرداری تا کلیدتحویل</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-3 border-t border-[#242E40] flex items-center justify-between text-xs">
              <span className="text-[#8C95A8]">طراحی و ساخت سفارشی</span>
              <button
                onClick={() => organicScrollTo('#projects', { offset: 84 })}
                className="inline-flex items-center gap-1 text-[#EA845A] hover:underline font-medium cursor-pointer"
              >
                <span>مشاهده در آرشیو</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Brand 2: عمران تهویه بارثاوا */}
          <div className="rounded-xl glass-panel-interactive p-5 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#242E40]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg glass-sub-panel flex items-center justify-center text-[#DE7247]">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#EDE8DF]">عمران تهویه بارثاوا</h3>
                    <span className="text-[9px] font-mono text-[#7E889B]">CONTRACTING DIVISION</span>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-[#8C95A8] glass-sub-panel px-2.5 py-1 rounded">
                  CONTRACTOR
                </span>
              </div>

              {/* Intro */}
              <div className="space-y-1.5">
                <div className="editorial-h3">
                  پیمانکاری تخصصی ابنیه، تأسیسات مکانیکی و محوطه‌سازی شهری
                </div>
                <p className="text-xs text-[#9AA3B5] leading-relaxed text-justify">
                  {BRAND_INFO.barthaVa.description}
                </p>
              </div>

              {/* Notable Projects under BarthaVa */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold text-[#E0E6F0]">
                  قراردادهای شاخص اجرایی شرکت عمران تهویه بارثاوا:
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg glass-sub-panel flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#DE7247] mt-0.5">۰۱.</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#EDE8DF]">پیاده‌رو گذر تشرف زوار حرم مطهر رضوی</div>
                      <div className="text-[11px] text-[#8C95A8]">۱۵,۰۰۰ مترمربع سنگفرش گرانیت ضخیم، زیرسازی مسلح و جدول‌گذاری مسیرهای تردد زائران</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg glass-sub-panel flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#DE7247] mt-0.5">۰۲.</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#EDE8DF]">مرکز تشخیص و درمان سرطان بیمارستان امام رضا (ع)</div>
                      <div className="text-[11px] text-[#8C95A8]">۲,۰۰۰ مترمربع زیربنا · احداث کامل ابنیه اسکلت فلزی، اتاق‌های شیمی‌درمانی و تأسیسات</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Credential */}
              <div className="p-3 rounded-lg glass-sub-panel flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#DE7247] shrink-0" />
                <span className="text-xs text-[#C8D1DF]">
                  صلاحیت رسمی پیمانکاری ابنیه و تأسیسات مطابق ضوابط سازمان برنامه و بودجه
                </span>
              </div>

            </div>

            <div className="pt-3 border-t border-[#242E40] flex items-center justify-between text-xs">
              <span className="text-[#8C95A8]">پروژه‌های دولتی و عمومی</span>
              <button
                onClick={() => organicScrollTo('#projects', { offset: 84 })}
                className="inline-flex items-center gap-1 text-[#EA845A] hover:underline font-medium cursor-pointer"
              >
                <span>مشاهده در آرشیو</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
