import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clients from './components/clients.jsx'
import Community from './components/community.jsx'
import Unlock from './components/unlock.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Clients />
    <Community />
    <Unlock />
  </StrictMode>,
)
