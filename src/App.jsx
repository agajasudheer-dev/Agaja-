import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CyberCanvas from './components/CyberCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';
import ResponsivePreview from './sections/ResponsivePreview';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 selection:bg-neon-cyan/25 selection:text-neon-cyan overflow-x-hidden">
      {/* 60fps Interactive Starfield & Neural Constellation Canvas */}
      <CyberCanvas />

      {/* Cyber Reticle Cursor */}
      <CustomCursor />

      {/* Neon Scroll Progress Tracker */}
      <ScrollProgress />

      {/* Floating HUD Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col gap-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <ResponsivePreview />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
