import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography} from '@mui/material';
import { useEffect, useState } from 'react';

function DataTable({rows, setRows}) {

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'name', headerName: 'Nome comercial', width: 170 },
    { field: 'country', headerName: 'País', width: 70 },
    { field: 'mvp', headerName: 'Data do MVP', width: 110 },
    { field: 'price', headerName: 'Custo($)', type: 'number', width: 75 },
    { field: 'author', headerName: 'Inventor', sortable: true, width: 130 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => handleView(params.row)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => handleEditedData(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);


  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);

  const paginationModel = { page: 0, pageSize: 10 };

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleEditedData = (rowData) => {
    setEditData(rowData)
    setEditOpen(true)
  }

  const handleCloseEdit = () => {
    setEditOpen(false)
    setEditData(null)
  }

  const handleView = (rowData) => {
    setViewData(rowData)
    setViewOpen(true)
  }

  const handleCloseView = () => {
    setViewOpen(false)
    setViewData(null)
  }

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


  const handleSubmit = async () => {
    if (!editData) return

    try {
      const response = await fetch(`http://127.0.0.1:8000/batapi/patents/${editData.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar a patente!');
      }
      const updatedPatent = await response.json();
      setRows((prevRows)=>
        prevRows.map((row) => (row.id === updatedPatent.id ? updatedPatent : row))
      )
      handleCloseEdit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/batapi/patents/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Falhou miseravelmente na deleção!');
      }
      setRows((prevRows) => prevRows.filter((row)=> row.id !== id));
    } catch (error) {
      console.error('Deu ruim no DELETE da patente!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: 600, width: '100%', }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableMultipleRowSelection={true}
          columnVisibilityModel={{ id: false }}
          sx={{ border: '1px dashed' }}
        />
      </Paper>

      <Dialog open={editOpen} onClose={handleCloseEdit}PaperProps={{sx:{backgroundColor: '#0A0A0A', backdropFilter: "blur(5px)"}}}>
        <DialogTitle sx={{fontFamily: 'monospace'}}>Editar Patente</DialogTitle>
        <DialogContent sx={{fontFamily: 'monospace'}}>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
            value={editData?.name || ''}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="País"
            fullWidth
            variant="outlined"
            value={editData?.country || ''}
            onChange={(e) => setEditData({ ...editData, country: e.target.value })}
          />
            <TextField
              margin="dense"
              label="MVP(YYYY/MM/DD)"
              fullWidth
              variant="outlined"
              value={editData?.mvp || ''}
              onChange={(e) => setEditData({ ...editData, mvp: e.target.value })}
            />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            variant="outlined"
            type="number"
            value={editData?.price || ''}
            onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
          />
            <TextField
            margin="dense"
            label="Inventor"
            fullWidth
            variant="outlined"
            value={editData?.author || ''}
            onChange={(e) => setEditData({ ...editData, author: e.target.value })}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={viewOpen} onClose={handleCloseView} PaperProps={{sx:{backgroundColor: '#0A0A0A', backdropFilter: "blur(5px)"}}}>
        <DialogTitle>View Patent Details</DialogTitle>
        <DialogContent>
          {viewData && (
            <div>
              <Typography variant="h6">Name: {viewData.name}</Typography>
              <Typography variant="body1">Country: {viewData.country}</Typography>
              <Typography variant="body1">MVP: {viewData.mvp}</Typography>
              <Typography variant="body1">Price: ${viewData.price}</Typography>
              <Typography variant="body1">Inventor: {viewData.author}</Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default DataTable;