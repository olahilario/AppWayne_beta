import HeaderAlfred from '../components/HeaderAlfred';
import styles from './Tarefas.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ToDoList from '../components/ToDoList';


function Tarefas() {
  const batImages = Array(400).fill('bat.svg');

  const navigate = useNavigate()



  return (
    <div className={styles.container_alfred_tarefas}>
      <HeaderAlfred />
      <div className={styles.todolist_container}>
        <ToDoList />
      </div>
      <div className={styles.bats}>
        <div>
        {batImages.map((src, index) => (
          <img key={index} className={styles.bat} src={src} alt="" />
        ))}
        </div>
      </div>

    </div>
  );
}

export default Tarefas;