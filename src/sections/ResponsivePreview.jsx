import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Layout, 
  Maximize2, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { responsivePreviews } from '../data/content';

const iconMap = {
  Monitor: Monitor,
  Tablet: Tablet,
  Smartphone: Smartphone
};

export default function ResponsivePreview() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 rounded-3xl -z-10 blur-xl" />

      {/* Frame Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border-neon-cyan/30 relative overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.7)]">
        {/* Glowing Corner Accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-cyan" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-cyan" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-1.5">
              <Layout className="w-4 h-4" />
              <span>Multi-Device Calibration</span>
            </div>
            <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
              Responsive Layout Preview
            </h3>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs px-3.5 py-1.5 rounded-full bg-space-950 border border-neon-cyan/30 text-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span>FLUID VIEWPORT ADAPTATION</span>
          </div>
        </div>

        {/* Device Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {responsivePreviews.map((preview, index) => {
            const Icon = iconMap[preview.icon] || Monitor;

            return (
              <motion.div
                key={preview.device}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-2xl bg-space-950/80 border border-white/10 hover:border-neon-cyan/40 p-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] flex flex-col justify-between"
              >
                <div>
                  {/* Miniature Device Frame Simulation */}
                  <div className="relative h-32 rounded-xl bg-space-900/90 border border-white/10 p-2.5 mb-4 flex flex-col justify-between overflow-hidden group-hover:border-neon-cyan/30 transition-colors">
                    {/* Simulated Mini Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">
                        {preview.screen}
                      </span>
                    </div>

                    {/* Simulated Mini Page Wireframe */}
                    <div className="space-y-1.5 py-2">
                      <div className="h-2 w-2/3 bg-gradient-to-r from-neon-cyan/60 to-neon-purple/60 rounded" />
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        <div className="h-6 rounded bg-neon-cyan/10 border border-neon-cyan/20" />
                        <div className="h-6 rounded bg-neon-purple/10 border border-neon-purple/20" />
                        <div className="h-6 rounded bg-neon-magenta/10 border border-neon-magenta/20" />
                      </div>
                    </div>

                    {/* Scanline overlay */}
                    <div className="absolute inset-0 cyber-scanline opacity-30 pointer-events-none" />
                  </div>

                  {/* Device Label */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 text-neon-cyan border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold text-sm text-white">
                        {preview.device}
                      </h4>
                      <p className="text-[11px] font-mono text-neon-cyan">
                        {preview.screen}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {preview.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Validated</span>
                  </span>
                  <span>100% Responsive</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

