import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { FutureViewLogo } from './FutureViewLogo';
import { Phone, Copy, Check, MessageSquare, MapPin, Clock } from 'lucide-react';

interface ContactSectionProps {
  lang: 'fa' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const phoneNumber = PERSONAL_INFO.phone; // '09155070427'

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-[#0E1117]/60 backdrop-blur-[2px] border-t border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="editorial-eyebrow">
            {lang === 'fa' ? 'ارتباط مستقیم و فوری' : 'Direct Contact'}
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'ارتباط مستقیم با مهندس محمدرضا ناصری' : 'Direct Executive Connection'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'جهت مشاوره تخصصی در زمینه پروژه‌های درمانی و بیمارستانی، نظارت عالیه، احداث ابنیه فاخر و قراردادهای پیمانکاری، مستقیماً از طریق شماره تماس همراه در ارتباط باشید.'
              : 'Direct hotline for executive civil engineering consultations, hospital projects, and bespoke residential works.'}
          </p>
        </div>

        {/* Central Bespoke Executive Phone Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl glass-panel-interactive p-6 sm:p-10 space-y-8 relative overflow-hidden">
            
            {/* Subtle Top Ambient Lighting */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#DE7247] to-transparent" />

            {/* Top Identity Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#242E40]">
              <div className="flex items-center gap-3.5">
                <FutureViewLogo variant="icon" size="sm" theme="bronze" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F8F6F0]">
                    محمدرضا ناصری
                  </h3>
                  <p className="text-xs text-[#9AA3B5]">
                    کارشناس ارشد پروژه‌های عمرانی و بیمارستانی
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-sub-panel text-xs text-[#DCE2ED] self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>پاسخگویی مستقیم</span>
              </div>
            </div>

            {/* Main Phone Display Block */}
            <div className="text-center py-4 sm:py-6 space-y-3">
              <span className="cad-coordinate block">
                DIRECT MOBILE LINE
              </span>

              {/* Robust LTR-isolated display guaranteeing 09155070427 */}
              <div className="flex items-center justify-center">
                <bdi
                  dir="ltr"
                  className="text-3xl sm:text-5xl font-black text-[#F8F6F0] tracking-widest ltr-num select-all"
                >
                  09155070427
                </bdi>
              </div>

              <p className="text-xs sm:text-sm text-[#9AA3B5] max-w-md mx-auto">
                شماره همراه اختصاصی جهت تماس صوتی و هماهنگی‌های کارگاهی
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {/* Primary Call */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#DE7247] hover:bg-[#EA845A] text-white font-bold text-sm transition-all shadow-lg shadow-[#DE7247]/25 hover:shadow-[#DE7247]/40 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>تماس با <bdi dir="ltr" className="font-sans font-bold">09155070427</bdi></span>
              </a>

              {/* Copy / SMS */}
              <div className="flex items-center gap-2">
                <a
                  href={`sms:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-xl glass-sub-panel hover:border-[#EA845A]/50 text-[#DCE2ED] hover:text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#DE7247]" />
                  <span>ارسال پیامک</span>
                </a>

                <button
                  onClick={() => copyToClipboard(phoneNumber)}
                  className="p-4 rounded-xl glass-sub-panel hover:border-[#EA845A]/50 text-[#9AA3B5] hover:text-white transition-colors cursor-pointer"
                  title="کپی شماره تماس"
                  aria-label="کپی شماره تماس"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                      <Check className="w-4 h-4" />
                      کپی شد
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Micro Details Footer */}
            <div className="pt-6 border-t border-[#242E40] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C95A8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DE7247]" />
                <span>مشهد مقدس، خراسان رضوی</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#DE7247]" />
                <span>ساعات پاسخگویی: شنبه تا پنجشنبه (۸ الی ۲۰)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
