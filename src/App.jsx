import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Reasons from './components/Reasons.jsx'
import Structure from './components/Structure.jsx'
import Guide from './components/Guide.jsx'

export default function App() {
  const [decision, setDecision] = useState('Proceed')
  return <main className="min-h-screen overflow-hidden bg-[#EDF5EE] text-[#3C2720]">
    <Header />
    <Hero />
    <Intro />
    <Reasons />
    <Structure />
    <Guide />
  </main>
}
