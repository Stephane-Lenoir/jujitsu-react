import type { Metadata } from 'next'
import { MainLayout } from '../components/layout/MainLayout'
import { Schedule } from '../components/ui/Schedule'
import { PricingCard } from '../components/ui/PricingCard'
import { RequiredDocuments } from '../components/ui/RequiredDocuments'
import { TextSection } from '../components/ui/TextSection'
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
    title: 'Ju-Jitsu Crégy-les-Meaux Inscriptions',
    description: 'Modalités d\'inscription, tarifs et documents nécessaires pour rejoindre le club de Ju-Jutsu Traditionnel.',
    keywords: ['inscription', 'tarifs', 'documents', 'adhésion']
  }
  
const scheduleData = [
  {
    day: "Tous les mardis",
    times: [
      { group: "Enfants", time: "18h45 - 19h45" },
      { group: "Adultes et Adolescents", time: "20h00 - 21h45" }
    ]
  },
  {
    day: "Tous les vendredis",
    times: [
      { group: "Adultes et Adolescents", time: "20h00 - 21h45" }
    ]
  }
]

export default function InscriptionPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-open-sans text-center underline pt-8 pb-8">
        Inscriptions
        </h2>
        <MotionDiv direction="down">
        <TextSection
          content="Pour vous inscrire, se présenter au début des cours tous les mardis et vendredis à 18h45 ou 20h au dojo du gymnase."
          className="text-center font-open-sans"
        />
        </MotionDiv>

        <RequiredDocuments />

        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <MotionDiv direction="left">
          <PricingCard
            title="Tarif annuel adulte"
            price="200 € /an"
            description="*Deux cours par semaine"
            descriptionDetails="(mardi et vendredi)"
            details={[
              "Le montant des cours (3 trimestres, sauf congés scolaires) (140€)",
              "La carte de membre de l'A.E.J.T. avec assurance (40€)",
              "Droit d'entrée annuel de l'A.C.S.L (20€)"
            ]}
          />
          </MotionDiv>
          <MotionDiv direction="right">
          <PricingCard
            title="Tarif annuel enfant"
            price="150 € /an"
            description="* Un cours par semaine (mardi)"
          />
          </MotionDiv>
        </div>
        
        <MotionDiv direction="right">
          <TextSection        
            title="Pour la pratique"
            content={`
              - Un kimono blanc
              - Une paire de chaussons
              - Une ceinture
            `}
            className="font-open-sans "
          />
        
          <TextSection
            content="Attention: Le bulletin d'inscription signé est exigé pour monter sur le tapis, y compris pour les cours d'essai (problème d'assurance)."
            className="font-open-sans italic font-bold"
          />
        </MotionDiv>
        <MotionDiv direction="left">
          <TextSection
            title="Cours d'essai"
            content="Vous avez la possibilité de venir nous rejoindre sur le tatami en vous équipant d'un survêtement ou de vêtements souples. Notre section vous accueille gratuitement et sans engagement pendant 1 ou 2 séances afin de découvrir les bases de notre discipline."
            className="font-open-sans"
          />
        </MotionDiv>
        <MotionDiv direction="up">
        <Schedule title="Heures d'ouverture" schedules={scheduleData} />
        </MotionDiv>
      </div>
    </MainLayout>
  )
}