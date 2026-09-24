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
      <div className="absolute inset-0 bg-[#0EA5E9]/15" />

      {/* Dynamic Progress Bar with Blueprint Cyan & Electric Cerulean Gradient */}
      <div
        className="h-full bg-gradient-to-r from-[#0369A1] via-[#0EA5E9] to-[#38BDF8] transition-[width] duration-150 ease-out relative origin-left"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 14px rgba(14, 165, 233, 0.85), 0 0 5px rgba(56, 189, 248, 0.7)',
        }}
      >
        {/* Leading precision architectural indicator light */}
        {scrollProgress > 0 && (
          <div 
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E0F2FE] shadow-[0_0_8px_#38BDF8,0_0_16px_#0EA5E9]"
          />
        )}
      </div>
    </div>
  );
};
