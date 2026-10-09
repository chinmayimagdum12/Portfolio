import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronRight,
  Shield,
  Database,
  Lock,
  Leaf,
  Maximize2,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import ProjectModal, { ProjectData } from '../ui/ProjectModal';
import { sounds } from '../../utils/sound';

interface ExtendedProjectData extends ProjectData {
  category: 'security' | 'mcp' | 'crypto' | 'ai';
  categoryLabel: string;
  metricBadge: string;
}

const projectsData: ExtendedProjectData[] = [
  {
    category: 'security',
    categoryLabel: 'Zero-Trust RAG Security',
    metricBadge: '6-Layer Pipeline (L0–L5)',
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
    category: 'mcp',
    categoryLabel: 'Database Security & MCP',
    metricBadge: 'AST Read-Only Enforced',
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
    category: 'crypto',
    categoryLabel: 'Homomorphic Cryptography',
    metricBadge: 'Paillier 2048-bit Modulus',
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
    category: 'ai',
    categoryLabel: 'Computer Vision AI',
    metricBadge: '96% Validation Accuracy',
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
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          title="Engineered Security Projects"
          subtitle="Zero-Trust Architecture, Cryptographic Privacy & Resilient AI Systems"
        />

        {/* ─── Category Filter Tabs ─── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          {[
            { id: 'all', label: 'All Projects (4)' },
            { id: 'security', label: 'Zero-Trust & RAG' },
            { id: 'mcp', label: 'Database & MCP' },
            { id: 'crypto', label: 'Homomorphic Paillier' },
            { id: 'ai', label: 'Computer Vision AI' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sounds.playClick();
                setActiveFilter(tab.id);
              }}
              className={`px-4 py-2 rounded-xl border transition-all ${
                activeFilter === tab.id
                  ? 'btn-cyber-primary shadow-[0_0_15px_rgba(0,255,213,0.3)]'
                  : 'bg-cyber-dark/80 border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Projects Grid ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-7"
          >
            {filtered.map((p) => (
              <TiltCard
                key={p.title}
                className="cyber-card rounded-2xl overflow-hidden h-full flex flex-col border border-cyber-border hover:border-cyber-cyan/50 shadow-[0_0_30px_rgba(0,255,213,0.06)]"
              >
                {/* Header Gradient Strip with Architectural Metric Tag */}
                <div className={`p-6 sm:p-7 bg-gradient-to-r ${p.gradient} border-b border-cyber-border/70`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-xl bg-cyber-bg/80 border border-cyber-border">
                      <p.Icon className="w-6 h-6 text-cyber-cyan" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cyber-dark/90 border border-cyber-cyan/40 text-[11px] font-mono text-cyber-cyan font-bold shadow-md">
                        {p.metricBadge}
                      </span>

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playClick()}
                        className="p-2.5 rounded-xl bg-cyber-bg/80 border border-cyber-border text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan transition-all"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sounds.playClick()}
                          className="btn-cyber-primary p-2.5 rounded-xl flex items-center justify-center text-cyber-cyan shadow-[0_0_12px_rgba(0,255,213,0.3)]"
                          aria-label="Launch Live Demo"
                          title="Launch Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyber-cyan mt-1 font-semibold">
                    {p.subtitle}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-cyber-muted font-sans leading-relaxed mb-5">
                      {p.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono text-cyber-cyan font-bold block uppercase tracking-wider">
                        Key Defensive Mechanisms:
                      </span>
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs font-mono">
                          <ChevronRight className="w-3.5 h-3.5 text-cyber-green flex-shrink-0" />
                          <span className="text-cyber-text">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technology Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 font-mono">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/25"
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
                      className="btn-cyber-primary w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold font-mono"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Security Architecture &amp; Controls</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
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
