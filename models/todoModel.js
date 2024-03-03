//import mongoose to create a schema
const mongoose = require('mongoose');

//creating schema

const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        require:true
    }
})

const todoModel = mongoose.model('todoModel', TodoItemSchema);
module.exports = todoModel;