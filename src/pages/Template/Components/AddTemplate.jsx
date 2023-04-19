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

const AddTemplate = ({ open, handleClose }) => {
  const [listParameters, setListParameters] = useState([]);
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");

  const setList = (data) => {
    setListParameters(data.map((d) => d.id));
  };

  const handleSubmit = async (event) => {
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
    <Modal open={open} onClose={handleClose} className="at-modal">
      <Paper
        elevation={3}
        spacing={5}
        sx={{ padding: 5, height: "fit-content", width: "calc(90vw)" }}
      >
        <Typography sx={{ fontSize: 24 }}>Add template</Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  label="Name"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Client"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => setClient(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Description"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
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

          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
              type="submit"
            >
              Accept
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default AddTemplate;
