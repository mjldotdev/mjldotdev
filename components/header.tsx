export default function Header() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 flex w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-zinc-200/10 bg-white/80 px-8 py-3 shadow-[0_20px_50px_-12px_rgba(24,24,27,0.06)] backdrop-blur-xl dark:border-zinc-800/10 dark:bg-zinc-950/80">
      <div className="font-black font-manrope text-xl text-zinc-900 tracking-tighter dark:text-zinc-50">
        mjldotdev.
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <a
          className="border-rose-600 border-b-2 pb-1 font-bold font-manrope font-medium text-rose-600 text-sm tracking-tight dark:text-rose-400"
          href="#"
        >
          Home
        </a>
        <a
          className="font-manrope font-medium text-sm text-zinc-500 tracking-tight transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          href="#"
        >
          Work
        </a>
        <a
          className="font-manrope font-medium text-sm text-zinc-500 tracking-tight transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          href="#"
        >
          Services
        </a>
        <a
          className="font-manrope font-medium text-sm text-zinc-500 tracking-tight transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          href="#"
        >
          About
        </a>
        <a
          className="font-manrope font-medium text-sm text-zinc-500 tracking-tight transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          href="#"
        >
          Contact
        </a>
      </div>
      <button className="magnetic-hover rounded-full bg-primary-container px-6 py-2 font-manrope font-medium text-on-primary-container text-sm shadow-sm transition-all duration-300 hover:shadow-xl active:scale-95">
        Start Project
      </button>
    </nav>
  );
}
