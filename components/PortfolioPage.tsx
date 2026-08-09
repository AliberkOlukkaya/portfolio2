import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import CareerConsole from "@/components/sections/CareerConsole";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/i18n";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <div className="desktop-scale-canvas">
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <div className="relative bg-black before:pointer-events-none before:absolute before:inset-x-0 before:-top-40 before:h-40 before:bg-gradient-to-b before:from-transparent before:via-black/80 before:to-black">
          <AboutMe locale={locale} />
          <Projects locale={locale} />
          <CareerConsole locale={locale} />
          <Contact locale={locale} />
        </div>
      </main>
    </div>
  );
}
