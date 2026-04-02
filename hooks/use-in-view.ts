"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  /**
   * If true, the observer will unobserve the element after it intersects once.
   * Perfect for entrance animations and counters.
   * @default false
   */
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLElement>({
  threshold = 0,
  root = null,
  rootMargin = "0px",
  triggerOnce = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Stringify the threshold array to prevent infinite re-renders if passed inline
  const thresholdString = JSON.stringify(threshold);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    // SSR fallback
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        // If triggerOnce is true, we only care about the first intersection
        if (triggerOnce) {
          if (isElementIntersecting && !hasTriggered) {
            setIsIntersecting(true);
            setHasTriggered(true);
            observer.unobserve(element); // Stop observing for performance
          }
        } else {
          setIsIntersecting(isElementIntersecting);
        }
      },
      {
        // Parse the threshold back into an array/number
        threshold: JSON.parse(thresholdString),
        root,
        rootMargin,
      }
    );

    if (!hasTriggered) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [thresholdString, root, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
}
