const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Cors
const cors = require("cors");
//db
const mongoose = require("mongoose");
// const domain = ENV["HOSTNAME"] || "localhost";
mongoose.connect(`mongodb://localhost:27017/bank`, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=> {
      console.log("Mongoose Connected");
      mongoose.connection.db.listCollections().toArray(function(err, names){
        if(err) console.log(err)
        console.log(names);
      });
    },
    err => console.log(`Mongoose Error: ${err}`)
);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const corsOptions = {
    origin: "http://localhost:4200"
  };
  
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/auth/', usersRouter);

module.exports = app;
