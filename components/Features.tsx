'use client'

import { motion } from 'framer-motion'

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowStyle: string;
  delay: number;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  glowStyle, 
  delay, 
  className = "",
  children 
}: FeatureCardProps) => {
  return (
    <motion.div 
      className={`feature-card p-8 h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="feature-glow-blob"></div>
      <div className="mb-6">
        <div className={`feature-icon ${glowStyle}`}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Core Features To Manage{" "}
          <span className="block mt-2 customers-gradient-text">Customers</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis ante eu sem 
          tempus, eleifend sollicitudin felis cursus. Praesent non ante vitae.
        </motion.p>
      </div>
      
      {/* Bento box layout with specific grid positions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Top row - equal sized cards */}
        <FeatureCard
          icon={<FunnelIcon />}
          title="Funnel Method"
          description="Lorem ipsum dolor sit amet,"
          glowStyle="feature-icon-purple"
          delay={0.1}
        />
        
        <FeatureCard
          icon={<LightningIcon />}
          title="Fast & Secure"
          description="Lorem ipsum dolor sit amet,"
          glowStyle="feature-icon-blue"
          delay={0.2}
        />
        
        <FeatureCard
          icon={<ShieldIcon />}
          title="Secure Data"
          description="Lorem ipsum dolor sit amet,"
          glowStyle="feature-icon-purple"
          delay={0.3}
        />
        
        {/* Bottom row - bento box layout */}
        <FeatureCard
          icon={<FingerprintIcon />}
          title="Control & Manage"
          description="Lorem ipsum dolor sit amet,"
          glowStyle="feature-icon-pink"
          delay={0.4}
          className="md:col-span-1"
        >
          <div className="bg-[#12061d] rounded-xl p-4">
            <h4 className="text-pink-500 font-medium mb-1 text-sm">Control card security</h4>
            <h5 className="text-white mb-2 text-sm">in-app with a tap</h5>
            <p className="text-gray-400 text-xs mb-3">Discover our cards benefits, with one tap.</p>
            <div className="mt-3 text-xs inline-block text-gray-300 border-b border-gray-700 pb-1">
              Cards
            </div>
          </div>
        </FeatureCard>
        
        <FeatureCard
          icon={<ChartIcon />}
          title="Data Management"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          glowStyle="feature-icon-blue"
          delay={0.5}
          className="md:col-span-1 lg:col-span-1"
        >
          <div className="bg-[#12061d] rounded-xl p-4 overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs text-gray-400">This month</div>
              <div className="text-xs">📊</div>
            </div>
            
            <div className="mb-2">
              <div className="text-2xl font-semibold">$37.5K</div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400">Total Spent</span>
                <span className="text-green-500">↑ 22.4%</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-xs mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-300">On track</span>
            </div>
            
            <div className="w-full h-20 relative mt-4">
              <ChartGraph />
            </div>
          </div>
        </FeatureCard>
        
        <FeatureCard
          icon={<TeamIcon />}
          title="Collaborate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing"
          glowStyle="feature-icon-purple"
          delay={0.6}
          className="md:col-span-1"
        >
          <div className="bg-[#12061d] rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs text-gray-300">Team members</div>
              <div className="text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
            
            <TeamMembersList />
          </div>
        </FeatureCard>
      </div>
    </section>
  )
}

// Icon Components with enhanced styling
function FunnelIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L6 10H18L12 16Z" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

function LightningIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10H20L11 23V14H4L13 1V10Z" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

function ShieldIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

function FingerprintIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14,2C8.48,2,4,6.48,4,12c0,5.52,4.48,10,10,10s10-4.48,10-10C24,6.48,19.52,2,14,2z M14,9c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3S15.66,9,14,9z" fill="#FF47A5" />
      </svg>
    </div>
  )
}

function ChartIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21H3V3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 9L15 15L9 9L3 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function TeamIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17788 19.0078 7.005C19.0078 8.83212 17.7699 10.4268 16 10.88" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function ChartGraph() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
      <path 
        d="M0,50 C30,40 60,80 100,50 C140,20 180,60 220,40 C260,20 300,30 340,15 C380,0 400,10 400,30" 
        stroke="#A855F7" 
        strokeWidth="2" 
        fill="none" 
      />
      <path 
        d="M0,70 C30,65 60,90 100,70 C140,50 180,80 220,60 C260,40 300,50 340,35 C380,20 400,30 400,50" 
        stroke="#3B82F6" 
        strokeWidth="2" 
        fill="none" 
      />
    </svg>
  )
}

function TeamMembersList() {
  const members = [
    { name: "Adela Parkson", role: "Creative Director", img: "/team1.png" },
    { name: "Christian Mad", role: "Product Designer", img: "/team2.png" },
    { name: "Jason Statham", role: "VP of User Experience", img: "/team3.png" }
  ];
  
  return (
    <div className="space-y-3">
      {members.map((member, index) => (
        <div key={index} className="flex items-center gap-3 p-2 bg-[#1a0e28] rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden">
            {/* Using a colored circle as placeholder */}
          </div>
          <div className="flex-1">
            <div className="text-white text-xs font-medium">{member.name}</div>
            <div className="text-gray-400 text-xs">{member.role}</div>
          </div>
          <div className="text-xs flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
