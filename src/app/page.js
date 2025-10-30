"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navigation from "./_components/Navigation";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Footer from "./_components//Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Box minH="100vh" transition="background-color 0.2s">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Box>
  );
}
