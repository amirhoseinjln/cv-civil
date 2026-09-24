import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types';
import { X, MapPin, Compass, Building, Calendar, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'fa' | 'en';
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      // Prevent background scrolling while modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  // Use createPortal to mount directly to document.body so transformed parents (e.g. AnimatedSection) do not trap or break fixed positioning on mobile
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto overscroll-contain animate-in fade-in duration-200"
      onClick={onClose}
      style={{ touchAction: 'pan-y' }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#121620] p-5 sm:p-7 space-y-5 text-right shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_30px_rgba(222,114,71,0.2)] border border-[#2D384D] my-auto"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Close Button - Sticky/Fixed inside modal corner */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl bg-[#1B2230] border border-[#364259] hover:border-[#EA845A]/70 text-[#A6B2C8] hover:text-white transition-colors cursor-pointer z-10 shadow-md"
          aria-label="بستن پنجره"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-1 pl-12">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#9AA3B5]">
            <span className="font-semibold text-[#EA845A]">{project.brandOrEntity}</span>
            <span aria-hidden="true" className="text-[#3A455C]">/</span>
            <span className="text-[#C5CEE0]">{project.role}</span>
          </div>

          <h3 className="text-base sm:text-xl font-black text-white leading-snug">
            {project.title}
          </h3>

          {/* Quick Specs Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#9AA3B5] pt-1">
            {project.area && (
              <div className="flex items-center gap-1 bg-[#181F2B] px-2.5 py-1 rounded-md border border-[#263145]">
                <span className="text-[#7E889B] text-[11px]">زیربنا:</span>
                <bdi dir="ltr" className="ltr-num text-[#EDE8DF] font-bold text-xs">{project.area}</bdi>
              </div>
            )}
            {project.employer && (
              <div className="flex items-center gap-1 bg-[#181F2B] px-2.5 py-1 rounded-md border border-[#263145]">
                <Building className="w-3.5 h-3.5 text-[#DE7247]" />
                <span className="text-[#EDE8DF] text-[11px] truncate max-w-[200px]">{project.employer}</span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-1 bg-[#181F2B] px-2.5 py-1 rounded-md border border-[#263145]">
                <MapPin className="w-3.5 h-3.5 text-[#DE7247]" />
                <span className="text-[#EDE8DF] text-[11px]">{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-1 bg-[#181F2B] px-2.5 py-1 rounded-md border border-[#263145]">
                <Calendar className="w-3.5 h-3.5 text-[#DE7247]" />
                <bdi dir="ltr" className="ltr-num text-[#EDE8DF] text-[11px]">{project.year}</bdi>
              </div>
            )}
          </div>
        </div>

        {/* Structural System Highlight if available */}
        {project.structuralSystem && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#161C27] border border-[#28354A] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EA845A]">
              <Compass className="w-4 h-4 text-[#DE7247] shrink-0" />
              <span>مشخصات سیستم سازه‌ای و اجرایی:</span>
            </div>
            <p className="text-xs text-[#C8D1DF] leading-relaxed text-justify pr-6">
              {project.structuralSystem}
            </p>
          </div>
        )}

        {/* Narrative Description */}
        <div className="space-y-1.5 pt-1">
          <div className="text-xs font-bold text-[#E5DFD4] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE7247]" />
            <span>شرح مشخصات و هویت فنی پروژه:</span>
          </div>
          <p className="text-xs sm:text-sm text-[#A8B2C4] leading-relaxed text-justify bg-[#141923] p-3 sm:p-4 rounded-xl border border-[#222B3B]">
            {project.description}
          </p>
        </div>

        {/* Detailed Scope of Work */}
        {project.detailedScope && project.detailedScope.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-[#E5DFD4] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE7247]" />
              <span>شرح اقدامات، مسئولیت‌های نظارتی و اجرایی:</span>
            </div>
            <div className="space-y-1.5">
              {project.detailedScope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#151B26] border border-[#242E40]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#DE7247] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#DCE2ED] leading-relaxed text-justify">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specs Table */}
        {project.technicalSpecs && project.technicalSpecs.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-bold text-[#E5DFD4] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE7247]" />
              <span>مشخصات ثبت‌شده در اسناد پیمان:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.technicalSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#161C27] border border-[#28354A]"
                >
                  <span className="text-[10px] text-[#7E889B] block font-mono">{spec.label}</span>
                  <span className="text-xs font-bold text-[#EDE8DF] mt-0.5 block truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-3.5 border-t border-[#242E40] flex items-center justify-between text-xs text-[#8C95A8]">
          <span className="text-[11px] sm:text-xs">مهندس محمدرضا ناصری · مدیریت و نظارت کارگاهی</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#DE7247] hover:bg-[#EA845A] text-white font-bold text-xs transition-colors cursor-pointer shadow-md shadow-[#DE7247]/20"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

