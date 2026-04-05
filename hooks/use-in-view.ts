"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  initialInView?: boolean; // SSR control
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLElement>({
  threshold = 0,
  root = null,
  rootMargin = "0px",
  triggerOnce = false,
  initialInView = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(initialInView);
  const hasTriggeredRef = useRef(false);

  // Stabilize threshold (array or number)
  const thresholdMemo = useMemo(() => {
    return Array.isArray(threshold) ? [...threshold] : threshold;
  }, [JSON.stringify(threshold)]);

  const observerOptions = useMemo(
    () => ({
      threshold: thresholdMemo,
      root,
      rootMargin,
    }),
    [thresholdMemo, root, rootMargin]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    // SSR / unsupported fallback
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;

      if (triggerOnce) {
        if (isVisible && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      } else {
        setIsIntersecting(isVisible);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect(); // ✅ full cleanup
    };
  }, [observerOptions, triggerOnce]);

  return { ref, isIntersecting };
}
