import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import {
TextField,
Button,
RadioGroup,
Radio,
FormControlLabel,
Checkbox,
List,
ListItem,
ListItemText,
ListItemSecondaryAction,
IconButton,
Divider,
Typography,
FormControl,
FormLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Estilos personalizados para el modal
const useStyles = makeStyles((theme) => ({
modal: {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
},
paper: {
backgroundColor: theme.palette.background.paper,
boxShadow: theme.shadows[5],
padding: theme.spacing(2, 4, 3),
},
}));

const AddParameterO = ({ open, handleClose }) => {
const classes = useStyles();
const [nameParameter, setNameParameter] = useState('');
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [multiplyBy, setMultiplyBy] = useState('x1');
const [type, setType] = useState('single');
const [options, setOptions] = useState([]);
const [optionTitle, setOptionTitle] = useState('');
const [subTitle, setSubTitle] = useState('');
const [subDescription, setSubDescription] = useState('');
const [isRequired, setIsRequired] = useState(false);
const [defaultValue, setDefaultValue] = useState('');
const [isActive, setIsActive] = useState(false);
const [minValue, setMinValue] = useState('');
const [maxValue, setMaxValue] = useState('');

const handleNameParameterChange = (event) => {
setNameParameter(event.target.value);
};

const handleTitleChange = (event) => {
setTitle(event.target.value);
};

const handleDescriptionChange = (event) => {
setDescription(event.target.value);
};

const handleMultiplyByChange = (event) => {
setMultiplyBy(event.target.value);
};

const handleTypeChange = (event) => {
setType(event.target.value);
};

const handleOptionTitleChange = (event) => {
setOptionTitle(event.target.value);
};

const handleAddOption = () => {
setOptions([...options, { title: optionTitle, subtitle: '' }]);
setOptionTitle('');
};

const handleRemoveOption = (index) => {
const newOptions = [...options];
newOptions.splice(index, 1);
setOptions(newOptions);
};

const handleSubTitleChange = (event, index) => {
const newOptions = [...options];
newOptions[index].subtitle = event.target.value;
setOptions(newOptions);
};

const handleIsRequiredChange = (event) => {
setIsRequired(event.target.checked);
};

const handleDefaultValueChange = (event) => {
setDefaultValue(event.target.value);
};

const handleIsActiveChange = (event) => {
setIsActive(event.target.checked);
};

const handleSave = () => {
// Realizar acciones al guardar los inputs
handleClose();
};
return (
    <Modal
       open={open}
       onClose={handleClose}
       className={classes.modal}
     >
    <h2>Modal de ejemplo</h2>

    <TextField
      label="Name parameter"
      value={nameParameter}
      onChange={handleNameParameterChange}
    />
    <br />
    <br />
    <TextField
      label="Title"
      value={title}
      onChange={handleTitleChange}
    />
    <br />
    <br />
    <TextField
      label="Description"
      value={description}
      onChange={handleDescriptionChange}
    />
    <br />
    <br />
    <FormControl component="fieldset">
      <FormLabel component="legend">Multiply by:</FormLabel>
      <RadioGroup
        aria-label="multiplyBy"
        name="multiplyBy"
        value={multiplyBy}
        onChange={handleMultiplyByChange}
      >
        <FormControlLabel value="x1" control={<Radio />} label="x1" />
        <FormControlLabel value="x2" control={<Radio />} label="x2" />
      </RadioGroup>
    </FormControl>
    <br />
    <br />
    <FormControl component="fieldset">
      <FormLabel component="legend">Type:</FormLabel>
      <RadioGroup
        aria-label="type"
        name="type"
        value={type}
        onChange={handleTypeChange}
      >
        <FormControlLabel value="single" control={<Radio />} label="Single" />
        <FormControlLabel value="options" control={<Radio />} label="Options" />
      </RadioGroup>
    </FormControl>
    {type === 'options' && (
      <>
        <br />
        <br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1">Options:</Typography>
          <Button variant="contained" color="primary" onClick={handleAddOption}>
            Add
          </Button>
        </div>
        <List>
          {options.map((option, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={option.title} secondary={option.subtitle} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handleRemoveOption(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <TextField
                label="Subtitle"
                value={option.subtitle}
                onChange={(event) => handleSubTitleChange(event, index)}
              />
              <br />
              <br />
            </div>
          ))}
        </List>
      </>
    )}
    {type === 'single' && (
      <>
        <br />
        <br />
        <TextField
          label="Sub Title"
          value={subTitle}
          onChange={(event) => setSubTitle(event.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Sub Description"
          value={subDescription}
          onChange={(event) => setSubDescription(event.target.value)}
        />
      </>
    )}
    <br />
    <br />
    <FormControlLabel
      control={
        <Checkbox
          checked={isRequired}
          onChange={handleIsRequiredChange}
          name="isRequired"
          color="primary"
        />
      }
      label="Is Required"
    />
    <br />
    <br />
    <TextField
      label="Default Value"
      value={defaultValue}
      onChange={handleDefaultValueChange}
    />
    <br />
    <br />

    </Modal>
    );
};
    export default AddParameterO