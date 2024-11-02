import HeaderBatman from '../components/HeaderBatman'
import styles from './BatmanHome.module.css'


import React from 'react'

function BatmanHome() {
  
  return (
    <div className={styles.batman_home_bg}>

      <HeaderBatman />
      
      <div className={styles.container_content_home}>
        <div className={styles.div_content_home}>
          <span className={styles.title}>Caution!</span>
          <p className={styles.content_home}>
          *    É expressamente proibido, sob pena de chutes e socos, <br />utilizar o MyWayne Software fora das indústrias Wayne. <br /> <br />*    Jamais utilize salvamentos automáticos para suas<br /> credenciais (mesmo que seus navegadores insistam). <br /><br />*    Também recomendamos a utilização do Internet Explorer.
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default BatmanHome
