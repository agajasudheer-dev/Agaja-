import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle,
  Binary
} from 'lucide-react';
import { skillsData } from '../data/content';

const iconMap = {
  'ai-ml': Cpu,
  'frontend': Code2,
  'backend': Database,
  'tools': Wrench
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);

  const selectedCategoryData = skillsData.categories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/10 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Binary className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Technical <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Capability Grid</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Specialized in combining algorithmic mathematical reasoning with modern reactive web interfaces and clean software design patterns.
        </motion.p>
      </div>

      {/* Category Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-10 sm:mb-12">
        {skillsData.categories.map((cat) => {
          const Icon = iconMap[cat.id] || Cpu;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 flex items-center gap-2.5 sm:gap-3.5 ${
                isActive
                  ? 'bg-space-900/90 border-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                  : 'bg-space-950/60 border-white/10 hover:border-white/20 hover:bg-space-900/40 text-slate-400'
              }`}
            >
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: isActive ? `${cat.accent}20` : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${isActive ? cat.accent : 'rgba(255,255,255,0.1)'}`,
                  color: isActive ? cat.accent : '#94a3b8'
                }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className={`font-orbitron text-[11px] sm:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {cat.name}
                </h3>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 block truncate">
                  {cat.skills.length} competencies
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Skill Matrix Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-neon-cyan/20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
          <div>
            <h3 className="font-orbitron font-bold text-xl text-white flex items-center gap-2">
              <span>{selectedCategoryData?.name}</span>
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: selectedCategoryData?.accent }}
              />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {selectedCategoryData?.description}
            </p>
          </div>
          <div className="font-mono text-xs px-3 py-1.5 rounded-xl bg-space-950 border border-white/10 text-slate-300 self-start sm:self-auto">
            STATUS // CALIBRATED
          </div>
        </div>

        {/* Skill Bars & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCategoryData?.skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-space-950/70 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white text-sm group-hover:text-neon-cyan transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {skill.tag}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-neon-cyan">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar with Glowing Track */}
              <div className="w-full h-2 rounded-full bg-space-900 border border-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.08, ease: 'easeOut' }}
                  style={{
                    backgroundColor: selectedCategoryData.accent,
                    boxShadow: `0 0 10px ${selectedCategoryData.accent}`
                  }}
                  className="h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Orbital Badges Row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {['Python', 'PyTorch', 'React', 'JavaScript', 'Node.js', 'Tailwind', 'Git', 'C++', 'Data Structures', 'FastAPI'].map((badge) => (
          <div
            key={badge}
            className="px-3.5 py-1.5 rounded-xl bg-space-950/80 border border-white/10 text-xs font-mono text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/40 hover:shadow-neon-cyan transition-all cursor-default"
          >
            #{badge}
          </div>
        ))}
      </div>

    </section>
  );
}

