import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Profile from '../assets/pradeepProfile.png';
import { ABOUT_TEXT } from '../constants/index.js'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "motion/react"
import { animate, stagger } from "motion"
import { splitText } from 'motion-plus'
import { useEffect, useRef } from "react"
import DecryptedText from '../animations/DecryptedText.jsx';
import ScrollFloat from '../animations/AnimatedContent.jsx';
import AnimatedContent from '../animations/AnimatedContent.jsx';


const About = () => {

  return (
    <div
      id="about"
      style={{ scrollMarginTop: window.innerWidth < 600 ? "10rem" : "150px" }}
    >
      <Box
        sx={{
          padding: "20px 50px",
          margin: "40px auto",
          width: "80vw",

          marginTop: {
            xs: "10rem", // on mobile
            sm: "40px", // default for tablets and up
          },
        }}
      >
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
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // 👈 key change
              justifyContent: "center",
              bgcolor: "inherit",
              color: "inherit",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap", // Allow wrapping if needed
                alignItems: "center",
                width: "100%",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  padding: { xs: "24px 4px", sm: "100px 100px 50px 60px" }, // responsive padding
                }}
              >
                <Typography
                  component="div"
                  variant="div"
                  sx={{
                    mb: "2rem",
                    fontSize: "2.25rem",
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "underline",
                    textDecorationThickness: "1.5px", // thinner underline
                    textDecorationColor: "rgba(255,255,255,0.4)", // lighter color (adjust as needed)
                    textUnderlineOffset: "10px",
                  }}
                >
                  Hi there <WavingHandIcon />
                </Typography>

                <Typography
                  component="div"
                  id="about-text"
                  sx={{
                    fontWeight: 100,
                    fontSize: "1.125rem",
                    fontFamily: "Inter, sans-serif",
                    whiteSpace: "normal", // ✅ allows wrapping
                    width: "100%", // ✅ ensure it fills available space
                  }}
                >
                  <DecryptedText
                    text={ABOUT_TEXT}
                    speed={100}
                    maxIterations={20}
                    animateOn="view"
                    revealDirection="center"
                  />
                </Typography>

                <motion.div
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 1 }}
                >
                  <Button
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    variant="outlined"
                    color="white"
                    sx={{
                      color: "white",
                      "&:hover": { color: "#00bcd4" },
                      mt: "25px",
                    }}
                  >
                    Download Resume <DownloadIcon />
                  </Button>
                </motion.div>
              </CardContent>
            </Box>

            <CardMedia
              sx={{
                width: { xs: "100%", sm: 300 }, // full width on mobile, fixed on desktop
                objectFit: "cover", // optional for styling
              }}
              component="img"
              image={Profile}
              alt="profile_pic"
            />
          </Card>
        </AnimatedContent>
      </Box>
    </div>
  );
}

export default About