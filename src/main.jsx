import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Skill from './Cards.jsx'
import Profile from './ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Skill /> */}
    <Profile />
  </StrictMode>,
)
