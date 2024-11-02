import styles from './PasswordResetRequest.module.css'
import { Box } from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect, useMemo } from 'react'
import AxiosInstance from '../components/AxiosInstance'
import { useNavigate } from 'react-router-dom'

import MyMessage from './MyMessage'


const PasswordResetRequest = () => {

  const {handleSubmit, control} = useForm()
  const navigate = useNavigate()

  const [ShowMessage, setShowMessage] = useState(false)



  const submission = async (data) => {
    try {
      const response = await AxiosInstance.post('api/password_reset/', {
        email: data.email,
      });
      setShowMessage(true)
      navigate('/')
    }
    catch (error) {
      console.error('Error in password reset', error)
    }
  }
  
  return (
        <div className={styles.login_background}>
          {ShowMessage ? <MyMessage text={'Se você realmente for um cidadão de Gothan City cadastrado, cheque sua caixa de entrada.'} color={'#222222'} /> : null}

      <form onSubmit={handleSubmit(submission)}>


        <Box className={styles.login_box}>

          <Box className={styles.item_box}>
            <Box className={styles.title}> Request password Reset</Box>
          </Box>

          <Box className={styles.item_box}>
            <MyTextField 
            label={'email'}
            name={'email'}
            control={control}
            />
          </Box>

          <Box className={styles.item_box}>
            <MyButton
            type={'submit'}
            label={'Request!'}
            />
          </Box>

          <Box className={styles.item_box} sx={{flexDirection:'column'}}>

          </Box>

        </Box>
      
      </form>
      
    </div>
  )
}

export default PasswordResetRequest
