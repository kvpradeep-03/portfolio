import React from 'react'
import '../constants/index.js'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { HERO_CONTENT } from '../constants/index.js'
import { motion } from 'framer-motion'

const Greet = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vw',
    textAlign: 'center',
    padding: '0 1rem',
    marginBottom: '10px',
    xs:{
        marginTop: '30px'
    }
})

const Hero = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }}
        >
            <Greet id='home'>
                <Typography
                    sx={{ fontSize: '3.75rem', fontWeight: 100, fontFamily: 'Inter, sans-serif' }}
                >
                    Hi, I'm Pradeep
                </Typography>
                <Typography
                    sx={{ fontSize: '1.5rem', fontWeight: 100, fontFamily: 'Inter, sans-serif' }}
                >
                    {HERO_CONTENT}
                </Typography>
            </Greet>
        </motion.div>
    )
}

export default Hero
