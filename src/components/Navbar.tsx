import React, { useState, useEffect } from 'react';
import { FutureViewLogo } from './FutureViewLogo';
import { PhoneCall, Globe, Menu, X, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { organicScrollTo } from '../utils/smoothScroll';

interface NavbarProps {
  onScrollToContact: () => void;
  lang: 'fa' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToContact,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#profile', labelFa: 'سوابق و عملکرد', labelEn: 'Profile' },
    { href: '#brands', labelFa: 'استودیو و برندها', labelEn: 'Atelier & Brands' },
    { href: '#projects', labelFa: 'آرشیو پروژه‌ها', labelEn: 'Projects Archive' },
    { href: '#experience', labelFa: 'مسئولیت‌های مدیریتی', labelEn: 'Experience' },
    { href: '#certificates', labelFa: 'صلاحیت‌ها و مدارک', labelEn: 'Credentials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);

      // Determine active section
      const sections = ['contact', 'certificates', 'experience', 'projects', 'brands', 'profile'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    organicScrollTo(href, { offset: 84 });
  };

  return (
    <>
      {/* Topmost Micro Utility Banner */}
      <div className="bg-[#090C10]/90 backdrop-blur-md border-b border-[#1C2230] text-[#8C95A8] text-[11px] py-1.5 px-4 hidden sm:block relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#EA845A]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>آماده بررسی و مشاوره پروژه‌های کلان بیمارستانی و ساختمانی</span>
            </span>
            <span className="text-[#2C3547]">|</span>
            <span className="flex items-center gap-1 text-[#8C95A8]">
              <MapPin className="w-3 h-3 text-[#DE7247]" />
              <span>مشهد مقدس · استان خراسان رضوی</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#8C95A8]">
            <span className="text-xs text-[#7B879E]">تماس مستقیم:</span>
            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="hover:text-[#EA845A] transition-colors font-bold text-[#E0E6F0]"
            >
              <bdi dir="ltr" className="ltr-num">{PERSONAL_INFO.phone}</bdi>
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Island Header with Glassmorphism */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0E1117]/88 backdrop-blur-xl shadow-2xl border-b border-[#2C374D]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[#0E1117]/75 backdrop-blur-lg border-b border-[#222B3D]/70'
      }`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* Brand & BOLD Name Block */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                organicScrollTo(document.body, { offset: 0 });
              }}
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="محمدرضا ناصری - FUTURE VIEW"
            >
              <FutureViewLogo variant="icon" size="sm" theme="bronze" />

              <div className="flex flex-col text-right">
                {/* Extra BOLD Mohammad Reza Naseri Name */}
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black text-[#FFFFFF] group-hover:text-[#EA845A] transition-colors tracking-tight font-sans">
                    محمدرضا ناصری
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded glass-sub-panel text-[#EA845A] hidden xs:inline-block">
                    عمران
                  </span>
                </div>
                
                <span className="text-[11px] font-medium text-[#9AA3B5] tracking-tight">
                  مدیر و ناظر پروژه‌های درمانی · FUTURE VIEW
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#EA845A] glass-sub-panel border-[#EA845A]/40'
                        : 'text-[#9AA3B5] hover:text-[#FFFFFF] hover:bg-[#151A24]/70'
                    }`}
                  >
                    {lang === 'fa' ? link.labelFa : link.labelEn}
                  </a>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language Toggle */}
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono font-bold text-[#A8B2C4] hover:text-white glass-sub-panel hover:border-[#EA845A]/40 rounded-lg transition-colors cursor-pointer"
                title={lang === 'fa' ? 'Switch to English' : 'تغییر به زبان فارسی'}
              >
                <Globe className="w-3.5 h-3.5 text-[#DE7247]" />
                <span>{lang === 'fa' ? 'EN' : 'فا'}</span>
              </button>

              {/* Direct Call Button */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#FFFFFF] bg-[#DE7247] hover:bg-[#EA845A] rounded-lg transition-all shadow-md shadow-[#DE7247]/20 hover:shadow-[#DE7247]/35 cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <bdi dir="ltr" className="ltr-num">{PERSONAL_INFO.phone}</bdi>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#C5CEDD] hover:text-white glass-sub-panel rounded-lg transition-colors cursor-pointer"
                aria-label="باز کردن منو"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Full-Screen Architectural Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-[#242C3D] px-4 pt-4 pb-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
            {/* Header Info */}
            <div className="p-3 rounded-lg glass-sub-panel flex items-center justify-between">
              <div>
                <div className="text-sm font-black text-white">محمدرضا ناصری</div>
                <div className="text-[11px] text-[#8C95A8]">مهندس عمران | کارشناس ارشد پروژه‌های درمانی</div>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                پاسخگو
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-3 text-sm font-bold text-[#DCE2ED] hover:text-[#EA845A] hover:bg-[#181E2A]/70 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{lang === 'fa' ? link.labelFa : link.labelEn}</span>
                  <span className="text-xs text-[#6B768C] font-mono">→</span>
                </a>
              ))}
            </div>

            {/* Quick Contact Button on Mobile */}
            <div className="pt-2 border-t border-[#202736]">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#FFFFFF] bg-[#DE7247] rounded-lg shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>تماس مستقیم: <bdi dir="ltr" className="ltr-num">{PERSONAL_INFO.phone}</bdi></span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
