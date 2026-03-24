import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Platforms from "@/components/Platforms";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <Platforms />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
