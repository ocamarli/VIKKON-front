import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';

// Estilos personalizados para el modal
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
  acceptButton: {
    marginRight: theme.spacing(2),
  },  
}));

const AddOptions = ({ open, handleClose }) => {
  const classes = useStyles();
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
      className={classes.modal}
    >
      <div className={classes.paper}>
        <h2>Add option</h2>
        <form>
          <TextField
            label="Name"
            value={inputOne}
            onChange={handleInputOneChange}
            fullWidth
            variant="standard"
            marginBottom="normal"
          />
          <TextField
            label="Value"
            value={inputTwo}
            onChange={handleInputTwoChange}
            fullWidth
            variant="standard"
            margin="normal"            
          />
            <div className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.acceptButton}
                onClick={handleSave}                
              >
                Accept
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </div>                  
        </form>
      </div>
    </Modal>
  );
};

export default AddOptions;
