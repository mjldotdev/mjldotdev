export default function Section() {
  return (
    <section className="mt-16 flex justify-center" id="contact" id="contact">
      <div className="w-full max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mx-auto max-w-lg text-on-surface-variant text-sm leading-relaxed">
            Currently accepting a limited number of high-impact projects to
            ensure obsessive focus and exceptional engineering standards.
          </p>
        </div>
        <div className="double-bezel rounded-lg">
          <div className="double-bezel-inner-container">
            <div className="double-bezel-inner p-10">
              <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2 border-outline-variant/30 border-b pb-2 transition-colors focus-within:border-primary">
                  <label className="font-bold font-label text-[10px] text-primary uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    className="w-full font-headline text-lg text-white placeholder:text-surface-container-highest"
                    //   placeholder="IDENTIFY_YOURSELF"
                    type="text"
                  />
                </div>
                <div className="space-y-2 border-outline-variant/30 border-b pb-2 transition-colors focus-within:border-primary">
                  <label className="font-bold font-label text-[10px] text-primary uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    className="w-full font-headline text-lg text-white placeholder:text-surface-container-highest"
                    //   placeholder="COMM_CHANNEL"
                    type="email"
                  />
                </div>
                <div className="space-y-2 border-outline-variant/30 border-b pb-2 transition-colors focus-within:border-primary md:col-span-2">
                  <label className="font-bold font-label text-[10px] text-primary uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    className="min-h-[160px] w-full resize-none font-headline text-lg text-white placeholder:text-surface-container-highest"
                    //   placeholder="DESCRIBE_SCOPE"
                  />
                </div>
                <div className="pt-4 md:col-span-2">
                  <button className="w-full bg-primary py-4 font-bold font-headline text-on-primary text-sm uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:brightness-110">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
