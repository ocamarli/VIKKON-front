import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Box, IconButton } from "@mui/material/";
import FormRecipe from "./FormRecipe";
import { useState } from "react";
import { Dialog, Button,alpha } from "@mui/material/";
import { useTheme,CardHeader } from "@mui/material/";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { getFileTemplate } from "../../../api/axios";
import { getRecipe } from "../../../api/axios";
import PrintRecipe from "./PrintRecipe";
export default function CardRecipe(props) {
  const { recipe } = props;
  const [open, setOpen] = useState(false);
  const [openPrintRecipe, setOpenPrintRecipe] = useState(false);
  const [fileText, setFileText] = useState("");
  const [parametersRecipe,setParametersRecipe] =useState("");
  const [setIsLoading] = useState(false);
  const theme=useTheme();
  const [ setNewFileText] = useState("");
  // Obtener el color de fondo con transparencia según el modo del tema
  const backgroundColorWithOpacity = theme.palette.mode === 'light'
    ? alpha(theme.palette.primary.main, .7)// Para el modo oscuro, no se aplica transparencia
    :  null;
    const colorTextHeader = theme.palette.mode === 'light'
    ? alpha("#ffffff", .9)// Para el modo oscuro, no se aplica transparencia
    :  null;    

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };
  const handleClosePrintRecipe = (props) => {
    setOpenPrintRecipe(false);
  };  
  const clickCreateFile = () => {
    console.log("crea");
    get_fetchFileTemplate(recipe.id_template);
    getFetchRecipe(recipe.id_recipe);
    convertText();
    setOpenPrintRecipe(true)
  };

  const convertText = () =>{
    const resultado = fileText.replace(/\{(\d+)\}/g, (match, codigo) => {
      const objetoEncontrado = parametersRecipe.find(obj => obj.id_parameter === codigo);
      return objetoEncontrado ? objetoEncontrado.value : match;
    });
    setNewFileText(resultado)
  };
  const get_fetchFileTemplate = async (data) => {
    try {
      setIsLoading(true);
      if (
        JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token !==
        undefined
      ) {
        const response = await getFileTemplate(
          data,
          JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
        );
        console.log("responseFile");
        console.log(response);
        setFileText(response.code);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error");
      setFileText("");
    }
  };
  const getFetchRecipe = async (id_recipe) => {
    try {
      setIsLoading(true);
      if (
        JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token !==
        undefined
      ) {
        const response = await getRecipe(
          id_recipe,
          JSON.parse(sessionStorage.getItem("ACCSSTKN")).access_token
        );
        console.log("response-GETfETCHrECIPE",response);
        
        
        setParametersRecipe(response.data.parameters);
        console.log("paramsRecipe",response.data.parameters)
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error");
      setFileText("");
    }
  };  

  return (
    <Card variant="outlined" >
      <Box item xs>
        <Dialog open={open} onClose={handleClose}>
          <FormRecipe
            recipe={recipe}
            open={open}
            handleClose={handleClose}
          ></FormRecipe>
        </Dialog>
        <Dialog open={openPrintRecipe} onClose={handleClosePrintRecipe}>
          <PrintRecipe
            fileText={fileText}
            open={openPrintRecipe}
            handleClose={handleClosePrintRecipe}
          ></PrintRecipe>
        </Dialog>
      </Box>
      <CardHeader  titleTypographyProps={{ variant: 'h6'}} sx={{color:colorTextHeader, padding:"5px",backgroundColor:backgroundColorWithOpacity, marginBottom:"-10px"}} title={recipe.name}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          template: {recipe.id_template}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions  sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" onClick={handleClickOpen}>
            Complete
          </Button>
          <IconButton sx={{backgroundColor:"#efefef"}} >
            <DownloadRoundedIcon color="primary" onClick={clickCreateFile} />
          </IconButton>
      </CardActions>
    </Card>
  );
}
