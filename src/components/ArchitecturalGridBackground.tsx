import React, { useEffect, useRef } from 'react';

export const ArchitecturalGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High DPI adjustment
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      active: true,
      lastInteraction: Date.now(),
      pulseRadius: 0,
      isTouch: false,
    };

    // Touch & Mouse handlers
    const updatePointer = (clientX: number, clientY: number, isTouch = false) => {
      mouse.targetX = clientX;
      mouse.targetY = clientY;
      mouse.active = true;
      mouse.lastInteraction = Date.now();
      mouse.isTouch = isTouch;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY, false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY, true);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY, true);
        mouse.pulseRadius = 15;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      mouse.pulseRadius = 20;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Device orientation for mobile tilt parallax
    let tiltX = 0;
    let tiltY = 0;
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        tiltX = Math.max(-1, Math.min(1, e.gamma / 30));
        tiltY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gridSize = 54;
    let frame = 0;

    const render = () => {
      frame++;

      // If user hasn't interacted for a bit or on mobile, create an ambient architectural oscillation
      const timeSinceInteraction = Date.now() - mouse.lastInteraction;
      if (timeSinceInteraction > 3000 || !mouse.active) {
        const t = frame * 0.015;
        const ambientOffsetRange = mouse.isTouch ? 80 : 140;
        const targetAmbientX = (width * 0.5) + Math.cos(t) * ambientOffsetRange + tiltX * 90;
        const targetAmbientY = (height * 0.4) + Math.sin(t * 1.3) * (ambientOffsetRange * 0.6) + tiltY * 90;
        mouse.targetX += (targetAmbientX - mouse.targetX) * 0.03;
        mouse.targetY += (targetAmbientY - mouse.targetY) * 0.03;
      }

      // Smooth interpolation toward target pointer position
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      // Expand & fade pulse wave
      if (mouse.pulseRadius > 0 && mouse.pulseRadius < 300) {
        mouse.pulseRadius += 6;
      } else if (mouse.pulseRadius >= 300) {
        mouse.pulseRadius = 0;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Ambient Illuminating Spotlight (Deep Obsidian & Blueprint Cyan)
      const glowRadius = mouse.isTouch ? 380 : 360;
      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        glowRadius
      );
      radialGlow.addColorStop(0, 'rgba(14, 165, 233, 0.08)');
      radialGlow.addColorStop(0.35, 'rgba(56, 189, 248, 0.03)');
      radialGlow.addColorStop(0.75, 'rgba(15, 23, 42, 0.04)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Ripple Pulse on Touch/Click
      if (mouse.pulseRadius > 0) {
        const pulseAlpha = Math.max(0, 1 - mouse.pulseRadius / 300) * 0.28;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${pulseAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 3. Faint Architectural CAD Crosshairs at Pointer
      ctx.save();
      ctx.setLineDash([4, 8]);
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.15)';

      // Horizontal guide
      ctx.beginPath();
      ctx.moveTo(0, mouse.y);
      ctx.lineTo(width, mouse.y);
      ctx.stroke();

      // Vertical guide
      ctx.beginPath();
      ctx.moveTo(mouse.x, 0);
      ctx.lineTo(mouse.x, height);
      ctx.stroke();
      ctx.restore();

      // 4. Grid Lines & Dynamic Structural Columns
      const numCols = Math.ceil(width / gridSize) + 1;
      const numRows = Math.ceil(height / gridSize) + 1;

      // Draw Vertical Lines
      ctx.lineWidth = 0.5;
      for (let col = 0; col < numCols; col++) {
        const x = col * gridSize;
        const isMajor = col % 4 === 0;

        const distX = Math.abs(x - mouse.x);
        let alpha = isMajor ? 0.045 : 0.022;
        if (distX < 280) {
          alpha += (1 - distX / 280) * 0.08;
        }

        ctx.strokeStyle = `rgba(180, 195, 220, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw Horizontal Lines
      for (let row = 0; row < numRows; row++) {
        const y = row * gridSize;
        const isMajor = row % 4 === 0;

        const distY = Math.abs(y - mouse.y);
        let alpha = isMajor ? 0.045 : 0.022;
        if (distY < 280) {
          alpha += (1 - distY / 280) * 0.08;
        }

        ctx.strokeStyle = `rgba(180, 195, 220, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 5. Structural CAD Intersection Nodes ('+' crosshair drafting nodes)
      const crossSize = 3.5;
      for (let col = 0; col < numCols; col++) {
        const x = col * gridSize;
        for (let row = 0; row < numRows; row++) {
          const y = row * gridSize;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const isMajorNode = col % 4 === 0 && row % 4 === 0;

          if (dist < 300) {
            const factor = 1 - dist / 300;
            ctx.lineWidth = 1;
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.12 + factor * 0.45})`;

            // Interactive cross expansion
            const arm = crossSize + factor * 3;
            ctx.beginPath();
            ctx.moveTo(x - arm, y);
            ctx.lineTo(x + arm, y);
            ctx.moveTo(x, y - arm);
            ctx.lineTo(x, y + arm);
            ctx.stroke();

            // Central micro-node dot for close points
            if (factor > 0.5) {
              ctx.fillStyle = `rgba(186, 230, 253, ${factor * 0.7})`;
              ctx.beginPath();
              ctx.arc(x, y, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          } else if (isMajorNode) {
            ctx.lineWidth = 0.75;
            ctx.strokeStyle = 'rgba(14, 165, 233, 0.08)';
            ctx.beginPath();
            ctx.moveTo(x - crossSize, y);
            ctx.lineTo(x + crossSize, y);
            ctx.moveTo(x, y - crossSize);
            ctx.lineTo(x, y + crossSize);
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
