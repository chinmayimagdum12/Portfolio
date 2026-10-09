import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { sounds } from '../../utils/sound';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sounds.playShieldGrant();
    const mailto = `mailto:chinmayimagdum@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')} - from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="06"
          title="Get In Touch"
          subtitle="Open for Cybersecurity, AI Security & Secure Systems Opportunities"
        />

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-5"
          >
            <div className="cyber-card rounded-2xl p-6 sm:p-7 border border-cyber-cyan/20">
              <div className="flex items-center gap-2 mb-4 text-cyber-cyan font-mono text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-cyber-green" />
                <span>Verified Direct Channels</span>
              </div>

              <h3 className="text-xl font-bold font-mono text-white mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-xs text-cyber-muted leading-relaxed mb-6 font-sans">
                Whether you have an inquiry about security engineering roles, collaborative research in homomorphic encryption, or want to discuss zero-trust systems, feel free to reach out directly.
              </p>

              <div className="space-y-4 font-mono">
                <a
                  href="mailto:chinmayimagdum@gmail.com"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-cyber-dark/60 border border-cyber-border hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-cyber-muted">Direct Email</p>
                    <p className="text-xs text-white group-hover:text-cyber-cyan transition-colors truncate font-semibold">
                      chinmayimagdum@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916360181304"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-cyber-dark/60 border border-cyber-border hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-cyber-muted">Phone Number</p>
                    <p className="text-xs text-white group-hover:text-cyber-cyan transition-colors font-semibold">
                      +91 6360181304
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-cyber-dark/60 border border-cyber-border">
                  <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-cyber-muted">Location</p>
                    <p className="text-xs text-white font-semibold">
                      Belagavi, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-cyber-border">
                <a
                  href="https://www.linkedin.com/in/chinmayi-magdum-6967b9442/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="btn-cyber-primary flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/chinmayimagdum12"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="btn-cyber-purple flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Professional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="cyber-card rounded-2xl p-6 sm:p-8 border border-cyber-border/80 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-cyber-border">
                <span className="text-sm font-bold font-mono text-white">
                  Direct Inquiries &amp; Message
                </span>
                <span className="text-[11px] font-mono text-cyber-green flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                  Secure Routing
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-cyber-text font-medium mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-cyber-dark/80 border border-cyber-border rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyber-text font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-cyber-dark/80 border border-cyber-border rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-cyber-text font-medium mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Cybersecurity Opportunity / Research Discussion"
                  className="w-full bg-cyber-dark/80 border border-cyber-border rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyber-text font-medium mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details about the role, project, or discussion..."
                  className="w-full bg-cyber-dark/80 border border-cyber-border rounded-xl px-4 py-3 text-xs font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                onClick={() => sounds.playClick()}
                className="btn-cyber-primary w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold tracking-wide"
              >
                <Send className="w-4 h-4" />
                <span>Send Professional Message</span>
              </button>

              {submitted && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Email client opened successfully with pre-filled message!</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
