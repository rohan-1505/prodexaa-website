'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  PenTool,
  Cloud,
  Zap,
  Shield,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with the latest technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure and deployment services.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization services to ensure lightning-fast application performance.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security solutions to protect your digital assets.',
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
