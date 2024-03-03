const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require('dotenv').config();
const todoRouter = require('./routes/todoRouter')
const cors = require('cors');
const app = express();
//use express.json() to get data into json format
app.use(express.json());

//port
const PORT = process.env.PORT || 5000;

app.use(cors());
//connect to mongodb
mongoose.connect(process.env.db_link)
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))

app.use('/api',todoRouter);


//adding port and connecting to server
app.listen(PORT, ()=> console.log("server connected !"));
