import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Profile from '../assets/PradeepProfile.png';
import { ABOUT_TEXT } from '../constants/index.js'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
 

const About = () => {
  return (
    <div id='about' style={{padding:'20px 50px', margin: '40px auto', width: '80vw' }}>
      <Card sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'inherit', color: 'inherit' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:'0px', alignItems: 'center'}}>
          <CardContent sx={{ flex: '1 0 auto', padding:'100px 100px 50px 60px'}}>
            <Typography component="div" variant='h1' sx={{
              mb: '2rem',
              fontSize: '2.25rem',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'underline',
              textDecorationThickness: '1.5px', // thinner underline
              textDecorationColor: 'rgba(255,255,255,0.4)', // lighter color (adjust as needed)
              textUnderlineOffset: '10px'
            }}>
              Hi there <WavingHandIcon/>
            </Typography>
            <Typography component="div" sx={{
              fontWeight: 100,
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif'
              }}>
              {ABOUT_TEXT}
            </Typography>
            <Button variant="outlined" color="white"sx={{mt:'25px'}}>
              Download Resume <DownloadIcon />
            </Button>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'inherit' }}
            >
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, display: 'flex' }}
          image={Profile}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  )
}

export default About