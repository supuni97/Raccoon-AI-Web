import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import styles from '../styles/Layout.module.css'
import Upload from './upload';
import SetLink from './setLink';
import SetDb from './setDb';



export default function Link() {
  
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
  
          
 <Upload></Upload> 
 <SetLink></SetLink>
 <SetDb></SetDb>

   
 </div>
            
           
 <Button href="http://localhost:3000/category" className={styles.button1}  type="submit"variant="outlined" onClick={handleClickOpen}>
                Continue
            </Button>
           
        
              </main>
        
            
            </div>
          )
        }