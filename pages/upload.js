
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import styles from '../styles/Layout.module.css'
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';


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
      <Button href='category' className={styles.button}  type="submit"variant="outlined" onClick={handleClickOpen}>
       upload
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
            <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
            Upload your data set here
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>

          </Toolbar>
        </AppBar>
        <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />
       
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 35,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Stack direction="row" alignItems="center" spacing={4}>
            <Button className={styles.button2} variant="contained" component="label">
       Drag and Drop or Select Files(for CSV files less than 1MB)
        <input hidden accept="image/*" multiple type="file" />
      </Button>

 
</Stack>
              
              
              
           
            </Box>
          </Box>
        </Grid>
        <Grid
        item
        xs={false}
        sm={1}
        md={5}
        sx={{
          backgroundImage: 'url(/check.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[400],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      </Grid>
    </ThemeProvider>
    </Dialog>

    </div>
    </a>
   
  
    
      
    </div>
            
   

     
   
      </main>

    
    </div>
  )
}