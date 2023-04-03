import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { TextField, Button, FormControl, Grid, Paper } from "@mui/material";

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { setRegister } from "../../api/axios";

const handleCloseRegister = async (data) => {
  const response = await setRegister(
    data,
    JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
  );
  console.log(response);
};

const onSubmit = (data) => {
  console.log(data);
  handleCloseRegister(data);
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Grid
      container
      padding={2}
      justifyItems={"center"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
    >
      <Paper
        elevation={3}
        spacing={5}
        sx={{
          padding: 3,
          height: "fit-content",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column">
            <Typography sx={{ fontSize: 24 }}>Register</Typography>

            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  {...register("username", { required: true })}
                  fullWidth
                  label="Username"
                  variant="standard"
                  error={errors.username ? true : false}
                  helperText={errors.username ? "Este campo es requerido" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", { required: true })}
                  fullWidth
                  label="Password"
                  variant="standard"
                  error={errors.password ? true : false}
                  helperText={errors.password ? "Este campo es requerido" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    {...register("role", { required: true })}
                    error={errors.role ? true : false}
                    helperText={errors.role ? "Este campo es requerido" : ""}
                  >
                    <MenuItem value="">
                      <em>Role</em>
                    </MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                    <MenuItem value={"standard"}>Minute</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-end" }} spacing={2}>
                  <Grid item>
                    <Button variant="outlined" type="submit">
                      Accept
                    </Button>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;
