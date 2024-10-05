// src/components/AnimatedRoutes.tsx
import { motion } from "framer-motion"
import React from "react"

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
}

const AnimatedRoutes: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedRoutes
