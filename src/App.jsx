import { useState } from 'react'
import { Services } from './components/Services'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
    </>
    
  )
}

export default App
