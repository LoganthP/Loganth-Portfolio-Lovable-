import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'LRDE-DRDO Internship',
      subtitle: 'Data Processing & Radar Systems',
      date: 'Jul 2025 - Aug 2025',
      description: 'Working on advanced radar systems and data processing techniques at the prestigious Defence Research and Development Organisation.',
      tags: ['Data Processing', 'Radar Systems', 'Research'],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.Tech Computer Science & Engineering',
      subtitle: 'Vidyavardhaka College of Engineering (VVCE)',
      date: '2023 - 2027',
      description: 'Pursuing Bachelor of Technology with focus on software development, AI/ML, and cybersecurity.',
      tags: ['Computer Science', 'Engineering'],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Intermediate Education (MPC)',
      subtitle: 'Sri Chaitanya College of Education',
      date: '2021 - 2023',
      description: 'Completed intermediate education with Mathematics, Physics, and Chemistry.',
      tags: ['Mathematics', 'Physics', 'Chemistry'],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative flex items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-effect hidden md:block" />
              
              {/* Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <motion.div
                  className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm card-glow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wide uppercase">
                      {item.type === 'work' ? 'Experience' : 'Education'}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                  <p className="text-muted-foreground/70 text-sm mb-4">{item.date}</p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
