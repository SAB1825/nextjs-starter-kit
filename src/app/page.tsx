"use client"
import { ArrowRight, Code, Database, Lock, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Lock className="mb-4" size={32} />, title: 'Clerk Authentication', description: 'Secure and customizable authentication system' },
    { icon: <Database className="mb-4" size={32} />, title: 'MongoDB & Prisma', description: 'Powerful database solution with ORM' },
    { icon: <Code className="mb-4" size={32} />, title: 'Next.js API Routes', description: 'Built-in API solution for seamless integration' },
    { icon: <Zap className="mb-4" size={32} />, title: 'Fast Development', description: 'Optimized workflow for rapid prototyping' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br  dark:bg-black  text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Next.js Starter Kit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Accelerate your development with our powerful and flexible Next.js starter kit.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <Link href="/docs">
              <motion.button
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Documentation
                <motion.div
                  className="ml-2"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}