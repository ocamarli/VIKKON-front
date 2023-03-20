import { Grid, Paper} from "@mui/material";
import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import store from "../../store";
import { Provider } from "react-redux";
import CardReceipe from "./Componentes/CardReceipe";
import AddTemplate from "../Template/Components/AddTemplate";
import { getParametersReceipe } from "../../api/axios";
import { useEffect } from "react";
function Receipes() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre
  const [templates, setTemplates]= useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };

const fetchTemplates = async () => {
  try{
    const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
    if(tkn !== undefined){
      const json = await getParametersReceipe (tkn)
      setTemplates(json.templates)
    }
  } catch (error){
console.error(error)
  }
}

useEffect(() => {
  fetchTemplates();
}, [])


  return (
    <Provider store={store}>
      <Grid container padding={2}>
        <Grid item xs={12}>
          <Dialog open={open} onClose={handleClose}>
            <AddTemplate open={open} handleClose={handleClose}></AddTemplate>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper style={{ padding: 10 }}>
                  <h3>Receipe:</h3>
                  <Grid container spacing={2}>
                    {templates.map((template, index)=>(
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <CardReceipe
                      name={template.name}
                      word={template.version}
                      category={template.client}
                      description={template.description}
                    />
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
export default Receipes;
