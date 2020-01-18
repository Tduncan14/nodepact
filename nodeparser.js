const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;


app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json()); // parses json


app.use(express.static(__dirname+'/Public'))


app.get('/',function(req,res){

    console.log('never give up')
    res.sendFile('index.html')
        
    
})


app.post('/login',(req,res)=>{

    let username = req.body.user;
    let password = req.body.passq;


    console.log(
        `${username} is the username ${password} this is the password `
        
    )

    //    res.json()
})


app.listen(port,()=>{

    console.log(`listening on ${port}`)
})