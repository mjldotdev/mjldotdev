export default function Section() {
  return (
    <section className="bg-zinc-950 px-8 py-24 md:py-32" id="work">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-4">
            <span className="mb-2 block font-bold text-blue-500 text-xs uppercase tracking-[0.3em]">
              Featured Work
            </span>
            <h2 className="font-black text-5xl text-white uppercase tracking-tighter md:text-7xl">
              Selected <br /> Projects
            </h2>
          </div>
          <div className="hidden max-w-xs font-mono text-[10px] text-zinc-500 uppercase leading-relaxed tracking-widest opacity-50 md:block">
            Designed and developed scalable full-stack architectures, including
            custom frameworks and UI systems.
          </div>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12">
          {/* <!-- JL Pictures --> */}
          <div className="group relative flex min-h-[400px] md:col-span-8">
            <div className="double-bezel w-full">
              <div className="double-bezel-inner relative h-full w-full overflow-hidden">
                <img
                  alt="JL Pictures"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJivqIf7sGFuS2ehbPkAf1wjZfpaOmVEoUUlrOlO2g_ABUEZqh5lST_Y3pkKU455RhPSuzCMZLC9AstAxcDlXqZHlV7zEYbSu-bc6FouppsjL5ipwCX6_kgoRmqFCe6an6y7X6EPexk699Lpir8ftEYYTu3fm3qZKC_3fXWv7rsLAVlMuLfb2u1s1WwejhhhLpk-NlhQIPj5uGwyK1rKqjyFr3wK5UP9bZWYidtcibvYB513DwHApbEUWD_CcfoQVI5iK-YKlWYMw"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <div className="liquid-glass max-w-sm rounded-2xl p-8">
                    <span className="mb-2 block font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                      Films & Content
                    </span>
                    <h4 className="mb-4 font-bold text-3xl text-white">
                      JL Pictures
                    </h4>
                    <p className="mb-6 text-xs text-zinc-400">
                      A comprehensive digital platform for a filmmaking startup,
                      engineered to manage production workflows and creator
                      portfolios.
                    </p>
                    <div className="flex gap-2">
                      <span className="rounded border border-white/5 bg-zinc-900 px-2 py-1 font-bold text-[8px] text-zinc-500 uppercase">
                        Next.js
                      </span>
                      <span className="rounded border border-white/5 bg-zinc-900 px-2 py-1 font-bold text-[8px] text-zinc-500 uppercase">
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Side Column --> */}
          <div className="flex flex-col gap-8 md:col-span-4">
            {/* <!-- GoPilot --> */}
            <div className="group flex flex-1">
              <div className="double-bezel h-full w-full">
                <div className="double-bezel-inner flex h-full flex-col justify-center p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                      UI Framework
                    </span>
                    <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-bold text-[8px] text-blue-500 tracking-widest">
                      DEVELOPMENT
                    </span>
                  </div>
                  <h4 className="mb-2 font-bold text-white text-xl">GoPilot</h4>
                  <p className="text-xs text-zinc-400">
                    A high-fidelity extension for shadcn/ui, introducing a
                    sophisticated design system with soft-UI physics.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- TRiM --> */}
            <div className="group flex flex-1">
              <div className="double-bezel h-full w-full">
                <div className="double-bezel-inner relative h-full min-h-[200px] overflow-hidden">
                  <img
                    alt="TRiM"
                    className="h-full w-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaoo8jCM5wpsOVMolIq4WWzMmiTJZIWzuhSaqFuFaP8AxmCGoV10HZla8dv14ZJ0ekN9FhL83bz4qdVL_cogIb7fg0C4tkhzZmS7IHf7jtQfRm-C-qeYDdsEUvb8d9BFb9o-SzZ7bC1TU4BqVwXS4tULnSjvLb84-9ilmkDQIqsfPShahhYaVhCYu2UT7zeN1KO7nW3gE1zowd43RnLE2UD1183nTf4svGhxsNNSb_M1DhGIIw8YegbVRg6lmC5IQX1BtuHpUeF8I"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-950 to-transparent p-8">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="mb-2 flex w-full items-start justify-between">
                        <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                          Construction App
                        </span>
                        <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-bold text-[8px] text-blue-500 tracking-widest">
                          DEVELOPMENT
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Mission-critical management dashboard delivering real-time
                      insights for construction lifecycles.
                    </p>
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
