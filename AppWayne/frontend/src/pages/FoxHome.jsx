import HeaderFox from '../components/HeaderFox'
import styles from './FoxHome.module.css'
import WelcomeFox from '../components/WelcomeFox'

import FireFlies from '../components/FireFlies'

function FoxHome() {
  return (
    <div className={styles.container_fox_home}>

        <HeaderFox/>

        <FireFlies />
        <div className={styles.welcome_div}>
          <WelcomeFox
            image={'/loading_bg.jpg'}
            title={'AppWayne'}
            description={
            <>
            Bem vindo! <br/>
            Esse espaço foi pensado para impulsionar invenções de toda sorte!<br/>
            Sinta-se livre para aqui imaginar a vida, <br/>
            e, quem sabe, lá fora também?
            </>
            }
          >

            
          </WelcomeFox>
        </div>

        

        
        
    </div>
  )
}

export default FoxHome