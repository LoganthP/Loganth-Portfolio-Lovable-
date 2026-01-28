import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const technologies = [
    { name: 'Python', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'C++', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'SQL', category: 'Database' },
    { name: 'Linux', category: 'Systems' },
    { name: 'Postman', category: 'Tools' },
    { name: 'Wireshark', category: 'Security' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Technologies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <span className="text-lg font-medium text-foreground group-hover:text-gradient transition-all duration-300">
                  {tech.name}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
