
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import styles from '../styles/Layout.module.css'
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import Upload from './upload';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const theme = createTheme();


export default function HomeDialog() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          project: data.get('project'),
         
        });
      };
    
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
      setOpen(true);
    };
  
const handleClose = () => {
      setOpen(false);
    };

return (
    <div className={styles.container} >
    <main className={styles.main}>
    <p className={styles.description} alignItems='left'>
         Upload your data set here
    </p>

    <div className={styles.grid}>
    <a 
            className={styles.card}>
            <h2>From File </h2>
            <p>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</p>
            <Stack spacing={1} alignItems="left">
    <Stack direction="row" spacing={1}>
      <Chip label="csv" color="success" />
      <Chip label="Max Size :1MB" color="error" />
    </Stack>
    </Stack>
    
    <div>
      <Button className={styles.button}  type="submit"variant="outlined" onClick={handleClickOpen}>
       upload
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
       
       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Upload your data set
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{display: 'flex',marginTop:20, justifyContent: 'center'}}>
      
        <Upload/>
     
        </div>
      </Dialog>

    </div>
    </a>
    <a className={styles.card}>
            <h2>From Link </h2>
            <p>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</p>
            <div>
            <Stack spacing={1} alignItems="left">
    <Stack direction="row" spacing={1}>
    <Chip label="csv" color="success" />
    <Chip label="Max Size :1MB" color="error" />
    </Stack>
    </Stack>
    <Button className={styles.button}  type="submit"variant="outlined" onClick={handleClickOpen}>
        set link
    </Button>
   
      
    </div>
 
    </a>
    <a href="http://localhost:3000/setData"
          className={styles.card}>
            <h2>From Database</h2>
            <p>Add your dataset here. Then we will guide through some rich data analysis and bring you through the ML pipelines.</p>
            <Stack spacing={1} alignItems="left">
    <Stack direction="row" spacing={1}>
    <Chip label="csv" color="success" />
    <Chip label="Max Size :1MB" color="error" />
    </Stack>
    </Stack>
    <div>
    <Button className={styles.button}  type="submit"variant="outlined" onClick={handleClickOpen}>
        set db
    </Button>
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
       
       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Upload your data set
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{display: 'flex',marginTop:100, justifyContent: 'center'}}>
        <Box>
        <Upload/>
        </Box>
        </div>
      </Dialog>
      
    </div>
            
    </a>     
        </div>

        <Button href="http://localhost:3000/category" className={styles.button1}  type="submit"variant="outlined" onClick={handleClickOpen}>
        Continue
    </Button>
   
      </main>

    
    </div>
  )
}