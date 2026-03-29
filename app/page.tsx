import About from "@/components/about";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import Hero from "@/components/hero-new";
import Philosophy from "@/components/philosophy";
// import Skills from "@/components/skills";
import Stack from "@/components/stack";
import Work from "@/components/work-new";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      {/* <Skills /> */}
      <Work />
      <About />
      <Stack />
      <Cta />
      <Contact />
    </>
  );
}
