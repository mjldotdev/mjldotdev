import type { Route } from "next";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] max-h-[800px] sm:h-[600px] lg:h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)]">
        <div className="sticky top-[calc(100vh-400px)] h-[400px] sm:top-[calc(100vh-600px)] sm:h-[600px] lg:top-[calc(100vh-800px)] lg:h-[800px]">
          <div className="flex h-full w-full flex-col justify-between bg-neutral-900 px-4 py-4 sm:px-6 sm:py-6 lg:py-8">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 font-mono text-neutral-400 text-xs uppercase sm:mb-2 sm:text-sm">
                  Site Map
                </h3>
                {navLinks.map((link) => (
                  <Link
                    className="text-secondary text-sm transition-colors duration-300 hover:text-muted-foreground sm:text-base dark:text-foreground dark:hover:text-muted-foreground"
                    href={link.href as Route}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 text-neutral-400 text-xs uppercase sm:mb-2 sm:text-sm">
                  Socials
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      className="text-secondary text-sm transition-colors duration-300 hover:text-muted-foreground sm:text-base dark:text-foreground dark:hover:text-muted-foreground"
                      href={social.href}
                      key={social.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
              <h1 className="mt-4 font-bold font-mono text-[14vw] text-white leading-[0.8] -tracking-widest sm:mt-6 sm:text-[16vw] lg:mt-10 lg:text-[14vw]">
                HELLO WORLD!
              </h1>
              <p className="text-sm text-white sm:text-base">&copy; 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

