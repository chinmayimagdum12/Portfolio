import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, CheckCircle2, LucideIcon } from 'lucide-react';
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
}

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

export const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-cyber-dark border border-cyber-cyan/40 rounded-xl shadow-[0_0_50px_rgba(0,255,213,0.2)] overflow-hidden z-10 font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-cyber-card border-b border-cyber-border">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
              <span className="text-xs font-bold text-white tracking-wider">
                VERIFIED CREDENTIAL VAULT
              </span>
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

          {/* Certificate Body */}
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-xl border ${certificate.bg} ${certificate.border} flex-shrink-0`}>
                <certificate.Icon className={`w-8 h-8 ${certificate.text}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {certificate.title}
                </h3>
                <p className={`text-sm mt-1 font-semibold ${certificate.text}`}>
                  {certificate.issuer}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                  <span className="text-xs text-cyber-green font-semibold">
                    STATUS: CRYPTOGRAPHICALLY VERIFIED
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-cyber-card/60 border border-cyber-border text-xs text-cyber-text/90 leading-relaxed">
              {certificate.description}
            </div>

            {/* Validated Skills */}
            <div>
              <label className="text-xs text-cyber-cyan font-semibold block mb-2">
                VERIFIED COMPETENCIES:
              </label>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyber-green" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Security stamp footer */}
            <div className="pt-4 border-t border-cyber-border flex items-center justify-between text-xs text-cyber-muted">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-cyber-cyan" />
                Audited &amp; Authenticated
              </span>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="px-4 py-1.5 rounded bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan/30 transition-colors text-xs"
              >
                Close Vault
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
