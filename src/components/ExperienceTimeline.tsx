import React, { useState } from 'react';
import { CAREER_HISTORY } from '../data/resumeData';
import { 
  Calendar, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Briefcase,
  ChevronDown,
  Award
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: 'fa' | 'en';
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'management' | 'supervision' | 'executive'>('all');
  const [expandedLocations, setExpandedLocations] = useState(true);

  const filteredHistory = CAREER_HISTORY.filter(item => {
    if (activeFilter === 'all') return true;
    return item.roleType === activeFilter;
  });

  return (
    <section id="experience" className="py-10 sm:py-16 lg:py-20 bg-[#0A0D12]/80 backdrop-blur-[3px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10 space-y-1.5 sm:space-y-3">
          <div className="editorial-eyebrow flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-[#DE7247]" />
            <span>{lang === 'fa' ? 'سوابق خدمت دولتی و دانشگاهی' : 'Executive Career Track'}</span>
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'سوابق شغلی و مسئولیت‌های مدیریتی و اجرایی' : 'Government Service & Leadership Record'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'بیش از ۱۸ سال سابقه خدمت رسمی و تخصصی در مدیریت فنی، سرپرستی ادارات مهندسی بیمارستان‌های مادر، نظارت عالیه بر پروژه‌های دانشگاهی و هدایت پروژه‌های اجرایی.'
              : 'Over 18 years of executive civil engineering appointments across university technical offices, major healthcare institutions, and public infrastructure.'}
          </p>
        </div>

        {/* Quick Filter Tabs for Mobile & Desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#DE7247] text-white shadow-md shadow-[#DE7247]/20'
                : 'glass-sub-panel text-[#8C95A8] hover:text-white'
            }`}
          >
            همه سوابق ({CAREER_HISTORY.length})
          </button>
          <button
            onClick={() => setActiveFilter('management')}
            className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'management'
                ? 'bg-[#DE7247] text-white shadow-md shadow-[#DE7247]/20'
                : 'glass-sub-panel text-[#8C95A8] hover:text-white'
            }`}
          >
            مدیریت و سرپرستی فنی
          </button>
          <button
            onClick={() => setActiveFilter('supervision')}
            className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'supervision'
                ? 'bg-[#DE7247] text-white shadow-md shadow-[#DE7247]/20'
                : 'glass-sub-panel text-[#8C95A8] hover:text-white'
            }`}
          >
            نظارت عالیه دانشگاهی
          </button>
          <button
            onClick={() => setActiveFilter('executive')}
            className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'executive'
                ? 'bg-[#DE7247] text-white shadow-md shadow-[#DE7247]/20'
                : 'glass-sub-panel text-[#8C95A8] hover:text-white'
            }`}
          >
            مهندسی اجرا
          </button>
        </div>

        {/* Mobile-Optimized History Cards Container */}
        <div className="relative space-y-4 sm:space-y-6">
          
          {/* Vertical Timeline Guide Line (hidden on very small screens, visible on sm+) */}
          <div className="hidden sm:block absolute right-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#DE7247] via-[#2F3A4E] to-transparent pointer-events-none" />

          {filteredHistory.map((exp, index) => {
            const isLatest = exp.isCurrent;
            const indexStr = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={exp.id}
                className="relative sm:pr-14 group transition-all duration-300"
              >
                {/* Timeline Dot Node for Desktop */}
                <div className="hidden sm:flex absolute right-4 top-6 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10 transition-transform group-hover:scale-110">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                    isLatest 
                      ? 'bg-[#EA845A] border-[#FBE5DA] shadow-[0_0_12px_rgba(234,132,90,0.8)]' 
                      : 'bg-[#151B26] border-[#DE7247]/60 group-hover:border-[#EA845A]'
                  }`} />
                </div>

                {/* The Bespoke History Card */}
                <div className={`rounded-2xl p-4 sm:p-6 transition-all duration-300 relative overflow-hidden border ${
                  isLatest
                    ? 'bg-gradient-to-br from-[#1A1F2B]/95 via-[#131722]/90 to-[#0E121A]/95 border-[#DE7247]/50 shadow-[0_8px_30px_rgba(222,114,71,0.12)]'
                    : 'bg-[#121620]/85 hover:bg-[#151B27]/95 border-[#263145]/80 hover:border-[#3E4E6B] shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
                }`}>
                  
                  {/* Subtle Top Metallic Accent for Current Role */}
                  {isLatest && (
                    <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA845A] to-transparent" />
                  )}

                  {/* Card Header: Period, Badge & Role Title */}
                  <div className="space-y-2.5 sm:space-y-3 pb-3 sm:pb-4 border-b border-[#222C3E]">
                    
                    {/* Top Row: Date Pill + Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg glass-sub-panel text-[11px] sm:text-xs font-bold text-[#EDE8DF]">
                        <Calendar className="w-3.5 h-3.5 text-[#DE7247] shrink-0" />
                        <bdi className="font-sans text-[11px] sm:text-xs tracking-tight">{exp.period}</bdi>
                      </div>

                      {/* Role Highlight Badge */}
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {exp.badge && (
                          <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border flex items-center gap-1 ${
                            isLatest
                              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                              : 'bg-[#1B2230] border-[#364259] text-[#A6B2C8]'
                          }`}>
                            {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                            <span>{exp.badge}</span>
                          </span>
                        )}
                        <span className="font-mono text-[10px] sm:text-[11px] text-[#637088] hidden xs:inline-block">
                          #{indexStr}
                        </span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <div className="space-y-0.5 sm:space-y-1">
                      <h3 className="text-sm sm:text-lg font-black text-[#FFFFFF] group-hover:text-[#EA845A] transition-colors leading-snug">
                        {lang === 'fa' ? exp.title : exp.titleEn}
                      </h3>
                      
                      {/* Organization Name with Building Icon */}
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11.5px] sm:text-sm text-[#DE7247] font-semibold">
                        <Building2 className="w-3.5 h-3.5 shrink-0 text-[#DE7247]" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Body: Description */}
                  <div className="pt-3 space-y-2.5 sm:space-y-3">
                    <p className="text-[11.5px] sm:text-sm text-[#A8B2C4] leading-relaxed text-justify">
                      {exp.description}
                    </p>

                    {/* Sub-Locations Grid (Hospitals & Health Networks) if present */}
                    {exp.subLocations && exp.subLocations.length > 0 && (
                      <div className="p-3.5 sm:p-4 rounded-xl glass-sub-panel border border-[#273449]/70 space-y-2.5">
                        <div 
                          className="flex items-center justify-between cursor-pointer select-none"
                          onClick={() => setExpandedLocations(!expandedLocations)}
                        >
                          <div className="flex items-center gap-2 text-xs font-bold text-[#E5DFD4]">
                            <MapPin className="w-3.5 h-3.5 text-[#DE7247]" />
                            <span>مراکز و بیمارستان‌های تحت نظارت عالیه ({exp.subLocations.length} مرکز):</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-[#8C95A8] transition-transform ${expandedLocations ? 'rotate-180' : ''}`} />
                        </div>

                        {expandedLocations && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
                            {exp.subLocations.map((loc, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center gap-1.5 text-[11px] text-[#C4CDDC] bg-[#10141C]/80 px-2 py-1.5 rounded-md border border-[#202938]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#DE7247] shrink-0" />
                                <span className="truncate">{loc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Outcomes / Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="pt-2 space-y-2">
                        <div className="text-[11px] font-bold text-[#8C95A8] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#DE7247]" />
                          <span>شرح اقدامات، مسئولیت‌ها و دستاوردهای شاخص:</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.achievements.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-2.5 text-xs text-[#CBD4E3] leading-relaxed p-2.5 rounded-lg bg-[#0F131C]/60 border border-[#1E2636]/60"
                            >
                              <span className="text-[#DE7247] font-bold text-xs mt-0.5 shrink-0">•</span>
                              <span className="text-justify">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Card Bottom Micro Footprint */}
                  <div className="mt-4 pt-3 border-t border-[#1F2736] flex items-center justify-between text-[11px] text-[#788499]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#DE7247]" />
                      <span>تأییدیه رسمی سوابق دولتی و دانشگاهی</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#556277]">
                      RECORD REF #{exp.id.slice(0, 10).toUpperCase()}
                    </span>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
