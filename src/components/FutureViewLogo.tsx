import React from 'react';

interface FutureViewLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon' | 'badge';
  theme?: 'bronze' | 'light' | 'monochrome';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const FutureViewLogo: React.FC<FutureViewLogoProps> = ({
  variant = 'horizontal',
  theme = 'bronze',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    xs: { icon: 26, text: 'text-xs tracking-[0.2em]', sub: 'text-[8px] tracking-[0.18em]', gap: 'gap-2' },
    sm: { icon: 34, text: 'text-sm tracking-[0.22em]', sub: 'text-[9px] tracking-[0.2em]', gap: 'gap-2.5' },
    md: { icon: 44, text: 'text-base sm:text-lg tracking-[0.25em]', sub: 'text-[10px] tracking-[0.22em]', gap: 'gap-3.5' },
    lg: { icon: 60, text: 'text-xl sm:text-2xl tracking-[0.28em]', sub: 'text-xs tracking-[0.25em]', gap: 'gap-4' },
    xl: { icon: 88, text: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.32em]', sub: 'text-xs sm:text-sm tracking-[0.3em]', gap: 'gap-5' },
  };

  const currentSize = sizeMap[size];

  // The 3D Faceted Origami Monogram of "FUTURE VIEW" (F + V)
  const renderMark = () => (
    <svg
      width={currentSize.icon}
      height={currentSize.icon}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(14,165,233,0.3)]"
      aria-label="FUTURE VIEW Monogram"
    >
      <defs>
        {/* Specular Cyan Light Facet */}
        <linearGradient id="fvSpecLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Primary Blueprint Cerulean Facet */}
        <linearGradient id="fvWarmBronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Deep Architectural Cobalt-Obsidian Facet */}
        <linearGradient id="fvDeepBronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C4A6E" />
          <stop offset="55%" stopColor="#082F49" />
          <stop offset="100%" stopColor="#031525" />
        </linearGradient>

        {/* Mid-Tone Core Cyan Facet */}
        <linearGradient id="fvMidBronze" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* Diagonal Ribbon Highlight */}
        <linearGradient id="fvDiagonalRibbon" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Metallic Bevel Glow Filter */}
        <filter id="fvEmboss" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.75" />
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#0EA5E9" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter="url(#fvEmboss)">
        {/* Facet 1: Left Vertical Pillar - Front Face of 'F' */}
        <path
          d="M22 28 L40 18 L40 98 L22 84 Z"
          fill="url(#fvWarmBronze)"
          stroke="#BAE6FD"
          strokeWidth="0.7"
          strokeOpacity="0.45"
        />

        {/* Facet 2: Left Vertical Pillar - Inner Bevel Depth Face */}
        <path
          d="M40 18 L48 24 L48 90 L40 98 Z"
          fill="url(#fvDeepBronze)"
          stroke="#0EA5E9"
          strokeWidth="0.5"
          strokeOpacity="0.35"
        />

        {/* Facet 3: Top Horizontal Canopy of 'F' - Top Specular Roof */}
        <path
          d="M40 18 L92 18 L76 34 L40 34 Z"
          fill="url(#fvSpecLight)"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />

        {/* Facet 4: Top Horizontal Canopy Under-Facet */}
        <path
          d="M76 34 L92 18 L92 32 L80 44 L40 44 L40 34 Z"
          fill="url(#fvMidBronze)"
          stroke="#0EA5E9"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />

        {/* Facet 5: Middle Horizontal Truss of 'F' */}
        <path
          d="M40 52 L78 52 L68 64 L40 64 Z"
          fill="url(#fvWarmBronze)"
          stroke="#BAE6FD"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />

        {/* Facet 6: Dynamic Intersecting Cantilever of 'V' (Front Dynamic Face) */}
        <path
          d="M48 40 L88 98 L104 98 L64 36 Z"
          fill="url(#fvDiagonalRibbon)"
          stroke="#E0F2FE"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />

        {/* Facet 7: 'V' Cantilever Depth Shade */}
        <path
          d="M48 40 L64 36 L56 26 L42 32 Z"
          fill="url(#fvDeepBronze)"
          stroke="#0284C7"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />

        {/* Facet 8: Right Upright Wing of 'V' */}
        <path
          d="M88 98 L104 98 L104 54 L92 68 Z"
          fill="url(#fvSpecLight)"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      </g>
    </svg>
  );

  const textColorClass = theme === 'light' 
    ? 'text-[#1B1E28]' 
    : 'text-[#FAF8F5]';

  const subColorClass = theme === 'light'
    ? 'text-[#5E6778]'
    : 'text-[#38BDF8]';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderMark()}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${currentSize.gap} ${className}`}>
        {renderMark()}
        <div className="flex flex-col items-center">
          <span className={`font-black font-heading ${currentSize.text} ${textColorClass} uppercase leading-none`}>
            FUTURE VIEW
          </span>
          {showSubtitle && (
            <span className={`font-mono font-medium ${currentSize.sub} ${subColorClass} uppercase pt-1.5`}>
              ARCHITECTURE · ENGINEERING
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center ${currentSize.gap} px-3.5 py-1.5 rounded-xl glass-sub-panel border border-[#0EA5E9]/30 ${className}`}>
        {renderMark()}
        <div className="flex flex-col text-left">
          <span className="font-extrabold font-heading text-xs tracking-[0.2em] text-[#FAF8F5] uppercase leading-tight">
            FUTURE VIEW
          </span>
          {showSubtitle && (
            <span className="font-mono text-[9px] tracking-[0.16em] text-[#38BDF8] uppercase">
              STUDIO ATELIER
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal layout (Default)
  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      {renderMark()}
      <div className="flex flex-col text-left">
        <span className={`font-black font-heading ${currentSize.text} ${textColorClass} uppercase leading-tight tracking-[0.25em]`}>
          FUTURE VIEW
        </span>
        {showSubtitle && (
          <span className={`font-mono font-medium ${currentSize.sub} ${subColorClass} uppercase`}>
            ARCHITECTURE · ENGINEERING
          </span>
        )}
      </div>
    </div>
  );
};
