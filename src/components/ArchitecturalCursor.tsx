import React, { useEffect, useState, useRef } from 'react';

export const ArchitecturalCursor: React.FC = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string>('');

  const mousePos = useRef({ x: -100, y: -100 });
  const lensPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate for devices with real mouse/trackpad pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;
    setIsSupported(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, [role="button"], .cursor-pointer, [data-interactive]'
        ) as HTMLElement | null;

        if (interactive) {
          setIsHovering(true);
          const customLabel = interactive.getAttribute('data-cursor') || '';
          setHoverLabel(customLabel);
        } else {
          setIsHovering(false);
          setHoverLabel('');
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rafId: number;
    const animate = () => {
      // Human-crafted spring interpolation (fluid lens effect)
      const speed = isHovering ? 0.24 : 0.18;
      lensPos.current.x += (mousePos.current.x - lensPos.current.x) * speed;
      lensPos.current.y += (mousePos.current.y - lensPos.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lensPos.current.x}px, ${lensPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, isHovering]);

  if (!isSupported || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Drafting Micro Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full will-change-transform transition-all duration-150 ${
          isClicking
            ? 'scale-150 bg-[#E07A4F]'
            : isHovering
            ? 'scale-75 bg-[#E8926B]'
            : 'bg-[#E58358]'
        }`}
        style={{
          boxShadow: '0 0 8px rgba(229, 131, 88, 0.6)',
        }}
      />

      {/* Bespoke Architectural Loupe Lens */}
      <div
        ref={lensRef}
        className={`absolute top-0 left-0 will-change-transform flex items-center justify-center transition-all duration-300 ease-out ${
          isHovering
            ? '-ml-6 -mt-6 w-12 h-12 rounded-full border border-[#E07A4F]/70 bg-[#E07A4F]/[0.08] backdrop-blur-[1px] shadow-[0_0_20px_rgba(224,122,79,0.18)] scale-110'
            : isClicking
            ? '-ml-4 -mt-4 w-8 h-8 rounded-full border border-[#E07A4F]/90 bg-[#E07A4F]/20 scale-90'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-[#8A92A6]/30'
        }`}
      >
        {/* Minimal Corner Loupe Markers */}
        {isHovering && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A4F] animate-pulse" />
        )}
      </div>
    </div>
  );
};
