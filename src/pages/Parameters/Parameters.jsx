import { Grid, Paper} from "@mui/material";
import ItemTemplate from "../Template/Components/ItemTemplate";
import AddParameter from "./components/AddParameter";
import { Button, Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import store from "../../store";
import { Provider } from "react-redux";
import { getParameters } from "../../api/axios";
function Parameters() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre
  const [parameters, setParameters] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async (props) => {
    await fetchParameters();
    setOpen(false);
  };
  const fetchParameters = async () => {
    try {
      console.log(JSON.parse(sessionStorage.getItem('ACCSSTKN')).access_token)
      const response = await getParameters(JSON.parse(sessionStorage.getItem('ACCSSTKN')).access_token);
      if (response.ok) {
        const json = await response.json();
        console.log(json)
        setParameters(json)
      } else {
        throw new Error(`Response not OK. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   
    fetchParameters();
  }, []);
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
                  <Grid container spacing={2} direction="row" justifyContent="flex-start">

                    {parameters.map((param,index)=>
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3} ><ItemTemplate id_parameter={param.id_parameter} name={param.name}></ItemTemplate></Grid>
                    )}

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
