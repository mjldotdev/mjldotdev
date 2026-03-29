import { LineSquiggle, Map, RefreshCw, Waypoints } from "lucide-react";

export default function Section() {
  return (
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
  );
}
