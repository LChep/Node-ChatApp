const express = require('express');
const exp = express();
exp.use(express.static('./Public'));


const http = require ('http').createServer(exp);

http.listen(3000, function(){
    console.log("listening on port 3000")
})

exp.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)

})

//setting up socket.io
const io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('Connection established')
})
