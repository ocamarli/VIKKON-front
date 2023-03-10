import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

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
  Modal
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddOptions from "./AddOptions";
import ItemOptions from "./ItemOptions";

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
    minWidth: "calc(35vw)",
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

const AddParameter = ({ open, handleClose }) => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  const [openOptions, setOpenOptions] = useState(false); // Define el estado "open" en el componente padre
  const addOption = (newOption) => {
    setOptions([...options, newOption]);
    console.log(options)
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
        <h2>Add parameter</h2>

        <Grid container  spacing={1} className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField label="Name parameter" variant="standard" margin="normal"/>
            <TextField label="Title" variant="standard" margin="normal" />
            <TextField label="Description" variant="standard" margin="normal" />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <FormControl>
              <FormLabel>Multiplied by:</FormLabel>
              <RadioGroup row aria-label="multiplyBy" name="multiplyBy">
                <FormControlLabel
                  labelPlacement="bottom"
                  value="x1"
                  control={<Radio size="small" />}
                  label="x1"
                  className={classes.FormControlLabel}
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  value="x2"
                  control={<Radio size="small" />}
                  label="x2"
                  className={classes.FormControlLabel}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} className={classes.gridItem}>
            <FormControl>
              <FormLabel>Type parameter:</FormLabel>
              <RadioGroup
                row
                aria-label="type"
                name="type"
                onChange={handleRadioChange}
                value={radioValue}
              >
                <FormControlLabel
                  labelPlacement="bottom"
                  value="single"
                  control={<Radio size="small" />}
                  label="Single"
                  className={classes.FormControlLabel}
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  value="options"
                  control={<Radio size="small" />}
                  label="Options"
                  className={classes.FormControlLabel}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {radioValue === "single" && (
            <Grid item xs={12} className={classes.gridItem} name="gridSingle">
              <Paper variant="outlined" style={{ padding: 15 }}>
                <FormControl>
                  <FormLabel style={{ marginBottom: 10 }}>Single</FormLabel>
                  <RadioGroup aria-label="type" name="type">
                    <FormControlLabel
                      control={<TextField label="Max value" variant="standard"/>}
                      className={classes.FormControlText}
                    />
                    <FormControlLabel
                      control={<TextField label="Min value" variant="standard"/>}
                      className={classes.FormControlText}
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
          )}
          {radioValue === "options" && (
            <Grid item xs={12} className={classes.gridItem} name="gridOptions">
              <Paper variant="outlined" style={{ padding: 15 }}>
                <FormLabel>
                  Add option:
                  <IconButton
                    aria-label="add parameter"
                    className={classes.addButton}
                    onClick={handleClickOpenOptions}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </FormLabel>
                <Grid item xs={12} className={classes.gridContainerOptions}>
                  <ItemOptions></ItemOptions>
                </Grid>
              </Paper>
            </Grid>
          )}
          <Grid item xs={12}>
            <Dialog open={openOptions} onClose={handleCloseOptions}>
              <AddOptions
                open={openOptions}
                handleClose={handleCloseOptions}
              ></AddOptions>
            </Dialog>
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

export default AddParameter;
