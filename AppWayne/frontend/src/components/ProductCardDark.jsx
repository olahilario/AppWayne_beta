import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import EditProductModal from './EditProductModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function ProductCard({avatar, image, title, subtitle, resumo}) {

  const product_template = {
    name: 'Qual o nome da sua invenção?',
    country: 'Qual é o seu país?',
    mvp: '2024/11/15',
    price: 1750,
    author: 'Jerônimo Anônimo',
    resumo: 'Edite esse cartão me explicando brevemente qual é a sua melhor idéia para Gothan City. =) Não se esqueça de enviar.'
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [productData, setProductData] = useState(product_template);


  const handleEdit = () => {
    setModalOpen(true)
  };

  const handleClose = () => {
    setModalOpen(false)
  };

  const handleSave = async (updatedData) => {
    setProductData(updatedData);
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/patent/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Erro no registro da patente.');
      }
      else{
        const newPatent = await response.json()
        console.log(newPatent)
      }
    }
    catch(error) {
      console.log(error)
    }
  };

  const handleScratch = ()=>{
    setProductData(product_template)
  }

  const navigate = useNavigate()


  const handleNavigatePatents = ()=>{
    navigate('/patentes')
  }
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, minWidth: 300, bgcolor:'background.paper', color: 'text.primary' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={avatar} aria-label="recipe">
              avatar={avatar}
            </Avatar>
          }
          title={productData.name}
          subheader={productData.country}
        />
        <CardMedia
          sx={{mixBlendMode:'overlay'}}
          component="img"
          image={image}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary'}} resumo={resumo}>
            {productData.resumo}
          </Typography>
        </CardContent>

        <EditProductModal
          open={modalOpen}
          onClose={handleClose}
          productData={productData}
          onSave={handleSave}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={handleEdit}>
            <EditIcon 
              sx={{
                '&:hover': {
                  color: 'text.primary',
                  cursor: 'pointer',
                  scale: '120%',}
              }}
            />
          </IconButton>
          <DeleteIcon
            onClick={handleScratch}
            aria-label="delete"
            sx={{
              '&:hover': {
                color: 'text.primary',
                cursor: 'pointer',
                scale: '120%',}
              }}
            />

          <IconButton aria-label="add to favorites" onClick={handleNavigatePatents} >
            <SendIcon 
              sx={{
                '&:hover': {
                  color: 'text.primary',
                  cursor: 'pointer',
                  scale: '120%',}
              }}
            />
          </IconButton>


        </CardActions>
        
      </Card>
    </ThemeProvider>
  );
}

export default ProductCard