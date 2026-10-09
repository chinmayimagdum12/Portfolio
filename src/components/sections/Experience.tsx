import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const responsibilities = [
  'Studied core cybersecurity concepts including network security, access control, and data protection practices through hands-on R&D tasks.',
  'Analyzed common security threats and vulnerabilities, and learned how they are identified, assessed, and mitigated.',
  'Applied security best practices to understand secure system design, threat awareness, and risk reduction.',
];

const tags = [
  'Network Security',
  'Access Control',
  'Threat Analysis',
  'Vulnerability Assessment',
  'Risk Mitigation',
  'Data Protection',
];

const Experience = () => (
  <section id="experience" className="py-24 px-4 relative">
    <div className="max-w-4xl mx-auto">
      <SectionHeader number="04" title="Experience" subtitle="// access.log" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent" />

        {/* Card */}
        <div className="relative pl-12 md:pl-20">
          {/* Dot */}
          <div className="absolute left-[11px] md:left-[27px] top-7 w-3 h-3 rounded-full bg-cyber-cyan shadow-[0_0_12px_rgba(0,255,213,0.6)]" />

          <div className="cyber-card rounded-xl p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl font-bold font-mono text-white">
                  Cybersecurity Intern
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <Building2 className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-sm font-mono text-cyber-cyan">
                    Cybersena (R&amp;D) India Pvt. Ltd.
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
                  <Calendar className="w-3 h-3" />
                  <span>Jan 2024 – May 2024</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-muted">
                  <MapPin className="w-3 h-3" />
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-cyber-border mb-5" />

            {/* Responsibilities */}
            <div className="space-y-3">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-cyber-muted leading-relaxed">{r}</p>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded-full bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
