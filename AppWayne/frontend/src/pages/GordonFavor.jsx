import { useEffect, useState } from 'react'
import styles from './GordonFavor.module.css'
import HeaderBatman from '../components/HeaderBatman'

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function GordonFavor() {
  const [desires, setDesires] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null)

  const fetchDesires = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/desires/');
      const data = await response.json();
      setDesires(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addDesire = async () => {
    const desireData = { title, description, deadline };
    try {
      const response = await fetch('http://127.0.0.1:8000/batapi/desires/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(desireData),
      })
      if (!response.ok){
        const errorData = await response.json()
        setError(errorData.message || 'A adição falhou!')
      }
      else{
        const data = await response.json()
        setDesires((prev) => [...prev, data])
        resetFields()
        setError(null)
      }
    } catch (err) {
      console.log(err)
      setError('Um erro inesperado ocorreu!')
    }
  };

  const editDesire = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/batapi/desire/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setDeadline(data.deadline);
      setEditingId(id);
    }
    catch (error) {
      console.log(error);
    }
  };

  const updateDesire = async () => {
    if (editingId === null)
      return

    const updatedDesire = { title, description, deadline }
    try {
      const response = await fetch(`http://127.0.0.1:8000/batapi/desires/${editingId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDesire),
      });
      const data = await response.json()
      setDesires((prev) =>
        prev.map((desire) => (desire.id === editingId ? data : desire))
      );
      resetFields();
      setEditingId(null)
    }
    catch(error){
      console.log(error);
    }
  };

  const deleteDesire = async (id) =>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/batapi/desires/${id}/`, {
        method: 'DELETE'
      })
      if (!response.ok){
        throw new Error('Deu ruim no DELETE')
      }
      else{
        fetchDesires()
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  useEffect(()=>{
    fetchDesires()
  },[])

  return (
    <>
      <HeaderBatman />
      <div className={styles.bg}>
        <div className={styles.container}>
          <h1 className={styles.title}>Peça para o Gordon!</h1>
          <input
            type="text"
            className={styles.input}
            placeholder='O que você precisa?'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={styles.textarea}
            placeholder='Descreva a demanda para o Comissário Gordon!'
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Typography>
            Qual o deadline?
          </Typography>
          <input
            style={{cursor: 'pointer'}}
            type="date"
            className={styles.input}
            placeholder='When is the deadline?'
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button className={styles.button} onClick={editingId ? updateDesire : addDesire}>
            {editingId ? 'Update Desire' : 'Add Desire'}
          </button>
        </div>
        <Box
          sx={{maxHeight:'50vh'}}
        >
          <div className={styles.display}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {desires.map((desire) => (
                <React.Fragment key={desire.id}>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar alt="Batman" src="batman_8bit.jpg" />
                    </ListItemAvatar>
                    <ListItemText sx={{ fontFamily: 'monospace' }}
                      primary={desire.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{
                              color: 'text.primary',
                              display: 'block',
                              fontFamily: 'monospace',
                              maxWidth: '100px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'pre-line'
                            }}
                          >
                            {desire.deadline}
                          </Typography >
                          {desire.description}
                        </React.Fragment>
                      }
                    />
                    <button onClick={() => editDesire(desire.id)}>Edit</button>
                    <button onClick={() => deleteDesire(desire.id)}>Delete</button>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </div>
        </Box>
      </div>
    </>
  );
}

export default GordonFavor;
