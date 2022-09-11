import React from 'react';
import { Button, styled } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit'; 
import {Typography} from '@mui/material';
function App() {

  const BlueButton  = styled(Button) (({theme}) => ({
    backgroundColor: theme.palette.otherColor.main,
  color:"#888",
  margin: 4,
  "&: hover":{
    backgroundColor:"lightblue"
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  },
  }));
  return (
    <div>
  <Button>Primary</Button>
  <Button disabled>Disabled</Button>
  <Button variant ="contained" color= "secondary" size ='small"'>Disabled</Button>
  <Button href="#text-buttons">Link</Button>

  <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button startIcon ={<AcUnitIcon/>} variant="contained" href="#contained-buttons">
  Link
</Button>

<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
<BlueButton>My Button</BlueButton>
<BlueButton>Another Button</BlueButton>
    </div>

   
  );
}

export default App;

