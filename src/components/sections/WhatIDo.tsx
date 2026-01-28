import { motion } from 'framer-motion';
import { Code2, Shield, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

const WhatIDo = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const cards = [
    {
      id: 'develop',
      icon: Code2,
      title: 'DEVELOP',
      subtitle: 'Building Digital Experiences',
      description: 'Full-stack development with a focus on AI/ML applications, creating scalable and performant solutions.',
      skills: [
        { category: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript'] },
        { category: 'Web', items: ['HTML', 'CSS', 'React', 'Node.js'] },
        { category: 'AI/ML', items: ['TensorFlow', 'Deep Learning', 'Computer Vision'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'SQL', 'Postman'] },
      ],
    },
    {
      id: 'secure',
      icon: Shield,
      title: 'SECURE',
      subtitle: 'Protecting Digital Assets',
      description: 'Cybersecurity analysis with expertise in network security, ethical hacking, and vulnerability assessment.',
      skills: [
        { category: 'Security', items: ['Network Analysis', 'Ethical Hacking', 'Cryptography'] },
        { category: 'Tools', items: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit'] },
        { category: 'Protocols', items: ['TCP/IP', 'DNS', 'HTTPS', 'SSL/TLS'] },
        { category: 'Systems', items: ['Linux', 'Windows Server', 'Firewalls'] },
      ],
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
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Two Sides of the{' '}
            <span className="text-gradient">Same Coin</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden cursor-pointer card-glow ${
                expandedCard === card.id ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
              layout
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              
              <div className="relative p-8 md:p-12">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <card.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.subtitle}</p>
                <p className="text-muted-foreground/80 mb-6">{card.description}</p>

                {/* Expand indicator */}
                <motion.div
                  className="flex items-center gap-2 text-primary text-sm"
                  animate={{ x: expandedCard === card.id ? 0 : [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: expandedCard === card.id ? 0 : Infinity }}
                >
                  <span>{expandedCard === card.id ? 'Click to collapse' : 'Click to explore'}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedCard === card.id ? 'rotate-90' : ''
                    }`}
                  />
                </motion.div>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCard === card.id ? 'auto' : 0,
                    opacity: expandedCard === card.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 mt-8 border-t border-border/30 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {card.skills.map((skillGroup) => (
                      <div key={skillGroup.category}>
                        <h4 className="text-sm font-semibold text-primary mb-3">
                          {skillGroup.category}
                        </h4>
                        <ul className="space-y-2">
                          {skillGroup.items.map((skill) => (
                            <li
                              key={skill}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
