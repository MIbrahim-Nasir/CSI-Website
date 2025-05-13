'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Process() {
  const [activeTab, setActiveTab] = useState("analytics-reporting")
  
  return (
    <section className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side content */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Our Working <span className="process-gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg mb-14 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam mollis ante eu sem tempus, eleifend sollicitudin felis cursus.
          </p>

          {/* Tab navigation - glassmorphic */}
          <div className="tabs-container mb-12">
            <div className="tab-list">
              <button 
                onClick={() => setActiveTab("data-management")}
                className={`tab-item ${activeTab === "data-management" ? "active" : ""}`}
              >
                Data Management
              </button>
              <button 
                onClick={() => setActiveTab("user-authentication")}
                className={`tab-item ${activeTab === "user-authentication" ? "active" : ""}`}
              >
                User Authentication
              </button>
              <button 
                onClick={() => setActiveTab("analytics-reporting")}
                className={`tab-item ${activeTab === "analytics-reporting" ? "active" : ""}`}
              >
                Analytics Reporting
              </button>
            </div>
          </div>
            
          {/* Content for selected tab */}
          {activeTab === "data-management" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="data-management"
              className="tab-content"
            >
              <h3 className="text-4xl font-bold mb-6">
                Drive Consistency And Improvement.
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nam mollis ante eu sem tempus, 
                eleifend sollicitudin felis cursus.
              </p>
              
              <Link href="#" className="get-started-btn">
                <div className="icon-gradient rounded-full w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Get started</span>
              </Link>
            </motion.div>
          )}
          
          {activeTab === "user-authentication" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="user-authentication"
              className="tab-content"
            >
              <h3 className="text-4xl font-bold mb-6">
                Secure User Authentication.
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nam mollis ante eu sem tempus, 
                eleifend sollicitudin felis cursus.
              </p>
              
              <Link href="#" className="get-started-btn">
                <div className="icon-gradient rounded-full w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Get started</span>
              </Link>
            </motion.div>
          )}
          
          {activeTab === "analytics-reporting" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key="analytics-reporting"
              className="tab-content"
            >
              <h3 className="text-4xl font-bold mb-6">
                Data-Driven Insights.
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-lg">
                Turn your data into actionable insights with our
                comprehensive analytics reporting. Make informed
                decisions with real-time dashboards.
              </p>
              
              <Link href="#" className="get-started-btn">
                <div className="icon-gradient rounded-full w-10 h-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Get started</span>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Right side image */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="phone-glow"></div>
          <div className="relative max-w-sm">
            {/* iPhone mockup */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-black relative">
              {/* iPhone notch */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-center">
                <div className="w-32 h-6 bg-black rounded-b-xl"></div>
              </div>
              
              {/* Phone screen content */}
              <div className="pt-8 pb-4 bg-gradient-to-b from-purple-900 to-purple-950">
                <div className="text-center pt-10 pb-24 px-4">
                  <h3 className="text-3xl font-bold mb-2 process-gradient-text">
                    Manage Your
                  </h3>
                  <h3 className="text-3xl font-bold process-gradient-text">
                    Finance
                  </h3>
                  
                  {/* 3D statue with dollar glasses */}
                  <div className="mt-6 relative">
                    <img src="https://placehold.co/200x200/3D1768/FFFFFF?text=$" alt="Finance Icon" className="mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
