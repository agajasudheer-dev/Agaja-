import React from 'react';

export default function CyberHudOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden" aria-hidden="true">
      {/* Cinematic Sci-Fi Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(3,4,10,0.85)_100%)] pointer-events-none" />

      {/* Subtle CRT Scanline overlay */}
      <div className="absolute inset-0 cyber-scanline opacity-10 pointer-events-none" />
    </div>
  );
}
