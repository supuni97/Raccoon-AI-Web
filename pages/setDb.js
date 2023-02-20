
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
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const theme = createTheme();


export default function HomeDialog() {
    const [age, setC] = React.useState(''); 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          project: data.get('project'),
         
        });
      };
   
      const handleChange = (event) => {
        setC(event.target.value);
      };
      const bull = (
          <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
          >
            •
          </Box>
        );

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
      <Chip label="My SQL" color="success" />
    
    </Stack>
    </Stack>
    
    <div>
      <Button className={styles.button}  type="submit"variant="outlined" onClick={handleClickOpen}>
     Set Db
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
       
        <Grid item xs={12} sm={10} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 7,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          
           
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Connector" />
            </ListItemButton>
            <div>
      <FormControl sx={{ m: 1, minWidth: 215 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="s"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={21}>B</MenuItem>
          <MenuItem value={22}>C</MenuItem>
        </Select>
      </FormControl>
    </div>
          </ListItem>
        
       
        </List>
      </nav>
     
      <nav aria-label="secondary mailbox folders">
        <List>

        <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Username" />
            </ListItemButton>
            <TextField id="outlined-basic" label="user" variant="outlined" />
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Host" />
            </ListItemButton>
            <TextField id="outlined-basic" label="127.0.0.1" variant="outlined" />
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Post" />
            </ListItemButton>
            <TextField id="outlined-basic" label="3306" variant="outlined" />
          </ListItem>
             
         
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Database" />
            </ListItemButton>
            <TextField id="outlined-basic" label="Database" variant="outlined" />
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Password" />
            </ListItemButton>
            <TextField id="outlined-basic" label="Password" variant="outlined" />
          </ListItem>
        </List>
      </nav>

      <Stack spacing={2} direction="row">

      <Button href="http://localhost:3000/layout" variant="contained">Contained</Button>
    
    </Stack>
    
    </Box>       
              
              
      
          </Box>
        </Grid>
         <Grid
          item
          xs={false}
          sm={2}
          md={7}
          sx={{
            backgroundImage: 'url(/check.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
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