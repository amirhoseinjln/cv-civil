import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Phone, Copy, Check, MessageSquare, MapPin, Clock, Mail } from 'lucide-react';

interface ContactSectionProps {
  lang: 'fa' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const phoneNumber = PERSONAL_INFO.phone;

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-[#090A0E]/70 backdrop-blur-[2px] border-b border-[#141C2A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="editorial-eyebrow">
            {lang === 'fa' ? 'ارتباط مستقیم و استعلام همکاری' : 'Direct Inquiries'}
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' 
              ? 'کانال ارتباط مستقیم با مهندس محمدرضا ناصری' 
              : 'Direct Communication Channel'}
          </h2>
          <p className="editorial-lead text-center max-w-xl mx-auto">
            {lang === 'fa'
              ? 'جهت مشاوره پروژه‌های کلان درمانی، ساخت ابنیه فاخر، همکاری‌های استودیویی با FUTURE VIEW و امور پیمانکاری شرکت عمران تهویه بارثاوا.'
              : 'Direct executive inquiries regarding healthcare mega-projects, luxury residential construction, and engineering contracting.'}
          </p>
        </div>

        {/* Central Direct Contact Hero Card with Glassmorphism */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl glass-panel p-6 sm:p-10 space-y-6 sm:space-y-8 relative overflow-hidden border border-[#0EA5E9]/35 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_36px_rgba(14,165,233,0.14)]">
            
            {/* Top Laser Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />

            {/* Header Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-[#1E293B]">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#FAF8F5]">
                  تماس مستقیم کارگاهی، سازمانی و اداری
                </h3>
                <span className="text-xs text-[#8C95A8]">
                  پاسخگویی سریع به کارفرمایان، مهندسین مشاور و سازمان‌ها
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-sub-panel text-xs text-[#FAF8F5] self-start sm:self-auto border border-[#0EA5E9]/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>پاسخگویی مستقیم</span>
              </div>
            </div>

            {/* Main Phone Display Block */}
            <div className="text-center py-4 sm:py-6 space-y-3 bg-[#0B0F17]/60 rounded-xl border border-[#1C2638] p-4">
              <span className="cad-coordinate block text-[#38BDF8]">
                DIRECT MOBILE LINE
              </span>

              {/* Robust LTR-isolated display guaranteeing 09155070427 */}
              <div className="flex items-center justify-center">
                <bdi
                  dir="ltr"
                  className="text-3xl sm:text-5xl font-black text-[#FAF8F5] tracking-widest ltr-num select-all"
                >
                  09155070427
                </bdi>
              </div>

              <p className="text-xs sm:text-sm text-[#9FA8B8] max-w-md mx-auto">
                شماره همراه اختصاصی جهت تماس صوتی و هماهنگی‌های کارگاهی
              </p>

              {/* Action Buttons for Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                {/* Primary Call */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] hover:from-[#0EA5E9] hover:to-[#38BDF8] text-white font-black text-xs sm:text-sm transition-all shadow-lg shadow-[#0EA5E9]/30 hover:shadow-[#0EA5E9]/50 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>تماس با <bdi dir="ltr" className="font-sans font-black">09155070427</bdi></span>
                </a>

                {/* Copy / SMS */}
                <div className="flex items-center gap-2">
                  <a
                    href={`sms:${phoneNumber}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl glass-sub-panel hover:border-[#0EA5E9]/50 text-[#FAF8F5] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
                    <span>ارسال پیامک</span>
                  </a>

                  <button
                    onClick={() => copyToClipboard(phoneNumber, 'phone')}
                    className="p-3.5 rounded-xl glass-sub-panel hover:border-[#0EA5E9]/50 text-[#9FA8B8] hover:text-white transition-colors cursor-pointer"
                    title="کپی شماره تماس"
                    aria-label="کپی شماره تماس"
                  >
                    {copiedPhone ? (
                      <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                        <Check className="w-4 h-4" />
                        کپی شد
                      </span>
                    ) : (
                      <Copy className="w-4 h-4 text-[#38BDF8]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Official Work Emails Block */}
            <div className="py-4 sm:py-5 space-y-4 bg-[#0B0F17]/60 rounded-xl border border-[#1C2638] p-4 sm:p-5">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#38BDF8]">
                <Mail className="w-3.5 h-3.5" />
                <span className="cad-coordinate">OFFICIAL WORK EMAILS</span>
              </div>

              <p className="text-xs sm:text-sm text-[#9FA8B8] max-w-md mx-auto text-center">
                جهت ارسال اسناد فنی، مناقصات، مکاتبات رسمی و نقشه‌های اجرایی
              </p>

              <div className="space-y-2.5 pt-1">
                {PERSONAL_INFO.emails.map((email) => (
                  <div
                    key={email}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:px-4 rounded-xl glass-sub-panel border border-[#1E293B] hover:border-[#0EA5E9]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                      <a
                        href={`mailto:${email}`}
                        dir="ltr"
                        className="text-xs sm:text-sm font-bold text-[#FAF8F5] hover:text-[#38BDF8] tracking-wide font-mono transition-colors truncate"
                      >
                        {email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <a
                        href={`mailto:${email}`}
                        className="px-3 py-1.5 rounded-lg bg-[#0284C7]/20 hover:bg-[#0284C7]/40 text-[#38BDF8] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>ارسال ایمیل</span>
                      </a>

                      <button
                        onClick={() => copyToClipboard(email, 'email')}
                        className="p-1.5 px-2.5 rounded-lg glass-sub-panel hover:border-[#0EA5E9]/50 text-[#9FA8B8] hover:text-white text-xs transition-colors flex items-center gap-1 cursor-pointer"
                        title="کپی آدرس ایمیل"
                      >
                        {copiedEmail === email ? (
                          <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                            <Check className="w-3.5 h-3.5" />
                            کپی شد
                          </span>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span className="text-[11px]">کپی</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Details Footer */}
            <div className="pt-4 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C95A8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>مشهد مقدس، خراسان رضوی</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>ساعات پاسخگویی: شنبه تا پنجشنبه (۸ الی ۲۰)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
