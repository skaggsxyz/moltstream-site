import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import Stats from "@/components/Stats";
import Platforms from "@/components/Platforms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <GettingStarted />
        <Stats />
        <Platforms />
      </main>
      <Footer />
    </>
  );
}
