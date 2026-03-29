import { History } from "lucide-react";

export default function Section() {
  return (
    <section
      className="mt-20 border-outline-variant/10 border-t bg-surface-container-low px-6 py-32 md:px-12"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col items-start md:mb-24">
          {/* <span className="mb-4 font-bold font-label text-[10px] text-primary uppercase tracking-[0.2em]">
            Operational Blueprint v4.0
          </span> */}
          <h2 className="font-black font-headline text-5xl text-on-surface leading-[0.9] tracking-[-0.04em] md:text-7xl">
            Meet the
            <br />
            <span className="ml-15 text-8xl text-primary-container">
              Engineer
            </span>
          </h2>
        </header>
        {/* <!-- Asymmetric Bento Grid --> */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-12">
          {/* <!-- Lead Tile: Professional History High-End Roles --> */}
          <div className="double-bezel group md:col-span-8 md:row-span-3">
            <div className="inner-core flex flex-col p-8">
              <div className="mb-12 flex items-start justify-between">
                <span className="font-label text-outline-variant text-xs uppercase tracking-widest">
                  Professional Timeline
                </span>
                <History className="material-symbols-outlined text-3xl text-primary-container" />
              </div>
              <div className="timeline-container space-y-12 pb-8">
                {/* <!-- Entry 1 --> */}
                <article className="experience-card relative cursor-default border-primary/20 border-l-2 pl-8">
                  <div className="status-indicator absolute top-0 -left-[9px] h-4 w-4 rounded-sm bg-surface-container-highest" />
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <h3 className="font-bold font-headline text-2xl text-on-surface tracking-tight">
                      Full-Stack Developer
                    </h3>
                    <span className="date-text font-bold font-label text-outline text-sm tracking-tighter transition-colors duration-300">
                      2025 — PRESENT
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-on-surface-variant text-sm leading-relaxed">
                    Lead architect for high-concurrency event-driven systems.
                    Implementing micro-frontend architectures and driving
                    technical strategy for cloud-native infrastructure scaling.
                  </p>
                </article>
                {/* <!-- Entry 2 --> */}
                <article className="experience-card relative cursor-default border-outline-variant/30 border-l-2 pl-8">
                  <div className="status-indicator absolute top-0 -left-[9px] h-4 w-4 rounded-sm bg-surface-container-highest" />
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <h3 className="font-bold font-headline text-2xl text-on-surface tracking-tight">
                      AI Trainer / Specialist
                    </h3>
                    <span className="date-text font-bold font-label text-outline text-sm tracking-tighter transition-colors duration-300">
                      2024 - 2025
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-on-surface-variant text-sm leading-relaxed">
                    Directed full-stack squads in developing mission-critical
                    SaaS products. Optimized CI/CD pipelines and established
                    comprehensive TDD standards across the organization.
                  </p>
                </article>
                {/* <!-- Entry 3 --> */}
                <article className="experience-card relative cursor-default border-outline-variant/30 border-l-2 pl-8">
                  <div className="status-indicator absolute top-0 -left-[9px] h-4 w-4 rounded-sm bg-surface-container-highest" />
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <h3 className="font-bold font-headline text-2xl text-on-surface tracking-tight">
                      Civil Engineer / Project Manager
                    </h3>
                    <span className="date-text font-bold font-label text-outline text-sm tracking-tighter transition-colors duration-300">
                      2017 — 2024
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-on-surface-variant text-sm leading-relaxed">
                    Specialized in complex dashboard visualization and component
                    library development. Engineered high-performance UI
                    frameworks utilizing atomic design principles.
                  </p>
                </article>
              </div>
            </div>
          </div>
          {/* <!-- Portrait Visual Tile --> */}
          <div className="double-bezel overflow-hidden md:col-span-4 md:row-span-3">
            <div className="inner-core group relative h-full">
              {/* <img
                alt="Professional portrait"
                className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAuyzxHYytgnIWO5dGlqCrLb6T8qDUmn882kKs9ThsSFCH_K0ZXMNEd2lAobBa1YJD3pIveUz6OBxfMrHdBEXthshGs9PDuvi5Hvj5SkoFgeeHOEdZF97NpsvstViCBYc6Gvq2O8QBEw1vuKRAtMbi8PKpPaGQf5T667ZaCsACIrqmtGRnooPNoKST-Npm6-GkMEye9YPK51vY8NOp-ZfIfIy9aeTh7FzjiBRY6RTeS4o-zyvy9ffFZ1dWN1zuTNBKuDNXmwzT_ys"
                src="/images/download2.jpeg"
              /> */}
              <img
                alt="MJ Dela Cruz Portrait"
                className="portrait-reveal absolute inset-0 z-0 h-full w-full object-cover object-top opacity-0 contrast-40 grayscale"
                src="/images/download2.jpeg"
              />
              <img
                className="abstract-fade relative z-10 h-full w-full scale-110 object-cover brightness-75 grayscale transition-all duration-1000 ease-in-out group-hover:scale-100"
                data-alt="Monochromatic architectural detail with sharp shadows and concrete textures, minimal brutalist aesthetic, high contrast dramatic lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxH-u0Zyf2YgTJs56A3abLPJNTp7ynGnQcyeFr1PYisaKNKLomKa92tH0ySjjsG9J4TwbanrSBmdg32xtP8dT9wYuGQTz2LgqXF-XRkbnVYljACDfla08A3WJcivH9NUjSmOhSlS-Igui5dGdpc-TYvQZZur_SG4kGOelUJ62Wx5EBXTznNBLPDTIgDe0PBMzvIKbDvIQ-vAmcXbPM4eakJZAkkPqlo-eSg8SW_UgI6zbkub9OclunNY6epvTEcxnShY55fREM9oQ"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                <span className="font-black font-headline text-on-surface text-xl uppercase">
                  Lead Systems Designer
                </span>
                <p className="font-label text-[10px] text-primary uppercase tracking-widest">
                  Vanguard Structuralist
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Footer Summary Logic --> */}
          <div className="double-bezel mt-4 md:col-span-12">
            <div className="inner-core flex flex-col items-center justify-center gap-6 p-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <div className="text-center md:text-left">
                  <span className="block font-black font-headline text-2xl text-on-surface">
                    08+
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-tighter">
                    MVPs Launched
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-black font-headline text-2xl text-on-surface">
                    14ms
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-tighter">
                    Avg. Server Response
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-black font-headline text-2xl text-on-surface">
                    99.9%
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-tighter">
                    System Uptime
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-black font-headline text-2xl text-on-surface">
                    120k+
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-tighter">
                    Active Users Managed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
