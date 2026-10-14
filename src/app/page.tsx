import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import HomeExplore from "@/components/home/HomeExplore";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <HomeExplore />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}