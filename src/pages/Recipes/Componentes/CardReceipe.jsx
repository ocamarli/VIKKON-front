import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Dialog,
  Modal,
  InputLabel,
  Select,
} from "@mui/material";
export default function CardReceipe(props) {
  const { parameter } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="h7" component="div">
          {parameter.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {parameter.id_parameter}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {parameter.description}
        </Typography>

        {parameter.type === "options" ? (
          <Grid item xs={12}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel>value</InputLabel>
              <Select>
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {parameter.option.map((option, index) => {
                  return (
                    <>
                      <MenuItem value={option.value}>{option.name}</MenuItem>
                    </>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        ) : (
          <>
            <Typography sx={{ mb: .2 }} color="text.secondary">
            <span style={{ fontWeight:"bold"}}>max-value: </span>{parameter.max_value}
            </Typography>          
            <Typography sx={{ mb: .2 }} color="text.secondary">
            <span style={{ fontWeight:"bold"}}>min-value: </span>{parameter.min_value}
            </Typography>

            <TextField fullWidth label="value" variant="standard" />
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
