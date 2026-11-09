import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  Terminal, 
  FileCode, 
  Sparkles, 
  Cpu, 
  Layers, 
  ExternalLink, 
  Github, 
  Download, 
  ShieldCheck,
  ChevronRight,
  FolderGit2
} from 'lucide-react';
import { personalData, heroCodeSnippet, projectsData } from '../data/content';
import { playFireworkSound, playTabSwitch } from '../utils/cyberAudio';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('js');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Cyber Fireworks Trigger on Name Click
  const triggerFireworks = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.35;

    const cyberColors = ['#22d3ee', '#a855f7', '#d946ef', '#38bdf8', '#ffffff', '#ec4899'];

    // Burst 1: High velocity core explosion
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { x, y },
      colors: cyberColors,
      startVelocity: 38,
      ticks: 220,
      gravity: 0.85,
      scalar: 1.15,
      shapes: ['circle', 'square']
    });

    // Burst 2: Dual flanking fountains
    setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 75,
        origin: { x: Math.max(0.1, x - 0.12), y: Math.min(0.9, y + 0.05) },
        colors: cyberColors,
        startVelocity: 42
      });
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 75,
        origin: { x: Math.min(0.9, x + 0.12), y: Math.min(0.9, y + 0.05) },
        colors: cyberColors,
        startVelocity: 42
      });
    }, 140);

    // Burst 3: Sparkling star canopy
    setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 130,
        origin: { x, y: Math.max(0.08, y - 0.08) },
        colors: ['#22d3ee', '#ffffff', '#a855f7', '#d946ef'],
        startVelocity: 28,
        shapes: ['star']
      });
    }, 280);
  };

  // Typewriter effect
  useEffect(() => {
    const currentWord = personalData.typewriterWords[currentWordIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % personalData.typewriterWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  // Subtle 3D tilt tracking for hero container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-32 flex flex-col justify-center items-center overflow-hidden planet-horizon"
    >
      {/* Soft Nebula Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-magenta-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-purple-600/10 blur-[110px] pointer-events-none -z-10" />

      {/* Cyber HUD Grid Background Lines */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Mini HUD Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-900/80 border border-neon-cyan/30 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
              {personalData.role}
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-[11px] text-neon-cyan hidden sm:inline">
              {personalData.college.split(',')[0]}
            </span>
          </div>
        </motion.div>

        {/* Hero Headline & Typing Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-orbitron font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-3"
          >
            <span className="block text-xs sm:text-sm font-mono tracking-[0.35em] text-neon-cyan mb-2 uppercase">
              System Interface // Portfolio
            </span>
            <span
              onClick={triggerFireworks}
              onKeyDown={(e) => e.key === 'Enter' && triggerFireworks(e)}
              role="button"
              tabIndex={0}
              title="Click for cyber fireworks! ✨"
              className="bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.45)] cursor-pointer select-none inline-block hover:scale-[1.03] active:scale-95 transition-all duration-300 relative group"
            >
              {personalData.name.toUpperCase()}
              {/* Subtle spark indicators on hover */}
              <span className="absolute -top-3 -right-6 text-sm text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity animate-bounce pointer-events-none">
                ✨
              </span>
            </span>
          </motion.h1>

          {/* Cycling Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="h-10 sm:h-12 flex items-center justify-center font-mono text-lg sm:text-2xl text-slate-300"
          >
            <span className="text-neon-cyan mr-2 font-bold">&gt;</span>
            <span className="text-white font-semibold">{displayText}</span>
            <span className="inline-block w-2.5 h-6 ml-1 bg-neon-cyan animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {personalData.tagline} • Specially calibrated for deep learning, modern web experiences, and scalable system engineering.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-space-950 bg-neon-cyan hover:bg-cyan-300 shadow-neon-cyan-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-space-900/80 border border-neon-cyan/40 hover:border-neon-cyan hover:bg-space-850 hover:shadow-neon-cyan transition-all"
            >
              <Download className="w-4 h-4 text-neon-cyan" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 bg-space-900/50 border border-white/10 hover:border-neon-purple hover:text-white hover:shadow-neon-purple transition-all"
            >
              <Terminal className="w-4 h-4 text-neon-purple" />
              <span>Initiate Contact</span>
            </a>
          </motion.div>
        </div>

        {/* 3D TILTED CYBER INTERFACE (Directly matching uploaded reference visual) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            transform: `perspective(1200px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 6}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
          className="relative mt-8 rounded-3xl border border-neon-cyan/30 bg-space-900/60 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Glowing HUD frame accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan" />

          {/* Top Bar inside HUD */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-slate-400">AGAJA_WORKSPACE // KERNEL v2.4</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="flex items-center gap-1.5 text-neon-cyan">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ONLINE</span>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline">THEJUS ENGG COLLEGE</span>
            </div>
          </div>

          {/* Grid Layout: Left VS Code IDE + Right Project Showcase Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Mock VS Code Editor */}
            <div className="lg:col-span-5 rounded-2xl bg-space-950/80 border border-white/10 overflow-hidden shadow-inner flex flex-col">
              {/* Tab Bar */}
              <div className="flex items-center bg-space-900/90 border-b border-white/10 px-3 py-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('js')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-t transition-colors ${
                    activeTab === 'js'
                      ? 'bg-space-950 border-t-2 border-neon-cyan text-neon-cyan'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>CODE_GENESIS.JS</span>
                </button>
                <button
                  onClick={() => setActiveTab('py')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-t transition-colors ${
                    activeTab === 'py'
                      ? 'bg-space-950 border-t-2 border-neon-purple text-neon-purple'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>neural_core.py</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto selection:bg-neon-cyan/20 min-h-[220px]">
                {activeTab === 'js' ? (
                  <pre className="text-[11px] sm:text-xs">
                    <code>
                      <span className="text-slate-600">// Agaja - AI Engineer & Full Stack Dev</span>{'\n'}
                      <span className="text-neon-magenta">import</span> &#123; <span className="text-neon-cyan">NeuralEngine</span> &#125; <span className="text-neon-magenta">from</span> <span className="text-emerald-400">'@thejus/ai-core'</span>;{'\n\n'}
                      <span className="text-neon-purple">class</span> <span className="text-amber-300">FutureDeveloper</span> &#123;{'\n'}
                      {'  '}<span className="text-blue-400">constructor</span>() &#123;{'\n'}
                      {'    '}<span className="text-neon-magenta">this</span>.<span className="text-cyan-300">name</span> = <span className="text-emerald-400">"Agaja"</span>;{'\n'}
                      {'    '}<span className="text-neon-magenta">this</span>.<span className="text-cyan-300">college</span> = <span className="text-emerald-400">"Thejus Engg College"</span>;{'\n'}
                      {'    '}<span className="text-neon-magenta">this</span>.<span className="text-cyan-300">major</span> = <span className="text-emerald-400">"CSE (AI)"</span>;{'\n'}
                      {'    '}<span className="text-neon-magenta">this</span>.<span className="text-cyan-300">skills</span> = [<span className="text-emerald-400">"AI/ML"</span>, <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Python"</span>];{'\n'}
                      {'  '}&#125;{'\n\n'}
                      {'  '}<span className="text-neon-purple">async</span> <span className="text-amber-300">buildSolutions</span>() &#123;{'\n'}
                      {'    '}<span className="text-neon-magenta">const</span> passion = <span className="text-amber-400">Infinity</span>;{'\n'}
                      {'    '}<span className="text-neon-magenta">return</span> <span className="text-neon-magenta">await</span> NeuralEngine.<span className="text-cyan-300">train</span>(&#123; passion &#125;);{'\n'}
                      {'  '}&#125;{'\n'}
                      &#125;
                    </code>
                  </pre>
                ) : (
                  <pre className="text-[11px] sm:text-xs">
                    <code>
                      <span className="text-slate-600"># neural_core.py - PyTorch Vision Architecture</span>{'\n'}
                      <span className="text-neon-magenta">import</span> <span className="text-cyan-300">torch</span>{'\n'}
                      <span className="text-neon-magenta">import</span> <span className="text-cyan-300">torch.nn</span> <span className="text-neon-magenta">as</span> <span className="text-cyan-300">nn</span>{'\n\n'}
                      <span className="text-neon-purple">class</span> <span className="text-amber-300">NeuraVision</span>(nn.Module):{'\n'}
                      {'    '}<span className="text-neon-purple">def</span> <span className="text-blue-400">__init__</span>(self, num_classes=<span className="text-amber-400">10</span>):{'\n'}
                      {'        '}<span className="text-cyan-300">super</span>().__init__(){'\n'}
                      {'        '}self.conv = nn.Conv2d(<span className="text-amber-400">3</span>, <span className="text-amber-400">64</span>, kernel_size=<span className="text-amber-400">3</span>){'\n'}
                      {'        '}self.act = nn.SiLU(){'\n'}
                      {'        '}self.fc = nn.Linear(<span className="text-amber-400">64</span> * <span className="text-amber-400">14</span> * <span className="text-amber-400">14</span>, num_classes){'\n\n'}
                      {'    '}<span className="text-neon-purple">def</span> <span className="text-blue-400">forward</span>(self, x):{'\n'}
                      {'        '}return self.fc(torch.flatten(self.act(self.conv(x)), <span className="text-amber-400">1</span>)){'\n\n'}
                      model = NeuraVision().to(<span className="text-emerald-400">'cuda'</span>)
                    </code>
                  </pre>
                )}
              </div>

              {/* Status bar */}
              <div className="mt-auto bg-space-900 border-t border-white/5 px-4 py-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-neon-cyan">UTF-8</span>
                  <span className={activeTab === 'js' ? 'text-neon-cyan' : 'text-neon-purple'}>
                    {activeTab === 'js' ? 'JavaScript' : 'Python (PyTorch)'}
                  </span>
                  <span className="text-emerald-400">
                    {activeTab === 'js' ? 'Ln 22, Col 1' : 'Ln 18, Col 1'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Compiled Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating 3D Showcase Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.slice(0, 2).map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl bg-space-950/80 border border-white/10 hover:border-neon-cyan/50 p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] flex flex-col justify-between"
                >
                  <div>
                    {/* Card Thumbnail / Hologram Header */}
                    <div className="relative h-28 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-space-800 to-space-900 border border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent" />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-space-950/80 border border-white/10 text-[10px] font-mono text-neon-cyan">
                        {project.category}
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                        {project.status}
                      </div>
                    </div>

                    <h3 className="font-orbitron font-bold text-base text-white group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech chips & links */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan text-slate-300 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan text-slate-300 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom Cyber Status Ribbon */}
              <div className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-space-900/90 via-space-850/90 to-space-900/90 border border-neon-purple/30 p-3.5 flex items-center justify-between shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
                    <Sparkles className="w-4 h-4 text-neon-purple" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-white">
                      Responsive Multi-Layered Architecture
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Tailored for high performance, smooth 60fps animations, and cyber aesthetic
                    </div>
                  </div>
                </div>
                <a
                  href="#about"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-neon-purple hover:text-white transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

