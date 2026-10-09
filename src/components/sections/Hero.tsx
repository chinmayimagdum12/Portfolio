import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Shield, FileText, Lock, Activity, Eye, Cpu, Terminal } from 'lucide-react';
import TypeWriter from '../ui/TypeWriter';
import DecryptedText from '../ui/DecryptedText';
import { sounds } from '../../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 z-10"
    >
      {/* Background Radial Light Flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,213,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(181,55,242,0.08),transparent_70%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Top Security Status Pill */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyber-cyan/40 bg-cyber-dark/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,213,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
            <span className="text-[11px] font-mono text-cyber-cyan font-bold tracking-widest uppercase">
              SECURITY CLEARANCE: ACTIVE // ZERO-TRUST SHIELD
            </span>
          </motion.div>

          {/* Glitch Animated Name with Decrypt Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="text-xs font-mono text-cyber-muted tracking-widest mb-1">
              // CANDIDATE_PROFILE:
            </div>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-mono glitch leading-tight tracking-tight text-white cursor-pointer select-none"
              data-text="CHINMAYI MAGDUM"
              onMouseEnter={() => sounds.playHover()}
            >
              <DecryptedText text="CHINMAYI MAGDUM" speed={25} />
            </h1>
          </motion.div>

          {/* TypeWriter Security Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-lg sm:text-2xl font-mono"
          >
            <span className="text-cyber-green">&gt;</span>
            <TypeWriter
              words={[
                'Cybersecurity Analyst',
                'AI Security Engineer',
                'Zero-Trust RAG Architect',
                'Paillier Cryptography Specialist',
                'Application Defense Engineer',
              ]}
              typingSpeed={70}
              pauseTime={1800}
            />
          </motion.div>

          {/* Mission Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cyber-muted text-sm sm:text-base max-w-xl leading-relaxed font-sans"
          >
            Specialized in engineering defensive architectures at the intersection of{' '}
            <span className="text-cyber-cyan font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-cyber-purple font-semibold">Homomorphic Encryption</span>, and{' '}
            <span className="text-cyber-green font-semibold">Zero-Trust Pipeline Defense</span>.
            Defending large language model workflows from indirect prompt injection and safeguarding cryptographic election systems.
          </motion.p>

          {/* Live Security Telemetry Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 font-mono text-xs"
          >
            <div className="p-2.5 rounded-xl bg-cyber-dark/80 border border-cyber-border flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
              <div>
                <p className="text-[10px] text-cyber-muted">Cryptography</p>
                <p className="text-white font-bold text-[11px]">Paillier 3072b</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-cyber-dark/80 border border-cyber-border flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-green flex-shrink-0" />
              <div>
                <p className="text-[10px] text-cyber-muted">VectorShield</p>
                <p className="text-white font-bold text-[11px]">L0–L5 Guard</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-cyber-dark/80 border border-cyber-border flex items-center gap-2 col-span-2 sm:col-span-1">
              <Activity className="w-4 h-4 text-cyber-purple flex-shrink-0" />
              <div>
                <p className="text-[10px] text-cyber-muted">Defense SLA</p>
                <p className="text-white font-bold text-[11px]">42ms Latency</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons with High-Impact Cyber Shimmer Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <a
              href="#projects"
              onClick={() => sounds.playClick()}
              className="btn-cyber-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold shadow-[0_0_25px_rgba(0,255,213,0.3)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Holographic Cyber Core (HoloShield) with Rotating Orbital Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center items-center relative py-6"
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Outer Hex Ring with Dash Rotation */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyber-cyan/30 animate-orbit-cw" />

            {/* Counter-rotating Orbital Ring with Sensor Markers */}
            <div className="absolute inset-4 rounded-full border border-cyber-purple/40 animate-orbit-ccw" />

            {/* Radar Sweep Line */}
            <div className="absolute inset-6 rounded-full overflow-hidden pointer-events-none">
              <div
                className="w-full h-full animate-radar-sweep origin-center"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 255, 213, 0.25) 360deg)',
                }}
              />
            </div>

            {/* Inner Concentric Circuit Circle */}
            <div className="absolute inset-10 rounded-full border border-cyber-cyan/40 bg-cyber-card/60 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,213,0.15)] flex items-center justify-center" />

            {/* Central Holographic Shield Emblem */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotateZ: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 flex flex-col items-center justify-center text-center p-6"
            >
              <div className="relative mb-3">
                <Shield className="w-20 h-20 text-cyber-cyan drop-shadow-[0_0_25px_rgba(0,255,213,0.8)]" />
                <Lock className="w-8 h-8 text-cyber-purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_15px_rgba(181,55,242,0.9)]" />
              </div>

              <div className="font-mono text-xs font-extrabold text-white tracking-widest uppercase">
                VECTOR<span className="text-cyber-cyan">SHIELD</span>
              </div>
              <div className="font-mono text-[10px] text-cyber-green mt-0.5 tracking-wider">
                CRYPTOGRAPHIC DEFENSE CORE
              </div>
            </motion.div>

            {/* Satellite Telemetry Floating Nodes */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyber-dark/95 border border-cyber-cyan/50 text-[10px] font-mono text-cyber-cyan shadow-[0_0_15px_rgba(0,255,213,0.25)] flex items-center gap-1.5 whitespace-nowrap">
              <Cpu className="w-3 h-3 text-cyber-green" />
              <span>NEURAL DEFENSE: 13/13 TAXONOMY</span>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyber-dark/95 border border-cyber-purple/50 text-[10px] font-mono text-cyber-purple shadow-[0_0_15px_rgba(181,55,242,0.25)] flex items-center gap-1.5 whitespace-nowrap">
              <Terminal className="w-3 h-3 text-cyber-cyan" />
              <span>FASTAPI // CHROMADB // FAST-MCP</span>
            </div>

            <div className="absolute top-1/2 -left-6 -translate-y-1/2 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyber-dark/90 border border-cyber-border text-[9px] font-mono text-cyber-muted">
              <Eye className="w-3 h-3 text-cyber-green" />
              <span>AUDIT ACTIVE</span>
            </div>

            <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyber-dark/90 border border-cyber-border text-[9px] font-mono text-cyber-muted">
              <Lock className="w-3 h-3 text-cyber-cyan" />
              <span>PAILLIER ENCRYPTED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="text-cyber-muted hover:text-cyber-cyan transition-colors"
          aria-label="Scroll down"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-cyber-cyan/50" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
