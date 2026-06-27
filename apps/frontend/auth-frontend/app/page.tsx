"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "../components/landing/sections/Hero";
import BentoGrid from "../components/landing/sections/BentoGrid";
import RecentEvents from "../components/landing/sections/RecentEvents";
import Newsletter from "../components/landing/sections/Newsletter";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-[#101415] text-[#e0e3e5] font-sans selection:bg-[#7c3aed] selection:text-[#ede0ff]">
      <Navbar scrolled={scrolled} />

      <main className="pt-16">
        <Hero />
        <BentoGrid />
        <RecentEvents />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}