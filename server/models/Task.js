const mongoose = require('mongoose');
const {Schema} = mongoose; 


const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
    required: true
    },
    dueDate: {
        type: String,
        required: true
        
        },
    priority: { 
        type: String,
            required: true
            },
    notes: { type: String,
                required: true
                }

});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;

