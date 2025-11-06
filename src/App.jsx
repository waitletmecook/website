import { useState } from 'react'
import { Services } from './components/Services'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Documentation } from './components/Documentation'
import { Workingspace } from './components/Workingspace'



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Documentation/>
      <Workingspace/>
    </>
    
  )
}

export default App
