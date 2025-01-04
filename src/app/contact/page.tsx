import type { Metadata } from 'next'
import { MainLayout } from '../components/layout/MainLayout'
import { ContactForm } from '../components/ui/ContactForm'
import { ContactInfo } from '../components/ui/ContactInfo'
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
    title: 'Jujitsu Crégy-les-Meaux Contactez-nous',
    description: 'Contactez notre équipe du club de Ju-Jutsu Traditionnel de Crégy-les-Meaux.',
    keywords: ['contact', 'message', 'équipe', 'communication']
  }

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#A68A72] font-open-sans text-center underline pt-8 pb-8 font-bold">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionDiv direction="left">
          <ContactInfo />
          </MotionDiv>
          <MotionDiv direction="right">
          <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </MainLayout>
  )
}