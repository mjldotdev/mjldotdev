"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface AnimatedCounterProps {
  duration?: number; // Duration in ms
  endValue: number;
  suffix?: string;
}

export function AnimatedCounter({
  endValue,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) {
  const { ref, isIntersecting } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the number is visible
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start counting only when it enters the screen
    if (!isIntersecting) {
      return;
    }

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;

      // Calculate current value based on progress and total duration
      const percentage = Math.min(progress / duration, 1);

      // Easing function (easeOutExpo) for a natural slowdown at the end
      const easeOut = percentage === 1 ? 1 : 1 - 2 ** (-10 * percentage);

      setCount(Math.floor(endValue * easeOut));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure it lands exactly on the endValue
      }
    };

    requestAnimationFrame(animate);
  }, [isIntersecting, endValue, duration]);

  return (
    <span className="font-bold text-4xl text-blue-500" ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
