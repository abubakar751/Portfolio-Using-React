import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centerAlign?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centerAlign = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centerAlign ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-20 bg-primary-600 dark:bg-primary-500 rounded mt-4 ${centerAlign ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;