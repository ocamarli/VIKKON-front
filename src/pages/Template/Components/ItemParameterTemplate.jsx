import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonBase } from "@mui/material";
import { useTheme } from "@mui/styles";

export default function ItemParameterTemplate(props) {
  const { name, word, category, description, onClick } = props;
  const theme = useTheme();
  const primaryColor = theme.palette.primary["dark"];
  const backgroundCard = theme.palette.grey["700"];
  const backgroundCard1 = "#3AAA35";
  const modePalette = theme.palette.mode;
  const colorTextLight="#fff";
  const colorTextLightR="red";

  console.log(colorTextLight);

  return (
    <Card variant="outlined" style={{ backgroundColor: backgroundCard1, color: colorTextLight}} >
      <ButtonBase onClick={onClick}>
        <CardContent sx={{padding: 1}}>
          <Typography sx={{fontWeight:700}} variant="h9" >
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {word}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
}
