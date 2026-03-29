import { Cpu, Database, Layers } from "lucide-react";

export default function Section() {
  return (
    <section className="mx-auto max-w-7xl border-outline-variant/10 border-t px-8 py-32">
      <div className="mb-16">
        <span className="font-label text-primary text-xs uppercase tracking-[0.3em] opacity-60">
          Technical Infrastructure
        </span>
        <h2 className="font-extrabold font-headline text-5xl text-white uppercase tracking-tighter">
          The Stack
        </h2>
      </div>
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-4">
        {/* <!-- Card 1: Frontend Development --> */}
        <div className="group flex h-[424px] flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container-high p-8 transition-colors duration-500 hover:border-primary/50 md:col-span-2">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/30 bg-surface-container">
              <Layers className="material-symbols-outlined text-primary" />
            </div>
            <span className="font-label text-[10px] text-outline uppercase tracking-widest">
              Section 01
            </span>
          </div>
          <div>
            <h3 className="mb-2 font-bold font-headline text-3xl text-white tracking-tighter">
              FRONTEND
              <br />
              DEVELOPMENT
            </h3>
            <p className="mb-6 text-on-surface-variant text-sm uppercase">
              Next.js, TypeScript, Tailwind
            </p>
            <div className="flex gap-2">
              <span className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 font-label text-[9px] uppercase">
                Architecture
              </span>
              <span className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 font-label text-[9px] uppercase">
                Visuals
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Right column container --> */}
        <div className="grid h-[424px] grid-cols-2 items-end gap-6 md:col-span-2">
          <div className="group col-span-2 flex h-[100px] items-center justify-between rounded-xl border border-outline-variant/10 bg-surface-container-low p-8 transition-colors hover:border-primary/50">
            <div>
              <h3 className="mb-1 font-bold font-headline text-2xl text-white uppercase tracking-tighter">
                Backend Development
              </h3>
              <p className="font-label text-[10px] text-on-surface-variant uppercase">
                tRPC, Better-Auth
              </p>
            </div>
            <Cpu className="material-symbols-outlined text-3xl text-primary" />
          </div>
          <div className="flex h-[300px] flex-col justify-between rounded-xl bg-primary p-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Database className="material-symbols-outlined text-4xl text-white" />
            <div>
              <h3 className="mb-2 font-black font-headline text-white text-xl uppercase leading-none tracking-tighter">
                Database
                <br />
                Management
              </h3>
              <p className="font-bold text-white/80 text-xs uppercase tracking-tight">
                Postgres
                <br />
                Neon
                <br />
                Drizzle
              </p>
            </div>
          </div>
          <div className="flex h-[300px] flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container p-8">
            <div>
              <span className="font-label text-[10px] text-outline uppercase tracking-[0.2em]">
                Section 04
              </span>
              <h3 className="mt-4 font-bold font-headline text-2xl text-white uppercase tracking-tighter">
                VC &amp; DEPLOYMENT
              </h3>
            </div>
            <div className="space-y-2 overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-label text-[10px] text-on-surface uppercase tracking-widest">
                  BUN / BIOME
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-outline" />
                <span className="font-label text-[10px] text-on-surface uppercase tracking-widest">
                  RESEND
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-outline" />
                <span className="font-label text-[10px] text-on-surface uppercase tracking-widest">
                  POLAR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
