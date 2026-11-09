import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Cpu, 
  Sparkles, 
  Activity, 
  Code, 
  Terminal, 
  CheckCircle2, 
  Flame, 
  BookOpen 
} from 'lucide-react';
import { personalData, statsData } from '../data/content';

// Count up component that triggers when scrolled into view
function CountUpNumber({ target, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const increment = target / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-orbitron font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 -left-36 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 blur-[110px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Profile Diagnostics</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Architecting Tomorrow's <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Intelligent Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          A glimpse into my academic foundations, technological exploration, and drive to create software that empowers people.
        </motion.p>
      </div>

      {/* Main About Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left Column: Bio & College Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-neon-cyan/20 relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white">
                  Academic Credentials
                </h3>
                <p className="text-xs font-mono text-neon-cyan">
                  {personalData.role}
                </p>
              </div>
            </div>

            {/* Institution Badge */}
            <div className="p-4 rounded-2xl bg-space-950/70 border border-white/10 mb-6 flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-neon-magenta shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">
                  {personalData.college}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Focusing on foundational algorithms, artificial intelligence paradigms, machine learning mathematics, and computational thinking.
                </p>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalData.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-space-900/60 border border-white/5">
              <div className="text-neon-cyan font-mono text-xs font-semibold mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AI First</span>
              </div>
              <p className="text-[11px] text-slate-400">Deep Learning & Vision</p>
            </div>

            <div className="p-3 rounded-xl bg-space-900/60 border border-white/5">
              <div className="text-neon-purple font-mono text-xs font-semibold mb-1 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>Modern Web</span>
              </div>
              <p className="text-[11px] text-slate-400">React, Tailwind & Node</p>
            </div>

            <div className="p-3 rounded-xl bg-space-900/60 border border-white/5 col-span-2 sm:col-span-1">
              <div className="text-neon-magenta font-mono text-xs font-semibold mb-1 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>High Drive</span>
              </div>
              <p className="text-[11px] text-slate-400">Daily learning & growth</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Terminal Diagnostics & Core Values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Cyber Terminal Card */}
          <div className="glass-panel-purple rounded-3xl p-6 border-neon-purple/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-neon-purple" />
                <span className="text-slate-300">SYSTEM_DIAGNOSTICS.LOG</span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYNCHRONIZED
              </span>
            </div>

            <div className="font-mono text-xs space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-slate-400">user.identity:</span>
                <span className="text-white font-medium">"Agaja"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-slate-400">curriculum:</span>
                <span className="text-amber-300">"B.Tech CSE (Artificial Intelligence)"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-slate-400">campus.node:</span>
                <span className="text-emerald-400">"Thejus Engg College, Thrissur"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-slate-400">state:</span>
                <span className="text-neon-cyan">"Ready for internships & innovative builds"</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-neon-cyan">$</span>
                <span className="text-slate-400">core_passions:</span>
                <span className="text-purple-300">["Generative AI", "Scalable Web", "Creative UI"]</span>
              </div>
            </div>
          </div>

          {/* Key Value Highlight */}
          <div className="glass-panel-magenta rounded-3xl p-6 border-neon-magenta/20 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon-magenta/10 border border-neon-magenta/30 flex items-center justify-center text-neon-magenta">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-white text-base">
                    Mission Directive
                  </h4>
                  <p className="text-[11px] font-mono text-neon-magenta">Engineering with Purpose</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "To continuously synthesize computer science fundamentals with emerging artificial intelligence models, building software that solves tangible real-world problems."
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Semester: 1st Year</span>
              <span className="text-neon-cyan">Kerala, India</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Animated Stats Row (with Count-Up Numbers on Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {statsData.map((stat, idx) => (
          <div
            key={stat.id}
            className="group relative glass-panel rounded-2xl p-5 sm:p-6 border-white/10 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-neon-cyan/5 rounded-bl-full pointer-events-none group-hover:bg-neon-cyan/10 transition-colors" />
            <CountUpNumber target={stat.value} suffix={stat.suffix} />
            <h4 className="font-orbitron font-bold text-sm sm:text-base text-white mt-2">
              {stat.label}
            </h4>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {stat.description}
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

