import React from 'react';
import { motion } from 'framer-motion';
import {
  Milestone,
  Clock,
  CheckCircle2,
  CircleDot,
  Award,
  Calendar,
  Sparkles
} from 'lucide-react';
import { timelineData } from '../data/content';

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Milestone className="w-3.5 h-3.5" />
          <span>Chronological Log</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Milestones & <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Trajectory</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          A progression timeline tracking academic milestones at Thejus Engineering College and continuous technical exploration.
        </motion.p>
      </div>

      {/* Vertical Cyber Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Glowing Line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta/20 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''
                  }`}
              >
                {/* Node Center Pin */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-space-950 border-2 border-neon-cyan flex items-center justify-center shadow-neon-cyan z-20">
                  <div className={`w-3 h-3 rounded-full ${item.statusType === 'active' ? 'bg-neon-cyan animate-ping' : 'bg-neon-purple'}`} />
                  <div className={`absolute w-2.5 h-2.5 rounded-full ${item.statusType === 'active' ? 'bg-neon-cyan' : 'bg-neon-purple'}`} />
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-[calc(50%-40px)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="glass-panel rounded-2xl p-6 border-white/10 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]">
                    {/* Header Chips */}
                    <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </span>

                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.statusType === 'active'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                        }`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-orbitron font-bold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>

                    <h4 className="text-xs sm:text-sm font-mono text-neon-purple mt-1">
                      {item.organization}
                    </h4>

                    <p className="mt-3 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

