import styles from './HeaderBatman.module.css'
import { Link, useLocation } from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'

function HeaderBatman() {

  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()

  const logoutUser = async () => {
    try {
      await AxiosInstance.post('logoutall/', {});
      localStorage.removeItem('Token');
      navigate('/');
    }
    catch (error) {
      console.error("Logout falhou miseravelmente:", error);
    }
  }
  
  return (
    <div>

      <div>

      <div className={styles.container_avatar}>
        <img src="batman_8bit.jpg" alt="8 Bitman" className={styles.avatar} onClick={()=>{navigate('/identify')}} />
        <button className={styles.logout_button} onClick={logoutUser}>Logout</button>

      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link to='/BatmanHome' selected={'/BatmanHome' === path}><li>Home</li></Link>
          <Link to='/forca' selected={'/forca' === path}><li>Forca</li></Link>
          <Link to='/mapa' selected={'/mapa' === path}><li>Mapa</li></Link>
          <Link to='/gordon_favor' selected={'/gordon_favor' === path}><li>Lista de favores</li></Link>

        </ul>
      </nav>

    </div>
      
    </div>
  )
}

export default HeaderBatman
