import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';

function EditProductModal({ open, onClose, productData, onSave }) {
  const [formData, setFormData] = useState(productData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Conte sobre sua idéia!</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          name="resumo"
          multiline
          label="Resumo"
          type="text"
          fullWidth
          value={formData.resumo}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          name="country"
          label="Country"
          type="text"
          fullWidth
          value={formData.country}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="mvp"
          label="MVP Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.mvp}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="author"
          label="Author"
          type="text"
          fullWidth
          value={formData.author}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditProductModal;