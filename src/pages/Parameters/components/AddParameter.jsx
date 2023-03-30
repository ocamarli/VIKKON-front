import React, { useState } from "react";
import "../ParametersCss.css";
import {
  TextField,
  Button,
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
import Typography from "@mui/material/Typography";
import { setParameters } from "../../../api/axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
const AddParameter = ({ open, handleClose }) => {
  const [idParameter, setIdParameter] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [multiplicate, setMultiplicate] = useState("");
  const [numberBytes, setNumberBytes] = useState("");
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("");
  const [minVal, setMinVal] = useState("");
  const [maxVal, setMaxVal] = useState("");
  const [openOptions, setOpenOptions] = useState(false); // Define el estado "open" en el componente padre
  const [options, setOptions] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("onsub");
    console.log(data);
  };

  const handleClickOpenOptions = () => {
    setOpenOptions(true);
  };

  const handleCloseOptions = async (data) => {
    await setOpenOptions(false);
    await setOptions([...options, data]);
    console.log(data);
    console.log(options);
  };

  const removeOption = (value) => {
    setOptions((prevOptions) =>
      prevOptions.filter((options) => options.value !== value)
    );
  };

  const handleClickSend = async (event) => {
    event.preventDefault();
    let data = {};
    if (type === "single") {
      data = {
        id_parameter: idParameter,
        name: name,
        description: description,
        multiplicate: multiplicate,
        number_bytes: numberBytes,
        unit: unit,
        type: type,
        min_value: minVal,
        max_value: maxVal,
      };
    } else {
      data = {
        id_parameter: idParameter,
        name: name,
        description: description,
        multiplicate: multiplicate,
        number_bytes: numberBytes,
        unit: unit,
        type: type,
        option: options,
      };
    }

    console.log(data);
    console.log(JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token);

    const response = await setParameters(
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
        sx={{
          minWidth: "calc(25vw)",
          padding: 3,
          height: "fit-content",
          maxWidth: "calc(25vw)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column">
            <Typography sx={{ fontSize: 24 }}>Add parameter</Typography>

            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  {...register("id_parameter", { required: true })}
                  fullWidth
                  label="Id parameter"
                  variant="standard"
                  error={errors.id_parameter ? true : false}
                  helperText={
                    errors.id_parameter ? "Este campo es requerido" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("name", { required: true })}
                  fullWidth
                  label="Name parameter"
                  variant="standard"
                  error={errors.name ? true : false}
                  helperText={errors.name ? "Este campo es requerido" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description", { required: true })}
                  fullWidth
                  label="Description"
                  variant="standard"
                  error={errors.description ? true : false}
                  helperText={
                    errors.description ? "Este campo es requerido" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("number_bytes", { required: true })}
                  fullWidth
                  label="Number bytes"
                  variant="standard"
                  error={errors.number_bytes ? true : false}
                  helperText={
                    errors.number_bytes ? "Este campo es requerido" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel>Unit</InputLabel>
                  <Select
                    {...register("unit", { required: true })}
                    value={unit}
                    error={errors.unit ? true : false}
                    helperText={errors.unit ? "Este campo es requerido" : ""}
                  >
                    <MenuItem value="">
                      <em>Unit</em>
                    </MenuItem>
                    <MenuItem value={10}>Hours</MenuItem>
                    <MenuItem value={20}>Minute</MenuItem>
                    <MenuItem value={30}>Centigrade</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel>Multiplied by</InputLabel>
                  <Select
                    {...register("multiplicate", { required: true })}
                    label="Multiplicate"
                    error={errors.multiplicate ? true : false}
                    helperText={errors.multiplicate ? "Este campo es requerido" : ""}
                  >
                    <MenuItem value="">
                      <em>Multiplicate</em>
                    </MenuItem>
                    <MenuItem value={1}>X1</MenuItem>
                    <MenuItem value={5}>X5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel>Type parameter</InputLabel>
                  <Select
                    {...register("type", { required: true })}
                    label="Type"
                    helperText={errors.type ? "Este campo es requerido" : ""} 
                  >
                    <MenuItem value="">
                      <em>Type</em>
                    </MenuItem>
                    <MenuItem value={"single"}>Single</MenuItem>
                    <MenuItem value={"options"}>Options</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {type === "single" && (
                <Grid item xs={12} name="gridSingle">
                  <Paper variant="outlined" style={{ padding: 15 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <FormLabel style={{ marginBottom: 5 }}>
                          Single
                        </FormLabel>
                      </Grid>
                      <Grid item>
                        <TextField
                          {...register("min_value", { required: true })}
                          label="Min value"
                          variant="standard"
                          helperText={errors.min_value ? "Este campo es requerido" : ""} 
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          {...register("max_value", { required: true })}
                          label="Max value"
                          variant="standard"
                          helperText={errors.max_value ? "Este campo es requerido" : ""} 
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              )}
              {type === "options" && (
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
                    <Grid
                      item
                      xs={12}
                      sx={{
                        overflowY: "scroll",
                        maxHeight: "250px",
                        height: "fit-content",
                      }}
                    >
                      {options.map((item, index) => (
                        <ItemOptions
                          key={index}
                          value={item.value}
                          name={item.name}
                          removeOption={removeOption}
                        ></ItemOptions>
                      ))}
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
                <Grid container sx={{ justifyContent: "flex-end" }} spacing={2}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      type="submit"
                    >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" onClick={handleClose}>
                      Close
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddParameter;
