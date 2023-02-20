import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListSubheader from '@mui/material/ListSubheader';
import Data from './data.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/category.module.css'
import { Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

export default function SignInSide(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      project: data.get('project'),

    });
  };

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container component="main" justify="space-between"
        style={{
          backgroundImage: 'url(/createaccount.svg)',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          marginTop: 10,

        }}>


        <Grid item xs={10} sm={9} md={9} lg={9} component={Paper} elevation={6} square sx={{ boxShadow: 'none' }}>
          <Box
            sx={{

              my: 2,
              mx: 2,
              height: '100vh',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'none'
            }}
          >
            <ListSubheader component="div" id="nested-list-subheader">
              <Stack direction="row" spacing={2}>
                <CloseIcon onClick={handleClose}
                  aria-label="close" />
                <Typography sx={{ color: '#616161', fontSize: '25px' }}>Create a project</Typography>
              </Stack>
              <h1> Upload your data set here</h1>
            </ListSubheader>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

              <div>
                {
                  Data.map(category => {
                    return (
                      <div key={category.id}>
                        <Accordion>
                          <AccordionSummary

                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            expandIcon={<ExpandMoreIcon />}
                            sx={{ backgroundColor: '#eeeeee' }}
                          >

                            <Typography sx={{ color: '#616161', fontSize: '25px' }}>{category.title}</Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                      
                            <div>
                              {
                                Data.map(category => {
                                  return (
                                    <div key={category.id} >
                                      {category.content.map(data => (
                                        <Card sx={{ margin: 10, border: 1, width: 300 }} key={category.id}>

                                          <CardMedia
                                            component="img"
                                            alt="img"
                                            height="100%"
                                            image={data.img_path}

                                          />
                                          <CardContent>
                                            <Typography gutterBottom sx={{ fontSize: '20px', fontWeight: 'bold' }} component="div">
                                              {data.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                              {data.description}
                                            </Typography>
                                          </CardContent>
                                          <CardActions>
                                           <Button className={styles.button}>SELECT</Button> 
                                          </CardActions>
                                        </Card>
                                      ))}
                                    </div>
                                  )
                                })
                              }
                            </div>

                          </AccordionDetails>
                        </Accordion>
                      </div>
                    )
                  })
                }
              </div>

            </Box>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}


