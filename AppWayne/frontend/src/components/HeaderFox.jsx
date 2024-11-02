import styles from './HeaderFox.module.css'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'




function HeaderFox() {

  const navigate = useNavigate()
  const path = location.pathname

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
        <img src="fox_linkedin.jpg" alt="Lucius Fox" className={styles.avatar} onClick={()=>{navigate('/identify')}} />
        <button className={styles.logout_button} onClick={logoutUser}>Logout</button>


      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
        <Link to='/FoxHome' selected={'/FoxHome' === path} className={styles.menu_item}><li>Home</li></Link>
        <Link to='/projetos' selected={'/projetos' === path} className={styles.menu_item}><li>Projetos</li></Link>
        <Link to='/patentes' selected={'/patentes' === path} className={styles.menu_item}><li>Patentes</li></Link>
        <Link to='/veiculos' selected={'/veiculos' === path} className={styles.menu_item}><li>Veículos</li></Link>

        </ul>
      </nav>

    </div>
      
    </div>
  )
}

export default HeaderFox
