import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddOptions from "./AddOptions";
import ItemOptions from "./ItemOptions";
import ListParametersTemplate from "./ListParametersTemplate";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 5, 5, 5),
    height: "fit-content",
    maxHeight: "calc(90vh)",
    overflowY: "auto",
    marginTop: 5,
    minWidth: "calc(95vw)",
  },

  gridContainer: {
    display: "grid",
    gridGap: theme.spacing(1, 0),
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 0, 2, 5),
    margin: theme.spacing(0, 0, -1, 0),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
  acceptButton: {
    marginRight: theme.spacing(2),
  },
  FormControlLabel: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  FormControl: {
    marginTop: 0,
  },
  FormControlText: {
    marginTop: 0,
    marginBottom: 3,
    marginLeft: 10,
  },
  gridContainerOptions: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
  },
}));

const AddTemplate = ({ open, handleClose }) => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  const [openOptions, setOpenOptions] = useState(false); // Define el estado "open" en el componente padre
  const addOption = (newOption) => {
    setOptions([...options, newOption]);
    console.log(options);
  };
  const handleClickOpenOptions = () => {
    setOpenOptions(true);
  };

  const handleCloseOptions = (props) => {
    setOpenOptions(false);

    addOption(props.key);
  };

  const [options, setOptions] = useState([]);
  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <div className={classes.paper}>
        <h2>Add template</h2>

        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.gridItem}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField label="Name" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Client" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Description" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Verion" variant="standard" margin="normal" />
              </Grid>              
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Paper variant="outlined" style={{ padding: 15 }}>
            <ListParametersTemplate/>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <div className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.acceptButton}
                onClick={handleClose}
              >
                Accept
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default AddTemplate;
