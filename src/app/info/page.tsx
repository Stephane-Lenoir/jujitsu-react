import type { Metadata } from 'next'
import { MainLayout } from '../components/layout/MainLayout'
import { BushidoList } from '../components/ui/BushidoList'
import { MotionDiv } from '../components/ui/MotionDiv'

export const metadata: Metadata = {
  title: 'Informations - Horaires et Contact',
  description: 'Horaires des cours, informations pratiques et contacts du club de Ju-Jutsu Traditionnel de Crégy-les-Meaux.',
  keywords: ['horaires', 'contact', 'bushido', 'informations pratiques']
}

export default function InfoPage() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 pt-20 min-h-screen pb-20 gap-8">
        {/* Colonne de gauche - Bushido */}
        <div className="w-full md:w-1/3">
          <BushidoList />
        </div>

        {/* Colonne centrale - Retrouvez nous */}
        <div className="text-center flex-1 px-8">
        <MotionDiv direction="down">
        <h2 className="font-open-sans text-3xl text-[#A68A72] underline decoration-[#A68A72] font-bold mb-8">
          Retrouvez nous
        </h2>
        </MotionDiv>
          <MotionDiv direction="up">
          <h3 className="text-[#A68A72] font-open-sans mb-2 text-3xl">Adresse</h3>
          <div className="text-[#0d0000] hover:transform hover:scale-110 transition-transform mb-2">
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e8a04c9567e68d:0xe1ee84e3a4b818a2?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className='hover:text-[#f2b705] font-open-sans'>Gymnase Municipal Robert LEFOLL</p>
              <p className='font-open-sans'>1, Rue des Carrouges</p>
              <p className='font-open-sans'>77124 – Crégy-Les-Meaux</p>
            </a>
          </div>

          <h3 className="text-[#A68A72] font-open-sans mb-4 text-3xl">Heures d&apos;ouverture</h3>
          <div className="font-open-sans text-[#0d0000]">
            <p>Tous les mardis:</p>
            <p>18h45 - 19h45 : Enfants</p>
            <p>20h00 - 21h45 : Adultes</p>
            <p>Tous les vendredis:</p>
            <p>20h00 - 21h45 : Adultes</p>
          </div>
          </MotionDiv>
        </div>
        

        {/* Colonne de droite - Bureau et autres informations */}
        
        <div className="w-full md:w-1/3 text-center">
          <MotionDiv direction="right">
            <div className="mb-2">
              <h3 className="text-[#A68A72] font-open-sans text-3xl mb-4">
                Le Bureau
              </h3>
              <div className="font-open-sans text-[#0d0000] text-xl">
                <p>Président : M. Jean-Paul GRAVALLON</p>
                <p>Secrétaire : M. Romain MOREAU</p>
                <p>Trésorière : Mme Patricia DEBOFFLE</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#A68A72] font-open-sans text-3xl mb-2">
                L&apos;encadrement technique
              </h3>
              <p className="text-center">
                Directeur technique : M. Bruno DEBOFFLE</p>
                <p className="text-xl mt-2">(Titre de &quot;Okuden-Shi-Han&quot; de Ju-Jutsu Traditionnel japonais de l&apos;A.E.J.T.)</p>
            </div>

            <div>
              <h3 className="text-[#A68A72] font-open-sans text-3xl mb-4">
                Brevets
              </h3>
              <p className="text-center leading-relaxed">
                Nos encadrants sont tous titulaires d&apos;un Brevet de Fin de Formation,
                délivré par l&apos;Académie Européenne de Ju-Jitsu Traditionnel.
                Ils suivent chaque année une formation de cadre placée sous la
                responsabilité de notre directeur technique, Maître Jacques-Jean QUERO,
                professeur de Judo, Ju-Jutsu et méthodes de combat assimilées,
                diplômé d&apos;état et du Japon, légalement déclaré auprès du ministère
                de la jeunesse.
              </p>
            </div>
          </MotionDiv>
        </div>        
      </div>
    </MainLayout>
  )
}