import React from 'react';
import { CERTIFICATIONS, TECHNICAL_SKILLS, PERSONAL_INFO } from '../data/resumeData';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Compass, 
  Flame, 
  HardHat, 
  Laptop, 
  CheckCircle, 
  FileCheck2,
  Cpu,
  Layers
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
      case 'HardHat': return <HardHat className="w-4 h-4 text-[#DE7247]" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-[#DE7247]" />;
      default: return <Award className="w-4 h-4 text-[#DE7247]" />;
    }
  };

  return (
    <section id="certificates" className="py-10 sm:py-16 lg:py-20 bg-[#0E1117]/60 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10 space-y-1.5 sm:space-y-3">
          <div className="editorial-eyebrow flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#DE7247]" />
            <span>{lang === 'fa' ? 'مدارک و صلاحیت‌ها' : 'Credentials & Mastery'}</span>
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'مشخصات فردی، تحصیلی و گواهینامه‌های بین‌المللی' : 'Academic Credentials & Certifications'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'مدرک تحصیلی کارشناسی مهندسی عمران، گواهینامه‌های بین‌المللی صلاحیت فنی از سازمان آموزش فنی و حرفه‌ای کشور و مهارتهای تخصصی نرم‌افزاری و اجرایی.'
              : 'Civil engineering degree, accredited international TVTO certifications, and core technical proficiencies.'}
          </p>
        </div>

        {/* Top 3 Official Pillars: Education & Official Standing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 mb-8 sm:mb-12">
          
          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-[#EA845A]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block font-medium">
                مدرک تحصیلی
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                {PERSONAL_INFO.education}
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                دانش‌آموخته مهندسی عمران
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#DE7247]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block font-medium">
                وضعیت استخدامی کشوری
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                کارمند رسمی - قطعی
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                وزارت بهداشت، درمان و آموزش پزشکی
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl glass-panel-interactive flex items-start gap-3.5 sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-lg glass-sub-panel flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5 text-[#DE7247]" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] text-[#7E889B] block font-medium">
                عضویت صنفی و حرفه‌ای
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                عضو سازمان نظام مهندسی
              </h3>
              <p className="text-xs text-[#9AA3B5]">
                سازمان نظام مهندسی ساختمان کشور
              </p>
            </div>
          </div>

        </div>

        {/* Section 1: International Vocational Certificates (سازمان آموزش فنی و حرفه‌ای کشور) */}
        <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#242E40]">
            <div className="space-y-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#EDE8DF] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EA845A]" />
                <span>صلاحیت‌ها و دوره‌های بین‌المللی (سازمان آموزش فنی و حرفه‌ای کشور)</span>
              </h3>
              <p className="text-xs text-[#8C95A8]">
                دارای گواهینامه‌های رسمی بازرسی جوش PT، سرپرستی نقشه‌برداری، HSE و کامپیوتر
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-[#EA845A] glass-sub-panel px-3 py-1 rounded-md self-start sm:self-auto">
              ۶ گواهینامه معتبر TVTO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => {
              const isPT = cert.id === 'weld-inspection-pt';
              return (
                <div
                  key={cert.id}
                  className={`p-4 sm:p-5 rounded-xl flex flex-col justify-between space-y-3 transition-all duration-200 border ${
                    isPT
                      ? 'bg-gradient-to-br from-[#1F1915]/95 via-[#161B26]/90 to-[#121620] border-[#DE7247]/60 shadow-[0_4px_20px_rgba(222,114,71,0.12)]'
                      : 'glass-panel-interactive'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg glass-sub-panel flex items-center justify-center">
                        {getIcon(cert.iconName)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isPT && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#DE7247]/20 border border-[#DE7247]/40 text-[#EA845A]">
                            صلاحیت ویژه PT
                          </span>
                        )}
                        <span className="text-[10px] text-[#8C95A8] font-mono">
                          TVTO / IRAN
                        </span>
                      </div>
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
              );
            })}
          </div>
        </div>

        {/* Section 2: Technical & Software Skills (مهارت‌های فنی و نرم‌افزاری) */}
        <div className="space-y-4 sm:space-y-5">
          <div className="pb-3 border-b border-[#242E40]">
            <h3 className="text-sm sm:text-base font-bold text-[#EDE8DF] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#EA845A]" />
              <span>مهارت‌های فنی، نرم‌افزاری و تسلط حقوقی-پیمانی</span>
            </h3>
            <p className="text-xs text-[#8C95A8] mt-1">
              تسلط بر مقررات ملی ساختمان، استانداردهای فضاهای درمانی و نرم‌افزارهای مهندسی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {TECHNICAL_SKILLS.map((skill, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl glass-panel-interactive space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#DE7247]">/0{index + 1}</span>
                    <span className="text-[10px] font-mono text-[#8C95A8] glass-sub-panel px-2 py-0.5 rounded">
                      اشراف کامل
                    </span>
                  </div>
                  
                  <h4 className="text-xs sm:text-sm font-bold text-[#EDE8DF] leading-snug">
                    {skill.name}
                  </h4>
                  
                  <p className="text-xs text-[#9AA3B5] leading-relaxed text-justify">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-[#1A212E] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-l from-[#EA845A] to-[#DE7247] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
