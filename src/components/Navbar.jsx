import React from 'react'
import { Box, Menu, MenuItem } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = styled(Box)({
  position: 'fixed',               // Stick to top
  top: 0,                          // Align at the top
  left: 0,                         // Optional: start from the left
  right: 0,                        // Optional: span full width
  zIndex: 1000,                    // Stay on top of other elements
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 40px',
  padding: '6px 6px',
  color: '#fff',
  cursor: 'pointer',
  background: 'rgba(223, 215, 215, 0.05)',   // semi-transparent background
  backdropFilter: 'blur(7px)',              // blur effect
  WebkitBackdropFilter: 'blur(7px)',        // Safari support
  border: '1px solid rgba(255, 255, 255, 0.1)', // subtle border
  borderRadius: '16px',                      // rounded corners
  boxShadow: '0 8px 32px 0 rgba(105, 106, 130, 0.24)', // glassy shadow

})

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <motion.div

      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Nav sx={{
   
        height: { xs: '10vw', sm: 'auto' },
      }}>
        <FlashOnIcon sx={{ color: 'white', '&:hover': { color: '#00bcd4' }, marginLeft: '10px', fontSize: '1.75rem' }} />
        <Box
          component="ul"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            padding: '1vw',
            justifyContent: 'space-between',
            listStyleType: 'none',
            gap: '24px',
            fontWeight: 300,
            fontSize: "large",
            marginRight: '2vw',
            margin: 0,
            '& li': {
              color: 'white',
              cursor: 'pointer',
              transition: 'color 0.2s',
              '&:hover': {
                color: '#00bcd4',
              },
            },
          }}
        >
          <li><a style={{ textDecoration: 'none', color: 'inherit' }} href="#home">Home</a></li>
          <li><a style={{ textDecoration: 'none', color: 'inherit' }} href="#about">About</a></li>
          <li><a style={{ textDecoration: 'none', color: 'inherit' }} href="#skill">Skills</a></li>
          <li><a style={{ textDecoration: 'none', color: 'inherit' }} href="#projects">Project</a></li>
          <li><a style={{ textDecoration: 'none', color: 'inherit' }} href="#contact">Contact Me</a></li>
        </Box>
        <MenuIcon sx={{ display: { xs: 'block', sm: 'none', marginRight: '12px' } }} onClick={handleClick} />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            padding: '12vw'
          }}
          disableScrollLock={true}
          PaperProps={{
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40%',
              color: 'white',
              background: 'rgba(223, 215, 215, 0.05)', // semi-transparent white
              backdropFilter: 'blur(10px)',           // glass blur effect
              WebkitBackdropFilter: 'blur(10px)',     // Safari support
              border: '1px solid rgba(255, 255, 255, 0.1)', // subtle border
              borderRadius: '16px',                      // rounded corners
              boxShadow: '0 8px 32px 0 rgba(105, 106, 130, 0.24)', // glassy shadow
            }
          }}
        >
          <MenuItem onClick={handleClose}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#home">Home</a></MenuItem>
          <MenuItem onClick={handleClose}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#about">About</a></MenuItem>
          <MenuItem onClick={handleClose}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#skill">Skills</a></MenuItem>
          <MenuItem onClick={handleClose}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#projects">Project</a></MenuItem>
          <MenuItem onClick={handleClose}><a style={{ textDecoration: 'none', color: 'inherit' }} href="#contact">Contact Me</a></MenuItem>
        </Menu>
      </Nav>

    </motion.div >

  )
}

export default Navbar