import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight, ShieldCheck, Cpu } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';

const deliverables = [
  'Engineered hands-on security protocols analyzing core network perimeter defense, role-based access control (RBAC), and encryption standards during enterprise R&D cycles.',
  'Investigated emerging threat vectors, assessing vulnerabilities across application boundaries and modeling threat mitigation countermeasures.',
  'Formulated risk-reduction strategies and secure architecture principles aligned with CIA triad best practices.',
];

const securityTools = [
  'Network Security',
  'Access Control (RBAC)',
  'Vulnerability Auditing',
  'Threat Intelligence',
  'Risk Mitigation',
  'Data Protection',
  'Wireshark / Nmap',
  'OWASP Guidelines',
];

export const Experience = () => (
  <section id="experience" className="py-24 px-4 relative z-10">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        number="04"
        title="Professional Experience"
        subtitle="Cybersecurity Research, Threat Assessment & Perimeter Engineering"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Glowing Circuit Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent shadow-[0_0_10px_rgba(0,255,213,0.4)]" />

        <div className="relative pl-12 md:pl-20">
          {/* Animated Neon Node Anchor */}
          <div className="absolute left-[9px] md:left-[25px] top-8 w-4 h-4 rounded-full bg-cyber-cyan shadow-[0_0_16px_rgba(0,255,213,0.9)] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-bg animate-ping" />
          </div>

          <TiltCard className="cyber-card rounded-2xl p-7 sm:p-9 border border-cyber-border hover:border-cyber-cyan/50 shadow-[0_0_40px_rgba(0,255,213,0.08)]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-cyber-border">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[11px] font-mono font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyber-green" />
                  <span>Verified R&amp;D Internship</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                  Cybersecurity Intern
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm font-mono text-cyber-cyan">
                  <Building2 className="w-4 h-4 text-cyber-cyan" />
                  <span>Cybersena (R&amp;D) India Pvt. Ltd.</span>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1.5 font-mono text-xs text-cyber-muted">
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-cyber-dark/80 border border-cyber-border">
                  <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>Jan 2024 – May 2024</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-cyber-purple" />
                  <span>Belagavi, India</span>
                </div>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-3.5 mb-6">
              <h4 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-wider">
                Core Deliverables &amp; Research Focus:
              </h4>
              {deliverables.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-cyber-text font-sans leading-relaxed">
                    {r}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Security Tooling Badges */}
            <div className="pt-4 border-t border-cyber-border">
              <span className="text-[11px] font-mono text-cyber-muted block mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-purple" />
                Deployed Technologies &amp; Protocols:
              </span>
              <div className="flex flex-wrap gap-2 font-mono">
                {securityTools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-xl bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/30 hover:border-cyber-purple hover:bg-cyber-purple/20 transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
