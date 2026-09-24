import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ProfileSummaryProps {
  lang: 'fa' | 'en';
}

export const ProfileSummarySection: React.FC<ProfileSummaryProps> = ({ lang }) => {
  const pillars = [
    {
      titleFa: 'شرایط عمومی پیمان و قراردادهای دولتی',
      descFa: 'تسلط بر بخشنامه‌ها و فهارس‌بهای سازمان برنامه و بودجه، رسیدگی به صورت‌وضعیت‌های کارکرد و تعدیل، تحلیل دعاوی و ضوابط برگزاری مناقصات دولتی.',
    },
    {
      titleFa: 'مهندسی و نظارت ابنیه درمانی و بیمارستانی',
      descFa: 'تجربه نظارت بر بیش از ۱۶۰,۰۰۰ مترمربع فضای درمانی شامل احداث بیمارستان ۶۱۰ تختخوابی امام رضا (ع)، بونکر شتاب‌دهنده پرانرژی الکتا و بخش‌های مراقبت ویژه.',
    },
    {
      titleFa: 'طراحی و ساخت با استودیو FUTURE VIEW',
      descFa: 'طراحی، محاسبه سازه و احداث ساختمان‌های مسکونی لوکس، نازک‌کاری و معماری مذهبی در حرم مطهر رضوی (کیسون) و پروژه‌های هتلینگ.',
    },
    {
      titleFa: 'نگهداشت تأسیسات مرکزی و مدیریت بحران',
      descFa: 'سرپرستی موتورخانه‌های مرکزی، گازهای طبی، هوارسان‌های هایژنیک و سیستم‌های برق اضطراری بیمارستان‌های بزرگ در دوران بحران کرونا.',
    },
  ];

  return (
    <section id="profile" className="py-10 sm:py-16 lg:py-20 bg-[#0E1117]/60 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start mb-8 sm:mb-14">
          
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-4">
            <div className="editorial-eyebrow">
              {lang === 'fa' ? 'سوابق و خلاصه عملکرد' : 'Profile Overview'}
            </div>
            
            <h2 className="editorial-h2">
              {lang === 'fa' 
                ? '۱۸ سال فعالیت اجرایی، نظارتی و طراحی در پروژه‌های زیربنایی کشور' 
                : '18 Years of Engineering Service in Critical Infrastructure'}
            </h2>
            
            <p className="editorial-lead text-justify">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          <div className="lg:col-span-6 rounded-xl glass-panel p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="text-xs font-bold text-[#E5DFD4] pb-2.5 sm:pb-3 border-b border-[#242E40]">
              شایستگی‌ها و حوزه‌های اشراف مهندسی:
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                <p className="text-[11.5px] sm:text-xs text-[#B2B9C8] leading-relaxed text-justify">
                  <strong className="text-[#EDE8DF]">مدیریت کارگاهی و نظارت عالیه:</strong> هدایت اکیپ‌های اجرایی در عملیات خاکی، گودبرداری و سازه نگهبان، سازه‌های بتنی و فولادی، سفت‌کاری و نازک‌کاری‌های لوکس.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                <p className="text-[11.5px] sm:text-xs text-[#B2B9C8] leading-relaxed text-justify">
                  <strong className="text-[#EDE8DF]">بتن‌ریزی‌های حجیم و سازه‌های خاص:</strong> تجربه تخصصی احداث بونکر شتاب‌دهنده پرانرژی الکتا با بتن سنگین باریت و تاییدیه‌های رسمی سازمان انرژی اتمی ایران.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                <p className="text-[11.5px] sm:text-xs text-[#B2B9C8] leading-relaxed text-justify">
                  <strong className="text-[#EDE8DF]">حقوق مهندسی و شرایط عمومی پیمان:</strong> تهیه و رسیدگی به صورت‌وضعیت‌های کارکرد و تعدیل، پیگیری تاخیرات مجاز، برگزاری مناقصات دولتی و صیانت از بودجه‌های کارفرمایی.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Competency Blocks with Glassmorphism & Border Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl glass-panel-interactive space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5 sm:space-y-2">
                <span className="font-mono text-xs text-[#EA845A]">
                  /0{idx + 1}
                </span>
                <h3 className="editorial-h3">
                  {pillar.titleFa}
                </h3>
                <p className="text-[11.5px] sm:text-xs text-[#8C95A8] leading-relaxed text-justify">
                  {pillar.descFa}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
