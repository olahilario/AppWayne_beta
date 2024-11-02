import { Box } from '@mui/material'
import MyTextField from '../components/forms/MyTextField'
import MyPassField from '../components/forms/MyPassField'
import MyButton from '../components/forms/MyButton'
import { Link } from 'react-router-dom'
import styles from './Register.module.css'
import { useForm } from 'react-hook-form'
import AxiosInstance from '../components/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'



function Register() {

  const navigate = useNavigate()
  const schema = yup
  .object({
    email: yup.string().email('Informe um e-mail real!').required('É obrigatório informar um e-mail!'),
    password: yup.string()
                .required('Uma senha deve ser criada')
                .min(8,'A senha deve ter pelo menos 8 caracteres.')
                .matches(/[A-Z]/, 'Sim. Aquela chatice de ter pelo menos uma letra maiúscula.')
                .matches(/[a-z]/, 'Sim. Aquela chatice de ter pelo menos uma letra minúscula.')
                .matches(/[0-9]/, 'Sim. Aquela chatice de ter pelo menos um número.')
                .matches(/[!@#$%¬&*-=+§{}"';:.,|\/<>]/, 'Sim. Aquela chatice de ter pelo menos um caractere especial'),
    password2: yup.string().required('Confirme sua senha!')
                    .oneOf([yup.ref('password'), null], 'Você não digitou a mesma senha!')
        
  })

  const {handleSubmit, control} = useForm({resolver:yupResolver(schema)})


  const submission = async (data) => {
    try {
      await AxiosInstance.post('register/', {
        email: data.email,
        password: data.password,
      })
      navigate('/')
    }
    catch (error) {
      console.error('Error in registration', error)
    }
  }

  return (
    <div className={styles.login_background}>

      <form onSubmit={handleSubmit(submission)}>

        <Box className={styles.login_box}>

          <Box className={styles.item_box}>
            <Box className={styles.title}> Registre-se!</Box>
          </Box>

          <Box className={styles.item_box}>
            <MyTextField 
            label={'Email'}
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
            <MyPassField
            label={'Confirm password'}
            name={'password2'}
            control={control}
            />
          </Box>

          <Box className={styles.item_box}>
            <MyButton
            type={'submit'}
            label={'Submeter!'}
            />
          </Box>

          <Box className={styles.item_box}>
            <Link to='/' className={styles.msg}>Already done that? Please <strong>login!</strong></Link>
          </Box>

        </Box>

      </form>

    </div>
  )
}

export default Register
