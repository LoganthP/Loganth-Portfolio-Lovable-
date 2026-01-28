import { motion } from 'framer-motion';
import { ExternalLink, Github, MapPin, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      id: 1,
      title: 'Terralens',
      subtitle: 'AI Geospatial Platform',
      description: 'An advanced geospatial analysis platform leveraging deep learning for satellite imagery processing. Enables intelligent terrain analysis and environmental monitoring.',
      icon: MapPin,
      tags: ['Deep Learning', 'Satellite Imagery', 'Python', 'TensorFlow', 'Computer Vision'],
      color: 'from-primary to-secondary',
      github: 'https://github.com/LoganthP',
    },
    {
      id: 2,
      title: 'EarVan',
      subtitle: 'Assistive Audio Intelligence',
      description: 'Real-time audio processing system designed for assistive technology. Uses AI to enhance audio accessibility for users with hearing impairments.',
      icon: Headphones,
      tags: ['Real-time Processing', 'AI', 'Audio', 'Python', 'Machine Learning'],
      color: 'from-secondary to-accent',
      github: 'https://github.com/LoganthP',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />

              <div className="relative p-8 md:p-10">
                {/* Icon and links */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <project.icon className="w-7 h-7 text-background" />
                  </motion.div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/LoganthP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>View all projects on GitHub</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
