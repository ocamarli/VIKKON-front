import React, { useState } from "react";
import "../ParametersCss.css"
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
import Typography from '@mui/material/Typography'

const AddParameter = ({ open, handleClose }) => {
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
    <Modal open={open} onClose={handleClose} className="ap-modal">
      <Paper elevation={3} spacing={5} sx={{minWidth: "calc(23vw)",padding:5, height: "fit-content",maxWidth: "calc(23vw)"}}>
      <Grid container direction="column">
      
      <Typography sx={{ fontSize: 24 }} >
            Add parameter
          </Typography>   

        <Grid container direction="column"  spacing={1} >
          <Grid item xs={12} direction="column">
            <Grid container direction="column">
              <Grid item><TextField label="Name parameter" variant="standard" margin="normal"/></Grid>
              <Grid item><TextField label="Title" variant="standard" margin="normal" /></Grid>
              <Grid item><TextField label="Description" variant="standard" margin="normal" /></Grid>      
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Multiplied by:</FormLabel>
              <RadioGroup row aria-label="multiplyBy" name="multiplyBy">
                <FormControlLabel
                  labelPlacement="bottom"
                  value="x1"
                  control={<Radio size="small" />}
                  label="x1"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  value="x2"
                  control={<Radio size="small" />}
                  label="x2"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} >
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

                />
                <FormControlLabel
                  labelPlacement="bottom"
                  value="options"
                  control={<Radio size="small" />}
                  label="Options"

                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {radioValue === "single" && (
            <Grid item xs={12} name="gridSingle">
              <Paper variant="outlined" style={{ padding: 15 }}>
                <FormControl>
                  <FormLabel style={{ marginBottom: 10 }}>Single</FormLabel>
                  <RadioGroup aria-label="type" name="type">
                    <FormControlLabel
                      control={<TextField label="Max value" variant="standard"/>}

                    />
                    <FormControlLabel
                      control={<TextField label="Min value" variant="standard"/>}

                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
          )}
          {radioValue === "options" && (
            <Grid item xs={12} name="gridOptions">
              <Paper variant="outlined" style={{ padding: 15 }}>
                <FormLabel>
                  Add option:
                  <IconButton
                    aria-label="add parameter"
                    onClick={handleClickOpenOptions}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </FormLabel>
                <Grid item xs={12} >
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

          <Grid item xs={12}>

              <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
              >
                Accept
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>

          </Grid>
        </Grid>
        
        </Grid>
        </Paper>
    </Modal>
  );
};

export default AddParameter;
