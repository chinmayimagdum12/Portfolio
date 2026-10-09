import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:chinmayimagdum@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="06"
          title="Contact"
          subtitle="// transmit.message()"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* ─── Info panel ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="cyber-card rounded-xl p-6">
              <h3 className="font-mono font-semibold text-white mb-6">
                <span className="text-cyber-cyan">&gt;</span> connection.details
              </h3>
              <div className="space-y-5">
                {[
                  {
                    Icon: Mail,
                    label: 'Email',
                    value: 'chinmayimagdum@gmail.com',
                    href: 'mailto:chinmayimagdum@gmail.com',
                  },
                  {
                    Icon: Phone,
                    label: 'Phone',
                    value: '+91 6360181304',
                    href: 'tel:+916360181304',
                  },
                  {
                    Icon: MapPin,
                    label: 'Location',
                    value: 'Belagavi, Karnataka, India',
                  },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20">
                      <Icon className="w-4 h-4 text-cyber-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-cyber-muted">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-white hover:text-cyber-cyan transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/chinmayi-magdum-6967b9442/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-card rounded-lg p-4 flex items-center justify-center gap-2 text-sm font-mono text-cyber-muted hover:text-cyber-cyan transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/chinmayimagdum12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-card rounded-lg p-4 flex items-center justify-center gap-2 text-sm font-mono text-cyber-muted hover:text-cyber-cyan transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* ─── Contact form ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="cyber-card rounded-xl p-6 space-y-5"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 pb-2 border-b border-cyber-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-cyber-muted">
                  send_message.sh
                </span>
              </div>

              {/* Fields */}
              <div>
                <label className="block text-xs font-mono text-cyber-cyan mb-2">
                  <span className="text-cyber-green">$</span> name:
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-sm font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyber-cyan mb-2">
                  <span className="text-cyber-green">$</span> email:
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-sm font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyber-cyan mb-2">
                  <span className="text-cyber-green">$</span> message:
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Enter your message..."
                  className="w-full bg-cyber-bg border border-cyber-border rounded-lg px-4 py-3 text-sm font-mono text-white placeholder:text-cyber-muted/40 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/40 rounded-lg font-mono text-sm text-cyber-cyan hover:bg-cyber-cyan/20 hover:border-cyber-cyan transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,213,0.25)]"
              >
                <Send className="w-4 h-4" />
                Transmit Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
