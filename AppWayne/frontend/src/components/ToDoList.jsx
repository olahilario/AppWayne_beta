import styles from './ToDoList.module.css';
import { useEffect, useState } from 'react';
import { Container, TextField, Button, List, ListItem } from '@mui/material';
import Box from '@mui/material/Box';

function ToDoList() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const [guests, setGuests] = useState([])


  const getGuests = async()=>{
    try{
      const response = await fetch('http://127.0.0.1:8000/batapi/guests/')
      if(!response.ok){
        throw new Error('Get Guests Falhou miseravelmente!')
      }
      else{
        const visitas = await response.json()
        await visitas
        setGuests(visitas)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const getTasks = async () => {
    try{
      const response = await fetch('http://127.0.0.1:8000/batapi/tarefas/')
      if (!response.ok){
        throw new Error('Falhou miseravelmente no GET das tasks!')
      }
      else{
        const tasks_data = await response.json()
        setTasks(tasks_data)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const addTask = async () => {
    if (inputValue.trim()) {
      const newTaskData = {
        name: inputValue,
        complete: false
      }
      try{
        const response = await fetch('http://127.0.0.1:8000/batapi/tarefa/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTaskData)
        })
        if (!response.ok){
          throw new Error('Falhou miseravelmete no POST da task!')
        }
        else{
          const newTask = await response.json()
          setTasks((prevTasks) => [...prevTasks, newTask])
          setInputValue('');

        }
      }
      catch(error){
        console.error(error)
      }
    }
  }

  const deleteTask = async (id) =>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/batapi/tarefas/${id}/`,{
        method: 'DELETE'
      })
      if(!response.ok){
        throw new Error('Falhou miseravelmente no delete da task!')
      }
      else{
        setTasks((prevTasks)=> prevTasks.filter((task)=> task.id !== id))
      }
    }
    catch(error){
      console.error(error)
    }
  }

  const completeTask = async (task) =>{
      const completedTask = {
        ...task,
        complete: !task.complete,
      }
    try{
      const response = await fetch(`http://127.0.0.1:8000/batapi/tarefas/${task.id}/`,{
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(completedTask)
      })
      if (!response.ok){
        throw new Error('Falhou miseravelmente no PUT')
      }
      else{
        const updatedTask = await response.json()
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
    }
    }
    catch(error){
      console.log(error)
    }

  }

  const formatDateToDayMonthWeekday = (dateString) => {
    const dateObj = new Date(dateString + 'T00:00:00');
    const options = { weekday: 'long', timeZone: 'America/Sao_Paulo' };
    const weekday = dateObj.toLocaleDateString('pt-BR', options);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    return `${weekday.toUpperCase()} - ${day}/${month}`;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  useEffect(()=>{
    getGuests()
    getTasks()
    
  },[])

  useEffect(()=>{
    console.log(tasks)
  }, [tasks])

  return (
    <div className={styles.container_global}>
      <div className={styles.container_input}>
        <div className={styles.titulo}>
          <h1>Lista de tarefas</h1>
        </div>
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            label="Nova tarefa"
            variant="outlined"
            sx={{backgroundColor:'#1e1e1e', borderRadius:'5px', fontFamily:'monospace',
            '& .MuiInputBase-input': { color: 'aliceblue' },
            '& .MuiFormLabel-root': { color: 'aliceblue' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '1e1e1e' }
            }}
          />
          <Button
            onClick={addTask}
            variant="contained"
            sx={{marginLeft: '1em', backgroundColor:'#025E73', ":hover":{backgroundColor:'#011F26'}, fontFamily:'monospace'}}
            >
            Adicionar</Button>
        </Container>
      </div>
      
      <div className={styles.container_outputs}>
        <Box component="section" sx={{ p: 2, border: '3px solid #A5A692', marginBottom:'2em', height:'50%', width:'100%', overflow: 'auto'}}>
          <h1>Tarefas</h1>
          <div>
              <ul>
              {tasks.map((task, index) => (
                <li className={styles.task_list}
                key={index}
                style={{ textDecoration: task.complete ? 'line-through' : 'none' }}
                >
                  {task.name}
                  <Button
                    variant="contained"
                    onClick={() => deleteTask(task.id)}
                    sx={{ marginLeft: '15px', maxHeight: '2em', maxWidth: '1em', backgroundColor: 'red', ":hover": { backgroundColor: 'purple' } }}
                  >
                    Del
                  </Button>
                  <Button
                    style={{backgroundColor: task.complete ? 'red' : '#4caf50'}}
                    variant="contained"
                    onClick={() => completeTask(task)}
                    sx={{ marginLeft: '15px', maxWidth: '1em', maxHeight: '2em', ":hover": { backgroundColor: '#388e3c' } }}
                  >
                    ✔
                  </Button>
                  
                </li>
              ))}
              </ul>
          </div>
          
        </Box>

        <Box component="section" sx={{ p: 2, marginBottom:'1em',border: '3px solid #4caf50', height:'50%', width:'100%'}}>
          <h1>Visitas aprovadas</h1>
          <div>
            <ul>
             {guests.filter(guest => guest.aproved).length > 0 ? (
                guests.filter(guest => guest.aproved).map((guest)=>(
                  <li className={styles.task_list} key={guest.id}>
                    {formatDateToDayMonthWeekday(guest.date.split('T')[0])} - <strong>{guest.name}</strong>
                  </li>
                ))
             ) : (
              <li>Sem convidados aprovados no momento</li>
             )}
            </ul>
          </div>
        </Box>

      </div>
    
    </div>
    
  )
}

export default ToDoList
