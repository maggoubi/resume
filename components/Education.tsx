'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import type { CVData } from '@/lib/data';

interface EducationProps {
  data: CVData;
  locale: 'fr' | 'en';
}

export default function Education({ data, locale }: EducationProps) {
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
        {locale === 'fr' ? 'Formation' : 'Education'}
      </h2>

      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-500 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{edu.field}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600"
      >
        <p className="text-sm">
          {locale === 'fr'
            ? '© 2025 Mohamed AGGOUBI - Tous droits réservés'
            : '© 2025 Mohamed AGGOUBI - All rights reserved'}
        </p>
      </motion.footer>
    </motion.section>
  );
}
