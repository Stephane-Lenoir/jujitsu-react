import type { Metadata } from 'next'
import { MainLayout } from '../components/layout/MainLayout'
import { ClubHistory } from '../components/ui/ClubHistory'
import { DojoInfo } from '../components/ui/DojoInfo'

export const metadata: Metadata = {
  title: 'Ju-Jitsu Crégy-les-Meaux Le Club',
  description: 'Découvrez l\'histoire et les installations du club de Ju-Jutsu Traditionnel de Crégy-les-Meaux, membre de l\'A.C.S.L.',
  keywords: ['ACSL', 'Crégy-Les-Meaux', 'dojo', 'club ju-jutsu', 'histoire']
}

const historyParagraphs = [
  "L'Avenir Crégy Sports Loisirs (A.C.S.L.) a été créé en 1990 à l'initiative de la municipalité de Crégy-Les-Meaux. Cette association sportive regroupe plusieurs sections sportives, dont celle du Ju-Jutsu Traditionnel – Méthode Wa-Jutsu, qui a débuté ses fonctions le 09 octobre 1992.",
  "Depuis sa création, notre section a formé de nombreux pratiquants, dont plusieurs Ceintures Noires à lisérés violets, modèle déposé par l'Académie Européenne de Ju-Jitsu Traditionnel (A.E.J.T.). Nous sommes fiers de participer activement à la vie de la commune en animant des stands lors de manifestations locales.",
  "L'A.C.S.L. Crégy est placé sous l'égide de l'A.E.J.T., ce qui garantit à nos adhérents une pratique du Ju-Jutsu Traditionnel de qualité, encadrée par des professeurs diplômés et expérimentés. Notre club est ouvert à tous, débutants ou confirmés, et nous accueillons les pratiquants à partir de 6 ans.",
  "Rejoignez-nous pour découvrir notre discipline et partager notre passion pour le Ju-Jutsu Traditionnel."
]

const dojoImages = [
  {
    src: "/autres-images/gymnase.webp",
    alt: "Gymnase Robert Le Foll"
  },
  {
    src: "/autres-images/entree.webp",
    alt: "Porte d'entrée du Dojo"
  }
]

const dojoAddress = {
  name: "Gymnase Municipal Robert LEFOLL",
  street: "1, Rue des Carrouges",
  city: "77124 – Crégy-Les-Meaux"
}

export default function ClubPage() {
  return (
    <MainLayout>
      <ClubHistory
        title="Histoire du club"
        paragraphs={historyParagraphs}
      />
      <DojoInfo
        address={dojoAddress}
        images={dojoImages}
      />
    </MainLayout>
  )
}