import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FigureList from './components/FigureList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FigureList />
  </StrictMode>,
)
