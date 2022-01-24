const express = require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const app = express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



const dbConfig = require('./db');




  
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const bookingRoute = require('./routes/bookingRoute');

app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);

app.use('/api/bookings', bookingRoute);



const port = process.env.PORT;
app.listen(port,() => {
        console.log(`Server Running at ${port} `);
    }
);


module.exports=app;