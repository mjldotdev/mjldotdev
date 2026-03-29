export default function Section() {
  return (
    <section
      className="mt-40 border-outline-variant/10 border-t pt-24 text-center"
      id="cta"
    >
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-surface-container-high px-4 py-1.5">
        <span className="status-pulse h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-bold font-label text-[10px] text-primary uppercase tracking-[0.2em]">
          Open for New Projects
        </span>
      </div>
      <h2 className="mx-auto mb-4 max-w-5xl font-extrabold font-headline text-4xl text-white leading-[0.9] tracking-tighter md:text-7xl">
        Experience the <span className="text-primary">next digital </span>
        standard
      </h2>
    </section>
  );
}
