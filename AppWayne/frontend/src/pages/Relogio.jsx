import HeaderAlfred from '../components/HeaderAlfred';
import Clock from '../components/Clock';
import styles from './Relogio.module.css';

import { useNavigate } from 'react-router-dom';


function Relogio() {
  const batImages = Array(999).fill('bat.svg');

  const navigate = useNavigate()



  return (
    <div className={styles.container_alfred_cardapio}>
      <HeaderAlfred />
      <div className={styles.container_relogio_bats}>
      <div className={styles.bats}>
      <div className={styles.clock_container}>
      <Clock />
      </div>
        {batImages.map((src, index) => (
          <img key={index} className={styles.bat} src={src} alt="" />
        ))}
      </div>


      </div>
    </div>
  );
}

export default Relogio;