import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {Typography,Box} from "@mui/material/";
import FormRecipe from "./FormRecipe";
import { useState } from "react";
import{Dialog,Button} from "@mui/material/";

export default function CardRecipe(props) {
  const { recipe } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {

    setOpen(true);
  };
  const handleClose = (props) => {
    setOpen(false);
  };


  return (
    <Card variant="outlined">
        <Box item xs>
          <Dialog open={open} onClose={handleClose}>
            <FormRecipe recipe={recipe} open={open} handleClose={handleClose}></FormRecipe>
          </Dialog>
        </Box>


      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 500, margin: 0, display:"block"}}>
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          template:{" "}{recipe.id_template}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>


      </CardContent>
      <CardActions>
        <Box sx={{display:"flex",justifyItems:"flex-end"}} >
        <Button size="small" onClick={handleClickOpen}>Complete</Button>
        <Button size="small">Edit</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
