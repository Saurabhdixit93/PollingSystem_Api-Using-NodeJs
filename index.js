// Require the necessary models
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const app = express();
// const db = require('./config/mongoose');// for local
//for deployment

const connectDB = async () => {
  try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected  successfull : ${conn.connection.host}`);
  }catch(err){
      console.log(`Error In Connecting MongoDB: ${err}`);
      process.exit(1);
  }
};

// url coding 
app.use(express.urlencoded({ extended: true }));
const expresslayouts = require('express-ejs-layouts');// Layouts setups
app.use(expresslayouts);//layouts change
//set view engine
app.set('view engine','ejs');
app.set('views','views');
// Use the cors middleware to allow cross-origin requests
app.use(cors());
app.use('/', require('./routes'));

// //for deployement server
connectDB().then(() => {
  app.listen(PORT, () =>{
      console.log(`Successfull Connected With the Port:${PORT}`);
  });
});

