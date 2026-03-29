import Image from "next/image";
import Link from "next/link";

export default function Section() {
  return (
    <section className="px-8 py-32">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-12"
        id="home"
      >
        <div className="pt-12 md:col-span-7">
          <span className="mb-6 block font-label text-primary text-xs uppercase tracking-[0.3em]">
            Engineer / Web Developer
          </span>
          <h1 className="mb-8 font-extrabold font-headline text-6xl text-white leading-[0.85] tracking-[-0.05em] lg:text-[7rem]">
            I'm MJ <br />
            DELA CRUZ
          </h1>
          <p className="max-w-xl font-light text-on-surface-variant text-xl leading-relaxed lg:text-2xl">
            A full-stack engineer who builds{" "}
            <span className="font-medium text-white">scalable systems</span>,
            crafts refined user experiences, and delivers well-designed,
            high-quality solutions end-to-end.
          </p>
          <div className="mt-12 flex gap-4">
            <Link
              className="bg-primary px-8 py-4 font-bold font-headline text-sm text-white uppercase tracking-widest transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(173,198,255,0.3)]"
              href="#cta"
            >
              Start a Project
            </Link>
            <Link
              className="border border-outline-variant px-8 py-4 font-bold font-headline text-on-surface text-sm uppercase tracking-widest transition-all hover:bg-surface-container-highest"
              href="#work"
            >
              View Work
            </Link>
          </div>
        </div>
        <div className="group relative md:col-span-5">
          <div className="double-bezel aspect-[4/5] rotate-2 transform overflow-hidden rounded-sm transition-all duration-700 group-hover:rotate-0 md:translate-y-12">
            <div className="double-bezel-inner relative overflow-hidden">
              <Image
                alt="MJ Dela Cruz Portrait"
                className="portrait-reveal absolute inset-0 z-0 h-full w-full object-cover object-top opacity-0 brightness-90 grayscale transition-all"
                fill
                src="/images/download.jpeg"
              />
              <Image
                alt="Monochromatic architectural detail with sharp shadows and concrete textures, minimal brutalist aesthetic, high contrast dramatic lighting"
                className="abstract-fade relative z-10 h-full w-full object-cover brightness-75 grayscale transition-all duration-1000 ease-in-out group-hover:scale-105"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxH-u0Zyf2YgTJs56A3abLPJNTp7ynGnQcyeFr1PYisaKNKLomKa92tH0ySjjsG9J4TwbanrSBmdg32xtP8dT9wYuGQTz2LgqXF-XRkbnVYljACDfla08A3WJcivH9NUjSmOhSlS-Igui5dGdpc-TYvQZZur_SG4kGOelUJ62Wx5EBXTznNBLPDTIgDe0PBMzvIKbDvIQ-vAmcXbPM4eakJZAkkPqlo-eSg8SW_UgI6zbkub9OclunNY6epvTEcxnShY55fREM9oQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 z-30">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest">
                  Based in
                </span>
                <p className="font-bold font-headline text-white tracking-tighter">
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
