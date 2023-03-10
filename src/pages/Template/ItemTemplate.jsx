import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
const useStyles = makeStyles({
  noBullets: {
      listStyleType: 'none',
      padding: ' 0 !important', // reduce el espacio superior e inferior de la lista
  },
  listItem:{
    padding: '0 !important',
},
listItemText:{
    padding: ' 0 !important',
},
});

function ItemTemplate(props) {
  const{title,description}=props;

  const classes = useStyles();

  return (
    <List className={classes.noBullets}>
        <ListItem className={classes.listItem}>
        <ListItemText className={classes.listItemText} primary={title} secondary={description} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit"  fontSize="large">
            <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete"  fontSize="small">
            <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" />
    </List>
  );
}

export default ItemTemplate;