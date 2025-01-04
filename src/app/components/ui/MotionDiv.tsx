'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

type Direction = 'left' | 'right' | 'up' | 'down' | 'center'

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
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    amount: 0.25,
    once: false,
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)

    checkMobile()

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
      return direction === 'center'
        ? { scale: 0.2, opacity: 0 }
        : { y: 100, opacity: 0 }
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
      case 'center':
        return { scale: 0.2, opacity: 0 }
      default:
        return { x: 0, opacity: 0 }
    }
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={
        hasAnimated
          ? direction === 'center'
            ? { scale: 1, opacity: 1 }
            : { x: 0, y: 0, opacity: 1 }
          : getInitialPosition()
      }
      transition={{
        duration: 2,
        delay: delay,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
