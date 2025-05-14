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
      <Navbar />
      <Hero />
      <Process />
      <Features />
      <Testimonials />
      <Blog />
    </main>
  )
}
