import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddReceipe from "../../Recipes/Componentes/AddRecipe";
import { useState } from "react";
import { TextField, Button, Grid, Paper, Modal,Dialog  } from "@mui/material";


export default function CardTemplate(props) {
  const { template } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };


  return (
<>

<Grid item xs={12}>
          <Dialog open={open} onClose={handleClose}>
            <AddReceipe open={open} handleClose={handleClose} templateOrigin={template}></AddReceipe>
          </Dialog>
        </Grid>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {template.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           V.{template.version}
          </Typography>
          <Typography variant="body2">{template.description}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {template.id_template}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Create receipe
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
</>
  );
}
