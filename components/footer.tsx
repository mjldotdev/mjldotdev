export default function Footer() {
  return (
    <footer className="border-white/5 border-t bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 p-12 md:flex-row">
        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          ©2026 mjldotdev. Engineered in Manila.
        </div>
        <div className="flex items-center gap-6">
          <a
            className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest transition-colors hover:text-white"
            href="#"
          >
            Github
          </a>
          <a
            className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest transition-colors hover:text-white"
            href="#"
          >
            LinkedIn
          </a>
          {/* <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest opacity-50">
          LAT: 14.5995 | LNG: 120.9842
        </div> */}
        </div>
      </div>
    </footer>
  );
}
