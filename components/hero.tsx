import Image from "next/image";

export default function Section() {
  return (
    <section className="px-8 py-32 md:py-48" id="home">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="mb-6 block font-bold text-blue-500 text-xs uppercase tracking-[0.3em]">
            Engineer / Web Developer
          </span>
          <h1 className="mb-8 font-extrabold text-6xl text-white leading-[0.85] tracking-tighter md:text-8xl">
            I'm MJ
            <br />
            DELA CRUZ
          </h1>
          <p className="max-w-xl font-light text-xl text-zinc-400 leading-relaxed md:text-2xl">
            A full-stack engineer who builds{" "}
            <span className="font-medium text-white">scalable systems</span>,
            crafts refined user experiences, and delivers well-designed,
            high-quality solutions end-to-end.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              className="bg-blue-600 px-8 py-4 font-bold text-sm text-white uppercase tracking-widest transition-transform hover:scale-105"
              href="#cta"
            >
              Start a Project
            </a>
            <a
              className="border border-zinc-800 px-8 py-4 font-bold text-sm text-white uppercase tracking-widest transition-colors hover:bg-zinc-900"
              href="#work"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="group relative md:col-span-5">
          <div className="double-bezel hero-visual-transition rotate-2 transition-transform duration-1000 group-hover:rotate-0">
            <div className="double-bezel-inner relative aspect-[4/5] overflow-hidden">
              {/* <!-- Portrait Layer (Reveal at end of interaction) --> */}
              <Image
                alt="MJ Dela Cruz Portrait"
                className="portrait-reveal absolute inset-0 z-0 h-full w-full object-cover object-top brightness-90 grayscale"
                fill
                src="/images/hero-image.jpeg"
              />
              {/* <!-- Abstract Layer (Primary Focus) --> */}
              <img
                className="abstract-fade relative z-10 h-full w-full object-cover brightness-75 grayscale"
                data-alt="Monochromatic architectural detail with sharp shadows and concrete textures, minimal brutalist aesthetic, high contrast dramatic lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxH-u0Zyf2YgTJs56A3abLPJNTp7ynGnQcyeFr1PYisaKNKLomKa92tH0ySjjsG9J4TwbanrSBmdg32xtP8dT9wYuGQTz2LgqXF-XRkbnVYljACDfla08A3WJcivH9NUjSmOhSlS-Igui5dGdpc-TYvQZZur_SG4kGOelUJ62Wx5EBXTznNBLPDTIgDe0PBMzvIKbDvIQ-vAmcXbPM4eakJZAkkPqlo-eSg8SW_UgI6zbkub9OclunNY6epvTEcxnShY55fREM9oQ"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-30">
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                  Location
                </span>
                <p className="font-bold text-white tracking-tighter">
                  MANILA, PHILIPPINES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
