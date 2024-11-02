import styles from './HeaderAlfred.module.css'
import { Link, useLocation } from 'react-router-dom'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'


function HeaderAlfred() {

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
        <img src="alfred.webp" alt="Alfred" className={styles.avatar} onClick={()=>{navigate('/identify')}}/>
        <button className={styles.logout_button} onClick={logoutUser}>Logout</button>

        

      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link to='/AlfredHome' selected={'/AlfredHome' === path}><li>Cadastro</li></Link>
          <Link to='/convidados' selected={'/convidados' === path}><li>Convidados</li></Link>
          <Link to='/relogio' selected={'/relogio' === path}><li>Relógio</li></Link>
          <Link to='/tarefas' selected={'/tarefas' === path}><li>Tarefas</li></Link>
        </ul>
      </nav>
    </div>
      
    </div>
  )
}

export default HeaderAlfred
