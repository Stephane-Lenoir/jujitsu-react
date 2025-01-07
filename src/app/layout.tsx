import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Dancing_Script, Merriweather } from 'next/font/google'
import { AudioProvider } from './context/AudioContext'
import './globals.css'
import Script from 'next/script'

// Configuration des polices
const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing'
})
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: {
    default: 'Ju-Jutsu Traditionnel - Crégy-les-Meaux',
    template: '%s | Ju-Jutsu Traditionnel Crégy-les-Meaux'
  },
  description: 'Club de Ju-Jutsu Traditionnel à Crégy-les-Meaux - Méthode Wajutsu sans compétition',
  keywords: ['ju-jutsu', 'arts martiaux', 'Crégy-les-Meaux', 'Wajutsu', 'sport', 'self-defense'],
  authors: [{ name: 'Fanster.Dev' }],
  creator: 'Fanster.Dev',
  publisher: 'Ju-Jutsu Traditionnel Crégy-les-Meaux',
  icons: {
    icon: '/assets/cursors/curseur.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YRPV1FZMHQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YRPV1FZMHQ');
        `}
      </Script>
      <body className={`
        ${inter.className}
        ${bebasNeue.variable}
        ${dancingScript.variable}
        ${merriweather.variable}
        bg-background
        min-h-screen
        w-full
        overflow-x-hidden
      `}>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}