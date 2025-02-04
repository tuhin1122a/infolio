"use client";
import About from "@/components/About";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <About />
        <ServicesSection />
      </motion.div>
    </>
  );
}
