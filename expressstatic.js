const express = require('express');
const app = express();
const port = 8080;



app.use(express.static(__dirname))


app.get('/', (req,res) =>{

    res.sendFile(__dirname + '/index2.html')

})

app.get('/1',(req,res) =>{

    res.sendFile(__dirname + '/index1.html')
})

app.listen(port,() =>{

    console.log('listening to port');
})