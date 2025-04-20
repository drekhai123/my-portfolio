import { Box, Typography, Avatar, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            src="https://firebasestorage.googleapis.com/v0/b/mind-mingle-202.firebasestorage.app/o/avatars%2Fselena.jpg?alt=media&token=c55b3be7-26b4-41e8-8db5-b4cec443ac80"
            alt="Avatar"
            sx={{
              width: 200,
              height: 200,
              mb: 4,
              border: '4px solid #fff',
              boxShadow: '0 0 20px rgba(0,0,0,0.1)'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={styles.title}
          >
            Hi, I'm Dre Kai
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={styles.subtitle}
          >
            Software Engineer & Web Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="body1"
            className={styles.description}
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            I create beautiful and functional web applications with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              fontSize: '1.1rem',
              textTransform: 'none'
            }}
          >
            View My Work
          </Button>
        </motion.div>
      </Box>

      <Grid container spacing={4} sx={{ mt: 8 }}>
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Paper elevation={3} className={styles.skillCard}>
              <Typography variant="h5" gutterBottom>
                Frontend Development
              </Typography>
              <Typography variant="body1">
                React, JavaScript, HTML5, CSS3, Material-UI
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Paper elevation={3} className={styles.skillCard}>
              <Typography variant="h5" gutterBottom>
                Backend Development
              </Typography>
              <Typography variant="body1">
                Node.js, Express, MongoDB, RESTful APIs
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Paper elevation={3} className={styles.skillCard}>
              <Typography variant="h5" gutterBottom>
                Tools & Technologies
              </Typography>
              <Typography variant="body1">
                Git, Docker, AWS, CI/CD, Agile
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;