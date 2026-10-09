import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, MessageCircle, Shield, FileText } from 'lucide-react';
import ParticleNetwork from '../ui/ParticleNetwork';
import TypeWriter from '../ui/TypeWriter';
import { sounds } from '../../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12"
  >
    {/* Particle Network Background */}
    <ParticleNetwork />

    {/* Radial gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/60 via-transparent to-cyber-bg z-[1]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,213,0.06),transparent_70%)] z-[1]" />

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
        <span className="text-xs font-mono text-cyber-cyan tracking-widest uppercase">
          SECURITY PROTOCOL: ZERO-TRUST DEFENSE READY
        </span>
      </motion.div>

      {/* Name – glitch effect */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono mb-4 glitch leading-tight"
        data-text="CHINMAYI MAGDUM"
      >
        CHINMAYI MAGDUM
      </motion.h1>

      {/* TypeWriter subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg md:text-2xl mb-6 h-9"
      >
        <TypeWriter
          words={[
            'Cybersecurity Analyst',
            'AI Security Engineer',
            'Zero-Trust RAG Architect',
            'Paillier Cryptography Researcher',
          ]}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-cyber-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans"
      >
        Engineering next-generation security architectures at the nexus of{' '}
        <span className="text-cyber-cyan font-semibold">Artificial Intelligence</span>,{' '}
        <span className="text-cyber-purple font-semibold">Homomorphic Encryption</span>, and{' '}
        <span className="text-cyber-green font-semibold">Zero-Trust Systems</span>.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-3.5"
      >
        <a
          href="#projects"
          onClick={() => sounds.playClick()}
          className="group flex items-center gap-2 px-6 py-3 bg-cyber-cyan/15 border border-cyber-cyan text-cyber-cyan rounded-lg font-mono text-xs sm:text-sm hover:bg-cyber-cyan/25 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,213,0.2)]"
        >
          <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span>Explore 4 Projects</span>
        </a>

        <a
          href="#simulator"
          onClick={() => sounds.playClick()}
          className="group flex items-center gap-2 px-6 py-3 bg-cyber-purple/15 border border-cyber-purple/50 text-cyber-purple rounded-lg font-mono text-xs sm:text-sm hover:bg-cyber-purple/25 transition-all duration-300 shadow-[0_0_20px_rgba(181,55,242,0.2)]"
        >
          <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Live L0-L5 Simulator</span>
        </a>

        <button
          onClick={() => {
            sounds.playClick();
            onOpenResume();
          }}
          className="flex items-center gap-2 px-6 py-3 bg-cyber-card border border-cyber-border hover:border-cyber-cyan/40 text-cyber-muted hover:text-white rounded-lg font-mono text-xs sm:text-sm transition-all"
        >
          <FileText className="w-4 h-4 text-cyber-cyan" />
          <span>View Resume</span>
        </button>

        <a
          href="#contact"
          onClick={() => sounds.playClick()}
          className="flex items-center gap-2 px-6 py-3 bg-cyber-dark border border-cyber-border hover:border-cyber-cyan text-cyber-text rounded-lg font-mono text-xs sm:text-sm transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect</span>
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="w-6 h-6 text-cyber-cyan/40" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
