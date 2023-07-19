import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Typography, Grid, Paper,Box } from "@mui/material";
import { getParametersTemplate } from "../../../api/axios";
import ItemParameterCode from "./ItemParameterCode";

const ListParametersCode = (props) => {
  const template=props.templateOrigin
  const matches=props.matches
  console.log("matches")
  console.log(matches)
  const [parameters, setParameters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);


  const fetchParameters =useCallback(async () => {      

    console.log(isLoading)
    try {
      setIsLoading(true);
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      console.log(tkn);
      if (tkn !== undefined) {
        const json = await getParametersTemplate(template.id_template,tkn);


        setParameters(JSON.parse(json.template).parameters);
        console.log(JSON.parse(json.template).parameters);
        setIsLoading(false);
      }else{
        setParameters([])
        //onResponse({status:false, msg: "Unauthorized Access"})
      }
    } catch (error) {
      setIsLoading(false);
      //onResponse({ status: false, msg: error });
      console.error(error);
    }
  },[template,isLoading]);

  useEffect(() => {
    fetchParameters();
  }, []);


  return (
    <Grid container direction="row">

      <Grid item xs={12} padding={0}>
        <Paper  variant="outlined" sx={{ padding: "15px" }}>
          <Grid container justifyContent="flex-start">
            <Typography fontSize={"1.2em"} sx={{}}>
              Parameters
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={2}
              sx={{ padding: 2 }}
            >
              {parameters.map((item) => (

                <Box key={item.name} >
                  {console.log(item)}
                  <ItemParameterCode
                    word={item.id_parameter}
                    name={item.name}
                    isEnable={matches.includes(item.id_parameter)}
                  />

                </Box>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListParametersCode;
