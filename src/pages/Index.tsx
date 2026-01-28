import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/sections/About';
import WhatIDo from '@/components/sections/WhatIDo';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Hero />
        
        {/* Marquee divider */}
        <div className="py-12 border-y border-border/20 overflow-hidden bg-card/20">
          <Marquee text="DEVELOPER • SECURITY ANALYST • CREATIVE • INNOVATOR •" speed={30} />
        </div>
        
        <About />
        <WhatIDo />
        
        {/* Second marquee - reversed direction */}
        <div className="py-12 border-y border-border/20 overflow-hidden bg-card/20">
          <Marquee text="BUILD • PROTECT • INNOVATE • SECURE • CREATE •" direction="right" speed={35} />
        </div>
        
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <TechStack />
        <Contact />
      </main>
    </>
  );
};

export default Index;
