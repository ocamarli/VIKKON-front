import { Grid, Paper, TextField} from "@mui/material";

import CodeInput from "./CodeInput";
import ItemTemplate from "./ItemTemplate";

import AddParameter from "./AddParameter";

import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import store from "../../store";
import { Provider } from "react-redux";

function Parameters() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };

  return (
    <Provider store={store}>
      <Grid container padding={2} >
        <Grid item xs={12}>
          <Dialog open={open} onClose={handleClose}>
            <AddParameter open={open} handleClose={handleClose}></AddParameter>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <Button variant="outlined" onClick={handleClickOpen}>
              Add new parameter
            </Button>
            <br/><br/>

                <Paper style={{ padding: 10 }}>
                  <h3>List of parameters:</h3>
                  <Grid container spacing={2}>
                    <Grid item xs={4} ><ItemTemplate title="107" description="Tiempo de retardo de inicio de luces"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="108" description="Tiempo de retorno de ventilador después de deshielo"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="109" description="Error de tiempo de puerta abierta"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="110" description="Retardo de inicio de refrigeración"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="040" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>                                        
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4} ><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>
                    <Grid item xs={4}><ItemTemplate title="1" description="CIF I"></ItemTemplate></Grid>   

                  </Grid>
                </Paper>

              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Provider>
  );
}
export default Parameters;
