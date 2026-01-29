import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LoganthP', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/loganth-p-158667280/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/tamojikatochiri/', label: 'Instagram' },
  ];

  return (
    <footer ref={ref} className="py-32 px-4 relative border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <motion.a
                href="mailto:loganthp19@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>loganthp19@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="tel:+917013660227"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                <span>+91-7013660227</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Social links */}
            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 md:mt-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Loganth. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/50 mt-2">
                Software Developer & Cybersecurity Analyst
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
