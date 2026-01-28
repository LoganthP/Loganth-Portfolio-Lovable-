import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { useMagneticHover } from '@/hooks/useMagneticHover';

const MagneticButton = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => {
  const { ref, position, handlers } = useMagneticHover<HTMLAnchorElement>(0.4);
  
  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-4 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 bg-card/20 backdrop-blur-sm transition-colors duration-300 group"
      style={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      {...handlers}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/LoganthP', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/loganth-p-158667280/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/tamojikatochiri/', label: 'Instagram' },
  ];

  const name = 'LOGANTH';

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[150px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, -50, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated name with 3D effect */}
        <motion.div 
          className="mb-8 overflow-hidden perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex justify-center items-center">
            {name.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter inline-block ${
                  i === 0 ? 'text-gradient' : 'text-foreground'
                }`}
                whileHover={{ 
                  scale: 1.1, 
                  color: 'hsl(var(--primary))',
                  transition: { duration: 0.2 } 
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated line */}
        <motion.div
          className="w-24 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        />

        {/* Subtitle with fade-up */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 tracking-wide font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Software Developer & Cybersecurity Analyst
        </motion.p>

        {/* Location */}
        <motion.p
          className="text-sm text-muted-foreground/60 mb-16 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Based in India
        </motion.p>

        {/* Social links with magnetic effect */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label} href={href} label={label}>
              <Icon size={24} />
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground/50 cursor-pointer hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-light">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-current"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
