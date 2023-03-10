import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const useStyles = makeStyles({
    gridContainer:{
      padding: '0',
    },
    iconButton: {
      padding: '0.3rem',
    },
  });
function ItemOptions() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.gridContainer}>
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
          className={classes.iconButton}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Divider/>
    </Grid>
  );
}

export default ItemOptions;