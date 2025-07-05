import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Profile from '../assets/PradeepProfile.png';
import { ABOUT_TEXT } from '../constants/index.js'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { splitText } from 'motion-plus'
import { useEffect, useRef } from "react"

const About = () => {
  const containerRef = useRef(null)


  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible"

      const div = containerRef.current.querySelector("#about-text");
      if (!div) return;

      const { words } = splitText(div)

      // Animate the words in the div
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 5,
          bounce: 1,
          delay: stagger(0.10),
        }
      )
    })
  }, [])
  return (
    <div id='about' ref={containerRef} style={{ padding: '20px 50px', margin: '40px auto', width: '80vw' }}>
      <Card sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'inherit', color: 'inherit' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '0px', alignItems: 'center' }}>
          <CardContent sx={{ flex: '1 0 auto', padding: '100px 100px 50px 60px' }}>
            <Typography component="div" variant='div' sx={{
              mb: '2rem',
              fontSize: '2.25rem',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'underline',
              textDecorationThickness: '1.5px', // thinner underline
              textDecorationColor: 'rgba(255,255,255,0.4)', // lighter color (adjust as needed)
              textUnderlineOffset: '10px'
            }}>
              Hi there <WavingHandIcon />
            </Typography>
            <Typography component="div" id='about-text' sx={{
              fontWeight: 100,
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              {ABOUT_TEXT}
            </Typography>

            <motion.div
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 1 }}
            >
              <Button variant="outlined" color="white" sx={{ color: 'white', '&:hover': { color: '#00bcd4' }, mt: '25px' }}>
                Download Resume <DownloadIcon />
              </Button>
            </motion.div>

          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 300, display: 'flex' }}
          image={Profile}
          alt="profile_pic"
        />
      </Card>
    </div>
  )
}

export default About