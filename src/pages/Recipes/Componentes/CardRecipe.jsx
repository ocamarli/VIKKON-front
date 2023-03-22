import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import {

  Button,

} from "@mui/material";
export default function CardRecipe(props) {
  const { recipe } = props;
  return (
    <Card variant="outlined">
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
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
