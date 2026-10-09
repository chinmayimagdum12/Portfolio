import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import DefenseSimulator from './components/sections/DefenseSimulator';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import TelemetryHUD from './components/ui/TelemetryHUD';
import CommandPalette from './components/ui/CommandPalette';
import SocTerminalBot from './components/ui/SocTerminalBot';
import ResumeModal from './components/ui/ResumeModal';
import { sounds } from './utils/sound';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalBotOpen, setIsTerminalBotOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sounds.playClick();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text relative selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <DefenseSimulator />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Security Telemetry HUD ribbon (bottom fixed) */}
      <TelemetryHUD
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminalBot={() => setIsTerminalBotOpen((prev) => !prev)}
      />

      {/* Interactive Command Console (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDefenseSimulator={() => {
          window.location.hash = '#simulator';
        }}
      />

      {/* Floating AI SOC Sentinel Bot */}
      <SocTerminalBot
        isOpen={isTerminalBotOpen}
        onToggle={() => setIsTerminalBotOpen((prev) => !prev)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
