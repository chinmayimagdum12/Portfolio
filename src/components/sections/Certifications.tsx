import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Code, Maximize2, ExternalLink } from 'lucide-react';
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
    issueDate: 'October 08, 2026',
    image: '/certificates/cisco-cybersecurity.png',
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
    credentialId: '6ac7e4b65970c17a53ca815f',
    issueDate: 'October 8th, 2026',
    image: '/certificates/tata-cybersecurity.png',
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
    credentialId: '103557593OCI26DCFA',
    issueDate: 'October 08, 2026',
    image: '/certificates/oracle-ai-database.png',
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
    <section id="certifications" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          title="Verified Credentials"
          subtitle="Cryptographically Audited Certifications & Authentic Proof-of-Competence"
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
              <TiltCard className="cyber-card rounded-2xl overflow-hidden h-full flex flex-col justify-between border border-cyber-border hover:border-cyber-cyan/40">
                {/* Certificate Image Thumbnail Preview if available */}
                {cert.image && (
                  <div
                    onClick={() => {
                      sounds.playClick();
                      setActiveCert(cert);
                    }}
                    className="relative h-44 bg-cyber-dark/80 overflow-hidden cursor-pointer group border-b border-cyber-border"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-cyber-dark/90 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan font-bold flex items-center gap-1 shadow-md">
                      <ExternalLink className="w-3 h-3" />
                      <span>View Authentic</span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-2.5 rounded-xl border flex-shrink-0 ${cert.bg} ${cert.border}`}>
                        <cert.Icon className={`w-5 h-5 ${cert.text}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono font-bold text-white text-sm leading-snug">
                          {cert.title}
                        </h3>
                        <p className={`text-xs font-mono mt-0.5 font-semibold ${cert.text}`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {cert.issueDate && (
                      <p className="text-[11px] font-mono text-cyber-muted mb-2">
                        Issued: <span className="text-white">{cert.issueDate}</span>
                      </p>
                    )}

                    <p className="text-xs text-cyber-muted font-sans leading-relaxed line-clamp-2 mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      setActiveCert(cert);
                    }}
                    className="btn-cyber-primary w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Authentic Credential</span>
                  </button>
                </div>
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
