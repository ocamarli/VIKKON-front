import React, { useState } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import ItemParameterTemplate from "./ItemParameterTemplate";

const ListParametersTemplate = () => {
  const [leftItems, setLeftItems] = useState([
    "Setpoint normal",
    "Diferencial normal",
    "Duración de modo normal",
  ]);
  const [rightItems, setRightItems] = useState([
    "Tipo de deshielo",
    "Tipo de sonda",
    "Modo de deshielo",
    "Duración de modo ES2",
    "Temperatura para pasar a ES1",
  ]);

  const handleTransferLeft = (item) => {
    const updatedItems = rightItems.filter((i) => i !== item);
    setRightItems(updatedItems);
    const newItems = [...leftItems, item];
    setLeftItems(newItems);
  };

  const handleTransferRight = (item) => {
    const updatedItems = leftItems.filter((i) => i !== item);
    setLeftItems(updatedItems);
    const newItems = [...rightItems, item];
    setRightItems(newItems);
  };

  return (
    <Grid container direction="row">
      <Grid item xs={6} padding={2} textAlign="center">
        <Paper elevation={3} variant="outlined" sx={{ padding: 3 }}>
          <Grid container justifyContent="flex-start">
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              Parameters
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
            >
              {leftItems.map((item) => (
                <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
                  <ItemParameterTemplate
                    onClick={() => handleTransferRight(item)}
                    name={item}
                    word="v.20"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} padding={2}>
        <Paper elevation={3} variant="outlined" sx={{ padding: 3 }}>
          <Grid container justifyContent="flex-end">
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              Available parameters
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {rightItems
                .slice()
                .reverse()
                .map((item) => (
                  <Grid
                    item
                    key={item}
                    spacing={2}
                    alignItems="right"
                    textAlign="right"
                  >
                    <ItemParameterTemplate
                      onClick={() => handleTransferLeft(item)}
                      name={item}
                      word="v.20"
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListParametersTemplate;
