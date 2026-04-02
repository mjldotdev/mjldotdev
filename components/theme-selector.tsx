"use client";

import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useClickAway } from "@/hooks/use-click-away"; // <-- Import the hook

const THEMES = [
  { id: "vanguard", label: "Vanguard", color: "bg-[#3b82f6]" },
  { id: "light", label: "Light", color: "bg-[#f8f9fa]" },
  { id: "architect", label: "Architect", color: "bg-[#9b3f2b]" },
  { id: "titanium", label: "Titanium", color: "bg-[#c4c7cc]" },
];

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  // Initialize the click-away hook
  // It returns the ref that we attach to the wrapper div below
  const ref = useClickAway<HTMLDivElement>(() => {
    if (open) {
      setOpen(false);
    }
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme); // next-themes automatically updates DOM, localStorage, and syncs tabs!
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {/* Trigger Button */}
      <button
        aria-label="Select Theme"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        <Palette className="h-4.5 w-4.5 text-primary" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-10 -right-5 z-[110] mt-4 w-48 origin-top-right rounded-2xl border border-white/10 bg-zinc-900/90 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 md:top-8 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="space-y-1">
          {THEMES.map((t) => {
            // Only check active state if mounted to prevent hydration errors
            const isActive = isMounted && theme === t.id;

            return (
              <button
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs uppercase tracking-widest transition-all ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
              >
                <span className={`h-3 w-3 rounded-full ${t.color}`} />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
