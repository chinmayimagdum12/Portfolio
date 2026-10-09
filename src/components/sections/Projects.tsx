import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronRight,
  Shield,
  Database,
  Lock,
  Leaf,
  Maximize2,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import ProjectModal, { ProjectData } from '../ui/ProjectModal';
import { sounds } from '../../utils/sound';

const projectsData: ProjectData[] = [
  {
    title: 'VectorShield',
    subtitle: 'Zero-Trust RAG Security Platform',
    description:
      'Designed a six-layer (L0–L5) defense pipeline for RAG systems, targeting indirect prompt injection and obfuscated instructions across 13 attack categories. Implemented Unicode normalization, zero-width character filtering, homoglyph checks, Base64/ROT13 decoding, retrieval anomaly filtering, and security-event auditing.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'ChromaDB', 'Docker'],
    github: 'https://github.com/chinmayimagdum12',
    demo: 'https://vector-shield-cbwp-six.vercel.app',
    Icon: Shield,
    highlights: [
      '6-layer defense pipeline (L0–L5)',
      '13 attack category taxonomy coverage',
      'Zero-width & homoglyph normalization',
      'ChromaDB cosine anomaly outlier filter',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    ring: 'hover:ring-cyan-500/40',
    architectureDetails: [
      'Layer 0 (Input Normalization): NFKC canonical normalization, non-printable codepoint elimination',
      'Layer 1 (De-obfuscation): Multi-pass Base64, ROT13, hex decoding with Shannon entropy profiling',
      'Layer 2 (Prompt Guard): Token-level semantic classification against role-takeover & delimiter tampering',
      'Layer 3 (Retrieval Anomaly): Cosine distance variance analysis inside ChromaDB vector space',
      'Layer 4 (Integrity Engine): Output canary verification to thwart system prompt exfiltration',
      'Layer 5 (Audit & Telemetry): Immutable JSONL security logging with alert payload emission',
    ],
    securityControls: [
      'OWASP Top 10 for LLMs compliance (LLM01 Prompt Injection, LLM06 Sensitive Information Disclosure)',
      'Zero-trust verification on all untrusted user prompts prior to embedding generation',
      'Sub-50ms inference latency constraint maintained across all six screening stages',
    ],
  },
  {
    title: 'QueryPilot MCP',
    subtitle: 'PostgreSQL Read-Only Analyst Server',
    description:
      'Designed an MCP server with five planned tools for database discovery, schema inspection, read-only queries, query explanation, and table statistics. Specified SQL AST validation, a 5-second statement timeout, a 100-row default limit, a 1,000-row hard cap, and JSONL audit logging.',
    tech: ['Python', 'FastMCP', 'PostgreSQL', 'SQLGlot', 'Docker'],
    github: 'https://github.com/chinmayimagdum12',
    Icon: Database,
    highlights: [
      'SQL AST syntactic validation with SQLGlot',
      '5-second hard statement timeout guard',
      'Enforced 1,000-row maximum query cap',
      'Complete JSONL forensic audit logging',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    ring: 'hover:ring-purple-500/40',
    architectureDetails: [
      'SQLGlot Abstract Syntax Tree (AST) parser to strictly verify SELECT-only statements',
      'Blocklist engine rejecting all DDL/DML tokens (DROP, ALTER, INSERT, UPDATE, DELETE, GRANT, TRUNCATE)',
      'PostgreSQL read-only transaction parameters (SET TRANSACTION READ ONLY) at session initialization',
      'FastMCP transport protocol enabling secure tool calling from Anthropic and local LLM clients',
    ],
    securityControls: [
      'Least Privilege database roles with REVOKE ALL permissions on critical system tables',
      'Protection against SQL injection and stacked queries via AST leaf token verification',
      'JSONL transaction audit trail for every query execution timestamp, duration, and rowcount',
    ],
  },
  {
    title: 'Homomorphic Voting',
    subtitle: 'Encryption-Based Online Voting System',
    description:
      'Developed a voting application supporting Voter and Admin roles, login sessions, candidate management, and SQLite storage. Integrated Paillier homomorphic encryption for secure vote storage and privacy-preserving vote tallying directly over ciphertexts.',
    tech: ['Python', 'Flask', 'Paillier', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/chinmayimagdum12',
    Icon: Lock,
    highlights: [
      'Paillier additive homomorphic encryption',
      'Direct mathematical tallying over ciphertexts',
      'Zero-knowledge voter confidentiality',
      'Spreadsheet-based bulk voter registration',
    ],
    gradient: 'from-green-500/20 to-emerald-500/20',
    ring: 'hover:ring-green-500/40',
    architectureDetails: [
      'Paillier Cryptosystem enabling E(m1) * E(m2) = E(m1 + m2) without private key decryption',
      'Central Election Server stores only encrypted votes; deciphers only final consolidated aggregate sum',
      'Role-based access control (RBAC) separating administrative actions from ballot casting',
      'Cryptographic hash verification of voter authentication tokens to prevent ballot duplication',
    ],
    securityControls: [
      'End-to-end voter anonymity: zero correlation between voter identity and candidate selection',
      'Tamper-evident SQLite storage audited against voter registry signatures',
      'Paillier 2048-bit key modulus generation for high cryptographic resilience',
    ],
  },
  {
    title: 'Paddy Leaf Disease Detection',
    subtitle: 'AI-Powered Diagnostic Computer Vision Engine',
    description:
      'Developed a CNN-based image classifier for three paddy leaf disease classes using image preprocessing and data augmentation. Reported 96% validation accuracy in project documentation with early stopping, dropout, and classification metrics.',
    tech: ['Python', 'CNN', 'TensorFlow', 'Keras', 'Streamlit'],
    github: 'https://github.com/chinmayimagdum12',
    Icon: Leaf,
    highlights: [
      '96% validation accuracy achieved',
      'Custom convolutional neural network pipeline',
      'Robust data augmentation & regularization',
      'Real-time image classification interface',
    ],
    gradient: 'from-orange-500/20 to-yellow-500/20',
    ring: 'hover:ring-orange-500/40',
    architectureDetails: [
      'Convolutional neural network featuring multiple Conv2D, MaxPooling2D, and BatchNormalization blocks',
      'Image augmentation pipeline (rotations, flips, zooming, shears) to counteract agricultural field noise',
      'Early stopping with patience callbacks and Dropout (0.35) layers to eliminate overfitting',
      'Confusion matrix evaluation with precision, recall, and F1-score across all 3 leaf disease categories',
    ],
    securityControls: [
      'Input image validation & dimension verification to mitigate adversarial image buffer overflow',
      'Secure web frontend built with Streamlit for low-latency field edge inference',
    ],
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 px-4 relative cyber-grid">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          title="Security Projects"
          subtitle="// threat.defense.showcase"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <TiltCard className="cyber-card rounded-xl overflow-hidden h-full flex flex-col">
                {/* Header gradient */}
                <div className={`p-6 bg-gradient-to-r ${p.gradient}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-cyber-bg/70 border border-cyber-border">
                      <p.Icon className="w-6 h-6 text-cyber-cyan" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playClick()}
                        className="p-2 rounded-lg bg-cyber-bg/70 border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all"
                        aria-label="GitHub"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sounds.playClick()}
                          className="p-2 rounded-lg bg-cyber-bg/70 border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all shadow-[0_0_10px_rgba(0,255,213,0.15)]"
                          aria-label="Live demo"
                          title="Launch Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm font-mono text-cyber-cyan mt-1">
                    {p.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-cyber-muted leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-5">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs">
                          <ChevronRight className="w-3 h-3 text-cyber-green flex-shrink-0" />
                          <span className="text-cyber-text">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Inspect Architecture Button */}
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setActiveProject(p);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 text-xs font-mono text-cyber-text hover:text-cyber-cyan transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Security Architecture</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

export default Projects;
