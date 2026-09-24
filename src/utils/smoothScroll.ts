/**
 * Organic, human-damped smooth scrolling engine.
 * Avoids mechanical browser linear easing or synthetic AI stutter.
 * Uses a quintic-exponential ease-out curve with physical momentum settling.
 */

let activeScrollAnimationId: number | null = null;

// Quintic-exponential hybrid easeOut: fast initial glide, exquisite physical deceleration
const organicEaseOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 5);
};

export const organicScrollTo = (
  target: HTMLElement | string,
  options?: {
    offset?: number;
    baseDuration?: number;
    onComplete?: () => void;
  }
) => {
  const element =
    typeof target === 'string'
      ? document.querySelector<HTMLElement>(target)
      : target;

  if (!element) return;

  if (activeScrollAnimationId !== null) {
    cancelAnimationFrame(activeScrollAnimationId);
    activeScrollAnimationId = null;
  }

  const offset = options?.offset ?? 88; // accounts for top floating island header
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = element.getBoundingClientRect();
  const targetY = Math.max(0, elementRect.top + startY - offset);
  const distance = targetY - startY;

  // If already at target within 2px, finish immediately
  if (Math.abs(distance) < 2) {
    options?.onComplete?.();
    return;
  }

  // Calculate dynamic organic duration: clamp between 550ms and 1050ms
  const dynamicDuration = Math.min(
    1050,
    Math.max(550, Math.abs(distance) * 0.45 + (options?.baseDuration ?? 400))
  );

  let startTime: number | null = null;
  let userInterrupted = false;

  // Cancel immediately if the user touches or scrolls manually during movement
  const interruptHandler = () => {
    userInterrupted = true;
    if (activeScrollAnimationId !== null) {
      cancelAnimationFrame(activeScrollAnimationId);
      activeScrollAnimationId = null;
    }
    removeListeners();
  };

  const addListeners = () => {
    window.addEventListener('wheel', interruptHandler, { passive: true });
    window.addEventListener('touchstart', interruptHandler, { passive: true });
    window.addEventListener('keydown', interruptHandler, { passive: true });
  };

  const removeListeners = () => {
    window.removeEventListener('wheel', interruptHandler);
    window.removeEventListener('touchstart', interruptHandler);
    window.removeEventListener('keydown', interruptHandler);
  };

  addListeners();

  const step = (currentTime: number) => {
    if (userInterrupted) return;

    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / dynamicDuration, 1);
    const easedProgress = organicEaseOut(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      activeScrollAnimationId = requestAnimationFrame(step);
    } else {
      activeScrollAnimationId = null;
      removeListeners();
      options?.onComplete?.();
    }
  };

  activeScrollAnimationId = requestAnimationFrame(step);
};
