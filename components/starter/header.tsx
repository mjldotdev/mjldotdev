"use client";

import { Globe } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 right-0 left-0 z-50 flex justify-center px-4">
      <div className="glass-pill flex w-full max-w-5xl items-center justify-between rounded-full border bg-background px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-foreground text-background">
            <Globe className="size-6" />
          </div>
          <span className="font-bold font-mono text-3xl uppercase tracking-tighter">
            Hello World
          </span>
        </div>
        <nav className="hidden items-center gap-8 font-medium text-sm uppercase tracking-wide lg:flex">
          {navLinks.map((link) => (
            <Link
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              href={link.href as Route}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="magnetic-btn rounded-full bg-primary px-5 py-2 font-bold font-mono text-background text-xs uppercase tracking-widest transition-transform hover:scale-105"
            type="button"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
