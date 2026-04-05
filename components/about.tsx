import {
  Cloud,
  Cpu,
  Database,
  History,
  Rocket,
  Signal,
  Terminal,
} from "lucide-react";
import { AnimatedCounter } from "./animations/counter";

export default function Section() {
  return (
    <section
      className="bg-zinc-900 px-8 py-24 md:py-48"
      data-animate="fade-up"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        {/* <!-- Main Bento Grid (Top Area) --> */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* <!-- Portrait Card --> */}
          <div className="double-bezel h-full md:col-span-5">
            <div className="double-bezel-inner group relative aspect-square h-full overflow-hidden md:aspect-auto">
              <img
                alt="MJ Dela Cruz Portrait"
                className="h-full w-full object-cover object-top opacity-60 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                src="/images/hero-image.jpeg"
              />
              <div className="absolute bottom-6 left-6 z-30">
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                  <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                    Civil Engineer / Web Structuralist
                  </span>
                </div>
                <p className="font-bold text-white text-xl tracking-tighter">
                  Engr. MJ DELA CRUZ
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Heading & Experiences Area --> */}
          <div className="flex flex-col gap-6 md:col-span-7">
            {/* <!-- Heading Area --> */}
            <div className="py-4 md:py-0 md:pt-4">
              <h2 className="font-black text-4xl text-white uppercase leading-[0.9] tracking-tighter md:text-6xl">
                Engineer&apos;s
                <br />
                <span className="text-blue-500">Background</span>
              </h2>
            </div>
            {/* <!-- Experiences Card --> */}
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/5 bg-zinc-950 p-8 lg:p-10">
              <div className="timeline-track absolute top-0 bottom-0 left-8 w-px lg:left-14">
                <div className="kinetic-indicator absolute left-[-1px] w-[3px]" />
              </div>
              <div className="space-y-10 pl-8 lg:pl-14">
                {/* <!-- PRESENT ROLE --> */}
                <div className="experience-node relative">
                  <div className="node-dot absolute top-1.5 -left-[37px] z-10 h-3 w-3 rounded-full border border-blue-500 bg-zinc-950 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all lg:-left-[45px]" />
                  <h4 className="mb-1 flex items-center font-bold text-base text-white uppercase tracking-tight transition-colors">
                    Full-stack Developer
                    <span className="ml-3 border border-blue-500/20 bg-blue-900/20 px-2 py-0.5 font-mono text-[9px] text-blue-500 text-zinc-400">
                      2024-PRESENT
                    </span>
                  </h4>
                  <p className="max-w-xl text-xs text-zinc-400 leading-relaxed">
                    Leading end-to-end development of enterprise-grade web
                    applications. Focusing on distributed systems and
                    performance-first UI frameworks.
                  </p>
                </div>
                {/* <!-- Role 2 --> */}
                <div className="experience-node relative">
                  <div className="node-dot absolute top-1.5 -left-[37px] z-10 h-3 w-3 rounded-full border border-white/20 bg-zinc-950 transition-all lg:-left-[45px]" />
                  <h4 className="mb-1 flex items-center font-bold text-base text-zinc-500 uppercase tracking-tight transition-colors">
                    AI Trainer / Specialist
                    <span className="ml-3 font-mono text-[9px] text-zinc-600">
                      2023-2024
                    </span>
                  </h4>
                  <p className="max-w-xl text-xs text-zinc-500 leading-relaxed">
                    Developed complex frontend architectures and managed
                    relational database integrations for high-growth SEA
                    startups.
                  </p>
                </div>
                {/* <!-- Role 3 --> */}
                <div className="experience-node relative">
                  <div className="node-dot absolute top-1.5 -left-[37px] z-10 h-3 w-3 rounded-full border border-white/20 bg-zinc-950 transition-all lg:-left-[45px]" />
                  <h4 className="mb-1 flex items-center font-bold text-base text-zinc-500 uppercase tracking-tight transition-colors">
                    Civil Engineer / <br className="md:hidden" />
                    Project Manager
                    <span className="ml-3 font-mono text-[9px] text-zinc-600">
                      2017-2023
                    </span>
                  </h4>
                  <p className="max-w-xl text-xs text-zinc-500 leading-relaxed">
                    Mastered the fundamentals of DOM manipulation, CSS grid
                    systems, and functional programming paradigms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Metrics Row --> */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-end justify-between rounded-3xl border border-white/5 bg-zinc-950 px-8 py-5 transition-colors hover:border-blue-500/30">
            <div>
              <div className="mb-1 font-bold text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
                Years Active
              </div>
              <div className="font-bold text-3xl text-white tracking-tighter">
                <AnimatedCounter endValue={5}>0</AnimatedCounter>
                <span className="text-blue-500">+</span>
              </div>
            </div>
            <History className="material-symbols-outlined text-4xl text-zinc-800" />
          </div>
          <div className="flex items-end justify-between rounded-3xl border border-white/5 bg-zinc-950 px-8 py-5 transition-colors hover:border-blue-500/30">
            <div>
              <div className="mb-1 font-bold text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
                Deployments
              </div>
              <div className="font-bold text-3xl text-white tracking-tighter">
                <span className="counter-value">
                  <AnimatedCounter endValue={40}>0</AnimatedCounter>
                </span>
                <span className="text-blue-500">+</span>
              </div>
            </div>
            <Rocket className="material-symbols-outlined text-4xl text-zinc-800" />
          </div>
          <div className="flex items-end justify-between rounded-3xl border border-white/5 bg-zinc-950 px-8 py-5 transition-colors hover:border-blue-500/30">
            <div>
              <div className="mb-1 font-bold text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
                Uptime Rate
              </div>
              <div className="font-bold text-3xl text-white tracking-tighter">
                <AnimatedCounter endValue={99}>0</AnimatedCounter>
                <span className="text-blue-500 text-xl">%</span>
              </div>
            </div>
            <Signal className="material-symbols-outlined text-4xl text-zinc-800" />
          </div>
        </div>
        {/* <!-- Tech Stack Area --> */}
        <div className="mt-12" data-animate="fade-up">
          <div className="mb-10 items-end justify-between border-white/5 border-t pt-8 md:flex">
            <h3 className="font-black text-4xl text-white uppercase leading-[0.9] tracking-tighter">
              Technology
              <br />
              <span className="text-blue-500">Stack</span>
            </h3>
            <p className="mt-4 hidden max-w-xs text-balance font-mono text-[10px] text-zinc-500 uppercase tracking-widest md:mt-0 md:block">
              Curated stack of modern technologies. Cloud-native infrastructure,
              API design, and performance-focused engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* <!-- Frontend Block --> */}
            <div className="group flex h-full min-h-[300px] flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950 p-10 transition-colors hover:border-blue-500/50 md:col-span-5">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                <Terminal className="material-symbols-outlined text-3xl text-blue-500" />
              </div>
              <div>
                <h3 className="mb-6 font-bold text-4xl text-white">
                  Frontend
                  <br />
                  Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 font-bold text-[10px] text-blue-400 uppercase">
                    Next.js
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                    TypeScript
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Right Tech Column --> */}
            <div className="flex flex-col gap-6 md:col-span-7">
              {/* <!-- Data Layers --> */}
              <div className="group flex h-[120px] items-center justify-between rounded-3xl border border-white/10 bg-zinc-950 p-8 transition-colors hover:border-blue-500/50">
                <div>
                  <h3 className="mb-4 font-bold text-2xl text-white">
                    Data Layers
                  </h3>
                  <div className="flex gap-4">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 font-bold text-[10px] text-blue-400 uppercase">
                      Postgres
                    </span>
                    <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                      Neon
                    </span>
                    <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                      Drizzle
                    </span>
                  </div>
                </div>
                <Database className="material-symbols-outlined text-4xl text-blue-500" />
              </div>
              {/* <!-- Backend & Services Split --> */}
              <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group flex min-h-[220px] flex-col justify-between rounded-3xl bg-blue-600 p-8 shadow-2xl shadow-blue-500/20">
                  <Cpu className="material-symbols-outlined text-5xl text-white" />
                  <div>
                    <h3 className="font-bold text-2xl text-white">Backend</h3>
                    <div className="flex gap-4">
                      <span className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-bold text-[10px] text-white uppercase">
                        tRPC
                      </span>
                      <span className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-bold text-[10px] text-white uppercase">
                        Better-Auth
                      </span>
                      <span className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-bold text-[10px] text-white uppercase">
                        TanStack
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group flex min-h-[220px] flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950 p-8 transition-colors hover:border-blue-500/50">
                  <Cloud className="material-symbols-outlined text-5xl text-blue-500" />
                  <div>
                    <h3 className="mb-4 font-bold text-2xl text-white">
                      Services
                    </h3>
                    <div className="flex gap-4">
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 font-bold text-[10px] text-blue-400 uppercase">
                        Resend
                      </span>
                      <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                        Creem
                      </span>
                      <span className="rounded-full border border-white/10 px-4 py-1.5 font-bold text-[10px] text-zinc-400 uppercase">
                        UploadThing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
