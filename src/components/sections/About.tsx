import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const stats = [
  { Icon: Code, label: 'Projects', value: '4' },
  { Icon: Award, label: 'Certifications', value: '4' },
  { Icon: Briefcase, label: 'Internship', value: '1' },
  { Icon: GraduationCap, label: 'CGPA', value: '8.70' },
];

const About = () => (
  <section id="about" className="py-24 px-4 relative cyber-grid">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="01" title="About Me" subtitle="// system.info()" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* ─── Terminal window ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-cyber-dark rounded-xl border border-cyber-border overflow-hidden shadow-2xl"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-cyber-card border-b border-cyber-border">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-cyber-muted">
              chinmayi@kali:~
            </span>
          </div>
          {/* Body */}
          <div className="p-5 font-mono text-sm space-y-3 leading-relaxed">
            <p>
              <span className="text-cyber-green">chinmayi@kali</span>
              <span className="text-cyber-muted">:</span>
              <span className="text-cyber-blue">~</span>
              <span className="text-cyber-muted">$ </span>
              <span className="text-cyber-cyan">cat</span> profile.txt
            </p>
            <p className="text-cyber-muted pl-1">
              AI/ML engineering student with a strong interest in cybersecurity
              and secure systems. Knowledge of Python, cryptography, and machine
              learning, with experience in developing academic projects.
            </p>
            <p className="text-cyber-muted pl-1">
              Eager to apply technical skills and problem-solving abilities to
              cybersecurity and secure application development.
            </p>

            <div className="h-3" />

            <p>
              <span className="text-cyber-green">chinmayi@kali</span>
              <span className="text-cyber-muted">:</span>
              <span className="text-cyber-blue">~</span>
              <span className="text-cyber-muted">$ </span>
              <span className="text-cyber-cyan">cat</span> education.json
            </p>
            <div className="space-y-3 pl-1 mt-1">
              <div className="border-l-2 border-cyber-cyan/40 pl-3">
                <p className="text-white text-xs font-semibold">
                  Jain College of Engineering
                </p>
                <p className="text-cyber-muted text-xs">
                  B.E. in CSE (AI &amp; ML) • 2024–2027 • GPA: 8.70
                </p>
              </div>
              <div className="border-l-2 border-cyber-purple/40 pl-3">
                <p className="text-white text-xs font-semibold">
                  KLS Shri Vasantrao Potdar Polytechnic
                </p>
                <p className="text-cyber-muted text-xs">
                  Diploma in CS • 2021–2024 • GPA: 8.03
                </p>
              </div>
            </div>

            <div className="h-2" />
            <p className="cursor-blink">
              <span className="text-cyber-green">chinmayi@kali</span>
              <span className="text-cyber-muted">:</span>
              <span className="text-cyber-blue">~</span>
              <span className="text-cyber-muted">$ </span>
            </p>
          </div>
        </motion.div>

        {/* ─── Stats + focus ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="cyber-card rounded-xl p-6 text-center"
              >
                <s.Icon className="w-7 h-7 text-cyber-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold font-mono text-white mb-1">
                  {s.value}
                </div>
                <div className="text-xs font-mono text-cyber-muted uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-6 p-5 rounded-xl border border-cyber-cyan/20 bg-cyber-cyan/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <span className="text-sm font-mono text-cyber-cyan font-semibold">
                Current Focus
              </span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Zero-Trust Security Architecture &bull; RAG System Defense &bull;
              Prompt Injection Mitigation &bull; AI-Driven Threat Analysis
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
