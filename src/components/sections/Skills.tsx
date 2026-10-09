import { motion } from 'framer-motion';
import { Shield, Code, Brain, Database, Wrench } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const categories = [
  {
    title: 'Security & Cryptography',
    Icon: Shield,
    accent: 'cyan',
    skills: [
      'Network Security',
      'Cryptography',
      'Application Security',
      'Secure DB Access',
      'Prompt Injection Defense',
      'Zero-Trust Architecture',
    ],
  },
  {
    title: 'Programming',
    Icon: Code,
    accent: 'green',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML / CSS'],
  },
  {
    title: 'AI & Machine Learning',
    Icon: Brain,
    accent: 'purple',
    skills: [
      'Deep Learning',
      'LLMs',
      'RAG Systems',
      'Embeddings',
      'Vector Search',
      'TensorFlow / Keras',
      'Scikit-learn',
      'CNN',
    ],
  },
  {
    title: 'Databases',
    Icon: Database,
    accent: 'blue',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Qdrant', 'ChromaDB'],
  },
  {
    title: 'Frameworks & Tools',
    Icon: Wrench,
    accent: 'cyan',
    skills: [
      'FastAPI',
      'React',
      'Flask',
      'Streamlit',
      'Docker',
      'Git / GitHub',
      'Vercel',
      'Render',
      'REST APIs',
    ],
  },
];

/* Tailwind colour tokens keyed by our accent names */
const palette: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  cyan:   { border: 'border-cyan-500/30',   bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,213,0.15)]' },
  green:  { border: 'border-green-500/30',  bg: 'bg-green-500/10',  text: 'text-green-400',  glow: 'group-hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]' },
  purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400', glow: 'group-hover:shadow-[0_0_30px_rgba(181,55,242,0.15)]' },
  blue:   { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   text: 'text-blue-400',   glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]' },
};

const Skills = () => (
  <section id="skills" className="py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeader number="02" title="Skills Matrix" subtitle="// security.modules.loaded" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const c = palette[cat.accent];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group cyber-card rounded-xl p-6 transition-all duration-300 ${c.glow}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg ${c.bg} ${c.border} border`}>
                  <cat.Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className="font-mono font-semibold text-sm text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-mono rounded-full border ${c.border} ${c.bg} ${c.text} transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
