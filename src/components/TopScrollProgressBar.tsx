import React, { useState, useEffect } from 'react';

export const TopScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none select-none overflow-visible"
      aria-hidden="true"
    >
      {/* Background ultra-subtle guide line */}
      <div className="absolute inset-0 bg-[#DE7247]/10" />

      {/* Dynamic Progress Bar with Warm Architectural Terracotta & Bronze Gradient */}
      <div
        className="h-full bg-gradient-to-r from-[#DE7247] via-[#EA845A] to-[#F5A988] transition-[width] duration-150 ease-out relative origin-left"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 12px rgba(222, 114, 71, 0.8), 0 0 4px rgba(234, 132, 90, 0.6)',
        }}
      >
        {/* Leading precision architectural indicator light */}
        {scrollProgress > 0 && (
          <div 
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFF0EB] shadow-[0_0_8px_#DE7247,0_0_14px_#EA845A]"
          />
        )}
      </div>
    </div>
  );
};
