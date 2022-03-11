import React, {useState, useEffect} from 'react'
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
import { Tasks } from './Tasks';
import "./Task.css"
export const Task = ({task}) => {

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#EDE7F6"),
    backgroundColor: 	"#EDE7F6",
    '&:hover': {
      backgroundColor: 	"#EDE7F6",
    },
    width: "100px"
  }));


  const [newTaskName, setNewTaskName] = useState("");

  const updateTaskName = (id) => {
    Axios.put("http://localhost:3001/update",{
    id: id, 
    newTaskName: newTaskName
  })

  }
  const deleteTask = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)

  }


  return (
    <div>
  <Box >
    <Card style={{ backgroundColor: "navy", color: "white" }}>
    <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  padding ="10px"
  spacing={2}>

 

  <Typography variant='h4'> {task.taskName} </Typography> 
  <Typography  variant="body1"> Due: {task.dueDate} </Typography>
  <Typography variant="body1"> Priority: {task.priority} </Typography>
  <Typography variant="body1"> Notes: {task.notes} {task._id.toString()}  </Typography>


  <TextField 
   onChange={(e) => setNewTaskName(e.target.value)} sx={{ input: { color: 'purple' },  background: "white" }}  size ="small" placeholder='New Task Name'> Update Name </TextField> 
  <ColorButton onClick={()=> {
    updateTaskName(task._id)

  }}
   size="small"> Update  </ColorButton>

    </Stack>

    <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  paddingBottom ="20px"
  spacing={2}>
  <ColorButton 
  onClick={()=> {
    deleteTask(task._id)

  }}
  size="small"> Delete </ColorButton>
  </Stack>


    </Card>


    

    </Box>
    </div>
  )
}
