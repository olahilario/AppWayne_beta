import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import styles from './Patentes.module.css'
import HeaderFox from '../components/HeaderFox'
import DataTable from '../components/DataTable';
import BatMoneyRequest from '../components/BatMoneyRequest';
import FireFlies from '../components/FireFlies';




function Patentes() {

  const [rows, setRows] = useState([])

  const getPatents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/patents/');
      if (!response.ok) {
        throw new Error('Deu ruim no GET das patentes!');
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatents();
  }, []);



  return (
    <div className={styles.container_fox_patentes}>

        <HeaderFox/>

        <FireFlies className={styles.firefly} />


        <Box
        component="section" sx={{ p: 2, border: '1px dashed grey', maxWidth: '90vw', minHeight: '92vh' }}
        className={styles.container_global}
        >

        <Box
        component="section" sx={{ p: 2, border: '1px dashed grey', maxWidth: '30%', maxHeight: '100%' }}
        className={styles.container_cadastro}
        
        >

          <BatMoneyRequest setRows={setRows} >
            
          </BatMoneyRequest>



        </Box>

        <Box
        component="section" sx={{ p: 1, border: '1px dashed grey', maxWidth: '70%', maxHeight: '100%'}}
        className={styles.container_patentes}
        
        >

          <DataTable rows={rows} setRows={setRows} >
            
          </DataTable>

        </Box>




    </Box>
        
        
    </div>
  )
}

export default Patentes