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

const Icon = styled(Box)({
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    fontSize: '48px'
})


const Techstack = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '15vw' }}>
                <Typography component="div" variant='h1' sx={{
                    mb: '6rem',
                    fontSize: '2.25rem', fontFamily: 'Inter, sans-serif'
                }}>
                    Technologies I Work With
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ mb: '50vw' }}>
                    <Grid size={2}>
                        <Icon>
                            <FaHtml5 />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <IoLogoCss3 style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaBootstrap style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaJs style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaReact style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <SiMui style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaPython style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <DiDjango style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <SiPostman style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaDocker style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaGithub style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaGitAlt style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <VscVscode style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <RiPhpFill style={{ fontSize: '48px' }} />
                        </Icon>

                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <SiMysql style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <FaLinux style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <SiApache style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                    <Grid size={2}>
                        <Icon>
                            <SiAdminer style={{ fontSize: '48px' }} />
                        </Icon>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Techstack