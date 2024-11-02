import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteConfirmationDialog({ open, onClose, onDelete }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Remover essa bela invenção?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Não delete hoje o que você só reconhecerá que precisará amanhã!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Desistir</Button>
        <Button onClick={onDelete} autoFocus>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
}