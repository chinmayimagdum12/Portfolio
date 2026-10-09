import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';

const stats = [
  { Icon: Code, label: 'Security Projects', value: '4' },
  { Icon: Award, label: 'Verified Certs', value: '4' },
  { Icon: Briefcase, label: 'R&D Internship', value: '1' },
  { Icon: GraduationCap, label: 'B.E. CGPA', value: '8.70' },
];

const pillars = [
  'Zero-Trust RAG Defense (L0–L5 Pipeline Architecture)',
  'Homomorphic Paillier Encryption & Privacy-Preserving Voting',
  'SQL AST Syntax Parsers & Strict Least-Privilege MCP Servers',
  'Deep Learning Computer Vision Diagnostic Engines (96% Accuracy)',
];

export const About = () => (
  <section id="about" className="py-24 px-4 relative z-10">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        number="01"
        title="Professional Profile"
        subtitle="Cybersecurity Analyst &amp; AI Security Engineer Background"
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* ─── Executive Security Dossier Card ─── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 cyber-card rounded-2xl p-7 sm:p-9 border border-cyber-cyan/30 shadow-[0_0_40px_rgba(0,255,213,0.08)] space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-cyber-border">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyber-green" />
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                Executive Profile Summary
              </h3>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
              Belagavi, Karnataka
            </span>
          </div>

          {/* Professional Narrative */}
          <div className="space-y-3.5 text-xs sm:text-sm text-cyber-text leading-relaxed font-sans">
            <p>
              I am an AI/ML engineering student with a dedicated focus on <strong className="text-white">Cybersecurity, Cryptography, and Zero-Trust Architectures</strong>. My technical work spans building multi-layer security defenses against indirect prompt injection in Retrieval-Augmented Generation (RAG) systems and architecting privacy-preserving voting protocols using additive homomorphic cryptosystems.
            </p>
            <p className="text-cyber-muted">
              Through hands-on research and practical enterprise simulations, I specialize in analyzing threat vectors, applying strict input normalization, and constructing resilient, least-privilege computational pipelines.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="pt-2 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-cyber-cyan uppercase tracking-wider">
              Academic Credentials:
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-cyber-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-white">
                    Jain College of Engineering
                  </p>
                  <p className="text-[11px] text-cyber-muted mt-0.5">
                    B.E. in CSE (Artificial Intelligence and Machine Learning)
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-cyber-green">CGPA: 8.70 / 10</span>
                  <p className="text-[10px] text-cyber-muted">2024 – 2027</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyber-dark/80 border border-cyber-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-white">
                    KLS Shri Vasantrao Potdar Polytechnic
                  </p>
                  <p className="text-[11px] text-cyber-muted mt-0.5">
                    Diploma in Computer Science
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-cyber-cyan">CGPA: 8.03 / 10</span>
                  <p className="text-[10px] text-cyber-muted">2021 – 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Engineering Pillars */}
          <div className="pt-2">
            <h4 className="text-xs font-mono font-bold text-cyber-purple uppercase tracking-wider mb-2.5">
              Core Technical Focus Areas:
            </h4>
            <div className="space-y-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-2.5 text-xs text-cyber-text/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green mt-0.5 flex-shrink-0" />
                  <span className="font-mono">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Right Stats + Key Highlights ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Stat Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <TiltCard
                key={s.label}
                className="cyber-card rounded-2xl p-6 text-center border border-cyber-border hover:border-cyber-cyan/40"
              >
                <s.Icon className="w-7 h-7 text-cyber-cyan mx-auto mb-3" />
                <div className="text-3xl font-extrabold font-mono text-white mb-1">
                  {s.value}
                </div>
                <div className="text-[11px] font-mono text-cyber-muted uppercase tracking-wider">
                  {s.label}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Specialization Badge Card */}
          <div className="cyber-card rounded-2xl p-6 border border-cyber-border space-y-4 font-mono">
            <div className="flex items-center gap-2 text-cyber-green font-bold text-xs uppercase">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
              <span>Target Career Objective</span>
            </div>
            <p className="text-xs text-cyber-text font-sans leading-relaxed">
              Seeking cybersecurity engineering roles focusing on secure system architecture, vulnerability assessments, prompt injection mitigation, and zero-trust protocol enforcement.
            </p>
            <div className="pt-2 border-t border-cyber-border flex items-center justify-between text-[11px] text-cyber-muted">
              <span>Security Clearance</span>
              <span className="text-cyber-cyan font-bold">READY FOR ENGAGEMENT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
