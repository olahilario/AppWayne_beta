// import styles from './BatCaprichos.module.css'
import * as React from 'react';
import EditGuestModal from '../components/EditGuestModal'
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useState, useEffect } from 'react';


function BatConvidado({id, name, why, email, phone, date, aproved, toggleAprove, editGuest, deleteGuest}) {

  const dinamicColor = aproved ? '#34e50b' :  '#e50b5b'

  const formatDateToWeekday = (dateString) => {
    const dateObj = new Date(dateString + 'T00:00:00'); 
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'America/Sao_Paulo'
    }

    const formattedDate = dateObj.toLocaleDateString('pt-BR', options);
    const [day, month, year] = formattedDate.split('/');
    const weekday = dateObj.toLocaleDateString('pt-BR', { weekday: 'short', timeZone: 'America/Sao_Paulo' });
    return `${day}-${month}-${year} - ${weekday}`;
};
  return (

    <Card sx={{ width: 250, maxWidth: '100%', boxShadow: 'lg', border: 'none', margin:'20px',backgroundColor: dinamicColor}}>
    <CardContent sx={{ alignItems: 'center', textAlign: 'center'}}>
      <Avatar src={'coringa.png'} sx={{ '--Avatar-size': '4rem' }} />
      <Chip
        size="sm"
        variant="soft"
        color={ aproved ? '#34e50b' : '#e50b5b'}
        sx={{
          mt: -1,
          mb: 1,
          border: '3px solid',
          borderColor: 'background.surface'
        }}
      >
        {formatDateToWeekday(date)}
      </Chip>
      <Typography level="title-lg" sx={{fontFamily:'monospace', fontSize:'18px'}}>{name}</Typography>
      <Typography level="body-sm" sx={{ maxWidth: '24ch', color: 'black', fontFamily:'monospace', fontWeight:'bold', fontSize:'20px'}}>{why}</Typography>
      <Typography level="body-sm" sx={{ maxWidth: '21ch', color: 'black', fontSize:'18px'}}>{email}</Typography>
      <Typography level="body-sm" sx={{ maxWidth: '18ch', color: 'black', fontSize:'18px'}}>{phone}</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mt: 2,
          '& > button': { borderRadius: '2rem' },
        }}
      >
      </Box>
    </CardContent>
    <CardOverflow sx={{ bgcolor: 'background.level1', display:'flex' }}>
      <CardActions buttonFlex="1">
        <ButtonGroup variant="plain" sx={{ bgcolor: 'background.surface', display: 'flex', flexDirection:'column', padding: '10px'}}>
          <Button sx={{color: aproved ? '#34e50b' : 'aliceblue', backgroundColor: '#221f20', marginBottom:'1vh', ":hover":{backgroundColor:'#55EDA1'}}} onClick={aproved ? null : ()=>toggleAprove(id)}>APROVADA</Button>
          <Button sx={{color: aproved ? 'aliceblue' : '#e50b5b',  backgroundColor: '#221f20', marginBottom:'1vh', ":hover":{backgroundColor:'#ED558C'}}} onClick={aproved ? ()=>toggleAprove(id) : null}>AVALIANDO</Button>
          <Button sx={{color: 'aliceblue',  backgroundColor: '#221f20', marginBottom:'1vh', ":hover":{backgroundColor:'#F2C76F'}}} onClick={()=>editGuest(id)}>Editar</Button>
          <Button sx={{color: 'aliceblue', backgroundColor: '#221f20', ":hover":{backgroundColor: '#0b7ce5', cursor: 'help'}}} onClick={()=> deleteGuest(id)}>Deletar</Button>
          
        </ButtonGroup>
      </CardActions>
    </CardOverflow>
    </Card>

  );
}

export default BatConvidado
