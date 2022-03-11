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
import { Task } from './Task';

export const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        getTasks();

    }, [])



    const getTasks = () => {
        Axios.get('http://localhost:3001/read').then((response) => {
            setTasks(response.data);
           // window.alert(JSON.stringify(response.data));
        })

    }



  return (
    <div>
    <Container>
<Grid container spacing ={2} paddingTop ="50px">

{tasks.map((task)=>{

return(
  <Grid item md={4} xs={12} s={6} > 
    <Task task={task} key={task._id.toString()}/>
  </Grid>

)


  })}



{/** 
{tasks.map((task)=>{

  return(
    <Grid item md={3} xs={12} s={6} > 


          <Card key={task._id.toString()}>
          <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}>


  <Typography color ="red" variant='h3'> {task.taskName} </Typography>
  <Typography  variant="body2"> {task.dueDate} </Typography>
  <Typography variant="body1"> {task.priority} </Typography>
  <Typography variant="body1"> {task.notes} </Typography>



</Stack>

    </Card>
</Grid>

  )
  

    })}

    */}

</Grid>
</Container>
    </div>
  )
}
