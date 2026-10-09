import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Code, Maximize2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import CertificateModal, { CertificateData } from '../ui/CertificateModal';
import { sounds } from '../../utils/sound';

const certsData: CertificateData[] = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    Icon: Shield,
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    skills: [
      'Network Security Principles',
      'Confidentiality, Integrity & Availability (CIA Triad)',
      'Threat Vectors & Defense Mitigation',
      'Firewall & Packet Inspection Fundamentals',
    ],
    description:
      'Covers foundational cybersecurity architecture, global threat landscapes, cryptography basics, vulnerability mitigation, and defensive countermeasures across enterprise network perimeters.',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata (Forage)',
    Icon: Eye,
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    skills: [
      'Identity & Access Management (IAM)',
      'Security Operations Center (SOC) Workflows',
      'Vulnerability Assessment & Prioritization',
      'Incident Response & Forensic Escalation',
    ],
    description:
      'Practical virtual internship simulating real enterprise SOC analyst workflows: evaluating vulnerability scan findings, drafting security advisory reports, and designing mitigation plans for corporate assets.',
  },
  {
    title: 'Oracle AI Database Certified Foundations Associate',
    issuer: 'Oracle University',
    Icon: Database,
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    skills: [
      'Oracle AI Vector Search',
      'Autonomous Database Security Controls',
      'AI/ML Database Integration',
      'Relational & Vector Data Protection',
    ],
    description:
      'Validates fundamental understanding of AI capabilities integrated within enterprise database systems, including vector search operations, embedding storage, and enterprise database access control.',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'EYESEC',
    Icon: Code,
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    skills: [
      'Secure REST API Architecture',
      'Full-Stack Frontend & Backend Integration',
      'Authentication & Token Management',
      'Cross-Origin Resource Sharing & Secure Headers',
    ],
    description:
      'Hands-on full-stack engineering certification focusing on robust application design, modern client/server architecture, secure database interactions, and web application lifecycle.',
  },
];

export const Certifications = () => {
  const [activeCert, setActiveCert] = useState<CertificateData | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 relative cyber-grid">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          title="Verified Credentials"
          subtitle="// cryptographic.proof-of-competence"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {certsData.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="cyber-card rounded-xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg border flex-shrink-0 ${cert.bg} ${cert.border}`}
                    >
                      <cert.Icon className={`w-6 h-6 ${cert.text}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono font-semibold text-white text-sm leading-snug">
                        {cert.title}
                      </h3>
                      <p className={`text-xs font-mono mt-1 ${cert.text}`}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                        <span className="text-[11px] font-mono text-cyber-green">
                          Verified Credential
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-cyber-muted font-mono leading-relaxed line-clamp-2 mb-4">
                    {cert.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveCert(cert);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 text-xs font-mono text-cyber-text hover:text-cyber-cyan transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Verification Record</span>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Credential Lightbox Modal */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};

export default Certifications;
