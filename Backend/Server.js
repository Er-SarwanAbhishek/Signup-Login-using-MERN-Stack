const express = require('express');
const dotenv = require('dotenv')
const dbConnection = require('./utils/db')
const cors = require('cors')
const app = express()
dotenv.config();
dbConnection();

Port = process.env.PORT || 8000;
app.use(cors())
app.listen(Port, ()=>{
    console.log(`Server is running at ${Port}`)
})