const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect('url') 
mongoose.connect(process.env.DB_STRING);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db