const express = require('express');
var http = require('http')
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app)
const mongoose = require('mongoose');

var io = require('socket.io')(server);
const config = require('./config');

//middleware
app.use(express.json());

//Connect to our MongoDB database
const DB = `mongodb+srv://${config.username}:${config.password}@cluster0.mmenq8n.mongodb.net/`

mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => console.log(err));

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('create-game', async({nickname, name, occupancy, maxRounds}) => {
        try{
            
        } catch(err){
            console.log(err);
        }
    });
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port: ${port}`);
});