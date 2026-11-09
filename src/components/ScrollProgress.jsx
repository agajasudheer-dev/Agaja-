import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-space-950/40">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

