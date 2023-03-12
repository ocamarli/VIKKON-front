

import {
  TextField,
  Button,
  Grid,
  Paper,
  
  Modal,
} from "@mui/material";
import ListParametersTemplate from "./ListParametersTemplate";
import Typography from '@mui/material/Typography'
import "../TemplateCss.css"


const AddTemplate = ({ open, handleClose }) => {

  return (
    <Modal open={open} onClose={handleClose} className="at-modal">
      <Paper elevation={3} spacing={5} sx={{padding:5,height:"fit-content",width:"calc(90vw)"}}>
      
      <Typography sx={{ fontSize: 24 }} >
            Add template
          </Typography> 

        <Grid container spacing={1}>
          <Grid item xs={12} >
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField label="Name" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Client" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Description" variant="standard" margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="Verion" variant="standard" margin="normal" />
              </Grid>              
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Paper variant="outlined" style={{ padding: 15 }}>
            <ListParametersTemplate/>
            </Paper>
          </Grid>

          <Grid item xs={12} >

              <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
              >
                Accept
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>

          </Grid>
        </Grid>
        </Paper>
    </Modal>
  );
};

export default AddTemplate;
