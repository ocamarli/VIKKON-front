import * as React from "react"
import LogoVikkon from "./components/LogoVikon";
import { Grid } from '@mui/material';
import { Canvas } from "react-three-fiber";
import { Model3d } from "./components/Newmodel";

const SvgComponent = (props) => (

    <Grid container padding={5} alignItems="center" justifyItems="center"  justifyContent="center">
      <Grid item xs={10} sx={{filter:"opacity(25%)" }}><LogoVikkon/></Grid>
      
    </Grid>

)

export default SvgComponent