'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass rounded-2xl p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Schedule a Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="btn-outline">View Case Studies</button>
          </div>
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or reach out directly at:
            </p>
            <a
              href="mailto:hello@prodexaa.com"
              className="text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              hello@prodexaa.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
