import React from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/resumeData';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Compass, 
  Flame, 
  Activity, 
  HardHat, 
  Laptop, 
  CheckCircle, 
  FileCheck2,
} from 'lucide-react';

interface CredentialsAndSkillsProps {
  lang: 'fa' | 'en';
}

export const CredentialsAndSkills: React.FC<CredentialsAndSkillsProps> = ({ lang }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#DE7247]" />;
      case 'Compass': return <Compass className="w-4 h-4 text-[#DE7247]" />;
      case 'AlertTriangle': return <Flame className="w-4 h-4 text-[#DE7247]" />;
      case 'Activity': return <Activity className="w-4 h-4 text-[#DE7247]" />;
      case 'HardHat': return <HardHat className="w-4 h-4 text-[#DE7247]" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-[#DE7247]" />;
      default: return <Award className="w-4 h-4 text-[#DE7247]" />;
    }
  };

  const domainSkills = [
    {
      group: 'حقوق مهندسی و مدیریت پیمان‌های دولتی',
      items: [
        'تسلط بر شرایط عمومی پیمان (نشریه ۴۳۱۱) و بخشنامه‌های نظام فنی و اجرایی کشور',
        'متره و برآورد تفصیلی و تهیه و بررسی صورت‌وضعیت‌های کارکرد و تعدیل آحادبها',
        'بررسی تاخیرات مجاز و غیرمجاز، فسخ، خاتمه و رسیدگی به ادعاها (Claims)',
        'تدوین اسناد مناقصات دولتی و نظارت بر رعایت تشریفات قانونی برگزاری مناقصه'
      ]
    },
    {
      group: 'نظارت عالیه و اجرای سازه‌های سنگین و خاص',
      items: [
        'هدایت اکیپ‌های اجرایی در عملیات خاکی، گودبرداری‌های عمیق و سازه نگهبان',
        'نظارت عالیه بر سازه‌های بتن‌آرمه و اسکلت فلزی بیمارستانی با استاندارد بیمارستان ایمن',
        'طرح اختلاط و اجرای بتن سنگین باریت ضدپرتو در بونکرهای شتاب‌دهنده پرانرژی الکتا',
        'کنترل کیفیت آزمایشگاهی مصالح، آزمایش‌های بتن، میلگرد و بازرسی جوش'
      ]
    },
    {
      group: 'تأسیسات مرکزی و زیربنایی بیمارستانی',
      items: [
        'نظارت بر هوارسان‌های هایژنیک جریان لامینار (Laminar Air Flow) اتاق‌های عمل',
        'مدیریت خطوط لوله‌کشی گازهای طبی، اکسیژن‌سازهای مرکزی و مخازن کرایوژنیک',
        'نگهداشت و راهبری موتورخانه‌های مرکزی، چیلرهای جذبی/تراکمی و دیزل‌ژنراتورها',
        'بهینه‌سازی مصرف انرژی و ارتقای ضوابط ایمنی حریق و آتش‌نشانی در ابنیه درمانی'
      ]
    },
    {
      group: 'معماری، نرم‌افزار و طراحی ساخت سفارشی',
      items: [
        'تسلط بر نرم‌افزار AutoCAD جهت تحلیل و اصلاح نقشه‌های شاپ‌دراوینگ',
        'طراحی پلان‌های تفکیکی مسکونی، هتلینگ و فضاهای زیارتی-مذهبی',
        'مدیریت و اجرای نازک‌کاری‌های لوکس، سنگ‌های اسلب، کناف و روف‌گاردن با FUTURE VIEW',
        'انطباق طراحی‌ها با مقررات ملی ساختمان و استانداردهای وزارت بهداشت'
      ]
    }
  ];

  return (
    <section id="certificates" className="py-12 sm:py-20 lg:py-24 bg-[#0E1117]/60 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="editorial-eyebrow">
            {lang === 'fa' ? 'صلاحیت‌ها و اعتبارسنجی' : 'Credentials & Competencies'}
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'مشخصات تحصیلی، گواهینامه‌ها و صلاحیت‌های فنی' : 'Certifications & Technical Mastery'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'صلاحیت‌های رسمی شغلی، گواهینامه‌های بین‌المللی سازمان آموزش فنی و حرفه‌ای کشور و حوزه‌های اشراف فنی و حقوقی.'
              : 'Official government credentials, international certifications, and technical domains of expertise.'}
          </p>
        </div>

        {/* Top 3 Official Badges with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          
          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-[#EA845A]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block">
                مدرک تحصیلی پایه
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#F3EFE6]">
                {PERSONAL_INFO.education}
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                دانش‌آموخته مهندسی عمران
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#DE7247]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block">
                وضعیت شغلی رسمی
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#F3EFE6]">
                کارمند رسمی - قطعی
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                وزارت بهداشت، درمان و آموزش پزشکی
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5 sm:col-span-2 md:col-span-1">
            <div className="w-9 h-9 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4 text-[#DE7247]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block">
                عضویت حرفه‌ای
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#F3EFE6]">
                عضو سازمان نظام مهندسی
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                سازمان نظام مهندسی ساختمان کشور
              </p>
            </div>
          </div>

        </div>

        {/* Section 1: International Vocational Certificates with Glassmorphism */}
        <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-14">
          <div className="flex items-center justify-between pb-3 border-b border-[#242E40]">
            <h3 className="text-xs sm:text-sm font-bold text-[#EDE8DF]">
              گواهینامه‌های بین‌المللی (سازمان آموزش فنی و حرفه‌ای کشور)
            </h3>
            <span className="text-xs font-medium text-[#8C95A8]">
              ۶ گواهینامه معتبر
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-4 sm:p-5 rounded-xl glass-panel-interactive space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-7 h-7 rounded-lg glass-sub-panel flex items-center justify-center">
                      {getIcon(cert.iconName)}
                    </div>
                    <span className="text-[10px] text-[#8C95A8] font-mono">
                      TVTO / IRAN
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#EDE8DF] leading-snug">
                    {lang === 'fa' ? cert.title : cert.titleEn}
                  </h4>

                  <p className="text-xs text-[#9AA3B5] leading-relaxed text-justify">
                    {cert.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#242E40] text-[11px] text-[#7E889B] flex items-center justify-between">
                  <span>سازمان فنی و حرفه‌ای کشور</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#DE7247]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Domain Competencies */}
        <div className="space-y-4 sm:space-y-5">
          <div className="pb-3 border-b border-[#242E40]">
            <h3 className="text-xs sm:text-sm font-bold text-[#EDE8DF]">
              حوزه‌های اشراف تخصصی، فنی و حقوقی
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {domainSkills.map((domain, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl glass-panel-interactive space-y-3.5"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[#EA845A] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#7E889B]">/0{index + 1}</span>
                  <span>{domain.group}</span>
                </h4>

                <div className="space-y-2">
                  {domain.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C8D1DF] leading-relaxed text-justify">
                      <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
