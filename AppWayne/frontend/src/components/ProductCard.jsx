import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductCard({image, alt, resumo, title, subtitle, avatar, send}) {


  const navigate = useNavigate()




  

  const handleNavigatePatents = ()=>{
    navigate('/patentes')
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={avatar} aria-label="recipe">
            img_avatar={avatar}
            
          </Avatar>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        component="img"
        image={image}
        alt={alt}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} resumo={resumo}>
          {resumo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleNavigatePatents}>
          <FavoriteIcon 
          sx={{
              '&:hover': {
                color: 'text.secondary',
                cursor: 'pointer',
                scale: '110%'}
              }}
          />
        </IconButton>

        <IconButton aria-label="add to favorites" onClick={send} >
          <SendIcon 
            sx={{
              '&:hover': {
                color: 'text.secondary',
                cursor: 'pointer',
                scale: '120%',}
              }}
          />
        </IconButton>


      </CardActions>
      
    </Card>
  );
}

export default ProductCard