import React from 'react'
import '../constants/index.js'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { HERO_CONTENT } from '../constants/index.js'

const Greet = styled(Box)({
    display: 'flex',
    flexDirection: 'column',        // Stack texts vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vw',
    textAlign: 'center',            // Center text
    padding: '0 1rem',              // Padding for responsiveness
    marginBottom: '10px',
   
})

const Hero = () => {
    return (

        <Greet>
            <Typography sx={{ fontSize: '3.75rem', fontWeight: 100, fontFamily: 'Inter, sans-serif' }}>Hi, I'm Pradeep</Typography>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 100, fontFamily: 'Inter, sans-serif' }}>{HERO_CONTENT}</Typography>
        </Greet>
    )
}

export default Hero