export default function Section() {
  return (
    <section
      className="mx-auto mt-40 max-w-7xl border-outline-variant/10 border-t pt-24"
      id="work"
    >
      <div className="mb-12 flex items-end justify-between">
        <div className="space-y-4">
          {/* <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em]">
            Projects
          </span> */}
          <h2 className="font-black font-headline text-5xl text-on-surface leading-[0.9] tracking-[-0.04em] md:text-7xl">
            Selected <br /> <span className="text-primary">Work</span>
          </h2>
        </div>
        <div className="hidden max-w-xs font-label text-on-surface-variant text-xs uppercase leading-relaxed tracking-widest opacity-50 md:block">
          Proprietary development frameworks and custom UI orchestration for
          filmmaking, fintech, and mission-critical startups.
        </div>
      </div>
      <div className="grid h-auto grid-cols-1 gap-8 md:grid-cols-12">
        {/* <!-- JL Pictures --> */}
        <div className="group relative overflow-hidden rounded-xl bg-surface-container-low p-2 md:col-span-8">
          <div className="relative h-[500px] overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-high">
            <img
              className="h-full w-full object-cover opacity-40 grayscale transition-transform duration-700 group-hover:scale-105"
              data-alt="Cinematic production still with high contrast lighting and deep shadows in a film studio environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbyzwK_1eFfcbVF9aUfAihyBjhHmy9cj6c1CbieGKDAcW9OrhiK9dbhVhnvMgFEtq9tDle4AMZdI5mcfPeEwUjrZoWAVXkJG53jfMJiSZSBoJkOTx_afs8Aw3dJ73VhLbsBsKT3UwMqrliEDB4lXB8sgR3h0BvJtOcS6ts0MOcNikzsHsHRwu7BsImD-bziOA441uk3he0i8AlL_mCrlbIONCxzrFs54ZQncNOzd2MgaoAchHjLgiCnD9XiTUmEFTdjToQGwns2U"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="liquid-glass max-w-md rounded-xl border border-white/5 p-8">
                <span className="mb-2 block font-label text-[10px] text-primary uppercase tracking-widest">
                  Media Protocol
                </span>
                <h4 className="mb-4 font-bold font-headline text-3xl text-white">
                  JL Pictures
                </h4>
                <p className="mb-6 text-on-surface-variant text-sm">
                  A comprehensive digital platform for a filmmaking startup,
                  engineered to manage production workflows, creator portfolios,
                  and client acquisition with cinematic fluidity.
                </p>
                <div className="flex gap-2">
                  <span className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 font-label text-[9px] uppercase">
                    Next.js
                  </span>
                  <span className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 font-label text-[9px] uppercase">
                    Framer Motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Side Grid --> */}
        <div className="flex flex-col gap-8 md:col-span-4">
          {/* <!-- GoPilot --> */}
          <div className="group flex-1 rounded-xl bg-surface-container-low p-2">
            <div className="flex h-full flex-col justify-center rounded-lg border border-outline-variant/20 bg-surface-container-high p-8">
              <div className="mb-4 flex items-start justify-between">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest">
                  UI Framework
                </span>
                <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-bold text-[8px] text-primary tracking-widest">
                  DEVELOPMENT
                </span>
              </div>
              <h4 className="mb-2 font-bold font-headline text-white text-xl">
                GoPilot
              </h4>
              <p className="text-on-surface-variant text-xs">
                A high-fidelity extension for shadcn/ui, introducing a
                sophisticated neumorphic design system to the React ecosystem
                with a focus on tactile depth and soft-UI physics.
              </p>
            </div>
          </div>
          {/* <!-- TRiM --> */}
          <div className="group flex-1 rounded-xl bg-surface-container-low p-2">
            <div className="relative h-full overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-high">
              <img
                className="h-full w-full object-cover opacity-20 grayscale transition-transform duration-700 group-hover:scale-105"
                data-alt="Technical architectural blueprint with grid overlays and orange diagnostic highlights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdVVrQ4sNYvoyvjnmgJ7w59mLEhJXOK0z-ZFFX63KmZd40oA8B8HWaeH_Rx4mKkNPPnxtxvAnEIltunyIJSwitg93R4WaHYNKuT2z674UBgatzhaUyfX7QzXRDSwUReLqPoVtzm57gnjPzhbJRl2817tZK3Yd7RIYiprINTniDJ4ddlbIXM-xfkZs0zHYQrVjtcqHoGvFbuB0mz3N-Z-eTjW2mXsxOFu6LA-FlLXUkphaoeT5wfKj5AvW2X6lDoZ5ms2yonMJRads"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-bold font-headline text-white text-xl">
                    TRiM
                  </h4>
                  <span className="rounded border border-primary/20 bg-primary/10 px-2 py-0.5 font-bold text-[8px] text-primary uppercase tracking-widest">
                    DEVELOPMENT
                  </span>
                </div>
                <p className="text-on-surface-variant text-xs">
                  A mission-critical management dashboard delivering real-time
                  insights and operational orchestration for complex
                  construction lifecycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
