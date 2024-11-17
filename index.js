const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
require("dotenv").config();
const database = require("./config/database");
const routeClient = require("./routes/client/index.route");
const Task = require("./models/task.model");

database.connect();
app.use(bodyParser.json());
routeClient.routeClient(app);


app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})