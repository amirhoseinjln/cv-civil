import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSummarySection } from './components/ProfileSummarySection';
import { BrandShowcaseSection } from './components/BrandShowcaseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CredentialsAndSkills } from './components/CredentialsAndSkills';
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

      {/* Precision Architectural Studio Cursor (Bespoke Loupe & Lens) */}
      <ArchitecturalCursor />

      {/* Interactive Civil Engineering Architectural Grid & Coordinate Plane with Mobile Touch & Tilt */}
      <ArchitecturalGridBackground />

      {/* Top Floating Island Header */}
      <Navbar
        onScrollToContact={handleScrollToContact}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main Content Sections with Intersection Observer Fade-in & Slide-up */}
      <main className="relative z-10">
        {/* 1. Executive Hero Section */}
        <AnimatedSection threshold={0.05}>
          <HeroSection
            onScrollToContact={handleScrollToContact}
            lang={lang}
          />
        </AnimatedSection>

        {/* 2. Profile Summary & Core Competencies */}
        <AnimatedSection threshold={0.1}>
          <ProfileSummarySection lang={lang} />
        </AnimatedSection>

        {/* 3. Dedicated Brands Architecture (FUTURE VIEW Atelier & BarthaVa Contracting) */}
        <AnimatedSection threshold={0.1}>
          <BrandShowcaseSection lang={lang} />
        </AnimatedSection>

        {/* 4. Complete Projects Directory & Filterable Archive */}
        <AnimatedSection threshold={0.08}>
          <ProjectsSection lang={lang} />
        </AnimatedSection>

        {/* 5. Career & Supervisory Appointments Timeline */}
        <AnimatedSection threshold={0.1}>
          <ExperienceTimeline lang={lang} />
        </AnimatedSection>

        {/* 6. Education, Accredited Certifications & Technical Domain Competencies */}
        <AnimatedSection threshold={0.1}>
          <CredentialsAndSkills lang={lang} />
        </AnimatedSection>

        {/* 7. Direct Executive Contact Channels */}
        <AnimatedSection threshold={0.1}>
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
