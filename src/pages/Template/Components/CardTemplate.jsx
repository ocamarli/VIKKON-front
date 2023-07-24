import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddReceipe from "../../Recipes/Componentes/AddRecipe";
import { useState } from "react";
import { Button, Grid, Dialog } from "@mui/material";
import EditCode from "./EditCode";
import { useTheme } from "@mui/material";
export default function CardTemplate(props) {
  const { template } = props;
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = (props) => {
    setOpenEdit(false);
  };
const theme=useTheme();
  return (
    <>
      <Grid item xs={12} >
        <Dialog open={open} onClose={handleClose}>
          <AddReceipe
            open={open}
            handleClose={handleClose}
            templateOrigin={template}
          ></AddReceipe>
        </Dialog>
        <Dialog open={openEdit} onClose={handleCloseEdit}>
          <EditCode
            open={openEdit}
            handleClose={handleCloseEdit}
            templateOrigin={template}
          ></EditCode>
        </Dialog>
      </Grid>
      <Card variant="outlined" sx={{backgroundColor:theme.palette.mode==="light"?"#f9f9ff":null}}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 500, margin: 0, display:"block"}}>
            {template.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Version:{" "}{template.version}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Template:{" "}{template.id_template}
          </Typography>
          <Typography variant="body2" color="text.secondary">{template.description}</Typography>

        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Create receipe
          </Button>
          <Button size="small" onClick={handleClickOpenEdit}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
