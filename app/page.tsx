import About from "@/components/About";
import Contact from "@/components/Contact";
import Diagnostic from "@/components/Diagnostic";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import References from "@/components/References";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Features />
      <Team />
      <References />
      <Diagnostic />
      <Contact />
    </main>
  );
}
