import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronRight, Layers, ShieldCheck, LucideIcon } from 'lucide-react';
import { sounds } from '../../utils/sound';

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  Icon: LucideIcon;
  highlights: string[];
  gradient: string;
  ring: string;
  architectureDetails: string[];
  securityControls: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-cyber-dark border border-cyber-cyan/40 rounded-xl shadow-[0_0_50px_rgba(0,255,213,0.2)] overflow-hidden z-10 font-mono my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-cyber-card border-b border-cyber-border">
            <div className="flex items-center gap-2.5">
              <project.Icon className="w-5 h-5 text-cyber-cyan" />
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">
                  SYSTEM ARCHITECTURE // {project.title}
                </h3>
                <p className="text-[11px] text-cyber-cyan">{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="text-cyber-muted hover:text-white p-1 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs leading-relaxed">
            <p className="text-cyber-muted text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Architecture Details */}
            <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border space-y-2">
              <div className="text-cyber-cyan font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>ARCHITECTURAL SPECIFICATION</span>
              </div>
              <ul className="space-y-1.5 mt-2">
                {project.architectureDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-cyber-text">
                    <ChevronRight className="w-3.5 h-3.5 text-cyber-green mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Controls */}
            <div className="p-4 rounded-xl bg-cyber-card/60 border border-cyber-border space-y-2">
              <div className="text-cyber-purple font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>SECURITY &amp; COMPLIANCE CONTROLS</span>
              </div>
              <ul className="space-y-1.5 mt-2">
                {project.securityControls.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-cyber-text">
                    <ChevronRight className="w-3.5 h-3.5 text-cyber-purple mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <span className="text-cyber-muted font-semibold block mb-2">
                DEPLOYED TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-cyber-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/30 transition-colors shadow-[0_0_15px_rgba(0,255,213,0.15)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="text-cyber-muted hover:text-white text-xs underline"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
