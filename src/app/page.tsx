"use client"
import { ArrowRight, Code, Database, Lock, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Lock className="mb-2" size={24} />, title: 'Clerk Authentication', description: 'Custom UI for secure auth' },
    { icon: <Database className="mb-2" size={24} />, title: 'MongoDB & Prisma', description: 'Robust data management' },
    { icon: <Code className="mb-2" size={24} />, title: 'Next.js API Routes', description: 'Seamless API integration' },
    { icon: <Zap className="mb-2" size={24} />, title: 'Fast Development', description: 'Optimized for quick setup' },
  ]

  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xl max-w-4xl w-full mx-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Next.js Starter Kit
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Kickstart your project with our powerful and flexible Next.js starter kit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              {feature.icon}
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <Link href="/docs">
          <button
            className="font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Explore Docs
            <ArrowRight className={`ml-2 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} size={20} />
          </button>
        </Link>
      </div>
    </section>
  )
}