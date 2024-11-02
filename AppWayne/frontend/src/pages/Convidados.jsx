import styles from './Convidados.module.css'
import BatConvidado from './BatConvidado'
import HeaderAlfred from '../components/HeaderAlfred'
import EditGuestModal from '../components/EditGuestModal';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'

function Convidados() {

  const batImages = Array(390).fill('bat.svg')
  const [guests, setGuests] = useState([])

  const [isEditing, setIsEditing] = useState(false)
  const [editingGuest, setEditingGuest] = useState(null)


  
  const closeEditModal = () => {
    setIsEditing(false)
    setEditingGuest(null)
  }

  const getGuests = async()=>{
    try{
      const response = await fetch('http://127.0.0.1:8000/batapi/guests/')
      if(!response.ok){
        throw new Error('Get Guests Falhou miseravelmente!')
      }
      else{
        const data = await response.json()
        setGuests(data)
        console.log(data)
      }
    }
    catch(error){
      console.log(error)
    }
  }


  const editGuest = async(id)=>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/batapi/guest/${id}/`)
      if(!response){
        throw new Error('Falhou miseravelmente ao buscar os dados do convidado.')
      }
      else{
        const editedGuest = await response.json()
        setEditingGuest(editedGuest)
        setIsEditing(true)
      }
    }
    catch(error){
      console.error(error)
    }
  }

  const updateGuest = async (updatedGuest) =>{
    try{
      const response = await fetch(`http://127.0.0.1:8000/batapi/guests/${updatedGuest.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGuest)
      })
      if (!response){
        throw new Error('Falhou miseravelmente ao atualizar os dados do convidado')
      }
      else{
        await getGuests()
        closeEditModal()
      }
    }
    catch(error){
      console.error(error)
    }
  }


useEffect(()=>{
  getGuests()
},[])

const deleteGuest = async(id)=>{
  try{
    const response = await fetch(`http://127.0.0.1:8000/batapi/guests/${id}/`,{
      method: 'DELETE'
    })
    if(!response){
      throw new Error('Falhou miseravlemente no DELETE!')
    }
    else{
      getGuests()
    }
  }
  catch(error){
    console.log(error)
  }
}


const toggleAprove = async (id) => {
  try{
    const getResponse = await fetch(`http://127.0.0.1:8000/batapi/guest/${id}/`)
      if (!getResponse.ok){
        throw new Error('Deu ruim no GETResponse')
      }
      else{
        const guest = await getResponse.json()
        const updatedGuest = {
          ...guest,
          aproved : !guest.aproved
        }

        const response = await fetch(`http://127.0.0.1:8000/batapi/guests/${id}/`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedGuest)
        })
        if (!response.ok){
          console.error('Falhou no update')
        }
        else{
          console.log('Update rolou!')
          getGuests()
        }
      }}
  catch(error){
    console.error(error)
  }
}


  const sortedGuests = [...guests].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })



return (
  <div className={styles.container_alfred_convidados}>
    <HeaderAlfred />


    <h1 className={styles.title}>Agendamentos</h1>
    <div className={styles.bats}>
      {batImages.map((src, index) => (
        <img key={index} className={styles.bat} src={src} alt="" />
      ))}
    </div>

    <div className={styles.guests_cards}>
      {sortedGuests.map((guest, index) => (
        <BatConvidado
          key={index}
          id={guest.id}
          name={guest.name}
          why={guest.why}
          email={guest.email}
          phone={guest.phone}
          date={guest.date}
          avatar={guest.avatar}
          aproved={guest.aproved}
          deleteGuest={deleteGuest}
          toggleAprove={toggleAprove}
          editGuest={editGuest}
        />
      ))}

        {isEditing && (
          <EditGuestModal
            guest={editingGuest}
            onClose={closeEditModal}
            onUpdate={updateGuest}
          />
        )}
    </div>
  </div>
);
}

export default Convidados