import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSummarySection } from './components/ProfileSummarySection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CredentialsAndSkills } from './components/CredentialsAndSkills';
import { ProjectsSection } from './components/ProjectsSection';
import { BrandShowcaseSection } from './components/BrandShowcaseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArchitecturalCursor } from './components/ArchitecturalCursor';
import { ArchitecturalGridBackground } from './components/ArchitecturalGridBackground';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AnimatedSection } from './components/AnimatedSection';
import { InitialLoader } from './components/InitialLoader';
import { TopScrollProgressBar } from './components/TopScrollProgressBar';
import { organicScrollTo } from './utils/smoothScroll';

export default function App() {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [isLoading, setIsLoading] = useState(true);

  const toggleLang = () => {
    setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const handleScrollToContact = () => {
    organicScrollTo('#contact', { offset: 84 });
  };

  return (
    <div className={`min-h-screen bg-[#0E1117] text-[#F3EFE6] selection:bg-[#DE7247] selection:text-white relative ${lang === 'fa' ? 'rtl font-sans' : 'ltr font-sans'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      
      {/* Precision Top Horizontal Scroll Progress Bar */}
      <TopScrollProgressBar />

      {/* Initial Bespoke Architectural Preloader */}
      {isLoading && (
        <InitialLoader onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Precision Architectural Studio Cursor */}
      <ArchitecturalCursor />

      {/* Interactive Civil Engineering Architectural Grid & Coordinate Plane with Mobile Touch */}
      <ArchitecturalGridBackground />

      {/* Top Floating Island Header */}
      <Navbar
        onScrollToContact={handleScrollToContact}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main Content Sections: Personal Resume First, Followed by Complete 27-Project Archive & Brands */}
      <main className="relative z-10">
        {/* 1. Executive Hero Section */}
        <AnimatedSection>
          <HeroSection
            onScrollToContact={handleScrollToContact}
            lang={lang}
          />
        </AnimatedSection>

        {/* 2. Profile Summary & Core Competencies (پروفایل و خلاصه سوابق حرفه‌ای) */}
        <AnimatedSection>
          <ProfileSummarySection lang={lang} />
        </AnimatedSection>

        {/* 3. Personal Career Record & Government Service (سوابق خدمت دولتی و مسئولیت‌های اجرایی - کارت‌های تاریخچه خوشگل موبایل‌فرندلی) */}
        <AnimatedSection>
          <ExperienceTimeline lang={lang} />
        </AnimatedSection>

        {/* 4. Academic Credentials, Certifications & Technical Mastery (مشخصات فردی، تحصیلی، گواهینامه‌های بین‌المللی با PT و مهارت‌ها) */}
        <AnimatedSection>
          <CredentialsAndSkills lang={lang} />
        </AnimatedSection>

        {/* 5. Complete Projects Directory (۳۲ پروژه شاخص درمانی، پیمانکاری و ساختمانی بدون جا افتادن هیچ پروژه‌ای) */}
        <AnimatedSection>
          <ProjectsSection lang={lang} />
        </AnimatedSection>

        {/* 6. Dedicated Brands Architecture (استودیو FUTURE VIEW و شرکت پیمانکاری عمران تهویه بارثاوا) */}
        <AnimatedSection>
          <BrandShowcaseSection lang={lang} />
        </AnimatedSection>

        {/* 7. Direct Executive Contact Channels */}
        <AnimatedSection>
          <ContactSection lang={lang} />
        </AnimatedSection>
      </main>

      {/* Mobile Floating Quick Dock */}
      <MobileQuickBar />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
