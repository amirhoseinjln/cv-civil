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
      className="shrink-0 transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(184,134,85,0.22)]"
      aria-label="FUTURE VIEW Monogram"
    >
      <defs>
        {/* Specular Warm Alabaster Light Facet */}
        <linearGradient id="fvSpecLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF5ED" />
          <stop offset="45%" stopColor="#F5D0BA" />
          <stop offset="100%" stopColor="#DE8962" />
        </linearGradient>

        {/* Primary Warm Terracotta Facet */}
        <linearGradient id="fvWarmBronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F09B74" />
          <stop offset="50%" stopColor="#D46A3D" />
          <stop offset="100%" stopColor="#9C3F1B" />
        </linearGradient>

        {/* Deep Architectural Basalt Shadow Facet */}
        <linearGradient id="fvDeepBronze" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#542310" />
          <stop offset="55%" stopColor="#381507" />
          <stop offset="100%" stopColor="#1E0C04" />
        </linearGradient>

        {/* Mid-Tone Core Facet */}
        <linearGradient id="fvMidBronze" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E2875E" />
          <stop offset="60%" stopColor="#B8542A" />
          <stop offset="100%" stopColor="#7D3212" />
        </linearGradient>

        {/* Diagonal Ribbon Highlight */}
        <linearGradient id="fvDiagonalRibbon" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FCE7DB" />
          <stop offset="50%" stopColor="#DE7B50" />
          <stop offset="100%" stopColor="#963C18" />
        </linearGradient>

        {/* Metallic Bevel Glow Filter */}
        <filter id="fvEmboss" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.65" />
          <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#DE7B50" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#fvEmboss)">
        {/* Facet 1: Left Vertical Pillar - Front Face of 'F' */}
        <path
          d="M22 28 L40 18 L40 98 L22 84 Z"
          fill="url(#fvWarmBronze)"
          stroke="#F3D7B7"
          strokeWidth="0.7"
          strokeOpacity="0.4"
        />

        {/* Facet 2: Left Vertical Pillar - Inner Bevel Depth Face */}
        <path
          d="M40 18 L48 24 L48 90 L40 98 Z"
          fill="url(#fvDeepBronze)"
          stroke="#A87542"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Facet 3: Top Horizontal Canopy of 'F' - Top Specular Roof */}
        <path
          d="M40 18 L92 18 L76 34 L40 34 Z"
          fill="url(#fvSpecLight)"
          stroke="#FFF2DE"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />

        {/* Facet 4: Top Horizontal Canopy Under-Facet */}
        <path
          d="M76 34 L92 18 L84 40 L70 46 Z"
          fill="url(#fvMidBronze)"
          stroke="#C89762"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Facet 5: Dynamic Origami Folding Ribbon (Connecting F crossbar to V vertex) */}
        <path
          d="M40 48 L70 48 L56 72 L40 64 Z"
          fill="url(#fvDiagonalRibbon)"
          stroke="#FCE3C8"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />

        {/* Facet 6: Center Intersecting Shadow Wedge of 'V' */}
        <path
          d="M70 48 L84 40 L64 88 L56 72 Z"
          fill="url(#fvDeepBronze)"
          stroke="#7D491F"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Facet 7: Right Wing of 'V' - Main Slanted Diagonal Plane */}
        <path
          d="M92 18 L104 26 L68 106 L56 106 L64 88 L84 40 Z"
          fill="url(#fvWarmBronze)"
          stroke="#F7DEC0"
          strokeWidth="0.7"
          strokeOpacity="0.5"
        />

        {/* Facet 8: Right Wing of 'V' - Outer Silhouette Bevel */}
        <path
          d="M104 26 L98 32 L66 102 L68 106 Z"
          fill="url(#fvMidBronze)"
          opacity="0.85"
        />

        {/* Specular Apex Micro-Points (Jewel-cut architectural highlights) */}
        <circle cx="40" cy="18" r="1.5" fill="#FFF8EE" opacity="0.9" />
        <circle cx="92" cy="18" r="1.5" fill="#FFF8EE" opacity="0.9" />
        <circle cx="68" cy="106" r="1.5" fill="#E8C398" opacity="0.8" />
      </g>
    </svg>
  );

  const wordmarkColor =
    theme === 'bronze'
      ? 'text-[#F5F2EB] group-hover:text-[#E8C398]'
      : theme === 'light'
      ? 'text-white'
      : 'text-neutral-200';

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{renderMark()}</div>;
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#171A22] via-[#12141B] to-[#0E1015] border border-[#2E3342] shadow-xl ${className}`}>
        {renderMark()}
        <div className="flex flex-col text-right">
          <span className={`font-extrabold tracking-[0.24em] font-sans ${currentSize.text} ${wordmarkColor} leading-none`}>
            FUTURE VIEW
          </span>
          <span className="text-[9px] text-[#C89B6D] tracking-[0.16em] uppercase font-medium mt-1">
            Architecture & Engineering Studio
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`group flex flex-col items-center text-center ${currentSize.gap} ${className}`}>
        {renderMark()}
        <div className="flex flex-col items-center">
          <span className={`font-black uppercase tracking-[0.3em] font-sans ${currentSize.text} ${wordmarkColor} transition-colors leading-tight`}>
            FUTURE VIEW
          </span>
          {showSubtitle && (
            <span className={`text-[#B88655] uppercase font-medium mt-1 ${currentSize.sub}`}>
              Life, imagined then projected
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`group inline-flex items-center ${currentSize.gap} ${className}`}>
      {renderMark()}
      <div className="flex flex-col leading-none text-right">
        <span className={`font-black uppercase font-sans ${currentSize.text} ${wordmarkColor} transition-colors tracking-[0.26em]`}>
          FUTURE VIEW
        </span>
        {showSubtitle && (
          <span className={`text-[#C89B6D] font-medium uppercase mt-1 ${currentSize.sub}`}>
            Life, imagined then projected
          </span>
        )}
      </div>
    </div>
  );
};
