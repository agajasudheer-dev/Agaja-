import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { personalData, socialLinks } from '../data/content';

const socialIconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Mail: Mail
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Identification required';
    if (!formData.email.trim()) {
      errs.email = 'Transmission address required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid frequency/email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Payload content required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Payload too short (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-tech network uplink
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-magenta-600/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Communications Uplink</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Initiate <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Direct Transmission</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Whether you want to discuss AI research, collaborate on a project, or offer an internship opportunity, my inbox is open.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Connect & Social Nodes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Quick Contact Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-neon-cyan/20">
            <h3 className="font-orbitron font-bold text-xl text-white mb-2">
              Uplink Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Connect through secure direct endpoints or explore my verified channels.
            </p>

            <div className="space-y-4">
              {/* Email Copier */}
              <div className="p-4 rounded-2xl bg-space-950/80 border border-white/10 flex items-center justify-between group hover:border-neon-cyan/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Inbox</div>
                    <div className="text-xs sm:text-sm font-mono text-white font-medium">{personalData.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-neon-cyan/20 text-slate-300 hover:text-neon-cyan transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Campus Location */}
              <div className="p-4 rounded-2xl bg-space-950/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neon-purple/10 border border-neon-purple/30 text-neon-purple">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location & Campus</div>
                  <div className="text-xs sm:text-sm text-white font-medium">{personalData.location}</div>
                  <div className="text-[11px] text-slate-400">Thejus Engineering College</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Matrix */}
          <div className="glass-panel-purple rounded-3xl p-6 sm:p-8 border-neon-purple/20">
            <h4 className="font-orbitron font-bold text-base text-white mb-4">
              Decentralized Nodes
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon] || Github;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-space-950/70 border border-white/5 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] flex items-center gap-3 group"
                  >
                    <div
                      className="p-2 rounded-xl group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `${social.glowColor}15`,
                        color: social.glowColor,
                        border: `1px solid ${social.glowColor}40`
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-neon-purple transition-colors">
                        {social.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* Right Column: High-Tech Glass Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border-neon-cyan/30 relative overflow-hidden"
        >
          {/* Top Decorative cyber line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta" />

          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="font-orbitron font-bold text-xl text-white">
                Transmit Packet
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                FIELDS_VERIFIED // 256-BIT ENCRYPTION
              </p>
            </div>
            <MessageSquare className="w-5 h-5 text-neon-cyan" />
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-orbitron font-bold text-2xl text-white">
                Packet Transmitted Successfully
              </h4>
              <p className="text-sm font-mono text-slate-300 max-w-md">
                Your message has been logged into the transmission buffer. Agaja will respond swiftly!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name / Identity <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-white placeholder-slate-500 font-mono text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors ${
                      errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-neon-cyan'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Frequency <span className="text-neon-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-white placeholder-slate-500 font-mono text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors ${
                      errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-neon-cyan'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Transmission Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI Project Collaboration / Internship Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 font-mono text-xs sm:text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Packet Payload / Message <span className="text-neon-cyan">*</span>
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter details of your project, proposal, or inquiry here..."
                  className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-white placeholder-slate-500 font-mono text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors resize-none ${
                    errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-neon-cyan'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-space-950 bg-gradient-to-r from-neon-cyan via-cyan-300 to-neon-purple hover:opacity-95 shadow-neon-cyan-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-space-950 border-t-transparent rounded-full animate-spin" />
                    <span>Uplinking Transmission...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Packet</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}

