const express = require('express');
const app = express();
const port = 8080;
const http = require('http').Server(app);
const socket = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

    res.sendFile('index.html')
})


const server = http.listen(port,()=>{

    console.log(`ready and listening on ${port}`)
})


