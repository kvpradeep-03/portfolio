import { Box, ButtonGroup, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PROJECTS } from "../constants/index.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styled from "@emotion/styled";
import HandymanIcon from "@mui/icons-material/Handyman";
import AnimatedContent from "../animations/AnimatedContent.jsx";

const Projects = () => {
  const [type, setType] = useState("all");
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
      <div>
        <Box id="projects" sx={{ scrollMarginTop: "150px" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "10vw" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                mb: "3rem",
              }}
            >
              <Typography
                component="div"
                variant="h1"
                sx={{
                  fontSize: { xs: "1.75rem", sm: "3.75rem" },
                  fontWeight: { xs: 300, sm: 100 },
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Things I've Built
              </Typography>
              <HandymanIcon fontSize="large" sx={{ ml: 1 }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              "& > *": {
                mb: 10,
              },
            }}
          >
            <ButtonGroup
              variant="outlined"
              color="white"
              aria-label="Basic button group"
              sx={{
                width: { xs: "90%", sm: "auto" }, // full width on small screens
                justifyContent: "center",
              }}
            >
              {["All", "FrontEnd", "FullStack", "API"].map((label) => (
                <Button
                  key={label}
                  onClick={() => setType(label.toLowerCase())}
                  sx={{
                    minWidth: "90px",
                    maxWidth: "150px",
                    px: 2,
                    py: 1,
                    width: { xs: "100%", sm: "auto" }, // more room for text
                    whiteSpace: "nowrap", // prevent wrapping if needed
                    overflow: "hidden",
                    fontSize: { xs: "0.8rem", sm: "1.25rem" },
                    color: "white",
                    fontWeight: 200,
                    fontFamily: "Inter, sans-serif",
                    borderRadius: "10px",
                  }}
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </Box>

          <Box sx={{ px: { xs: 2, sm: 8 }, ml: { md: "3.5vw" } }}>
            <Grid container spacing={4} justifyContent="center">
              {PROJECTS.filter(
                (project) => type === "all" || project.type === type
              ).map((project, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      maxWidth: 400,
                      height: "100%",
                      backgroundColor: "inherit",
                      color: "inherit",
                      border: "1px solid rgb(65, 67, 68)",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={project.title}
                      height="215"
                      image={project.image}
                      sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "1.75rem",
                          fontWeight: 300,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="inherit"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 100,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {project.description.split("\n").map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </Typography>
                      {project.technologies.map((tech, index) => (
                        <Typography
                          key={index}
                          variant="caption"
                          sx={{
                            display: "inline-block",
                            backgroundColor: "#333",
                            color: "#fff",
                            borderRadius: "4px",
                            px: 1,
                            py: 0.5,
                            mr: 1,
                            mt: 1,
                            fontSize: "0.85rem",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <IconButton
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 100,
                          fontFamily: "Inter, sans-serif",
                          color: "white",
                          "&:hover": { color: "#00bcd4" },
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: "1rem", mr: 1 }} />
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          GitHub Repo
                        </a>
                      </IconButton>
                      <IconButton
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 100,
                          fontFamily: "Inter, sans-serif",
                          color: "white",
                          "&:hover": { color: "#00bcd4" },
                        }}
                      >
                        <OpenInNewIcon sx={{ fontSize: "1rem", mr: 1 }} />
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Live
                        </a>
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>
    </AnimatedContent>
  );
};

export default Projects;
