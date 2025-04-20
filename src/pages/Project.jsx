import { Box, Typography, Grid, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import styles from './Project.module.css';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/username/ecommerce',
      demo: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      link: 'https://github.com/username/task-manager',
      demo: 'https://task-manager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data using the OpenWeather API. Features include location search and detailed weather information.',
      image: 'https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      link: 'https://github.com/username/weather-app',
      demo: 'https://weather-dashboard-demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and contact information. Built with modern design principles and responsive layout.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Material-UI', 'Framer Motion', 'CSS Modules'],
      link: 'https://github.com/username/portfolio',
      demo: 'https://portfolio-demo.com'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box className={styles.projectsContainer}>
        <Typography
          variant="h3"
          component="h1"
          className={styles.title}
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index} className={styles.gridItem}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                demo={project.demo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;