// Os estilos globais entram antes do App: assim o CSS de cada componente é
// empacotado depois e vence em empates de especificidade.
import './styles/tokens.css'
import './styles/global.css'
import './styles/motion.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { enableMotionOverrideFromUrl } from './lib/motionPrefs'
// Entra por último: as molduras precisam vencer os estilos de cada seção.
import './styles/frames.css'

// Precisa rodar antes do primeiro render: define se o movimento é forçado
// (URL ?motion=full) antes de qualquer componente consultar a preferência.
enableMotionOverrideFromUrl()

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
