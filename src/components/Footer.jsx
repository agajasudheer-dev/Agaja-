import React from 'react';
import { ArrowUp, Terminal, Shield, Sparkles, Heart } from 'lucide-react';
import { personalData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-space-950/90 backdrop-blur-md pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & College */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-extrabold text-lg text-white">
              {personalData.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
              v2.0-STABLE
            </span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-1 max-w-sm">
            B.Tech Computer Science & Engineering (Artificial Intelligence) • Thejus Engineering College, Thrissur, Kerala
          </p>
        </div>

        {/* Center: System Status & Built With Antigravity */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400">All Systems Operational</span>
            <span className="text-slate-600">•</span>
            <span className="text-neon-cyan">60 FPS Render</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <span>Crafted & Built with</span>
            <span className="text-neon-cyan font-bold hover:text-white transition-colors">
              Antigravity
            </span>
            <span>in Kerala, India</span>
          </div>
        </div>

        {/* Right Side: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-space-900 border border-white/10 hover:border-neon-cyan text-xs font-mono text-slate-300 hover:text-white hover:shadow-neon-cyan transition-all"
            aria-label="Back to Top"
          >
            <span>Return to Apex</span>
            <ArrowUp className="w-4 h-4 text-neon-cyan group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-slate-500 font-mono text-[11px]">
        © {new Date().getFullYear()} {personalData.name}. Released under MIT License for academic & portfolio showcase.
      </div>
    </footer>
  );
}

