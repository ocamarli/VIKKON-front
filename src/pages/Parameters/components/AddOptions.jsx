import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import "../ParametersCss.css"
// Estilos personalizados para el modal

const AddOptions = ({ open, handleClose }) => {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const handleInputOneChange = (event) => {
    setInputOne(event.target.value);
  };

  const handleInputTwoChange = (event) => {
    setInputTwo(event.target.value);
  };

  const handleSave = () => {
    // Realizar acciones al guardar los inputs
    handleClose({key:inputOne,value:inputTwo});
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={'ao-modal'}
    >
      <Paper elevation={3} >

      <Grid container direction="column" spacing={2} sx={{padding:4}}>
      <Typography sx={{ fontSize: 20 }} >
            Add option
          </Typography>    
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={inputOne}
            onChange={handleInputOneChange}
            variant="standard"
            
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            label="Value"
            value={inputTwo}
            onChange={handleInputTwoChange}
            variant="standard"
            
          />
          </Grid>
          <Grid item xs={12} spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleSave}                
              >
                Accept
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
               </Grid>
            </Grid>
      </Paper>
    </Modal>
  );
};

export default AddOptions;
