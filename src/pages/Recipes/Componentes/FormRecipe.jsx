import React, { useState, useEffect } from "react";

import { Button, Grid, Paper, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import ParameterForm from "./ParameterForm";
import { useForm } from "react-hook-form";
import { getParametersTemplate } from "../../../api/axios";
const FormRecipe = (props) => {
  const { recipe, open, handleClose } = props;
  const [parameters, setParameters] = useState([]);

  console.log(recipe);
  useEffect(() => {
    fetchParameters();
  }, []);

  const fetchParameters = async () => {
    try {
      const tkn = JSON.parse(sessionStorage.getItem("ACCSSTKN"))?.access_token;
      console.log("token");
      console.log(tkn);
      console.log("id:" + recipe.id_template);
      if (tkn !== undefined) {
        const json = await getParametersTemplate(recipe.id_template, tkn);

        setParameters(JSON.parse(json.template).parameters);
        console.log(JSON.parse(json.template).parameters);
      } else {
        setParameters([]);
        //onResponse({status:false, msg: "Unauthorized Access"})
      }
    } catch (error) {
      //onResponse({ status: false, msg: error });
      console.error(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("onsub");
    console.log(data);
  };

  return (
    <Modal open={open} onClose={handleClose} className="ap-modal">
      <Paper
        elevation={3}
        spacing={2}
        sx={{
          padding: 3,
          width: "calc(95vw)",
          height: "calc(95vh)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column">
            <Typography sx={{ fontSize: 24 }}>Add parameter</Typography>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Grid container>
                  {parameters.map((parameter) => (
                    <>
                      {console.log(parameter)}
                      <ParameterForm
                        key={parameter.name}
                        recipe={recipe}
                        parameter={parameter}
                      />
                    </>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container sx={{ justifyContent: "flex-end" }}>
                  <Grid item>
                    <Button variant="outlined" type="submit">
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

export default FormRecipe;
