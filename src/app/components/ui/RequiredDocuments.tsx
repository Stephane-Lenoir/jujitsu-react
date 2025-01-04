'use client'

import { MotionDiv } from "./MotionDiv"

// Définition des types
type DocumentItem = {
  name: string;
  downloadUrl?: string;
  externalUrl?: string;
  isLocal?: boolean;
}

export const RequiredDocuments = () => {
  const documents: DocumentItem[] = [
    {
      name: "Un certificat médical d'aptitude à la pratique du Ju-Jutsu Traditionnel",
      downloadUrl: "/documents/certificat-medical.pdf",
      isLocal: true
    },
    {
      name: "Une enveloppe timbrée à votre nom et adresse"
    },
    {
      name: "Le bulletin d'inscription pour la saison, rempli et signé",
      externalUrl: "https://site.wajutsu.club/wp-content/uploads/2023/07/ACSL-2023-2024-BULLETIN-D-INSCRIPTION.pdf",
      isLocal: false
    }
  ]

  return (
    <div className="mb-8">
      <MotionDiv direction="left">
        <h3 className="font-open-sans text-3xl text-[#A68A72] underline decoration-[#A68A72]">
          Pièces à fournir
        </h3>
        <ul className="font-open-sans text-[#0d0000] space-y-2">
          {documents.map((doc, index) => (
            <li key={index} className="hover:transform hover:scale-110 transition-transform">
              {doc.downloadUrl ? (
                <a
                  href={doc.downloadUrl}
                  download
                  className="text-[#f3b705] hover:text-[#A68A72] underline"
                >
                  {doc.name}
                </a>
              ) : doc.externalUrl ? (
                <a
                  href={doc.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f3b705] hover:text-[#A68A72] underline"
                >
                  {doc.name}
                </a>
              ) : (
                doc.name
              )}
            </li>
          ))}
        </ul>
      </MotionDiv>
    </div>
  )
}