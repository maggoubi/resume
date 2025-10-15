'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Calendar, Wrench, CheckCircle2 } from 'lucide-react';
import type { CVData } from '@/lib/data';

interface ProjectsProps {
  data: CVData;
  locale: 'fr' | 'en';
}

export default function Projects({ data, locale }: ProjectsProps) {
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
        {locale === 'fr' ? 'Projets Significatifs' : 'Significant Projects'}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-primary-500 rounded-lg">
                <FolderGit2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-3 font-semibold">{project.description}</p>

            <div className="mb-4">
              <div className="flex items-start gap-2 text-sm">
                <Wrench className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">{project.technologies}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-primary-500 mt-1">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {project.result && (
              <div className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-semibold text-green-800">{project.result}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
