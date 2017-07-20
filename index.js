/*jshint esversion:6*/
const express = require('express');
const server = express();

const port = process.env.PORT || 8081;

//middleware imports
const morgan = require('morgan');
const cors = require('cors');

//wire up middleware
server.use(cors());
server.use(morgan('dev'));

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
