import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Shield,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Award,
  Briefcase,
  Terminal,
  X,
  Copy,
  Check,
} from 'lucide-react';
import { sounds } from '../../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenDefenseSimulator: () => void;
}

export const CommandPalette = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenDefenseSimulator,
}: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          sounds.playClick();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    sounds.playShieldGrant();
    setTimeout(() => setCopied(null), 2000);
  };

  const commands = [
    {
      category: 'Simulations & Tools',
      items: [
        {
          id: 'sim',
          title: 'Launch VectorShield L0-L5 Defense Simulator',
          subtitle: 'Interactive RAG prompt-injection & attack neutralizing lab',
          icon: Shield,
          action: () => {
            onClose();
            onOpenDefenseSimulator();
          },
        },
        {
          id: 'resume',
          title: 'View ATS Resume (Chinmayi Magdum)',
          subtitle: 'Clean printable format with verified credentials',
          icon: FileText,
          action: () => {
            onClose();
            onOpenResume();
          },
        },
      ],
    },
    {
      category: 'Direct Teleport',
      items: [
        {
          id: 'nav-projects',
          title: 'Navigate to Projects',
          subtitle: 'VectorShield, QueryPilot MCP, Homomorphic Voting',
          icon: Code2,
          action: () => {
            onClose();
            window.location.hash = '#projects';
          },
        },
        {
          id: 'nav-skills',
          title: 'Navigate to Skills Matrix',
          subtitle: 'Security, Cryptography, AI & ML, Databases',
          icon: Terminal,
          action: () => {
            onClose();
            window.location.hash = '#skills';
          },
        },
        {
          id: 'nav-certs',
          title: 'Navigate to Certifications',
          subtitle: 'Cisco Cybersecurity, Tata Forage, Oracle AI',
          icon: Award,
          action: () => {
            onClose();
            window.location.hash = '#certifications';
          },
        },
        {
          id: 'nav-exp',
          title: 'Navigate to Experience',
          subtitle: 'Cybersena R&D Cybersecurity Internship',
          icon: Briefcase,
          action: () => {
            onClose();
            window.location.hash = '#experience';
          },
        },
      ],
    },
    {
      category: 'External Uplinks & Quick Actions',
      items: [
        {
          id: 'copy-email',
          title: 'Copy Email Address',
          subtitle: 'chinmayimagdum@gmail.com',
          icon: copied === 'email' ? Check : Copy,
          action: () => copyToClipboard('chinmayimagdum@gmail.com', 'email'),
        },
        {
          id: 'copy-phone',
          title: 'Copy Phone Number',
          subtitle: '+91 6360181304',
          icon: copied === 'phone' ? Check : Copy,
          action: () => copyToClipboard('+916360181304', 'phone'),
        },
        {
          id: 'demo-vs',
          title: 'Launch VectorShield Live Demo',
          subtitle: 'vector-shield-cbwp-six.vercel.app',
          icon: ExternalLink,
          action: () => {
            window.open('https://vector-shield-cbwp-six.vercel.app', '_blank');
          },
        },
        {
          id: 'open-gh',
          title: 'Open GitHub Profile',
          subtitle: 'github.com/chinmayimagdum12',
          icon: Github,
          action: () => {
            window.open('https://github.com/chinmayimagdum12', '_blank');
          },
        },
        {
          id: 'open-li',
          title: 'Open LinkedIn Profile',
          subtitle: 'linkedin.com/in/chinmayi-magdum-6967b9442',
          icon: Linkedin,
          action: () => {
            window.open('https://www.linkedin.com/in/chinmayi-magdum-6967b9442/', '_blank');
          },
        },
      ],
    },
  ];

  const filtered = commands
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-cyber-dark border border-cyber-cyan/40 rounded-xl shadow-[0_0_50px_rgba(0,255,213,0.15)] overflow-hidden z-10"
        >
          {/* Top header */}
          <div className="flex items-center px-4 py-3 border-b border-cyber-border bg-cyber-card">
            <Search className="w-5 h-5 text-cyber-cyan mr-3" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, project, credential, or shortcut..."
              className="w-full bg-transparent text-white font-mono text-sm placeholder:text-cyber-muted/50 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="text-cyber-muted hover:text-white p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 font-mono">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-cyber-muted text-sm">
                No security command found matching &quot;{query}&quot;.
              </div>
            ) : (
              filtered.map((section) => (
                <div key={section.category}>
                  <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-cyber-cyan/70 font-semibold">
                    {section.category}
                  </div>
                  <div className="space-y-1 mt-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          sounds.playClick();
                          item.action();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-cyber-cyan/10 hover:border hover:border-cyber-cyan/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded bg-cyber-card text-cyber-cyan group-hover:text-white group-hover:bg-cyber-cyan/20 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm text-white font-medium group-hover:text-cyber-cyan transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-cyber-muted">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-cyber-muted/40 group-hover:text-cyber-cyan transition-colors">
                          RUN &rarr;
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 bg-cyber-card/60 border-t border-cyber-border flex items-center justify-between text-[11px] font-mono text-cyber-muted">
            <span>Navigation: Click or Press Esc to exit</span>
            <span className="text-cyber-cyan">SENTINEL COMMAND CORE v2.4</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
