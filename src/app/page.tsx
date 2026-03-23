"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Platforms from "@/components/Platforms";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <Platforms />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
