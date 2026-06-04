import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";       // 1. Yeni eklendi (Vitrinden hemen sonra)
import Services from "@/components/Services";
import Process from "@/components/Process";   // 2. Yeni eklendi (Hizmetlerden hemen sonra)
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brandLight">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}