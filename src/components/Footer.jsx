import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className={styles.footer}>
      <Typography variant="body2" className={styles.copyright}>
        © {currentYear} Dre Kai. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;