import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
   <main className='overflow-x-hidden antialiased textneutral800'>
    <Navbar />
    <Hero />
    <Portfolio />
    <Services /> 
    <Reviews />
    <About />
    
    <ContactUs />
   </main>
  )
}

export default App