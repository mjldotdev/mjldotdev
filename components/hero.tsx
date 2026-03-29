import { ArrowUpRight } from "lucide-react";

export default function Section() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-[1600px] flex-col justify-end overflow-hidden px-6 pt-56 pb-24 md:px-12">
      <div className="z-10 grid grid-cols-1 items-end gap-4 md:grid-cols-12 md:gap-12">
        {/* <!-- Left: Massive Identity Heading --> */}
        <div className="md:col-span-10 lg:col-span-6 xl:col-span-7">
          <h1 className="tight-headline mb-8 font-extrabold font-headline text-[12vw] text-on-surface uppercase leading-[0.85] md:text-[9vw]">
            <span className="font-medium text-[7vw] text-primary/70">
              Engr.
            </span>{" "}
            <br /> MJ <span className="text-on-background/60">DELA</span>
            <br />
            <span className="inline-flex items-center text-on-background/60">
              CRUZ
              <span className="double-bezel mx-[1vw] -mt-[1vw] hidden h-[10vw] w-[15vw] rotate-[-4deg] overflow-hidden rounded-2xl md:inline-block">
                <img
                  className="h-full w-full object-cover"
                  data-alt="high-end minimalist architectural structure with sharp shadows and light play"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHmTNBfsCd4kF-osoMfwXJV2l7Q8PZROX7sgzNAXtZOJq3_gs2b_vSw4VGh7FW7ArfQmWjXUYd0IQlbverO480PTb9AfRfUtB6guBF-5PFuCAunsA9cFqcRFrbFBv0qZalNJinJVGCfKHDt5hOtyIS9xh3tFypmZSIkJWCiJsQHF9d23pa7VZFET8Db_00MxonIa0MGFkzS-INzdi4HWC70c9Gb4bHFy_xEjynZSXMuRX1nzq3UKbBUOzx3wKd0_wpbC_BpQ5G"
                />
              </span>
            </span>
          </h1>
        </div>
        {/* <!-- Right: Identity Intro & CTA --> */}
        <div className="mb-2 flex flex-col gap-6 bg-white/40 p-6! pb-[2vw] backdrop-blur-lg md:col-span-8 lg:col-span-6 xl:col-span-4">
          <div className="space-y-6">
            <p className="border-primary border-l-2 pl-6 font-body font-medium text-lg text-on-surface leading-snug md:text-xl">
              A digital engineer who designs with purpose and intention, turning
              ideas into meaningful, high-impact solutions.
            </p>
          </div>
          <button className="group magnetic-hover flex w-full max-w-3xs items-center justify-between rounded-xl bg-primary px-6 py-4 font-bold font-headline text-lg text-on-primary shadow-[0_30px_60px_-15px_rgba(184,0,53,0.3)] transition-all duration-500 ease-out">
            <span className="">Initiate Project</span>
            <ArrowUpRight
              className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-2"
              data-icon="arrow_outward"
            />
          </button>
        </div>
      </div>
      {/* <!-- Integrated Background Elements --> */}
      <div className="absolute -top-[3%] right-[-10%] z-0 h-[70vh] w-[50vw] opacity-30 md:top-[10%]">
        <img
          className="h-full w-full object-contain grayscale filter"
          data-alt="abstract 3d mesh geometry floating in space"
          //   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFUpApUnbk369CCSfXwjW58GKpOnyCfdxW78mSfq0H7NABwtPxbsR_lKYMqeVjmvF0pMYjcNx5X-ztH055BGJ6hXRLL7sfsFgLXjfQcxI87wEnlBT1P4VFcCvTfBOiYjb0FweGlbzMuhUbzmBhUHX2h5RdzkQ1nufv_sAqCCCWQAQ0lmMTqwgtkLGCg_gJBCD8cDK7xHRJZSKhOoEb8jZyoX_U8fUJLCr6jPJI9dY0vkkt2FyNft4zf8X4u23Zd3XQNS5fbTL"
          //   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaYeuHhJfUFlzMRwu53ToX7VQnuzxpdKglqvpKNCpawthfWoLDFhpO6ozZJyk7X-AdKYTrqAk5-52VTDXh9JE_KJpLHkDTt9Wn_D8BdIWB5NK8zguSlqZCLLf6jWJi755U4rS45U1RSJwRWunwZS1PUeFa3TfaXysJgspn_y2fJyBQ9E1CwT_5Q6G-b2osyHW4f8HUym7_0QEv6E2ZZShteTd2uyI7QMo8M-ws5dmwEJfW9hTXqj8cIfuyjR1fZk8Y8x7ztD0u"
          src="/images/download.jpeg"
        />
      </div>
      <div className="absolute top-[20%] left-[-5%] z-0 h-[30vw] w-[30vw] rounded-full bg-surface-container opacity-30 blur-[120px]" />
    </section>
  );
}
