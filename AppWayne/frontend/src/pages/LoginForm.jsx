import styles from './LoginForm.module.css'
import { Box } from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from '../components/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MyMessage from '../components/MyMessage'



function LoginForm() {

  const {handleSubmit, control} = useForm()
  const navigate = useNavigate()

  const [ShowMessage, setShowMessage] = useState(false)

  function goToAbout () {
    navigate('/about')
  }


  const submission = async (data) => {
    try {
      const response = await AxiosInstance.post('login/', {
        email: data.email,
        password: data.password,
      });
  
      localStorage.setItem('Token', response.data.token);
      navigate('/identify');
    } catch (error) {
      setShowMessage(true);
      console.error('Error in login', error);
    }
  };


  return (
    <div className={styles.login_background}>

      <img src="bat.svg" alt="just a bat" className={styles.bat} onClick={goToAbout}/>

      {ShowMessage ? <MyMessage text={'O login falhou miseravelmente. Tente novamente. Ou resete sua senha!'} color={'#B14848'} /> : null}


      <form onSubmit={handleSubmit(submission)}>

        <Box className={styles.login_box}>

          <Box className={styles.item_box}>
            <Box className={styles.title}> Login</Box>
          </Box>

          <Box className={styles.item_box}>
            <MyTextField 
            label={'email'}
            name={'email'}
            control={control}
            />
          </Box>

          <Box className={styles.item_box}>
            <MyPassField
            label={'Password'}
            name={'password'}
            control={control}
            />
          </Box>

          <Box className={styles.item_box}>
            <MyButton
            type={'submit'}
            label={'Validar'}
            />
          </Box>

          <Box className={styles.item_box} sx={{flexDirection:'column'}}>
            <Link to='/register' className={styles.msg}>Novo? Registre-se!</Link>
            <Link to='/request/password_reset' className={styles.msg}>Esqueceu a senha?</Link>

          </Box>

        </Box>
      
      </form>
      
    </div>
  )
}

export default LoginForm
