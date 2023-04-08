import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material/";
import { useState } from "react";
import { Grid } from "@mui/material/";
import UpdateIcon from "@mui/icons-material/Update";
import { IconButton } from "@mui/material";
import { updateParameterRecipe } from "../../../api/axios";
import { getParameterRecipe } from "../../../api/axios";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material/";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";

export default function ParameterForm(props) {
  const {recipe, parameter } = props;
  const [parameterValue, setParameterValue] = useState("");
  const handleFieldChange = (event) => {
    setParameterValue(event.target.value);
  };
  const handleUpdateClick = () => {
    // Comprueba que el valor ingresado está dentro del rango permitido
    if (
      parameterValue >= parameter.min_value &&
      parameterValue <= parameter.max_value
    ) {
      // Aquí puedes agregar la lógica para actualizar los valores del parámetro
      console.log(`Actualizando ${parameter.name} con valor ${parameterValue}`);
    } else {
      // Si el valor no está dentro del rango permitido, muestra un mensaje de error
      console.log(
        `El valor debe estar entre ${parameter.min_value} y ${parameter.max_value}`
      );
    }
  };

  const handleOptionChange = (event) => {
    setParameterValue(event.target.value);
  };
  const onBlurEvent = (event) =>{

    console.log(event.target.value)
    const data={"id_recipe":recipe.id_recipe,"id_parameter":parameter.id_parameter,"value":parameterValue}
    console.log(data)
    fetcUpdateparameterRecipe(data)
  }


  const fetcUpdateparameterRecipe = async (data) => {
    console.log("fetch")
    console.log(data.id_parameter)
    const response = await updateParameterRecipe(
      data,
      JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
    );
    
  };
  const fetchGetparameterRecipe = async (data) => {

    const response = await getParameterRecipe(
      data,
      JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
    );
    
    setParameterValue(response.parameterRecipe.value)
    
  };

  useEffect(() => {
    const data={"id_recipe":recipe.id_recipe,"id_parameter":parameter.id_parameter,"value":parameterValue}
    fetchGetparameterRecipe(data)

  },[]);

  console.log(parameter);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
      <Card variant="outlined">
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ fontSize: 12 }} component="div">
              {parameter.name}
            </Typography>
            <Tooltip title={parameter.description}>
              <Typography
                sx={{ fontSize: 12, textDecoration: "underline" }}
                color="green"
                Buttom
              >
                {parameter.id_parameter}
              </Typography>
            </Tooltip>
          </Box>
          {parameter.type === "single" ? (
            <>
              <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                <span style={{ marginRight: 15 }}>
                  max_val: {parameter.max_value}
                </span>{" "}
                <span>min_val: {parameter.min_value}</span>
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <TextField
                  label="value"
                  variant="standard"
                  value={parameterValue}
                  onChange={handleFieldChange}
                  onBlur={onBlurEvent}
                  sx={{
                    "& .MuiInputBase-input": { fontSize: 12 },
                    "& .MuiInputBase-label": { fontSize: 12, padding: 10 },
                  }}
                />
                <IconButton onClick={handleUpdateClick}>
                  {" "}
                  <UpdateIcon />
                  <span style={{ fontSize: 12 }}>Update</span>
                </IconButton>
              </Box>
            </>
          ) : (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-end"}
              mt={2.6}
            >
              <FormControl variant="standard">
                <InputLabel id="select-label">Options</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={parameterValue}
                  label="Options"
                  onChange={handleOptionChange}
                  onBlur={onBlurEvent}
                  sx={{
                    "& .MuiInputBase-input": { fontSize: 12, padding: 0 },
                    minWidth: "120px",
                  }}
                >
                  {parameter.option.map((option) => (
                    <MenuItem
                      key={option.name}
                      value={option.value}
                      sx={{ fontSize: 12 }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <IconButton onClick={handleUpdateClick}>
                {" "}
                <UpdateIcon />
                <span style={{ fontSize: 12 }}>Update</span>
              </IconButton>
            </Box>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}