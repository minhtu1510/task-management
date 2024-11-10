const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config()
const database = require("./config/database");
const Task = require("./models/task.model");
database.connect()

app.get("/tasks",async (req,res)=>{
    const data = await Task.find({
        deleted:false
    })
    res.json(data)
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})