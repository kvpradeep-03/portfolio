import React, { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material';

const Icons = styled(Box)({
    position: 'fixed',
    bottom: '20px',
    left: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    zIndex: 1000,
    alignItems: 'center'
});

const VerticalLine = styled('div')({
    width: '1px',
    height: '4vw', // Adjust as needed
    backgroundColor: '#ffffff66', // semi-transparent white
    marginTop: '8px',
    left: '100px'
});

const FloatingIcons = () => {

    const [hideIcons, setHideIcons] = useState(false)
    useEffect(() => {
        const about = document.getElementById('about')
        const handleScroll = () => {
            if (!about) return
            //getBoundingClientRect() gives the position of the element relative to the viewport.
            //rect.top tells how far the top of the About section is from the top of the screen (viewport).
            //window.innerHeight is the height of the screen(viewport).
            //So window.innerHeight / 1.5 means "when the About section is near the middle of the screen.
            //If the top of the About section is less than halfway down the screen, we hide the FloatingIcons.jsx component)
            const rect = about.getBoundingClientRect()  
            setHideIcons(rect.top < window.innerHeight / 20) 
        }
        //scroll is a built-in event provided by the DOM
        //This attaches an event listener to the browser's window object
        //It listens for the scroll event — every time the user scrolls the page, your handleScroll function will run.
        //That’s how your component knows the scroll position is changing.
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
      

    return (
        <Icons className={`icons ${hideIcons ? 'hide' : 'show'}`}>
            <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' }}}><GitHubIcon  sx={{ fontSize: '1.5vw' }} /></IconButton>
            <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}><LinkedInIcon sx={{ fontSize: '1.5vw' }} /></IconButton>
            <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}><ContactPageIcon sx={{ fontSize: '1.5vw' }} /></IconButton>
            <IconButton sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }}><InstagramIcon sx={{ fontSize: '1.5vw' }} /></IconButton>
            <VerticalLine />         
        </Icons>
    )
}

export default FloatingIcons