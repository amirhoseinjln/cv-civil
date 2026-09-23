import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/resumeData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Search, MapPin, ArrowUpRight, Filter } from 'lucide-react';

interface ProjectsSectionProps {
  lang: 'fa' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; labelFa: string; count: number }[] = [
    { key: 'all', labelFa: 'همه پروژه‌ها', count: PROJECTS.length },
    { key: 'future_view', labelFa: 'استودیو FUTURE VIEW', count: PROJECTS.filter(p => p.category === 'future_view').length },
    { key: 'healthcare', labelFa: 'بیمارستانی و درمانی', count: PROJECTS.filter(p => p.category === 'healthcare').length },
    { key: 'contracting', labelFa: 'عمران تهویه بارثاوا', count: PROJECTS.filter(p => p.category === 'contracting').length },
    { key: 'supervision', labelFa: 'نظارت دانشگاهی', count: PROJECTS.filter(p => p.category === 'supervision').length },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.titleEn.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.location && project.location.toLowerCase().includes(q)) ||
        (project.employer && project.employer.toLowerCase().includes(q)) ||
        (project.structuralSystem && project.structuralSystem.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-12 sm:py-20 lg:py-24 bg-[#0E1117]/60 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="editorial-eyebrow">
              {lang === 'fa' ? 'آرشیو مستندات و شناسنامه' : 'Project Archive'}
            </div>
            <h2 className="editorial-h2">
              {lang === 'fa' ? 'فهرست پروژه‌ها و سوابق اجرایی' : 'Selected Works & Projects'}
            </h2>
            <p className="editorial-lead text-justify">
              {lang === 'fa'
                ? 'مجموعه ابنیه درمانی، مذهبی، مسکونی و قراردادهای پیمانکاری تحت نظارت، اجرا یا مدیریت پیمان مهندس محمدرضا ناصری.'
                : 'Selected hospital developments, sacred architecture, residential complexes, and public contracting projects.'}
            </p>
          </div>

          {/* Clean Search Input with Glassmorphism */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#7E889B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fa' ? 'جستجو در پروژه‌ها، کارفرما یا سازه...' : 'Search archive...'}
              className="w-full glass-sub-panel focus:border-[#EA845A] focus:outline-none rounded-lg pr-9 pl-4 py-2.5 text-xs text-[#EDE8DF] placeholder-[#6A7588] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8C95A8] hover:text-white p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Minimalist Tabs (Mobile-Friendly Horizontal Scroll) */}
        <div className="flex items-center gap-1 sm:gap-2 border-b border-[#212837] mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`py-2.5 px-3 sm:px-4 text-xs font-semibold border-b-2 -mb-[3px] transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'border-[#EA845A] text-[#EA845A]'
                    : 'border-transparent text-[#8C95A8] hover:text-[#DCE2ED]'
                }`}
              >
                <span>{cat.labelFa}</span>
                <span className="text-[10px] font-mono text-[#6A7588] tabular-nums">
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Refined Glassmorphism and Border Glows */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-xl glass-panel space-y-3">
            <Filter className="w-6 h-6 text-[#5A6375] mx-auto" />
            <div className="text-xs sm:text-sm font-semibold text-[#DCE2ED]">
              {lang === 'fa' ? 'هیچ پروژه‌ای با مشخصات جستجوشده یافت نشد' : 'No projects found.'}
            </div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#EA845A] hover:underline cursor-pointer"
            >
              نمایش همه پروژه‌ها
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map((project, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              const isFutureView = project.brandOrEntity === 'FUTURE VIEW';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-xl glass-panel-interactive p-5 sm:p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Top Row: Index & Brand Metadata */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-[#242E40]">
                      <bdi dir="ltr" className="font-mono text-xs text-[#7E889B] group-hover:text-[#EA845A] transition-colors">
                        /{formattedIndex}
                      </bdi>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#A6B0C2]">
                        <span className={isFutureView ? 'text-[#EA845A] font-bold' : 'text-[#8C95A8]'}>
                          {project.brandOrEntity}
                        </span>
                        {project.year && (
                          <>
                            <span aria-hidden="true" className="text-[#3A455C]">/</span>
                            <bdi dir="ltr" className="ltr-num">{project.year}</bdi>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#F3EFE6] group-hover:text-[#EA845A] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Role & Location */}
                    <div className="space-y-1 text-xs text-[#8C95A8]">
                      <div className="font-medium text-[#DE7247]">
                        مسئولیت: {project.role}
                      </div>
                      {project.location && (
                        <div className="flex items-center gap-1.5 text-[#7E889B] truncate">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#9AA3B5] leading-relaxed line-clamp-3 text-justify">
                      {project.description}
                    </p>

                    {/* Micro Specs Table */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] border-t border-[#242E40]">
                      {project.area && (
                        <div>
                          <span className="text-[#6A7588] block">زیربنا:</span>
                          <span className="font-mono text-[#DCE2ED]">{project.area}</span>
                        </div>
                      )}
                      {project.employer && (
                        <div>
                          <span className="text-[#6A7588] block">کارفرما:</span>
                          <span className="text-[#DCE2ED] truncate block">{project.employer}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-3 border-t border-[#242E40] flex items-center justify-between text-xs text-[#8C95A8] group-hover:text-[#EA845A] transition-colors">
                    <span>مشاهده مشخصات کامل</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
