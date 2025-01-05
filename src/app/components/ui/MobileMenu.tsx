'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '@/app/lib/routes'
import { Menu, X } from 'lucide-react'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="block lg:hidden pl-4">
      {/* Bouton Menu */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-2 bg-[#f3b705] rounded-lg"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu déroulant et overlay */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-[#0d0000]/50 z-40"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div 
            className="fixed left-1/2 -translate-x-1/2 top-20 h-auto w-[70%] sm:w-[60%] md:w-[40%] bg-[#f2e205] p-4 rounded-lg shadow-lg z-[1001] transform animate-slide-in"
          >
            <div className="flex flex-col space-y-2">
              <Link 
                href={routes.info}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.info ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                INFOS
              </Link>
              <Link 
                href={routes.ecole}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.ecole ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                L&apos;ÉCOLE
              </Link>
              <Link 
                href={routes.oclub}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.oclub ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                LE CLUB
              </Link>
              <Link 
                href={routes.inscription}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.inscription ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                INSCRIPTIONS
              </Link>
              <Link 
                href={routes.lesactivites}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.lesactivites ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                ACTIVITÉS
              </Link>
              <Link 
                href={routes.technique}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.technique ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                LA TECHNIQUE
              </Link>
              <Link 
                href={routes.contact}
                onClick={closeMenu}
                className={`font-bebas text-2xl p-2 transition-colors text-center ${
                  pathname === routes.contact ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
                }`}
              >
                CONTACT
              </Link>
            </div>       
          </div>
        </>
      )}
    </div>
  )
}