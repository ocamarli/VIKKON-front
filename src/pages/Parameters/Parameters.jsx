import { Grid, Paper } from "@mui/material";
import ItemTemplate from "../Template/Components/ItemTemplate";
import AddParameter from "./components/AddParameter";
import { Button, Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import store from "../../store";
import { Provider } from "react-redux";
import { getParameters } from "../../api/axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Parameters() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre
  const [parameters, setParameters] = useState([]);
  const [response, setResponse] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async (props) => {
    await fetchParameters();
    setOpen(false);
  };

  const HandleResponse = ({ title = "Mensaje de sistema" }) => {
    console.log(response);
    if (response != null)
      return (
        <Alert
          severity={response.status ? "success" : "error"}
          onClose={() => setResponse(null)}
        >
          <AlertTitle>{response.status ? title : "Error"}</AlertTitle>
          {response.msg}
        </Alert>
      );
    else return <></>;
  };

  const fetchParameters = async () => {
    try {
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      console.log(tkn);
      if (tkn !== undefined) {
        const json = await getParameters(tkn);
        console.log(json);
        setParameters(json.parameters);
        setResponse(json);
      }else{
        setParameters([])
        setResponse({status:false, msg: "Unauthorized Access"})
      }
    } catch (error) {
      setResponse({ status: false, msg: error });
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
                    {parameters.map((param, index) => (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <ItemTemplate
                          id_parameter={param.id_parameter}
                          name={param.name}
                        ></ItemTemplate>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <HandleResponse />
    </Provider>
  );
}
export default Parameters;
