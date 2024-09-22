import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 border border dark:border-[#111111] rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4">
          Next.js Starter Kit
        </h1>
        <p className="text-xl mb-6">
          Created by Sabari
        </p>
        <button className="font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center mx-auto hover:bg-slate-100 dark:hover:bg-[#111111]">
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  )
}
