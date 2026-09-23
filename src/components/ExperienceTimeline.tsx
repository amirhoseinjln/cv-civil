import React from 'react';
import { CAREER_HISTORY } from '../data/resumeData';
import { Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: 'fa' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-12 sm:py-20 lg:py-24 bg-[#0A0D12]/70 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="editorial-eyebrow">
            {lang === 'fa' ? 'سوابق مدیریتی و سازمانی' : 'Executive Career Track'}
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'سوابق خدمت دولتی و مسئولیت‌های اجرایی' : 'Career Timeline & Appointments'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'بیش از ۱۶ سال خدمت تخصصی در دفاتر فنی، سرپرستی خدمات مهندسی بیمارستان‌ها و نظارت عالیه بر پروژه‌های دانشگاهی و درمانی.'
              : 'Over 16 years leading engineering departments at major university hospitals, managing healthcare infrastructure, and supervising public works.'}
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-r border-[#242E40] mr-1.5 sm:mr-4 space-y-8 sm:space-y-10">
          {CAREER_HISTORY.map((exp) => (
            <div key={exp.id} className="relative pr-5 sm:pr-8 group">
              
              {/* Timeline Marker Dot */}
              <div 
                className={`absolute -right-[6px] top-2.5 w-3 h-3 rounded-full border-2 transition-colors ${
                  exp.isCurrent
                    ? 'bg-[#EA845A] border-[#EA845A] shadow-[0_0_10px_rgba(234,132,90,0.6)]'
                    : 'bg-[#141923] border-[#4F5B73]'
                }`}
              />

              {/* Experience Card with Glassmorphism & Border Glow */}
              <div className="p-4 sm:p-6 rounded-xl glass-panel-interactive space-y-3 sm:space-y-4">
                
                {/* Header: Title, Period & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#242E40]">
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#F3EFE6]">
                      {lang === 'fa' ? exp.title : exp.titleEn}
                    </h3>
                    <div className="text-xs text-[#EA845A] font-medium">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#8C95A8] glass-sub-panel px-2.5 py-1 rounded-lg whitespace-nowrap self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#DE7247]" />
                    <bdi className="font-sans font-medium">{exp.period}</bdi>
                    {exp.isCurrent && (
                      <span className="text-[10px] text-emerald-400 font-bold mr-1">
                        (سمت فعلی)
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9AA3B5] leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-bold text-[#8C95A8]">
                      {lang === 'fa' ? 'اهم اقدامات و دستاوردهای ثبت‌شده:' : 'Key Outcomes:'}
                    </div>
                    <div className="space-y-2">
                      {exp.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C8D1DF] leading-relaxed">
                          <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
