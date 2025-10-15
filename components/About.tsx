'use client';

import { motion } from 'framer-motion';
import type { CVData } from '@/lib/data';

interface AboutProps {
  data: CVData;
  locale: 'fr' | 'en';
}

export default function About({ data, locale }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-primary-500 rounded-full" />
        {locale === 'fr' ? 'À propos' : 'About'}
      </h2>
      <p className="text-gray-700 leading-relaxed text-lg">{data.about}</p>
    </motion.section>
  );
}
