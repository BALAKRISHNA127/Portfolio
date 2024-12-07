import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          John Doe
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Passionate about creating beautiful and functional web applications.
          Specialized in React, Node.js, and modern web technologies.
        </p>
        
        <div className="flex gap-6 justify-center mt-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:your.email@example.com"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
}