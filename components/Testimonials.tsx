'use client'

import { motion } from 'framer-motion'

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Esther Howard",
    date: "Jan 4 2023",
    company: "Doc Ricardo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
    avatar: "/avatar1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Esther Howard",
    date: "Jan 4 2023",
    company: "Doc Ricardo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. mollit anim id est laborum.",
    avatar: "/avatar2.png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Esther Howard",
    date: "Jan 4 2023",
    company: "Doc Ricardo",
    featured: true,
    text: "Comics has been increasing my sales volumn like crazy",
    avatar: "/avatar3.png", // Replace with actual image path
    image: "/featured-testimonial.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Esther Howard",
    date: "Jan 4 2023",
    company: "Doc Ricardo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. mollit anim id est laborum.",
    avatar: "/avatar4.png", // Replace with actual image path
  },
  {
    id: 5,
    name: "Esther Howard",
    date: "Jan 4 2023",
    company: "Doc Ricardo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    avatar: "/avatar5.png", // Replace with actual image path
  },
];

// Sample data for social proof
const userAvatars = ["/user1.png", "/user2.png", "/user3.png", "/user4.png", "/user5.png"];

export default function Testimonials() {
  return (
    <section className="section-container py-28">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold">
          See How We Have
          <span className="block mt-3 customers-gradient-text">Helped Others.</span>
        </h2>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`testimonial-card ${testimonial.featured ? 'featured-testimonial' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            {/* User info */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500">
                {/* Avatar placeholder - replace with Image component if you have actual images */}
              </div>
              <div className="ml-3">
                <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">{testimonial.date} • {testimonial.company}</p>
              </div>
            </div>

            {/* Testimonial content */}
            {testimonial.featured ? (
              <div className="mt-4 relative overflow-hidden rounded-xl">
                <div className="featured-image-container">
                  {/* Replace with actual Image component */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-xl font-medium">"{testimonial.text}"</p>
                  </div>
                </div>

                {/* Social proof */}
                <div className="absolute bottom-3 left-8 right-8 flex items-center">
                  <div className="flex -space-x-2">
                    {userAvatars.map((avatar, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-br from-purple-500 to-pink-500"
                      ></div>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-white">+3 million users enjoy Comics</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
