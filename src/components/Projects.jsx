import { Box, Grid, IconButton } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { PROJECTS } from '../constants/index.js'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10vw' }}>
                <Typography component="div" variant='h1' sx={{
                    mb: '6rem',
                    fontSize: '2.25rem',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    Things I've Built
                </Typography>
            </Box>

            <Box sx={{ pl: 8, pr: 8, md: { ml: '3.5vw' } }}>
                <Grid container spacing={4} justifyContent="center">
                    {PROJECTS.map((project, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} direction="row"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                            }} key={index}>
                            <Card sx={{ maxWidth: 600, height: '100%', backgroundColor: "inherit", color: 'inherit', border: '1px solid #cdcfd1', borderRadius: '6px' }}>
                                <CardMedia
                                    component="img"
                                    alt={project.title}
                                    height="215"
                                    image={project.image}
                                    sx={{ objectFit: 'contain' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: '1.75rem',
                                        fontWeight: 300,
                                        fontFamily: 'Inter, sans-serif',
                                    }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="inherit" sx={{
                                        fontSize: '1rem',
                                        fontWeight: 100,
                                        fontFamily: 'Inter, sans-serif',
                                    }}>
                                        {project.description}
                                    </Typography>
                                    {project.technologies.map((tech, index) => (
                                        <Typography
                                            key={index}
                                            variant="caption"
                                            sx={{
                                                display: 'inline-block',
                                                backgroundColor: '#333',
                                                color: '#fff',
                                                borderRadius: '4px',
                                                px: 1,
                                                py: 0.5,
                                                mr: 1,
                                                mt: 1,
                                                fontSize: '0.85rem',
                                            }}
                                        >
                                            {tech}
                                        </Typography>
                                    ))}

                                </CardContent>
                                <CardActions sx={{ justifyContent: 'space-between' }}>
                                    <IconButton sx={{
                                        fontSize: '1rem',
                                        fontWeight: 100,
                                        fontFamily: 'Inter, sans-serif',
                                        color: 'white',
                                        '&:hover': { color: '#00bcd4' }
                                    }}><GitHubIcon sx={{ fontSize: '1.2vw', mr: '0.25vw' }} /> GitHub Repo
                                </IconButton>
                                    <IconButton sx={{
                                        fontSize: '1rem',
                                        fontWeight: 100,
                                        fontFamily: 'Inter, sans-serif',
                                        color: 'white',
                                        '&:hover': { color: '#00bcd4' }
                                    }}><OpenInNewIcon sx={{ fontSize: '1.2vw', mr: '0.25vw' }} /> Live
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Projects
