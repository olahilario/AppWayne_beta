import HeaderFox from '../components/HeaderFox'
import styles from './Veiculos.module.css'
import Multas from './Multas'
import PageBuilding from './PageBuilding'
import FireFlies from '../components/FireFlies'

function Veiculos() {
  return (
    <div className={styles.container_fox_veiculos}>

        <HeaderFox/>

        <FireFlies />
        
        <div className={styles.welcome_div}>
          <PageBuilding
            image={'/abstract.jpg'}
            title={'Desculpe o transtorno!'}
            description={
              <>
              ¯\_(ツ)_/¯ <br/>
              Essa seção não ficou pronta a tempo!<br/>
              A vida é uma função assíncrona, não é mesmo?<br/>
              </>
              }
          >

          </PageBuilding>
        </div>


        {/* <Multas /> */}
        
    </div>
  )
}

export default Veiculos