import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, CheckCircle2, LucideIcon, ExternalLink } from 'lucide-react';
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
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-3xl bg-cyber-dark border border-cyber-cyan/40 rounded-2xl shadow-[0_0_60px_rgba(0,255,213,0.2)] overflow-hidden z-10 font-mono my-6 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-cyber-card border-b border-cyber-border flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
              <div>
                <span className="text-xs font-bold text-white tracking-wider block">
                  VERIFIED CREDENTIAL RECORD // {certificate.issuer}
                </span>
                <span className="text-[10px] text-cyber-green">
                  STATUS: AUTHENTICATED
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="text-cyber-muted hover:text-white p-1 rounded-lg hover:bg-cyber-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-7 space-y-6 overflow-y-auto flex-1">
            {/* Authentic Certificate Image Lightbox Preview */}
            {certificate.image && (
              <div className="rounded-xl overflow-hidden border border-cyber-cyan/30 bg-black/60 shadow-[0_0_30px_rgba(0,255,213,0.15)] relative group">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto max-h-[420px] object-contain mx-auto"
                  loading="lazy"
                />
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-dark/90 border border-cyber-cyan/40 text-[11px] text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all font-semibold shadow-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Resolution</span>
                </a>
              </div>
            )}

            {/* Certificate Meta Details */}
            <div className="flex items-start gap-4">
              <div className={`p-3.5 rounded-xl border ${certificate.bg} ${certificate.border} flex-shrink-0`}>
                <certificate.Icon className={`w-7 h-7 ${certificate.text}`} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {certificate.title}
                </h3>
                <p className={`text-xs mt-1 font-semibold ${certificate.text}`}>
                  {certificate.issuer}
                </p>
                {certificate.credentialId && (
                  <p className="text-[11px] text-cyber-muted mt-1">
                    Credential ID: <span className="text-white font-mono">{certificate.credentialId}</span>
                  </p>
                )}
                {certificate.issueDate && (
                  <p className="text-[11px] text-cyber-muted">
                    Issue Date: <span className="text-white font-mono">{certificate.issueDate}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-border text-xs text-cyber-text leading-relaxed">
              {certificate.description}
            </div>

            {/* Validated Competencies */}
            <div>
              <label className="text-xs text-cyber-cyan font-bold block mb-2.5 uppercase tracking-wider">
                Audited &amp; Validated Competencies:
              </label>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green flex-shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-cyber-border flex items-center justify-between text-xs text-cyber-muted">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyber-cyan" />
                Cryptographically Verified Credential
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
