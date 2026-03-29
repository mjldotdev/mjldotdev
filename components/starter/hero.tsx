"use client";

import Link from "next/link";
import { TerminalDemo } from "../custom/terminal-demo";

export default function Section() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/60 to-background-dark" />
        <div className="size-full bg-accent bg-center opacity-100 grayscale" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-4">
        <p className="mb-4 font-data text-muted-foreground text-xs uppercase tracking-[0.3em] opacity-60 sm:mb-6 sm:text-sm">
          Production-Ready Starter Kit
        </p>
        <h1 className="mb-8 text-center font-black font-sans text-5xl leading-none tracking-tighter drop-shadow-xl md:text-8xl">
          Modern Fullstack <br />{" "}
          <span className="relative text-secondary before:absolute before:-inset-x-10 before:-inset-y-1 before:-z-10 before:block before:-skew-y-2 before:bg-foreground/60">
            React App
          </span>
        </h1>
        <p className="max-w-2xl text-center text-base text-muted-foreground leading-snug tracking-tighter opacity-80 md:text-xl">
          Build your next project efficiently and faster with starter UI
          components, database, authentication, and services for email, payments
          and file uploads
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 sm:mt-8">
          <Link href="#readme">
            <button
              className="w-full cursor-pointer rounded-full border-primary bg-primary px-8 py-3 font-bold text-secondary uppercase tracking-widest opacity-90 transition-colors hover:opacity-80 md:w-auto"
              type="button"
            >
              Get Started
            </button>
          </Link>
          <Link href="#techstack">
            <button
              className="w-full rounded-full border border-primary px-8 py-3 font-bold uppercase tracking-widest opacity-90 backdrop-blur-sm transition-colors hover:bg-primary/20 md:w-auto"
              type="button"
            >
              View Stack
            </button>
          </Link>
        </div>
      </div>
      <div className="z-30 w-full pt-10 pb-24 md:pt-12">
        <TerminalDemo />
      </div>
    </section>
  );
}
