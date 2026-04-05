import React, { useState, useEffect, useRef } from 'react';
import AnimatedHeading from './AnimatedHeading';

const SkillCircle = ({ targetPercentage, label, delay }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = targetPercentage / (duration / 16); 
      
      const timeoutId = setTimeout(() => {
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetPercentage) {
            setPercentage(targetPercentage);
            clearInterval(timer);
          } else {
            setPercentage(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }, delay);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, targetPercentage, delay]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center" ref={circleRef}>
      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle 
            cx="80" 
            cy="80" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="transparent" 
            className="text-slate-800"
          />
          {/* Progress circle */}
          <circle 
            cx="80" 
            cy="80" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="transparent" 
            className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300 ease-out"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex items-baseline">
          <span className="text-4xl font-black text-white">{percentage}</span>
          <span className="text-xl text-indigo-400 ml-1">%</span>
        </div>
      </div>
      <span className="text-xl font-medium tracking-wide text-slate-300">{label}</span>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { target: 85, label: 'Leadership', delay: 0 },
    { target: 95, label: 'React/Tailwind', delay: 150 },
    { target: 80, label: 'MySQL', delay: 300 },
    { target: 90, label: 'UX/UI Design', delay: 450 },
    { target: 85, label: 'Strategic Thinking', delay: 600 },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="absolute inset-0 bg-[url('/images/profile.jpg')] opacity-10 bg-cover bg-fixed bg-center filter grayscale"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <AnimatedHeading className="text-4xl md:text-5xl font-black mb-4 mx-auto inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            My Skills
          </AnimatedHeading>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillCircle 
              key={index} 
              targetPercentage={skill.target} 
              label={skill.label} 
              delay={skill.delay} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
