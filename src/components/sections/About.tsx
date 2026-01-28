import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {/* Section label */}
          <motion.span
            className="text-primary text-sm tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.span>

          {/* Main heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I bridge the gap between{' '}
            <span className="text-gradient">creating</span> and{' '}
            <span className="text-gradient">securing</span> digital solutions.
          </motion.h2>

          {/* Description */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a passionate developer and cybersecurity enthusiast, I combine creative 
              problem-solving with security-first thinking. Currently pursuing B.Tech in 
              Computer Science & Engineering at VVCE, I specialize in building robust 
              applications while ensuring they remain protected against modern threats.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from developing AI-powered geospatial platforms to analyzing 
              network security protocols. I believe that great software isn't just about 
              functionality—it's about building trust through security. Every line of code 
              I write considers both user experience and potential vulnerabilities.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: '2+', label: 'Years Coding' },
              { value: '10+', label: 'Projects Built' },
              { value: '8+', label: 'Certifications' },
              { value: '3rd', label: 'Hackathon Place' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-gradient block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
