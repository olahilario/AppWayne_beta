import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from './MyTextField.module.css'
import { Controller } from 'react-hook-form'

export default function MyTextField(props) {
  const {label, name, control} = props

  return (

    <Controller 
      name = {name}
      control = {control}
      render = {({
        field: {onChange, value},
        fieldState: {error},
        formState,
      }) => (
        <TextField
        id="outlined-basic"
        onChange={onChange}
        value = {value}
        label={label}
        variant="outlined" 
        className={styles.mytextfield}
        error={!!error}
        helperText ={error?.message}
        />
      )
    }
    
    />



  );
}