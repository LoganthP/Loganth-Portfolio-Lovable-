import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee = ({ text, className = '' }: MarqueeProps) => {
  const items = Array(4).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground/5 mx-8 select-none"
          >
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground/5 mx-8 select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
