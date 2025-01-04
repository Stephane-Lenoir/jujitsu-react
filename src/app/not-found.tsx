// src/app/not-found.tsx
import Link from 'next/link'
import { routes } from './lib/routes'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-4xl font-bold text-primary mb-4">Page non trouvée</h2>
      <p className="text-lg text-gray-600 mb-8">
        Désolé, la page que vous recherchez n&rsquo;existe pas.
      </p>
      <Link 
        href={routes.home}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
      >
        Retour à l&rsquo;accueil
      </Link>
    </div>
  )
}