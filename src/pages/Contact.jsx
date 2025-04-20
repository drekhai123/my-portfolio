import { Box, Typography, Container, Grid, IconButton, Paper } from '@mui/material';
import { Email, GitHub, LinkedIn, Twitter, LocationOn, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

function Contact() {
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'khai.lumberjack@gmail.com',
      link: 'mailto:khai.lumberjack@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+84 559 039 054',
      link: 'tel:+84559039054'
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Ho Chi Minh, Viet Nam',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      name: 'GitHub',
      link: 'https://github.com/drekhai123'
    },
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/doan-tuan-khai/'
    },

  ];

  return (
    <Container maxWidth="lg">
      <Box className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            className={styles.title}
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="h6" className={styles.subtitle} align="center">
            I'm always open to new opportunities and interesting projects
          </Typography>
        </motion.div>

        <Grid container spacing={4} className={styles.contentGrid}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper elevation={0} className={styles.contactInfoSection}>
                <Typography variant="h5" className={styles.sectionTitle}>
                  Contact Information
                </Typography>
                <Box className={styles.contactItems}>
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={styles.contactItem}
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <Box className={styles.iconWrapper}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" className={styles.contactLabel}>
                            {item.title}
                          </Typography>
                          <Typography variant="body1" className={styles.contactValue}>
                            {item.value}
                          </Typography>
                        </Box>
                      </a>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper elevation={0} className={styles.socialSection}>
                <Typography variant="h5" className={styles.sectionTitle}>
                  Follow Me
                </Typography>
                <Box className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;