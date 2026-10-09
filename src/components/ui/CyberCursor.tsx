import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CyberCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop / pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('role') === 'button';
        setIsHovering(Boolean(isClickable));
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {/* Outer Cyber Ring */}
      <motion.div
        animate={{
          x: pos.x - (isHovering ? 20 : 14),
          y: pos.y - (isHovering ? 20 : 14),
          width: isHovering ? 40 : 28,
          height: isHovering ? 40 : 28,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovering ? '#00ffd5' : 'rgba(0, 255, 213, 0.4)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 350, mass: 0.2 }}
        className="fixed rounded-full border border-dashed shadow-[0_0_15px_rgba(0,255,213,0.3)] pointer-events-none"
      />

      {/* Center Target Dot */}
      <motion.div
        animate={{
          x: pos.x - 2.5,
          y: pos.y - 2.5,
          scale: isClicking ? 1.8 : isHovering ? 1.4 : 1,
          backgroundColor: isHovering ? '#b537f2' : '#00ffd5',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 600, mass: 0.1 }}
        className="fixed w-[5px] h-[5px] rounded-full pointer-events-none shadow-[0_0_8px_#00ffd5]"
      />
    </div>
  );
};

export default CyberCursor;
