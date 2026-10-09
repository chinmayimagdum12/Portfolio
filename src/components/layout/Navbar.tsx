import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, FileText, Terminal } from 'lucide-react';
import { sounds } from '../../utils/sound';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Simulator', href: '#simulator' },
  { name: 'Experience', href: '#experience' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar = ({ onOpenResume, onOpenCommandPalette }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/85 backdrop-blur-xl border-b border-cyber-border shadow-[0_1px_20px_rgba(0,255,213,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Shield className="w-7 h-7 text-cyber-cyan group-hover:drop-shadow-[0_0_12px_rgba(0,255,213,0.8)] transition-all duration-300" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">
              <span className="text-white">CM</span>
              <span className="text-cyber-cyan">_</span>
              <span className="text-cyber-muted text-sm">sec</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playClick()}
                className={`px-3 py-2 text-xs font-mono transition-colors relative group ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyber-cyan'
                    : 'text-cyber-muted hover:text-cyber-cyan'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-cyber-cyan transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => {
                sounds.playClick();
                onOpenCommandPalette();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-cyber-border bg-cyber-card/60 hover:border-cyber-cyan/40 text-xs font-mono text-cyber-muted hover:text-white transition-all"
              title="Command Console (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Ctrl+K</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/40 hover:bg-cyber-cyan/25 text-xs font-mono text-cyber-cyan transition-all shadow-[0_0_15px_rgba(0,255,213,0.15)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileOpen(!mobileOpen);
            }}
            className="lg:hidden text-cyber-muted hover:text-cyber-cyan transition-colors p-1"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cyber-dark/95 backdrop-blur-xl border-b border-cyber-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sounds.playClick();
                    setMobileOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="block px-4 py-2.5 text-sm font-mono text-cyber-muted hover:text-cyber-cyan hover:bg-cyber-cyan/5 rounded-lg transition-all"
                >
                  <span className="text-cyber-green mr-2">{'>'}</span>
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-3 border-t border-cyber-border/60 flex flex-col gap-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setMobileOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>View ATS Resume</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setMobileOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-muted font-mono text-xs"
                >
                  <Terminal className="w-4 h-4 text-cyber-cyan" />
                  <span>Command Console (Ctrl+K)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
