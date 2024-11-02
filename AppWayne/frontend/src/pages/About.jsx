import { useNavigate } from 'react-router-dom'
import styles from './About.module.css'
import { useState } from 'react'


function About({isLogged, setIsLogged}) {

  const navigate = useNavigate()

  function backToIdentify(){
    navigate('/identify')
  }

  return (
    <div className={styles.background_about}>
      <img src="logo_login.png" alt="Logo retrô do cavernoso!" className={styles.logo_login} onClick={backToIdentify} />


      <p className={styles.text_about} onClick={backToIdentify}>
      <h1 className={styles.h1}>.about</h1>
      Sejamos francos: Bruce Wayne é um herdeiro que se propõe ao papel de justiceiro. Seu super poder é ser rico e disso derivam aparatos tecnológicos que o capacitam para combater o crime. Coadjuvante à sua trama, o insosso e austero Batman sempre favoreceu os vilões da trama, que ganharam destaque e predileção do público. A humanidade de Batman nos faz pensar sobre a possibilidade de desconstrução desse lugar tecnológico que sempre lhe pertenceu. Dentro das Indústrias Wayne, o grande gênio desenvolvedor é Lucius Fox. Responsável pela criação e manutenção do sistema de gestão e monitoramento do patrimônio de seu patrão, sendo a cidade de Gotham City parte desse inventário. O problema é que Batman vive preso ao passado e não se adapta a nenhuma mudança na interface do myWayne Software. O resultado é um app/software de gestão e monitoramento com tecnologia de ponta, boas práticas de código e design esquizofrênico. Retrô e contemporâneo se mesclam em interfaces distintas para cada usuário. Cada uma delas traduz algo da personalidade, do trabalho e do estilo de vida de cada um dos três personagens da trama. Bem vindo(a) ao AppWayne ou, melhor dizendo, ao MyWayneSoftware.
      </p>
    </div>
  )
}

export default About
