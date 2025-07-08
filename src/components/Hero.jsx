import React from 'react'
import '../constants/index.js'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { HERO_CONTENT } from '../constants/index.js'
import { motion } from 'framer-motion'
import GradientText from '../animations/GradientText.jsx'

const Greet = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    textAlign: 'center',
    padding: '1rem',
    marginBottom: '10%',
    marginTop: '10%',

    [theme.breakpoints.down('sm')]: {
        padding: '2rem 1rem',
        marginTop: '10rem',
    },
}));


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

            <Greet id='home' sx={{ scrollMarginTop: '200px' }}>
                <Typography
                    sx={{ fontSize: { xs: '2.75rem', sm: '3.75rem' }, fontWeight: { xs: 200, sm: 100 }, fontFamily: 'Inter, sans-serif' }}
                >
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Hi i'm Pradeep
                    </GradientText>
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
