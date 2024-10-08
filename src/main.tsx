import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Padding from './components/PaddingContainer/PaddingContainer';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Padding>
      <App />
    </Padding>
  </StrictMode>,
)
