import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
