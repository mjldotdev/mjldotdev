export default function Section() {
  return (
    <section
      className="border-white/5 border-t bg-zinc-950 px-8 py-24 text-center md:py-48"
      data-animate="fade-up"
      id="contact"
    >
      <h2 className="mx-auto mb-12 max-w-4xl font-extrabold text-5xl text-white leading-[0.9] tracking-tighter md:text-8xl">
        Experience the <span className="text-blue-500">next digital</span>{" "}
        standard
      </h2>
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-2xl border-blue-500 border-l pl-6 text-left font-light text-lg text-zinc-400 leading-relaxed md:text-xl">
            Currently accepting limited number of full-stack projects to ensure
            right focus and exceptional engineering standards.
          </p>
        </div>
        <div className="double-bezel">
          <div className="double-bezel-inner p-8 md:p-12">
            <form className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              <div className="space-y-2 border-white/10 border-b pb-2 transition-colors focus-within:border-blue-500">
                <label className="font-bold font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                  Name
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 font-mono text-white text-xl outline-none placeholder:text-zinc-700 focus:ring-0"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2 border-white/10 border-b pb-2 transition-colors focus-within:border-blue-500">
                <label className="font-bold font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                  Email
                </label>
                <input
                  className="w-full border-none bg-transparent p-0 font-mono text-white text-xl outline-none placeholder:text-zinc-700 focus:ring-0"
                  placeholder="Your Email Address"
                  type="email"
                />
              </div>
              <div className="space-y-2 border-white/10 border-b pb-2 transition-colors focus-within:border-blue-500 md:col-span-2">
                <label className="font-bold font-mono text-[10px] text-blue-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  className="min-h-[120px] w-full resize-none border-none bg-transparent p-0 font-mono text-white text-xl outline-none placeholder:text-zinc-700 focus:ring-0"
                  placeholder="How can I help you?"
                />
              </div>
              <button className="bg-blue-600 px-12 py-6 font-bold font-mono text-sm text-white uppercase tracking-[0.3em] shadow-blue-500/20 shadow-xl transition-all hover:bg-blue-500 md:col-start-2 md:justify-self-end">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
