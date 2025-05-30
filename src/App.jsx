import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Notification from './components/Notification'
import HeroSection from './components/HeroSection'
import Slider from './components/Slider'
import HeroSection2 from './components/HeroSection2'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Notification />
      <HeroSection />
      <Slider />

      <HeroSection2 />
    </>
  )
}

export default App
