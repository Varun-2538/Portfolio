import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collage from "@/components/Collage";
import Projects from "@/components/Projects";
import AlwaysOn from "@/components/AlwaysOn";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Collage />
      <Projects />
      <AlwaysOn />
      <Stack />
      <Journey />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
