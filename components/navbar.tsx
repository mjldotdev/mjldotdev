"use client";

import { Mail, Menu, Send, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import ThemeSelector from "@/components/theme-selector";
import { useClickAway } from "@/hooks/use-click-away";
import { useNavPill } from "@/hooks/use-nav-pill";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { navLinks } from "@/lib/data";

export default function Header() {
  const active = useScrollSpy(
    navLinks.map((link) => link.id),
    100
  );

  const { navRef, pillRef, updatePill } = useNavPill(active);
  const [open, setOpen] = useState(false);

  const clickAwayRef = useClickAway<HTMLDivElement>(() => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <header className="fixed top-0 right-0 left-0 z-100 flex w-full items-center justify-center p-4">
      <div
        className="flex w-auto min-w-70 flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out md:min-w-0"
        ref={clickAwayRef}
      >
        <div className="flex w-full items-center justify-between gap-8 px-4 py-1">
          <Logo />

          {/* Desktop Nav */}
          <nav className="relative hidden md:block" ref={navRef}>
            {/** biome-ignore lint/a11y/noNoninteractiveElementInteractions lint/a11y/noStaticElementInteractions: Moved onMouseLeave from the <nav> to a neutral <div>. <div> is a static element, which is safely allowed to have purely visual mouse events without triggering accessibility warnings. */}
            <div
              className="flex h-full w-full items-center gap-6"
              onMouseLeave={() => {
                const activeEl = navRef.current?.querySelector(
                  ".active-link"
                ) as HTMLElement;

                if (activeEl) {
                  updatePill(activeEl);
                }
              }}
            >
              {/* Pill */}
              <div
                className="pointer-events-none absolute h-8 rounded-full bg-blue-600/20 opacity-0 transition-all duration-300 ease-out"
                id="nav-pill"
                ref={pillRef}
                style={{ zIndex: -1 }}
              />

              {navLinks.map((link) => (
                <Link
                  className={`nav-link relative z-10 rounded-full px-3 py-1 font-bold text-sm uppercase tracking-tighter transition-colors ${
                    active === link.id
                      ? "active-link text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  href={`#${link.id}`}
                  key={link.id}
                  onMouseEnter={(e) => updatePill(e.currentTarget)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <ThemeSelector />

            <Link
              className="rounded-full bg-blue-600 px-4 py-1.5 font-bold text-sm text-white uppercase transition-colors hover:bg-blue-500"
              href="#contact"
            >
              <Mail className="size-4.5 md:hidden" />{" "}
              <span className="hidden md:block">Connect</span>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-colors md:hidden"
              onClick={() => setOpen(!open)}
              type="button"
            >
              {open ? (
                <X className="material-symbols-outlined menu-icon size-4.5" />
              ) : (
                <Menu className="material-symbols-outlined menu-icon size-4.5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`w-full px-4 transition-all duration-300 md:hidden ${
            open ? "expanded" : "collapsed"
          }`}
          id="mobile-nav-container"
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => (
              <Link
                className={`mobile-nav-link flex items-center justify-between rounded-xl px-4 py-3 font-bold text-sm uppercase tracking-widest transition-all ${
                  active === link.id
                    ? "bg-blue-600/30 text-white"
                    : "bg-white/5 text-zinc-400 hover:bg-blue-600/20 hover:text-white"
                }`}
                href={`#${link.id}`}
                key={link.id}
                onClick={() => setOpen(false)}
              >
                {link.label}
                <link.icon className="material-symbols-outlined size-4.5 text-xs" />
              </Link>
            ))}
            <Link
              className="flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 font-bold text-sm text-white uppercase tracking-widest shadow-blue-500/20 shadow-lg transition-all sm:hidden"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Connect
              <Send className="material-symbols-outlined size-4.5 text-xs" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
