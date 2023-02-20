import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Automl from './components/Automl';
import RightBar from './components/RightBar';
import TabBar1 from './components/TabBar1';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import TabBar2 from './components/TabBar2';
import TopBar from './components/TopBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#29abe2',
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border:0
}));

export default function AutoGrid() {

return (
<Box sx={{ backgroundColor:"#29abe2",boxShadow:'none'}}>
<Grid container spacing={0}>
<TopBar/>
<Grid sx={{width:'250px',backgroundColor:"#29abe2",paddingLeft:3}}>
<List >
         
            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9",paddingTop:10 }}>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
              </ListItemButton>
            </ListItem>
           
            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <PeopleIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="Visualizations"/>
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <InventoryIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="API" />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <MailIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon >
                <ListItemText primary="Docs" />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <SettingsIcon sx={{ color:"#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <HelpIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>


           <Box  sx={{ flexGrow:1,display: 'flex',paddingTop:'50%'}}>
           <ListItem>
              <ListItemButton sx={{ color: "#d4eef9" }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#d4eef9" }}/>
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </ListItem>
    
           </Box>
        </List>
</Grid>
<Grid xs={7} >
  <Item sx={{boxShadow:'none'}}>
   <Automl/>
  </Item>
  <Item sx={{boxShadow:'none'}}>

  <Grid container sx={{marginLeft:5}}>
     <Grid item xs={6} > 
         <TabBar1/>
     </Grid>
     <Grid item xs={6} >
         <TabBar2/>
     </Grid>
   </Grid>
   </Item>
</Grid>
   <Grid Item xs sx={{paddingTop:2,backgroundColor:'#29abe2',border:0,boxShadow:'none',flexGrow:1}}>
     <RightBar/>
     </Grid>
 </Grid>
</Box>
  );
}
