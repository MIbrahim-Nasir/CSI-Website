"use client"

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Navbar />
      </div>
      
      <Hero />
      <Process />
      <Features />
      <Testimonials />
      <Blog />
    </main>
  )
}
