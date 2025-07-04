import React from 'react'
import './Navbar.css'
import { Box} from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import styled from '@emotion/styled';

const Nav = styled(Box)({
  position: 'fixed',               // Stick to top
  top: 0,                          // Align at the top
  left: 0,                         // Optional: start from the left
  right: 0,                        // Optional: span full width
  zIndex: 1000,                    // Stay on top of other elements
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1vw 3vw',
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


const Menu = styled('ul')({
  display: "flex",
  justifyContent: 'space-between',
  listStyleType: 'none',
  gap: '24px',
  fontWeight: 300,
  fontSize: "large",
  marginRight: '2vw',
})


const Navbar = () => {
  return (
    <Nav>
      <FlashOnIcon sx={{marginLeft: '10px', fontSize: '2vw' }} />     
      <Menu>
        <li>Home</li>
        <li>About</li>
        <li>Career</li>
        <li>Project</li>
        <li>Contact Me</li>
      </Menu>
    </Nav>
  )
}

export default Navbar