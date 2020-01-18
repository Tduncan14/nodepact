const express = require('express');


const app = express();

const port = 8080;



app.get('/',function(req,res){

    res.send('hello world')
})

app.get('/foo', function(req,res){

    res.send('<h1> Foo Page </h1>')
})



app.listen(port,() =>{
    console.log(`listening on ${port}`)
});