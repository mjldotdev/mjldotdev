"use client";

import { cancelFrame, frame } from "framer-motion";
import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      {children}
    </ReactLenis>
  );
}
