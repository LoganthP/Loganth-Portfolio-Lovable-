import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 300);
          setTimeout(onComplete, 800);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Split name for letter animation
  const nameLetters = ['L', 'O', 'G', 'A', 'N', 'T', 'H'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
        >
          {/* Background glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px]"
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.2, 0.5, 0.2],
                x: [0, 50, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]"
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Animated grid lines */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Logo/Name with letter animation */}
          <motion.div
            className="relative z-10 mb-12 perspective-1000"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter ${
                    index === 0 ? 'text-gradient' : 'text-foreground'
                  }`}
                  variants={letterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Subtitle with typewriter effect */}
          <motion.div
            className="overflow-hidden mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.p
              className="text-muted-foreground text-lg md:text-xl tracking-wide"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              Software Developer • Cybersecurity Analyst
            </motion.p>
          </motion.div>

          {/* Progress bar with glow */}
          <div className="relative w-64 md:w-80">
            <div className="h-[2px] w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
            
            {/* Glow under progress bar */}
            <motion.div
              className="absolute -bottom-2 left-0 h-4 bg-primary/30 blur-md rounded-full"
              style={{ width: `${progress}%` }}
            />
            
            {/* Percentage */}
            <motion.div
              className="absolute -bottom-10 left-0 right-0 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-mono text-primary tabular-nums">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
