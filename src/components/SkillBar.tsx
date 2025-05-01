import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'primary', 
  delay = 0 
}) => {
  const colorClasses = {
    primary: 'bg-primary-500 dark:bg-primary-600',
    secondary: 'bg-secondary-500 dark:bg-secondary-600',
    accent: 'bg-accent-500 dark:bg-accent-600',
  };
  
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</h3>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;