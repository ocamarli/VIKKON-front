
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import "../TemplateCss.css"

function ItemTemplate(props) {
  const{title,description,onClick}=props;


  return (
    <List className="noBullets">
        <ListItem className="listItem">
        <ListItemText primary={title} secondary={description} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit"  >
            <EditIcon fontSize="small" />
            </IconButton>
            <IconButton edge="end" aria-label="delete" >
            <DeleteIcon fontSize="small"/>
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" />
    </List>
  );
}

export default ItemTemplate;