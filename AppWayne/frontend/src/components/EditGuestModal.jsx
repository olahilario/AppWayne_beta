import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditGuestModal({ guest, onClose, onUpdate }) {
  const [name, setName] = useState(guest.name);
  const [why, setWhy] = useState(guest.why);
  const [email, setEmail] = useState(guest.email);
  const [phone, setPhone] = useState(guest.phone);
  const [date, setDate] = useState(guest.date.split('T')[0])
  const [weekDay, setWeekDay] = useState(guest.date)

  const handleUpdate = () => {
    const updatedGuest = { ...guest, name, why, email, phone, weekDay, date };
    onUpdate(updatedGuest);
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={style}>
        <h2>Editar Convidado</h2>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Razão"
          variant="outlined"
          fullWidth
          margin="normal"
          value={why}
          onChange={(e) => setWhy(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          label="Data"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
            setWeekDay(e.target.value)}}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button onClick={handleUpdate} variant="contained">Salvar</Button>
        <Button onClick={onClose} variant="outlined" style={{ marginLeft: '10px' }}>Cancelar</Button>
      </Box>
    </Modal>
  );
}

export default EditGuestModal