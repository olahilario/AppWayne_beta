import React, { useState } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddItem = () => {
    if (inputValue) {
      if (editIndex !== null) {
        const updatedItems = items.map((item, index) => (index === editIndex ? inputValue : item));
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleEditItem = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        label="Item"
        variant="outlined"
      />
      <Button onClick={handleAddItem} variant="contained">{editIndex !== null ? 'Update' : 'Add'}</Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditItem(index)} color="primary">Edit</Button>
                  <Button onClick={() => handleDeleteItem(index)} color="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ItemTable;