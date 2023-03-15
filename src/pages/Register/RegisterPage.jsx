import React, { useState } from "react";

import {
  TextField,
  Button,
  FormControl,
  Grid,
  Paper,
  Modal,
} from "@mui/material";

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const RegisterPage = ({ open, handleCloseRegister }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [data,setData] = useState("");


  const handleSubmit = () => {

     const data = {
        username:username,
        password: password,
        role: role
    }

    console.log(data);
    handleCloseRegister(data);
  };


  return (
    <Modal open={open} onClose={handleCloseRegister} className="ap-modal">
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
        <Grid container direction="column">
          <Typography sx={{ fontSize: 24 }}>Register</Typography>

          <Grid container direction="column" spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="standard"
                
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel>Role</InputLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)}>
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
                  <Button
                    variant="outlined"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Accept
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={handleCloseRegister}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default RegisterPage;
