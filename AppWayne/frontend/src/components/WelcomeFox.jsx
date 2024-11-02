import React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import styles from './WelcomeFox.module.css'

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: '10px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1))',
    opacity: '0.5',
    pointerEvents: 'none',
    transition: 'opacity 0.3s',
  },
  '&:hover::before': {
    opacity: '0.2',
  },
}));

const StyledMedia = styled(CardMedia)({
  height: 340,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

function WelcomeFox({ image, title, subtitle, description }) {
  return (

    <ThemeProvider theme={theme}>
      <StyledCard sx={{width:'1920px', opacity:'70%', fontFamily:'monospace'}}>
        <StyledMedia
          component="img"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{fontFamily:'monospace'}}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{fontFamily:'monospace'}}>
            {subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:'monospace'}}>
            {description}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px 16px' }}>
          <IconButton aria-label="add to favorites">
            <PriorityHighIcon />
          </IconButton>

        </div>
      </StyledCard>
  
    </ThemeProvider>

  );
}

export default WelcomeFox