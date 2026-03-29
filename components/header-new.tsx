"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

interface NavItem {
  href: string;
  label: string;
  variant?: "primary" | "default";
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Specs", href: "#specs" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] flex w-full items-center justify-center">
      <div className="mx-auto mt-4 flex w-fit items-center gap-8 rounded-full border border-white/20 bg-surface-variant/40 px-6 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <a href="/">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            const baseClasses = "font-bold text-sm uppercase tracking-tighter ";
            return (
              <Link
                className={[
                  baseClasses,
                  isActive
                    ? "scale-110 text-blue-400" //
                    : "text-gray-400 transition-all duration-300 ease-out hover:scale-110 hover:text-white",
                ].join(" ")}
                href={item.href as Route}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          className="rounded-full bg-primary px-4 py-1.5 font-bold text-white text-xs uppercase transition-all hover:brightness-110"
          href="#cta"
        >
          Connect
        </Link>
      </div>
    </header>
  );
}
