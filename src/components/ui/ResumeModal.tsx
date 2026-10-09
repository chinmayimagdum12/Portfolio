import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md print:hidden"
        />

        {/* Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white text-zinc-900 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:rounded-none"
        >
          {/* Header Bar */}
          <div className="px-6 py-3.5 bg-zinc-900 text-white flex items-center justify-between print:hidden">
            <span className="font-mono text-xs font-semibold text-cyber-cyan flex items-center gap-2">
              ATS-OPTIMIZED RESUME PREVIEW // CHINMAYI MAGDUM
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono transition-colors text-white"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-sm leading-normal text-zinc-800 print:overflow-visible print:p-8">
            {/* Header */}
            <header className="text-center pb-4 border-b border-zinc-300">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
                Chinmayi Magdum
              </h1>
              <p className="text-sm font-medium text-zinc-700 mt-1">
                Cybersecurity | AI Security | Secure Systems
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 mt-2">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91 6360181304
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" /> chinmayimagdum@gmail.com
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Belagavi, Karnataka
                </span>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/chinmayi-magdum-6967b9442/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://github.com/chinmayimagdum12"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <Github className="w-3 h-3" /> GitHub
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs text-zinc-700 leading-relaxed">
                AI/ML engineering student with a strong interest in cybersecurity and secure systems. Knowledge of Python, cryptography, and machine learning, with experience in developing academic projects. Eager to apply technical skills and problem-solving abilities to cybersecurity and secure application development.
              </p>
            </section>

            {/* Education */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-zinc-900">Jain College of Engineering</p>
                    <p className="text-zinc-600 italic">B.E. in CSE (Artificial Intelligence and Machine Learning)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-zinc-800">2024 – 2027</p>
                    <p className="text-zinc-600 font-medium">CGPA: 8.70 / 10</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-zinc-900">KLS Shri Vasantrao Potdar Polytechnic</p>
                    <p className="text-zinc-600 italic">Diploma in Computer Science</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-zinc-800">2021 – 2024</p>
                    <p className="text-zinc-600 font-medium">CGPA: 8.03 / 10</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs">
                <p>
                  <strong className="text-zinc-900">Programming:</strong> Python, SQL, JavaScript
                </p>
                <p>
                  <strong className="text-zinc-900">Cybersecurity:</strong> Network Security, Cryptography, Application Security Fundamentals, Secure Database Access
                </p>
                <p>
                  <strong className="text-zinc-900">AI, LLMs &amp; RAG:</strong> Machine Learning, Deep Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Embeddings, Vector Search, Prompt Injection Security
                </p>
                <p>
                  <strong className="text-zinc-900">Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, Qdrant
                </p>
                <p>
                  <strong className="text-zinc-900">Frameworks &amp; Tools:</strong> FastAPI, React, TypeScript, TensorFlow, Keras, scikit-learn, ChromaDB, Vercel, Render, Streamlit, Git, GitHub, Docker, REST APIs
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-zinc-900">
                    <p>
                      VectorShield – Zero-Trust RAG Security Platform |{' '}
                      <span className="font-normal italic text-zinc-600">
                        Python, FastAPI, React, TypeScript, ChromaDB, Docker
                      </span>
                    </p>
                    <a
                      href="https://vector-shield-cbwp-six.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 flex items-center gap-1 font-semibold hover:underline"
                    >
                      Demo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-0.5">
                    <li>Designed a six-layer (L0–L5) defense pipeline for RAG systems targeting indirect prompt injection and obfuscated instructions across 13 attack categories.</li>
                    <li>Implemented Unicode normalization, zero-width character filtering, homoglyph checks, Base64/ROT13 decoding, retrieval anomaly filtering, and security-event auditing.</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-zinc-900">
                    <p>
                      QueryPilot MCP – PostgreSQL Read-Only Analyst Server |{' '}
                      <span className="font-normal italic text-zinc-600">
                        Python, FastMCP, PostgreSQL, SQLGlot, Docker
                      </span>
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-0.5">
                    <li>Designed an MCP server with five planned tools for database discovery, schema inspection, read-only queries, query explanation, and table statistics.</li>
                    <li>Specified SQL AST validation, a 5-second statement timeout, a 100-row default limit, a 1,000-row hard cap, and JSONL audit logging.</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-zinc-900">
                    <p>
                      Homomorphic Encryption-Based Online Voting System |{' '}
                      <span className="font-normal italic text-zinc-600">
                        Python, Flask, Paillier, SQLite, HTML/CSS
                      </span>
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-0.5">
                    <li>Developed a voting application supporting Voter and Admin roles, login sessions, candidate management, and SQLite storage.</li>
                    <li>Integrated Paillier encryption, election-result reporting, voter registration, and spreadsheet-based bulk registration.</li>
                  </ul>
                </div>

                <div>
                  <div className="font-bold text-zinc-900">
                    <p>
                      Paddy Leaf Disease Detection Using AI |{' '}
                      <span className="font-normal italic text-zinc-600">
                        Python, CNN, TensorFlow, Keras
                      </span>
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-0.5">
                    <li>Developed a CNN-based image classifier for three paddy leaf disease classes using image preprocessing and data augmentation.</li>
                    <li>Reported 96% validation accuracy; applied early stopping, dropout, and classification metrics for model evaluation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Internship Experience */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Internship Experience
              </h2>
              <div className="text-xs">
                <div className="flex justify-between items-baseline font-bold text-zinc-900">
                  <p>
                    Cybersecurity Intern |{' '}
                    <span className="font-normal italic text-zinc-700">
                      Cybersena (R&amp;D) India Pvt. Ltd.
                    </span>
                  </p>
                  <p className="text-zinc-600 font-semibold">Jan – May 2024 | India</p>
                </div>
                <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-0.5">
                  <li>Studied core cybersecurity concepts including network security, access control, and data protection practices through hands-on R&amp;D tasks.</li>
                  <li>Analyzed common security threats and vulnerabilities, and learned how they are identified, assessed, and mitigated.</li>
                  <li>Applied security best practices to understand secure system design, threat awareness, and risk reduction.</li>
                </ul>
              </div>
            </section>

            {/* Certifications */}
            <section className="mt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-700 space-y-0.5">
                <li><strong className="text-zinc-900">Introduction to Cybersecurity</strong> – Cisco Networking Academy</li>
                <li><strong className="text-zinc-900">Cybersecurity Analyst Job Simulation</strong> – Tata (Forage)</li>
                <li><strong className="text-zinc-900">Oracle AI Database Certified Foundations Associate</strong> – Oracle University</li>
                <li><strong className="text-zinc-900">Full Stack Web Development</strong> – EYESEC</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
