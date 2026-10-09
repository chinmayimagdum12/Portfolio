import { Shield, Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="py-8 px-4 border-t border-cyber-border bg-cyber-dark/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-cyber-cyan" />
        <span className="text-sm font-mono text-cyber-muted">
          &copy; {new Date().getFullYear()} Chinmayi Magdum
        </span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/chinmayimagdum12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyber-muted hover:text-cyber-cyan transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/chinmayi-magdum-6967b9442/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyber-muted hover:text-cyber-cyan transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      <p className="text-xs font-mono text-cyber-muted flex items-center gap-1">
        Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> &amp; secure code
      </p>
    </div>
  </footer>
);

export default Footer;
