import { useState } from 'react'
import Navbar from './components/Navbar'
import FloatingIcons from './components/FloatingIcons'
import Hero from './components/Hero'
import { Margin } from '@mui/icons-material'
import About from './components/About'
import { Box } from '@mui/material'
import Techstack from './components/Techstack'
import Projects from './components/Projects'
 

function App() {


  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Techstack/>
      <Projects/>
      <FloatingIcons />
    </Box>
  )
}

export default App
