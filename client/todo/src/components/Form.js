import React, {useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from  '@mui/material/TextField';
import FormLabel from  '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import  makeStyles  from '@mui/material';
import  FormControlLabel  from '@mui/material';
import "./Form.css";
import { styled } from '@mui/material/styles';
import Axios from "axios"

export const Form = () => {


    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#0277bd"),
        backgroundColor: 	"navy",
        '&:hover': {
          backgroundColor: 	"navy",
        },
        width: "200px"
      }));

    
      const [taskName, setTaskName] = useState("");
      const [dueDate, setDueDate] = useState("");
      const [priority, setPriority] = useState("");
      const [notes, setNotes] = useState("")


   const handleSaveTask = () => {
      console.log(taskName + dueDate + priority + notes);
      Axios.post("http://localhost:3001/insert",
       {taskName: taskName,
       dueDate: dueDate,
       priority: priority,
       notes: notes})

    } 
   

  return (
    <div>
    <Box>


    <Container>

    <Card >
    <Box 
    
    display="flex" 
    justifyContent="center"
    alignItems="center"
 
    padding ="20px"
    >
 
   <Stack
     direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}

   >

   <TextField
        size = "medium"
        label="Task Name"
        onChange={(e) => setTaskName(e.target.value)}
        value ={taskName}
        variant="outlined"
        sx={{
        width: '50ch',

      }}
       
        
     />

            <FormGroup    className = "Form" >
               
               <FormLabel>Due Date</FormLabel>
               <TextField
                 sx={{
        width: '50ch',
      }}
          type="date"
                      variant="outlined"  
                      onChange={(e) => setDueDate(e.target.value)}
        value ={dueDate} 
               />
               </FormGroup>

               <FormGroup    >
            <FormControl >
                <FormLabel>Priority</FormLabel>
          
                  <Select
                      sx={{
        width: '45ch',
      }}    
      size="medium"
             
              
                    variant="outlined"
                    onChange={(e) => setPriority(e.target.value)}
        value ={priority} 
     
                    
                  >
                    <MenuItem value="High"> High </MenuItem>
                    <MenuItem value="Medium"> Medium </MenuItem>
                    <MenuItem value="Low"> Low </MenuItem>
                 
                 
                  </Select>
                </FormControl>

               </FormGroup>
     
  
     <TextField
        size = "medium"
        label="Notes"
        multiline
    rows={6}
        variant="outlined"
        sx={{
        width: '50ch',

      }}
      onChange={(e) => setNotes(e.target.value)}
        value ={notes} 
       
        
     />
      
      
<ColorButton  onClick = {handleSaveTask}>

      Save

</ColorButton>
 
 <ColorButton>
Clear Form
    
</ColorButton>
 

</Stack>

</Box>
</Card>








    </Container> 
    </Box>
    

    </div>
  )
}
