import styles from './PasswordReset.module.css'
import { Box } from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect, useMemo } from 'react'
import AxiosInstance from '../components/AxiosInstance'
import { useNavigate } from 'react-router-dom'

import MyMessage from './MyMessage'


const PasswordReset = () => {

  const {handleSubmit, control} = useForm()
  const navigate = useNavigate()
  const [ShowMessage, setShowMessage] = useState(false)
  const {token} = useParams()
  console.log(token)



const submission = async (data) => {
  try {
    const response = await AxiosInstance.post('api/password_reset/confirm/', {
      password: data.password,
      token: token,
    })
    setShowMessage(true)
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }
  catch (error) {
    console.error('Error in password reset confirmation', error)
  }
}

  return (
        <div className={styles.login_background}>
          {ShowMessage ? <MyMessage text={'Senha trocada com sucesso. Redirecionando para o login.'} color={'#222222'} /> : null}

      <form onSubmit={handleSubmit(submission)}>


        <Box className={styles.login_box}>

          <Box className={styles.item_box}>
            <Box className={styles.title}> Resetar a senha!</Box>
          </Box>

          <Box className={styles.item_box}>
            <MyPassField
              label={'Password'}
              name={'password'}
              control={control}
              />
          </Box>

          <Box className={styles.item_box}>
            <MyPassField
              label={'Password again'}
              name={'password2'}
              control={control}
              />
          </Box>

          <Box className={styles.item_box}>
            <MyButton
            type={'submit'}
            label={'Reset password!'}
            />
          </Box>

          <Box className={styles.item_box} sx={{flexDirection:'column'}}>

          </Box>

        </Box>
      
      </form>
      
    </div>
  )
}

export default PasswordReset

