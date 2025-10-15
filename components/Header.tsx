'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { CVData } from '@/lib/data';

interface HeaderProps {
  data: CVData;
  locale: 'fr' | 'en';
}

export default function Header({ data }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 mb-8 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/20 to-blue-500/20 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary-500 ring-offset-4 shadow-2xl">
            <Image
              src={data.personal.photo}
              alt={data.personal.name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
          >
            {data.personal.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-primary-600 font-semibold mb-6"
          >
            {data.personal.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-gray-600"
          >
            <a
              href={`mailto:${data.personal.email}`}
              className="flex items-center gap-2 hover:text-primary-600 transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{data.personal.email}</span>
            </a>
            <a
              href={`tel:${data.personal.phone}`}
              className="flex items-center gap-2 hover:text-primary-600 transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{data.personal.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{data.personal.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
