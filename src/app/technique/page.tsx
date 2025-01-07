import type { Metadata } from 'next'
import { MainLayout } from "../components/layout/MainLayout"
import { Carousel } from "../components/carousel/Carousel"
import { TextSection } from "../components/ui/TextSection"
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
  title: 'Ju-Jitsu Crégy-les-Meaux La Technique',
  description: 'Apprentissage technique du Ju-Jutsu Traditionnel pour enfants et adultes. Méthode et principes d\'enseignement.',
  keywords: ['technique ju-jutsu', 'cours enfants', 'cours adultes', 'apprentissage']
}

const childrenImages = [
  { src: '/img-cours-enfants/image1.webp', alt: 'Cours enfants 1' },
  { src: '/img-cours-enfants/image2.webp', alt: 'Cours enfants 2' },
  { src: '/img-cours-enfants/image3.webp', alt: 'Cours enfants 3' },
  { src: '/img-cours-enfants/image4.webp', alt: 'Cours enfants 4' },
  { src: '/img-cours-enfants/image5.webp', alt: 'Cours enfants 5' },
  { src: '/img-cours-enfants/image6.webp', alt: 'Cours enfants 6' },
  { src: '/img-cours-enfants/image7.webp', alt: 'Cours enfants 7' },
  { src: '/img-cours-enfants/image8.webp', alt: 'Cours enfants 8' },
  { src: '/img-cours-enfants/image9.webp', alt: 'Cours enfants 9' },
  { src: '/img-cours-enfants/image10.webp', alt: 'Cours enfants 10' },
  { src: '/img-cours-enfants/image11.webp', alt: 'Cours enfants 11' },
  { src: '/img-cours-enfants/image12.webp', alt: 'Cours enfants 12' },
  { src: '/img-cours-enfants/image13.webp', alt: 'Cours enfants 13' },
]

const adultsImages = [
  { src: '/imag-cours-adult/img1-1.webp', alt: 'Cours adultes 1' },
  { src: '/imag-cours-adult/img1-2.webp', alt: 'Cours adultes 2' },
  { src: '/imag-cours-adult/img1-3.webp', alt: 'Cours adultes 3' },
  { src: '/imag-cours-adult/img1-4.webp', alt: 'Cours adultes 4' },
  { src: '/imag-cours-adult/img1-5.webp', alt: 'Cours adultes 5' },
  { src: '/imag-cours-adult/img1-6.webp', alt: 'Cours adultes 6' },
  { src: '/imag-cours-adult/img1-7.webp', alt: 'Cours adultes 7' },
  { src: '/imag-cours-adult/img1-8.webp', alt: 'Cours adultes 8' },
  { src: '/imag-cours-adult/img1-9.webp', alt: 'Cours adultes 9' },
  { src: '/imag-cours-adult/img1-10.webp', alt: 'Cours adultes 10' },
  { src: '/imag-cours-adult/img1-11.webp', alt: 'Cours adultes 11' },
  { src: '/imag-cours-adult/img1-12.webp', alt: 'Cours adultes 12' },
]

export default function TechniquePage() {
  return (
    <MainLayout>
      <div className="w-4/5 mx-auto">
        <h2 className="text-4xl text-[#A68A72] font-open-sans text-center underline pt-8 pb-8 font-bold">
          La technique
        </h2>
      <MotionDiv direction="left">
        <TextSection
          title="Informations cours enfants"
          content="L'étude de la progression technique peut-être abordée dés l'âge de 6 ans. 
          Dans cette étude les enfants sont initiés progressivement aux techniques de 
          dégagements et de contrôles. Les cours sont constitués de façon à accroître 
          leurs capacités motrices, tout en respectant leur croissance. Tout acte de 
          brutalité est strictement prohibé."
          className="text-[#A68A72] px-4 md:px-40"
        />
      </MotionDiv>
      <MotionDiv direction="right">
        <div className="mt-8">
          <Carousel
            images={childrenImages}
            title="Les cours enfants"
            titlePosition="left"
          />
        </div>
      </MotionDiv>
      <MotionDiv direction="left">
        <TextSection
          title="Informations cours adultes"
          content="Dans l'enseignement, toujours pas de pratique en force, pas d'agressivité, 
          pas de violence dans l'exécution des techniques. Simplement la recherche du 
          principe « Ju » symbole de souplesse, flexibilité « Minimum d'effort pour un 
          maximum d'efficacité d'utilisation de l'esprit et du corps ». Dans les katas, 
          pas d'opposants, pas d'adversaires, mais des partenaires soucieux de la 
          perfection du geste, de l'attitude, du rythme, de la recherche de la souplesse 
          et du meilleur emploi de l'énergie."
          className="text-[#A68A72] px-4 md:px-40"
        />
      </MotionDiv>  
      <MotionDiv direction="right">
        <div className="mt-8">
          <Carousel
            images={adultsImages}
            title="Les cours adultes"
            titlePosition="right"
          />
        </div>
      </MotionDiv>
      </div>
    </MainLayout>
  )
}