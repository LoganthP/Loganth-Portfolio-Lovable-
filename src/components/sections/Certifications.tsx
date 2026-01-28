import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const certifications = [
    'Cisco Junior Cybersecurity Analyst',
    'Ethical Hacking Certification',
    'Google AI Essentials',
    'IBM AI Essentials',
    'Computer Communications Specialisation',
    'Cisco Network Technician Career Path',
    '5-Day AI Agents Intensive Course with Google',
    'Software Engineering',
    'Postman API Fundamentals Student Expert',
  ];

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications scroll */}
        <motion.div
          className="relative overflow-hidden py-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* First row - scrolling left */}
          <div className="flex gap-4 mb-4 animate-marquee">
            {[...certifications, ...certifications].map((cert, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm md:text-base whitespace-nowrap text-foreground">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Second row - scrolling right */}
          <div className="flex gap-4" style={{ animation: 'marquee 25s linear infinite reverse' }}>
            {[...certifications.reverse(), ...certifications].map((cert, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 px-6 py-4 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm md:text-base whitespace-nowrap text-foreground">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
