import * as React from "react"
import LogoVikkon from "./components/LogoVikon";
import { Grid } from '@mui/material';



const SvgComponent = (props) => (

    <Grid container padding={40} >
      <Grid item xs={12}><LogoVikkon/></Grid>

    </Grid>

)

export default SvgComponent