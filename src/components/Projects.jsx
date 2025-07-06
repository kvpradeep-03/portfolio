import { Box, ButtonGroup, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { PROJECTS } from '../constants/index.js'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styled from '@emotion/styled'
import HandymanIcon from '@mui/icons-material/Handyman';


const Projects = () => {

    const [type, setType] = useState('all')
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10vw' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', mb: '3rem' }}>
                    <Typography
                        component="div"
                        variant="h1"
                        sx={{
                            fontSize: '2.25rem',
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        Things I've Built
                    </Typography>
                    <HandymanIcon fontSize='large' sx={{ ml: 1 }} />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                   
                    '& > *': {
                        mb: 10,
                    },
                }}
            >
                <ButtonGroup variant="outlined" color='white' aria-label="Basic button group">
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '1.50rem',
                            fontWeight: '100',
                            fontFamily: 'Inter, sans-serif',
                            borderRadius: '10px'
                        }}
                        onClick={()=>setType('all')}
                    >
                        All
                    </Button>
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '1.50rem',
                            fontWeight: '100',
                            fontFamily: 'Inter, sans-serif',
                        }}
                        onClick={()=>setType('frontend')}
                    >
                        FrontEnd
                    </Button>
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '1.50rem',
                            fontWeight: '100',
                            fontFamily: 'Inter, sans-serif',
                        }}
                        onClick={()=>setType('fullstack')}
                    >
                        FullStack
                    </Button>
                    <Button
                        sx={{
                            color: 'white',
                            fontSize: '1.50rem',
                            fontWeight: '100',
                            fontFamily: 'Inter, sans-serif',
                            borderRadius: '10px'
                        }}
                        onClick={()=>setType('api')}
                    >
                        Api
                    </Button>
                </ButtonGroup>

            </Box>

            <Box sx={{ pl: 8, pr: 8, md: { ml: '3.5vw' } }}>
                <Grid container spacing={4} justifyContent="center">
                    {PROJECTS
                        .filter(project => type === 'all' || project.type === type)
                        .map((project, index) => (
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
                                    }}><GitHubIcon sx={{ fontSize: '1.2vw', mr: '0.25vw' }} /> <a href={project.git} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', }} >GitHub Repo</a>
                                    </IconButton>
                                    <IconButton sx={{
                                        fontSize: '1rem',
                                        fontWeight: 100,
                                        fontFamily: 'Inter, sans-serif',
                                        color: 'white',
                                        '&:hover': { color: '#00bcd4' }
                                    }}><OpenInNewIcon sx={{ fontSize: '1.2vw', mr: '0.25vw' }} /> <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', }} >Live</a>
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
