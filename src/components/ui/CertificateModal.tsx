import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, CheckCircle2, LucideIcon, ExternalLink, Calendar, Hash } from 'lucide-react';
import { sounds } from '../../utils/sound';

export interface CertificateData {
  title: string;
  issuer: string;
  Icon: LucideIcon;
  border: string;
  bg: string;
  text: string;
  credentialId?: string;
  issueDate?: string;
  skills: string[];
  description: string;
  image?: string;
}

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && certificate) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-cyber-dark border border-cyber-cyan/40 rounded-2xl shadow-[0_0_80px_rgba(0,255,213,0.25)] overflow-hidden z-10 font-mono flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-cyber-card border-b border-cyber-border flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
              <div>
                <span className="text-xs font-bold text-white tracking-wider block">
                  AUTHENTIC CREDENTIAL VERIFICATION // {certificate.issuer}
                </span>
                <span className="text-[10px] text-cyber-green flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                  CRYPTOGRAPHICALLY VERIFIED &amp; RECORDED
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-cyber-muted hover:text-white hover:bg-cyber-dark border border-transparent hover:border-cyber-border transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Main Body: 2-Column Responsive Split */}
          <div className="grid lg:grid-cols-12 gap-6 p-5 sm:p-7 overflow-y-auto flex-1 items-center">
            {/* Left 7 Columns: Full Authentic Certificate Preview */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              {certificate.image ? (
                <div className="w-full rounded-xl overflow-hidden border border-cyber-cyan/30 bg-black/80 shadow-[0_0_30px_rgba(0,255,213,0.15)] relative group flex items-center justify-center p-2">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full max-h-[60vh] object-contain rounded-lg"
                  />
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-dark/95 border border-cyber-cyan/50 text-[11px] text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all font-bold shadow-xl"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Full Resolution</span>
                  </a>
                </div>
              ) : (
                <div className="w-full h-64 rounded-xl border border-dashed border-cyber-border flex items-center justify-center text-cyber-muted text-xs">
                  Certificate Digital Record on File
                </div>
              )}
            </div>

            {/* Right 5 Columns: Metadata & Verified Competencies */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                {/* Certificate Identity */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-cyber-border">
                  <div className={`p-3 rounded-xl border flex-shrink-0 ${certificate.bg} ${certificate.border}`}>
                    <certificate.Icon className={`w-6 h-6 ${certificate.text}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {certificate.title}
                    </h3>
                    <p className={`text-xs mt-0.5 font-semibold ${certificate.text}`}>
                      {certificate.issuer}
                    </p>
                  </div>
                </div>

                {/* Identifiers */}
                <div className="space-y-2 text-xs">
                  {certificate.credentialId && (
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border flex items-center gap-2">
                      <Hash className="w-3.5 h-3.5 text-cyber-cyan flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="text-[10px] text-cyber-muted block">Credential ID</span>
                        <span className="text-white text-[11px] font-mono break-all font-semibold">
                          {certificate.credentialId}
                        </span>
                      </div>
                    </div>
                  )}

                  {certificate.issueDate && (
                    <div className="p-2.5 rounded-lg bg-cyber-dark/80 border border-cyber-border flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyber-green flex-shrink-0" />
                      <div>
                        <span className="text-[10px] text-cyber-muted block">Issue Date</span>
                        <span className="text-white text-[11px] font-semibold">
                          {certificate.issueDate}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-cyber-text/80 font-sans leading-relaxed">
                  {certificate.description}
                </p>

                {/* Validated Skills */}
                <div>
                  <label className="text-[11px] text-cyber-cyan font-bold block mb-2 uppercase tracking-wider">
                    Validated Competencies:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-1 px-2.5 py-1 text-[11px] rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyber-green flex-shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-cyber-border flex items-center justify-between gap-3">
                <span className="text-[10px] text-cyber-muted flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-cyber-cyan" />
                  Verified Credential
                </span>
                <button
                  onClick={() => {
                    sounds.playClick();
                    onClose();
                  }}
                  className="btn-cyber-primary px-5 py-2 rounded-xl text-xs font-bold"
                >
                  Close Record
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
