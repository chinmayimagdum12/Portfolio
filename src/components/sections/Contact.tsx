import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { sounds } from '../../utils/sound';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    sounds.playShieldGrant();
    navigator.clipboard.writeText('chinmayimagdum@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    sounds.playShieldGrant();
    navigator.clipboard.writeText('+916360181304');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          number="06"
          title="Direct Contact"
          subtitle="Open for Cybersecurity, AI Security & Secure Systems Opportunities"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cyber-card rounded-2xl p-8 sm:p-10 border border-cyber-cyan/30 shadow-[0_0_40px_rgba(0,255,213,0.1)]"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyber-border mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                <ShieldCheck className="w-6 h-6 text-cyber-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono text-white">
                  Get In Touch Directly
                </h3>
                <p className="text-xs font-mono text-cyber-muted mt-0.5">
                  Verified Contact Information // Belagavi, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-4 font-mono mb-8">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-cyber-dark/80 border border-cyber-border hover:border-cyber-cyan/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-cyber-muted hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-cyber-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-cyber-muted uppercase tracking-wider">
                  Official Email Address
                </p>
                <p className="text-sm font-semibold text-white mt-1 break-all group-hover:text-cyber-cyan transition-colors">
                  chinmayimagdum@gmail.com
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cyber-border/60">
                <a
                  href="mailto:chinmayimagdum@gmail.com"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-1.5 text-xs text-cyber-cyan hover:underline font-semibold"
                >
                  <span>Send Direct Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-cyber-dark/80 border border-cyber-border hover:border-cyber-cyan/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg text-cyber-muted hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-cyber-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-cyber-muted uppercase tracking-wider">
                  Direct Contact Number
                </p>
                <p className="text-sm font-semibold text-white mt-1 group-hover:text-cyber-cyan transition-colors">
                  +91 6360181304
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-cyber-border/60">
                <a
                  href="tel:+916360181304"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-1.5 text-xs text-cyber-cyan hover:underline font-semibold"
                >
                  <span>Call Directly</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-cyber-dark/80 border border-cyber-border md:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-cyber-muted uppercase tracking-wider">
                    Location &amp; Residence
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Belagavi, Karnataka, India
                  </p>
                </div>
              </div>
              <span className="text-xs text-cyber-muted hidden sm:inline">
                Open to Remote &amp; On-Site
              </span>
            </div>
          </div>

          {/* Social Platforms Action Row */}
          <div className="pt-6 border-t border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-cyber-muted">
              Professional Profiles &amp; Repositories:
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/in/chinmayi-magdum-6967b9442/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-cyber-primary flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/chinmayimagdum12"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-cyber-purple flex-1 sm:flex-initial flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
