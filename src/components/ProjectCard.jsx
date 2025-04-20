import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, image, technologies, link, demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={styles.card}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          className={styles.cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {description}
          </Typography>
          <Box className={styles.technologies}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                className={styles.techChip}
              />
            ))}
          </Box>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button
            size="small"
            startIcon={<GitHub />}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Code
          </Button>
          <Button
            size="small"
            startIcon={<Launch />}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Demo
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;