'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`fixed right-4 bottom-4 p-2 rounded-full bg-[#f3b705] text-[#A68A72] shadow-lg transition-opacity duration-300 hover:bg-[#f2e205] focus:outline-none
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <ChevronUp size={24} />
    </button>
  )
}