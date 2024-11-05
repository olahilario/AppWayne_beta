import { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [selectedValue, setSelectedValue] = useState('Fox');
  const navigate = useNavigate()

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  };

  function defineUserInterface () {
    const userInterface = selectedValue
    navigate(`/${userInterface}Home`)
    
  }

  function goToAbout () {
    navigate('/about')
  }

  return (
    <div className={styles.background}>
      <img src="logo_login.png" alt="Logo retrô do cavernoso!" className={styles.logo_login} onClick={goToAbout}/>

      <div className={styles.container_login}>
        <select className={styles.retro_input} value={selectedValue} onChange={handleChange}>
          <option disabled>Quem é você?</option>
          <option value="Batman">Batman</option>
          <option value="Alfred">Alfred</option>
          <option value="Fox">Lucius Fox</option>
        </select>
        <button className={styles.retro_button} onClick={defineUserInterface}>enter</button>
      </div>
    </div>
  );
}

export default Login