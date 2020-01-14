const http = require('http');
const fs  = require('fs');



function req(request,response){

    fs.readFile('index1.html',function(err,data){

        response.writeHead(200,{
            'Content-Type':"text/plain"
        })
    
        response.write(data);
        response.end();

    })
 
}



server = http.createServer(req).listen(8080);