import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Fleet } from './sections/Fleet'
import { Services } from './sections/Services'
import { Differentials } from './sections/Differentials'
import { Trust } from './sections/Trust'
import { Contact } from './sections/Contact'
import { useParallax } from './hooks/useParallax'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export function App() {
  useParallax()
  useSmoothScroll()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Fleet />
        <Services />
        <Differentials />
        <Trust />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
