import { LineSquiggle, Map, RefreshCw, Waypoints } from "lucide-react";

export default function Section() {
  return (
    <section className="border-outline-variant/10 border-t bg-surface-container-low px-8 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4 md:py-24 xl:py-12">
          <h2 className="font-bold font-headline text-5xl text-primary uppercase tracking-tighter lg:text-6xl">
            Philosophy
          </h2>
        </div>
        <div className="space-y-12 md:col-span-8">
          <p className="font-headline font-light text-3xl text-on-surface leading-snug tracking-tight md:text-5xl">
            Design is not only an art-form, it is a discipline of logic,
            structure and uncompromising intent.
          </p>
          <div className="grid grid-cols-1 gap-12 border-outline-variant/20 border-t pt-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-bold font-label text-primary text-xs uppercase tracking-widest">
                STRUCTURALISM
              </h3>
              <p className="font-light text-on-surface-variant text-sm leading-relaxed">
                Each system is shaped by underlying frameworks, patterns, and
                relationships, where every element exists with intent and
                contributes to a cohesive, scalable whole.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold font-label text-primary text-xs uppercase tracking-widest">
                UI/UX DEVELOPMENT
              </h3>
              <p className="font-light text-on-surface-variant text-sm leading-relaxed">
                Every interface is built with deliberate structure, seamless
                flows, and responsive behavior to ensure experiences are
                intuitive, consistent, and engineered to perform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        className="mx-auto mt-40 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        id="skills"
      >
        {/* <!-- Skill Module 1 --> */}
        <div className="group z-cascade-1 rounded-lg bg-surface-container-low p-0.5 transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-full overflow-hidden rounded-[0.375rem] border border-outline-variant/10 bg-surface-container-high p-8">
            <div className="mb-12 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/30 bg-surface-container">
                <Map className="material-symbols-outlined text-primary" />
              </div>
              <div className="flex items-center gap-2 rounded bg-surface-container-low px-2 py-1">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-label text-[8px] uppercase tracking-tighter">
                  STRATEGY
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-bold font-headline text-white text-xl">
              Intent Mapping
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Planning with purpose—defining user flows, features, and structure
              to ensure every part of the application has direction and meaning.
            </p>
          </div>
        </div>
        {/* <!-- Skill Module 2 --> */}
        <div className="group z-cascade-2 rounded-lg bg-surface-container-low p-0.5 transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-full overflow-hidden rounded-[0.375rem] border border-outline-variant/10 bg-surface-container-high p-8">
            <div className="mb-12 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/30 bg-surface-container">
                <LineSquiggle className="material-symbols-outlined text-primary" />
              </div>
              <div className="flex items-center gap-2 rounded bg-surface-container-low px-2 py-1">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-label text-[8px] uppercase tracking-tighter">
                  INTERFACE
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-bold font-headline text-white text-xl">
              Surface Engineering
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Designing and building the interface users interact with—creating
              responsive, intuitive, and visually refined experiences.
            </p>
          </div>
        </div>
        {/* <!-- Skill Module 3 --> */}
        <div className="group z-cascade-1 rounded-lg bg-surface-container-low p-0.5 transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-full overflow-hidden rounded-[0.375rem] border border-outline-variant/10 bg-surface-container-high p-8">
            <div className="mb-12 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/30 bg-surface-container">
                <Waypoints className="material-symbols-outlined text-primary" />
              </div>
              <div className="flex items-center gap-2 rounded bg-surface-container-low px-2 py-1">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-label text-[8px] uppercase tracking-tighter">
                  SYSTEM
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-bold font-headline text-white text-xl">
              Logic Infrastructure
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Developing the systems behind the scenes—handling data,
              functionality, and application behavior to keep everything running
              smoothly and reliably.
            </p>
          </div>
        </div>
        {/* <!-- Skill Module 4 --> */}
        <div className="group z-cascade-3 rounded-lg bg-surface-container-low p-0.5 transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-full overflow-hidden rounded-[0.375rem] border border-outline-variant/10 bg-surface-container-high p-8">
            <div className="mb-12 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/30 bg-surface-container">
                <RefreshCw className="material-symbols-outlined text-primary" />
              </div>
              <div className="flex items-center gap-2 rounded bg-surface-container-low px-2 py-1">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-label text-[8px] uppercase tracking-tighter">
                  LOOP
                </span>
              </div>
            </div>
            <h3 className="mb-2 font-bold font-headline text-white text-xl">
              Continuous Refinement
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Improving over time through iteration—fixing issues, enhancing
              performance, and evolving the product as needs grow and change.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
