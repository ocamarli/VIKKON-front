import {
  TextField,
  Button,
  Grid,
  Paper,
  Modal,
  Typography,
} from "@mui/material";
import ListParametersTemplate from "./ListParametersTemplate";
import "../TemplateCss.css";
import { useState } from "react";
import { setParametersTemplate } from "../../../api/axios";
import { useForm } from "react-hook-form";
const AddTemplate = ({ open, handleClose }) => {
  const [listParameters, setListParameters] = useState([]);
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const onSubmit = (data) => {

    console.log("onsub",data);
    reset({
      fechaTicket: null,
      noTicket: "",
      totalTicket: "",
      idProveedor: "",
    });

  };
  const setList = (data) => {
    setListParameters(data.map((d) => d.id));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleSubmitO = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      client: client,
      description: description,
      version: version,
      parameters: listParameters,
    };

    console.log(data);
    console.log(JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token);

    const response = await setParametersTemplate(
      data,
      JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
    );

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      console.log("YES");
    } else {
      console.log("Error");
    }
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} className="ap-modal">
      <Paper
        elevation={3}
        spacing={5}
        sx={{ padding: 5, height: "calc(90vh)", width: "calc(90vw)" }}
      >
        <Typography sx={{ fontSize: 24 }}>Add template</Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                 {...register("name", { required: true })}
                 error={errors.name ? true : false}
                 helperText={errors.name ? "Este campo es requerido" : ""}                 
                  label="Name"
                  variant="standard"
                  margin="normal"

                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                 {...register("client", { required: true })}
                 error={errors.client ? true : false}
                 helperText={errors.client ? "This field is required" : ""}                 
                  label="Client"
                  variant="standard"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                 {...register("description", { required: true })}
                 error={errors.description ? true : false}
                 helperText={errors.description ? "This field is required" : ""}                   
                  label="Description"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                 {...register("description", { required: true })}
                 error={errors.description ? true : false}
                 helperText={errors.description ? "This field is required" : ""}                 
                  label="Version"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => setVersion(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" style={{ padding: 15 }}>
              <ListParametersTemplate setList={(data) => setList(data)} />
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              type="submit"
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

export default AddTemplate;
