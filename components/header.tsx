import {
  Briefcase,
  Home,
  Mail,
  MemoryStick,
  Menu,
  Palette,
  Send,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[100] flex w-full items-center justify-center p-4">
      <div
        className="flex w-auto min-w-[280px] flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-in-out md:min-w-0"
        id="nav-wrapper"
      >
        <div className="flex w-full items-center justify-between gap-8 px-4 py-1">
          <div className="font-black text-white text-xl tracking-tighter">
            mjldotdev.
          </div>
          {/* <!-- Desktop Nav --> */}
          <nav className="relative hidden items-center gap-6 md:flex">
            <div
              className="pointer-events-none absolute h-8 rounded-full bg-blue-600/20 opacity-0 transition-all duration-300 ease-out"
              id="nav-pill"
              style={{ zIndex: -1 }}
            />
            <a
              className="nav-link relative z-10 rounded-full px-3 py-1 font-bold text-sm text-zinc-400 uppercase tracking-tighter transition-colors hover:text-white"
              href="#home"
            >
              Home
            </a>
            <a
              className="nav-link relative z-10 rounded-full px-3 py-1 font-bold text-sm text-zinc-400 uppercase tracking-tighter transition-colors hover:text-white"
              href="#specs"
            >
              Specs
            </a>
            <a
              className="nav-link relative z-10 rounded-full px-3 py-1 font-bold text-sm text-zinc-400 uppercase tracking-tighter transition-colors hover:text-white"
              href="#work"
            >
              Work
            </a>
            <a
              className="nav-link relative z-10 rounded-full px-3 py-1 font-bold text-sm text-zinc-400 uppercase tracking-tighter transition-colors hover:text-white"
              href="#about"
            >
              About
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative" id="theme-selector-container">
              <button
                aria-label="Select Theme"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                id="theme-dropdown-trigger"
              >
                <Palette className="material-symbols-outlined text-sm" />
              </button>
              <div
                className="liquid-glass pointer-events-none absolute right-0 z-[110] mt-4 w-48 origin-top-right scale-95 rounded-2xl border border-white/10 bg-zinc-900/90 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300"
                id="theme-dropdown-menu"
              >
                <div className="space-y-1">
                  <button
                    className="theme-option active-theme flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="vanguard"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Vanguard
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="titanium"
                  >
                    <span className="h-2 w-2 rounded-full bg-zinc-400" />
                    Titanium
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="midnight"
                  >
                    <span className="h-2 w-2 rounded-full bg-indigo-600" />
                    Midnight
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="architect"
                  >
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    Architect
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="emerald"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Emerald
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="rose"
                  >
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    Rose
                  </button>
                  <button
                    className="theme-option flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-bold text-xs text-zinc-400 uppercase tracking-widest transition-all hover:bg-white/5 hover:text-white"
                    data-theme="amber"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Amber
                  </button>
                </div>
              </div>
            </div>
            <a
              className="flex items-center rounded-full bg-primary px-4 py-1.5 font-bold text-white text-xs uppercase transition-colors hover:bg-primary/70"
              href="#contact"
            >
              <Mail className="material-symbols-outlined inline text-sm sm:hidden" />
              <span className="hidden sm:inline">Connect</span>
              <kbd className="ml-2 hidden items-center justify-center rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] leading-none md:inline-flex">
                C
              </kbd>
            </a>
            {/* <!-- Mobile Toggle --> */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
              id="mobile-menu-toggle"
            >
              <Menu className="material-symbols-outlined menu-icon" />
            </button>
          </div>
        </div>
        {/* <!-- Mobile Nav Links --> */}
        <div
          className="collapsed w-full px-4 md:hidden"
          id="mobile-nav-container"
        >
          <nav className="flex flex-col gap-2 pb-4">
            <a
              className="mobile-nav-link flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 font-bold text-sm text-zinc-400 uppercase tracking-widest transition-all hover:bg-blue-600/20 hover:text-white"
              href="#home"
            >
              Home
              <Home className="material-symbols-outlined text-xs" />
            </a>
            <a
              className="mobile-nav-link flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 font-bold text-sm text-zinc-400 uppercase tracking-widest transition-all hover:bg-blue-600/20 hover:text-white"
              href="#specs"
            >
              Specs
              <MemoryStick className="material-symbols-outlined text-xs" />
            </a>
            <a
              className="mobile-nav-link flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 font-bold text-sm text-zinc-400 uppercase tracking-widest transition-all hover:bg-blue-600/20 hover:text-white"
              href="#work"
            >
              Work
              <Briefcase className="material-symbols-outlined text-xs" />
            </a>
            <a
              className="mobile-nav-link flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 font-bold text-sm text-zinc-400 uppercase tracking-widest transition-all hover:bg-blue-600/20 hover:text-white"
              href="#about"
            >
              About
              <User className="material-symbols-outlined text-xs" />
            </a>
            <a
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-bold text-sm text-white uppercase tracking-widest shadow-blue-500/20 shadow-lg transition-all sm:hidden"
              href="#contact"
            >
              Connect
              <Send className="material-symbols-outlined text-xs" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
