import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import Groups3Icon from '@mui/icons-material/Groups3';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { CONTACT } from '../constants';
import AnimatedContent from '../animations/AnimatedContent';

const Contact = () => {
  const HireMeLines = [
    { icon: <SettingsIcon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: " Solid Technical Foundation: Proficient in modern technologies like Python, JavaScript, React, PHP, MySQL, Linux, and Git, I can build robust and responsive applications from front to back." },
    { icon: <AccountTreeIcon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: "Project Driven Experience: From building personal projects to contributing to real-world applications, I’ve already demonstrated my ability to execute complete development cycles from wireframes to deployment." },
    { icon: <PsychologyIcon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: "Quick Learner & Adaptive: I stay updated with the latest tools and best practices. Whether it’s learning new frameworks or adapting to your team’s stack, I’m always ready to evolve." },
    { icon: <BuildIcon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: "Problem Solver, Not Just a Coder: I approach development with a problem solving mindset. I believe that clean code and performance go hand in hand with maintainability and scalability." },
    { icon: <Groups3Icon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: "Team Player with a Startup Mindset: I work well in collaborative environments, and I’m also confident taking initiative when needed. I understand the value of delivering fast, iterating quickly, and keeping users at the center." },
    { icon: <TrendingUpIcon sx={{ mr: 1, color: 'white', '&:hover': { color: '#00bcd4' } }} />, text: "Always Improving: I treat every opportunity as a chance to grow not just as a developer, but as a communicator, thinker, and contributor to your business goals." },
  ];
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.1}
      delay={0}
    >
      <Box id="contact" sx={{ scrollMarginTop: '110px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '8vw' }}>
          <Typography component="div" variant='h1' sx={{ fontSize: { xs: '1.75rem', sm: '3.75rem' }, fontWeight: { xs: 300, sm: 100 }, fontFamily: 'Inter, sans-serif', mt: '3rem', mb: '3rem' }}>
            Why You Should Hire Me?
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '3rem', ml: '2vw', mr: '2vw', px: '2vw' }}>
          {HireMeLines.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                maxWidth: '900px',
              }}
            >
              {item.icon}
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 100, fontSize: '1.25rem' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Typography
              component="div"
              variant="h1"
              sx={{
                fontSize: '2.25rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Contact Me
            </Typography>
            <ConnectWithoutContactIcon fontSize="large" sx={{ ml: 1 }} />
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBlock: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <NavigateNextIcon sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }} />
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 100, fontSize: '1.25rem', fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Mail: {CONTACT.email}
                </Typography>

              </Box>
            </li>
            <li style={{ marginBlock: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <NavigateNextIcon sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }} />
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 100, fontSize: '1.25rem', fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Phone: {CONTACT.phoneNo}
                </Typography>
              </Box>
            </li>
            <li style={{ marginBlock: 12 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <NavigateNextIcon sx={{ color: 'white', '&:hover': { color: '#00bcd4' } }} />
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 100, fontSize: '1.25rem', fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Location: {CONTACT.Location}
                </Typography>
              </Box>

            </li>
          </ul>

        </Box>

        <Divider
          sx={{
            borderColor: '#ffffff66',      // line color (semi-transparent white)
            borderBottomWidth: '1px',      // line thickness
            width: '100%',                 // full width (or adjust as needed)
            mx: 'auto',
            mb: '1rem',                   // center if width is less than 100%
            background: 'transparent',     // optional, ensures no background
          }}
        />

        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 4, sm: 4 },
            textAlign: 'center',

          }}
        >
          <Typography
            sx={{
              display: 'flex',

              justifyContent: 'center',
              alignItems: 'center',
              fontSize: { xs: '1rem', sm: '2rem', md: '2.5rem' },
              fontWeight: { xs: 300, sm: 100 },
              fontFamily: 'Inter, sans-serif',
              gap: 1,
            }}
          >

            Let’s turn bold ideas into brilliant solutions — together

          </Typography>
        </Box>
      </Box>
    </AnimatedContent>

  )
}

export default Contact