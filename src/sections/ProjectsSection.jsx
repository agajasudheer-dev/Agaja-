import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Cpu, 
  Star, 
  Activity, 
  CheckCircle2, 
  Filter,
  Info
} from 'lucide-react';
import { projectsData } from '../data/content';

// 3D Tilt Card Component with interactive perspective and mouse tracking
function TiltProjectCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // max tilt 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{
        perspective: '1000px'
      }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${isHovered ? '-8px' : '0px'})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
          boxShadow: isHovered
            ? `0 20px 45px -15px ${project.accentGlow}, 0 0 1px 1px ${project.accentColor}`
            : '0 10px 30px -15px rgba(0,0,0,0.7), 0 0 1px 1px rgba(255,255,255,0.08)'
        }}
        className="relative h-full rounded-2xl sm:rounded-3xl bg-space-950/85 backdrop-blur-xl border border-white/10 p-4 sm:p-6 flex flex-col justify-between overflow-hidden group cursor-pointer"
      >
        {/* Dynamic Glowing Accent Aura */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[70px] pointer-events-none transition-opacity duration-300"
          style={{
            background: project.accentColor,
            opacity: isHovered ? 0.25 : 0.08
          }}
        />

        <div>
          {/* Card Media Preview Header */}
          <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-space-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
              loading="lazy"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
            
            {/* Category and Status Chips */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md border"
                style={{
                  backgroundColor: 'rgba(5, 6, 15, 0.75)',
                  borderColor: project.accentColor,
                  color: project.accentColor
                }}
              >
                {project.category}
              </span>
            </div>

            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-space-950/80 border border-white/15 text-slate-300 flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.status}</span>
              </span>
            </div>

            {/* Subtitle tag at bottom of preview */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-white font-medium">{project.subtitle}</span>
              {project.stats && (
                <span className="text-neon-cyan flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-neon-cyan" />
                  {project.stats.stars || 0}
                </span>
              )}
            </div>
          </div>

          {/* Project Title & Description */}
          <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-neon-cyan transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span
              className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: project.accentColor }}
            >
              // ACTIVE
            </span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300/85 leading-relaxed">
            {project.description}
          </p>

          {/* Key Stats Row */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-2 mt-4 p-2.5 rounded-xl bg-space-900/60 border border-white/5 font-mono text-[11px]">
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-2 text-slate-400">
                  <span className="capitalize">{k}:</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack + Links */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-4">
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: isHovered ? project.accentColor : 'rgba(255,255,255,0.06)',
                color: isHovered ? '#05060f' : '#ffffff',
                borderColor: isHovered ? project.accentColor : 'rgba(255,255,255,0.15)'
              }}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold transition-all py-1.5 px-3 rounded-lg border shadow-sm"
              aria-label={`View ${project.title} live demo`}
            >
              <span>Launch Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'Full Stack', 'UI/UX', 'Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Showcase</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Featured <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Project Matrix</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Explore a curated array of AI/ML prototypes, full-stack platforms, and experimental cyber interfaces. 
          Cards tilt and respond interactively to your cursor.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 border ${
                isActive
                  ? 'bg-neon-cyan text-space-950 font-bold border-neon-cyan shadow-neon-cyan'
                  : 'bg-space-900/60 text-slate-400 border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3D Tilt Project Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <TiltProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Notice Pill: Easy Editing */}
      <div className="mt-12 p-4 rounded-2xl bg-space-900/60 border border-white/10 max-w-xl mx-auto flex items-center gap-3 text-xs font-mono text-slate-400">
        <Info className="w-5 h-5 text-neon-cyan shrink-0" />
        <span>
          Projects, links, and thumbnails can be modified instantly in <code className="text-neon-cyan">src/data/content.js</code>.
        </span>
      </div>

    </section>
  );
}

