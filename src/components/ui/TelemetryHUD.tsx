import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Activity, Lock } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface TelemetryHUDProps {
  onOpenCommandPalette: () => void;
}

export const TelemetryHUD = ({
  onOpenCommandPalette,
}: TelemetryHUDProps) => {
  const [audioActive, setAudioActive] = useState(sounds.isEnabled());
  const [latency, setLatency] = useState(14);
  const [cipherTicker, setCipherTicker] = useState('PAILLIER-3072 / AES-256');

  useEffect(() => {
    const latInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 10);
    }, 4000);

    const ciphers = [
      'PAILLIER-3072 / HOMOMORPHIC',
      'VECTOR-SHIELD / L0-L5 ACTIVE',
      'AST-GUARD / READ-ONLY ENFORCED',
      'AES-256-GCM / INTEGRITY OK',
    ];
    let idx = 0;
    const cipherInterval = setInterval(() => {
      idx = (idx + 1) % ciphers.length;
      setCipherTicker(ciphers[idx]);
    }, 5000);

    return () => {
      clearInterval(latInterval);
      clearInterval(cipherInterval);
    };
  }, []);

  const handleToggleSound = () => {
    const newState = sounds.toggle();
    setAudioActive(newState);
  };

  return (
    <aside
      aria-label="Security Telemetry HUD"
      className="hidden lg:flex fixed bottom-3 left-1/2 -translate-x-1/2 z-40 items-center gap-3 px-4 py-2 bg-cyber-dark/90 backdrop-blur-md border border-cyber-cyan/30 rounded-full shadow-[0_0_20px_rgba(0,255,213,0.12)] text-xs font-mono"
    >
      <div className="flex items-center gap-1.5 text-cyber-green">
        <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
        <span className="font-semibold tracking-wider">DEFENSE_ACTIVE</span>
      </div>

      <div className="w-px h-3.5 bg-cyber-border" />

      <div className="flex items-center gap-1.5 text-cyber-cyan">
        <Lock className="w-3.5 h-3.5" />
        <span className="text-[11px] tracking-wide text-cyber-text/80">{cipherTicker}</span>
      </div>

      <div className="w-px h-3.5 bg-cyber-border" />

      <div className="flex items-center gap-1.5 text-cyber-muted">
        <Activity className="w-3.5 h-3.5 text-cyber-cyan" />
        <span>{latency}ms</span>
      </div>

      <div className="w-px h-3.5 bg-cyber-border" />

      {/* Command Palette button */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenCommandPalette();
        }}
        className="btn-cyber-primary flex items-center gap-1.5 px-3 py-1 rounded text-[11px]"
        title="Open Security Command Console (Ctrl+K)"
      >
        <Terminal className="w-3 h-3" />
        <span>Ctrl+K</span>
      </button>

      {/* Audio toggle */}
      <button
        onClick={handleToggleSound}
        className={`p-1 rounded transition-colors ${
          audioActive ? 'text-cyber-cyan hover:text-white' : 'text-cyber-muted hover:text-white'
        }`}
        title={audioActive ? 'Mute Cyber Audio Effects' : 'Enable Cyber Audio Effects'}
      >
        {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
      </button>
    </aside>
  );
};

export default TelemetryHUD;
