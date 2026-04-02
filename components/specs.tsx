import { Layers, MonitorCloud, RefreshCw, Waypoints } from "lucide-react";

export default function Section() {
  return (
    <section
      className="border-white/5 border-t bg-zinc-950 px-8 py-24 md:py-32"
      id="specs"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-bold text-5xl text-blue-500 uppercase tracking-tighter md:text-6xl">
              Philosophy
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-light text-3xl text-white leading-snug tracking-tight md:text-5xl">
              Design is not only an art-form, it is a discipline of{" "}
              <span className="text-blue-500 italic">logic</span>, structure and
              uncompromising intent.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Intent Mapping --> */}
          <div className="double-bezel">
            <div className="double-bezel-inner h-full p-8">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                  <Waypoints className="material-symbols-outlined text-blue-500 text-lg" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-2 py-1">
                  <div className="status-dot h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest">
                    STRATEGY
                  </span>
                </div>
              </div>
              <h4 className="mb-3 font-bold text-lg text-white uppercase tracking-tight">
                Intent Mapping
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Defining the core logic and user objectives before a single line
                of code is written.
              </p>
            </div>
          </div>
          {/* <!-- Surface Engineering --> */}
          <div className="double-bezel">
            <div className="double-bezel-inner h-full p-8">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                  <Layers className="material-symbols-outlined text-emerald-500 text-lg" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-1">
                  <div className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-widest">
                    INTERFACE
                  </span>
                </div>
              </div>
              <h4 className="mb-3 font-bold text-lg text-white uppercase tracking-tight">
                Surface Engineering
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Crafting fluid, high-fidelity interfaces that respond
                intuitively to human interaction.
              </p>
            </div>
          </div>
          {/* <!-- Logic Infra --> */}
          <div className="double-bezel">
            <div className="double-bezel-inner h-full p-8">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <MonitorCloud className="material-symbols-outlined text-lg text-orange-500" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-2 py-1">
                  <div className="status-dot h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span className="font-mono text-[9px] text-orange-500 uppercase tracking-widest">
                    SYSTEM
                  </span>
                </div>
              </div>
              <h4 className="mb-3 font-bold text-lg text-white uppercase tracking-tight">
                Logic Infra
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Building robust backend architectures designed for vertical and
                horizontal scaling.
              </p>
            </div>
          </div>
          {/* <!-- Refinement --> */}
          <div className="double-bezel">
            <div className="double-bezel-inner h-full p-8">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <RefreshCw className="material-symbols-outlined text-lg text-purple-500" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-2 py-1">
                  <div className="status-dot h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <span className="font-mono text-[9px] text-purple-500 uppercase tracking-widest">
                    LOOP
                  </span>
                </div>
              </div>
              <h4 className="mb-3 font-bold text-lg text-white uppercase tracking-tight">
                Refinement
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Continuous optimization loops to ensure system integrity and
                peak performance metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
