import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Cpu, 
  ShieldCheck, 
  Radar, 
  Compass, 
  Activity, 
  Crosshair, 
  Layers 
} from 'lucide-react';

export default function CyberHudOverlay() {
  const [ping, setPing] = useState(12);
  const [fps, setFps] = useState(60);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Simulate dynamic telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * 5) + 10); // 10-14ms
      setFps(Math.floor(Math.random() * 2) + 59); // 59-60fps
    }, 2500);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden" aria-hidden="true">
      
      {/* Cinematic Sci-Fi Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(3,4,10,0.85)_100%)] pointer-events-none" />

      {/* Subtle CRT Scanline overlay */}
      <div className="absolute inset-0 cyber-scanline opacity-15 pointer-events-none" />

      {/* ================= TOP LEFT HUD BRACKET ================= */}
      <div className="hidden md:flex absolute top-6 left-6 flex-col gap-1">
        <div className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
          <span className="font-bold">SYS_ONLINE // V2.4</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">FREQ: 2.4GHz</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Visual Corner Bracket */}
          <div className="w-12 h-3 border-t-2 border-l-2 border-neon-cyan/50 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
          <span className="text-[9px] font-mono text-slate-500 tracking-wider">
            [NODE: THEJUS_ENGG]
          </span>
        </div>
      </div>

      {/* ================= TOP RIGHT HUD BRACKET ================= */}
      <div className="hidden md:flex absolute top-6 right-6 flex-col items-end gap-1">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest">
          <span className="text-slate-400">LAT: 10.5276° N • LNG: 76.2144° E</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <Wifi className="w-3 h-3" />
            <span>{ping}ms</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-slate-500 tracking-wider">
            KERALA_NODE // CSE_AI
          </span>
          <div className="w-12 h-3 border-t-2 border-r-2 border-neon-cyan/50 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
        </div>
      </div>

      {/* ================= BOTTOM LEFT HUD RADAR ================= */}
      <div className="hidden md:flex absolute bottom-6 left-6 items-end gap-3">
        {/* Animated Radar Reticle */}
        <div className="relative w-12 h-12 rounded-full border border-neon-cyan/30 bg-space-950/70 p-1 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.2)]">
          {/* Inner concentric circles */}
          <div className="w-8 h-8 rounded-full border border-neon-cyan/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-neon-cyan/40 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-neon-cyan" />
            </div>
          </div>
          {/* Crosshair lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-neon-cyan/20" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-[1px] bg-neon-cyan/20" />
          </div>
          {/* Rotating radar sweep */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.35)_45deg,transparent_50deg)] animate-spin [animation-duration:4s]" />
          {/* Pulsing blips */}
          <div className="absolute top-2 right-2.5 w-1 h-1 bg-neon-magenta rounded-full animate-ping" />
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
            <span className="text-neon-cyan">RADAR // ACTIVE</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">RANGE: 360°</span>
          </div>
          <div className="w-16 h-2 border-b-2 border-l-2 border-neon-cyan/50 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
        </div>
      </div>

      {/* ================= BOTTOM RIGHT TELEMETRY ================= */}
      <div className="hidden md:flex absolute bottom-6 right-6 flex-col items-end gap-1">
        <div className="w-16 h-2 border-b-2 border-r-2 border-neon-cyan/50 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 tracking-wider">
          <span className="text-neon-cyan font-bold">{fps}.0 FPS</span>
          <span className="text-slate-600">•</span>
          <span className="text-neon-purple font-semibold">HARDWARE_ACCEL</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">SEC_STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* ================= LEFT & RIGHT VIEWPORT RULER TICKS ================= */}
      <div className="hidden lg:flex flex-col justify-between absolute left-3 top-1/3 bottom-1/3 w-3 text-neon-cyan/40 pointer-events-none">
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
      </div>

      <div className="hidden lg:flex flex-col justify-between absolute right-3 top-1/3 bottom-1/3 w-3 items-end text-neon-cyan/40 pointer-events-none">
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
        <div className="w-3.5 h-[1px] bg-neon-cyan/60" />
        <div className="w-2 h-[1px] bg-neon-cyan/40" />
      </div>

      {/* ================= SUBTLE FLOATING CROSSHAIRS ================= */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-25">
        <Crosshair className="w-4 h-4 text-neon-cyan" />
      </div>
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 opacity-25">
        <Crosshair className="w-4 h-4 text-neon-purple" />
      </div>

    </div>
  );
}

