const express = require('express');
const todoRouter = express.Router();
const {postData,getData, updateData, deleteData} = require('../controller/todoController');

//imprt todo model

const todoItemModel = require('../models/todoModel');

//creat routes
todoRouter.route('/postData')
.post(postData)

todoRouter.route('/:id')
.put(updateData)
.delete(deleteData)

todoRouter.route('/getData')
.get(getData)



module.exports = todoRouter;