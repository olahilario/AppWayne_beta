import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './MyButton.module.css'

export default function MyButton(props) {

  const {label, type} = props

  return (
      <Button type={type} variant="contained" className={styles.form_button}>
        {label}
      </Button>
  );
}