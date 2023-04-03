import React, { useState } from "react";
import CardRecipe from "../../Recipes/Componentes/CardRecipe";
import { getParametersTemplate } from "../../../api/axios";
import { setRecipe } from "../../../api/axios";
import Typography from "@mui/material/Typography";
import "../TemplateCss.css";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Modal,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CodeInput from "./CodeInput";
import { useEffect } from "react";
import CardParameter from "../../Parameters/components/CardParameter";
import ListParametersCode from "./ListParametersCode";

function EditCode({ open, handleClose, templateOrigin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [template, setTemplate] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  console.log(templateOrigin.id_template);
  console.log(templateOrigin);

  const handleCreateRecipe = async (data) => {
    const list = [];
    templateOrigin.parameters.map((param) => {
      list.push({ id_parameter: param, value: "", status: false });
    });

    const newData = {
      ...data,
      id_template: templateOrigin.id_template,
      parameters: list,
    };
    console.log(newData);
    const response = await setRecipe(
      newData,
      JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
    );
    if (response.ok) {
      const json = await response.json();

      console.log(json);
      console.log("YES");
    } else {
      console.log("Error");
    }
  };
  const onSubmit = (data) => {
    console.log("onsub");
    console.log(data);
    handleCreateRecipe(data);
  };

  return (
    <Modal open={open} onClose={handleClose} className="ap-modal">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "95vw",
          height: "95vh",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "1.4em" }}>Config file.h</Typography>
            </Grid>
            <Grid item xs={12} style={{ maxHeight: "600px" }}>
              <ListParametersCode
                matches={matches}
                templateOrigin={templateOrigin}
                style={{ maxHeight: "500px" }}
              ></ListParametersCode>
            </Grid>
            <Grid item xs={12}>
              <CodeInput setMatches={setMatches}></CodeInput>
            </Grid>

            <Grid item xs={12} sx={{ justifySelf: "end" }}>
              <Button variant="outlined" type="submit">
                Add recipe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
}
export default EditCode;
