var express = require('express');
var mongoose = require('mongoose');
var app = express();
var TaskModel = require('./models/Task');
var cors = require('cors');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://adminuser1:Runescape123!@crudtodo.rzepe.mongodb.net/todo?retryWrites=true&w=majority', {
    useNewUrlParser: true, 

})

//string comes from Mongoose DB cloud


app.listen(3001, ()=> {
    console.log('We have connected to the server running on port 3001');

})

// displays all over our to do's on localhost:3001/read


app.get('/read', async (req, res) => {
    TaskModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        
        res.send(result);
       

    })

})

app.put('/insert', async (req, res) => {
    const taskName = req.body.taskName;
    const dueDate = req.body.dueDate;
    const priority = req.body.priority;
    const notes = req.body.notes;

    const task = new TaskModel({
        // creates a food variable and saves it to the collection 

        taskName: taskName,
        dueDate: dueDate,
        priority: priority,
        notes: notes
    })

    try{
        await task.save();
        res.send('Data added to the database...')
   

    } catch(err){
        console.log(err)

    }

})

app.put("/update", async (req, res) => {
        const newTaskName = req.body.newTaskName;
        const id = req.body.id;


    try { 
       await TaskModel.findById(id, (err, updatedTask) => {
        updatedTask.taskName = newTaskName;
        updatedTask.save();
        res.send("updated");
     
       });
   

    } catch(err){
        console.log(err)

    }

})



app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await TaskModel.findByIdAndRemove(id).exec();
    console.log("deleted")
    res.send("lol");


})
