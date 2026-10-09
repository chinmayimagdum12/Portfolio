import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Code, Brain, Database, Wrench, CheckCircle2, Cpu, Lock } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { sounds } from '../../utils/sound';

interface SkillItem {
  name: string;
  level: number;
  tags?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  Icon: typeof Shield;
  accent: 'cyan' | 'green' | 'purple' | 'blue';
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'security',
    title: 'Security & Cryptography',
    Icon: Shield,
    accent: 'cyan',
    description: 'Defense-in-depth, zero-trust RAG pipeline mitigation, and homomorphic cryptosystems',
    skills: [
      { name: 'Prompt Injection Defense (L0–L5)', level: 96, tags: 'RAG Security' },
      { name: 'Paillier Homomorphic Encryption', level: 92, tags: 'Cryptography' },
      { name: 'Network Security & Firewalls', level: 90, tags: 'Defense' },
      { name: 'Secure DB Access & SQL AST', level: 94, tags: 'AST Parsing' },
      { name: 'OWASP Top 10 for LLMs', level: 93, tags: 'Auditing' },
      { name: 'Application Security Fundamentals', level: 88, tags: 'Hardening' },
    ],
  },
  {
    id: 'ai',
    title: 'AI, LLMs & Machine Learning',
    Icon: Brain,
    accent: 'purple',
    description: 'Large language models, vector embeddings, semantic search, and computer vision',
    skills: [
      { name: 'RAG Architecture & Retrieval', level: 94, tags: 'Vector Search' },
      { name: 'ChromaDB & Qdrant Vector Stores', level: 91, tags: 'Embeddings' },
      { name: 'TensorFlow & Keras CNN Models', level: 92, tags: 'Deep Learning' },
      { name: 'Scikit-learn & Statistical Modeling', level: 89, tags: 'Machine Learning' },
      { name: 'Image Preprocessing & Augmentation', level: 93, tags: 'Computer Vision' },
      { name: 'Semantic Anomaly Detection', level: 90, tags: 'Zero-Trust' },
    ],
  },
  {
    id: 'programming',
    title: 'Languages & Core Systems',
    Icon: Code,
    accent: 'green',
    description: 'High-performance scripting, secure backend engineering, and frontend integration',
    skills: [
      { name: 'Python (FastAPI, Flask, AsyncIO)', level: 96, tags: 'Backend Core' },
      { name: 'SQL (PostgreSQL, SQLite, MySQL)', level: 93, tags: 'Relational DB' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 90, tags: 'Web Engineering' },
      { name: 'HTML5 & Modern CSS / Tailwind', level: 92, tags: 'UI Architecture' },
      { name: 'C Programming & Memory Models', level: 84, tags: 'Systems' },
      { name: 'Java Programming', level: 85, tags: 'Object-Oriented' },
    ],
  },
  {
    id: 'databases',
    title: 'Database Systems & Caching',
    Icon: Database,
    accent: 'blue',
    description: 'Relational schema design, memory caches, and high-dimension vector indexing',
    skills: [
      { name: 'PostgreSQL & Read-Only Transactions', level: 93, tags: 'ACID' },
      { name: 'ChromaDB & High-Dim Embeddings', level: 92, tags: 'Vector DB' },
      { name: 'Redis Cache & Session Storage', level: 88, tags: 'In-Memory' },
      { name: 'MongoDB Document Stores', level: 87, tags: 'NoSQL' },
      { name: 'SQLite Encrypted Databases', level: 91, tags: 'Local Storage' },
      { name: 'Qdrant Vector Engine', level: 86, tags: 'ANN Search' },
    ],
  },
  {
    id: 'tools',
    title: 'Frameworks, MCP & DevOps',
    Icon: Wrench,
    accent: 'cyan',
    description: 'Modern developer workflows, containerized environments, and cloud deployment',
    skills: [
      { name: 'FastMCP (Model Context Protocol)', level: 94, tags: 'Agentic Tools' },
      { name: 'Docker & Container Isolation', level: 89, tags: 'Containers' },
      { name: 'Git & GitHub Workflows', level: 95, tags: 'Version Control' },
      { name: 'FastAPI & RESTful APIs', level: 93, tags: 'Microservices' },
      { name: 'Streamlit Real-Time Dashboards', level: 92, tags: 'Data UI' },
      { name: 'Vercel & Render Cloud Platforms', level: 90, tags: 'CI/CD' },
    ],
  },
];

const palette = {
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    bar: 'from-cyan-400 to-blue-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  },
  green: {
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    bar: 'from-green-400 to-emerald-500',
    badge: 'bg-green-500/15 text-green-300 border-green-500/30',
  },
  purple: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    bar: 'from-purple-400 to-pink-500',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    bar: 'from-blue-400 to-indigo-500',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  },
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Security & Technical Matrix"
          subtitle="Comprehensive Defense Competencies, Cryptography & Computational Tooling"
        />

        {/* ─── Interactive Filter Tabs ─── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('all');
            }}
            className={`px-4 py-2 rounded-xl border transition-all ${
              activeTab === 'all'
                ? 'btn-cyber-primary shadow-[0_0_15px_rgba(0,255,213,0.3)]'
                : 'bg-cyber-dark/80 border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan/40'
            }`}
          >
            All Competencies (30)
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setActiveTab(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                activeTab === cat.id
                  ? 'btn-cyber-primary shadow-[0_0_15px_rgba(0,255,213,0.3)]'
                  : 'bg-cyber-dark/80 border-cyber-border text-cyber-muted hover:text-white hover:border-cyber-cyan/40'
              }`}
            >
              <cat.Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* ─── Categorized Skills Grid with Visual Meters ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((cat, i) => {
              const c = palette[cat.accent];
              return (
                <TiltCard
                  key={cat.id}
                  className="cyber-card rounded-2xl p-6 sm:p-7 border border-cyber-border hover:border-cyber-cyan/50 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl border ${c.bg} ${c.border}`}>
                          <cat.Icon className={`w-5 h-5 ${c.text}`} />
                        </div>
                        <div>
                          <h3 className="font-mono font-bold text-white text-sm">
                            {cat.title}
                          </h3>
                          <span className="text-[10px] font-mono text-cyber-muted uppercase tracking-wider block mt-0.5">
                            Verified Modules ({cat.skills.length})
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-cyber-muted font-sans leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Skill Meters List */}
                    <div className="space-y-3.5 font-mono">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white font-medium flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-cyber-green flex-shrink-0" />
                              <span className="truncate">{skill.name}</span>
                            </span>
                            <span className={`text-[11px] font-bold ${c.text} ml-2 flex-shrink-0`}>
                              {skill.level}%
                            </span>
                          </div>

                          {/* Segmented / Smooth Progress Bar */}
                          <div className="h-1.5 w-full bg-cyber-dark/90 rounded-full overflow-hidden border border-cyber-border/80">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.1 * i }}
                              className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Badge */}
                  <div className="mt-6 pt-4 border-t border-cyber-border flex items-center justify-between text-[11px] font-mono text-cyber-muted">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-cyber-cyan" />
                      Audited Skillset
                    </span>
                    <span className="text-cyber-green font-semibold">Active Ready</span>
                  </div>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
