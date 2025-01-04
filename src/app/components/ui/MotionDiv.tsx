'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

type Direction = 'left' | 'right' | 'up' | 'down'

interface MotionDivProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

export const MotionDiv = ({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: MotionDivProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false) // État pour suivre si l'animation a eu lieu
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    amount: 0.25,
    once: false, // L'animation peut se déclencher plusieurs fois, mais nous la gérerons nous-mêmes
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Vérification initiale
    checkMobile()

    // Debounce pour la performance
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const getInitialPosition = () => {
    if (isMobile) {
      return { y: 100, opacity: 0 }
    }

    switch (direction) {
      case 'left':
        return { x: -50, opacity: 0 }
      case 'right':
        return { x: 50, opacity: 0 }
      case 'up':
        return { y: 50, opacity: 0 }
      case 'down':
        return { y: -50, opacity: 0 }
      default:
        return { x: 0, opacity: 0 }
    }
  }

  // Déclencher l'animation une seule fois lorsque l'élément devient visible
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true) // Marquer l'élément comme ayant animé
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={hasAnimated ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()} // Ne revient pas à la position initiale après animation
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
