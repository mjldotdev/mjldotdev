import Image from "next/image";

export default function Section() {
  return (
    <section className="px-8 py-32 md:py-48" id="home">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <span
            className="mb-6 block font-bold text-blue-500 text-xs uppercase tracking-[0.3em]"
            data-animate="fade-in"
          >
            Engineer / Web Developer
          </span>
          <h1
            className="mb-8 block -rotate-2 font-extrabold text-6xl text-white leading-[0.85] tracking-tighter md:text-8xl"
            data-animate="fly-in-up"
          >
            I'm MJ
            <br />
            DELA CRUZ
          </h1>
          <p
            className="max-w-xl font-light text-xl text-zinc-400 leading-relaxed md:text-2xl"
            data-animate="text-fade"
          >
            A full-stack engineer who builds{" "}
            <span className="font-medium text-white">scalable systems</span>,
            crafts refined user experiences, and delivers well-designed,
            high-quality solutions end-to-end.
          </p>
          <div className="mt-12 flex flex-wrap gap-4" data-animate="fade-in">
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
        <div className="group relative md:col-span-5" data-animate="fly-in-up">
          {/* 1. ANIMATION WRAPPER: Handles only the smooth rotation */}
          <div className="rotate-2 transition-transform duration-700 ease-out group-hover:rotate-0">
            {/* 2. CUSTOM CSS WRAPPER: Handles your bezel/styling separately */}
            <div className="double-bezel">
              {/* Rest of the image code from the previous fix */}
              <div className="double-bezel-inner backface-hidden relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <Image
                  alt="MJ Dela Cruz Portrait"
                  className="absolute inset-0 z-0 scale-110 object-cover object-top brightness-90 grayscale transition-transform duration-700 ease-out group-hover:scale-100"
                  fill
                  src="/images/hero-image.jpeg"
                />
                <img
                  alt="Monochromatic architectural detail"
                  className="relative z-10 h-full w-full scale-110 object-cover brightness-75 grayscale transition-opacity duration-700 ease-out group-hover:opacity-40"
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
      </div>
    </section>
  );
}
