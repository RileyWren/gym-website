import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Offer from './components/Offer'
import GroupCrossFit from './components/GroupCrossFit'
import Step2 from './components/sub/Step2.jsx'
import Reviews from './components/Reviews.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Hero />
 <Offer />
 <GroupCrossFit />
    <Reviews />
    </>
  )
}

export default App
