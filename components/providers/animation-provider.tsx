"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elementMap = new WeakMap<
      HTMLElement,
      { delay: number; once: boolean; parentStagger?: number; index?: number }
    >();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const meta = elementMap.get(el);
          if (!meta) {
            return;
          }

          const { delay, once, parentStagger = 0, index = 0 } = meta;
          const exitClass = el.dataset.exit || "is-exiting";

          if (prefersReducedMotion) {
            el.classList.add("is-visible");
            return;
          }

          // Calculate total delay ONCE for both entry and exit
          const totalDelay = delay + parentStagger * index;

          if (entry.isIntersecting) {
            el.classList.remove(exitClass);

            if (totalDelay > 0) {
              el.style.animationDelay = `${totalDelay}ms`;
              el.style.setProperty("--custom-delay", `${totalDelay}ms`);
            }

            el.classList.add("is-visible");

            if (once) {
              observer.unobserve(el);
            }
          } else if (!once) {
            if (totalDelay > 0) {
              el.style.animationDelay = `${totalDelay}ms`;
              el.style.setProperty("--custom-delay", `${totalDelay}ms`);
            }

            el.classList.add(exitClass);

            requestAnimationFrame(() => {
              el.classList.remove("is-visible");
            });

            // REMOVED: setTimeout cleanup to prevent race conditions.
            // The style.animationDelay is safely overwritten on the next intersection.
          }
        });
      },
      { threshold: 0.1 }
    );

    function setupElement(el: Element, parentStagger?: number, index?: number) {
      const element = el as HTMLElement;

      // Deduplication guard saves us!
      if (elementMap.has(element)) {
        return;
      }

      const delay = Number.parseInt(element.dataset.delay || "0", 10);
      const duration = Number.parseInt(element.dataset.duration || "0", 10);
      const once = element.dataset.once === "true";

      if (duration) {
        element.style.animationDuration = `${duration}ms`;
      }

      elementMap.set(element, { delay, once, parentStagger, index });
      observer.observe(element);
    }

    function setupStagger(container: Element) {
      const stagger = Number.parseInt(
        (container as HTMLElement).dataset.stagger || "0",
        10
      );
      if (!stagger) {
        return;
      }

      const children = container.querySelectorAll(":scope > [data-animate]");
      children.forEach((child, index) => {
        // REMOVED: mutating DOM el.dataset.delay. WeakMap handles it now!
        setupElement(child, stagger, index);
      });
    }

    function init() {
      // 1. Process stagger groups FIRST so they get their index values
      document.querySelectorAll("[data-stagger]").forEach(setupStagger);

      // 2. Process EVERYTHING else.
      // The WeakMap deduplication inside setupElement will automatically
      // ignore the stagger children we already processed!
      document
        .querySelectorAll("[data-animate]")
        .forEach((el) => setupElement(el));
    }

    const rootContainer = document.querySelector("main") || document.body;
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldInit = false;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }
          if (
            node.hasAttribute("data-animate") ||
            node.hasAttribute("data-stagger") ||
            node.querySelectorAll("[data-animate]").length > 0
          ) {
            shouldInit = true;
          }
        });
      });

      if (shouldInit) {
        init();
      }
    });

    init();
    mutationObserver.observe(rootContainer, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
