import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
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
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        
        <p className="text-gray-300 mb-8 text-lg">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-8">
          {[
            { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <social.icon size={24} />
              <span className="text-sm">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}