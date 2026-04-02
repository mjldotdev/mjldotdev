"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Optional delay in ms
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const { ref, isIntersecting } = useInView({
    triggerOnce: true, // Only animate once
    rootMargin: "-50px 0px", // Trigger slightly after it enters the viewport
  });

  // Calculate starting transform based on direction
  const transformClass = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "translate-y-0 translate-x-0",
  }[direction];

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isIntersecting
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${transformClass}`
      }`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
