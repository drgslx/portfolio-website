"use client"

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { AnimatePresence } from 'framer-motion'
import { motion, useScroll } from 'framer-motion'

const MainWrapper = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div key="main-wrapper" className="  w-screen h-screen bg-gradient-to-b from-blue-100 to-green-50 flex flex-col justify-between">
      <motion.div style={{ scaleX: scrollYProgress }} />

        <div className="h-24">
          <Navbar />
        </div>

        <div className='h-[calc(100vh-6rem)]'>
          {children}
          
        </div>
        
        <div >
        
        </div>
      </div>
    </>
  )
}

export default MainWrapper