import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'AWS', level: 70 },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Skills
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-300 w-24">{skill.name}</span>
                <div className="flex-1 bg-gray-700 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
                  />
                </div>
                <span className="text-gray-400 w-12">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}