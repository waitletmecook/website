import { useState } from 'react'
import { Services } from './components/Services'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Documentation } from './components/Documentation'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Documentation/>
    </>
    
  )
}

export default App
