import { skills } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SkillsIcons = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Animation variants for each skill item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-[rgba(12,14,35,1)] rounded-xl">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src={skill.icon}
                alt={skill.label}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 text-center">
              {skill.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsIcons