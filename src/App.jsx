import { useState } from 'react'
import { Services } from './components/Services'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Documentation } from './components/Documentation'
import { Workingspace } from './components/Workingspace'
import { Customers } from './components/Customers'
import { Carusel } from './components/Carusel'



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Documentation/>
      <Workingspace/>
      <Customers/>
      <Carusel/>
    </>
    
  )
}

export default App
