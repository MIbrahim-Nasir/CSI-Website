'use client'

import { useEffect, useState, useRef } from 'react'

type Star = {
  id: number
  left: string
  top: string
  size: 'small' | 'big'
  duration: string
  delay: string
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [visible, setVisible] = useState(true)
  const starsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Generate stars only on the client side after hydration
    const generatedStars: Star[] = []
    
    for (let i = 0; i < 120; i++) {
      generatedStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() > 0.8 ? 'big' : 'small',
        duration: `${2 + Math.random() * 3}s`,
        delay: `${Math.random() * 5}s`
      })
    }
    
    setStars(generatedStars)
    
    // Add scroll listener to fade out stars when scrolling past hero section
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = window.innerHeight * 0.6 // Start fading when scrolled ~60% of viewport height
      
      if (scrollY > threshold && visible) {
        setVisible(false)
      } else if (scrollY <= threshold && !visible) {
        setVisible(true)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  return (
    <div className="main-bg">
      <div 
        ref={starsRef} 
        className={`stars-container ${!visible ? 'fade-out-stars' : ''}`}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.size === 'big' ? 'bigger-star' : ''}`}
            style={{
              left: star.left,
              top: star.top,
              animation: `twinkle ${star.duration} infinite ${star.delay}`
            }}
          />
        ))}
      </div>
    </div>
  )
}
