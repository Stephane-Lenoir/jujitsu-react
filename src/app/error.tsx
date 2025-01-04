'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Une erreur s&apos;est produite !
      </h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
      >
        Réessayer
      </button>
    </div>
  )
}