'use client'

import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

interface DojoInfoProps {
  address: {
    name: string
    street: string
    city: string
  }
  images: {
    src: string
    alt: string
  }[]
}

export const DojoInfo = ({ address, images }: DojoInfoProps) => {
  return (
    <div className="mt-8">
      <h2 className="font-open-sans italic text-3xl mb-4 text-center">
        Le Dojo
      </h2>
      
      <MotionDiv direction="right">
        <ul className="font-open-sans text-[#0d0000] text-center">
          <li className="mb-2">
            Notre dojo est situé à l&apos;intérieur du Gymnase municipal de{' '}
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e8a04c9567e68d:0xe1ee84e3a4b818a2?sa=X&ved=1t:8290&ictx=111"
              className="text-[#f3b705] hover:text-[#A68A72] "
              target="_blank"
              rel="noopener noreferrer"
            >
              {address.city}
            </a>
          </li>
          <li className="mb-2">{address.name}</li>
          <li className="mb-2">{address.street}</li>
          <li className="mb-2">{address.city}</li>
        </ul>
      </MotionDiv>

      <MotionDiv direction="up" className="flex justify-center gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        ))}
      </MotionDiv>
    </div>
  )
}