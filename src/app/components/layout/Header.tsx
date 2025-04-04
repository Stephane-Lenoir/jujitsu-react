'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '@/app/lib/routes'
import Image from 'next/image'
import { MobileMenu } from '../ui/MobileMenu'

export const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full relative">
      <h1 className="text-4xl md:text-8xl text-center font-open-sans pb-8 title-main font-bold">
        Ju-Jutsu Traditionnel
      </h1>
      <h2 className="text-2xl md:text-4xl text-[#0d0000] text-center pb-8 shadow-accent text-from-center no-underline">
        MÉTHODE WA-JUTSU - DISCIPLINE À BUT NON COMPÉTITIF
      </h2>
      <h3 className="md:text-4xl text-[#0d0000] text-center pb-8 shadow-accent title-sub no-underline">
        Le club de Crégy les Meaux est affilié à l&apos;Académie Européenne de Ju-Jitsu 
      </h3>

      <div className="relative w-full max-w-[90vw] mx-auto">
        <div className="banner-container">
          <Image
            className="banner-image"
            src="/assets/layout/baniere.webp"
            alt="Dojo au milieu des arbres"
            width={1200}
            height={400}
            priority
          />
        </div>
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e8a04c9567e68d:0xe1ee84e3a4b818a2?sa=X&ved=1t:8290&ictx=111"
          target="_blank" rel="noopener noreferrer"
          className="text-[#f3b705] hover:text-[#A68A72] no-underline font-open-sans sous text-lg ml-14"
        >
          Crégy-les-Meaux
        </a>
      </div>

      <nav className={`mt-4 ${isScrolled ? 'nav-scrolled' : ''}`}>
        {/* Menu Mobile */}
        <MobileMenu />

        {/* Menu Desktop */}
        <div className="hidden lg:flex justify-evenly max-w-[85%] mx-auto p-2 rounded-lg bg-[#F2E205]">
          <Link 
            href={routes.info}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.info ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            INFOS
          </Link>
          <Link 
            href={routes.ecole}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.ecole ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            L&apos;ÉCOLE
          </Link>
          <Link 
            href={routes.oclub}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.oclub ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            LE CLUB
          </Link>
          <Link 
            href={routes.inscription}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.inscription ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            INSCRIPTIONS
          </Link>
          <Link 
            href={routes.lesactivites}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.lesactivites ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            ACTIVITÉS
          </Link>
          <Link 
            href={routes.technique}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.technique ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            LA TECHNIQUE
          </Link>
          <Link 
            href={routes.contact}
            className={`nav-link-animated font-open-sans text-xl xl:text-2xl p-2 transition-colors ${
              pathname === routes.contact ? 'text-[#A68A72]' : 'text-[#0d0000] hover:text-[#f3b705]'
            }`}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  )
}