'use client';

import { motion } from 'framer-motion';
import { AnimateOnScroll } from '../../ui/motion';

export const LaunchFailSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-heading-hg max-w-[860px] mx-auto font-bold text-dark mb-6"
            >
              Transforme o lançamento do seu produto em sucesso
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Evite falhas comuns e maximize suas chances de sucesso com nossa
              expertise em go-to-market.
            </motion.p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
