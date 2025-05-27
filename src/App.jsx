import { useState } from 'react'
import Hero from './components/Hero'
import Offer from './components/Offer'
import GroupCrossFit from './components/GroupCrossFit'
import MembershipCards from './components/MembershipCards.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Hero />
 <Offer />
 <GroupCrossFit />
    <MembershipCards />
    </>
  )
}

export default App
