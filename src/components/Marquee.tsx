import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  className?: string;
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee = ({ text, className = '', direction = 'left', speed = 25 }: MarqueeProps) => {
  const items = Array(6).fill(text);
  const animationDirection = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex items-center"
        animate={{ x: animationDirection }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mx-4 select-none whitespace-nowrap"
            style={{
              WebkitTextStroke: '1px hsl(var(--primary) / 0.3)',
              color: 'transparent',
            }}
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mx-4 select-none whitespace-nowrap"
            style={{
              WebkitTextStroke: '1px hsl(var(--primary) / 0.3)',
              color: 'transparent',
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
