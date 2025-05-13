import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="relative z-10 px-4 pt-20 pb-32 mx-auto text-center max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="inline-block mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="px-6 py-2 rounded-full announcement-pill text-gray-300 text-sm">
          Announcing our $1.4M Fundraise
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-6xl md:text-7xl font-bold mb-2 tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Elevate Sales With
      </motion.h1>
      
      <motion.h2 
        className="text-6xl md:text-7xl font-bold mb-10 gradient-text tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Seamless Management.
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus. Praesent non ante vitae turpis.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Button asChild className="hero-gradient-button inline-flex items-center px-8 py-3.5 rounded-full text-white">
          <Link href="#">
            <span className="mr-2">Get started</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  )
}
