import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './biz/app.tsx'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)