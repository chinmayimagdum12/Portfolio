import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ number, title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16 text-center"
  >
    <div className="inline-flex items-center gap-3 mb-4">
      <div className="h-px w-10 bg-cyber-cyan/40" />
      <span className="text-cyber-cyan font-mono text-sm tracking-widest">{number}</span>
      <div className="h-px w-10 bg-cyber-cyan/40" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="mt-3 text-cyber-muted text-sm font-mono">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeader;
