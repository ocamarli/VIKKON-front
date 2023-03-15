import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../ParametersCss.css";
// Estilos personalizados para el modal

const AddOptions = ({ open, handleClose }) => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const handleInputOneChange = (event) => {
    setInputOne(event.target.value);
  };

  const handleInputTwoChange = (event) => {
    setInputTwo(event.target.value);
  };

  const handleSave = () => {
    // Realizar acciones al guardar los inputs
    const data={value:inputOne,name:inputTwo} 
    
    handleClose(data);
  };

  return (
    <Modal open={open} onClose={handleClose} className={"ao-modal"}>
      <Paper
        elevation={3}
        spacing={2}
        sx={{
          minWidth: "calc(20vw)",
          padding: 2,
          height: "fit-content",
          maxWidth: "calc(20vw)",
        }}
      >
        <Grid container direction="column" spacing={2} >
          <Grid item xs={12}> <Typography sx={{ fontSize: 20 }}>Add option</Typography></Grid>
          <Grid item xs={12}>
            <TextField
              label="Value"
              value={inputOne}
              onChange={handleInputOneChange}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={inputTwo}
              onChange={handleInputTwoChange}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} spacing={2}>
            <Grid container sx={{ justifyContent: "flex-end" }} spacing={2}>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={handleSave}>
                  Accept
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleClose}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default AddOptions;
