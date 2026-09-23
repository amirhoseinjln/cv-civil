import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, MapPin, Compass } from 'lucide-react';

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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 space-y-6 text-right shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(222,114,71,0.15)] border border-[#3A4761]/70"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-lg glass-sub-panel hover:border-[#EA845A]/50 text-[#9AA3B5] hover:text-white transition-colors cursor-pointer"
          aria-label="بستن پنجره"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-1 pl-12">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#9AA3B5]">
            <span className="font-semibold text-[#EA845A]">{project.brandOrEntity}</span>
            <span aria-hidden="true" className="text-[#3A455C]">/</span>
            <span>{project.role}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#F8F6F0] leading-snug">
            {project.title}
          </h3>

          {/* Quick Specs Strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#9AA3B5] pt-1">
            {project.area && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#6A7588]">زیربنا:</span>
                <bdi dir="ltr" className="ltr-num text-[#DCE2ED]">{project.area}</bdi>
              </div>
            )}
            {project.employer && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#6A7588]">کارفرما:</span>
                <span className="text-[#DCE2ED]">{project.employer}</span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7E889B]" />
                <span>{project.location}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-1.5">
                <span className="text-[#6A7588]">سال:</span>
                <bdi dir="ltr" className="ltr-num">{project.year}</bdi>
              </div>
            )}
          </div>
        </div>

        {/* Structural System Highlight if available */}
        {project.structuralSystem && (
          <div className="p-4 rounded-lg glass-sub-panel space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#EA845A]">
              <Compass className="w-3.5 h-3.5 text-[#DE7247]" />
              <span>مشخصات سیستم سازه‌ای و اجرایی:</span>
            </div>
            <p className="text-xs text-[#C8D1DF] leading-relaxed">
              {project.structuralSystem}
            </p>
          </div>
        )}

        {/* Narrative Description */}
        <div className="space-y-2 pt-1">
          <div className="text-xs font-semibold text-[#8C95A8]">
            شرح مشخصات پروژه:
          </div>
          <p className="text-xs sm:text-sm text-[#B2B9C8] leading-relaxed text-justify">
            {project.description}
          </p>
        </div>

        {/* Detailed Scope of Work */}
        {project.detailedScope && project.detailedScope.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="text-xs font-semibold text-[#8C95A8]">
              شرح اقدامات و مسئولیت‌های اجرایی:
            </div>
            <div className="space-y-2">
              {project.detailedScope.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg glass-sub-panel"
                >
                  <span className="text-[#DE7247] font-mono text-xs mt-0.5">•</span>
                  <span className="text-xs text-[#DCE2ED] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specs Table */}
        {project.technicalSpecs && project.technicalSpecs.length > 0 && (
          <div className="space-y-2 pt-2">
            <div className="text-xs font-semibold text-[#8C95A8]">
              مشخصات ثبت‌شده در اسناد پیمان:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.technicalSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg glass-sub-panel"
                >
                  <span className="text-[10px] text-[#7E889B] block">{spec.label}</span>
                  <span className="text-xs font-semibold text-[#EDE8DF] mt-0.5 block truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#242E40] flex items-center justify-between text-xs text-[#8C95A8]">
          <span>مهندس محمدرضا ناصری · مدیریت و نظارت</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg glass-sub-panel hover:text-white transition-colors cursor-pointer"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};
