import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaGit, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiPhpFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { SiAdminer } from "react-icons/si";
import styled from '@emotion/styled';
import * as motion from "motion/react-client";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AnimatedContent from '../animations/AnimatedContent';

const Icon = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    fontSize: '48px',
    '& .icon-label': {
        opacity: 0,
        transition: 'opacity 0.2s',
        fontSize: '0.65rem',
        fontFamily: 'Inter',
        fontWeight: 100,
        color: '#fff',
        marginTop: '8px',
        alignItems: "center",
        textAlign: 'center',
    },
    '&:hover .icon-label': {
        opacity: 1,
    },

})



const Techstack = () => {
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
            <Box id="skill" sx={{ scrollMarginTop: '200px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: '15vw', mb: { xs: '4rem', sm: '6rem' }, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Typography
                            component="div"
                            variant="h1"
                            sx={{ fontSize: { xs: '1.75rem', sm: '3.75rem' }, fontWeight: { xs: 300, sm: 100 }, fontFamily: 'Inter, sans-serif' }}
                        >
                            Technologies I Work With
                        </Typography>
                        <TipsAndUpdatesIcon fontSize="large" sx={{ ml: { xs: 1, sm: 2 } }} />
                    </Box>
                </Box>
                <Box id="icons-container" sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', p: 2 }}>
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaHtml5 />
                                    <span className="icon-label">HTML</span>
                                </Icon>

                            </motion.div>

                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <IoLogoCss3 style={{ fontSize: '48px' }} />
                                    <span className="icon-label">CSS</span>
                                </Icon>
                            </motion.div>

                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaBootstrap style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Bootstrap</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],

                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaJs style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Javascript</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],

                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaReact style={{ fontSize: '48px' }} />
                                    <span className="icon-label">ReactJS</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],

                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <SiMui style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Material UI</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaPython style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Python</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <DiDjango style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Django</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <SiPostman style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Postman</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaDocker style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Docker</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaGithub style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Github</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaGitAlt style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Git</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <VscVscode style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Vscode</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <RiPhpFill style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Php</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <SiMysql style={{ fontSize: '48px' }} />
                                    <span className="icon-label">MySql</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <FaLinux style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Linux</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <SiApache style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Apache</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                        <Grid size={2}>
                            <motion.div
                                whileHover={{
                                    scale: [null, 1.1, 1.6],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.6, 1],
                                        ease: ["easeInOut", "easeOut"],
                                    },
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                <Icon>
                                    <SiAdminer style={{ fontSize: '48px' }} />
                                    <span className="icon-label">Adminer</span>
                                </Icon>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </AnimatedContent>


    )
}

export default Techstack