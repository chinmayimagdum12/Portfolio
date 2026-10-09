import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal, X, Minimize2, Maximize2, Send, Bot } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface Message {
  sender: 'system' | 'user' | 'bot';
  text: string;
  time: string;
}

interface SocTerminalBotProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenResume: () => void;
}

export const SocTerminalBot = ({
  isOpen,
  onToggle,
  onOpenResume,
}: SocTerminalBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'system',
      text: 'SENTINEL-AI v2.4 initialized. Connected to Chinmayi Magdum Portfolio Subsystem.',
      time: '00:01',
    },
    {
      sender: 'bot',
      text: 'Greetings. I am Sentinel, the SOC assistant for Chinmayi. Type "help", "projects", "skills", "experience", or ask any question about her credentials.',
      time: '00:01',
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let botResponse = '';

    if (cleanCmd === 'help') {
      botResponse =
        'Available Subsystem Commands:\n• projects    - View all 4 active security & AI projects\n• skills      - Inspect cryptography, AI/ML, and security stack\n• experience  - Cybersena (R&D) internship details\n• certs       - View 4 verified credentials\n• resume      - Open Chinmayi\'s verified ATS resume\n• contact     - Display direct contact channels\n• clear       - Flush terminal buffer';
    } else if (cleanCmd.includes('project') || cleanCmd === '1') {
      botResponse =
        'Featured Security Projects:\n1. VectorShield - Zero-Trust RAG Security Platform (Live Demo available!)\n2. QueryPilot MCP - PostgreSQL Read-Only Analyst Server with AST validation\n3. Homomorphic Online Voting - Paillier cryptographic privacy-preserving voting\n4. Paddy Leaf Disease AI - 96% accuracy CNN diagnostic pipeline';
    } else if (cleanCmd.includes('skill') || cleanCmd.includes('tech')) {
      botResponse =
        'Technical Arsenal:\n• Security: Network Defense, Paillier Homomorphic Encryption, RAG Prompt Injection mitigation, Zero-Trust.\n• Languages: Python, SQL, JavaScript, HTML/CSS.\n• AI / ML: TensorFlow, Keras, CNN, Scikit-learn, ChromaDB, Vector Search.\n• Databases & Tools: PostgreSQL, SQLite, Docker, FastMCP, Streamlit, Git.';
    } else if (cleanCmd.includes('exp') || cleanCmd.includes('intern') || cleanCmd.includes('cybersena')) {
      botResponse =
        'Internship Experience:\n• Cybersecurity Intern @ Cybersena (R&D) India Pvt. Ltd. (Jan – May 2024)\n• Focus: Network security protocols, vulnerability assessment, secure data protection, and security threat mitigations.';
    } else if (cleanCmd.includes('cert') || cleanCmd.includes('license')) {
      botResponse =
        'Verified Certifications:\n1. Cisco Networking Academy - Introduction to Cybersecurity\n2. Tata (Forage) - Cybersecurity Analyst Job Simulation\n3. Oracle University - Oracle AI Database Certified Foundations Associate\n4. EYESEC - Full Stack Web Development';
    } else if (cleanCmd.includes('resume') || cleanCmd.includes('cv')) {
      botResponse = 'Opening Chinmayi\'s verified ATS resume...';
      setTimeout(() => onOpenResume(), 400);
    } else if (cleanCmd.includes('contact') || cleanCmd.includes('email') || cleanCmd.includes('hire') || cleanCmd.includes('phone')) {
      botResponse =
        'Direct Communication Channels:\n• Email: chinmayimagdum@gmail.com\n• Phone: +91 6360181304\n• LinkedIn: linkedin.com/in/chinmayi-magdum-6967b9442\n• GitHub: github.com/chinmayimagdum12\n• Location: Belagavi, Karnataka, India';
    } else if (cleanCmd.includes('cgpa') || cleanCmd.includes('college') || cleanCmd.includes('education') || cleanCmd.includes('degree')) {
      botResponse =
        'Academic Credentials:\n• B.E. in CSE (AI & ML) - Jain College of Engineering (2024-2027) | CGPA: 8.70/10\n• Diploma in CS - KLS Shri Vasantrao Potdar Polytechnic (2021-2024) | CGPA: 8.03/10';
    } else if (cleanCmd === 'clear') {
      setMessages([]);
      return;
    } else {
      botResponse = `Command "${cmd}" received. Chinmayi specializes in Cybersecurity, Paillier Encryption, and Zero-Trust AI systems. Type "help" to see available directives or "contact" to reach out directly.`;
    }

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: cmd, time },
      { sender: 'bot', text: botResponse, time },
    ]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sounds.playClick();
    const val = input;
    setInput('');
    handleCommand(val);
  };

  return (
    <>
      {/* Floating launcher badge when closed */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            sounds.playClick();
            onToggle();
          }}
          className="fixed bottom-16 sm:bottom-6 right-5 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-cyber-dark/95 border border-cyber-cyan/50 text-white rounded-full shadow-[0_0_25px_rgba(0,255,213,0.3)] backdrop-blur-md font-mono text-xs group"
        >
          <div className="relative">
            <Bot className="w-4 h-4 text-cyber-cyan" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyber-green animate-ping" />
          </div>
          <span className="text-cyber-cyan font-bold">SENTINEL-AI</span>
          <span className="hidden sm:inline text-cyber-muted text-[10px]">SOC Assistant</span>
        </motion.button>
      )}

      {/* Expanded Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={`fixed bottom-5 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] bg-cyber-dark/95 border border-cyber-cyan/40 rounded-xl shadow-[0_0_40px_rgba(0,255,213,0.2)] backdrop-blur-xl overflow-hidden font-mono flex flex-col ${
              isMinimized ? 'h-12' : 'h-[500px]'
            }`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-cyber-card border-b border-cyber-border">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyber-cyan" />
                <span className="text-xs font-bold text-white tracking-wider">
                  SENTINEL-AI // SOC CONSOLE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-cyber-muted">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:text-cyber-cyan transition-colors"
                  title={isMinimized ? 'Expand' : 'Minimize'}
                >
                  {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    onToggle();
                  }}
                  className="p-1 hover:text-red-400 transition-colors"
                  title="Close Terminal"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs leading-relaxed">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={
                        m.sender === 'user'
                          ? 'text-right'
                          : m.sender === 'system'
                          ? 'text-cyber-muted/70 italic text-[11px]'
                          : 'text-left'
                      }
                    >
                      {m.sender === 'user' ? (
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/30 text-cyber-cyan text-xs">
                          {m.text}
                        </div>
                      ) : m.sender === 'system' ? (
                        <div>{m.text}</div>
                      ) : (
                        <div className="inline-block p-2.5 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text text-xs whitespace-pre-wrap">
                          <div className="text-[10px] text-cyber-cyan font-bold mb-1 flex items-center gap-1">
                            <Bot className="w-3 h-3" />
                            SENTINEL
                          </div>
                          {m.text}
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Quick chip buttons */}
                <div className="px-3 py-1.5 bg-cyber-dark border-t border-cyber-border/60 flex items-center gap-1.5 overflow-x-auto text-[10px]">
                  {['help', 'projects', 'skills', 'experience', 'certs', 'contact'].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleCommand(chip)}
                      className="px-2 py-0.5 rounded bg-cyber-card hover:bg-cyber-cyan/20 hover:text-cyber-cyan text-cyber-muted border border-cyber-border transition-colors whitespace-nowrap"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Input prompt */}
                <form
                  onSubmit={onSubmit}
                  className="p-2.5 bg-cyber-card/90 border-t border-cyber-border flex items-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyber-green flex-shrink-0" />
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type command or query..."
                    className="flex-1 bg-transparent text-xs text-white placeholder:text-cyber-muted/40 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="p-1.5 rounded bg-cyber-cyan/20 text-cyber-cyan hover:bg-cyber-cyan/30 transition-colors"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocTerminalBot;
