import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/resumeData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Search, MapPin, ArrowUpRight, Filter, Building, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  lang: 'fa' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; labelFa: string; count: number }[] = [
    { key: 'all', labelFa: 'همه پروژه‌ها', count: PROJECTS.length },
    { key: 'mums', labelFa: 'علوم پزشکی مشهد', count: PROJECTS.filter(p => p.category === 'mums').length },
    { key: 'sistan', labelFa: 'علوم پزشکی سیستان', count: PROJECTS.filter(p => p.category === 'sistan').length },
    { key: 'contracting', labelFa: 'عمران تهویه بارثاوا', count: PROJECTS.filter(p => p.category === 'contracting').length },
    { key: 'construction', labelFa: 'پروژه‌های ساختمانی', count: PROJECTS.filter(p => p.category === 'construction').length },
    { key: 'fv_design', labelFa: 'پروژه‌های طراحی فیوچر ویو', count: PROJECTS.filter(p => p.category === 'fv_design').length },
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
    <section id="projects" className="py-10 sm:py-16 lg:py-20 bg-[#0E1117]/70 backdrop-blur-[2px] border-b border-[#1E2533] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="space-y-1.5 sm:space-y-3 max-w-2xl">
            <div className="editorial-eyebrow flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-[#DE7247]" />
              <span>{lang === 'fa' ? 'آرشیو مستندات و شناسنامه پروژه‌ها' : 'Complete Projects Directory'}</span>
            </div>
            <h2 className="editorial-h2">
              {lang === 'fa' ? 'فهرست جامع پروژه‌های درمانی، طراحی، پیمانکاری و ساختمانی' : 'Selected Works & Infrastructure'}
            </h2>
            <p className="editorial-lead text-justify">
              {lang === 'fa'
                ? 'مجموعه ۳۲ پروژه کلان شامل نظارت کارفرمایی دانشگاهی، پروژه‌های پیمانکاری صفر تا صد، احداث مجتمع‌های مسکونی و طراحی‌های تخصصی تحت مدیریت مهندس محمدرضا ناصری.'
                : 'Complete registry of 32 landmark hospital developments, sacred porticos, turnkey contracting, and private residential developments.'}
            </p>
          </div>

          {/* Clean Search Input with Glassmorphism */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#7E889B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fa' ? 'جستجو در پروژه‌ها، متراژ یا کارفرما...' : 'Search archive...'}
              className="w-full glass-sub-panel focus:border-[#EA845A] focus:outline-none rounded-lg pr-9 pl-4 py-2 sm:py-2.5 text-xs text-[#EDE8DF] placeholder-[#6A7588] transition-colors"
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
        <div className="flex items-center gap-1.5 sm:gap-2 border-b border-[#212837] mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`py-1.5 sm:py-2 px-2.5 sm:px-4 text-[11px] sm:text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#DE7247] text-white shadow-md shadow-[#DE7247]/25'
                    : 'glass-sub-panel text-[#8C95A8] hover:text-[#DCE2ED]'
                }`}
              >
                <span>{cat.labelFa}</span>
                <span className={`text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-black/30 text-white' : 'text-[#6A7588]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Refined Glassmorphism */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {filteredProjects.map((project, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              const isFutureView = project.brandOrEntity === 'FUTURE VIEW';
              const isBarthaVa = project.brandOrEntity === 'عمران تهویه بارثاوا';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl glass-panel-interactive p-4 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-4 hover:border-[#DE7247]/60 transition-all duration-300"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    {/* Top Row: Index & Brand Metadata */}
                    <div className="flex items-center justify-between text-xs pb-2.5 sm:pb-3 border-b border-[#242E40]">
                      <bdi dir="ltr" className="font-mono text-xs text-[#7E889B] group-hover:text-[#EA845A] transition-colors">
                        /{formattedIndex}
                      </bdi>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          isFutureView 
                            ? 'bg-[#C29B62]/15 text-[#DEB377] border border-[#C29B62]/30' 
                            : isBarthaVa
                            ? 'bg-blue-950/40 text-blue-300 border border-blue-800/40'
                            : 'bg-[#181F2C] text-[#9AA5B8] border border-[#273245]'
                        }`}>
                          {project.brandOrEntity}
                        </span>
                        {project.year && (
                          <bdi dir="ltr" className="ltr-num text-[10px] text-[#7E889B] font-mono">{project.year}</bdi>
                        )}
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#F3EFE6] group-hover:text-[#EA845A] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Role & Location */}
                    <div className="space-y-0.5 sm:space-y-1 text-xs">
                      <div className="font-medium text-[#DE7247] flex items-start gap-1 text-[11.5px] sm:text-xs">
                        <span className="shrink-0">مسئولیت:</span>
                        <span className="text-justify">{project.role}</span>
                      </div>
                      {project.location && (
                        <div className="flex items-center gap-1.5 text-[#7E889B] truncate pt-0.5 text-[11px] sm:text-xs">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[11.5px] sm:text-xs text-[#9AA3B5] leading-relaxed line-clamp-2 sm:line-clamp-3 text-justify">
                      {project.description}
                    </p>

                    {/* Micro Specs Table */}
                    <div className="pt-2 grid grid-cols-2 gap-2 text-[10.5px] sm:text-[11px] border-t border-[#242E40]">
                      {project.area ? (
                        <div>
                          <span className="text-[#6A7588] block text-[9.5px] sm:text-[10px]">متراژ / زیربنا:</span>
                          <span className="font-mono text-[#DCE2ED] font-semibold">{project.area}</span>
                        </div>
                      ) : project.designType ? (
                        <div>
                          <span className="text-[#6A7588] block text-[9.5px] sm:text-[10px]">نوع طراحی:</span>
                          <span className="text-[#DE7247] font-semibold">
                            {project.designType === 'facade' ? 'طراحی نما' : 'طراحی داخلی'}
                          </span>
                        </div>
                      ) : null}
                      {project.employer && (
                        <div>
                          <span className="text-[#6A7588] block text-[9.5px] sm:text-[10px]">کارفرما:</span>
                          <span className="text-[#DCE2ED] truncate block">{project.employer}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="pt-2.5 sm:pt-3 border-t border-[#242E40] flex items-center justify-between text-[11px] sm:text-xs text-[#8C95A8] group-hover:text-[#EA845A] transition-colors">
                    <span>مشاهده مشخصات و جزئیات اجرایی</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
