import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Card userName='Tina' img='https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600' status='true'/>
    <Card userName='Nency' img='https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600' status='false'/>

  </StrictMode>,
)
