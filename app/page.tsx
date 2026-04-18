import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Reserve } from "@/components/Reserve";
import { Gallery } from "@/components/Gallery";
import { Careers } from "@/components/Careers";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reserve />
        <Gallery />
        <Careers />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
