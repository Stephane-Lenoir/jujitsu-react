import { Header } from './Header'
import { Footer } from './Footer'
import { BackToTop } from '../ui/BackToTop'
import { AudioPlayer } from '../ui/AudioPlayer'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <AudioPlayer />
    </div>
  )
}