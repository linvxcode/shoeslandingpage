'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from '@/common/component/element/Image'
const MotionImg = () => {
  return (
    <motion.div 
    initial={{translateY: -80, rotate: 20, opacity: 0}}
    animate={{translateY: 0, opacity:1,rotate: 0,  transition:{type: 'spring', duration: 1, stiffness: 100}}}
    viewport={{once:true}}
    >
    <Image
      src="/img/pngwing1.png"
      alt="shoes"
      width={640}
      className=""
      height={481}
      priority
      />
      </motion.div>
  )
}

export default MotionImg
