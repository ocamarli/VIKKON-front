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
        <Typography variant="h7" component="div">
          {recipe.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          template:{" "}{recipe.id_template}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
