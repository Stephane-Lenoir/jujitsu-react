import type { Metadata } from 'next'
import { MainLayout } from "../components/layout/MainLayout"
import { Carousel } from "../components/carousel/Carousel"
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
    title: 'Ju-Jitsu Crégy-les-Meaux Les Activités',
    description: 'Découvrez nos activités : stages, démonstrations, et entraînements collectifs de Ju-Jutsu Traditionnel.',
    keywords: ['activités', 'stages', 'kagami', 'entraînements']
  }

  const kagamiImages = [
    { src: '/img-kagami-titre/kagami-titre-1.webp', alt: 'Kagami 1' },
    { src: '/img-kagami-titre/kagami-titre-2.webp', alt: 'Kagami 2' },
    { src: '/img-kagami-titre/kagami-titre-3.webp', alt: 'Kagami 3' },
    { src: '/img-kagami-titre/kagami-titre-4.webp', alt: 'Kagami 4' },
    { src: '/img-kagami-titre/kagami-titre-5.webp', alt: 'Kagami 5' },
    { src: '/img-kagami-titre/kagami-titre-6.webp', alt: 'Kagami 6' },
    { src: '/img-kagami-titre/kagami-titre-7.webp', alt: 'Kagami 7' },
    { src: '/img-kagami-titre/kagami-titre-8.webp', alt: 'Kagami 8' },
    { src: '/img-kagami-titre/kagami-titre-9.webp', alt: 'Kagami 9' },
    { src: '/img-kagami-titre/kagami-titre-10.webp', alt: 'Kagami 10' },
    { src: '/img-kagami-titre/kagami-titre-11.webp', alt: 'Kagami 11' },
    { src: '/img-kagami-titre/kagami-titre-12.webp', alt: 'Kagami 12' },
    { src: '/img-kagami-titre/kagami-titre-13.webp', alt: 'Kagami 13' },
    { src: '/img-kagami-titre/kagami-titre-14.webp', alt: 'Kagami 14' },
    { src: '/img-kagami-titre/kagami-titre-15.webp', alt: 'Kagami 15' },
    { src: '/img-kagami-titre/kagami-titre-16.webp', alt: 'Kagami 16' },
    { src: '/img-kagami-titre/kagami-titre-17.webp', alt: 'Kagami 17' },
    { src: '/img-kagami-titre/kagami-titre-18.webp', alt: 'Kagami 18' },
    { src: '/img-kagami-titre/kagami-titre-19.webp', alt: 'Kagami 19' },
    { src: '/img-kagami-titre/kagami-titre-20.webp', alt: 'Kagami 20' },
    { src: '/img-kagami-titre/kagami-titre-21.webp', alt: 'Kagami 21' },
    { src: '/img-kagami-titre/kagami-titre-22.webp', alt: 'Kagami 22' },
    { src: '/img-kagami-titre/kagami-titre-23.webp', alt: 'Kagami 23' },
    { src: '/img-kagami-titre/kagami-titre-24.webp', alt: 'Kagami 24' },
    { src: '/img-kagami-titre/kagami-titre-25.webp', alt: 'Kagami 25' },
    { src: '/img-kagami-titre/kagami-titre-26.webp', alt: 'Kagami 26' },
    { src: '/img-kagami-titre/kagami-titre-27.webp', alt: 'Kagami 27' },
  ]
  

  const collectifImages = [
    { src: '/img-entr-conv/entrainementconvivial1-1.webp', alt: 'Entraînement 1' },
    { src: '/img-entr-conv/entrainementconvivial1-2.webp', alt: 'Entraînement 2' },
    { src: '/img-entr-conv/entrainementconvivial1-3.webp', alt: 'Entraînement 3' },
    { src: '/img-entr-conv/entrainementconvivial1-4.webp', alt: 'Entraînement 4' },
    { src: '/img-entr-conv/entrainementconvivial1-5.webp', alt: 'Entraînement 5' },
  ]

export default function ActivitesPage() {
  return (
    <MainLayout>
      <h2 className="text-3xl text-[#A68A72] font-open-sans text-center underline pt-8 pb-8 font-bold">
          Les activités
        </h2>
      <div className="carousel-wrapper">
        <MotionDiv direction="left">
          <Carousel
            images={kagamiImages}
            title="Cérémonie traditionnelle : Le Kagami-Biraki"
            titlePosition="left"
          />
        </MotionDiv>
        <MotionDiv direction="right">
          <Carousel
            images={collectifImages}
            title="Les stages inter-régionaux"
            titlePosition="right"
          />
        </MotionDiv>
      </div>
    </MainLayout>
  )
}