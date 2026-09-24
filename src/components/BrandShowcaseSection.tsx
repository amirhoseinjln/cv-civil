import React, { useState } from 'react';
import { FutureViewLogo } from './FutureViewLogo';
import { FUTURE_VIEW_DESIGN_PROJECTS, BRAND_INFO } from '../data/resumeData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Building2, 
  DraftingCompass, 
  Palette, 
  ShieldCheck,
  Eye,
  CheckCircle2,
  MapPin
} from 'lucide-react';

interface BrandShowcaseSectionProps {
  lang: 'fa' | 'en';
}

export const BrandShowcaseSection: React.FC<BrandShowcaseSectionProps> = ({ lang }) => {
  const [selectedDesignProject, setSelectedDesignProject] = useState<Project | null>(null);
  const [designFilter, setDesignFilter] = useState<'all' | 'facade' | 'interior'>('all');

  const filteredDesignProjects = FUTURE_VIEW_DESIGN_PROJECTS.filter((p) => {
    if (designFilter === 'all') return true;
    return p.designType === designFilter;
  });

  return (
    <section id="brands" className="py-10 sm:py-16 lg:py-20 bg-[#0A0D13]/85 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5 sm:space-y-3">
          <div className="editorial-eyebrow flex items-center gap-2">
            <DraftingCompass className="w-3.5 h-3.5 text-[#DE7247]" />
            <span>{lang === 'fa' ? 'استودیوی طراحی معماری و هویت مهندسی' : 'Architecture & Design Studio'}</span>
          </div>
          <h2 className="editorial-h2">
            {lang === 'fa' ? 'شرکت فیوچر ویو (FUTURE VIEW)' : 'FUTURE VIEW Design & Engineering'}
          </h2>
          <p className="editorial-lead text-justify">
            {lang === 'fa'
              ? 'تلفیق دانش فنی مهندسی عمران با ظرافت معماری مدرن؛ طراحی تخصصی نماهای کلان بیمارستانی، طراحی معماری و دکوراسیون داخلی مراکز درمانی و مجتمع‌های مسکونی فاخر تحت نظارت مستقیم مهندس محمدرضا ناصری.'
              : 'Synthesizing civil engineering structural rigor with bespoke contemporary architecture and healthcare interior design.'}
          </p>
        </div>

        {/* Brand Core Identity: FUTURE VIEW & Bartha-va Overview (Clean & Non-repetitive) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          
          {/* Brand Card 1: FUTURE VIEW */}
          <div className="rounded-2xl glass-panel-interactive p-4 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 border border-[#DE7247]/30">
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#242E40]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <FutureViewLogo variant="icon" size="sm" theme="bronze" />
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">FUTURE VIEW</h3>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#DE7247]">Life, imagined then projected</div>
                  </div>
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#C29B62]/15 text-[#DEB377] border border-[#C29B62]/30">
                  طراحی معماری و مهندسی
                </span>
              </div>

              <p className="text-[11.5px] sm:text-sm text-[#A8B2C4] leading-relaxed text-justify">
                {BRAND_INFO.futureView.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-3 rounded-lg glass-sub-panel space-y-1">
                  <div className="text-[#DE7247] font-bold flex items-center gap-1.5 text-xs">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>طراحی نما</span>
                  </div>
                  <div className="text-[11px] text-[#8C95A8]">پوسته‌های مدرن بیمارستانی، نماهای خشک و کنترل تابش خورشیدی</div>
                </div>
                <div className="p-3 rounded-lg glass-sub-panel space-y-1">
                  <div className="text-[#DE7247] font-bold flex items-center gap-1.5 text-xs">
                    <Palette className="w-3.5 h-3.5" />
                    <span>معماری و طراحی داخلی</span>
                  </div>
                  <div className="text-[11px] text-[#8C95A8]">اورژانس‌های تروما، دکوراسیون درمانی هایژنیک و مسکونی لوکس</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242E40] flex items-center justify-between text-[11px] text-[#7E889B]">
              <span>دپارتمان تخصصی طراحی و محاسبات</span>
              <span className="font-mono text-[#DE7247]">EST. 2008</span>
            </div>
          </div>

          {/* Brand Card 2: عمران تهویه بارثاوا */}
          <div className="rounded-2xl glass-panel-interactive p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-[#243044]">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#242E40]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#141B26] border border-[#2F3C54] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#6898DB]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">{BRAND_INFO.barthaVa.name}</h3>
                    <div className="text-[11px] font-mono text-[#82A8E5]">General Contracting & MEP</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-blue-950/40 text-blue-300 border border-blue-800/40">
                  پیمانکاری عمومی و اجرایی
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#A8B2C4] leading-relaxed text-justify">
                {BRAND_INFO.barthaVa.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-3 rounded-lg glass-sub-panel space-y-1">
                  <div className="text-[#6898DB] font-bold flex items-center gap-1.5 text-xs">
                    <Layers className="w-3.5 h-3.5" />
                    <span>اجرای ابنیه و سازه</span>
                  </div>
                  <div className="text-[11px] text-[#8C95A8]">قراردادهای پیمانکاری صفر تا صد، فونداسیون‌های سنگین و بتن‌ریزی</div>
                </div>
                <div className="p-3 rounded-lg glass-sub-panel space-y-1">
                  <div className="text-[#6898DB] font-bold flex items-center gap-1.5 text-xs">
                    <Compass className="w-3.5 h-3.5" />
                    <span>تأسیسات و ابنیه شهری</span>
                  </div>
                  <div className="text-[11px] text-[#8C95A8]">تأسیسات مکانیکی و الکتریکی، سنگفرش معابر تشرف زائرین</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242E40] flex items-center justify-between text-[11px] text-[#7E889B]">
              <span>پیمانکاری رسمی ابنیه و تأسیسات</span>
              <span className="font-mono text-[#6898DB]">CONTRACTING DIVISION</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* NEW DEDICATED SECTION: پروژه‌های طراحی شده توسط شرکت فیوچر ویو */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-4">
          
          {/* Header of the Dedicated Design Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#242E40]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA845A] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#EA845A] tracking-wider uppercase">
                  FUTURE VIEW Portfolio
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                پروژه‌های طراحی شده توسط شرکت فیوچر ویو
              </h3>
              <p className="text-xs text-[#8C95A8]">
                مجموعه اختصاصی طراحی نماهای بیمارستانی و معماری داخلی ابنیه درمانی و مسکونی
              </p>
            </div>

            {/* Filter Buttons: All / Facade / Interior */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setDesignFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  designFilter === 'all'
                    ? 'bg-[#DE7247] text-white shadow-sm'
                    : 'glass-sub-panel text-[#8C95A8] hover:text-white'
                }`}
              >
                همه ({FUTURE_VIEW_DESIGN_PROJECTS.length})
              </button>
              <button
                onClick={() => setDesignFilter('facade')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  designFilter === 'facade'
                    ? 'bg-[#DE7247] text-white shadow-sm'
                    : 'glass-sub-panel text-[#8C95A8] hover:text-white'
                }`}
              >
                طراحی نما (۳)
              </button>
              <button
                onClick={() => setDesignFilter('interior')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  designFilter === 'interior'
                    ? 'bg-[#DE7247] text-white shadow-sm'
                    : 'glass-sub-panel text-[#8C95A8] hover:text-white'
                }`}
              >
                طراحی داخلی (۳)
              </button>
            </div>
          </div>

          {/* Design Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDesignProjects.map((p, idx) => {
              const isFacade = p.designType === 'facade';

              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedDesignProject(p)}
                  className="group cursor-pointer rounded-2xl glass-panel-interactive p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#DE7247]/70 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top Subtle Amber Ambient Highlight */}
                  <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA845A]/40 to-transparent group-hover:via-[#EA845A] transition-all" />

                  <div className="space-y-3">
                    {/* Badge and Type */}
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#222C3E]">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isFacade
                          ? 'bg-amber-950/40 border-amber-600/40 text-amber-300'
                          : 'bg-emerald-950/40 border-emerald-600/40 text-emerald-300'
                      }`}>
                        {isFacade ? 'طراحی نما (Facade Design)' : 'طراحی داخلی (Interior Architecture)'}
                      </span>
                      <span className="font-mono text-xs text-[#6A7588]">
                        FV-D{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#EA845A] transition-colors leading-snug">
                      {p.title}
                    </h4>

                    {/* Location & Role */}
                    <div className="space-y-1 text-xs">
                      {p.location && (
                        <div className="flex items-center gap-1.5 text-[#8C95A8]">
                          <MapPin className="w-3.5 h-3.5 text-[#DE7247] shrink-0" />
                          <span>{p.location}</span>
                        </div>
                      )}
                      <div className="text-[11px] text-[#A6B2C8] leading-tight">
                        <span className="text-[#DE7247] font-semibold">شرح طراحی: </span>
                        <span>{p.role}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#9AA3B5] leading-relaxed line-clamp-3 text-justify">
                      {p.description}
                    </p>
                  </div>

                  {/* Footer link to view details modal */}
                  <div className="pt-3 border-t border-[#222C3E] flex items-center justify-between text-xs text-[#8C95A8] group-hover:text-[#EA845A] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>مشاهده شناسنامه و جزئیات طراحی</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Modal for viewing individual design project specifications */}
      <ProjectDetailModal
        project={selectedDesignProject}
        onClose={() => setSelectedDesignProject(null)}
        lang={lang}
      />
    </section>
  );
};
