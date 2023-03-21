import React, { useState } from "react";
import store from "../../store";
import { Provider } from "react-redux";
import CardReceipe from "./Componentes/CardReceipe";
import AddTemplate from "../Template/Components/AddTemplate";
import { getParametersTemplate } from "../../api/axios";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Dialog,
  Modal,
  InputLabel,
  Select,
} from "@mui/material";

function Receipes() {
  const [open, setOpen] = useState(false); // Define el estado "open" en el componente padre
  const [template, setTemplate] = useState([]);
  const [idTemplate, setIdTemplate] = useState(null);
  const [name, setName] = useState(null);
  const [client, setClient] = useState(null);
  const [description, setDescription] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCreateReceipe = () => {



    fetchTemplates();

  };
  const handleClose = (props) => {
    setOpen(false);
  };

  const fetchTemplates = async () => {
    try {
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      if (tkn !== undefined) {
        const json = await getParametersTemplate(2, tkn);
        const jsonTemp = JSON.parse(json.template);
        console.log("data-" + json.template);
        console.log(JSON.parse(jsonTemp.parameters[0]));

        setTemplate(jsonTemp);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchReceipesPost = async () => {
    try {
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      if (tkn !== undefined) {
        const json = await getParametersTemplate(2, tkn);
        const jsonTemp = JSON.parse(json.template);
        console.log("data-" + json.template);
        console.log(JSON.parse(jsonTemp.parameters[0]));

        setTemplate(jsonTemp);
      }
    } catch (error) {
      console.error(error);
    }
  };





  useEffect(() => {

  }, []);

  return (
    <Provider store={store}>
      <Grid container padding={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} spacing={2}>
                <Paper style={{ padding: 10 }}>
                  <Typography sx={{ fontSize: "1.8rem" }}>Receipe</Typography>
                  <TextField label="Name receipe" variant="standard" />
                  <p />
                  <Typography sx={{ fontSize: "1rem" }}>
                    <span style={{ fontWeight: "bold" }}>Id Template:</span>{" "}
                    {template.id_template}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem" }}>
                    <span style={{ fontWeight: "bold" }}>Cliente:</span>{" "}
                    {template.client}
                  </Typography>
                  <p />
                  <Button variant="outlined" onClick={handleCreateReceipe}>Create Receipe</Button>
                  <p />
                </Paper>
              </Grid>

              <Grid item xs={12} spacing={1} position="row">
                <Grid container spacing={2}>
                  {template?.parameters?.map((template, index) => {
                    const temp = JSON.parse(template);

                    return (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CardReceipe parameter={temp} />
                      </Grid>
                    );
                  })}
                </Grid>

              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Provider>
  );
}
export default Receipes;
