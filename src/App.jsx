import { useState } from 'react'
import Navbar from './components/Navbar'
import FloatingIcons from './components/FloatingIcons'
import Hero from './components/Hero'
import { Margin } from '@mui/icons-material'
import About from './components/About'
import { Box } from '@mui/material'
import Techstack from './components/Techstack'
import Projects from './components/Projects'
import Contact from './components/Contact'
 

function App() {


  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Techstack/>
      <Projects/>
      <Contact/>
      <FloatingIcons />
    </Box>
  )
}

export default App
