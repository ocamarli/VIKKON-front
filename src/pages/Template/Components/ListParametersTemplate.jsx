import React, { useState, useEffect, useMemo } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import ItemParameterTemplate from "./ItemParameterTemplate";
import { getParameters } from "../../../api/axios";

const ListParametersTemplate = ({setList}) => {
  const [parameters, setParameters] = useState(null);
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  const fetchParameters = async () => {
    try {
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      console.log(tkn);
      if (tkn !== undefined) {
        const json = await getParameters(tkn);
        console.log(json);
        return json.parameters;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  };

  useMemo(async () => {
    if (parameters === null) {
      fetchParameters().then((json) => {
        setParameters(json)
        setRightItems(
          json.map((param) => {
            return param.name;
          })
        );
      })
    }
  }, [parameters]);

  const handleTransferLeft = (item) => {
    const updatedItems = rightItems.filter((i) => i !== item);
    setRightItems(updatedItems);
    const newItems = [...leftItems, item];
    setLeftItems(newItems);
    setList(newItems);
  };

  const handleTransferRight = (item) => {
    const updatedItems = leftItems.filter((i) => i !== item);
    setLeftItems(updatedItems);
    const newItems = [...rightItems, item];
    setRightItems(newItems);
    setList(updatedItems);
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
