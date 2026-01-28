import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const achievements = [
    {
      icon: Trophy,
      title: '3rd Place',
      subtitle: 'GLYTCH National Hackathon',
      description: 'VIT Chennai - Competed against top talent nationwide',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Star,
      title: 'Google Arcade Novice Tier',
      subtitle: '2025',
      description: 'Achieved Novice tier in Google Cloud skills program',
      color: 'from-primary to-secondary',
    },
    {
      icon: Award,
      title: 'Google Arcade Legend Tier',
      subtitle: '2026',
      description: 'Achieved Legend tier demonstrating advanced cloud expertise',
      color: 'from-secondary to-accent',
    },
  ];

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
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-gradient">Achievements</span> & Awards
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`} />
              
              <div className="p-8 text-center">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <achievement.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-1">{achievement.title}</h3>
                <p className="text-primary text-sm mb-3">{achievement.subtitle}</p>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
