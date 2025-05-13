'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Using AI-Generated Content from Our SAAS for Better Marketing",
    date: "March 8, 2025",
    image: "/blog-abstract-1.jpg",
    slug: "#"
  },
  {
    id: 2,
    title: "How Our AI Software Revolutionizes Your Content Marketing",
    date: "March 8, 2025",
    image: "/blog-abstract-2.jpg",
    slug: "#"
  },
  {
    id: 3,
    title: "Crafting Compelling Content with Our SAAS AI Software",
    date: "March 8, 2025",
    image: "/blog-abstract-3.jpg",
    slug: "#"
  }
];

export default function Blog() {
  return (
    <section className="section-container py-28 blog-section">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold">
          Insights And Innovations The
          <span className="block mt-3 customers-gradient-text">Official Articles.</span>
        </h2>
        
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Simplify your financial life. Our intuitive app makes managing your money effortless.
          Experience the peace of mind.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="blog-image-container mb-6">
              <Image 
                src={post.image} 
                alt={post.title}
                width={400}
                height={300}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="px-1">
              <p className="text-gray-400 text-sm mb-3">{post.date}</p>
              <h3 className="text-white text-xl font-semibold mb-4 line-clamp-2">
                {post.title}
              </h3>
              
              <Link 
                href={post.slug} 
                className="text-white inline-flex items-center group"
              >
                <span>Learn more</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
