export default function Section() {
  return (
    <section className="bg-surface-container-low px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-4">
          <span className="font-bold font-label text-primary text-xs uppercase tracking-widest">
            Selected Works
          </span>
          <h2 className="font-bold font-headline text-4xl tracking-tight md:text-5xl">
            The Portfolio
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* <!-- Large Feature Card --> */}
          <div className="group double-bezel relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-8">
            <img
              className="h-full w-full scale-105 object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:grayscale-0"
              data-alt="interior of a modern architecture building with high ceilings and dramatic shadows cast by sunlight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHmTNBfsCd4kF-osoMfwXJV2l7Q8PZROX7sgzNAXtZOJq3_gs2b_vSw4VGh7FW7ArfQmWjXUYd0IQlbverO480PTb9AfRfUtB6guBF-5PFuCAunsA9cFqcRFrbFBv0qZalNJinJVGCfKHDt5hOtyIS9xh3tFypmZSIkJWCiJsQHF9d23pa7VZFET8Db_00MxonIa0MGFkzS-INzdi4HWC70c9Gb4bHFy_xEjynZSXMuRX1nzq3UKbBUOzx3wKd0_wpbC_BpQ5G"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-10">
              <h3 className="font-bold font-headline text-3xl text-white">
                Lumina Systems
              </h3>
              <p className="mt-2 font-body text-white/80">
                Design Engineering &amp; Identity
              </p>
            </div>
          </div>
          {/* <!-- Small Asymmetric Cards --> */}
          <div className="flex flex-col gap-8 md:col-span-4">
            <div className="group double-bezel relative aspect-square overflow-hidden rounded-xl bg-surface-container-lowest">
              <img
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                data-alt="minimalist white wristwatch on a light grey textured background with soft ambient shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjx4FIndd1n--0wxV3OICS9v-XklUtGLlPXX1-QLc9dyKse3MY8VdHqIVqEnpufr0_0eEry0T8L0OOhN5Dkgrqkn2r24euQ4DgKUMo92xLPGrpUhTTNOBtyjhmHpGBDsI7TwESbf7J_eekLKzEY1C51TWJuu9hQETw5kJZwz0btg-smEBjzogIzO9w3CDeQza6EqstcIjRBpxFgNZehSCh7X7dgMxRv4xzDzzLqs1FNe118ANwdosl6H0wsR3hOQZgKx9TysYa"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
            </div>
            <div className="double-bezel flex flex-grow flex-col justify-end rounded-xl bg-surface-container-lowest p-8">
              <span
                className="material-symbols-outlined mb-4 text-4xl text-primary"
                data-icon="auto_awesome"
              >
                auto_awesome
              </span>
              <h3 className="mb-2 font-bold font-headline text-2xl">
                Refined Precision
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                Every pixel is interrogated. Every interaction is earned. We
                build for the long-term.
              </p>
            </div>
          </div>
          {/* <!-- Offset Row --> */}
          <div className="double-bezel flex flex-col justify-between rounded-xl bg-surface-container-lowest p-10 md:col-span-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-high">
              <span className="material-symbols-outlined" data-icon="grid_view">
                grid_view
              </span>
            </div>
            <div>
              <h3 className="mb-4 font-bold font-headline text-2xl">
                Core Expertise
              </h3>
              <ul className="space-y-3 font-body text-secondary text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" /> UX
                  Architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" /> Design
                  Systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" /> Creative
                  Engineering
                </li>
              </ul>
            </div>
          </div>
          <div className="group double-bezel relative aspect-[21/9] overflow-hidden rounded-xl bg-surface-container-lowest md:col-span-8">
            <img
              className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
              data-alt="close-up of abstract digital art representing fluid motion and connectivity in shades of deep red and black"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFUpApUnbk369CCSfXwjW58GKpOnyCfdxW78mSfq0H7NABwtPxbsR_lKYMqeVjmvF0pMYjcNx5X-ztH055BGJ6hXRLL7sfsFgLXjfQcxI87wEnlBT1P4VFcCvTfBOiYjb0FweGlbzMuhUbzmBhUHX2h5RdzkQ1nufv_sAqCCCWQAQ0lmMTqwgtkLGCg_gJBCD8cDK7xHRJZSKhOoEb8jZyoX_U8fUJLCr6jPJI9dY0vkkt2FyNft4zf8X4u23Zd3XQNS5fbTL"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
