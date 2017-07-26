/*jshint esversion:6*/
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const { mongoURI } = require('./credentials');
const port = process.env.PORT || 8081;

//connect to database
mongoose.connect(mongoURI, {
  useMongoClient: true
});

//middleware imports
const morgan = require('morgan');
const cors = require('cors');

//router imports
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

//wire up middleware
server.use(cors());
server.use(morgan('dev'));

//wire up the routers
server.use(userRouter);
server.use(postRouter);

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
