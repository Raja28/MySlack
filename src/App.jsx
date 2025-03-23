import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Notification from './components/Notification'
import HeroSection from './components/HeroSection'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Notification />
      <HeroSection />
      hello
    </>
  )
}

export default App
