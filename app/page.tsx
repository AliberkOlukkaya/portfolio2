import Navbar from "@/components/Navbar";

import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div
  className="
    relative bg-black

    before:pointer-events-none
    before:absolute
    before:inset-x-0
    before:-top-40
    before:h-40
    before:bg-gradient-to-b
    before:from-transparent
    before:via-black/80
    before:to-black
  "
>
  <AboutMe />
  <Projects />

  <div
    className="
      mx-auto grid max-w-[1500px]
      items-start gap-16 px-6
      lg:grid-cols-[0.9fr_1.1fr]
      lg:gap-12
      xl:gap-16
    "
  >
    <Skills />
    <Experience />
  </div>

  <Contact />
</div>
      </main>
    </>
  );
}