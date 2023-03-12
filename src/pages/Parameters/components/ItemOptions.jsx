
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function ItemOptions() {

  return (
    <Grid container alignItems="center">
      <Grid item xs={1}>
        <Typography variant="subtitle1">1</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="subtitle1">CIF</Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Divider/>
    </Grid>
  );
}

export default ItemOptions;