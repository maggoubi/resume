'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import type { CVData } from '@/lib/data';

interface ExperienceProps {
  data: CVData;
  locale: 'fr' | 'en';
}

export default function Experience({ data, locale }: ExperienceProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-primary-500 rounded-full" />
        {locale === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
      </h2>

      <div className="space-y-8">
        {data.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 border-l-2 border-primary-200 hover:border-primary-500 transition-colors"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full ring-4 ring-white shadow-lg" />

            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
