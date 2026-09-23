import React, { useState, useEffect } from 'react';
import { FutureViewLogo } from './FutureViewLogo';

interface InitialLoaderProps {
  onLoadingComplete: () => void;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState('بررسی مختصات و ماتریس سازه‌ای...');

  useEffect(() => {
    const statuses = [
      'بررسی مختصات و ماتریس سازه‌ای...',
      'فراخوانی مستندات و شناسنامه پروژه‌ها...',
      'بارگذاری استودیو FUTURE VIEW...',
      'تکمیل و آماده‌سازی پورتفولیو...',
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next >= 100) {
          clearInterval(interval);
          setStatusText('آماده ورود');
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const step = Math.floor((next / 100) * statuses.length);
        if (statuses[step]) {
          setStatusText(statuses[step]);
        }
        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0E1117] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
      dir="rtl"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(180, 195, 220, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 195, 220, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Avant-Garde CAD Registration Markers */}
      <div className="absolute top-6 right-6 font-mono text-[10px] text-[#5A667E] tracking-widest">
        REF. N-36°17′40″ / E-59°36′24″
      </div>
      <div className="absolute top-6 left-6 font-mono text-[10px] text-[#5A667E] tracking-widest">
        ARCHITECTURAL DOSSIER / V-2026
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-[#5A667E]">
        MOHAMMAD REZA NASERI
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#5A667E]">
        FUTURE VIEW ATELIER
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md px-6 space-y-7">
        
        {/* Animated Architectural Logo Monogram */}
        <div className="relative">
          {/* Subtle Ambient Pulse Ring */}
          <div className="absolute -inset-4 rounded-2xl bg-[#DE7247]/15 blur-xl animate-pulse" />
          
          <div className="relative p-4 rounded-2xl glass-panel border border-[#3A4761]/80 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
            <FutureViewLogo variant="icon" size="lg" theme="bronze" />
          </div>
        </div>

        {/* Identity & Typography */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-sub-panel text-[11px] font-mono text-[#EA845A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA845A] animate-ping" />
            <span>INITIALIZING ATELIER</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#F8F6F0] tracking-tight pt-1">
            محمدرضا ناصری
          </h1>
          <p className="text-xs text-[#9AA3B5] leading-relaxed">
            مدیریت و نظارت بر پروژه‌های کلان درمانی و ابنیه فاخر ساختمانی
          </p>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-full space-y-2 pt-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#8C95A8] text-right truncate max-w-[200px]">{statusText}</span>
            <span className="text-[#EA845A] font-bold tabular-nums">{progress}%</span>
          </div>

          <div className="w-full h-1 bg-[#1A2232] rounded-full overflow-hidden border border-[#2B364A]/60">
            <div
              className="h-full bg-gradient-to-r from-[#DE7247] via-[#EA845A] to-[#F5D4C4] transition-all duration-150 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip button if user wants immediate access */}
        <button
          onClick={handleSkip}
          className="text-[11px] font-mono text-[#6A768D] hover:text-[#EA845A] transition-colors cursor-pointer pt-2"
        >
          [ ورود سریع به پورتفولیو ]
        </button>

      </div>
    </div>
  );
};
