import type { Metadata } from 'next'
import { MainLayout } from "../components/layout/MainLayout"
import { ImageArticle } from "../components/ui/ImageArticle"
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
    title: "L'École de Ju-Jitsu Crégy-les-Meaux",
    description: 'Découvrez notre école de Ju-Jutsu Traditionnel et la méthode Wa-Jutsu enseignée par Maître Jacques-Jean QUERO.',
    keywords: ['école ju-jutsu', 'Wa-Jutsu', 'Maître QUERO', 'enseignement']
  }

export default function EcolePage() {
  return (
    <MainLayout>
      <ImageArticle 
        imageSrc="/autres-images/quero_03_th.webp"
        imageAlt="Maître Quero"
        imageCaption="Maître J.J. QUERO"
        imageLink="https://www.aejt-jjquero.com/"
        content={
          <div className="space-y-4">
            <MotionDiv direction="center">
            <p className="font-open-sans text-lg">
              Le Ju-Jutsu est un ancien art Japonais de self-défense vieux de plusieurs siècles.
            </p>
            <p className="font-open-sans text-lg">
              Art suprême approuvé par l&apos;empereur, il était l&apos;art de combat des samouraïs.
            </p>
            <p className="font-open-sans text-lg">
              Aujourd&apos;hui, il est considéré comme l&apos;un des systèmes d&apos;arts martiaux enseigné parmi les plus efficaces et les plus adaptés.
            </p>
            </MotionDiv>
            <MotionDiv direction="center">
            <p className="font-open-sans text-lg">
              Le Ju-Jutsu est un ensemble composé de projections, systèmes de clés, d&apos;attaques aux centres nerveux, de manipulations des articulations et techniques de coups de pieds et de mains aux points vitaux du corps.
            </p>
            <p className="font-open-sans text-lg">
              <a href="https://www.aejt-jjquero.com/wa_jutsu.htm" target="_blank" rel="noopener noreferrer" className="text-[#f3b705] hover:text-[#A68A72]">
                La méthode Wa-Jutsu
              </a>
              {' '}
              <a href="https://www.aejt-jjquero.com/quero.htm#ancre3" target="_blank" rel="noopener noreferrer" className="text-[#f3b705] hover:text-[#A68A72]">
                (Méthode A.E.J.T)
              </a>
              {' '}est devenu un art de paix, créée par{' '}
              <a href="https://www.aejt-jjquero.com/quero.htm" target="_blank" rel="noopener noreferrer" className="text-[#f3b705] hover:text-[#A68A72]">
                Maître Jacques–Jean QUERO
              </a>
              , professeur diplômé d&apos;état et du Japon.
            </p>
            <p className="font-open-sans text-lg">
              Suite aux études personnelles qu&apos;il a mené dans de vieilles écoles traditionnelles, il propose au pratiquant une activité physique, sportive, culturelle pour une meilleure compréhension du principe fondamentale des Arts martiaux au Japon « WA » qui signifie « ACCORD ET PAIX » permettant la découverte et la manifestation du « KI ».
            </p>
            </MotionDiv>
          </div>
        }
      />
    </MainLayout>
  )
}