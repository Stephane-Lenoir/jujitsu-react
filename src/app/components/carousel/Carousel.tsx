'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  title: string
  titlePosition: 'left' | 'right'
}

export const Carousel = ({ images, title, titlePosition }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showNextItem = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  const showPrevItem = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  return (
    <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 p-2 sm:p-3 md:p-4">
      {/* Titre */}
      <div
        className={`w-full text-center mb-4 sm:mb-6 md:mb-8
          ${titlePosition === 'left' ? 'text-left pl-2 sm:pl-4' : 'text-right pr-2 sm:pr-4'}`}
      >
        <h2 className="font-open-sans text-[#A68A72] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
          {title}
        </h2>
      </div>

      {/* Carousel */}
      <div className="carousel relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[900px] 
                      h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] 
                      overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 95vw, 
                       (max-width: 768px) 90vw, 
                       (max-width: 1024px) 85vw,
                       900px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Boutons */}
        <button
          onClick={showPrevItem}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 
                     text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                     bg-[#f3b705] text-[#A68A72]
                     hover:bg-black/70 hover:text-[#f2e205] transition-colors 
                     z-10 rounded-md p-1 sm:p-2"
          aria-label="Image précédente"
        >
          &#10094;
        </button>

        <button
          onClick={showNextItem}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 
                     text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                     bg-[#f3b705] text-[#A68A72]
                     hover:bg-black/70 hover:text-[#f2e205] transition-colors 
                     z-10 rounded-md p-1 sm:p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}
