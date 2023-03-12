import { Grid, Paper, TextField} from "@mui/material";

import CodeInput from "./CodeInput";
import ItemTemplate from "./ItemTemplate";

import AddParameter from "./AddParameter";

import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import store from "../../store";
import { Provider } from "react-redux";

function Template() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };

  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <h2>New parameter</h2>
            <TextField
              style={{ padding: 10 }}
              id="outlined-search"
              label="Name template"
              type="search"
              variant="standard"
            />
            <br></br>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add parameter
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Dialog open={open} onClose={handleClose}>
            <AddParameter open={open} handleClose={handleClose}></AddParameter>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper style={{ padding: 20 }}>
                  <h2>Parameters:</h2>
                  <ItemTemplate title="1" description="CIF I"></ItemTemplate>
                  <ItemTemplate title="1" description="CIF I"></ItemTemplate>
                  <ItemTemplate title="1" description="CIF I"></ItemTemplate>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper style={{ padding: 20 }}>
                  <h2>Sección 1.3</h2>
                  <CodeInput></CodeInput>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Provider>
  );
}
export default Template;
