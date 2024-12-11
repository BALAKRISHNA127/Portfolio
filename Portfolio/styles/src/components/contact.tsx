import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin} from 'lucide-react';

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
            { icon: Mail, href: 'narendrareddyvennapusa20@gmail.com', label: 'Email' },
            { icon: Github, href: 'https://github.com/VNReddy-20', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/narendra-reddy-vennapusa-673a3728b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkev%2BVnRSRxCQosavlxP5hQ%3D%3D', label: 'LinkedIn' },
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
