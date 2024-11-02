import styles from './Projetos.module.css'
import HeaderFox from '../components/HeaderFox'
import ProductCard from '../components/ProductCard';
import ProductCardDark from '../components/ProductCardDark'
import FireFlies from '../components/FireFlies';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function Projetos() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const navigate = useNavigate()


  const sendMesoFood = async () =>{
    const mesoFood = {
      name: 'Meso Food Injection Device',
      country: 'Estados Unidos',
      mvp: '2026/09/11',
      price: 50000,
      author: 'Stuart Redneck'
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/patent/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mesoFood),
      });

      if (!response.ok) {
        throw new Error('Erro no registro da patente.');
      }
      else{
      navigate('/patentes')
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  const sendLepidopteroGeringonca = async () =>{
    const lepidoptero = {
      name: 'LepidopteroGeringonca',
      country: 'Rússia',
      mvp: '2024/11/02',
      price: 50,
      author: 'Joseph Climber'
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/patent/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lepidoptero),
      });

      if (!response.ok) {
        throw new Error('Erro no registro da patente.');
      }
      else{
      navigate('/patentes')
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container_fox_projetos}>
      <HeaderFox />

      <FireFlies />

      <div className={styles.stack_container}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
        >




          <Item className={styles.cardItem}>
            <ProductCard
            image={"/asas.jpg"}
            avatar={'/coringa.png'}
            alt={"!"}
            title={"Lepidóptero-geringonça"}
            subtitle={"Para vôos curtos!"}
            resumo={'Obviamente o Coringa não se atreveu a testar essa engenhoca que promete voar de maneira "fluida", como assim mesmo ele descreveu. De toda forma está previsto o MVP - Minimum Viable Project -  para dezembro de 2024. Minimamente viável?'}
            send={sendLepidopteroGeringonca}
            />

          </Item>

          <Item className={styles.cardItem} sx={{backgroundColor:'#1e1e28'}}>
            <ProductCardDark
            avatar={'/pinguim.jpg'}
            image={"/"}
            alt={"Sua invenção mais robusta!"}
            title={"Qual o nome da sua invenção?"}
            subtitle={"Imagine o que quiser!"}
            resumo={'Edite esse cartão me explicando brevemente qual é a sua melhor idéia para Gothan City. =) Não se esqueça de enviar.'} 
            />

          </Item>

          <Item className={styles.cardItem}>
            <ProductCard
            avatar={'/mulher_gato.webp'}
            image={"/meso-food-injection-device.jpg"}
            alt={"Protótipo do Meso Food Injection Device!"}
            title={"Meso Food Injection Device"}
            subtitle={"Previsão: Setembro/2026"}
            resumo={'A humanidade está gastando tempo e dinheiro para inventar uma máquina que transforma comida gostosa de verdade em insossas cápsulas de nutrientes. Na Terra isso não faz muito sentido. Mas pode ser útil no espaço.'}
            send={sendMesoFood}
            />
          </Item>



        </Stack>
      </div>
    </div>
  )
}

export default Projetos
