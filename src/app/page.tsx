import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustStrip />
      <About />
      <Projects />
      <Stats />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
