import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Specs from "@/components/specs";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Specs />
      <Work />
      <About />
      <Contact />
    </>
  );
}
