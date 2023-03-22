
import CardParameter from "./components/CardParameter";
import AddParameter from "./components/AddParameter";
import { Button, Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import store from "../../store";
import { Provider } from "react-redux";
import { getParameters } from "../../api/axios";
import { Grid, Paper, CircularProgress } from "@mui/material";

function Parameters(props) {
  const {onResponse} = props;
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      console.log(tkn);
      if (tkn !== undefined) {
        const json = await getParameters(tkn);
        console.log(json);
        setParameters(json.parameters);
        onResponse(json)
        setIsLoading(false);
      }else{
        setParameters([])
        onResponse({status:false, msg: "Unauthorized Access"})
      }
    } catch (error) {
      setIsLoading(false);
      onResponse({ status: false, msg: error });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchParameters();
  }, []);

  return (
    <Provider store={store}>
      <Grid container padding={2}>
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
                <br />
                <br />

                <Paper style={{ padding: 10 }}>
                  <h3>List of parameters:</h3>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                  >
              {isLoading && ( // Agrega el loader condicionalmente
                <Grid item xs={12} align="center">
                  <CircularProgress size={50} /> 
                </Grid>
              )}                    

                    {parameters.map((param, index) => (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CardParameter
                          id_parameter={param.id_parameter}
                          name={param.name}
                        ></CardParameter>
                      </Grid>
                    ))}
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
