import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


const theme = createTheme();

export default function db() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      project: data.get('project'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
      <Button variant="contained" component="label">
      Please Enter the link to the file
        <input hidden accept="image/*" multiple type="file" />
      </Button>

 
   
<Button variant="contained" color="success" href="http://localhost:3000/layout">
 FETCH
</Button>
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
            backgroundImage: 'url(/computer.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}