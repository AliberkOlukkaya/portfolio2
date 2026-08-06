import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CtaFooter from "@/components/sections/CtaFooter";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <CtaFooter />
      </main>
    </>
  );
}
