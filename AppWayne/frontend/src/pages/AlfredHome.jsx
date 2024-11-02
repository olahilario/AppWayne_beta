import styles from './AlfredHome.module.css';
import HeaderAlfred from '../components/HeaderAlfred';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';

const inputStyles = {
  mb: 2,
  backgroundColor: '#272823',
  '& .MuiInputBase-input': { 
    color: '#edb522',
    backgroundColor: '#272823',
  },
  '& .MuiFormLabel-root': { 
    color: '#e6e2c9',
  },
  '& .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
    color: '#edb522',

  },
  '&:hover .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
    color: '#edb522',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
    color: '#edb522',

  },
  '&.Mui-focused .MuiInputBase-input': { 
    backgroundColor: '#272823',
    color: '#edb522',

  },
  '&.Mui-filled .MuiInputBase-input': { 
    backgroundColor: '#272823',
    color: '#edb522',

  },
  fontFamily: 'monospace',
};

const inputStyles2 = {
  mb: 2,
  backgroundColor: 'aliceblue',
  '& .MuiInputBase-input': { 
    color: '#edb522',
    backgroundColor: '#272823',
  },
  '& .MuiFormLabel-root': { 
    color: '#e6e2c9',
  },
  '& .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
    borderColor: '#edb522',
  },
  '&.Mui-focused .MuiInputBase-input': { 
    backgroundColor: '#272823',
  },
  '&.Mui-filled .MuiInputBase-input': { 
    backgroundColor: '#272823',
  },
  fontFamily: 'monospace',
  
};

const calendarStyles = {
  backgroundColor: '#272823',
  '& .MuiCalendarPicker-root': {
    backgroundColor: '#272823',
  },
  '& .MuiPickersDay-root': {
    color: '#edb522',
  },
  '& .MuiPickersDay-daySelected': {
    backgroundColor: '#edb522',
    color: '#272823',
  },
  '& .MuiPickersDay-dayToday': {
    backgroundColor: '#edb522',
    color: '#272823',
  },
  '& .MuiTypography-root': {
    color: '#e6e2c9',
  },
};

const schema = yup.object({
  name: yup.string().min(3, 'Seu nome deve ter pelo menos 3 caracteres. Não?').required('Informe seu nome, cidadão!'),
  why: yup.string().required('Qual a razão da visita?').min(20, 'Detalhe um pouco mais o objetivo da visita!'),
  email: yup.string().email('Email inválido!').required('Informe seu email, cidadão!'),
  phone: yup.string().required('Informe seu telefone').min(11, 'Inclua o DDD no telefone.'),
  date: yup.date().required('Informe a data pretendida!')
});

function AlfredHome() {
  const batImages = Array(390).fill('bat.svg');

  const navigate = useNavigate()
  
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      why: '',
      email: '',
      phone: '',
      date: null,
      aproved: false
    },
  });

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/guests/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro no agendamento!');
      }

      navigate('/convidados')
    }
    catch(error) {
      console.log(error)
    }
    reset()
  }

  

  return (
    <div className={styles.container_alfred_home}>
      <HeaderAlfred />
      <div className={styles.bats}>
        {batImages.map((src, index) => (
          <img key={index} className={styles.bat} src={src} alt="" />
        ))}

        <Box
          component="section"
          className={styles.box}
          sx={{ p: 4, border: 'none', boxShadow: 3 }}>
          <h1 style={{ textAlign: 'center', marginBottom: '16px', borderRadius: '5px',color: '#e6e2c9', fontFamily: 'monospace', fontWeight: 'bolder', fontSize: '3em', minWidth: '30vw' }}>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Nome do cidadão"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={inputStyles}
                />

              )}
            />

            <Controller
              name="why"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  multiline
                  minRows={3}
                  label="Motivo da visita"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={inputStyles}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={inputStyles}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Telefone"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                  sx={inputStyles}
                />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    label="Data"
                    value={value ? dayjs(value) : null}
                    onChange={(newValue) => {
                      if (newValue) {
                        onChange(newValue)
                      }
                      else {
                        onChange(null)
                      }}}
                    slots={{
                      textField: (params) => (
                        <TextField {...params}
                        value={value ? `${dayjs(value).format('YYYY/MM/DD')}- ${dayjs(value).format('dddd')}` : ''}
                        sx={inputStyles2} />
                      ),
                    }}
                    PaperProps={{
                      sx: calendarStyles
                    }}
                  />
                )}
              />
            </LocalizationProvider>

            <button type='submit' className={styles.button}>Cadastrar!</button>
          </form>
        </Box>  
      </div>
    </div>
  );
}

export default AlfredHome;