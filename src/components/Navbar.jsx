import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Terminal, Code2, Volume2, VolumeX } from 'lucide-react';
import { personalData } from '../data/content';
import { toggleAudio, isAudioEnabled, playCyberClick } from '../utils/cyberAudio';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const handleSoundToggle = () => {
    const newState = toggleAudio();
    setSoundOn(newState);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // ScrollSpy
      const sections = ['hero', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-space-900/90 backdrop-blur-xl border-neon-cyan/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-2.5 sm:py-3 px-3.5 sm:px-6'
            : 'bg-space-900/50 backdrop-blur-md border-white/5 py-3 sm:py-4 px-3.5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Callout */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Back to Top"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 flex items-center justify-center group-hover:border-neon-cyan transition-colors shadow-neon-cyan/20 shrink-0">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-neon-cyan rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-neon-cyan rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-bold text-sm sm:text-lg tracking-wider bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  {personalData.name.toUpperCase()}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-neon-cyan px-1.5 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/30">
                  DEV
                </span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase hidden sm:block">
                Futuristic Developer
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide uppercase font-mono transition-colors rounded-lg ${
                    isActive
                      ? 'text-neon-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 -z-10 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Cyber Sound Effects Toggle */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? 'Cyber Audio: ON' : 'Cyber Audio: OFF (Click to enable HUD sounds)'}
              aria-label="Toggle cyber audio effects"
              className={`p-2 rounded-xl border transition-all text-xs font-mono flex items-center gap-1.5 ${
                soundOn
                  ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-neon-cyan animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden lg:inline text-[10px] uppercase">{soundOn ? 'AUDIO ON' : 'AUDIO OFF'}</span>
            </button>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 hover:border-neon-cyan hover:shadow-neon-cyan hover:scale-[1.02] active:scale-95 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-neon-cyan/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-neon-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/10 mt-3 pt-3"
            >
              <div className="flex flex-col gap-1 pb-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />}
                    </a>
                  );
                })}
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-white rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40"
                >
                  <FileText className="w-4 h-4 text-neon-cyan" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

