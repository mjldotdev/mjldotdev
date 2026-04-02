"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * useNavPill Hook
 *
 * Creates an animated pill/background element that follows the active navigation item.
 * The pill smoothly animates to match the position and size of the active link.
 *
 * @param activeId - The ID of the currently active section
 * @param options - Configuration object for customization
 * @returns Object containing refs for the nav container and pill element, plus updatePill function
 *
 * @example
 * const { navRef, pillRef, updatePill } = useNavPill(activeId, {
 *   breakpoint: 768,
 *   transitionDuration: 300
 * });
 */

interface UseNavPillOptions {
  breakpoint?: number;
  fallbackId?: string;
  transitionDuration?: number;
}

export function useNavPill(activeId: string, options: UseNavPillOptions = {}) {
  const {
    breakpoint = 768,
    transitionDuration = 300,
    fallbackId = "home",
  } = options;

  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  /**
   * Updates the pill position and size to match the target element
   * Handles responsive behavior (hides on mobile)
   *
   * @param el - The target navigation element to match
   */
  const updatePill = useCallback(
    (el: HTMLElement | null) => {
      // Guard: Ensure all required refs exist
      if (!(el && navRef.current && pillRef.current)) {
        return;
      }

      // Responsive behavior: Hide pill on mobile devices
      if (window.innerWidth < breakpoint) {
        pillRef.current.style.opacity = "0";
        pillRef.current.style.pointerEvents = "none";
        return;
      }

      // Get bounding rectangles for both the target element and nav container
      const rect = el.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      // Calculate relative position within the nav container
      const left = rect.left - navRect.left;
      const top = rect.top - navRect.top;
      const width = rect.width;
      const height = rect.height;

      // Apply styles to pill element with CSS transitions for smooth animation
      // Using Object.assign for cleaner code, but could also use individual assignments
      Object.assign(pillRef.current.style, {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
        opacity: "1",
        pointerEvents: "auto",
        transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      });
    },
    [breakpoint, transitionDuration]
  );

  /**
   * Effect: Updates pill position when activeId changes
   * Finds the corresponding nav link and updates pill to match it
   */
  useEffect(() => {
    // Guard: Ensure nav container exists
    if (!navRef.current) {
      return;
    }

    // Find the nav link that matches the active section ID
    let target = navRef.current.querySelector(
      `a[href="#${activeId}"]`
    ) as HTMLElement | null;

    // Fallback: If no matching link found, use the fallback ID
    // This prevents pill from disappearing if activeId doesn't have a corresponding link
    if (!target && fallbackId) {
      target = navRef.current.querySelector(
        `a[href="#${fallbackId}"]`
      ) as HTMLElement | null;
    }

    updatePill(target);
  }, [activeId, fallbackId, updatePill]);

  /**
   * Effect: Handle window resize events
   * Recalculates pill position when viewport changes (e.g., window resize, orientation change)
   * Important for responsive behavior and maintaining accuracy
   */
  useEffect(() => {
    if (!navRef.current) {
      return;
    }

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      // Debounce resize events to avoid excessive recalculations
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const target = navRef.current?.querySelector(
          `a[href="#${activeId}"]`
        ) as HTMLElement | null;

        updatePill(target);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [activeId, updatePill]);

  return { navRef, pillRef, updatePill };
}
