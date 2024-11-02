import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';



import styles from './PageBuilding.module.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
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
    background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
    opacity: '0.5',
    pointerEvents: 'none',
    transition: 'opacity 0.3s',
  },
  '&:hover::before': {
    opacity: '0.3',
  },
}));

const StyledMedia = styled(CardMedia)( {
  height: 500,
  width: 1500,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.3)',
  },
});



function PageBuilding({ image, title, subtitle, description }) {
  

  const navigate = useNavigate()

  const handleNavigateProjetos = ()=>{
    navigate('/projetos')
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledCard sx={{ width: '1500px' }}>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={handleNavigateProjetos} />
          </IconButton>
          <IconButton aria-label="priority">
            <PriorityHighIcon onClick={handleNavigateProjetos} />
          </IconButton>
        </div>
      </StyledCard>
    </ThemeProvider>
  );
}

export default PageBuilding;