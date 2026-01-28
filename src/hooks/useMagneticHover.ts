import { useRef, useState, useCallback } from 'react';

interface MagneticState {
  x: number;
  y: number;
}

export function useMagneticHover<T extends HTMLElement = HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<MagneticState>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    position,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}

export function useHoverGlow() {
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });
  }, []);

  return {
    glowPosition,
    handlers: {
      onMouseMove: handleMouseMove,
    },
  };
}
